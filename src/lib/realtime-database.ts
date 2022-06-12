import { FirebaseApp, getApp } from "firebase/app";
import {
  Database,
  getDatabase,
  ref,
  get,
  query,
  equalTo,
  orderByChild,
} from "firebase/database";

export class DatabaseDao {
  app: FirebaseApp;
  realtimeDB: Database;

  constructor() {
    this.app = getApp();
    this.realtimeDB = getDatabase(this.app);
  }

  // const dao = new DatabaseDao();
  // dao.getFoodShopFilterByAddress("3060000").then((res) => {
  //   console.log("test", res);
  // });
  // https://stackoverflow.com/a/34970020
  //   https://firebase.google.com/docs/database/security/indexing-data
  //   https://firebase.google.com/docs/database/web/lists-of-data?hl=ko#filtering_data
  //   realtime-database.ts?c7cf:38 [getFoodShopFilterByAddress] error: Index not defined, add ".indexOn": "cgg_code", for path "/DATA", to the rules
  getFoodShopFilterByAddress(addrCode: string): Promise<any> {
    return get(
      query(
        ref(this.realtimeDB, "DATA"),
        orderByChild("cgg_code_nm"),
        equalTo(addrCode)
      )
    )
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
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
