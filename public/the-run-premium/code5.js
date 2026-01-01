gdjs.CharSelectCode = {};
gdjs.CharSelectCode.localVariables = [];
gdjs.CharSelectCode.idToCallbackMap = new Map();
gdjs.CharSelectCode.GDBG_9595MenuObjects1= [];
gdjs.CharSelectCode.GDBG_9595MenuObjects2= [];
gdjs.CharSelectCode.GDHomeButtonObjects1= [];
gdjs.CharSelectCode.GDHomeButtonObjects2= [];
gdjs.CharSelectCode.GDCharSelectTitleObjects1= [];
gdjs.CharSelectCode.GDCharSelectTitleObjects2= [];
gdjs.CharSelectCode.GDSelect_9595AbdullahObjects1= [];
gdjs.CharSelectCode.GDSelect_9595AbdullahObjects2= [];
gdjs.CharSelectCode.GDSelect_9595FatimaObjects1= [];
gdjs.CharSelectCode.GDSelect_9595FatimaObjects2= [];
gdjs.CharSelectCode.GDORTitleObjects1= [];
gdjs.CharSelectCode.GDORTitleObjects2= [];
gdjs.CharSelectCode.GDPlayerControllerObjects1= [];
gdjs.CharSelectCode.GDPlayerControllerObjects2= [];
gdjs.CharSelectCode.GDGroundMaskObjects1= [];
gdjs.CharSelectCode.GDGroundMaskObjects2= [];
gdjs.CharSelectCode.GDBGObjects1= [];
gdjs.CharSelectCode.GDBGObjects2= [];
gdjs.CharSelectCode.GDRoomGenObjects1= [];
gdjs.CharSelectCode.GDRoomGenObjects2= [];
gdjs.CharSelectCode.GDEnemyObjects1= [];
gdjs.CharSelectCode.GDEnemyObjects2= [];
gdjs.CharSelectCode.GDCoinObjects1= [];
gdjs.CharSelectCode.GDCoinObjects2= [];
gdjs.CharSelectCode.GDCoinPickEffectObjects1= [];
gdjs.CharSelectCode.GDCoinPickEffectObjects2= [];
gdjs.CharSelectCode.GDFadeBGObjects1= [];
gdjs.CharSelectCode.GDFadeBGObjects2= [];
gdjs.CharSelectCode.GDJumpButtonObjects1= [];
gdjs.CharSelectCode.GDJumpButtonObjects2= [];
gdjs.CharSelectCode.GDGround_9595ThruMaskObjects1= [];
gdjs.CharSelectCode.GDGround_9595ThruMaskObjects2= [];
gdjs.CharSelectCode.GDFlagUIObjects1= [];
gdjs.CharSelectCode.GDFlagUIObjects2= [];
gdjs.CharSelectCode.GDCoinUIObjects1= [];
gdjs.CharSelectCode.GDCoinUIObjects2= [];
gdjs.CharSelectCode.GDPauseButtonObjects1= [];
gdjs.CharSelectCode.GDPauseButtonObjects2= [];
gdjs.CharSelectCode.GDCoinsCollectedObjects1= [];
gdjs.CharSelectCode.GDCoinsCollectedObjects2= [];
gdjs.CharSelectCode.GDDistanceMadeObjects1= [];
gdjs.CharSelectCode.GDDistanceMadeObjects2= [];
gdjs.CharSelectCode.GDDeathAnimationObjects1= [];
gdjs.CharSelectCode.GDDeathAnimationObjects2= [];
gdjs.CharSelectCode.GDChar_9595AbdullahObjects1= [];
gdjs.CharSelectCode.GDChar_9595AbdullahObjects2= [];
gdjs.CharSelectCode.GDChar_9595FatimaObjects1= [];
gdjs.CharSelectCode.GDChar_9595FatimaObjects2= [];


