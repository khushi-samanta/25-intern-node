mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PaymentSchema = new Schema({
userId: {
    type:Schema.Types.ObjectId,
    ref:"users",
    required:"true",
},
BookingId: {
    type:Schema.Types.ObjectId,
    ref:"booking",
    required:true,
},
Amount: {
    type: Number,
    required:true,
},
PaymentMethod: {
    type: String,
    required: true
},
PaymentStatus: {
    type: Boolean,
    required: true
},
transcationRef: {
    type: String,
    required: true
}
}, {
timestamps: true
});

module.exports  = mongoose.model('Payment',PaymentSchema);
