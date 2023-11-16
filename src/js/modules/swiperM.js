import Swiper from 'swiper'
import {Navigation} from 'swiper/modules'
import 'swiper/swiper-bundle.css'

function swiperM(){
    const swiper = new Swiper('.popular__swiper', {
        modules: [Navigation],
        slidesPerView: 4,
        spaceBetween: 32, 
        navigation: {
            prevEl: '.pop-btn__prev',
            nextEl: '.pop-btn__next',
        },
        breakpoints:{
            0:{
                slidesPerView: 1,
            },
            500:{
                slidesPerView: 2,
            },
            700:{
                slidesPerView: 2,
            },
            740:{
                slidesPerView: 3,
            },
            1000: {
                slidesPerView: 4,
            }
        }
    })     
}

export default swiperM