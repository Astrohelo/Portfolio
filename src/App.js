import logo from './logo.svg';
import {useColorMode, Button, Flex,Spacer,IconButton, Box ,Text,LinkBox,Stack, withDefaultSize, Image,Grid, GridItem, useColorModeValue} from "@chakra-ui/react";
import './App.css';
import Header from './components/Header'
import Hidden from '@material-ui/core/Hidden';
import { Container, Row, Col } from 'react-grid-system';
import ReactLogo from './portfoliop.svg';
import Portfolio2 from './portfolio2.svg';
import Linkedin from './linkedin.svg';
import Mail from './mail.svg'
import Dev from './dev.svg';
import Gitpng from './git.png';
import Typical from 'react-typical'
import FadeIn from 'react-fade-in';
import * as Scroll from 'react-scroll';
import { Link,  Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
 


  return (
    
    <div className="window" >
          <Header colorMode={colorMode} toggleColorMode={toggleColorMode} />
          
          <section >
          <Stack
            justify='center'
            align='center'
            height={window.innerHeight}
            spacing={8}
            pt={[3,3,0,0]}
            direction={['column','column','row','row']}
            
            backgroundColor={colorMode === "light" ? '#FDFAF6'  : ''}
            style={{scrollSnapAlign:'start' , overflow:'hidden'}}
            >
              <Image src={ReactLogo} alt="React Logo" w={['100%','60%','80%','60%']} left={['0px','0px','70px','80px']}  ></Image>
              <FadeIn transitionDuration="1000">
              <Grid templateColumns="repeat(5, 1fr)"  gap={4} position="relative" >
              <GridItem colStart={1} colEnd={6} h="10"  zIndex="111"  position="absolute"  top={['-330px','-20px','-100px','-180px']} right={['-450px','0px','-100px','320px']} >
              <Text fontSize={["2xl","5xl","3xl","5xl"]} color="#8FD6E1" width="600px" fontFamily="fantasy">
                Welcome to my website!
              </Text>
                </GridItem>
                <GridItem colStart={3} colEnd={6} h="10"  zIndex="111"  position="absolute"  bottom={['-30px','-20px','-150px','-240px']} left={['-50px','-20px','-340px','-520px']} >
                  <Text fontSize="xl" color="#8FD6E1" width="200px">
                  I'm a{' '}
                  <Typical
                    steps={['Programmer', 1000, 'Student', 1000,]}
                    loop={Infinity}
                    wrapper="b"
                  />
              </Text>
                </GridItem>
              </Grid>
              </FadeIn>
              
          </Stack>
          </section>
          <section>
          <Stack
            justify='center'
            align='center'
            height={window.innerHeight}
            spacing={8}
            pt={[3,3,0,0]}
            backgroundColor={colorMode === "light" ? '#FAF1E6'  : '#30475E'}
            style={{scrollSnapAlign:'start' , overflow:'hidden'}}
          >
            <Row container spacing={2} >
            <Text fontSize='5xl' mb={100}>
                    About me
                  </Text>
                </Row>
            <Row container spacing={2}>
    

            <Grid item xs={12} md={8}>
              <FadeIn transitionDuration="3000" visible="true">
                
                  <Box  mx="5" maxWidth={400}   >
                  

                  <Text fontSize='1xl' fontWeight="semibold" >
                    My name is Axel Várai, I am 21 and currently studying at
                    Budapest University of Technology and Economics
                    Computer Science 
                  </Text>
                  <Text fontSize="1xl" mb={5} fontWeight="semibold"> (6th Semester) </Text>
                  <Text fontSize='1xl' mb={5} fontWeight="semibold">
                    I have multiple hobbies like video games, board games, photography etc.
                  </Text>
                  <Text fontSize='1xl' fontWeight="semibold" color="Blue">
                    I am OPEN to every opportunity.
                  </Text>
                 
                  </Box>
                
                </FadeIn>
                </Grid >
                <Grid item xs={12} md={4}>
                  <Image src={Portfolio2} alt="React Logo"  style={{
        maxHeight: 350,
      }} ></Image>
                  </Grid>
            </Row>
          </Stack>
          </section>
          <section id="work">
          <Stack
            justify='center'
            align='center'
            height={window.innerHeight}
            spacing={8}
            pt={[3,3,0,0]}
            backgroundColor={colorMode === "light" ? '#FDFAF6'  : ''}
            style={{scrollSnapAlign:'start', overflow:'hidden'}}
          >
            <Row container spacing={2} >
            <Text fontSize='5xl' mb={100}>
                    Work experience
                  </Text>
                </Row>
        <Row container spacing={2} >
    
      
          <Grid item xs={12} md={8} >
          <FadeIn transitionDuration="3000" visible="true">
          
              <Box  mx="5" style={{
        maxWidth: 400,
      }} >
                
                <Box  fontSize="3xl" boxShadow="xl" borderWidth="2px"  backgroundColor={colorMode === "light" ? '#dbaa69'  : 'black'} fontWeight="semibold"    >
                  <Text>
                    2021.06 - 2021.09
                  </Text>
                  <Link href="https://www.4flow.com/" color="orange" >
                  4flow
                  </Link>
                  <Text >
                    -Software engineer/tester
                  </Text>
                </Box>

                <Box  fontSize="2xl" boxShadow="xl" borderWidth="2px"  backgroundColor={colorMode === "light" ? '#dbaa69'  : 'black'} fontWeight="semibold"    >
                <Stack direction="row" m="2px" >
                <span>
                    Hobby/University projects
                    </span>
                  <a href="https://github.com/Astrohelo">
                  <Image  boxSize="30px" src={Gitpng}  alt="gitpng" mt="4px" mb="4px"/>
                  </a>
                  </Stack>
                </Box>
                

                <Box  fontSize="3xl" borderWidth="2px" boxShadow="xl" backgroundColor={colorMode === "light" ? '#dbaa69'  : 'black'} fontWeight="semibold"     >
                <Stack direction="row" m="2px" >
                <span>
                  My socials
                </span>
                  
                  <a href="https://www.linkedin.com/in/axel-v%C3%A1rai-a8440b1b0/">
                  <Image  boxSize="30px" src={Linkedin}  alt="Linkedin"  mt="9px" mr="20px" w="60px"/>
                  </a>
                  <a href="mailto:axelvarai2k@gmail.com">
                  <Image  boxSize="30px" src={Mail}  alt="Email"  mt="9px" w="70px"/>
                  </a>
                  </Stack>
                </Box>
                
                
              </Box>
            
            </FadeIn>
            </Grid >
            <Grid item xs={12} md={4}>
              <Image  src={Dev} alt="React Logo" style={{
        maxHeight: 350,
      }} />
              </Grid>
            </Row>
          </Stack>
          </section>
    </div>
    
  );
}

export default App;