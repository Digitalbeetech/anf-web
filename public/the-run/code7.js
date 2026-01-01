gdjs.PauseMenuCode = {};
gdjs.PauseMenuCode.localVariables = [];
gdjs.PauseMenuCode.idToCallbackMap = new Map();
gdjs.PauseMenuCode.GDBG_9595MenuObjects1= [];
gdjs.PauseMenuCode.GDBG_9595MenuObjects2= [];
gdjs.PauseMenuCode.GDHomeButtonObjects1= [];
gdjs.PauseMenuCode.GDHomeButtonObjects2= [];
gdjs.PauseMenuCode.GDPauseTitleObjects1= [];
gdjs.PauseMenuCode.GDPauseTitleObjects2= [];
gdjs.PauseMenuCode.GDResumeButtonObjects1= [];
gdjs.PauseMenuCode.GDResumeButtonObjects2= [];
gdjs.PauseMenuCode.GDLvlSelectButtonObjects1= [];
gdjs.PauseMenuCode.GDLvlSelectButtonObjects2= [];
gdjs.PauseMenuCode.GDSoundButtonObjects1= [];
gdjs.PauseMenuCode.GDSoundButtonObjects2= [];
gdjs.PauseMenuCode.GDCoinBGObjects1= [];
gdjs.PauseMenuCode.GDCoinBGObjects2= [];
gdjs.PauseMenuCode.GDFlagBGObjects1= [];
gdjs.PauseMenuCode.GDFlagBGObjects2= [];
gdjs.PauseMenuCode.GDPlayerControllerObjects1= [];
gdjs.PauseMenuCode.GDPlayerControllerObjects2= [];
gdjs.PauseMenuCode.GDGroundMaskObjects1= [];
gdjs.PauseMenuCode.GDGroundMaskObjects2= [];
gdjs.PauseMenuCode.GDBGObjects1= [];
gdjs.PauseMenuCode.GDBGObjects2= [];
gdjs.PauseMenuCode.GDRoomGenObjects1= [];
gdjs.PauseMenuCode.GDRoomGenObjects2= [];
gdjs.PauseMenuCode.GDEnemyObjects1= [];
gdjs.PauseMenuCode.GDEnemyObjects2= [];
gdjs.PauseMenuCode.GDCoinObjects1= [];
gdjs.PauseMenuCode.GDCoinObjects2= [];
gdjs.PauseMenuCode.GDCoinPickEffectObjects1= [];
gdjs.PauseMenuCode.GDCoinPickEffectObjects2= [];
gdjs.PauseMenuCode.GDFadeBGObjects1= [];
gdjs.PauseMenuCode.GDFadeBGObjects2= [];
gdjs.PauseMenuCode.GDJumpButtonObjects1= [];
gdjs.PauseMenuCode.GDJumpButtonObjects2= [];
gdjs.PauseMenuCode.GDGround_9595ThruMaskObjects1= [];
gdjs.PauseMenuCode.GDGround_9595ThruMaskObjects2= [];
gdjs.PauseMenuCode.GDFlagUIObjects1= [];
gdjs.PauseMenuCode.GDFlagUIObjects2= [];
gdjs.PauseMenuCode.GDCoinUIObjects1= [];
gdjs.PauseMenuCode.GDCoinUIObjects2= [];
gdjs.PauseMenuCode.GDPauseButtonObjects1= [];
gdjs.PauseMenuCode.GDPauseButtonObjects2= [];
gdjs.PauseMenuCode.GDCoinsCollectedObjects1= [];
gdjs.PauseMenuCode.GDCoinsCollectedObjects2= [];
gdjs.PauseMenuCode.GDDistanceMadeObjects1= [];
gdjs.PauseMenuCode.GDDistanceMadeObjects2= [];
gdjs.PauseMenuCode.GDDeathAnimationObjects1= [];
gdjs.PauseMenuCode.GDDeathAnimationObjects2= [];
gdjs.PauseMenuCode.GDChar_9595AbdullahObjects1= [];
gdjs.PauseMenuCode.GDChar_9595AbdullahObjects2= [];
gdjs.PauseMenuCode.GDChar_9595FatimaObjects1= [];
gdjs.PauseMenuCode.GDChar_9595FatimaObjects2= [];


