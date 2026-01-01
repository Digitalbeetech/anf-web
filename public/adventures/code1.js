gdjs.SidrIntroCode = {};
gdjs.SidrIntroCode.localVariables = [];
gdjs.SidrIntroCode.idToCallbackMap = new Map();
gdjs.SidrIntroCode.GDSidr_9595LogoObjects1= [];
gdjs.SidrIntroCode.GDSidr_9595LogoObjects2= [];
gdjs.SidrIntroCode.GDSidr_9595LogoObjects3= [];
gdjs.SidrIntroCode.GDSidr_9595LogoObjects4= [];
gdjs.SidrIntroCode.GDFadeW_9595ExitObjects1= [];
gdjs.SidrIntroCode.GDFadeW_9595ExitObjects2= [];
gdjs.SidrIntroCode.GDFadeW_9595ExitObjects3= [];
gdjs.SidrIntroCode.GDFadeW_9595ExitObjects4= [];
gdjs.SidrIntroCode.GDFadeWObjects1= [];
gdjs.SidrIntroCode.GDFadeWObjects2= [];
gdjs.SidrIntroCode.GDFadeWObjects3= [];
gdjs.SidrIntroCode.GDFadeWObjects4= [];
gdjs.SidrIntroCode.GDBtn_9595LeftObjects1= [];
gdjs.SidrIntroCode.GDBtn_9595LeftObjects2= [];
gdjs.SidrIntroCode.GDBtn_9595LeftObjects3= [];
gdjs.SidrIntroCode.GDBtn_9595LeftObjects4= [];
gdjs.SidrIntroCode.GDBtn_9595RightObjects1= [];
gdjs.SidrIntroCode.GDBtn_9595RightObjects2= [];
gdjs.SidrIntroCode.GDBtn_9595RightObjects3= [];
gdjs.SidrIntroCode.GDBtn_9595RightObjects4= [];
gdjs.SidrIntroCode.GDBtn_9595JumpObjects1= [];
gdjs.SidrIntroCode.GDBtn_9595JumpObjects2= [];
gdjs.SidrIntroCode.GDBtn_9595JumpObjects3= [];
gdjs.SidrIntroCode.GDBtn_9595JumpObjects4= [];


gdjs.SidrIntroCode.asyncCallback19691556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SidrIntroCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Sidr_Logo"), gdjs.SidrIntroCode.GDSidr_9595LogoObjects2);
{for(var i = 0, len = gdjs.SidrIntroCode.GDSidr_9595LogoObjects2.length ;i < len;++i) {
    gdjs.SidrIntroCode.GDSidr_9595LogoObjects2[i].getBehavior("Opacity").setOpacity(gdjs.SidrIntroCode.GDSidr_9595LogoObjects2[i].getBehavior("Opacity").getOpacity() + (5));
}
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 6600, 720, "", 0);
}
{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.func(runtimeScene, "", 0, "Overlay", 0, true, true, true, true, null);
}
gdjs.SidrIntroCode.localVariables.length = 0;
}
gdjs.SidrIntroCode.idToCallbackMap.set(19691556, gdjs.SidrIntroCode.asyncCallback19691556);
gdjs.SidrIntroCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SidrIntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.SidrIntroCode.asyncCallback19691556(runtimeScene, asyncObjectsList)), 19691556, asyncObjectsList);
}
}

}


};gdjs.SidrIntroCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeW_Exit"), gdjs.SidrIntroCode.GDFadeW_9595ExitObjects3);
{for(var i = 0, len = gdjs.SidrIntroCode.GDFadeW_9595ExitObjects3.length ;i < len;++i) {
    gdjs.SidrIntroCode.GDFadeW_9595ExitObjects3[i].getBehavior("Opacity").setOpacity(gdjs.SidrIntroCode.GDFadeW_9595ExitObjects3[i].getBehavior("Opacity").getOpacity() + (5));
}
}
}

}


};gdjs.SidrIntroCode.asyncCallback19695076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SidrIntroCode.localVariables);

