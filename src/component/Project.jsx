
// import React from 'react'
// import project from '../data/project.json'

// const Project = () => {
//   return (
//     <div className='container my-4' id='Project'>

//       <h1 className='text-center mb-4' style={{ color: "black" }}>
//         PROJECT
//       </h1>

//       <div className="row g-4">

//         {project.map((data) => {
//           return (
//             <div
//               key={data.key}
//               className="col-12 col-sm-6 col-md-4 d-flex"
//             >

//               <div
//                 className="card bg-dark text-light w-100"
//                 style={{
//                   border: "2px solid yellow",
//                   boxShadow: "0 4px 12px rgba(11,175,10,0.4)",
//                   borderRadius: "10px",
//                   overflow: "hidden"
//                 }}
//                 data-aos="flip-right"
//                 data-aos-duration="1000"
                
//               >
               

//                 <img
//                   src={data.imageSrc}
//                   alt={data.title}
//                   style={{
//                     width: "100%",
//                     height: "200px",
//                     objectFit: "cover"
//                   }}
//                 />

//                 <div className="card-body text-center">

//                   <h5 className="card-title">
//                     {data.title}
//                   </h5>

//                   <p className="card-text">
//                     {data.description}
//                   </p>

//                   <div className="d-flex justify-content-center gap-2">

//                     <a href={data.demo} className="btn btn-primary btn-sm">
//                       Demo
//                     </a>

//                     <a href={data.source} className="btn btn-warning btn-sm">
//                       Code
//                     </a>

//                   </div>

//                 </div>

//               </div>

//             </div>
//           )
//         })}

//       </div>

//     </div>
//   )
// }

// export default Project
import React from 'react'
import project from '../data/project.json'

const Project = () => {
  return (
    <div className='container my-4' id='Project'>

      <h1 className='text-center mb-4' style={{ color: "block" }}>
        PROJECT
      </h1>

      <div className="row justify-content-center">

        {project.map((data, index) => {
          return (
            <div
              key={data.key}
              className="col-12 col-sm-6 col-md-4 d-flex justify-content-center my-3"
            >

              <div
                className="card bg-dark text-light w-100"
                style={{
                  maxWidth: "18rem",
                  border: "2px solid yellow",
                  boxShadow: "0 4px 12px rgba(11,175,10,0.4)",
                  borderRadius: "10px",
                  overflow: "hidden"
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >

                <img
                  src={data.imageSrc}
                  alt={data.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body text-center">

                  <h5 className="card-title">
                    {data.title}
                  </h5>

                  <p className="card-text">
                    {data.description}
                  </p>

                  <div className="d-flex justify-content-center gap-2">

                    <a href={data.demo} className="btn btn-primary btn-sm">
                      Demo
                    </a>

                    <a href={data.source} className="btn btn-warning btn-sm">
                      Code
                    </a>

                  </div>

                </div>

              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Project