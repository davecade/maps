import { User } from './User'
import { Company } from './Company'


export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divID: string) {
        this.googleMap = new google.maps.Map(document.getElementById(`${divID}`), {
            zoom: 1,
            center: {
              lat: 0,
              lng: 0,
            }
          });
    }

    addMarker(entity: User | Company): void {
      new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: entity.location.lat,
          lng: entity.location.lng
        }
      });
    }
}