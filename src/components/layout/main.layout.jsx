import { Box } from '@chakra-ui/react'
import Footer from '../footer'
import Navbar from '../navbar'

const MainLayout = ({ children }) => {
	return (
		<Box bg='white'>
			<Navbar />
			{children}
			<Footer />
		</Box>
	)
}

export default MainLayout
