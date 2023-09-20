import React from 'react'
import "./p2p.css";
import FacebookIcon from "../../images/facebook.svg";
import TwitterIcon from "../../images/twitter.svg";
import InstagramIcon from "../../images/instagram.svg";

const p2p = () => {
  return (
        <div class="container" >

  <div class="content-area d-flex align-items-center justify-content-center">
	<div>
  <div class="load one"></div>
    <div class="load two"></div>
    <div class="load three"></div>
    <div class="load four"></div>
    <div class="load five"></div>
		<h3 class="fade-in two">Coming Soon</h3>
		<div class="social fade-in three">
			<ul class="socialmediaicons">
			<li class="socialmediaiconsitems">
					<a href="https://instagram.com/" taget="_blank">
						<img class="socialmediaimages" src={InstagramIcon} alt="icon"/>
					</a>
				</li>
				<li>
					<a href="https://facebook.com/" taget="_blank">
						<img class ="socialmediaimages" src={FacebookIcon} alt="icon"/>
					</a>
				</li>
				<li>
						<a href="https://twitter.com/" taget="_blank">
							<img class="socialmediaimages" src={TwitterIcon} alt="icon1"/>
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>

</div>
  )
}

export default p2p