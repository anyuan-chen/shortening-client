import { useState, useEffect } from "react";
function useLoggedIn() {
  const [loggedIn, setLoggedIn] = useState(false);

  async function status() {
    const url = process.env.REACT_APP_SERVER_URL + "/loggedin";
    let headers = new Headers();
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: headers,
    });
    //console.log(response);
    const body = await response.json();
    return body.logged_in;
  }

  useEffect(() => {
    const fetchData = async () => {
      const resp = await status();
      setLoggedIn(resp);
    };
    fetchData();
    console.log(loggedIn);
  }, []);
  return loggedIn;
}

export default useLoggedIn;
