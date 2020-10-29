import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content : {
        type: String,
        required: true
    },
    category : {
        type: String,
        required: false
    }
});

const UserSchema = new mongoose.Schema({
    username :{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

export const Notes = mongoose.model('Notes', NotesSchema);
export const User = mongoose.model('User',UserSchema)