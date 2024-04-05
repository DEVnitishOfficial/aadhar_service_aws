import QRCode from "qrcode";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const QRGenerator = (data) => {
  // let data = {
  //     "name":"nitishOfficial",
  //     "email":"dnkn@gmail.com",
  //     "address":"banka bihar naorun"
  // }
  let formattedData = `Name: ${data.name},\nEmail: ${data.email},\nAddress: ${data.address},\nDescription: ${data.description}`;

  let timestamp = new Date().getTime(); // Get current timestamp
  let fileName = `qr_${timestamp}.png`;
  let filePath = path.join(__dirname, "../uploads", fileName); // __dirname says, from the current directory go inside the uploads and name the file with 'fileName'

  QRCode.toFile(filePath, formattedData, function (err) {
    if (err) {
      console.error("Error generating QR code:", err);
    } else {
      console.log("QR code saved to", filePath);

      // Removing the generated files
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
        } else {
          console.log("File deleted successfully");
        }
      });
    }
  });
};

export default QRGenerator;
