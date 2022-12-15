const express = require("express");
const router = express.Router();

const v1piRoutes = require("./v1/index");

router.use("/v1", v1piRoutes);
module.exports = router;
