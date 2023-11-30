import axios from "axios";
 

export const GetToken = async (account_name, email, password) => {
    console.log(account_name,email,password)
    return axios({
      method: "get",
      url:`https://${account_name}.imonggo.net/api/tokens.json?&account_name=${account_name}&email=${email}&password=${password}`,
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "com.imonggo.stockroom",
        Accept: "application/json",
          // Authorization: `Basic ` + `${encoded}`,
      },
    });
  };