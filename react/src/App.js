import {getIntrospectionQuery,buildSchema, graphqlSync, GraphQLString, buildClientSchema, printSchema,buildASTSchema,parse } from "graphql"
import { useState, useEffect,memo } from 'react';
import { useToast,Flex, Container, Button, Input,Link, Select, Spacer, Heading } from '@chakra-ui/react'
import VoyagerComponent from "./Voyager"
import { localSchema } from './schema'
const axios = require('axios').default;


function App() {
  const toast = useToast()
  const [url, setUrl] = useState("")
  const [voyagerData, setVoyagerData] = useState({
    "url": "",
    "git": false,
    "local": true
  })
  const handleUseLocal =  (event) => {
    event.preventDefault()
    setVoyagerData({
      "url": "",
      "git": false,
      "local": true
    })
  }

  const handleUseGithub =  (event) => {
    event.preventDefault()
    setVoyagerData({
      "url": "",
      "git": true,
      "local": false
    })
  }

  const handleUseLink =  async (event) => {
    event.preventDefault()
    setVoyagerData({
      "url": url,
      "git": false,
      "local": false
    })
    
  }

  const handleGetClipboard = async (event) => {
    event.preventDefault()
    var schema
    try{
      if (voyagerData["git"]){
        const response = await axios.get('https://raw.githubusercontent.com/libertyequalitydata/cotton-data-model/main/cotton-data-model.graphql')
        console.log(response.data)
        schema = buildSchema(response.data);
            // return printIntrospectionSchema(graphqlSchemaObj)
        console.log("GITHUB OBJECT SCHEMA:",schema)
        console.log("GITHUB SDL SCHEMA:",printSchema(schema))
        navigator.clipboard.writeText(printSchema(schema).replace("​", ""))
        toast({
          title: 'SDL Schema Success.',
          description: "SDL Schema Created & Copied to Cliboard.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      } else if (voyagerData["local"]) {
        console.log("LOCAL OBJECT SCHEMA:",localSchema)
        console.log("LOCAL SDL SCHEMA:",printSchema(localSchema))
        navigator.clipboard.writeText(printSchema(localSchema).replace("​", ""))
        toast({
          title: 'SDL Schema Success.',
          description: "SDL Schema Created & Copied to Cliboard.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      } else {
        const response = await axios.get(url)
        console.log(response.data)
        schema = buildSchema(response.data);
            // return printIntrospectionSchema(graphqlSchemaObj)
        console.log("LINK OBJECT SCHEMA:",schema)
        console.log("LINK SDL SCHEMA:",printSchema(schema))
        navigator.clipboard.writeText(printSchema(schema).replace("​", ""))
        toast({
          title: 'SDL Schema Success.',
          description: "SDL Schema Created & Copied to Cliboard.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      }
    } catch (error) {
      console.error(error)
      toast({
        title: 'Clipboard Failure.',
        description: "Error in process. See Console for more details",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }
    
    
  }



  return (
    <div className="App">
      <Flex direction={"column"} marginBottom="1rem">
        <Flex direction={"row"}>
          <Spacer/>
          <Heading as='h1' size='xl'>Prifina Cotton Data Model</Heading>
          <Spacer/>
        </Flex>
        <Flex direction={"row"}>
          <Spacer/>
          <Input value={url} onChange={(event)=>{
            event.preventDefault()
            setUrl(event.target.value)
          }}placeholder='URL to schema...' size='sm' marginLeft={"1rem"} marginRight={"1rem"}/>
          <Spacer/>
        </Flex>
        <Flex direction={"row"}>
          <Spacer/>
          <Button colorScheme="teal" size='sm'onClick={handleUseLocal} marginRight="1rem">Use Local Schema</Button>
          <Button colorScheme="teal" size='sm'onClick={handleUseGithub} marginRight="1rem">Use GitHub Schema</Button>
          <Button colorScheme="teal" size='sm'onClick={handleUseLink} marginRight="1rem">Use Link Schema</Button>
          <Button colorScheme="teal" size='sm'onClick={handleGetClipboard} marginRight="1rem">Copy to Cliboard</Button>
          <Spacer/>
        </Flex>
      
      </Flex>
      <VoyagerComponent data={voyagerData}/>

    </div>
  );
}

export default App;
