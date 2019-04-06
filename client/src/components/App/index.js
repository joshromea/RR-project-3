import React, { Component } from "react";

class Application extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount = () => {
        document.getElementById("root").style.height = "100vh";
        document.getElementById("root").style.display = "flex";
        document.getElementById("root").style.flexDirection = "column";
    }

    componentWillUnmount = () => {
        document.getElementById("root").style.height = "";
        document.getElementById("root").style.display = "block";
        document.getElementById("root").style.flexDirection = "row";
    }

    flexBody = {
        flex: "1 0 auto"
    }

    render () {
        return (
            <div className="container" style={this.flexBody}></div>
        )
    };
}

export default Application;