import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/img/Logo.png"
import "../../assets/style/style.scss"
import {getCategories} from "../../redux/reducers/NavbarReducer";
import {useDispatch, useSelector} from "react-redux";

function Navbar() {
	const [active, setActive] = useState(true)

	const state = useSelector(state => state)
	const dispatch = useDispatch()
	const categories = state.navbar.categories

	useEffect(() => {
		dispatch(getCategories())
		console.log(state.navbar)
	}, [])

	return (
		<div className="navbar">
			<div className="container">
				<div className="navbar__items">
					<div className="navbar__row">
						<Link to="/" className="navbar__logo">
							<div className="navbar__logo-img">
								<img src={logo} alt="" />
							</div>
							<span className="navbar__logo-text">E-Comm</span>
						</Link>
						<div className="navbar__search">
							<div className="navbar__form">
								<input
									className="navbar__form-input"
									type="text"
									placeholder="Search query..."
								/>
								<input
									type="submit"
									value="Search"
									className="navbar__form-btn"
								/>
							</div>
						</div>
						<div className="navbar__comp">
							<ul className="navbar__comp-ul">
								<li>
									<i
										className="fa fa-bars"
										aria-hidden="true"
									></i>
									<button
										className="navbar__comp-cat"
										onClick={() => setActive(!active)}
									>
										CATEGORIES
									</button>
									<div
										className={
											active
												? "nav__popup"
												: "nav__popup active"
										}
									>
										<div className="nav__popup-row">
											{categories.map((category) => {
												return (
													<div
														key={category.id}
														className="nav__popup-list"
													>
														<span className="nav__popup-content">
															{category.name_uz}
														</span>
														{/*<div className="nav__popup-items">*/}
														{/*	<ul className="nav__popup-flex1">*/}
														{/*		{category.children.map(*/}
														{/*			(*/}
														{/*				subCat*/}
														{/*			) => {*/}
														{/*				return (*/}
														{/*					<li*/}
														{/*						key={*/}
														{/*							subCat.id*/}
														{/*						}*/}
														{/*						className="nav__popup-item"*/}
														{/*					>*/}
														{/*						<Link*/}
														{/*							to={*/}
														{/*								subCat.slug*/}
														{/*							}*/}
														{/*							className="nav__popup-text"*/}
														{/*						>*/}
														{/*							{*/}
														{/*								subCat.cat_name*/}
														{/*							}*/}
														{/*						</Link>*/}
														{/*					</li>*/}
														{/*				)*/}
														{/*			}*/}
														{/*		)}*/}
														{/*	</ul>*/}
														{/*</div>*/}
													</div>
												)
											})}
										</div>
									</div>
								</li>
								<li>
									<a
										href="#"
										className="navbar__comp-contact"
									>
										CONTACT
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
