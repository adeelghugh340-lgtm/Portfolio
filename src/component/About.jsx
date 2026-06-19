import React from 'react'

const About = () => {
  return (
    <div className="container my-5" id="About">
      <h1 style={{ color: "Block" }}>ABOUT ME</h1>

      <div
        style={{
          background: "var(--bg-color)",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          border: "2px solid yellow",
          boxShadow: "var(--box-shadow)"
        }}
      >
        <p>
          My name is Muhammad Adeel. I am a Front-End Developer
           in React.js. I enjoy building responsive,
          user-friendly, and modern web applications using HTML,
          CSS, JavaScript, React.js, and MUI.I have completed my
           Associate degree Program in computer science from UCP lahore.
        </p>
      </div>
    </div>
  )
}

export default About