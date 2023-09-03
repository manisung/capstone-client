import "./AboutPage.scss"
import childhoodPic from "../../assets/images/childhood.png"
import wildCity from "../../assets/images/wildcity.jpg"
import debut from "../../assets/images/debut.png"

function AboutPage() {
    return (
        <div className="about">
        <div className="about__title">About</div>
        <div className="about__content-wrapper">
        <div className="about__sub-title">Early Childhood</div>
        <div className="about__image-wrapper"><img className="about__image-1" src={childhoodPic} alt="Yumi's childhood recording picture" /></div>
        
        <div className="about__description">On October 5, 2014, Yumi, who was only 7 years old, won the children's vocal group in 
        the "4th China Children's Little Golden Bell Music Competition and the 2nd 
        Hong Kong and Macau Finals" held at the Macau Fisherman's Wharf Convention and Exhibition Center.
        She also joined the girl group Honey Bees, and followed Kayan Sit to perform on stage, but later 
        left Honey Bees and joined A Little Bit Shy with six girls at the age of 10.</div>
        <div className="about__sub-title">Competition Period</div>
        <div className="about__image-wrapper"><img className="about__image-2" src={wildCity} alt="Yumi's Star Academy competiton picture" /></div>
        <div className="about__description">On January 10, 2022, Yumi sang Aaron Kwok's song "Mood for the Fourth Night" in the final of "Legend of Dreams" and became her fourth song to reach 1 million hits in the competition.
</div>
<div className="about__sub-title">Debut</div>
        <div className="about__image-wrapper"><img className="about__image-3" src={debut} alt="Yumi's new music video picture mosaic" /></div>
        <div className="about__description">On February 4, 2022, Yumi released her first solo single "Breakin' My Heart", which was distributed to major electronic media, officially debuting as a solo artist. The song was released the next day, and she became the first member to release a solo single under the name of an After Class member. After being sent to Taiwan, this song became the champion song of two stations, and achieved two championships, one second and one season.</div>
        <div className="about__description">On October 27, Yumi released her second solo single "wanna be close to u", which 
        won one championship and two seasons in major electronic media. At the end of the same year, Yumi was shortlisted for the
         "Most Popular TV Female Character" and "Best Supporting Actress" for the first time in the "Myriad of Stars Awards Ceremony 2022" 
         for her role as "Ye Miner" in "Youth Is Myself".</div>
         <div className="about__description">At the end of the same year, Yumi won the "Best Newcomer" award at the "Metro Madden Awards Ceremony 
         2022", her first music newcomer award; she also won the "Most Promising Female Newcomer Merit Award" in "Top Ten Chinese Golden
          Songs for the 95th Anniversary of Broadcasting"</div>
          </div>
        </div>
    )
}

export default AboutPage;