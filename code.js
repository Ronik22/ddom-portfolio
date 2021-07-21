var mystyles = `
/* 
* Hey, I am Ronik Bhattacharjee
* I am a web developer
*/

* {
    transition-duration: 200ms;
}

body {
    background-color: #1a1c24; 
    color: #fff;
    font-size: 13px; 
    line-height: 1.4;
    -webkit-font-smoothing: subpixel-antialiased;
}

pre { 
    position: fixed; 
    width: 48%;
    top: 30px; 
    bottom: 30px; 
    left: 26%;
    transition: left 500ms;
    overflow: auto;
    background-color: #2d313a; 
    color: #ffd82a;
    border: 1px solid rgba(0,0,0,0.2);
    padding: 24px 12px;
    box-sizing: border-box;
    border-radius: 3px;
    box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);
}

pre em:not(.comment) { font-style: normal; }

.comment       { color: #a3ff58c0; }
.selector      { color: #ff8692; }
.selector .key { color: #f698ff; }
.key           { color: #ffffff; }
.value         { color: #00ccff; }


/* First, we'll move this block over */

pre { left: 50%; }


/* Now we can build my heart */

/* 
* Hehe...I changed my mind...
* See you later!
*/
`;

export default mystyles