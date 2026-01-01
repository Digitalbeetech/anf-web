gdjs.GameIntroCode = {};
gdjs.GameIntroCode.localVariables = [];
gdjs.GameIntroCode.idToCallbackMap = new Map();
gdjs.GameIntroCode.GDGame_9595LogoObjects1= [];
gdjs.GameIntroCode.GDGame_9595LogoObjects2= [];
gdjs.GameIntroCode.GDGame_9595LogoObjects3= [];
gdjs.GameIntroCode.GDGame_9595LogoObjects4= [];
gdjs.GameIntroCode.GDFadeW_9595ExitObjects1= [];
gdjs.GameIntroCode.GDFadeW_9595ExitObjects2= [];
gdjs.GameIntroCode.GDFadeW_9595ExitObjects3= [];
gdjs.GameIntroCode.GDFadeW_9595ExitObjects4= [];
gdjs.GameIntroCode.GDFadeWObjects1= [];
gdjs.GameIntroCode.GDFadeWObjects2= [];
gdjs.GameIntroCode.GDFadeWObjects3= [];
gdjs.GameIntroCode.GDFadeWObjects4= [];
gdjs.GameIntroCode.GDBtn_9595LeftObjects1= [];
gdjs.GameIntroCode.GDBtn_9595LeftObjects2= [];
gdjs.GameIntroCode.GDBtn_9595LeftObjects3= [];
gdjs.GameIntroCode.GDBtn_9595LeftObjects4= [];
gdjs.GameIntroCode.GDBtn_9595RightObjects1= [];
gdjs.GameIntroCode.GDBtn_9595RightObjects2= [];
gdjs.GameIntroCode.GDBtn_9595RightObjects3= [];
gdjs.GameIntroCode.GDBtn_9595RightObjects4= [];
gdjs.GameIntroCode.GDBtn_9595JumpObjects1= [];
gdjs.GameIntroCode.GDBtn_9595JumpObjects2= [];
gdjs.GameIntroCode.GDBtn_9595JumpObjects3= [];
gdjs.GameIntroCode.GDBtn_9595JumpObjects4= [];


gdjs.GameIntroCode.asyncCallback19712436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameIntroCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Game_Logo"), gdjs.GameIntroCode.GDGame_9595LogoObjects2);
{for(var i = 0, len = gdjs.GameIntroCode.GDGame_9595LogoObjects2.length ;i < len;++i) {
    gdjs.GameIntroCode.GDGame_9595LogoObjects2[i].getBehavior("Opacity").setOpacity(gdjs.GameIntroCode.GDGame_9595LogoObjects2[i].getBehavior("Opacity").getOpacity() + (5));
}
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 6600, 720, "", 0);
}
{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.func(runtimeScene, "", 0, "Overlay", 0, true, true, true, true, null);
}
gdjs.GameIntroCode.localVariables.length = 0;
}
gdjs.GameIntroCode.idToCallbackMap.set(19712436, gdjs.GameIntroCode.asyncCallback19712436);
gdjs.GameIntroCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameIntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameIntroCode.asyncCallback19712436(runtimeScene, asyncObjectsList)), 19712436, asyncObjectsList);
}
}

}


};gdjs.GameIntroCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeW_Exit"), gdjs.GameIntroCode.GDFadeW_9595ExitObjects3);
{for(var i = 0, len = gdjs.GameIntroCode.GDFadeW_9595ExitObjects3.length ;i < len;++i) {
    gdjs.GameIntroCode.GDFadeW_9595ExitObjects3[i].getBehavior("Opacity").setOpacity(gdjs.GameIntroCode.GDFadeW_9595ExitObjects3[i].getBehavior("Opacity").getOpacity() + (5));
}
}
}

}


};gdjs.GameIntroCode.asyncCallback19715868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameIntroCode.localVariables);

{ //Subevents
gdjs.GameIntroCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameIntroCode.localVariables.length = 0;
}
gdjs.GameIntroCode.idToCallbackMap.set(19715868, gdjs.GameIntroCode.asyncCallback19715868);
gdjs.GameIntroCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameIntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.GameIntroCode.asyncCallback19715868(runtimeScene, asyncObjectsList)), 19715868, asyncObjectsList);
}
}

}


};gdjs.GameIntroCode.asyncCallback19716980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameIntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
gdjs.GameIntroCode.localVariables.length = 0;
}
gdjs.GameIntroCode.idToCallbackMap.set(19716980, gdjs.GameIntroCode.asyncCallback19716980);
gdjs.GameIntroCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameIntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameIntroCode.asyncCallback19716980(runtimeScene, asyncObjectsList)), 19716980, asyncObjectsList);
}
}

}


};gdjs.GameIntroCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeW_Exit"), gdjs.GameIntroCode.GDFadeW_9595ExitObjects2);
gdjs.copyArray(runtimeScene.getObjects("Game_Logo"), gdjs.GameIntroCode.GDGame_9595LogoObjects2);
{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}
{for(var i = 0, len = gdjs.GameIntroCode.GDGame_9595LogoObjects2.length ;i < len;++i) {
    gdjs.GameIntroCode.GDGame_9595LogoObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameIntroCode.GDFadeW_9595ExitObjects2.length ;i < len;++i) {
    gdjs.GameIntroCode.GDFadeW_9595ExitObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Game_Logo"), gdjs.GameIntroCode.GDGame_9595LogoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameIntroCode.GDGame_9595LogoObjects2.length;i<l;++i) {
    if ( gdjs.GameIntroCode.GDGame_9595LogoObjects2[i].getBehavior("Opacity").getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.GameIntroCode.GDGame_9595LogoObjects2[k] = gdjs.GameIntroCode.GDGame_9595LogoObjects2[i];
        ++k;
    }
}
gdjs.GameIntroCode.GDGame_9595LogoObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameIntroCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FadeW_Exit"), gdjs.GameIntroCode.GDFadeW_9595ExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameIntroCode.GDFadeW_9595ExitObjects1.length;i<l;++i) {
    if ( gdjs.GameIntroCode.GDFadeW_9595ExitObjects1[i].getBehavior("Opacity").getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.GameIntroCode.GDFadeW_9595ExitObjects1[k] = gdjs.GameIntroCode.GDFadeW_9595ExitObjects1[i];
        ++k;
    }
}
gdjs.GameIntroCode.GDFadeW_9595ExitObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameIntroCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.GameIntroCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeW"), gdjs.GameIntroCode.GDFadeWObjects1);
{for(var i = 0, len = gdjs.GameIntroCode.GDFadeWObjects1.length ;i < len;++i) {
    gdjs.GameIntroCode.GDFadeWObjects1[i].getBehavior("Opacity").setOpacity(gdjs.GameIntroCode.GDFadeWObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}

{ //Subevents
gdjs.GameIntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameIntroCode.eventsList4(runtimeScene);
}


};

gdjs.GameIntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameIntroCode.GDGame_9595LogoObjects1.length = 0;
gdjs.GameIntroCode.GDGame_9595LogoObjects2.length = 0;
gdjs.GameIntroCode.GDGame_9595LogoObjects3.length = 0;
gdjs.GameIntroCode.GDGame_9595LogoObjects4.length = 0;
gdjs.GameIntroCode.GDFadeW_9595ExitObjects1.length = 0;
gdjs.GameIntroCode.GDFadeW_9595ExitObjects2.length = 0;
gdjs.GameIntroCode.GDFadeW_9595ExitObjects3.length = 0;
gdjs.GameIntroCode.GDFadeW_9595ExitObjects4.length = 0;
gdjs.GameIntroCode.GDFadeWObjects1.length = 0;
gdjs.GameIntroCode.GDFadeWObjects2.length = 0;
gdjs.GameIntroCode.GDFadeWObjects3.length = 0;
gdjs.GameIntroCode.GDFadeWObjects4.length = 0;
gdjs.GameIntroCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.GameIntroCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.GameIntroCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.GameIntroCode.GDBtn_9595LeftObjects4.length = 0;
gdjs.GameIntroCode.GDBtn_9595RightObjects1.length = 0;
gdjs.GameIntroCode.GDBtn_9595RightObjects2.length = 0;
gdjs.GameIntroCode.GDBtn_9595RightObjects3.length = 0;
gdjs.GameIntroCode.GDBtn_9595RightObjects4.length = 0;
gdjs.GameIntroCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.GameIntroCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.GameIntroCode.GDBtn_9595JumpObjects3.length = 0;
gdjs.GameIntroCode.GDBtn_9595JumpObjects4.length = 0;

gdjs.GameIntroCode.eventsList5(runtimeScene);
gdjs.GameIntroCode.GDGame_9595LogoObjects1.length = 0;
gdjs.GameIntroCode.GDGame_9595LogoObjects2.length = 0;
gdjs.GameIntroCode.GDGame_9595LogoObjects3.length = 0;
gdjs.GameIntroCode.GDGame_9595LogoObjects4.length = 0;
gdjs.GameIntroCode.GDFadeW_9595ExitObjects1.length = 0;
gdjs.GameIntroCode.GDFadeW_9595ExitObjects2.length = 0;
gdjs.GameIntroCode.GDFadeW_9595ExitObjects3.length = 0;
gdjs.GameIntroCode.GDFadeW_9595ExitObjects4.length = 0;
gdjs.GameIntroCode.GDFadeWObjects1.length = 0;
gdjs.GameIntroCode.GDFadeWObjects2.length = 0;
gdjs.GameIntroCode.GDFadeWObjects3.length = 0;
gdjs.GameIntroCode.GDFadeWObjects4.length = 0;
gdjs.GameIntroCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.GameIntroCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.GameIntroCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.GameIntroCode.GDBtn_9595LeftObjects4.length = 0;
gdjs.GameIntroCode.GDBtn_9595RightObjects1.length = 0;
gdjs.GameIntroCode.GDBtn_9595RightObjects2.length = 0;
gdjs.GameIntroCode.GDBtn_9595RightObjects3.length = 0;
gdjs.GameIntroCode.GDBtn_9595RightObjects4.length = 0;
gdjs.GameIntroCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.GameIntroCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.GameIntroCode.GDBtn_9595JumpObjects3.length = 0;
gdjs.GameIntroCode.GDBtn_9595JumpObjects4.length = 0;


return;

}

gdjs['GameIntroCode'] = gdjs.GameIntroCode;
