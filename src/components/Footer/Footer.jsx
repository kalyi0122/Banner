import React from 'react'

function Footer() {
  return (
    <div style={{background:"black"}}>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding:"10px 0" }}>
        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center",}}>
          <div style={{color:"white"}}>
            <p>© 2025 TheMealDB <br />
             Proudly built in the UK</p>
          </div>
          <div style={{color:"white", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <h5 style={{textAlign:"center"}}>Socials:</h5>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <div style={{display:"flex", alignItems:"center"}}>
              <img src="https://www.themealdb.com/images/logo-tcdb.png" alt="" />
              <img src="https://www.themealdb.com/images/logo-tadb.png" alt="" />
              <img src="	https://www.themealdb.com/images/logo-tsdb.png" alt="" />
            </div>

          </div>
          <div style={{display:"flex", gap:"20px"}}>
            <a style={{textDecoration:"none",color:"white"}} href="">About</a>
            <a style={{textDecoration:"none",color:"white"}} href="">Faq</a>
            <a style={{textDecoration:"none",color:"white"}} href="">Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
