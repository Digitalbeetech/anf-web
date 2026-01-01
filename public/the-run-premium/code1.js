gdjs.GameLogoCode = {};
gdjs.GameLogoCode.localVariables = [];
gdjs.GameLogoCode.idToCallbackMap = new Map();
gdjs.GameLogoCode.GDBG_9595WhiteObjects1= [];
gdjs.GameLogoCode.GDBG_9595WhiteObjects2= [];
gdjs.GameLogoCode.GDBG_9595WhiteObjects3= [];
gdjs.GameLogoCode.GDIntroGameObjects1= [];
gdjs.GameLogoCode.GDIntroGameObjects2= [];
gdjs.GameLogoCode.GDIntroGameObjects3= [];
gdjs.GameLogoCode.GDPlayerControllerObjects1= [];
gdjs.GameLogoCode.GDPlayerControllerObjects2= [];
gdjs.GameLogoCode.GDPlayerControllerObjects3= [];
gdjs.GameLogoCode.GDGroundMaskObjects1= [];
gdjs.GameLogoCode.GDGroundMaskObjects2= [];
gdjs.GameLogoCode.GDGroundMaskObjects3= [];
gdjs.GameLogoCode.GDBGObjects1= [];
gdjs.GameLogoCode.GDBGObjects2= [];
gdjs.GameLogoCode.GDBGObjects3= [];
gdjs.GameLogoCode.GDRoomGenObjects1= [];
gdjs.GameLogoCode.GDRoomGenObjects2= [];
gdjs.GameLogoCode.GDRoomGenObjects3= [];
gdjs.GameLogoCode.GDEnemyObjects1= [];
gdjs.GameLogoCode.GDEnemyObjects2= [];
gdjs.GameLogoCode.GDEnemyObjects3= [];
gdjs.GameLogoCode.GDCoinObjects1= [];
gdjs.GameLogoCode.GDCoinObjects2= [];
gdjs.GameLogoCode.GDCoinObjects3= [];
gdjs.GameLogoCode.GDCoinPickEffectObjects1= [];
gdjs.GameLogoCode.GDCoinPickEffectObjects2= [];
gdjs.GameLogoCode.GDCoinPickEffectObjects3= [];
gdjs.GameLogoCode.GDFadeBGObjects1= [];
gdjs.GameLogoCode.GDFadeBGObjects2= [];
gdjs.GameLogoCode.GDFadeBGObjects3= [];
gdjs.GameLogoCode.GDJumpButtonObjects1= [];
gdjs.GameLogoCode.GDJumpButtonObjects2= [];
gdjs.GameLogoCode.GDJumpButtonObjects3= [];
gdjs.GameLogoCode.GDGround_9595ThruMaskObjects1= [];
gdjs.GameLogoCode.GDGround_9595ThruMaskObjects2= [];
gdjs.GameLogoCode.GDGround_9595ThruMaskObjects3= [];
gdjs.GameLogoCode.GDFlagUIObjects1= [];
gdjs.GameLogoCode.GDFlagUIObjects2= [];
gdjs.GameLogoCode.GDFlagUIObjects3= [];
gdjs.GameLogoCode.GDCoinUIObjects1= [];
gdjs.GameLogoCode.GDCoinUIObjects2= [];
gdjs.GameLogoCode.GDCoinUIObjects3= [];
gdjs.GameLogoCode.GDPauseButtonObjects1= [];
gdjs.GameLogoCode.GDPauseButtonObjects2= [];
gdjs.GameLogoCode.GDPauseButtonObjects3= [];
gdjs.GameLogoCode.GDCoinsCollectedObjects1= [];
gdjs.GameLogoCode.GDCoinsCollectedObjects2= [];
gdjs.GameLogoCode.GDCoinsCollectedObjects3= [];
gdjs.GameLogoCode.GDDistanceMadeObjects1= [];
gdjs.GameLogoCode.GDDistanceMadeObjects2= [];
gdjs.GameLogoCode.GDDistanceMadeObjects3= [];
gdjs.GameLogoCode.GDDeathAnimationObjects1= [];
gdjs.GameLogoCode.GDDeathAnimationObjects2= [];
gdjs.GameLogoCode.GDDeathAnimationObjects3= [];
gdjs.GameLogoCode.GDChar_9595AbdullahObjects1= [];
gdjs.GameLogoCode.GDChar_9595AbdullahObjects2= [];
gdjs.GameLogoCode.GDChar_9595AbdullahObjects3= [];
gdjs.GameLogoCode.GDChar_9595FatimaObjects1= [];
gdjs.GameLogoCode.GDChar_9595FatimaObjects2= [];
gdjs.GameLogoCode.GDChar_9595FatimaObjects3= [];


