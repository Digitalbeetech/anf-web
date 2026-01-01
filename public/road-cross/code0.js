gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.idToCallbackMap = new Map();
gdjs.IntroCode.GDGameBGObjects1= [];
gdjs.IntroCode.GDGameBGObjects2= [];
gdjs.IntroCode.GDGameBGObjects3= [];
gdjs.IntroCode.GDSidrLogoObjects1= [];
gdjs.IntroCode.GDSidrLogoObjects2= [];
gdjs.IntroCode.GDSidrLogoObjects3= [];


gdjs.IntroCode.asyncCallback27054492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SidrLogo"), gdjs.IntroCode.GDSidrLogoObjects3);

{for(var i = 0, len = gdjs.IntroCode.GDSidrLogoObjects3.length ;i < len;++i) {
    gdjs.IntroCode.GDSidrLogoObjects3[i].getBehavior("Tween").addObjectOpacityTween2("Intro", 0, "easeInOutCubic", 0.2, false);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameIntro", false);
}
gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.idToCallbackMap.set(27054492, gdjs.IntroCode.asyncCallback27054492);
gdjs.IntroCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
for (const obj of gdjs.IntroCode.GDSidrLogoObjects2) asyncObjectsList.addObject("SidrLogo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.IntroCode.asyncCallback27054492(runtimeScene, asyncObjectsList)), 27054492, asyncObjectsList);
}
}

}


};gdjs.IntroCode.asyncCallback27054124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SidrLogo"), gdjs.IntroCode.GDSidrLogoObjects2);

{for(var i = 0, len = gdjs.IntroCode.GDSidrLogoObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDSidrLogoObjects2[i].getBehavior("Tween").addObjectOpacityTween2("Intro", 255, "easeInOutCubic", 0.2, false);
}
}

{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.idToCallbackMap.set(27054124, gdjs.IntroCode.asyncCallback27054124);
gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
for (const obj of gdjs.IntroCode.GDSidrLogoObjects1) asyncObjectsList.addObject("SidrLogo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.IntroCode.asyncCallback27054124(runtimeScene, asyncObjectsList)), 27054124, asyncObjectsList);
}
}

}


};gdjs.IntroCode.eventsList2 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("SidrLogo"), gdjs.IntroCode.GDSidrLogoObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDSidrLogoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSidrLogoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene);} //End of subevents
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

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDGameBGObjects1.length = 0;
gdjs.IntroCode.GDGameBGObjects2.length = 0;
gdjs.IntroCode.GDGameBGObjects3.length = 0;
gdjs.IntroCode.GDSidrLogoObjects1.length = 0;
gdjs.IntroCode.GDSidrLogoObjects2.length = 0;
gdjs.IntroCode.GDSidrLogoObjects3.length = 0;

gdjs.IntroCode.eventsList2(runtimeScene);
gdjs.IntroCode.GDGameBGObjects1.length = 0;
gdjs.IntroCode.GDGameBGObjects2.length = 0;
gdjs.IntroCode.GDGameBGObjects3.length = 0;
gdjs.IntroCode.GDSidrLogoObjects1.length = 0;
gdjs.IntroCode.GDSidrLogoObjects2.length = 0;
gdjs.IntroCode.GDSidrLogoObjects3.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
