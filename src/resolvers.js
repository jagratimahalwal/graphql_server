import { Notes, User } from "./models/Notes"

export const resolvers = {
    Query:{
        hello: () => "hello",
        notes: () => Notes.find(),
        user: () => User.find(),
        posts: async (parent, args, {dataSources}, info) => {
            const data = await dataSources.postAPI.getPosts();
            return data;
        },
        getNoteByID: (_,{id}) => Notes.findOne({_id:id},function(err,result){
            console.log(id)
            if(err){
                console.log(err)
            }else{
                console.log(result)
                return result;
            }
        })
    },
    Mutation:{
        createNote: async (_, {owner, title, category , content}) => {
            const note = new Notes({owner, title, category, content});
            await note.save();
            console.log(note)
            return note
        },
        updateNote: async(_, {id, input}) => {
            const {content} = input;
            Notes.findByIdAndUpdate({_id:id},{content:content},function(err,result){
                if(err){
                    console.log(err)
                    return err;
                }else{
                    console.log(result)
                    return result;
                }
            })
        }
    }
}
 