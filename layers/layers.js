ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32644").setExtent([706392.798838, 2166096.938418, 958913.714313, 2298903.066356]);
var wms_layers = [];


        var lyr_Roadmap_0 = new ol.layer.Tile({
            'title': 'Roadmap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}'
            })
        });
var lyr_FF_VULNERABILITY_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "FF_VULNERABILITY",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FF_VULNERABILITY_1.png",
    attributions: ' ',
                                projection: 'EPSG:32644',
                                alwaysInRange: true,
                                imageExtent: [761242.799200, 2167282.081900, 875032.799200, 2291872.081900]
                            })
                        });
var format_KHANDAMAL_TEHSILS_2 = new ol.format.GeoJSON();
var features_KHANDAMAL_TEHSILS_2 = format_KHANDAMAL_TEHSILS_2.readFeatures(json_KHANDAMAL_TEHSILS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32644'});
var jsonSource_KHANDAMAL_TEHSILS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHANDAMAL_TEHSILS_2.addFeatures(features_KHANDAMAL_TEHSILS_2);
var lyr_KHANDAMAL_TEHSILS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KHANDAMAL_TEHSILS_2, 
                style: style_KHANDAMAL_TEHSILS_2,
                interactive: true,
                title: '<img src="styles/legend/KHANDAMAL_TEHSILS_2.png" /> KHANDAMAL_TEHSILS'
            });
var format_KHANDAMAL_3 = new ol.format.GeoJSON();
var features_KHANDAMAL_3 = format_KHANDAMAL_3.readFeatures(json_KHANDAMAL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32644'});
var jsonSource_KHANDAMAL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHANDAMAL_3.addFeatures(features_KHANDAMAL_3);
var lyr_KHANDAMAL_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KHANDAMAL_3, 
                style: style_KHANDAMAL_3,
                interactive: true,
                title: '<img src="styles/legend/KHANDAMAL_3.png" /> KHANDAMAL'
            });

lyr_Roadmap_0.setVisible(true);lyr_FF_VULNERABILITY_1.setVisible(true);lyr_KHANDAMAL_TEHSILS_2.setVisible(true);lyr_KHANDAMAL_3.setVisible(true);
var layersList = [lyr_Roadmap_0,lyr_FF_VULNERABILITY_1,lyr_KHANDAMAL_TEHSILS_2,lyr_KHANDAMAL_3];
lyr_KHANDAMAL_TEHSILS_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'admin_leve': 'admin_leve', 'name': 'name', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'boundary': 'boundary', 'type': 'type', 'name_ja': 'name_ja', 'name_ar': 'name_ar', 'alt_name_a': 'alt_name_a', 'name_ur': 'name_ur', 'name_or': 'name_or', });
lyr_KHANDAMAL_3.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'ST_NM': 'ST_NM', 'ST_CEN_CD': 'ST_CEN_CD', 'DT_CEN_CD': 'DT_CEN_CD', 'censuscode': 'censuscode', });
lyr_KHANDAMAL_TEHSILS_2.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'TextEdit', 'osm_type': 'Hidden', 'admin_leve': 'Hidden', 'name': 'TextEdit', 'wikipedia': 'Hidden', 'wikidata': 'Hidden', 'boundary': 'Hidden', 'type': 'Hidden', 'name_ja': 'Hidden', 'name_ar': 'Hidden', 'alt_name_a': 'Hidden', 'name_ur': 'Hidden', 'name_or': 'Hidden', });
lyr_KHANDAMAL_3.set('fieldImages', {'DISTRICT': 'TextEdit', 'ST_NM': 'TextEdit', 'ST_CEN_CD': 'Hidden', 'DT_CEN_CD': 'Hidden', 'censuscode': 'Hidden', });
lyr_KHANDAMAL_TEHSILS_2.set('fieldLabels', {'osm_id': 'inline label', 'name': 'inline label', });
lyr_KHANDAMAL_3.set('fieldLabels', {'DISTRICT': 'inline label', 'ST_NM': 'no label', });
lyr_KHANDAMAL_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});