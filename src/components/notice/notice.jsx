import React from 'react'
import './notice.css'

function Notice() {
  return (
    <div className='topContainer container pt-md-5'>
        <h2 className='pb-3 text-center'>Notice</h2>
          <section className="notice-list">
      <div className="notice-item">
        <h3>Scheme Update</h3>
        <p>The "Organic Farming Scheme" application deadline has been extended to <b>March 31, 2024</b>.</p>
        <p className="date">Posted on: December 21, 2024</p>
      </div>
      <div className="notice-item">
        <h3>Platform Maintenance</h3>
        <p>Scheduled maintenance will occur on <b>January 5, 2024</b>, from 12:00 AM to 6:00 AM. The platform may be unavailable during this time.</p>
        <p className="date">Posted on: December 15, 2024</p>
      </div>
      <div className="notice-item">
        <h3>New Scheme Launch</h3>
        <p>We are excited to announce the launch of the "Rainwater Harvesting Subsidy" scheme. Applications open on <b>January 10, 2024</b>.</p>
        <p className="date">Posted on: December 18, 2024</p>
      </div>
    </section>
    </div>
  )
}

export default Notice