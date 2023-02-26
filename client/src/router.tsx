//router.tsx
import { Route, Routes} from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import NotFound  from "./components/notFound";
import { MainLayout } from './components/main_layout';
import Justice from './components/justice';
import Fakelandia from './components/fakelandia';
import Midemeanours from './components/misdemeanours';
import ConfessToUs from './components/confess-to-us';

export const Router : React.FC = () => <>
	<Routes>
		<Route path='/' element={<MainLayout/>}>
			<Route index element={<Home/>}/>
			<Route path='about' element={<About/>}/>
			<Route path='fakelandia' element={<Fakelandia/>}/>
			<Route path='justice' element={<Justice/>}/>
			<Route path='midemeanours' element={<Midemeanours/>}/>
			<Route path='confess-to-us' element={<ConfessToUs/>}/>
			<Route path='*' element={<NotFound/>}/>
		</Route>
	</Routes>
</>;