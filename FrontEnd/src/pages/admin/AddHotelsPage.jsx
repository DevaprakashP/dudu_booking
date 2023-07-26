import React, { useState } from "react";
import toast from "react-hot-toast";
import Button from "../../components/Button";
import { API } from "../../store/Api";
import { feedBack, pLace, timinG, tyPe } from "./Array";
import Layout from "./Layout";

export default function AddHotelsPage() {
  const [hotelImg, sethotelImg] = useState("");
  const [hotelImg1, sethotelImg1] = useState("");
  const [hotelImg2, sethotelImg2] = useState("");

  const [inputDatas, setinputDatas] = useState({
    title: "",
    place: "",
    type: "",
    price: "",
    quantity: "",
    timing: "",
    address: "",
    description: "",
    reviews: "",
    feedback: "",
    rating: "",
  });
  const {
    title,
    place,
    type,
    price,
    quantity,
    timing,
    address,
    description,
    reviews,
    feedback,
    rating,
  } = inputDatas;

  const handleSubmit = async () => {
    if (
      title !== "" &&
      place !== "" &&
      type !== "" &&
      price !== "" &&
      quantity !== "" &&
      timing !== "" &&
      address !== "" &&
      description !== "" &&
      reviews !== "" &&
      feedback !== "" &&
      rating !== "" &&
      hotelImg !== "" &&
      hotelImg1 !== "" &&
      hotelImg2 !== ""
    ) {
      await fetch(API, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          title,
          place,
          type,
          price,
          quantity,
          timing,
          address,
          description,
          reviews,
          feedback,
          rating,
          image: hotelImg,
          image1: hotelImg1,
          image2: hotelImg2,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("RESPONSE", data);
        });

      setinputDatas({
        title: "",
        place: "",
        type: "",
        price: "",
        quantity: "",
        timing: "",
        address: "",
        description: "",
        reviews: "",
        feedback: "",
        rating: "",
      });
      sethotelImg("");
      sethotelImg1("");
      sethotelImg2("");

      toast.success("Successfully added");
    } else {
      toast.error("All fields are mandatory!");
    }
  };

  const handleHotelsImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };
  const handleHotelsImageUpload1 = (e) => {
    const file = e.target.files[0];
    TransformFile1(file);
  };
  const handleHotelsImageUpload2 = (e) => {
    const file = e.target.files[0];
    TransformFile2(file);
  };
  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        sethotelImg(reader.result);
      };
    } else {
      sethotelImg("");
    }
  };
  const TransformFile1 = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        sethotelImg1(reader.result);
      };
    } else {
      sethotelImg1("");
    }
  };
  const TransformFile2 = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        sethotelImg2(reader.result);
      };
    } else {
      sethotelImg2("");
    }
  };

  return (
    <Layout>
      <div className="w-[50%]  bg-[pink] flex-col flex  items-center gap-2 p-2 ">
        <div className="text-center ">hotel info </div>
        <div className="w-[100%]  flex-col flex  items-center gap-2 p-2 overflow-y-scroll">
          <input
            className="border-[1px] w-[80%] p-2 rounded-lg"
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => {
              setinputDatas({ ...inputDatas, title: e.target.value });
            }}
          />
          <select
            className="border-[1px] w-[80%] p-2 rounded-lg"
            type="text"
            value={place}
            placeholder="Place"
            onChange={(e) => {
              setinputDatas({ ...inputDatas, place: e.target.value });
            }}
          >
            {pLace.map((i) => (
              <option key={i.id} value={i.value}>
                {i.name}
              </option>
            ))}
          </select>
          <select
            className="border-[1px] w-[80%] p-2 rounded-lg"
            type="text"
            value={type}
            placeholder="Type"
            onChange={(e) => {
              setinputDatas({ ...inputDatas, type: e.target.value });
            }}
          >
            {tyPe.map((i) => (
              <option key={i.id} value={i.value}>
                {i.name}
              </option>
            ))}
          </select>
          <input
            className="border-[1px] w-[80%] p-2 rounded-lg"
            type="text"
            value={price}
            placeholder="Price"
            onChange={(e) => {
              setinputDatas({ ...inputDatas, price: e.target.value });
            }}
          />
          <input
            className="border-[1px] w-[80%] p-2 rounded-lg"
            type="number"
            value={quantity}
            placeholder="Quantity"
            onChange={(e) => {
              setinputDatas({ ...inputDatas, quantity: e.target.value });
            }}
          />
          <select
            className="border-[1px] w-[80%] p-2 rounded-lg"
            type="text"
            value={timing}
            placeholder="Timing"
            onChange={(e) => {
              setinputDatas({ ...inputDatas, timing: e.target.value });
            }}
          >
            {timinG.map((i) => (
              <option key={i.id} value={i.value}>
                {i.name}
              </option>
            ))}
          </select>
          <input
            className="border-[1px] w-[80%] p-2 rounded-lg"
            type="text"
            value={address}
            placeholder="Address"
            onChange={(e) => {
              setinputDatas({ ...inputDatas, address: e.target.value });
            }}
          />
          <input
            className="border-[1px] w-[80%] p-2 rounded-lg "
            type="text"
            value={description}
            placeholder="Description"
            onChange={(e) => {
              setinputDatas({ ...inputDatas, description: e.target.value });
            }}
          />
          <input
            className="border-[1px] w-[80%] p-2 rounded-lg"
            type="text"
            value={reviews}
            placeholder="Reviews"
            onChange={(e) => {
              setinputDatas({ ...inputDatas, reviews: e.target.value });
            }}
          />
          <select
            className="border-[1px] w-[80%] p-2 rounded-lg"
            type="text"
            value={feedback}
            placeholder="Feedback"
            onChange={(e) => {
              setinputDatas({ ...inputDatas, feedback: e.target.value });
            }}
          >
            {feedBack.map((i) => (
              <option key={i.id} value={i.value}>
                {i.name}
              </option>
            ))}
          </select>
          <input
            className="border-[1px] w-[80%] p-2 rounded-lg"
            type="number"
            value={rating}
            placeholder="Rating"
            onChange={(e) => {
              setinputDatas({ ...inputDatas, rating: e.target.value });
            }}
          />
          <input
            accept="image/"
            className=" w-[80%] p-8 flex justify-center items-center rounded-lg bg-white"
            type="file"
            multiple
            onChange={handleHotelsImageUpload}
          />
          <input
            accept="image/"
            className=" w-[80%] p-8 flex justify-center items-center rounded-lg bg-white"
            type="file"
            multiple
            onChange={handleHotelsImageUpload1}
          />
          <input
            accept="image/"
            className=" w-[80%] p-8 flex justify-center items-center rounded-lg bg-white"
            type="file"
            multiple
            onChange={handleHotelsImageUpload2}
          />
          <Button name={"Submit"} onclick={handleSubmit} />
        </div>
      </div>

      <div className="w-[50%] bg-[pink] flex-col flex gap-2 items-center justify-center">
        <div>
          {
            hotelImg && <img src={hotelImg} alt="Loading" />
            // ) : (
            //   <p>image preview</p>
            // )
          }
        </div>
        <div>
          {
            hotelImg1 && <img src={hotelImg1} alt="Loading" />
            // ) : (
            //   <p>image preview</p>
            // )
          }
        </div>
        <div>
          {
            hotelImg2 && <img src={hotelImg2} alt="Loading" />
            // ) : (
            //   <p>image preview</p>
            // )
          }
        </div>
      </div>
    </Layout>
  );
}
