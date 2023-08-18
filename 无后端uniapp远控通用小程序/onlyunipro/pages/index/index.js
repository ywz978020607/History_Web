// import uCharts from '@/static/u-charts/u-charts.js';
// import wxCharts from '@/static/wxcharts.js'; //@=../..
// var mqtt = require('@/static/mqtt.min.js');
var _self;
// var canvaGauge=null; //必须！否则报错
// //这里的Data为测试使用，生产环境请从服务器获取
// var Data={
// 	LineA:{categories:['2012', '2013', '2014', '2015', '2016', '2017'],series:[{name: '成交量A',data:[35, 20, 25, 37, 4, 20]},{name: '成交量B',data:[70, 40, 65, 100, 44, 68]},{name: '成交量C',data:[100, 80, 95, 150, 112, 132]},{name: '成交量D',data:[100, 80, 95, 150, 112, 132]}]},
// 	}

export default {
	data() {
		return {
			showPassword: true,
			product_id: "", //决定是否使用旧版
			device_ids: "",
			device_type: "",
			api_key: "",
			comments: "",
			trigger_time: "",
			hid_usb: "",
			// canvasnamelist:["canvasGauge0","canvasGauge1"],
			// username: "",
			intervalId: null,
			seen_id_tags: ["远程物联", "修改信息", "广域HID", "小程序介绍及联系方式"],
			seen_id: 0,
			// 地图轨迹
			timeStart: '',
			timeEnd: '',
			polyline:[
				{//指定一系列坐标点，从数组第一项连线至最后一项
				points:[],
				markers:[],
				color: "#31c27c",
				width:10,//线的宽度
				arrowLine: true,
				// 　　　　dottedLine:true,//是否虚线
				}
			],
			polykey: '',
			//////////////
			///画图变量
			cWidth:'',
			cHeight:'',
			pixelRatio:1,
			//翻页变量
			temp_index: 0,
			all_count: null,
			charts_len: 7,
			//
			info_dump: '',
			input_val: [null, null, null, null,
				null, null, 5, null,
				null, null], //初始化, null可缺省
			// 0-设备ids，1-备注，2-apikey，3-触发秒数，4-hidusbid, [5-hidusb文本，6-hidusb速度]
			// 7-类型[0-全IO,1-剪裁IO,2-红外控制,3-地图类型, 4-地图类型定时工作版]，
			// 8-产品id, 9-补充配置的字符串输入
			input_st_time: [], // 动态扩展
			config_json: {}, // 补充配置
			temp_data: {},
			//#ifndef H5
			direction: "https://iot-api.heclouds.com", // "http://183.230.40.34"
			direction_old: "https://api.heclouds.com",
			//#endif
			//#ifdef H5
			direction: "/apionenets", //"/api",
			direction_old: "/apionenet",
			//#endif
		}
	},
	onLoad(options) {
		// console.log("Op:",options)
		// if(options=={}){
		// this.username="test";
		// }
		// else{
		// this.username = options.username;
		// }
		this.restore_seen_id();
		console.log("seen_id:", this.seen_id);

		//加载时先刷新一下
		this.fresh();
		// this.check_main(this.seen_id);

		//定时器
		// this.dataRefresh();

		//画布
		_self = this;
		//#ifdef H5 || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO
		uni.getSystemInfo({
			success: function (res) {
				if(res.pixelRatio>1){
					_self.pixelRatio =2;
					//正常这里_self.pixelRatio给2就行，如果要求高可用下行
					//_self.pixelRatio =res.pixelRatio;
				}
			}
		});
		//#endif
		this.cWidth=uni.upx2px(750);
		this.cHeight=uni.upx2px(500);
	},
	onReady() {
		// this.showLineA("canvasLineA",Data.LineA);
			},
	onShow(){
		this.timeStart = new Date(new Date().getTime() - (24-8)*60*60*1000).toISOString().split('.')[0];
		this.timeEnd = new Date(new Date().getTime() + 8*60*60*1000).toISOString().split('.')[0];
		console.log(this.timeEnd);
		// debug
	},
	methods: {
		//////////////////////////////////
			quit(event) {
				  var url = "../index/index"
				  wx.navigateTo({url})
			},
			// draw(){
			// 	this.showLineA("canvasLineA",Data.LineA);
			// },
			fresh() {
				console.log("fresh")
				this.change_seen_id(this.seen_id);
			},
			// 定时刷新数据函数
			dataRefresh() {
				// 计时器正在进行中，退出函数
				if (this.intervalId != null) {
					return;
				}
				// 计时器为空，操作
				this.intervalId = setInterval(() => {
					// console.log("刷新 " + new Date());
					this.fresh(); //加载数据函数
				}, 30000);
			},
			// 停止定时器
			clear() {
				clearInterval(this.intervalId); //清除计时器
				this.intervalId = null; //设置为null
			},
			//定时器
			created() {
				this.dataRefresh();
			},
			destroyed() {
				// 在页面销毁后，清除计时器
				this.clear();
			},
			/////////////////////////////////////
			//操作--button1
			change_seen_id(new_seen_id){
				console.log(new_seen_id);
				var that = this;
				var changed = false;
				if(new_seen_id != that.seen_id)
				{
					changed = true;
					that.seen_id = new_seen_id;
					if(new_seen_id>=0){
						uni.setStorageSync("seen_id", that.seen_id);
					}
				}
				// 主页刷新
				if(that.seen_id == '0'){
					that.check_main(0);
				}else if(that.seen_id == '1'){
					if(changed){that.init_info();}
				}else if(that.seen_id == '2'){
					that.check_main(2);
				}
				// this.debug();
			},
			restore_seen_id(e){
				if(uni.getStorageSync("seen_id")){
					this.seen_id = uni.getStorageSync("seen_id");
				} else{
					this.seen_id = 0;
				}
			},
			onPullDownRefresh () {
				console.log('触发下拉刷新了');
				this.fresh();
				uni.stopPullDownRefresh();
			},
			getDefaultDict(input_dict, input_key, default_val=''){
				return input_dict[input_key]?input_dict[input_key]:(default_val?default_val:input_key);
			},
			check_main(seen_id = "") {
				console.log("check once");
				var that = this;
				that.load_storage();
				var device_id_split = that.device_ids.split(",");
				var comments_split = that.comments.split(",");
				var devices_type = that.device_type.split(",");
				var hid_usb_split = that.hid_usb.split(",");
				var temp_data = {};

				try{
					// WIFI-HID类型只查询在线状态
					if (seen_id == 2){
						for(var idx=0;idx<hid_usb_split.length;idx++){
							temp_data["+"+hid_usb_split[idx]] = {
								"status": "在线",
								"datastreams": [],
							}
							if(that.product_id){
								uni.request({
								url: that.direction + "/device/detail?product_id=" + that.product_id + "&device_name=" + that.hid_usb,
								header: { "authorization": that.api_key},
								method:'GET',//请求方式  或GET，必须为大写
								success: res => {
									if (res.data["data"]["status"] == 0){
										temp_data["+"+res.data["data"]["name"]]["status"] = "离线";
									}
								}
							});}
						}
						if(!that.product_id){
							uni.request({
								url: that.direction_old + "/devices/status",
								// url: "http://183.230.40.34/devices/status",
								header: { "api-key": that.api_key},
								data: {'devIds':that.hid_usb},
								method:'GET',//请求方式  或GET，必须为大写
								success: res => {
									// console.log('返回status', res.data["data"]);
									for (var idx=0; idx < res.data["data"]["devices"].length; idx++){
										var device_data = res.data["data"]["devices"][idx];
										if (device_data["online"] == false){
											temp_data["+"+device_data["id"]]["status"] = "离线";
										}
									}
								}
							});
						}
					}
					else {
						// 首页
						for(var idx=0;idx<device_id_split.length;idx++){
							temp_data["+"+device_id_split[idx]] = {
								"device_type": devices_type[idx],
								"comments": comments_split[idx],
								"status": "在线",
								"datastreams": [],
							};
							if(that.product_id){
								uni.request({
									url: that.direction + "/device/detail?product_id=" + that.product_id + "&device_name=" + device_id_split[idx],
									header: { "authorization": that.api_key},
									method:'GET',//请求方式  或GET，必须为大写
									success: res => {
										if (res.data["data"]["status"] == 0){
											temp_data["+"+res.data["data"]["name"]]["status"] = "离线";
										}
									}
								});
							}

						}
						// 在线状态
						if(!that.product_id){
							uni.request({
								url: that.direction_old + "/devices/status",
								// url: "http://183.230.40.34/devices/status",
								header: { "api-key": that.api_key},
								data: {'devIds':that.device_ids},
								method:'GET',//请求方式  或GET，必须为大写
								success: res => {
									// console.log('返回status', res.data["data"]);
									for (var idx=0; idx < res.data["data"]["devices"].length; idx++){
										var device_data = res.data["data"]["devices"][idx];
										if (device_data["online"] == false){
											temp_data["+"+device_data["id"]]["status"] = "离线";
										}
									}
								}
							});
						}

						// 数据内容
						if(that.product_id){
							uni.request({
								url: that.direction + "/datapoint/current-datapoints?product_id=" + that.product_id + "&device_name=" + that.device_ids,
								header: { "authorization": that.api_key},
								method:'GET',//请求方式  或GET，必须为大写
								success: res => {
									console.log('返回', res.data["data"]);
									for (var idx=0; idx < res.data["data"]["devices"].length; idx++){
										var device_data = res.data["data"]["devices"][idx];
										// 修改顺序 data0 data2 ..
										device_data["datastreams"].sort((a, b)=>{
											return (a["id"] > b["id"])? 1:-1;
										});
										// 坐标转换
										for (var in_idx = 0; in_idx < device_data["datastreams"].length;in_idx++){
											if(device_data["datastreams"][in_idx]["id"] == "location"){
												var translate_coor = that.translate_gps(device_data["datastreams"][in_idx]["value"]["lat"], device_data["datastreams"][in_idx]["value"]["lon"]);
												device_data["datastreams"][in_idx]["value"]["lat"] = translate_coor.latitude;
												device_data["datastreams"][in_idx]["value"]["lon"] = translate_coor.longitude;

												// device_data["datastreams"][in_idx]["value"]["st_time"] = ''; //默认
												that.input_st_time[idx] = ""; //默认
												
												for (var in_in_idx = 0; in_in_idx < device_data["datastreams"].length;in_in_idx++){
													// 添加wifi名
													if(device_data["datastreams"][in_in_idx]["id"] == "ssid"){
														if(device_data["datastreams"][in_in_idx]["at"] == device_data["datastreams"][in_idx]["at"]){
															device_data["datastreams"][in_idx]["value"]["ssid"] = device_data["datastreams"][in_in_idx]["value"];
														}
													}
													// 添加电量数据
													if(device_data["datastreams"][in_in_idx]["id"] == "b"){
														device_data["datastreams"][in_idx]["value"]["battery"] = device_data["datastreams"][in_in_idx]["value"];
													}

													// // 扫描并添加自身st_time -- 后置-单独走kv
												}
												// 额外获取离线数据 k-v
												uni.request({
													url: that.direction_old + "/devices/1097281683/datapoints?datastream_id=st%"+that.product_id+"%"+device_data["title"]+"&limit=1",
													header: { "api-key": "CSwWZsNXKRVJz=XUMES=qfO7p8Q="},
													method:'GET',
													success: res_old => {
														if(res_old.data["data"]["count"] > 0){
															// device_data["datastreams"][in_idx]["value"]["st_time"] = res_old.data["data"]["datastreams"][0]["datapoints"][0]["value"];
															that.input_st_time[idx] = res_old.data["data"]["datastreams"][0]["datapoints"][0]["value"];
														}
													}
												});
											}
										}
										temp_data["+"+device_data["title"]]["datastreams"] = device_data["datastreams"];
									}
								}
							});
						}
						else{
							uni.request({
								url: that.direction_old + "/devices/datapoints",
								header: { "api-key": that.api_key},
								data: {'devIds':that.device_ids},
								method:'GET',//请求方式  或GET，必须为大写
								success: res => {
									console.log('返回', res.data["data"]);
									for (var idx=0; idx < res.data["data"]["devices"].length; idx++){
										var device_data = res.data["data"]["devices"][idx];
										// 修改顺序 data0 data2 ..
										device_data["datastreams"].sort((a, b)=>{
											return (a["id"] > b["id"])? 1:-1;
										});
										// 坐标转换
										for (var in_idx = 0; in_idx < device_data["datastreams"].length;in_idx++){
											if(device_data["datastreams"][in_idx]["id"] == "location"){
												var translate_coor = that.translate_gps(device_data["datastreams"][in_idx]["value"]["lat"], device_data["datastreams"][in_idx]["value"]["lon"]);
												device_data["datastreams"][in_idx]["value"]["lat"] = translate_coor.latitude;
												device_data["datastreams"][in_idx]["value"]["lon"] = translate_coor.longitude;

												// device_data["datastreams"][in_idx]["value"]["st_time"] = ''; //默认
												that.input_st_time[idx] = ""; //默认
												
												for (var in_in_idx = 0; in_in_idx < device_data["datastreams"].length;in_in_idx++){
													// 添加wifi名
													if(device_data["datastreams"][in_in_idx]["id"] == "ssid"){
														if(device_data["datastreams"][in_in_idx]["at"] == device_data["datastreams"][in_idx]["at"]){
															device_data["datastreams"][in_idx]["value"]["ssid"] = device_data["datastreams"][in_in_idx]["value"];
														}
													}

													// 添加电量信息
													if(device_data["datastreams"][in_in_idx]["id"] == "b"){
														device_data["datastreams"][in_idx]["value"]["battery"] = device_data["datastreams"][in_in_idx]["value"];
													}

													// 添加st_time
													if(device_data["datastreams"][in_in_idx]["id"] == "st"){
														// device_data["datastreams"][in_idx]["value"]["st_time"] = device_data["datastreams"][in_in_idx]["value"];
														that.input_st_time[idx] = device_data["datastreams"][in_in_idx]["value"];
													}
												}
											}
										}
										temp_data["+"+device_data["id"]]["datastreams"] = device_data["datastreams"];
									}
								}
							});
						}

					}

					that.temp_data = temp_data;
				}catch(e){
					console.log("check main error", e);
				}
			},
			// 通过onenet下发mqtt指令到硬件 - synccmd
			send(device_id, key_name, action, period=null) {
				var that = this;
				uni.request({
					url: that.product_id?(that.direction + "/datapoint/synccmds?timeout=5&product_id=" + that.product_id + "&device_name=" + device_id):(that.direction_old + "/cmds?device_id=" + device_id),
					header: that.product_id?{"authorization": that.api_key}:{ "api-key": that.api_key},
					data: {
						// key_name: JSON.stringify(action, that.trigger_time),
						"key_name": key_name,
						"action": action,
						"period": period || that.trigger_time
					},
					method:'POST',//请求方式  或GET，必须为大写
					success: res => {
						uni.showToast({
							title: "成功",
							icon: "none"
						})
					}
				  });
			},
			send_usb(mode) {
				var that = this;
				var params = {
						"mode": mode
					};
				if(mode == "kb") {
					params["context"] = that.ench2Unicode(that.input_val[5]);
				}
				else {
					params["speed"] = that.input_val[6];
				}
				// console.log(params["context"]);
				uni.request({
					url: that.product_id?(that.direction + "/datapoint/synccmds?timeout=5&product_id=" + that.product_id + "&device_name=" + that.hid_usb):(that.direction_old + "/cmds?device_id=" + that.hid_usb),
					header: that.product_id?{"authorization": that.api_key}:{ "api-key": that.api_key},
					data: params,
					method:'POST',//请求方式  或GET，必须为大写
					success: res => {
						uni.showToast({
							title: "成功",
							icon: "none"
						})
					}
				  });
			},
			translate_gps(lat, lon){
				var util = require('../../static/WSCoordinate.js');
				var res1 = util.transformFromWGSToGCJ(lat, lon); // 坐标转换
				// console.log(res1);
				return res1;
			},
			isChinese(s){
				return /[\u4e00-\u9fa5]/.test(s);
			},
			ench2Unicode(str){
				if(!str){
					return;
				}
				var unicode = '';
				for (var i = 0; i <  str.length; i++) {
					var temp = str.charAt(i);
					if(this.isChinese(temp)){
						unicode += '\\u' +  temp.charCodeAt(0).toString(16);
					}
					else{
						unicode += '\\u' + temp;
					}
				}
				return unicode;
			},
			// 加载缓存
			load_storage(){
				var that = this;
				that.device_ids = uni.getStorageSync("device_ids");
				that.api_key = uni.getStorageSync("api_key");
				that.comments = uni.getStorageSync("comments");
				that.trigger_time = uni.getStorageSync("trigger_time");
				that.hid_usb = uni.getStorageSync("hid_usb");
				that.device_type = uni.getStorageSync("device_type");
				that.product_id = uni.getStorageSync("product_id");
				that.config_json = uni.getStorageSync("config_json");
				that.config_json = that.config_json?JSON.parse(that.config_json):{};
			},
			//修改信息
			change() {
				var that = this;
				// if(that.input_val[0]){uni.setStorageSync("device_ids", that.input_val[0]);}
				if(that.input_val[0]){uni.setStorageSync("device_ids", that.input_val[0]);}
				if(that.input_val[1]){uni.setStorageSync("comments", that.input_val[1]);}
				if(that.input_val[2]){uni.setStorageSync("api_key", that.input_val[2]);}
				if(that.input_val[3]){uni.setStorageSync("trigger_time", that.input_val[3]);}
				if(that.input_val[4]){uni.setStorageSync("hid_usb", that.input_val[4]);}
				if(that.input_val[7]){uni.setStorageSync("device_type", that.input_val[7]);}
				uni.setStorageSync("product_id", that.input_val[8]);
				if(that.input_val[9]){
					uni.setStorageSync("config_json", that.input_val[9]);
					config_json = JSON.parse(that.input_val[9]);
				}
				// console.log("set done and get:", uni.getStorageSync("comments"));
				// this.check_main();
				uni.showToast({
					title: "成功",
					icon: "none"
				})
				// TODO 发送alert到k-v

			},
			// 加载缓存显示
			init_info() {
				var that = this;
				that.load_storage();
				that.input_val[0] = that.device_ids;
				that.input_val[1] = that.comments;
				that.input_val[2] = that.api_key;
				that.input_val[3] = that.trigger_time;
				that.input_val[4] = that.hid_usb;
				that.input_val[7] = that.device_type;
				that.input_val[8] = that.product_id;
				that.input_val[9] = JSON.stringify(that.config_json);
				that.$forceUpdate();
			},
			// 复制id
			copy(value){
				uni.setClipboardData({
					data: value,
					success: function () {
					//调用方法成功
					// console.log('success');
				}
				})
			},
			// 密码显示
			showPwd: function() {
				this.showPassword = !this.showPassword;
			},
			// 跳转三方app地图
			open_location(latitude, longitude){
				if(!latitude){
					latitude = this.polyline[0].points[this.polyline[0].points.length-1].latitude;
					longitude = this.polyline[0].points[this.polyline[0].points.length-1].longitude;
				}
				uni.openLocation({
					latitude: latitude,
					longitude: longitude,
					scale: 15
				});
			},
			// 修改时间
			changeTime(e, mode){
				console.log(e);
				if(mode=="start"){
					this.timeStart = e;
				}
				else{
					this.timeEnd = e;
				}
			},
			// 独立子页面 -1
			create_path(device_id = ''){
				var that = this;
				that.seen_id = -1;
				console.log("地图轨迹绘制");
				if(device_id){that.polykey = device_id;}
				that.polyline[0].points = [];
				that.polyline[0].markers = [];
				uni.request({
					url: that.product_id?(that.direction + "/datapoint/history-datapoints?product_id="+that.product_id+"&device_name="+that.polykey+"&datastream_id=location&limit=6000&start="+that.timeStart.replace(" ", "T")+"&end="+that.timeEnd.replace(" ", "T")):(that.direction_old + "/devices/" + that.polykey + "/datapoints"),
					header: that.product_id?{"authorization": that.api_key}:{ "api-key": that.api_key},
					data: that.product_id?{}:{
						'datastream_id': 'location',
						'start': that.timeStart.replace(" ", "T"),
						'end': that.timeEnd.replace(" ", "T"),
						'limit': 6000
					},
					method:'GET',//请求方式  或GET，必须为大写
					success: res => {
						// console.log('返回', res.data["data"]);
						// 坐标转换
						for (var in_idx = 0; in_idx < res.data["data"]["datastreams"][0]["datapoints"].length;in_idx++){
							var translate_coor = that.translate_gps(
								res.data["data"]["datastreams"][0]["datapoints"][in_idx]["value"]["lat"],
								res.data["data"]["datastreams"][0]["datapoints"][in_idx]["value"]["lon"]
							);
							res.data["data"]["datastreams"][0]["datapoints"][in_idx]["value"]["lat"] = translate_coor.latitude;
							res.data["data"]["datastreams"][0]["datapoints"][in_idx]["value"]["lon"] = translate_coor.longitude;
							// append
							that.polyline[0].points.push({
								latitude: res.data["data"]["datastreams"][0]["datapoints"][in_idx]["value"]["lat"],
								longitude: res.data["data"]["datastreams"][0]["datapoints"][in_idx]["value"]["lon"]});
						}
						// console.log(that.polyline[0].points[that.polyline[0].points.length-1].latitude);
						that.polyline[0].markers.push(
							{
								id: 0,
								latitude:res.data["data"]["datastreams"][0]["datapoints"][0]["value"]["lat"],
								longitude:res.data["data"]["datastreams"][0]["datapoints"][0]["value"]["lon"],
								width:20, height:30,
								callout: { //气泡窗口
									content: res.data["data"]["datastreams"][0]["datapoints"][0]["at"].split('.')[0], //文本
									color: '#ffffff',
									fontSize: 15,
									borderRadius: 15,
									padding: '10',
									bgColor: '#406390',
									display: 'ALWAYS', //常显
								  }
							},
							{
								id: 1,
								latitude:res.data["data"]["datastreams"][0]["datapoints"][res.data["data"]["datastreams"][0]["datapoints"].length - 1]["value"]["lat"],
								longitude:res.data["data"]["datastreams"][0]["datapoints"][res.data["data"]["datastreams"][0]["datapoints"].length - 1]["value"]["lon"],
								width:20, height:30,
								callout: { //气泡窗口
									content: res.data["data"]["datastreams"][0]["datapoints"][res.data["data"]["datastreams"][0]["datapoints"].length - 1]["at"].split('.')[0], //文本
									color: '#ffffff',
									fontSize: 15,
									borderRadius: 15,
									padding: '10',
									bgColor: '#406390',
									display: 'ALWAYS', //常显
								  }
							},
						);
						console.log(that.polyline[0].markers);
					}
				});
			},
			// 配置导出和导入
			export_info(){
				this.info_dump = (JSON.stringify(this.input_val));
			},
			load_info(){
				this.input_val = (JSON.parse(this.info_dump));
			},
			// 设定离线变量
			set_onenet_http(device_id, key_name, value){
				console.log(key_name, value);
				var that = this;
				var datastreams = [];
				datastreams.push({
						"id": that.product_id?(key_name+"%"+that.product_id+"%"+device_id):(key_name),
						"datapoints": [{
							"value": value
						}]
					})
				uni.request({
					url: that.product_id?(that.direction_old + "/devices/1097281683/datapoints"):(that.direction_old + "/devices/" + device_id + "/datapoints"),
					header: that.product_id?{"api-key": "CSwWZsNXKRVJz=XUMES=qfO7p8Q="}:{ "api-key": that.api_key},
					data: {'datastreams': datastreams},
					method:'POST',
					success: res => {
						// console.log('返回status', res.data["data"]);
						uni.showToast({
							title: "成功",
							icon: "none"
						})
					}
				});
				that.send(device_id, key_name, key_name, value);
			},
			delay_fresh(delay_time=2000){
				var that = this;
				setTimeout(function() {
				  // 这里写要延时执行的代码
				  that.change_seen_id(that.seen_id);
				}, delay_time); // 这里的 1000 表示延时的时间，单位是毫秒
			},
			// debug(){
			// }
	}

}
