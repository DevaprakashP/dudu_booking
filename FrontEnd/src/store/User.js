import toast from "react-hot-toast";
import { API, AUTH } from "./Api";

export const createUser = async (Username, email, password, userType) => {
  try {
    await fetch(AUTH + "/register", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        Username,
        email,
        password,
        userType,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("UserRegistered", data);
      });
    toast.success("Registered Successfully");
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (email, password) => {
  try {
    await fetch(AUTH + "/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("UserRegistered", data);
        if (data.status === "ok") {
          toast.success("Successfully Logged In");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "/userDetails";
        }
      });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id) => {
  try {
    await fetch(AUTH + `/${id}`, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "deleted") {
          toast.success("Deleted successfully");
        }
      });
  } catch (error) {
    console.log(error);
  }
};
//booking
export const slotBooking = async (
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
) => {
  try {
    await fetch(API + "/userData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("RESERVED", data.data);
        if (data.status === "reserved") {
          toast.success("Reserved Successfully");
        }
      });
  } catch (error) {
    console.log(error);
  }
};

//deleteHotels
export const deleteHotel = async (id) => {
  try {
    await fetch(API + `/${id}`, {
      method: "DELETE",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("RESPONSE", data);
        if (data.status === "deleted") {
          toast.success("Deleted Successfully");
        }
      });
  } catch (error) {
    console.log(error);
  }
};

export const EditHotel = async (
  title,
  place,
  type,
  price,
  quantity,
  timing,
  address,
  description,
  reviews,
  feedback,
  rating,
  hotelImg,
  hotelImg1,
  hotelImg2,
  id
) => {
  try {
    await fetch(API + `/${id}`, {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        title,
        place,
        type,
        price,
        quantity,
        timing,
        address,
        description,
        reviews,
        feedback,
        rating,
        image: hotelImg,
        image1: hotelImg1,
        image2: hotelImg2,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("RESPONSE", data);
        if (data.status === "Updated") {
          toast.success("Edited Successfully");
        }
        window.location.href = "/admin";
      });
  } catch (error) {
    console.log(error);
  }
};
