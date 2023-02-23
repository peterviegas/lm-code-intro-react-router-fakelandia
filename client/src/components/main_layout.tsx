import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

export const MainLayout: React.FC = () => <>

	<body>
        <Header />
		<main className='p-6' style={{flex: '1'}}>
        	<Outlet />
		</main>
        <Footer />
      </body>
</>;