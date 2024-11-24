import { hashSync } from "bcrypt";
import { systemRoles } from "../../src/Utils/system-roles.utils.js";
import mongoose from "../global-setup.js";
import { Badges } from "../../src/Utils/enums.utils.js";
const { Schema, model } = mongoose;

const patientSchema = new Schema({
    // userName: {
    //     type: String,
    //     required: true,
    //     trim: true,
    //     unique: true,
    // },
    // email:{
    //     type:String,
    //     required:true,
    //     trim:true,
    //     unique:true
    // },
    // userType:{
    //     type:String,
    //     required:true,
    //     enum:systemRoles.DOCTOR,
    // },
    // password:{
    //     type:String,
    //     required:true
    // },
    // passwordResetExpires:Date,
    // verifyPasswordReset:Boolean,
    // status: {
    //     // (online : true , offline:false )
    //     type: Boolean,
    //     required: true,
    //     default: false,
    // },
    // otp: {
    //     type: String,
    // },
    // age:{
    //     type:Number,
    //     required:true
    // },
    // badges:{
    //     type:[String],
    //     enum: Object.values(Badges),
    // },
    // gender:{
    //     type:String,
    //     required:true,
    //     enum:['male','female']
    // },
    // phone:{
    //     type:String,
    //     required:true
    // },
    // isEmailVerified:{
    //     type:Boolean,
    //     default:false
    // },
    // isMarkedAsDeleted:{
    //     type:Boolean,
    //     default:false
    // },
    // profilePic:{
    //     secure_url:{
    //         type:String,
    //         required:true
    //     },
    //     public_id:{
    //         type:String,
    //         required:true
    //     }
    // },
    // customId:String,
    // // provider:{
    // //     type:String,
    // //     enum:['google','system'],
    // //     default:'system'
    // // },
    // isLogedIn:{
    //     type:Boolean,
    //     default:false
    // }
},{timestamps:true,toJSON:{virtuals:true},toObject:{virtuals:true}});

//============document middleware=============
// patientSchema.pre("save",function(){
//     if(this.isModified("password")){    
//         this.password=hashSync(this.password,+process.env.SALT_ROUNDS)
//     }
// });

//==================query middleware=============
// patientSchema.pre(["updateOne"],function(){
//     if(this.isModified("password")){
//         this.password=hashSync(this.password,+process.env.SALT_ROUNDS)
//     }
//     console.log(this.getQuery());//this.getQuery() or this.getFilter() return the condtions wich i used to find user like _id
    
// })

// patientSchema.virtual('Reviews',
//     {
//         ref:'Review',
//         localField:'_id',
//         foreignField:'doctorId'
//     }
// );

export const Patient = mongoose.models.Patient ||model("Patient", patientSchema);