import {Greet, Button} from './styledComponents'

const Greeting = props => {
  const {greeting, changeGreeting, isActive} = props
  const changeGreet = () => {
    changeGreeting(greeting.imageUrl, greeting.imageAltText, greeting.id)
  }

  return (
    <Greet>
      <Button activeButton={isActive} type="button" onClick={changeGreet}>
        {greeting.buttonText}
      </Button>
    </Greet>
  )
}
export default Greeting
