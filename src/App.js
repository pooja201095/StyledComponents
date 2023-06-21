import { ThemeProvider } from "styled-components";
import Global from "./Components/styled/Global";
import { Container } from "./Components/styled/container.styled";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import content from './content';
import Card from "./Components/Card";

const theme = {
  colors: {
    header:'#ebfbff',
    body:'#fff',
    footer:'#003333'
  },
  mobile: '768px',
}

function App() {
  return ( 
    <ThemeProvider theme={theme}>
      <Global/>
    <Header></Header>
    <Container>
      {content.map((item,index)=><Card item={item} key={index}></Card>)}
    </Container>
    <Footer/>
    </ThemeProvider>
  );
}

export default App;
