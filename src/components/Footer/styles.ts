import styled from 'styled-components';

export const Container = styled.footer`
  background: #696969; 
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  gap: 2rem;
`;

export const Div1 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  color: black;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  h5 {
    text-align: center;
    margin-bottom: 0.5rem;
    color: white; 
  }

  p {
    font-size: 0.9rem;
    text-align: center;
    color: white; 
  }
`;

export const Div2 = styled.ul`
  display: flex;
  gap: 1rem;
  list-style-type: none;

  li {
    border: 1px solid #555;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    background-color: #d3d3d3;
  }

  a {
    color: #555; 
  }
`;

export const Div3 = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  img {
    height: 2rem;
  }
`;

export const Div4 = styled.div`
  margin: 0 auto;
  padding: 1.5rem 0;
  text-align: center;
  color: white; 
 
  font-size: 0.8rem;

  span {
    color: white; 
  }
`;
