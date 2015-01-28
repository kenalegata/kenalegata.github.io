/*!CK:708923867!*//*1422244298,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8Kz9U"]); }

__d("legacy:dom-html",["HTML"],function(a,b,c,d){a.HTML=b('HTML');},3);
__d("HomepageFirstClickLogger",["BanzaiScuba"],function(a,b,c,d,e,f,g){function h(event){var k=Date.now()-window._cstart,l=event.path;i(k,l);document.body.removeEventListener('click',h,true);}function i(k,l){if(!k||!l)return;var m='undefined',n=-1;for(var o=0;o<l.length-1;o++){var p=l[o],q=p.getAttribute("data-click");if(q){m=q;n=p.getAttribute("data-click-phase");break;}}var r=new g('homepage_first_click_logging',null,{addBrowserFields:true,addGeoFields:true});r.addInteger('duration',Math.round(k/1000));r.addInteger('phase',n);r.addNormal('click',m);r.post();}var j={listenToClick:function(){if(!a.homepageFirstClick.homepageFirstClickPath){document.body.addEventListener('click',h,true);}else i(a.homepageFirstClick.homepageFirstClickTime,a.homepageFirstClick.homepageFirstClickPath);}};e.exports=j;},null);