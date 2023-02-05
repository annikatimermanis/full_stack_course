import { useState } from 'react'

const Header = (props) => {
  return(
    <h1>{props.text}</h1>
  )
}

const Button = (props) => {
  return(
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}

const Statistic = (props) => {
  const all = props.countgood + props.countneutral + props.countbad
  const avg = (props.countgood - props.countbad)/all
  const pos = (props.countgood/all)*100

  return(
    <>
      {props.textgood} {props.countgood}<br></br>
      {props.textneutral} {props.countneutral}<br></br>
      {props.textbad} {props.countbad}<br></br>
      all {all}<br></br>
      average {avg}<br></br>
      positive {pos}<br></br>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback" />
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      
      <Header text="statistics" />
      <Statistic textgood="good" countgood={good} 
                textneutral="neutral" countneutral={neutral} 
                textbad="bad" countbad={bad}/>
    </div>
  )
}

//test 
export default App