import React, { useState } from "react";
import toast from "react-hot-toast";
import { createUser, loginUser } from "../store/User";
import { classNames } from "../utils/ClassNames";
import Button from "./Button";
import Login from "./Login";
import ModalCompnt from "./ModalCompnt";
import SignUp from "./SignUp";
import Text from "./Text";

export default function TopBar({ userData, customClass }) {
  const [changeAuth, setchangeAuth] = useState(false);

  const [open, setopen] = useState(false);
  const [inputDatas, setinputDatas] = useState({
    Username: "",
    email: "",
    password: "",
    userType: "",
    secretKey: "",
  });
  const { Username, email, password, userType, secretKey } = inputDatas;
  const logout = () => {
    window.localStorage.clear();
    window.location.href = "./";
    console.log(userData);
  };
  const signupHandler = () => {
    if (userType === "admin" && secretKey !== "Deva@@2001") {
      toast.error("Invalid SecretKey");
    } else {
      if (
        email !== "" &&
        password !== "" &&
        Username !== "" &&
        userType !== ""
      ) {
        console.log(inputDatas);
        setinputDatas({
          Username: "",
          email: "",
          password: "",
          userType: "",
        });
        createUser(Username, email, password, userType);
      } else {
        toast.error("All fields are mandatory!");
      }
    }
  };

  const handleSubmit = () => {
    if (email !== "" && password !== "") {
      console.log(inputDatas);
      setinputDatas({
        email: "",
        password: "",
      });
      loginUser(email, password);
    } else {
      toast.error("All fields are mandatory!");
    }
  };
  return (
    <div
      className={classNames(
        customClass ? customClass : " h-[300px] ",
        "w-[100%] bg-[#e6e6fa] flex-col flex items-center gap-2"
      )}
    >
      <div className=" w-[81%] h-[100%] flex-col flex items-center gap-10">
        <div className="w-[98%] h-[80px] flex items-center justify-between p-2">
          <Text
            name={"DuDu Booking"}
            customClass={"text-[black] font-bold text-[40px]"}
          />
          <div className=" h-[100%] flex items-center justify-between gap-2">
            <ModalCompnt
              start={open}
              close={() => {
                setopen(false);
              }}
            >
              <div className="w-[50%] h-[100%] flex-col flex items-center justify-center gap-2">
                {changeAuth ? (
                  <SignUp
                    inputDatas={inputDatas}
                    setinputDatas={setinputDatas}
                    signupHandler={signupHandler}
                  />
                ) : (
                  <Login
                    inputDatas={inputDatas}
                    setinputDatas={setinputDatas}
                    handleSubmit={handleSubmit}
                  />
                )}
              </div>

              <div className="realtive w-[50%] h-[100%] flex-col flex items-center justify-center bg-[#003580] gap-4 rounded-r-xl">
                <Text
                  name={"Hello, Friend!"}
                  customClass={"text-[white] font-bold text-[40px]"}
                />
                <Text
                  name={`Enter your details and start journey with us`}
                  customClass={"text-[white] text-[20px]"}
                />
                <Button
                  onclick={() => {
                    setchangeAuth((p) => !p);
                  }}
                  name={changeAuth ? "Login" : "SIGN UP"}
                  customClass={
                    "w-[100px] rounded-xl text-white font-semibold hover:bg-[white] hover:text-[black] border-[1px] border-[gray]"
                  }
                />
              </div>
            </ModalCompnt>
            <Button
              name={userData?.Username ? userData?.Username : "Sign in"}
              onclick={() => {
                userData ? setopen(false) : setopen(true);
              }}
              customClass={"h-[60%] bg-[white] rounded-md px-7 "}
            />
            {userData ? (
              <Button
                name={"Logout"}
                onclick={logout}
                customClass={"h-[60%] bg-[gray] rounded-md px-5 "}
              />
            ) : null}
          </div>
        </div>
        <div className="w-[98%] h-[80px] flex flex-col gap-2 justify-center p-2 ">
          <Text name={"Find your next stay"} customClass={"font-bold"} />
          <Text name={"Search low prices on hotels, homes and much more..."} />
        </div>
        {/* <FilterBar/> */}
      </div>
    </div>
  );
}
