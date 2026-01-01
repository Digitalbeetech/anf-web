gdjs.SidrIntroCode = {};
gdjs.SidrIntroCode.localVariables = [];
gdjs.SidrIntroCode.idToCallbackMap = new Map();
gdjs.SidrIntroCode.GDBG_9595WhiteObjects1= [];
gdjs.SidrIntroCode.GDBG_9595WhiteObjects2= [];
gdjs.SidrIntroCode.GDBG_9595WhiteObjects3= [];
gdjs.SidrIntroCode.GDIntroSidrObjects1= [];
gdjs.SidrIntroCode.GDIntroSidrObjects2= [];
gdjs.SidrIntroCode.GDIntroSidrObjects3= [];
gdjs.SidrIntroCode.GDPlayerControllerObjects1= [];
gdjs.SidrIntroCode.GDPlayerControllerObjects2= [];
gdjs.SidrIntroCode.GDPlayerControllerObjects3= [];
gdjs.SidrIntroCode.GDGroundMaskObjects1= [];
gdjs.SidrIntroCode.GDGroundMaskObjects2= [];
gdjs.SidrIntroCode.GDGroundMaskObjects3= [];
gdjs.SidrIntroCode.GDBGObjects1= [];
gdjs.SidrIntroCode.GDBGObjects2= [];
gdjs.SidrIntroCode.GDBGObjects3= [];
gdjs.SidrIntroCode.GDRoomGenObjects1= [];
gdjs.SidrIntroCode.GDRoomGenObjects2= [];
gdjs.SidrIntroCode.GDRoomGenObjects3= [];
gdjs.SidrIntroCode.GDEnemyObjects1= [];
gdjs.SidrIntroCode.GDEnemyObjects2= [];
gdjs.SidrIntroCode.GDEnemyObjects3= [];
gdjs.SidrIntroCode.GDCoinObjects1= [];
gdjs.SidrIntroCode.GDCoinObjects2= [];
gdjs.SidrIntroCode.GDCoinObjects3= [];
gdjs.SidrIntroCode.GDCoinPickEffectObjects1= [];
gdjs.SidrIntroCode.GDCoinPickEffectObjects2= [];
gdjs.SidrIntroCode.GDCoinPickEffectObjects3= [];
gdjs.SidrIntroCode.GDFadeBGObjects1= [];
gdjs.SidrIntroCode.GDFadeBGObjects2= [];
gdjs.SidrIntroCode.GDFadeBGObjects3= [];
gdjs.SidrIntroCode.GDJumpButtonObjects1= [];
gdjs.SidrIntroCode.GDJumpButtonObjects2= [];
gdjs.SidrIntroCode.GDJumpButtonObjects3= [];
gdjs.SidrIntroCode.GDGround_9595ThruMaskObjects1= [];
gdjs.SidrIntroCode.GDGround_9595ThruMaskObjects2= [];
gdjs.SidrIntroCode.GDGround_9595ThruMaskObjects3= [];
gdjs.SidrIntroCode.GDFlagUIObjects1= [];
gdjs.SidrIntroCode.GDFlagUIObjects2= [];
gdjs.SidrIntroCode.GDFlagUIObjects3= [];
gdjs.SidrIntroCode.GDCoinUIObjects1= [];
gdjs.SidrIntroCode.GDCoinUIObjects2= [];
gdjs.SidrIntroCode.GDCoinUIObjects3= [];
gdjs.SidrIntroCode.GDPauseButtonObjects1= [];
gdjs.SidrIntroCode.GDPauseButtonObjects2= [];
gdjs.SidrIntroCode.GDPauseButtonObjects3= [];
gdjs.SidrIntroCode.GDCoinsCollectedObjects1= [];
gdjs.SidrIntroCode.GDCoinsCollectedObjects2= [];
gdjs.SidrIntroCode.GDCoinsCollectedObjects3= [];
gdjs.SidrIntroCode.GDDistanceMadeObjects1= [];
gdjs.SidrIntroCode.GDDistanceMadeObjects2= [];
gdjs.SidrIntroCode.GDDistanceMadeObjects3= [];
gdjs.SidrIntroCode.GDDeathAnimationObjects1= [];
gdjs.SidrIntroCode.GDDeathAnimationObjects2= [];
gdjs.SidrIntroCode.GDDeathAnimationObjects3= [];
gdjs.SidrIntroCode.GDChar_9595AbdullahObjects1= [];
gdjs.SidrIntroCode.GDChar_9595AbdullahObjects2= [];
gdjs.SidrIntroCode.GDChar_9595AbdullahObjects3= [];
gdjs.SidrIntroCode.GDChar_9595FatimaObjects1= [];
gdjs.SidrIntroCode.GDChar_9595FatimaObjects2= [];
gdjs.SidrIntroCode.GDChar_9595FatimaObjects3= [];


