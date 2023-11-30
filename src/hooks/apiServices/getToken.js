import axios from "axios";
 

export const GetToken = async (account_name, email, password) => {
    console.log(account_name,email,password)
    return axios({
      method: "get",
      url:"https://cellphone.imonggo.com/api/tokens.json?&account_name=cellphone&email=cellphone@gmail.com&password=cellphoone123",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "com.imonggo.stockroom",
        Accept: "application/json",
          // Authorization: `Basic ` + `${encoded}`,
      },
    });
  };