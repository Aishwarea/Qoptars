import React from "react";
import "./Card.css";

export const Card = (props) => {
    return (
    <div className="Card">
        <div className="CardHeader">
        {props.imgSrc && props.imgAlt && (
        <img src={props.imgSrc} alt={props.imgAlt} className="CardImg"/>
        )}
        </div>
        <br/>
        {props.title && <h1 className="CardTitle">{props.title}</h1>}
        {props.subtitle && <h2 className="CardSubtitle py-2">{props.subtitle}</h2>}
        {props.description && <p className="CardDescription">{props.description}</p>}
        <br/>
    </div>
    );
};