gdjs.SidrIntroCode.asyncCallback13339180 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SidrIntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameLogo", false);
}
gdjs.SidrIntroCode.localVariables.length = 0;
}
gdjs.SidrIntroCode.idToCallbackMap.set(13339180, gdjs.SidrIntroCode.asyncCallback13339180);
gdjs.SidrIntroCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.SidrIntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.SidrIntroCode.asyncCallback13339180(runtimeScene, asyncObjectsList)), 13339180, asyncObjectsList);
}
}

}


};gdjs.SidrIntroCode.asyncCallback13338636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SidrIntroCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("IntroSidr"), gdjs.SidrIntroCode.GDIntroSidrObjects2);
{for(var i = 0, len = gdjs.SidrIntroCode.GDIntroSidrObjects2.length ;i < len;++i) {
    gdjs.SidrIntroCode.GDIntroSidrObjects2[i].getBehavior("Opacity").setOpacity(gdjs.SidrIntroCode.GDIntroSidrObjects2[i].getBehavior("Opacity").getOpacity() + (5));
}
}

{ //Subevents
gdjs.SidrIntroCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.SidrIntroCode.localVariables.length = 0;
}
gdjs.SidrIntroCode.idToCallbackMap.set(13338636, gdjs.SidrIntroCode.asyncCallback13338636);
gdjs.SidrIntroCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SidrIntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.SidrIntroCode.asyncCallback13338636(runtimeScene, asyncObjectsList)), 13338636, asyncObjectsList);
}
}

}


};gdjs.SidrIntroCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG_White"), gdjs.SidrIntroCode.GDBG_9595WhiteObjects1);
gdjs.copyArray(runtimeScene.getObjects("IntroSidr"), gdjs.SidrIntroCode.GDIntroSidrObjects1);
{for(var i = 0, len = gdjs.SidrIntroCode.GDBG_9595WhiteObjects1.length ;i < len;++i) {
    gdjs.SidrIntroCode.GDBG_9595WhiteObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.SidrIntroCode.GDIntroSidrObjects1.length ;i < len;++i) {
    gdjs.SidrIntroCode.GDIntroSidrObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.evtTools.storage.readNumberFromJSONFile("CoinSave", "CoinSave", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BG_White"), gdjs.SidrIntroCode.GDBG_9595WhiteObjects1);
{for(var i = 0, len = gdjs.SidrIntroCode.GDBG_9595WhiteObjects1.length ;i < len;++i) {
    gdjs.SidrIntroCode.GDBG_9595WhiteObjects1[i].getBehavior("Opacity").setOpacity(gdjs.SidrIntroCode.GDBG_9595WhiteObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}

{ //Subevents
gdjs.SidrIntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.SidrIntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SidrIntroCode.GDBG_9595WhiteObjects1.length = 0;
gdjs.SidrIntroCode.GDBG_9595WhiteObjects2.length = 0;
gdjs.SidrIntroCode.GDBG_9595WhiteObjects3.length = 0;
gdjs.SidrIntroCode.GDIntroSidrObjects1.length = 0;
gdjs.SidrIntroCode.GDIntroSidrObjects2.length = 0;
gdjs.SidrIntroCode.GDIntroSidrObjects3.length = 0;
gdjs.SidrIntroCode.GDPlayerControllerObjects1.length = 0;
gdjs.SidrIntroCode.GDPlayerControllerObjects2.length = 0;
gdjs.SidrIntroCode.GDPlayerControllerObjects3.length = 0;
gdjs.SidrIntroCode.GDGroundMaskObjects1.length = 0;
gdjs.SidrIntroCode.GDGroundMaskObjects2.length = 0;
gdjs.SidrIntroCode.GDGroundMaskObjects3.length = 0;
gdjs.SidrIntroCode.GDBGObjects1.length = 0;
gdjs.SidrIntroCode.GDBGObjects2.length = 0;
gdjs.SidrIntroCode.GDBGObjects3.length = 0;
gdjs.SidrIntroCode.GDRoomGenObjects1.length = 0;
gdjs.SidrIntroCode.GDRoomGenObjects2.length = 0;
gdjs.SidrIntroCode.GDRoomGenObjects3.length = 0;
gdjs.SidrIntroCode.GDEnemyObjects1.length = 0;
gdjs.SidrIntroCode.GDEnemyObjects2.length = 0;
gdjs.SidrIntroCode.GDEnemyObjects3.length = 0;
gdjs.SidrIntroCode.GDCoinObjects1.length = 0;
gdjs.SidrIntroCode.GDCoinObjects2.length = 0;
gdjs.SidrIntroCode.GDCoinObjects3.length = 0;
gdjs.SidrIntroCode.GDCoinPickEffectObjects1.length = 0;
gdjs.SidrIntroCode.GDCoinPickEffectObjects2.length = 0;
gdjs.SidrIntroCode.GDCoinPickEffectObjects3.length = 0;
gdjs.SidrIntroCode.GDFadeBGObjects1.length = 0;
gdjs.SidrIntroCode.GDFadeBGObjects2.length = 0;
gdjs.SidrIntroCode.GDFadeBGObjects3.length = 0;
gdjs.SidrIntroCode.GDJumpButtonObjects1.length = 0;
gdjs.SidrIntroCode.GDJumpButtonObjects2.length = 0;
gdjs.SidrIntroCode.GDJumpButtonObjects3.length = 0;
gdjs.SidrIntroCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.SidrIntroCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.SidrIntroCode.GDGround_9595ThruMaskObjects3.length = 0;
gdjs.SidrIntroCode.GDFlagUIObjects1.length = 0;
gdjs.SidrIntroCode.GDFlagUIObjects2.length = 0;
gdjs.SidrIntroCode.GDFlagUIObjects3.length = 0;
gdjs.SidrIntroCode.GDCoinUIObjects1.length = 0;
gdjs.SidrIntroCode.GDCoinUIObjects2.length = 0;
gdjs.SidrIntroCode.GDCoinUIObjects3.length = 0;
gdjs.SidrIntroCode.GDPauseButtonObjects1.length = 0;
gdjs.SidrIntroCode.GDPauseButtonObjects2.length = 0;
gdjs.SidrIntroCode.GDPauseButtonObjects3.length = 0;
gdjs.SidrIntroCode.GDCoinsCollectedObjects1.length = 0;
gdjs.SidrIntroCode.GDCoinsCollectedObjects2.length = 0;
gdjs.SidrIntroCode.GDCoinsCollectedObjects3.length = 0;
gdjs.SidrIntroCode.GDDistanceMadeObjects1.length = 0;
gdjs.SidrIntroCode.GDDistanceMadeObjects2.length = 0;
gdjs.SidrIntroCode.GDDistanceMadeObjects3.length = 0;
gdjs.SidrIntroCode.GDDeathAnimationObjects1.length = 0;
gdjs.SidrIntroCode.GDDeathAnimationObjects2.length = 0;
gdjs.SidrIntroCode.GDDeathAnimationObjects3.length = 0;
gdjs.SidrIntroCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.SidrIntroCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.SidrIntroCode.GDChar_9595AbdullahObjects3.length = 0;
gdjs.SidrIntroCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.SidrIntroCode.GDChar_9595FatimaObjects2.length = 0;
gdjs.SidrIntroCode.GDChar_9595FatimaObjects3.length = 0;

gdjs.SidrIntroCode.eventsList2(runtimeScene);
gdjs.SidrIntroCode.GDBG_9595WhiteObjects1.length = 0;
gdjs.SidrIntroCode.GDBG_9595WhiteObjects2.length = 0;
gdjs.SidrIntroCode.GDBG_9595WhiteObjects3.length = 0;
gdjs.SidrIntroCode.GDIntroSidrObjects1.length = 0;
gdjs.SidrIntroCode.GDIntroSidrObjects2.length = 0;
gdjs.SidrIntroCode.GDIntroSidrObjects3.length = 0;
gdjs.SidrIntroCode.GDPlayerControllerObjects1.length = 0;
gdjs.SidrIntroCode.GDPlayerControllerObjects2.length = 0;
gdjs.SidrIntroCode.GDPlayerControllerObjects3.length = 0;
gdjs.SidrIntroCode.GDGroundMaskObjects1.length = 0;
gdjs.SidrIntroCode.GDGroundMaskObjects2.length = 0;
gdjs.SidrIntroCode.GDGroundMaskObjects3.length = 0;
gdjs.SidrIntroCode.GDBGObjects1.length = 0;
gdjs.SidrIntroCode.GDBGObjects2.length = 0;
gdjs.SidrIntroCode.GDBGObjects3.length = 0;
gdjs.SidrIntroCode.GDRoomGenObjects1.length = 0;
gdjs.SidrIntroCode.GDRoomGenObjects2.length = 0;
gdjs.SidrIntroCode.GDRoomGenObjects3.length = 0;
gdjs.SidrIntroCode.GDEnemyObjects1.length = 0;
gdjs.SidrIntroCode.GDEnemyObjects2.length = 0;
gdjs.SidrIntroCode.GDEnemyObjects3.length = 0;
gdjs.SidrIntroCode.GDCoinObjects1.length = 0;
gdjs.SidrIntroCode.GDCoinObjects2.length = 0;
gdjs.SidrIntroCode.GDCoinObjects3.length = 0;
gdjs.SidrIntroCode.GDCoinPickEffectObjects1.length = 0;
gdjs.SidrIntroCode.GDCoinPickEffectObjects2.length = 0;
gdjs.SidrIntroCode.GDCoinPickEffectObjects3.length = 0;
gdjs.SidrIntroCode.GDFadeBGObjects1.length = 0;
gdjs.SidrIntroCode.GDFadeBGObjects2.length = 0;
gdjs.SidrIntroCode.GDFadeBGObjects3.length = 0;
gdjs.SidrIntroCode.GDJumpButtonObjects1.length = 0;
gdjs.SidrIntroCode.GDJumpButtonObjects2.length = 0;
gdjs.SidrIntroCode.GDJumpButtonObjects3.length = 0;
gdjs.SidrIntroCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.SidrIntroCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.SidrIntroCode.GDGround_9595ThruMaskObjects3.length = 0;
gdjs.SidrIntroCode.GDFlagUIObjects1.length = 0;
gdjs.SidrIntroCode.GDFlagUIObjects2.length = 0;
gdjs.SidrIntroCode.GDFlagUIObjects3.length = 0;
gdjs.SidrIntroCode.GDCoinUIObjects1.length = 0;
gdjs.SidrIntroCode.GDCoinUIObjects2.length = 0;
gdjs.SidrIntroCode.GDCoinUIObjects3.length = 0;
gdjs.SidrIntroCode.GDPauseButtonObjects1.length = 0;
gdjs.SidrIntroCode.GDPauseButtonObjects2.length = 0;
gdjs.SidrIntroCode.GDPauseButtonObjects3.length = 0;
gdjs.SidrIntroCode.GDCoinsCollectedObjects1.length = 0;
gdjs.SidrIntroCode.GDCoinsCollectedObjects2.length = 0;
gdjs.SidrIntroCode.GDCoinsCollectedObjects3.length = 0;
gdjs.SidrIntroCode.GDDistanceMadeObjects1.length = 0;
gdjs.SidrIntroCode.GDDistanceMadeObjects2.length = 0;
gdjs.SidrIntroCode.GDDistanceMadeObjects3.length = 0;
gdjs.SidrIntroCode.GDDeathAnimationObjects1.length = 0;
gdjs.SidrIntroCode.GDDeathAnimationObjects2.length = 0;
gdjs.SidrIntroCode.GDDeathAnimationObjects3.length = 0;
gdjs.SidrIntroCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.SidrIntroCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.SidrIntroCode.GDChar_9595AbdullahObjects3.length = 0;
gdjs.SidrIntroCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.SidrIntroCode.GDChar_9595FatimaObjects2.length = 0;
gdjs.SidrIntroCode.GDChar_9595FatimaObjects3.length = 0;


return;

}

gdjs['SidrIntroCode'] = gdjs.SidrIntroCode;