gdjs.PauseMenuCode.asyncCallback13670540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PauseMenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
gdjs.PauseMenuCode.localVariables.length = 0;
}
gdjs.PauseMenuCode.idToCallbackMap.set(13670540, gdjs.PauseMenuCode.asyncCallback13670540);
gdjs.PauseMenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.PauseMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.PauseMenuCode.asyncCallback13670540(runtimeScene, asyncObjectsList)), 13670540, asyncObjectsList);
}
}

}


};gdjs.PauseMenuCode.asyncCallback13671332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PauseMenuCode.localVariables);
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
gdjs.PauseMenuCode.localVariables.length = 0;
}
gdjs.PauseMenuCode.idToCallbackMap.set(13671332, gdjs.PauseMenuCode.asyncCallback13671332);
gdjs.PauseMenuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.PauseMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.PauseMenuCode.asyncCallback13671332(runtimeScene, asyncObjectsList)), 13671332, asyncObjectsList);
}
}

}


};gdjs.PauseMenuCode.asyncCallback13672236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PauseMenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelSelect", false);
}
gdjs.PauseMenuCode.localVariables.length = 0;
}
gdjs.PauseMenuCode.idToCallbackMap.set(13672236, gdjs.PauseMenuCode.asyncCallback13672236);
gdjs.PauseMenuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.PauseMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.PauseMenuCode.asyncCallback13672236(runtimeScene, asyncObjectsList)), 13672236, asyncObjectsList);
}
}

}


};gdjs.PauseMenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeBG"), gdjs.PauseMenuCode.GDFadeBGObjects1);
{for(var i = 0, len = gdjs.PauseMenuCode.GDFadeBGObjects1.length ;i < len;++i) {
    gdjs.PauseMenuCode.GDFadeBGObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{gdjs.adMob.loadInterstitial("ca-app-pub-6257695730616358/9656020166", "ca-app-pub-6257695730616358/9390945211", true);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CoinsCollected"), gdjs.PauseMenuCode.GDCoinsCollectedObjects1);
gdjs.copyArray(runtimeScene.getObjects("DistanceMade"), gdjs.PauseMenuCode.GDDistanceMadeObjects1);
gdjs.copyArray(runtimeScene.getObjects("FadeBG"), gdjs.PauseMenuCode.GDFadeBGObjects1);
{for(var i = 0, len = gdjs.PauseMenuCode.GDFadeBGObjects1.length ;i < len;++i) {
    gdjs.PauseMenuCode.GDFadeBGObjects1[i].getBehavior("Opacity").setOpacity(gdjs.PauseMenuCode.GDFadeBGObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
{for(var i = 0, len = gdjs.PauseMenuCode.GDCoinsCollectedObjects1.length ;i < len;++i) {
    gdjs.PauseMenuCode.GDCoinsCollectedObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.PauseMenuCode.GDDistanceMadeObjects1.length ;i < len;++i) {
    gdjs.PauseMenuCode.GDDistanceMadeObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.PauseMenuCode.GDHomeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PauseMenuCode.GDHomeButtonObjects1.length;i<l;++i) {
    if ( gdjs.PauseMenuCode.GDHomeButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.PauseMenuCode.GDHomeButtonObjects1[k] = gdjs.PauseMenuCode.GDHomeButtonObjects1[i];
        ++k;
    }
}
gdjs.PauseMenuCode.GDHomeButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.PauseMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ResumeButton"), gdjs.PauseMenuCode.GDResumeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PauseMenuCode.GDResumeButtonObjects1.length;i<l;++i) {
    if ( gdjs.PauseMenuCode.GDResumeButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.PauseMenuCode.GDResumeButtonObjects1[k] = gdjs.PauseMenuCode.GDResumeButtonObjects1[i];
        ++k;
    }
}
gdjs.PauseMenuCode.GDResumeButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.PauseMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LvlSelectButton"), gdjs.PauseMenuCode.GDLvlSelectButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PauseMenuCode.GDLvlSelectButtonObjects1.length;i<l;++i) {
    if ( gdjs.PauseMenuCode.GDLvlSelectButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.PauseMenuCode.GDLvlSelectButtonObjects1[k] = gdjs.PauseMenuCode.GDLvlSelectButtonObjects1[i];
        ++k;
    }
}
gdjs.PauseMenuCode.GDLvlSelectButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.PauseMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.PauseMenuCode.GDSoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PauseMenuCode.GDSoundButtonObjects1.length;i<l;++i) {
    if ( gdjs.PauseMenuCode.GDSoundButtonObjects1[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.PauseMenuCode.GDSoundButtonObjects1[k] = gdjs.PauseMenuCode.GDSoundButtonObjects1[i];
        ++k;
    }
}
gdjs.PauseMenuCode.GDSoundButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.PauseMenuCode.GDSoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PauseMenuCode.GDSoundButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.PauseMenuCode.GDSoundButtonObjects1[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.PauseMenuCode.GDSoundButtonObjects1[k] = gdjs.PauseMenuCode.GDSoundButtonObjects1[i];
        ++k;
    }
}
gdjs.PauseMenuCode.GDSoundButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}
}

}


};

