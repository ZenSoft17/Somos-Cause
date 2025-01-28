import { Box, Heading, Image } from '@chakra-ui/react'
import { Colors } from '../utils/colors'
import Logo1 from '../assets/images/logo_1.png'
import { useState, useEffect } from 'react'
import menuIcon from '../assets/images/menu-navigation-grid-1529-svgrepo-com.png'

const Navbar = () => {
	const [animate, setAnimate] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setAnimate(true)
		}, 500)
	}, [])

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<Box
			as='nav'
			width='full'
			h={{ base: 'auto', md: animate ? '140px' : '100vh' }}
			bg={Colors.primary}
			shadow='md'
			display='flex'
			flexWrap='wrap'
			justifyContent={{ base: 'space-between', md: 'space-around' }}
			alignItems='center'
			p={{ base: 4, md: 0 }}
			transition='height 0.5s linear, top 0.5s linear'
			position='relative'
			top='auto'
			left='auto'
			zIndex={999}
		>
			<Box
				as='ul'
				listStyle='none'
				display={{ base: 'none', md: 'flex' }}
				alignItems='center'
				flexWrap='wrap'
				w={{ md: '40%' }}
				justifyContent='center'
				mb={{ md: 0 }}
				gap='6'
				transition='opacity 0.5s linear'
			>
				<Heading
					as='h2'
					fontSize={{ md: '3vh', md: '2.5vh', lg: '3vh', xl: '3.5vh' }}
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
					fontSize={{ md: '3vh', md: '2.5vh', lg: '3vh', xl: '3.5vh' }}
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
				alt='Logo de la empresa'
				loading='lazy'
				w={{
					base: '100px',
					md: animate ? '90px' : '250px',
					lg: animate ? '120px' : '350px',
				}}
				h={{
					base: '100px',
					md: animate ? '90px' : '250px',
					lg: animate ? '120px' : '350px',
				}}
				objectFit='contain'
				mb={{ base: 0, md: 0 }}
				transition='width 0.5s linear, height 0.5s linear'
			/>

			<Box
				as='ul'
				listStyle='none'
				display={{ base: 'none', md: 'flex' }}
				alignItems='center'
				flexWrap='wrap'
				w={{ md: '40%' }}
				justifyContent='center'
				gap='6'
				transition='opacity 0.5s linear'
			>
				<Heading
					as='h2'
					fontSize={{ md: '3vh', md: '2.5vh', lg: '3vh', xl: '3.5vh' }}
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
					fontSize={{ md: '3vh', md: '2.5vh', lg: '3vh', xl: '3.5vh' }}
					color={Colors.secondary}
					letterSpacing='1px'
					fontWeight='300'
					cursor='pointer'
					fontFamily='sugo pro display'
				>
					<a href='#contact'>Contáctanos</a>
				</Heading>
			</Box>

			{isMenuOpen ? (
				''
			) : (
				<Box
					as='button'
					display={{ base: 'block', md: 'none' }}
					onClick={toggleMenu}
					p={2}
					position='relative'
					zIndex={1001}
				>
					<Image
						src={menuIcon}
						alt='Ícono de menú'
						loading='lazy'
						w='24px'
						h='24px'
					/>
				</Box>
			)}

			<Box
				position='fixed'
				top={0}
				right={0}
				h='100vh'
				w='100%'
				bg={Colors.primary}
				transform={isMenuOpen ? 'translateX(0)' : 'translateX(100%)'}
				transition='transform 0.3s ease-in-out'
				zIndex={1000}
				display={{ base: 'flex', md: 'none' }}
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
				p={6}
			>
				<Box
					as='button'
					position='absolute'
					top='20px'
					right='20px'
					onClick={toggleMenu}
					p={2}
				>
					<Box position='relative' w='24px' h='24px'>
						<Box
							position='absolute'
							top='50%'
							left='0'
							w='24px'
							h='2px'
							bg={Colors.secondary}
							transform='rotate(45deg)'
						/>
						<Box
							position='absolute'
							top='50%'
							left='0'
							w='24px'
							h='2px'
							bg={Colors.secondary}
							transform='rotate(-45deg)'
						/>
					</Box>
				</Box>

				<Heading
					as='h2'
					fontSize='24px'
					color={Colors.secondary}
					letterSpacing='1px'
					fontWeight='300'
					cursor='pointer'
					fontFamily='sugo pro display'
					mb={6}
				>
					<a href='#know-us' onClick={toggleMenu}>
						¿Quiénes somos?
					</a>
				</Heading>
				<Heading
					as='h2'
					fontSize='24px'
					color={Colors.secondary}
					letterSpacing='1px'
					fontWeight='300'
					cursor='pointer'
					fontFamily='sugo pro display'
					mb={6}
				>
					<a href='#our-services' onClick={toggleMenu}>
						Nuestros servicios
					</a>
				</Heading>
				<Heading
					as='h2'
					fontSize='24px'
					color={Colors.secondary}
					letterSpacing='1px'
					fontWeight='300'
					cursor='pointer'
					fontFamily='sugo pro display'
					mb={6}
				>
					<a href='#workshops' onClick={toggleMenu}>
						Talleres
					</a>
				</Heading>
				<Heading
					as='h2'
					fontSize='24px'
					color={Colors.secondary}
					letterSpacing='1px'
					fontWeight='300'
					cursor='pointer'
					fontFamily='sugo pro display'
				>
					<a href='#contact' onClick={toggleMenu}>
						Contáctanos
					</a>
				</Heading>
			</Box>
		</Box>
	)
}

export default Navbar
