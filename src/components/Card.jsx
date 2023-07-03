function Card({ name, price, img }) {
  return (
    <>
      <div className='content_card'>
        <img className='like' alt='add fovourite' src='./img/like_off.svg' />
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
            src='/img/add_button.svg'
          />
        </div>
      </div>
    </>
  )
}

export default Card
