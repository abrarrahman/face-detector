import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './particlesjs-config.json'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import ProcessedImage from './components/ProcessedImage/ProcessedImage'
import Rank from './components/Rank/Rank'
import './App.css';
import 'tachyons';

const initialState = {
	imgtxt: '',
	imgUrl: '',
	box: {},
	route: 'signin',
	user: {
		id: '',
		name: '',
		email: '',
		password:  '',
		entries: 0,
		joined: '' 
	}
}
class App extends Component {
	constructor() {
		super();
		this.state = initialState;
	}
	getFaceBox = (data) => {
		const boxData = data.outputs[0].data.regions[0].region_info.bounding_box
		const image = document.querySelector('#inputImage');
		const width = Number(image.width);
		const height = Number(image.height);
		console.log(width, height);
		return {
			leftCol: boxData.left_col * width,
			rightCol: width - (boxData.right_col * width),
			topRow: boxData.top_row * height,
			bottomRow: height - (boxData.bottom_row * height)
		}
	}
	setBoxState = (box) => {
		this.setState({ box });
		console.log('set box state',this.state.box);
	}
	onInputChanged = (event) => {
		this.setState({ imgtxt: event.target.value });
		// console.log(this.state.imgtxt);
	}
	onSubmitImage = () => {
		this.setState({ imgUrl: this.state.imgtxt });
		//clarifai api call
		//fetch('http://localhost:3001/imageurl',{
		fetch('https://serene-dawn-47908.herokuapp.com/imageurl',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				url: this.state.imgtxt
			})
		})
		.then(res=>res.json())
		.then(response => {
			if(response.outputs){
				// fetch('http://localhost:3001/image',{
				fetch('https://serene-dawn-47908.herokuapp.com/image',{
					method: 'put',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
						id: this.state.user.id
					})
				})
				.then(res=>res.json())
				.then(entries=>{
					this.setState(Object.assign(this.state.user, {entries: entries}))
				})
				.catch(console.log);
				this.setBoxState(this.getFaceBox(response))
			}
		})
		.catch(err => console.log(err));
	}
	onRouteChanged = (route) => {
		if(route === 'signin'){
			this.setState(initialState);
		}
		this.setState({route: route});
	}
	loadUser = (user) => {
		this.setState({user: user});
		console.log('load user: ',this.state.user);
	}
	render() {
		const { imgUrl, box, route, user} = this.state;
		return (
			<div className="App mv3">
				<Particles className="particles" params={particlesConfig} />
				{
					route === 'home' 
					? <div>
						<div className='flex justify-between items-center'>
							<Logo />
							<Navigation onRouteChanged={this.onRouteChanged}/>
						</div>
						<Rank name={user.name} rank={user.entries}/>
						<ImageLinkForm inputChanged={this.onInputChanged} onSubmitImage={this.onSubmitImage} />
						<ProcessedImage box={box} inputURL={imgUrl} />
					</div>
					:(
						route === 'register'
						? <Register onRouteChanged={this.onRouteChanged} loadUser={this.loadUser}/>
						: <SignIn onRouteChanged={this.onRouteChanged} loadUser={this.loadUser}/>
					) 
				}
			</div>
		);
	}
}

export default App;
