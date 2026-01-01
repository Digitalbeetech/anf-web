gdjs.Lvl4_95IntroCode = {};
gdjs.Lvl4_95IntroCode.localVariables = [];
gdjs.Lvl4_95IntroCode.idToCallbackMap = new Map();
gdjs.Lvl4_95IntroCode.GDLvl1_9595IntroBGObjects1= [];
gdjs.Lvl4_95IntroCode.GDLvl1_9595IntroBGObjects2= [];
gdjs.Lvl4_95IntroCode.GDLvl1_9595IntroBGObjects3= [];
gdjs.Lvl4_95IntroCode.GDMainCharacterObjects1= [];
gdjs.Lvl4_95IntroCode.GDMainCharacterObjects2= [];
gdjs.Lvl4_95IntroCode.GDMainCharacterObjects3= [];
gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1= [];
gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects2= [];
gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects3= [];
gdjs.Lvl4_95IntroCode.GDBtn_9595ProceedObjects1= [];
gdjs.Lvl4_95IntroCode.GDBtn_9595ProceedObjects2= [];
gdjs.Lvl4_95IntroCode.GDBtn_9595ProceedObjects3= [];
gdjs.Lvl4_95IntroCode.GDMessageObjects1= [];
gdjs.Lvl4_95IntroCode.GDMessageObjects2= [];
gdjs.Lvl4_95IntroCode.GDMessageObjects3= [];
gdjs.Lvl4_95IntroCode.GDBinocularsObjects1= [];
gdjs.Lvl4_95IntroCode.GDBinocularsObjects2= [];
gdjs.Lvl4_95IntroCode.GDBinocularsObjects3= [];
gdjs.Lvl4_95IntroCode.GDFadeWObjects1= [];
gdjs.Lvl4_95IntroCode.GDFadeWObjects2= [];
gdjs.Lvl4_95IntroCode.GDFadeWObjects3= [];
gdjs.Lvl4_95IntroCode.GDBtn_9595LeftObjects1= [];
gdjs.Lvl4_95IntroCode.GDBtn_9595LeftObjects2= [];
gdjs.Lvl4_95IntroCode.GDBtn_9595LeftObjects3= [];
gdjs.Lvl4_95IntroCode.GDBtn_9595RightObjects1= [];
gdjs.Lvl4_95IntroCode.GDBtn_9595RightObjects2= [];
gdjs.Lvl4_95IntroCode.GDBtn_9595RightObjects3= [];
gdjs.Lvl4_95IntroCode.GDBtn_9595JumpObjects1= [];
gdjs.Lvl4_95IntroCode.GDBtn_9595JumpObjects2= [];
gdjs.Lvl4_95IntroCode.GDBtn_9595JumpObjects3= [];


gdjs.Lvl4_95IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl4_95IntroCode.GDMainCharacterObjects2);
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDMainCharacterObjects2.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDMainCharacterObjects2[i].getBehavior("Animation").setAnimationName("Abdullah_Idle");
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
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl4_95IntroCode.GDMainCharacterObjects1);
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDMainCharacterObjects1[i].getBehavior("Animation").setAnimationName("Fatima_Idle");
}
}
}

}


};gdjs.Lvl4_95IntroCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21050180);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1 */
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


};gdjs.Lvl4_95IntroCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21051788);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1 */
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


};gdjs.Lvl4_95IntroCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21052356);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1 */
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


};gdjs.Lvl4_95IntroCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21053956);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1 */
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


};gdjs.Lvl4_95IntroCode.asyncCallback21056092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Lvl4_95IntroCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Binoculars"), gdjs.Lvl4_95IntroCode.GDBinocularsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.Lvl4_95IntroCode.GDMessageObjects2);
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDMessageObjects2.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDMessageObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDBinocularsObjects2.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDBinocularsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDMessageObjects2.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDMessageObjects2[i].getBehavior("Tween").addObjectOpacityTween2("MessageFade", 255, "linear", 0.2, false);
}
}
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDBinocularsObjects2.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDBinocularsObjects2[i].getBehavior("Tween").addObjectOpacityTween2("BinocularFade", 255, "linear", 0.2, false);
}
}
gdjs.Lvl4_95IntroCode.localVariables.length = 0;
}
gdjs.Lvl4_95IntroCode.idToCallbackMap.set(21056092, gdjs.Lvl4_95IntroCode.asyncCallback21056092);
gdjs.Lvl4_95IntroCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Lvl4_95IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Lvl4_95IntroCode.asyncCallback21056092(runtimeScene, asyncObjectsList)), 21056092, asyncObjectsList);
}
}

}


};gdjs.Lvl4_95IntroCode.asyncCallback21057644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Lvl4_95IntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level4", false);
}
gdjs.Lvl4_95IntroCode.localVariables.length = 0;
}
gdjs.Lvl4_95IntroCode.idToCallbackMap.set(21057644, gdjs.Lvl4_95IntroCode.asyncCallback21057644);
gdjs.Lvl4_95IntroCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Lvl4_95IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Lvl4_95IntroCode.asyncCallback21057644(runtimeScene, asyncObjectsList)), 21057644, asyncObjectsList);
}
}

}


};gdjs.Lvl4_95IntroCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Binoculars"), gdjs.Lvl4_95IntroCode.GDBinocularsObjects1);
gdjs.copyArray(runtimeScene.getObjects("FadeW"), gdjs.Lvl4_95IntroCode.GDFadeWObjects1);
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.Lvl4_95IntroCode.GDMessageObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1);
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDFadeWObjects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDFadeWObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl4_95IntroCode.GDFadeWObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDMessageObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl4_95IntroCode.GDMessageObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDBinocularsObjects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDBinocularsObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl4_95IntroCode.GDBinocularsObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Opacity").getOpacity() + (25));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Binoculars"), gdjs.Lvl4_95IntroCode.GDBinocularsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.Lvl4_95IntroCode.GDMessageObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1);
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1[i].hide();
}
}
{gdjs.adMob.showInterstitial();
}
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDMessageObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDBinocularsObjects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDBinocularsObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDMessageObjects1[i].getBehavior("Tween").addObjectOpacityTween2("MessageFade", 0, "linear", 0.01, false);
}
}
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDBinocularsObjects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDBinocularsObjects1[i].getBehavior("Tween").addObjectOpacityTween2("BinocularFade", 0, "linear", 0.01, false);
}
}

