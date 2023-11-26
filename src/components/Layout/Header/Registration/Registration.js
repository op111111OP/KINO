import React, { useEffect, useState } from "react";
import "./Registration.css";

import { PersonPlusFill } from "react-bootstrap-icons";
import { fetchData } from "../../../Home/api";

export default function Registration() {
  const [data, setData] = useState([]);
  const [sessionID, setSessionID] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setData(
        await fetchData("https://api.themoviedb.org/3/authentication/token/new")
      );
    };
    getData();
  }, []);
  //

  const fetchDataPost = async () => {
    try {
      if (!data || !data.request_token) {
        throw new Error("Invalid request token");
      }
      console.log("Request Token:", data.request_token);
      const response = await fetch(
        "https://api.themoviedb.org/3/authentication/session/new",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDZjNmEyYmFmZDdmNGI4NjRjMjMxMjY3MzcxOGE1Iiwic3ViIjoiNjUyNDFiYzNmZDYzMDAwMDFlYzd2YTYxIiwic2NvcGUiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PKTv5D1UgJncvBG7iVbGg6ZSmSMEnETIRvThOov7Csg",
          },
          body: JSON.stringify({
            request_token: `${data.request_token}`,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const post = await response.json();
      setSessionID(post.session_id);
      console.log(post.session_id);
      return post;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  //   console.log(data);
  return (
    <div className="registration_box">
      <a
        href={`https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=http://localhost:3000/`}
        className="text_none_come"
      >
        registration
      </a>
      <PersonPlusFill size={20} />
    </div>
  );
}
