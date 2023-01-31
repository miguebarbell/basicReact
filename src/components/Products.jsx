import {useEffect, useState} from "react";

const Products = () => {
	const endpoint = "http://localhost:8080/api/";
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch(endpoint + "product")
			.then((response) => response.json())
			.then(response => setProducts(response));
	}, []);
	const updateProduct = (id) => {
		window.location = "/edit/" + id;

	};
	const deleteProduct = (id) => {
		fetch(endpoint + "product/" + id, {
			      method : "DELETE",
			      headers: {'Content-Type': 'application/json'}
		      }
		).then(response => response.json())
		 .then((response) => console.log(response))
		 .then(() => alert("Product deleted"))
		 .then(() => {
			 setProducts(products.filter((product) => product.id !== id
			 ));
		 });
	};
	return (
		<div>
			{products.map(product => (
				              <div key={product.id}>
					              <div>name: {product.name}</div>
					              <div>price: {product.price}</div>
					              <div>qty: {product.qty}</div>
					              <button onClick={() => updateProduct(product.id)}>update</button>
					              <button onClick={() => deleteProduct(product.id)}>delete</button>
					              <br/>
				              </div>
			              )
			)
			}

		</div>
	);

};
export default Products;
