import React from 'react'
import './About.css'

function About() {
  return (
    <div>
         <div className="container topContainer pt-3">
    <section className='container mb-5'>
      <h2>Our Mission</h2>
      <p>At KrishiSahayak, we aim to bridge the gap between policymakers and farmers. We strive to:</p>
      <ul>
        <li className='mb-3'>Provide easy access to government schemes and subsidies.</li>
        <li className='mb-3'>Ensure transparency in application processes for farmers.</li>
        <li className='mb-3'>Facilitate timely assistance and benefits to eligible applicants.</li>
      </ul>
    </section>

    <section className='container mb-5'>
      <h2>What We Do</h2>
      <p>KrishiSahayak is a one-stop solution for:</p>
      <ul>
        <li className='mb-3'><strong>Government Schemes:</strong> Explore and apply for a wide range of agricultural schemes tailored for farmers, landowners, and agribusinesses.</li>
        <li className='mb-3'><strong>Application Management:</strong> Simplify the process of applying for schemes with user-friendly forms and instant updates on application status.</li>
        <li className='mb-3'><strong>Real-Time Updates:</strong> Stay informed about new and upcoming schemes, deadlines, and eligibility criteria.</li>
        <li className='mb-3'><strong>Expert Guidance:</strong> Connect with agricultural experts for advice on maximizing benefits from available schemes.</li>
      </ul>
    </section>
    <section className='container mb-5'>
      <h2>Why Choose Us?</h2>
      <ul>
        <li className='mb-3'><strong>Ease of Use:</strong> A seamless and intuitive platform designed to cater to the needs of farmers and administrators alike.</li>
        <li className='mb-3'><strong>Transparency:</strong> Clear and accurate information about schemes, eligibility, and application processes.</li>
        <li className='mb-3'><strong>Accessibility:</strong> Available 24/7, ensuring farmers can access assistance anytime, anywhere.</li>
        <li className='mb-3'><strong>Personalized Assistance:</strong> Tailored recommendations based on user profiles and agricultural needs.</li>
      </ul>
    </section>

    <section className='container mb-5'>
      <h2>Our Vision</h2>
      <p>We envision a future where technology drives inclusivity and accessibility in agriculture, making sure every farmer benefits from government support and modern resources. At KrishiSahayak, we’re committed to fostering a sustainable and prosperous agricultural ecosystem.</p>
    </section>
  </div>
    </div>
  )
}

export default About