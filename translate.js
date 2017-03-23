function translateText() {
  var copiedText = document.getElementById("inputField").value
  var commadText = copiedText.replace(/\n/g,",")
  var separateArrays = commadText.split("-");
  for (var i = 0; i < separateArrays.length; i++) {
    separateArrays[i] = separateArrays[i].split(",").sort(function(a,b) {
      return(a - b)
    });
  }
  // Convert the numStrings in the arrays into actual numbers
  for (var i = 0; i < separateArrays.length; i++) {
    for (var j = 0; j < separateArrays[i].length; j++) {
      separateArrays[i][j] = Number(separateArrays[i][j])
    }
  }

  var returnedObject = {};
  var objectKeyTranslation = []
  for (var i = 1.0; i <= 8; i += 0.5) {
    objectKeyTranslation.push(i);
  }
  objectKeyTranslation.push(16);
  for (var i = 0; i < objectKeyTranslation.length; i++) {
    returnedObject[objectKeyTranslation[i]] = separateArrays[i]
  }
  console.log(returnedObject);
  document.getElementById("response").innerHTML = JSON.stringify(returnedObject);
}
