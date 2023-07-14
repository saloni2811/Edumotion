import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import introVideo from "../../assets/videos/intro.mp4"


const CoursePage = () => {

    const lectureTitle = "LectureTitle";
    const [lectureNumber,setLectureNumber] = useState(0);
    const lectures = [
        {
            _id: "sadsadsad",
            title: "Sample",
            description: "saadhbhdjsbdkjcll.k",
            video: {
                url: 'sasad'
            }
        },
        {
            _id: "sadsadsad2",
            title: "Sample2",
            description: "saadhbhdjsbdkjcll.k",
            video: {
                url: 'sasad'
            }
        },
        {
            _id: "sadsadsad3",
            title: "Sample3",
            description: "saadhbhdjsbdkjcll.k",
            video: {
                url: 'sasad'
            }
        },
    ]

    return <Grid minH={"90vh"} templateColumns={["1fr", "3fr 1fr"]}>
        <Box>
            <video
                width={"100%"}
                controls
                controlsList="nodownload  noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
                src={introVideo}>

            </video>

            <Heading m={"4"} children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}></Heading>
            <Heading m={"4"} children="Description"></Heading>
            <Text m={"4"} children={lectures[lectureNumber].description} />
        </Box>

        <VStack>
            {
                lectures.map((element, index) => (
                    <button 
                    onClick={()=>setLectureNumber(index)}
                    key={element._id}
                        style={{
                            width: "100%",
                            padding: "1rem",
                            textAlign: "center",
                            margin: 0,
                            borderBottom: "1px solid rgba(0,0,0,0.2"
                        }}

                    >
                        <Text noOfLines={1}>
                            #{index + 1} {element.title}
                        </Text>
                    </button>
                ))
            }
        </VStack>
    </Grid>
}

export default CoursePage;