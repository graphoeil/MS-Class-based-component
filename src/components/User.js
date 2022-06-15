// Imports
import React from "react";
import styled from "styled-components";

// Class
class User extends React.Component{

	// Render
	render(){

		// Return
		return(
			<Wrapper>
				{ this.props.name }
			</Wrapper>
		);
		
	};

	// Lifecycle
	componentDidMount(){
		// eq useEffect(() => { ... },[]);
	};
	componentDidUpdate(){
		// eq useEffect(() => { ... },[someValue]);
	};
	componentWillUnmount(){
		/* eq useEffect(() => {
			return() => {
				... do something
			}
		},[]); */
		console.log('User will unmount!');
	};

};

// Styled
const Wrapper = styled.li`
	margin: 1rem 0;
	font-weight: bold;
`;

// Export
export default User;