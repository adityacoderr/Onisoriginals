import React from 'react'
import Products from '../Components/Products'

const page = () => {
    return (
        <div>
            <Products heading={"Watches"} />
            <Products heading={""} />
        </div>
    )
}

export default page
