import React from 'react';
class Register extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            enteredName: '',
            enteredEmail: '',
            enteredPassword: ''
        }
    }
    onSubmitRegister = () => {
        const {enteredName,enteredEmail,enteredPassword} = this.state; 
        fetch('https://serene-dawn-47908.herokuapp.com/register',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: enteredName,
                email: enteredEmail,
                password: enteredPassword
            })
        })
            .then(res=> res.json())
            .then(result=>{
                if(result.id){
                    this.props.loadUser(result);
                    this.props.onRouteChanged('home');
                }else console.log(result);
            })
    }
    onPasswordChanged= (event) => {
        this.setState({enteredPassword: event.target.value});
    }
    onEmailChanged= (event) => {
        this.setState({enteredEmail: event.target.value});
    }
    onNameChanged= (event) => {
        this.setState({enteredName: event.target.value});
    }
    render(){
        return (
            <main className="pa4 black-80 br3 ba b--black-10 mv4 shadow-5 w-50-ns w-80-m center">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="name" 
                                id="name" 
                                onChange={this.onNameChanged}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address" 
                            id="email-address" 
                            onChange={this.onEmailChanged}   
                            />
                        </div>
                        <div className="mb3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password" 
                            id="password" 
                            onChange={this.onPasswordChanged}    
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input onClick={()=>this.props.onRouteChanged('signin')} className="mr3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Back" />
                        <input onClick={this.onSubmitRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                    </div>
                </div>
            </main>
        );
    } 
}
export default Register;