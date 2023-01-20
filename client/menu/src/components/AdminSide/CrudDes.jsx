import React, { useState, useRef } from 'react'
import { Buffer } from 'buffer';

import style from '../../styles/crud.css'
import Axios from 'axios'
import imgStar from '../../images/Star.png'
import CrudDesCard from './CrudDesCard';
import { NavLink } from 'react-router-dom'

const CrudDes = () => {
    const [formData, setFormData] = React.useState({
        title: '',
        description: '',
        price: '',
        rating: '',
        image: '',
        sale: true,
        products: true,
        newDesc: ''
    })

    const [desertList, setDesertList] = React.useState([])

    const DesrtMenuArr = desertList.map(dish=>{
        return <CrudDesCard
        key={dish.id}
        img={imgStar}
        {...dish}/>
      })
  
      React.useEffect(()=>{
        Axios.get('http://localhost:3001/api/get/desert').then((response)=>{
            setDesertList(response.data)
        })
      }, [])
  
      function handleChange(event) {
          const {name, value, type, checked} = event.target
  
          setFormData(prevFormData => {
              return{
                  ...prevFormData,
                  [name]: type === 'checkbox' ? checked : value
              }
          })
      }
  
  
      function handleImageChange(event) {
          const file = event.target.files[0];
          const reader = new FileReader();
      
          reader.onload = function(event) {
            const imageData = event.target.result;
            setFormData(prevFormData => {
              return {
                ...prevFormData,
                image: imageData
              }
            })
            // You can now use the image data (stored as a base64 string) to send the image to the server or display it on the page
          };
      
          reader.readAsDataURL(file);
        }
  
        
      
  
      function handleSubmit(event){
          event.preventDefault()
          Axios.post('http://localhost:3001/api/insert/desert',{
            title: formData.title,
            description: formData.description,
            price: formData.price,
            rating: formData.rating,
            image: formData.image,
            sale: formData.sale,
            products: formData.products
          }).then(()=>{
              console.log(formData)
          })
      };
  

  return (
    <main>
        <link rel="stylesheet" href={style} />
        <div className='form' >
            <input type="file"
            accept='image/jpeg, image/svg+xml, image/png'
            placeholder='Фото блюда'
            name="image"
            onChange = {handleImageChange}
            />

            <input type='text'
            placeholder='Название блюда'
            name='title'
            value={formData.title}
            onChange = {handleChange}/>

            <input type='text'
            placeholder='Описание блюда'
            name='description'
            value={formData.description}
            onChange={handleChange}
            />

            <input type='text'
            placeholder='Стоимость'
            name='price'
            value={formData.price}
            onChange={handleChange}/>

            <input type='text'
            placeholder='Рейтинг'
            name='rating'
            value={formData.rating}
            onChange={handleChange}/>

            <input 
            type="checkbox"
            name='sale'
            id='sale'
            checked={formData.sale}
            onChange={handleChange}
             />

            <label htmlFor='sale'>На блюдо действует скидка?</label>

            <input 
            type="checkbox"
            name='products'
            id='products'
            checked={formData.products}
            onChange={handleChange}
             />

            <label htmlFor='products'>Продукты в наличии?</label>
            <br />

            <button className="form--button" onClick={handleSubmit}>Подтвердить</button>
        </div>
        <section className='cards-list'>{DesrtMenuArr}</section>

        <div className='admin_links'>
          <NavLink to='/crud_des' className='admin_link'>Десерты</NavLink>
          <br />
          <NavLink to='/crud_main' className='admin_link'>Основные блюда</NavLink>
          <br />
          <NavLink to='/crud_drinks' className='admin_link'>Напитки</NavLink>
        </div>
    </main>
  )
}

export default CrudDes