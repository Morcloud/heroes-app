import React from "react";

export const LoginSreen = ({ history }) => {
    const handleClick = () => {
        // history.push("/");
        history.replace("/");
        console.log("click");
    };

    return (
        <div className='container ms-5'>
            <h1>login</h1>
            <hr />
            <button className='btn btn-primary' onClick={handleClick}>
                Login
            </button>
        </div>
    );
};
