import { userModel } from "../../../database/models/userModel";
 interface userInfo {
    email:string,
    password: string
 }

const insertUser = async (body:userInfo ) => {
 return await userModel.create(body);
}

export {insertUser}