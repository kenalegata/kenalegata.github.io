/*!CK:865440613!*//*1422244735,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Ix2rz"]); }

__d("ChatSidebarTypeaheadDataSource",["MercuryTypeaheadDataSource","ShortProfiles"],function(a,b,c,d,e,f,g,h){for(var i in g)if(g.hasOwnProperty(i))k[i]=g[i];var j=g===null?null:g.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=g;function k(l){"use strict";l=l||{};l.kanaNormalization=true;g.call(this,l);}k.prototype.init=function(){"use strict";j.init.call(this);this.updateBootstrapData();};k.prototype.bootstrap=function(){"use strict";j.bootstrap.call(this);};k.prototype.updateBootstrapData=function(){"use strict";if(this.isBootstrapped())return;j.updateBootstrapData.call(this);};k.prototype.fetchAll=function(){"use strict";h.fetchAll();};k.prototype.refreshData=function(){"use strict";this.fetchAll();d(['AvailableList'],function(l){l.update();}.bind(this));};k.prototype.query=function(l,m,n,o){"use strict";this.logQuery({event:'query_dive_bar',query:l});return j.query.call(this,l,m,n,o);};k.prototype.respond=function(l,m,n){"use strict";var o=j.respond.call(this,l,m,n);this.logResponse({event:'query_response_dive_bar',response_query:l,response_uids:m});return o;};e.exports=k;},null);
__d("XPagesWelcomeNoteWriteController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/pages\/welcome_note\/write\/",{});},null);