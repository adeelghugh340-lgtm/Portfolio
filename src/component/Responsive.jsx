import React from 'react'

const Responsive = () => {
  return (
    <div className="container my-5" id="Responsive">
      <h1 style={{ color: "block" }}>RESPONSIVE DESIGN</h1>

      <div
        style={{
          background: "var(--bg-color)",
          padding: "20px",
          border: "2px solid yellow",
          borderRadius: "10px",
          boxShadow: "var(--box-shadow)",
          color: "white"
        }}
      >
        <h3>Features</h3>

        <ul style={{ textAlign: "left" }}>
       
           <p>
    This portfolio is fully responsive and works on Mobile,
    Tablet, and Desktop devices.
  </p>
        </ul>
      </div>
    </div>
  )
}

export default Responsive