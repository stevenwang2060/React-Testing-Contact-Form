import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("Renders correctly", () => {
    render(<ContactForm />);
}); 

test("Contact form accepts all inputs and displays them", () => {
    const { getByLabelText, findByTestId, findByText} = render(<ContactForm/>);

    // query for form inputs
    const firstNameInput = getByLabelText(/first Name*/i);
    const lastNameInput = getByLabelText(/last Name*/i);
    const emailInput = getByLabelText(/email*/i);
    const messageInput = getByLabelText(/message/i);

    // fireEvent function to fill in inputs
    fireEvent.change(firstNameInput,
        { target: {name: 'firstName', value: 'Steven'}
    });

    fireEvent.change(lastNameInput,
        { target: {name: 'lastName', value: 'Wang'}
    });

    fireEvent.change(emailInput,
        { target: {name: 'email', value: 'Steven@Wang.com'}
    });

    fireEvent.change(messageInput,
        { target: {name: 'message', value: 'Hello World'}
    });

    // query for the submit button
    //const submitButton = findByTestId(/testsubmit/i).then((res) => {
    //    fireEvent.click(res);
    //});
    findByTestId('submit').then((res) => {
            fireEvent.click(res);
    });


    // use fireEvent to click the button
    // fireEvent.click(submitButton);

    // assert
    findByText(`{
        "firstName": "Steven",
        "lastName": "Wang",
        "email": "Steven@Wang.com",
        "message": "Hello World" 
    }`);

});