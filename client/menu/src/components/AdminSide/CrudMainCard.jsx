import React from 'react'
import style from '../../styles/dishes.css'
import Axios from 'axios'

const CrudMainCard = (props) => {
    let badgeText
    if (props.products === 0){
        badgeText = 'Выберите другое блюдо'
    }
    else if (props.sale === 1){
        badgeText = 'АКЦИЯ'
    }

    const [isShown, setIsShown] = React.useState(false)

    const [newDesc, setNewDesc] = React.useState('')

    function toggleShown(){
        setIsShown(prevShown=>!prevShown)
    }


    function handleDelete(title){
        Axios.delete(`http://localhost:3001/api/delete/main_dish/${title}`)
      }

    function handleUpdate(title){
        Axios.put('http://localhost:3001/api/main_dish/update', {
            name: title,
            dishDesc: newDesc
        })
        setNewDesc('')
    }
  

  return (
    <div>
        <link rel="stylesheet" href={style}></link>
        <div className="card">
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={`data:image/jpeg;base64,${props.image}`} className="card--image" />
            <div className="card--stats">
                <img src={props.img} className="card--star" />
                <span>{}</span>
                <span className="gray">({}) • </span>
                {badgeText ? <span className="gray">{badgeText}</span> : <span className="gray">{props.location}</span>}
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
            {isShown && <p className='desc'>{props.description}</p>}

            <button className='showBtn' onClick={toggleShown}>Подробнее</button>

            <button className='showBtn' onClick={()=>{handleDelete(props.title)}}>Удалить</button>

            <input type="text" onChange={(event)=>{
                setNewDesc(event.target.value)
            }} />

            <button className='showBtn' onClick={()=>{handleUpdate(props.title)}} >Обновить описание</button>
        </div>
    </div>
  )
}

export default CrudMainCard