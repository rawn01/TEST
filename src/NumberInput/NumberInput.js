import React from "react";
import AddTwo from "../AddTwo/AddTwo";

class NumberInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ""
        };
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(e) {
        this.setState((prevState) => ({
            inputVal: e.target.value
        }));
    }

    render() {
        return (
            <div>
                <input type="number" placeholder="Enter Value" onChange={this.inputChange} />
                <AddTwo val={this.state.inputVal} />
            </div>
        );
    }
}

export default NumberInput;