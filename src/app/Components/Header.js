"use client"
import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <div class="navbar">
                <ul><img src="o.png" alt="" /></ul>
                <ul>
                    <Link href={"/"}>
                        <li>Home</li>
                    </Link>

                    <li className="hover">Shop
                        <div class="show">
                            <Link href={"/Formals"}><li>Formals</li></Link>
                            <Link href={"/SportsSneakers"}><li>Sports & Sneakers</li></Link>
                            <Link href={"/Watches"}><li>Watches</li></Link>
                        </div>
                    </li>

                    <Link href={"/About"}><li>About Us</li></Link>
                    <Link href={"/Members"}><li>Members</li></Link>
                </ul>
                <ul>
                    <h4>Log In</h4>
                </ul>
                <ul><input type="text" placeholder='Search Something' /></ul>
            </div>

        </>
    )
}

export default Header