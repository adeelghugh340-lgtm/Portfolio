import React from 'react'
import experience from '../data/experience.json'

const Experience = () => {
  return (
    <div>
      <div className='container ex' id='Experince'>

        <div className='ghugh'>
          <h1 style={{ color: "block" }}>EXPERIENCE</h1>
        </div>

        {experience.map((data) => {
          return (
            <div
              key={data.id}
              className='ex-items text-center my-5'
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="lef">
                <img src={data.imageSrc} alt={data.organisation} className='image' />
              </div>

              <div className="right">
                <h2 style={{ color: 'white' }}>{data.organisation}</h2>

                <h4>
                  <span style={{ color: 'yellowgreen' }}>
                    {data.startDate} - {data.endDate}
                  </span>{" "}
                  <span style={{ color: 'yellow' }}>
                    {data.location}
                  </span>
                </h4>

                {data.experiences.map((exp, index) => (
                  <h5 key={index}>
                    <span style={{ color: 'yellow' }}>{exp}</span>
                  </h5>
                ))}

              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Experience