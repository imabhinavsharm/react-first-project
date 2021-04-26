import React from 'react'

export const Card = (props) => {
    return (
        <div className="col">
        <div className="card">
            <img src={props.imgsrc} className="card-img-top" alt="..." />
            <div className="card-body">
                <h2 className="card-title"style={{color:"teal"}}>{props.heading}</h2>
                <p className="card-text">{props.para}</p>
            </div>
        </div>
    </div>
    )
}
