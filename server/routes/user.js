import express from "express";
const router = express.Router();

import { getUsers, deleteUser, signin, signup } from "../controllers/user.js";

router.get("/user", getUsers);
router.post("/user/signin", signin);
router.post("/user/signup", signup);
router.delete('/user/:id', deleteUser);

export default router;