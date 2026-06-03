window.webrtc = {

    init: async function () {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        document.getElementById("localVideo").srcObject = stream;
    },

    toggleMute: function (isMuted) {
        console.log("Muted:", isMuted);
    },

    toggleCamera: function (isOff) {
        console.log("Camera Off:", isOff);
    },

    record: function (isRecording) {
        console.log("Recording:", isRecording);
    },

    shareScreen: function () {
        console.log("Screen sharing started");
    },

    endCall: function () {
        console.log("Call ended");
    }
};