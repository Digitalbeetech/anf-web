gdjs.Lvl3_95ChampionCode = {};
gdjs.Lvl3_95ChampionCode.localVariables = [];
gdjs.Lvl3_95ChampionCode.idToCallbackMap = new Map();
gdjs.Lvl3_95ChampionCode.GDBGObjects1= [];
gdjs.Lvl3_95ChampionCode.GDBGObjects2= [];
gdjs.Lvl3_95ChampionCode.GDChampion_9595TxtObjects1= [];
gdjs.Lvl3_95ChampionCode.GDChampion_9595TxtObjects2= [];
gdjs.Lvl3_95ChampionCode.GDSunRaysObjects1= [];
gdjs.Lvl3_95ChampionCode.GDSunRaysObjects2= [];
gdjs.Lvl3_95ChampionCode.GDFadeWObjects1= [];
gdjs.Lvl3_95ChampionCode.GDFadeWObjects2= [];
gdjs.Lvl3_95ChampionCode.GDBtn_9595LeftObjects1= [];
gdjs.Lvl3_95ChampionCode.GDBtn_9595LeftObjects2= [];
gdjs.Lvl3_95ChampionCode.GDBtn_9595RightObjects1= [];
gdjs.Lvl3_95ChampionCode.GDBtn_9595RightObjects2= [];
gdjs.Lvl3_95ChampionCode.GDBtn_9595JumpObjects1= [];
gdjs.Lvl3_95ChampionCode.GDBtn_9595JumpObjects2= [];


gdjs.Lvl3_95ChampionCode.asyncCallback20954284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Lvl3_95ChampionCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl3_Rating", false);
}
gdjs.Lvl3_95ChampionCode.localVariables.length = 0;
}
gdjs.Lvl3_95ChampionCode.idToCallbackMap.set(20954284, gdjs.Lvl3_95ChampionCode.asyncCallback20954284);
gdjs.Lvl3_95ChampionCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Lvl3_95ChampionCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Lvl3_95ChampionCode.asyncCallback20954284(runtimeScene, asyncObjectsList)), 20954284, asyncObjectsList);
}
}

}


};gdjs.Lvl3_95ChampionCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeW"), gdjs.Lvl3_95ChampionCode.GDFadeWObjects1);
{for(var i = 0, len = gdjs.Lvl3_95ChampionCode.GDFadeWObjects1.length ;i < len;++i) {
    gdjs.Lvl3_95ChampionCode.GDFadeWObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl3_95ChampionCode.GDFadeWObjects1[i].getBehavior("Opacity").getOpacity() - (5));
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
gdjs.Lvl3_95ChampionCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Lvl3_95ChampionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lvl3_95ChampionCode.GDBGObjects1.length = 0;
gdjs.Lvl3_95ChampionCode.GDBGObjects2.length = 0;
gdjs.Lvl3_95ChampionCode.GDChampion_9595TxtObjects1.length = 0;
gdjs.Lvl3_95ChampionCode.GDChampion_9595TxtObjects2.length = 0;
gdjs.Lvl3_95ChampionCode.GDSunRaysObjects1.length = 0;
gdjs.Lvl3_95ChampionCode.GDSunRaysObjects2.length = 0;
gdjs.Lvl3_95ChampionCode.GDFadeWObjects1.length = 0;
gdjs.Lvl3_95ChampionCode.GDFadeWObjects2.length = 0;
gdjs.Lvl3_95ChampionCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl3_95ChampionCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl3_95ChampionCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl3_95ChampionCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl3_95ChampionCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl3_95ChampionCode.GDBtn_9595JumpObjects2.length = 0;

gdjs.Lvl3_95ChampionCode.eventsList1(runtimeScene);
gdjs.Lvl3_95ChampionCode.GDBGObjects1.length = 0;
gdjs.Lvl3_95ChampionCode.GDBGObjects2.length = 0;
gdjs.Lvl3_95ChampionCode.GDChampion_9595TxtObjects1.length = 0;
gdjs.Lvl3_95ChampionCode.GDChampion_9595TxtObjects2.length = 0;
gdjs.Lvl3_95ChampionCode.GDSunRaysObjects1.length = 0;
gdjs.Lvl3_95ChampionCode.GDSunRaysObjects2.length = 0;
gdjs.Lvl3_95ChampionCode.GDFadeWObjects1.length = 0;
gdjs.Lvl3_95ChampionCode.GDFadeWObjects2.length = 0;
gdjs.Lvl3_95ChampionCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl3_95ChampionCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl3_95ChampionCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl3_95ChampionCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl3_95ChampionCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl3_95ChampionCode.GDBtn_9595JumpObjects2.length = 0;


return;

}

gdjs['Lvl3_95ChampionCode'] = gdjs.Lvl3_95ChampionCode;
