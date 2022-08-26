import React, {Component} from "react";

export default class Comment extends Component{
    constructor(props){
        super(props);

        // this.showContent = () => {
        //     return <p>Demo Content</p>
        // }

        this.name = 'Hoàng An';
    }

    showContent = () =>{
        console.log(this.name);
    }

    render(){

        const {title, content} = this.props;

        // const ShowContent = () => {
        //     return <p>Demo Content</p>
        // }

        return (
            <div className="comment">
                <h3>{title}</h3>
                <p>{content}</p>
                <button type="button" onClick={this.showContent}>Click</button>
            </div>
        )
    }
}