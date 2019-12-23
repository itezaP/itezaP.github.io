<template>
    <v-container>
        <v-layout text-center wrap> 
            <v-flex xs12>
                <video ref="video" id="video" width="500" height="500" autoplay></video>
                <v-btn color="info" id="snap" v-on:click="capture()">take photo</v-btn>
                <canvas ref="canvas" id="canvas" width="500" height="500" style="display:none"></canvas>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Camera',

    data: () => ({
        video: {},
        canvas: {},
        captures: []
    }),
    mounted(){
        this.video = this.$refs.video
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true}).then(stream => {
                this.video.srcObject = stream
                this.video.play()
            })
        }
    },
    methods: {
        capture () {
            this.canvas = this.$refs.canvas
            this.canvas.getContext('2d').drawImage(this.video, 0, 0, 500, 500)
            this.captures.push(this.canvas.toDataURL('image/png'))
        }
    }
};
</script>