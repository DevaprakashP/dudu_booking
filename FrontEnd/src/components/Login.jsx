import React from "react";
import Button from "./Button";
import Text from "./Text";

export default function Login({ inputDatas, setinputDatas, handleSubmit }) {
  const { email, password } = inputDatas;

  return (
    <>
      <Text
        name={"SIGN IN"}
        customClass={"text-[black] font-bold text-[40px]"}
      />
      <div className=" w-[80%]  p-2 rounded-lg  flex items-center gap-2"></div>
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
        onclick={handleSubmit}
        name="LOGIN"
        customClass={
          "w-[100px] rounded-xl text-black font-semibold hover:bg-[green] hover:text-[white] border-[1px] border-[gray]"
        }
      />
    </>
  );
}
