import { Box, Heading, Image } from '@chakra-ui/react'
import keyBg from '../assets/images/Assets-08.png'
import Logo2 from '../assets/images/logo2.png'
import { Colors } from '../utils/colors'

const Footer = () => {
	const getYear = new Date().getFullYear()

	return (
		<Box
			as='footer'
			bg={Colors.secondary}
			w='full'
			minH={{ base: '200px', md: '250px' }}
			position='relative'
			overflow='hidden'
			py={{ base: 6, md: 8 }}
			px={{ base: 4, md: 6 }}
		>
			<Box
				display='flex'
				flexDirection={{ base: 'column', md: 'row' }}
				justifyContent={{ base: 'center', md: 'space-between' }}
				alignItems='center'
				gap={{ base: 6, md: 8 }}
				maxW='1400px'
				mx='auto'
				position='relative'
				zIndex='1'
			>
				<Image
					src={Logo2}
					objectFit='contain'
					w={{ base: '130px', sm: '250px' }}
					h={{ base: '130px', sm: '250px' }}
					flex='0 0 auto'
				/>

				<Box
					position='relative'
					maxW={{ base: '300px', md: '400px' }}
					flex='0 1 auto'
				>
					<Heading
						as='h1'
						fontFamily='montserrat'
						fontSize={{ base: '16px', sm: '18px', md: '22px', lg: '25px' }}
						color={Colors.primary}
						fontWeight='100'
						textAlign='center'
						lineHeight='1.4'
					>
						Todos los derechos reservados © {getYear} - Somos Cauce
					</Heading>
					<Box
						position='absolute'
						bottom='-8px'
						left='50%'
						transform='translateX(-50%)'
						w='120%'
						h='2px'
						bg='white'
					/>
				</Box>

				<Box
					position={{ base: 'absolute', md: 'relative' }}
					right={{ base: '-100px', md: '0' }}
					bottom={{ base: '0', md: 'auto' }}
					opacity={{ base: 0.3, md: 1 }}
					flex='0 0 auto'
					zIndex='1'
				>
					<Image
						src={keyBg}
						objectFit='contain'
						w={{ base: '200px', sm: '250px', md: '300px', lg: '300px' }}
						h={{ base: '200px', sm: '250px', md: '300px', lg: '300px' }}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default Footer
