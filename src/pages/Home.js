import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import IMG from '../assets/image.jpeg'

const Home = () => {
  return (
    <>
      <Fade duration={1200}>
        <div className='mt-5 p-5'>
        <div className='my-auto pt-5 p-5'>
          <h1 className='mt-5'>Welcome</h1>
          <hr/>
          <div className='d-flex profile'>
        <img className='mb-4 mt-3 mr-4' src={IMG} height='280px' alt=""/>
        <p className='mt-3'>
        This portfolio provides evidence of the development of my work as an educator and researcher, my professional development and intellectual growth, as well as the demonstration of collaborative and independent production within the areas of Education, Psychology & Digital Technology. It shows a particular blend of experiences, qualifications and achievements that makes me a strong candidate for the PhD programme in Learning Sciences at the Werklund School of Education, University of Calgary.
        <br/><br/>
        In this document, I will list the work I have previously executed, content I have produced, and achievements I have accumulated. Further to that, I also hope to introduce myself as both a person and a professional, by elaborating upon each meaningful step of my career which has brought me to where I am today. Additionally, I will highlight how my career so far is motivating me to go forward.
<br/><br/>
        To navigate, just scroll down or click on the specific sections on the top of the page.
        </p>
        </div>
<nav aria-label="Page navigation mt-4">
  <ul className="pagination justify-content-around">
    <li className="page-item">
    <Link className="page-link" to="/About" aria-label="Next">
        <span aria-hidden="true">Next &raquo;</span>
        <span className="sr-only">Next</span>
      </Link>
    </li>
  </ul>
</nav>

        </div>
        
        </div>
        </Fade>
    </>
  )
}

export default Home;