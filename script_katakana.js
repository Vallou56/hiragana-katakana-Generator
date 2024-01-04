const katakanaSets = [
    ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン'],
    ['ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'パ', 'ピ', 'プ', 'ペ', 'ポ'],
    ['キャ', 'キュ', 'キョ', 'シャ', 'シュ', 'ショ', 'チャ', 'チュ', 'チョ', 'ニャ', 'ニュ', 'ニョ', 'ヒャ', 'ヒュ', 'ヒョ', 'ミャ', 'ミュ', 'ミョ', 'リャ', 'リュ', 'リョ', 'ギャ', 'ギュ', 'ギョ', 'ジャ', 'ジュ', 'ジョ', 'ビャ', 'ビュ', 'ビョ', 'ピャ', 'ピュ', 'ピョ']
  ];
  
  function getRandomKatakana(setIndex) {
    const currentKatakanaSet = katakanaSets[setIndex];
    return currentKatakanaSet[Math.floor(Math.random() * currentKatakanaSet.length)];
  }
  
  function displayRandomKatakana(generatorIndex) {
    const currentKatakana = getRandomKatakana(generatorIndex - 1);
    document.getElementById(`katakana-display-${generatorIndex}`).innerText = currentKatakana;
    document.getElementById(`guess-input-${generatorIndex}`).value = '';
    document.getElementById(`result-message-${generatorIndex}`).innerText = '';
  }
  
  function checkGuess(generatorIndex) {
    const userGuess = document.getElementById(`guess-input-${generatorIndex}`).value.toLowerCase();
    const currentKatakana = document.getElementById(`katakana-display-${generatorIndex}`).innerText;
  
    if (userGuess === getCorrespondingLatin(currentKatakana, generatorIndex - 1).toLowerCase()) {
      document.getElementById(`result-message-${generatorIndex}`).innerText = 'Correct! Nice job.';
      setTimeout(() => displayRandomKatakana(generatorIndex), 1000);
    } else {
      document.getElementById(`result-message-${generatorIndex}`).innerText = 'Incorrect. Try again.';
    }
  }
  
  function getCorrespondingLatin(katakana, setIndex) {
    const katakanaLists = [
      ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン'],
      ['ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'パ', 'ピ', 'プ', 'ペ', 'ポ'],
      ['キャ', 'キュ', 'キョ', 'シャ', 'シュ', 'ショ', 'チャ', 'チュ', 'チョ', 'ニャ', 'ニュ', 'ニョ', 'ヒャ', 'ヒュ', 'ヒョ', 'ミャ', 'ミュ', 'ミョ', 'リャ', 'リュ', 'リョ', 'ギャ', 'ギュ', 'ギョ', 'ジャ', 'ジュ', 'ジョ', 'ビャ', 'ビュ', 'ビョ', 'ピャ', 'ピュ', 'ピョ']
    ];
  
    const index = katakanaLists[setIndex].indexOf(katakana);
    let latinList = [];
  
    // Adjust latinList based on the katakanaSet
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
  displayRandomKatakana(1);
  displayRandomKatakana(2);
  displayRandomKatakana(3);
  
  function checkEnterKey(event, generatorIndex) {
    if (event.key === 'Enter') {
      checkGuess(generatorIndex);
    }
  }