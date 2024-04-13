import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <>
            <div class="hero">
                <img src="e.jpg" alt="" />
                <div class="hero-cont">
                    <h1>onisoriginals</h1>
                    <p>Welcome to OnisOriginals ! Shop your Interest with an amazing price and follow trendy fashion with us
                    </p>
                    <Link href={"/SportsSneakers"}><button>Shop Now</button></Link>
                </div>
            </div>
        </>
    )
}

export default Hero