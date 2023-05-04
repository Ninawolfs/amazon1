import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { useStateValue } from "./Components/StateProvider";
import { Unsubscribe } from "@mui/icons-material";
// import React, {useEffect} from 'react';

function App() {
  // const [{user}, dispatch] = useStateValue();

  //codepiece that runs based on a given condition
  //   useEffect(() => {
  // const unsuscribe = auth.onAuthStateChanged((authUser)=>{
  //   if (authUser) {
  //     //user is logged in at this point
  //     dispatch({
  //       type: "SET_USER",
  //       user: authUser
  //     })
  //   } else {
  //     // the user is not logged in
  //     dispatch({
  //       type: "SET_USER",
  //       user: NULL
  //     })
  //   }
  // })
  // return () =>{
  //   // annu cleanup operations go here
  //   Unsubscribe();
  // }
  //   }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );

  {
    /* localhost.com/ */
  }
  {
    /* localhost.com/checkout */
  }
  {
    /* localhost.com/login */
  }
}

export default App;
