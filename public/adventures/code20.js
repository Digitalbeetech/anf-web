gdjs.Lvl3_95RatingCode = {};
gdjs.Lvl3_95RatingCode.localVariables = [];
gdjs.Lvl3_95RatingCode.idToCallbackMap = new Map();
gdjs.Lvl3_95RatingCode.GDBGObjects1= [];
gdjs.Lvl3_95RatingCode.GDBGObjects2= [];
gdjs.Lvl3_95RatingCode.GDBGObjects3= [];
gdjs.Lvl3_95RatingCode.GDSunRaysObjects1= [];
gdjs.Lvl3_95RatingCode.GDSunRaysObjects2= [];
gdjs.Lvl3_95RatingCode.GDSunRaysObjects3= [];
gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects1= [];
gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects2= [];
gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects3= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595HomeObjects1= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595HomeObjects2= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595HomeObjects3= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595NextObjects1= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595NextObjects2= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595NextObjects3= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects2= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects3= [];
gdjs.Lvl3_95RatingCode.GDFadeWObjects1= [];
gdjs.Lvl3_95RatingCode.GDFadeWObjects2= [];
gdjs.Lvl3_95RatingCode.GDFadeWObjects3= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595LeftObjects1= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595LeftObjects2= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595LeftObjects3= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595RightObjects1= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595RightObjects2= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595RightObjects3= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595JumpObjects1= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595JumpObjects2= [];
gdjs.Lvl3_95RatingCode.GDBtn_9595JumpObjects3= [];


