import React, { useState } from 'react'
import { request } from './api'

import { Intro } from './components';
import { SOCIALS } from './components/Footer/Footer';
import LOGO from "./assets/logo.png"

import { isMobile } from "react-device-detect"
import { Button } from "reactstrap"

const Page = props => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    error: null
  });
  const [hideIntro, setIntroHidden] = useState(false)

  const checkTimeout = (sec=1) => {
    if(state.loading && !state.data) {
      setTimeout(() => checkTimeout(0.25), sec * 1000)
    } else {
      setIntroHidden(true)
    }
  }

  if(!state.loading && !state.data && !state.error) {
    setState(prevState => ({ ...prevState, loading: true }))

    setTimeout(() => checkTimeout(), 1000)

    request("/link", null, "GET")
    .then(res => setState(prevState => ({ ...prevState, loading: false, data: res.data })))
    .catch(err => setState(prevState => ({ ...prevState, loading: false, error: err })))
  }

  // console.log(state);

  const processColor = color => {
    if (color =="tiktok") return "tiktok-blue";

    return color;
  }

  return (
    <Intro hide={hideIntro} loading={state.loading}>
      <div style={{ flex: "1 1 auto" }} className={`background d-flex link-body ${isMobile ? "mobile" : ""}`}>
        <div className="d-flex flex-column m-auto">
          <img src="https://content.noahtemplet.dev/profile_pictures/NoahTHeadshot.jpg" alt="Headshot" className={`mx-auto headshot mb-2`}/>
          <h3 className='text-center text-white header mb-1'>Noah Templet</h3>
          <h5 className='text-center text-white mb-5'>Software Developer</h5>
          {state.data != null ? state.data.map((l, i) => (
            <Button
              className={`btn mt-2 mb-2 btn-rounded`}
              outline
              color={processColor(l.logoAlt)}
              size={isMobile ? 'md' : 'lg'}
              href={l.linkUrl}
            >
              <div className='d-flex'>
                <i className={`fab fa-${l.logoAlt} ml-0 mr-0 my-auto`}/>
                <span className='ml-auto mr-auto my-auto'>{l.linkName}</span>
              </div>
            </Button>
          ))
          : <h1>Loading...</h1>}
          <img className='logo mx-auto mt-4' src={LOGO} />
          <p className='text-small text-white mb-0 text-center mt-1'>© {new Date().getFullYear()} Noah Templet</p>
        </div>
      </div>
    </Intro>
  )
}

export default Page