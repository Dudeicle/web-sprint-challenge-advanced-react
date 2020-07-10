import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import App from '../App.js';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

// What tests will I run? Arrange Act Assert

test("form header renders", async() => {

render(<App />);
    
// Arrange --------------------------------------
// type into all three inputs - if there were inputs
    // 1. query for all inputs

    // 2. run the changes event to add text

// Act --------------------------------------------
// find and click buttons/links
    // 1. query for the button
const reactPlants = screen.getByTestId('reactPlantsid');
// expect(reactPlants).toBeInTheDocument();
// console.log(reactPlants)
const plantsLink = screen.getByTestId('plantsid');
// expect(plantsLink).toBeInTheDocument();
// console.log(plantsLink)
const cartLink = screen.getByTestId('cartid');
// expect(cartLink).toBeInTheDocument();
// console.log(cartLink)
    // 2. run the click event on the button

// BELOW IS PLANTS LINK ============= WORKING!
// fireEvent.click(plantsLink);

// BELOW IS CART LINK =============== WORKING!
// fireEvent.click(cartLink);



// Assert -----------------------------------------
// assert that we have traveled to a new page?
    // 1. query for the new contact text
    // 2. assert that it is being rendered
 
// JUST BELOW ARE IS TESTING THAT WE GO TO THE PLANTS LINK. ========== WORKING!
// const plantsPage = await screen.findByText(/string of dolphins/i)
// expect(plantsPage).toBeInTheDocument();

// JUST BELOW ARE IS TESTING THAT WE GO TO THE CART LINK. ============ WORKING!
// const cartPage = await screen.findByText(/total: /i)
// expect(cartPage).toBeInTheDocument();

// extra testing ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// intention with this test is to go into plantsLink, add a plant to cart then go into cart and check that it is there

fireEvent.click(plantsLink);



});

test("form shows success message on submit with form details", async() => {
   
render(<CheckoutForm />);

// Arrange -------------------------------------------------------------------
// type into all three inputs
    // 1. query for all inputs
const firstnameInput = screen.getByLabelText(/first name:/i)
const lastnameInput = screen.getByLabelText(/last name:/i)
const addressInput = screen.getByLabelText(/address:/i)
const cityInput = screen.getByLabelText(/city:/i)
const stateInput = screen.getByLabelText(/state:/i)
const zipInput = screen.getByLabelText(/zip:/i)
    // 2. run the changes event to add text
fireEvent.change(firstnameInput, { target: { value: 'Brian' } });
fireEvent.change(lastnameInput, { target: { value: 'Griffiths' } });
fireEvent.change(addressInput, { target: { value: '123 Right Over There Rd' } });
fireEvent.change(cityInput, { target: { value: 'Big City' } });
fireEvent.change(stateInput, { target: { value: 'Small State' } });
fireEvent.change(zipInput, { target: { value: '123456' } });


// Act -----------------------------------------------------------------------
// click submit button
    // 1. query for the button
const submitButton = screen.getByRole('button');
    // 2. run the click event on the button
fireEvent.click(submitButton);


// Assert --------------------------------------------------------------------
// assert that new contact is in the list
    // 1. query for the new contact text
const newOrder = await screen.findByTestId('successMessage');
    // 2. assert that it is being rendered
expect(newOrder).toBeInTheDocument();

// extra tests +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const orderName = await screen.findByText(/brian/i)
expect(orderName).toBeInTheDocument();

});