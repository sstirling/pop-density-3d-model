var fs = require('fs');
var shp2stl = require('shp2stl');
var file = 'popden2017.shp';
shp2stl.shp2stl(file, 
    {
        width: 1000, //in STL arbitrary units, but typically 3D printers use mm
        height: 1000,
        extraBaseHeight: 0,
        extrudeBy: "POPDEN2012",
        simplification: .8,
        binary: true,
        cutoutHoles: false,
        verbose: true,
        extrusionMode: 'straight'
    },
    function(err, stl) {
        fs.writeFileSync('popdenrutgers1.stl',  stl);
    }
);