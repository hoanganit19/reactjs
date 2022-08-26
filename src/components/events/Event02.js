import React from "react";

class Event02 extends React.Component{

    constructor() { 
        super();

        this.handleChange = (text) => {
            console.log(text);
        }
    }

    // handleChange = (text) => {
    //     console.log(text);
    // }

    render(){

        // const handleChange = (text) => {
        //     console.log(text);
        // }

        return (
            <>
                <h1>Unicode Academy</h1>
                <button type="button" onClick={() => {
                    this.handleChange('Unicode');
                }}>Change</button>
            </>
        )
    }
}

export default Event02;
