gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.idToCallbackMap = new Map();
gdjs.MainMenuCode.GDBG_9595MenuObjects1= [];
gdjs.MainMenuCode.GDBG_9595MenuObjects2= [];
gdjs.MainMenuCode.GDIntroGameObjects1= [];
gdjs.MainMenuCode.GDIntroGameObjects2= [];
gdjs.MainMenuCode.GDPlayButtonObjects1= [];
gdjs.MainMenuCode.GDPlayButtonObjects2= [];
gdjs.MainMenuCode.GDLeaderboardButtonObjects1= [];
gdjs.MainMenuCode.GDLeaderboardButtonObjects2= [];
gdjs.MainMenuCode.GDSoundButtonObjects1= [];
gdjs.MainMenuCode.GDSoundButtonObjects2= [];
gdjs.MainMenuCode.GDInfoButtonObjects1= [];
gdjs.MainMenuCode.GDInfoButtonObjects2= [];
gdjs.MainMenuCode.GDShopButtonObjects1= [];
gdjs.MainMenuCode.GDShopButtonObjects2= [];
gdjs.MainMenuCode.GDPlayerControllerObjects1= [];
gdjs.MainMenuCode.GDPlayerControllerObjects2= [];
gdjs.MainMenuCode.GDGroundMaskObjects1= [];
gdjs.MainMenuCode.GDGroundMaskObjects2= [];
gdjs.MainMenuCode.GDBGObjects1= [];
gdjs.MainMenuCode.GDBGObjects2= [];
gdjs.MainMenuCode.GDRoomGenObjects1= [];
gdjs.MainMenuCode.GDRoomGenObjects2= [];
gdjs.MainMenuCode.GDEnemyObjects1= [];
gdjs.MainMenuCode.GDEnemyObjects2= [];
gdjs.MainMenuCode.GDCoinObjects1= [];
gdjs.MainMenuCode.GDCoinObjects2= [];
gdjs.MainMenuCode.GDCoinPickEffectObjects1= [];
gdjs.MainMenuCode.GDCoinPickEffectObjects2= [];
gdjs.MainMenuCode.GDFadeBGObjects1= [];
gdjs.MainMenuCode.GDFadeBGObjects2= [];
gdjs.MainMenuCode.GDJumpButtonObjects1= [];
gdjs.MainMenuCode.GDJumpButtonObjects2= [];
gdjs.MainMenuCode.GDGround_9595ThruMaskObjects1= [];
gdjs.MainMenuCode.GDGround_9595ThruMaskObjects2= [];
gdjs.MainMenuCode.GDFlagUIObjects1= [];
gdjs.MainMenuCode.GDFlagUIObjects2= [];
gdjs.MainMenuCode.GDCoinUIObjects1= [];
gdjs.MainMenuCode.GDCoinUIObjects2= [];
gdjs.MainMenuCode.GDPauseButtonObjects1= [];
gdjs.MainMenuCode.GDPauseButtonObjects2= [];
gdjs.MainMenuCode.GDCoinsCollectedObjects1= [];
gdjs.MainMenuCode.GDCoinsCollectedObjects2= [];
gdjs.MainMenuCode.GDDistanceMadeObjects1= [];
gdjs.MainMenuCode.GDDistanceMadeObjects2= [];
gdjs.MainMenuCode.GDDeathAnimationObjects1= [];
gdjs.MainMenuCode.GDDeathAnimationObjects2= [];
gdjs.MainMenuCode.GDChar_9595AbdullahObjects1= [];
gdjs.MainMenuCode.GDChar_9595AbdullahObjects2= [];
gdjs.MainMenuCode.GDChar_9595FatimaObjects1= [];
gdjs.MainMenuCode.GDChar_9595FatimaObjects2= [];


