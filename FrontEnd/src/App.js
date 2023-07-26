import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";
import Layout from "./layout/Layout";
import { EXPLORE_IND } from "./Arrays/Array";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getHotelById, getHotels } from "./store/reduxSlices";
import { API, AUTH } from "./store/Api";
import FilterBar from "./components/FilterBar";

export default function App({ userData }) {
  const navigate = useNavigate();
  const hotes = useSelector((state) => state.counter.hotels);
  const dispatch = useDispatch();
  console.log("hotels", hotes);
  const [filters, setfilters] = useState([]);
  // const [allHotels, setallHotels] = useState();
  // const getallHotels = async () => {
  //   await fetch(API, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setallHotels(data);
  //       dispatch(getHotels(data));
  //     });
  // };
  // useEffect(() => {
  //   getallHotels();
  // }, []);

  const onPlaceFilter = (place) => {
    const filteredDatas = hotes.filter((item) => {
      if (item.place.toLowerCase().includes(place.toLowerCase())) {
        return item;
      }
    });
    setfilters(filteredDatas);
  };
  return (
    <Layout userData={userData}>
      <FilterBar onPlaceFilter={onPlaceFilter} />
      <CardContainer
        customClass={"h-[300px]"}
        customClass2={" h-[220px] items-center"}
        text1={"Explore India"}
        text2={"These popular destinations have a lot to offer"}
      >
        {EXPLORE_IND.map((i) => {
          return (
            <Card
              onclick={() => {
                navigate("/placePage", {
                  state: { title: i.title, data: userData },
                });
              }}
              src={i.img}
              text1={i.title}
              text2={i.properties}
            />
          );
        })}
      </CardContainer>

      <div className="flex gap-4 w-[100%] grid grid-cols-4 grid-gap-4 p-2">
        {filters.map((i) => (
          <Card
            onclick={async () => {
              navigate("/hotelPage", {
                state: { data: userData },
              });
              await dispatch(getHotelById(i._id));
            }}
            key={i._id}
            customClass={"shadow rounded-md bg-[lavender] h-[320px] w-[275px]"}
            src={i.image.url}
            text1={i.title}
            text2={i.price}
          />
        ))}
      </div>
    </Layout>
  );
}
