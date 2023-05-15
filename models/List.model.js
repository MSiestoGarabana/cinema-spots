const { Schema, model } = require('mongoose')

const listSchema = new Schema(
    {
        name: {
            type: String,
            required: true, 
        },
        movies: [{
            type: Schema.Types.ObjectId,
            ref: 'Movie',
        }],
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }, 
    },
    {
        timestamps: true,
    }
)

const List = model('List', listSchema);

module.exports = List