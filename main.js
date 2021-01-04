var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function Start(){
    document.getElementById("input1").innerHTML="";
    recognition.start();
    
}
recognition.onresult=function(event){
    console.log(event);
    var result_1 = event.results[0][0].transcript;
    console.log(result_1);
    document.getElementById("input1").innerHTML=result_1;

}