import Aadhar from "../model/AadharSchema.js";
import QRGenerator from "../utils/QRGenerator.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const submitAadharForm = async(req,res) => {
    const {hinName,engName,DOB,gender,aadharNo,address} = req.body;
    if([hinName || engName || DOB || gender || aadharNo || address].some((field) => field.trim() === "")){
        throw new Error("every filed is required")
    }

    try {
        let data = {
            "name":engName,
            "aadhar":aadharNo,
            "address":address
        }
      
        const qrCode = QRGenerator(data)
        console.log('qrcode from controller>>>',qrCode)

        const avatarLocalPath =  req.file?.path
            const cloudUpload = await uploadOnCloudinary(avatarLocalPath)
            if(!cloudUpload?.url){
             throw new Error("Got error while uploading avatar")
            }
        const AadharInfo = await Aadhar.create({
            hinName,
            engName,
            DOB,
            gender,
            aadharNo,
            address,
          avatar: {
            public_id: cloudUpload.public_id,
            secure_url:cloudUpload.secure_url
          },
        //   QRCode: {
        //     public_id: qrCode.public_id,
        //     secure_url:qrCode.secure_url
        //   }
        });
        const savedAadharInfo = await AadharInfo.save();
        return res.status(200).json({
          success:true,
          data:savedAadharInfo
        })
      } catch (error) {
        return res.status(400).json({
          message: error.message,
        });
      }

}

export default submitAadharForm