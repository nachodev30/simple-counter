import React from "react";

function SecondsCounter({digitFour, digitThree, digitTwo, digitOne}) {
    return (
        <div className="Counter">
            <div className="reloj">
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{digitFour % 10}</div>
            <div className="three">{digitThree % 10}</div>
            <div className="two">{digitTwo % 10}</div>
            <div className="one">{digitOne % 10}</div>
        </div>
    );
}

export default SecondsCounter