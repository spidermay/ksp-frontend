import { Injectable } from "@angular/core";

import { Config } from "src/app/config";
import { Utils } from "src/shared/classes/utils.class";
import { Service as ServiceAPI } from "src/shared/services/api.service";

@Injectable({ providedIn:"root" })
export class Service {
	static readonly style:any = [
		{
			elementType: "labels.icon",
			stylers: [{ visibility: "off" }],
		},
		{
			elementType: "geometry",
			stylers: [{ color: "#f5f5f5" }],
		},
		{
			elementType: "labels.text.fill",
			stylers: [{ color: "#295134" }],
		},
		{
			elementType: "labels.text.stroke",
			stylers: [{ color: "#f5f5f5" }],
		},
		{
			featureType: "administrative.land_parcel",
			elementType: "labels.text.fill",
			stylers: [{ color: "#bdbdbd" }],
		},
		{
			featureType: "poi",
			elementType: "geometry",
			stylers: [{ color: "#eeeeee" }],
		},
		{
			featureType: "poi",
			elementType: "labels.text.fill",
			stylers: [{ color: "#757575" }],
		},
		{
			featureType: "poi.park",
			elementType: "geometry",
			stylers: [{ color: "#e5e5e5" }],
		},
		{
			featureType: "poi.park",
			elementType: "labels.text.fill",
			stylers: [{ color: "#9e9e9e" }],
		},
		{
			featureType: "road",
			elementType: "geometry",
			stylers: [{ color: "#ffffff" }],
		},
		{
			featureType: "road.arterial",
			elementType: "labels.text.fill",
			stylers: [{ color: "#757575" }],
		},
		{
			featureType: "road.highway",
			elementType: "geometry",
			stylers: [{ color: "#dadada" }],
		},
		{
			featureType: "road.highway",
			elementType: "labels.text.fill",
			stylers: [{ color: "#616161" }],
		},
		{
			featureType: "road.local",
			elementType: "labels.text.fill",
			stylers: [{ color: "#9e9e9e" }],
		},
		{
			featureType: "transit.line",
			elementType: "geometry",
			stylers: [{ color: "#e5e5e5" }],
		},
		{
			featureType: "transit.station",
			elementType: "geometry",
			stylers: [{ color: "#eeeeee" }],
		},
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [{ color: "#c9c9c9" }],
		},
		{
			featureType: "water",
			elementType: "labels.text.fill",
			stylers: [{ color: "#9e9e9e" }],
		},
	];

	constructor(
		public Utils:Utils,
		public ServiceAPI:ServiceAPI,
	) {	}

	// getStyle(){
	// 	return this.style;
	// }

	// var user_city = results[0].address_components.filter(ac=>~ac.types.indexOf('locality'))[0].long_name
	// result[0].address_components.filter(address => address.types.includes('locality'))[0].long_name
	getCoordinates(address){ var url = "https://maps.googleapis.com/maps/api/geocode/json?key=" + Config.google_key + "&address=" + address; return this.ServiceAPI.HttpClient.get(url); }
	getAddress(coordinates){ var url = "https://maps.googleapis.com/maps/api/geocode/json?key=" + Config.google_key + "&latlng=" + coordinates.latitude + "," + coordinates.longitude; return this.ServiceAPI.HttpClient.get(url); }
}