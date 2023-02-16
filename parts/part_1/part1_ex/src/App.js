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

const App = () => {
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
  return (
    <div>
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