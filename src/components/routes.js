import Product from "../pages/Product"
import ProductList from "../pages/ProductList"
import Cart from "../pages/Cart"
import ContactUs from "../pages/ContactUs"
import PageNotFound from "../pages/PageNotFound"
import Main from "../pages/Main"

let routes = [
	{
		id: 1,
		path: "/",
		component: Main,
	},
	{
		id: 2,
		path: "/products",
		component: Product,
	},
	{
		id: 3,
		path: "/product/:slug",
		component: ProductList,
	},
	{
		id: 4,
		path: "/cart",
		component: Cart,
	},
	{
		id: 5,
		path: "/contact",
		component: ContactUs,
	},
	{
		id: 6,
		path: "/404",
		component: PageNotFound,
	},
]

export default routes
