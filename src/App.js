// Imports
import React from "react";
import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

// Data
const nounours = [
	{ id:'n1', name:'Cahouet' },
	{ id:'n2', name:'Jambon' },
	{ id:'n3', name:'Pataud' },
	{ id:'n4', name:'Mushi' },
	{ id:'n5', name:'P\'tite Laine' }
];

// Component
const App = () => {

	// Users context
	const usersContext = {
		nounours:nounours
	}; 

	// Return
	return(
		<React.Fragment>
			<UsersContext.Provider value={ usersContext }>
				<UserFinder/>
			</UsersContext.Provider>
		</React.Fragment>
	);

};

// Export
export default App;