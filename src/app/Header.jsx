import React from "react";
import { SlMagnifier } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaRegUser } from "react-icons/fa";


function Header() {
  return (
    <div>
      <div className="header">
        <div className="logoMenu">
          <div className="logo">
            <img
              src="https://images.indianexpress.com/2021/01/myntra.png?w=640"
              alt=""
            />
          </div>
      
           <div className="menubar">
                <ul>
                    <li className="men">MEN
                        <div className="megamenu">

                            <div className="megamenu-box-1">
                                <ul>
                                    <li><a href="#">Topwear</a></li>
                                    <li>T-Shirt</li>
                                    <li>Casual Shirts</li>
                                    <li>htmlFormal Shirt</li>
                                    <li>Sweatshirts</li>
                                    <li>Sweaters</li>
                                    <li>Jacket</li>
                                    <li>Blazers & Coats</li>
                                    <li>Suits</li>
                                    <li>Rain Jacket</li>
                                    <li><a href="#">Indian & Festive Wear</a></li>
                                    <li>Kurtas & Kurta</li>
                                    <li>Sherwani</li>
                                    <li>nehru Jacket</li>
                                    <li>Dhotis</li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-1-->*/}

                            <div className="megamenu-box-2">
                                <ul>
                                    <li><a href="#">Bottomwear</a></li>
                                    <li>Jeans</li>
                                    <li>Casual Trousers</li>
                                    <li>htmlFormal Trousers</li>
                                    <li>Shorts</li>
                                    <li>Track Pants & Joggers</li>
                                    <li><a href="#">Innerwear & Sleepwear</a></li>
                                    <li>Briefs & Trunks</li>
                                    <li>Boxers</li>
                                    <li>Vests</li>
                                    <li>Sleepwear & Loungewear</li>
                                    <li>Thermals</li>
                                    <li><a href="#">Pluse Size</a></li>


                                </ul>



                            </div>
                            {/*<!--megamenu-box-2-->*/}


                            <div className="megamenu-box-3">
                                <ul>
                                    <li><a href="#">Footwear</a></li>
                                    
                                    <li>Casual Shoes</li>
                                    <li>Sports Shoes</li>
                                    <li>htmlFormal Shoes</li>
                                    <li>Sneakers</li>
                                    <li>Sandals & Floaters</li>
                                    <li>Flip Flops</li>
                                    <li>Socks</li>
                                    <li><a href="#">Personal Care & Grooming</a></li>
                                    
                                    
                                    <li><a href="#">Sunglasses & Frames Watches</a></li>


                                </ul>



                            </div>
                            {/*<!--megamenu-box-3-->*/}



                            <div className="megamenu-box-4">
                                <ul>
                                    <li><a href="#">Sports & Active Wear</a></li>
                                    <li>Sports Shoes</li>
                                    <li>Sports Sandals</li>
                                    <li>Active T-Shirts</li>
                                    <li>Track Paints & Shorts</li>
                                    <li>Tracksuits</li>
                                    <li>Jackets & Sweatshirts</li>
                                    <li>Sports Accessories</li>
                                    <li>Swimwear</li>
                                   
                                    <li><a href="#">Gadgets</a></li>
                                    <li>Smart Wearables</li>
                                    <li>Fitness Gadgets</li>
                                    <li>Headphones</li>
                                    <li>Speakers</li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-4-->*/}

                            <div className="megamenu-box-5">
                                <ul>
                                    <li><a href="#">Fashion Accessories</a></li>
                                    <li>Wallets</li>
                                    <li>Belts</li>
                                    <li>Perfumes & Body Mists</li>
                                    <li>Trimmers</li>
                                    <li>Deodorants</li>
                                    <li>Ties, Cuffinks & Pocket</li>
                                    <li>Accessory Gifts Sets </li>
                                    <li>Caps & Hats</li>
                                    <li>Phone Cases</li>
                                    <li><a href="#">Indian & Festive Wear</a></li>
                                    <li>Ring & Wristwear</li>
                                    <li>Helmets</li>
                                    <li>Mufflers</li>
                                    <li><a href="#">Bags & Backpacks</a></li>
                                    <li><a href="#">Luggages & Trolleys</a></li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-5-->*/}


                        </div>
                        {/*<!--MEGAMENU-->*/}
                    </li>
                    <li className="women">WOMEN
                        <div className="megamenu-1">

                            <div className="megamenu-box-1">
                                <ul>
                                    <li><a href="#">Topwear</a></li>
                                    <li>T-Shirt</li>
                                    <li>Casual Shirts</li>
                                    <li>htmlFormal Shirt</li>
                                    <li>Sweatshirts</li>
                                    <li>Sweaters</li>
                                    <li>Jacket</li>
                                    <li>Blazers & Coats</li>
                                    <li>Suits</li>
                                    <li>Rain Jacket</li>
                                    <li><a href="#">Indian & Festive Wear</a></li>
                                    <li>Kurtas & Kurta</li>
                                    <li>Sherwani</li>
                                    <li>nehru Jacket</li>
                                    <li>Dhotis</li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-1-->*/}

                            <div className="megamenu-box-2">
                                <ul>
                                    <li><a href="#">Bottomwear</a></li>
                                    <li>Jeans</li>
                                    <li>Casual Trousers</li>
                                    <li>htmlFormal Trousers</li>
                                    <li>Shorts</li>
                                    <li>Track Pants & Joggers</li>
                                    <li><a href="#">Innerwear & Sleepwear</a></li>
                                    <li>Briefs & Trunks</li>
                                    <li>Boxers</li>
                                    <li>Vests</li>
                                    <li>Sleepwear & Loungewear</li>
                                    <li>Thermals</li>
                                    <li><a href="#">Pluse Size</a></li>


                                </ul>



                            </div>
                            {/*<!--megamenu-box-2-->*/}


                            <div className="megamenu-box-3">
                                <ul>
                                    <li><a href="#">Footwear</a></li>
                                    
                                    <li>Casual Shoes</li>
                                    <li>Sports Shoes</li>
                                    <li>htmlFormal Shoes</li>
                                    <li>Sneakers</li>
                                    <li>Sandals & Floaters</li>
                                    <li>Flip Flops</li>
                                    <li>Socks</li>
                                    <li><a href="#">Personal Care & Grooming</a></li>
                                    
                                    
                                    <li><a href="#">Sunglasses & Frames Watches</a></li>


                                </ul>



                            </div>
                            {/*<!--megamenu-box-3-->*/}



                            <div className="megamenu-box-4">
                                <ul>
                                    <li><a href="#">Sports & Active Wear</a></li>
                                    <li>Sports Shoes</li>
                                    <li>Sports Sandals</li>
                                    <li>Active T-Shirts</li>
                                    <li>Track Paints & Shorts</li>
                                    <li>Tracksuits</li>
                                    <li>Jackets & Sweatshirts</li>
                                    <li>Sports Accessories</li>
                                    <li>Swimwear</li>
                                   
                                    <li><a href="#">Gadgets</a></li>
                                    <li>Smart Wearables</li>
                                    <li>Fitness Gadgets</li>
                                    <li>Headphones</li>
                                    <li>Speakers</li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-4-->*/}

                            <div className="megamenu-box-5">
                                <ul>
                                    <li><a href="#">Fashion Accessories</a></li>
                                    <li>Wallets</li>
                                    <li>Belts</li>
                                    <li>Perfumes & Body Mists</li>
                                    <li>Trimmers</li>
                                    <li>Deodorants</li>
                                    <li>Ties, Cuffinks & Pocket</li>
                                    <li>Accessory Gifts Sets </li>
                                    <li>Caps & Hats</li>
                                    <li>Phone Cases</li>
                                    <li><a href="#">Indian & Festive Wear</a></li>
                                    <li>Ring & Wristwear</li>
                                    <li>Helmets</li>
                                    <li>Mufflers</li>
                                    <li><a href="#">Bags & Backpacks</a></li>
                                    <li><a href="#">Luggages & Trolleys</a></li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-5-->*/}


                        </div>
                        {/*<!--MEGAMENU-->*/}
                        </li>

                       
                    <li className="kids">KIDS
                        <div className="megamenu-1-kids">

                            <div className="megamenu-box-1">
                                <ul>
                                    <li><a href="#">Topwear</a></li>
                                    <li>T-Shirt</li>
                                    <li>Casual Shirts</li>
                                    <li>htmlFormal Shirt</li>
                                    <li>Sweatshirts</li>
                                    <li>Sweaters</li>
                                    <li>Jacket</li>
                                    <li>Blazers & Coats</li>
                                    <li>Suits</li>
                                    <li>Rain Jacket</li>
                                    <li><a href="#">Indian & Festive Wear</a></li>
                                    <li>Kurtas & Kurta</li>
                                    <li>Sherwani</li>
                                    <li>nehru Jacket</li>
                                    <li>Dhotis</li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-1-->*/}

                            <div className="megamenu-box-2">
                                <ul>
                                    <li><a href="#">Bottomwear</a></li>
                                    <li>Jeans</li>
                                    <li>Casual Trousers</li>
                                    <li>htmlFormal Trousers</li>
                                    <li>Shorts</li>
                                    <li>Track Pants & Joggers</li>
                                    <li><a href="#">Innerwear & Sleepwear</a></li>
                                    <li>Briefs & Trunks</li>
                                    <li>Boxers</li>
                                    <li>Vests</li>
                                    <li>Sleepwear & Loungewear</li>
                                    <li>Thermals</li>
                                    <li><a href="#">Pluse Size</a></li>


                                </ul>



                            </div>
                            {/*<!--megamenu-box-2-->*/}


                            <div className="megamenu-box-3">
                                <ul>
                                    <li><a href="#">Footwear</a></li>
                                    
                                    <li>Casual Shoes</li>
                                    <li>Sports Shoes</li>
                                    <li>htmlFormal Shoes</li>
                                    <li>Sneakers</li>
                                    <li>Sandals & Floaters</li>
                                    <li>Flip Flops</li>
                                    <li>Socks</li>
                                    <li><a href="#">Personal Care & Grooming</a></li>
                                    
                                    
                                    <li><a href="#">Sunglasses & Frames Watches</a></li>


                                </ul>



                            </div>
                            {/*<!--megamenu-box-3-->*/}



                            <div className="megamenu-box-4">
                                <ul>
                                    <li><a href="#">Sports & Active Wear</a></li>
                                    <li>Sports Shoes</li>
                                    <li>Sports Sandals</li>
                                    <li>Active T-Shirts</li>
                                    <li>Track Paints & Shorts</li>
                                    <li>Tracksuits</li>
                                    <li>Jackets & Sweatshirts</li>
                                    <li>Sports Accessories</li>
                                    <li>Swimwear</li>
                                   
                                    <li><a href="#">Gadgets</a></li>
                                    <li>Smart Wearables</li>
                                    <li>Fitness Gadgets</li>
                                    <li>Headphones</li>
                                    <li>Speakers</li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-4-->*/}

                            <div className="megamenu-box-5">
                                <ul>
                                    <li><a href="#">Fashion Accessories</a></li>
                                    <li>Wallets</li>
                                    <li>Belts</li>
                                    <li>Perfumes & Body Mists</li>
                                    <li>Trimmers</li>
                                    <li>Deodorants</li>
                                    <li>Ties, Cuffinks & Pocket</li>
                                    <li>Accessory Gifts Sets </li>
                                    <li>Caps & Hats</li>
                                    <li>Phone Cases</li>
                                    <li><a href="#">Indian & Festive Wear</a></li>
                                    <li>Ring & Wristwear</li>
                                    <li>Helmets</li>
                                    <li>Mufflers</li>
                                    <li><a href="#">Bags & Backpacks</a></li>
                                    <li><a href="#">Luggages & Trolleys</a></li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-5-->*/}


                        </div>
                        {/*<!--MEGAMENU-->*/}
                        </li>
                        <li className="kids">HOME & LIVING
                        <div className="megamenu-1">

                            <div className="megamenu-box-1">
                                <ul>
                                    <li><a href="#">Topwear</a></li>
                                    <li>T-Shirt</li>
                                    <li>Casual Shirts</li>
                                    <li>htmlFormal Shirt</li>
                                    <li>Sweatshirts</li>
                                    <li>Sweaters</li>
                                    <li>Jacket</li>
                                    <li>Blazers & Coats</li>
                                    <li>Suits</li>
                                    <li>Rain Jacket</li>
                                    <li><a href="#">Indian & Festive Wear</a></li>
                                    <li>Kurtas & Kurta</li>
                                    <li>Sherwani</li>
                                    <li>nehru Jacket</li>
                                    <li>Dhotis</li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-1-->*/}

                            <div className="megamenu-box-2">
                                <ul>
                                    <li><a href="#">Bottomwear</a></li>
                                    <li>Jeans</li>
                                    <li>Casual Trousers</li>
                                    <li>htmlFormal Trousers</li>
                                    <li>Shorts</li>
                                    <li>Track Pants & Joggers</li>
                                    <li><a href="#">Innerwear & Sleepwear</a></li>
                                    <li>Briefs & Trunks</li>
                                    <li>Boxers</li>
                                    <li>Vests</li>
                                    <li>Sleepwear & Loungewear</li>
                                    <li>Thermals</li>
                                    <li><a href="#">Pluse Size</a></li>


                                </ul>



                            </div>
                            {/*<!--megamenu-box-2-->*/}


                            <div className="megamenu-box-3">
                                <ul>
                                    <li><a href="#">Footwear</a></li>
                                    
                                    <li>Casual Shoes</li>
                                    <li>Sports Shoes</li>
                                    <li>htmlFormal Shoes</li>
                                    <li>Sneakers</li>
                                    <li>Sandals & Floaters</li>
                                    <li>Flip Flops</li>
                                    <li>Socks</li>
                                    <li><a href="#">Personal Care & Grooming</a></li>
                                    
                                    
                                    <li><a href="#">Sunglasses & Frames Watches</a></li>


                                </ul>



                            </div>
                            {/*<!--megamenu-box-3-->*/}



                            <div className="megamenu-box-4">
                                <ul>
                                    <li><a href="#">Sports & Active Wear</a></li>
                                    <li>Sports Shoes</li>
                                    <li>Sports Sandals</li>
                                    <li>Active T-Shirts</li>
                                    <li>Track Paints & Shorts</li>
                                    <li>Tracksuits</li>
                                    <li>Jackets & Sweatshirts</li>
                                    <li>Sports Accessories</li>
                                    <li>Swimwear</li>
                                   
                                    <li><a href="#">Gadgets</a></li>
                                    <li>Smart Wearables</li>
                                    <li>Fitness Gadgets</li>
                                    <li>Headphones</li>
                                    <li>Speakers</li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-4-->*/}

                            <div className="megamenu-box-5">
                                <ul>
                                    <li><a href="#">Fashion Accessories</a></li>
                                    <li>Wallets</li>
                                    <li>Belts</li>
                                    <li>Perfumes & Body Mists</li>
                                    <li>Trimmers</li>
                                    <li>Deodorants</li>
                                    <li>Ties, Cuffinks & Pocket</li>
                                    <li>Accessory Gifts Sets </li>
                                    <li>Caps & Hats</li>
                                    <li>Phone Cases</li>
                                    <li><a href="#">Indian & Festive Wear</a></li>
                                    <li>Ring & Wristwear</li>
                                    <li>Helmets</li>
                                    <li>Mufflers</li>
                                    <li><a href="#">Bags & Backpacks</a></li>
                                    <li><a href="#">Luggages & Trolleys</a></li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-5-->*/}


                        </div>
                        {/*<!--MEGAMENU-->*/}
                        </li>
                  <li className="kids">BEAUTY
                        <div className="megamenu-1-kids">

                            <div className="megamenu-box-1">
                                <ul>
                                    <li><a href="#">Topwear</a></li>
                                    <li>T-Shirt</li>
                                    <li>Casual Shirts</li>
                                    <li>htmlFormal Shirt</li>
                                    <li>Sweatshirts</li>
                                    <li>Sweaters</li>
                                    <li>Jacket</li>
                                    <li>Blazers & Coats</li>
                                    <li>Suits</li>
                                    <li>Rain Jacket</li>
                                    <li><a href="#">Indian & Festive Wear</a></li>
                                    <li>Kurtas & Kurta</li>
                                    <li>Sherwani</li>
                                    <li>nehru Jacket</li>
                                    <li>Dhotis</li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-1-->*/}

                            <div className="megamenu-box-2">
                                <ul>
                                    <li><a href="#">Bottomwear</a></li>
                                    <li>Jeans</li>
                                    <li>Casual Trousers</li>
                                    <li>htmlFormal Trousers</li>
                                    <li>Shorts</li>
                                    <li>Track Pants & Joggers</li>
                                    <li><a href="#">Innerwear & Sleepwear</a></li>
                                    <li>Briefs & Trunks</li>
                                    <li>Boxers</li>
                                    <li>Vests</li>
                                    <li>Sleepwear & Loungewear</li>
                                    <li>Thermals</li>
                                    <li><a href="#">Pluse Size</a></li>


                                </ul>



                            </div>
                            {/*<!--megamenu-box-2-->*/}


                            <div className="megamenu-box-3">
                                <ul>
                                    <li><a href="#">Footwear</a></li>
                                    
                                    <li>Casual Shoes</li>
                                    <li>Sports Shoes</li>
                                    <li>htmlFormal Shoes</li>
                                    <li>Sneakers</li>
                                    <li>Sandals & Floaters</li>
                                    <li>Flip Flops</li>
                                    <li>Socks</li>
                                    <li><a href="#">Personal Care & Grooming</a></li>
                                    
                                    
                                    <li><a href="#">Sunglasses & Frames Watches</a></li>


                                </ul>



                            </div>
                            {/*<!--megamenu-box-3-->*/}



                            <div className="megamenu-box-4">
                                <ul>
                                    <li><a href="#">Sports & Active Wear</a></li>
                                    <li>Sports Shoes</li>
                                    <li>Sports Sandals</li>
                                    <li>Active T-Shirts</li>
                                    <li>Track Paints & Shorts</li>
                                    <li>Tracksuits</li>
                                    <li>Jackets & Sweatshirts</li>
                                    <li>Sports Accessories</li>
                                    <li>Swimwear</li>
                                   
                                    <li><a href="#">Gadgets</a></li>
                                    <li>Smart Wearables</li>
                                    <li>Fitness Gadgets</li>
                                    <li>Headphones</li>
                                    <li>Speakers</li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-4-->*/}

                            <div className="megamenu-box-5">
                                <ul>
                                    <li><a href="#">Fashion Accessories</a></li>
                                    <li>Wallets</li>
                                    <li>Belts</li>
                                    <li>Perfumes & Body Mists</li>
                                    <li>Trimmers</li>
                                    <li>Deodorants</li>
                                    <li>Ties, Cuffinks & Pocket</li>
                                    <li>Accessory Gifts Sets </li>
                                    <li>Caps & Hats</li>
                                    <li>Phone Cases</li>
                                    <li><a href="#">Indian & Festive Wear</a></li>
                                    <li>Ring & Wristwear</li>
                                    <li>Helmets</li>
                                    <li>Mufflers</li>
                                    <li><a href="#">Bags & Backpacks</a></li>
                                    <li><a href="#">Luggages & Trolleys</a></li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-5-->*/}


                        </div>
                        {/*<!--MEGAMENU-->*/}
                        </li>
                {/*<li>STUDIO<sup>New</sup></li>*/}
                <li className="kids">STUDIO<sup>New</sup>
                        <div className="megamenu-1-kids">
                                    
                            <div className="megamenu-box-1">
                                <ul>
                                    <li><a href="#">Topwear</a></li>
                                    <li>T-Shirt</li>
                                    <li>Casual Shirts</li>
                                    <li>htmlFormal Shirt</li>
                                    <li>Sweatshirts</li>
                                    <li>Sweaters</li>
                                    <li>Jacket</li>
                                    <li>Blazers & Coats</li>
                                    <li>Suits</li>
                                    <li>Rain Jacket</li>
                                    <li><a href="#">Indian & Festive Wear</a></li>
                                    <li>Kurtas & Kurta</li>
                                    <li>Sherwani</li>
                                    <li>nehru Jacket</li>
                                    <li>Dhotis</li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-1-->*/}

                            <div className="megamenu-box-2">
                                <ul>
                                    <li><a href="#">Bottomwear</a></li>
                                    <li>Jeans</li>
                                    <li>Casual Trousers</li>
                                    <li>htmlFormal Trousers</li>
                                    <li>Shorts</li>
                                    <li>Track Pants & Joggers</li>
                                    <li><a href="#">Innerwear & Sleepwear</a></li>
                                    <li>Briefs & Trunks</li>
                                    <li>Boxers</li>
                                    <li>Vests</li>
                                    <li>Sleepwear & Loungewear</li>
                                    <li>Thermals</li>
                                    <li><a href="#">Pluse Size</a></li>


                                </ul>



                            </div>
                            {/*<!--megamenu-box-2-->*/}


                            <div className="megamenu-box-3">
                                <ul>
                                    <li><a href="#">Footwear</a></li>
                                    
                                    <li>Casual Shoes</li>
                                    <li>Sports Shoes</li>
                                    <li>htmlFormal Shoes</li>
                                    <li>Sneakers</li>
                                    <li>Sandals & Floaters</li>
                                    <li>Flip Flops</li>
                                    <li>Socks</li>
                                    <li><a href="#">Personal Care & Grooming</a></li>
                                    
                                    
                                    <li><a href="#">Sunglasses & Frames Watches</a></li>


                                </ul>



                            </div>
                            {/*<!--megamenu-box-3-->*/}



                            <div className="megamenu-box-4">
                                <ul>
                                    <li><a href="#">Sports & Active Wear</a></li>
                                    <li>Sports Shoes</li>
                                    <li>Sports Sandals</li>
                                    <li>Active T-Shirts</li>
                                    <li>Track Paints & Shorts</li>
                                    <li>Tracksuits</li>
                                    <li>Jackets & Sweatshirts</li>
                                    <li>Sports Accessories</li>
                                    <li>Swimwear</li>
                                   
                                    <li><a href="#">Gadgets</a></li>
                                    <li>Smart Wearables</li>
                                    <li>Fitness Gadgets</li>
                                    <li>Headphones</li>
                                    <li>Speakers</li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-4-->*/}

                            <div className="megamenu-box-5">
                                <ul>
                                    <li><a href="#">Fashion Accessories</a></li>
                                    <li>Wallets</li>
                                    <li>Belts</li>
                                    <li>Perfumes & Body Mists</li>
                                    <li>Trimmers</li>
                                    <li>Deodorants</li>
                                    <li>Ties, Cuffinks & Pocket</li>
                                    <li>Accessory Gifts Sets </li>
                                    <li>Caps & Hats</li>
                                    <li>Phone Cases</li>
                                    <li><a href="#">Indian & Festive Wear</a></li>
                                    <li>Ring & Wristwear</li>
                                    <li>Helmets</li>
                                    <li>Mufflers</li>
                                    <li><a href="#">Bags & Backpacks</a></li>
                                    <li><a href="#">Luggages & Trolleys</a></li>
                                </ul>
                            </div>
                            {/*<!--megamenu-box-5-->*/}


                        </div>
                        {/*<!--MEGAMENU-->*/}
                        </li>
                </ul>

            </div>
          {/* menubar */}
        </div>
        {/* logomenu */}
        <div className="search">
        
        <SlMagnifier />
            <input type="text " placeholder="Search htmlFor product brand and more" />

        </div>
        {/* search */}
        <div className="icons">
            <div className="profile">
            <FaRegUser className="proIcon"/>
            <p className="profilePra">profile</p>
            </div>
            <div className="profile">
            <FaRegHeart  className="proIcon"/>
            <p className="profilePra">Wishlist</p>
            </div>
            <div className="profile">
            <FiShoppingCart  className="proIcon" />
            <p className="profilePra">Beg</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
