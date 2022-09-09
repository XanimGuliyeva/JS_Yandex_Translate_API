
function Translate (word,language){
    this.apikey = "trnsl.1.1.20220908T111222Z.72d90b1785364415.5d1e9067b29d27827ebedaf01a147aec91140e73";
    this.word = word;
    this.language = language;                                                                                                                                                                                                   ;

    this.xhr = new XMLHttpRequest();

}

Translate.prototype.translateWord = function(callback){
    // Ajax
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint);

    this.xhr.onload = () =>{
        if(this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);

            const text = json.text[0];

            callback(null,text);

        }else {
            callback("Bir hata oluştu",null);
        }
        
    }

    this.xhr.send();


};
Translate.prototype.changeParameters = function(newWord,newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
    
}

