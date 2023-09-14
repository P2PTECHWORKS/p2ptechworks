import React from 'react'
import './blog.css'
import { Link } from 'react-router-dom';
import {Image1 , Image2, Image3, Image4, Image5} from '../../images/python.png';

const Blog = () => {
  return (
    <div class="container">
        <div class="wrapper">
            <div class="flexbox item1">
                <div class="image">
                    <img src={Image1} alt="Image"/>
                </div>
                <div class="title"></div>
                <div class="description"></div>
                <div class="stats">
                  <div class="one">
                    <span></span>
                  </div>
                  <span></span>
                  <span></span>
                </div>
            </div>

            <div class="flexbox item2">
              <div class="image">
                  <img src={Image2} alt="Image"/>
              </div>
              <div class="title"></div>
              <div class="description"></div>
              <div class="stats">
                <div class="one">
                  <span></span>
                </div>
                <span></span>
                <span></span>
              </div>
          </div>

          <div class="flexbox item3">
            <div class="image">
                <img src={Image3} alt="Image"/>
            </div>
            <div class="title"></div>
            <div class="description"></div>
            <div class="stats">
              <div class="one">
                <span></span>
              </div>
              <span></span>
              <span></span>
            </div>
        </div>

        <div class="flexbox item4">
          <div class="image">
              <img src={Image4} alt="Image"/>
          </div>
          <div class="title"></div>
          <div class="description"></div>
          <div class="stats">
            <div class="one">
              <span></span>
            </div>
            <span></span>
            <span></span>
          </div>
      </div>

      <div class="flexbox item5">
        <div class="image">
            <img src={Image5} alt="Image"/>
        </div>
        <div class="title"></div>
        <div class="description"></div>
        <div class="stats">
          <div class="one">
            <span></span>
          </div>
          <span></span>
          <span></span>
        </div>
    </div>


        </div>
    </div>
  )
}

export default Blog