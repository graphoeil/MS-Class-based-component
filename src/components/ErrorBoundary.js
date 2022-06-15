// Imports
import React from "react";

// Class
class ErrorBoundary extends React.Component{

	// Constructor
	constructor(){
		super();
		this.state = { hasError:false };
	};

	// This lifecycle method will be trigger when
	// a child component throw an error
	componentDidCatch(error){
		console.log(error);
		this.setState({ hasError:true });
	};

	// Render
	render(){
		if (this.state.hasError){
			return <p>Something went wrong...</p>
		}
		return this.props.children;
	};

};

// Export
export default ErrorBoundary;