import { Box, Image } from '@chakra-ui/react'
import Footer from '../footer'
import Navbar from '../navbar'
import whatsappIcon from '../../assets/images/whatsapp.png'
import { Colors } from '../../utils/colors'
import arrowTop from '../../assets/images/Assets-12.png'

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'instant',
	})
}

const MainLayout = ({ children }) => {
	return (
		<Box bg={Colors.third} position='relative'>
			<Navbar />
			{children}
			<Footer />
			<a href='https://wa.me/573153416995?text=Hola,%20quiero%20agendar%20una%20cita.'>
				<Image
					w='70px'
					h='70px'
					src={whatsappIcon}
					objectFit='container'
					position='fixed'
					bottom='24'
					right='6'
					zIndex='999'
				/>
			</a>
			<Box
				cursor='pointer'
				position='fixed'
				bottom='6'
				right='6'
				zIndex='999'
			>
				<Image
					onClick={scrollToTop}
					src={arrowTop}
					objectFit='contain'
					w='60px'
					h='60px'
					_hover={{
						transform: 'scale(1.05)',
					}}
				/>
			</Box>
		</Box>
	)
}

export default MainLayout
