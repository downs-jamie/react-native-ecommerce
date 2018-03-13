import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import ProductDetail from './ProductDetail';

class ProductList extends Component {
	state = { 
		products: [] 
	};

	componentWillMount() {
		// console.log('componentwillmount in product list');
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ products: response.data }));
	}

	renderProducts() {
		return this.state.products.map(product => 
			<ProductDetail key={product.title} product={product} />
		);
	}

	render() {
		console.log(this.state);

		return (
			<View>
				{this.renderProducts()}
			</View>
		);
	}
}

export default ProductList;
