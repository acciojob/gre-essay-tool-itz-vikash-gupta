//your code here
function count_word(val) {
    var vk = val.trim().split(" ");
    if (vk[0]=="")return {words:0}
    return {
      words: vk ? vk.length : 0,
    };
  }
  var textContent = document.getElementById("evaluatedText");
  var showWordCount = document.getElementById("wordCount");
  
  textContent.addEventListener(
    "input",
    function () {
      var v = count_word(this.value);
      showWordCount.innerHTML = v.words;
    },
    false
  );
