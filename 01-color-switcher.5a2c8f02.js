const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");console.log(t),console.log(e),t.addEventListener("click",(function(){o.start()})),e.addEventListener("click",(function(){o.stop()}));const o={intervalID:null,isActive:!1,start(){this.isActive||(this.isActive=!0,this.intervalID=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.querySelector("body").style.backgroundColor=t}),1e3))},stop(){clearInterval(this.intervalID),this.isActive=!1}};
//# sourceMappingURL=01-color-switcher.5a2c8f02.js.map
