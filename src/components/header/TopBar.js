import React from "react"
import profile__logo from "../../assets/img/Profile.svg"
import basket__logo from "../../assets/img/Basket-account.svg"
import "../../assets/style/style.scss"
import { Link } from "react-router-dom"

function TopBar() {
	return (
		<div className="top_bar">
			<div className="container">
				<div className="top__items">
					<div className="top__row">
						<div className="top__selection">
							<select
								name="EN"
								className="top__selection-lang"
								id=""
							>
								<option value="en">EN</option>
								<option value="uzb">UZB</option>
								<option value="ru">RU</option>
							</select>
							<select
								name="USD"
								className="top__selection-cur"
								id=""
							>
								<option value="usd">USD</option>
								<option value="dol">DOLLAR</option>
								<option value="euro">EURO</option>
							</select>
						</div>
						<div className="top__account">
							<div className="top__profile">
								<div className="top__profile-logo">
									<img src={profile__logo} alt="" />
								</div>
								<span className="top__profile-text">
									My profile
								</span>
							</div>
							<Link to={"/cart"} className="top__basket">
								<img
									className="top__basket-logo"
									src={basket__logo}
									alt=""
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="hr"></div>
		</div>
	)
}

export default TopBar
