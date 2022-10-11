import React from "react";
import StoresIcon from "./stores.jpg";

const App = () => {
    return (
        <div className="stores">
            <a href="https://stores.kg" target="_blank">
                <img src={StoresIcon} alt="Stores.kg" />
            </a>
        </div>
    )
};

export default App;
