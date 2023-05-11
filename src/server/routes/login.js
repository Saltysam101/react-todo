import express from "express";
import bcrypt from "bcrypt";
import query from "../db/utils";

const router = express.Router();

router.get("/", async(req, res) => {
    if (await req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })
    } else {
        res.send({ loggedIn: false })
    }
})

router.post("/", async(req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    let user = await query("SELECT * FROM users WHERE Email = ?", [email])

    bcrypt.compare(password, user[0].Password, (err, response) => {
        if (err) {
            console.error(err)
        } else if (response === true) {
            req.session.user = user
                //console.log("reqsession", req.session.user)

            //console.log("session", req.sessionID)
                //console.log("cookie", req.session.cookie)
            console.log("login successful")
            res.status(200).send(req.session.user)
                /* console.log(user) */
        } else {
            console.log("incorrect credentials")
            res.status(401).send("incorrect credentials")
        }
    })
})

export default router;