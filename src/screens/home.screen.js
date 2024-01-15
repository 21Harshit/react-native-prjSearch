import React,{useState, useEffect} from "react";
import { Text,View, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";
import { Searchbar } from 'react-native-paper';
import  {Container, Spacer, Scroll} from "./style/styles.style";
import  {CardComp} from "../components/card.component";
import { client } from "../lib/client";
import { urlFor } from "../lib/client";
import groq from 'groq';


export const HomeScreen =({navigation}) =>{
  
    const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const query = '*[_type == "posts"]';
        const fetchedPosts = await client.fetch(query);
        setPosts(fetchedPosts);
    }

    fetchData(); // Call the async function inside useEffect
  }, []); // Empty dependency array to ensure useEffect runs only once on component mount


  useEffect(() => {
    // Function to fetch data from the API based on the search query
    const deadData = async () => {
      const groqQuery = groq`*[(_type == "posts" && !(_id in path("drafts.**"))
      && body match "${searchQuery}*" || title match "${searchQuery}*" || hashtag match "${searchQuery}*")] 
      | score(body match "${searchQuery}*", boost(title match "${searchQuery}*", 3), boost(hastag match "${searchQuery}*", 2))
      // {
      //   title, hastag, body,
      //   _score
      //   }`
 try {
        const response = await client.fetch(groqQuery);

        // Assuming the API response contains an array of data
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // Fetch data only if the searchQuery is not empty
    if (searchQuery.trim() !== '') {
      deadData();
    } else {
      // Clear data if the searchQuery is empty
        setData(posts);
      
    }
}, [searchQuery]);

    return (
    <SafeAreaView>
       <Container>
      {/* <View>
            <Text>Hello friend</Text>
        </View>
        <Searchit/>
        <Scroll>
        <Spacer/>
{
    posts.map(post=>{
        return (
            <>
            <TouchableOpacity  onPress={()=>{
             navigation.navigate("Post",{
                uri: urlFor(post.image).url(),
                titlee: post.title,
                hashy: post.hashtag,
                content: post.body,
             });

            }}>
            <CardComp title={post.title} imageUrl={urlFor(post.image).url()}/>
            <Spacer/>
            </TouchableOpacity>
            </>
        )
    })
} */}

<View>
      <Searchbar
        placeholder="Search posts"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <Spacer/>
<Scroll>
      {/* Display the fetched data using FlatList */}
  {
    data.map(post=>{
        return (
            <>
            <TouchableOpacity  onPress={()=>{
             navigation.navigate("Post",{
                uri: urlFor(post.image).url(),
                titlee: post.title,
                hashy: post.hashtag,
                content: post.body,
             });

            }}>
            
            <CardComp title={post.title} imageUrl={urlFor(post.image).url()}/>
            <Spacer/>
            </TouchableOpacity>
            </>
        )
    }) 
}
</Scroll>
    </View>

        </Container>
    </SafeAreaView>
    )
}