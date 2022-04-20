const db = wx.cloud.database({
	env: 'cloud1-1g2hhwqi2003a35c'
})
var zhouJieLun = [];
var liRongHao = [];
var xuSong = [];
var geXingDianTai = [];
var suiXinTing = [];
var jingDian = [];
var wangLuoLiuXing = [];
var douYinShenQu = [];
var shenDuCuiMian = [];
var qingGanZhiYuZhan = [];
var KTVBiDianGe = [];
var jingXuanZhaoPaiGe = [];
var reMenFanChang = [];
db.collection('songList1').field({
	id: true,
	name: true,
	singer: true,
	src: true,
	poster: true,
}).get({
	success: res => {
		res.data.forEach(function (item, index) {
			switch (item.singer) {
				case "周杰伦":
					zhouJieLun.push({
						"id": item.id,
						"name": item.name,
						"src": item.src,
						"poster": item.poster,
					});
					break;
				case "李荣浩":
					liRongHao.push({
						"id": item.id,
						"name": item.name,
						"src": item.src,
						"poster": item.poster,
					});
					break;
			};
		})
	}
})
db.collection('songList2').field({
	id: true,
	name: true,
	singer: true,
	src: true,
	poster: true,
}).get({
	success: res => {
		res.data.forEach(function (item, index) {
			switch (item.singer) {
				case "许嵩":
					xuSong.push({
						"id": item.id,
						"name": item.name,
						"src": item.src,
						"poster": item.poster,
					});
					break;
				case "个性电台":
					geXingDianTai.push({
						"id": item.id,
						"name": item.name,
						"src": item.src,
						"poster": item.poster,
					});
					break;
				case "随心听":
					suiXinTing.push({
						"id": item.id,
						"name": item.name,
						"src": item.src,
						"poster": item.poster,
					});
					break;
				case "经典":
					jingDian.push({
						"id": item.id,
						"name": item.name,
						"src": item.src,
						"poster": item.poster,
					});
					break;
				case "网络流行":
					wangLuoLiuXing.push({
						"id": item.id,
						"name": item.name,
						"src": item.src,
						"poster": item.poster,
					});
					break;
				case "抖音神曲":
					douYinShenQu.push({
						"id": item.id,
						"name": item.name,
						"src": item.src,
						"poster": item.poster,
					});
					break;
				case "深度催眠":
					shenDuCuiMian.push({
						"id": item.id,
						"name": item.name,
						"src": item.src,
						"poster": item.poster,
					});
					break;
				case "情感治愈站":
					qingGanZhiYuZhan.push({
						"id": item.id,
						"name": item.name,
						"src": item.src,
						"poster": item.poster,
					});
					break;
				case "KTV必点歌":
					KTVBiDianGe.push({
						"id": item.id,
						"name": item.name,
						"src": item.src,
						"poster": item.poster,
					});
					break;
				case "精选招牌歌":
					jingXuanZhaoPaiGe.push({
						"id": item.id,
						"name": item.name,
						"src": item.src,
						"poster": item.poster,
					});
					break;
				case "热门翻唱":
					reMenFanChang.push({
						"id": item.id,
						"name": item.name,
						"src": item.src,
						"poster": item.poster,
					});
					break;
			};
		})
	}
})

var songList = [{
		"singer": "李荣浩",
		"songs": liRongHao
	},
	{
		"singer": "周杰伦",
		"songs": zhouJieLun
	},
	{
		"singer": "许嵩",
		"songs": xuSong
	},
	{
		"singer": "个性电台",
		"songs": geXingDianTai,
	},
	{
		"singer": "随心听",
		"songs": suiXinTing,
	},
	{
		"singer": "经典",
		"songs": jingDian,
	},
	{
		"singer": "网络流行",
		"songs": wangLuoLiuXing,
	},
	{
		"singer": "抖音神曲",
		"songs": douYinShenQu,
	},
	{
		"singer": "深度催眠",
		"songs": shenDuCuiMian,
	},
	{
		"singer": "情感治愈站",
		"songs": qingGanZhiYuZhan,
	},
	{
		"singer": "KTV必点歌",
		"songs": KTVBiDianGe,
	},
	{
		"singer": "精选招牌歌",
		"songs": jingXuanZhaoPaiGe,
	},
	{
		"singer": "热门翻唱",
		"songs": reMenFanChang
	}
]

module.exports = {
	liRongHao: liRongHao,
	zhouJieLun: zhouJieLun,
	xuSong: xuSong,
	geXingDianTai: geXingDianTai,
	suiXinTing: suiXinTing,
	jingDian: jingDian,
	wangLuoLiuXing: wangLuoLiuXing,
	douYinShenQu: douYinShenQu,
	shenDuCuiMian: shenDuCuiMian,
	qingGanZhiYuZhan: qingGanZhiYuZhan,
	KTVBiDianGe: KTVBiDianGe,
	jingXuanZhaoPaiGe: jingXuanZhaoPaiGe,
	reMenFanChang: reMenFanChang,
	songList: songList
}

// for (var i = 0; i < 1; i++) {
// 	db.collection('songList').add({
// 		data: {
// 			id: reMenFanChang[i].id,
// 			singer: "热门翻唱",
// 			name: reMenFanChang[i].name,
// 			src: reMenFanChang[i].src,
// 			poster: reMenFanChang[i].poster,
// 		},
// 		success: res => {
// 			console.log('添加成功', res._id)
// 		},
// 		fail: err => {
// 			wx.showToast({
// 				icon: 'none',
// 				title: '新增记录失败',
// 			})
// 			console.error('[数据库][新增记录]失败:', err)
// 		}
// 	});
// }