import React from "react"
import { Link, NavLink, useParams } from "react-router-dom"
import Card from "./feedback/shared/Card"

function About() {
  const params = useParams()
  return (
    <Card>
      <div className='about'>
        <h1>About the Project</h1>
        <p>This is a React app to leave feedback for the project</p>
        <p>Version: 1.0.0</p>
        <p>Params id: {params.id}</p>
        <p>Params name: {params.name}</p>
        <p>
          <Link to='/'>Back to Home</Link>
          <br />
        </p>
      </div>
    </Card>
  )
}

export default About
