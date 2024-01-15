import styled from "styled-components";
import { ScrollView,Image } from "react-native";

export const Container =styled.View`
padding-top: 32px;
border-radius: 6px;
border-color: black;
`;

export const Spacer =styled.View`
padding: 10px;
`;

export const Scroll= styled(ScrollView)`
 height: 92%;
`;

export const StyledImage = styled(Image)`
 margin-top: 24px;
  width: 100%;
  height: 250px;
  border-radius: 16px;
`;
export const Spacerless =styled.View`
padding: 6px;
`;


export const Scrollnew= styled(ScrollView)`
 height: 100%;
`;
