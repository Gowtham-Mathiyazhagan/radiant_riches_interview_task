import React from "react";
import Navbar from "./Components/Navbar";
import Headsection from "./Components/Headsection";
import Contant from "./Components/Contant";
import ContantTwo from "./Components/ContantTwo";
import SignUp from "./Components/SignUp";

const App = () => {
  return (
    <>
      <Navbar />
      {/* Wrapper used to make a contant center */}
      <div className="wrapper">
        <Headsection />
        <Contant />
        <ContantTwo />
        <SignUp />
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default App;
