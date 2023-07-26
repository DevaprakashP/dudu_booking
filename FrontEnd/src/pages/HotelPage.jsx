import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import NavButton from "../components/NavButton";
import Text from "../components/Text";
import Layout from "../layout/Layout";

export default function HotelPage() {
  const singleHotel = useSelector((i) => i.counter.singleHotel);
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state.data;
  console.log("SINGLEHOTEL", singleHotel);

  return (
    <Layout userData={userData}>
      <div className="w-[100%]  flex flex-col items-center gap-2 justify-center pt-5 ">
        <div className="w-[100%] flex justify-center bg-[red] gap-2">
          <div className="w-[100%] h-[650px] flex gap-4">
            <div className="w-[25%] flex-col flex bg-[yellow]">
              <NavButton name1="We Price Match " />
            </div>
            <div className="w-[75%] flex-col flex bg-[pink] gap-2">
              <div className="w-[100%]  p-2 flex items-center justify-between">
                <div className="flex-col flex  gap-2">
                  <Text
                    name={singleHotel?.title}
                    customClass={"font-bold text-xl"}
                  />
                  <Text
                    name={singleHotel?.address}
                    customClass={" text-xs text-[gray]"}
                  />
                </div>
                <div className="  flex justify-center items-center gap-1">
                  <NavButton
                    name1={"Reserve"}
                    onClick={() => {
                      userData
                        ? navigate("/userbooking", {
                            state: { data: userData, singleHotel: singleHotel },
                          })
                        : toast.error("Please Login yourself!");
                    }}
                  />
                </div>
              </div>
              <div className="bg-[gray] h-[500px] w-[100%] flex flex-col gap-2 ">
                <div className=" h-[350px] w-[100%] flex  gap-2 ">
                  <div className="bg-[gray] h-[100%] w-[35%] flex flex-col gap-2">
                    <div className=" h-[50%] w-[100%] flex items-center justify-center gap-2">
                      {/* <img
                        src={singleHotel.image1.url}
                        alt=""
                        className="h-[100%] w-[100%]"
                      /> */}
                    </div>
                    <div className=" h-[50%] w-[100%] flex items-center justify-center gap-2">
                      {/* <img
                        src={singleHotel.image2.url}
                        alt=""
                        className="h-[100%] w-[100%]"
                      /> */}
                    </div>
                  </div>
                  <div className=" h-[100%] w-[65%] flex items-center justify-center gap-2">
                    <img
                      src={singleHotel?.image.url}
                      alt=""
                      className="h-[100%] w-[100%]"
                    />
                  </div>
                </div>
                <div className="bg-[white] h-[30%] w-[100%] flex items-center justify-center gap-2">
                  images
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box-content h-32 w-32 p-4 border-4 ...">ibldk.v</div>
        <div className="w-[100%] p-3 text-justify">
          {singleHotel?.description}
        </div>
      </div>
    </Layout>
  );
}
