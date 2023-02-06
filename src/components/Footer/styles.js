import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background: rgb(11, 27, 43);

  @media (max-width: 920px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 864px;
  margin: 0 auto;
  padding: 16px 0px;
  align-items: center;
  
  a {
    font: 0.9rem Nunito, sans-serif;
    color: rgb(50, 148, 248);
    text-decoration: none;
    height: fit-content;
    border-radius: 1px;
    outline-width: 1px;
    outline-offset: 3px;
  }

  p {
    color: rgb(123, 150, 178);
  }

  @media (max-width: 380px) {
    flex-direction: column;
  }
` 