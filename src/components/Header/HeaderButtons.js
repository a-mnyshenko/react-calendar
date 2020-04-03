import React from "react";
import support_icon from "../../assets/Calendar 1/Support Iocn.svg";
import massanger_main from "../../assets/Calendar 1/Path 9.svg";
import notification_main from "../../assets/Calendar 1/Path 3.svg";
import divider from "../../assets/Calendar 1/Divider.svg";

export const HeaderButtons = () => {
  return (
    <div style={{ display: "flex", whiteSpace: "nowrap" }}>
      <img
        style={{ marginLeft: "30px", width: "16px" }}
        src={support_icon}
        alt=''
      />
      <img
        style={{ marginLeft: "30px", width: "16px" }}
        src={massanger_main}
        alt=''
      />
      <img
        style={{ marginLeft: "30px", width: "16px" }}
        src={notification_main}
        alt=''
      />
      <img style={{ marginLeft: "20px" }} src={divider} alt='' />
    </div>
  );
};
