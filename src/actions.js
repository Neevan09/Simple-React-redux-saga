export const REQUEST_API_DATA = "REQUEST_HELLO_WORLD";
export const RECEIVE_API_DATA = "RECEIVE_HELLO_WORLD";

export const requestApiData = () => ({type: REQUEST_API_DATA});
export const receiveApiData = data => ({type: RECEIVE_API_DATA, data});