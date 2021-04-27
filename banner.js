(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner_atlas_1", frames: [[0,0,570,239],[0,241,104,42]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._2e0ddaa9437f86c57e44e18def5f1a1c = function() {
	this.initialize(ss["banner_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["banner_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0083E9").s().p("Ah2AcQhQgLgUg7QBSg0BjAAQBLAABEAgQBBAfAwA2QgWgDgZAAQhBAAg8AUQg5ATgvAkQAAg6g9gJg");
	this.shape.setTransform(21.925,9.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,43.9,19), null);


(lib.visi_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// visit
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-52,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// skin
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(1,1,1).p("AnBjHIODAAQBkAAAABkIAADHQAABkhkAAIuDAAQhkAAAAhkIAAjHQAAhkBkAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0083E9").s().p("AnBDIQhkAAAAhkIAAjHQAAhkBkAAIODAAQBkAAAABkIAADHQAABkhkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#80C1F4").s().p("AnBDIQhkAAAAhkIAAjHQAAhkBkAAIODAAQBkAAAABkIAADHQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AnBDIQhkAAAAhkIAAjHQAAhkBkAAIODAAQBkAAAABkIAADHQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-22,112,43);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Corporation", "27px 'Showcard Gothic'", "#FF6600");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 226;
	this.text.parent = this;
	this.text.setTransform(-0.0092,-17.35,0.7816,0.7563);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-18.8,180,37.7);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Corporation", "27px 'Showcard Gothic'", "#FF6600");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 226;
	this.text.parent = this;
	this.text.setTransform(-0.0092,-17.35,0.7816,0.7563);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-18.8,180,37.7);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("World Surfing", "31px 'Showcard Gothic'", "#FF6600");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 295;
	this.text.parent = this;
	this.text.setTransform(0,-14.6638,0.5798,0.5798);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.6,-15.8,173.3,31.6);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("World Surfing", "31px 'Showcard Gothic'", "#FF6600");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 295;
	this.text.parent = this;
	this.text.setTransform(0,-14.6638,0.5798,0.5798);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.6,-15.8,173.3,31.6);


(lib.wave = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0083E9").s().p("AhIA2QhKgpguhHQCAgBAEgXQABgKAogEQAYA/A5AuQA4AvBMAWQgyAPgzAAQhYAAhNgrg");
	this.shape.setTransform(-1.4246,6.9678,0.2832,0.2832);

	this.instance = new lib.Path_1_1();
	this.instance.setTransform(2.25,-7,0.2832,0.2832,0,0,0,22.2,9.7);
	this.instance.compositeOperation = "screen";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6FB9E6").s().p("Ah7ErQhKgpguhIQg3hVAAhlQgBhZAthOQArhMBJguQBTg0BhAAQBMAABEAgQBCAfAvA3QgWgDgZAAQhBAAg8AUQg6ATgvAkQgzAogdA1QgeA3AAA8QABAvARAsQAZA/A4AvQA4AvBMAWQgyAPgzAAQhXAAhOgrg");
	this.shape_1.setTransform(0.0199,0.0286,0.2832,0.2832);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-9.7,16.9,19.4);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wave("synched",0);
	this.instance.setTransform(11.3,3.55,1.0394,1.0394,0,0,0,0.1,0.1);

	this.instance_1 = new lib.wave("synched",0);
	this.instance_1.setTransform(6.45,2.25,1.4426,1.4426,0,0,0,0.3,0.1);

	this.instance_2 = new lib.wave("synched",0);
	this.instance_2.setTransform(-0.05,0.95,2.2563,2.2563,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-21.9,40.1,43.9);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wave("synched",0);
	this.instance.setTransform(11.3,3.55,1.0394,1.0394,0,0,0,0.1,0.1);

	this.instance_1 = new lib.wave("synched",0);
	this.instance_1.setTransform(6.45,2.25,1.4426,1.4426,0,0,0,0.3,0.1);

	this.instance_2 = new lib.wave("synched",0);
	this.instance_2.setTransform(-0.05,0.95,2.2563,2.2563,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-21.9,40.1,43.9);


// stage content:
(lib.banner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [95];
	// timeline functions:
	this.frame_95 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.visit.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('http://www.adobe.com', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(1));

	// Button
	this.visit = new lib.visi_btn();
	this.visit.name = "visit";
	this.visit.setTransform(350,29);
	this.visit._off = true;
	new cjs.ButtonHelper(this.visit, 0, 1, 2, false, new lib.visi_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.visit).wait(95).to({_off:false},0).wait(1));

	// World_Surfing
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(570,16);
	this.instance._off = true;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(150,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},35).to({state:[{t:this.instance_1}]},24).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({_off:true,x:150,y:20},24).wait(37));

	// Corporation
	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.setTransform(141,96);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.setTransform(150,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},48).to({state:[{t:this.instance_3}]},17).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:false},0).to({_off:true,x:150,y:48},17).wait(31));

	// logo
	this.instance_4 = new lib.Tween1("synched",0);
	this.instance_4.setTransform(60,-30);

	this.instance_5 = new lib.Tween2("synched",0);
	this.instance_5.setTransform(30.05,29.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},95).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,x:30.05,y:29.15},95).wait(1));

	// waves
	this.instance_6 = new lib._2e0ddaa9437f86c57e44e18def5f1a1c();
	this.instance_6.setTransform(0,1,0.8211,0.2511);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(96));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(234,-21.9,422.70000000000005,136.8);
// library properties:
lib.properties = {
	id: '8714DE8D7792154C913C4FA6E6A43CF9',
	width: 468,
	height: 60,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/banner_atlas_1.png", id:"banner_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8714DE8D7792154C913C4FA6E6A43CF9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;