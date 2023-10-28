import express from "express";
import getFriends from "../../controllers/home/homepage.js";

const router = express.Router(getFriends);

router.route("/").get(getFriends);

export default router;
