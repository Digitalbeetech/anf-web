gdjs.Lvl3_95IntroCode = {};
gdjs.Lvl3_95IntroCode.localVariables = [];
gdjs.Lvl3_95IntroCode.idToCallbackMap = new Map();
gdjs.Lvl3_95IntroCode.GDLvl1_9595IntroBGObjects1= [];
gdjs.Lvl3_95IntroCode.GDLvl1_9595IntroBGObjects2= [];
gdjs.Lvl3_95IntroCode.GDLvl1_9595IntroBGObjects3= [];
gdjs.Lvl3_95IntroCode.GDMainCharacterObjects1= [];
gdjs.Lvl3_95IntroCode.GDMainCharacterObjects2= [];
gdjs.Lvl3_95IntroCode.GDMainCharacterObjects3= [];
gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1= [];
gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects2= [];
gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects3= [];
gdjs.Lvl3_95IntroCode.GDBtn_9595ProceedObjects1= [];
gdjs.Lvl3_95IntroCode.GDBtn_9595ProceedObjects2= [];
gdjs.Lvl3_95IntroCode.GDBtn_9595ProceedObjects3= [];
gdjs.Lvl3_95IntroCode.GDMessageObjects1= [];
gdjs.Lvl3_95IntroCode.GDMessageObjects2= [];
gdjs.Lvl3_95IntroCode.GDMessageObjects3= [];
gdjs.Lvl3_95IntroCode.GDDatesObjects1= [];
gdjs.Lvl3_95IntroCode.GDDatesObjects2= [];
gdjs.Lvl3_95IntroCode.GDDatesObjects3= [];
gdjs.Lvl3_95IntroCode.GDFadeWObjects1= [];
gdjs.Lvl3_95IntroCode.GDFadeWObjects2= [];
gdjs.Lvl3_95IntroCode.GDFadeWObjects3= [];
gdjs.Lvl3_95IntroCode.GDBtn_9595LeftObjects1= [];
gdjs.Lvl3_95IntroCode.GDBtn_9595LeftObjects2= [];
gdjs.Lvl3_95IntroCode.GDBtn_9595LeftObjects3= [];
gdjs.Lvl3_95IntroCode.GDBtn_9595RightObjects1= [];
gdjs.Lvl3_95IntroCode.GDBtn_9595RightObjects2= [];
gdjs.Lvl3_95IntroCode.GDBtn_9595RightObjects3= [];
gdjs.Lvl3_95IntroCode.GDBtn_9595JumpObjects1= [];
gdjs.Lvl3_95IntroCode.GDBtn_9595JumpObjects2= [];
gdjs.Lvl3_95IntroCode.GDBtn_9595JumpObjects3= [];


gdjs.Lvl3_95IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl3_95IntroCode.GDMainCharacterObjects2);
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDMainCharacterObjects2.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDMainCharacterObjects2[i].getBehavior("Animation").setAnimationName("Abdullah_Idle");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl3_95IntroCode.GDMainCharacterObjects1);
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDMainCharacterObjects1[i].getBehavior("Animation").setAnimationName("Fatima_Idle");
}
}
}

}


};gdjs.Lvl3_95IntroCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20675540);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1 */
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


};gdjs.Lvl3_95IntroCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20677148);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1 */
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


};gdjs.Lvl3_95IntroCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20677716);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1 */
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


};gdjs.Lvl3_95IntroCode.asyncCallback20679844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Lvl3_95IntroCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Dates"), gdjs.Lvl3_95IntroCode.GDDatesObjects2);
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.Lvl3_95IntroCode.GDMessageObjects2);
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDMessageObjects2.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDMessageObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDDatesObjects2.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDDatesObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDMessageObjects2.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDMessageObjects2[i].getBehavior("Tween").addObjectOpacityTween2("MessageFade", 255, "linear", 0.2, false);
}
}
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDDatesObjects2.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDDatesObjects2[i].getBehavior("Tween").addObjectOpacityTween2("DateFade", 255, "linear", 0.2, false);
}
}
gdjs.Lvl3_95IntroCode.localVariables.length = 0;
}
gdjs.Lvl3_95IntroCode.idToCallbackMap.set(20679844, gdjs.Lvl3_95IntroCode.asyncCallback20679844);
gdjs.Lvl3_95IntroCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Lvl3_95IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Lvl3_95IntroCode.asyncCallback20679844(runtimeScene, asyncObjectsList)), 20679844, asyncObjectsList);
}
}

}


};gdjs.Lvl3_95IntroCode.asyncCallback20681372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Lvl3_95IntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}
gdjs.Lvl3_95IntroCode.localVariables.length = 0;
}
gdjs.Lvl3_95IntroCode.idToCallbackMap.set(20681372, gdjs.Lvl3_95IntroCode.asyncCallback20681372);
gdjs.Lvl3_95IntroCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Lvl3_95IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Lvl3_95IntroCode.asyncCallback20681372(runtimeScene, asyncObjectsList)), 20681372, asyncObjectsList);
}
}

}


};gdjs.Lvl3_95IntroCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeW"), gdjs.Lvl3_95IntroCode.GDFadeWObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1);
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDFadeWObjects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDFadeWObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl3_95IntroCode.GDFadeWObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Opacity").getOpacity() + (25));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dates"), gdjs.Lvl3_95IntroCode.GDDatesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.Lvl3_95IntroCode.GDMessageObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1);
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1[i].hide();
}
}
{gdjs.adMob.showInterstitial();
}
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDMessageObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDDatesObjects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDDatesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDMessageObjects1[i].getBehavior("Tween").addObjectOpacityTween2("MessageFade", 0, "linear", 0.01, false);
}
}
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDDatesObjects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDDatesObjects1[i].getBehavior("Tween").addObjectOpacityTween2("DateFade", 0, "linear", 0.01, false);
}
}

