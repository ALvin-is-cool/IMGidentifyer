
Webcam.set({
    width: 250,
    height: 250,
    image_format: 'png',
    png_quailty: 150

});
camera = document.getElementById("camera");
Webcam.attach('#camera');


function identify() {
    img = document.getElementById('captured_image');
    Classifier.classify(img, gotResult);//what ever img you have is going to be identifyed here
}
function capture_() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    }
    );
}
console.log("ml5 version", ml5.version)
Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/W3ivSrE3S/model.json", modelloaded)

function modelloaded() {

    console.log('modelloaded!')


}
function gotResult(error, results) {
    if (error) {
        console.error(error);

    } else {

        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}









