const { Schema, model } = require('mongoose');

const movieSchema = new Schema(

    {
        title: { 
            type: String, 
        },

        genre: { 
            type: String,
        },

        plot: { 
            type: String, 
        },

        poster: { 
            type: String,
        },

        year: {
            type: Number,
        },

        location: [{
            type: Schema.Types.ObjectId,
            ref: 'Place',
        }],

    },

    {
        timestamps: true
    }
);

const Movie = model('Movie', movieSchema);

module.exports = Movie