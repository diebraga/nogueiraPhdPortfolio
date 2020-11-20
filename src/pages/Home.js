import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';

const Home = () => {
  return (
    <>
      <Fade duration={1200}>
        <div className='mt-5 p-5'>
        <div className='my-auto pt-5 p-5'>
          <h1 className='mt-5'>Welcome</h1>
          <hr/>
        <p className='mt-2'>
        
        Welcome											
This portfolio provides evidence of the development of my work as an educator and researcher, my professional development and intellectual growth, as well as the demonstration of collaborative and independent production within the areas of Education, Psychology & Digital Technology. It shows a particular blend of experiences, qualifications and achievements that makes me a strong candidate for the PhD programme in Learning Sciences at the Werklund School of Education, University of Calgary.

In this document, I will list the work I have previously executed, content I have produced, and achievements I have accumulated. Further to that, I also hope to introduce myself as both a person and a professional, by elaborating upon each meaningful step of my career which has brought me to where I am today. Additionally, I will highlight how my career so far is motivating me to go forward.

To navigate, just scroll down or click on the specific sections in the navbar.        
        </p>

        </div>
        </div>
        </Fade>
    </>
  )
}

export default Home;