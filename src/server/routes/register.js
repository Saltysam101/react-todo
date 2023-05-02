import express from "express";
import { regitserUser } from "../controllers/register.controller";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("hi")
})

router.post("/", async(req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const user = { FirstName: firstName, LastName: lastName, Email: email, Password: password }
    let data = await regitserUser(user);
    res.json(data);
})

export default router;