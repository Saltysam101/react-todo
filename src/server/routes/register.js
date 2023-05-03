import express from "express";
import { regitserUser } from "../controllers/register.controller";
import bcrypt from "bcrypt";

const saltRound = 10;

const router = express.Router();

router.get("/", (req, res) => {
    res.send("hi")
})

router.post("/", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    bcrypt.hash(password, saltRound, async(err, hash) => {
        if (err) {
            console.error(err)
        } else {

            const user = { FirstName: firstName, LastName: lastName, Email: email, Password: hash }
            let data = await regitserUser(user);
            console.log(data)
            res.json(data);
        }
    })
})

export default router;