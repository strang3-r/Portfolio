import React from 'react'

import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'

import FloatingDiv from '../FloatingDiv/FloatingDiv'

import './Intro.css'

const Intro = () => {
	return (
		<section id="#">
			<div className="intro">
				<div className="i-left">
					<div className="i-name">
						<span>Hey! I Am</span>
						<span>Atmagyan Singh</span>
						<span>
							MERN Stack Developer with high level of experience in web designing and development, producting the Quality work.
						</span>
					</div>
					<button className="button i-button">
						Hire Me
					</button>
					<div className="i-icons">
						<a href="https://github.com/Black-D3vil007">
							<img src={Github} alt="github" />
						</a>
						<a href="https://www.linkedin.com/in/black-d3vil/">
							<img src={Linkedin} alt="linkedin" />
						</a>
						<a href="https://www.instagram.com/blackd3vil.007/">
							<img src={Instagram} alt="instagram" />
						</a>
					</div>
				</div>
				<div className="i-right">
					<img src={Vector1} alt="vector1" />
					<img src={Vector2} alt="vector2" />
					<img src={boy} alt="boy" />
					<img src={glassesimoji} alt="glassesimoji" />
					<div style={{top: '-0.1%', left: '48%'}}>
						<FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
					</div>
					<div style={{top: '18rem', left: '0rem'}}>
						<FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
					</div>
					{/*Blur Divs*/}
					<div className="blur" style={{background: "rgb(238, 210, 255)"}}> </div>
					<div className="blur" style={{background: "#c1f5ff", top:'17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
				</div>
			</div>
		</section>
	)
}

export default Intro