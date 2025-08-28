import React from "react";
import ReactDOM from "react-dom";

const PopupContent = ({ copied }) => {
  return ReactDOM.createPortal(
    <section>
      {copied && (
        <div style={{ position: "absolute", bottom: "3rem" }}>
          Copied to clipboard
        </div>
      )}
    </section>,
    document.getElementById("popup-content")
  );
};

export default PopupContent;
