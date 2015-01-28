/*!CK:4049932161!*//*1422244387,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["+C\/76"]); }

__d("XPagesVideoListChainingController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/pages\/video_hub\/collection\/chaining\/",{limit:{type:"Int",required:true},offset:{type:"Int"},video_list_id:{type:"Int",required:true}});},null);
__d("PagesVideoListChaining",["AsyncRequest","DOM","SubscriptionsHandler","XPagesVideoListChainingController"],function(a,b,c,d,e,f,g,h,i,j){function k(l,m,n,o){"use strict";this.$PagesVideoListChaining0=l;this.$PagesVideoListChaining1=m;this.$PagesVideoListChaining2=n;this.$PagesVideoListChaining3=o;var p=new i();p.addSubscriptions(l.subscribe('needsitems',this.$PagesVideoListChaining4.bind(this)));}k.prototype.$PagesVideoListChaining4=function(){"use strict";var l=j.getURIBuilder().setInt('offset',this.$PagesVideoListChaining2).setInt('limit',this.$PagesVideoListChaining1).setInt('video_list_id',this.$PagesVideoListChaining3).getURI();new g().setURI(l).setHandler(function(m){var n=m.getPayload();if(n.final_video_id){this.$PagesVideoListChaining2=n.final_video_id;var o=n.elements.map(function(p){return h.create('li',{},p.element);});this.$PagesVideoListChaining0.addItems(o);}else this.$PagesVideoListChaining0.endCarousel();}.bind(this)).send();};e.exports=k;},null);
__d("PagesVideoUnitUtils",["DOMDimensions","LitestandEllipsis"],function(a,b,c,d,e,f,g,h){var i={setTitleText:function(j,k){var l=g.getElementDimensions(j).height;h.add(k,l);}};e.exports=i;},null);
__d("TimelineCollectionsCarousel",["Animation","CSS","DOM","Ease","Event","Locale","TidyArbiterMixin","cx","mixin","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=2,r=2,s=154,t=40,u=o(m);for(var v in u)if(u.hasOwnProperty(v))x[v]=u[v];var w=u===null?null:u.prototype;x.prototype=Object.create(w);x.prototype.constructor=x;x.__superConstructor__=u;function x(y,z,aa,ba){"use strict";this._node=y.node;this._grid=y.grid;this._prevLink=y.prev_link;this._nextLink=y.next_link;this._disabledNext=false;this._visibleCount=z;this._slideMaxItems=this._visibleCount-r;var ca=this._prevLink.offsetWidth||t;this._itemWidth=(ba&&ba>0)?ba:s;this._visibleIndex=-1;var da=this._itemWidth*-1,ea=ca+q+aa+da;this._position=ea;this._positionProperty=l.isRTL()?'right':'left';this._grid.style[this._positionProperty]=this._position+'px';this._lastBoundaryItem=this._grid.lastChild;this.updateBoundaryItems();h.addClass(this._node,"_5rr8");p([k.listen(this._prevLink,'click',this._onPrevClick.bind(this)),k.listen(this._prevLink,'mouseenter',this._onPrevEnter.bind(this)),k.listen(this._prevLink,'mouseleave',this._onPrevLeave.bind(this)),k.listen(this._nextLink,'click',this._onNextClick.bind(this)),k.listen(this._nextLink,'mouseenter',this._onNextEnter.bind(this)),k.listen(this._nextLink,'mouseleave',this._onNextLeave.bind(this))]);this.refresh();}x.prototype.getGrid=function(){"use strict";return this._grid;};x.prototype.removeItem=function(y){"use strict";i.remove(y);this.refresh();if(this.getVisibleNodes().length-r===0)this.inform('lastelementremoved');};x.prototype.disableNext=function(){"use strict";this._disabledNext=true;this.refresh();};x.prototype.enableNext=function(){"use strict";this._disabledNext=false;this.refresh();};x.prototype.getNode=function(){"use strict";return this._node;};x.prototype.getNextLink=function(){"use strict";return this._nextLink;};x.prototype.getVisibleNodes=function(){"use strict";var y=[],z=Math.min(this._visibleCount,this._grid.childNodes.length);for(var aa=1;aa<=z;aa++){var ba=this._grid.childNodes[this._visibleIndex+aa];y.push(ba);}return y;};x.prototype.getVisibleNodesMax=function(){"use strict";return this._visibleCount;};x.prototype.getLastVisibleIndex=function(){"use strict";return this._visibleIndex+this._visibleCount-1;};x.prototype.insertBefore=function(y,z){"use strict";if(z){this._grid.insertBefore(y,z);}else i.insertBefore(this._lastBoundaryItem,y);this.refresh();};x.prototype.refresh=function(){"use strict";h.conditionClass(this._node,"_58rf",!this._isPrevEnabled());h.conditionClass(this._node,"_58rg",!this._isNextEnabled());};x.prototype.updateBoundaryItems=function(){"use strict";if(this._grid.childNodes.length<this._visibleCount){h.hide(this._lastBoundaryItem);}else h.show(this._lastBoundaryItem);};x.prototype._getNextOverflowCount=function(){"use strict";return this._grid.childNodes.length-(this.getLastVisibleIndex()+r);};x.prototype._getPrevOverflowCount=function(){"use strict";return this._visibleIndex+1;};x.prototype._isPrevEnabled=function(){"use strict";return this._getPrevOverflowCount()>0;};x.prototype._isNextEnabled=function(){"use strict";return this._getNextOverflowCount()>0&&!this._disabledNext;};x.prototype._onNextClick=function(){"use strict";if(this._isNextEnabled()){if(this._getPrevOverflowCount()===0)h.removeClass(this._node,"_5rr8");this._slide(Math.min(this._getNextOverflowCount(),this._slideMaxItems));this.inform('nextclick');}};x.prototype._onNextEnter=function(){"use strict";if(this._isNextEnabled()){h.addClass(this._node,"_5di5");this.inform('nextenter');}};x.prototype._onNextLeave=function(){"use strict";h.removeClass(this._node,"_5di5");this.inform('nextleave');};x.prototype._onPrevClick=function(){"use strict";if(this._isPrevEnabled()){if(this._getPrevOverflowCount()<=this._slideMaxItems)h.addClass(this._node,"_5rr8");this._slide(-1*Math.min(this._getPrevOverflowCount(),this._slideMaxItems));this.inform('prevclick');}};x.prototype._onPrevEnter=function(){"use strict";if(this._isPrevEnabled()){h.addClass(this._node,"_5di6");this.inform('preventer');}};x.prototype._onPrevLeave=function(){"use strict";h.removeClass(this._node,"_5di6");this.inform('prevleave');};x.prototype.silentSlide=function(y){"use strict";this._visibleIndex+=y;this._position-=y*this._itemWidth;this._grid.style[this._positionProperty]=this._position+'px';this.refresh();};x.prototype.slide=function(y,z){"use strict";y=Math.min(this._getNextOverflowCount(),y);if(y>0){h.removeClass(this._node,"_5rr8");this._slide(y,z);return true;}return false;};x.prototype._slide=function(y,z){"use strict";this._visibleIndex+=y;this._position-=y*this._itemWidth;if(!z)z=500*Math.abs(y/this._slideMaxItems);var aa=this._node;h.addClass(aa,"_58rj");new g(this._grid).to(this._positionProperty,this._position).duration(z).ease(j.sineOut).ondone(function(){h.removeClass(aa,"_58rj");this.inform('onSlideDone');this.refresh();}.bind(this)).go();this.inform('onSlide');};e.exports=x;},null);
__d("TimelineCollectionsInfiniteCarousel",["Arbiter","CSS","DOM","TidyArbiterMixin","csx","cx","tidyEvent","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=2,p=n(j);for(var q in p)if(p.hasOwnProperty(q))s[q]=p[q];var r=p===null?null:p.prototype;s.prototype=Object.create(r);s.prototype.constructor=s;s.__superConstructor__=p;function s(t,u,v){"use strict";this._carousel=t;this._items=u;this._needsItems=false;this._placeholderIndex=0;this._visibleCount=this._carousel.getVisibleNodesMax();this._carouselDone=false;for(var w=0;w<this._visibleCount-1;++w){var x=v.cloneNode(true);this._carousel.insertBefore(x,this._placeholder);this._placeholder=x;}m([this._carousel.subscribe('onSlide',this.refresh.bind(this)),this._carousel.subscribe('nextclick',this.inform.bind(this,'nextclick')),this._carousel.subscribe('nextenter',this.inform.bind(this,'nextenter')),this._carousel.subscribe('nextleave',this.inform.bind(this,'nextleave')),this._carousel.subscribe('prevclick',this.inform.bind(this,'prevclick')),this._carousel.subscribe('preventer',this.inform.bind(this,'preventer')),this._carousel.subscribe('prevleave',this.inform.bind(this,'prevleave'))]);this.refresh();}s.prototype.addItems=function(t){"use strict";this._needsItems=false;for(var u=0;u<t.length;++u)this._items.push(t[u]);this.refresh();this.inform('newitemsadded',t);};s.prototype.endCarousel=function(){"use strict";this._placeholder=null;var t=i.scry(this._carousel.getNode(),"li._5b4r");t.forEach(function(u){i.remove(u);}.bind(this));this._carouselDone=true;this._carousel.updateBoundaryItems();this.refresh();};s.prototype.getGrid=function(){"use strict";return this._carousel.getGrid();};s.prototype.getNode=function(){"use strict";return this._carousel.getNode();};s.prototype.getNextLink=function(){"use strict";return this._carousel.getNextLink();};s.prototype.getVisibleNodes=function(){"use strict";return this._carousel.getVisibleNodes();};s.prototype.getVisibleNodesMax=function(){"use strict";return this._carousel.getVisibleNodesMax();};s.prototype.removeItem=function(t){"use strict";i.remove(t);this._placeholderIndex--;if(this.getVisibleNodes().length-o===0)this.inform('lastelementremoved');this.refresh();};s.prototype._addItem=function(t){"use strict";this._placeholderIndex++;this._carousel.insertBefore(t,this._placeholder);};s.prototype.refresh=function(){"use strict";while((this._carousel.getLastVisibleIndex()>=this._placeholderIndex||this._carouselDone)&&this._items.length)this._addItem(this._items.shift());if(this._carousel.getLastVisibleIndex()>=this._placeholderIndex&&!this._carouselDone){h.addClass(this._carousel.getNode(),"_58rd");this._carousel.disableNext();}else{h.removeClass(this._carousel.getNode(),"_58rd");this._carousel.enableNext();}if(this._items.length<this._visibleCount&&!this._needsItems&&!this._carouselDone){this._needsItems=true;this.inform('needsitems',null,g.BEHAVIOR_PERSISTENT);}this._carousel.refresh();this.inform('refreshed');};s.prototype.slide=function(t,u){"use strict";return this._carousel.slide(t,u);};e.exports=s;},null);