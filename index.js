(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"تعليم العربية_atlas_1", frames: [[1392,0,643,203],[0,0,1390,730],[331,732,170,164],[503,732,170,164],[1892,689,82,82],[1392,436,200,251],[1594,436,200,251],[1796,436,200,251],[1392,205,639,147],[1392,354,640,80],[675,732,170,164],[847,732,170,164],[0,732,329,101],[1392,689,498,99],[1019,732,170,164],[1191,732,170,164],[1892,773,82,82],[1363,790,82,82]]}
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



(lib.arabic_text = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.diamond_pattern = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.furodat = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hawar = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.home = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.istima = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.kalam = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.kitabah = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.maharot_guwiyah_text = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.main_menu_text = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.malfulmatur = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.muqodimah = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.start_btn = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.subtitle = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.tadribat = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.tafiym = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.volume_off = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.volume_on = function() {
	this.initialize(ss["تعليم العربية_atlas_1"]);
	this.gotoAndStop(17);
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


(lib.volume_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {on:0,off:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.volume_on();
	this.instance.setTransform(-41,-41);

	this.instance_1 = new lib.volume_off();
	this.instance_1.setTransform(-41,-41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-41,82,82);


(lib.tafiym_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tafiym();
	this.instance.setTransform(-85,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tafiym_btn, new cjs.Rectangle(-85,-82,170,164), null);


(lib.tadribat_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tadribat();
	this.instance.setTransform(-85,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tadribat_btn, new cjs.Rectangle(-85,-82,170,164), null);


(lib.start_btn_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.start_btn();
	this.instance.setTransform(-164.5,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.start_btn_1, new cjs.Rectangle(-164.5,-50.5,329,101), null);


(lib.muqodimah_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.muqodimah();
	this.instance.setTransform(-85,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.muqodimah_btn, new cjs.Rectangle(-85,-82,170,164), null);


(lib.kalam_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.kalam();
	this.instance.setTransform(-100,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kalam_btn, new cjs.Rectangle(-100,-125.5,200,251), null);


(lib.home_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.home();
	this.instance.setTransform(-41,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.home_btn, new cjs.Rectangle(-41,-41,82,82), null);


(lib.diamond_pattern_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.diamond_pattern();
	this.instance.setTransform(-695,-365);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.diamond_pattern_1, new cjs.Rectangle(-695,-365,1390,730), null);


// stage content:
(lib.تعليمالعربية = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {landing_page:0,main_menu:1,maharot_guwiyah:2,"maharot_guwiyah":2,"maharot_guwiyah":2,"maharot_guwiyah":2,"maharot_guwiyah":2,"main_menu":1,"main_menu":1,"main_menu":1,"main_menu":1,"landing_page":0,"landing_page":0,"landing_page":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		// ==============================
		// === BACKSOUND DEFAULT ON ====
		// ==============================
		var soundOn = true;
		var backsoundInstance = null;
		
		// Daftarkan file backsound (pastikan path sesuai hasil export)
		createjs.Sound.alternateExtensions = ["mp3"];
		createjs.Sound.registerSound("sounds/backsound.mp3", "backsound");
		
		// Jalankan backsound setelah file siap
		createjs.Sound.on("fileload", function(evt) {
		    if (evt.id === "backsound" && !backsoundInstance) {
		        backsoundInstance = createjs.Sound.play("backsound", {loop: -1, volume: 0.8});
		        console.log("Backsound started");
		    }
		});
		
		// ==============================
		// === ANIMASI DIAMOND PATTERN ==
		// ==============================
		var pattern = this.diamond_pattern;
		
		pattern.x = 600;
		pattern.y = 360;
		
		createjs.Tween.get(pattern, {loop: true})
		    .to({x: 660, y: 360}, 2000, createjs.Ease.sineInOut)
		    .to({x: 600, y: 360}, 2000, createjs.Ease.sineInOut);
		
		// ==============================
		// === TOMBOL START =============
		// ==============================
		this.start_btn.addEventListener("click", function(e) {
		    createjs.Tween.removeTweens(pattern);
		
		    createjs.Tween.get(e.currentTarget)
		        .to({scaleX: 0.9, scaleY: 0.9}, 100)
		        .to({scaleX: 1.0, scaleY: 1.0}, 200)
		        .call(function() {
		            // pindah halaman setelah animasi selesai
		            this.gotoAndStop("main_menu");
		        }.bind(this));
		}.bind(this));
		
		// ==============================
		// === TOMBOL VOLUME ============
		this.volume_btn.gotoAndStop("on"); // tampilan awal: on
		
		this.volume_btn.addEventListener("click", function(e) {
		    createjs.Tween.removeTweens(pattern);
		    
		    createjs.Tween.get(e.currentTarget)
		        .to({scaleX: 0.9, scaleY: 0.9}, 100)
		        .to({scaleX: 1.0, scaleY: 1.0}, 200);
			
		    soundOn = !soundOn;
		    
		    if (soundOn) {
		        this.volume_btn.gotoAndStop("on");
		        if (!backsoundInstance) {
		            backsoundInstance = createjs.Sound.play("backsound", {loop: -1, volume: 0.8});
		        } else {
		            backsoundInstance.volume = 0.8;
		        }
		    } else {
		        this.volume_btn.gotoAndStop("off");
		        if (backsoundInstance) backsoundInstance.volume = 0;
		    }
		}.bind(this));
	}
	this.frame_1 = function() {
		this.stop();
		
		// background gerak
		var pattern = this.diamond_pattern;
		
		pattern.x = 600;
		pattern.y = 360;
		
		createjs.Tween.get(pattern, {loop: true})
		    .to({x: 660, y: 360}, 2000, createjs.Ease.sineInOut)
		    .to({x: 600, y: 360}, 2000, createjs.Ease.sineInOut);
		
		// tombol start
		this.home_btn.addEventListener("click", function(e) {
		
		    createjs.Tween.removeTweens(pattern);
		
		    createjs.Tween.get(e.currentTarget)
		        .to({scaleX: 0.9, scaleY: 0.9}, 100)
		        .to({scaleX: 1.0, scaleY: 1.0}, 200)
		        .call(() => {
		            // ini dijalankan setelah animasi selesai
		            this.gotoAndStop("landing_page");
		        });
		
		}.bind(this));
		
		
		// tombol tadribat
		this.tadribat_btn.addEventListener("click", function(e) {
			createjs.Tween.removeTweens(pattern);
		
		    createjs.Tween.get(e.currentTarget)
		        .to({scaleX: 0.9, scaleY: 0.9}, 100)
		        .to({scaleX: 1.0, scaleY: 1.0}, 200)
		        .call(() => {
		            // ini dijalankan setelah animasi selesai
		            this.gotoAndStop("maharot_guwiyah");
		        });
		}.bind(this))
	}
	this.frame_2 = function() {
		this.stop();
		
		// background gerak
		var pattern = this.diamond_pattern;
		
		pattern.x = 600;
		pattern.y = 360;
		
		createjs.Tween.get(pattern, {loop: true})
		    .to({x: 660, y: 360}, 2000, createjs.Ease.sineInOut)
		    .to({x: 600, y: 360}, 2000, createjs.Ease.sineInOut);
		
		console.log("ini halaman latihan");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// kitabah
	this.instance = new lib.kitabah();
	this.instance.setTransform(860,310);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// istima
	this.instance_1 = new lib.istima();
	this.instance_1.setTransform(550,310);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1));

	// kalam
	this.instance_2 = new lib.kalam_btn();
	this.instance_2.setTransform(325,435);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1));

	// maharot_guwiyah_text
	this.instance_3 = new lib.maharot_guwiyah_text();
	this.instance_3.setTransform(320,100);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(1));

	// malfulmatur
	this.instance_4 = new lib.malfulmatur();
	this.instance_4.setTransform(860,450);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// tafiym
	this.instance_5 = new lib.tafiym_btn();
	this.instance_5.setTransform(635,532);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// tadribat
	this.tadribat_btn = new lib.tadribat_btn();
	this.tadribat_btn.name = "tadribat_btn";
	this.tadribat_btn.setTransform(325,532);
	this.tadribat_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tadribat_btn).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// hawar
	this.instance_6 = new lib.hawar();
	this.instance_6.setTransform(860,250);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// furodat
	this.instance_7 = new lib.furodat();
	this.instance_7.setTransform(550,250);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// muqodimah
	this.instance_8 = new lib.muqodimah_btn();
	this.instance_8.setTransform(325,332);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// main_menu_text
	this.instance_9 = new lib.main_menu_text();
	this.instance_9.setTransform(320,100);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// volume
	this.volume_btn = new lib.volume_btn();
	this.volume_btn.name = "volume_btn";
	this.volume_btn.setTransform(1157,85);

	this.timeline.addTween(cjs.Tween.get(this.volume_btn).to({_off:true},1).wait(2));

	// home
	this.home_btn = new lib.home_btn();
	this.home_btn.name = "home_btn";
	this.home_btn.setTransform(129,85);
	this.home_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.home_btn).wait(1).to({_off:false},0).wait(2));

	// start_btn
	this.start_btn = new lib.start_btn_1();
	this.start_btn.name = "start_btn";
	this.start_btn.setTransform(639.5,550.5);

	this.timeline.addTween(cjs.Tween.get(this.start_btn).to({_off:true},1).wait(2));

	// subtitle
	this.instance_10 = new lib.subtitle();
	this.instance_10.setTransform(390,316);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},1).wait(2));

	// arabic_text
	this.instance_11 = new lib.arabic_text();
	this.instance_11.setTransform(320,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},1).wait(2));

	// diamond_pattern
	this.diamond_pattern = new lib.diamond_pattern_1();
	this.diamond_pattern.name = "diamond_pattern";
	this.diamond_pattern.setTransform(665,360);

	this.timeline.addTween(cjs.Tween.get(this.diamond_pattern).wait(3));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ehj/g4PMDH/AAAMAAABwfMjH/AAAg");
	this.shape.setTransform(640,360);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape_1.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(3));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(610,355,750,370);
// library properties:
lib.properties = {
	id: 'C1E970442DECDE4B8503D34644A18687',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/تعليم العربية_atlas_1.png", id:"تعليم العربية_atlas_1"}
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
an.compositions['C1E970442DECDE4B8503D34644A18687'] = {
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