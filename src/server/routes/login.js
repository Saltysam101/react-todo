import express from "express";
import { loginUser } from "../controllers/login.controller";

const router = express.Router();

router.post("/", async(req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    console.log(email)
    let data = await loginUser(email, password);
    res.json(data);
})

export default router;