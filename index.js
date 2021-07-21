import mystyles from "./code.js";

let myPromise = new Promise((resolve, reject) => {

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
		} else {
			resolve("success");
		}
	};

	$("body").append(
		`<style id="style-tag"></style>
        <span hidden id="echo"></span>
        <pre contenteditable id="style-text"></pre>`
	);

	time = window.innerWidth <= 578 ? 4 : 1;
	// time = window.innerWidth <= 578 ? 4 : 16;

	writeStyles(styles, 0, time);

});


// $(document).on('mousemove', (event) => {
//     $('.follower').css({
//       left: event.clientX,
//       top: event.clientY,
//     });
// });


myPromise.then((value)=> {
	console.log(value);
	$( "pre" ).on('DOMSubtreeModified', function () {
		var textArea = document.createElement("textarea");
		textArea.value = $(this).text();
		document.body.appendChild(textArea);
		$("#style-tag").html($("textarea").val());
		textArea.remove();
	})
	.change();
});