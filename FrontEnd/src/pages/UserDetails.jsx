import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import App from "../App";
import { AUTH } from "../store/Api";
import Admin from "./admin/Admin";

export default function UserDetails() {
  const [userData, setuserData] = useState("");
  const [admin, setadmin] = useState(false);
  const userInfo = async () => {
    await fetch(AUTH + "/userData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");

        setuserData(data.data);

        if (data.data.userType === "Admin") {
          setadmin(true);
        }
        if (data.data === "token expired") {
          toast.error("token expired login again");
          window.localStorage.clear();
          window.location.href = "./";
        }
      });
  };

  useEffect(() => {
    userInfo();
  }, []);

  return admin ? <Admin authData={userData} /> : <App userData={userData} />;
}
