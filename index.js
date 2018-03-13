// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('ABCommerce', () => App);


// import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import ProductList from './src/components/ProductList';

// create a component
const App = () => {
	return (
		<View>
			<Header headerText={'ABCommerce'} />,
			<ProductList />
		</View>
	);
};

//render it to the device 
AppRegistry.registerComponent('ABCommerce', () => App);
