import axios from "axios";
export interface IUserData {
  username: string;
  password: string;
}
const login = (data: IUserData) => {
  // axios({
  //   method: "post",
  //   url: "http://10.200.24.103/api/authenticate",
  //   data: {
  //     username: "dev_procuring_entity",
  //     password: "developer",
  //   },
  // })
  //   .then((res) => console.log("res", res))
  //   .catch((err) => console.log("err", err));
  fetch("http://10.200.24.103/api/authenticate", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => console.log("res", res));
};

export default login;
