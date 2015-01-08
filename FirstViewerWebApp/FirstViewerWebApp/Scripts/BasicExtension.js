﻿'use strict';

//declare your namespaces
AutodeskNamespace('MyCommpany.Extensions');


MyCommpany.Extensions.BasicExtension = function (viewer) {

    Autodesk.Viewing.Extension.call(this, viewer);

}

MyCommpany.Extensions.BasicExtension.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
MyCommpany.Extensions.BasicExtension.prototype.constructor = MyCommpany.Extensions.BasicExtension;

//extension load
MyCommpany.Extensions.BasicExtension.prototype.load = function () {

    console.log('MyCommpany.Extensions.BasicExtension is loaded');

    var oViewer = this.viewer;
    console.dir(oViewer);
    

    oViewer.addEventListener('selection', function (event) {
        var dbIdArray = event.dbIdArray;

        for (var i = 0; i < dbIdArray.length; i++) {

            var dbId = dbIdArray[i];

            oViewer.getProperties(dbId, function (result) {
                if (result.properties) {

                    for (var i = 0; i < result.properties.length; i++) {

                        var prop = result.properties[i];

                        console.log(prop.displayName + ' : ' + prop.displayValue);

                    }
                }
            });
        }

        //dbId – This is a unique id for the element in the model. 
        //There is a one-to-one correspondence between a node and a dbId.

        //fragIds – fragIds are used by the Viewer's internal implementation 
        //to reference the meshes that are used to display the object. 
        //Each node may contain zero or more meshes.

        //get model geometry
        var fragId = event.fragIdsArray[0];
        if (Array.isArray(fragId))
            fragId = fragId[0];

        var mesh = oViewer.impl.getRenderProxy(oViewer.model, fragId);
        console.log(mesh.geometry);
    });

}

//extension unload
MyCommpany.Extensions.BasicExtension.prototype.unload = function () {

}

/**
 * Register the extension with the extension manager.
 */
Autodesk.Viewing.theExtensionManager.registerExtension('BasicExtension', MyCommpany.Extensions.BasicExtension);