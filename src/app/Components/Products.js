"use client"
import React from 'react'

const Products = (props) => {
    return (
        <>
            <div class="products">
                <h1>{props.heading}</h1>
                <div class="prods">
                    <div class="cards">
                        <img src="e.jpg" alt="" />
                        <h4>Fossil Analogue</h4>
                        <h4>Rs 1</h4>
                    </div>
                    <div class="cards"> <img src="e.jpg" alt="" />
                        <h4>Fossil Analogue</h4>
                        <h4>Rs 1999</h4></div>
                    <div class="cards"> <img src="e.jpg" alt="" />
                        <h4>Fossil Analogue</h4>
                        <h4>Rs 1999</h4></div>
                    <div class="cards"> <img src="e.jpg" alt="" />
                        <h4>Fossil Analogue</h4>
                        <h4>Rs 1999</h4></div>
                </div>
            </div>
        </>
    )
}

export default Products