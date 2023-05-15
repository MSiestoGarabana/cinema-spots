const { Schema, model } = require('mongoose')

const listSchema = new Schema(
    {
        name: {
            type: String,
            required: true, 
        },

        movies: {
            [{
                type: Schema.Types.ObjectId,
                ref: 'Movie',
            }]
        },

    },
    {
        timestamps: true,
    }
)

const List = model('List', listSchema);

module.exports = List