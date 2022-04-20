const db = wx.cloud.database({
    env: 'cloud1-1g2hhwqi2003a35c'
})
var json = new Array(10);
db.collection('broadcastList').field({
    id: true,
    name: true,
    thumb: true,
}).get({
    success: res => {
        res.data.forEach(function (item, index) {
            json[item.id] = {
                "name": item.name,
                "thumb": item.thumb
            }
        })
    }
})

module.exports = {
    broadcasts: json
}

// for (var i = 0; i < json.length; i++) {
//     db.collection('broadcastList').add({
//         data: {
//             id: i,
//             name: json[i].name,
//             thumb: json[i].thumb,
//         },
//         success: res => {
//             console.log('添加成功', res._id)
//         },
//         fail: err => {
//             wx.showToast({
//                 icon: 'none',
//                 title: '新增记录失败',
//             })
//             console.error('[数据库][新增记录]失败:', err)
//         }
//     });
// }