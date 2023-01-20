import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';
import data from './json data/data';
import deserts_data from './json data/deserts_data';
import imgStar from './images/Star.png'
import FooterSec from './components/FooterSec';
import {Route, Routes } from 'react-router-dom';
import Deserts from './components/Deserts';
import MainDishes from './components/MainDishes';
import Drinks from './components/Drinks';
import CrudDish from './components/AdminSide/CrudDish';
import React from 'react';
import Axios from 'axios'
import CrudDes from './components/AdminSide/CrudDes';
import CrudMain from './components/AdminSide/CrudMain';
import CrudDrink from './components/AdminSide/CrudDrink';
import main_data from './json data/main_data';
import drinks_data from './json data/drinks_data';

function App() {
  const [menuList, setMenuList] = React.useState([])
  const [desertList, setDesertList] = React.useState([])
  const [mainDishList, setMainDishList] = React.useState([])
  const [drinkList, SetDrinkList] = React.useState([])

  const MainMenuArr = data.map(dish =>{
    return <Card
    key={dish.id}
    img={imgStar}
    {...dish}
    covImg={data.coverImg}/>
  })

  const DesrtMenuArr = deserts_data.map(dish=>{
    return <Deserts 
    key={dish.id}
    img={imgStar}
    {...dish}/>
  })

  const MainDishArr = main_data.map(dish=>{
    return <MainDishes
    key={dish.id}
    img={imgStar}
    {...dish}/>
  })

  const DrinksArr = drinks_data.map(dish=>{
    return <Drinks
    key={dish.id}
    img={imgStar}
    {...dish}/>
  })

  React.useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
        setMenuList(response.data)
    })
  }, [])

  React.useEffect(()=>{
    Axios.get('http://localhost:3001/api/get/desert').then((response)=>{
        setDesertList(response.data)
    })
  }, [])

  React.useEffect(()=>{
    Axios.get('http://localhost:3001/api/get/mainDish').then((response)=>{
      setMainDishList(response.data)
    })
  }, [])

  React.useEffect(()=>{
    Axios.get('http://localhost:3001/api/get/drinks').then((response)=>{
      SetDrinkList(response.data)
    })
  }, [])

  return (
    <div className="App">
      <NavBar img='https://coffeeboom.kz/themes/coffeeboom/src/build/images/logo.svg'/>
      <Routes>
          <Route path='/' element={<section className='cards-list'>{MainMenuArr}</section>} />
          <Route path='/deserts' element={<section className='cards-list'>{DesrtMenuArr}</section>}/>
          <Route path='/mainDish' element={<section className='cards-list'>{MainDishArr}</section>} />
          <Route path='/drinks' element={<section className='cards-list'>{DrinksArr}</section>} />
          <Route path='/crud_dish' element={<CrudDish />} />
          <Route path='/crud_des' element={<CrudDes />} />
          <Route path='/crud_main' element={<CrudMain />} />
          <Route path='/crud_drinks' element={<CrudDrink />} />
       </Routes> 
      <FooterSec />
    </div>
  );
}

export default App;
