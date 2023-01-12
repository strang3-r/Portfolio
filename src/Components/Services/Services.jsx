import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png' 
import Card from '../Card/Card'
import CV from './Atmagyan_Singh_7309085383.pdf'


const Services = () => {
	return (
		<section id="services">
			<div className="services">
				{/*Left Side*/}
				<div className="awesome">
					 <span>My Awesome</span>
					 <span>Services</span>
					 <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, minus.<br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, assumenda.</span>
					 <a href={CV} download>
						 <button className="button s-button">Download CV</button>
					 </a>
					 <div className="blur s-blur1" style={{background: "#abf1ff94"}}></div>
				</div>
				{/*Right Side*/}
				<div className="cards">
					<div style={{left: '14rem'}}>
						<Card 
						emoji={HeartEmoji}
						heading={'Design'}
						detail={'Figma, Canvas, Photoshop, Adobe, Adobe xd'}
						/>
					</div>
					<div style={{top: '12rem', left: '-4rem'}}>
						<Card 
						emoji={Glasses}
						heading={'Developer'}
						detail={'HTML, CSS, JavaScript, ReactJs, MongoDB, MySQL'}
						/>
					</div>
					<div style={{top: '19rem', left: '12rem'}}>
						<Card 
						emoji={Humble}
						heading={'UI/UX'}
						detail={'HTML, CSS, JavaScript, ReactJs, Tailwind, Bootstrap, Vite'}
						/>
					</div>
					<div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
				</div>
			</div>
		</section>

	)
}

export default Services