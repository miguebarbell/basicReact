import {useState} from "react";

const AddProduct = () => {

	const endpoint = "http://localhost:8080/api/";
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [qty, setQty] = useState(0);
	const submit = (e) => {
		e.preventDefault();
		const newProduct = {name, price, qty}
		console.log(newProduct);
		fetch(endpoint + "product", {
			method: "POST",
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(newProduct)
		}).then(response => response.json())
			.then(console.log("Product created successfully."))
			.then(alert("Product created successfully, fields reseted."))
			.then(() => {
				setPrice(0)
				setQty(0)
				setName("")
			})
		window.location = "/products"
	}
	return (
		<div>
			<form onSubmit={submit}>
				<label htmlFor={"name"}>Name</label>
				<input type="text" id={"name"} name={"name"} value={name} onChange={(e) => {setName(e.target.value)}}/>
				<label htmlFor={"price"}>Price</label>
				<input type="number" id={"price"} name={"price"} value={price} onChange={(e) => {setPrice(e.target.value)}}/>
				<label htmlFor={"qty"}>Quantity</label>
				<input type="number" id={"qty"} name={"qty"} value={qty} onChange={(e) => {setQty(e.target.value)}}/>
				<button type={"submit"}>Create</button>
			</form>
		</div>
	);

};
export default AddProduct;
