gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.idToCallbackMap = new Map();
gdjs.IntroCode.GDRotateObjects1= [];
gdjs.IntroCode.GDRotateObjects2= [];
gdjs.IntroCode.GDRotateObjects3= [];
gdjs.IntroCode.GDFadeB_9595ExitObjects1= [];
gdjs.IntroCode.GDFadeB_9595ExitObjects2= [];
gdjs.IntroCode.GDFadeB_9595ExitObjects3= [];
gdjs.IntroCode.GDFadeWObjects1= [];
gdjs.IntroCode.GDFadeWObjects2= [];
gdjs.IntroCode.GDFadeWObjects3= [];
gdjs.IntroCode.GDBtn_9595LeftObjects1= [];
gdjs.IntroCode.GDBtn_9595LeftObjects2= [];
gdjs.IntroCode.GDBtn_9595LeftObjects3= [];
gdjs.IntroCode.GDBtn_9595RightObjects1= [];
gdjs.IntroCode.GDBtn_9595RightObjects2= [];
gdjs.IntroCode.GDBtn_9595RightObjects3= [];
gdjs.IntroCode.GDBtn_9595JumpObjects1= [];
gdjs.IntroCode.GDBtn_9595JumpObjects2= [];
gdjs.IntroCode.GDBtn_9595JumpObjects3= [];


gdjs.IntroCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeB_Exit"), gdjs.IntroCode.GDFadeB_9595ExitObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDFadeB_9595ExitObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDFadeB_9595ExitObjects2[i].getBehavior("Opacity").setOpacity(gdjs.IntroCode.GDFadeB_9595ExitObjects2[i].getBehavior("Opacity").getOpacity() + (5));
}
}
}

}


};gdjs.IntroCode.asyncCallback19674628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);

{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.idToCallbackMap.set(19674628, gdjs.IntroCode.asyncCallback19674628);
gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.IntroCode.asyncCallback19674628(runtimeScene, asyncObjectsList)), 19674628, asyncObjectsList);
}
}

}


};gdjs.IntroCode.asyncCallback19675772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SidrIntro", false);
}
gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.idToCallbackMap.set(19675772, gdjs.IntroCode.asyncCallback19675772);
gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.IntroCode.asyncCallback19675772(runtimeScene, asyncObjectsList)), 19675772, asyncObjectsList);
}
}

}


};gdjs.IntroCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeB_Exit"), gdjs.IntroCode.GDFadeB_9595ExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rotate"), gdjs.IntroCode.GDRotateObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDRotateObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDRotateObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDFadeB_9595ExitObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDFadeB_9595ExitObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Rotate"), gdjs.IntroCode.GDRotateObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDRotateObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDRotateObjects1[i].getBehavior("Opacity").setOpacity(gdjs.IntroCode.GDRotateObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rotate"), gdjs.IntroCode.GDRotateObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDRotateObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDRotateObjects1[i].getBehavior("Opacity").getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDRotateObjects1[k] = gdjs.IntroCode.GDRotateObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDRotateObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FadeB_Exit"), gdjs.IntroCode.GDFadeB_9595ExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDFadeB_9595ExitObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDFadeB_9595ExitObjects1[i].getBehavior("Opacity").getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDFadeB_9595ExitObjects1[k] = gdjs.IntroCode.GDFadeB_9595ExitObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDFadeB_9595ExitObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.IntroCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDRotateObjects1.length = 0;
gdjs.IntroCode.GDRotateObjects2.length = 0;
gdjs.IntroCode.GDRotateObjects3.length = 0;
gdjs.IntroCode.GDFadeB_9595ExitObjects1.length = 0;
gdjs.IntroCode.GDFadeB_9595ExitObjects2.length = 0;
gdjs.IntroCode.GDFadeB_9595ExitObjects3.length = 0;
gdjs.IntroCode.GDFadeWObjects1.length = 0;
gdjs.IntroCode.GDFadeWObjects2.length = 0;
gdjs.IntroCode.GDFadeWObjects3.length = 0;
gdjs.IntroCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.IntroCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.IntroCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.IntroCode.GDBtn_9595RightObjects1.length = 0;
gdjs.IntroCode.GDBtn_9595RightObjects2.length = 0;
gdjs.IntroCode.GDBtn_9595RightObjects3.length = 0;
gdjs.IntroCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.IntroCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.IntroCode.GDBtn_9595JumpObjects3.length = 0;

gdjs.IntroCode.eventsList3(runtimeScene);
gdjs.IntroCode.GDRotateObjects1.length = 0;
gdjs.IntroCode.GDRotateObjects2.length = 0;
gdjs.IntroCode.GDRotateObjects3.length = 0;
gdjs.IntroCode.GDFadeB_9595ExitObjects1.length = 0;
gdjs.IntroCode.GDFadeB_9595ExitObjects2.length = 0;
gdjs.IntroCode.GDFadeB_9595ExitObjects3.length = 0;
gdjs.IntroCode.GDFadeWObjects1.length = 0;
gdjs.IntroCode.GDFadeWObjects2.length = 0;
gdjs.IntroCode.GDFadeWObjects3.length = 0;
gdjs.IntroCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.IntroCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.IntroCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.IntroCode.GDBtn_9595RightObjects1.length = 0;
gdjs.IntroCode.GDBtn_9595RightObjects2.length = 0;
gdjs.IntroCode.GDBtn_9595RightObjects3.length = 0;
gdjs.IntroCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.IntroCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.IntroCode.GDBtn_9595JumpObjects3.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
