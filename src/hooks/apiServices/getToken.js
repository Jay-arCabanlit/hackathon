import axios from "axios";
import { Base64,encode } from 'js-base64';

const SIGNUP_TOKEN = "c7c13ee11696c2ea96c458a380ca406889b58e5e:x";
const encoded = encode(SIGNUP_TOKEN)

export const GetToken = async (account_name, email, password) => {
    console.log(account_name,email,password)
    return axios({
      method: "get",
      url:`https://${account_name}.imonggo.com/api/tokens.json?&account_name=${account_name}&email=${email}&password=${password}`,
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "com.imonggo.stockroom",
        Accept: "application/json",
          // Authorization: `Basic ` + `${encoded}`,
      },
    });
  };