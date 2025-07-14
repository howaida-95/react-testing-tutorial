type GreetProps = {
    name?: String;
};

import React from "react";

export const Greet = (props: GreetProps) => {
    const { name } = props;
    return <div>{name ? `Hello ${name}` : "Hello"}</div>;
};
