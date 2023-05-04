import React from "react";
import "./Styles/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  // const login = ()=>{
  //   if (user) {
  //    auth.signOut()
  //   }
  // };

  return (
    <nav className="header">
      {/*logo on the left --> img */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://cdn.freebiesupply.com/logos/large/2x/amazon-dark-logo-png-transparent.png"
        />
      </Link>

      {/* search box */}

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 4 links */}

      <div className="header__nav">
        {/* 1 link */}

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello,</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* 2 link */}

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3 link */}

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* 4 link */}

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* shopping basket icons */}
            <ShoppingBasketIcon />

            {/* number of items in the basket */}
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>

      {/* asket icon with number */}
    </nav>
  );
}

export default Header;
