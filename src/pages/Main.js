import React from "react"
import Banner from "../components/header/Banner"
import FeaturedProduct from "../components/header/FeaturedProduct"
import News from "../components/header/News"
import Recommend from "../components/header/Recommend"
import Service from "../components/header/Service"
import StoreList from "../components/header/StoreList"
import HeaderList from "../components/header/headerlist/HeaderList";
import NavbarMedia from "../components/media/NavbarMedia";

export default function Main() {
	return (
		<div className="main">
			<NavbarMedia/>
			<Banner />
			<StoreList />
			<HeaderList />
			<Recommend />
			<Service />
			<News />
			<FeaturedProduct />
			<div className="header__search">
				<div className="container">
					<div className="header__form">
						<input
							className="header__form-input"
							type="text"
							placeholder="Search query..."
						/>
						<input
							type="submit"
							value="Search"
							className="header__form-btn"
						/>
					</div>
				</div>
			</div>
		</div>

	)
}
