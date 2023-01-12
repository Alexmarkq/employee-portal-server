const { Schema, model } = require("mongoose")

const constructionSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Name is required."],
        },
        address: {
            type: String
        },
        date: {
            type: String,
        },
        value: {
            type: Number,
            required: [true, "Value is required."]
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        }
    },
    {
        timestamps: true,
    }
)

const Contruction = model("Construction", constructionSchema)