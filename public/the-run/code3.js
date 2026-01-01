gdjs.CreditCode = {};
gdjs.CreditCode.localVariables = [];
gdjs.CreditCode.idToCallbackMap = new Map();
gdjs.CreditCode.GDBG_9595WhiteObjects1= [];
gdjs.CreditCode.GDBG_9595WhiteObjects2= [];
gdjs.CreditCode.GDInfoGameObjects1= [];
gdjs.CreditCode.GDInfoGameObjects2= [];
gdjs.CreditCode.GDHomeButtonObjects1= [];
gdjs.CreditCode.GDHomeButtonObjects2= [];
gdjs.CreditCode.GDInfoTitleObjects1= [];
gdjs.CreditCode.GDInfoTitleObjects2= [];
gdjs.CreditCode.GDPlayerControllerObjects1= [];
gdjs.CreditCode.GDPlayerControllerObjects2= [];
gdjs.CreditCode.GDGroundMaskObjects1= [];
gdjs.CreditCode.GDGroundMaskObjects2= [];
gdjs.CreditCode.GDBGObjects1= [];
gdjs.CreditCode.GDBGObjects2= [];
gdjs.CreditCode.GDRoomGenObjects1= [];
gdjs.CreditCode.GDRoomGenObjects2= [];
gdjs.CreditCode.GDEnemyObjects1= [];
gdjs.CreditCode.GDEnemyObjects2= [];
gdjs.CreditCode.GDCoinObjects1= [];
gdjs.CreditCode.GDCoinObjects2= [];
gdjs.CreditCode.GDCoinPickEffectObjects1= [];
gdjs.CreditCode.GDCoinPickEffectObjects2= [];
gdjs.CreditCode.GDFadeBGObjects1= [];
gdjs.CreditCode.GDFadeBGObjects2= [];
gdjs.CreditCode.GDJumpButtonObjects1= [];
gdjs.CreditCode.GDJumpButtonObjects2= [];
gdjs.CreditCode.GDGround_9595ThruMaskObjects1= [];
gdjs.CreditCode.GDGround_9595ThruMaskObjects2= [];
gdjs.CreditCode.GDFlagUIObjects1= [];
gdjs.CreditCode.GDFlagUIObjects2= [];
gdjs.CreditCode.GDCoinUIObjects1= [];
gdjs.CreditCode.GDCoinUIObjects2= [];
gdjs.CreditCode.GDPauseButtonObjects1= [];
gdjs.CreditCode.GDPauseButtonObjects2= [];
gdjs.CreditCode.GDCoinsCollectedObjects1= [];
gdjs.CreditCode.GDCoinsCollectedObjects2= [];
gdjs.CreditCode.GDDistanceMadeObjects1= [];
gdjs.CreditCode.GDDistanceMadeObjects2= [];
gdjs.CreditCode.GDDeathAnimationObjects1= [];
gdjs.CreditCode.GDDeathAnimationObjects2= [];
gdjs.CreditCode.GDChar_9595AbdullahObjects1= [];
gdjs.CreditCode.GDChar_9595AbdullahObjects2= [];
gdjs.CreditCode.GDChar_9595FatimaObjects1= [];
gdjs.CreditCode.GDChar_9595FatimaObjects2= [];


