import React from "react";
import Aside from "./components/Aside/Layout";
import Header from "./components/Header/Layout";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className='App'>
      <Aside />
      <Header />
      <main
        style={{
          display: "block",
          position: "absolute",
          width: "calc(100% - 260px - 75px - 95px)",
          left: "260px",
          top: "70px",
          paddingTop: "32px",
          paddingLeft: "75px",
          paddingRight: "95px",
          paddingBottom: "103px",
          // background: "#F0F0F7",
        }}>
        <Routes />
      </main>
    </div>
  );
}

export default App;
