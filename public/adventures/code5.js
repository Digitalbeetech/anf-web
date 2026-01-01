gdjs.LevelSelectCode = {};
gdjs.LevelSelectCode.localVariables = [];
gdjs.LevelSelectCode.idToCallbackMap = new Map();
gdjs.LevelSelectCode.GDBGObjects1= [];
gdjs.LevelSelectCode.GDBGObjects2= [];
gdjs.LevelSelectCode.GDCloudsBGObjects1= [];
gdjs.LevelSelectCode.GDCloudsBGObjects2= [];
gdjs.LevelSelectCode.GDSelectLevelObjects1= [];
gdjs.LevelSelectCode.GDSelectLevelObjects2= [];
gdjs.LevelSelectCode.GDBtn_9595Lvl1Objects1= [];
gdjs.LevelSelectCode.GDBtn_9595Lvl1Objects2= [];
gdjs.LevelSelectCode.GDBtn_9595Lvl2Objects1= [];
gdjs.LevelSelectCode.GDBtn_9595Lvl2Objects2= [];
gdjs.LevelSelectCode.GDBtn_9595Lvl3Objects1= [];
gdjs.LevelSelectCode.GDBtn_9595Lvl3Objects2= [];
gdjs.LevelSelectCode.GDBtn_9595Lvl4Objects1= [];
gdjs.LevelSelectCode.GDBtn_9595Lvl4Objects2= [];
gdjs.LevelSelectCode.GDBtn_9595LockedObjects1= [];
gdjs.LevelSelectCode.GDBtn_9595LockedObjects2= [];
gdjs.LevelSelectCode.GDFadeWObjects1= [];
gdjs.LevelSelectCode.GDFadeWObjects2= [];
gdjs.LevelSelectCode.GDBtn_9595LeftObjects1= [];
gdjs.LevelSelectCode.GDBtn_9595LeftObjects2= [];
gdjs.LevelSelectCode.GDBtn_9595RightObjects1= [];
gdjs.LevelSelectCode.GDBtn_9595RightObjects2= [];
gdjs.LevelSelectCode.GDBtn_9595JumpObjects1= [];
gdjs.LevelSelectCode.GDBtn_9595JumpObjects2= [];


