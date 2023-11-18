import UserModel from "@/lib/user";
import dbConnect from "@/lib/db";

import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
   try{
        await dbConnect();
        const {wallet} = req.body;
        if(!wallet){
            return res.status(400).json({error: "Missing wallet address"});
        }
        const check = await UserModel.findOne({wallet});
        if(check){
            return res.status(200).json({message: "User already exists"});
        }
        else{
            const user = await UserModel.create({wallet});
            return res.status(200).json({message: "User created successfully", user});
        }
   }
    catch(e:any){
       return res.status(500).json({error: e.message});
    }
}


export default handler;