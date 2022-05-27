import React from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaComments, FaRegComments } from 'react-icons/fa'

const Head = styled.header`
 background: #8F2D56;
 color: #FFBC42
`

const Header = ({ text }) => {
  
  
  return (
    <Head>
      <div className="container">        
        <h2>
          <span>
            <FaComments color='#fff' size={45} />
            {' '}
          </span>
          {text}
          <span>
            {' '}
            <FaRegComments color='#fff' size={45} />
          </span>
        </h2>        
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
