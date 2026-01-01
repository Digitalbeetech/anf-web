gdjs.Lvl2_95ChampionCode = {};
gdjs.Lvl2_95ChampionCode.localVariables = [];
gdjs.Lvl2_95ChampionCode.idToCallbackMap = new Map();
gdjs.Lvl2_95ChampionCode.GDBGObjects1= [];
gdjs.Lvl2_95ChampionCode.GDBGObjects2= [];
gdjs.Lvl2_95ChampionCode.GDChampion_9595TxtObjects1= [];
gdjs.Lvl2_95ChampionCode.GDChampion_9595TxtObjects2= [];
gdjs.Lvl2_95ChampionCode.GDSunRaysObjects1= [];
gdjs.Lvl2_95ChampionCode.GDSunRaysObjects2= [];
gdjs.Lvl2_95ChampionCode.GDFadeWObjects1= [];
gdjs.Lvl2_95ChampionCode.GDFadeWObjects2= [];
gdjs.Lvl2_95ChampionCode.GDBtn_9595LeftObjects1= [];
gdjs.Lvl2_95ChampionCode.GDBtn_9595LeftObjects2= [];
gdjs.Lvl2_95ChampionCode.GDBtn_9595RightObjects1= [];
gdjs.Lvl2_95ChampionCode.GDBtn_9595RightObjects2= [];
gdjs.Lvl2_95ChampionCode.GDBtn_9595JumpObjects1= [];
gdjs.Lvl2_95ChampionCode.GDBtn_9595JumpObjects2= [];


gdjs.Lvl2_95ChampionCode.asyncCallback20580060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Lvl2_95ChampionCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl2_Rating", false);
}
gdjs.Lvl2_95ChampionCode.localVariables.length = 0;
}
gdjs.Lvl2_95ChampionCode.idToCallbackMap.set(20580060, gdjs.Lvl2_95ChampionCode.asyncCallback20580060);
gdjs.Lvl2_95ChampionCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Lvl2_95ChampionCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Lvl2_95ChampionCode.asyncCallback20580060(runtimeScene, asyncObjectsList)), 20580060, asyncObjectsList);
}
}

}


};gdjs.Lvl2_95ChampionCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeW"), gdjs.Lvl2_95ChampionCode.GDFadeWObjects1);
{for(var i = 0, len = gdjs.Lvl2_95ChampionCode.GDFadeWObjects1.length ;i < len;++i) {
    gdjs.Lvl2_95ChampionCode.GDFadeWObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl2_95ChampionCode.GDFadeWObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Lvl2_95ChampionCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Lvl2_95ChampionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lvl2_95ChampionCode.GDBGObjects1.length = 0;
gdjs.Lvl2_95ChampionCode.GDBGObjects2.length = 0;
gdjs.Lvl2_95ChampionCode.GDChampion_9595TxtObjects1.length = 0;
gdjs.Lvl2_95ChampionCode.GDChampion_9595TxtObjects2.length = 0;
gdjs.Lvl2_95ChampionCode.GDSunRaysObjects1.length = 0;
gdjs.Lvl2_95ChampionCode.GDSunRaysObjects2.length = 0;
gdjs.Lvl2_95ChampionCode.GDFadeWObjects1.length = 0;
gdjs.Lvl2_95ChampionCode.GDFadeWObjects2.length = 0;
gdjs.Lvl2_95ChampionCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl2_95ChampionCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl2_95ChampionCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl2_95ChampionCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl2_95ChampionCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl2_95ChampionCode.GDBtn_9595JumpObjects2.length = 0;

gdjs.Lvl2_95ChampionCode.eventsList1(runtimeScene);
gdjs.Lvl2_95ChampionCode.GDBGObjects1.length = 0;
gdjs.Lvl2_95ChampionCode.GDBGObjects2.length = 0;
gdjs.Lvl2_95ChampionCode.GDChampion_9595TxtObjects1.length = 0;
gdjs.Lvl2_95ChampionCode.GDChampion_9595TxtObjects2.length = 0;
gdjs.Lvl2_95ChampionCode.GDSunRaysObjects1.length = 0;
gdjs.Lvl2_95ChampionCode.GDSunRaysObjects2.length = 0;
gdjs.Lvl2_95ChampionCode.GDFadeWObjects1.length = 0;
gdjs.Lvl2_95ChampionCode.GDFadeWObjects2.length = 0;
gdjs.Lvl2_95ChampionCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl2_95ChampionCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl2_95ChampionCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl2_95ChampionCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl2_95ChampionCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl2_95ChampionCode.GDBtn_9595JumpObjects2.length = 0;


return;

}

gdjs['Lvl2_95ChampionCode'] = gdjs.Lvl2_95ChampionCode;
