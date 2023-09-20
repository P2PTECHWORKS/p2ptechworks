import React from 'react'
import './blog.css'
// import { Link } from 'react-router-dom';
import Image1 from '../../images/python.png';
import Image2 from '../../images/java.png';
import Image3 from '../../images/c.png';
import Image4 from '../../images/dsa.png';
import Image5 from '../../images/dbms.png';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div class="section"><h1>Courses</h1>
    <div class="container">
      <Link to="/blog/python" style={{ textDecoration: "none" }}>
            <div class="flexbox item1">
                <div class="logoimage">
                    <img src={Image1} alt="Image1"/>
                </div>
                <div class="btitle">PYTHON</div>
                <div class="bdescription"></div>
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
      <Link to="/blog/java" style={{ textDecoration: "none" }}>

            <div class="flexbox item2">
              <div class="logoimage">
                  <img src={Image2} alt="Image2"/>
              </div>
              <div class="btitle">JAVA</div>
              <div class="bdescription"></div>
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
      <Link to="/blog/c" style={{ textDecoration: "none" }}>

            <div class="flexbox item3">
              <div class="logoimage">
                <img src={Image3} alt="Image3"/>
              </div>
              <div class="btitle">C</div>
              <div class="bdescription"></div>
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
      <Link to="/blog/dsa" style={{ textDecoration: "none" }}>  
            <div class="flexbox item4">
              <div class="logoimage">
                <img src={Image4} alt="Image4"/>
              </div>
              <div class="btitle">DSA</div>
              <div class="bdescription"></div>
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
      <Link to="/blog/dbms" style={{ textDecoration: "none" }}>
            <div class="flexbox item5">
              <div class="logoimage">
                <img src={Image5} alt="Image5"/>
              </div>
              <div class="btitle">DBMS</div>
              <div class="bdescription"></div>
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

export default Blog