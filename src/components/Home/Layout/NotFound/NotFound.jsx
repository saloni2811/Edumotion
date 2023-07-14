import { Button, Container, VStack,Heading } from "@chakra-ui/react";
import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import {Link} from 'react-router-dom';

const NotFound =()=>{
    return <Container h={"90vh"} p={"16"} >
    <VStack justifyContent={"center"} h={"full"} spacing={"4"}>
    <Heading my={"8"} textAlign={"center"}>Page not Found!</Heading>
    <RiErrorWarningFill size={"5rem"} />

    <Link to="/">
        <Button bg={"yellow.400"} variant={"ghost"}>Go to home</Button>
    </Link>

    </VStack>
</Container>
}

export default NotFound;