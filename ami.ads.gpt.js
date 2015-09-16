var ami = ami || {};
ami.ads = ami.ads || {};
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

ami.ads.gpt = (function(){
  return {
    bootstrap: function(){
      var useSSL = 'https:' == document.location.protocol;
      var src = (useSSL ? 'https:' : 'http:') +'//www.googletagservices.com/tag/js/gpt.js';
      document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    }
  }
});
