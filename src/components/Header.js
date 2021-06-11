import React from 'react'
import {Box,Text,Link,Spacer,LinkBox,Heading,LinkOverlay,Stack,IconButton,Flex,useColorMode, Image} from '@chakra-ui/react'

import {IoCloseCircleOutline} from 'react-icons/io5'
import {HiMenu} from 'react-icons/hi'
import {FaSun,FaMoon} from 'react-icons/fa'
import Astro from '../components/astro.png'

const Navbar = ({props,colorMode,toggleColorMode}) => {
    const [isOpen, setIsOpen] = React.useState(false)
    
 
    const toggle = () => setIsOpen(!isOpen)
   
    return(
    <NavBarContainer {...props} color={colorMode === "light" ? 'black'  : 'light'} style={{position:"sticky",zIndex:"333",top:"0",height:'80px'}}>
        <Logo  w="100px"
        color={["white", "white", "primary.500", "primary.500"]}/>
      <MenuToggle toggle={toggle} isOpen={isOpen}/>
      <MenuLinks isOpen={isOpen} colorMode={colorMode} toggleColorMode={toggleColorMode} />
    </NavBarContainer>
    )
}

const MenuLinks = ({isOpen,colorMode,toggleColorMode}) =>{
    return(
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
    <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
        
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/how">How It Works</MenuItem>
        <LinkBox >
            <Heading  mx="50px" size="md" my="2">
              <LinkOverlay  href="https://www.google.com/">
                Google
              </LinkOverlay>
           </Heading>
           
        </LinkBox>
        <IconButton icon={colorMode === "light" ? <FaSun />  : <FaMoon />} onClick={toggleColorMode} alignSelf="flex-start" isRound="true">
        </IconButton>
      </Stack>
    </Box>
    )
}


const MenuToggle = ({toggle,isOpen}) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
          {isOpen ? <IoCloseCircleOutline /> : <HiMenu />}
        </Box>
      )
}


const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
        <Link href={to}>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </Link>
    )
}


const Logo = ({props}) => {
    return (
    <LinkBox {...props} >
      <LinkOverlay  href='https://github.com/Astrohelo' >
        <Image
          boxSize="40px"
          borderRadius="full"
          src={Astro}
          alt="Astro"
         
        />
        </LinkOverlay>
        
    </LinkBox>
  )
}

const NavBarContainer = ({ children, ...props }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
        color={["white", "white", "primary.700", "primary.700"]}
        {...props}
      >
        {children}
      </Flex>
    );
  };

export default Navbar