gdjs.CharSelectCode.asyncCallback41392628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CharSelectCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
gdjs.CharSelectCode.localVariables.length = 0;
}
gdjs.CharSelectCode.idToCallbackMap.set(41392628, gdjs.CharSelectCode.asyncCallback41392628);
gdjs.CharSelectCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CharSelectCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.CharSelectCode.asyncCallback41392628(runtimeScene, asyncObjectsList)), 41392628, asyncObjectsList);
}
}

}


};gdjs.CharSelectCode.asyncCallback41394068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CharSelectCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelSelect", false);
}
gdjs.CharSelectCode.localVariables.length = 0;
}
gdjs.CharSelectCode.idToCallbackMap.set(41394068, gdjs.CharSelectCode.asyncCallback41394068);
gdjs.CharSelectCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CharSelectCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.CharSelectCode.asyncCallback41394068(runtimeScene, asyncObjectsList)), 41394068, asyncObjectsList);
}
}

}


};gdjs.CharSelectCode.asyncCallback41395532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CharSelectCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelSelect", false);
}
gdjs.CharSelectCode.localVariables.length = 0;
}
gdjs.CharSelectCode.idToCallbackMap.set(41395532, gdjs.CharSelectCode.asyncCallback41395532);
gdjs.CharSelectCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CharSelectCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.CharSelectCode.asyncCallback41395532(runtimeScene, asyncObjectsList)), 41395532, asyncObjectsList);
}
}

}


};gdjs.CharSelectCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeBG"), gdjs.CharSelectCode.GDFadeBGObjects1);
{for(var i = 0, len = gdjs.CharSelectCode.GDFadeBGObjects1.length ;i < len;++i) {
    gdjs.CharSelectCode.GDFadeBGObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeBG"), gdjs.CharSelectCode.GDFadeBGObjects1);
{for(var i = 0, len = gdjs.CharSelectCode.GDFadeBGObjects1.length ;i < len;++i) {
    gdjs.CharSelectCode.GDFadeBGObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CharSelectCode.GDFadeBGObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.CharSelectCode.GDHomeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharSelectCode.GDHomeButtonObjects1.length;i<l;++i) {
    if ( gdjs.CharSelectCode.GDHomeButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharSelectCode.GDHomeButtonObjects1[k] = gdjs.CharSelectCode.GDHomeButtonObjects1[i];
        ++k;
    }
}
gdjs.CharSelectCode.GDHomeButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.CharSelectCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Select_Abdullah"), gdjs.CharSelectCode.GDSelect_9595AbdullahObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharSelectCode.GDSelect_9595AbdullahObjects1.length;i<l;++i) {
    if ( gdjs.CharSelectCode.GDSelect_9595AbdullahObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharSelectCode.GDSelect_9595AbdullahObjects1[k] = gdjs.CharSelectCode.GDSelect_9595AbdullahObjects1[i];
        ++k;
    }
}
gdjs.CharSelectCode.GDSelect_9595AbdullahObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}

{ //Subevents
gdjs.CharSelectCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Select_Fatima"), gdjs.CharSelectCode.GDSelect_9595FatimaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharSelectCode.GDSelect_9595FatimaObjects1.length;i<l;++i) {
    if ( gdjs.CharSelectCode.GDSelect_9595FatimaObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharSelectCode.GDSelect_9595FatimaObjects1[k] = gdjs.CharSelectCode.GDSelect_9595FatimaObjects1[i];
        ++k;
    }
}
gdjs.CharSelectCode.GDSelect_9595FatimaObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(false);
}

