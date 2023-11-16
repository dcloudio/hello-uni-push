'use strict';
exports.main = async (event, context) => {

	return uniCloud.getPushManager({
		appId: "__UNI__EE8E36A",
		"getRequestBody": true,
	}).sendMessage({
		"push_clientid": "fe755e0a33a45f52706f3d8712c3c433",
		"title": "留言",
		"content": "留言审核通过",
		"payload": {
			"name": "留言审核通过",
			"time": Date.now()
		},
		// "force_notification":true,
		// 离线推送厂商信息配置，需要到云厂商后台申请
		"channel": {
			// 华为离线推送
			"HW": "NORMAL",
			// 小米离线推送
			"XM": "112735",
			// oppo离线推送
			"OP": "msg-pass"
		},
		"options": {
			"HW": {
				"/message/android/notification/default_sound": true,
				"/message/android/notification/importance": "NORMAL",
				"/message/android/notification/channel_id": "msg-pass",
				"/message/android/notification/sound": "pushsound",
				"/message/android/category": "IM"
			},
			"OP": {
				"/channel_id": "msg-pass"
			},
			"OPG": {
				"/channel_id": "msg-pass"
			},
			"XM": {
				"/extra.channel_id": "112735"
			}
		}
	})
};