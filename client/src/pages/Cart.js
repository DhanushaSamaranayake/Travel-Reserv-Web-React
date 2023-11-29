import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { getAuth } from 'firebase/auth';
import { getDatabase, push, ref ,set } from "firebase/database";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [payNow, setPayNow] = useState(false);
  const [totalAmt, setTotalAmt] = useState("");

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const region = document.getElementById('region').value;
    const zipcode = document.getElementById('zipcode').value;
    const phoneNumber = document.getElementById('number').value;

    if (!firstName || !lastName || !address || !region || !zipcode || !phoneNumber) {
      toast.error("Please fill in all required fields.");
    } else{

    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout");
    }
  }
  };

  const payment = async (token) => {
    const auth = getAuth();

    if (auth.currentUser) {
      const currentUserUid = auth.currentUser.uid;

      const database = getDatabase();
      const cartRef = ref(database, `carts/${currentUserUid}`);
      const newCartRef = push(cartRef);
  
      const cartData = {
        status: 'paid',
        date: new Date().toISOString(),
        items: productData,
        totalAmount: totalAmt,
        user:{
          email:userInfo ? userInfo.email : '',
          firstName: document.getElementById('firstName').value || '',
          lastName: document.getElementById('lastName').value || '',
          address: document.getElementById('address').value || '',
          region: document.getElementById('region').value || '',
          zipcode: document.getElementById('zipcode').value || '',
          phoneNumber: document.getElementById('number').value || '',
        }
      };
  
      set(newCartRef, cartData)
        .then(() => {
          toast.success("Data successfully added to the database");
        })
        .catch((error) => {
          console.error("Error adding data to the database: ", error);
          toast.error("Error adding data to the database");
        });
    } else {
      toast.error("Please sign in before adding data to the database");
    }
   
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmt * 100,
      token: token,
    });
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      {productData.length > 0 ? (
        <div className="max-w-screen-xl mx-auto py-20 flex">
          <CartItem />
          <div className="w-1/3 bg-[#fafafa] py-6 px-4">
            <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium ">cart totals</h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal{" "}
                <span className="font-titleFont font-bold text-lg">
                  ${totalAmt}
                </span>
              </p>
              {/* Additional user information fields */}
              <div className="flex flex-col gap-4">
                <label className="text-base" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border rounded-sm px-2 py-1"
                  value={userInfo ? userInfo.email : ''}
                  readOnly
                />
              </div>
              <div className="flex gap-4">
                
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className="border rounded-sm px-2 py-1 w-1/2"
                    required
                  />
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    className="border rounded-sm px-2 py-1 w-1/2"
                    required

                  />
                </div>
                <div className="flex flex-col gap-4">
                <label className="text-base" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="border rounded-sm px-2 py-1"
                  required
                  
                />
              </div>
              <div className="flex gap-4">
                
                  <input
                    type="text"
                    id="region"
                    placeholder="Region"
                    className="border rounded-sm px-2 py-1 w-1/2"
                    required

                  />
                  <input
                    type="text"
                    id="zipcode"
                    placeholder="Zip Code"
                    className="border rounded-sm px-2 py-1 w-1/2"
                    required

                  />
                </div>
                <div className="flex flex-col gap-4">
                <label className="text-base" htmlFor="number">
                  Phone Number
                </label>
                <input
                  type="number"
                  id="number"
                  className="border rounded-sm px-2 py-1"
                  required
                  
                />
              </div>
              {/* Similar code for other user information fields */}
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold">${totalAmt}</span>
            </p>
           
            <button
              onClick={handleCheckout}
              className="rounded-2xl w-full mt-6 border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            >
              proceed to checkout
            </button>
            
            {payNow && (
  <div className="w-full mt-6 flex items-center justify-center">
    <StripeCheckout
      stripeKey="pk_test_51OCQqgHV6z2Q1r0aFcCOZRdWY622SMNFMEfyGagnNRiUGYv89PZiMifSoUn06UgGvdRF41cv88TnSc9S81INtGce00tEODA375"
      name="Bazar Online Shopping"
      amount={totalAmt * 100}
      label="Pay to Bazar"
      description={`Your Payment amount is $${totalAmt}`}
      token={payment}
      email={userInfo.email}
    >
      {/* Customize the button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
        Pay Now
      </button>
    </StripeCheckout>
  </div>
)}
          </div>
        </div>
      ) : (
        <div className="max-w-screen-xl mx-auto py-10 flex flex-col items-center gap-2 justify-center">
          <p className="text-xl text-orange-600 font-titleFont font-semibold">
            Your Cart is Empty. Please go back to Shopping and add products to
            Cart.
          </p>
          <Link to="/">
            <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">
              <span>
                <HiOutlineArrowLeft />
              </span>
              go shopping
            </button>
          </Link>
        </div>
      )}
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
