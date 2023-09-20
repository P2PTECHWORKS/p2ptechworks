import React from 'react'
import "./p2p.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

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
			<ul>
				<li>
						<a href="https://facebook.com/" taget="_blank">
							<img src={FacebookIcon} alt="icon"/>
					  </a>
				</li>
				<li>
						<a href="https://twitter.com/" taget="_blank">
							<img src={TwitterIcon} alt="icon1"/>
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