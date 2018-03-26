var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_pabianice = new ol.format.GeoJSON();
var features_pabianice = format_pabianice.readFeatures(geojson_pabianice, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_pabianice = new ol.source.Vector();
jsonSource_pabianice.addFeatures(features_pabianice);var lyr_pabianice = new ol.layer.Vector({
                source:jsonSource_pabianice, 
                style: style_pabianice,
                title: "pabianice"
            });var format_koscioly = new ol.format.GeoJSON();
var features_koscioly = format_koscioly.readFeatures(geojson_koscioly, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_koscioly = new ol.source.Vector();
jsonSource_koscioly.addFeatures(features_koscioly);var lyr_koscioly = new ol.layer.Vector({
                source:jsonSource_koscioly, 
                style: style_koscioly,
                title: "koscioly"
            });

lyr_pabianice.setVisible(true);lyr_koscioly.setVisible(true);
var layersList = [baseLayer,lyr_pabianice,lyr_koscioly];
lyr_pabianice.set('fieldAliases', {'id': 'id', });
lyr_koscioly.set('fieldAliases', {'id': 'id', 'nazwa': 'nazwa', 'zdjecie': 'zdjecie', });
lyr_pabianice.set('fieldImages', {'id': 'TextEdit', });
lyr_koscioly.set('fieldImages', {'id': 'TextEdit', 'nazwa': 'TextEdit', 'zdjecie': 'TextEdit', });
lyr_pabianice.set('fieldLabels', {'id': 'no label', });
lyr_koscioly.set('fieldLabels', {'id': 'no label', 'nazwa': 'inline label', 'zdjecie': 'no label', });
lyr_koscioly.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});