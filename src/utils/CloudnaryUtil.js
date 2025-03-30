const cloundinary = require("cloudinary").v2;


const uploadFileToCloudinary = async (file) => {
        cloundinary.config({
        cloud_name:"dukcfrspi",
        api_key:"682348996896623",
        api_secret:"RPbEIJylcxxFtPUDXfzI5abdLCE"
    })

    const cloundinaryResponse = await cloundinary.uploader.upload(file.path);
    return cloundinaryResponse;
};
module.exports = {
    uploadFileToCloudinary
}