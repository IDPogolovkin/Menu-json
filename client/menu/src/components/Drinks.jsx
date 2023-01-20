import React from 'react'
import style from '../styles/dishes.css'


const Drinks = (props) => {

  let badgeText
  if (props.products === false){
      badgeText = 'Выберите другое блюдо'
  }
  else if (props.sale === true){
      badgeText = 'АКЦИЯ'
  }

  const [isShown, setIsShown] = React.useState(false)

  function toggleShown(){
      setIsShown(prevShown=>!prevShown)
  }

  return (
  <div>
    <link rel="stylesheet" href={style}></link>
    <div className="card">
        {badgeText && <div className='card--badge'>{badgeText}</div>}
        {/* <img src={`data:image/jpeg;base64,${props.coverImg}`} className="card--image" /> */}
        <img src={props.coverImg} className="card--image" />
        <div className="card--stats">
            <img src={props.img} className="card--star" />
            <span>{}</span>
            <span className="gray">({props.stats.rating}) • </span>
            {badgeText && <span className="gray">{badgeText}</span>}
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        {isShown && <p className='desc'>{props.description}</p>}

        <button className='showBtn' onClick={toggleShown}>Подробнее</button>
    </div>
</div>
  )
}

export default Drinks