import React from "react"
import TopBar from "./TopBar"
import Navbar from "./Navbar"
import "../../assets/style/style.scss"
import StoreList from "./StoreList"
import HeaderListItems from "./headerlist/HeaderListItems"
import Recommend from "./Recommend"
import Service from "./Service"
import News from "./News"
import FeaturedProduct from "./FeaturedProduct"
function Header(props) {
	return (
		<div className="header">
			<TopBar />
			<Navbar />
		</div>
	)
}

export default Header;