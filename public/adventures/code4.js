gdjs.CharSelectCode = {};
gdjs.CharSelectCode.localVariables = [];
gdjs.CharSelectCode.idToCallbackMap = new Map();
gdjs.CharSelectCode.GDBGObjects1= [];
gdjs.CharSelectCode.GDBGObjects2= [];
gdjs.CharSelectCode.GDBG_9595CloudsObjects1= [];
gdjs.CharSelectCode.GDBG_9595CloudsObjects2= [];
gdjs.CharSelectCode.GDCharSelect_9595TitleObjects1= [];
gdjs.CharSelectCode.GDCharSelect_9595TitleObjects2= [];
gdjs.CharSelectCode.GDBtn_9595AbdullahObjects1= [];
gdjs.CharSelectCode.GDBtn_9595AbdullahObjects2= [];
gdjs.CharSelectCode.GDBtn_9595FatimaObjects1= [];
gdjs.CharSelectCode.GDBtn_9595FatimaObjects2= [];
gdjs.CharSelectCode.GDFadeWObjects1= [];
gdjs.CharSelectCode.GDFadeWObjects2= [];
gdjs.CharSelectCode.GDBtn_9595LeftObjects1= [];
gdjs.CharSelectCode.GDBtn_9595LeftObjects2= [];
gdjs.CharSelectCode.GDBtn_9595RightObjects1= [];
gdjs.CharSelectCode.GDBtn_9595RightObjects2= [];
gdjs.CharSelectCode.GDBtn_9595JumpObjects1= [];
gdjs.CharSelectCode.GDBtn_9595JumpObjects2= [];


gdjs.CharSelectCode.asyncCallback19763132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CharSelectCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelSelect", true);
}
gdjs.CharSelectCode.localVariables.length = 0;
}
gdjs.CharSelectCode.idToCallbackMap.set(19763132, gdjs.CharSelectCode.asyncCallback19763132);
gdjs.CharSelectCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CharSelectCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.CharSelectCode.asyncCallback19763132(runtimeScene, asyncObjectsList)), 19763132, asyncObjectsList);
}
}

}


};gdjs.CharSelectCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Btn_Abdullah"), gdjs.CharSelectCode.GDBtn_9595AbdullahObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharSelectCode.GDBtn_9595AbdullahObjects1.length;i<l;++i) {
    if ( gdjs.CharSelectCode.GDBtn_9595AbdullahObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharSelectCode.GDBtn_9595AbdullahObjects1[k] = gdjs.CharSelectCode.GDBtn_9595AbdullahObjects1[i];
        ++k;
    }
}
gdjs.CharSelectCode.GDBtn_9595AbdullahObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}

{ //Subevents
gdjs.CharSelectCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.CharSelectCode.asyncCallback19764420 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CharSelectCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelSelect", true);
}
gdjs.CharSelectCode.localVariables.length = 0;
}
gdjs.CharSelectCode.idToCallbackMap.set(19764420, gdjs.CharSelectCode.asyncCallback19764420);
gdjs.CharSelectCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CharSelectCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.CharSelectCode.asyncCallback19764420(runtimeScene, asyncObjectsList)), 19764420, asyncObjectsList);
}
}

}


};gdjs.CharSelectCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Btn_Fatima"), gdjs.CharSelectCode.GDBtn_9595FatimaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharSelectCode.GDBtn_9595FatimaObjects1.length;i<l;++i) {
    if ( gdjs.CharSelectCode.GDBtn_9595FatimaObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharSelectCode.GDBtn_9595FatimaObjects1[k] = gdjs.CharSelectCode.GDBtn_9595FatimaObjects1[i];
        ++k;
    }
}
gdjs.CharSelectCode.GDBtn_9595FatimaObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}

{ //Subevents
gdjs.CharSelectCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.CharSelectCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeW"), gdjs.CharSelectCode.GDFadeWObjects1);
{for(var i = 0, len = gdjs.CharSelectCode.GDFadeWObjects1.length ;i < len;++i) {
    gdjs.CharSelectCode.GDFadeWObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CharSelectCode.GDFadeWObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
}

}


{


gdjs.CharSelectCode.eventsList1(runtimeScene);
}


{


gdjs.CharSelectCode.eventsList3(runtimeScene);
}


};

gdjs.CharSelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CharSelectCode.GDBGObjects1.length = 0;
gdjs.CharSelectCode.GDBGObjects2.length = 0;
gdjs.CharSelectCode.GDBG_9595CloudsObjects1.length = 0;
gdjs.CharSelectCode.GDBG_9595CloudsObjects2.length = 0;
gdjs.CharSelectCode.GDCharSelect_9595TitleObjects1.length = 0;
gdjs.CharSelectCode.GDCharSelect_9595TitleObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595AbdullahObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595AbdullahObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595FatimaObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595FatimaObjects2.length = 0;
gdjs.CharSelectCode.GDFadeWObjects1.length = 0;
gdjs.CharSelectCode.GDFadeWObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595RightObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595RightObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595JumpObjects2.length = 0;

gdjs.CharSelectCode.eventsList4(runtimeScene);
gdjs.CharSelectCode.GDBGObjects1.length = 0;
gdjs.CharSelectCode.GDBGObjects2.length = 0;
gdjs.CharSelectCode.GDBG_9595CloudsObjects1.length = 0;
gdjs.CharSelectCode.GDBG_9595CloudsObjects2.length = 0;
gdjs.CharSelectCode.GDCharSelect_9595TitleObjects1.length = 0;
gdjs.CharSelectCode.GDCharSelect_9595TitleObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595AbdullahObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595AbdullahObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595FatimaObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595FatimaObjects2.length = 0;
gdjs.CharSelectCode.GDFadeWObjects1.length = 0;
gdjs.CharSelectCode.GDFadeWObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595RightObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595RightObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595JumpObjects2.length = 0;


return;

}

gdjs['CharSelectCode'] = gdjs.CharSelectCode;
