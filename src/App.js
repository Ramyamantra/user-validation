import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Link} from "react-router-dom";
import Route from 'react-router-dom/Route';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const telRegex = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);

const NPIRegex = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);
const passRegex = RegExp(
  /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
);

const formValid =( { formErrors, ...rest }) => {
  let valid = true;
//validate form errors being empty6
  Object.values(formErrors).forEach(val => {
    val.length > 0  && (valid = false);
});
// validate form was filled out
Object.values(rest).forEach(val => {
  val === null  && (valid = false);
});

return valid; 
};


class App extends Component {

 
 constructor(props)
 {
   super(props);

   this.state={
     firstName:null,
     lastName:null,
     NPInumber:null,
     businessAddress:null,
     telephone:null,
     email:null,
     password:null,
     
     
     formErrors:{
      firstName:"",
      lastName:"",
      NPInumber:"",
      businessAddress:"",
      telephone:"",
      email:"",
      password:""
     }
   };
 }

 handleSubmit = e => {
   e.preventDefault();
   alert('check console for signed up results');
   if(formValid(this.state)){
     console.log(`
     --Signed Up --
     First Name: ${this.state.firstName}
     Last Name: ${this.state.lastName}
     NPI NUmber: ${this.state.NPInumber}
     Business Address: ${this.state.businessAddress}
     Telephone Address: ${this.state.telephone}
     Email Address: ${this.state.email}
     Password: ${this.state.password}
     `)
   }
   else{
     console.error("Form Invalid - Display Error Message");
   }
 };

 handleChange= e => {
   e.preventDefault();
   const {name, value} = e.target;
   let formErrors =this.state.formErrors;

    switch(name)
   {
     case 'firstName':
       formErrors.firstName = value.length < 3 
       ? 'minimum 3 characters required'
      : "";
      break;
     case 'lastName':
         formErrors.lastName = value.length < 3
         ? 'minimum 3 characters required'
        : "";
        break;
     case 'NPInumber':
       formErrors.NPInumber = NPIRegex.test(value) 
       ? ''
      : 'Number should be of pattern 10 digit ';
      break;
     case 'businessAddress':
       formErrors.businessAddress = value.length < 3
       ? 'minimum 3 characters required'
      : "";
      break;
     case 'telephone':
       formErrors.telephone =telRegex.test(value) 
       ? ''
      : 'invalid phone number';
      break;
      case 'email':
          formErrors.email = emailRegex.test(value) 
          ? ''
         : 'invalid email address';
         break;
      case 'password':
            formErrors.password = passRegex.test(value)
            ? ''
          
           :'Password should contain 8 characters, 1 upper case, 1 number' 
           break;
        default:
        break;
   }

   this.setState({formErrors, [name]: value}, () => console.log(this.state));
 };

  render(){

    const {formErrors} =this.state;


    return <div className="wrapper"> 
    <div className="form-wrapper">
      <h1>Create Account</h1>
      <form onSubmit={this.handleSubmit} noValidate>
        <div className="firstName">
          <label htmlFor="firstName">First Name</label>
          <input 
           className={formErrors.firstName.length > 0 ? "error" : null} 
           placeholder="First Name"
           type="text"
           name="firstName"
           noValidate
           onChange={this.handleChange}/>
        </div>

        {formErrors.firstName.length> 0 && (
          <span className="errorMessage">{formErrors.firstName}</span>
        )}


        <div className="lastName">
          <label htmlFor="lastName">Last Name</label>
          <input type="text"
            className={formErrors.lastName.length > 0 ? "error" : null} 
           placeholder="Last Name"
           name="lastName"
           noValidate
           onChange={this.handleChange}/>
        </div>
        {formErrors.lastName.length> 0 && (
          <span className="errorMessage">{formErrors.lastName}</span>
        )}

        <div className="NPInumber">
          <label htmlFor="NPInumber">NPI Number</label>
          <input type="number"
            className={formErrors.NPInumber.length > 0 ? "error" : null} 
           placeholder="NPI Number"
           name="NPInumber"
           noValidate
           onChange={this.handleChange}/>
        </div>
        {formErrors.NPInumber.length> 0 && (
          <span className="errorMessage">{formErrors.NPInumber}</span>
        )}


        <div className="businessAddress">
          <label htmlFor="businessAddress">Business Address</label>
          <input type="text"
            className={formErrors.businessAddress.length > 0 ? "error" : null} 
           placeholder="Business Address"
           name="businessAddress"
           noValidate
           onChange={this.handleChange}/>
        </div>
        {formErrors.businessAddress.length> 0 && (
          <span className="errorMessage">{formErrors.businessAddress}</span>
        )}

        <div className="telephone">
          <label htmlFor="telephone">Telephone Number</label>
          <input type="number"
           className={formErrors.telephone.length > 0 ? "error" : null} 
           placeholder="Telephone Number"
           name="telephone"
           noValidate
           onChange={this.handleChange}/>
        </div>
        {formErrors.telephone.length> 0 && (
          <span className="errorMessage">{formErrors.telephone}</span>
        )}


        <div className="email">
          <label htmlFor="email">Email Address</label>
          <input type="email"
          className={formErrors.email.length > 0 ? "error" : null} 
           placeholder="Email Address"
           name="email"
           noValidate
           onChange={this.handleChange}/>
         </div>
         {formErrors.email.length> 0 && (
          <span className="errorMessage">{formErrors.email}</span>
        )}


         <div className="password">
          <label htmlFor="password">Password</label>
          <input type="password"
           className={formErrors.password.length > 0 ? "error" : null} 
           placeholder="Password"
           name="password"
           noValidate
           onChange={this.handleChange}/>
         </div>
         
         {formErrors.password.length> 0 && (
          <span className="errorMessage">{formErrors.password}</span>
        )}


         <div className="createAccount">
           <button type="Submit">Create Account</button>
           </div><div> <Router><Link> <small>Already have an Account? Signin
         </small>
         
         </Link>
         </Router>
         </div>
       </form>
     </div>
    </div>;
}
}

export default App;
