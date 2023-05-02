import query from "../db/utils";

export const loginUser = async(email, password) => {
    return await query("SELECT * FROM users WHERE Email = ? AND Password = ?", [email, password]);
};