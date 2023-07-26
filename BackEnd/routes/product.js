const express = require("express");
const { Product, UserData } = require("../model/product");
const { image } = require("../utils/cloudinary");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");

router.post("/", async (req, res) => {
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
    image,
    image1,
    image2,
  } = req.body;
  try {
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image, {
        upload_preset: "hotelImages",
      });
      const uploadRes1 = await cloudinary.uploader.upload(image1, {
        upload_preset: "hotelImages",
      });
      const uploadRes2 = await cloudinary.uploader.upload(image2, {
        upload_preset: "hotelImages",
      });
      if (uploadRes) {
        const product = new Product({
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
          image: uploadRes,
          image1: uploadRes1,
          image2: uploadRes2,
        });
        const savedProduct = await product.save();
        res.status(200).send(savedProduct);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const data = {
      title: req.body.title,
      place: req.body.place,
      type: req.body.type,
      price: req.body.price,
      quantity: req.body.quantity,
      timing: req.body.timing,
      address: req.body.address,
      description: req.body.description,
      reviews: req.body.reviews,
      feedback: req.body.feedback,
      rating: req.body.rating,
    };
    if (req.body.image !== "") {
      const imgId = product.image.public_id;
      if (imgId) {
        //delete image in cloudinary
        await cloudinary.uploader.destroy(imgId);
      }
    }
    const newImg = await cloudinary.uploader.upload(req.body.image, {
      upload_preset: "hotelImages",
    });
    data.image = {
      public_id: newImg.public_id,
      url: newImg.secure_url,
    };
    // if (req.body.image1 !== "") {
    // const imgId1 = product.image1.public_id;
    // if (imgId1) {
    //delete image in cloudinary
    // await cloudinary.uploader.destroy(imgId1);
    //   }
    // }
    const newImg1 = await cloudinary.uploader.upload(req.body.image1, {
      upload_preset: "hotelImages",
    });
    data.image1 = {
      public_id: newImg1.public_id,
      url: newImg1.secure_url,
    };
    // if (req.body.image2 !== "") {
    // const imgId2 = product.image2.public_id;
    // if (imgId2) {
    //delete image in cloudinary
    // await cloudinary.uploader.destroy(imgId2);
    //   }
    // }
    const newImg2 = await cloudinary.uploader.upload(req.body.image2, {
      upload_preset: "hotelImages",
    });
    data.image2 = {
      public_id: newImg2.public_id,
      url: newImg2.secure_url,
    };
    const udImage = await Product.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json({
      status: "Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const imgId = product.image.public_id;
    await cloudinary.uploader.destroy(imgId);
    const remove = await Product.findByIdAndDelete(req.params.id);
    res.send({ status: "deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/userData", async (req, res) => {
  const {
    address,
    city,
    zipcode,
    country,
    mobile,
    hotel_id,
    user_id,
    hotel_name,
    user_name,
    image,
    title,
    place,
    price,
  } = req.body;
  try {
    const userData = new UserData({
      address,
      city,
      zipcode,
      country,
      mobile,
      hotel_id,
      user_id,
      hotel_name,
      user_name,
      image,
      title,
      place,
      price,
    });
    const savedUserData = await userData.save();
    res.status(200).send({ status: "reserved", data: savedUserData });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/userData/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const allDatas = await UserData.find({});
    const temp = [...allDatas];
    const prevValue = temp.find((i) => i._id === id);
    const newValue = req.body;
    await UserData.updateOne(prevValue, newValue);
    res.json(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
router.get("/userData", async (req, res) => {
  try {
    const products = await UserData.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
router.delete("/userData/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const allDatas = await UserData.find({});
    const temp = [...allDatas];
    const prevValue = temp.find((i) => i._id === id);
    await UserData.deleteOne(prevValue);
    res.json(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
