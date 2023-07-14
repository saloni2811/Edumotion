import { Avatar, Box, Button, Container, HStack, Heading, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import {Link} from 'react-router-dom';
import  introVideo from '../../assets/videos/intro.mp4'
import { RiSecurePaymentFill } from "react-icons/ri";
import termsAndCondition from '../../assets/docs/termsAndCondition'

const Founder =()=>(
    <Stack direction={["column","row"]} spacing={["4","16"]} padding={"8"}>
        <VStack>
            <Avatar src="" boxSize={["40","48"]}/>
            <Text opacity={"0.7"} children="Co-Founder"  />
        </VStack>
        <VStack justifyContent={"center"} alignItems={["center","flex-start"]}>
            <Heading size={["md","xl"]} children="Saloni Singh" />
            <Text 
            alignItems={["center","left"]}
            children='Hi! I am a Full Stack Developer and an enthusiast.
            Our mission is to provise quality content at reasonable price.' />
        </VStack>
    </Stack>
)

const VideoPlayer=()=>(
    <Box>
        <video autoplay muted
    controls controlsList="nodownload nofullscreen noremoteplayback" disablePictureInPicture disableRemotePlayback src={introVideo}>

    </video>
    </Box>
)

const TandC =({termAndConditions})=>(
    <Box>
        <Heading size={"md"} children=" Terms and Conditions" textAlign={["center","left"]} my={"4"}/>
        <Box h={"sm"} p={"4"} overflowY={"scroll"} >
            <Text letterSpacing={"widest"} fontFamily={"heading"} textAlign={["center","left"]}>
            {termAndConditions}

            </Text>
            <Heading m="4" size={"xs"} children="Refund only applicable for cancellation within 7 days." />
        </Box>
    </Box>
)

const About=()=>{
    return <Container maxW={"container.lg"} padding={"16"} boxShadow={"lg"}>
        <Heading children="About Us" textAlign={["center","left"]} />
        <Founder />
        <Stack m={"8"} direction={["column","row"]} alignItems={"center"}>
            <Text fontFamily={"cursive"} m={"8"} textAlign={["center","left"]}>
                We are a video streaming platform with some premium courses available only for premium users.
            </Text>
            <Link to="/subscribe" >
                <Button variant={"ghost"} colorScheme="yellow">Checkout our Plans</Button>
            </Link>
        </Stack>
        <VideoPlayer />

        <TandC termAndConditions={termsAndCondition} />

        <HStack my={"4"} padding={"4"}>
            <RiSecurePaymentFill />
            <Heading size={"xs"} fontFamily={"sans-serif"} textTransform={"uppercase"} children="Payment is secured by RazorPay" />
        </HStack>
        
    </Container>

}
export default About;