import { useState } from 'react';

import {
  Container,
  Wrapper,
  ServicesBloc,
  ServicesLink,
  DetailsBloc,
} from './styles';

export function Servicos() {
  const [selectedTopic, setSelectedTopic] = useState<number>(1);

  return (
    <Container>
      <Wrapper id="servico">
        <ServicesBloc>
          <h3>Nossos Serviços</h3>
          <ul>
            <li>
              <ServicesLink selected={selectedTopic === 1} onClick={() => setSelectedTopic(1)}>
                Consultoria Empresarial
              </ServicesLink>
            </li>
            <li>
              <ServicesLink selected={selectedTopic === 2} onClick={() => setSelectedTopic(2)}>
                Direito Familiar
              </ServicesLink>
            </li>
            <li>
              <ServicesLink selected={selectedTopic === 3} onClick={() => setSelectedTopic(3)}>
                Direito Trabalhista
              </ServicesLink>
            </li>
          </ul>
        </ServicesBloc>


        <DetailsBloc>
       
        {selectedTopic === 1 && (
         <>
            <div>
              <h3>Estratégias Empresariais</h3>
              <p>Consultoria para planejamento e estruturação de negócios.</p>
            </div>
            <div>
              <h3>Contratos e Acordos</h3>
              <p>Elaboração e revisão de contratos comerciais e societários.</p>
            </div>
            <div>
              <h3>Compliance e Regulamentação</h3>
              <p>Orientação sobre conformidade legal e regulatória para empresas.</p>
            </div>
            </>
        )}

        {selectedTopic === 2 && (
          <>
            <div>
              <h3>Divórcio e Separação</h3>
              <p>Assessoria em processos de divórcio e separação amigável.</p>
            </div>
            <div>
              <h3>Guarda e Visitação</h3>
              <p>Orientação legal em casos de guarda de filhos e direitos de visitação.</p>
            </div>
            <div >
              <h3>Testamentos e Planejamento Patrimonial</h3>
              <p>Elaboração de testamentos e orientações sobre sucessão patrimonial.</p>
            </div>
          </>
        )}
      {selectedTopic === 3 && (
        <>
          <div>
            <h3>Contratos de Trabalho</h3>
            <p>Elaboração e revisão de contratos trabalhistas e acordos.</p>
          </div>
          <div>
            <h3>Defesa em Reclamações Trabalhistas</h3>
            <p>Representação legal em disputas trabalhistas e reclamações.</p>
          </div>
          <div>
            <h3>Consultoria em Políticas de Recursos Humanos</h3>
            <p>Orientação sobre políticas de RH e compliance trabalhista.</p>
          </div>
          
        </>
      )}
      </DetailsBloc>
      </Wrapper>
  </Container>
  );
}
