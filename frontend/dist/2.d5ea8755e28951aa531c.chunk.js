webpackJsonp([2],{P9AL:function(e,t){function n(e,t,r){this.extend(n,google.maps.OverlayView),this.map_=e,this.markers_=[],this.clusters_=[],this.sizes=[53,56,66,78,90],this.styles_=[],this.ready_=!1;var i=r||{};this.gridSize_=i.gridSize||60,this.minClusterSize_=i.minimumClusterSize||2,this.maxZoom_=i.maxZoom||null,this.styles_=i.styles||[],this.imagePath_=i.imagePath||this.MARKER_CLUSTER_IMAGE_PATH_,this.imageExtension_=i.imageExtension||this.MARKER_CLUSTER_IMAGE_EXTENSION_,this.zoomOnClick_=!0,void 0!=i.zoomOnClick&&(this.zoomOnClick_=i.zoomOnClick),this.averageCenter_=!1,void 0!=i.averageCenter&&(this.averageCenter_=i.averageCenter),this.setupStyles_(),this.setMap(e),this.prevZoom_=this.map_.getZoom();var o=this;google.maps.event.addListener(this.map_,"zoom_changed",function(){var e=o.map_.getZoom();o.prevZoom_!=e&&(o.prevZoom_=e,o.resetViewport())}),google.maps.event.addListener(this.map_,"idle",function(){o.redraw()}),t&&t.length&&this.addMarkers(t,!1)}function r(e){this.markerClusterer_=e,this.map_=e.getMap(),this.gridSize_=e.getGridSize(),this.minClusterSize_=e.getMinClusterSize(),this.averageCenter_=e.isAverageCenter(),this.center_=null,this.markers_=[],this.bounds_=null,this.clusterIcon_=new i(this,e.getStyles(),e.getGridSize())}function i(e,t,n){e.getMarkerClusterer().extend(i,google.maps.OverlayView),this.styles_=t,this.padding_=n||0,this.cluster_=e,this.center_=null,this.map_=e.getMap(),this.div_=null,this.sums_=null,this.visible_=!1,this.setMap(this.map_)}n.prototype.MARKER_CLUSTER_IMAGE_PATH_="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m",n.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_="png",n.prototype.extend=function(e,t){return function(e){for(var t in e.prototype)this.prototype[t]=e.prototype[t];return this}.apply(e,[t])},n.prototype.onAdd=function(){this.setReady_(!0)},n.prototype.draw=function(){},n.prototype.setupStyles_=function(){if(!this.styles_.length)for(var e,t=0;e=this.sizes[t];t++)this.styles_.push({url:this.imagePath_+(t+1)+"."+this.imageExtension_,height:e,width:e})},n.prototype.fitMapToMarkers=function(){for(var e,t=this.getMarkers(),n=new google.maps.LatLngBounds,r=0;e=t[r];r++)n.extend(e.getPosition());this.map_.fitBounds(n)},n.prototype.setStyles=function(e){this.styles_=e},n.prototype.getStyles=function(){return this.styles_},n.prototype.isZoomOnClick=function(){return this.zoomOnClick_},n.prototype.isAverageCenter=function(){return this.averageCenter_},n.prototype.getMarkers=function(){return this.markers_},n.prototype.getTotalMarkers=function(){return this.markers_.length},n.prototype.setMaxZoom=function(e){this.maxZoom_=e},n.prototype.getMaxZoom=function(){return this.maxZoom_},n.prototype.calculator_=function(e,t){for(var n=0,r=e.length,i=r;0!==i;)i=parseInt(i/10,10),n++;return n=Math.min(n,t),{text:r,index:n}},n.prototype.setCalculator=function(e){this.calculator_=e},n.prototype.getCalculator=function(){return this.calculator_},n.prototype.addMarkers=function(e,t){for(var n,r=0;n=e[r];r++)this.pushMarkerTo_(n);t||this.redraw()},n.prototype.pushMarkerTo_=function(e){if(e.isAdded=!1,e.draggable){var t=this;google.maps.event.addListener(e,"dragend",function(){e.isAdded=!1,t.repaint()})}this.markers_.push(e)},n.prototype.addMarker=function(e,t){this.pushMarkerTo_(e),t||this.redraw()},n.prototype.removeMarker_=function(e){var t=-1;if(this.markers_.indexOf)t=this.markers_.indexOf(e);else for(var n,r=0;n=this.markers_[r];r++)if(n==e){t=r;break}return-1!=t&&(e.setMap(null),this.markers_.splice(t,1),!0)},n.prototype.removeMarker=function(e,t){var n=this.removeMarker_(e);return!(t||!n)&&(this.resetViewport(),this.redraw(),!0)},n.prototype.removeMarkers=function(e,t){for(var n,r=!1,i=0;n=e[i];i++){var o=this.removeMarker_(n);r=r||o}if(!t&&r)return this.resetViewport(),this.redraw(),!0},n.prototype.setReady_=function(e){this.ready_||(this.ready_=e,this.createClusters_())},n.prototype.getTotalClusters=function(){return this.clusters_.length},n.prototype.getMap=function(){return this.map_},n.prototype.setMap=function(e){this.map_=e},n.prototype.getGridSize=function(){return this.gridSize_},n.prototype.setGridSize=function(e){this.gridSize_=e},n.prototype.getMinClusterSize=function(){return this.minClusterSize_},n.prototype.setMinClusterSize=function(e){this.minClusterSize_=e},n.prototype.getExtendedBounds=function(e){var t=this.getProjection(),n=new google.maps.LatLng(e.getNorthEast().lat(),e.getNorthEast().lng()),r=new google.maps.LatLng(e.getSouthWest().lat(),e.getSouthWest().lng()),i=t.fromLatLngToDivPixel(n);i.x+=this.gridSize_,i.y-=this.gridSize_;var o=t.fromLatLngToDivPixel(r);o.x-=this.gridSize_,o.y+=this.gridSize_;var l=t.fromDivPixelToLatLng(i),s=t.fromDivPixelToLatLng(o);return e.extend(l),e.extend(s),e},n.prototype.isMarkerInBounds_=function(e,t){return t.contains(e.getPosition())},n.prototype.clearMarkers=function(){this.resetViewport(!0),this.markers_=[]},n.prototype.resetViewport=function(e){for(var t,n=0;t=this.clusters_[n];n++)t.remove();for(var r,n=0;r=this.markers_[n];n++)r.isAdded=!1,e&&r.setMap(null);this.clusters_=[]},n.prototype.repaint=function(){var e=this.clusters_.slice();this.clusters_.length=0,this.resetViewport(),this.redraw(),window.setTimeout(function(){for(var t,n=0;t=e[n];n++)t.remove()},0)},n.prototype.redraw=function(){this.createClusters_()},n.prototype.distanceBetweenPoints_=function(e,t){if(!e||!t)return 0;var n=(t.lat()-e.lat())*Math.PI/180,r=(t.lng()-e.lng())*Math.PI/180,i=Math.sin(n/2)*Math.sin(n/2)+Math.cos(e.lat()*Math.PI/180)*Math.cos(t.lat()*Math.PI/180)*Math.sin(r/2)*Math.sin(r/2);return 2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))*6371},n.prototype.addToClosestCluster_=function(e){for(var t,n=4e4,i=null,o=(e.getPosition(),0);t=this.clusters_[o];o++){var l=t.getCenter();if(l){var s=this.distanceBetweenPoints_(l,e.getPosition());s<n&&(n=s,i=t)}}if(i&&i.isMarkerInClusterBounds(e))i.addMarker(e);else{var t=new r(this);t.addMarker(e),this.clusters_.push(t)}},n.prototype.createClusters_=function(){if(this.ready_)for(var e,t=new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),this.map_.getBounds().getNorthEast()),n=this.getExtendedBounds(t),r=0;e=this.markers_[r];r++)!e.isAdded&&this.isMarkerInBounds_(e,n)&&this.addToClosestCluster_(e)},r.prototype.isMarkerAlreadyAdded=function(e){if(this.markers_.indexOf)return-1!=this.markers_.indexOf(e);for(var t,n=0;t=this.markers_[n];n++)if(t==e)return!0;return!1},r.prototype.addMarker=function(e){if(this.isMarkerAlreadyAdded(e))return!1;if(this.center_){if(this.averageCenter_){var t=this.markers_.length+1,n=(this.center_.lat()*(t-1)+e.getPosition().lat())/t,r=(this.center_.lng()*(t-1)+e.getPosition().lng())/t;this.center_=new google.maps.LatLng(n,r),this.calculateBounds_()}}else this.center_=e.getPosition(),this.calculateBounds_();e.isAdded=!0,this.markers_.push(e);var i=this.markers_.length;if(i<this.minClusterSize_&&e.getMap()!=this.map_&&e.setMap(this.map_),i==this.minClusterSize_)for(var o=0;o<i;o++)this.markers_[o].setMap(null);return i>=this.minClusterSize_&&e.setMap(null),this.updateIcon(),!0},r.prototype.getMarkerClusterer=function(){return this.markerClusterer_},r.prototype.getBounds=function(){for(var e,t=new google.maps.LatLngBounds(this.center_,this.center_),n=this.getMarkers(),r=0;e=n[r];r++)t.extend(e.getPosition());return t},r.prototype.remove=function(){this.clusterIcon_.remove(),this.markers_.length=0,delete this.markers_},r.prototype.getSize=function(){return this.markers_.length},r.prototype.getMarkers=function(){return this.markers_},r.prototype.getCenter=function(){return this.center_},r.prototype.calculateBounds_=function(){var e=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(e)},r.prototype.isMarkerInClusterBounds=function(e){return this.bounds_.contains(e.getPosition())},r.prototype.getMap=function(){return this.map_},r.prototype.updateIcon=function(){var e=this.map_.getZoom(),t=this.markerClusterer_.getMaxZoom();if(t&&e>t)for(var n,r=0;n=this.markers_[r];r++)n.setMap(this.map_);else{if(this.markers_.length<this.minClusterSize_)return void this.clusterIcon_.hide();var i=this.markerClusterer_.getStyles().length,o=this.markerClusterer_.getCalculator()(this.markers_,i);this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.setSums(o),this.clusterIcon_.show()}},i.prototype.triggerClusterClick=function(){var e=this.cluster_.getMarkerClusterer();google.maps.event.trigger(e,"clusterclick",this.cluster_),e.isZoomOnClick()&&this.map_.fitBounds(this.cluster_.getBounds())},i.prototype.onAdd=function(){if(this.div_=document.createElement("DIV"),this.visible_){var e=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(e),this.div_.innerHTML=this.sums_.text}this.getPanes().overlayMouseTarget.appendChild(this.div_);var t=this;google.maps.event.addDomListener(this.div_,"click",function(){t.triggerClusterClick()})},i.prototype.getPosFromLatLng_=function(e){var t=this.getProjection().fromLatLngToDivPixel(e);return"object"==typeof this.iconAnchor_&&2===this.iconAnchor_.length?(t.x-=this.iconAnchor_[0],t.y-=this.iconAnchor_[1]):(t.x-=parseInt(this.width_/2,10),t.y-=parseInt(this.height_/2,10)),t},i.prototype.draw=function(){if(this.visible_){var e=this.getPosFromLatLng_(this.center_);this.div_.style.top=e.y+"px",this.div_.style.left=e.x+"px"}},i.prototype.hide=function(){this.div_&&(this.div_.style.display="none"),this.visible_=!1},i.prototype.show=function(){if(this.div_){var e=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(e),this.div_.style.display=""}this.visible_=!0},i.prototype.remove=function(){this.setMap(null)},i.prototype.onRemove=function(){this.div_&&this.div_.parentNode&&(this.hide(),this.div_.parentNode.removeChild(this.div_),this.div_=null)},i.prototype.setSums=function(e){this.sums_=e,this.text_=e.text,this.index_=e.index,this.div_&&(this.div_.innerHTML=e.text),this.useStyle()},i.prototype.useStyle=function(){var e=Math.max(0,this.sums_.index-1);e=Math.min(this.styles_.length-1,e);var t=this.styles_[e];this.url_=t.url,this.height_=t.height,this.width_=t.width,this.textColor_=t.textColor,this.anchor_=t.anchor,this.textSize_=t.textSize,this.backgroundPosition_=t.backgroundPosition,this.iconAnchor_=t.iconAnchor},i.prototype.setCenter=function(e){this.center_=e},i.prototype.createCss=function(e){var t=[];t.push("background-image:url("+this.url_+");");var n=this.backgroundPosition_?this.backgroundPosition_:"0 0";t.push("background-position:"+n+";"),"object"==typeof this.anchor_?("number"==typeof this.anchor_[0]&&this.anchor_[0]>0&&this.anchor_[0]<this.height_?t.push("height:"+(this.height_-this.anchor_[0])+"px; padding-top:"+this.anchor_[0]+"px;"):"number"==typeof this.anchor_[0]&&this.anchor_[0]<0&&-this.anchor_[0]<this.height_?t.push("height:"+this.height_+"px; line-height:"+(this.height_+this.anchor_[0])+"px;"):t.push("height:"+this.height_+"px; line-height:"+this.height_+"px;"),"number"==typeof this.anchor_[1]&&this.anchor_[1]>0&&this.anchor_[1]<this.width_?t.push("width:"+(this.width_-this.anchor_[1])+"px; padding-left:"+this.anchor_[1]+"px;"):t.push("width:"+this.width_+"px; text-align:center;")):t.push("height:"+this.height_+"px; line-height:"+this.height_+"px; width:"+this.width_+"px; text-align:center;");var r=this.textColor_?this.textColor_:"black",i=this.textSize_?this.textSize_:11;return t.push("cursor:pointer; top:"+e.y+"px; left:"+e.x+"px; color:"+r+"; position:absolute; font-size:"+i+"px; font-family:Arial,sans-serif; font-weight:bold"),t.join("")},window.MarkerClusterer=n,n.prototype.addMarker=n.prototype.addMarker,n.prototype.addMarkers=n.prototype.addMarkers,n.prototype.clearMarkers=n.prototype.clearMarkers,n.prototype.fitMapToMarkers=n.prototype.fitMapToMarkers,n.prototype.getCalculator=n.prototype.getCalculator,n.prototype.getGridSize=n.prototype.getGridSize,n.prototype.getExtendedBounds=n.prototype.getExtendedBounds,n.prototype.getMap=n.prototype.getMap,n.prototype.getMarkers=n.prototype.getMarkers,n.prototype.getMaxZoom=n.prototype.getMaxZoom,n.prototype.getStyles=n.prototype.getStyles,n.prototype.getTotalClusters=n.prototype.getTotalClusters,n.prototype.getTotalMarkers=n.prototype.getTotalMarkers,n.prototype.redraw=n.prototype.redraw,n.prototype.removeMarker=n.prototype.removeMarker,n.prototype.removeMarkers=n.prototype.removeMarkers,n.prototype.resetViewport=n.prototype.resetViewport,n.prototype.repaint=n.prototype.repaint,n.prototype.setCalculator=n.prototype.setCalculator,n.prototype.setGridSize=n.prototype.setGridSize,n.prototype.setMaxZoom=n.prototype.setMaxZoom,n.prototype.onAdd=n.prototype.onAdd,n.prototype.draw=n.prototype.draw,r.prototype.getCenter=r.prototype.getCenter,r.prototype.getSize=r.prototype.getSize,r.prototype.getMarkers=r.prototype.getMarkers,i.prototype.onAdd=i.prototype.onAdd,i.prototype.draw=i.prototype.draw,i.prototype.onRemove=i.prototype.onRemove},UH1D:function(e,t,n){"use strict";function r(e){return g._41(0,[(e()(),g._20(0,null,null,3,"div",[["class","agm-info-window-content"]],null,null,null,null,null)),(e()(),g._40(null,["\n      "])),g._33(null,0),(e()(),g._40(null,["\n    "])),(e()(),g._40(null,["\n  "]))],null,null)}function i(e){return g._41(0,[(e()(),g._20(0,null,null,1,"agm-info-window",[],null,null,null,r,M)),g._18(770048,null,0,v.a,[k.a,g.o],null,null)],function(e,t){e(t,1,0)},null)}function o(e){return g._41(0,[(e()(),g._20(0,null,null,3,"option",[],null,null,null,null,null)),g._18(147456,null,0,m.o,[g.o,g.Q,[2,m.r]],{value:[0,"value"]},null),g._18(147456,null,0,m.w,[g.o,g.Q,[8,null]],{value:[0,"value"]},null),(e()(),g._40(null,[" \n                        ","\n                "]))],function(e,t){e(t,1,0,t.context.$implicit.label),e(t,2,0,t.context.$implicit.label)},function(e,t){e(t,3,0,t.context.$implicit.label)})}function l(e){return g._41(0,[(e()(),g._20(0,null,null,3,"option",[],null,null,null,null,null)),g._18(147456,null,0,m.o,[g.o,g.Q,[2,m.r]],{value:[0,"value"]},null),g._18(147456,null,0,m.w,[g.o,g.Q,[8,null]],{value:[0,"value"]},null),(e()(),g._40(null,[" \n                        ","\n                "]))],function(e,t){e(t,1,0,t.context.$implicit),e(t,2,0,t.context.$implicit)},function(e,t){e(t,3,0,t.context.$implicit)})}function s(e){return g._41(0,[(e()(),g._20(0,null,null,9,"agm-marker",[],null,[[null,"markerClick"],[null,"mouseOver"],[null,"mouseOut"]],function(e,t,n){var r=!0,i=e.component;if("markerClick"===t){r=!1!==i.clickedMarker(e.context.$implicit,e.context.index)&&r}if("mouseOver"===t){r=!1!==i.mouseOver(g._34(e,5),e.context.$implicit)&&r}if("mouseOut"===t){r=!1!==i.mouseOut(g._34(e,5),e.context.$implicit)&&r}return r},null,null)),g._18(1720320,null,1,f.a,[y.a],{latitude:[0,"latitude"],longitude:[1,"longitude"],iconUrl:[2,"iconUrl"],visible:[3,"visible"]},{markerClick:"markerClick",mouseOver:"mouseOver",mouseOut:"mouseOut"}),g._38(603979776,1,{infoWindow:1}),(e()(),g._40(null,["           \n                  "])),(e()(),g._20(0,null,null,4,"agm-info-window",[],null,null,null,r,M)),g._18(770048,[[1,4],["infoWindow",4]],0,v.a,[k.a,g.o],{latitude:[0,"latitude"],longitude:[1,"longitude"],isOpen:[2,"isOpen"]},null),(e()(),g._40(0,["",""])),(e()(),g._20(0,null,0,0,"br",[],null,null,null,null,null)),(e()(),g._40(0,[" ","\n                  "])),(e()(),g._40(null,["\n          "]))],function(e,t){var n=t.component;e(t,1,0,t.context.$implicit.lat,t.context.$implicit.lng,t.context.$implicit.iconUrl,null==n.markerHidden[t.context.$implicit.label]?null:n.markerHidden[t.context.$implicit.label].val),e(t,5,0,t.context.$implicit.lat,t.context.$implicit.lng,t.context.$implicit.info)},function(e,t){e(t,6,0,t.context.$implicit.label),e(t,8,0,t.context.$implicit.message)})}function a(e){return g._41(0,[(e()(),g._20(0,null,null,20,"agm-map",[],[[2,"sebm-google-map-container",null]],[[null,"zoomChange"]],function(e,t,n){var r=!0,i=e.component;if("zoomChange"===t){r=!1!==i.zoomChange(n)&&r}return r},w.b,w.a)),g._37(4608,null,y.a,y.a,[x.a,g.H]),g._37(4608,null,k.a,k.a,[x.a,g.H,y.a]),g._37(4608,null,S.a,S.a,[x.a,g.H]),g._37(4608,null,P.a,P.a,[x.a,g.H]),g._37(4608,null,b.a,b.a,[x.a,g.H]),g._37(4608,null,O.a,O.a,[x.a,g.H]),g._37(4608,null,z.a,z.a,[x.a,g.H]),g._37(512,null,x.a,x.a,[L.a,g.H]),g._18(770048,null,0,I.a,[g.o,x.a],{longitude:[0,"longitude"],latitude:[1,"latitude"],zoom:[2,"zoom"],mapTypeControl:[3,"mapTypeControl"]},{zoomChange:"zoomChange"}),(e()(),g._40(0,["\n        "])),(e()(),g._20(0,null,0,8,"agm-marker-cluster",[["imagePath","https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m"]],null,null,null,null,null)),g._37(6144,null,y.a,null,[H]),g._37(4608,null,k.a,k.a,[x.a,g.H,y.a]),g._37(512,null,H,H,[x.a,g.H]),g._18(737280,null,0,E,[H],{averageCenter:[0,"averageCenter"],imagePath:[1,"imagePath"]},null),(e()(),g._40(null,["\n           "])),(e()(),g._14(16777216,null,null,1,null,s)),g._18(802816,null,0,T.i,[g._2,g.Z,g.z],{ngForOf:[0,"ngForOf"]},null),(e()(),g._40(null,["\n        "])),(e()(),g._40(0,["\n        "]))],function(e,t){var n=t.component;e(t,9,0,n.lng,n.lat,n.zoomLevel,!0);e(t,15,0,!0,"https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m"),e(t,18,0,n.selectedData)},function(e,t){e(t,0,0,!0)})}function u(e){return g._41(0,[(e()(),g._20(0,null,null,9,"agm-marker",[],null,[[null,"markerClick"],[null,"mouseOver"],[null,"mouseOut"]],function(e,t,n){var r=!0,i=e.component;if("markerClick"===t){r=!1!==i.clickedMarker(e.context.$implicit,e.context.index)&&r}if("mouseOver"===t){r=!1!==i.mouseOver(g._34(e,5),e.context.$implicit)&&r}if("mouseOut"===t){r=!1!==i.mouseOut(g._34(e,5),e.context.$implicit)&&r}return r},null,null)),g._18(1720320,null,1,f.a,[y.a],{latitude:[0,"latitude"],longitude:[1,"longitude"],iconUrl:[2,"iconUrl"],visible:[3,"visible"]},{markerClick:"markerClick",mouseOver:"mouseOver",mouseOut:"mouseOut"}),g._38(603979776,2,{infoWindow:1}),(e()(),g._40(null,["           \n                          "])),(e()(),g._20(0,null,null,4,"agm-info-window",[],null,null,null,r,M)),g._18(770048,[[2,4],["infoWindow",4]],0,v.a,[k.a,g.o],{latitude:[0,"latitude"],longitude:[1,"longitude"],isOpen:[2,"isOpen"]},null),(e()(),g._40(0,["",""])),(e()(),g._20(0,null,0,0,"br",[],null,null,null,null,null)),(e()(),g._40(0,[" ","\n                          "])),(e()(),g._40(null,["\n                  "]))],function(e,t){var n=t.component;e(t,1,0,t.context.$implicit.lat,t.context.$implicit.lng,t.context.$implicit.iconUrl,null==n.markerHidden[t.context.$implicit.label]?null:n.markerHidden[t.context.$implicit.label].val),e(t,5,0,t.context.$implicit.lat,t.context.$implicit.lng,t.context.$implicit.info)},function(e,t){e(t,6,0,t.context.$implicit.label),e(t,8,0,t.context.$implicit.message)})}function c(e){return g._41(0,[(e()(),g._20(0,null,null,13,"agm-map",[],[[2,"sebm-google-map-container",null]],[[null,"zoomChange"]],function(e,t,n){var r=!0,i=e.component;if("zoomChange"===t){r=!1!==i.zoomChange(n)&&r}return r},w.b,w.a)),g._37(4608,null,y.a,y.a,[x.a,g.H]),g._37(4608,null,k.a,k.a,[x.a,g.H,y.a]),g._37(4608,null,S.a,S.a,[x.a,g.H]),g._37(4608,null,P.a,P.a,[x.a,g.H]),g._37(4608,null,b.a,b.a,[x.a,g.H]),g._37(4608,null,O.a,O.a,[x.a,g.H]),g._37(4608,null,z.a,z.a,[x.a,g.H]),g._37(512,null,x.a,x.a,[L.a,g.H]),g._18(770048,null,0,I.a,[g.o,x.a],{longitude:[0,"longitude"],latitude:[1,"latitude"],zoom:[2,"zoom"],mapTypeControl:[3,"mapTypeControl"]},{zoomChange:"zoomChange"}),(e()(),g._40(0,["\n                   "])),(e()(),g._14(16777216,null,0,1,null,u)),g._18(802816,null,0,T.i,[g._2,g.Z,g.z],{ngForOf:[0,"ngForOf"]},null),(e()(),g._40(0,["\n        "]))],function(e,t){var n=t.component;e(t,9,0,n.lng,n.lat,n.zoomLevel,!0),e(t,12,0,n.selectedData)},function(e,t){e(t,0,0,!0)})}function p(e){return g._41(0,[(e()(),g._20(0,null,null,42,"div",[["class","container"]],null,null,null,null,null)),(e()(),g._40(null,["\n        "])),(e()(),g._20(0,null,null,33,"div",[],null,null,null,null,null)),(e()(),g._40(null,["\n            "])),(e()(),g._20(0,null,null,14,"select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(e,t,n){var r=!0,i=e.component;if("change"===t){r=!1!==g._34(e,5).onChange(n.target.value)&&r}if("blur"===t){r=!1!==g._34(e,5).onTouched()&&r}if("ngModelChange"===t){r=!1!==(i.selected=n)&&r}if("ngModelChange"===t){r=!1!==i.onSelected(i.selected)&&r}return r},null,null)),g._18(16384,null,0,m.r,[g.Q,g.o],null,null),g._37(1024,null,m.i,function(e){return[e]},[m.r]),g._18(671744,null,0,m.n,[[8,null],[8,null],[8,null],[2,m.i]],{model:[0,"model"]},{update:"ngModelChange"}),g._37(2048,null,m.j,null,[m.n]),g._18(16384,null,0,m.k,[m.j],null,null),(e()(),g._40(null,["\n         "])),(e()(),g._20(0,null,null,3,"option",[["disabled",""],["hidden",""]],null,null,null,null,null)),g._18(147456,null,0,m.o,[g.o,g.Q,[2,m.r]],{value:[0,"value"]},null),g._18(147456,null,0,m.w,[g.o,g.Q,[8,null]],{value:[0,"value"]},null),(e()(),g._40(null,["Select Device Id "])),(e()(),g._40(null,["\n                "])),(e()(),g._14(16777216,null,null,1,null,o)),g._18(802816,null,0,T.i,[g._2,g.Z,g.z],{ngForOf:[0,"ngForOf"]},null),(e()(),g._40(null,["\n           "])),(e()(),g._40(null,["\n        \n            "])),(e()(),g._20(0,null,null,14,"select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(e,t,n){var r=!0,i=e.component;if("change"===t){r=!1!==g._34(e,21).onChange(n.target.value)&&r}if("blur"===t){r=!1!==g._34(e,21).onTouched()&&r}if("ngModelChange"===t){r=!1!==(i.select=n)&&r}if("ngModelChange"===t){r=!1!==i.onSelect(i.select)&&r}return r},null,null)),g._18(16384,null,0,m.r,[g.Q,g.o],null,null),g._37(1024,null,m.i,function(e){return[e]},[m.r]),g._18(671744,null,0,m.n,[[8,null],[8,null],[8,null],[2,m.i]],{model:[0,"model"]},{update:"ngModelChange"}),g._37(2048,null,m.j,null,[m.n]),g._18(16384,null,0,m.k,[m.j],null,null),(e()(),g._40(null,["\n                "])),(e()(),g._20(0,null,null,3,"option",[["disabled",""],["hidden",""]],null,null,null,null,null)),g._18(147456,null,0,m.o,[g.o,g.Q,[2,m.r]],{value:[0,"value"]},null),g._18(147456,null,0,m.w,[g.o,g.Q,[8,null]],{value:[0,"value"]},null),(e()(),g._40(null,["Select Device Status "])),(e()(),g._40(null,["\n                "])),(e()(),g._14(16777216,null,null,1,null,l)),g._18(802816,null,0,T.i,[g._2,g.Z,g.z],{ngForOf:[0,"ngForOf"]},null),(e()(),g._40(null,["\n           "])),(e()(),g._40(null,["\n        "])),(e()(),g._40(null,["\n        "])),(e()(),g._14(16777216,null,null,1,null,a)),g._18(16384,null,0,T.j,[g._2,g.Z],{ngIf:[0,"ngIf"]},null),(e()(),g._40(null,["\n        "])),(e()(),g._14(16777216,null,null,1,null,c)),g._18(16384,null,0,T.j,[g._2,g.Z],{ngIf:[0,"ngIf"]},null),(e()(),g._40(null,["\n        "]))],function(e,t){var n=t.component;e(t,7,0,n.selected),e(t,12,0,n.selectUndefinedOptionValue),e(t,13,0,n.selectUndefinedOptionValue),e(t,17,0,n.someData),e(t,23,0,n.select),e(t,28,0,n.selectUndefinedOptionValue),e(t,29,0,n.selectUndefinedOptionValue),e(t,33,0,n.options),e(t,38,0,!n.blinkingNot),e(t,41,0,!!n.blinkingNot)},function(e,t){e(t,4,0,g._34(t,9).ngClassUntouched,g._34(t,9).ngClassTouched,g._34(t,9).ngClassPristine,g._34(t,9).ngClassDirty,g._34(t,9).ngClassValid,g._34(t,9).ngClassInvalid,g._34(t,9).ngClassPending),e(t,20,0,g._34(t,25).ngClassUntouched,g._34(t,25).ngClassTouched,g._34(t,25).ngClassPristine,g._34(t,25).ngClassDirty,g._34(t,25).ngClassValid,g._34(t,25).ngClassInvalid,g._34(t,25).ngClassPending)})}function h(e){return g._41(0,[(e()(),g._20(0,null,null,1,"ng-component",[],null,null,null,p,j)),g._18(245760,null,0,G,[R.l,$.f,U.a],null,null)],function(e,t){e(t,1,0)},null)}Object.defineProperty(t,"__esModule",{value:!0});var g=n("/oeL"),d=function(){function e(){}return e}(),_=["agm-map[_ngcontent-%COMP%]{height:580px}select[_ngcontent-%COMP%]{width:180px;height:30px;border:1px solid;font-size:15px}option[_ngcontent-%COMP%]{width:200px;height:35px}"],m=n("bm2B"),f=n("57RD"),y=n("dY6p"),v=n("MVht"),k=n("KdOF"),C=[],M=g._17({encapsulation:2,styles:C,data:{}}),w=(g._15("agm-info-window",v.a,i,{latitude:"latitude",longitude:"longitude",disableAutoPan:"disableAutoPan",zIndex:"zIndex",maxWidth:"maxWidth",isOpen:"isOpen"},{infoWindowClose:"infoWindowClose"},["*"]),n("9U4N")),x=n("BfPg"),S=n("DCX4"),P=n("Ds4W"),b=n("9fk+"),O=n("mECe"),z=n("7PDj"),L=n("wW3n"),I=n("t+Rn"),D=(n("P9AL"),this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),H=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r._mapsWrapper=t,r._zone=n,r._clustererInstance=new Promise(function(e){r._resolver=e}),r}return D(t,e),t.prototype.init=function(e){var t=this;this._mapsWrapper.getNativeMap().then(function(n){var r=new MarkerClusterer(n,[],e);t._resolver(r)})},t.prototype.addMarker=function(e){var t=this._clustererInstance,n=this._mapsWrapper.createMarker({position:{lat:e.latitude,lng:e.longitude},label:e.label,draggable:e.draggable,icon:e.iconUrl,opacity:e.opacity,visible:e.visible,zIndex:e.zIndex,title:e.title,clickable:e.clickable},!1);Promise.all([t,n]).then(function(e){var t=e[0],n=e[1];return t.addMarker(n)}),this._markers.set(e,n)},t.prototype.deleteMarker=function(e){var t=this,n=this._markers.get(e);return null==n?Promise.resolve():n.then(function(n){t._zone.run(function(){n.setMap(null),t._clustererInstance.then(function(r){r.removeMarker(n),t._markers.delete(e)})})})},t.prototype.clearMarkers=function(){return this._clustererInstance.then(function(e){e.clearMarkers()})},t.prototype.setGridSize=function(e){this._clustererInstance.then(function(t){t.setGridSize(e.gridSize)})},t.prototype.setMaxZoom=function(e){this._clustererInstance.then(function(t){t.setMaxZoom(e.maxZoom)})},t.prototype.setStyles=function(e){this._clustererInstance.then(function(t){t.setStyles(e.styles)})},t.prototype.setZoomOnClick=function(e){this._clustererInstance.then(function(t){void 0!==e.zoomOnClick&&(t.zoomOnClick_=e.zoomOnClick)})},t.prototype.setAverageCenter=function(e){this._clustererInstance.then(function(t){void 0!==e.averageCenter&&(t.averageCenter_=e.averageCenter)})},t.prototype.setImagePath=function(e){this._clustererInstance.then(function(t){void 0!==e.imagePath&&(t.imagePath_=e.imagePath)})},t.prototype.setMinimumClusterSize=function(e){this._clustererInstance.then(function(t){void 0!==e.minimumClusterSize&&(t.minimumClusterSize_=e.minimumClusterSize)})},t.prototype.setImageExtension=function(e){this._clustererInstance.then(function(t){void 0!==e.imageExtension&&(t.imageExtension_=e.imageExtension)})},t.decorators=[{type:g.v}],t.ctorParameters=function(){return[{type:x.a},{type:g.H}]},t}(y.a),N=(n("Da1i"),n("NhXU"),n("Nrw8"),n("ftnM"),n("1s5s"),n("u7vS"),n("wvx+")),A=(function(){function e(){}e.prototype.load=function(){if(!window.google||!window.google.maps)throw new Error("Google Maps API not loaded on page. Make sure window.google.maps is available!");return Promise.resolve()}}(),n("q+Vp")),E=function(){function e(e){this._clusterManager=e}return e.prototype.ngOnDestroy=function(){this._clusterManager.clearMarkers()},e.prototype.ngOnChanges=function(e){e.gridSize&&this._clusterManager.setGridSize(this),e.maxZoom&&this._clusterManager.setMaxZoom(this),e.styles&&this._clusterManager.setStyles(this),e.zoomOnClick&&this._clusterManager.setZoomOnClick(this),e.averageCenter&&this._clusterManager.setAverageCenter(this),e.minimumClusterSize&&this._clusterManager.setMinimumClusterSize(this),e.styles&&this._clusterManager.setStyles(this),e.imagePath&&this._clusterManager.setImagePath(this),e.imageExtension&&this._clusterManager.setImageExtension(this)},e.prototype.ngOnInit=function(){this._clusterManager.init({gridSize:this.gridSize,maxZoom:this.maxZoom,zoomOnClick:this.zoomOnClick,averageCenter:this.averageCenter,minimumClusterSize:this.minimumClusterSize,styles:this.styles,imagePath:this.imagePath,imageExtension:this.imageExtension})},e.decorators=[{type:g.n,args:[{selector:"agm-marker-cluster",providers:[H,{provide:y.a,useExisting:H},k.a]}]}],e.ctorParameters=function(){return[{type:H}]},e.propDecorators={gridSize:[{type:g.y}],maxZoom:[{type:g.y}],zoomOnClick:[{type:g.y}],averageCenter:[{type:g.y}],minimumClusterSize:[{type:g.y}],styles:[{type:g.y}],imagePath:[{type:g.y}],imageExtension:[{type:g.y}]},e}(),T=n("qbdv"),R=n("BkNc"),B=n("5ERs"),Z=n("TbKO"),$=n("CPp0"),G=(n("5v8a"),function(){function e(e,t,n){this.router=e,this.http=t,this.nav=n,this.title="My first AGM project",this.lat=12.98164225,this.lng=77.59287357,this.mapID="TERRAIN",this.userId="12345",this.message="hi",this.tankPressure=0,this.linePressure=0,this.markerOpen=!1,this.blinkingNot=!1,this.selectedVal="All",this.markerHidden={},this.intevalTime=500,this.thHistory={},this.options=["Red","Yellow","Green","Disconnected","All"],this.someData=[{lat:51.673858,lng:7.615982,label:"Map A",draggable:!0,value:"GREEN",iconUrl:"http://maps.google.com/mapfiles/ms/icons/green.png",message:"",info:!1},{lat:51.373858,lng:7.215982,label:"Map B",draggable:!1,value:"RED",iconUrl:"http://maps.google.com/mapfiles/ms/icons/red.png",message:"",info:!1},{lat:51.723858,lng:7.895982,label:"Map C",draggable:!0,value:"YELLOW",iconUrl:"http://maps.google.com/mapfiles/ms/icons/yellow.png",message:"",info:!1}],this.currentUser=JSON.parse(localStorage.getItem("currentUser")),void 0!=Number(JSON.parse(localStorage.getItem("zoomLevel")))&&0!=Number(JSON.parse(localStorage.getItem("zoomLevel")))||localStorage.setItem("zoomLevel",JSON.stringify(10)),this.zoomLevel=Number(JSON.parse(localStorage.getItem("zoomLevel")))}return e.prototype.ngOnInit=function(){var e=this;this.markerHidden=null!=localStorage.getItem("markerHidden")?JSON.parse(localStorage.getItem("markerHidden")):{},this.thHistory=null!=localStorage.getItem("thHistory")?JSON.parse(localStorage.getItem("thHistory")):{},null!=this.markerHidden&&null!=this.thHistory&&this.callBlinkInterval(),this.userId=JSON.parse(localStorage.getItem("currentUser")),this.getDeviceAttributes(this.userId),this.interval=setInterval(function(){e.getDeviceAttributes(e.userId)},15e3)},e.prototype.ngOnDestroy=function(){clearInterval(this.interval)},e.prototype.clickedMarker=function(e,t){this.router.navigate(["./gauges/:"+e.label]),delete this.markerHidden[e.label],delete this.thHistory[e.label],localStorage.setItem("markerHidden",JSON.stringify(this.markerHidden)),localStorage.setItem("thHistory",JSON.stringify(this.thHistory))},e.prototype.zoomChange=function(e){localStorage.setItem("zoomLevel",JSON.stringify(e)),this.zoomLevel=Number(JSON.parse(localStorage.getItem("zoomLevel")))},e.prototype.mouseOver=function(e,t){this.deviceName=t.label,this.message=t.message,e.open()},e.prototype.mouseOut=function(e,t){e.close()},e.prototype.onSelect=function(e){this.selectedVal=e,this.selectedData=this.someData.filter(function(t){return t.value==e||-1!=t.value.indexOf(e)}),"All"==e&&(this.selectedData=this.someData)},e.prototype.onSelected=function(e){for(var t=0;t<this.someData.length;t++)this.markerOpen=!1,this.someData[t].info=!1,this.someData[t].label==e&&(this.lat=this.someData[t].lat,this.lng=this.someData[t].lng,this.someData[t].info=!0)},e.prototype.callBlinkInterval=function(){var e=this;console.log("called"),clearInterval(this.markerInterval),this.markerInterval=setInterval(function(){Object.keys(Object.keys(e.markerHidden).reduce(function(t,n){return 1==e.markerHidden[n].change&&(t[n]=e.markerHidden[n].change),t},{})).map(function(t){e.markerHidden[t].val=!e.markerHidden[t].val})},this.intevalTime)},e.prototype.getDeviceAttributes=function(e){var t,n=this,r=[];this.http.post("/users/deviceList",{user_id:e}).map(function(e){return e.json()}).subscribe(function(e){console.log(e);for(var i=0;i<e.length;i++){"undefined"!=e[i].http_post_interval?(t=Number(e[i].http_post_interval),t>=60?t=t:t<60&&t>=30?t*=3:t>0&&t<30&&(t*=5)):(e[i].http_post_interval=0,t=5),t*=1e3,console.log("dashboard",t),"undefined"!=e[i].ang2_threshold&&"undefined"!=e[i].ang3_threshold||(e[i].ang2_threshold="DISABLE",e[i].ang3_threshold="DISABLE",e[i].ang2_lower_limit="20000",e[i].ang3_lower_limit="0");var o={},l=new Date,s=new Date(e[i].server_log_time),a=l.getTime()-s.getTime();console.log(e),console.log(e[i].server_log_time),console.log("date2",s),console.log("today",l),console.log("diffDays",a),console.log("timedif",t),t>=6e4&&(a-=5e4),console.log("diffDays after subtract",a);var u,c,p,h=e[i].device_id,g=e[i].gas_level,d=e[i].gas_detector,_=e[i].tank_pressure,m=e[i].line_pressure,f=!1;if(console.log(n.thHistory),n.tankLevel=Math.round(20*Number(g)),Number(d)>4?n.GasLeak=Math.round(6.25*(Number(d)-4)):n.GasLeak=0,n.powerSupply=Math.round(8.33*Number(e[i].power_level)),e[i].power_level=n.powerSupply,n.tankPressure=Math.round(4*Number(_)*10)/10,n.tankPressure>20&&(n.tankPressure=20),e[i].tank_pressure=n.tankPressure,n.linePressure=Math.round(.4*Number(m)*10)/10,n.linePressure>2&&(n.linePressure=2),e[i].line_pressure=n.linePressure,1==e[i].gas_leak||null!=e[i].ang2_threshold&&"ENABLE"==e[i].ang2_threshold&&null!=e[i].ang2_lower_limit&&1e3*Number(e[i].gas_detector)>Number(e[i].ang2_lower_limit)?(e[i].gas_leak=1,u="Red",p="Gas Leak",c=B.a.imagePath+"redmarker.png",a>t&&(u="Disconnected,Red",p="Gas Leak and Disconnected",c=B.a.imagePath+"redmarkerdisconnected.png")):1==e[i].low_gas||n.tankLevel<=15||n.tankLevel>=85||null!=e[i].ang3_threshold&&"ENABLE"==e[i].ang3_threshold&&null!=e[i].ang3_lower_limit&&1e3*Number(e[i].gas_level)<Number(e[i].ang3_lower_limit)?(e[i].low_gas=1,u="Yellow",p="LPG Level",c=B.a.imagePath+"yellow.png",n.powerSupply<75?(u="Red",p="Low Power Level",c=B.a.imagePath+"redmarker.png",a>t&&(p="LPG Level,Low Power and Disconnected",u="Disconnected,Red",c=B.a.imagePath+"redmarkerdisconnected.png")):a>t&&(p="LPG Level and Disconnected",u="Disconnected,Yellow",c=B.a.imagePath+"yellowmarkerdisconnected.png",n.powerSupply<75&&(u="Disconnected,Red",p="Low Power Level",c=B.a.imagePath+"redmarkerdisconnected.png"))):n.tankPressure<=3||n.tankPressure>=7?(u="Yellow",p="Tank Pressure",c=B.a.imagePath+"yellow.png",n.powerSupply<75?(u="Red",p="Low Power Level",c=B.a.imagePath+"redmarker.png",a>t&&(p="Tank Pressure,Low Power and Disconnected",u="Disconnected,Red",c=B.a.imagePath+"redmarkerdisconnected.png")):a>t&&(p="Tank Pressure and Disconnected",u="Disconnected,Yellow",c=B.a.imagePath+"yellowmarkerdisconnected.png",n.powerSupply<75&&(u="Disconnected,Red",p="Low Power Level",c=B.a.imagePath+"redmarkerdisconnected.png"))):n.linePressure<=.3||n.linePressure>=1.2?(u="Yellow",p="Line Pressure",c=B.a.imagePath+"yellow.png",n.powerSupply<75?(u="Red",p="Low Power Level",c=B.a.imagePath+"redmarker.png",a>t&&(p="Line Pressure,Low Power and Disconnected",u="Disconnected,Red",c=B.a.imagePath+"redmarkerdisconnected.png")):a>t&&(p="Line Pressure and Disconnected",u="Disconnected,Yellow",c=B.a.imagePath+"yellowmarkerdisconnected.png",n.powerSupply<75&&(u="Disconnected,Red",p="Low Power Level",c=B.a.imagePath+"redmarkerdisconnected.png"))):(u="Green",p="All Good ",c=B.a.imagePath+"greenmarker.png",n.powerSupply<75?(u="Red",p="Low Power Level",c=B.a.imagePath+"redmarker.png",a>=t&&(u="Disconnected,Red",p="Low Power Level and Disconnected",c=B.a.imagePath+"redmarkerdisconnected.png")):n.powerSupply>=75?(f=!0,u="Green",c=B.a.imagePath+"greenmarker.png",a>t&&(u="Green,Disconnected",p="Disconnected",c=B.a.imagePath+"greenmarkerdisconnected.png")):a>t?(f=!0,u="Green,Disconnected",p="Disconnected",c=B.a.imagePath+"greenmarkerdisconnected.png"):f=!0),-1!=Object.keys(n.thHistory).indexOf(e[i].device_id)){var y=n.thHistory[e[i].device_id],v=e[i];(0==y.gas_leak&&1==v.gas_leak||y.power_level>=75&&v.power_level<=75||0==y.low_gas&&1==v.low_gas||y.tank_pressure!=v.tank_pressure&&(v.tank_pressure<=3||v.tank_pressure>=7)||y.line_pressure!=v.line_pressure&&(v.line_pressure<=.7||v.line_pressure>=1.2))&&(f||(delete n.markerHidden[e[i].device_id],n.markerHidden[e[i].device_id]={val:!0,change:!0},localStorage.setItem("markerHidden",JSON.stringify(n.markerHidden)),localStorage.setItem("thHistory",JSON.stringify(n.thHistory)),n.callBlinkInterval(),n.blinkingNot=!0,n.intevalTime=600)),0==v.gas_leak&&0==v.low_gas&&v.tank_pressure>=3&&v.tank_pressure<=7&&v.line_pressure>=.7&&v.line_pressure<=1.2&&v.power_level<=75&&f&&(delete n.markerHidden[e[i].device_id],localStorage.setItem("markerHidden",JSON.stringify(n.markerHidden)),localStorage.setItem("thHistory",JSON.stringify(n.thHistory)),n.callBlinkInterval()),f&&delete n.markerHidden[e[i].device_id]}n.thHistory[e[i].device_id]=e[i];var k=e[i].coordinates,k=k.split(","),C=k[0],M=k[1];o.lat=Number(C),o.lng=Number(M),o.label=h,o.value=u,o.iconUrl=c,o.message="Status: "+p,o.info=!1,r.push(o),0==i&&(n.lat=Number(C),n.lng=Number(M))}JSON.stringify(r);n.someData=JSON.parse(JSON.stringify(r)),n.selectedData=n.someData.filter(function(e){return e.value==n.selectedVal||-1!=e.value.indexOf(n.selectedVal)}),"All"==n.selectedVal&&(n.selectedData=n.someData)},function(e){console.log("Oooops!"+e)})},e.ctorParameters=function(){return[{type:R.l},{type:$.f},{type:Z.c}]},e}()),U=n("EDb1"),V=[_],j=g._17({encapsulation:0,styles:V,data:{}}),J=g._15("ng-component",G,h,{},{},[]),W=n("niyx"),F=function(){function e(){}return e.decorators=[{type:g.C,args:[{imports:[A.a],declarations:[E],exports:[E]}]}],e}();n.d(t,"DashboardModuleNgFactory",function(){return Q});var Q=g._16(d,[],function(e){return g._31([g._32(512,g.l,g._12,[[8,[J]],[3,g.l],g.F]),g._32(4608,m.v,m.v,[]),g._32(4608,T.l,T.k,[g.B]),g._32(4608,W.c,W.c,[]),g._32(4608,W.b,W.b,[]),g._32(4608,L.a,N.b,[N.a,W.c,W.b]),g._32(512,A.a,A.a,[]),g._32(512,F,F,[]),g._32(512,m.t,m.t,[]),g._32(512,m.e,m.e,[]),g._32(512,T.b,T.b,[]),g._32(512,R.o,R.o,[[2,R.t],[2,R.l]]),g._32(512,d,d,[]),g._32(1024,R.j,function(){return[[{path:"",component:G}]]},[]),g._32(256,N.a,{apiKey:"AIzaSyCJ8L3mMI-DQ_3xoh6DR78Os7qtUsVuT1k"},[])])})}});