import { Container } from "./styled/container.styled"
import { StyledHeader,Nav,Logo,Image } from "./styled/header.styled"
import { Button } from "./styled/Button.styled"
import { Flex } from "./styled/Flex.styled"

export const Header = () => {
    return <StyledHeader>
        <Container>
            <Nav>
                <Logo src="./images/logo.svg"></Logo>
                <Button>Try it Free!</Button>
            </Nav>

            <Flex>
                <div>
                    <h1>Build the community your fans will love</h1>
                    <p>Huddle re-imagines the way we build communities. You have a voice, but so does 
  your audience. Create connections with your users as you engage in genuine discussion. </p>
  <Button bg='#ff0099' color='#fff'>Get started for free.</Button>
                </div>
                <Image src='./images/illustration-mockups.svg' alt=""/>
            </Flex>
        </Container>
    </StyledHeader>
}