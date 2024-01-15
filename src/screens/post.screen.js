import React from "react";
import {View, Text, SafeAreaView} from "react-native";
import { Container, StyledImage, Scrollnew, Spacerless, Scroll } from "./style/styles.style";

export const PostScreen =({route}) =>{
    const{
        uri,
        titlee,
        hashy,
        content
    }= route.params
    
    return(
       <SafeAreaView>
<Scrollnew>
      <Container>
        <StyledImage source={{uri: uri }}/>
        <Spacerless/>
        <Text>{titlee}</Text>
        <Text>{hashy}</Text>
        <Spacerless/>
        <Text>{content}</Text>
      </Container>
</Scrollnew>
       </SafeAreaView>
    )
}