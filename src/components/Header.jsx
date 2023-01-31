import {Link} from "react-router-dom";

const Header = () => {
	return (
		<h6>
			<Link to={"/"}>Home </Link>
			<Link to={"/add"}>Add </Link>
			<Link to={"/products"}>Products</Link>
		</h6>
	)

}

export default Header;
