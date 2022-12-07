import React from 'react'
import ProjectData from '../ProjectData'
import ProjectData2 from '../ProjectData2'
import Project from './Project'

export default function Projects() {


    const topcards = ProjectData.map(item => {
    return(
        <Project
            key = {item.id}
            item = {item}
        />
    )
    })

    const bottomcard = ProjectData2.map(item => {
    return(
        <Project
            key = {item.id}
            item = {item}
        />
    )
    })
return (
    <section id="project" className="p-5">
        <div className="container">
            <h1 className="text-center fw-bolder">Recent Projects</h1>
            <div className="mt-5 d-md-flex d-sm-block justify justify-content-center gap-5" data-aos="fade-in" data-aos-easing="ease-in-back"
            data-aos-delay="200"
            data-aos-offset="0">
                {topcards}
            </div>
            <div className="mt-md-4 mt-sm-3 d-md-flex d-sm-block justify justify-content-center gap-5" data-aos="fade-in" data-aos-easing="ease-in-back"
            data-aos-delay="200"
            data-aos-offset="0">
                {bottomcard}
            </div>
        </div>
    </section>
)
}
