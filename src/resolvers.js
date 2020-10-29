import { Notes, User } from "./models/Notes"

export const resolvers = {
    Query:{
        hello: () => "hello",
        notes: () => Notes.find(),
        user: () => User.find(),
        posts: async (parent, args, {dataSources}, info) => {
            const data = await dataSources.postAPI.getPosts();
            return data;
        }
    },
    Mutation:{
        createNote: async (_, {owner, title, category , content}) => {
            const note = new Notes({owner, title, category, content});
            await note.save();
            console.log(note)
            return note
        }
    }
}
