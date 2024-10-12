import { Div1, Div2, Wrapper } from './styles';

import card1 from '../../assets/img1.png';
import card2 from '../../assets/img2.png';
import card3 from '../../assets/img3.png';
import card4 from '../../assets/img4.png';

export function Sobre() {
  return (
    <Wrapper>
      <Div1>
        <h3>Por que escolher a Advogados Associados?</h3>
        <div>
          <p>
            Em tempos desafiadores, você precisa de um parceiro confiável. Na Advogados Associados, não somos apenas um escritório de advocacia; somos seus aliados. 
            <strong>
              {' '}
              Estamos comprometidos em transformar sua experiência jurídica e garantir que você se sinta apoiado em cada etapa do processo.
            </strong>
          </p>
          <p>
            Nosso foco é fornecer soluções práticas e eficazes, ajudando você a superar obstáculos e alcançar seus objetivos. Entre em contato conosco via WhatsApp, telefone ou e-mail e descubra como podemos ajudar.
          </p>
        </div>
      </Div1>

      <Div2>
        <div>
          <img src={card1} alt="Advogada Adélia Bastos" />
          <div>
            <h4>Dra. Adélia Bastos</h4>
            <p>
              Com vasta experiência em direito civil e trabalhista, Adélia Bastos é reconhecida por sua dedicação no atendimento ao cliente, assegurando seus direitos com excelência e empatia.
            </p>
          </div>
        </div>

        <div>
          <img src={card2} alt="Advogado João Silva" />
          <div>
            <h4>Dr. João Silva</h4>
            <p>
              Especialista em direito penal, João Silva tem um histórico de sucesso na defesa de seus clientes, focando sempre na ética e justiça em todas as suas ações.
            </p>
          </div>
        </div>

        <div>
          <img src={card3} alt="Advogada Maria Oliveira" />
          <div>
            <h4>Dra. Maria Oliveira</h4>
            <p>
              Atuando em direito de família, Maria Oliveira é reconhecida pelo seu trabalho sensível e eficaz, sempre buscando as melhores soluções para os interesses de seus clientes.
            </p>
          </div>
        </div>

        <div>
          <img src={card4} alt="Advogado Carlos Mendes" />
          <div>
            <h4>Dr. Carlos Mendes</h4>
            <p>
              Especialista em Direito Empresarial, Dr. Carlos Mendes oferece consultoria estratégica e atua em litígios, protegendo os interesses de seus clientes no ambiente de negócios.
            </p>
          </div>
        </div>
      </Div2>
    </Wrapper>
  );
}
