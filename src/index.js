import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Titleyyyy</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div>hello world</div>
    </>
  );
}

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}
