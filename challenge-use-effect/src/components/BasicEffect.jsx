import React, { use } from "react";

const BasicEffect = () => {
  React.useEffect(() => {
    console.log("Basic Effect Called");
  }, []);
  return (
    <div>
      <h2>Check console log to see the message</h2>
    </div>
  );
};

export default BasicEffect;
