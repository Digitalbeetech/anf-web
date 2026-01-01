gdjs.Lvl4_95ChampionCode = {};
gdjs.Lvl4_95ChampionCode.localVariables = [];
gdjs.Lvl4_95ChampionCode.idToCallbackMap = new Map();
gdjs.Lvl4_95ChampionCode.GDBGObjects1= [];
gdjs.Lvl4_95ChampionCode.GDBGObjects2= [];
gdjs.Lvl4_95ChampionCode.GDChampion_9595TxtObjects1= [];
gdjs.Lvl4_95ChampionCode.GDChampion_9595TxtObjects2= [];
gdjs.Lvl4_95ChampionCode.GDSunRaysObjects1= [];
gdjs.Lvl4_95ChampionCode.GDSunRaysObjects2= [];
gdjs.Lvl4_95ChampionCode.GDFadeWObjects1= [];
gdjs.Lvl4_95ChampionCode.GDFadeWObjects2= [];
gdjs.Lvl4_95ChampionCode.GDBtn_9595LeftObjects1= [];
gdjs.Lvl4_95ChampionCode.GDBtn_9595LeftObjects2= [];
gdjs.Lvl4_95ChampionCode.GDBtn_9595RightObjects1= [];
gdjs.Lvl4_95ChampionCode.GDBtn_9595RightObjects2= [];
gdjs.Lvl4_95ChampionCode.GDBtn_9595JumpObjects1= [];
gdjs.Lvl4_95ChampionCode.GDBtn_9595JumpObjects2= [];


gdjs.Lvl4_95ChampionCode.asyncCallback21325684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Lvl4_95ChampionCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl4_Rating", false);
}
gdjs.Lvl4_95ChampionCode.localVariables.length = 0;
}
gdjs.Lvl4_95ChampionCode.idToCallbackMap.set(21325684, gdjs.Lvl4_95ChampionCode.asyncCallback21325684);
gdjs.Lvl4_95ChampionCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Lvl4_95ChampionCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Lvl4_95ChampionCode.asyncCallback21325684(runtimeScene, asyncObjectsList)), 21325684, asyncObjectsList);
}
}

}


};gdjs.Lvl4_95ChampionCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeW"), gdjs.Lvl4_95ChampionCode.GDFadeWObjects1);
{for(var i = 0, len = gdjs.Lvl4_95ChampionCode.GDFadeWObjects1.length ;i < len;++i) {
    gdjs.Lvl4_95ChampionCode.GDFadeWObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl4_95ChampionCode.GDFadeWObjects1[i].getBehavior("Opacity").getOpacity() - (5));
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
gdjs.Lvl4_95ChampionCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Lvl4_95ChampionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lvl4_95ChampionCode.GDBGObjects1.length = 0;
gdjs.Lvl4_95ChampionCode.GDBGObjects2.length = 0;
gdjs.Lvl4_95ChampionCode.GDChampion_9595TxtObjects1.length = 0;
gdjs.Lvl4_95ChampionCode.GDChampion_9595TxtObjects2.length = 0;
gdjs.Lvl4_95ChampionCode.GDSunRaysObjects1.length = 0;
gdjs.Lvl4_95ChampionCode.GDSunRaysObjects2.length = 0;
gdjs.Lvl4_95ChampionCode.GDFadeWObjects1.length = 0;
gdjs.Lvl4_95ChampionCode.GDFadeWObjects2.length = 0;
gdjs.Lvl4_95ChampionCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl4_95ChampionCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl4_95ChampionCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl4_95ChampionCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl4_95ChampionCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl4_95ChampionCode.GDBtn_9595JumpObjects2.length = 0;

gdjs.Lvl4_95ChampionCode.eventsList1(runtimeScene);
gdjs.Lvl4_95ChampionCode.GDBGObjects1.length = 0;
gdjs.Lvl4_95ChampionCode.GDBGObjects2.length = 0;
gdjs.Lvl4_95ChampionCode.GDChampion_9595TxtObjects1.length = 0;
gdjs.Lvl4_95ChampionCode.GDChampion_9595TxtObjects2.length = 0;
gdjs.Lvl4_95ChampionCode.GDSunRaysObjects1.length = 0;
gdjs.Lvl4_95ChampionCode.GDSunRaysObjects2.length = 0;
gdjs.Lvl4_95ChampionCode.GDFadeWObjects1.length = 0;
gdjs.Lvl4_95ChampionCode.GDFadeWObjects2.length = 0;
gdjs.Lvl4_95ChampionCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl4_95ChampionCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl4_95ChampionCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl4_95ChampionCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl4_95ChampionCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl4_95ChampionCode.GDBtn_9595JumpObjects2.length = 0;


return;

}

gdjs['Lvl4_95ChampionCode'] = gdjs.Lvl4_95ChampionCode;
