import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { Header } from "./components/Header";

export const App = () => {
	return (
		<div className='container'>
			<Header />
			<Routes>
        <Route path='/' element={<HomePage />}/>
				{/* <HomePage /> */}
			</Routes>
		</div>
	);
};
