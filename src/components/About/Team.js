import './Team.css'
import Member1 from './images/Pavan.jpg';
import Member2 from './images/Pramod.jpg';
import Member3 from './images/Charan.jpg';
import Member4 from './images/Member2.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GitHUbIcon from '@mui/icons-material/GitHub';

export default function Team() {
  return (
    <div id='model3'>
        <div className="divider"></div> 
        <div className="members">
          <div className="member">
            <img width={200} height={200} src={Member1}/>
            <div className="description">
                <h1>PAVAN KUMAR</h1>
                <h2>FOUNDER</h2>
                <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <GitHUbIcon />
                </div>
            </div>
          </div>
          <div className="member">
            <img width={200} height={200} src={Member2}/>
            <div className="description">
                <h1>PRAMOD</h1>
                <h2>CO-FOUNDER</h2>
                <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
            </div>
          </div>
          <div className="member">
            <img width={200} height={200} src={Member3}/>
            <div className="description">
                <h1>CHARANTEJ</h1>
                <h2>CO-FOUNDER</h2>
                <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
            </div>
          </div>
          <div className="member">
            <img width={200} height={200} src={Member4}/>
            <div className="description">
                <h1>CHANUKYA</h1>
                <h2>CO-FOUNDER</h2>
                <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}