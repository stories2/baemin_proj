import { FirebaseApp, getApp } from "firebase/app";
import {
  Database,
  getDatabase,
  ref,
  get,
  query,
  equalTo,
  orderByChild,
  startAt,
  limitToFirst,
} from "firebase/database";

export class DatabaseDao {
  app: FirebaseApp;
  realtimeDB: Database;
  lastAddrCode: string;

  constructor() {
    this.app = getApp();
    this.realtimeDB = getDatabase(this.app);
    this.lastAddrCode = "";
  }

  // const dao = new DatabaseDao();
  // dao.getFoodShopFilterByAddress("3060000").then((res) => {
  //   console.log("test", res);
  // });
  // https://stackoverflow.com/a/34970020
  //   https://firebase.google.com/docs/database/security/indexing-data
  //   https://firebase.google.com/docs/database/web/lists-of-data?hl=ko#filtering_data
  //   realtime-database.ts?c7cf:38 [getFoodShopFilterByAddress] error: Index not defined, add ".indexOn": "cgg_code", for path "/DATA", to the rules
  getFoodShopFilterByAddress(
    addrCode: string,
    offset = 0,
    pageSize = 20
  ): Promise<any> {
    return get(
      query(
        ref(this.realtimeDB, "DATA"),
        orderByChild("cgg_code_nm"),
        equalTo(addrCode),
        // startAt(null),
        limitToFirst(offset + pageSize)
      )
    )
      .then((snapshot) => {
        if (snapshot.exists()) {
          const snapshotData = snapshot.val();
          console.log("val", snapshotData);
          const storeList: any[] = [];
          Object.keys(snapshotData).forEach((key) => {
            storeList.push(snapshotData[key]);
          });
          console.log(
            "offset",
            offset,
            pageSize,
            storeList.length,
            Math.min(offset + pageSize, storeList.length)
          );
          return storeList.slice(
            0,
            Math.min(offset + pageSize, storeList.length)
          );
        } else {
          console.warn("No data available");
          return [];
        }
      })
      .catch((error) => {
        console.error(`[getFoodShopFilterByAddress] error: ${error.message}`);
      });
  }
}
