// import { Permission } from "./lib/permission";

export class Permission {
  // https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API/Using_the_Permissions_API

  //   const per = new Permission();
  //   per
  //     .grantLocation()
  //     .then((res) => {
  //       console.log("re", res);

  //       if (res != "denied") {
  //         return per.getCurrentLocation();
  //       } else {
  //         return null;
  //       }
  //     })
  //     .then((pos) => {
  //       console.log("pos", pos);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });

  getLocationAutomatically() {
    const per = new Permission();
    return per.grantLocation().then((res) => {
      if (res != "denied") {
        return per.getCurrentLocation();
      } else {
        throw new Error("User denied location permission");
      }
    });
  }

  grantLocation() {
    return this.grantPermission("geolocation");
  }

  grantPermission(
    name: PermissionName
  ): Promise<"denied" | "granted" | "prompt"> {
    return navigator.permissions.query({ name }).then((result) => {
      return result.state; // granted, prompt, denied
    });
  }

  getCurrentLocation(): Promise<GeolocationCoordinates> {
    return new Promise<GeolocationCoordinates>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          resolve(pos.coords);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
