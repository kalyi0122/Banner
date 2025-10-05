import React from 'react'
import './List.css'
import Card from '../Card/Card'
function ProductList({data}){
  return (
    <div style={{display:"flex", justifyContent:"space-between",flexWrap:"wrap",maxWidth: "1300px", margin: "0 auto" }}>
        {
            data.map((item) =>(

                 <Card key={item.idMeal} product={item}/>
            ))
        }
    </div>
  )
}

export default ProductList
