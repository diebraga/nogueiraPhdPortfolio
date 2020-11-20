import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import {AiOutlineLink} from 'react-icons/ai'
const CV = () => {
  return (
    <>
      <Fade duration={1200}>
        <div className='mt-5 p-5'>
        <div className='my-auto pt-5 p-5'>
          <h1 className='mt-5'>CV & IELTS</h1>
          <hr/>
        <p className='mt-2'>
        <h4>CV</h4>

        <a href='https://drive.google.com/file/d/1jY6Kr2S92dpzN7ZcDwy1Od_mEN_E4BgW/view' target='_blank' rel="noreferrer" download>(Attachment) <AiOutlineLink size={20}/></a>
        <br/>
        <br/>
        <h4>IELTS</h4>
        <hr/>
        <a href='https://drive.google.com/file/d/13d0FoJvZlvrxZkOSuSxRsDTohySQWqAu/view' target='_blank' rel="noreferrer">GENERAL TRAINING (8.5 overall score) <AiOutlineLink size={20}/></a>
        <br/>
        <br/>
        <a href='https://drive.google.com/file/d/11sQULyIR1D55EjzeuDoQ8hKcBZoEldbr/view' target='_blank' rel="noreferrer">ACADEMIC TRAINING (7.0 overall score) <AiOutlineLink size={20} /></a>

        </p>

        </div>
        <nav aria-label="Page navigation">
  <ul class="pagination justify-content-around m-2">
  <li class="page-item">
    <Link class="page-link" to="/Professional" aria-label="Previous">
        <span aria-hidden="true">&laquo; Back</span>
        <span class="sr-only">Back</span>
      </Link>
    </li>

  </ul>
</nav>

        </div>
        </Fade>
    </>
  )
}

export default CV;