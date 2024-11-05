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