import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const ViewProduct = () => {
	const location = useLocation();

	const endpoint = "http://localhost:8080/api/";
	const productId = location.pathname.split('/')[2];
	const [product, setProduct] = useState({});
	useEffect(()=> {
		fetch(endpoint+ "product/" + productId )
			// TODO: check for the response status first
			.then(response => response.json())
			.then(response => setProduct(response))
	})
	return (
		<div>
			<h1>name: {product.name}</h1>
			<h2>price: {product.price}</h2>
			<h3>qty: {product.qty}</h3>
		</div>
	)

}

export default ViewProduct;
