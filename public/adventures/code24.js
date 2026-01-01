gdjs.Lvl4_95FinishCode = {};
gdjs.Lvl4_95FinishCode.localVariables = [];
gdjs.Lvl4_95FinishCode.idToCallbackMap = new Map();
gdjs.Lvl4_95FinishCode.GDLvl1_9595IntroBGObjects1= [];
gdjs.Lvl4_95FinishCode.GDLvl1_9595IntroBGObjects2= [];
gdjs.Lvl4_95FinishCode.GDLvl1_9595IntroBGObjects3= [];
gdjs.Lvl4_95FinishCode.GDLvl1_9595IntroBGObjects4= [];
gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects1= [];
gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects2= [];
gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects3= [];
gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects4= [];
gdjs.Lvl4_95FinishCode.GDFadeWObjects1= [];
gdjs.Lvl4_95FinishCode.GDFadeWObjects2= [];
gdjs.Lvl4_95FinishCode.GDFadeWObjects3= [];
gdjs.Lvl4_95FinishCode.GDFadeWObjects4= [];
gdjs.Lvl4_95FinishCode.GDBtn_9595LeftObjects1= [];
gdjs.Lvl4_95FinishCode.GDBtn_9595LeftObjects2= [];
gdjs.Lvl4_95FinishCode.GDBtn_9595LeftObjects3= [];
gdjs.Lvl4_95FinishCode.GDBtn_9595LeftObjects4= [];
gdjs.Lvl4_95FinishCode.GDBtn_9595RightObjects1= [];
gdjs.Lvl4_95FinishCode.GDBtn_9595RightObjects2= [];
gdjs.Lvl4_95FinishCode.GDBtn_9595RightObjects3= [];
gdjs.Lvl4_95FinishCode.GDBtn_9595RightObjects4= [];
gdjs.Lvl4_95FinishCode.GDBtn_9595JumpObjects1= [];
gdjs.Lvl4_95FinishCode.GDBtn_9595JumpObjects2= [];
gdjs.Lvl4_95FinishCode.GDBtn_9595JumpObjects3= [];
gdjs.Lvl4_95FinishCode.GDBtn_9595JumpObjects4= [];


gdjs.Lvl4_95FinishCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl4_Champion", true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl4_Rating", true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl4_Rating", true);
}
}

}


};gdjs.Lvl4_95FinishCode.asyncCallback21304468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Lvl4_95FinishCode.localVariables);

{ //Subevents
gdjs.Lvl4_95FinishCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Lvl4_95FinishCode.localVariables.length = 0;
}
gdjs.Lvl4_95FinishCode.idToCallbackMap.set(21304468, gdjs.Lvl4_95FinishCode.asyncCallback21304468);
gdjs.Lvl4_95FinishCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Lvl4_95FinishCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Lvl4_95FinishCode.asyncCallback21304468(runtimeScene, asyncObjectsList)), 21304468, asyncObjectsList);
}
}

}


};gdjs.Lvl4_95FinishCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeW"), gdjs.Lvl4_95FinishCode.GDFadeWObjects1);
{for(var i = 0, len = gdjs.Lvl4_95FinishCode.GDFadeWObjects1.length ;i < len;++i) {
    gdjs.Lvl4_95FinishCode.GDFadeWObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl4_95FinishCode.GDFadeWObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_Proceed"), gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects1.length;i<l;++i) {
    if ( gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects1[k] = gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects1[i];
        ++k;
    }
}
gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21304004);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects1 */
{for(var i = 0, len = gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects1.length ;i < len;++i) {
    gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects1[i].Activate(true, null);
}
}

{ //Subevents
gdjs.Lvl4_95FinishCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Lvl4_95FinishCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lvl4_95FinishCode.GDLvl1_9595IntroBGObjects1.length = 0;
gdjs.Lvl4_95FinishCode.GDLvl1_9595IntroBGObjects2.length = 0;
gdjs.Lvl4_95FinishCode.GDLvl1_9595IntroBGObjects3.length = 0;
gdjs.Lvl4_95FinishCode.GDLvl1_9595IntroBGObjects4.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects1.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects2.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects3.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects4.length = 0;
gdjs.Lvl4_95FinishCode.GDFadeWObjects1.length = 0;
gdjs.Lvl4_95FinishCode.GDFadeWObjects2.length = 0;
gdjs.Lvl4_95FinishCode.GDFadeWObjects3.length = 0;
gdjs.Lvl4_95FinishCode.GDFadeWObjects4.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595LeftObjects4.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595RightObjects3.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595RightObjects4.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595JumpObjects3.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595JumpObjects4.length = 0;

gdjs.Lvl4_95FinishCode.eventsList2(runtimeScene);
gdjs.Lvl4_95FinishCode.GDLvl1_9595IntroBGObjects1.length = 0;
gdjs.Lvl4_95FinishCode.GDLvl1_9595IntroBGObjects2.length = 0;
gdjs.Lvl4_95FinishCode.GDLvl1_9595IntroBGObjects3.length = 0;
gdjs.Lvl4_95FinishCode.GDLvl1_9595IntroBGObjects4.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects1.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects2.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects3.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595ProceedObjects4.length = 0;
gdjs.Lvl4_95FinishCode.GDFadeWObjects1.length = 0;
gdjs.Lvl4_95FinishCode.GDFadeWObjects2.length = 0;
gdjs.Lvl4_95FinishCode.GDFadeWObjects3.length = 0;
gdjs.Lvl4_95FinishCode.GDFadeWObjects4.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595LeftObjects4.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595RightObjects3.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595RightObjects4.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595JumpObjects3.length = 0;
gdjs.Lvl4_95FinishCode.GDBtn_9595JumpObjects4.length = 0;


return;

}

gdjs['Lvl4_95FinishCode'] = gdjs.Lvl4_95FinishCode;
