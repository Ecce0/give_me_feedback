import React from "react"
import Card from '../shared/Card'
import { Link } from 'react-router-dom'
import { FaInfoCircle } from 'react-icons/fa'

const About = () => {
  
  return(
    <Card>
      <div className="about">        
        <h1>About This Project<span>{' '}<FaInfoCircle color='#FFBC42' /></span></h1>
        <p>This is a react app to leave feedback for me, the Software Engineer of this app, E.Collier</p>
        <p>Version 1.0.0</p>

        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  )

}

export default About