gdjs.LevelSelectCode.asyncCallback19793732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LevelSelectCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl1_Intro", false);
}
gdjs.LevelSelectCode.localVariables.length = 0;
}
gdjs.LevelSelectCode.idToCallbackMap.set(19793732, gdjs.LevelSelectCode.asyncCallback19793732);
gdjs.LevelSelectCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LevelSelectCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.LevelSelectCode.asyncCallback19793732(runtimeScene, asyncObjectsList)), 19793732, asyncObjectsList);
}
}

}


};gdjs.LevelSelectCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Btn_Lvl1"), gdjs.LevelSelectCode.GDBtn_9595Lvl1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDBtn_9595Lvl1Objects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDBtn_9595Lvl1Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDBtn_9595Lvl1Objects1[k] = gdjs.LevelSelectCode.GDBtn_9595Lvl1Objects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDBtn_9595Lvl1Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.LevelSelectCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.LevelSelectCode.asyncCallback19794780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LevelSelectCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl2_Intro", false);
}
gdjs.LevelSelectCode.localVariables.length = 0;
}
gdjs.LevelSelectCode.idToCallbackMap.set(19794780, gdjs.LevelSelectCode.asyncCallback19794780);
gdjs.LevelSelectCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LevelSelectCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.LevelSelectCode.asyncCallback19794780(runtimeScene, asyncObjectsList)), 19794780, asyncObjectsList);
}
}

}


};gdjs.LevelSelectCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Btn_Lvl2"), gdjs.LevelSelectCode.GDBtn_9595Lvl2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDBtn_9595Lvl2Objects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDBtn_9595Lvl2Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDBtn_9595Lvl2Objects1[k] = gdjs.LevelSelectCode.GDBtn_9595Lvl2Objects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDBtn_9595Lvl2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.LevelSelectCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.LevelSelectCode.asyncCallback19795860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LevelSelectCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl3_Intro", false);
}
gdjs.LevelSelectCode.localVariables.length = 0;
}
gdjs.LevelSelectCode.idToCallbackMap.set(19795860, gdjs.LevelSelectCode.asyncCallback19795860);
gdjs.LevelSelectCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LevelSelectCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.LevelSelectCode.asyncCallback19795860(runtimeScene, asyncObjectsList)), 19795860, asyncObjectsList);
}
}

}


};gdjs.LevelSelectCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Btn_Lvl3"), gdjs.LevelSelectCode.GDBtn_9595Lvl3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDBtn_9595Lvl3Objects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDBtn_9595Lvl3Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDBtn_9595Lvl3Objects1[k] = gdjs.LevelSelectCode.GDBtn_9595Lvl3Objects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDBtn_9595Lvl3Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.LevelSelectCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.LevelSelectCode.asyncCallback19796916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LevelSelectCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl4_Intro", false);
}
gdjs.LevelSelectCode.localVariables.length = 0;
}
gdjs.LevelSelectCode.idToCallbackMap.set(19796916, gdjs.LevelSelectCode.asyncCallback19796916);
gdjs.LevelSelectCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LevelSelectCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.LevelSelectCode.asyncCallback19796916(runtimeScene, asyncObjectsList)), 19796916, asyncObjectsList);
}
}

}


};gdjs.LevelSelectCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Btn_Lvl4"), gdjs.LevelSelectCode.GDBtn_9595Lvl4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDBtn_9595Lvl4Objects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDBtn_9595Lvl4Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDBtn_9595Lvl4Objects1[k] = gdjs.LevelSelectCode.GDBtn_9595Lvl4Objects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDBtn_9595Lvl4Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.LevelSelectCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.LevelSelectCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeW"), gdjs.LevelSelectCode.GDFadeWObjects1);
{for(var i = 0, len = gdjs.LevelSelectCode.GDFadeWObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDFadeWObjects1[i].getBehavior("Opacity").setOpacity(gdjs.LevelSelectCode.GDFadeWObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
}

}


{


gdjs.LevelSelectCode.eventsList1(runtimeScene);
}


{


gdjs.LevelSelectCode.eventsList3(runtimeScene);
}


{


gdjs.LevelSelectCode.eventsList5(runtimeScene);
}


{


gdjs.LevelSelectCode.eventsList7(runtimeScene);
}


};

gdjs.LevelSelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelSelectCode.GDBGObjects1.length = 0;
gdjs.LevelSelectCode.GDBGObjects2.length = 0;
gdjs.LevelSelectCode.GDCloudsBGObjects1.length = 0;
gdjs.LevelSelectCode.GDCloudsBGObjects2.length = 0;
gdjs.LevelSelectCode.GDSelectLevelObjects1.length = 0;
gdjs.LevelSelectCode.GDSelectLevelObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595Lvl1Objects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595Lvl1Objects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595Lvl2Objects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595Lvl2Objects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595Lvl3Objects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595Lvl3Objects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595Lvl4Objects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595Lvl4Objects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595LockedObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595LockedObjects2.length = 0;
gdjs.LevelSelectCode.GDFadeWObjects1.length = 0;
gdjs.LevelSelectCode.GDFadeWObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595RightObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595RightObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595JumpObjects2.length = 0;

gdjs.LevelSelectCode.eventsList8(runtimeScene);
gdjs.LevelSelectCode.GDBGObjects1.length = 0;
gdjs.LevelSelectCode.GDBGObjects2.length = 0;
gdjs.LevelSelectCode.GDCloudsBGObjects1.length = 0;
gdjs.LevelSelectCode.GDCloudsBGObjects2.length = 0;
gdjs.LevelSelectCode.GDSelectLevelObjects1.length = 0;
gdjs.LevelSelectCode.GDSelectLevelObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595Lvl1Objects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595Lvl1Objects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595Lvl2Objects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595Lvl2Objects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595Lvl3Objects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595Lvl3Objects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595Lvl4Objects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595Lvl4Objects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595LockedObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595LockedObjects2.length = 0;
gdjs.LevelSelectCode.GDFadeWObjects1.length = 0;
gdjs.LevelSelectCode.GDFadeWObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595RightObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595RightObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595JumpObjects2.length = 0;


return;

}

gdjs['LevelSelectCode'] = gdjs.LevelSelectCode;
