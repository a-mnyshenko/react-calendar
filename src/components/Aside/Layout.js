import React from "react";
import { Title } from "./Title";
import { Link } from "react-router-dom";
import { navList } from "./navList";

import { withRouter } from "react-router-dom";

import AsideIcon from "../Icons/AsideIcon";

const Aside = (props) => {
  return (
    <aside
      style={{
        display: "block",
        position: "fixed",
        height: "100vh",
        width: "260px",
        background: "#43425D",
        zIndex: "100",
      }}>
      <Title />
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}>
        <ul style={{ margin: "3px 0 0 0", padding: "0" }}>
          {navList.map((listItem) => (
            <Link
              to={listItem.uri}
              style={{ textDecoration: "none" }}
              key={listItem.title}>
              <li
                style={{
                  color: "#fff",
                  background:
                    props.location.pathname === listItem.uri
                      ? "rgb(60, 59, 84)"
                      : "#43425D",
                  listStyle: "none",
                  display: "flex",
                  position: "relative",
                  height: "53px",
                  alignItems: "center",
                  margin: "6px 0",
                  paddingLeft: "25px",
                }}>
                {props.location.pathname === listItem.uri && (
                  <span
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "5px",
                      left: "0",
                      background: "#A3A0FB",
                    }}
                  />
                )}
                <AsideIcon
                  isActive={props.location.pathname === listItem.uri}
                  icon={`${listItem.uri.replace("/", "").toLowerCase() ||
                    "home"}`}
                />
                <p style={{ marginLeft: "11px", fontWeight: "300" }}>
                  {listItem.title}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default withRouter(Aside);
