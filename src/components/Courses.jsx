import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Course = ({views,title,imgSrc,id,addToPlayListHandler,creator,description,lectureCount}) =>{
    return(
        <VStack className="course" alignItems={["center","flex-start"]}>
        <Image src={imgSrc} boxSize={"60"} objectFit={"contain"} />
        <Heading textAlign={["center","left"]} maxW={"200px"} fontFamily={"sans-serif"} size={"sm"} noOfLines={3} children={title} />
        <Text children={description} noOfLines={2} />
        <HStack>
        <Text children={"Creator"} fontWeight={"bold"} textTransform={"uppercase"} />
        <Text children={creator} fontFamily={"body"} textTransform={"uppercase"} />
       


        </HStack>

        <Heading textAlign={"center"} size="xs" children={`Lectures - ${lectureCount}`} />
        <Heading  size="xs" children={`Views - ${views}`} textTransform={"uppercase"} />

        <Stack direction={["column","row"]} alignItems={"center"}>
        <Link to={`/course/${id}`} >
            <Button colorScheme="yellow" >Watch Now</Button>
            <Button colorScheme="yellow" variant={"ghost"} onClick={() => addToPlayListHandler(id)}>Add to Playlist</Button>

        </Link>

        </Stack>

        </VStack>
        
    )
}

const Courses = () => {

    const[keyword,setKeyWord] = useState("");
    const[category,setCategory] = useState("");

    const addToPlayListHandler   = () => {
        console.log("Added to Playlist");
    }

    const categories=["Web Development","Artificial Intelligence","Data Structures and Algorithm" , "App Development","Data Science","Game Development"]
    return <Container minH={"95vh"} maxW={"container.lg"} paddingY={"8"}>
    <Heading children="All Courses" m={"8"}></Heading>
    <Input value={keyword} onChange={e => setKeyWord(e.target.value)} placeholder="Search a Course..." type="text" focusBorderColor="yellow.500" />

    <HStack overflowX={"auto"} paddingY={"8"} css={{"&::-webkit-scrollbar" :{
        display:"none"
    }}}>
        {categories.map((item,index) =>(
            <Button key ={index} onClick={()=>setCategory(item)} minW={"60"}>
            <Text children={item} />
        </Button>
        ))}
    </HStack>

    <Stack direction={["column","row"]} flexWrap={"wrap"} justifyContent={["flex-start","space-evenly"]} alignItems={["center","flex-start"]}>

    <Course

    title={"Sample"}
    description={"Sample"}
    views={"23"}
    imgSrc={'edumotion\src\assets\images\Photo.jpg'}
    id={"Sample"}
    creator={"Sample"}
    lectureCount={"2"}
    addToPlayListHandler={addToPlayListHandler}

     />

    </Stack>

    </Container>;
}

export default Courses;