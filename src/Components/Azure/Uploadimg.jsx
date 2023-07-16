import { BlobServiceClient } from "@azure/storage-blob";

async function Uploadimg(image){
    var imageurl ="New Url";
    console.log("upload2");


    // upload to azure
    // Start
    const containerName = `uploaded`;
    const sasToken = 'sp=rcwl&st=2023-07-16T19:05:56Z&se=2023-07-17T03:05:56Z&spr=https&sv=2022-11-02&sr=c&sig=pGtleClP36fRBtmFplEEz%2B1zhHrA%2B7sqkTcvsbCttn0%3D';
    const storageAccountName = 'testuploadimg2002';
    // const storageAccountURL = 'https://testuploadimg2002.blob.core.windows.net/uploaded?sp=rcwl&st=2023-07-15T19:44:31Z&se=2023-07-16T03:44:31Z&spr=https&sv=2022-11-02&sr=c&sig=3ryMXUZEPHgf5HTgrUlN1iIIcExy7UoWKA7HDLh7xgM%3D';

    const uploadUrl = `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`;
    const blobService = new BlobServiceClient(uploadUrl);
    const containerClient = blobService.getContainerClient(containerName);
    const blobClient = containerClient.getBlockBlobClient(image.name);
    const options = { blobHTTPHeaders: { blobContentType: image.type } };

    await blobClient.uploadBrowserData(image, options);

    // End

    imageurl = `https://testuploadimg2002.blob.core.windows.net/uploaded/${image.name}`;

    return (imageurl);
}

export default Uploadimg
