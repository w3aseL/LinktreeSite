import React, { useState } from 'react'
import { request } from './api'

import { Intro } from './components';

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

    // request("/portfolio", null, "GET")
    // .then(res => setState(prevState => ({ ...prevState, loading: false, data: res.data })))
    // .catch(err => setState(prevState => ({ ...prevState, loading: false, error: err })))
  }

  return (
    <Intro hide={hideIntro} loading={state.loading} inConstruction>
      <div id="root">
        <h1>Testing!</h1>
      </div>
    </Intro>
  )
}

export default Page