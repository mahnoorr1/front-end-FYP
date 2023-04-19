import { Axios } from "./connect";

export const registerUser = async (
                Firstname, 
                Lastname, 
                email, 
                password,
                Gender,
                Image,
                PhoneNumber,
                Subscription) => {
    await Axios.post('/users/signup' , {
        Firstname, 
        Lastname, 
        email,
        password,
        Gender,
        Image,
        PhoneNumber,
        Subscription
    })
    .then((response) => {
        console.log(response);//response data
        console.log(response.data);//response data
        console.log(response.status);//Status code
        console.log(response.statusText);//OK for 200
        console.log(response.headers);//Header
      }, (error) => {
        console.log(error.response);
      }
    
    )
}

export const loginUser = async () => {
    
}