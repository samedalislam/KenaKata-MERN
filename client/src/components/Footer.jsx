import { GitHub, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>KenaKata.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, omnis eius. Vero possimus assumenda ad, eum similique
                    consequuntur, commodi reiciendis, deserunt necessitatibus
                    sapiente dolor animi ut dicta. Perferendis, sequi voluptate
                    fugiat nesciunt aliquam deleniti eius asperiores sed in,
                    cumque optio?
                </Desc>
                <SocialContainer>
                    <SocialIcon color="55acee">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="3b5999">
                        <LinkedIn />
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="0D1117">
                        <GitHub />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>home</ListItem>
                    <ListItem>cart</ListItem>
                    <ListItem>man fashion</ListItem>
                    <ListItem>woman fashion</ListItem>
                    <ListItem>accessories</ListItem>
                    <ListItem>my account</ListItem>
                    <ListItem>order tracking</ListItem>
                    <ListItem>wishlist</ListItem>
                    <ListItem>terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room /> R541, Sirajganj, Bangladesh</ContactItem>
                <ContactItem><Phone /> (+880) 1739-121391</ContactItem>
                <ContactItem><MailOutline /> samedalislam@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};
export default Footer;

// STYLED

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0;
`;
const SocialContainer = styled.div`
    display: flex;
    gap: 20px;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    text-transform: capitalize;
`;


const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#f9f4f4"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
`
const Payment = styled.img`
    width: 50%;
`