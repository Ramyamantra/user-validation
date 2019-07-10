(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){e.exports=t(36)},30:function(e,a,t){},31:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(15),l=t.n(r),m=(t(30),t(16)),o=t(17),c=t(18),i=t(23),d=t(19),u=t(24),h=t(20),p=(t(31),t(9)),N=RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),b=RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),g=RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),E=RegExp(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/),f=function(e){var a=e.formErrors,t=Object(h.a)(e,["formErrors"]),n=!0;return Object.values(a).forEach(function(e){e.length>0&&(n=!1)}),Object.values(t).forEach(function(e){null===e&&(n=!1)}),n},w=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).handleSubmit=function(e){e.preventDefault(),alert("check console for signed up results"),f(t.state)?console.log("\n     --Signed Up --\n     First Name: ".concat(t.state.firstName,"\n     Last Name: ").concat(t.state.lastName,"\n     NPI NUmber: ").concat(t.state.NPInumber,"\n     Business Address: ").concat(t.state.businessAddress,"\n     Telephone Address: ").concat(t.state.telephone,"\n     Email Address: ").concat(t.state.email,"\n     Password: ").concat(t.state.password,"\n     ")):console.error("Form Invalid - Display Error Message")},t.handleChange=function(e){e.preventDefault();var a=e.target,n=a.name,s=a.value,r=t.state.formErrors;switch(n){case"firstName":r.firstName=s.length<3?"minimum 3 characters required":"";break;case"lastName":r.lastName=s.length<3?"minimum 3 characters required":"";break;case"NPInumber":r.NPInumber=g.test(s)?"":"Number should be of pattern 10 digit ";break;case"businessAddress":r.businessAddress=s.length<3?"minimum 3 characters required":"";break;case"telephone":r.telephone=b.test(s)?"":"invalid phone number";break;case"email":r.email=N.test(s)?"":"invalid email address";break;case"password":r.password=E.test(s)?"":"Password should contain 8 characters, 1 upper case, 1 number"}t.setState(Object(m.a)({formErrors:r},n,s),function(){return console.log(t.state)})},t.state={firstName:null,lastName:null,NPInumber:null,businessAddress:null,telephone:null,email:null,password:null,formErrors:{firstName:"",lastName:"",NPInumber:"",businessAddress:"",telephone:"",email:"",password:""}},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state.formErrors;return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"form-wrapper"},s.a.createElement("h1",null,"Create Account"),s.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},s.a.createElement("div",{className:"firstName"},s.a.createElement("label",{htmlFor:"firstName"},"First Name"),s.a.createElement("input",{className:e.firstName.length>0?"error":null,placeholder:"First Name",type:"text",name:"firstName",noValidate:!0,onChange:this.handleChange})),e.firstName.length>0&&s.a.createElement("span",{className:"errorMessage"},e.firstName),s.a.createElement("div",{className:"lastName"},s.a.createElement("label",{htmlFor:"lastName"},"Last Name"),s.a.createElement("input",{type:"text",className:e.lastName.length>0?"error":null,placeholder:"Last Name",name:"lastName",noValidate:!0,onChange:this.handleChange})),e.lastName.length>0&&s.a.createElement("span",{className:"errorMessage"},e.lastName),s.a.createElement("div",{className:"NPInumber"},s.a.createElement("label",{htmlFor:"NPInumber"},"NPI Number"),s.a.createElement("input",{type:"number",className:e.NPInumber.length>0?"error":null,placeholder:"NPI Number",name:"NPInumber",noValidate:!0,onChange:this.handleChange})),e.NPInumber.length>0&&s.a.createElement("span",{className:"errorMessage"},e.NPInumber),s.a.createElement("div",{className:"businessAddress"},s.a.createElement("label",{htmlFor:"businessAddress"},"Business Address"),s.a.createElement("input",{type:"text",className:e.businessAddress.length>0?"error":null,placeholder:"Business Address",name:"businessAddress",noValidate:!0,onChange:this.handleChange})),e.businessAddress.length>0&&s.a.createElement("span",{className:"errorMessage"},e.businessAddress),s.a.createElement("div",{className:"telephone"},s.a.createElement("label",{htmlFor:"telephone"},"Telephone Number"),s.a.createElement("input",{type:"number",className:e.telephone.length>0?"error":null,placeholder:"Telephone Number",name:"telephone",noValidate:!0,onChange:this.handleChange})),e.telephone.length>0&&s.a.createElement("span",{className:"errorMessage"},e.telephone),s.a.createElement("div",{className:"email"},s.a.createElement("label",{htmlFor:"email"},"Email Address"),s.a.createElement("input",{type:"email",className:e.email.length>0?"error":null,placeholder:"Email Address",name:"email",noValidate:!0,onChange:this.handleChange})),e.email.length>0&&s.a.createElement("span",{className:"errorMessage"},e.email),s.a.createElement("div",{className:"password"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",className:e.password.length>0?"error":null,placeholder:"Password",name:"password",noValidate:!0,onChange:this.handleChange})),e.password.length>0&&s.a.createElement("span",{className:"errorMessage"},e.password),s.a.createElement("div",{className:"createAccount"},s.a.createElement("button",{type:"Submit"},"Create Account")),s.a.createElement("div",null," ",s.a.createElement(p.a,null,s.a.createElement(p.b,null," ",s.a.createElement("small",null,"Already have an Account? Signin")))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.2d6f1210.chunk.js.map