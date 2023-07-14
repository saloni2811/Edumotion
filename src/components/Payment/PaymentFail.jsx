import { Button, Container, VStack,Heading } from "@chakra-ui/react";
import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import {Link} from 'react-router-dom';

const PaymentFail =()=>{
    return <Container h={"90vh"} p={"16"} >
    <VStack justifyContent={"center"} h={"full"} spacing={"4"}>
    <Heading my={"8"} textAlign={"center"} textTransform={"uppercase"}>Payment Failed!</Heading>
    <RiErrorWarningFill size={"5rem"} />

    <Link to="/subscribe">
        <Button bg={"yellow.400"} variant={"ghost"} my={"6"}>Try Again</Button>
    </Link>

    </VStack>
</Container>
}

export default PaymentFail;