import styled from 'styled-components'

export const Greet = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  border: 1px solid #db1c48;
  border-radius: 10px;
  color: ${props => (props.activeButton ? '#ffffff' : '#db1c48')};
  font-size: 10px;
  font-weight: bold;
  font-family: 'Roboto';
  margin: 10px;
  background-color: ${props =>
    props.activeButton ? '#db1c48' : 'transparent'};
  padding: 5px;
  padding-left: 8px;
  padding-right: 8px;
  height: 30px;
  width: 60px;
`
