import logo from './logo.svg';
import {useColorMode, Button, Flex,Spacer,IconButton, Box ,Text,LinkBox,Heading,LinkOverlay,Stack} from "@chakra-ui/react";
import './App.css';
import Header from './components/Header'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
 


  return (
    <div className="window" >
      <Header colorMode={colorMode} toggleColorMode={toggleColorMode} >
        
      </Header>
      
      <Stack
      borderWidth="1px"
        justify='center'
        spacing={8}
        pt={[3,3,0,0]}
        direction={['column','column','row','row']}
      >
        <Flex >
          <Box className="valami" mx="5"  >
          <Text>
            asdasdasdasdasddddddddddddddd
          </Text>
          <Text>
            asdasdasdasdasddddddddddddddd
          </Text>
          <Text>
            asdasdasdasdasddddddddddddddd
          </Text>
          </Box>
        </Flex>
        <Flex mx="5">
          <Box>
          <Text>
            asdasdasdasdasddddddddddddddd
          </Text>
          <Text>
            asdasdasdasdasddddddddddddddd
          </Text>
          <Text>
            asdasdasdasdasddddddddddddddd
          </Text>
          </Box>
        </Flex>
        <Flex mx="5">
          <Box>
          <Text>
            asdasdasdasdasddddddddddddddd
          </Text>
          <Text>
            asdasdasdasdasddddddddddddddd
          </Text>
          <Text>
            asdasdasdasdasddddddddddddddd
          </Text>
          </Box>
        </Flex>
        

        
      </Stack>
    </div>
  );
}

export default App;
