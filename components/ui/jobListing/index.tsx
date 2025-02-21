import React from "react"
import StyledJobListing from "./styles"

const JobListing = () => {
  return (
    <StyledJobListing>
      <div className="job-type full-time">
        <h2>Full-time Job ?</h2>
        <div className="positions">
          <div className="col">
            <h3 className="department">Developpement</h3>
            <ul>
              <li className="ios">iOS Developer</li>
              <li>Android Developer</li>
              <li>flutter developer </li>
              <li>React native developer</li>
            </ul>
          </div>
          <div className="col">
            <h3 className="department">Design</h3>
            <ul>
              <li>UI/UX Designer</li>
            </ul>
          </div>
          <div className="col">
            <h3 className="department">SEO/SEA</h3>
            <ul>
              <li>PPC</li>
            </ul>
          </div>
          <div className="col">
            <h3 className="department">Copywriting</h3>
            <ul>
              <li>Copywriter</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="job-type freelance">
        <h2>Freelancer ?</h2>
        <div className="positions">
          <div className="col">
            <h3 className="department">Developpement</h3>
            <ul>
              <li>Three Js developer</li>
              <li>Android Developer</li>
            </ul>
          </div>
          <div className="col">
            <h3 className="department">Design</h3>
            <ul>
              <li>UX Designer</li>
            </ul>
          </div>
          <div className="col">
            <h3 className="department">Marketing</h3>
            <ul>
              <li>NFT Marketer</li>
            </ul>
          </div>
        </div>
      </div>
    </StyledJobListing>
  )
}

export default JobListing
