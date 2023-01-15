import React from 'react'
import './Experience.css'

import { themeContext } from '../../Context'
import { useContext } from 'react'

const Experience = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;
	return (
		<section id="experience">
			<div className="experience">
				<div className="achievement">
					<div className="circle" style={{color: darkMode ? '#4c566a':''}}>2+</div>
					<span>years</span>
					<span>Experience</span>
				</div>
				<div className="achievement">
					<div className="circle" style={{color: darkMode ? '#4c566a':''}}>20+</div>
					<span>completed</span>
					<span>Projects</span>
				</div>
				<div className="achievement">
					<div className="circle" style={{color: darkMode ? '#4c566a':''}}>2</div>
					<span>Companies</span>
					<span>work</span>
				</div>
			</div>
		</section>
	)
}

export default Experience