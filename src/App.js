import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentItems: [],
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'seriy_chair.jpg',
          desc: 'Очень качественный стул из китая, сделанный на века',
          category: 'chair',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Диван черный',
          img: 'black_sofa.jpg',
          desc: 'Очень качественный диван из китая, сделанный на века. Раскладной, может служить как диван и как кровать.',
          category: 'sofa',
          price: '79.99'
        },
        {
          id: 3,
          title: 'Шкаф белый',
          img: 'wardrobe.jpg',
          desc: 'Шкаф для ваших скелетов',
          category: 'wardrobe',
          price: '99.99'
        },
        {
          id: 4,
          title: 'Лампа настенная',
          img: 'wall_lump.jpg',
          desc: '  Что вершит судьбу человечества в этом мире? Некое незримое существо или закон, подобно Длани Господней парящей над миром? По крайне мере истинно то, что человек не властен даже над своей волей.',
          category: 'lump',
          price: '999.99'
        },
        {
          id: 5,
          title: 'Кресло серое',
          img: 'chair.jpg',
          desc: 'Идеально подходит для людей со скрытыми маниакальными наклонностями',
          category: 'chair',
          price: '49.99'
        }
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCat = this.chooseCat.bind(this)
  }
  render(){
  return (
    <div className='wrapper'>
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chCat={this.chooseCat}/>
      <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
      <Footer />
    </div>
  );
  }

  chooseCat(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item){
    let isInArr = false
    this.state.orders.forEach(el =>{
      if(el.id === item.id){
        isInArr = true
      }
    })
    if(!isInArr){
      this.setState({ orders: [...this.state.orders, item]})
    }
  }
}

export default App;
