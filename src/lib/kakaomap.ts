// import { KakaoMap } from "./lib/kakaomap";
export class KakaoMap {
  container;
  map: any;

  // const kakaoMap = new KakaoMap(this.$refs.map, 33.450701, 126.570667, 3);
  constructor(refEle: any, lat: number, long: number, lv: number) {
    this.container = refEle;
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new (window as any).kakao.maps.LatLng(lat, long), //지도의 중심좌표.
      level: lv, //지도의 레벨(확대, 축소 정도)
    };

    this.map = new (window as any).kakao.maps.Map(this.container, options); //지도 생성 및 객체 리턴
  }
}
