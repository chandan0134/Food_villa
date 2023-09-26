import React from "react"
import ReactDOM,{ createRoot } from "react-dom/client"
import {Header} from "./components/header.js"
import Body from "./components/Body"
import Footer from "./components/Footer"


const AppLayout =()=>{
    return(
        <div>
           
            <Header />
            <Body />
            <Footer />

        </div>

    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);