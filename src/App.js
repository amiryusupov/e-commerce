import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import routes from "./components/routes"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div className="pages">
				<Switch>
					{routes.map((item) => {
						return (
							<Route
								key={item.id}
								path={item.path}
								component={item.component}
								exact
							/>
						)
					})}
					<Redirect to="/404" />
				</Switch>
			</div>
			<Footer />
		</div>
	)
}

export default App
