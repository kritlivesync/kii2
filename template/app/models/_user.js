module.exports = (Schema) => {
    return {
        name: { type: String },
        ref: {
            type: Schema.Types.ObjectId,
            ref: '_db'
        },
        status: { type: Boolean, default: false },
    }
}