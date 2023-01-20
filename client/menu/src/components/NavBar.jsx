import React from 'react'
import style from '../styles/nav.css'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  return (
    <div>
        <link rel="stylesheet" href={style}></link>
        <nav className='navbar'>
            <NavLink to='/' className='LogoImg'><img src={props.img} className='nav--logo'/></NavLink>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/deserts'>Десерты</NavLink>
            <NavLink to='/mainDish'>Вторые блюда</NavLink>
            <NavLink to='/drinks'>Напитки</NavLink>
            {/* <NavLink to='/crud_dish'>Добавить</NavLink> */}
        </nav>
    </div>
  )
}

export default Nav
