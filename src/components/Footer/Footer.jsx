import React from 'react';

import { Nav, Navbar, NavItem, NavLink, Container, Row, Col, Button } from 'reactstrap';

export const SOCIALS = [
  {
    name: "twitter",
    url: "https://w3sl.link/tweet",
    icon: "fab fa-twitter"
  },
  /*{
    name: "youtube",
    url: "https://w3sl.link/yt",
    icon: "fab fa-youtube"
  },
  {
    name: "twitch",
    url: "https://w3sl.link/twitch",
    icon: "fab fa-twitch"
  },*/
  {
    name: "instagram",
    url: "https://w3sl.link/ig",
    icon: "fab fa-instagram"
  },
  {
    name: "github",
    url: "https://w3sl.link/github",
    icon: "fab fa-github"
  },
  {
    name: "linkedin",
    url: "https://w3sl.link/in",
    icon: "fab fa-linkedin-in"
  },
  {
    name: "google-blue",
    url: "mailto:Noah%20Templet<contact@noahtemplet.dev>",
    icon: "far fa-user-circle"
  },
  {
    name: "gmail",
    url: "mailto:Noah%20Templet<business@noahtemplet.dev>",
    icon: "fas fa-briefcase"
  }
]

class Footer extends React.Component {
  render() {
    return(
      <footer>
        <Navbar color="dark" dark>
          <Container className="mt-2 mb-2">
            <Row className="d-flex w-100 ml-auto mr-auto">
              <Col xs="12" md="6" className="d-flex justify-content-center justify-content-md-start">
                {SOCIALS.map(({ name, url, icon }, i) => (
                  <Button className={`btn-circle ${i > 0 && "ml-1"} ${i < SOCIALS.length-1 && "mr-1"}`} size="md" color={name} outline href={url} target="_blank">
                    <i className={icon} />
                  </Button>
                ))}
              </Col>
              <Col xs="12" md="6" className="mt-3 mt-md-auto mb-auto">
                <p className="mt-auto mb-auto text-center text-md-right text-white">© {new Date().getFullYear()} Noah Templet</p>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </footer>
    )
  }
}

export { Footer }

export default Footer;