import React, { Component } from 'react'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img}  alt='изображение продукта'/>
        <h1>{this.props.item.title}</h1>
        <b>{this.props.item.price}$</b>
      </div>
    )
  }
}

export default Order