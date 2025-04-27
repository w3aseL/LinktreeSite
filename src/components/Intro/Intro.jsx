import React, { useState, useEffect } from "react"
import "./Intro.scss"

import { isMobile } from "react-device-detect"
import { Button } from "reactstrap"

import { SOCIALS } from "../Footer"

import PINGU_IMG from "../../assets/pingu_construction.png"
import LOGO from "../../assets/logo.png"

// Gonna add more of these for the lolz
const FLAVOR_TEXT = [
  "RESTful APIs are cool as hell.",
  "ANIMATIONS EVERYWHERE!",
  "Doing a lot of \"Reacting\"...",
  "Ever tried some Rust?",
  "HTML is NOT a programming language...",
  "Flavorful. :)",
  "*points to some heap of memory*",
  "Eyes up, Guardian.",
  "INDEED."
]

const SELECTED_FLAVOR_TEXT = Math.floor(Math.random() * FLAVOR_TEXT.length)

export const Intro = ({ children, hide, loading, inConstruction }) => { 
  const [construction, setConstruction] = useState(false)
  const [hideLoading, setHidden] = useState(false)

  if(inConstruction && !construction) {
    setTimeout(() => setConstruction(true), 2000)
  }

  useEffect(() => {
    if(construction)
      setTimeout(() => setHidden(true), 1000)
  }, [construction])

  return (
    <div id="intro-control">
      {hide && !inConstruction && children}
      <div className={`intro-pane${hide && !inConstruction ? " success hide" : ""}${construction ? " construction" : ""}`}>
        <div className="center-page-flex">
          {!hideLoading && 
            <div id="loading-box" className={`intro-loading ${hide ? "exit success" : ""} ${construction ? "exit construction" : ""}`}>
              <div id="spinner" className={`spinner`}>
                <img src={LOGO} className={`${hide ? "show" : ""}`} />
                <svg width="150" height="150" className={`check ${hide ? "show" : ""}`}>
                  <path id="check" d="M10,30 l30,50 l95,-70" />
                </svg>
              </div>
              <div className="intro-br" />
              <h1><em>{loading ? "Loading" : "Preparing"} Linktree...</em></h1>
              <h4>{FLAVOR_TEXT[SELECTED_FLAVOR_TEXT]}</h4>
            </div>
          }
          {construction && hideLoading &&
            <>
              <div id="construction" className="construction-pane">
                <img src={PINGU_IMG} width="50%" className="ml-auto mr-auto" />
                <h1><em>Site Under Constructon!</em></h1>
                <h4>Linktree is coming soon!</h4>
                <img src={LOGO} width="25%" className="ml-auto mr-auto" />
              </div>
              <div id="construction-footer" className={`construction-footer ${isMobile ? "mobile" : ""}`}>
                <div className="item mt-auto mb-auto">
                  {SOCIALS.map(({ name, url, icon }, i) => (
                    <Button className={`btn-circle ${i > 0 && "ml-1"} ${i < SOCIALS.length-1 && "mr-1"}`} size="md" color={name} outline href={url} target="_blank">
                      <i className={icon} />
                    </Button>
                  ))}
                </div>
                <p className="item mt-auto mb-auto text-center text-white">© {new Date().getFullYear()} Noah Templet</p>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Intro