gdjs.Lvl3_95RatingCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rating_Title"), gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects2);
{for(var i = 0, len = gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects2.length ;i < len;++i) {
    gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects2[i].getBehavior("Animation").setAnimationName("3Star");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Btn_Retry"), gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects2);
gdjs.copyArray(runtimeScene.getObjects("Rating_Title"), gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects2);
{for(var i = 0, len = gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects2.length ;i < len;++i) {
    gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects2[i].getBehavior("Animation").setAnimationName("2Star");
}
}
{for(var i = 0, len = gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects2.length ;i < len;++i) {
    gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects2.length ;i < len;++i) {
    gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects2[i].Activate(true, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Btn_Retry"), gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rating_Title"), gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects1);
{for(var i = 0, len = gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects1.length ;i < len;++i) {
    gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects1[i].getBehavior("Animation").setAnimationName("1Star");
}
}
{for(var i = 0, len = gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1.length ;i < len;++i) {
    gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1.length ;i < len;++i) {
    gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1[i].Activate(true, null);
}
}
}

}


};gdjs.Lvl3_95RatingCode.asyncCallback20980468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Lvl3_95RatingCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
gdjs.Lvl3_95RatingCode.localVariables.length = 0;
}
gdjs.Lvl3_95RatingCode.idToCallbackMap.set(20980468, gdjs.Lvl3_95RatingCode.asyncCallback20980468);
gdjs.Lvl3_95RatingCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Lvl3_95RatingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Lvl3_95RatingCode.asyncCallback20980468(runtimeScene, asyncObjectsList)), 20980468, asyncObjectsList);
}
}

}


};gdjs.Lvl3_95RatingCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Btn_Home"), gdjs.Lvl3_95RatingCode.GDBtn_9595HomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lvl3_95RatingCode.GDBtn_9595HomeObjects1.length;i<l;++i) {
    if ( gdjs.Lvl3_95RatingCode.GDBtn_9595HomeObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Lvl3_95RatingCode.GDBtn_9595HomeObjects1[k] = gdjs.Lvl3_95RatingCode.GDBtn_9595HomeObjects1[i];
        ++k;
    }
}
gdjs.Lvl3_95RatingCode.GDBtn_9595HomeObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Lvl3_95RatingCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Lvl3_95RatingCode.asyncCallback20981484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Lvl3_95RatingCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl4_Intro", false);
}
gdjs.Lvl3_95RatingCode.localVariables.length = 0;
}
gdjs.Lvl3_95RatingCode.idToCallbackMap.set(20981484, gdjs.Lvl3_95RatingCode.asyncCallback20981484);
gdjs.Lvl3_95RatingCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Lvl3_95RatingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Lvl3_95RatingCode.asyncCallback20981484(runtimeScene, asyncObjectsList)), 20981484, asyncObjectsList);
}
}

}


};gdjs.Lvl3_95RatingCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Btn_Next"), gdjs.Lvl3_95RatingCode.GDBtn_9595NextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lvl3_95RatingCode.GDBtn_9595NextObjects1.length;i<l;++i) {
    if ( gdjs.Lvl3_95RatingCode.GDBtn_9595NextObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Lvl3_95RatingCode.GDBtn_9595NextObjects1[k] = gdjs.Lvl3_95RatingCode.GDBtn_9595NextObjects1[i];
        ++k;
    }
}
gdjs.Lvl3_95RatingCode.GDBtn_9595NextObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Lvl3_95RatingCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Lvl3_95RatingCode.asyncCallback20982580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Lvl3_95RatingCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl3_Intro", false);
}
gdjs.Lvl3_95RatingCode.localVariables.length = 0;
}
gdjs.Lvl3_95RatingCode.idToCallbackMap.set(20982580, gdjs.Lvl3_95RatingCode.asyncCallback20982580);
gdjs.Lvl3_95RatingCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Lvl3_95RatingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Lvl3_95RatingCode.asyncCallback20982580(runtimeScene, asyncObjectsList)), 20982580, asyncObjectsList);
}
}

}


};gdjs.Lvl3_95RatingCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Btn_Retry"), gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1.length;i<l;++i) {
    if ( gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1[k] = gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1[i];
        ++k;
    }
}
gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Lvl3_95RatingCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Lvl3_95RatingCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeW"), gdjs.Lvl3_95RatingCode.GDFadeWObjects1);
{for(var i = 0, len = gdjs.Lvl3_95RatingCode.GDFadeWObjects1.length ;i < len;++i) {
    gdjs.Lvl3_95RatingCode.GDFadeWObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl3_95RatingCode.GDFadeWObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Btn_Retry"), gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1);
{gdjs.adMob.loadInterstitial("ca-app-pub-6257695730616358/3681942679", "ca-app-pub-6257695730616358/7425255290", true);
}
{for(var i = 0, len = gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1.length ;i < len;++i) {
    gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1.length ;i < len;++i) {
    gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1[i].Activate(false, null);
}
}
}

}


{


gdjs.Lvl3_95RatingCode.eventsList0(runtimeScene);
}


{


gdjs.Lvl3_95RatingCode.eventsList2(runtimeScene);
}


{


gdjs.Lvl3_95RatingCode.eventsList4(runtimeScene);
}


{


gdjs.Lvl3_95RatingCode.eventsList6(runtimeScene);
}


};

gdjs.Lvl3_95RatingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lvl3_95RatingCode.GDBGObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDBGObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDBGObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDSunRaysObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDSunRaysObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDSunRaysObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595HomeObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595HomeObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595HomeObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595NextObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595NextObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595NextObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDFadeWObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDFadeWObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDFadeWObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595RightObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595JumpObjects3.length = 0;

gdjs.Lvl3_95RatingCode.eventsList7(runtimeScene);
gdjs.Lvl3_95RatingCode.GDBGObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDBGObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDBGObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDSunRaysObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDSunRaysObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDSunRaysObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDRating_9595TitleObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595HomeObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595HomeObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595HomeObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595NextObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595NextObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595NextObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595RetryObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDFadeWObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDFadeWObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDFadeWObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595RightObjects3.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.Lvl3_95RatingCode.GDBtn_9595JumpObjects3.length = 0;


return;

}

gdjs['Lvl3_95RatingCode'] = gdjs.Lvl3_95RatingCode;
