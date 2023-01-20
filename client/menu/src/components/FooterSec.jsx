import React from 'react'
import style from '../styles/footerSec.css'

const FooterSec = () => {
  return (
    <section class="footer">
    <link rel="stylesheet" href={style} />
        <div class="box-container">

            <div class="box">
                <h3>Локации</h3>
                <a href="#">Ул. Кабанбай батыра 60а/6</a>
                <a href="#">проспект Туран 18</a>
                <a href="#">ул. Кабанбай батыра 44</a>
                <a href="#">г. Караганда ул. Пушкина 15</a>
            </div>

            <div class="box">
                <h3>Контакты</h3>
                <a href="#">+7-776-134-4060</a>
                <a href="#">+7-708-750-5002</a>
                <a href="#">daniilpogolovkin@gmail.com</a>
            </div>

            <div class="box">
                <h3>Мы тут</h3>
                <a href="#">facebook</a>
                <a href="#">twitter</a>
                <a href="#">instagram</a>
            </div>

        </div>

    <div class="credit">2023 @<span> by Daniil Pogolovkin</span> </div>

</section>
  )
}

export default FooterSec