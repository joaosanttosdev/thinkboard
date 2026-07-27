import mongoose from "mongoose"

//criar schema
//modelo base do schema
const noteSchema = new.mongoose.Schema({
    title : {
        type:String,
        required: true
    },
        content: {
            type:String,
            required: true
        },
},
    {timesstamps:true}
);

const note =mongoose.model("Note", noteSchema);

export default Note;
    