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


// const Count = (props) => {
//   return(
//     <>
//       {props.text} {props.count}<br></br>
//     </>
//   )
// }

const StatisticLine = (props) => {
  return(
    <> 
        <td>{props.text} </td>
        <td>{props.value} </td>
    </>
  )
}

const Statistics = (props) =>{
  return(
    <div>
      <table>
        <tbody>
          <tr>
            <StatisticLine text="good" value = {props.value1} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value = {props.value2} />
          </tr>
          <tr>
            <StatisticLine text="bad" value = {props.value3} />
          </tr>
          <tr>
            <StatisticLine text="all" value = {props.value4} />
          </tr>
          <tr>
            <StatisticLine text="average" value ={props.value5} />
          </tr>
          <tr>
            <StatisticLine text="positive" value = {props.value6} />
          </tr>
          </tbody>
      </table>
    </div>
  )
}

function random(){
  return(
    Math.floor(Math.random() * 8)
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = (props) => {
    setGood(good + 1)
  }

  const setNeutralValue = (props) => {
    setNeutral(neutral + 1)
  }

  const setBadValue = (props) => {
    setBad(bad + 1)
  }

  const resetValues = (props) => {
    setGood(0)
    setNeutral(0)
    setBad(0)
  }

  const all = () =>  good + neutral + bad
  const average = () => (good - bad)/all()
  const positive = () => (good/all())*100

  if(good !== 0 || neutral !== 0 || bad !== 0){
    return(
      <div>
      <Header text="give feedback" />
      <Button text="good" handleClick={() => setGoodValue(good)} />
      <Button text="neutral" handleClick={() => setNeutralValue(neutral)} />
      <Button text="bad" handleClick={() => setBadValue(bad)} />
      <Button text="reset" handleClick={() => resetValues()} />
      
      <Header text="statistics" />
      <Statistics 
        value1={good}
        value2={neutral}
        value3={bad}
        value4={all()}
        value5={average()}
        value6={positive()}
      />
    </div>
    )
  }
  console.log("selected", selected)
  return (
    <div>
      <div>
        {anecdotes[selected]}
        <br></br>
        <Button text="next anecdote" handleClick={() => setSelected(random())} />
      </div>
      <Header text="give feedback" />
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <Button text="reset" handleClick={() => setGood(0) + setNeutral(0) + setBad(0)} />
      <p>No feedback given</p>
    </div>
  )
}

//test 
export default App