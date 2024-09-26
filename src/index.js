import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './redux'

import App from './App';

// CSS
import './index.css';
import 'react-toastify/dist/ReactToastify.css';



const root = ReactDOM.createRoot(document.querySelector('body'));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
