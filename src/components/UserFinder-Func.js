// Imports
import React,{ useState, useEffect } from "react";
import styled from "styled-components";
import Users from "./Users";

// Data
const nounours = [
	{ id:'n1', name:'Cahouet' },
	{ id:'n2', name:'Jambon' },
	{ id:'n3', name:'Pataud' },
	{ id:'n4', name:'Mushi' },
	{ id:'n5', name:'P\'tite Laine' }
];

// Component
const UserFinder = () => {

	// State
	const [filteredUsers, setFilteredUsers] = useState(nounours);
	const [searchTerm, setSearchTerm] = useState('');

	// Filter user when searchTerm change with limit ,-)
	useEffect(() => {
		const timerChange = setTimeout(() => {
			setFilteredUsers(nounours.filter((user) => user.name.includes(searchTerm)));
		},10);
		return () => {
			clearTimeout(timerChange);
		}
	}, [searchTerm]);

	// Search change
	const searchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	// Return
	return(
		<Wrapper>
			<div className="finder">
				<input type='search' onChange={ searchChange } />
			</div>
      		<Users nounours={ filteredUsers } />
		</Wrapper>
	);

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