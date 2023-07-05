function Header({ onOpen }) {
  return (
    <>
      <header className='header'>
        <div className='headerLeft'>
          <img alt={'logo'} width={40} height={40} src='img/logo.png' />
          <div className='headerInfo'>
            <h3>React Sneakers </h3>
            <p>Магазин спортивных кросовок</p>
          </div>
        </div>
        <div className='headerRight'>
          <li>
            <img
              className='cart'
              onClick={onOpen}
              alt='cart'
              src='/img/card.svg'
            />
            <span>1205 руб.</span>
          </li>
          <li>
            <img alt='favourite' src='/img/favor.svg' />
          </li>
          <li>
            <img alt='user' src='/img/user.svg' />
          </li>
        </div>
      </header>
    </>
  )
}

export default Header
