import React from 'react'
import { Link } from 'react-router-dom'

function Card({ product }) {
    return (
        
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <Link to={`info/${product.idMeal}`}>
                <div style={{ width: "300px", height: "335px", padding: "0 12px" }}>
                    <img style={{ width: "100%", height: "290px" }} src={product.strMealThumb} alt="" />
                    <h4 style={{ color: "white", textAlign: "center", color: "#F4722B", fontSize: "18px", fontWeight: "700" }}>{product.strMeal}</h4>
                </div>
            </Link>
        </div>
    )
}

export default Card