gdjs.PauseMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseMenuCode.GDBG_9595MenuObjects1.length = 0;
gdjs.PauseMenuCode.GDBG_9595MenuObjects2.length = 0;
gdjs.PauseMenuCode.GDHomeButtonObjects1.length = 0;
gdjs.PauseMenuCode.GDHomeButtonObjects2.length = 0;
gdjs.PauseMenuCode.GDPauseTitleObjects1.length = 0;
gdjs.PauseMenuCode.GDPauseTitleObjects2.length = 0;
gdjs.PauseMenuCode.GDResumeButtonObjects1.length = 0;
gdjs.PauseMenuCode.GDResumeButtonObjects2.length = 0;
gdjs.PauseMenuCode.GDLvlSelectButtonObjects1.length = 0;
gdjs.PauseMenuCode.GDLvlSelectButtonObjects2.length = 0;
gdjs.PauseMenuCode.GDSoundButtonObjects1.length = 0;
gdjs.PauseMenuCode.GDSoundButtonObjects2.length = 0;
gdjs.PauseMenuCode.GDCoinBGObjects1.length = 0;
gdjs.PauseMenuCode.GDCoinBGObjects2.length = 0;
gdjs.PauseMenuCode.GDFlagBGObjects1.length = 0;
gdjs.PauseMenuCode.GDFlagBGObjects2.length = 0;
gdjs.PauseMenuCode.GDPlayerControllerObjects1.length = 0;
gdjs.PauseMenuCode.GDPlayerControllerObjects2.length = 0;
gdjs.PauseMenuCode.GDGroundMaskObjects1.length = 0;
gdjs.PauseMenuCode.GDGroundMaskObjects2.length = 0;
gdjs.PauseMenuCode.GDBGObjects1.length = 0;
gdjs.PauseMenuCode.GDBGObjects2.length = 0;
gdjs.PauseMenuCode.GDRoomGenObjects1.length = 0;
gdjs.PauseMenuCode.GDRoomGenObjects2.length = 0;
gdjs.PauseMenuCode.GDEnemyObjects1.length = 0;
gdjs.PauseMenuCode.GDEnemyObjects2.length = 0;
gdjs.PauseMenuCode.GDCoinObjects1.length = 0;
gdjs.PauseMenuCode.GDCoinObjects2.length = 0;
gdjs.PauseMenuCode.GDCoinPickEffectObjects1.length = 0;
gdjs.PauseMenuCode.GDCoinPickEffectObjects2.length = 0;
gdjs.PauseMenuCode.GDFadeBGObjects1.length = 0;
gdjs.PauseMenuCode.GDFadeBGObjects2.length = 0;
gdjs.PauseMenuCode.GDJumpButtonObjects1.length = 0;
gdjs.PauseMenuCode.GDJumpButtonObjects2.length = 0;
gdjs.PauseMenuCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.PauseMenuCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.PauseMenuCode.GDFlagUIObjects1.length = 0;
gdjs.PauseMenuCode.GDFlagUIObjects2.length = 0;
gdjs.PauseMenuCode.GDCoinUIObjects1.length = 0;
gdjs.PauseMenuCode.GDCoinUIObjects2.length = 0;
gdjs.PauseMenuCode.GDPauseButtonObjects1.length = 0;
gdjs.PauseMenuCode.GDPauseButtonObjects2.length = 0;
gdjs.PauseMenuCode.GDCoinsCollectedObjects1.length = 0;
gdjs.PauseMenuCode.GDCoinsCollectedObjects2.length = 0;
gdjs.PauseMenuCode.GDDistanceMadeObjects1.length = 0;
gdjs.PauseMenuCode.GDDistanceMadeObjects2.length = 0;
gdjs.PauseMenuCode.GDDeathAnimationObjects1.length = 0;
gdjs.PauseMenuCode.GDDeathAnimationObjects2.length = 0;
gdjs.PauseMenuCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.PauseMenuCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.PauseMenuCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.PauseMenuCode.GDChar_9595FatimaObjects2.length = 0;

