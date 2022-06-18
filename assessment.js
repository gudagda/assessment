'use strict';//宣言後のエラーを表示してくれる
//ここから追加分
const userNameINput = document.getElementById('user-name');
const assessmentBotton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

//enterを押しても診断してくれるプログラム。
userNameINput.onkeydown = event => {
if(event.key === 'Enter'){
     assessmentBotton.onclick();
}
}

//ここから名前を記入、ボタンをクリックして、診断結果を表示するプログラム。
assessmentBotton.onclick = () => {
    //無名関数。assessmentBotton.onclick = function(){}　と同じ内容。
    const userName = userNameINput.value;
    if(userName.length === 0){
        //名前が空の時は処理を終了する
        return;
    }
    console.log(userName);
    //診断結果表示エリアの作成
    resultDivided.innerText="";
    //ボタンを2回以上クリックしたときに診断結果がが追加されないようにするプログラム。
    const header = document.createElement('h3');
    header.innerText = '診断結果';
     //「診断結果」というh3の見出しをつくり、結果のdiv要素に追加
    resultDivided.appendChild(header)
    //div要素(result-area)を親にして、h3の見出し(header)を子要素として追加。

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

    //ツイートエリアの作成
    tweetDivided.innerText = "";
    const anchor = document.createElement('a');
    const hrefValue=
    'https://twitter.com/intent/tweet?button_hashtag=' +
    encodeURIComponent('あなたのいいところ') + '&ref_src=twsrc%5Etfw';
    
    anchor.setAttribute('href',hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text',result);
    anchor.innerText= 'Tweet #あなたのいいところ'

    tweetDivided.appendChild(anchor)
    
};

const answers =[
'{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
'{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
'{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
'{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
'{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
'{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
'{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
'{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
'{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
'{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
'{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
'{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
'{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
'{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
'{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
'{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
];
/**
 * 名前の文字列渡すと診断結果を返す関数（関数の処理の内容）
 * @param{string}usersName　ユーザーの名前（param→引数、usersName→引数の名前）
 * @return{string}(usersName){
 * //TODO 診断結果を実装する
 * return '';　（return→戻り値）（string→値の型が「文字列（string）型」）
 *  * }
 */

//入力が同じ名前なら同じ診断結果を出力する処理
function assessment(userName){
    //文字のコード番号を取得してそれを足し合わせる。
    let sum0fCharCode = 0;
    for(let i = 0;i<userName.length; i++){
        sum0fCharCode = sum0fCharCode + userName.charCodeAt(i);
    }//charCdeAt　は文字の番号を呼び出すもの。 sumOfCodeに合計値を代入

    //文字のコード番号の合計を回答の数で割って添字の数値を求めよ。
    const index = sum0fCharCode % answers.length;
    let result = answers[index]
    result = result.replaceAll('{userName}',userName)
    return result;
}

// テストコード
console.assert(
    assessment('太郎') ===
      '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );

console.assert(
    assessment('太郎') ===
    assessment('太郎'),
    '診断結果の内容が違います。'
);

