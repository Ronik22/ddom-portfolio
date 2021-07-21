import mystyles from "./code.js";

(function() {
	var openComment, time, writeStyleChar, writeStyles;
	var styles = mystyles;

	openComment = false;

	writeStyleChar = function (which) {
		if (which === "/" && openComment === false) {
			openComment = true;
			styles = $("#style-text").html() + which;
		} else if (which === "/" && openComment === true) {
			openComment = false;
			styles = $("#style-text")
				.html()
				.replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
		} else if (which === ":") {
			styles = $("#style-text")
				.html()
				.replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
		} else if (which === ";") {
			styles = $("#style-text")
				.html()
				.replace(/([^:]*)$/, '<em class="value">$1</em>;');
		} else if (which === "{") {
			styles = $("#style-text")
				.html()
				.replace(/(.*)$/, '<em class="selector">$1</em>{');
		} else {
			styles = $("#style-text").html() + which;
		}
		$("#style-text").html(styles);
		return $("#style-tag").append(which);
	};

	writeStyles = function (message, index, interval) {
		var pre;
		if (index < message.length) {
			pre = document.getElementById("style-text");
			pre.scrollTop = pre.scrollHeight;
			writeStyleChar(message[index++]);
			return setTimeout(function () {
				return writeStyles(message, index, interval);
			}, interval);
		}
	};

	$("body").append(
		`<style id="style-tag"></style>
        <span id="echo"></span>
        <span id="heart">
            <i></i>
        </span>
        <pre id="style-text"></pre>`
	);

	time = window.innerWidth <= 578 ? 4 : 5;
	// time = window.innerWidth <= 578 ? 4 : 16;

	writeStyles(styles, 0, time);
}.call(this));


$(document).on('mousemove', (event) => {
    $('.follower').css({
      left: event.clientX,
      top: event.clientY,
    });
});