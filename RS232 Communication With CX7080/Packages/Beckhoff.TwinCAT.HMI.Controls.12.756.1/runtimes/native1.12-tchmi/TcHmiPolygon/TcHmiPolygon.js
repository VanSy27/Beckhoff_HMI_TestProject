var TcHmi,__classPrivateFieldGet=this&&this.__classPrivateFieldGet||function(receiver,state,kind,f){if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===kind?f:"a"===kind?f.call(receiver):f?f.value:state.get(receiver)};!function(TcHmi){!function(Controls){!function(Beckhoff){var _a,_TcHmiPolygon_tchmiFQN;class TcHmiPolygon extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__resizedEventDestroyEvent=null,this.__onResolverForFillColorWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("fillColor"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__fillColor)||(this.__fillColor=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"FillColor"}),this.__processFillColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiPolygon,_a,"f",_TcHmiPolygon_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiPolygon,_a,"f",_TcHmiPolygon_tchmiFQN):"")+", Id="+this.getId()+", Attribute=FillColor] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))},this.__onResolverForStrokeColorWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("strokeColor"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__strokeColor)||(this.__strokeColor=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StrokeColor"}),this.__processStrokeColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiPolygon,_a,"f",_TcHmiPolygon_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiPolygon,_a,"f",_TcHmiPolygon_tchmiFQN):"")+", Id="+this.getId()+", Attribute=StrokeColor] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))}}__previnit(){if(this.__elementTemplateRoot=this.__element.find(".TcHmi_Controls_Beckhoff_TcHmiPolygon-template"),0===this.__elementTemplateRoot.length&&(this.__elementTemplateRoot=this.__element.find(".tchmi-polygon-template")),this.__elementSvg=this.__elementTemplateRoot.find(".TcHmi_Controls_Beckhoff_TcHmiPolygon-template-svg"),0===this.__elementSvg.length&&(this.__elementSvg=this.__elementTemplateRoot.find(".tchmi-polygon-template-svg")),this.__elementSvgPolygon=this.__elementTemplateRoot.find(".TcHmi_Controls_Beckhoff_TcHmiPolygon-template-svg-polygon"),0===this.__elementSvgPolygon.length&&(this.__elementSvgPolygon=this.__elementTemplateRoot.find(".tchmi-polygon-template-svg-polygon")),0===this.__elementTemplateRoot.length||0===this.__elementSvg.length||0===this.__elementSvgPolygon.length)throw new Error("Invalid Template.html");super.__previnit()}__init(){super.__init()}__attach(){super.__attach(),this.__resizedEventDestroyEvent=TcHmi.EventProvider.register(this.__id+".onResized",this.__onResized())}__detach(){super.__detach(),null!==this.__resizedEventDestroyEvent&&(this.__resizedEventDestroyEvent(),this.__resizedEventDestroyEvent=null)}destroy(){this.__keepAlive||super.destroy()}__onResized(){return(evt,ctrl)=>{"None"!==this.__scaleMode&&this.__processPoints()}}setFillColor(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("FillColor"));let resolverInfo=this.__objectResolvers.get("fillColor");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("fillColor",{resolver:resolver,watchCallback:this.__onResolverForFillColorWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForFillColorWatchCallback)})}getFillColor(){return this.__fillColor}__processFillColor(){TcHmi.StyleProvider.processFillColor(this.__elementSvgPolygon,this.__fillColor)}setFillMode(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);if(null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("FillMode")),convertedValue!==this.__fillMode){switch(convertedValue){case"EvenOdd":this.__fillMode=convertedValue;break;default:this.__fillMode="NonZero"}TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"FillMode"}),this.__processFillMode()}}getFillMode(){return this.__fillMode}__processFillMode(){switch(this.__fillMode){case"EvenOdd":TcHmi.StyleProvider.setSimpleElementStyle(this.__elementSvgPolygon,"fill-rule","evenodd");break;case"NonZero":default:TcHmi.StyleProvider.setSimpleElementStyle(this.__elementSvgPolygon,"fill-rule","")}this.__elementSvgPolygon.remove(),this.__elementSvg.append(this.__elementSvgPolygon)}setStrokeColor(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("StrokeColor"));let resolverInfo=this.__objectResolvers.get("strokeColor");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("strokeColor",{resolver:resolver,watchCallback:this.__onResolverForStrokeColorWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForStrokeColorWatchCallback)})}getStrokeColor(){return this.__strokeColor}__processStrokeColor(){TcHmi.StyleProvider.processStrokeColor(this.__elementSvgPolygon,this.__strokeColor)}setStrokeStyle(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("StrokeStyle")),convertedValue!==this.__strokeStyle&&(this.__strokeStyle=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StrokeStyle"}),this.__processStrokeStyle())}getStrokeStyle(){return this.__strokeStyle}__processStrokeStyle(){TcHmi.StyleProvider.setSimpleElementStyle(this.__elementSvgPolygon,"stroke-dasharray",this.__strokeStyle)}setStrokeThickness(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("StrokeThickness")),convertedValue!==this.__strokeThickness&&(this.__strokeThickness=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StrokeThickness"}),this.__processStrokeThickness())}getStrokeThickness(){return this.__strokeThickness}__processStrokeThickness(){"number"!=typeof this.__strokeThickness?TcHmi.StyleProvider.setSimpleElementStyle(this.__elementSvgPolygon,"stroke-width",null):TcHmi.StyleProvider.setSimpleElementStyle(this.__elementSvgPolygon,"stroke-width",this.__strokeThickness.toString())}getStrokeThicknessUnit(){return"px"}__processStrokeThicknessUnit(){}setPoints(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Points")),convertedValue!==this.__points&&(this.__points=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Points"}),this.__processPoints())}getPoints(){return this.__points}__processPoints(){if(this.__points){let points=this.__points.split(/ |,/).filter((function(p){return""!==p})).map((function(p){return parseFloat(p)}));if(points.length<2)return void this.__elementSvgPolygon[0].setAttribute("points","");if("None"===this.__scaleMode)this.__elementSvgPolygon[0].setAttribute("points",points.join(" "));else{let width=this.getRenderedWidth();if(!width)return;let height=this.getRenderedHeight();if(!height)return;let minX=null,minY=null,maxX=null,maxY=null;for(let i=0,ii=points.length;i<ii;i++)i%2==0?((null===minX||points[i]<minX)&&(minX=points[i]),(null===maxX||points[i]>maxX)&&(maxX=points[i])):((null===minY||points[i]<minY)&&(minY=points[i]),(null===maxY||points[i]>maxY)&&(maxY=points[i]));let polygonWidth=maxX-minX,polygonHeight=maxY-minY;polygonWidth=0!==polygonWidth?polygonWidth:width,polygonHeight=0!==polygonHeight?polygonHeight:height;let scaleX=width/polygonWidth,scaleY=height/polygonHeight;switch(this.__scaleMode){case"ScaleToFill":for(let i=0,ii=points.length;i<ii;i++)points[i]=i%2==0?(points[i]-minX)*scaleX:(points[i]-minY)*scaleY;break;case"ScaleToFit":const scale=scaleX<scaleY?scaleX:scaleY;for(let i=0,ii=points.length;i<ii;i++)points[i]=i%2==0?(points[i]-minX)*scale:(points[i]-minY)*scale;break;case"ScaleToFitWidth":for(let i=0,ii=points.length;i<ii;i++)points[i]=i%2==0?(points[i]-minX)*scaleX:(points[i]-minY)*scaleX;break;case"ScaleToFitHeight":for(let i=0,ii=points.length;i<ii;i++)points[i]=i%2==0?(points[i]-minX)*scaleY:(points[i]-minY)*scaleY}this.__elementSvgPolygon[0].setAttribute("points",points.join(" "))}}else this.__elementSvgPolygon[0].setAttribute("points","")}setScaleMode(valueNew){let convertedValue=TcHmi.ValueConverter.toScaleModeString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ScaleMode")),convertedValue!==this.__scaleMode&&(this.__scaleMode=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ScaleMode"}),this.__processScaleMode())}getScaleMode(){return this.__scaleMode}__processScaleMode(){this.__processPoints()}}_TcHmiPolygon_tchmiFQN={value:"TcHmi.Controls.Beckhoff."+(_a=TcHmiPolygon).name},Beckhoff.TcHmiPolygon=TcHmiPolygon}(Controls.Beckhoff||(Controls.Beckhoff={}))}(TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiPolygon","TcHmi.Controls.Beckhoff",TcHmi.Controls.Beckhoff.TcHmiPolygon);