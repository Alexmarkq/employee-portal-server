const { Schema, model } = require("mongoose")

const invoiceSchema = new Schema(
    {
        invoiceTitle: {
            type: String,
            required: [true, "Name is required."],
        },
        date: {
            type: String,
        },
        value: {
            type: Number,
            required: [true, "Value is required."]
        },
        invoiceImg: {
            type: String,
            required: [true, "Image is required."]
        },
    },
    {
        timestamps: true,
    }
);

const Invoice = model("Invoice", invoiceSchema)