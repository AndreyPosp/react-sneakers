import { useState } from 'react'

function Card({ name, price, img, onPlus, onIsAdded }) {
  const [isAdded, setIsAdded] = useState('false')
  const [isFovour, setIsFovour] = useState('false')

  const addBasketHandler = () => {
    setIsAdded(!isAdded)
    onPlus()
  }
  const addFovour = () => {
    setIsFovour(!isFovour)
  }

  return (
    <>
      <div className='content_card'>
        <img
          className='like'
          onClick={addFovour}
          alt='add fovourite'
          src={isFovour ? './img/like_off.svg' : './img/like_on.svg'}
        />
        <img className='content_card_img' src={img} alt='sneakers' />
        <p className='content_card_name'>{name}</p>
        <div className='content_card_footer'>
          <div className='content_card_pricewrapper'>
            <div className='content_card_pricename'>Цена:</div>
            <div className='content_card_price'>{price} руб.</div>
          </div>
          <img
            className='content_card_button-plus'
            alt='plus'
            onClick={addBasketHandler}
            src={isAdded ? '/img/add_button.svg' : '/img/checked.svg'}
          />
        </div>
      </div>
    </>
  )
}

export default Card
