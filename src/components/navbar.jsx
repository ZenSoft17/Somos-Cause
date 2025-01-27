import { Box, Heading, Image } from '@chakra-ui/react'
import { Colors } from '../utils/colors'
import Logo1 from '../assets/images/logo_1.png'
import { useState, useEffect } from 'react'

const Navbar = () => {
	const [animate, setAnimate] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimate(true)
		}, 500)
	}, [])

	return (
		<Box
			as='nav'
			width='full'
			h={{ base: 'auto', md: animate ? '140px' : '100vh' }}
			bg={Colors.primary}
			shadow='md'
			display='flex'
			flexWrap='wrap'
			justifyContent={{ base: 'center', md: 'space-around' }}
			alignItems='center'
			p={{ base: 4, md: 0 }}
			transition='height 0.5s linear, top 0.5s linear'
			position='relative'
			top='auto'
			left='auto'
			zIndex='auto'
		>
			<Box
				as='ul'
				listStyle='none'
				display='flex'
				alignItems='center'
				flexWrap='wrap'
				w={{ base: '100%', md: '40%' }}
				justifyContent='center'
				mb={{ base: 4, md: 0 }}
				gap='6'
				transition='opacity 0.5s linear'
			>
				<Heading
					as='h2'
					fontSize={{ base: '20px', md: '33px' }}
					color={Colors.secondary}
					letterSpacing='1px'
					fontWeight='300'
					cursor='pointer'
					fontFamily='sugo pro display'
				>
					<a href='#know-us'>¿Quiénes somos?</a>
				</Heading>
				<Heading
					as='h2'
					fontSize={{ base: '20px', md: '32px' }}
					color={Colors.secondary}
					letterSpacing='1px'
					fontWeight='300'
					cursor='pointer'
					fontFamily='sugo pro display'
				>
					<a href='#our-services'>Nuestros servicios</a>
				</Heading>
			</Box>

			<Image
				src={Logo1}
				w={{ base: '100px', md: animate ? '120px' : '350px' }}
				h={{ base: '100px', md: animate ? '120px' : '350px' }}
				objectFit='contain'
				mb={{ base: 4, md: 0 }}
				transition='width 0.5s linear, height 0.5s linear'
			/>

			<Box
				as='ul'
				listStyle='none'
				display='flex'
				alignItems='center'
				flexWrap='wrap'
				w={{ base: '100%', md: '40%' }}
				justifyContent='center'
				gap='6'
				transition='opacity 0.5s linear'
			>
				<Heading
					as='h2'
					fontSize={{ base: '20px', md: '33px' }}
					color={Colors.secondary}
					letterSpacing='1px'
					fontWeight='300'
					cursor='pointer'
					fontFamily='sugo pro display'
				>
					<a href='#workshops'>Talleres</a>
				</Heading>
				<Heading
					as='h2'
					fontSize={{ base: '20px', md: '32px' }}
					color={Colors.secondary}
					letterSpacing='1px'
					fontWeight='300'
					cursor='pointer'
					fontFamily='sugo pro display'
				>
					<a href='#contact'>Contáctanos</a>
				</Heading>
			</Box>
		</Box>
	)
}

export default Navbar
