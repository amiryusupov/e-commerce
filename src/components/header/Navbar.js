import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/img/Logo.png"
import "../../assets/style/style.scss"
import {getCategories} from "../../redux/reducers/NavbarReducer";
import {useDispatch, useSelector} from "react-redux";

function Navbar() {
	const [active, setActive] = useState(true)
	const [activeCategoryId, SetActiveCategoryId] = useState(0)
	const state = useSelector(state => state.navbar.categories)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCategories())
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
											<div className="nav__popup-left">
												{state.map((category, index) => {
													return (
														<div
															key={category.id}
															className="nav__popup-list"
														>
															<span className="nav__popup-content" onClick={()=> SetActiveCategoryId(index)}>
																{category.name_uz}
															</span>
														</div>
													)
												})}
											</div>
											<div className="nav__popup-right">
													<ul className="nav__popup-flex1">
														{state[activeCategoryId]?.children?.map(
															(
																subCat
															) => {
																return (
																	<li
																		key={
																			subCat.id
																		}
																		className="nav__popup-item"
																	>
																		<Link
																			to={`/products/${subCat.slug}`}
																			className="nav__popup-text"
																			style={{fontWeight: "bold"}}
																		>
																			{
																				subCat.name_uz
																			}
																		</Link>
																		<ul>
																			{
																				subCat?.children.map (subCatItem => {
																					return (
																						<li key={subCatItem?.id}>
																							<Link to={`/products/${subCatItem.slug}`} className="nav__popup-text">{subCatItem.name_uz}</Link>
																						</li>
																					)
																				})
																			}
																		</ul>
																	</li>
																)
															}
														)}
													</ul>
												</div>
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
