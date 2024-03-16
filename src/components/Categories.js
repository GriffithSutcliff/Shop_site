import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'chair',
                    name: 'Cтулья'
                },
                {
                    key: 'sofa',
                    name: 'Диваны'
                },
                {
                    key: 'wardrobe',
                    name: 'Шкафы'
                },
                {
                    key: 'lump',
                    name: 'Лампы'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chCat(el.key)} >{el.name}</div>
            ))}
      </div>
    )
  }
}

export default Categories