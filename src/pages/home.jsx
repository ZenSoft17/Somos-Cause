import MainLayout from '../components/layout/main.layout'
import { Box, Button, Heading, Image, Span, Text } from '@chakra-ui/react'
import { Colors } from '../utils/colors'
import bg1 from '../assets/images/family-therapy-psychologist-office.jpg'
import valenFace from '../assets/images/Assets-15.png'
import andresFace from '../assets/images/Assets-17.png'
import individualTerapy from '../assets/images/Assets-02.png'
import coupleTerapy from '../assets/images/Assets-03.png'
import sexualTerapy from '../assets/images/Assets-04.png'
import familyTerapy from '../assets/images/Assets-05.png'
import handTop from '../assets/images/Assets-07.png'
import handBottom from '../assets/images/Assets-06.png'
import keyBg from '../assets/images/Assets-08.png'
import inPersonIcon from '../assets/images/Assets-10.png'
import virtualIcon from '../assets/images/Assets-11.png'
import InstagramIcon from '../assets/images/instagram_icon.png'
import mailIcon from '../assets/images/mail_icon.png'
import whatsappIcon2 from '../assets/images/whatsapp_icon.png'
import valenAndandres from '../assets/images/Valentina-3.jpg'
import valenInCouch from '../assets/images/Valentina-68_E.jpg'