{ //Subevents
gdjs.SidrIntroCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.SidrIntroCode.localVariables.length = 0;
}
gdjs.SidrIntroCode.idToCallbackMap.set(19695076, gdjs.SidrIntroCode.asyncCallback19695076);
gdjs.SidrIntroCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SidrIntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.SidrIntroCode.asyncCallback19695076(runtimeScene, asyncObjectsList)), 19695076, asyncObjectsList);
}
}

}


};gdjs.SidrIntroCode.asyncCallback19696188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SidrIntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameIntro", false);
}
gdjs.SidrIntroCode.localVariables.length = 0;
}
gdjs.SidrIntroCode.idToCallbackMap.set(19696188, gdjs.SidrIntroCode.asyncCallback19696188);
gdjs.SidrIntroCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SidrIntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.SidrIntroCode.asyncCallback19696188(runtimeScene, asyncObjectsList)), 19696188, asyncObjectsList);
}
}

}


};gdjs.SidrIntroCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeW_Exit"), gdjs.SidrIntroCode.GDFadeW_9595ExitObjects2);
gdjs.copyArray(runtimeScene.getObjects("Sidr_Logo"), gdjs.SidrIntroCode.GDSidr_9595LogoObjects2);
{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}
{for(var i = 0, len = gdjs.SidrIntroCode.GDSidr_9595LogoObjects2.length ;i < len;++i) {
    gdjs.SidrIntroCode.GDSidr_9595LogoObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.SidrIntroCode.GDFadeW_9595ExitObjects2.length ;i < len;++i) {
    gdjs.SidrIntroCode.GDFadeW_9595ExitObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sidr_Logo"), gdjs.SidrIntroCode.GDSidr_9595LogoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SidrIntroCode.GDSidr_9595LogoObjects2.length;i<l;++i) {
    if ( gdjs.SidrIntroCode.GDSidr_9595LogoObjects2[i].getBehavior("Opacity").getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.SidrIntroCode.GDSidr_9595LogoObjects2[k] = gdjs.SidrIntroCode.GDSidr_9595LogoObjects2[i];
        ++k;
    }
}
gdjs.SidrIntroCode.GDSidr_9595LogoObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.SidrIntroCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FadeW_Exit"), gdjs.SidrIntroCode.GDFadeW_9595ExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SidrIntroCode.GDFadeW_9595ExitObjects1.length;i<l;++i) {
    if ( gdjs.SidrIntroCode.GDFadeW_9595ExitObjects1[i].getBehavior("Opacity").getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.SidrIntroCode.GDFadeW_9595ExitObjects1[k] = gdjs.SidrIntroCode.GDFadeW_9595ExitObjects1[i];
        ++k;
    }
}
gdjs.SidrIntroCode.GDFadeW_9595ExitObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.SidrIntroCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.SidrIntroCode.eventsList5 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("BlurAmount", variable);
}
gdjs.SidrIntroCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeW"), gdjs.SidrIntroCode.GDFadeWObjects1);
{for(var i = 0, len = gdjs.SidrIntroCode.GDFadeWObjects1.length ;i < len;++i) {
    gdjs.SidrIntroCode.GDFadeWObjects1[i].getBehavior("Opacity").setOpacity(gdjs.SidrIntroCode.GDFadeWObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}

{ //Subevents
gdjs.SidrIntroCode.eventsList0(runtimeScene);} //End of subevents
}
gdjs.SidrIntroCode.localVariables.pop();

}


{


gdjs.SidrIntroCode.eventsList4(runtimeScene);
}


};

gdjs.SidrIntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SidrIntroCode.GDSidr_9595LogoObjects1.length = 0;
gdjs.SidrIntroCode.GDSidr_9595LogoObjects2.length = 0;
gdjs.SidrIntroCode.GDSidr_9595LogoObjects3.length = 0;
gdjs.SidrIntroCode.GDSidr_9595LogoObjects4.length = 0;
gdjs.SidrIntroCode.GDFadeW_9595ExitObjects1.length = 0;
gdjs.SidrIntroCode.GDFadeW_9595ExitObjects2.length = 0;
gdjs.SidrIntroCode.GDFadeW_9595ExitObjects3.length = 0;
gdjs.SidrIntroCode.GDFadeW_9595ExitObjects4.length = 0;
gdjs.SidrIntroCode.GDFadeWObjects1.length = 0;
gdjs.SidrIntroCode.GDFadeWObjects2.length = 0;
gdjs.SidrIntroCode.GDFadeWObjects3.length = 0;
gdjs.SidrIntroCode.GDFadeWObjects4.length = 0;
gdjs.SidrIntroCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.SidrIntroCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.SidrIntroCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.SidrIntroCode.GDBtn_9595LeftObjects4.length = 0;
gdjs.SidrIntroCode.GDBtn_9595RightObjects1.length = 0;
gdjs.SidrIntroCode.GDBtn_9595RightObjects2.length = 0;
gdjs.SidrIntroCode.GDBtn_9595RightObjects3.length = 0;
gdjs.SidrIntroCode.GDBtn_9595RightObjects4.length = 0;
gdjs.SidrIntroCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.SidrIntroCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.SidrIntroCode.GDBtn_9595JumpObjects3.length = 0;
gdjs.SidrIntroCode.GDBtn_9595JumpObjects4.length = 0;

gdjs.SidrIntroCode.eventsList5(runtimeScene);
gdjs.SidrIntroCode.GDSidr_9595LogoObjects1.length = 0;
gdjs.SidrIntroCode.GDSidr_9595LogoObjects2.length = 0;
gdjs.SidrIntroCode.GDSidr_9595LogoObjects3.length = 0;
gdjs.SidrIntroCode.GDSidr_9595LogoObjects4.length = 0;
gdjs.SidrIntroCode.GDFadeW_9595ExitObjects1.length = 0;
gdjs.SidrIntroCode.GDFadeW_9595ExitObjects2.length = 0;
gdjs.SidrIntroCode.GDFadeW_9595ExitObjects3.length = 0;
gdjs.SidrIntroCode.GDFadeW_9595ExitObjects4.length = 0;
gdjs.SidrIntroCode.GDFadeWObjects1.length = 0;
gdjs.SidrIntroCode.GDFadeWObjects2.length = 0;
gdjs.SidrIntroCode.GDFadeWObjects3.length = 0;
gdjs.SidrIntroCode.GDFadeWObjects4.length = 0;
gdjs.SidrIntroCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.SidrIntroCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.SidrIntroCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.SidrIntroCode.GDBtn_9595LeftObjects4.length = 0;
gdjs.SidrIntroCode.GDBtn_9595RightObjects1.length = 0;
gdjs.SidrIntroCode.GDBtn_9595RightObjects2.length = 0;
gdjs.SidrIntroCode.GDBtn_9595RightObjects3.length = 0;
gdjs.SidrIntroCode.GDBtn_9595RightObjects4.length = 0;
gdjs.SidrIntroCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.SidrIntroCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.SidrIntroCode.GDBtn_9595JumpObjects3.length = 0;
gdjs.SidrIntroCode.GDBtn_9595JumpObjects4.length = 0;


return;

}

gdjs['SidrIntroCode'] = gdjs.SidrIntroCode;
