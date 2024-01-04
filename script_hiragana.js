const hiraganaSets = [
    ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん'],
    ['が', 'ぎ', 'ぐ', 'げ', 'ご', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'だ', 'ぢ', 'づ', 'で', 'ど', 'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'],
    ['きゃ', 'きゅ', 'きょ', 'しゃ', 'しゅ', 'しょ', 'ちゃ', 'ちゅ', 'ちょ', 'にゃ', 'にゅ', 'にょ', 'ひゃ', 'ひゅ', 'ひょ', 'みゃ', 'みゅ', 'みょ', 'りゃ', 'りゅ', 'りょ', 'ぎゃ', 'ぎゅ', 'ぎょ', 'じゃ', 'じゅ', 'じょ', 'びゃ', 'びゅ', 'びょ', 'ぴゃ', 'ぴゅ', 'ぴょ']
  ];
  
  function getRandomHiragana(setIndex) {
    const currentHiraganaSet = hiraganaSets[setIndex];
    return currentHiraganaSet[Math.floor(Math.random() * currentHiraganaSet.length)];
  }
  
  function displayRandomHiragana(generatorIndex) {
    const currentHiragana = getRandomHiragana(generatorIndex - 1);
    document.getElementById(`hiragana-display-${generatorIndex}`).innerText = currentHiragana;
    document.getElementById(`guess-input-${generatorIndex}`).value = '';
    document.getElementById(`result-message-${generatorIndex}`).innerText = '';
  }
  
  function checkGuess(generatorIndex) {
    const userGuess = document.getElementById(`guess-input-${generatorIndex}`).value.toLowerCase();
    const currentHiragana = document.getElementById(`hiragana-display-${generatorIndex}`).innerText;
  
    if (userGuess === getCorrespondingLatin(currentHiragana, generatorIndex - 1).toLowerCase()) {
      document.getElementById(`result-message-${generatorIndex}`).innerText = 'Correct! Nice job.';
      setTimeout(() => displayRandomHiragana(generatorIndex), 1000);
    } else {
      document.getElementById(`result-message-${generatorIndex}`).innerText = 'Incorrect. Try again.';
    }
  }
  
  function getCorrespondingLatin(hiragana, setIndex) {
    const hiraganaLists = [
      ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん'],
      ['が', 'ぎ', 'ぐ', 'げ', 'ご', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'だ', 'ぢ', 'づ', 'で', 'ど', 'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'],
      ['きゃ', 'きゅ', 'きょ', 'しゃ', 'しゅ', 'しょ', 'ちゃ', 'ちゅ', 'ちょ', 'にゃ', 'にゅ', 'にょ', 'ひゃ', 'ひゅ', 'ひょ', 'みゃ', 'みゅ', 'みょ', 'りゃ', 'りゅ', 'りょ', 'ぎゃ', 'ぎゅ', 'ぎょ', 'じゃ', 'じゅ', 'じょ', 'びゃ', 'びゅ', 'びょ', 'ぴゃ', 'ぴゅ', 'ぴょ']
    ];
  
    const index = hiraganaLists[setIndex].indexOf(hiragana);
    let latinList = [];
  
    // Adjust latinList based on the hiraganaSet
    if (setIndex === 0) {
      latinList = [
        'a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to',
        'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'fu', 'he', 'ho', 'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wo', 'n'
      ];
    } else if (setIndex === 1) {
      latinList = [
        'ga', 'gi', 'gu', 'ge', 'go', 'za', 'ji', 'zu', 'ze', 'zo', 'da', 'ji', 'zu', 'de', 'do', 'ba', 'bi', 'bu', 'be', 'bo', 'pa', 'pi', 'pu', 'pe', 'po'
      ];
    } else if (setIndex === 2) {
      latinList = [
        'kya', 'kyu', 'kyo', 'sha', 'shu', 'sho', 'cha', 'chu', 'cho', 'nya', 'nyu', 'nyo', 'hya', 'hyu', 'hyo', 'mya', 'myu', 'myo', 'rya', 'ryu', 'ryo', 'gya', 'gyu', 'gyo', 'ja', 'ju', 'jo', 'bya', 'byu', 'byo', 'pya', 'pyu', 'pyo'
      ];
    }
  
    return index !== -1 ? latinList[index] : '';
  }
  
  // Initial display for all generators
  displayRandomHiragana(1);
  displayRandomHiragana(2);
  displayRandomHiragana(3);
  
  function checkEnterKey(event, generatorIndex) {
    if (event.key === 'Enter') {
      checkGuess(generatorIndex);
    }
  }
  