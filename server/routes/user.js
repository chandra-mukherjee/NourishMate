import express from "express";
const router = express.Router();

import { getUsers, deleteUser, signin, signup } from "../controllers/user.js";

export default router;
