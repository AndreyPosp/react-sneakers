import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'

function App() {
  const [onBasketOpen, setOnBasketOpen] = useState(false)
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetch('https://64a31f50b45881cc0ae62943.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => setItems(json))
  }, [])

  const onAddToCart = (obj) => {
    if (!cartItems.includes(obj)) {
      setCartItems((prev) => [...prev, obj])
    }
  }

  return (
    <div className='wrapper'>
      {onBasketOpen ? (
        <Drawer cartItems={cartItems} onClose={() => setOnBasketOpen(false)} />
      ) : null}
      <Header onOpen={() => setOnBasketOpen(true)} />
      <div className='content'>
        <div className='contentHeader'>
          <h1>Все кроссовки</h1>
          <div className='search'>
            <img src='/img/search.svg' alt='search' />
            <input placeholder='Поиск...' />
          </div>
        </div>
        <div className='merch'>
          {!items.length ? (
            <div className='loading'>Loading...</div>
          ) : (
            items.map((item, index) => (
              <Card
                key={index}
                name={item.title}
                price={item.price}
                img={item.imageUrl}
                onPlus={() => onAddToCart(item)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default App
