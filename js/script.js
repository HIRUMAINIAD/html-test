function setText(){
    inputText = document.getElementById("maybeCoolText");
    targetText = document.getElementById("coolText");
    console.log(inputText.value);
    console.log(targetText.textContent);
    targetText.textContent = inputText.value;
}