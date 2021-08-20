import React from "react";
import { useState } from "react";
import "./home.css";

const Home = () => {
    const [conteo, setconteo] = useState(0);

    return (
        <div className="Home-container">
            <h1>HOME: {conteo}</h1>
            <button
                className="boton-sumar"
                onClick={() => setconteo(conteo + 1)}
            >
                Sumar
            </button>
        </div>
    );
};

export default Home;
