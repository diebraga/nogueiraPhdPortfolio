import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

const Presentation = () => {
  return (
    <>
      <Fade duration={1200}>
        <div className='mt-5 p-5'>
        <div className='my-auto pt-5 p-5'>
          <h1 className='mt-5'>Presentations & lectures</h1>
          <hr/>
          <div className='p-2 ml-2'>
          <h3>PRESENTATIONS</h3>
          <p className='mt-4'>
          <strong className='font-weight-bold'>Nogueira, B. M. </strong>
          (2019) ‘Teaching English as a Second Language to High School students with the support of Facebook and other digital resources’ [Slideshare], presented at VI Seminário Web Currículo e XII Encontro de Pesquisadores em Currículo, São Paulo, Brazil, 4-6 Nov. Available:        <br/>
        <a style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} href="https://www.slideshare.net/brunamazzer7/ensino-de-lngua-inglesa-a-alunos-do-ensino-mdio-com-o-apoio-do-facebook-e-outros-recursos-digitiais" target='_blank' rel="noopener noreferrer">https://www.slideshare.net/brunamazzer7/ensino-de-lngua-inglesa-a-alunos-do-ensino-mdio-com-o-apoio-do-facebook-e-outros-recursos-digitiais</a>
        <br/>
        [accessed 08 Nov 2020].
        <br/><br/>
        <strong className='font-weight-bold'>Nogueira, B. M. </strong>
        (2015) ‘Vygotsky’s constructivism and the connectivism – a comparative study between two learning theories’, presented at VIII Encontro de Pesquisa do TIDD, São Paulo, Brazil, 13 Oct, unpublished.        <br/>
        <br></br>
        <strong className='font-weight-bold'>Nogueira, B. M. </strong>
        (2015) ‘Challenges of the connectivism as a democratic learning theory’ [Slideshare], presented at IV Seminário Web Currículo e XII Encontro de Pesquisadores em Currículo, São Paulo, Brazil, 21-23 Sep. Available:
        <br/>
        <a style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} href="https://www.slideshare.net/brunamazzer7/desafios-do-conectivismo-como-uma-teoria-democrtica-da-aprendizagem" target='_blank' rel="noopener noreferrer">https://www.slideshare.net/brunamazzer7/desafios-do-conectivismo-como-uma-teoria-democrtica-da-aprendizagem</a>
        <br/>
        [accessed 08 Nov 2020].
        <br/><br/>
            </p>
            <h3>LECTURES</h3>
            <p className='mt-4'>
            <strong className='font-weight-bold'>Nogueira, B. M. </strong>
            (2019) ‘The relationships between Technology and Education’, EN4022: Educational Technology for Teaching and Learning [online], University of Limerick, available: Prezi public folders        <br/>
        <a style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} href="https://prezi.com/jlrxj1tmlwxy/?utm_campaign=share&utm_medium=copy" target='_blank' rel="noopener noreferrer">https://prezi.com/jlrxj1tmlwxy/?utm_campaign=share&utm_medium=copy</a>
        <br/><br/>
        <strong className='font-weight-bold'>Nogueira, B. M. </strong>
        (2019) ‘Overview of the most commonly adopted learning theories’, EN4022: Educational Technology for Teaching and Learning, University of Limerick, unpublished. Available: <br/>
        <a style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} href="https://drive.google.com/file/d/1ZN5USs74TKi4Qz3jT-p7R--tvsxktHP3/view" target='_blank' rel="noopener noreferrer">Here</a>
        <br/><br/>
        <strong className='font-weight-bold'>Nogueira, B. M. </strong>
        (2019) ‘A real experience with secondary level students’, EN4022: Educational Technology for Teaching and Learning, University of Limerick, unpublished. Available:        <br/>
        <a style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} href="https://drive.google.com/file/d/1Ew1nIi4HkwL2uMTKISI1yBETpmD_bY07/view" target='_blank' rel="noopener noreferrer">Here</a>
        <br/><br/>
        <strong className='font-weight-bold'>Nogueira, B. M. </strong>
        (2019) ‘Plagiarism, EN4022: Educational Technology for Teaching and Learning, University of Limerick, unpublished. Available:        <br/>
        <a style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} href="https://drive.google.com/file/d/1quOTHuaRYy6C8DXV6OfqlAeGCGuCjFap/view" target='_blank' rel="noopener noreferrer">Here</a>
        <br/><br/>        

            </p>
            <h3>EVENT ORGANISATION</h3>
            <p className='mt-2'>
          <h5>VIII Encontro de Pesquisa do TIDD</h5>
          <div className='d-flex justify-content-between font-weight-bold'>
          <p>Pontifícia Universidade Católica de São Paulo, São Paulo, Brazil</p>
          <p>(13 Oct 2015)</p>
          </div>
          <>
          This yearly event happens at the university PUC-SP, my alma mater. Its purpose is for graduate students to present their Master and Doctoral research projects. The event is also transmitted online and counts on the help of volunteer students to be organised and run.         
           </>

          </p>

            </div>
            <nav aria-label="Page navigation">
  <ul class="pagination justify-content-around m-4">
  <li class="page-item">
    <Link class="page-link" to="/Publications" aria-label="Previous">
        <span aria-hidden="true">&laquo; Back</span>
        <span class="sr-only">Back</span>
      </Link>
    </li>

    <li class="page-item">
    <Link class="page-link" to="/Professional" aria-label="Next">
        <span aria-hidden="true">Next &raquo;</span>
        <span class="sr-only">Next</span>
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

export default Presentation;