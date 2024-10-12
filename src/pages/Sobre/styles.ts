import styled from 'styled-components';

// Wrapper principal do layout
export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: ${(props) => props.theme['base-background']};
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

// Seção de informações principais
export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 2rem;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  p {
    max-width: 800px;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.6;
  }

  div {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    strong {
      color: black;
      font-weight: bold;
    }
  }
`;

// Seção para exibir os advogados
export const Div2 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem;

  div {
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease;
    flex: 1;
    text-align: center;
    padding-top: 50px;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      margin: 0 auto;
      display: block;
    }

    div {
      padding: 1rem;

      h4 {
        color: ${(props) => props.theme['base-title']};
        margin-bottom: 0.5rem;
      }

      p {
        color: ${(props) => props.theme['base-subtitle']};
        line-height: 1.5;
        font-size: 0.9rem;
      }
    }
  }
`;
