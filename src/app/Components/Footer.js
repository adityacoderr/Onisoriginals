"use client"
import React, { useState } from 'react'

const Footer = () => {
    const [inputValue, setInputValue] = useState('');
    const [email2, setEmail2] = useState('');
    const [aditya, setAditya] = useState('');

    const handleInputChange = (event) => {
        setAditya(event.target.value);
        setInputValue(event.target.value);
        setEmail2(event.target.value);
    };
    const handleFormReset = () => {
        setInputValue("");
        setEmail2("");
    }
    return (
        <>
            <footer>
                <ul><img src="o.png" alt="" /></ul>
                <ul className="footer-objects">
                    <div class="obj">
                        <h2>ADDRESS</h2>
                        <p>​Only online store available at onisoriginals.com</p>
                    </div>
                    <div class="obj">
                        <h2>Contact me</h2>
                        <div class="horizantal">
                            <div class="obj-hori"><input type="text" placeholder="Name" value={aditya} onChange={handleInputChange} />
                                <input type="email" placeholder="Email" value={inputValue} onChange={handleInputChange} />
                            </div>
                            <div class="obj-hori2">
                                <input type="text" placeholder="Phone" value={aditya} />
                                <input type="text" placeholder="Description" />
                            </div>
                        </div><button type="submit" onClick={handleFormReset}>Subscribe Now</button>
                    </div>
                    <div class="obj3">
                        <h2>stay in touch</h2>
                        <p>Join our mailing list</p>
                        <input type="email" required placeholder="Enter  Email Address" id="" value={email2} readOnly />
                        <button type="submit" >Subscribe Now</button>
                    </div>
                </ul>
                <ul>© 2023 by ONISORIGINALS. All rights reserved.</ul>
            </footer>
        </>
    )
}

export default Footer