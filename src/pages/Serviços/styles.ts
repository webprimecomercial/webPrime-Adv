import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  background-color: #d9d9d9;
  color: black;
  display: flex;
  justify-content: center; 
  align-items: center; 
  min-height: 100vh; 
`;
// Wrapper para centralizar o conteúdo
export const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
`;

// Bloco de serviços
export const ServicesBloc = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: left;

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem; 
    margin-left: 190px;
    color: black;    
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: center; 
    margin-left: 10px;
    gap: 2rem; 
    padding: 1rem;   
  }
`;

// Botão de link para serviços
export const ServicesLink = styled.button<{ selected: boolean }>`
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  border: none;
  cursor: pointer;
  padding: 1rem 2rem;
  background-color: ${(props) => (props.selected ? '#666666' : props.theme['white'])};
  color: ${(props) => props.theme['#white']};
  border-radius: 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme['000000']}; 
  }
`;

// Bloco de detalhes dos serviços
export const DetailsBloc = styled.div`
  width: 100%;
  margin-left 150px;
  max-width: 800px; 
  margin: 2rem auto; 
  align-items: center; 
  display: flex; 
  flex-direction: column; 
  gap: 1rem; 

  div {
    padding: 1rem;
    background-color: #666666; 
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    width: 100%; 
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-white']};
    margin-top: 5px; 
    margin-bottom: 10px;
  }

  p {
    color: white;
    font-size: 0.9rem;
  }

 
  @media (max-width: 600px) {
    div {
      padding: 0.7rem; 
    }

    h3 {
      font-size: 1rem; 
    }

    p {
      font-size: 0.8rem; /
    }
  }
`;
