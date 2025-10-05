import React,{useState} from "react"
import { Link,  useNavigate} from "react-router-dom"


function Header() {
  const [text, setText] = useState("")
  const navigate = useNavigate()

  function handleKeydown(e){
    if(e.keyCode == 13){
       navigate(`/search/${text}`)
    }
  }
  return (
    <div style={{   background:"#1e1b17" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link to="/">
            <img style={{ width: "200px" }} src="https://www.themealdb.com/images/logo.svg" alt="" />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link to="/">Home</Link>
            <Link to="/about">API</Link>
            <input value={text} onChange={(e) => setText(e.target.value)} style={{ padding: "5px" }} type="text" placeholder="Search" 
            onKeyDown={handleKeydown}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

