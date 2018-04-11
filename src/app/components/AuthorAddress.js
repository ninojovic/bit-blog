import React from 'react'

export const AuthorAddress = ({ street, city, zipcode, long, lat }) => {
    return (
        <div className="row">
            <div className="col s6">
                <h2>Address</h2>
                <h5>Street: {street} </h5>
                <h5>City: {city}</h5>
                <h5>Zipcode: {zipcode}</h5>
            </div>
            <div className="col s6">
                <iframe 
                    title = "googleMaps" 
                    src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyDXFoylTWv6otjIzFeENi-rFfoaWifIa2A&q=${long},${lat}&center=${long},${lat}`} 
                    className="right" 
                    width="300" 
                    height="230" 
                    frameBorder="1">
                </iframe>
            </div>
        </div>
    )
}