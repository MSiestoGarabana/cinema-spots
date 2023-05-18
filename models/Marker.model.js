const { Schema, model } = require("mongoose");

const markerSchema = new Schema(
    {
        name: { 
            type: String,
            
        },
        description: {
            type: String,
            required: false
        },
        contributor: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }, 
        location: {
            type: {
                type: String
            },
            coordinates: [Number],
         
        },
        movieFrame: {
            type: String,
            required: false
        },
        movie_ID: {
            type: String,
            //ref: 'Movie',
            required: true
        }
    },
    {
        timestamps: true
    }
);

markerSchema.index({ location: '2dsphere' })

const Marker = model('Marker', markerSchema);

module.exports = Marker;
