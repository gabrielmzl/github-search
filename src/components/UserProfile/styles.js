import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 32px;
  border-radius: 10px;
  background: rgb(11, 27, 43);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 28px;
  transform: translateY(-30%);
  position: relative;
  max-width: 864px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  margin-right: 32px;

  @media (max-width: 650px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`

export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    h1 {
      font: bold 1.5rem Nunito, sans-serif;
      color: rgb(231, 237, 244);
      margin-bottom: 8px
    }
  
    p {
      color: rgb(175, 194, 212);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
      margin-bottom: 0.5rem;
    }

    span {
      color: rgb(175, 194, 212);
      font-size: 0.9rem;
      margin-top: 8px;
    }
  }
`

export const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;

  span {
    display: flex;
    gap: 0.3rem;
    align-items: center;
    color: rgb(175, 194, 212);
  }

  @media (max-width: 650px) {
    margin-top: 1rem;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 360px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
  }
`