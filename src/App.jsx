import React, { useState } from "react";
import StoresIcon from "./stores.jpg";
import Modal from "./components/Modal";

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="stores-container">
            <Modal isVisible={isModalOpen} setIsVisible={setIsModalOpen} />
            <div className="stores" onClick={() => setIsModalOpen((prev) => !prev)}>
                <div className="stores-anim"></div>
                <div className="stores-img-wrap">
                    <img src={StoresIcon} alt="Stores.kg" />
                </div>
            </div>
        </div>
    );
};

export default App;
