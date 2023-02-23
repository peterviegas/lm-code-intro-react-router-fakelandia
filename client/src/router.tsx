//router.tsx
import { Route, Routes} from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import Footer from './components/footer';
import NotFound  from "./components/notFound";
import { MainLayout } from './components/main_layout';
import Department from './components/department';
import Justice from './components/justice';
import Fakelandia from './components/fakelandia';

export const Router : React.FC = () => <>
	<Routes>
		<Route path='/' element={<MainLayout/>}>
			<Route index element={<Home/>}/>
			<Route path='about' element={<About/>}/>
			<Route path='footer' element={<Footer/>}/>
			<Route path='fakelandia' element={<Fakelandia/>}/>
			<Route path='justice' element={<Justice/>}/>
			<Route path='department' element={<Department/>}/>
			<Route path='*' element={<NotFound/>}/>
		</Route>
	</Routes>
</>;