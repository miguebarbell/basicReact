import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const EditProduct = () => {
	const location = useLocation();
	const productId = location.pathname.split('/')[2];
	const endpoint = "http://localhost:8080/api/";
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [qty, setQty] = useState(0);

	useEffect(() => {
		fetch(endpoint + "product/" + productId)
			// TODO: check for the response status first
			.then(response => response.json())
			.then(response => {
				setName(response.name);
				setPrice(response.price);
				setQty(response.qty);
			});
	}, []);

	const submit = (e) => {
		e.preventDefault();
		const editedItem = {id: productId, name: name, price: price, qty: qty};
		console.log(editedItem);
		fetch(endpoint + "product/", {
			method : "PUT",
			headers: {'Content-Type': 'application/json'},
			body   : JSON.stringify(editedItem)

		}).then(response => response.json)
		  .then(response => console.log(response))
		  .then(() => alert("Item successfully edited")).then(() => window.location = "/products")

	};
	return (
		<div>
			<form onSubmit={submit}>
				<label htmlFor={"name"}>Name</label>
				<input type="text" id={"name"} name={"name"} value={name} onChange={(e) => {setName(e.target.value);}}/>
				<label htmlFor={"price"}>Price</label>
				<input type="number" id={"price"} name={"price"} value={price} onChange={(e) => {setPrice(e.target.value);}}/>
				<label htmlFor={"qty"}>Quantity</label>
				<input type="number" id={"qty"} name={"qty"} value={qty} onChange={(e) => {setQty(e.target.value);}}/>
				<button type={"submit"}>Edit</button>
			</form>
		</div>
	);

};
export default EditProduct;
