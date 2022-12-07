import React from 'react'

export default function Project({item}) {

    return (
        <div className="p-3 border rounded shadow mb-sm-3 mb-md-0">
            <a href={item.url}><img className="shadow img-fluid" src={item.img} alt="" style={{width: "600px"}}/></a>
            <p className="text-center fs-5 fw-normal mt-3">{item.desc}</p>
            <p className="text-center lead fw-bold fs-6"><code className="text-danger">{item.tools}</code></p>     
        </div>
    )
}
