import { memo } from "react";
import {getIntrospectionQuery,buildClientSchema,graphqlSync, printSchema, GraphQLString, buildSchema, printIntrospectionSchema,graphql,GraphQLSchema } from "graphql"
import { init, Voyager,GraphQLVoyager } from 'graphql-voyager';
import { useToast,Flex, Container, Button, Link, Select } from '@chakra-ui/react'
import { localSchema } from './schema'
const axios = require('axios').default;


const VoyagerComponent = ({ data }) => {
  const toast = useToast()
  console.log("data",data)
  console.log("child render");
  const getIntrospection = async () => {
    let result
    var schema 
    if (data["git"]){
      try{
      const response = await axios.get('https://raw.githubusercontent.com/libertyequalitydata/cotton-data-model/main/cotton-data-model.graphql')
        console.log(response.data)
        schema = buildSchema(response.data);
            // return printIntrospectionSchema(graphqlSchemaObj)
        result = graphqlSync({schema, source: getIntrospectionQuery()});
      } catch (error){
        switch(error.name){
          case "AxiosError":
            toast({
              title: 'Link Error.',
              description: "Error Fetching Data From Link",
              status: 'error',
              duration: 2000,
              isClosable: true,
            })
            break
          default:
            toast({
              title: 'SDL Schema Failure.',
              description: "Error in process. See Console for more details",
              status: 'error',
              duration: 2000,
              isClosable: true,
            })
            break
        }
        // Construct a schema, using GraphQL schema language
        schema = buildSchema(`
        type Query {
        test_error: String
        }
        `);
        ;
        console.log(error)
        // return printIntrospectionSchema(graphqlSchemaObj)
        return graphqlSync({schema, source: getIntrospectionQuery()})
      }
    } else if (data["local"]) {
        console.log(localSchema)
        result = graphqlSync({schema:localSchema, source: getIntrospectionQuery()});
    } else {
      try{
        const response = await axios.get(data)
        console.log("response.data",response.data)
        schema = buildSchema(response.data);
        result = graphqlSync({schema, source: getIntrospectionQuery()});
      } catch (error){
        switch(error.name){
          case "AxiosError":
            toast({
              title: 'Link Error.',
              description: "Error Fetching Data From Link",
              status: 'error',
              duration: 2000,
              isClosable: true,
            })
            break
          default:
            toast({
              title: 'SDL Schema Failure.',
              description: "Error in process. See Console for more details",
              status: 'error',
              duration: 2000,
              isClosable: true,
            })
            break
        }
        // Construct a schema, using GraphQL schema language
        schema = buildSchema(`
        type Query {
          test_error: String
        }
        `);
        ;
        console.log(error)
        // return printIntrospectionSchema(graphqlSchemaObj)
        return graphqlSync({schema, source: getIntrospectionQuery()})
      }
    }

    
    return result 

    // }
      
  }
  return (
    <>
      <Voyager
      introspection={getIntrospection}
      // ...
      
      workerURI={process.env.PUBLIC_URL + '/voyager.worker.js'}
        // ...
      />
    </>
  );
};

export default memo(VoyagerComponent);
