import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
export function Auth() {
  const client_secret = "40b63a84bc7e4e0b44522e63efe9d984";
  const client_id = 626807078280160;
  const grant_type = "authorization_code";
  const redirect_uri = "https://master.d2fobv91sb7b4f.amplifyapp.com/auth";
  const location = useLocation();
  const queryParms = queryString.parse(location.search);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    getUserName();
  }, []);

  const getUserName = async () => {
    let bodyFormData = new FormData();
    bodyFormData.append("client_secret", client_secret);
    bodyFormData.append("client_id", client_id);
    bodyFormData.append("grant_type", grant_type);
    bodyFormData.append("redirect_uri", redirect_uri);
    bodyFormData.append("code", queryParms?.code);
    try {
      const response = await axios.post(
        "https://api.instagram.com/oauth/access_token/",
        bodyFormData
      );
      const access_token = response.data.access_token;
      const user_id = response.data.user_id;
      const ddResp = await axios.get(
        `https://graph.instagram.com/${user_id}?fields=id,username&access_token=${access_token}`
      );
      setUserName(ddResp.data.username);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>hi {userName}</h1>
    </div>
  );
}
