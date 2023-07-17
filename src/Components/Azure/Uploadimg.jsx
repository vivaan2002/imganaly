import { BlobServiceClient } from "@azure/storage-blob";

async function Uploadimg(image){
    var imageurl ="New Url";
    console.log("upload2");


    // upload to azure
    // Start
    const containerName = `uploaded`;
    const sasToken = 'sp=rcwl&st=2023-07-17T14:50:01Z&se=2023-08-17T22:50:01Z&spr=https&sv=2022-11-02&sr=c&sig=6mUqfaiG4rJpODZfuGTBvR79KD2kdFcXm6%2F3t7aPVJo%3D';
    const storageAccountName = 'imgreadupload';
    // const storageAccountURL = 'sp=rcwl&st=2023-07-17T14:50:01Z&se=2023-08-17T22:50:01Z&spr=https&sv=2022-11-02&sr=c&sig=6mUqfaiG4rJpODZfuGTBvR79KD2kdFcXm6%2F3t7aPVJo%3D';

    const uploadUrl = `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`;
    const blobService = new BlobServiceClient(uploadUrl);
    const containerClient = blobService.getContainerClient(containerName);
    const blobClient = containerClient.getBlockBlobClient(image.name);
    const options = { blobHTTPHeaders: { blobContentType: image.type } };

    await blobClient.uploadBrowserData(image, options);

    // End

    imageurl = `https://imgreadupload.blob.core.windows.net/uploaded/${image.name}`;
    console.log(imageurl);

    return (imageurl);
}

export default Uploadimg
