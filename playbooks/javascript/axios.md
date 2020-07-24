---
title: Axios
description: Tips and tricks on how to handle API calls inside your app with Axios
---

## Fetching a file
There are two ways to allow a user to download a file from your API:
- using a direct link to the resource and using the "download" tag
- fetching a file and initiating the download sequence

### Direct link
This option is pretty easy to implement and is not connected to Axios all that much. Basically, after you fetch a resource link from your API, you can use an anchor tag and set the resource link as the href. After you've done that, all you have to do is set a download tag which. This will make the browser initiate the download modal and allow the user to download a file. This will also work with local files. You can see more about this method [here](https://www.w3schools.com/tags/att_a_download.asp).

### Fetching a file
In case the file is being generated on the fly and isn't saved anywhere, there are a couple of things to watch out for when downloading such files.
1. Make sure your [request config](https://www.w3schools.com/tags/att_a_download.asp) has `responseType` has the value `blob` instead of `json`. This will indicate the type of data the server will respond with.
2. After you've set the appropriate response type, the data property of the response will contain a Blob.
3. You can now simply trigger the download modal and download the file. I've used the [download js library](https://www.npmjs.com/package/downloadjs) to handle that for me.
4. If you're using downloadjs, don't forget to set the mime type to avoid corrupted files - download(data, strFileName, *strMimeType*);

