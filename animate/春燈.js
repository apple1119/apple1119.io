(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"春燈_atlas_1", frames: [[0,1147,333,314],[1119,433,82,230],[1119,0,79,431],[0,0,1117,1145]]}
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



(lib.CachedBmp_4 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(3);
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


(lib.燈本體 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈本體
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈本體, new cjs.Rectangle(0,0,166.5,157), null);


(lib.燈下線 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈下線
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈下線, new cjs.Rectangle(0,0,41,115), null);


(lib.春 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 春
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#332F1F").s().p("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");
	this.shape.setTransform(181.5786,191.7583);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.春, new cjs.Rectangle(0,0,363.2,383.5), null);


(lib.吊繩 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 吊繩
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.吊繩, new cjs.Rectangle(0,0,39.5,215.5), null);


(lib.中燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 中燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-69.65,-279.7,1,1,0,0,0,39.4,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-112,-66.3,1,1,0,0,0,83.4,0);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-110.8,88.5,1,1,0,0,0,20.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-110.8,y:88.5}},{t:this.ikNode_2,p:{rotation:0,x:-112,y:-66.3,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:0,x:-69.65,y:-279.7,regY:0,regX:39.4}}]}).to({state:[{t:this.ikNode_4,p:{rotation:0.0341,x:-115.5,y:87.9}},{t:this.ikNode_2,p:{rotation:0.7816,x:-114.6,y:-66.8,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:0.7213,x:-69.55,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0682,x:-120.3,y:87.3}},{t:this.ikNode_2,p:{rotation:1.5643,x:-117.3,y:-67.3,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{rotation:1.4436,x:-69.55,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1032,x:-125.1,y:86.65}},{t:this.ikNode_2,p:{rotation:2.3472,x:-119.95,y:-68.05,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:2.1661,x:-69.6,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1373,x:-129.85,y:85.9}},{t:this.ikNode_2,p:{rotation:3.1297,x:-122.6,y:-68.7,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:2.8881,x:-69.55,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1722,x:-134.65,y:85.1}},{t:this.ikNode_2,p:{rotation:3.9119,x:-125.25,y:-69.35,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:3.6097,x:-69.6,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2063,x:-139.4,y:84.2}},{t:this.ikNode_2,p:{rotation:4.6948,x:-127.95,y:-70.1,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:4.3318,x:-69.55,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2404,x:-144.1,y:83.3}},{t:this.ikNode_2,p:{rotation:5.4769,x:-130.55,y:-70.85,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:5.0537,x:-69.55,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2754,x:-148.85,y:82.3}},{t:this.ikNode_2,p:{rotation:6.2591,x:-133.15,y:-71.6,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:5.7756,x:-69.55,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3095,x:-153.55,y:81.25}},{t:this.ikNode_2,p:{rotation:7.0416,x:-135.8,y:-72.45,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:6.4976,x:-69.55,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3445,x:-158.25,y:80.15}},{t:this.ikNode_2,p:{rotation:7.8246,x:-138.4,y:-73.3,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:7.2196,x:-69.55,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3786,x:-162.95,y:79}},{t:this.ikNode_2,p:{rotation:8.6072,x:-141,y:-74.15,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:7.9419,x:-69.55,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.4127,x:-167.65,y:77.75}},{t:this.ikNode_2,p:{rotation:9.3897,x:-143.55,y:-75.1,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:8.6636,x:-69.55,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.4476,x:-172.3,y:76.45}},{t:this.ikNode_2,p:{rotation:10.1722,x:-146.1,y:-76,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:9.3861,x:-69.55,y:-279.55,regY:0.1,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.4817,x:-176.9,y:75.1}},{t:this.ikNode_2,p:{rotation:10.954,x:-148.65,y:-77,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:10.1083,x:-69.5,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5158,x:-181.55,y:73.7}},{t:this.ikNode_2,p:{rotation:11.7369,x:-151.25,y:-78.05,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:10.8302,x:-69.55,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5508,x:-186.15,y:72.2}},{t:this.ikNode_2,p:{rotation:12.5193,x:-153.8,y:-79.05,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:11.552,x:-69.55,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5849,x:-190.7,y:70.7}},{t:this.ikNode_2,p:{rotation:13.3015,x:-156.3,y:-80.05,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{rotation:12.2741,x:-69.5,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6199,x:-195.3,y:69.05}},{t:this.ikNode_2,p:{rotation:14.0844,x:-158.8,y:-81.25,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:12.9961,x:-69.5,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.654,x:-199.8,y:67.45}},{t:this.ikNode_2,p:{rotation:14.8662,x:-161.3,y:-82.4,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:13.7186,x:-69.45,y:-279.65,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6881,x:-204.35,y:65.7}},{t:this.ikNode_2,p:{rotation:15.6493,x:-163.75,y:-83.55,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:14.4406,x:-69.5,y:-279.55,regY:0.1,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.723,x:-208.85,y:63.95}},{t:this.ikNode_2,p:{rotation:16.4315,x:-166.2,y:-84.75,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:15.1623,x:-69.5,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7571,x:-213.3,y:62.1}},{t:this.ikNode_2,p:{rotation:17.2143,x:-168.7,y:-86,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:15.8845,x:-69.5,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7921,x:-217.75,y:60.25}},{t:this.ikNode_2,p:{rotation:17.9967,x:-171.1,y:-87.3,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:16.6066,x:-69.5,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8262,x:-222.2,y:58.3}},{t:this.ikNode_2,p:{rotation:18.7786,x:-173.55,y:-88.55,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:17.3287,x:-69.5,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8603,x:-226.6,y:56.25}},{t:this.ikNode_2,p:{rotation:19.5619,x:-175.9,y:-89.9,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:18.0509,x:-69.5,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8953,x:-230.95,y:54.2}},{t:this.ikNode_2,p:{rotation:20.3443,x:-178.3,y:-91.25,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:18.7725,x:-69.5,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.9294,x:-235.3,y:52.1}},{t:this.ikNode_2,p:{rotation:21.1265,x:-180.65,y:-92.65,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:19.4944,x:-69.5,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.9644,x:-239.6,y:49.9}},{t:this.ikNode_2,p:{rotation:21.9087,x:-183.05,y:-94.05,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:20.2165,x:-69.5,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.9985,x:-243.9,y:47.65}},{t:this.ikNode_2,p:{rotation:22.6918,x:-185.35,y:-95.5,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:20.9383,x:-69.5,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.9652,x:-239.75,y:49.85}},{t:this.ikNode_2,p:{rotation:21.935,x:-183.1,y:-94.1,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:20.2409,x:-69.5,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.932,x:-235.6,y:51.95}},{t:this.ikNode_2,p:{rotation:21.1783,x:-180.85,y:-92.7,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:19.5426,x:-69.4,y:-279.65,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8988,x:-231.4,y:54}},{t:this.ikNode_2,p:{rotation:20.4226,x:-178.55,y:-91.4,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:18.8447,x:-69.5,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8655,x:-227.15,y:56}},{t:this.ikNode_2,p:{rotation:19.6659,x:-176.2,y:-90.1,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:18.1466,x:-69.5,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8323,x:-222.9,y:57.95}},{t:this.ikNode_2,p:{rotation:18.9091,x:-173.9,y:-88.75,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:17.4487,x:-69.5,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7991,x:-218.65,y:59.85}},{t:this.ikNode_2,p:{rotation:18.153,x:-171.6,y:-87.5,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:16.751,x:-69.5,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.765,x:-214.35,y:61.65}},{t:this.ikNode_2,p:{rotation:17.3965,x:-169.25,y:-86.3,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:16.0528,x:-69.5,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7318,x:-210.05,y:63.45}},{t:this.ikNode_2,p:{rotation:16.6404,x:-166.9,y:-85.1,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:15.3553,x:-69.5,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6986,x:-205.7,y:65.2}},{t:this.ikNode_2,p:{rotation:15.8837,x:-164.5,y:-83.95,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:14.6573,x:-69.55,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6653,x:-201.35,y:66.9}},{t:this.ikNode_2,p:{rotation:15.1279,x:-162.15,y:-82.8,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:13.9591,x:-69.5,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6321,x:-196.95,y:68.45}},{t:this.ikNode_2,p:{rotation:14.3711,x:-159.7,y:-81.65,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:13.261,x:-69.5,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5989,x:-192.55,y:70.05}},{t:this.ikNode_2,p:{rotation:13.6143,x:-157.3,y:-80.55,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:12.5632,x:-69.55,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5657,x:-188.15,y:71.55}},{t:this.ikNode_2,p:{rotation:12.8581,x:-154.85,y:-79.55,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:11.8655,x:-69.55,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5324,x:-183.7,y:73}},{t:this.ikNode_2,p:{rotation:12.1023,x:-152.4,y:-78.5,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:11.1668,x:-69.55,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.4992,x:-179.25,y:74.45}},{t:this.ikNode_2,p:{rotation:11.3451,x:-150,y:-77.5,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:10.4691,x:-69.5,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.466,x:-174.75,y:75.75}},{t:this.ikNode_2,p:{rotation:10.5891,x:-147.5,y:-76.55,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:9.7709,x:-69.5,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.4328,x:-170.25,y:77.05}},{t:this.ikNode_2,p:{rotation:9.833,x:-145.05,y:-75.6,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:9.0735,x:-69.55,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3995,x:-165.75,y:78.25}},{t:this.ikNode_2,p:{rotation:9.0761,x:-142.55,y:-74.7,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:8.3755,x:-69.5,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3654,x:-161.25,y:79.45}},{t:this.ikNode_2,p:{rotation:8.3199,x:-140.05,y:-73.85,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:7.6772,x:-69.55,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3322,x:-156.7,y:80.5}},{t:this.ikNode_2,p:{rotation:7.5634,x:-137.65,y:-73,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:6.9791,x:-69.55,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.299,x:-152.15,y:81.6}},{t:this.ikNode_2,p:{rotation:6.8074,x:-135,y:-72.15,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:6.2811,x:-69.55,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2658,x:-147.6,y:82.6}},{t:this.ikNode_2,p:{rotation:6.0507,x:-132.45,y:-71.4,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:5.5831,x:-69.55,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2326,x:-143,y:83.55}},{t:this.ikNode_2,p:{rotation:5.2942,x:-129.9,y:-70.65,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:4.8853,x:-69.55,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1993,x:-138.45,y:84.4}},{t:this.ikNode_2,p:{rotation:4.5378,x:-127.35,y:-69.95,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:4.1871,x:-69.55,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1661,x:-133.85,y:85.25}},{t:this.ikNode_2,p:{rotation:3.7813,x:-124.85,y:-69.25,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:3.4896,x:-69.55,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1329,x:-129.25,y:86}},{t:this.ikNode_2,p:{rotation:3.0255,x:-122.25,y:-68.6,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:2.7918,x:-69.55,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0997,x:-124.6,y:86.7}},{t:this.ikNode_2,p:{rotation:2.2685,x:-119.65,y:-67.95,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:2.0935,x:-69.6,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0664,x:-120,y:87.35}},{t:this.ikNode_2,p:{rotation:1.5127,x:-117.15,y:-67.35,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:1.3955,x:-69.55,y:-279.7,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0332,x:-115.35,y:87.95}},{t:this.ikNode_2,p:{rotation:0.7563,x:-114.5,y:-66.8,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:0.6977,x:-69.55,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-110.75,y:88.5}},{t:this.ikNode_2,p:{rotation:0,x:-111.95,y:-66.3,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:0,x:-69.6,y:-279.7,regY:0,regX:39.4}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-322.8,-293.7,294,497.2);


(lib.小燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-69.65,-279.7,1,1,0,0,0,39.4,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-112,-66.3,1,1,0,0,0,83.4,0);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-110.8,88.5,1,1,0,0,0,20.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-110.8,y:88.5,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:0,x:-112,y:-66.3,regY:0}},{t:this.ikNode_1,p:{rotation:0,x:-69.65,y:-279.7,regY:0,regX:39.4}}]}).to({state:[{t:this.ikNode_4,p:{rotation:-1.2792,x:-103.4,y:89.8,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.0498,x:-104.75,y:-64.95,regY:0}},{t:this.ikNode_1,p:{rotation:-1.9369,x:-69.6,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.559,x:-95.95,y:90.85,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.1005,x:-97.45,y:-63.9,regY:0}},{t:this.ikNode_1,p:{rotation:-3.8733,x:-69.65,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.8392,x:-88.55,y:91.7,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.1504,x:-90.15,y:-63.05,regY:0}},{t:this.ikNode_1,p:{rotation:-5.8107,x:-69.6,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.1187,x:-81.1,y:92.25,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.2011,x:-82.8,y:-62.5,regY:0}},{t:this.ikNode_1,p:{rotation:-7.7469,x:-69.6,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.3981,x:-73.6,y:92.6,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.2518,x:-75.45,y:-62.15,regY:0}},{t:this.ikNode_1,p:{rotation:-9.684,x:-69.6,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.6781,x:-66.1,y:92.6,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.3016,x:-68.1,y:-62.1,regY:0}},{t:this.ikNode_1,p:{rotation:-11.6208,x:-69.6,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.9575,x:-58.6,y:92.45,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.3523,x:-60.75,y:-62.25,regY:0}},{t:this.ikNode_1,p:{rotation:-13.5577,x:-69.65,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.237,x:-51.15,y:92,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.403,x:-53.4,y:-62.7,regY:0}},{t:this.ikNode_1,p:{rotation:-15.495,x:-69.7,y:-279.75,regY:-0.1,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.5172,x:-43.65,y:91.4,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.4529,x:-46.1,y:-63.35,regY:0}},{t:this.ikNode_1,p:{rotation:-17.4313,x:-69.6,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-12.797,x:-36.2,y:90.45,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.5036,x:-38.8,y:-64.3,regY:0}},{t:this.ikNode_1,p:{rotation:-19.3692,x:-69.65,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-14.0763,x:-28.8,y:89.4,regY:0.1,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.5543,x:-31.5,y:-65.35,regY:0}},{t:this.ikNode_1,p:{rotation:-21.3059,x:-69.65,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-15.3561,x:-21.5,y:87.85,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.6041,x:-24.3,y:-66.8,regY:0}},{t:this.ikNode_1,p:{rotation:-23.2426,x:-69.65,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-16.6359,x:-14.15,y:86.2,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.6548,x:-17.1,y:-68.45,regY:0}},{t:this.ikNode_1,p:{rotation:-25.1793,x:-69.65,y:-279.55,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-17.9157,x:-6.95,y:84.3,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.7055,x:-10,y:-70.35,regY:0}},{t:this.ikNode_1,p:{rotation:-27.1163,x:-69.65,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-19.1958,x:0.25,y:82.15,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.7554,x:-2.95,y:-72.45,regY:0}},{t:this.ikNode_1,p:{rotation:-29.0529,x:-69.6,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-20.4757,x:7.35,y:79.8,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.8061,x:4,y:-74.8,regY:0}},{t:this.ikNode_1,p:{rotation:-30.9903,x:-69.55,y:-279.65,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-21.755,x:14.4,y:77.2,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.8568,x:10.85,y:-77.4,regY:0}},{t:this.ikNode_1,p:{rotation:-32.927,x:-69.65,y:-279.55,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-23.0345,x:21.2,y:74.35,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.9067,x:17.65,y:-80.25,regY:0}},{t:this.ikNode_1,p:{rotation:-34.8642,x:-69.55,y:-279.45,regY:0.1,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-24.3147,x:28.05,y:71.3,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.9574,x:24.35,y:-83.3,regY:0}},{t:this.ikNode_1,p:{rotation:-36.8007,x:-69.6,y:-279.55,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-25.5942,x:34.75,y:68,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.0072,x:30.95,y:-86.6,regY:0}},{t:this.ikNode_1,p:{rotation:-38.7375,x:-69.6,y:-279.55,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-26.8739,x:41.35,y:64.5,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.0579,x:37.4,y:-90.1,regY:0}},{t:this.ikNode_1,p:{rotation:-40.6753,x:-69.55,y:-279.65,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-28.1538,x:47.85,y:60.7,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.1086,x:43.75,y:-93.8,regY:0}},{t:this.ikNode_1,p:{rotation:-42.6118,x:-69.6,y:-279.55,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-29.4338,x:54.15,y:56.85,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.1585,x:49.95,y:-97.75,regY:0}},{t:this.ikNode_1,p:{rotation:-44.5487,x:-69.6,y:-279.55,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-30.7135,x:60.4,y:52.65,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.2092,x:56.05,y:-101.9,regY:0}},{t:this.ikNode_1,p:{rotation:-46.4851,x:-69.55,y:-279.5,regY:0.1,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-31.9934,x:66.45,y:48.3,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.2599,x:62,y:-106.25,regY:0}},{t:this.ikNode_1,p:{rotation:-48.4226,x:-69.6,y:-279.55,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-33.2725,x:72.35,y:43.75,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.3098,x:67.75,y:-110.75,regY:0}},{t:this.ikNode_1,p:{rotation:-50.359,x:-69.6,y:-279.55,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-34.5526,x:78.15,y:39.05,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.3605,x:73.35,y:-115.55,regY:0}},{t:this.ikNode_1,p:{rotation:-52.296,x:-69.6,y:-279.5,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-35.8319,x:83.8,y:34.15,regY:0.1,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.4112,x:78.8,y:-120.45,regY:0}},{t:this.ikNode_1,p:{rotation:-54.2331,x:-69.5,y:-279.45,regY:0.1,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-37.1115,x:89.15,y:28.95,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.4611,x:84,y:-125.65,regY:-0.1}},{t:this.ikNode_1,p:{rotation:-56.1705,x:-69.55,y:-279.6,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-35.8751,x:83.95,y:33.9,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.4121,x:79,y:-120.6,regY:0}},{t:this.ikNode_1,p:{rotation:-54.2977,x:-69.6,y:-279.55,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-34.6375,x:78.6,y:38.8,regY:0.1,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.364,x:73.7,y:-115.85,regY:0}},{t:this.ikNode_1,p:{rotation:-52.4256,x:-69.55,y:-279.6,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-33.4008,x:73,y:43.25,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.315,x:68.35,y:-111.25,regY:0}},{t:this.ikNode_1,p:{rotation:-50.5527,x:-69.5,y:-279.45,regY:0.1,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-32.1635,x:67.25,y:47.7,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.2661,x:62.75,y:-106.85,regY:0}},{t:this.ikNode_1,p:{rotation:-48.6808,x:-69.65,y:-279.55,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-30.9264,x:61.4,y:51.95,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.2179,x:57.05,y:-102.6,regY:0}},{t:this.ikNode_1,p:{rotation:-46.8085,x:-69.7,y:-279.6,regY:-0.1,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-29.6898,x:55.35,y:55.9,regY:-0.1,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.169,x:51.2,y:-98.55,regY:0}},{t:this.ikNode_1,p:{rotation:-44.9363,x:-69.6,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-28.4523,x:49.35,y:59.85,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.12,x:45.2,y:-94.75,regY:0}},{t:this.ikNode_1,p:{rotation:-43.0634,x:-69.6,y:-279.55,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-27.2157,x:43.1,y:63.5,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.071,x:39.1,y:-91.05,regY:0}},{t:this.ikNode_1,p:{rotation:-41.1915,x:-69.6,y:-279.55,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-25.9778,x:36.75,y:66.95,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-1.023,x:32.9,y:-87.65,regY:0}},{t:this.ikNode_1,p:{rotation:-39.3193,x:-69.6,y:-279.55,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-24.7412,x:30.3,y:70.2,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.974,x:26.55,y:-84.35,regY:0}},{t:this.ikNode_1,p:{rotation:-37.4466,x:-69.6,y:-279.55,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-23.5037,x:23.7,y:73.25,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.925,x:20.15,y:-81.35,regY:0}},{t:this.ikNode_1,p:{rotation:-35.5745,x:-69.6,y:-279.55,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-22.2672,x:17.2,y:76.05,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.8769,x:13.6,y:-78.55,regY:0}},{t:this.ikNode_1,p:{rotation:-33.7022,x:-69.6,y:-279.55,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-21.0302,x:10.4,y:78.7,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.828,x:7,y:-75.9,regY:0}},{t:this.ikNode_1,p:{rotation:-31.8297,x:-69.7,y:-279.7,regY:-0.1,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-19.7931,x:3.65,y:81.2,regY:0.1,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.779,x:0.3,y:-73.55,regY:0}},{t:this.ikNode_1,p:{rotation:-29.9569,x:-69.55,y:-279.45,regY:0.1,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-18.5558,x:-3.3,y:83.25,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.73,x:-6.5,y:-71.35,regY:0}},{t:this.ikNode_1,p:{rotation:-28.085,x:-69.65,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-17.3188,x:-10.3,y:85.25,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.6819,x:-13.3,y:-69.4,regY:0}},{t:this.ikNode_1,p:{rotation:-26.2124,x:-69.6,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-16.0818,x:-17.3,y:86.95,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.633,x:-20.2,y:-67.65,regY:0}},{t:this.ikNode_1,p:{rotation:-24.3406,x:-69.6,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-14.8446,x:-24.4,y:88.4,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.584,x:-27.2,y:-66.2,regY:0}},{t:this.ikNode_1,p:{rotation:-22.4675,x:-69.65,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-13.6069,x:-31.5,y:89.7,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.5359,x:-34.15,y:-65,regY:0}},{t:this.ikNode_1,p:{rotation:-20.5952,x:-69.6,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-12.3706,x:-38.65,y:90.75,regY:0,regX:20.5}},{t:this.ikNode_2,p:{rotation:-0.487,x:-41.2,y:-63.9,regY:0}},{t:this.ikNode_1,p:{rotation:-18.7228,x:-69.65,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.133,x:-45.9,y:91.55,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.438,x:-48.25,y:-63.15,regY:0}},{t:this.ikNode_1,p:{rotation:-16.8503,x:-69.65,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.8961,x:-53.1,y:92.15,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.3891,x:-55.35,y:-62.55,regY:0}},{t:this.ikNode_1,p:{rotation:-14.9784,x:-69.65,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.6593,x:-60.35,y:92.55,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.341,x:-62.45,y:-62.2,regY:0}},{t:this.ikNode_1,p:{rotation:-13.1058,x:-69.65,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.4224,x:-67.55,y:92.6,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.292,x:-69.6,y:-62.1,regY:0}},{t:this.ikNode_1,p:{rotation:-11.2336,x:-69.6,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.1852,x:-74.8,y:92.5,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.243,x:-76.7,y:-62.2,regY:0}},{t:this.ikNode_1,p:{rotation:-9.3613,x:-69.6,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.9475,x:-82.1,y:92.2,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.1941,x:-83.8,y:-62.55,regY:0}},{t:this.ikNode_1,p:{rotation:-7.4894,x:-69.65,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.7104,x:-89.3,y:91.6,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.146,x:-90.9,y:-63.15,regY:0}},{t:this.ikNode_1,p:{rotation:-5.6166,x:-69.65,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.4741,x:-96.45,y:90.75,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.097,x:-97.95,y:-63.95,regY:0}},{t:this.ikNode_1,p:{rotation:-3.7445,x:-69.65,y:-279.6,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.2363,x:-103.65,y:89.75,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:-0.0481,x:-105,y:-65,regY:0}},{t:this.ikNode_1,p:{rotation:-1.8721,x:-69.6,y:-279.65,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-110.75,y:88.5,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:0,x:-111.95,y:-66.3,regY:0}},{t:this.ikNode_1,p:{rotation:0,x:-69.6,y:-279.7,regY:0,regX:39.4}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.4,-279.7,370.4,489);


// stage content:
(lib.春燈 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 春
	this.instance = new lib.春();
	this.instance.setTransform(420.95,452.7,0.6605,0.5784,0,0,0,181.6,191.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 小燈籠
	this.instance_1 = new lib.小燈籠();
	this.instance_1.setTransform(128,140.5,0.6166,0.5406,22.4545,0,0,-111.9,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 中燈籠
	this.instance_2 = new lib.中燈籠();
	this.instance_2.setTransform(399.05,190.5,0.7242,0.6234,-8.7051,0,0,-111.9,-37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 大燈籠
	this.instance_3 = new lib.小燈籠();
	this.instance_3.setTransform(245.05,281,1,1,0,0,0,-112,-38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 背景
	this.instance_4 = new lib.CachedBmp_1();
	this.instance_4.setTransform(1.55,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// 底稿顏色
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape.setTransform(279.925,288.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(279.5,287.5,280.6,287.9);
// library properties:
lib.properties = {
	id: 'B0CBCC7EF0A16D4CB9F6A74B8CC5A8B8',
	width: 559,
	height: 575,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/春燈_atlas_1.png", id:"春燈_atlas_1"}
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
an.compositions['B0CBCC7EF0A16D4CB9F6A74B8CC5A8B8'] = {
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