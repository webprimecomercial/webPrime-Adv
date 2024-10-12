import styled from 'styled-components';

// Contêiner principal do sac
export const AccordionContainer = styled.div`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2rem;
  border-radius: 1rem; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

// Item individual do sac
export const AccordionItem = styled.div`
  width: 100%; 
  max-width: 600px; 
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  overflow: hidden; 

  @media (max-width: 660px) {
    max-width: 400px;
  }

  @media (max-width: 500px) {
    max-width: 250px;
  }
`;

// Título do sac que pode ser clicado
export const AccordionTitle = styled.div`
  cursor: pointer;
  border: 1px solid ${(props) => props.theme['gray-600']}; 
  border-radius: 0.5rem;
  padding: 1rem;
  color: ${(props) => props.theme['gray-100']}; 
  font-weight: bold;
  background-color: ${(props) => props.theme['gray-800']}; 
  
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    background-color: ${(props) => props.theme['gray-700']}; 
  }
`;

// Conteúdo do sac que é exibido ou oculto
export const AccordionContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 1rem 2rem; 
  color: ${(props) => props.theme['gray-200']}; 
  font-size: 0.9rem;
  line-height: 1.5;
  background-color: ${(props) => props.theme['gray-800']}; 

  @media (max-width: 500px) {
    padding: 1rem;
  }
`;
