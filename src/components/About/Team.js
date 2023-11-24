import './Team.css'
import Member1 from './images/Pavan.jpg';
import Member2 from './images/Pramod.jpg';
import Member3 from './images/Charan.jpg';
import Member4 from './images/chanukya.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GitHUbIcon from '@mui/icons-material/GitHub';

export default function Team() {
  const handleClick = () => {
    // Replace 'your-portfolio-website-url' with your actual portfolio website URL
    window.location.href = 'https://your-portfolio-website-url';
  };
  return (
    <div id='model3'>
        <div className="divider"></div> 
        <div className="members">
          <div className='group1'>
          <div className="member">
            <img width={200} height={200} src={Member1} alt=""/>
            <div className="description">
                <h1>PAVAN KUMAR</h1>
                <h2>FOUNDER</h2>
                <p>
                <pre>
                   <span className='Dot'></span><span style={{paddingLeft:'10px'}}><span style={{color:'#f404a8'}}>GATE 2023</span><span style={{paddingLeft:'5px'}}>QUALIFIED</span></span>
                   <br/><span className='Dot'></span><span style={{paddingLeft:'10px'}}>FULL STACK DEVELOPER</span>
                   <br/><span className='Dot'></span><span style={{paddingLeft:'10px'}}><span style={{color:'#f404a8'}}>SIH 2022</span><span style={{paddingLeft:'5px'}}>FINALIST</span></span>
                   <br/><span className='Dot'></span><span style={{paddingLeft:'10px'}}>SOlVED 200+ DSA PROBLEMS</span>
                   <br/><button className='ButtonStyle' onClick={handleClick}>
      Visit My Portfolio
    </button>
                  
                </pre>
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <GitHUbIcon />
                </div>
            </div>
          </div>
          <div className="member">
            <img width={200} height={200} src={Member2}/ alt="">
            <div className="description">
                <h1>PRAMOD</h1>
                <h2>CO-FOUNDER</h2>
                <p>
                <pre>
                   <span className='Dot'></span><span style={{paddingLeft:'10px'}}><span style={{color:'#f404a8'}}>GATE 2023</span><span style={{paddingLeft:'5px'}}>QUALIFIED</span></span>
                   <br/><span className='Dot'></span><span style={{paddingLeft:'10px'}}>FULL STACK DEVELOPER</span>
                   <br/><span className='Dot'></span><span style={{paddingLeft:'10px'}}><span style={{color:'#f404a8'}}>SIH 2022</span><span style={{paddingLeft:'5px'}}>FINALIST</span></span>
                   <br/><span className='Dot'></span><span style={{paddingLeft:'10px'}}>SOlVED 200+ DSA PROBLEMS</span>
                   <br/><button className='ButtonStyle' onClick={handleClick}>
      Visit My Portfolio
    </button>
                  
                </pre>                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
            </div>
          </div>
          </div>
          <div className='group1'>
          <div className="member">
            <img width={200} height={200} src={Member3} alt=""/>
            <div className="description">
                <h1>CHARANTEJ</h1>
                <h2>CO-FOUNDER</h2>
                <p>
                <pre>
                   <span className='Dot'></span><span style={{paddingLeft:'10px'}}><span style={{color:'#f404a8'}}>GATE 2023</span><span style={{paddingLeft:'5px'}}>QUALIFIED</span></span>
                   <br/><span className='Dot'></span><span style={{paddingLeft:'10px'}}>FULL STACK DEVELOPER</span>
                   <br/><span className='Dot'></span><span style={{paddingLeft:'10px'}}><span style={{color:'#f404a8'}}>SIH 2022</span><span style={{paddingLeft:'5px'}}>FINALIST</span></span>
                   <br/><span className='Dot'></span><span style={{paddingLeft:'10px'}}>SOlVED 200+ DSA PROBLEMS</span>
                   <br/><button className='ButtonStyle' onClick={handleClick}>
      Visit My Portfolio
    </button>
                  
                </pre>                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
            </div>
          </div>
          <div className="member">
            <img width={200} height={200} src={Member4} alt=""/>
            <div className="description">
                <h1>CHANUKYA</h1>
                <h2>CO-FOUNDER</h2>
                <p>
                <pre>
                   <span className='Dot'></span><span style={{paddingLeft:'10px'}}><span style={{color:'#f404a8'}}>GATE 2023</span><span style={{paddingLeft:'5px'}}>QUALIFIED</span></span>
                   <br/><span className='Dot'></span><span style={{paddingLeft:'10px'}}>FULL STACK DEVELOPER</span>
                   <br/><span className='Dot'></span><span style={{paddingLeft:'10px'}}><span style={{color:'#f404a8'}}>SIH 2022</span><span style={{paddingLeft:'5px'}}>FINALIST</span></span>
                   <br/><span className='Dot'></span><span style={{paddingLeft:'10px'}}>SOlVED 200+ DSA PROBLEMS</span>
                   <br/><button className='ButtonStyle' onClick={handleClick}>
      Visit My Portfolio
    </button>
                  
                </pre>                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  );
}
