import './App.css'
function App() {
  return (
    <div style={{background:'#0f172a', color:'white', minHeight:'100vh', textAlign:'center', paddingTop:'100px'}}>
      <h1 style={{fontSize:'50px'}}>Hi, I'm Sriteja 👋</h1>
      <h3 style={{color:'#38bdf8'}}>React Full Stack Developer</h3>
      <p>MERN Stack course complete chesa. Better opportunity kosam working hard.<br/> Task Manager & E-MART lanti real projects chesa.</p>
      <div style={{marginTop:'25px', display:'flex', gap:'12px', justifyContent:'center'}}>
        <a href="https://github.com/teja89867-ctrl" target="_blank" style={{background:'white', color:'black', padding:'10px 20px', borderRadius:'20px', textDecoration:'none'}}>My GitHub</a>
        <a href="#" style={{border:'1px solid gray', padding:'10px 20px', borderRadius:'20px', color:'white', textDecoration:'none'}}>Contact Me</a>
      </div>
    </div>
  )
}
export default App;