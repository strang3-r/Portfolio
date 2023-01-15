import React from 'react'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'

import { themeContext } from '../../Context'
import { useContext } from 'react'

import './Works.css'

const Works = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div className="works">
			{/*Left Side*/}
			<div className="awesome">
				<span style={{color: darkMode?'white':''}}>Works for all these</span>
			    <span>Brands & Clients</span>
			    <span style={{color: darkMode?'#d8dee9':''}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, minus.<br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, assumenda.<br/>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Reiciendis, facere.
			    </span>
			    <button className="button s-button">Hire Me</button>
			    <div className="blur s-blur1" style={{background: "#abf1ff94"}}></div>
		    </div>
		    {/*Right Side*/}
		    <div class="w-right">
		    	<div className="w-mainCircle">
		    		<div className="w-secCircle">
		    			<img src={Upwork} alt="Upwork" />
		    		</div>
		    		<div className="w-secCircle">
		    			<img src={Fiverr} alt="Fiverr" />
		    		</div>
		    		<div className="w-secCircle">
		    			<img src={Amazon} alt="Amazon" />
		    		</div>
		    		<div className="w-secCircle">
		    			<img src={Shopify} alt="Shopify" />
		    		</div>
		    		<div className="w-secCircle">
		    			<img src={Facebook} alt="Facebook" />
		    		</div>
		    	</div>
		    	<div className="w-backCircle blueCircle"></div>
		    	<div className="w-backCircle yellowCircle"></div>
		    </div>
		</div>
	)
}

export default Works