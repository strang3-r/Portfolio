import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'

import { themeContext } from '../../Context'
import { useContext } from 'react'

const Navbar = () => {

	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div className="n-wrapper">
			<div className="n-left">
				<div className="n-name">Black-D3vil</div>
				<Toggle />
			</div>
			<div className="n-right">
				<div className="n-list">
					<ul style={{listStyleType: 'none'}}>
						<li><a href="#home" style={{color: darkMode ? 'white': ''}}>Home</a></li>
						<li><a href="#services" style={{color: darkMode ? 'white': ''}}>Services</a></li>
						<li><a href="#experience" style={{color: darkMode ? 'white': ''}}>Experience</a></li>
						<li><a href="#portfolio" style={{color: darkMode ? 'white': ''}}>Portfolio</a></li>
						<li><a href="#testimonials" style={{color: darkMode ? 'white': ''}}>Testimonials</a></li>
					</ul>
				</div>
				<button className="button n-button">
					Contact
				</button>
			</div>
		</div>
	)
}

export default Navbar