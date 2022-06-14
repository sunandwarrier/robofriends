import React,{Component} from 'react';
import CardList from '../Components/CardList';
//import {robots} from './robots';
import SearchBox from '../Components/SearchBox';
import '../Containers/App.css';
import Scroll from'../Components/Scroll'
//STATE-> Something that describes an object.State can change and effect our App

class App extends Component{

	constructor()
	{
		super()
		this.state={
			//robots:robots,
			robots:[],

			searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{return response.json();})
		.then(users=>{this.setState({robots:users})});
	}

	onSearchChange=(event)=>{

		this.setState({searchfield:event.target.value});
	
		/*const filteredRobots=this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
							//console.log(event.target.value);
		})
		console.log(filteredRobots);*/
	}


	render(){

		const filteredRobots=this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
							//console.log(event.target.value);
		})
		console.log(filteredRobots);

		if(this.state.robots.length===0)
			return <h1>Loading</h1>
		else{

		return(
		<div className="tc">
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
			<CardList robots={filteredRobots}/>
			{/*<CardList robots={this.state.robots}/>*/}
			</Scroll>
		</div>

		);
	}

	}
	
}

export default App;