import { Container, Heading, VStack,Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";

const ForgetPassword = () => {
    const[email,setEmail]=useState("");
    return <Container paddingY={"16"} h={"90vh"} >
        <form>

            <Heading my={"16"} textTransform={"uppercase"} textAlign={["center","left"]} children="Forget Password?" />

            <VStack spacing={"8"}>
            <Input required id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="abc@gmail.com"
                        type="email"
                        focusBorderColor="yellow.500" />
                        <Button type="submit" w={"full"} colorScheme="yellow">Send Reset Link</Button>
            </VStack>
        </form>
    </Container>

}

export default ForgetPassword;