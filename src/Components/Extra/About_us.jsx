import React from 'react'
import { Accordion } from 'react-bootstrap'

const About_us = () => {
  return (
    <div>
      <h1>About Us</h1>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Motive</Accordion.Header>
          <Accordion.Body>
            The main motive of this website is to provide a platform for it users to convert their images into text format. This website is very easy to use and is very user friendly. It is a free website and can be used by anyone.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How does are website work</Accordion.Header>
          <Accordion.Body>
            This website uses Azure Computer Vision API to convert the image into text format. It is a very fast and accurate API. It is a very reliable API and is used by many big companies.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default About_us