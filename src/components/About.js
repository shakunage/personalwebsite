import React from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'



const About = () => {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  return (
    <>
      <Box sx={{
          margin: "auto",
          flexDirection: 'column',
          height:"100vh",
          justifyContent: "start",
          width: isDesktop ? "60%" : "90%"}}>
        <h1>about me</h1>
        <p></p>
          Hi there. 👋
        <p>
          I’m Veikka Sakari Junttila, and this is my personal website. You can call me Sakari – that’s what I go by in daily life. Currently, I’m looking for a role as a business analyst. 
        </p>
  
        <p>
          My most relevant skills with regards to employment include technology, langauge skills and business knowledge. I hold a bachelor’s degree in International Business, and will finish completing a master’s degree in Business Analytics this year. I speak English and Japanese fluently, as well as my mother tongue Finnish.
        </p>

        <p>
          You can check out <Link to="/portfolio">my portfolio here</Link>, where I introduce some of my data and software projects. From the <Link to="/blog">the blog</Link>, you can check out some of my thoughts on recent business events, technology and life in Japan. 
        </p>

        <p>
          My other interests include photography, feel free to check out <Link to="/gallery">the gallery</Link> for some photos I’ve taken around Japan. I am also an avid follower of sports, namely NHL and Formula 1, both of which can be understood better when you have a grasp of the data and statistics. I’ve been also playing a team sport called floorball all my life, and hit the gym regularly to stay in shape. 
        </p>

        <p>
          If you’re interested, feel free to reach me out by email using <Link to="/contact">the contact form</Link>. You can also use any of the social media links in the sidebar on the left. 
        </p>
    
    </Box>
  </>
  )
  
}

export default About;