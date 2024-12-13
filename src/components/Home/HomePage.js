import VideoHomePage from '../../assets/video-homepage.mp4'

const HomePage = (props) =>{
    return (
       <div className="homepage-container">
       <video   autoPlay muted loop  >
       <source data-testid="currentDefaultVideo" src= {VideoHomePage}
       type="video/mp4"/>
       </video>

       </div>
    )
}
export default HomePage;

// width="100%"  loop="" muted="" autoplay="" playsinline="" preload="metadata" x-webkit-airplay="deny" class="sc-8ad69ebd-0 fglgYn"