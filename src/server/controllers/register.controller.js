import query from "../db/utils";

export const registerUser = async(user) => {
    return await query("INSERT INTO users SET ?", [user]);
};