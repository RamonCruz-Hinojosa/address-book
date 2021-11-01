import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";

const axios = require("axios").default;
const URL = "https://randomuser.me/api?results=25";

function App() {
  const [user, changeUser] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      const randomUsers = res.data;
    });
  });

  return <p>{user}</p>;
}

export default App;
