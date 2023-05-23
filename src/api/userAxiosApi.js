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
        if(response.status == 201){
          window.location.href = '/'
        }
        else{
          alert("Invalid Data (User Email Already exists)")
        }
      }, (error) => {
        console.log(error.response);
      }
    
    )
}

export const loginUser = async (email, password) => {
  Axios.post('/users/login' , {email, password})
  .then((response) => {
    console.log('inside then');
    console.log(response.data);//response data
  if(response.data.status == undefined){
        console.log(response.data.email)
        const User = {
          id : response.data._id,
          email : response.data.email,
          token : response.data.token
        }
        localStorage.setItem('User', JSON.stringify(User));
        window.location.href = '/createRoadPlan'
    }
  else{
    alert(response.data.error)
  }
    
  }, (error) => {
    console.log(error.response);
  }
   

)
    
}