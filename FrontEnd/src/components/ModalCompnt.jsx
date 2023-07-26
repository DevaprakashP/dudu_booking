import React from "react";
import { Modal } from "@mui/material";
import { Toaster } from "react-hot-toast";
import CloseIcon from "../assets/CloseIcon";

export default function ModalCompnt({ start, children, close }) {
  return (
    <>
      <Modal
        className=" h-[100vh] w-[100%] flex items-center justify-center"
        open={start}
      >
        <div className="relative h-[80%] w-[70%] bg-white rounded-xl  flex">
          <CloseIcon
            onclick={close}
            customClass={"absolute right-2 top-2 text-white "}
          />
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </div>
      </Modal>
    </>
  );
}
