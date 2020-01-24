//KOMPONENT FUNKCYJNY

import React from 'react'; //pojawia się w każdym komponencie, nazwy komponentów z wielkiej litery

//nazwa komponentu odpowiada nazwie pliku
const Heading = props => {
    return (<h1 className={props.classValue}>{props.text}</h1>);
}

export default Heading;
