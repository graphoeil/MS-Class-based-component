// Imports
import React from "react";
import styled from "styled-components";
import Users from "./Users";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";

// Class
class UserFinder extends React.Component{

	// Context, with class based only one context per component !
	static contextType = UsersContext;

	// Constructor
	constructor(){
		super();
		this.state = { filteredUsers:[], searchTerm:'' };
	};

	// Methods
	searchChange(e){
		this.setState({ searchTerm:e.target.value });
	};

	// Render
	render(){
		return(
			<Wrapper>
				<div className="finder">
					<input type='search' onChange={ this.searchChange.bind(this) } />
				</div>
				<ErrorBoundary>
					<Users nounours={ this.state.filteredUsers } />
				</ErrorBoundary>
			</Wrapper>
		);
	};

	// Load data (simulation)
	componentDidMount(){
		this.setState({ filteredUsers:this.context.nounours });
	};

	// Did update
	componentDidUpdate(prevProps, prevState){
		// Filters nounours only when searchTerm change
		if (prevState.searchTerm !== this.state.searchTerm){
			this.setState({
				filteredUsers:this.context.nounours.filter((user) => user.name.includes(this.state.searchTerm))
			});
		}
	};

};

// Styled
const Wrapper = styled.div`
	.finder{
		margin: 2rem auto;
		background-color: white;
		padding: 1rem;
		border-radius: 12px;
		max-width: 40rem;
		text-align: center;
	}
`;

// Export
export default UserFinder;