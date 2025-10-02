import React, { useState, useEffect } from 'react'

function Banner() {
  return (
<div style={{   background:"#1e1b17" }} >
    <div style={{ maxWidth: "960px", margin: "0 auto",    }}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div className='img-01'>
          <img src="	https://www.themealdb.com/images/meal-icon.png" alt="" />
        </div>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <h1 style={{fontSize: "36px",color:"#fff"}}>Welcome to TheMealDB</h1>
          <p style={{textAlign:"center",color:"#fff"}}>Welcome to TheMealDB: An open, crowd-sourced database of recipes from around the world. <br />We offer a <span style={{color:"#F4722B"}}>free recipe API</span>  for anyone wanting to use it, with additional premium features if required.</p>
          <div style={{display:"flex", gap:"20px"}}>
            <button style={{width:"88px",height:"36px",color:"white", border:"none", borderRadius:"10px",backgroundColor: "rgb(16, 165, 40)",}}>Free API</button>
            <button style={{color:"white", backgroundColor:"#F4722B", border:"none", borderRadius:"10px"}}>Go Premium</button>
          </div>
          <p style={{textAlign:"center",color:"#fff"}}>Click above to upgrade the free Recipe API to premium for <br /><span style={{color:"#F4722B"}}> $10 lifetime one-off</span> <br />
            Currently 93 supporters.</p>
        </div>
        <div>
          <img src="	https://www.themealdb.com/images/meal-icon.png" alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Banner
