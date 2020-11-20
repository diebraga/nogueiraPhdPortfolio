import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

const Publication = () => {
  return (
    <>
      <Fade duration={1200}>
        <div className='mt-5 p-5'>
        <div className='my-auto pt-5 p-5'>
          <h1 className='mt-5'>Publications</h1>
          <hr/>
        <p className='mt-2'>
        <strong className='font-weight-bold'>Nogueira, B. M.</strong>
        (2019) ‘Teaching English as a Second Language to High School students with the support of Facebook and other digital resources’. <i>VI Seminário Web Currículo e XII Encontro de Pesquisadores em Currículo,</i> São Paulo, Brazil, 4-6 Nov. Available: 
        <br/>
        <a style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} href="https://www.academia.edu/42155271/Anais_do_VI_Semin%C3%A1rio_Web_Curr%C3%ADculo_educa%C3%A7%C3%A3o_e_humanismo" target='_blank' rel="noopener noreferrer">https://www.academia.edu/42155271/Anais_do_VI_Semin%C3%A1rio_Web_Curr%C3%ADculo_educa%C3%A7%C3%A3o_e_humanismo</a>
        <br/><br/><br/>
        <strong className='font-weight-bold'>Nogueira, B. M.</strong>
        (2016) <i>‘Education in the contemporary context and the complex thinking’,</i> unpublished dissertation (MSc). Programme of Post-Graduate Studies of Intelligent Technology and Digital Design, Pontifícia Universidade Católica de São Paulo. Available:         <br/>
        <a style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} href="https://tede2.pucsp.br/handle/handle/18962" target='_blank' rel="noopener noreferrer">https://tede2.pucsp.br/handle/handle/18962</a>
        <br/><br/><br/>
        <strong className='font-weight-bold'>Nogueira, B. M.</strong>
        (2015) ‘Challenges of the connectivism as a democratic learning theory’. <i>IV Seminário Web Currículo e XII Encontro de Pesquisadores em Currículo</i>, São Paulo, Brazil, 21-23 Sep. Available: 
        <br/>
        <a style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} href="http://www.pucsp.br/webcurriculo/downloads/anais/anais_iv-webcurriculo_2015.pdf" target='_blank' rel="noopener noreferrer">http://www.pucsp.br/webcurriculo/downloads/anais/anais_iv-webcurriculo_2015.pdf</a>
        <br/><br/><br/>
        <strong className='font-weight-bold'>Nogueira, B. M., Leite, S. A. S.</strong>
        (2015) ‘Study explores the importance of affectivity in the practices of research supervision’ [press release].  <i>Revista de Educação da PUC Campinas</i>. Available: 
        <br/>
        <a style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} href="https://www4.pucsp.br/webcurriculo/edicoes_anteriores/2015/downloads/anais/anais_iv-webcurriculo_2015.pdf" target='_blank' rel="noopener noreferrer">https://www4.pucsp.br/webcurriculo/edicoes_anteriores/2015/downloads/anais/anais_iv-webcurriculo_2015.pdf</a>
        <br/><br/><br/>
        <strong className='font-weight-bold'>Nogueira, B. M., Leite, S. A. S.</strong>
        (2014) ‘Affectivity in the process of research supervision’. <i>Revista de Educação da PUC Campinas</i>, v. 19, p. 249-259. Available:        <br/>
        <a style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} href="http://periodicos.puc-campinas.edu.br/seer/index.php/reveducacao/article/view/2852" target='_blank' rel="noopener noreferrer">http://periodicos.puc-campinas.edu.br/seer/index.php/reveducacao/article/view/2852</a>
        <br/><br/><br/>
        <h4>COURSE MATERIAL</h4>
        <strong className='font-weight-bold'>Nogueira, B. M.</strong>
        (2019) ‘Understanding connectivism’, EN4022: Educational Technology for Teaching and Learning, University of Limerick, unpublished. Available:
         &nbsp;<a href="https://drive.google.com/file/d/1S2fT5EKrXNApc-8xaT0PkBNRvTMhc-Ip/view" target='_blank' rel="noopener noreferrer">http://tecsedu.blogspot.com/2015/02/is-connectivism-new-learning-theory.html</a>

        </p>
        <h3 className='pt-5'>Blog Articles</h3>
        <p className='mt-2'>
        As a master’s degree student, I used to keep a personal blog about education in the years of 2014 and 2015 <a href='http://tecsedu.blogspot.com/' target='_blank' rel="noopener noreferrer">(http://tecsedu.blogspot.com/)</a>. There, I wrote comments and summaries of my readings, shared useful teaching tools and various other pieces of information that I found useful or interesting within  my area of study. That experience was important to help me stay informed and develop my writing and critical thinking skills. I wrote texts both in English and Portuguese.
        <br/><br/>One of the learning theories that I was particularly interested in at that time was connectivism, by George Siemens and Stephen Downes. After publishing online one of my texts on the topic, I noticed a great number of accesses to my page and found out that Downes himself had not only read my article, but also shared it on his own webpage – the reason why so many people were attracted to my blog. This was a very exciting day and it encouraged me to continue my studies and reflections in the area of education. 
        <br/>
        Here is the link to the mentioned article that was accessed by the Downes:
        <br/><br/>
        <i className='font-weight-bold'>Is Connectivism A New Learning Theory Based on Old Ideas?</i><br/>
        <a href="http://tecsedu.blogspot.com/2015/02/is-connectivism-new-learning-theory.html" target='_blank' rel="noopener noreferrer"> http://tecsedu.blogspot.com/2015/02/is-connectivism-new-learning-theory.html</a>
        </p>

        </div>
        <nav aria-label="Page navigation">
  <ul class="pagination justify-content-around m-4">
  <li class="page-item">
    <Link class="page-link" to="/Research" aria-label="Previous">
        <span aria-hidden="true">&laquo; Back</span>
        <span class="sr-only">Back</span>
      </Link>
    </li>

    <li class="page-item">
    <Link class="page-link" to="/Presentations" aria-label="Next">
        <span aria-hidden="true">Next &raquo;</span>
        <span class="sr-only">Next</span>
      </Link>
    </li>

  </ul>
</nav>

        </div>
        </Fade>
    </>
  )
}

export default Publication;