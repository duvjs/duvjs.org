# 生命周期
目前Duv支持除beforeUpdate、updated之外Vue的全部生命周期，并增加小程序生命周期。
Duv在Vue生命周期beforeCreate之后，created之前创建小程序实例（App,Page,Component）,通过小程序的生命
周期调用Vue实例的除 beforeCreate 的生命周期

#### APP生命周期
- onLaunch：小程序初始化完成时（全局只触发一次）
- onShow：小程序启动，或从后台进入前台显示时
- onHide：小程序从前台进入后台时

Duv生命周期对应关系

![APP生命周期](/images/applifecycle.png "APP生命周期")

#### Page生命周期

- onLoad：监听页面加载
- onShow：监听页面显示
- onReady：监听页面初次渲染完成
- onHide：监听页面隐藏
- onUnload：监听页面卸载
- onPullDownRefresh：监听用户下拉动作
- onReachBottom：页面上拉触底事件的处理函数
- onShareAppMessage：用户点击右上角分享
- onPageScroll：页面滚动触发事件的处理函数
- onResize：页面尺寸改变时触发
- onTabItemTap：当前是 tab 页时，点击 tab 时触发

Duv生命周期对应关系

![Page生命周期](/images/pagelifecycle.png "Page生命周期")

#### Component生命周期

- created：组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 setData
- attached：组件生命周期函数，在组件实例进入页面节点树时执行
- ready：组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息
- moved：组件生命周期函数，在组件实例被移动到节点树另一个位置时执行
- detached：组件生命周期函数，在组件实例被从页面节点树移除时执行