gdjs.MainMenuCode.asyncCallback42493004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CharSelect", false);
}
gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.idToCallbackMap.set(42493004, gdjs.MainMenuCode.asyncCallback42493004);
gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback42493004(runtimeScene, asyncObjectsList)), 42493004, asyncObjectsList);
}
}

}


};gdjs.MainMenuCode.asyncCallback42501684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credit", false);
}
gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.idToCallbackMap.set(42501684, gdjs.MainMenuCode.asyncCallback42501684);
gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback42501684(runtimeScene, asyncObjectsList)), 42501684, asyncObjectsList);
}
}

}


};gdjs.MainMenuCode.asyncCallback42506692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{gdjs.evtTools.window.openURL("https://abdullahandfatima.com/membership", runtimeScene);
}
gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.idToCallbackMap.set(42506692, gdjs.MainMenuCode.asyncCallback42506692);
gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback42506692(runtimeScene, asyncObjectsList)), 42506692, asyncObjectsList);
}
}

}


};gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeBG"), gdjs.MainMenuCode.GDFadeBGObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDFadeBGObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFadeBGObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{gdjs.evtTools.leaderboards.setPreferSendConnectedPlayerScore(runtimeScene, true);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeBG"), gdjs.MainMenuCode.GDFadeBGObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDFadeBGObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFadeBGObjects1[i].getBehavior("Opacity").setOpacity(gdjs.MainMenuCode.GDFadeBGObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPlayButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects1[k] = gdjs.MainMenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardButton"), gdjs.MainMenuCode.GDLeaderboardButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDLeaderboardButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDLeaderboardButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDLeaderboardButtonObjects1[k] = gdjs.MainMenuCode.GDLeaderboardButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDLeaderboardButtonObjects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("InfoButton"), gdjs.MainMenuCode.GDInfoButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDInfoButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDInfoButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDInfoButtonObjects1[k] = gdjs.MainMenuCode.GDInfoButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDInfoButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShopButton"), gdjs.MainMenuCode.GDShopButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDShopButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDShopButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDShopButtonObjects1[k] = gdjs.MainMenuCode.GDShopButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDShopButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(42506772);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.MainMenuCode.GDSoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSoundButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSoundButtonObjects1[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSoundButtonObjects1[k] = gdjs.MainMenuCode.GDSoundButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSoundButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.MainMenuCode.GDSoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSoundButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDSoundButtonObjects1[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSoundButtonObjects1[k] = gdjs.MainMenuCode.GDSoundButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSoundButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardButton"), gdjs.MainMenuCode.GDLeaderboardButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDLeaderboardButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDLeaderboardButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDLeaderboardButtonObjects1[k] = gdjs.MainMenuCode.GDLeaderboardButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDLeaderboardButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "d08a57c4-ce27-462b-bbfb-221c2fb0513c", true);
}
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDBG_9595MenuObjects1.length = 0;
gdjs.MainMenuCode.GDBG_9595MenuObjects2.length = 0;
gdjs.MainMenuCode.GDIntroGameObjects1.length = 0;
gdjs.MainMenuCode.GDIntroGameObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDLeaderboardButtonObjects1.length = 0;
gdjs.MainMenuCode.GDLeaderboardButtonObjects2.length = 0;
gdjs.MainMenuCode.GDSoundButtonObjects1.length = 0;
gdjs.MainMenuCode.GDSoundButtonObjects2.length = 0;
gdjs.MainMenuCode.GDInfoButtonObjects1.length = 0;
gdjs.MainMenuCode.GDInfoButtonObjects2.length = 0;
gdjs.MainMenuCode.GDShopButtonObjects1.length = 0;
gdjs.MainMenuCode.GDShopButtonObjects2.length = 0;
gdjs.MainMenuCode.GDPlayerControllerObjects1.length = 0;
gdjs.MainMenuCode.GDPlayerControllerObjects2.length = 0;
gdjs.MainMenuCode.GDGroundMaskObjects1.length = 0;
gdjs.MainMenuCode.GDGroundMaskObjects2.length = 0;
gdjs.MainMenuCode.GDBGObjects1.length = 0;
gdjs.MainMenuCode.GDBGObjects2.length = 0;
gdjs.MainMenuCode.GDRoomGenObjects1.length = 0;
gdjs.MainMenuCode.GDRoomGenObjects2.length = 0;
gdjs.MainMenuCode.GDEnemyObjects1.length = 0;
gdjs.MainMenuCode.GDEnemyObjects2.length = 0;
gdjs.MainMenuCode.GDCoinObjects1.length = 0;
gdjs.MainMenuCode.GDCoinObjects2.length = 0;
gdjs.MainMenuCode.GDCoinPickEffectObjects1.length = 0;
gdjs.MainMenuCode.GDCoinPickEffectObjects2.length = 0;
gdjs.MainMenuCode.GDFadeBGObjects1.length = 0;
gdjs.MainMenuCode.GDFadeBGObjects2.length = 0;
gdjs.MainMenuCode.GDJumpButtonObjects1.length = 0;
gdjs.MainMenuCode.GDJumpButtonObjects2.length = 0;
gdjs.MainMenuCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.MainMenuCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.MainMenuCode.GDFlagUIObjects1.length = 0;
gdjs.MainMenuCode.GDFlagUIObjects2.length = 0;
gdjs.MainMenuCode.GDCoinUIObjects1.length = 0;
gdjs.MainMenuCode.GDCoinUIObjects2.length = 0;
gdjs.MainMenuCode.GDPauseButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPauseButtonObjects2.length = 0;
gdjs.MainMenuCode.GDCoinsCollectedObjects1.length = 0;
gdjs.MainMenuCode.GDCoinsCollectedObjects2.length = 0;
gdjs.MainMenuCode.GDDistanceMadeObjects1.length = 0;
gdjs.MainMenuCode.GDDistanceMadeObjects2.length = 0;
gdjs.MainMenuCode.GDDeathAnimationObjects1.length = 0;
gdjs.MainMenuCode.GDDeathAnimationObjects2.length = 0;
gdjs.MainMenuCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.MainMenuCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.MainMenuCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.MainMenuCode.GDChar_9595FatimaObjects2.length = 0;

gdjs.MainMenuCode.eventsList3(runtimeScene);
gdjs.MainMenuCode.GDBG_9595MenuObjects1.length = 0;
gdjs.MainMenuCode.GDBG_9595MenuObjects2.length = 0;
gdjs.MainMenuCode.GDIntroGameObjects1.length = 0;
gdjs.MainMenuCode.GDIntroGameObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDLeaderboardButtonObjects1.length = 0;
gdjs.MainMenuCode.GDLeaderboardButtonObjects2.length = 0;
gdjs.MainMenuCode.GDSoundButtonObjects1.length = 0;
gdjs.MainMenuCode.GDSoundButtonObjects2.length = 0;
gdjs.MainMenuCode.GDInfoButtonObjects1.length = 0;
gdjs.MainMenuCode.GDInfoButtonObjects2.length = 0;
gdjs.MainMenuCode.GDShopButtonObjects1.length = 0;
gdjs.MainMenuCode.GDShopButtonObjects2.length = 0;
gdjs.MainMenuCode.GDPlayerControllerObjects1.length = 0;
gdjs.MainMenuCode.GDPlayerControllerObjects2.length = 0;
gdjs.MainMenuCode.GDGroundMaskObjects1.length = 0;
gdjs.MainMenuCode.GDGroundMaskObjects2.length = 0;
gdjs.MainMenuCode.GDBGObjects1.length = 0;
gdjs.MainMenuCode.GDBGObjects2.length = 0;
gdjs.MainMenuCode.GDRoomGenObjects1.length = 0;
gdjs.MainMenuCode.GDRoomGenObjects2.length = 0;
gdjs.MainMenuCode.GDEnemyObjects1.length = 0;
gdjs.MainMenuCode.GDEnemyObjects2.length = 0;
gdjs.MainMenuCode.GDCoinObjects1.length = 0;
gdjs.MainMenuCode.GDCoinObjects2.length = 0;
gdjs.MainMenuCode.GDCoinPickEffectObjects1.length = 0;
gdjs.MainMenuCode.GDCoinPickEffectObjects2.length = 0;
gdjs.MainMenuCode.GDFadeBGObjects1.length = 0;
gdjs.MainMenuCode.GDFadeBGObjects2.length = 0;
gdjs.MainMenuCode.GDJumpButtonObjects1.length = 0;
gdjs.MainMenuCode.GDJumpButtonObjects2.length = 0;
gdjs.MainMenuCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.MainMenuCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.MainMenuCode.GDFlagUIObjects1.length = 0;
gdjs.MainMenuCode.GDFlagUIObjects2.length = 0;
gdjs.MainMenuCode.GDCoinUIObjects1.length = 0;
gdjs.MainMenuCode.GDCoinUIObjects2.length = 0;
gdjs.MainMenuCode.GDPauseButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPauseButtonObjects2.length = 0;
gdjs.MainMenuCode.GDCoinsCollectedObjects1.length = 0;
gdjs.MainMenuCode.GDCoinsCollectedObjects2.length = 0;
gdjs.MainMenuCode.GDDistanceMadeObjects1.length = 0;
gdjs.MainMenuCode.GDDistanceMadeObjects2.length = 0;
gdjs.MainMenuCode.GDDeathAnimationObjects1.length = 0;
gdjs.MainMenuCode.GDDeathAnimationObjects2.length = 0;
gdjs.MainMenuCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.MainMenuCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.MainMenuCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.MainMenuCode.GDChar_9595FatimaObjects2.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
