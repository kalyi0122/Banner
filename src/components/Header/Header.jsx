import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div style={{   background:"#1e1b17" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link to="/">
            <img style={{ width: "200px" }} src="https://www.themealdb.com/images/logo.svg" alt="" />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link to="/">Home</Link>
            <Link to="/about">API</Link>
            <input style={{ padding: "5px" }} type="text" name="" id="" placeholder="Search" />
          </div>
        </div>
      </div>

      {/* <div className='container'>
        <div className='img-01'>
          <img src="	https://www.themealdb.com/images/meal-icon.png" alt="" />
        </div>
        <div className='text-01'>
          <h1>Welcome to TheMealDB</h1>
        </div>
        <div className="text-02">
          <p>Welcome to TheMealDB: An open, crowd-sourced database of recipes from around the world. <br />We offer a free recipe API for anyone wanting to use it, with additional premium features if required.</p>

          <button>Free API</button>
          <button>Go Premium</button>
          <p>Click above to upgrade the free Recipe API to premium for $10 lifetime one-off <br />
            Currently 93 supporters.</p>
        </div>
        <div>
          <img src="	https://www.themealdb.com/images/meal-icon.png" alt="" />
        </div>

      </div> */}
    </div>
  )
}

export default Header

