import React, { useEffect, useState } from "react";
import Text from "../../components/Text";
import Layout from "./Layout";
import { FcDepartment } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { FcNext } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import {
  getHotelById,
  getHotelDataById,
  getHotels,
  getUserById,
  getUserData,
  getUserDataById,
  getUsers,
  removeHotel,
} from "../../store/reduxSlices";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteHotel, deleteUser, EditHotel } from "../../store/User";
import { API, AUTH } from "../../store/Api";
import EditIcon from "../../components/EditIcon";
import DeleteIcon from "../../components/DeleteIcon";

export default function Admin({ authData }) {
  const [page, setpage] = useState("");
  const navigate = useNavigate();
  const [allUsers, setallUsers] = useState();
  const [allHotels, setallHotels] = useState();
  const dispatch = useDispatch();

  const getallHotels = async () => {
    await fetch(API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setallHotels(data);
        dispatch(getHotels(data));
      });
  };

  const getallUsers = async () => {
    await fetch(AUTH, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setallUsers(data.data);
        dispatch(getUsers(data.data));
      });
  };
  const getUserDatas = async () => {
    try {
      await fetch(API + "/userData", {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(getUserData(data));
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallUsers();
    getUserDatas();
    getallHotels();
  }, []);
  const hotels = useSelector((state) => state.counter.hotels);
  console.log("HOTELS", hotels);
  const users = useSelector((state) => state.counter.users);
  console.log("USERS", users);

  const singleHotel = useSelector((state) => state.counter.singleHotel);
  console.log("SINGLEHOTEL", singleHotel);

  const singleUser = useSelector((state) => state.counter.singleUser);
  console.log("SINGLEUSERS", singleUser);

  const userData = useSelector((state) => state.counter.userData);
  console.log("USERSDATA", userData);

  // const singleUserData = useSelector((state) => state.counter.singleUserData);
  // console.log("SINGLE_USERSDATA", singleUserData);

  const singleHotelData = useSelector((state) => state.counter.singleHotelData);
  console.log("SINGLE_HOTELDATA", singleHotelData);
  const [reserved, setreserved] = useState();
  const id = singleHotel?._id;
  const user_id = singleUser?._id;
  // const hotel_id = singleUserData?.hotel_id;
  dispatch(getUserDataById(user_id));
  // dispatch(getHotelDataById(hotel_id));
  const filterUserDatas = (ID) => {
    const reservedSingleData = userData.filter((i) => i.user_id === ID);
    setreserved(reservedSingleData);
  };
  console.log("ReservedHotelData", reserved);
  return (
    <Layout userData={authData}>
      <div className="w-[50%] h-[100%]  bg-[pink] flex-col flex  items-center gap-2 p-2 ">
        <h1>ADMIN</h1>

        <div className="w-[100%] cursor-pointer flex-col flex  items-center gap-2 p-2  ">
          <div
            onClick={() => {
              setpage("users");
            }}
            className="transistion-all text-white hover:text-black hover:bg-[#f1f2f469] w-[80%] h-[80px] flex items-center gap-2 justify-center shadow bg-[#00000064] rounded-md"
          >
            <FcDepartment className="text-xl " />
            <Text name={"Users"} customClass={"text-lg  font-semibold"} />
          </div>
          <div
            onClick={() => {
              setpage("gethotels");
            }}
            className="transistion-all text-white hover:text-black hover:bg-[#f1f2f469] w-[80%] h-[80px] flex items-center gap-2 justify-center shadow bg-[#00000064] rounded-md"
          >
            <FcDepartment className="text-xl " />
            <Text name={"Hotels"} customClass={"text-lg  font-semibold"} />
          </div>
          <div
            onClick={() => {
              navigate("/addhotelspage");
            }}
            className="transistion-all text-white hover:text-black hover:bg-[#f1f2f469] w-[80%] h-[80px] flex items-center gap-2 justify-center shadow bg-[#00000064] rounded-md"
          >
            <FcDepartment className="text-xl " />
            <Text name={"Add Hotels"} customClass={"text-lg  font-semibold"} />
          </div>
          <div
            onClick={() => {
              setpage("ReservedHotels");
            }}
            className="transistion-all text-white hover:text-black hover:bg-[#f1f2f469] w-[80%] h-[80px] flex items-center gap-2 justify-center shadow bg-[#00000064] rounded-md"
          >
            <FcDepartment className="text-xl " />
            <Text
              name={"Reserved Hotels"}
              customClass={"text-lg  font-semibold"}
            />
          </div>
        </div>
      </div>

      <div className="w-[50%] bg-[pink]  h-[100%] overflow-y-scroll">
        {"users" === page ? (
          <div className="w-[100%]  items-center flex-col flex gap-2 p-2 ">
            {users?.map((i) => (
              <>
                <div
                  onClick={() => {
                    dispatch(getUserById(i._id));
                    const ID = i._id;
                    filterUserDatas(ID);
                  }}
                  key={i._id}
                  className="transistion-all text-white hover:text-black hover:bg-[#f1f2f469] p-2 w-[80%] h-[80px] flex items-center gap-2 justify-between shadow bg-[#00000064] rounded-md"
                >
                  <div
                    className="flex-col flex gap-2 w-[90%]"
                    onClick={() => {
                      setpage("usersDetails");
                    }}
                  >
                    <Text
                      name={i.Username}
                      customClass={"text-lg  font-semibold"}
                    />
                    <Text
                      name={i.email}
                      customClass={"text-md  text-[black]"}
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <DeleteIcon
                      onClick={() => {
                        const id = i._id;
                        deleteUser(id);
                      }}
                    />
                    <FcNext
                      onClick={() => {
                        setpage("usersDetails");
                      }}
                    />
                  </div>
                </div>
              </>
            ))}
          </div>
        ) : null}
        {"usersDetails" === page ? (
          <div className="bg-white rounded-md p-2 h-[100%] flex-col flex  items-center  gap-2">
            <div className="flex items-center justify-center p-2 bg-[gray] w-[100%] rounded-md shadow-lg">
              <Text
                customClass={
                  "p-2 bg-[gray] rounded-md font-bold text-lg w-[100%]"
                }
                name={singleUser.Username}
              />
            </div>
            <div className="flex items-center justify-center p-2 bg-[#78816965] w-[100%] h-[100px] rounded-md shadow-lg">
              <Text name={"Email : " + singleUser.email} />
            </div>
            <Text
              name={"Reserved Hotels"}
              customClass={
                "p-2 bg-[gray] rounded-md font-bold text-lg w-[100%]"
              }
            />

            {reserved.map((i) => {
              // const hotel_id = i.hotel_id;
              // dispatch(getHotelDataById(hotel_id));
              return (
                <div className="bg-[#78816965]  flex items-center justify-center p-2  w-[100%] h-[100px] rounded-md shadow-lg">
                  <div className="h-[100%] w-[13%] ">
                    <img
                      src={i?.image}
                      alt=""
                      className="h-[100%] w-[100%] rounded-lg"
                    />
                  </div>
                  <div className=" h-[100%] p-2 pl-10 flex-col flex justify-center w-[70%]">
                    <Text
                      name={i?.title}
                      customClass={"text-lg font-semibold"}
                    />
                    <Text name={i?.place} customClass={"text-[gray]"} />
                  </div>
                  <div className="h-[80%] w-[17%] flex items-center justify-center">
                    <Text
                      name={"₹ " + i?.price}
                      customClass={"text-lg font-semibold text-[green]"}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
        {"gethotels" === page ? (
          <div className="w-[100%]  items-center flex-col flex gap-2 p-2 ">
            {hotels?.map((i) => (
              <div
                onClick={() => {
                  dispatch(getHotelById(i._id));
                  setpage("hotelsDetails");
                }}
                key={i._id}
                className="transistion-all text-white hover:text-black hover:bg-[#f1f2f469] p-2 w-[80%] h-[80px] flex items-center gap-2 justify-between shadow bg-[#00000064] rounded-md"
              >
                <div className="h-[100%] w-[20%] p-2 flex items-center justify-center">
                  <img src={i.image.url} alt="" className="h-[100%] w-[100%]" />
                </div>
                <div className="flex-col flex gap-2 justify-center w-[80%] ">
                  <Text name={i.title} customClass={"text-lg  font-semibold"} />
                  <Text name={i.type} customClass={"text-md  text-[black]"} />
                </div>
                <FcNext />
              </div>
            ))}
          </div>
        ) : null}
        {"hotelsDetails" === page ? (
          <div className="bg-[#00000065] rounded-md p-4 overflow-y-scroll h-[100%] w-[100%] flex-col flex text-justify gap-2">
            <div className="w-[100%] h-[80px] flex items-center p-2 justify-between">
              <Text
                customClass={"font-bold text-lg"}
                name={singleHotel.title}
              />
              <div className="flex items-center gap-6 justify-center">
                <EditIcon
                  onClick={() => {
                    navigate("/editHotels");
                    dispatch(getHotelById(id));
                  }}
                />
                <DeleteIcon
                  onClick={() => {
                    deleteHotel(id);
                  }}
                />
              </div>
            </div>
            <div className="h-[250px] w-[100%] flex items-center justify-around p-2 gap-2">
              <div className="h-[100%] w-[30%] flex-col flex gap-2">
                {/* <img
                  src={singleHotel.image1.url}
                  alt=""
                  className="h-[50%] w-[100%] rounded-md shadow-md"
                />
                <img
                  src={singleHotel.image2.url}
                  alt=""
                  className="h-[50%] w-[100%] rounded-md shadow-md"
                /> */}
              </div>
              <img
                src={singleHotel.image.url}
                alt=""
                className="h-[100%] w-[70%] rounded-md shadow-md "
              />
            </div>
            <Text
              name={"Place : " + singleHotel.place}
              customClass={"p-2 bg-[#0d5cf961] rounded-lg font-semibold"}
            />
            <Text
              name={"Type : " + singleHotel.type}
              customClass={"p-2 bg-[#ef0d0d85] rounded-lg font-semibold"}
            />
            <Text
              name={"Price : " + singleHotel.price}
              customClass={"p-2 bg-[#efe00d85] rounded-lg font-semibold"}
            />
            <Text
              name={"Quantity : " + singleHotel.quantity}
              customClass={"p-2 bg-[#36ef0d85] rounded-lg font-semibold"}
            />
            <Text
              name={"Timing : " + singleHotel.timing}
              customClass={"p-2 bg-[#0defc985] rounded-lg font-semibold"}
            />
            <Text
              name={"Address : " + singleHotel.address}
              customClass={"p-2 bg-[#0d5cef85] rounded-lg font-semibold"}
            />
            <Text
              name={"Description : " + singleHotel.description}
              customClass={"p-2 bg-[#950def85] rounded-lg font-semibold"}
            />
            <Text
              name={"Reviews : " + singleHotel.reviews}
              customClass={"p-2 bg-[#ef0dbe85] rounded-lg  font-semibold"}
            />
            <Text
              name={"Feedback : " + singleHotel.feedback}
              customClass={"p-2 bg-[#15010785] rounded-lg  font-semibold"}
            />
            <Text
              name={"Rating : " + singleHotel.rating}
              customClass={"p-2 bg-[#306a3985] rounded-lg  font-semibold"}
            />
          </div>
        ) : null}
        {"ReservedHotels" === page ? (
          <div className="w-[100%]  items-center flex-col flex gap-2 p-2 ">
            {userData?.map((i) => (
              <div
                onClick={() => {
                  dispatch(getUserDataById(i._id));
                }}
                key={i._id}
                className="transistion-all text-white hover:text-black hover:bg-[#f1f2f469] p-2 w-[80%] h-[80px] flex items-center gap-2 justify-between shadow bg-[#00000064] rounded-md"
              >
                <div className="flex-col flex gap-2">
                  <Text
                    name={i.hotel_name}
                    customClass={"text-lg  font-semibold"}
                  />
                  <Text
                    name={i.user_name}
                    customClass={"text-md  text-[black]"}
                  />
                </div>
                <FcNext />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </Layout>
  );
}
