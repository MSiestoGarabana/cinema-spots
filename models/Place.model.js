const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
    {
        movieTitle: {
            type: String,
            required: true,
        },
        name: { 
            type: String,
            required: true
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
            required: true
        },
        movieFrame: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

placeSchema.index({ location: '2dsphere' })


const Place = model("Place", placeSchema);

module.exports = Place;
