import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom"; // Import createRoot from react-dom

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ChatProvider from "./Context/ChatProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ChakraProvider>
    <BrowserRouter>
      <ChatProvider>
        <App />
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>
);

reportWebVitals();
