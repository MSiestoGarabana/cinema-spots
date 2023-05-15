const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
    {
        title: { 
            type: String, 
            required: true
        },
        genre: { 
            type: [{
                id: Number,
                name: String,
            }],
            required: false
        },
        overview: { 
            type: String, 
            required: true
        },
        poster: { 
            type: String,
            required: true
        },
        releaseDate: {
            type: Date,
            required: true
        },
    },
    {
        timestamps: true
    }
);

const Movie = model('Movie', movieSchema);

module.exports = Movie