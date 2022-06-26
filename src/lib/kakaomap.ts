import { FoodStore } from "@/interface/order.model";

// import { KakaoMap } from "./lib/kakaomap";
export class KakaoMap {
  container;
  kakao: any;
  map: any;
  geocoder: any;
  customOverlayList: any[] = [];
  markerList: any[] = [];
  beforeMarkerId: string | null = null;
  prefix = "id-";
  onMarkerClicked = null;
  onCustomOverlayClicked = null;

  focusedMarkerID: string | null = null;
  focusedCustomOverlayID = null;

  // const kakaoMap = new KakaoMap(this.$refs.map, 33.450701, 126.570667, 3);
  constructor(refEle: any, lat: number, long: number, lv: number) {
    this.container = refEle;
    this.kakao = (window as any).kakao;
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new this.kakao.maps.LatLng(lat, long), //지도의 중심좌표.
      level: lv, //지도의 레벨(확대, 축소 정도)
    };

    this.map = new this.kakao.maps.Map(this.container, options); //지도 생성 및 객체 리턴

    this.geocoder = new this.kakao.maps.services.Geocoder();
  }

  coord2RegionCode(latlong: any) {
    return new Promise((resolve) => {
      this.geocoder.coord2Address(latlong.long, latlong.lat, (res: any) => {
        resolve(res);
      });
    });
  }

  addressSearch(address: string) {
    return new Promise((resolve) => {
      this.geocoder.addressSearch(address, (result: any, status: any) => {
        resolve({ result, status });
      });
    });
  }

  validateKakaoMapInit() {
    if (!(window as any).kakao || !this.container) {
      throw new Error(
        "[kakaoMap.controller] [validateKakaoMapInit] Map not available"
      );
    }
  }

  validateKakaoMapInstance() {
    if (!this.map) {
      throw new Error(
        "[kakaoMap.controller] [validateKakaoMapInstance] Map instance null"
      );
    }
  }

  setZoom(lv: number) {
    this.validateKakaoMapInstance();
    this.map.setLevel(lv);
    return lv;
  }

  getZoom() {
    this.validateKakaoMapInstance();
    return this.map.getLevel();
  }

  moveCenter(lat: number, lot: number) {
    this.validateKakaoMapInstance();
    const moveLatLon = new this.kakao.maps.LatLng(lat, lot);
    // 지도 중심을 이동 시킵니다
    this.map.setCenter(moveLatLon);
  }

  getCenter() {
    this.validateKakaoMapInstance();
    return this.map.getCenter();
  }

  // {
  //     lat:,
  //     lot:,
  //     content,
  //     xAnchor: 0.3,
  //     yAnchor: 0.91
  // }
  customOverlayTemplate(item: FoodStore) {
    return `
        <div id="${this.prefix}${item.idx}" style="
        background-image: url(${item.imgUrl});
        width: 150px;
        height: 150px;
        border-radius: 15px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        " data-overlay="${item.idx}">
        </div>
    `;
  }

  addCustomOverlay(item: FoodStore) {
    this.validateKakaoMapInstance();
    const customOverlay = new this.kakao.maps.CustomOverlay({
      position: new this.kakao.maps.LatLng(item.lat, item.long),
      content: this.customOverlayTemplate(item),
      xAnchor: 0.5,
      yAnchor: 1.3,
      ...item,
    });
    customOverlay.data = item;
    customOverlay.setVisible(false);
    // https://devtalk.kakao.com/t/topic/44205/8
    customOverlay.a
      .querySelector("span#close")
      .addEventListener("click", (e: any) => {
        customOverlay.setVisible(!customOverlay.getVisible());
      });
    customOverlay.a.querySelector("p").addEventListener("click", (e: any) => {
      if (this.onCustomOverlayClicked) {
        // this.onCustomOverlayClicked(item.id);
      }
    });
    customOverlay.setMap(this.map);
    this.customOverlayList.push(customOverlay);
    return customOverlay;
  }

  modifyCustomOverlay(idx: number, item: FoodStore) {
    this.deleteCustomOverlay(idx, 0);
    this.customOverlayList[idx] = this.addCustomOverlay(item);
  }

  deleteCustomOverlay(idx: number, withSplice = 1) {
    this.validateKakaoMapInstance();
    if (idx < 0 || idx >= this.customOverlayList.length) {
      throw new Error(`Over / Under flow exception`);
    }

    this.customOverlayList[idx].setMap(null);
    this.customOverlayList.splice(idx, withSplice);
  }

  setCustomOverlayList(array: FoodStore[]) {
    console.log("setCustomOverlayList", array);
    this.resetCustomOverlayList();
    if (!array || array.length < 0) {
      throw new Error(`Unexpected array detected`);
    }

    array.forEach((item) => {
      this.addCustomOverlay(item);
    });
  }

  resetCustomOverlayList() {
    let removeExcludeFocusedItem = false;
    this.validateKakaoMapInstance();
    this.customOverlayList.forEach((item, idx) => {
      if (
        !this.focusedCustomOverlayID &&
        item.data.id !== this.focusedCustomOverlayID
      ) {
        this.deleteCustomOverlay(idx, 0);
      } else if (
        this.focusedCustomOverlayID &&
        item.data.id === this.focusedCustomOverlayID
      ) {
        this.customOverlayList[0] = this.customOverlayList[idx];
        removeExcludeFocusedItem = true;
      }
    });
    this.customOverlayList.length =
      this.focusedCustomOverlayID && removeExcludeFocusedItem ? 1 : 0;
  }

  testClick() {
    // console.log(this.markerList[0].Ec.parentNode, this.markerList[0].Ec.parentNode.click())
    this.kakao.maps.event.trigger(this.markerList[1], "click");
  }

  addMarker(lat: number, lot: number, id: string) {
    this.validateKakaoMapInstance();
    const markerPosition = new this.kakao.maps.LatLng(lat, lot);

    const icon = new this.kakao.maps.Marker({
      position: markerPosition,
    });

    const marker = new this.kakao.maps.Marker({
      position: markerPosition,
      image: icon,
    });
    this.kakao.maps.event.addListener(marker, "click", () => {
      const linkedCustomOverlay = this.customOverlayList.find(
        (overlay) => overlay.data.id === id
      );

      if (id === this.beforeMarkerId) {
        this.beforeMarkerId = null;
      }
      if (linkedCustomOverlay) {
        if (!linkedCustomOverlay.getVisible()) {
          // this.onMarkerClicked(id);
          this.focusedMarkerID = id;
          this.focusedCustomOverlayID = linkedCustomOverlay.data.id;
        } else {
          this.focusedMarkerID = null;
          this.focusedCustomOverlayID = null;
        }
        linkedCustomOverlay.setVisible(!linkedCustomOverlay.getVisible());
      } else if (!linkedCustomOverlay) {
        console.warn(
          `[kakaoMap.controller] [addMarker.addListener] Cannot find clicked overlay id: ${id}`
        );
        this.focusedMarkerID = null;
        this.focusedCustomOverlayID = null;
      }

      const previousCustomOverlay = this.customOverlayList.find(
        (overlay) => overlay.data.id === this.beforeMarkerId
      );

      if (previousCustomOverlay) {
        previousCustomOverlay.setVisible(false);
      } else {
        console.warn(
          `[kakaoMap.controller] [addMarker.addListener] Cannot find previous overlay id: ${this.beforeMarkerId}`
        );
      }
      this.beforeMarkerId = id;
    });
    marker.setMap(this.map);
    this.markerList.push(marker);
    return marker;
  }

  modifyMarker(idx: number, lat: number, lot: number, id: string) {
    this.deleteMarker(idx, 0);
    this.markerList[idx] = this.addMarker(lat, lot, id);
  }

  deleteMarker(idx: number, withSplice = 1) {
    this.validateKakaoMapInstance();
    if (idx < 0 || idx >= this.markerList.length) {
      throw new Error(`Over / Under flow exception`);
    }

    this.markerList[idx].setMap(null);
    this.markerList.splice(idx, withSplice);
  }

  setMarkerList(array: any[]) {
    this.resetMarkerList();
    if (!array || array.length < 0) {
      throw new Error(`Unexpected array detected`);
    }

    array.forEach((item) => {
      this.addMarker(item.lat, item.lot, item.id);
    });
  }

  resetMarkerList() {
    this.validateKakaoMapInstance();
    this.markerList.forEach((item, idx) => this.deleteMarker(idx, 0));
    this.markerList.length = 0;
  }
}
