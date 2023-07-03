const Drawer = () => {
  return (
    <div className='overlay'>
      <div className='drawer'>
        <h2>
          Корзина
          <img
            className='cartItem_btn-remove'
            src='img/btn_remove.svg'
            alt='remove'
          />
        </h2>
        <div className='cartItems'>
          <div className='cartItem'>
            <img
              className='cartItem_img'
              src='/img/sneakers/4.jpg'
              alt='sneakers'
            />
            <div className='cartItem_text'>
              <p className='cartItem_name'>
                Кроссовки Puma X Aka Boku Future Rider
              </p>
              <div className='cartItem_price'>17840 руб.</div>
            </div>
            <img
              className='cartItem_btn-remove'
              src='img/btn_remove.svg'
              alt='remove'
            />
          </div>

          <div className='cartItem'>
            <img
              className='cartItem_img'
              src='/img/sneakers/2.jpg'
              alt='sneakers'
            />
            <div className='cartItem_text'>
              <p className='cartItem_name'>
                Кроссовки Puma X Aka Boku Future Rider
              </p>
              <div className='cartItem_price'>17840 руб.</div>
            </div>
            <img
              className='cartItem_btn-remove'
              src='img/btn_remove.svg'
              alt='remove'
            />
          </div>
        </div>
        <div>
          <div className='drawer__bill'>
            <div>Итого:</div>
            <div>21498 руб.</div>
          </div>
          <div className='drawer__tax'>
            <div>Налог 5%:</div>
            <div>1074 руб.</div>
          </div>
          <button className='drawer__button'>
            Оформить заказ{' '}
            <img
              className='drawer__button-arrow'
              alt='заказать'
              src='./img/arrow.svg'
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer
