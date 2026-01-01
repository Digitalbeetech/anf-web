gdjs.GameIntroCode = {};
gdjs.GameIntroCode.localVariables = [];
gdjs.GameIntroCode.idToCallbackMap = new Map();
gdjs.GameIntroCode.GDGameBGObjects1= [];
gdjs.GameIntroCode.GDGameBGObjects2= [];
gdjs.GameIntroCode.GDGameBGObjects3= [];
gdjs.GameIntroCode.GDGameLogoObjects1= [];
gdjs.GameIntroCode.GDGameLogoObjects2= [];
gdjs.GameIntroCode.GDGameLogoObjects3= [];


gdjs.GameIntroCode.asyncCallback27077332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameIntroCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("GameLogo"), gdjs.GameIntroCode.GDGameLogoObjects3);

{for(var i = 0, len = gdjs.GameIntroCode.GDGameLogoObjects3.length ;i < len;++i) {
    gdjs.GameIntroCode.GDGameLogoObjects3[i].getBehavior("Tween").addObjectOpacityTween2("Intro", 0, "easeInOutCubic", 0.2, false);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelSelect", false);
}
gdjs.GameIntroCode.localVariables.length = 0;
}
gdjs.GameIntroCode.idToCallbackMap.set(27077332, gdjs.GameIntroCode.asyncCallback27077332);
gdjs.GameIntroCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameIntroCode.localVariables);
for (const obj of gdjs.GameIntroCode.GDGameLogoObjects2) asyncObjectsList.addObject("GameLogo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.GameIntroCode.asyncCallback27077332(runtimeScene, asyncObjectsList)), 27077332, asyncObjectsList);
}
}

}


};gdjs.GameIntroCode.asyncCallback27076964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameIntroCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("GameLogo"), gdjs.GameIntroCode.GDGameLogoObjects2);

{for(var i = 0, len = gdjs.GameIntroCode.GDGameLogoObjects2.length ;i < len;++i) {
    gdjs.GameIntroCode.GDGameLogoObjects2[i].getBehavior("Tween").addObjectOpacityTween2("Intro", 255, "easeInOutCubic", 0.2, false);
}
}

{ //Subevents
gdjs.GameIntroCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameIntroCode.localVariables.length = 0;
}
gdjs.GameIntroCode.idToCallbackMap.set(27076964, gdjs.GameIntroCode.asyncCallback27076964);
gdjs.GameIntroCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameIntroCode.localVariables);
for (const obj of gdjs.GameIntroCode.GDGameLogoObjects1) asyncObjectsList.addObject("GameLogo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.GameIntroCode.asyncCallback27076964(runtimeScene, asyncObjectsList)), 27076964, asyncObjectsList);
}
}

}


};gdjs.GameIntroCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GameLogo"), gdjs.GameIntroCode.GDGameLogoObjects1);
{for(var i = 0, len = gdjs.GameIntroCode.GDGameLogoObjects1.length ;i < len;++i) {
    gdjs.GameIntroCode.GDGameLogoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs.GameIntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "adaptWidth");
}
{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "adaptHeight");
}
{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GameIntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameIntroCode.GDGameBGObjects1.length = 0;
gdjs.GameIntroCode.GDGameBGObjects2.length = 0;
gdjs.GameIntroCode.GDGameBGObjects3.length = 0;
gdjs.GameIntroCode.GDGameLogoObjects1.length = 0;
gdjs.GameIntroCode.GDGameLogoObjects2.length = 0;
gdjs.GameIntroCode.GDGameLogoObjects3.length = 0;

gdjs.GameIntroCode.eventsList2(runtimeScene);
gdjs.GameIntroCode.GDGameBGObjects1.length = 0;
gdjs.GameIntroCode.GDGameBGObjects2.length = 0;
gdjs.GameIntroCode.GDGameBGObjects3.length = 0;
gdjs.GameIntroCode.GDGameLogoObjects1.length = 0;
gdjs.GameIntroCode.GDGameLogoObjects2.length = 0;
gdjs.GameIntroCode.GDGameLogoObjects3.length = 0;


return;

}

gdjs['GameIntroCode'] = gdjs.GameIntroCode;
