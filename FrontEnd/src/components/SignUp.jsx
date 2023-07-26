import React from "react";
import Button from "./Button";
import Text from "./Text";

export default function SignUp({ inputDatas, setinputDatas, signupHandler }) {
  const { Username, email, password, userType, secretKey } = inputDatas;
  return (
    <>
      <Text
        name={"Create Account"}
        customClass={"text-[black] font-bold text-[40px]"}
      />
      <div className=" w-[80%]  p-2 rounded-lg  flex items-center gap-2">
        Register as
        <input
          className="border-[1px]   p-2 rounded-lg"
          name="userType"
          type="radio"
          value="user"
          onChange={(e) => {
            setinputDatas({ ...inputDatas, userType: e.target.value });
          }}
        />
        User
        <input
          className="border-[1px]   p-2 rounded-lg"
          name="userType"
          type="radio"
          value="Admin"
          onChange={(e) => {
            setinputDatas({ ...inputDatas, userType: e.target.value });
          }}
        />
        Admin
      </div>
      {userType === "Admin" ? (
        <input
          className="border-[1px] w-[80%]  p-2 rounded-lg"
          type="text"
          value={secretKey}
          placeholder="SecretKey"
          onChange={(e) => {
            setinputDatas({ ...inputDatas, secretKey: e.target.value });
          }}
        />
      ) : null}
      <input
        className="border-[1px] w-[80%]  p-2 rounded-lg"
        type="text"
        value={Username}
        placeholder="Username"
        onChange={(e) => {
          setinputDatas({ ...inputDatas, Username: e.target.value });
        }}
      />
      <input
        className="border-[1px] w-[80%]  p-2 rounded-lg"
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => {
          setinputDatas({ ...inputDatas, email: e.target.value });
        }}
      />
      <input
        className="border-[1px] w-[80%]  p-2 rounded-lg"
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => {
          setinputDatas({ ...inputDatas, password: e.target.value });
        }}
      />
      <Button
        onclick={() => {
          signupHandler();
        }}
        name="SIGN UP"
        customClass={
          "w-[100px] rounded-xl text-black font-semibold hover:bg-[green] hover:text-[white] border-[1px] border-[gray]"
        }
      />
    </>
  );
}
