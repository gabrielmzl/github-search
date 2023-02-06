import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  margin-bottom: 5rem;
`

export const Repositories = styled.div`
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font: bold 1.125rem Nunito, sans-serif;
      color: rgb(196, 212, 227);
    }

    p {
      color: rgb(123, 150, 178);
    }
  }
`

export const RepoList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
  gap: 32px;
  margin-top: 28px;
  padding-bottom: 105px;
`

export const Repo = styled.div`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 32px;
  gap: 20px;
  background: rgb(17, 33, 49);
  border-radius: 10px;

  p {
    line-height: 160%;
    color: rgb(175, 194, 212);
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      display: flex;
      gap: 0.3rem;
      align-items: center;
      font-size: 0.8rem;

      svg {
        color: #fae055;
      }
    }
  }
`