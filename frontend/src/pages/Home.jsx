import React from 'react'
import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'


export default function Home() {
  return (
      <>
          <section className="heading">
              <h1>What do you need help with ? </h1>
              <p>Please Choose from an option below</p>
          </section>
          
          <Link to='/new-ticket' className='btn btn-reverse btn-block '>
            <FaQuestionCircle /> Open a new ticket
          </Link>
          <Link to='/tickets' className='btn btn-block'>
            <FaTicketAlt /> View my tickets
          </Link>
      </>
  )
}