gdjs.CreditCode.asyncCallback13456228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CreditCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("InfoGame"), gdjs.CreditCode.GDInfoGameObjects2);
{for(var i = 0, len = gdjs.CreditCode.GDInfoGameObjects2.length ;i < len;++i) {
    gdjs.CreditCode.GDInfoGameObjects2[i].getBehavior("Opacity").setOpacity(gdjs.CreditCode.GDInfoGameObjects2[i].getBehavior("Opacity").getOpacity() + (5));
}
}
gdjs.CreditCode.localVariables.length = 0;
}
gdjs.CreditCode.idToCallbackMap.set(13456228, gdjs.CreditCode.asyncCallback13456228);
gdjs.CreditCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CreditCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.CreditCode.asyncCallback13456228(runtimeScene, asyncObjectsList)), 13456228, asyncObjectsList);
}
}

}


};gdjs.CreditCode.asyncCallback13457468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CreditCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
gdjs.CreditCode.localVariables.length = 0;
}
gdjs.CreditCode.idToCallbackMap.set(13457468, gdjs.CreditCode.asyncCallback13457468);
gdjs.CreditCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CreditCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.CreditCode.asyncCallback13457468(runtimeScene, asyncObjectsList)), 13457468, asyncObjectsList);
}
}

}


};gdjs.CreditCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeBG"), gdjs.CreditCode.GDFadeBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("InfoGame"), gdjs.CreditCode.GDInfoGameObjects1);
{for(var i = 0, len = gdjs.CreditCode.GDFadeBGObjects1.length ;i < len;++i) {
    gdjs.CreditCode.GDFadeBGObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.CreditCode.GDInfoGameObjects1.length ;i < len;++i) {
    gdjs.CreditCode.GDInfoGameObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.adMob.loadInterstitial("ca-app-pub-6257695730616358/9656020166", "ca-app-pub-6257695730616358/9390945211", true);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeBG"), gdjs.CreditCode.GDFadeBGObjects1);
{for(var i = 0, len = gdjs.CreditCode.GDFadeBGObjects1.length ;i < len;++i) {
    gdjs.CreditCode.GDFadeBGObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CreditCode.GDFadeBGObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}

{ //Subevents
gdjs.CreditCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.CreditCode.GDHomeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditCode.GDHomeButtonObjects1.length;i<l;++i) {
    if ( gdjs.CreditCode.GDHomeButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.CreditCode.GDHomeButtonObjects1[k] = gdjs.CreditCode.GDHomeButtonObjects1[i];
        ++k;
    }
}
gdjs.CreditCode.GDHomeButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.CreditCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.CreditCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditCode.GDBG_9595WhiteObjects1.length = 0;
gdjs.CreditCode.GDBG_9595WhiteObjects2.length = 0;
gdjs.CreditCode.GDInfoGameObjects1.length = 0;
gdjs.CreditCode.GDInfoGameObjects2.length = 0;
gdjs.CreditCode.GDHomeButtonObjects1.length = 0;
gdjs.CreditCode.GDHomeButtonObjects2.length = 0;
gdjs.CreditCode.GDInfoTitleObjects1.length = 0;
gdjs.CreditCode.GDInfoTitleObjects2.length = 0;
gdjs.CreditCode.GDPlayerControllerObjects1.length = 0;
gdjs.CreditCode.GDPlayerControllerObjects2.length = 0;
gdjs.CreditCode.GDGroundMaskObjects1.length = 0;
gdjs.CreditCode.GDGroundMaskObjects2.length = 0;
gdjs.CreditCode.GDBGObjects1.length = 0;
gdjs.CreditCode.GDBGObjects2.length = 0;
gdjs.CreditCode.GDRoomGenObjects1.length = 0;
gdjs.CreditCode.GDRoomGenObjects2.length = 0;
gdjs.CreditCode.GDEnemyObjects1.length = 0;
gdjs.CreditCode.GDEnemyObjects2.length = 0;
gdjs.CreditCode.GDCoinObjects1.length = 0;
gdjs.CreditCode.GDCoinObjects2.length = 0;
gdjs.CreditCode.GDCoinPickEffectObjects1.length = 0;
gdjs.CreditCode.GDCoinPickEffectObjects2.length = 0;
gdjs.CreditCode.GDFadeBGObjects1.length = 0;
gdjs.CreditCode.GDFadeBGObjects2.length = 0;
gdjs.CreditCode.GDJumpButtonObjects1.length = 0;
gdjs.CreditCode.GDJumpButtonObjects2.length = 0;
gdjs.CreditCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.CreditCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.CreditCode.GDFlagUIObjects1.length = 0;
gdjs.CreditCode.GDFlagUIObjects2.length = 0;
gdjs.CreditCode.GDCoinUIObjects1.length = 0;
gdjs.CreditCode.GDCoinUIObjects2.length = 0;
gdjs.CreditCode.GDPauseButtonObjects1.length = 0;
gdjs.CreditCode.GDPauseButtonObjects2.length = 0;
gdjs.CreditCode.GDCoinsCollectedObjects1.length = 0;
gdjs.CreditCode.GDCoinsCollectedObjects2.length = 0;
gdjs.CreditCode.GDDistanceMadeObjects1.length = 0;
gdjs.CreditCode.GDDistanceMadeObjects2.length = 0;
gdjs.CreditCode.GDDeathAnimationObjects1.length = 0;
gdjs.CreditCode.GDDeathAnimationObjects2.length = 0;
gdjs.CreditCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.CreditCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.CreditCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.CreditCode.GDChar_9595FatimaObjects2.length = 0;

gdjs.CreditCode.eventsList2(runtimeScene);
gdjs.CreditCode.GDBG_9595WhiteObjects1.length = 0;
gdjs.CreditCode.GDBG_9595WhiteObjects2.length = 0;
gdjs.CreditCode.GDInfoGameObjects1.length = 0;
gdjs.CreditCode.GDInfoGameObjects2.length = 0;
gdjs.CreditCode.GDHomeButtonObjects1.length = 0;
gdjs.CreditCode.GDHomeButtonObjects2.length = 0;
gdjs.CreditCode.GDInfoTitleObjects1.length = 0;
gdjs.CreditCode.GDInfoTitleObjects2.length = 0;
gdjs.CreditCode.GDPlayerControllerObjects1.length = 0;
gdjs.CreditCode.GDPlayerControllerObjects2.length = 0;
gdjs.CreditCode.GDGroundMaskObjects1.length = 0;
gdjs.CreditCode.GDGroundMaskObjects2.length = 0;
gdjs.CreditCode.GDBGObjects1.length = 0;
gdjs.CreditCode.GDBGObjects2.length = 0;
gdjs.CreditCode.GDRoomGenObjects1.length = 0;
gdjs.CreditCode.GDRoomGenObjects2.length = 0;
gdjs.CreditCode.GDEnemyObjects1.length = 0;
gdjs.CreditCode.GDEnemyObjects2.length = 0;
gdjs.CreditCode.GDCoinObjects1.length = 0;
gdjs.CreditCode.GDCoinObjects2.length = 0;
gdjs.CreditCode.GDCoinPickEffectObjects1.length = 0;
gdjs.CreditCode.GDCoinPickEffectObjects2.length = 0;
gdjs.CreditCode.GDFadeBGObjects1.length = 0;
gdjs.CreditCode.GDFadeBGObjects2.length = 0;
gdjs.CreditCode.GDJumpButtonObjects1.length = 0;
gdjs.CreditCode.GDJumpButtonObjects2.length = 0;
gdjs.CreditCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.CreditCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.CreditCode.GDFlagUIObjects1.length = 0;
gdjs.CreditCode.GDFlagUIObjects2.length = 0;
gdjs.CreditCode.GDCoinUIObjects1.length = 0;
gdjs.CreditCode.GDCoinUIObjects2.length = 0;
gdjs.CreditCode.GDPauseButtonObjects1.length = 0;
gdjs.CreditCode.GDPauseButtonObjects2.length = 0;
gdjs.CreditCode.GDCoinsCollectedObjects1.length = 0;
gdjs.CreditCode.GDCoinsCollectedObjects2.length = 0;
gdjs.CreditCode.GDDistanceMadeObjects1.length = 0;
gdjs.CreditCode.GDDistanceMadeObjects2.length = 0;
gdjs.CreditCode.GDDeathAnimationObjects1.length = 0;
gdjs.CreditCode.GDDeathAnimationObjects2.length = 0;
gdjs.CreditCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.CreditCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.CreditCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.CreditCode.GDChar_9595FatimaObjects2.length = 0;


return;

}

gdjs['CreditCode'] = gdjs.CreditCode;
