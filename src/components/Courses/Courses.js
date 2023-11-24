import React from 'react'
import { Link} from 'react-router-dom';
// import C from './c/C';
// import Dbms from './dbms/Dbms';
// import Ds from './ds/Ds';
// import Java from './java/Java';
// import Python from './python/Python';
import Image1 from '../../images/python.png';
import Image2 from '../../images/java.png';
import Image3 from '../../images/c.png';
import Image4 from '../../images/dsa.png';
import Image5 from '../../images/dbms.png';
import '../Blog/blog.css';
const Courses = () => {
  return (
    <div class="section"><h1>Courses</h1>
    <div class="container">
      <Link to="/Courses/python" style={{ textDecoration: "none" }}>
            <div class="flexbox item1">
                <div class="logoimage">
                    <img src={Image1} alt="Image1"/>
                </div>
                <div class="title">PYTHON</div>
                <div class="description"></div>
                <div class="stats">
                  <div class="one">
                    <div class="stat">20</div>
                    <div class="stat-value">Training</div>
                  </div>
                  <div class="two">
                    <div class="stat">20</div>
                    <div class="stat-value">Training</div>
                  </div>
                  <div class="three">
                    <div class="stat">20</div>
                    <div class="stat-value">Training</div>
                  </div>
                </div>
            </div>
      </Link>
      <Link to="/courses/java" style={{ textDecoration: "none" }}>

            <div class="flexbox item2">
              <div class="logoimage">
                  <img src={Image2} alt="Image2"/>
              </div>
              <div class="title">JAVA</div>
              <div class="description"></div>
              <div class="stats">
                <div class="one">
                  <div class="stat">20</div>
                  <div class="stat-value">Training</div>
                </div>
                <div class="two">
                    <div class="stat">20</div>
                    <div class="stat-value">Training</div>
                  </div>
                  <div class="three">
                    <div class="stat">20</div>
                    <div class="stat-value">Training</div>
                  </div>
              </div>
            </div>
      </Link>
      <Link to="/courses/c" style={{ textDecoration: "none" }}>

            <div class="flexbox item3">
              <div class="logoimage">
                <img src={Image3} alt="Image3"/>
              </div>
              <div class="title">C</div>
              <div class="description"></div>
              <div class="stats">
                <div class="one">
                  <div class="stat">20</div>
                  <div class="stat-value">Training</div>
                </div>
                <div class="two">
                    <div class="stat">20</div>
                    <div class="stat-value">Training</div>
                  </div>
                  <div class="three">
                    <div class="stat">20</div>
                    <div class="stat-value">Training</div>
                  </div>
              </div>
            </div>
      </Link>
      <Link to="/courses/dsa" style={{ textDecoration: "none" }}>  
            <div class="flexbox item4">
              <div class="logoimage">
                <img src={Image4} alt="Image4"/>
              </div>
              <div class="title">DSA</div>
              <div class="description"></div>
              <div class="stats">
                <div class="one">
                  <div class="stat">20</div>
                  <div class="stat-value">Training</div>
                </div>
                <div class="two">
                    <div class="stat">20</div>
                    <div class="stat-value">Training</div>
                  </div>
                  <div class="three">
                    <div class="stat">20</div>
                    <div class="stat-value">Training</div>
                  </div>
              </div>
            </div>
      </Link>
      <Link to="/courses/dbms" style={{ textDecoration: "none" }}>
            <div class="flexbox item5">
              <div class="logoimage">
                <img src={Image5} alt="Image5"/>
              </div>
              <div class="title">DBMS</div>
              <div class="description"></div>
              <div class="stats">
                <div class="one">
                  <div class="stat">20</div>
                  <div class="stat-value">Training</div>
                </div>
                <div class="two">
                    <div class="stat">20</div>
                    <div class="stat-value">Training</div>
                  </div>
                  <div class="three">
                    <div class="stat">20</div>
                    <div class="stat-value">Training</div>
                  </div>
              </div>
            </div>
      </Link>
    </div>
    </div>
  )
}

export default Courses;
// import React from 'react';
// import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
// import C from './c/C';
// import Dbms from './dbms/Dbms';
// import Ds from './ds/Ds';
// import Java from './java/Java';
// import Python from './python/Python';

// function Courses() {
//   return (
//     <Router>
//       <div>
//         <h1>Main Page</h1>
//         <ul>
//           <li>
//             <Link to="/C">C</Link>
//           </li>
//           <li>
//             <Link to="/Dbms">DBMS</Link>
//           </li>
//           <li>
//             <Link to="/Python">PYTHON</Link>
//           </li>
//           <li>
//             <Link to="/Java">JAVA</Link>
//           </li>
//           <li>
//             <Link to="/Ds">DS</Link>
//           </li>
//         </ul>
//         <hr />
//         <Route path="/C" component={C} />
//         <Route path="/Dbms" component={Dbms} />
//         <Route path="/Python" component={Python} />
//         <Route path="/Java" component={Java} />
//         <Route path="/Ds" component={Ds} />
//       </div>
//     </Router>
  
//   );
// }

// export default Courses;
