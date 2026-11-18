import React from "react";

function App() {
  return (
    <div style={{ background: "#0a1128", color: "white", fontFamily: "Arial", minHeight: "100vh" }}>
      
      
      <div style={{ textAlign: "center", padding: "80px 20px 40px" }}>
        <h1 style={{ fontSize: "48px", margin: "0" }}>Hi, I'm Sriteja</h1>
        <h2 style={{ color: "#38bdf8", fontSize: "28px" }}>React Full Stack Developer</h2>
        <p style={{ maxWidth: "650px", margin: "20px auto", lineHeight: "1.7", color: "#cbd5e1", fontSize: "17px" }}>
          I completed MERN Stack course. I am working hard for a better opportunity.
          I have built real projects like Task Manager and E-MART.
        </p>
        <div style={{ marginTop: "25px" }}>
          <a href="https://github.com/teja39867-ctrl" target="_blank" rel="noreferrer" style={{ background: "white", color: "black", padding: "12px 25px", borderRadius: "25px", textDecoration: "none", fontWeight: "bold", marginRight: "12px" }}>My GitHub</a>
          <a href="#contact" style={{ border: "1px solid #555", color: "white", padding: "12px 25px", borderRadius: "25px", textDecoration: "none" }}>Contact Me</a>
        </div>
      </div>

      
      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
        <h2 style={{ borderLeft: "4px solid #38bdf8", paddingLeft: "12px" }}>Skills</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "15px" }}>
          {["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", "CSS3", "GitHub"].map((skill) => (
            <span key={skill} style={{ background: "#1e293b", padding: "10px 18px", borderRadius: "20px", border: "1px solid #334155" }}>{skill}</span>
          ))}
        </div>
      </div>

      
      <div style={{ maxWidth: "800px", margin: "50px auto", padding: "0 20px" }}>
        <h2 style={{ borderLeft: "4px solid #38bdf8", paddingLeft: "12px" }}>My Projects</h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
          
          <div style={{ background: "#1e293b", padding: "25px", borderRadius: "15px", flex: "1", minWidth: "280px" }}>
            <h3>Task Manager App</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>Add, delete and complete daily tasks. Built with React and LocalStorage.</p>
            <p style={{ color: "#38bdf8" }}>React.js | JavaScript | CSS</p>
            <a href="https://github.com/teja39867-ctrl" target="_blank" rel="noreferrer" style={{ color: "white", fontWeight: "bold" }}>View on GitHub</a>
          </div>

          <div style={{ background: "#1e293b", padding: "25px", borderRadius: "15px", flex: "1", minWidth: "280px" }}>
            <h3>E-MART Shopping App</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>Browse products, add to cart and place orders. Built like a real shopping website.</p>
            <p style={{ color: "#38bdf8" }}>React.js | Node.js | MongoDB</p>
            <a href="https://github.com/teja39867-ctrl" target="_blank" rel="noreferrer" style={{ color: "white", fontWeight: "bold" }}>View on GitHub</a>
          </div>

        </div>
      </div>

     
      <div id="contact" style={{ maxWidth: "800px", margin: "50px auto", padding: "0 20px 60px", textAlign: "center" }}>
        <h2>Contact Me</h2>
        <p style={{ color: "#cbd5e1" }}>If you have a Job or Internship opportunity, feel free to contact me.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
          <a href="https://github.com/teja39867-ctrl" target="_blank" rel="noreferrer" style={{ background: "#1e293b", color: "white", padding: "12px 20px", borderRadius: "10px", textDecoration: "none" }}>GitHub</a>
          <a href="mailto:teja39867@gmail.com" style={{ background: "#1e293b", color: "white", padding: "12px 20px", borderRadius: "10px", textDecoration: "none" }}>Email Me</a>
          <a href="https://wa.me/918978867718" target="_blank" rel="noreferrer" style={{ background: "#25D366", color: "white", padding: "12px 20px", borderRadius: "10px", textDecoration: "none", fontWeight: "bold" }}>WhatsApp Me</a>
        </div>
        <p style={{ marginTop: "30px", color: "#64748b", fontSize: "14px" }}>© 2026 Sriteja | Made with React</p>
      </div>

    </div>
  );
}

export default App;