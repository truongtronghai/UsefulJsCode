<template>
    <div>
        <img ref="image" :src="imageUrl" crossorigin>
    </div>
</template>

<script>
import Cropper from "cropperjs";

export default {
    data() {
        return {
            // imageUrl: "https://t3.ftcdn.net/jpg/01/05/57/38/240_F_105573812_cvD4P5jo6tMPhZULX324qUYFbNpXlisD.jpg",
            imageUrl: this.srcImg,
            cropper: null,
        };
    },
    props: {
            srcImg: String,
            show: Boolean
        },
    watch:{
        show: function(newVal){
            this.showDialog = newVal
        },
        srcImg: function(newVal){
            // Replace the image's src and rebuild the cropper
            this.cropper.replace(newVal);
        },
    },
    mounted() {
        console.log(this.srcImg)
        this.cropper = new Cropper(this.$refs.image, {
            // Cropper.js options (e.g., zoomable, aspectRatio, crop event)
        });
    },
    head(){
        return {
            link: [
                {rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.10/cropper.min.css'},
            ]
        }
    },
};
</script>
