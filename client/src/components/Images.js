import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import sha1 from 'sha1';
import superagent from 'superagent';

class Images extends React.Component {

    constructor() {
        super()
        this.state = {
            images: []
        }
    }

    uploadFile(files) {
        console.log('Upload File: ')
        const image = files[0];

        const APIKEY = '347111625935373'
        const APISECRET = 'Eow6nzhLEoDqtoPz0EHsbXlZ7Cg'

        const cloudName = 'treat';
        const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload';

        const timestamp = Date.now() / 1000;
        const uploadPreset = 'xcs4vs2i';

        const paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + APISECRET;

        const signature = sha1(paramsStr);
        const params = {
            'api_key': APIKEY,
            'timestamp': timestamp,
            'upload_preset': uploadPreset,
            'signature': signature
        }

        let uploadRequest = superagent.post(url)
        uploadRequest.attach('file', image)

        Object.keys(params).forEach((key) => {
            uploadRequest.field(key, params[key])
        })

        uploadRequest.end((err, resp) => {
            if (err) {
                alert(err)
                return
            }
            console.log('Upload Completed (JSON): ' + JSON.stringify(resp.body))
            const uploadedImage = resp.body;

            // Put response in images array and state
            let updatedImages = Object.assign([], this.state.images)

            // Push image upload to 'updatedImages' for images array & state re-assign
            updatedImages.push(uploadedImage);

            // Reset state and rerender
            this.setState({
                images: updatedImages
            
            })
        })
    }


    removeImage(event) {
        event.preventDefault()
        console.log("Image has been removed: " + event.target.id)

        // Put response in images array and state
        let updatedImages = Object.assign([], this.state.images)

        // Remove the image from the array
        updatedImages.splice(event.target.id, 1);

        // Reset state and rerender
        this.setState({
            images: updatedImages
        })
    }


    render() {
        const petImageList = this.state.images.map((image, i) => {
            return (
                <div key={i}>
                    <img style={{ width: 250 }} src={image.secure_url} />
                    <br />
                    <a id={i} onClick={this.removeImage.bind(this)} href="#">Delete</a>
                </div>
            )
        })

        return (
            <div>
                <div> {petImageList} </div>
                <Dropzone onDrop={this.uploadFile.bind(this)} />
                Upload an image
            </div>
        )
    }
}

export default Images;