{ //Subevents
gdjs.CharSelectCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.CharSelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CharSelectCode.GDBG_9595MenuObjects1.length = 0;
gdjs.CharSelectCode.GDBG_9595MenuObjects2.length = 0;
gdjs.CharSelectCode.GDHomeButtonObjects1.length = 0;
gdjs.CharSelectCode.GDHomeButtonObjects2.length = 0;
gdjs.CharSelectCode.GDCharSelectTitleObjects1.length = 0;
gdjs.CharSelectCode.GDCharSelectTitleObjects2.length = 0;
gdjs.CharSelectCode.GDSelect_9595AbdullahObjects1.length = 0;
gdjs.CharSelectCode.GDSelect_9595AbdullahObjects2.length = 0;
gdjs.CharSelectCode.GDSelect_9595FatimaObjects1.length = 0;
gdjs.CharSelectCode.GDSelect_9595FatimaObjects2.length = 0;
gdjs.CharSelectCode.GDORTitleObjects1.length = 0;
gdjs.CharSelectCode.GDORTitleObjects2.length = 0;
gdjs.CharSelectCode.GDPlayerControllerObjects1.length = 0;
gdjs.CharSelectCode.GDPlayerControllerObjects2.length = 0;
gdjs.CharSelectCode.GDGroundMaskObjects1.length = 0;
gdjs.CharSelectCode.GDGroundMaskObjects2.length = 0;
gdjs.CharSelectCode.GDBGObjects1.length = 0;
gdjs.CharSelectCode.GDBGObjects2.length = 0;
gdjs.CharSelectCode.GDRoomGenObjects1.length = 0;
gdjs.CharSelectCode.GDRoomGenObjects2.length = 0;
gdjs.CharSelectCode.GDEnemyObjects1.length = 0;
gdjs.CharSelectCode.GDEnemyObjects2.length = 0;
gdjs.CharSelectCode.GDCoinObjects1.length = 0;
gdjs.CharSelectCode.GDCoinObjects2.length = 0;
gdjs.CharSelectCode.GDCoinPickEffectObjects1.length = 0;
gdjs.CharSelectCode.GDCoinPickEffectObjects2.length = 0;
gdjs.CharSelectCode.GDFadeBGObjects1.length = 0;
gdjs.CharSelectCode.GDFadeBGObjects2.length = 0;
gdjs.CharSelectCode.GDJumpButtonObjects1.length = 0;
gdjs.CharSelectCode.GDJumpButtonObjects2.length = 0;
gdjs.CharSelectCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.CharSelectCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.CharSelectCode.GDFlagUIObjects1.length = 0;
gdjs.CharSelectCode.GDFlagUIObjects2.length = 0;
gdjs.CharSelectCode.GDCoinUIObjects1.length = 0;
gdjs.CharSelectCode.GDCoinUIObjects2.length = 0;
gdjs.CharSelectCode.GDPauseButtonObjects1.length = 0;
gdjs.CharSelectCode.GDPauseButtonObjects2.length = 0;
gdjs.CharSelectCode.GDCoinsCollectedObjects1.length = 0;
gdjs.CharSelectCode.GDCoinsCollectedObjects2.length = 0;
gdjs.CharSelectCode.GDDistanceMadeObjects1.length = 0;
gdjs.CharSelectCode.GDDistanceMadeObjects2.length = 0;
gdjs.CharSelectCode.GDDeathAnimationObjects1.length = 0;
gdjs.CharSelectCode.GDDeathAnimationObjects2.length = 0;
gdjs.CharSelectCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.CharSelectCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.CharSelectCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.CharSelectCode.GDChar_9595FatimaObjects2.length = 0;

gdjs.CharSelectCode.eventsList3(runtimeScene);
gdjs.CharSelectCode.GDBG_9595MenuObjects1.length = 0;
gdjs.CharSelectCode.GDBG_9595MenuObjects2.length = 0;
gdjs.CharSelectCode.GDHomeButtonObjects1.length = 0;
gdjs.CharSelectCode.GDHomeButtonObjects2.length = 0;
gdjs.CharSelectCode.GDCharSelectTitleObjects1.length = 0;
gdjs.CharSelectCode.GDCharSelectTitleObjects2.length = 0;
gdjs.CharSelectCode.GDSelect_9595AbdullahObjects1.length = 0;
gdjs.CharSelectCode.GDSelect_9595AbdullahObjects2.length = 0;
gdjs.CharSelectCode.GDSelect_9595FatimaObjects1.length = 0;
gdjs.CharSelectCode.GDSelect_9595FatimaObjects2.length = 0;
gdjs.CharSelectCode.GDORTitleObjects1.length = 0;
gdjs.CharSelectCode.GDORTitleObjects2.length = 0;
gdjs.CharSelectCode.GDPlayerControllerObjects1.length = 0;
gdjs.CharSelectCode.GDPlayerControllerObjects2.length = 0;
gdjs.CharSelectCode.GDGroundMaskObjects1.length = 0;
gdjs.CharSelectCode.GDGroundMaskObjects2.length = 0;
gdjs.CharSelectCode.GDBGObjects1.length = 0;
gdjs.CharSelectCode.GDBGObjects2.length = 0;
gdjs.CharSelectCode.GDRoomGenObjects1.length = 0;
gdjs.CharSelectCode.GDRoomGenObjects2.length = 0;
gdjs.CharSelectCode.GDEnemyObjects1.length = 0;
gdjs.CharSelectCode.GDEnemyObjects2.length = 0;
gdjs.CharSelectCode.GDCoinObjects1.length = 0;
gdjs.CharSelectCode.GDCoinObjects2.length = 0;
gdjs.CharSelectCode.GDCoinPickEffectObjects1.length = 0;
gdjs.CharSelectCode.GDCoinPickEffectObjects2.length = 0;
gdjs.CharSelectCode.GDFadeBGObjects1.length = 0;
gdjs.CharSelectCode.GDFadeBGObjects2.length = 0;
gdjs.CharSelectCode.GDJumpButtonObjects1.length = 0;
gdjs.CharSelectCode.GDJumpButtonObjects2.length = 0;
gdjs.CharSelectCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.CharSelectCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.CharSelectCode.GDFlagUIObjects1.length = 0;
gdjs.CharSelectCode.GDFlagUIObjects2.length = 0;
gdjs.CharSelectCode.GDCoinUIObjects1.length = 0;
gdjs.CharSelectCode.GDCoinUIObjects2.length = 0;
gdjs.CharSelectCode.GDPauseButtonObjects1.length = 0;
gdjs.CharSelectCode.GDPauseButtonObjects2.length = 0;
gdjs.CharSelectCode.GDCoinsCollectedObjects1.length = 0;
gdjs.CharSelectCode.GDCoinsCollectedObjects2.length = 0;
gdjs.CharSelectCode.GDDistanceMadeObjects1.length = 0;
gdjs.CharSelectCode.GDDistanceMadeObjects2.length = 0;
gdjs.CharSelectCode.GDDeathAnimationObjects1.length = 0;
gdjs.CharSelectCode.GDDeathAnimationObjects2.length = 0;
gdjs.CharSelectCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.CharSelectCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.CharSelectCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.CharSelectCode.GDChar_9595FatimaObjects2.length = 0;


return;

}

gdjs['CharSelectCode'] = gdjs.CharSelectCode;
