import { Box, Image } from '@chakra-ui/react'
import Footer from '../footer'
import Navbar from '../navbar'
import whatsappIcon from '../../assets/images/whatsapp.png'
import { Colors } from '../../utils/colors'

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
					bottom='6'
					right='6'
				/>
			</a>
		</Box>
	)
}

export default MainLayout
