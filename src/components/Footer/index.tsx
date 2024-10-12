
import { Container, Div1, Div2, Div3, Div4, Wrapper } from './styles';
import { FaEnvelope } from 'react-icons/fa'; 
import { FaWhatsapp } from 'react-icons/fa'; 

export function Footer() {
  return (
    <Container>
      <Wrapper id="footer">
        <Div1>
          <div>
            <h5>AGENDE UMA CONVERSA</h5>
            <p>
              Marque seu atendimento on-line ou presencial com um de nossos
              advogados associados.
            </p>
          </div>

          <div>
            <h5>ATENDIMENTO</h5>
            <p>atendimento.advogadosassociados@gmail.com</p>
            <p>Telefone: 81 0000-0000</p>
            <p>Atendimento: Segunda - Sexta: 7h às 17h</p>
          </div>

          <div>
            <p>contato.advogadosassociados@gmail.com</p>
          </div>
        </Div1>
        <Div2>
          <li>
            <a href="mailto:atendimento.advogadosassociados@gmail.com" target="_blank" rel="noreferrer">
              <FaEnvelope size={20} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <FaWhatsapp size={20} />
            </a>
          </li>
        </Div2>

        <Div3>
          {}
        </Div3>
      </Wrapper>
      <Div4>
        <p>
          <span>© 2024 </span>Advogados Associados{' '}
          <span>Todos os direitos reservados</span>
        </p>
      </Div4>
    </Container>
  );
}
