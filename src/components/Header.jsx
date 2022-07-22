import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/cart">
        <AiOutlineShoppingCart />
        <span> {totalQuantity} </span>
      </Link>
    </div>
  );
};

export default Header;
