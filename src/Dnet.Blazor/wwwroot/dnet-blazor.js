(()=>{var e={277:()=>{window.admindashboardinterop={get:e=>e in localStorage?JSON.parse(localStorage[e]):null,set:(e,t)=>{localStorage[e]=JSON.stringify(t)},delete:e=>{delete localStorage[e]},getElementScrollLeft:function(e){return null!=e?e.scrollLeft:0},getBoundingClientRect:function(e){return null!=e?e.getBoundingClientRect():null},getElementScrollWidth:function(e){return null!=e?e.scrollWidth:0},getElementSOffsets:function(e){return null==e?{offsetWidth:0,offsetHeight:0,offsetTop:0,offsetLeft:0}:{offsetWidth:e.offsetWidth,offsetHeight:e.offsetHeight,offsetTop:e.offsetTop,offsetLeft:e.offsetLeft}}}},619:()=>{window.blginterop=function(){const e={};function t(e){return e?"visible"!==getComputedStyle(e).overflowY?e:t(e.parentElement):null}return{addWindowEventListeners:function(e,t){return e.addEventListener("mouseleave",(function(){t.invokeMethodAsync("MouseLeave")})),!0},getElementScrollLeft:function(e){return e.scrollLeft},getBoundingClientRect:function(e){return e.getBoundingClientRect()},getElementScrollWidth:function(e){return e.scrollWidth},getHeaderWidth:function(e){let t=document.getElementById(e).getElementsByClassName("blg-header-cell blg-header-cell-notpinned"),n=0;for(var o=0;o<t.length;o++)n+=t[o].clientWidth;return n},init:function(n,o,i,r=50){const c=t(o);(c||document.documentElement).style.overflowAnchor="none";const s=new window.IntersectionObserver((function(e){e.forEach((e=>{if(!e.isIntersecting)return;const t=o.getBoundingClientRect(),r=i.getBoundingClientRect().top-t.bottom,c=e.rootBounds.height;e.target===o?n.invokeMethodAsync("OnSpacerBeforeVisible",e.intersectionRect.top-e.boundingClientRect.top,r,c):e.target===i&&i.offsetHeight>0&&n.invokeMethodAsync("OnSpacerAfterVisible",e.boundingClientRect.bottom-e.intersectionRect.bottom,r,c)}))}),{root:c,rootMargin:`${r}px`,threshold:0});s.observe(o),s.observe(i);const l=d(o),u=d(i);function d(e){const t=new window.MutationObserver((()=>{s.unobserve(e),s.observe(e)}));return t.observe(e,{attributes:!0}),t}e[n._id]={intersectionObserver:s,mutationObserverBefore:l,mutationObserverAfter:u}},dispose:function(t){const n=e[t._id];n&&(n.intersectionObserver.disconnect(),n.mutationObserverBefore.disconnect(),n.mutationObserverAfter.disconnect(),t.dispose(),delete e[t._id])}}}()},918:()=>{window.dnetimageeditor=function(){var e=window.rxjs,t=0,n=0,o=0,i=0;function r(e,r,c,s,l){let u,d,f,a;switch(e){case"TopLeft":u=o+(l-c),d=i+(l-c),f=n-(l-c),a=t-(l-c);break;case"TopRight":u=o+(l-c),d=i+(l-c),f=n-(l-c),a=t;break;case"BottomLeft":u=o+(s-r),d=i+(s-r),f=n,a=t-(s-r);break;case"BottomRight":u=o-(l-c),d=i-(l-c),f=n,a=t;break;case"TopCenter":u=o+(l-c),d=i,f=n-(l-c),a=t;break;case"BottomCenter":u=o-(l-c),d=i,f=n,a=t;break;case"RightCenter":u=o,d=i-(s-r),f=n,a=t;break;case"LeftCenter":u=o,d=i+(s-r),f=n,a=t-(s-r)}return{height:u,width:d,top:f,left:a}}return{setFocus:function(e){e&&e.focus()},getBoundingClientRect:function(e){return e.getBoundingClientRect()},initializeDragAndDrop:function(r,c,s,l,u,d){!function(r,c,s,l,u){t=l,n=u,i=c.offsetWidth,o=c.offsetHeight;const d=s.offsetWidth,f=s.offsetHeight,a=e.fromEvent(c,"mousedown"),g=e.fromEvent(s,"mousemove"),h=e.fromEvent(document.body,"mouseup").pipe(e.operators.take(1)),p=a.pipe(e.operators.switchMap((c=>{const s=c.clientX,l=c.clientY;return this._dragEndSub=h.subscribe((e=>{t=t+e.clientX-s,n=n+e.clientY-l,t<0&&(t=0),n<0&&(n=0),t+i>d&&(t=d-i),n+o>f&&(n=f-o),r.invokeMethodAsync("OnDragEnd",{height:o,width:i,left:t,top:n})})),r.invokeMethodAsync("OnDragStart"),g.pipe(e.operators.map((e=>{e.preventDefault();let r=t+e.clientX-s,c=n+e.clientY-l;return r<0&&(r=0),c<0&&(c=0),r+i>d&&(r=d-i),c+o>f&&(c=f-o),{height:o,width:i,left:r,top:c}})),e.operators.takeUntil(h))})));this._dragSub=p.subscribe((e=>{r.invokeMethodAsync("OnDrag",e)}))}(r,c,s,l,u)},initializeResize:function(c,s,l,u,d,f,a,g,h,p,m){!function(c,s,l,u,d,f,a,g,h,p,m){t=l,n=u,o=d,i=f;for(let l of s){const s=e.fromEvent(l.reference,"mousedown"),u=e.fromEvent(document.body,"mousemove"),d=e.fromEvent(document.body,"mouseup").pipe(e.operators.take(1));s.pipe(e.operators.switchMap((s=>{const f=s.clientX,a=s.clientY;return this._resizeEndSub=d.subscribe((e=>{var s=r(l.resizerType,e.clientX,e.clientY,f,a);t=s.left,n=s.top,o=s.height,i=s.width,c.invokeMethodAsync("OnResizeEnd",{height:o,width:i,left:t,top:n})})),s.preventDefault(),c.invokeMethodAsync("OnResizeStart"),u.pipe(e.operators.map((e=>(e.preventDefault(),r(l.resizerType,e.clientX,e.clientY,f,a)))),e.operators.takeUntil(d))}))).pipe(e.operators.filter((e=>e.top+e.height<=g&&e.left+e.width<=a&&e.height>m&&e.top>=0&&e.left>=0))).subscribe((e=>{c.invokeMethodAsync("OnResize",e)}))}}(c,s,l,u,d,f,a,g,0,0,m)}}}()},85:()=>{var e;window.dnetoverlay=(e={},{addWindowEventListeners:function(t){var n=window.rxjs,o=n.merge(n.fromEvent(window,"resize"),n.fromEvent(window,"orientationchange")).pipe(n.operators.auditTime(100));return e=o.subscribe((e=>{t.invokeMethodAsync("OnWindowResized",{Width:window.innerWidth,Height:window.innerHeight})})),!0},removeWindowEventListeners:function(){e.unsubscribe()},getViewportScrollPosition:function(){var e=document.documentElement,t=e.getBoundingClientRect();return{Top:-t.top||document.body.scrollTop||window.scrollY||e.scrollTop||0,Left:-t.left||document.body.scrollLeft||window.scrollX||e.scrollLeft||0}},getViewportSize:function(){return{Width:window.innerWidth,Height:window.innerHeight}},getViewportSizeNoScroll:function(){return{Width:document.documentElement.clientWidth,Height:document.documentElement.clientHeight}},getBoundingClientRect:function(e){return e.getBoundingClientRect()},getDocumentBoundingClientRect:function(){return document.documentElement.getBoundingClientRect()},getDocumentClientHeight:function(){return document.documentElement.clientHeight},getDocumentClientWidth:function(){return document.documentElement.clientWidth}})}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n(619),n(918),n(277),n(85)})();