gdjs.GameLogoCode.asyncCallback42500028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameLogoCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
gdjs.GameLogoCode.localVariables.length = 0;
}
gdjs.GameLogoCode.idToCallbackMap.set(42500028, gdjs.GameLogoCode.asyncCallback42500028);
gdjs.GameLogoCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameLogoCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.GameLogoCode.asyncCallback42500028(runtimeScene, asyncObjectsList)), 42500028, asyncObjectsList);
}
}

}


};gdjs.GameLogoCode.asyncCallback42499484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameLogoCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("IntroGame"), gdjs.GameLogoCode.GDIntroGameObjects2);
{for(var i = 0, len = gdjs.GameLogoCode.GDIntroGameObjects2.length ;i < len;++i) {
    gdjs.GameLogoCode.GDIntroGameObjects2[i].getBehavior("Opacity").setOpacity(gdjs.GameLogoCode.GDIntroGameObjects2[i].getBehavior("Opacity").getOpacity() + (5));
}
}

{ //Subevents
gdjs.GameLogoCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameLogoCode.localVariables.length = 0;
}
gdjs.GameLogoCode.idToCallbackMap.set(42499484, gdjs.GameLogoCode.asyncCallback42499484);
gdjs.GameLogoCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameLogoCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameLogoCode.asyncCallback42499484(runtimeScene, asyncObjectsList)), 42499484, asyncObjectsList);
}
}

}


};gdjs.GameLogoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG_White"), gdjs.GameLogoCode.GDBG_9595WhiteObjects1);
gdjs.copyArray(runtimeScene.getObjects("IntroGame"), gdjs.GameLogoCode.GDIntroGameObjects1);
{for(var i = 0, len = gdjs.GameLogoCode.GDBG_9595WhiteObjects1.length ;i < len;++i) {
    gdjs.GameLogoCode.GDBG_9595WhiteObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameLogoCode.GDIntroGameObjects1.length ;i < len;++i) {
    gdjs.GameLogoCode.GDIntroGameObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BG_White"), gdjs.GameLogoCode.GDBG_9595WhiteObjects1);
{for(var i = 0, len = gdjs.GameLogoCode.GDBG_9595WhiteObjects1.length ;i < len;++i) {
    gdjs.GameLogoCode.GDBG_9595WhiteObjects1[i].getBehavior("Opacity").setOpacity(gdjs.GameLogoCode.GDBG_9595WhiteObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}

{ //Subevents
gdjs.GameLogoCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.GameLogoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameLogoCode.GDBG_9595WhiteObjects1.length = 0;
gdjs.GameLogoCode.GDBG_9595WhiteObjects2.length = 0;
gdjs.GameLogoCode.GDBG_9595WhiteObjects3.length = 0;
gdjs.GameLogoCode.GDIntroGameObjects1.length = 0;
gdjs.GameLogoCode.GDIntroGameObjects2.length = 0;
gdjs.GameLogoCode.GDIntroGameObjects3.length = 0;
gdjs.GameLogoCode.GDPlayerControllerObjects1.length = 0;
gdjs.GameLogoCode.GDPlayerControllerObjects2.length = 0;
gdjs.GameLogoCode.GDPlayerControllerObjects3.length = 0;
gdjs.GameLogoCode.GDGroundMaskObjects1.length = 0;
gdjs.GameLogoCode.GDGroundMaskObjects2.length = 0;
gdjs.GameLogoCode.GDGroundMaskObjects3.length = 0;
gdjs.GameLogoCode.GDBGObjects1.length = 0;
gdjs.GameLogoCode.GDBGObjects2.length = 0;
gdjs.GameLogoCode.GDBGObjects3.length = 0;
gdjs.GameLogoCode.GDRoomGenObjects1.length = 0;
gdjs.GameLogoCode.GDRoomGenObjects2.length = 0;
gdjs.GameLogoCode.GDRoomGenObjects3.length = 0;
gdjs.GameLogoCode.GDEnemyObjects1.length = 0;
gdjs.GameLogoCode.GDEnemyObjects2.length = 0;
gdjs.GameLogoCode.GDEnemyObjects3.length = 0;
gdjs.GameLogoCode.GDCoinObjects1.length = 0;
gdjs.GameLogoCode.GDCoinObjects2.length = 0;
gdjs.GameLogoCode.GDCoinObjects3.length = 0;
gdjs.GameLogoCode.GDCoinPickEffectObjects1.length = 0;
gdjs.GameLogoCode.GDCoinPickEffectObjects2.length = 0;
gdjs.GameLogoCode.GDCoinPickEffectObjects3.length = 0;
gdjs.GameLogoCode.GDFadeBGObjects1.length = 0;
gdjs.GameLogoCode.GDFadeBGObjects2.length = 0;
gdjs.GameLogoCode.GDFadeBGObjects3.length = 0;
gdjs.GameLogoCode.GDJumpButtonObjects1.length = 0;
gdjs.GameLogoCode.GDJumpButtonObjects2.length = 0;
gdjs.GameLogoCode.GDJumpButtonObjects3.length = 0;
gdjs.GameLogoCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.GameLogoCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.GameLogoCode.GDGround_9595ThruMaskObjects3.length = 0;
gdjs.GameLogoCode.GDFlagUIObjects1.length = 0;
gdjs.GameLogoCode.GDFlagUIObjects2.length = 0;
gdjs.GameLogoCode.GDFlagUIObjects3.length = 0;
gdjs.GameLogoCode.GDCoinUIObjects1.length = 0;
gdjs.GameLogoCode.GDCoinUIObjects2.length = 0;
gdjs.GameLogoCode.GDCoinUIObjects3.length = 0;
gdjs.GameLogoCode.GDPauseButtonObjects1.length = 0;
gdjs.GameLogoCode.GDPauseButtonObjects2.length = 0;
gdjs.GameLogoCode.GDPauseButtonObjects3.length = 0;
gdjs.GameLogoCode.GDCoinsCollectedObjects1.length = 0;
gdjs.GameLogoCode.GDCoinsCollectedObjects2.length = 0;
gdjs.GameLogoCode.GDCoinsCollectedObjects3.length = 0;
gdjs.GameLogoCode.GDDistanceMadeObjects1.length = 0;
gdjs.GameLogoCode.GDDistanceMadeObjects2.length = 0;
gdjs.GameLogoCode.GDDistanceMadeObjects3.length = 0;
gdjs.GameLogoCode.GDDeathAnimationObjects1.length = 0;
gdjs.GameLogoCode.GDDeathAnimationObjects2.length = 0;
gdjs.GameLogoCode.GDDeathAnimationObjects3.length = 0;
gdjs.GameLogoCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.GameLogoCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.GameLogoCode.GDChar_9595AbdullahObjects3.length = 0;
gdjs.GameLogoCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.GameLogoCode.GDChar_9595FatimaObjects2.length = 0;
gdjs.GameLogoCode.GDChar_9595FatimaObjects3.length = 0;

gdjs.GameLogoCode.eventsList2(runtimeScene);
gdjs.GameLogoCode.GDBG_9595WhiteObjects1.length = 0;
gdjs.GameLogoCode.GDBG_9595WhiteObjects2.length = 0;
gdjs.GameLogoCode.GDBG_9595WhiteObjects3.length = 0;
gdjs.GameLogoCode.GDIntroGameObjects1.length = 0;
gdjs.GameLogoCode.GDIntroGameObjects2.length = 0;
gdjs.GameLogoCode.GDIntroGameObjects3.length = 0;
gdjs.GameLogoCode.GDPlayerControllerObjects1.length = 0;
gdjs.GameLogoCode.GDPlayerControllerObjects2.length = 0;
gdjs.GameLogoCode.GDPlayerControllerObjects3.length = 0;
gdjs.GameLogoCode.GDGroundMaskObjects1.length = 0;
gdjs.GameLogoCode.GDGroundMaskObjects2.length = 0;
gdjs.GameLogoCode.GDGroundMaskObjects3.length = 0;
gdjs.GameLogoCode.GDBGObjects1.length = 0;
gdjs.GameLogoCode.GDBGObjects2.length = 0;
gdjs.GameLogoCode.GDBGObjects3.length = 0;
gdjs.GameLogoCode.GDRoomGenObjects1.length = 0;
gdjs.GameLogoCode.GDRoomGenObjects2.length = 0;
gdjs.GameLogoCode.GDRoomGenObjects3.length = 0;
gdjs.GameLogoCode.GDEnemyObjects1.length = 0;
gdjs.GameLogoCode.GDEnemyObjects2.length = 0;
gdjs.GameLogoCode.GDEnemyObjects3.length = 0;
gdjs.GameLogoCode.GDCoinObjects1.length = 0;
gdjs.GameLogoCode.GDCoinObjects2.length = 0;
gdjs.GameLogoCode.GDCoinObjects3.length = 0;
gdjs.GameLogoCode.GDCoinPickEffectObjects1.length = 0;
gdjs.GameLogoCode.GDCoinPickEffectObjects2.length = 0;
gdjs.GameLogoCode.GDCoinPickEffectObjects3.length = 0;
gdjs.GameLogoCode.GDFadeBGObjects1.length = 0;
gdjs.GameLogoCode.GDFadeBGObjects2.length = 0;
gdjs.GameLogoCode.GDFadeBGObjects3.length = 0;
gdjs.GameLogoCode.GDJumpButtonObjects1.length = 0;
gdjs.GameLogoCode.GDJumpButtonObjects2.length = 0;
gdjs.GameLogoCode.GDJumpButtonObjects3.length = 0;
gdjs.GameLogoCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.GameLogoCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.GameLogoCode.GDGround_9595ThruMaskObjects3.length = 0;
gdjs.GameLogoCode.GDFlagUIObjects1.length = 0;
gdjs.GameLogoCode.GDFlagUIObjects2.length = 0;
gdjs.GameLogoCode.GDFlagUIObjects3.length = 0;
gdjs.GameLogoCode.GDCoinUIObjects1.length = 0;
gdjs.GameLogoCode.GDCoinUIObjects2.length = 0;
gdjs.GameLogoCode.GDCoinUIObjects3.length = 0;
gdjs.GameLogoCode.GDPauseButtonObjects1.length = 0;
gdjs.GameLogoCode.GDPauseButtonObjects2.length = 0;
gdjs.GameLogoCode.GDPauseButtonObjects3.length = 0;
gdjs.GameLogoCode.GDCoinsCollectedObjects1.length = 0;
gdjs.GameLogoCode.GDCoinsCollectedObjects2.length = 0;
gdjs.GameLogoCode.GDCoinsCollectedObjects3.length = 0;
gdjs.GameLogoCode.GDDistanceMadeObjects1.length = 0;
gdjs.GameLogoCode.GDDistanceMadeObjects2.length = 0;
gdjs.GameLogoCode.GDDistanceMadeObjects3.length = 0;
gdjs.GameLogoCode.GDDeathAnimationObjects1.length = 0;
gdjs.GameLogoCode.GDDeathAnimationObjects2.length = 0;
gdjs.GameLogoCode.GDDeathAnimationObjects3.length = 0;
gdjs.GameLogoCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.GameLogoCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.GameLogoCode.GDChar_9595AbdullahObjects3.length = 0;
gdjs.GameLogoCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.GameLogoCode.GDChar_9595FatimaObjects2.length = 0;
gdjs.GameLogoCode.GDChar_9595FatimaObjects3.length = 0;


return;

}

gdjs['GameLogoCode'] = gdjs.GameLogoCode;
