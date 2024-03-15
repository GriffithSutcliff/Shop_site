import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'seriy_chair.jpg',
          desc: 'Очень качественный стул из китая, сделанный на века',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стул черный',
          img: 'seriy_chair.jpg',
          desc: 'Очень качественный стул из китая, сделанный на века',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 3,
          title: 'Стул желтый',
          img: 'seriy_chair.jpg',
          desc: 'Очень качественный стул из китая, сделанный на века',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 4,
          title: 'Стул красный',
          img: 'seriy_chair.jpg',
          desc: 'Очень качественный стул из китая, сделанный на века',
          category: 'chairs',
          price: '49.99'
        }
      ]
    }
  }
  render(){
  return (
    <div className='wrapper'>
      <Header />
      <Items items={this.state.items} />
      <Footer />
    </div>
  );
  }
}

export default App;
