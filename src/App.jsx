// Layout
import TopNav from './layout/TopNav';

// Routes
import Pages from './pages'

// redux
import { useSelector } from 'react-redux';

// Modals
import Modals from './modals';

// React-toastify
import { ToastContainer } from 'react-toastify';


// Helpers
import { hlpr_validate_login } from './helpers/functions';



// Call hlpr_validate_login
hlpr_validate_login();


function App() {


	const { settingSlice: { showModal } } = useSelector(store => store)

	return (
		<div className={`h-screen ${showModal ? 'overflow-hidden' : 'overflow-auto'} `}>

			<TopNav />

			<Pages />

			<Modals modal={showModal} />

			<ToastContainer
				position='bottom-left'
				autoClose='6000'
				closeOnClick={true}
				theme='dark'
			/>
		</div>
	);
}

export default App;

