const express = require("express");
const { createOrder, verifyOrder } = require("../controllers/payment");
const router = express.Router();

router.post("/orders", createOrder);
router.post("/verify", verifyOrder);
module.exports = router;
