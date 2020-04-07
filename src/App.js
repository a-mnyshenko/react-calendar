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
          width: "calc(100% - 95px - 75px - 260px)",
          maxWidth: "100%",
          minWidth: "768px",
          height: "100%",
          left: "260px",
          top: "70px",
          paddingTop: "32px",
          paddingLeft: "75px",
          paddingRight: "95px",
        }}>
        <Routes />
      </main>
    </div>
  );
}

export default App;
