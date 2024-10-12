import { Container, Wrapper } from './styles';
import blogueira from '../../assets/img-header.png';


export function Home() {
  return (
    <Container>
      <Wrapper>
        <div>
          <h1>Advogados Associados</h1>
          <p>
            Na Advogados Associados, estamos dedicados a fornecer a você serviços jurídicos de excelência e a representação legal que atende às suas necessidades.
          </p>

          <a
            href="https://wa.me/5544998505620"
            target="_blank"
            rel="noreferrer"
          >
            Fale com a nossa equipe
          </a>
        </div>
        <img src={blogueira} alt="" />
      </Wrapper>
    </Container>
  );
}
