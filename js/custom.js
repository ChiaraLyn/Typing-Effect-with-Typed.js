$(".container").typed({
  strings: [
    "Designer",
    "Developer"		
  ],
  stringsElement: null,

  // typing speed
  typeSpeed: 50,

  // time before typing starts
  startDelay: 50,

  // backspacing speed
  backSpeed: 10,

  // shuffle the strings
  shuffle: false,

  // time before backspacing
  backDelay: 500,

  // Fade out instead of backspace
  fadeOut: false,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 500, // milliseconds

  // loop
  loop: true,

  // false = infinite
  loopCount: false,

  // show cursor
  showCursor: true,

  // character for cursor
  cursorChar: "|",

  // attribute to type (null == text)
  attr: null,

  // either html or text
  contentType: "html"
});
