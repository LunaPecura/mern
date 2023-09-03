import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import CyclePage from './pages/CyclePage';
import MembersPage from './pages/MembersPage';
import NavBar from './components/NavBar';

function App() {

	const [user, setUser] = useState(null);

	return (
		<div className="App">
		{ 
			user ?
			<>
				<NavBar />
				<Routes>
					<Route path='/cycle' element={<CyclePage />} />
					<Route path='/cycle/members' element={<MembersPage />} />
				</Routes>
			</>
			:
			<AuthPage />
		}
		</div>
	);
}

export default App;
