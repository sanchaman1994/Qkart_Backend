const express = require("express");
const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const cartRoute = require("./cart.route");
const productRoute = require("./product.route");
const router = express.Router();


// Done: CRIO_TASK_MODULE_AUTH - Reroute all API requests beginning with the `/v1/auth` route to Express router in auth.route.js 

router.use("/auth",authRoute);//  api api/register to registerAoutes
router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/cart",cartRoute);






module.exports = router;
