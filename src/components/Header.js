import React, { useState } from 'react'
import { GiShoppingBag } from "react-icons/gi";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
                <li>О нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
            <GiShoppingBag onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
        </div>
        {cartOpen && (
          <div className='shop-cart'>
            
          </div>
        )}
        <div className='presentation'></div>
    </header>
  )
}
