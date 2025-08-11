import axios from "axios";

export const uploadInvoiceThumbnail = async(imageData) => {
    try {
        const formData = new FormData();
        formData.append('file', imageData);
        formData.append('upload_preset', 'pasinduinvoice');
        formData.append('cloud_name', 'dnqxiq6bb');
        
        const response = await axios.post(
            'https://api.cloudinary.com/v1_1/dnqxiq6bb/image/upload',
            formData
        );
        
        return response.data.secure_url;
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        throw error;
    }
}