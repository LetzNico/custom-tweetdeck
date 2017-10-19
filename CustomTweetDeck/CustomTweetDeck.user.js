// ==UserScript==
// @name          TweetDeck: Wider Home columns
// @namespace     http://userstyles.org
// @description	  Only tweets&retweets
// @author        Kody97
// @homepage      https://userstyles.org/styles/98906
// @include       http://tweetdeck.twitter.com/*
// @include       https://tweetdeck.twitter.com/*
// @include       http://*.tweetdeck.twitter.com/*
// @include       https://*.tweetdeck.twitter.com/*
// @run-at        document-start
// @version       0.20150525183826
// ==/UserScript==
(function() {var css = [
	".column-type-home, .column-type-home .column-header, .column-type-home .column-content {",
	"    width: 1000px !important;",
	"}",
    ".column-header, .column-header-temp {",
    "   height: 0px !important;",
    "}",
    ".is-condensed .app-header {",
    "   width: 0px !important;",
    "}",
    ".app-header.is-condensed .app-header-inner {",
    "   width: 0px !important;",
    "}",
    "div.js-app-header-inner.pin-v.app-header-inner {",
    "   visibility: hidden;",
    "}",
    "div.js-docked-compose.compose.txt-size--14 {",
    "   visibility: hidden;",
    "}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
