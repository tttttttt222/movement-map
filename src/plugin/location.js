let geolocation = null;

export function SelfLocation(params) { //(map"")

  //定位
  if (!geolocation) {
    geolocation = new AMap.Geolocation({
      enableHighAccuracy: true,//是否使用高精度定位，默认:true
      timeout: 10000,          //超过10秒后停止定位，默认：5s
      showButton: false,        //显示定位按钮，默认：true
      buttonPosition: 'LB',    //定位按钮的停靠位置
      buttonOffset: new AMap.Pixel(0, 0),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
      showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
      showCircle: false,        //定位成功后用圆圈表示定位精度范围，默认：true
      // markerOptions: {
      //   content: ""
      // }
    });
  }

  params.map.addControl(geolocation);
  // geolocation.getCurrentPosition((status, result) => {
  //   if (status == 'complete') {
  //     const lng = result.position.lng;
  //     const lat = result.position.lat;
  //     this.circle[0].center = [lng, lat];
  //     // console.log("定位成功", result);
  //   } else {
  //     this.$message.error('定位失败');
  //   }
  // });

  geolocation.getCurrentPosition();

  if (params.onComplete && typeof params.onComplete == 'function') {
    AMap.event.addListener(geolocation, 'complete', params.onComplete);
  }
  if (params.onError && typeof params.onError == 'function') {
    AMap.event.addListener(geolocation, 'error', params.onError);
  }

}