gdjs.PauseMenuCode.eventsList3(runtimeScene);
gdjs.PauseMenuCode.GDBG_9595MenuObjects1.length = 0;
gdjs.PauseMenuCode.GDBG_9595MenuObjects2.length = 0;
gdjs.PauseMenuCode.GDHomeButtonObjects1.length = 0;
gdjs.PauseMenuCode.GDHomeButtonObjects2.length = 0;
gdjs.PauseMenuCode.GDPauseTitleObjects1.length = 0;
gdjs.PauseMenuCode.GDPauseTitleObjects2.length = 0;
gdjs.PauseMenuCode.GDResumeButtonObjects1.length = 0;
gdjs.PauseMenuCode.GDResumeButtonObjects2.length = 0;
gdjs.PauseMenuCode.GDLvlSelectButtonObjects1.length = 0;
gdjs.PauseMenuCode.GDLvlSelectButtonObjects2.length = 0;
gdjs.PauseMenuCode.GDSoundButtonObjects1.length = 0;
gdjs.PauseMenuCode.GDSoundButtonObjects2.length = 0;
gdjs.PauseMenuCode.GDCoinBGObjects1.length = 0;
gdjs.PauseMenuCode.GDCoinBGObjects2.length = 0;
gdjs.PauseMenuCode.GDFlagBGObjects1.length = 0;
gdjs.PauseMenuCode.GDFlagBGObjects2.length = 0;
gdjs.PauseMenuCode.GDPlayerControllerObjects1.length = 0;
gdjs.PauseMenuCode.GDPlayerControllerObjects2.length = 0;
gdjs.PauseMenuCode.GDGroundMaskObjects1.length = 0;
gdjs.PauseMenuCode.GDGroundMaskObjects2.length = 0;
gdjs.PauseMenuCode.GDBGObjects1.length = 0;
gdjs.PauseMenuCode.GDBGObjects2.length = 0;
gdjs.PauseMenuCode.GDRoomGenObjects1.length = 0;
gdjs.PauseMenuCode.GDRoomGenObjects2.length = 0;
gdjs.PauseMenuCode.GDEnemyObjects1.length = 0;
gdjs.PauseMenuCode.GDEnemyObjects2.length = 0;
gdjs.PauseMenuCode.GDCoinObjects1.length = 0;
gdjs.PauseMenuCode.GDCoinObjects2.length = 0;
gdjs.PauseMenuCode.GDCoinPickEffectObjects1.length = 0;
gdjs.PauseMenuCode.GDCoinPickEffectObjects2.length = 0;
gdjs.PauseMenuCode.GDFadeBGObjects1.length = 0;
gdjs.PauseMenuCode.GDFadeBGObjects2.length = 0;
gdjs.PauseMenuCode.GDJumpButtonObjects1.length = 0;
gdjs.PauseMenuCode.GDJumpButtonObjects2.length = 0;
gdjs.PauseMenuCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.PauseMenuCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.PauseMenuCode.GDFlagUIObjects1.length = 0;
gdjs.PauseMenuCode.GDFlagUIObjects2.length = 0;
gdjs.PauseMenuCode.GDCoinUIObjects1.length = 0;
gdjs.PauseMenuCode.GDCoinUIObjects2.length = 0;
gdjs.PauseMenuCode.GDPauseButtonObjects1.length = 0;
gdjs.PauseMenuCode.GDPauseButtonObjects2.length = 0;
gdjs.PauseMenuCode.GDCoinsCollectedObjects1.length = 0;
gdjs.PauseMenuCode.GDCoinsCollectedObjects2.length = 0;
gdjs.PauseMenuCode.GDDistanceMadeObjects1.length = 0;
gdjs.PauseMenuCode.GDDistanceMadeObjects2.length = 0;
gdjs.PauseMenuCode.GDDeathAnimationObjects1.length = 0;
gdjs.PauseMenuCode.GDDeathAnimationObjects2.length = 0;
gdjs.PauseMenuCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.PauseMenuCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.PauseMenuCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.PauseMenuCode.GDChar_9595FatimaObjects2.length = 0;


return;

}

gdjs['PauseMenuCode'] = gdjs.PauseMenuCode;
