import React from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Head = styled.header`
 background: #f7aa97;
 color: #6b0c28
`

const Header = ({ text }) => {
  
  
  return (
    <Head>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </Head>
  )
}

Header.defaultProps = {
  text: 'Feedback UI'
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Header
