// import uCharts from '@/static/u-charts/u-charts.js';
// import wxCharts from '@/static/wxcharts.js'; //@=../..
var _self;
// var canvaGauge=null; //必须！否则报错
// //这里的Data为测试使用，生产环境请从服务器获取
// var Data={
// 	LineA:{categories:['2012', '2013', '2014', '2015', '2016', '2017'],series:[{name: '成交量A',data:[35, 20, 25, 37, 4, 20]},{name: '成交量B',data:[70, 40, 65, 100, 44, 68]},{name: '成交量C',data:[100, 80, 95, 150, 112, 132]},{name: '成交量D',data:[100, 80, 95, 150, 112, 132]}]},
// 	}
		
export default {
	data() {
		return {
			device_ids: "",
			device_type: "",
			api_key: "",
			comments: "",
			trigger_time: "",
			hid_usb: "",
			// canvasnamelist:["canvasGauge0","canvasGauge1"],
			// username: "",
			intervalId: null,
			seen_id_tags: ["远程物联", "修改信息", "广域HID"],
			seen_id: 0,
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
			input_val: [null, null, null, null, null, null, 5, null], //初始化, null可缺省
			// 0-产品ids，1-备注，2-apikey，3-触发秒数，4-hidusbid, [5-hidusb文本，6-hidusb速度]
			// 7-类型[0-全IO,1-剪裁IO,2-红外控制,3-地图类型]，
			temp_data: {},
			//#ifndef H5
			direction: "https://api.heclouds.com", // "http://183.230.40.34"
			//#endif
			//#ifdef H5
			direction: "/unionenet",
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
		if(uni.getStorageSync("seen_id")){
			this.seen_id = uni.getStorageSync("seen_id");
		} else{
			this.seen_id = 0;
		}
		console.log("seen_id:", this.seen_id);

		//加载时先刷新一下
		// this.fresh();
		this.check_main(this.seen_id);
		
		//定时器
		this.dataRefresh();
		
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
		;
		// this.showLineA("canvasLineA",Data.LineA);
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
				this.check_main(this.seen_id);
			},
			// 定时刷新数据函数
			dataRefresh() {
				// 计时器正在进行中，退出函数
				if (this.intervalId != null) {
					return;
				}
				// 计时器为空，操作
				this.intervalId = setInterval(() => {
					console.log("刷新 " + new Date());
					// this.fresh(); //加载数据函数
				}, 10000);
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
			change_seen_id(e){
				this.seen_id = e.target.value;
				uni.setStorageSync("seen_id", this.seen_id);
				switch(this.seen_id){
					case 0:
						this.check_main(0);
						break;
					case 1:
						this.init_info();
						break;
					case 2:
						this.check_main(2);
						break;
				}
			},
			check_main(seen_id = "") {
				console.log("check once");
				return;
				var that = this;
				that.device_ids = uni.getStorageSync("device_ids");
				that.api_key = uni.getStorageSync("api_key");
				that.comments = uni.getStorageSync("comments");
				that.trigger_time = uni.getStorageSync("trigger_time");
				that.hid_usb = uni.getStorageSync("hid_usb");
				that.device_type = uni.getStorageSync("device_type");
				var device_id_split = that.device_ids.split(",");
				var comments_split = that.comments.split(",");
				var devices_type = that.device_type.split(",");
				var hid_usb_split = that.hid_usb.split(",");
				var temp_data = {};
				
				// WIFI-HID类型只查询在线状态
				if (seen_id == 2){
					for(var idx=0;idx<hid_usb_split.length;idx++){
						temp_data[hid_usb_split[idx]] = {
							"status": "在线",
							"datastreams": [],
						}
					}
					uni.request({
						url: that.direction + "/devices/status",
						// url: "http://183.230.40.34/devices/status",
						header: { "api-key": that.api_key},
						data: {'devIds':that.hid_usb},
						method:'GET',//请求方式  或GET，必须为大写
						success: res => {
							// console.log('返回status', res.data["data"]);
							for (var idx=0; idx < res.data["data"]["devices"].length; idx++){
								var device_data = res.data["data"]["devices"][idx];
								if (device_data["online"] == false){
									temp_data[device_data["id"]]["status"] = "离线";
								}
							}
						}
					  });
				}
				else {
					// 首页
					for(var idx=0;idx<device_id_split.length;idx++){
						temp_data[device_id_split[idx]] = {
							"device_type": devices_type[idx],
							"comments": comments_split[idx],
							"status": "在线",
							"datastreams": [],
						}
					}
					// 在线状态
					uni.request({
						url: that.direction + "/devices/status",
						// url: "http://183.230.40.34/devices/status",
						header: { "api-key": that.api_key},
						data: {'devIds':that.device_ids},
						method:'GET',//请求方式  或GET，必须为大写
						success: res => {
							// console.log('返回status', res.data["data"]);
							for (var idx=0; idx < res.data["data"]["devices"].length; idx++){
								var device_data = res.data["data"]["devices"][idx];
								if (device_data["online"] == false){
									temp_data[device_data["id"]]["status"] = "离线";
								}
							}
						}
					  });
					// 数据内容
					uni.request({
						url: that.direction + "/devices/datapoints",
						header: { "api-key": that.api_key},
						data: {'devIds':that.device_ids},
						method:'GET',//请求方式  或GET，必须为大写
						success: res => {
							// console.log('返回', res.data["data"]);
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
									}
								}
								
								
								temp_data[device_data["id"]]["datastreams"] = device_data["datastreams"];
								
							}
						}
					  });
					  
				}
				that.temp_data = temp_data;
			},
			send(device_id, key_name, action) {
				var that = this;
				uni.request({
					url: that.direction + "/cmds?device_id=" + device_id,
					header: { "api-key": that.api_key},
					data: {
						// key_name: JSON.stringify(action, that.trigger_time),
						"key_name": key_name,
						"action": action,
						"period": that.trigger_time
						
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
					url: that.direction + "/cmds?device_id=" + that.hid_usb,
					header: { "api-key": that.api_key},
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
				this.check_main();
				uni.showToast({
					title: "成功",
					icon: "none"
				})
			},
			init_info() {
				var that = this;
				that.input_val[0] = that.device_ids;
				that.input_val[1] = that.comments;
				that.input_val[2] = that.api_key;
				that.input_val[3] = that.trigger_time;
				that.input_val[4] = that.hid_usb;
				that.input_val[7] = that.device_type;
				that.$forceUpdate();
			}
	}

}