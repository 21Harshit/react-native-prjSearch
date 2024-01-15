
export const schemaTypes = [ {name: "posts",
title: "Posts",
type: "document",
fields:[{
   name: "image",
   title:"Image",
   type:"image"
},
{
   name:  "title",
   title: "Title",
   type: "string",
   validation: (Rule) => Rule.required(),
},
{
   name:  "hashtag",
   title: "Hastag",
   type: "string",
   validation: (Rule) => Rule.required(),
},
{
   name:  "body",
   title: "Body",
   type: "string" 
}

]
}
]

