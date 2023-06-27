import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const GreetingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
export const Heading = styled.h1`
  font-size: 24px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #000000;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const ButtonsContainer = styled.ul`
  padding-left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const Button = styled.button`
  border: 1px solid #db1c48;
  border-radius: 10px;
  color: #db1c48;
  font-size: 10px;
  font-weight: bold;
  font-family: 'Roboto';
  margin: 10px;
  background-color: transparent;
  padding: 5px;
  padding-left: 8px;
  padding-right: 8px;
  height: 30px;
  width: 60px;
`
export const Image = styled.img`
  margin-top: 20px;
  height: 150px;
  width: 250px;
`
