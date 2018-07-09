var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_topo_carriere_montpins_0 = new ol.format.GeoJSON();
var features_topo_carriere_montpins_0 = format_topo_carriere_montpins_0.readFeatures(json_topo_carriere_montpins_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_topo_carriere_montpins_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_topo_carriere_montpins_0.addFeatures(features_topo_carriere_montpins_0);var lyr_topo_carriere_montpins_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_topo_carriere_montpins_0, 
                style: style_topo_carriere_montpins_0,
                title: '<img src="styles/legend/topo_carriere_montpins_0.png" /> topo_carriere_montpins'
            });var format_topo_nareda_1 = new ol.format.GeoJSON();
var features_topo_nareda_1 = format_topo_nareda_1.readFeatures(json_topo_nareda_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_topo_nareda_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_topo_nareda_1.addFeatures(features_topo_nareda_1);var lyr_topo_nareda_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_topo_nareda_1, 
                style: style_topo_nareda_1,
                title: '<img src="styles/legend/topo_nareda_1.png" /> topo_nareda'
            });var lyr_Nareda122017_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Nareda122017",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Nareda122017_2.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [307020.345445, 5283525.461297, 309413.665143, 5284953.812047]
                            })
                        });var lyr_montpins122017_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "montpins122017",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/montpins122017_3.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [312003.161798, 5283562.903497, 313639.755331, 5285521.736462]
                            })
                        });var format_Volee_0218_4 = new ol.format.GeoJSON();
var features_Volee_0218_4 = format_Volee_0218_4.readFeatures(json_Volee_0218_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Volee_0218_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Volee_0218_4.addFeatures(features_Volee_0218_4);var lyr_Volee_0218_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Volee_0218_4, 
                style: style_Volee_0218_4,
                title: '<img src="styles/legend/Volee_0218_4.png" /> Volee_0218'
            });var format_Volee_0318_5 = new ol.format.GeoJSON();
var features_Volee_0318_5 = format_Volee_0318_5.readFeatures(json_Volee_0318_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Volee_0318_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Volee_0318_5.addFeatures(features_Volee_0318_5);var lyr_Volee_0318_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Volee_0318_5, 
                style: style_Volee_0318_5,
                title: '<img src="styles/legend/Volee_0318_5.png" /> Volee_0318'
            });var format_Volee_0418_6 = new ol.format.GeoJSON();
var features_Volee_0418_6 = format_Volee_0418_6.readFeatures(json_Volee_0418_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Volee_0418_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Volee_0418_6.addFeatures(features_Volee_0418_6);var lyr_Volee_0418_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Volee_0418_6, 
                style: style_Volee_0418_6,
                title: '<img src="styles/legend/Volee_0418_6.png" /> Volee_0418'
            });var format_Volee_0518_7 = new ol.format.GeoJSON();
var features_Volee_0518_7 = format_Volee_0518_7.readFeatures(json_Volee_0518_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Volee_0518_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Volee_0518_7.addFeatures(features_Volee_0518_7);var lyr_Volee_0518_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Volee_0518_7, 
                style: style_Volee_0518_7,
                title: '<img src="styles/legend/Volee_0518_7.png" /> Volee_0518'
            });var format_Volee_0618_8 = new ol.format.GeoJSON();
var features_Volee_0618_8 = format_Volee_0618_8.readFeatures(json_Volee_0618_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Volee_0618_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Volee_0618_8.addFeatures(features_Volee_0618_8);var lyr_Volee_0618_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Volee_0618_8, 
                style: style_Volee_0618_8,
                title: '<img src="styles/legend/Volee_0618_8.png" /> Volee_0618'
            });var format_BDD_Tirs_0618_9 = new ol.format.GeoJSON();
var features_BDD_Tirs_0618_9 = format_BDD_Tirs_0618_9.readFeatures(json_BDD_Tirs_0618_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BDD_Tirs_0618_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BDD_Tirs_0618_9.addFeatures(features_BDD_Tirs_0618_9);var lyr_BDD_Tirs_0618_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BDD_Tirs_0618_9, 
                style: style_BDD_Tirs_0618_9,
                title: '<img src="styles/legend/BDD_Tirs_0618_9.png" /> BDD_Tirs_0618'
            });var format_Volees_en_cours_10 = new ol.format.GeoJSON();
var features_Volees_en_cours_10 = format_Volees_en_cours_10.readFeatures(json_Volees_en_cours_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Volees_en_cours_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Volees_en_cours_10.addFeatures(features_Volees_en_cours_10);var lyr_Volees_en_cours_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Volees_en_cours_10, 
                style: style_Volees_en_cours_10,
                title: '<img src="styles/legend/Volees_en_cours_10.png" /> Volees_en_cours'
            });var format_BDD_Cutt_encours_11 = new ol.format.GeoJSON();
