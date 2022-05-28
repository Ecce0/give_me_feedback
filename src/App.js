import Header from './components/Header'
import List from './components/List'
import Stats from './components/Stats'
import Form from './components/Form'
import About from './components/pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutIconLink from './components/shared/AboutIconLink'
import { FeedbackProvider } from './components/context/FeedbackContext'

const App = () => {
	
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<Form />
									<Stats />
									<List />
								</>
							}
						></Route>
						<Route path='/about' element={<About />} />
					</Routes>
					<AboutIconLink />
				</div>
			</Router>
		</FeedbackProvider>
	)
}

export default App
