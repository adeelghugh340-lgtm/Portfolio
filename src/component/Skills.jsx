import React from 'react'
import skills from '../data/skills.json'

const Skills = () => {
    return (
        <div>
            <div className="container skills" id='Skills'>
                <div className='ghug'>
                    <h1 style={{ color: "block" }}>SKILLS</h1>
                </div>

                <div className="items">
                    {skills.map((data) => {
                        return (
                            <div 
                                className="item" 
                                key={data.title}
                                data-aos="flip-left"
                                data-aos-duration="1000"
                            >
                                <img 
                                    src={data.imageSrc} 
                                    alt={data.title} 
                                    className='im' 
                                />
                                <h3>{data.title}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills