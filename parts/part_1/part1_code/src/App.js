// 1.1: course information, step1
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content part={course.parts} />
      <Total part={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <>
      <Part name={props.part[0].name} exercises={props.part[0].exercises} />
      <Part name={props.part[1].name} exercises={props.part[1].exercises} />
      <Part name={props.part[2].name} exercises={props.part[2].exercises} />
    </>
  )
}

// 1.2: course information, step2
const Part = (props)  => {
  return(
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  const sum = props.part[0].exercises + props.part[1].exercises + props.part[2].exercises
  return(
    <p>Number of exercises {sum}</p>
  )
}

export default App