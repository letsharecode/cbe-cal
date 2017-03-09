import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import React from 'react';

import './main.html';

Meteor.startup(function() {
  GoogleMaps.load();
});

Template.body.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      //cutomize maps from "http://www.evoluted.net/thinktank/web-design/custom-google-maps-style-tool"
      var styles = [
        {
          "featureType": "landscape",
          "stylers": [
            {
              "hue": "#FFB100"
            },
            {
              "saturation": 32.599999999999994
            },
            {
              "lightness": -12.600000000000009
            },
            {
              "gamma": 1
            }
          ]
        },
        {
          "featureType": "road.highway",
          "stylers": [
            {
              "hue": "#FF8900"
            },
            {
              "saturation": 0
            },
            {
              "lightness": -1.4210854715202004e-14
            },
            {
              "gamma": 1
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "stylers": [
            {
              "hue": "#FBFF00"
            },
            {
              "saturation": 0
            },
            {
              "lightness": 0
            },
            {
              "gamma": 1
            }
          ]
        },
        {
          "featureType": "road.local",
          "stylers": [
            {
              "hue": "#00FFFD"
            },
            {
              "saturation": 0
            },
            {
              "lightness": 0
            },
            {
              "gamma": 1
            }
          ]
        },
        {
          "featureType": "water",
          "stylers": [
            {
              "hue": "#0078FF"
            },
            {
              "saturation": 0
            },
            {
              "lightness": 0
            },
            {
              "gamma": 1
            }
          ]
        },
        {
          "featureType": "poi",
          "stylers": [
            {
              "hue": "#9FFF00"
            },
            {
              "saturation": 0
            },
            {
              "lightness": 0
            },
            {
              "gamma": 1
            }
          ]
        }
      ];
      return {
        center: new google.maps.LatLng(37.8044444, -122.2697222),
        zoom: 14,
        styles: styles
      };
    }
  }
});

Template.modal.events({
	
});