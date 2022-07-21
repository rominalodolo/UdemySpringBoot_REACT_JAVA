// Class Component 

import React, { Component } from "react";
import { render } from "@testing-library/react";

export default class SecondComponent extends Component {
    render() {
        return (
            <div className="secondComponent">
            SecondComponent
            </div>
        );
    }
}

export default SecondComponent;