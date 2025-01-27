import MainLayout from '../components/layout/main.layout'
import { Box, Heading, Image, Span, Text } from '@chakra-ui/react'
import { Colors } from '../utils/colors'
import bg1 from '../assets/images/family-therapy-psychologist-office.jpg'
import valenFace from '../assets/images/Assets-15.jpg'
import andresFace from '../assets/images/Assets-17.jpg'
import individualTerapy from '../assets/images/Assets-02.jpg'
import coupleTerapy from '../assets/images/Assets-03.jpg'
import sexualTerapy from '../assets/images/Assets-04.jpg'
import familyTerapy from '../assets/images/Assets-02.jpg'
import handTop from '../assets/images/Assets-07.jpg'
import handBottom from '../assets/images/Assets-06.jpg'
import keyBg from '../assets/images/Assets-08.png'
import inPersonIcon from '../assets/images/Assets-10.jpg'
import virtualIcon from '../assets/images/Assets-11.jpg'
import InstagramIcon from '../assets/images/instagram_icon.png'
import mailIcon from '../assets/images/mail_icon.png'
import whatsappIcon from '../assets/images/whatsapp_icon.png'
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
				p={{ base: '8', sm: '12', md: '16', lg: '24', xl: '32' }}
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
						lg: '50px',
						xl: '60px',
					}}
					fontWeight='200'
					mb={{ base: '12', sm: '16', md: '20', lg: '28', xl: '32' }}
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
						md: '20px',
						lg: '25px',
						xl: '28px',
					}}
					fontFamily='montserrat'
					textAlign='center'
					w={{ base: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' }}
					lineHeight='1.5'
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
			</Box>

			<Box
				w='full'
				h='auto'
				pt='28'
				pb='28'
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
						w={{ base: '90%', sm: '70%', md: '50%', lg: '25%' }}
						bg='white'
						p={{ base: '8', md: '12' }}
						display='flex'
						flexDirection='column'
						alignItems='center'
						mr={{ base: '0', lg: '8' }}
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
							mt='8'
						>
							Valentina Holguín
						</Heading>

						<Heading
							as='h1'
							fontSize={{ base: '18px', md: '24px' }}
							fontFamily='montserrat'
							textAlign='center'
							fontWeight='800'
							color={Colors.secondary}
							mb='8'
						>
							18 añitos aparenta
						</Heading>

						<Text
							color={Colors.secondary}
							fontWeight='100'
							fontSize={{ base: '16px', md: '22px' }}
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
							fontSize={{ base: '16px', md: '22px' }}
							fontFamily='montserrat'
							textAlign='center'
						>
							Te espero para co-crear las nuevas narrativas y futuros preferidos
							de tu vida.
						</Text>
					</Box>

					<Box
						w={{ base: '90%', sm: '70%', md: '50%', lg: '25%' }}
						bg='white'
						p={{ base: '8', md: '12' }}
						display='flex'
						flexDirection='column'
						alignItems='center'
						ml={{ base: '0', lg: '8' }}
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
							mt='8'
						>
							Julián Alberto Mejía
						</Heading>

						<Heading
							as='h1'
							fontSize={{ base: '18px', md: '24px' }}
							fontFamily='montserrat'
							textAlign='center'
							fontWeight='800'
							color={Colors.secondary}
							mb='8'
						>
							30 años
						</Heading>

						<Text
							color={Colors.secondary}
							fontWeight='100'
							fontSize={{ base: '16px', md: '22px' }}
							fontFamily='montserrat'
							textAlign='center'
							mb='8'
						>
							Soy Julián Mejía abogado y defensor de Derechos Humanos,
							comprometido con la promoción de justicia social y la protección
							de los derechos fundamentales. Mi enfoque está en impulsar un
							cambio positivo a través del conocimiento legal, la ética y el
							trabajo colaborativo.
						</Text>

						<Heading
							as='h1'
							fontSize={{ base: '18px', md: '24px' }}
							fontFamily='montserrat'
							textAlign='center'
							fontWeight='800'
							color={Colors.secondary}
							mb='8'
						>
							¿Qué ofrezco?
						</Heading>

						<Box as='ul' listStyle='outside'>
							<Heading
								as='li'
								color={Colors.secondary}
								fontWeight='100'
								fontSize={{ base: '16px', md: '22px' }}
								fontFamily='montserrat'
							>
								Experiencia en investigación y comunicación efectiva.
							</Heading>
							<Heading
								as='li'
								color={Colors.secondary}
								fontWeight='100'
								fontSize={{ base: '16px', md: '22px' }}
								fontFamily='montserrat'
							>
								Habilidades de liderazgo y coordinación en equipos
								multidisciplinarios.
							</Heading>
							<Heading
								as='li'
								color={Colors.secondary}
								fontWeight='100'
								fontSize={{ base: '16px', md: '22px' }}
								fontFamily='montserrat'
							>
								Experiencia en relaciones públicas para proyectos con entidades
								gubernamentales y no gubernamentales.
							</Heading>
							<Heading
								as='li'
								color={Colors.secondary}
								fontWeight='100'
								fontSize={{ base: '16px', md: '22px' }}
								fontFamily='montserrat'
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
				p={{ base: '4', sm: '8', md: '24' }}
				display='flex'
				flexDirection='column'
				alignItems='center'
			>
				<Heading
					as='h1'
					color={Colors.secondary}
					fontSize={{ base: '24px', sm: '30px', md: '50px' }}
					fontWeight='200'
					mb={{ base: '16', md: '28' }}
					fontFamily='sugo pro display'
					textAlign='center'
				>
					Nuestros Servicios
				</Heading>

				<Box
					w='full'
					display='flex'
					flexWrap='wrap'
					justifyContent='center'
					alignItems='center'
					gap={{ base: '4', md: '6' }}
				>
					<Image
						src={individualTerapy}
						objectFit='contain'
						w='100%'
						h={{ base: '200px', md: '300px' }}
						flexBasis={{ base: '100%', sm: '45%', md: '30%' }}
						minW='0'
					/>
					<Box
						display='flex'
						flexDirection='column'
						alignItems='center'
						flexBasis={{ base: '100%', sm: '45%', md: '30%' }}
						gap='3'
					>
						<Image
							src={coupleTerapy}
							objectFit='contain'
							w='100%'
							h={{ base: '200px', md: '300px' }}
							minW='0'
						/>
						<Image
							src={sexualTerapy}
							objectFit='contain'
							w='100%'
							h={{ base: '200px', md: '300px' }}
							minW='0'
						/>
					</Box>
					<Image
						src={familyTerapy}
						objectFit='contain'
						w='100%'
						h={{ base: '200px', md: '300px' }}
						flexBasis={{ base: '100%', sm: '45%', md: '30%' }}
						minW='0'
					/>
				</Box>
			</Box>

			<Box
				as='article'
				w='full'
				p={{ base: '4', sm: '8', md: '16', lg: '24' }}
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
						lg: '50px',
						xl: '60px',
					}}
					fontWeight='200'
					mb={{ base: '8', sm: '12', md: '16', lg: '24', xl: '32' }}
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
						xl: '25px',
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
					fontSize={{ base: '32px', sm: '36px', md: '60px' }}
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
					<Box w={{ base: '100%', md: '50%' }} p={{ base: '4', sm: '8' }}>
						<Heading
							as='h3'
							color={Colors.secondary}
							fontSize={{ base: '24px', sm: '32px', md: '50px' }}
							fontWeight='200'
							fontFamily='sugo pro display'
							textAlign='center'
							lineHeight={{ base: '1.1', sm: '1.2', md: '1.3' }}
							px={{ base: '1', sm: '2' }}
							display='flex'
							flexWrap='wrap'
							justifyContent='center'
							alignItems='center'
							gap={{ base: '0.5', sm: '1' }}
							mb={{ base: '2', sm: '3', md: '4' }}
						>
							<Box as='span' display='inline-flex' alignItems='center'>
								Para adolescentes y adultos
							</Box>
						</Heading>

						<Box
							as='ul'
							listStyle='outside'
							p={{ base: '8', sm: '12', md: '16' }}
							minW={{ base: '100%', sm: '80%', md: '100%' }}
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
								fontSize={{ base: '24px', sm: '32px', md: '50px' }}
								fontWeight='200'
								fontFamily='sugo pro display'
								textAlign='center'
								lineHeight={{ base: '1.1', sm: '1.2', md: '1.3' }}
								px={{ base: '1', sm: '2' }}
								display='flex'
								flexWrap='wrap'
								justifyContent='center'
								alignItems='center'
								gap={{ base: '0.5', sm: '1' }}
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
							p={{ base: '8', sm: '12', md: '16' }}
							minW={{ base: '100%', sm: '80%', md: '100%' }}
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
									fontSize={{ base: '18px', md: '22px' }}
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
				bgSize='cover'
				bgPosition='center'
				bgRepeat='no-repeat'
				backgroundAttachment='fixed'
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
					as='h1'
					color='white'
					fontSize={{
						base: '32px',
						sm: '36px',
						md: '40px',
						lg: '50px',
						xl: '60px',
					}}
					fontWeight='200'
					mb={{ base: '12', sm: '16', md: '20', lg: '28', xl: '32' }}
					fontFamily='sugo pro display'
					textAlign='center'
					zIndex={1}
				>
					Terapia individual
				</Heading>
				<Text
					color='white'
					fontWeight='100'
					fontSize={{
						base: '16px',
						sm: '18px',
						md: '20px',
						lg: '25px',
						xl: '28px',
					}}
					fontFamily='montserrat'
					textAlign='center'
					w={{ base: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' }}
					lineHeight='1.5'
					zIndex={1}
				>
					Apoyo profesional para mejorar en el desarrollo personal, un espacio
					seguro para expresar emociones y mejorar la calidad de vida.
				</Text>

				<Heading
					as='h1'
					color='white'
					fontSize={{
						base: '32px',
						sm: '36px',
						md: '40px',
						lg: '50px',
						xl: '60px',
					}}
					fontWeight='200'
					mb={{ base: '12', sm: '16', md: '20', lg: '28', xl: '32' }}
					mt={{ base: '12', sm: '16', md: '20', lg: '28', xl: '32' }}
					fontFamily='sugo pro display'
					textAlign='center'
					zIndex={1}
				>
					Terapia de pareja
				</Heading>
				<Text
					color='white'
					fontWeight='100'
					fontSize={{
						base: '16px',
						sm: '18px',
						md: '20px',
						lg: '25px',
						xl: '28px',
					}}
					fontFamily='montserrat'
					textAlign='center'
					w={{ base: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' }}
					lineHeight='1.5'
					zIndex={1}
				>
					Apoyo profesional para mejorar en el desarrollo personal, un espacio
					seguro para expresar emociones y mejorar la calidad de vida.
				</Text>

				<Heading
					as='h1'
					color='white'
					fontSize={{
						base: '32px',
						sm: '36px',
						md: '40px',
						lg: '50px',
						xl: '60px',
					}}
					fontWeight='200'
					mb={{ base: '12', sm: '16', md: '20', lg: '28', xl: '32' }}
					mt={{ base: '12', sm: '16', md: '20', lg: '28', xl: '32' }}
					fontFamily='sugo pro display'
					textAlign='center'
					zIndex={1}
				>
					Terapia familiar
				</Heading>
				<Text
					color='white'
					fontWeight='100'
					fontSize={{
						base: '16px',
						sm: '18px',
						md: '20px',
						lg: '25px',
						xl: '28px',
					}}
					fontFamily='montserrat'
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
					as='h1'
					color='white'
					fontSize={{
						base: '32px',
						sm: '36px',
						md: '40px',
						lg: '50px',
						xl: '60px',
					}}
					fontWeight='200'
					mb={{ base: '12', sm: '16', md: '20', lg: '28', xl: '32' }}
					mt={{ base: '12', sm: '16', md: '20', lg: '28', xl: '32' }}
					fontFamily='sugo pro display'
					textAlign='center'
					zIndex={1}
				>
					Terapia sexual
				</Heading>
				<Text
					color='white'
					fontWeight='100'
					fontSize={{
						base: '16px',
						sm: '18px',
						md: '20px',
						lg: '25px',
						xl: '28px',
					}}
					fontFamily='montserrat'
					textAlign='center'
					w={{ base: '90%', sm: '85%', md: '80%', lg: '75%', xl: '70%' }}
					lineHeight='1.5'
					zIndex={1}
				>
					Tener una consulta puede ayudarte a resolver distintos problemas e
					inquietudes en el ámbito de la sexualidad, además de ayudarte a
					profundizar el conocimiento personal, aumentar tus niveles de
					autoestima y a mejorar el vínculo con los demás.
				</Text>

				<Heading
					as='h1'
					color='white'
					fontSize={{
						base: '32px',
						sm: '36px',
						md: '40px',
						lg: '50px',
						xl: '60px',
					}}
					fontWeight='200'
					mb={{ base: '12', sm: '16', md: '20' }}
					mt={{ base: '12', sm: '16', md: '20', lg: '28', xl: '32' }}
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
							color='white'
							fontWeight='100'
							fontSize={{ base: '18px', md: '22px', lg: '28px' }}
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
				bgPosition='center'
				bgRepeat='no-repeat'
				backgroundAttachment={{ base: 'scroll', sm: 'fixed' }}
				position='relative'
				zIndex='0'
				overflow='hidden'
			>
				<Box
					position='absolute'
					top='50%'
					left='50%'
					transform='translate(-50%, -50%)'
					bg='white'
					opacity='0.9'
					p={{ base: '3', sm: '4', md: '6' }}
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
							base: '18px',
							sm: '28px',
							md: '36px',
							lg: '50px',
						}}
						fontWeight='700'
						textTransform='uppercase'
						color={Colors.secondary}
						fontFamily='Montserrat, sans-serif'
						textAlign='center'
						p='0'
						lineHeight='1.2'
						letterSpacing={{ base: 'normal', sm: 'wide' }}
						maxW='100%'
						mx='auto'
					>
						Terapia Centrada en Soluciones
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
					color='white'
					fontSize={{
						base: '32px',
						sm: '36px',
						md: '40px',
						lg: '50px',
						xl: '60px',
					}}
					fontWeight='200'
					mb={{ base: '12', sm: '16', md: '20', lg: '28', xl: '32' }}
					fontFamily='sugo pro display'
					textAlign='center'
					zIndex={1}
				>
					Talleres de Construcción de Paz y Educación para la Paz
				</Heading>
				<Text
					color='white'
					fontWeight='100'
					fontSize={{
						base: '16px',
						sm: '18px',
						md: '20px',
						lg: '25px',
						xl: '28px',
					}}
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
					color='white'
					fontSize={{
						base: '32px',
						sm: '36px',
						md: '40px',
					}}
					fontWeight='200'
					mb={{ base: '12', sm: '16', md: '20', lg: '28', xl: '32' }}
					mt={{ base: '12', sm: '16', md: '20', lg: '28', xl: '32' }}
					fontFamily='sugo pro display'
					textAlign='center'
					zIndex={1}
				>
					¿Qué ofrecemos?
				</Heading>
				<Text
					color='white'
					fontWeight='100'
					fontSize={{
						base: '16px',
						sm: '18px',
						md: '20px',
						lg: '25px',
						xl: '28px',
					}}
					fontFamily='montserrat'
					textAlign='center'
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
					color='white'
					fontSize={{
						base: '32px',
						sm: '36px',
						md: '40px',
					}}
					fontWeight='200'
					mb={{ base: '12', sm: '16' }}
					mt={{ base: '12', sm: '16', md: '20', lg: '28', xl: '32' }}
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
							color='white'
							fontWeight='100'
							fontSize={{ base: '18px', md: '22px', lg: '28px' }}
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
						fontSize={{ base: '28px', sm: '32px', md: '40px', lg: '50px' }}
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
									fontFamily='poppins'
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
							{ icon: whatsappIcon, href: '' },
							{ icon: InstagramIcon, href: '' },
							{ icon: mailIcon, href: '' },
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
					w={{ base: '100%', lg: '50%' }}
					p={{ base: '4', sm: '6', md: '8', lg: '12' }}
					borderLeft={{ base: 'none', lg: '0.5px solid' }}
					borderTop={{ base: '0.5px solid', lg: 'none' }}
					borderColor={Colors.secondary}
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
							alignItems='flex-start'
							gap={{ base: 4, md: 6 }}
						>
							<Image
								src={item.icon}
								objectFit='contain'
								w={{ base: '40px', sm: '50px', md: '110px' }}
							/>
							<Box
								display='flex'
								flexDirection='column'
								gap={2}
								justifyContent='center'
							>
								<Heading
									as='h4'
									fontSize={{
										base: '28px',
										sm: '32px',
										md: '40px',
										lg: '50px',
									}}
									fontWeight='400'
									color={Colors.secondary}
									fontFamily='sugo pro display'
								>
									{item.title}
								</Heading>
								<Heading
									as='h4'
									fontSize={{
										base: '22px',
										sm: '24px',
										md: '32px',
										lg: '40px',
									}}
									fontWeight='100'
									color={Colors.secondary}
									fontFamily='sugo pro display'
								>
									{item.subtitle}
								</Heading>
							</Box>
						</Box>
					))}
				</Box>
			</Box>

			<Heading
				as='h1'
				color={Colors.secondary}
				fontSize={{
					base: '28px',
					sm: '32px',
					md: '36px',
				}}
				fontWeight='100'
				mb={{ base: '8', sm: '12', md: '16', lg: '20', xl: '24' }}
				fontFamily='montserrat'
				textAlign='center'
				zIndex={1}
			>
				Síguenos en todas nuestras redes
			</Heading>
		</MainLayout>
	)
}

export default Home
