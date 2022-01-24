import React from "react";

function CarouselComponent() {
  return (
    <>
      <div
        className="bg-dark p-5 rounded-lg m-3"
        style={{
          backgroundColor: "#e5e5f7",
          opacity: "0.8",
          backgroundImage:
            "radial-gradient(circle at center center, #006060, #2A9FD6), repeating-radial-gradient(circle at center center, #006060, #2A9FD6, 10px, transparent 20px, transparent 10px)",
          backgroundBlendMode: "multiply",
        }}
      >
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead " style={{ color: "white" }}>
          Welcome to my site! I am a fullstack developer based out of Bengaluru,
          KA.
        </p>
        <hr className="my-4" style={{ color: "white" }} />
        <p style={{ color: "white" }}>
          I am specialized in Python, Cloud (AWS), React and React Native
        </p>
        <a className="btn btn-primary btn-lg" href="/about" role="button">
          Learn more
        </a>
      </div>
    </>
  );
}

export default CarouselComponent;
