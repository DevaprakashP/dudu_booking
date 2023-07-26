import React from "react";
import HotelLayout from "../layout/HotelLayout";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getHotelById } from "../store/reduxSlices";
import { FilteredHotels } from "../utils/Filter";
import Layout from "../layout/Layout";

export default function PlacePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state.data;
  // const singleHotel = useSelector((i) => i.counter.singleHotel);
  // console.log("SINGLEHOTEL", singleHotel);
  return (
    <Layout userData={userData}>
      <div className="w-[100%]  flex justify-center ">
        <div className="w-[80%] flex-col flex gap-2">
          {FilteredHotels(location.state.title).map((hotel) => {
            return (
              <HotelLayout
                src={hotel.image.url}
                onclick={async () => {
                  await dispatch(getHotelById(hotel._id));

                  navigate("/hotelPage", {
                    state: { data: userData },
                  });
                }}
                text1={hotel.title}
                text2={hotel.address}
                text3={hotel.feedback}
                text4={hotel.reviews}
                see="See availability    >"
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
