const { Schema, model } = require("mongoose");

const markerSchema = new Schema(
    {
        movieTitle: {
            type: String,
            required: true
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
        },
        markerId: {
            type: ObjectId,
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
