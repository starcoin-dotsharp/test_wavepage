document.getElementById("baz").addEventListener("click", function()
{
    alert('テスト用のクリック');
});

//IFrame Player APIの読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var ytPlayer = [];
var ytData = [
    {
		id: 'M7lc1UVf-VE', //YouTubeのID
		area: 'video01' //表示する場所
    }, {
        id: 'M7lc1UVf-VE', //YouTubeのID
        area: 'video02' //表示する場所
    }, {
        id: 'M7lc1UVf-VE', //YouTubeのID
        area: 'video03' //表示する場所
    }, {
        id: 'M7lc1UVf-VE', //YouTubeのID
        area: 'video04' //表示する場所
    }
];
function onYouTubeIframeAPIReady() {
	for(var i = 0; i < ytData.length; i++) {
        ytPlayer[i] = new YT.Player(ytData[i]['area'], {
			width: '320', //プレーヤーの幅
			height: '180', //プレーヤーの高さ
			videoId: ytData[i]['id'], //YouTubeのID
		});
    }
}

var api_url = 'https://script.googleusercontent.com/macros/echo?user_content_key=ZfgcvKslOf-zLohEAsyolbdZFKgPjGdQ4Jb_CWK_b8c4Ty3RYlI3V4FygY_Lacl8q_C0R8Bg8D2YpmRWhqvGTaN7ZrUTMFSnm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBbLr8swDwGUp2mifvboYdCdQcn1zwRzwEqOkc8W7vFYunDP8wWvY0uhk7rjD_5_DtWjPGYExIBhE08sW2zH0ln79C3Sdc_pHA&lib=Mg6n76vyPCESYiTaORUoRqJ4jazwmoDw4'; //生成したAPIのURLを指定

fetch(api_url)
.then(function (fetch_data) {
  return fetch_data.json();
})
.then(function (json) {
   for (var i in json) {
        // jsonの要素数だけ回す

        var base_element = document.getElementsByClassName('product-item'); //元となるHTMLの要素を指定
        var clone_element = base_element[i].cloneNode(true); //元となるHTMLの要素を複製
        clone_element.querySelector('.url').textContent = json[i].url; //テキストに取得した商品名を設定
        clone_element.querySelector('.title').textContent = json[i].title; //テキストに取得した商品名を設定
        clone_element.querySelector('.detail').textContent = json[i].detail; //テキストに取得した商品名を設定

        base_element[i].parentNode.appendChild(clone_element); //元となるHTMLの要素の後ろに複製した要素を追加
    }
});
