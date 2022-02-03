import axios from "axios";

const simpleGetCall = (url) => {
  const headers = {
    // 'Content-Type': 'application/json;charset=UTF-8',
    crossorigin: true,
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
  };
  return axios
    .get(url, {
      headers: headers,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};

const simplePostCall = async (url, body = "") => {
  const headers = {
    crossorigin: true,
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
  };
  try {
    return await axios.post(url, body, {
      headers: headers,
    });
  } catch (error) {
    return error;
  }
};

export { simpleGetCall, simplePostCall };
