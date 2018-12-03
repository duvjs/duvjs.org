# 生命周期
目前Duv支持除beforeUpdate、updated之外Vue的全部生命周期，并增加小程序生命周期。
Duv在Vue生命周期beforeCreate之后，created之前创建小程序实例（App,Page,Component）,通过小程序的生命
周期调用Vue实例的除 beforeCreate 的生命周期

#### APP生命周期
- beforeCreate：小程序初始化之前
- created：小程序初始化完成时（全局只触发一次）
- onShow：小程序启动，或从后台进入前台显示时
- onHide：小程序从前台进入后台时

#### Page生命周期

- beforeCreate：页面加载之前
- created：监听页面加载
- beforeMount：监听页面初次渲染完成之前
- mounted：监听页面初次渲染完成之后
- beforeDestory：监听页面卸载之前
- destoryed：监听页面卸载之后
- onShow：监听页面显示
- onHide：监听页面隐藏
- onPullDownRefresh：监听用户下拉动作
- onReachBottom：页面上拉触底事件的处理函数
- onShareAppMessage：用户点击右上角分享
- onPageScroll：页面滚动触发事件的处理函数
- onResize：页面尺寸改变时触发
- onTabItemTap：当前是 tab 页时，点击 tab 时触发

#### Component生命周期

- created：在组件实例进入页面节点树时执行，注意此时不能调用 setData
- beforeMount：在组件实例进入页面节点树时执行
- mounted：在组件布局完成后执行，此时可以获取节点信息
- moved：在组件实例被移动到节点树另一个位置时执行
- beforeDestory：在组件实例被从页面节点树移除之前执行
- destoryed：在组件实例被从页面节点树移除之后执行

