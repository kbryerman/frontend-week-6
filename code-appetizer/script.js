function transferText(){
    var targetText = document.getElementById('foo');
    console.log(targetText);
    var typedText = document.getElementsByTagName('input');
    console.log(typedText);
    targetText.innerText = typedText.value;
}

