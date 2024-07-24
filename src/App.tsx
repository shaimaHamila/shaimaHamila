import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import Messages from "./pages/Messages/Messages";
function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("Admin") ? true : false);

  useEffect(() => {
    const token = localStorage.getItem("Admin");

    setLoggedIn(token ? true : false);
  }, [loggedIn]);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<Home />}></Route>
        <Route path='/admin' element={<Login />}></Route>
        {loggedIn && <Route path='/admin/messages' element={<Messages />}></Route>}
      </Routes>
    </>
  );
}

export default App;
