import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'


import { themeContext } from '../../Context'
import { useContext } from 'react'


import './Portfolio.css'

const Portfolio = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;
	return (
		<section id="portfolio">
			<div className="portfolio">
				{/*Heading*/}
				<span style={{color: darkMode ? 'white':''}}>Recent Projects</span>
				<span>Portfolio</span>
				{/*Swiper*/}
				<Swiper
				spaceBetween={0}
				slidesPerView={4}
				grabCursor={true}
				className="portfolio-slider"
				>
					<SwiperSlide>
						<img src={Sidebar} alt="sidebar" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Ecommerce} alt="ecommerce" />
					</SwiperSlide>{" "}
					<SwiperSlide>
						<img src={HOC} alt="hoc" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={MusicApp} alt="MusicApp" />
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}

export default Portfolio