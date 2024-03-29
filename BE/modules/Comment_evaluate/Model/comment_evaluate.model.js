import mongoose from "mongoose";

const comment_evaluateSchema = mongoose.Schema({

    userId: {
        _id: {
            type: mongoose.Types.ObjectId,
            ref: 'Auth',
        },
        name: String
    },
    productId: {
        _id: {
            type: mongoose.Types.ObjectId,
            ref: 'Product',
        },
        name: String
    },
    comment: String,
    star: {
        type: String,
        default: '5',
        enum: ['0','1','2','3','4','5'],
    },
},
    {
        timestamps: true
    }
)

export default mongoose.model("Comment_evaluate", comment_evaluateSchema)