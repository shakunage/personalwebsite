import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import background from "../assets/photos/slideshow/image1.jpeg"
import mobilebackground from "../assets/photos/mobile_background.jpg"

const Home = () => {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

    return ( 
    <div style={{
            alignItems: "center",
            width: isDesktop ? "83%" : "55%",
            height: "100vh"
          }}>
            <div>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                aspectRatio: isDesktop ? 4/3 : 8/24, 
                backgroundImage: isDesktop ? `url(${background})` : `url(${mobilebackground})`}}>

              <span style={{
                  padding: "0.5rem",
                  fontSize: isDesktop ? "2.5rem" : "1rem",
                  background: "#efefef",
                  position: "fixed",
                  right: "10%",
                  top: "10%",
                  opacity: "90%"
                }}>

                Hi there!
                <br></br>
                I'm Sakari.
                <br></br>
                <Link style={{color: "inherit"}} to="/about">Learn more...</Link>
              </span>
              </div>
            </div>
      </div>
    )
};

export default Home;