const Home = () => {
	document.title = 'Somos Cauce - Terapia enfocada en soluciones'

	return (
		<MainLayout>
			<Box
				id='know-us'
				as='article'
				w='full'
				p={{ base: '50px', md: '16', lg: '24', xl: '140px' }}
				display='flex'
				flexDirection='column'
				alignItems='center'
			>
				<Heading
					as='h1'
					color={Colors.secondary}
					fontSize={{
						base: '32px',
						sm: '36px',
						md: '40px',
						xl: '45px',
					}}
					fontWeight='200'
					mb={{ base: '12', sm: '16', md: '20', lg: '118px' }}
					fontFamily='sugo pro display'
					textAlign='center'
				>
					¿Quiénes somos?
				</Heading>
				<Text
					color={Colors.secondary}
					fontWeight='100'
					fontSize={{
						base: '16px',
						sm: '18px',
						md: '24px',
					}}
					fontFamily='montserrat'
					textAlign='center'
					w={{ base: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' }}
					lineHeight='1.5'
					mb={{ base: '8', sm: '10', md: '12', lg: '16' }}
				>
					En Somos Cauce esperamos que encuentres un lugar para construir tus
					propias historias, aquellas que has imaginado a futuro. No tenemos una
					fórmula que dé soluciones mágicas a tus problemas, pero juntos sí
					podemos construir soluciones humanas y hechas a tu medida, desde tus
					recursos, habilidades y capacidades. Esperamos además que en este
					espacio podamos debatir algunas ideas, deconstruirlas para después
					co-construirlas en este lugar que hemos co-creado para ti. En Somos
					Cauce tanto tú como nosotros somos expertos, por eso brindamos un
					trabajo colaborativo centrado en soluciones.
				</Text>
				<a href='https://wa.me/573153416995?text=Hola,%20quiero%20agendar%20una%20cita.'>
					<Button
						size='lg'
						bg={Colors.secondary}
						color={Colors.third}
						px={{ base: '8', md: '12' }}
						py={{ base: '6', md: '8' }}
						fontSize={{ base: '18px', md: '20px' }}
						fontFamily='montserrat'
						fontWeight='500'
						transform='scale(1)'
						transition='all 0.3s ease'
						_hover={{
							transform: 'scale(1.05)',
							bg: Colors.secondary,
							boxShadow: 'xl',
						}}
						_active={{
							transform: 'scale(0.95)',
						}}
					>
						Agenda tu cita ahora
					</Button>
				</a>
			</Box>

			<Box
				w='full'
				h='auto'
				pt={{ base: '50px', md: '16', lg: '24', xl: '140px' }}
				pb={{ base: '50px', md: '16', lg: '24', xl: '140px' }}
				bgImage={`url(${bg1})`}
				bgSize='cover'
				bgPosition='center'
				bgRepeat='no-repeat'
				backgroundAttachment='fixed'
			>
				<Box
					w='full'
					display='flex'
					justifyContent='center'
					flexWrap={{ base: 'wrap', lg: 'nowrap' }}
					gap='8'
				>
					<Box
						w={{ base: '90%', sm: '70%', md: '450px', lg: '450px' }}
						bg={Colors.third}
						p={{ base: '8', md: '12' }}
						display='flex'
						flexDirection='column'
						alignItems='center'
						mr={{ base: '0', lg: '23px' }}
					>
						<Image
							src={valenFace}
							w={{ base: '200px', md: '350px' }}
							h={{ base: '200px', md: '350px' }}
							objectFit='contain'
							loading='lazy'
						/>

						<Heading
							as='h3'
							fontSize={{ base: '18px', md: '24px' }}
							fontFamily='montserrat'
							textAlign='center'
							fontWeight='800'
							color={Colors.secondary}
							mt={{ base: '4', md: '8' }}
							mb={{ base: '4', md: '8' }}
						>
							Valentina Holguín
						</Heading>

						<Text
							color={Colors.secondary}
							fontWeight='100'
							fontSize={{ base: '16px', md: '20px' }}
							fontFamily='montserrat'
							textAlign='center'
							mb='8'
						>
							Soy Valentina Holguín, Psicoterapeuta sistémica breve y centrada
							en soluciones con 7 años de experiencia, con una visión de la vida
							desde las posibilidades, estoy convencida de que el cambio es
							inevitable y a veces necesitamos de pequeños pasos para acercarnos
							a el. Mi interés está en la intervención desde diferentes ámbitos,
							lo individual, la pareja, la familia, además de acompañar
							preguntas y problemas frente a tu sexualidad. La intervención se
							realiza teniendo en cuenta tus cualidades, recursos, red de apoyo
							y demás, además de aprender juntos en consulta estrategias que
							puedes implementar que impacten en tu calidad de vida y aumento
							del bienestar.
						</Text>
						<Text
							color={Colors.secondary}
							fontWeight='100'
							fontSize={{ base: '16px', md: '20px' }}
							fontFamily='montserrat'
							textAlign='center'
						>
							Te espero para co-crear las nuevas narrativas y futuros preferidos
							de tu vida.
						</Text>
					</Box>

					<Box
						w={{ base: '90%', sm: '70%', md: '450px', lg: '450px' }}
						bg={Colors.third}
						p={{ base: '8', md: '12' }}
						display='flex'
						flexDirection='column'
						alignItems='center'
						ml={{ base: '0', lg: '23px' }}
					>
						<Image
							src={andresFace}
							w={{ base: '200px', md: '350px' }}
							h={{ base: '200px', md: '350px' }}
							objectFit='contain'
							loading='lazy'
						/>

						<Heading
							as='h3'
							fontSize={{ base: '18px', md: '24px' }}
							fontFamily='montserrat'
							textAlign='center'
							fontWeight='800'
							color={Colors.secondary}
							mt={{ base: '4', md: '8' }}
							mb={{ base: '4', md: '8' }}
						>
							Julián Alberto Mejía
						</Heading>

						<Text
							color={Colors.secondary}
							fontWeight='100'
							fontSize={{ base: '16px', md: '20px' }}
							fontFamily='montserrat'
							textAlign='center'
						>
							Soy Julián Mejía, abogado y defensor de Derechos Humanos,
							comprometido con la promoción de justicia social y la protección
							de los derechos fundamentales. Mi enfoque está en impulsar un
							cambio positivo a través del conocimiento legal, la ética y el
							trabajo colaborativo.
						</Text>

						<Heading
							as='h1'
							fontSize={{ base: '18px', md: '20px' }}
							fontFamily='montserrat'
							textAlign='center'
							fontWeight='800'
							color={Colors.secondary}
							mt={{ base: '2', md: '4' }}
							mb={{ base: '2', md: '4' }}
						>
							¿Qué ofrezco?
						</Heading>

						<Box
							as='ul'
							listStyle='outside'
							display='flex'
							flexDirection='column'
							alignItems='center'
						>
							<Heading
								as='li'
								color={Colors.secondary}
								fontWeight='100'
								fontSize={{ base: '16px', md: '20px' }}
								fontFamily='montserrat'
								textAlign='center'
							>
								Experiencia en investigación y comunicación efectiva.
							</Heading>
							<Heading
								as='li'
								color={Colors.secondary}
								fontWeight='100'
								fontSize={{ base: '16px', md: '20px' }}
								fontFamily='montserrat'
								textAlign='center'
							>
								Habilidades de liderazgo y coordinación en equipos
								multidisciplinarios.
							</Heading>
							<Heading
								as='li'
								color={Colors.secondary}
								fontWeight='100'
								fontSize={{ base: '16px', md: '20px' }}
								fontFamily='montserrat'
								textAlign='center'
							>
								Experiencia en relaciones públicas para proyectos con entidades
								gubernamentales y no gubernamentales.
							</Heading>
							<Heading
								as='li'
								color={Colors.secondary}
								fontWeight='100'
								fontSize={{ base: '16px', md: '20px' }}
								fontFamily='montserrat'
								textAlign='center'
							>
								Capacidad para diseñar y gestionar proyectos enfocados en la
								promoción de la paz y los Derechos Humanos y Actividades clave
								que buscan consolidar la verdad, la reconciliación y la paz.
							</Heading>
						</Box>
					</Box>
				</Box>
			</Box>

			<Box
				id='our-services'
				as='article'
				w='full'
				p={{ base: '50px', md: '16', lg: '24', xl: '140px' }}
				display='flex'
				flexDirection='column'
				alignItems='center'
			>
				<Heading
					as='h1'
					color={Colors.secondary}
					fontSize={{ base: '36px', md: '40px', lg: '45px' }}
					fontWeight='200'
					mb={{ base: '50px', md: '28', lg: '140px' }}
					fontFamily='sugo pro display'
					textAlign='center'
				>
					Nuestros Servicios
				</Heading>

				<Box
					w='full'
					maxW='1440px'
					display='flex'
					flexDirection={{ base: 'column', md: 'row' }}
					justifyContent='center'
					alignItems='center'
					gap={{ base: 6, md: 8, lg: 10 }}
					flexWrap={{ base: 'wrap', md: 'nowrap' }}
				>
					<Box
						flex={{ base: '1 1 100%', md: '1 1 30%' }}
						minW='280px'
						maxW={{ base: '100%', md: '360px' }}
					>
						<a href='#individual-therapy'>
							<Image
								src={individualTerapy}
								alt='Terapia Individual'
								objectFit='contain'
								w={{ base: '100%', md: '90%' }}
								h={{ base: '200px', md: '280px', lg: '300px' }}
								transition='transform 0.3s ease'
								_hover={{ transform: 'scale(1.02)' }}
							/>
						</a>
					</Box>

					<Box
						flex={{ base: '1 1 100%', md: '1 1 30%' }}
						minW='280px'
						maxW={{ base: '100%', md: '360px' }}
						display='flex'
						flexDirection='column'
						alignItems='center'
						gap={{ base: 6, md: 8 }}
					>
						<a href='#couple-therapy' style={{ width: '100%' }}>
							<Image
								src={coupleTerapy}
								alt='Terapia de Pareja'
								objectFit='contain'
								w={{ base: '100%', md: '90%' }}
								h={{ base: '200px', md: '280px', lg: '300px' }}
								transition='transform 0.3s ease'
								_hover={{ transform: 'scale(1.02)' }}
							/>
						</a>
						<a href='#sexual-therapy' style={{ width: '100%' }}>
							<Image
								src={sexualTerapy}
								alt='Terapia Sexual'
								objectFit='contain'
								w={{ base: '100%', md: '90%' }}
								h={{ base: '200px', md: '280px', lg: '300px' }}
								transition='transform 0.3s ease'
								_hover={{ transform: 'scale(1.02)' }}
							/>
						</a>
					</Box>

					<Box
						flex={{ base: '1 1 100%', md: '1 1 30%' }}
						minW='280px'
						maxW={{ base: '100%', md: '360px' }}
					>
						<a href='#family-therapy'>
							<Image
								src={familyTerapy}
								alt='Terapia Familiar'
								objectFit='contain'
								w={{ base: '100%', md: '90%' }}
								h={{ base: '200px', md: '280px', lg: '300px' }}
								transition='transform 0.3s ease'
								_hover={{ transform: 'scale(1.02)' }}
							/>
						</a>
					</Box>
				</Box>
			</Box>

			<Box
				as='article'
				w='full'
				p={{ base: '12', md: '16', lg: '24' }}
				display='flex'
				flexDirection='column'
				alignItems='center'
				bg={Colors.primary}
			>
				<Heading
					as='h1'
					color={Colors.secondary}
					fontSize={{
						base: '36px',
						md: '40px',
						lg: '45px',
					}}
					fontWeight='200'
					mb={{ base: '8', sm: '12', md: '16', lg: '24', xl: '30' }}
					fontFamily='sugo pro display'
					textAlign='center'
					px={{ base: '2', sm: '4' }}
				>
					Servicios de psicología clínica
				</Heading>
				<Text
					color={Colors.secondary}
					fontWeight='100'
					fontSize={{
						base: '15px',
						sm: '16px',
						md: '18px',
						lg: '22px',
						xl: '24px',
					}}
					fontFamily='montserrat'
					textAlign='center'
					w={{ base: '95%', sm: '90%', md: '85%', lg: '80%', xl: '75%' }}
					lineHeight={{ base: '1.6', md: '1.5' }}
					px={{ base: '2', sm: '4' }}
				>
					El espacio de terapia sistémica breve y centrado en soluciones está
					pensando para acompañar desde lo individual, en pareja, en familia y
					en terapia sexual, en donde podrás cuestionar aquello no te hace bien
					y resaltar lo que te gusta. Es un espacio para indagarnos desde la
					compañía de otro que construye contigo y que te escucha atentamente.
					Un lugar para poder crear nuevas historias, cuestionar algunas de
					ellas y quizá abandonarlas, es un lugar de deconstrucción y creación.
					En donde, desde una visión de posibilidades la terapeuta te acompaña
					desde lo que si te funciona, para crear nuevos caminos que te permitan
					un cambio, soltar viejas versiones de ti mismo que ya no te hacen
					sentir bien; es crear en consulta tu propia receta de cómo quieres
					seguir viviendo y como puedes solucionar los problemas que estas
					atravesando, para explorar tus identidades, tus narrativas, las
					relaciones que estableces, la relación que tienes contigo, las
					excepciones al problema, lo que imaginas construyendo en el futuro y
					que cuesta comenzar en el presente.
				</Text>
				<Heading
					as='h1'
					color={Colors.secondary}
					fontSize={{
						base: '20px',
						sm: '25px',
						md: '35px',
					}}
					fontWeight='200'
					mt={{ base: '8', sm: '12', md: '16' }}
					fontFamily='sugo pro display'
					textAlign='center'
					px={{ base: '2', sm: '4' }}
				>
					"Un viaje de mil millas comienza con un primer paso" Lao-Tse
				</Heading>
			</Box>

			<Box
				as='article'
				w='full'
				pl={{ base: '8', sm: '16', md: '24' }}
				pr={{ base: '8', sm: '16', md: '24' }}
				pt={{ base: '8', sm: '28', md: '24' }}
				pb={{ base: '8', sm: '28', md: '24' }}
				display='flex'
				flexDirection='column'
				alignItems='center'
				position='relative'
			>
				<Image
					src={handTop}
					position='absolute'
					top={{ base: '2', sm: '4', md: '8' }}
					right={{ base: '2', sm: '4', md: '8' }}
					maxW={{ base: '30%', sm: '25%', md: '15%' }}
					objectFit='contain'
					zIndex={0}
					display={{ base: 'none', sm: 'block' }}
				/>

				<Image
					src={handBottom}
					position='absolute'
					left={{ base: '2', sm: '4', md: '8' }}
					bottom={{ base: '2', sm: '4', md: '8' }}
					maxW={{ base: '30%', sm: '25%', md: '15%' }}
					objectFit='contain'
					zIndex={0}
					display={{ base: 'none', sm: 'block' }}
				/>

				<Heading
					as='h1'
					color={Colors.secondary}
					fontSize={{ base: '32px', sm: '36px', md: '45px' }}
					fontWeight='200'
					mb={{ base: '12', sm: '16', md: '20', lg: '28', xl: '32' }}
					fontFamily='sugo pro display'
					textAlign='center'
					zIndex={1}
				>
					¿Cuándo acudir a consulta?
				</Heading>

				<Box
					w={{ base: '100%', md: '70%' }}
					display='flex'
					flexWrap='wrap'
					justifyContent='center'
				>
					<Box
						w={{ base: '100%', md: '50%' }}
						p={{ base: '4', sm: '8' }}
						display='flex'
						flexDirection='column'
						justifyContent='space-between'
					>
						<Heading
							as='h3'
							color={Colors.secondary}
							fontSize={{ base: '24px', sm: '32px', md: '40px' }}
							fontWeight='200'
							fontFamily='sugo pro display'
							textAlign='center'
							lineHeight={{ base: '1.1', sm: '1.2', md: '1.3' }}
							px={{ base: '1', sm: '2' }}
							mb={{ base: '2', sm: '3', md: '4' }}
						>
							<Box as='span' display='inline-flex' alignItems='center'>
								Para adolescentes y adultos
							</Box>
						</Heading>

						<Box
							as='ul'
							listStyle='outside'
							p={{ base: '8', sm: '12', md: '12' }}
							flexGrow={1}
						>
							{[
								'Dificultades en la autoestima',
								'Ansiedad',
								'Depresión',
								'Duelo',
								'Ruptura amorosa',
								'Dificultades para relacionarse',
								'Dificultades en la pareja y comunicación',
								'Dificultades familiares',
								'Dificultad para identificar o expresar emociones',
								'Dificultad en establecimiento de límites',
								'Dificultad en la toma de decisiones',
								'Dificultad en la sexualidad',
							].map((text, index) => (
								<Heading
									as='li'
									key={index}
									color={Colors.secondary}
									fontWeight='100'
									fontSize={{ base: '18px', md: '22px' }}
									fontFamily='montserrat'
								>
									{text}
								</Heading>
							))}
						</Box>
					</Box>

					<Box
						w={{ base: '100%', md: '50%' }}
						p={{ base: '4', sm: '8' }}
						borderLeft={{ base: 'none', md: '0.5px solid' }}
						borderColor={Colors.secondary}
						display='flex'
						flexDirection='column'
						justifyContent='space-between'
					>
						<Box
							display='flex'
							flexDirection='column'
							alignItems='center'
							gap={{ base: '2', sm: '3', md: '4' }}
						>
							<Heading
								as='h3'
								color={Colors.secondary}
								fontSize={{ base: '24px', sm: '32px', md: '40px' }}
								fontWeight='200'
								fontFamily='sugo pro display'
								textAlign='center'
								lineHeight={{ base: '1.1', sm: '1.2', md: '1.3' }}
								px={{ base: '1', sm: '2' }}
								mb='0'
							>
								<Box
									as='span'
									display='inline-flex'
									alignItems='center'
									mr={{ base: '0.5', sm: '1' }}
								>
									Para niños de
								</Box>
								<Span
									fontFamily='poppins'
									fontSize={{ base: '20px', sm: '28px', md: '40px' }}
									fontWeight='900'
									mx={{ base: '0.5', sm: '1' }}
									display='inline-flex'
									alignItems='center'
								>
									7
								</Span>
								<Box
									as='span'
									display='inline-flex'
									alignItems='center'
									ml={{ base: '0.5', sm: '1' }}
								>
									años en adelante
								</Box>
							</Heading>
							<Heading
								as='h3'
								color={Colors.secondary}
								fontSize={{ base: '20px', sm: '24px', md: '32px' }}
								fontWeight='200'
								fontFamily='sugo pro display'
								textAlign='center'
								mt='0'
							>
								(atención presencial)
							</Heading>
						</Box>
						<Box
							as='ul'
							listStyle='outside'
							p={{ base: '8', sm: '12', md: '12' }}
							flexGrow={1}
						>
							{[
								'Dificultad para el control de impulsos',
								'Dificultad para el seguimiento de instrucciones',
								'Dificultad para relacionarse con sus compañeros',
								'Para mejorar la inteligencia emocional',
								'Cuando los padres atraviesan por procesos de separación',
								'Por disminución en su autoestima',
							].map((text, index) => (
								<Heading
									as='li'
									key={index}
									color={Colors.secondary}
									fontWeight='100'
									fontSize={{ base: '18px', md: '20px' }}
									fontFamily='montserrat'
								>
									{text}
								</Heading>
							))}
						</Box>
					</Box>
				</Box>
			</Box>

			<Box
				w='full'
				h='80vh'
				bgImage={`url(${valenInCouch})`}
				bgSize={{ base: 'auto 100%', md: 'cover' }}
				bgPosition={{ base: 'right center', md: 'center' }}
				bgRepeat='no-repeat'
				backgroundAttachment={{ base: 'scroll', md: 'fixed' }}
				position='relative'
				zIndex='0'
			></Box>

			<Box
				as='article'
				w='full'
				h='auto'
				p={{ base: '8', sm: '16', md: '24' }}
				display='flex'
				flexDirection='column'
				alignItems='center'
				bg={Colors.secondary}
				position='relative'
			>
				<Image
					src={keyBg}
					position='absolute'
					top='50%'
					left='50%'
					transform='translate(-50%, -50%)'
					maxW='100%'
					maxH='100%'
					objectFit='contain'
				/>

				<Heading
					id='individual-therapy'
					as='h1'
					color={Colors.third}
					fontSize={{
						base: '32px',
						sm: '36px',
						md: '40px',
						lg: '45px',
					}}
					fontWeight='200'
					mb={{ base: '12', sm: '16', md: '20' }}
					fontFamily='sugo pro display'
					textAlign='center'
					zIndex={1}
				>
					Terapia individual
				</Heading>
				<Text
					color={Colors.third}
					fontWeight='100'
					fontSize={{
						base: '16px',
						sm: '18px',
						md: '20px',
						lg: '24px',
					}}
					fontFamily='montserrat'
					textAlign='center'
					w={{ base: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' }}
					lineHeight='1.5'
					mb={{ base: '12', sm: '16', md: '20' }}
					zIndex={1}
				>
					Apoyo profesional para mejorar en el desarrollo personal, un espacio
					seguro para expresar emociones y mejorar la calidad de vida.
				</Text>

				<Heading
					id='couple-therapy'
					as='h1'
					color={Colors.third}
					fontSize={{
						base: '32px',
						sm: '36px',
						md: '40px',
						lg: '45px',
					}}
					fontWeight='200'
					mb={{ base: '12', sm: '16', md: '20' }}
					fontFamily='sugo pro display'
					textAlign='center'
					zIndex={1}
				>
					Terapia de pareja
				</Heading>
				<Text
					color={Colors.third}
					fontWeight='100'
					fontSize={{
						base: '16px',
						sm: '18px',
						md: '20px',
						lg: '24px',
					}}
					fontFamily='montserrat'
					textAlign='center'
					w={{ base: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' }}
					lineHeight='1.5'
					mb={{ base: '12', sm: '16', md: '20' }}
					zIndex={1}
				>
					Apoyo profesional para mejorar en el desarrollo personal, un espacio
					seguro para expresar emociones y mejorar la calidad de vida.
				</Text>

				<Heading
					id='family-therapy'
					as='h1'
					color={Colors.third}
					fontSize={{
						base: '32px',
						sm: '36px',
						md: '40px',
						lg: '45px',
					}}
					fontWeight='200'
					mb={{ base: '12', sm: '16', md: '20' }}
					fontFamily='sugo pro display'
					textAlign='center'
					zIndex={1}
				>
					Terapia familiar
				</Heading>
				<Text
					color={Colors.third}
					fontWeight='100'
					fontSize={{
						base: '16px',
						sm: '18px',
						md: '20px',
						lg: '24px',
					}}
					fontFamily='montserrat'
					mb={{ base: '12', sm: '16', md: '20' }}
					textAlign='center'
					w={{ base: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' }}
					lineHeight='1.5'
					zIndex={1}
				>
					Apoyo profesional para mejorar las relaciones familiares, la
					comunicación e incrementar situaciones preferidas para toda la
					familia. Las familias están dotadas de capacidades y que les ayudan a
					superar los obstáculos que les impiden la armonía.
				</Text>

				<Heading
					id='sexual-therapy'
					as='h1'
					color={Colors.third}
					fontSize={{
						base: '32px',
						sm: '36px',
						md: '40px',
						lg: '45px',
					}}
					fontWeight='200'
					mb={{ base: '12', sm: '16', md: '20' }}
					fontFamily='sugo pro display'
					textAlign='center'
					zIndex={1}
				>
					Terapia sexual
				</Heading>
				<Text
					color={Colors.third}
					fontWeight='100'
					fontSize={{
						base: '16px',
						sm: '18px',
						md: '20px',
						lg: '24px',
					}}
					fontFamily='montserrat'
					textAlign='center'
					w={{ base: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' }}
					lineHeight='1.5'
					zIndex={1}
					mb={{ base: '12', sm: '16', md: '16' }}
				>
					Tener una consulta puede ayudarte a resolver distintos problemas e
					inquietudes en el ámbito de la sexualidad, además de ayudarte a
					profundizar el conocimiento personal, aumentar tus niveles de
					autoestima y a mejorar el vínculo con los demás.
				</Text>

				<Heading
					as='h1'
					color={Colors.third}
					fontSize={{
						base: '32px',
						sm: '36px',
						md: '40px',
						lg: '45px',
					}}
					fontWeight='200'
					fontFamily='sugo pro display'
					textAlign='center'
					zIndex={1}
				>
					¿Cuándo consultar una terapia sexual?
				</Heading>
				<Box
					as='ul'
					listStyle='outside'
					p={{ base: '8', sm: '12', md: '16' }}
					minW={{ base: '100%', sm: '80%', md: '100%' }}
					display='flex'
					flexDirection='column'
					alignItems='center'
				>
					{[
						'Dificultad para el control de impulsos',
						'Dificultad para el seguimiento de instrucciones',
						'Dificultad para relacionarse con sus compañeros',
						'Para mejorar la inteligencia emocional',
						'Cuando los padres atraviesan por procesos de separación',
						'Por disminución en su autoestima',
					].map((text, index) => (
						<Heading
							as='li'
							key={index}
							color={Colors.third}
							fontWeight='100'
							fontSize={{ base: '16px', sm: '18px', md: '20px', lg: '24px' }}
							fontFamily='montserrat'
							lineHeight='1.5'
						>
							{text}
						</Heading>
					))}
				</Box>
			</Box>

			<Box
				w='full'
				h={{ base: '50vh', sm: '90vh' }}
				bgImage={`url(${valenAndandres})`}
				bgSize='cover'
				bgPosition={{ base: 'right', md: 'center' }}
				bgRepeat='no-repeat'
				backgroundAttachment={{ base: 'scroll', md: 'fixed' }}
				position='relative'
				zIndex='0'
				overflow='hidden'
			>
				<Box
					position='absolute'
					top='50%'
					left='50%'
					transform='translate(-50%, -50%)'
					bg='rgba(255, 255, 255, 0.7)'
					p={{ base: '3', sm: '4', md: '12' }}
					borderRadius='md'
					boxShadow='lg'
					textAlign='center'
					maxW={{ base: '95%', sm: '90%' }}
					minW={{ base: '280px', sm: '400px' }}
					w='auto'
					overflowWrap='break-word'
				>
					<Heading
						as='h1'
						fontSize={{
							base: '24px',
							sm: '36px',
							md: '48px',
							xl: '50px',
						}}
						fontWeight='extrabold'
						textTransform='uppercase'
						color={Colors.secondary}
						fontFamily='montserrat bold'
						textAlign='center'
						p='0'
						lineHeight='1.1'
						letterSpacing={{ base: 'wide', sm: 'wider' }}
						maxW='100%'
						mx='auto'
						whiteSpace='nowrap'
					>
						Terapia Centrada en
					</Heading>
					<Heading
						as='h1'
						fontSize={{
							base: '24px',
							sm: '36px',
							md: '48px',
							xl: '50px',
						}}
						fontWeight='extrabold'
						textTransform='uppercase'
						color={Colors.secondary}
						fontFamily='montserrat bold'
						textAlign='center'
						p='0'
						lineHeight='1.1'
						letterSpacing={{ base: 'wide', sm: 'wider' }}
						maxW='100%'
						mx='auto'
						whiteSpace='nowrap'
					>
						Soluciones
					</Heading>
				</Box>
			</Box>

			<Box
				id='workshops'
				as='article'
				w='full'
				h='auto'
				p={{ base: '8', sm: '16', md: '24' }}
				display='flex'
				flexDirection='column'
				alignItems='center'
				bg={Colors.secondary}
			>
				<Heading
					as='h1'
					color={Colors.third}
					fontSize={{
						base: '32px',
						sm: '36px',
						md: '40px',
						lg: '45px',
					}}
					fontWeight='200'
					mb={{ base: '16', md: '16' }}
					fontFamily='sugo pro display'
					textAlign='center'
					zIndex={1}
				>
					Talleres de Construcción de Paz y Educación para la Paz
				</Heading>
				<Text
					color={Colors.third}
					fontWeight='100'
					fontSize={{
						base: '16px',
						sm: '18px',
						md: '20px',
						lg: '24px',
					}}
					mb={{ base: '16', md: '16' }}
					fontFamily='montserrat'
					textAlign='center'
					w={{ base: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' }}
					lineHeight='1.5'
					zIndex={1}
				>
					Descubre el poder del diálogo y la transformación. Nuestros talleres
					están diseñados para inspirar, enseñar y empoderar a personas, equipos
					y comunidades que buscan construir ambientes más justos, inclusivos y
					pacíﬁcos. Utilizando herramientas prácticas, enfoques
					interdisciplinarios y estrategias personalizadas, ofrecemos
					experiencias únicas para fomentar el cambio positivo en cualquier
					contexto.
				</Text>

				<Heading
					as='h1'
					color={Colors.third}
					fontSize={{
						base: '32px',
						sm: '36px',
						md: '40px',
					}}
					fontWeight='200'
					mb={{ base: '16', md: '16' }}
					fontFamily='sugo pro display'
					textAlign='center'
					zIndex={1}
				>
					¿Qué ofrecemos?
				</Heading>
				<Text
					color={Colors.third}
					fontWeight='100'
					fontSize={{
						base: '16px',
						sm: '18px',
						md: '20px',
						lg: '24px',
					}}
					fontFamily='montserrat'
					textAlign='center'
					mb={{ base: '16', md: '16' }}
					w={{ base: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' }}
					lineHeight='1.5'
					zIndex={1}
				>
					Ofrecemos talleres diseñados para transformar conﬂictos en
					oportunidades, promover una cultura de paz y fortalecer relaciones a
					través de habilidades como empatía, respeto y comunicación efectiva.
					Ideales para entornos laborales, educativos y comunitarios, nuestros
					programas abarcan resolución de conﬂictos, empoderando a personas y
					equipos para construir un futuro más justo y colaborativo.
				</Text>

				<Heading
					as='h1'
					color={Colors.third}
					fontSize={{
						base: '32px',
						sm: '36px',
						md: '40px',
					}}
					fontWeight='200'
					fontFamily='sugo pro display'
					textAlign='center'
					zIndex={1}
				>
					¿Por qué elegir nuestros talleres?
				</Heading>
				<Box
					as='ul'
					listStyle='outside'
					p={{ base: '8', sm: '12', md: '16' }}
					minW={{ base: '100%', sm: '80%', md: '100%' }}
					display='flex'
					flexDirection='column'
					alignItems='center'
				>
					{[
						'Somos expertos apasionados, con experiencia real en Derechos Humanos y construcción de paz, así como en intervenciones grupales que buscamos comportar nuestro conocimiento desde el corazón.',
						'Nuestras sesiones están diseñadas desde lo humano, combinando prácticas vivenciales que conectan profundamente contigo y adaptándose a las necesidades únicas de cada persona y comunidad, porque entendemos que cada historia y contexto es especial.',
						'Nos enfocamos en generar cambios reales y duraderos que puedas aplicar en tu vida diaria, en tu entorno y en tu comunidad.',
					].map((text, index) => (
						<Heading
							as='li'
							key={index}
							color={Colors.third}
							fontWeight='100'
							fontSize={{
								base: '16px',
								sm: '18px',
								md: '20px',
								lg: '24px',
							}}
							fontFamily='montserrat'
							lineHeight='1.5'
							textAlign='center'
						>
							{text}
						</Heading>
					))}
				</Box>
			</Box>

			<Box
				id='contact'
				as='article'
				w='full'
				p={{ base: '4', sm: '6', md: '12', lg: '24' }}
				display='flex'
				flexDirection={{ base: 'column', lg: 'row' }}
				maxW='1400px'
				mx='auto'
				gap={{ base: 8, md: 12 }}
				minH='500px'
			>
				<Box
					w={{ base: '100%', lg: '50%' }}
					p={{ base: '4', sm: '6', md: '8', lg: '12' }}
					display='flex'
					flexDirection='column'
					alignItems='center'
					justifyContent='space-between'
					gap={{ base: 6, md: 8 }}
				>
					<Heading
						as='h4'
						fontSize={{ base: '28px', sm: '32px', md: '40px', lg: '45px' }}
						fontWeight='400'
						color={Colors.secondary}
						fontFamily='sugo pro display'
						textAlign='center'
					>
						Contáctanos
					</Heading>

					<Box
						display='flex'
						flexDirection='column'
						alignItems='center'
						gap={{ base: 2, md: 4 }}
					>
						{['310 664 6624', '@somoscauce', 'somoscauces@gmail.com'].map(
							(text) => (
								<Heading
									key={text}
									as='h4'
									fontSize={{
										base: '18px',
										sm: '20px',
										md: '25px',
										lg: '30px',
									}}
									fontWeight='800'
									color={Colors.secondary}
									fontFamily='montserrat bold'
								>
									{text}
								</Heading>
							)
						)}
					</Box>

					<Box
						display='flex'
						justifyContent='center'
						alignItems='center'
						gap={{ base: '6', md: '8' }}
						w='full'
						maxW='300px'
					>
						{[
							{
								icon: whatsappIcon2,
								href: 'https://wa.me/573153416995?text=Hola,%20quiero%20agendar%20una%20cita.',
							},
							{
								icon: InstagramIcon,
								href: 'https://www.instagram.com/somoscauce/',
							},
							{ icon: mailIcon, href: 'mailto:somoscauces@gmail.com' },
						].map((item, index) => (
							<a key={index} href={item.href}>
								<Image
									src={item.icon}
									objectFit='contain'
									w={{ base: '50px', md: '50px' }}
									h={{ base: '50px', md: '50px' }}
								/>
							</a>
						))}
					</Box>
				</Box>

				<Box
					display={{ base: 'none', md: 'block' }}
					w='4px'
					bg={Colors.secondary}
					opacity='0.5'
					h='auto'
					alignSelf='stretch'
				></Box>

				<Box
					w={{ base: '100%', lg: '50%' }}
					p={{ base: '4', sm: '6', md: '8', lg: '22' }}
					borderTop={{ base: '3px solid', lg: 'none' }}
					borderColor='rgba(128, 128, 128, 0.1)'
					display='flex'
					flexDirection='column'
					gap={{ base: 8, md: 12 }}
				>
					{[
						{
							icon: inPersonIcon,
							title: 'Presencial',
							subtitle: 'En la ciudad de Pereira',
						},
						{
							icon: virtualIcon,
							title: 'Virtual',
							subtitle:
								'Desde la comodidad de tu casa y desde cualquier parte del mundo',
						},
					].map((item, index) => (
						<Box
							key={index}
							display='flex'
							flexDirection={{ base: 'column', md: 'row' }}
							alignItems={{ base: 'center', md: 'flex-start' }}
							gap={{ base: 4, md: 6 }}
						>
							<Image
								src={item.icon}
								objectFit='contain'
								w={{ base: '100px', md: '50px', lg: '110px' }}
							/>
							<Box
								display='flex'
								flexDirection='column'
								alignItems={{ base: 'center', md: 'start' }}
								gap={2}
								justifyContent='center'
							>
								<Heading
									as='h2'
									fontSize={{
										base: '35px',
										md: '40px',
										lg: '45px',
									}}
									fontWeight='400'
									color={Colors.secondary}
									fontFamily='sugo pro display'
								>
									{item.title}
								</Heading>
								<Text
									fontSize={{
										base: '20px',
										md: '24px',
									}}
									wordBreak={{ base: 'break-word', md: 'normal' }}
									whiteSpace={{ base: 'normal' }}
									textAlign={{ base: 'center', md: 'start' }}
									fontWeight='100'
									color={Colors.secondary}
									fontFamily='montserrat bold'
								>
									{item.subtitle}
								</Text>
							</Box>
						</Box>
					))}
				</Box>
			</Box>

			<Heading
				as='h1'
				color={Colors.secondary}
				fontSize={{
					base: '20px',
					md: '30px',
				}}
				ml={{ base: '4', md: '0' }}
				mr={{ base: '4', md: '0' }}
				fontWeight='100'
				mb={{ base: '8', sm: '12', md: '16', lg: '20', xl: '24' }}
				fontFamily='montserrat'
				textAlign='center'
				zIndex={1}
			>
				Síguenos en todas nuestras redes y pide tu cita.
			</Heading>

			<a href='https://wa.me/573153416995?text=Hola,%20quiero%20agendar%20una%20cita.'>
				<Box
					w='full'
					display='flex'
					justifyContent='center'
					mb={{ base: '8', sm: '12', md: '16', lg: '20', xl: '24' }}
				>
					<Button
						size='lg'
						bg={Colors.secondary}
						color={Colors.third}
						px={{ base: '8', md: '12' }}
						py={{ base: '6', md: '8' }}
						fontSize={{ base: '18px', md: '20px' }}
						fontFamily='montserrat'
						fontWeight='500'
						transform='scale(1)'
						transition='all 0.3s ease'
						_hover={{
							transform: 'scale(1.05)',
							bg: Colors.secondary,
							boxShadow: 'xl',
						}}
						_active={{
							transform: 'scale(0.95)',
						}}
					>
						Agenda tu cita ahora
					</Button>
				</Box>
			</a>
		</MainLayout>
	)
}

export default Home
