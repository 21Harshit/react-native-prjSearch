 import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client =createClient({
    projectId: '6zi0f67z',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true,
    token: process.env.SANITY_SECRET_TOKEN
    
})

const builder =imageUrlBuilder(client);

export const urlFor =(source) =>{
    return builder.image(source);
}