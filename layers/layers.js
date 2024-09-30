var wms_layers = [];


        var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_BengaluruAssemblyElectionData_1 = new ol.format.GeoJSON();
var features_BengaluruAssemblyElectionData_1 = format_BengaluruAssemblyElectionData_1.readFeatures(json_BengaluruAssemblyElectionData_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BengaluruAssemblyElectionData_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BengaluruAssemblyElectionData_1.addFeatures(features_BengaluruAssemblyElectionData_1);
var lyr_BengaluruAssemblyElectionData_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BengaluruAssemblyElectionData_1, 
                style: style_BengaluruAssemblyElectionData_1,
                popuplayertitle: "Bengaluru Assembly Election Data",
                interactive: true,
    title: 'Bengaluru Assembly Election Data<br />\
    <img src="styles/legend/BengaluruAssemblyElectionData_1_0.png" /> BJP<br />\
    <img src="styles/legend/BengaluruAssemblyElectionData_1_1.png" /> INC<br />'
        });

lyr_Positronnolabelsretina_0.setVisible(true);lyr_BengaluruAssemblyElectionData_1.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0,lyr_BengaluruAssemblyElectionData_1];
lyr_BengaluruAssemblyElectionData_1.set('fieldAliases', {'AC_CODE': 'AC_CODE', 'AC_NAME': 'AC_NAME', '2008-Par-W': '2008-Par-W', '2013-Par-W': '2013-Par-W', '2018-Par-W': '2018-Par-W', '2023-Par-W': '2023-Par-W', 'Reelected': 'Reelected', });
lyr_BengaluruAssemblyElectionData_1.set('fieldImages', {'AC_CODE': 'TextEdit', 'AC_NAME': 'TextEdit', '2008-Par-W': 'TextEdit', '2013-Par-W': 'TextEdit', '2018-Par-W': 'TextEdit', '2023-Par-W': 'TextEdit', 'Reelected': 'TextEdit', });
lyr_BengaluruAssemblyElectionData_1.set('fieldLabels', {'AC_CODE': 'inline label - always visible', 'AC_NAME': 'inline label - always visible', '2008-Par-W': 'inline label - always visible', '2013-Par-W': 'inline label - always visible', '2018-Par-W': 'inline label - always visible', '2023-Par-W': 'inline label - always visible', 'Reelected': 'inline label - always visible', });
lyr_BengaluruAssemblyElectionData_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});