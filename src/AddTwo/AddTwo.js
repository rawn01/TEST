import React from "react";
import NumberInput from "../NumberInput/NumberInput";

class AddTwo extends React.Component {
    render() {
        const finalVal = parseInt(this.props.val) + 2;
        return (
            <div>
               {isNaN(finalVal) ? undefined : <p>{finalVal}</p>}
            </div>
        );
    }
}

export default AddTwo;