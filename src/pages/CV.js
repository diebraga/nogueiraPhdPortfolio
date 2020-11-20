import React from 'react';
import { Fade } from "react-awesome-reveal";
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
        </div>
        </Fade>
    </>
  )
}

export default CV;