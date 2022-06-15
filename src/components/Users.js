// Imports
import React from "react";
import styled from "styled-components";
import User from "./User";

// Class
class Users extends React.Component{

	// Constructor
	constructor(){
		super(); // Call the constructor of Component ,-)
		this.state = {
			showUsers:true
		};
	};

	// Methods
	toggleUsers(){
		this.setState((oldState) => {
			return {
				showUsers:!oldState.showUsers
			};
		});
	};

	// Render
	render(){

		// Users lists
		const usersList = (
			<ul>
				{ this.props.nounours.map((user) => <User key={ user.id } name={ user.name }/>) }
			</ul>
		);

		// Return
		return(
			<Wrapper>
				<button onClick={ this.toggleUsers.bind(this) }>
					{ this.state.showUsers ? 'Hide' : 'Show' } users
				</button>
				{
					this.state.showUsers && usersList
				}
			</Wrapper>
		);

	};

	// Did update (error boundaries)
	componentDidUpdate(){
		if (this.props.nounours.length === 0){
			throw new Error('No users provided!');
		}
	};

};

// Styled
const Wrapper = styled.div`
	margin: 2rem auto;
	background-color: white;
	padding: 1rem;
	border-radius: 12px;
	max-width: 40rem;
	text-align: center;
	ul{
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
`;

// Export
export default Users;