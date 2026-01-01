
if (typeof gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings !== "undefined") {
  gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings = {};
gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.idToCallbackMap = new Map();


gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("CloneX");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.getArgument("SourceLayer"), eventsFunctionContext.getArgument("SourceCamera")), eventsFunctionContext.getArgument("DestinationLayer"), eventsFunctionContext.getArgument("DestinationCamera"));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("CloneY");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.getArgument("SourceLayer"), eventsFunctionContext.getArgument("SourceCamera")), eventsFunctionContext.getArgument("DestinationLayer"), eventsFunctionContext.getArgument("DestinationCamera"));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("CloneZoom");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.camera.getCameraZoom(runtimeScene, eventsFunctionContext.getArgument("SourceLayer"), eventsFunctionContext.getArgument("SourceCamera")), eventsFunctionContext.getArgument("DestinationLayer"), eventsFunctionContext.getArgument("DestinationCamera"));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("CloneAngle");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.camera.getCameraRotation(runtimeScene, eventsFunctionContext.getArgument("SourceLayer"), eventsFunctionContext.getArgument("SourceCamera")), eventsFunctionContext.getArgument("DestinationLayer"), eventsFunctionContext.getArgument("DestinationCamera"));
}
}

}


};

gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.func = function(runtimeScene, SourceLayer, SourceCamera, DestinationLayer, DestinationCamera, CloneX, CloneY, CloneZoom, CloneAngle, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CopyCameraSettings"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CopyCameraSettings"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "SourceLayer") return SourceLayer;
if (argName === "SourceCamera") return SourceCamera;
if (argName === "DestinationLayer") return DestinationLayer;
if (argName === "DestinationCamera") return DestinationCamera;
if (argName === "CloneX") return CloneX;
if (argName === "CloneY") return CloneY;
if (argName === "CloneZoom") return CloneZoom;
if (argName === "CloneAngle") return CloneAngle;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.registeredGdjsCallbacks = [];