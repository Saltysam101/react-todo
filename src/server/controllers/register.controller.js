import query from "../db/utils";

export const regitserUser = async(user) => {
    return await query("INSERT INTO users SET ?", [user]);
};