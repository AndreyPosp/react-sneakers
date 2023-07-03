import './App.css'
import Card from './components/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'

function App() {
  return (
    <div className='wrapper'>
      <Drawer />
      <Header />
      <div className='content'>
        <div className='contentHeader'>
          <h1>Все кроссовки</h1>
          <div className='search'>
            <img src='/img/search.svg' alt='search' />
            <input placeholder='Поиск...' />
          </div>
        </div>
        <div className='merch'>
          <Card
            name='Мужские Кроссовки Nike Blazer Mid Suede'
            price='12990'
            img='/img/sneakers/1.jpg'
          />
          <Card
            name='Мужские Кроссовки Nike Air Max 270'
            price='12999'
            img='/img/sneakers/2.jpg'
          />
          <Card
            name='Мужские Кроссовки Nike Blazer Mid Suede'
            price='15350'
            img='/img/sneakers/3.jpg'
          />
          <Card
            name='Кроссовки Puma X Aka Boku Future Rider'
            price='17840'
            img='/img/sneakers/4.jpg'
          />
          <Card
            name='Мужские Кроссовки Nike Blazer Mid Suede'
            price='12990'
            img='/img/sneakers/1.jpg'
          />
          <Card
            name='Мужские Кроссовки Nike Air Max 270'
            price='12999'
            img='/img/sneakers/2.jpg'
          />
          <Card
            name='Мужские Кроссовки Nike Blazer Mid Suede'
            price='15350'
            img='/img/sneakers/3.jpg'
          />
          <Card
            name='Кроссовки Puma X Aka Boku Future Rider'
            price='17840'
            img='/img/sneakers/4.jpg'
          />
        </div>
      </div>
    </div>
  )
}

export default App
