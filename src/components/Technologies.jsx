import React from 'react'
import FirstData from '../Data'
import SecondData from '../Data2'
import Technology from './Technology'

export default function Technologies() {
    const firstcards = FirstData.map(item => {
    return(
        <Technology
            key = {item.id}
            item = {item}
        />
    )
    })

    const secondcards = SecondData.map(item => {
    return(
        <Technology
            key = {item.id}
            item = {item}
        />
    )
    })

return (
    <section id="technology" className="p-5 animate__animated animate__fadeIn">
        <h1 className="text-center fw-bolder mt-5">Technologies & Tools</h1>
        <div className="container">
            <div className="mt-5 d-flex justify-content-evenly flex-wrap gap-2">
                {firstcards}
            </div>
            <div className="mt-5 d-flex justify-content-evenly flex-wrap gap-2">
                {secondcards}
            </div>
        </div>
    </section>
)
}