{ //Subevents
gdjs.Lvl4_95IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_Proceed"), gdjs.Lvl4_95IntroCode.GDBtn_9595ProceedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lvl4_95IntroCode.GDBtn_9595ProceedObjects1.length;i<l;++i) {
    if ( gdjs.Lvl4_95IntroCode.GDBtn_9595ProceedObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Lvl4_95IntroCode.GDBtn_9595ProceedObjects1[k] = gdjs.Lvl4_95IntroCode.GDBtn_9595ProceedObjects1[i];
        ++k;
    }
}
gdjs.Lvl4_95IntroCode.GDBtn_9595ProceedObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21048148);
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
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1);
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1[i].hide(false);
}
}

{ //Subevents
gdjs.Lvl4_95IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1);
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}

{ //Subevents
gdjs.Lvl4_95IntroCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1);
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}

{ //Subevents
gdjs.Lvl4_95IntroCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1);
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Animation").setAnimationIndex(3);
}
}

{ //Subevents
gdjs.Lvl4_95IntroCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl4_95IntroCode.GDMainCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1);
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Lvl4_95IntroCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Lvl4_95IntroCode.GDMainCharacterObjects1[i].hide();
}
}

{ //Subevents
gdjs.Lvl4_95IntroCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 6);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}

{ //Subevents
gdjs.Lvl4_95IntroCode.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.Lvl4_95IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lvl4_95IntroCode.GDLvl1_9595IntroBGObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDLvl1_9595IntroBGObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDLvl1_9595IntroBGObjects3.length = 0;
gdjs.Lvl4_95IntroCode.GDMainCharacterObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDMainCharacterObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDMainCharacterObjects3.length = 0;
gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1.length = 0;
gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects2.length = 0;
gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects3.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595ProceedObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595ProceedObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595ProceedObjects3.length = 0;
gdjs.Lvl4_95IntroCode.GDMessageObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDMessageObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDMessageObjects3.length = 0;
gdjs.Lvl4_95IntroCode.GDBinocularsObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDBinocularsObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDBinocularsObjects3.length = 0;
gdjs.Lvl4_95IntroCode.GDFadeWObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDFadeWObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDFadeWObjects3.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595RightObjects3.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595JumpObjects3.length = 0;

gdjs.Lvl4_95IntroCode.eventsList7(runtimeScene);
gdjs.Lvl4_95IntroCode.GDLvl1_9595IntroBGObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDLvl1_9595IntroBGObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDLvl1_9595IntroBGObjects3.length = 0;
gdjs.Lvl4_95IntroCode.GDMainCharacterObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDMainCharacterObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDMainCharacterObjects3.length = 0;
gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects1.length = 0;
gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects2.length = 0;
gdjs.Lvl4_95IntroCode.GDSpeechBubble1Objects3.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595ProceedObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595ProceedObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595ProceedObjects3.length = 0;
gdjs.Lvl4_95IntroCode.GDMessageObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDMessageObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDMessageObjects3.length = 0;
gdjs.Lvl4_95IntroCode.GDBinocularsObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDBinocularsObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDBinocularsObjects3.length = 0;
gdjs.Lvl4_95IntroCode.GDFadeWObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDFadeWObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDFadeWObjects3.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595RightObjects3.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.Lvl4_95IntroCode.GDBtn_9595JumpObjects3.length = 0;


return;

}

gdjs['Lvl4_95IntroCode'] = gdjs.Lvl4_95IntroCode;
