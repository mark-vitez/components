import React from "react";
import ReactDOM from "react-dom/client";
import NavigationProvider from "./components/context/navigation";

import './index.css';
import App from "./app";


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(
    <NavigationProvider>
        <App />        
    </NavigationProvider>
);


