import React from 'react';
import { Fade } from "react-awesome-reveal";

const Research = () => {
  return (
    <>
      <Fade duration={1200}>
        <div className='mt-5 p-5'>
        <div className='my-auto pt-5 p-5'>
          <h1 className='mt-5'>Research grants</h1>
          <hr/>
          <div className='p-2 ml-2'>
          <p className='mt-2'>
          <h5>RESEARCH TITLE: EDUCATION IN THE CONTEMPORARY CONTEXT AND THE COMPLEX THINKING</h5>
          <div className='d-flex justify-content-between font-weight-bold'>
          <p>PUC-SP – São Paulo, Brazil</p>
          <p>(Jan 14 – Jun 16)</p>
          </div>
          <p>
          Master’s research.
          <br/>
          Awarded funding by the <strong className='font-weight-bold'>Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES),</strong> which is a foundation within the Ministry of Education in Brazil whose central purpose is to coordinate efforts to improve the quality of Brazil’s faculty and staff in higher education through grant programs. In Brazil, CAPES is the body responsible for the evaluation of ‘stricto sensu’ graduate courses; access and dissemination of scientific production; investments in high-level resources in the country and abroad; promotion of international scientific cooperation; and initial and continuing teacher education. Research grants are awarded upon a highly competitive selection process that takes into account many aspects, such as the national evaluation of the university and the course, and the student’s academic performance. Having a research project funded by CAPES brings much prestige and recognition to the study itself, to the student, to the supervisor, and to the university.                 </p>

          </p>
          <br/><br/>
          <p className='mt-2'>
          <h5>RESEARCH TITLE: AFFECTIVITY IN THE PROCESS OF RESEARCH SUPERVISION</h5>
          <div className='d-flex justify-content-between font-weight-bold'>
          <p>UNICAMP – Campinas, SP, Brazil</p>
          <p>(May 12 – Jan 13)</p>
          </div>
          <p>
          Master’s research.
          <br/>
          Awarded funding by the <strong className='font-weight-bold'>Fundação de Amparo à Pesquisa do Estado de São Paulo (FAPESP),</strong> which is an extremely important public foundation from the state of São Paulo, with the mission to support research projects in institutions of higher education and research in all fields of knowledge. Research grants are awarded upon a highly competitive selection process that takes into account the relevance of the research project itself, the academic history and performance of the student, and the research history of the supervisor. Having a research project funded by FAPESP brings much prestige and recognition to the study itself, to the student, to the supervisor, and to the university.          </p>

          </p>
          </div>
        </div>
        </div>
        </Fade>
    </>
  )
}

export default Research;