ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [56.010566, 92.852571],
        zoom: 14
    }, {
        searchControlProvider: 'yandex#search'
    }),
 
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
 
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        balloonContent: 'Красный Яр'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/img/svg/pins/pin-yar.svg',
        iconImageSize: [50, 62],
        iconImageOffset: [-5, -38]
    });

    var createPlacemark = function(markerId, coord_1, coord_2, markerImage, name, addr) {

        markerId = new ymaps.GeoObject({
            geometry: {
            type: "Point",
            coordinates: [+coord_1, +coord_2]
            },
            properties: {
            hintContent: name,
            balloonContent: addr
            }
        }, {
            iconLayout: 'default#image',
            iconImageHref: markerImage,
            iconImageSize: [46, 46],
            iconImageOffset: [-5, -38]
        });
        
        myMap.geoObjects.add(markerId);
    };


    createPlacemark('myPlacemark_1', '56.013877', '92.858350', 'assets/img/svg/pins/pin-yar.svg', 'Красный Яр', 'Красный Яр');
    createPlacemark('myPlacemark_2', '56.010013', '92.860972', 'assets/img/svg/pins/pin-yar.svg', 'Красный Яр', 'Красный Яр');
    createPlacemark('myPlacemark_3', '56.009587', '92.853197', 'assets/img/svg/pins/pin-yar.svg', 'Красный Яр', 'Красный Яр');

    createPlacemark('myPlacemark_3', '56.013641', '92.857769', 'assets/img/svg/pins/pin-baton.svg', 'Батон', 'Батон');
    createPlacemark('myPlacemark_3', '56.015437', '92.870876', 'assets/img/svg/pins/pin-baton.svg', 'Батон', 'Батон');
    createPlacemark('myPlacemark_3', '56.010673', '92.883076', 'assets/img/svg/pins/pin-baton.svg', 'Батон', 'Батон');
 
  });