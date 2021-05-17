import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>

                    <div className="home__row">
                        <Product title='The Lean Startup: How Constant Innovation Creates Radically Successful
                         Business Paperback' 
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={3}
                        />

                        <Product id="49538094"
                        title="Lenovo ThinkPad E14 (2021) AMD Ryzen 5 4650U Pro 14-inch Full HD Thin and Light Laptop (8GB RAM/ 256GB SSD/ Windows 10 Home/ Microsoft 
                            Office Home & Student 2019/ Black/ 1.59 kg)"
                        price={29500.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/41G2YkGfCaS.jpg"
                        />
                    </div>

                    <div className="home__row">
                        
                    <Product id="4903850"
                    title="Sketchfab Smart Fitness Band for Boys | 
                    Sports Watch Compatible with All Mobile |
                     Heart Rate and BP Monitor"
                     price={752.0}
                     rating={3}
                     image="https://images-na.ssl-images-amazon.com/images/I/61Lm-wWeZeL._SL1500_.jpg"/>
                    
                    <Product  id="23445930"
                    title="Echo Input Portable Smart Speaker Edition - Carry Echo anywhere in your home"
                     price={950.0}
                     rating={3}
                     image="https://images-na.ssl-images-amazon.com/images/I/61qIcidztUL._SL1000_.jpg"/>
                   
                   
                    <Product id="23445945"
                    title="New Apple iPad Pro (12.9 inch, Wi-fi, 128GB)-Silver (4th Generation)"
                     price={598.0}
                     rating={4}
                     image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
                    </div>

                    <div className="home__row">
                      <Product id="90289332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor- Super Ultra Wide Dual
                       WQHD 5120 X 1440"
                     price={1150.0}
                     rating={3}
                     image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>
                    </div>
            </div>
        </div>
    )
}

export default Home
