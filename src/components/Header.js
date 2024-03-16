import React, { useState } from 'react'
import { GiShoppingBag } from "react-icons/gi";
import Order from './Order';

const showOrders=(props)=>{
  return (<div>
  {props.orders.map(el => (
    <Order key={el.id} item={el} />
  ))}
  </div>)
}

const showNothing=()=>{
  return (<div className='empty'>
    <h3>Тут пока ничего нет</h3>
  </div>)
}

export default function Header(props) {
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
            {props.orders.length > 0 ?
            showOrders(props) : showNothing()}
          </div>
        )}
        <div className='presentation'></div>
    </header>
  )
}