{ //Subevents
gdjs.Lvl3_95IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_Proceed"), gdjs.Lvl3_95IntroCode.GDBtn_9595ProceedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lvl3_95IntroCode.GDBtn_9595ProceedObjects1.length;i<l;++i) {
    if ( gdjs.Lvl3_95IntroCode.GDBtn_9595ProceedObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Lvl3_95IntroCode.GDBtn_9595ProceedObjects1[k] = gdjs.Lvl3_95IntroCode.GDBtn_9595ProceedObjects1[i];
        ++k;
    }
}
gdjs.Lvl3_95IntroCode.GDBtn_9595ProceedObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20673508);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1);
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1[i].hide(false);
}
}

{ //Subevents
gdjs.Lvl3_95IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1);
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}

{ //Subevents
gdjs.Lvl3_95IntroCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1);
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}

{ //Subevents
gdjs.Lvl3_95IntroCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl3_95IntroCode.GDMainCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1);
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Lvl3_95IntroCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Lvl3_95IntroCode.GDMainCharacterObjects1[i].hide();
}
}

{ //Subevents
gdjs.Lvl3_95IntroCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 5);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}

{ //Subevents
gdjs.Lvl3_95IntroCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.Lvl3_95IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lvl3_95IntroCode.GDLvl1_9595IntroBGObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDLvl1_9595IntroBGObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDLvl1_9595IntroBGObjects3.length = 0;
gdjs.Lvl3_95IntroCode.GDMainCharacterObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDMainCharacterObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDMainCharacterObjects3.length = 0;
gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1.length = 0;
gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects2.length = 0;
gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects3.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595ProceedObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595ProceedObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595ProceedObjects3.length = 0;
gdjs.Lvl3_95IntroCode.GDMessageObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDMessageObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDMessageObjects3.length = 0;
gdjs.Lvl3_95IntroCode.GDDatesObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDDatesObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDDatesObjects3.length = 0;
gdjs.Lvl3_95IntroCode.GDFadeWObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDFadeWObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDFadeWObjects3.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595RightObjects3.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595JumpObjects3.length = 0;

gdjs.Lvl3_95IntroCode.eventsList6(runtimeScene);
gdjs.Lvl3_95IntroCode.GDLvl1_9595IntroBGObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDLvl1_9595IntroBGObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDLvl1_9595IntroBGObjects3.length = 0;
gdjs.Lvl3_95IntroCode.GDMainCharacterObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDMainCharacterObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDMainCharacterObjects3.length = 0;
gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects1.length = 0;
gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects2.length = 0;
gdjs.Lvl3_95IntroCode.GDSpeechBubble1Objects3.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595ProceedObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595ProceedObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595ProceedObjects3.length = 0;
gdjs.Lvl3_95IntroCode.GDMessageObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDMessageObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDMessageObjects3.length = 0;
gdjs.Lvl3_95IntroCode.GDDatesObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDDatesObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDDatesObjects3.length = 0;
gdjs.Lvl3_95IntroCode.GDFadeWObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDFadeWObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDFadeWObjects3.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595RightObjects3.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.Lvl3_95IntroCode.GDBtn_9595JumpObjects3.length = 0;


return;

}

gdjs['Lvl3_95IntroCode'] = gdjs.Lvl3_95IntroCode;
