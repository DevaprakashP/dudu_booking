import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Text from "../components/Text";
import Layout from "../layout/Layout";
import { getHotelById } from "../store/reduxSlices";
import { slotBooking } from "../store/User";

export default function UserBooking() {
  const navigation = useNavigate();
  const location = useLocation();
  const userData = location.state.data;
  const singleHotel = location.state.singleHotel;
  const [inputDatas, setinputDatas] = useState({
    address: "",
    city: "",
    zipcode: "",
    country: "",
    mobile: "",
  });
  const dispatch = useDispatch();
  const { address, city, zipcode, country, mobile } = inputDatas;
  const user_id = userData?._id;
  const user_name = userData?.Username;
  const handleSubmit = (hotel_id, hotel_name, image, title, place, price) => {
    if (
      address !== "" &&
      city !== "" &&
      zipcode !== "" &&
      country !== "" &&
      mobile !== ""
    ) {
      navigation("/paymentPage", {
        state: {
          address: address,
          city: city,
          zipcode: zipcode,
          country: country,
          mobile: mobile,
          hotel_id: hotel_id,
          user_id: user_id,
          hotel_name: hotel_name,
          user_name: user_name,
          image: image,
          title: title,
          place: place,
          price: price,
          singleHotel: singleHotel,
        },
      });

      setinputDatas({
        address: "",
        city: "",
        zipcode: "",
        country: "",
        mobile: "",
      });
    } else {
      toast.error("All fields are mandatory!");
    }
  };

  return (
    <Layout userData={userData}>
      <div className="w-[100%] h-[750px] flex-col flex">
        <div className="gap-3 w-[100%] p-3 flex-col flex items-center">
          <div className="w-[100%] flex bg-[#e6e6fa] gap-3 p-3">
            <div className="w-[30%] gap-2 bg-[#e6e6fa]">
              <div className="h-[50%] flex-col flex pt-2 pl-2">
                <Text
                  name={singleHotel.title}
                  customClass={"font-bold text-[black] text-[15px]"}
                />
                <Text
                  name={singleHotel.place}
                  customClass={"font-bold text-[black] text-[15px]"}
                />
                <Text
                  name={singleHotel.price}
                  customClass={"font-bold text-[black] text-[15px]"}
                />
                <Text
                  name={singleHotel.type}
                  customClass={"font-bold text-[black] text-[15px]"}
                />
                <Text
                  name={"Hotel Name"}
                  customClass={"font-bold text-[black] text-[15px]"}
                />
              </div>
              <div className="w-[50%] ">dhdv</div>
            </div>
            <div className="w-[70%] flex-col flex ">
              <Text
                name={"Enter your address"}
                customClass={"text-[black] font-bold text-[20px]"}
              />

              <div className="gap-1 p-3">
                <Text
                  name={"Address"}
                  customClass={"text-[black] font-bold text-[15px]"}
                />
                <input
                  className="border-[1px] w-[80%] h-[80%] p-1 rounded-lg"
                  type="text"
                  value={address}
                  onChange={(e) => {
                    setinputDatas({ ...inputDatas, address: e.target.value });
                  }}
                />
              </div>

              <div className="gap-1 p-3">
                <Text
                  name={"City"}
                  customClass={"text-[black] font-bold text-[15px]"}
                />
                <input
                  className="border-[1px] w-[80%] h-[80%] p-1 rounded-lg"
                  type="text"
                  value={city}
                  onChange={(e) => {
                    setinputDatas({ ...inputDatas, city: e.target.value });
                  }}
                />
              </div>

              <div className="gap-1 p-3">
                <Text
                  name={"Zip/Post Code"}
                  customClass={"text-[black] font-bold text-[15px]"}
                />
                <input
                  className={"border-[1px] w-[80%] h-[80%] p-1 rounded-lg"}
                  type="text"
                  value={zipcode}
                  onChange={(e) => {
                    setinputDatas({ ...inputDatas, zipcode: e.target.value });
                  }}
                />
              </div>

              <div className="gap-1 p-3">
                <Text
                  name={"Country/region"}
                  customClass={"text-[black] font-bold text-[15px] "}
                />
                <input
                  className={"border-[1px] w-[80%] h-[80%] p-1 rounded-lg"}
                  type="text"
                  value={country}
                  onChange={(e) => {
                    setinputDatas({ ...inputDatas, country: e.target.value });
                  }}
                />
              </div>

              <div className="gap-1 p-3">
                <Text
                  name={"Mobile"}
                  customClass={"text-[black] font-bold text-[15px]"}
                />
                <input
                  className={"border-[1px] w-[80%] h-[80%] p-1 rounded-lg"}
                  type="text"
                  value={mobile}
                  onChange={(e) => {
                    setinputDatas({ ...inputDatas, mobile: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-[100%] p-5 bg-[#e6e6fa]">
            <div>
              <Text
                name={"Review house rules"}
                customClass={"font-bold text-[black] text-lg"}
              />
              <Text
                name={
                  "Your host would like you to agree to the following house rules:"
                }
                customClass={"text-[#757575] text-md"}
              />
              <ul className="list-disc pl-[30px] text-[#757575] ">
                <li>No Smoking</li>
                <li>No Parties/Events</li>
                <li>Quiet hours are between 22.00 and 7.00</li>
                <li>Pets are not allowed</li>
              </ul>
            </div>
            <Text
              name={
                "By Clicking the button,You are agreeing to these house rules."
              }
              customClass={"font-semibold text-[black] text-sm"}
            />
          </div>
          <Button
            onclick={() => {
              const image = singleHotel.image.url;
              const title = singleHotel.title;
              const place = singleHotel.place;
              const price = singleHotel.price;
              const hotel_id = singleHotel._id;
              const hotel_name = singleHotel.title;
              handleSubmit(hotel_id, hotel_name, image, title, place, price);
            }}
            name={"Reserve"}
            customClass={
              "rounded-md border-[2px] border-[black] hover:bg-[#00ff00] hover:text-[white] hover:font-bold"
            }
          />
        </div>
      </div>
    </Layout>
  );
}
