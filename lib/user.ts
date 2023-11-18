import * as mongoose from 'mongoose';
const User = new mongoose.Schema({
   wallet: {
        type: String,
        required: true,
     },
    proofOfEmployment: {
        type: Object,
        required: false,
        default: null,
    },
    proofOfSalary: {
        type: Object,
        required: false,
        default: null,
    },
},{
    timestamps: true,
});

const UserModel = mongoose.models.User || mongoose.model('User', User);
export default UserModel;

