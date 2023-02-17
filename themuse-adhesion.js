(function(){
  var bp = document.createElement('script');
  bp.src = "https://web.archive.org/web/20211025070829/https://securepubads.g.doubleclick.net/tag/js/gpt.js";
   var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bp, s);
})();

var googletag = googletag || {}; googletag.cmd = googletag.cmd || [];

window.onload = function(){
    var adhesion_container = document.createElement("div");
    adhesion_container.id = "mpw-adhesion-container";
    var span_text = document.createElement("span");
    span_text.id = "mpw-text";

    var text_node = document.createTextNode("A Muse Company Spotlight");
    span_text.appendChild(text_node);

    var adhesion_top_section = document.createElement("div");
    adhesion_top_section.id = "adhesion-top-section";
    adhesion_top_section.appendChild(span_text)

    var adhesion_close = document.createElement("span");
    adhesion_close.id = "adhesion-close";
    adhesion_top_section.appendChild(adhesion_close);


    var sticky_div = document.createElement("div");
    sticky_div.id = "div-gpt-ad-sticky";
    adhesion_container.appendChild(adhesion_top_section);

    adhesion_container.appendChild(sticky_div);


        var link = document.createElement('link');  
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'https://web.archive.org/web/20211025070829/https://prebid.mpwdigital.com/adhesion/themuse/themuse-adhesion.css';

  document.body.appendChild(link);

  document.body.appendChild(adhesion_container);


  if(document.querySelector("#adhesion-close") != null){
      document.querySelector("#adhesion-close").addEventListener("click",function(){
          document.querySelector("#mpw-adhesion-container").style.display = "none";
      });
  }
  googletag.cmd.push(function() {
      if(window.innerWidth >= 768){
          googletag.defineSlot("/22575611293/Muse/Advice_Desktop_Sticky", [728, 90], "div-gpt-ad-sticky").addService(googletag.pubads());
      }
      if(window.innerWidth < 768) {
          googletag.defineSlot("/22575611293/Muse/Advice_Mobile_Sticky", [320, 50], "div-gpt-ad-sticky").addService(googletag.pubads());        
      }

    googletag.enableServices();

  });

  googletag.cmd.push(function() {
      if(window.innerWidth >= 768){
          googletag.display("div-gpt-ad-sticky");
      }
      if(window.innerWidth < 768){
          googletag.display("div-gpt-ad-sticky");
      }
  });
}

 googletag.cmd.push(function() {
     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
         var slot = event.slot;
         if(slot.getSlotElementId() == "div-gpt-ad-sticky" && event.isEmpty != true){
             document.querySelector("#mpw-adhesion-container").style.display = "block";
             document.querySelector("#div-gpt-ad-sticky").classList.add("item-fade");
             document.querySelector("#adhesion-top-section").style.display = "block";
         }
     });
 });


}
