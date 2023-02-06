import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 396px;
  background: url('/left-header-image.svg') left center no-repeat, url('/right-header-image.svg') right center no-repeat;
  position: relative;
  overflow: hidden;

  @media (max-width: 920px) {
    padding: 2rem;
  }
`

export const ShadowRight = styled.div`
  width: 100%;
  max-width: 900px;
  height: 52px;
  margin: 20px;
  background: rgb(20, 88, 156);
  filter: blur(106px);
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`

export const ShadowLeft = styled.div`
  width: 236px;
  height: 236px;
  border-radius: 999px;
  background: rgb(20, 88, 156);
  filter: blur(200px);
  position: absolute;
  left: 0px;
  top: 0px;
  transform: translate(-50%, -50%);
`

export const ShadowMid = styled.div`
  width: 100%;
  max-width: 900px;
  height: 52px;
  margin: 20px;
  background: rgb(20, 88, 156);
  filter: blur(106px);
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 1.2rem;
  max-width: 864px;
  margin: auto;
`

export const Title = styled.h3`
  color: #3294F8;
`

export const InputWrapper = styled.div`
  width: 100%;
  border: 1px solid rgb(28, 47, 65);
  border-radius: 6px;
  padding: 12px 16px;
  background: rgb(4, 15, 26);
  color: rgb(58, 83, 107);
  display: flex;
  justify-content: space-between;
  gap: 16px;
`

export const Input = styled.input`
  width: 100%;
  outline: none;
  background: none;
  border: none;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 28px;
  
  :focus {
    color: rgb(255, 255, 255);
    border-color: rgb(50, 148, 248);
    outline-width: 1px;
    transition: border 150ms ease 0s;
  }
  
  &::placeholder {
    color: rgb(58, 83, 107);
  }
`

export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`

export const Button = styled.button`
  display: flex;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(28, 47, 65);
  background-color: rgb(7, 20, 34);
`