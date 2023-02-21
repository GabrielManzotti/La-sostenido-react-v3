import "./styles.css"


import React from 'react'

function ProductDetailCard({ image, data }) {
    return (
        <div className="div-image">
            
            <img src={data.image} alt={data.brand} width="70%" height="70%"></img>
        </div>
    )
}

export default ProductDetailCard