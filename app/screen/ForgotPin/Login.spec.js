import React from "react";
import { act } from 'react-test-renderer';
import { fireEvent, waitFor } from '@testing-library/react-native';
import mockAxios from "axios";

import Login from "@Screen/Login";
import Config from "react-native-config";

beforeAll(() => {
    jest.useFakeTimers()
});

jest.mock("axios");


// Render Component 
it('renders screen correctly', async () => {
    const result = renderReducer(<Login />)
    await waitFor(async () => { expect(result).toMatchSnapshot(); })
});

// Show error messages when validation fails
it("shows error messages when both input fields are empty", async () => {
    const { getByTestId, getByText } = renderReducer(<Login />);

    await waitFor(() => {
        fireEvent.press(getByTestId("LoginID"));
    });

    await act(() => {
        getByText("Phone Number is required")
        getByText("Pin is required")
    });
})

//  Show error messages when password validation fails
it("shows an error message when password input field is empty", async () => {
    const { getByTestId, getByText } = renderReducer(<Login />);

    const phoneInput = getByTestId("phone");

    fireEvent.changeText(phoneInput, "2348134091515")

    await waitFor(() => {
        fireEvent.press(getByTestId("LoginID"));
    })

    await act(async () => {
        getByText("Pin is required")
    });
})

//  Show error messages when phone field is empty
it("shows an error message when phone input field is empty", async () => {
    const { getByTestId, getByText } = renderReducer(<Login />);

    const pinInput = getByTestId("password");

    fireEvent.changeText(pinInput, "1234")

    await waitFor(() => {

        fireEvent.press(getByTestId("LoginID"));
    })

    await act(async () => {
        getByText("Phone Number is required")
    });
})

// Show error messages when phone number is less than 13 digits
it("shows an error message when phone number is less than 13 digits", async () => {
    const { getByTestId, getByText } = renderReducer(<Login />);

    const phoneInput = getByTestId('phone');

    fireEvent.changeText(phoneInput, "234813409");

    await waitFor(() => {

        fireEvent.press(getByTestId("LoginID"));
    })

    await act(async () => {
        getByText("Phone Number should be exactly 13 digits");
    });
})

// Show error messages when phone number is more than 13 digits
it("shows an error message when phone number is more than 13 digits", async () => {
    const { getByTestId, getByText } = renderReducer(<Login />);

    const phoneInput = getByTestId('phone');

    fireEvent.changeText(phoneInput, "23481340912111");

    await waitFor(() => {
        fireEvent.press(getByTestId("LoginID"));
    })

    await act(async () => {
        getByText("Phone Number should be exactly 13 digits");
    });
})

// // Login field validation should pass
it("validation passes", async () => {

    const data = {phone: "2348134091515", password: "1234"}

    expect(mockAxios.post).not.toHaveBeenCalled();

    mockAxios.post.mockResolvedValueOnce({data});

   renderReducer(<Login />)

    // const phone = getByTestId('phone');

    // const password = getByTestId('password');

    // fireEvent.changeText(phone, "2348134091515");

    // fireEvent.changeText(password, "1234");

    expect(mockAxios.post).toHaveBeenCalledTimes(1);

//    await waitFor(() => {
//     expect(mockAxios.post).toHaveBeenCalledTimes(1);
//     })

 
    

    // const result =  renderReducer(<Login />)

    // console.log(call)



    // expect(result).toEqual(data);

    // await act(async () => {
        // expect(mockAxios.post).toHaveBeenCalledWith(`${Config.API_URL}/api/v1/login`);
        // expect(mockAxios.post).toHaveBeenCalled()
    // });

    // mockAxios.post.mockImplementationOnce(() => Promise.resolve({data: {phone: "2348134091515", password: "1234"}}));

    // mockAxios.get.mockResolvedValue(Promise.resolve({phone: "2348134091515", password: "1234"}));

   

   

  

   
    // mockAxios.post.mockImplementation(() => Promise.resolve({data: }))

    // await act(async () => {
    //      expect(mockAxios.post).toHaveBeenCalled()
    // })

    // expect(mockAxios.post).toHaveBeenCalledWith("api/v1/login", expect.objectContaining({
    //         phone: "2348134091515",
    //         password: "1234"
    //     }))

})