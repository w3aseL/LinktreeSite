import React from 'react'

import { Row, Col } from 'reactstrap'

import pinguHardHat from '../../assets/pingu_construction.png'

class Construction extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Row className="d-flex justify-content-center mt-5">
          <Col md="6" className="d-flex">
            <img src={pinguHardHat} alt="shitty photoshop of pingu lol" style={{ width: "50%", height: "100%" }} className="ml-auto mr-auto" />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mt-2">
          <Col md="8" className="text-center text-white">
            <h1>Coming Soon!</h1>
            <p>
              My good friend Pingu (<em>in shitty Photoshop format</em>) is here to tell you that you are accessing a page that is under construction!
            </p>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export { Construction }

export default Construction