import React from "react";
import { base64 } from 'js-base64';
import { post } from "../apiServices/apiServices";



export const SignUp = async (data) => {
  console.log(data,'my name is data')
    return await post(`/api/self/accounts.json`, data);
  };
