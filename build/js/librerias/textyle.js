!function(n){n.fn.textyle=function(e){var a=this,t=a.contents(),i=n.extend({duration:400,delay:100,easing:"swing",callback:null},e);return t.each((function(){var e=n(this);3===this.nodeType&&function(n){n.replaceWith(n.text().replace(/(\S)/g,"<span>$1</span>"))}(e)})),this.each((function(){var n=a.children().length;a.css("opacity",1);for(var e=0;e<n;e++)a.children("span:eq("+e+")").delay(i.delay*e).animate({opacity:1,top:0,left:0},i.duration,i.easing,i.callback)}))}}(jQuery);
//# sourceMappingURL=textyle.js.map