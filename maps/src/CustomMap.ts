
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapElementId: string) {
    const mapOptions: {
      zoom: number;
      center: {
        lat: number;
        lng: number;
      };
    } = {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0,
      },
    };

    this.googleMap = new google.maps.Map(
      document.getElementById(mapElementId),
      mapOptions
    );
  }

  addMarker(mappable: Mappable): void {
    const markerOptions: {
      map: google.maps.Map;
      position: {
        lat: number;
        lng: number;
      };
    } = {
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
    }
    const infoWindowOptions: {
      content: string;
    } = {
      content: mappable.markerContent()
    }
    const marker = new google.maps.Marker(markerOptions)
    marker.addListener('click', (): void => {
      const infoWindow = new google.maps.InfoWindow(infoWindowOptions)
      infoWindow.open(this.googleMap, marker)
    })
  }
}
