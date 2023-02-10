import axios from 'axios';

export const fileDownloader = async (url, fileName, authorization) => {
  try {

    let headers = {
      'content-type': 'application/json',
    };

    if (authorization){
      headers['authorization'] = authorization;
    }

    let response = await axios({
      url,
      method: 'get',
      responseType: 'blob', // important
      headers,
      data: null
    });
  
    if (response.data){
      const blob = new Blob([response.data]);
      const aEle = document.createElement('a'); // Create a label
      const href = window.URL.createObjectURL(blob); // Create downloaded link
      aEle.href = href;
      aEle.download = fileName; // File name after download
      document.body.appendChild(aEle);
      aEle.click(); // Click to download
      document.body.removeChild(aEle); // Download complete remove element
      window.URL.revokeObjectURL(href); // Release blob object
    }
        
    return true;
  } catch (error) {
    console.log(error);
    window.open(url);
    return error;
  }
};