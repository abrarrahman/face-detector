import React from 'react';
class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            enteredEmail: '',
            enteredPassword: ''
        }
    }
    onPasswordChanged= (event) => {
        this.setState({enteredPassword: event.target.value})
    }
    onEmailChanged= (event) => {
        this.setState({enteredEmail: event.target.value})
    }
    onSubmitSignIn = () => {
        fetch('https://serene-dawn-47908.herokuapp.com/signin',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.enteredEmail,
                password: this.state.enteredPassword
            })
        }).then(res => res.json())
        .then(user => {
            if(user.id){
                this.props.loadUser(user);
                this.props.onRouteChanged('home');
            }
        })
    }
    render() {
        const {onRouteChanged} = this.props;
        return (
            <main className="pa4 black-80 br3 ba b--black-10 mv4 shadow-5 w-50-ns w-80-m center">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                                onChange={this.onEmailChanged} 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address" 
                                id="email-address" 
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                                onChange={this.onPasswordChanged} 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password" 
                                id="password" 
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input onClick={()=>onRouteChanged('register')} className="mr3 b--black b ph3 pv2 input-reset bg-transparent grow pointer f6 dib" type='button' value='Register'/>
                        <input onClick={this.onSubmitSignIn} style={{outlineColor: 'black'}} className="b--black b ph3 pv2 input-reset bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                    </div>
                </div>
            </main>
        );
    }
    
}

export default SignIn;