import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

import profilePic1 from "../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import profilePic3 from "../../img/profile3.jpg"
import profilePic4 from "../../img/profile4.jpg"

const Testimonial = () => {

	const clients = [
		{
			img: profilePic1,
			review: "Lorem ipsum proident incididunt nostrud deserunt commodo laboris ullamco dolore proident reprehenderit nostrud ex ex sunt nulla eu dolore ut reprehenderit quis adipisicing exercitation fugiat in elit minim labore reprehenderit aliquip pariatur deserunt commodo officia nulla enim dolor ut culpa.",
		},
		{
			img: profilePic2,
			review: "Ut duis do dolor ut laboris voluptate tempor in aliqua dolor dolor ut adipisicing duis cillum duis nisi occaecat exercitation magna enim veniam adipisicing nostrud mollit occaecat dolore in.",
		},
		{
			img: profilePic3,
			review: "Ad consequat in duis dolore nostrud deserunt adipisicing eiusmod dolor deserunt mollit enim ullamco sunt ullamco magna officia est dolore incididunt cillum adipisicing sit proident sed ut ea qui fugiat minim ut.",
		},
		{
			img: profilePic4,
			review: "Incididunt sit enim enim in commodo tempor magna pariatur exercitation ea non occaecat elit ullamco non labore cillum in do eu in dolor esse deserunt ut aute consequat in officia in id.",
		}
	]

	return (
		<section id="testimonials">
			<div className="t-wrapper">
				<div className="t-heading">
					<span>Clients always get</span>{" "}
					<span>Exceptional Work</span>{" "}
					<span>from me...</span>
					<div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
					<div className="blur t-blur2" style={{background: "skyblue"}}></div>
				</div>
				{/*Slider*/}
				<Swiper 
				modules={[Pagination]}
				slidesPerView={1}
				paginations={{clickable: true}}
				>
					{clients.map((client, index) => {
						return(
							<SwiperSlide key={index}>
								<div className="testimonial">
									<img src={client.img} alt="" />
									<span>{client.review}</span>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>	
		</section>
	)
}

export default Testimonial