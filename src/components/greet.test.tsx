/*
greet should render the text hello and if a name is passed into the component 
it should render hello followed by the name 
1. write the test that meets the requirements 
2. component should render hello followed by the name in case there's a name passed 
*/

import React from "react";
import { render, screen } from "@testing-library/react";
import { Greet } from "./greet.tsx";

test("greet render correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello"); // expect the text element to be in the document
    expect(textElement).toBeInTheDocument();
});

test("greet render with a name", () => {
    render(<Greet name="Howaida" />);
    const textElement = screen.getByText("Hello Howaida"); // expect the text element to be in the document
    expect(textElement).toBeInTheDocument();
});
