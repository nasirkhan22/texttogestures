import React, { useEffect } from "react";
import Home from "./Home";

const HandtalkComponent = () => {
  useEffect(() => {
    // Create a script element for Handtalk
    const script = document.createElement("script");
    script.src = "https://plugin.handtalk.me/web/latest/handtalk.min.js";
    script.async = true;

    // Add the script to the document
    document.body.appendChild(script);

    script.onload = () => {
      var ht = new HT({
        token: "<TOKEN>",
        // Other Handtalk options here
      });
    };
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* <Home /> */}
    </div>
  );
};

export default HandtalkComponent;
