const Header = (props) => {
  return(
    <h1>{props}</h1>
  )
}

const Content = (props) => {
  return(
    <>
      props.map((part) => {
        <Part name={part.name} exercises={part.exercises} />
      })
    </>
  )
}

const Part = (props)  => {
  return(
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Course = ({course}) =>{
    return(
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
      </div>
    )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App