import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <div class="about">

                <h1>Page Not Found</h1>
                <Link href={"/"}><button>Munna Ghar Jao</button></Link>
            </div>
        </>
    )
}

export default page
