import React from 'react'
import { HeroContainer, HeroLeftContainer, HeroInnerContainer, Title, Para, Ps} from './HeroStyle'
import { BodyContainer, BodyTitle, BodyContent, ReadMore, VideoContainer } from './HeroStyle'
import './BodyStyle.css'
import Image1 from '../../images/img.png';


const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title><Para>DIVE INTO PROGRAMMING WITH NO COST <Ps style={{color: '#6677F0'}}>@LOW COST</Ps></Para></Title>
                    </HeroLeftContainer>
                    <img src={Image1} alt="" style={{width: "50%"}}></img>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

const BodySection = () => {
    return (
        <div id="Body">
            <BodyContainer>
                <BodyTitle><h2>A Place That Helps Growth of Your Technical Skills</h2></BodyTitle>
                <BodyContent><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aliquam rem tempora incidunt repellendus alias tenetur maxime dicta harum sint?</p></BodyContent>
                <ReadMore>
                    <div className="container">

                        <a href="#" className="button">
                            <div className="button__line"></div>
                            <div className="button__line"></div>
                            <span className="button__text">READ MORE</span>
                            <div className="button__drow1"></div>
                            <div className="button__drow2"></div>
                        </a>

                    </div>
                </ReadMore>
            </BodyContainer>
        </div>
    )
}

const VideoSection = () =>{
    return(
        <VideoContainer>
             <div className="Videocontainer">
        <div className="Videoinner">
            <div className="Videoiframe">
                <iframe width="560" height="315"
                    src="https://www.youtube-nocookie.com/embed/ezbJwaLmOeM?si=N10kTEbLYy7Uzqet&amp;start=1"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
            <div className="Videocontent">
                <div className="Videotext">
                    <div className="Videotitle">
                        <h1>This Is The Title</h1>
                    </div>
                    <div className="Videodescription">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, fugit eligendi!
                            Repudiandae saepe impedit vitae perferendis. Modi illo eius assumenda similique delectus?
                            Soluta
                            ratione, assumenda aut, quae, vitae tempore culpa velit unde molestiae alias voluptatibus
                            laborum nam expedita quas accusantium?</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="Videoinner">
            <div className="Videoiframe">
                <iframe width="560" height="315"
                    src="https://www.youtube-nocookie.com/embed/ezbJwaLmOeM?si=N10kTEbLYy7Uzqet&amp;start=1"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
            <div className="Videocontent">
                <div className="Videotext">
                    <div className="Videotitle">
                        <h1>This Is The Title</h1>
                    </div>
                    <div className="Videodescription">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, fugit eligendi!
                            Repudiandae saepe impedit vitae perferendis. Modi illo eius assumenda similique delectus?
                            Soluta
                            ratione, assumenda aut, quae, vitae tempore culpa velit unde molestiae alias voluptatibus
                            laborum nam expedita quas accusantium?</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="Videoinner">
            <div className="Videoiframe">
                <iframe width="560" height="315"
                    src="https://www.youtube-nocookie.com/embed/ezbJwaLmOeM?si=N10kTEbLYy7Uzqet&amp;start=1"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
            <div className="Videocontent">
                <div className="Videotext">
                    <div className="Videotitle">
                        <h1>This Is The Title</h1>
                    </div>
                    <div className="Videodescription">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, fugit eligendi!
                            Repudiandae saepe impedit vitae perferendis. Modi illo eius assumenda similique delectus?
                            Soluta
                            ratione, assumenda aut, quae, vitae tempore culpa velit unde molestiae alias voluptatibus
                            laborum nam expedita quas accusantium?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </VideoContainer>
    )
}

export { HeroSection, BodySection, VideoSection };