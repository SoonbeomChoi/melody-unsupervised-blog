import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";

import { globalSize } from "./property/SizeProperty";
import { lightTheme } from "./property/LightTheme";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  const headerRef = useRef();
  const mainRef = useRef();

  const unitHeight = window.innerHeight - parseInt(globalSize.headerHeight);

  const onSelectSection = (event, selectedSection) => {
    if (selectedSection === 'Overview') {
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
    } else if (selectedSection === 'Demo') {
      mainRef.current.scrollTo({ top: unitHeight, behavior: "smooth" });
    } else if (selectedSection === 'Results') {
      mainRef.current.scrollTo({ top: 4*unitHeight, behavior: "smooth" });
    }
  }

  const setSection = (section) => {
    headerRef.current.setState({ selectedSection: section });
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <Header ref={headerRef} onSelectSection={onSelectSection}/>
      <Main ref={mainRef} setSection={setSection}/>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);