var features_BDD_Cutt_encours_11 = format_BDD_Cutt_encours_11.readFeatures(json_BDD_Cutt_encours_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BDD_Cutt_encours_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BDD_Cutt_encours_11.addFeatures(features_BDD_Cutt_encours_11);var lyr_BDD_Cutt_encours_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BDD_Cutt_encours_11, 
                style: style_BDD_Cutt_encours_11,
                title: '<img src="styles/legend/BDD_Cutt_encours_11.png" /> BDD_Cutt_encours'
            });

lyr_topo_carriere_montpins_0.setVisible(true);lyr_topo_nareda_1.setVisible(true);lyr_Nareda122017_2.setVisible(true);lyr_montpins122017_3.setVisible(true);lyr_Volee_0218_4.setVisible(true);lyr_Volee_0318_5.setVisible(true);lyr_Volee_0418_6.setVisible(true);lyr_Volee_0518_7.setVisible(true);lyr_Volee_0618_8.setVisible(true);lyr_BDD_Tirs_0618_9.setVisible(true);lyr_Volees_en_cours_10.setVisible(true);lyr_BDD_Cutt_encours_11.setVisible(true);
var layersList = [baseLayer,lyr_topo_carriere_montpins_0,lyr_topo_nareda_1,lyr_Nareda122017_2,lyr_montpins122017_3,lyr_Volee_0218_4,lyr_Volee_0318_5,lyr_Volee_0418_6,lyr_Volee_0518_7,lyr_Volee_0618_8,lyr_BDD_Tirs_0618_9,lyr_Volees_en_cours_10,lyr_BDD_Cutt_encours_11];
lyr_topo_carriere_montpins_0.set('fieldAliases', {'ELEVATION': 'ELEVATION', });
lyr_topo_nareda_1.set('fieldAliases', {'ELEVATION': 'ELEVATION', });
lyr_Volee_0218_4.set('fieldAliases', {'group': 'group', 'begin': 'begin', 'end': 'end', 'Ordre': 'Ordre', 'Nom_tir': 'Nom_tir', 'Qualitee': 'Qualitee', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Coord_comp': 'Coord_comp', 'Date_traca': 'Date_traca', 'Ton_Total': 'Ton_Total', 'Prof_tir': 'Prof_tir', 'Surface': 'Surface', 'Volume_cal': 'Volume_cal', });
lyr_Volee_0318_5.set('fieldAliases', {'group': 'group', 'begin': 'begin', 'end': 'end', 'Ordre': 'Ordre', 'Nom_tir': 'Nom_tir', 'Qualit?e': 'Qualit?e', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Coord_comp': 'Coord_comp', 'Ton_Total': 'Ton_Total', 'Prof_tir': 'Prof_tir', 'Surface': 'Surface', 'Volume': 'Volume', });
lyr_Volee_0418_6.set('fieldAliases', {'group': 'group', 'begin': 'begin', 'end': 'end', 'Ordre': 'Ordre', 'Nom_tir': 'Nom_tir', 'Qualitee': 'Qualitee', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Coord_comp': 'Coord_comp', 'Date_traca': 'Date_traca', 'Ton_Total': 'Ton_Total', 'Prof_tir': 'Prof_tir', 'Surface': 'Surface', 'Volume': 'Volume', 'Ton_calc': 'Ton_calc', });
lyr_Volee_0518_7.set('fieldAliases', {'group': 'group', 'begin': 'begin', 'end': 'end', 'Ordre': 'Ordre', 'Nom_tir': 'Nom_tir', 'Y(q)': 'Y(q)', 'IJ': 'IJ', 'Qualit?e': 'Qualit?e', 'Date_traca': 'Date_traca', 'TONTAL (=v': 'TONTAL (=v', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Coord_comp': 'Coord_comp', 'field_12': 'field_12', 'Prof_tir': 'Prof_tir', 'Surface': 'Surface', 'Volume': 'Volume', 'Ton_calc': 'Ton_calc', });
lyr_Volee_0618_8.set('fieldAliases', {'group': 'group', 'begin': 'begin', 'end': 'end', 'Ordre': 'Ordre', 'Nom_tir': 'Nom_tir', 'Y(q)': 'Y(q)', 'IJ': 'IJ', 'Qualitee': 'Qualitee', 'Date_traca': 'Date_traca', 'TONTAL (=v': 'TONTAL (=v', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Coord_comp': 'Coord_comp', 'Prof_tir': 'Prof_tir', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', });
lyr_BDD_Tirs_0618_9.set('fieldAliases', {'Nom_tir': 'Nom_tir', 'Date_tir': 'Date_tir', 'X': 'X', 'Y': 'Y', 'TONTAL (=volume x 2,5': 'TONTAL (=volume x 2,5', '%B3': '%B3', '%Blanc': '%Blanc', '%Jaune': '%Jaune', '%Gris': '%Gris', '%R�am': '%R�am', '%Inter': '%Inter', '%ClientS': '%ClientS', });
lyr_Volees_en_cours_10.set('fieldAliases', {'group': 'group', 'begin': 'begin', 'end': 'end', 'Ordre': 'Ordre', 'Nom_tir': 'Nom_tir', 'Y(q)': 'Y(q)', 'IJ': 'IJ', 'Qualitee': 'Qualitee', 'Date_traca': 'Date_traca', 'TONTAL (=v': 'TONTAL (=v', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Coord_comp': 'Coord_comp', 'Prof_tir': 'Prof_tir', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', });
lyr_BDD_Cutt_encours_11.set('fieldAliases', {'Nom_tir': 'Nom_tir', 'Num_vol�e': 'Num_vol�e', 'Num_trou': 'Num_trou', 'Y(q)': 'Y(q)', 'IJ': 'IJ', 'Qualite_mesure': 'Qualite_mesure', 'Prof_tir': 'Prof_tir', 'x': 'x', 'y': 'y', 'z': 'z', 'coord_brutes': 'coord_brutes', });
lyr_topo_carriere_montpins_0.set('fieldImages', {'ELEVATION': 'TextEdit', });
lyr_topo_nareda_1.set('fieldImages', {'ELEVATION': 'TextEdit', });
lyr_Volee_0218_4.set('fieldImages', {'group': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Ordre': 'TextEdit', 'Nom_tir': 'TextEdit', 'Qualitee': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'Coord_comp': 'TextEdit', 'Date_traca': 'TextEdit', 'Ton_Total': 'TextEdit', 'Prof_tir': 'TextEdit', 'Surface': 'TextEdit', 'Volume_cal': 'TextEdit', });
lyr_Volee_0318_5.set('fieldImages', {'group': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Ordre': 'TextEdit', 'Nom_tir': 'TextEdit', 'Qualit?e': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'Coord_comp': 'TextEdit', 'Ton_Total': 'TextEdit', 'Prof_tir': 'TextEdit', 'Surface': 'TextEdit', 'Volume': 'TextEdit', });
lyr_Volee_0418_6.set('fieldImages', {'group': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Ordre': 'TextEdit', 'Nom_tir': 'TextEdit', 'Qualitee': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'Coord_comp': 'TextEdit', 'Date_traca': 'TextEdit', 'Ton_Total': 'TextEdit', 'Prof_tir': 'TextEdit', 'Surface': 'TextEdit', 'Volume': 'TextEdit', 'Ton_calc': 'TextEdit', });
lyr_Volee_0518_7.set('fieldImages', {'group': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Ordre': 'TextEdit', 'Nom_tir': 'TextEdit', 'Y(q)': 'TextEdit', 'IJ': 'TextEdit', 'Qualit?e': 'TextEdit', 'Date_traca': 'TextEdit', 'TONTAL (=v': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'Coord_comp': 'TextEdit', 'field_12': 'TextEdit', 'Prof_tir': 'TextEdit', 'Surface': 'TextEdit', 'Volume': 'TextEdit', 'Ton_calc': 'TextEdit', });
lyr_Volee_0618_8.set('fieldImages', {'group': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Ordre': 'TextEdit', 'Nom_tir': 'TextEdit', 'Y(q)': 'TextEdit', 'IJ': 'TextEdit', 'Qualitee': 'TextEdit', 'Date_traca': 'TextEdit', 'TONTAL (=v': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'Coord_comp': 'TextEdit', 'Prof_tir': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', });
lyr_BDD_Tirs_0618_9.set('fieldImages', {'Nom_tir': 'TextEdit', 'Date_tir': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'TONTAL (=volume x 2,5': 'TextEdit', '%B3': 'TextEdit', '%Blanc': 'TextEdit', '%Jaune': 'TextEdit', '%Gris': 'TextEdit', '%R�am': 'TextEdit', '%Inter': 'TextEdit', '%ClientS': 'TextEdit', });
lyr_Volees_en_cours_10.set('fieldImages', {'group': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Ordre': 'TextEdit', 'Nom_tir': 'TextEdit', 'Y(q)': 'TextEdit', 'IJ': 'TextEdit', 'Qualitee': 'TextEdit', 'Date_traca': 'TextEdit', 'TONTAL (=v': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'Coord_comp': 'TextEdit', 'Prof_tir': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', });
lyr_BDD_Cutt_encours_11.set('fieldImages', {'Nom_tir': 'TextEdit', 'Num_vol�e': 'TextEdit', 'Num_trou': 'TextEdit', 'Y(q)': 'TextEdit', 'IJ': 'TextEdit', 'Qualite_mesure': 'TextEdit', 'Prof_tir': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'z': 'TextEdit', 'coord_brutes': 'TextEdit', });
lyr_topo_carriere_montpins_0.set('fieldLabels', {'ELEVATION': 'no label', });
lyr_topo_nareda_1.set('fieldLabels', {'ELEVATION': 'no label', });
lyr_Volee_0218_4.set('fieldLabels', {'group': 'no label', 'begin': 'no label', 'end': 'no label', 'Ordre': 'no label', 'Nom_tir': 'no label', 'Qualitee': 'no label', 'X': 'no label', 'Y': 'no label', 'Z': 'no label', 'Coord_comp': 'no label', 'Date_traca': 'no label', 'Ton_Total': 'no label', 'Prof_tir': 'no label', 'Surface': 'no label', 'Volume_cal': 'no label', });
lyr_Volee_0318_5.set('fieldLabels', {'group': 'no label', 'begin': 'no label', 'end': 'no label', 'Ordre': 'no label', 'Nom_tir': 'no label', 'Qualit?e': 'no label', 'X': 'no label', 'Y': 'no label', 'Z': 'no label', 'Coord_comp': 'no label', 'Ton_Total': 'no label', 'Prof_tir': 'no label', 'Surface': 'no label', 'Volume': 'no label', });
lyr_Volee_0418_6.set('fieldLabels', {'group': 'no label', 'begin': 'no label', 'end': 'no label', 'Ordre': 'no label', 'Nom_tir': 'no label', 'Qualitee': 'no label', 'X': 'no label', 'Y': 'no label', 'Z': 'no label', 'Coord_comp': 'no label', 'Date_traca': 'no label', 'Ton_Total': 'no label', 'Prof_tir': 'no label', 'Surface': 'no label', 'Volume': 'no label', 'Ton_calc': 'no label', });
lyr_Volee_0518_7.set('fieldLabels', {'group': 'no label', 'begin': 'no label', 'end': 'no label', 'Ordre': 'no label', 'Nom_tir': 'no label', 'Y(q)': 'no label', 'IJ': 'no label', 'Qualit?e': 'no label', 'Date_traca': 'no label', 'TONTAL (=v': 'no label', 'X': 'no label', 'Y': 'no label', 'Z': 'no label', 'Coord_comp': 'no label', 'field_12': 'no label', 'Prof_tir': 'no label', 'Surface': 'no label', 'Volume': 'no label', 'Ton_calc': 'no label', });
lyr_Volee_0618_8.set('fieldLabels', {'group': 'no label', 'begin': 'no label', 'end': 'no label', 'Ordre': 'no label', 'Nom_tir': 'no label', 'Y(q)': 'no label', 'IJ': 'no label', 'Qualitee': 'no label', 'Date_traca': 'no label', 'TONTAL (=v': 'no label', 'X': 'no label', 'Y': 'no label', 'Z': 'no label', 'Coord_comp': 'no label', 'Prof_tir': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', });
lyr_BDD_Tirs_0618_9.set('fieldLabels', {'Nom_tir': 'no label', 'Date_tir': 'no label', 'X': 'no label', 'Y': 'no label', 'TONTAL (=volume x 2,5': 'no label', '%B3': 'no label', '%Blanc': 'no label', '%Jaune': 'no label', '%Gris': 'no label', '%R�am': 'no label', '%Inter': 'no label', '%ClientS': 'no label', });
lyr_Volees_en_cours_10.set('fieldLabels', {'group': 'no label', 'begin': 'no label', 'end': 'no label', 'Ordre': 'no label', 'Nom_tir': 'no label', 'Y(q)': 'no label', 'IJ': 'no label', 'Qualitee': 'no label', 'Date_traca': 'no label', 'TONTAL (=v': 'no label', 'X': 'no label', 'Y': 'no label', 'Z': 'no label', 'Coord_comp': 'no label', 'Prof_tir': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', });
lyr_BDD_Cutt_encours_11.set('fieldLabels', {'Nom_tir': 'no label', 'Num_vol�e': 'no label', 'Num_trou': 'no label', 'Y(q)': 'no label', 'IJ': 'no label', 'Qualite_mesure': 'no label', 'Prof_tir': 'no label', 'x': 'no label', 'y': 'no label', 'z': 'no label', 'coord_brutes': 'no label', });
lyr_BDD_Cutt_encours_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});