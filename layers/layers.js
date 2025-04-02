var wms_layers = [];

var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
    'title': 'Positron [no labels] (retina)',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
        url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
    })
});

var format_BengaluruAssemblyElectionData_1 = new ol.format.GeoJSON();
var features_BengaluruAssemblyElectionData_1 = format_BengaluruAssemblyElectionData_1.readFeatures(json_BengaluruAssemblyElectionData_1, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BengaluruAssemblyElectionData_1 = new ol.source.Vector({ attributions: ' ', });
jsonSource_BengaluruAssemblyElectionData_1.addFeatures(features_BengaluruAssemblyElectionData_1);

var selectedYear = '2023-Par-W'; // Default year
function styleFunction(feature) {
    var party = feature.get(selectedYear);
    var color = party === 'BJP' ? 'red' : (party === 'INC' ? 'blue' : 'gray');
    return new ol.style.Style({
        fill: new ol.style.Fill({ color: color, opacity: 0.7 }),
        stroke: new ol.style.Stroke({ color: 'black', width: 1 })
    });
}

var lyr_BengaluruAssemblyElectionData_1 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_BengaluruAssemblyElectionData_1,
    style: styleFunction,
    popuplayertitle: "Bengaluru Assembly Election Data",
    interactive: true,
    title: 'Bengaluru Assembly Election Data'
});

lyr_Positronnolabelsretina_0.setVisible(true);
lyr_BengaluruAssemblyElectionData_1.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0, lyr_BengaluruAssemblyElectionData_1];

document.body.insertAdjacentHTML('beforeend', `
    <label for="yearSelect">Select Year:</label>
    <select id="yearSelect">
        <option value="2008-Par-W">2008</option>
        <option value="2013-Par-W">2013</option>
        <option value="2018-Par-W">2018</option>
        <option value="2023-Par-W" selected>2023</option>
    </select>
`);

document.getElementById('yearSelect').addEventListener('change', function() {
    selectedYear = this.value;
    lyr_BengaluruAssemblyElectionData_1.setStyle(styleFunction);
});
