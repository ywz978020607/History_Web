<template>
	<view class="container">
		<uni-section title="心率体温展示" type="line">
			<uni-grid :column="2" :showBorder="false" :square="false">
				<uni-grid-item>
					<best-gauge :config="body_heart"></best-gauge>
				</uni-grid-item>
				<uni-grid-item>
					<best-gauge :config="body_temp"></best-gauge>
				</uni-grid-item>
			</uni-grid>
		</uni-section>

		<uni-section title="定位展示" type="line">
			<uni-grid :column="1" :showBorder="false" :square="false">
				<uni-grid-item>
					<view style="text-align: center;">{{location}}</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="当前状态" type="line">
			<uni-grid :column="1" :showBorder="false" :square="false">
				<uni-grid-item>
					<view style="text-align: center;">{{status_msg}}</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="控制" type="line">
			<uni-grid :column="2" :showBorder="false" :square="false">
				<uni-grid-item>
					<button class="text" @click="startConnect">链接云平台</button>

				</uni-grid-item>
				<uni-grid-item>
					<button class="text" @click="endConnect">断开云平台</button>

				</uni-grid-item>
			</uni-grid>
			<uni-grid :column="2" :showBorder="false" :square="false">
				<uni-grid-item>
					<button class="text" @click="startSubscribe">订阅</button>

				</uni-grid-item>
				<uni-grid-item>

					<button type="text" @click="endConnect">取消订阅</button>
				</uni-grid-item>
			</uni-grid>
			<scroll-view scroll-y class="tips-panel">
				<view class="panel-list" v-for="(item,index) in logs" :key="index">
					{{item.option + item.log}}
				</view>
			</scroll-view>
		</uni-section>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				OneNetInfo: {
					deviceUrl: "http://api.heclouds.com/devices/18",
					deviceId: "105888",
					apiKey: 'A=jJ33ws='
				},
				logs: [{
					option: '环境配置：',
					log: '配置成功'
				}, ],
				body_temp: {
					id: 'gaugeId0',
					value: 0,
					axisTickLength: 2, //该属性与axisTick互斥，存在axisTickLength并大于0，axisTick就无效
					name: '当前体温',
					max: 200,
					min: 0,
					unit: '℃',
				},
				body_heart: {
					id: 'gaugeId1',
					value: 0,
					axisTickLength: 2, //该属性与axisTick互斥，存在axisTickLength并大于0，axisTick就无效
					name: '当前心率',
					max: 200,
					min: 0,
					unit: 'BPM',
				},
			}
		},
		methods: {
			startConnect() {
				console.log(this.$OneNetApi)
				this.$OneNetApi.setapiKey(this.OneNetInfo.apiKey)
				console.log(this.$OneNetApi._apiKey)
				let _this = this
				this.$OneNetApi.getDataStreams(this.OneNetInfo.deviceId).done(function(data) {
					console.log('api调用完成，服务器返回data为：', data);
					_this.body_temp.value  = data['data'][0].current_value
				})
			},
			/* 终止连接 */
			endConnect() {
				var _this = this
				this.$mqttTool.end().then(res => {
					_this.logs.unshift({
						option: '终止：',
						log: res
					})
				})
			},
			/* 重新连接 */
			reConnect() {
				var _this = this
				this.$mqttTool.reconnect().then(res => {
					_this.logs.unshift({
						option: '重连：',
						log: res
					})
				})
			},
			/* 更改Qos */
			changeQos() {
				var _this = this
				if (this.subscribeInfo.qos >= 2) {
					this.subscribeInfo.qos = 0
					this.logs.unshift({
						option: 'Qos：',
						log: this.subscribeInfo.qos
					})
					this.startSubscribe();
				} else {
					this.subscribeInfo.qos += 1
					this.logs.unshift({
						option: 'Qos：',
						log: this.subscribeInfo.qos
					})
					this.startSubscribe();
				}
			},
			/* 订阅 */
			startSubscribe() {
				if (this.subscribeInfo.topic == '') {
					uni.showToast({
						icon: 'none',
						title: '输入topic'
					})
					return;
				}
				var _this = this
				let opts = {
					topic: this.subscribeInfo.topic,
					qos: this.subscribeInfo.qos,
				}
				this.$mqttTool.subscribe(opts).then(res => {
					_this.logs.unshift({
						option: '订阅' + opts.topic + '：',
						log: res
					})
				})
			},
			/* 取消订阅 */
			endSubscribe() {
				var _this = this
				let opts = {
					topic: this.subscribeInfo.topic
				}
				this.$mqttTool.unsubscribe(opts).then(res => {
					_this.logs.unshift({
						option: '取消订阅：',
						log: res
					})
				})
			},
			/* 发送消息 */
			publish() {
				var _this = this
				let opts = {
					topic: this.publishInfo.topic,
					message: this.publishInfo.message,
				}
				this.$mqttTool.publish(opts).then(res => {
					_this.logs.unshift({
						option: '发送：',
						log: res
					})
				})
			},
			/* 清空配置 */
			clearConfig() {
				this.endSubscribe();
				this.connectInfo = {
					clientId: '',
					username: '',
					password: ''
				}
				this.subscribeInfo = {
					topic: '',
					qos: 1,
				}
				this.publishInfo = {
					topic: '',
					message: ''
				}
				this.isBuffer = false
			},
			/* 清空日志 */
			cealrLog() {
				this.logs = [{
					option: '环境配置：',
					log: '配置成功'
				}]
			},

			update: function() {
				console.log('sdf')
				this.body_temp.value = this.getRandom(this.body_temp.max);
				this.body_heart.value = this.getRandom(this.body_heart.max);
			},
			getRandom: function(max) {
				max = max || 100;
				let _random = (Math.random() * max).toFixed(1);
				return _random * 1;
			}

		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.id); //打印出上个页面传递的参数。
			console.log(option.name); //打印出上个页面传递的参数。
			/* 连接 */
			// #ifdef H5
			console.log('H5 Page')
			// this.connectInfo.host = "ws://dtu.heclouds.com:1811/mqtt";
			// this.connectInfo.host = "wss://api.easylink.io:1983";
			// #endif
			// #ifdef MP-WEIXIN||APP-PLUS
			console.log("MP-WEIXIN||APP-PLUS Page")
			// this.connectInfo.host = "wx://api.easylink.io:1983";
			// this.connectInfo.host = "wxs://api.easylink.io:1983";
			// #endif

		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}

	.text {
		text-align: center;
		/* width: 180upx; */
		line-height: 70upx;
		display: block;
		margin: 10upx auto;
		border: 1px solid #369c96;
		font-size: 28upx;
		border-radius: 10upx;
		color: #369c96;
	}
</style>
