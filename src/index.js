import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// function Root() {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setLoaded(true);
//   }, []);

//   if (!loaded) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
