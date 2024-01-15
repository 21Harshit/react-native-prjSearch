// // import { Searchbar } from "react-native-paper";
// // import styled from "styled-components";
// // import React from "react";




// // const Searchit = () => {
  
// //   const [searchQuery, setSearchQuery] = React.useState('');
 
  

// //   return (
// //     <>
// //     <Searchbar
// //       placeholder="Search post"
// //       onChangeText={setSearchQuery}
// //       value={searchQuery}
// //     />
    
// //    </>
// //   );
// // };

// // export default Searchit;

// import React, { useState, useEffect } from 'react';
// import { Searchbar } from 'react-native-paper';
// import {  View, TouchableOpacity} from 'react-native';
// import { client } from '../lib/client';
// import groq from 'groq';
// import { Container,Spacer, Scroll } from '../screens/style/styles.style';
// import  {CardComp} from "../components/card.component";
// import { urlFor } from "../lib/client";


// const Searchit = ({navigation}) => {
  
//   const [searchQuery, setSearchQuery] = useState('');
//   const [data, setData] = useState([]);

//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//         const query = '*[_type == "posts"]';
//         const fetchedPosts = await client.fetch(query);
//         setPosts(fetchedPosts);
//     }

//     fetchData(); // Call the async function inside useEffect
//   }, []); // Empty dependency array to ensure useEffect runs only once on component mount


//   useEffect(() => {
//     // Function to fetch data from the API based on the search query
//     const deadData = async () => {
//       const groqQuery = groq`*[(_type == "posts" && !(_id in path("drafts.**"))
//       && body match "${searchQuery}*" || title match "${searchQuery}*" || hashtag match "${searchQuery}*")] 
//       | score(body match "${searchQuery}*", boost(title match "${searchQuery}*", 3), boost(hastag match "${searchQuery}*", 2))
//       // {
//       //   title, hastag, body,
//       //   _score
//       //   }`
//       try {
//      // Replace 'your-api-endpoint' with the actual endpoint
//         const response = await client.fetch(groqQuery);

//         // Assuming the API response contains an array of data
//         setData(response);
//       } catch (error) {
//         console.error('lauda data:', error);
//       }
//     };
//     // Fetch data only if the searchQuery is not empty
//     if (searchQuery.trim() !== '') {
//       deadData();
//     } else {
//       // Clear data if the searchQuery is empty
//         setData(posts);
      
//     }
// }, [searchQuery]);

//   return (
//     <View>
//       <Searchbar
//         placeholder="Search posts"
//         onChangeText={setSearchQuery}
//         value={searchQuery}
//       />
// <Scroll>
//       {/* Display the fetched data using FlatList */}
//   {
//     data.map(post=>{
//         return (
//             <>
//             <TouchableOpacity  onPress={()=>{
//              navigation.navigate("Post",{
//                 uri: urlFor(post.image).url(),
//                 titlee: post.title,
//                 hashy: post.hashtag,
//                 content: post.body,
//              });

//             }}>
            
//             <CardComp title={post.title} imageUrl={urlFor(post.image).url()}/>
//             <Spacer/>
//             </TouchableOpacity>
//             </>
//         )
//     }) 
// }
// </Scroll>
//     </View>
//   );
// };

// export default Searchit;

