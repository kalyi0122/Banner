import React from 'react'

function Alfavit() {
    const alfa = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column", gap:"20px"}}>
      <h2 style={{fontSize:"25px", color:"white"}}>Browse Meals</h2>
      <div>
        {alfa.map((letter, index) =>(
            <span key={letter} style={{margin:"0 10px", color:"white"}}>
                <a style={{textDecoration:"none", fontSize:"20px", color:"white"}} href={`/letter/${letter}`}>{letter}</a>
                {index < alfa.length - 1 && '/ '}
            </span>
        ))}
      </div>
    </div>
  )
}

export default Alfavit
