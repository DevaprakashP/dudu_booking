import axios from "axios";
import React, { useState } from "react";
import useRazorpay from "react-razorpay";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { API } from "../store/Api";
import { slotBooking } from "../store/User";

export default function PaymentPage() {
  const location = useLocation();
  const {
    address,
    city,
    zipcode,
    country,
    mobile,
    hotel_id,
    user_id,
    hotel_name,
    user_name,
    image,
    title,
    place,
    price,
    singleHotel,
  } = location.state;
  const [Razorpay] = useRazorpay();
  const [book, setBook] = useState({
    name: singleHotel.title,
    author: singleHotel.type,
    img: singleHotel.image.url,
    price: 1234,
  });
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_j2APEmG1W3vzdr",
      amount: data.amount,
      currency: data.currency,
      name: book.name,
      description: "Test Transaction",
      image: book.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = API + "/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = API + "/orders";
      const { data } = await axios.post(orderUrl, { amount: book.price });
      console.log(data);
      initPayment(data.data);
      slotBooking(
        address,
        city,
        zipcode,
        country,
        mobile,
        hotel_id,
        user_id,
        hotel_name,
        user_name,
        image,
        title,
        place,
        price
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-[100vh] w-[100%] flex items-center justify-center">
      <div className="w-[250px] rounded-md bg-[gray] shadow-md">
        <img
          src={book.img}
          alt="book_img"
          className="w-[100%] h-[300px] rounded-md "
        />
        <p className="text-[20px] font-bold m-[5px] align-center">
          {book.name}
        </p>
        <p className="text-[16px] font-[500] m-[5px] align-center">
          By {book.author}
        </p>
        <p className="text-[#21a700]">
          Price : <span>&#x20B9; {book.price}</span>
        </p>
        <button
          onClick={handlePayment}
          className="w-[100%] h-[50px] text-[12px] font-bold cursor-pointer bg-[#f4d072] mt-[10px]"
        >
          buy now
        </button>
      </div>
    </div>
  );
}
