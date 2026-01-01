gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.idToCallbackMap = new Map();
gdjs.IntroCode.GDIntroLogoObjects1= [];
gdjs.IntroCode.GDIntroLogoObjects2= [];
gdjs.IntroCode.GDTileMap_9595TerrainBGObjects1= [];
gdjs.IntroCode.GDTileMap_9595TerrainBGObjects2= [];
gdjs.IntroCode.GDTileMap_9595DecorationMGObjects1= [];
gdjs.IntroCode.GDTileMap_9595DecorationMGObjects2= [];
gdjs.IntroCode.GDPlayerSpawnerObjects1= [];
gdjs.IntroCode.GDPlayerSpawnerObjects2= [];
gdjs.IntroCode.GDHero_9595GrayObjects1= [];
gdjs.IntroCode.GDHero_9595GrayObjects2= [];
gdjs.IntroCode.GDDoorMGObjects1= [];
gdjs.IntroCode.GDDoorMGObjects2= [];
gdjs.IntroCode.GDWaterObjects1= [];
gdjs.IntroCode.GDWaterObjects2= [];
gdjs.IntroCode.GDWaterReflectionObjects1= [];
gdjs.IntroCode.GDWaterReflectionObjects2= [];
gdjs.IntroCode.GDWaterBottomObjects1= [];
gdjs.IntroCode.GDWaterBottomObjects2= [];
gdjs.IntroCode.GDSpikesObjects1= [];
gdjs.IntroCode.GDSpikesObjects2= [];
gdjs.IntroCode.GDBoxObjects1= [];
gdjs.IntroCode.GDBoxObjects2= [];
gdjs.IntroCode.GDHero_9595RedObjects1= [];
gdjs.IntroCode.GDHero_9595RedObjects2= [];
gdjs.IntroCode.GDtransition2Objects1= [];
gdjs.IntroCode.GDtransition2Objects2= [];
gdjs.IntroCode.GDDustObjects1= [];
gdjs.IntroCode.GDDustObjects2= [];
gdjs.IntroCode.GDJumpDustObjects1= [];
gdjs.IntroCode.GDJumpDustObjects2= [];
gdjs.IntroCode.GDFallDustObjects1= [];
gdjs.IntroCode.GDFallDustObjects2= [];
gdjs.IntroCode.GDFireObjects1= [];
gdjs.IntroCode.GDFireObjects2= [];
gdjs.IntroCode.GDDoorClosingObjects1= [];
gdjs.IntroCode.GDDoorClosingObjects2= [];
gdjs.IntroCode.GDBtn_9595LeftObjects1= [];
gdjs.IntroCode.GDBtn_9595LeftObjects2= [];
gdjs.IntroCode.GDBtn_9595RightObjects1= [];
gdjs.IntroCode.GDBtn_9595RightObjects2= [];
gdjs.IntroCode.GDBtn_9595JumpObjects1= [];
gdjs.IntroCode.GDBtn_9595JumpObjects2= [];
gdjs.IntroCode.GDBtn_9595DownObjects1= [];
gdjs.IntroCode.GDBtn_9595DownObjects2= [];
gdjs.IntroCode.GDBtn_9595HomeObjects1= [];
gdjs.IntroCode.GDBtn_9595HomeObjects2= [];
gdjs.IntroCode.GDtransitionObjects1= [];
gdjs.IntroCode.GDtransitionObjects2= [];
gdjs.IntroCode.GDPickup_9595DaimondObjects1= [];
gdjs.IntroCode.GDPickup_9595DaimondObjects2= [];
gdjs.IntroCode.GDUI_9595DaimondObjects1= [];
gdjs.IntroCode.GDUI_9595DaimondObjects2= [];
gdjs.IntroCode.GDUI_9595DaimondsCollectedObjects1= [];
gdjs.IntroCode.GDUI_9595DaimondsCollectedObjects2= [];
gdjs.IntroCode.GDDaimond_9595ParticleObjects1= [];
gdjs.IntroCode.GDDaimond_9595ParticleObjects2= [];
gdjs.IntroCode.GDLevelName3Objects1= [];
gdjs.IntroCode.GDLevelName3Objects2= [];


gdjs.IntroCode.asyncCallback32015916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("IntroLogo"), gdjs.IntroCode.GDIntroLogoObjects2);

{for(var i = 0, len = gdjs.IntroCode.GDIntroLogoObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDIntroLogoObjects2[i].getBehavior("Tween").addObjectOpacityTween2("IntroLogo", 255, "easeInOutQuad", 2, false);
}
}
gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.idToCallbackMap.set(32015916, gdjs.IntroCode.asyncCallback32015916);
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
for (const obj of gdjs.IntroCode.GDIntroLogoObjects1) asyncObjectsList.addObject("IntroLogo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.IntroCode.asyncCallback32015916(runtimeScene, asyncObjectsList)), 32015916, asyncObjectsList);
}
}

}


};gdjs.IntroCode.asyncCallback31702476 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameIntro", false);
}
gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.idToCallbackMap.set(31702476, gdjs.IntroCode.asyncCallback31702476);
gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.IntroCode.asyncCallback31702476(runtimeScene, asyncObjectsList)), 31702476, asyncObjectsList);
}
}

}


};gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IntroLogo"), gdjs.IntroCode.GDIntroLogoObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDIntroLogoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntroLogoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IntroLogo"), gdjs.IntroCode.GDIntroLogoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDIntroLogoObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDIntroLogoObjects1[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDIntroLogoObjects1[k] = gdjs.IntroCode.GDIntroLogoObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDIntroLogoObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDIntroLogoObjects1.length = 0;
gdjs.IntroCode.GDIntroLogoObjects2.length = 0;
gdjs.IntroCode.GDTileMap_9595TerrainBGObjects1.length = 0;
gdjs.IntroCode.GDTileMap_9595TerrainBGObjects2.length = 0;
gdjs.IntroCode.GDTileMap_9595DecorationMGObjects1.length = 0;
gdjs.IntroCode.GDTileMap_9595DecorationMGObjects2.length = 0;
gdjs.IntroCode.GDPlayerSpawnerObjects1.length = 0;
gdjs.IntroCode.GDPlayerSpawnerObjects2.length = 0;
gdjs.IntroCode.GDHero_9595GrayObjects1.length = 0;
gdjs.IntroCode.GDHero_9595GrayObjects2.length = 0;
gdjs.IntroCode.GDDoorMGObjects1.length = 0;
gdjs.IntroCode.GDDoorMGObjects2.length = 0;
gdjs.IntroCode.GDWaterObjects1.length = 0;
gdjs.IntroCode.GDWaterObjects2.length = 0;
gdjs.IntroCode.GDWaterReflectionObjects1.length = 0;
gdjs.IntroCode.GDWaterReflectionObjects2.length = 0;
gdjs.IntroCode.GDWaterBottomObjects1.length = 0;
gdjs.IntroCode.GDWaterBottomObjects2.length = 0;
gdjs.IntroCode.GDSpikesObjects1.length = 0;
gdjs.IntroCode.GDSpikesObjects2.length = 0;
gdjs.IntroCode.GDBoxObjects1.length = 0;
gdjs.IntroCode.GDBoxObjects2.length = 0;
gdjs.IntroCode.GDHero_9595RedObjects1.length = 0;
gdjs.IntroCode.GDHero_9595RedObjects2.length = 0;
gdjs.IntroCode.GDtransition2Objects1.length = 0;
gdjs.IntroCode.GDtransition2Objects2.length = 0;
gdjs.IntroCode.GDDustObjects1.length = 0;
gdjs.IntroCode.GDDustObjects2.length = 0;
gdjs.IntroCode.GDJumpDustObjects1.length = 0;
gdjs.IntroCode.GDJumpDustObjects2.length = 0;
gdjs.IntroCode.GDFallDustObjects1.length = 0;
gdjs.IntroCode.GDFallDustObjects2.length = 0;
gdjs.IntroCode.GDFireObjects1.length = 0;
gdjs.IntroCode.GDFireObjects2.length = 0;
gdjs.IntroCode.GDDoorClosingObjects1.length = 0;
gdjs.IntroCode.GDDoorClosingObjects2.length = 0;
gdjs.IntroCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.IntroCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.IntroCode.GDBtn_9595RightObjects1.length = 0;
gdjs.IntroCode.GDBtn_9595RightObjects2.length = 0;
gdjs.IntroCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.IntroCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.IntroCode.GDBtn_9595DownObjects1.length = 0;
gdjs.IntroCode.GDBtn_9595DownObjects2.length = 0;
gdjs.IntroCode.GDBtn_9595HomeObjects1.length = 0;
gdjs.IntroCode.GDBtn_9595HomeObjects2.length = 0;
gdjs.IntroCode.GDtransitionObjects1.length = 0;
gdjs.IntroCode.GDtransitionObjects2.length = 0;
gdjs.IntroCode.GDPickup_9595DaimondObjects1.length = 0;
gdjs.IntroCode.GDPickup_9595DaimondObjects2.length = 0;
gdjs.IntroCode.GDUI_9595DaimondObjects1.length = 0;
gdjs.IntroCode.GDUI_9595DaimondObjects2.length = 0;
gdjs.IntroCode.GDUI_9595DaimondsCollectedObjects1.length = 0;
gdjs.IntroCode.GDUI_9595DaimondsCollectedObjects2.length = 0;
gdjs.IntroCode.GDDaimond_9595ParticleObjects1.length = 0;
gdjs.IntroCode.GDDaimond_9595ParticleObjects2.length = 0;
gdjs.IntroCode.GDLevelName3Objects1.length = 0;
gdjs.IntroCode.GDLevelName3Objects2.length = 0;

gdjs.IntroCode.eventsList2(runtimeScene);
gdjs.IntroCode.GDIntroLogoObjects1.length = 0;
gdjs.IntroCode.GDIntroLogoObjects2.length = 0;
gdjs.IntroCode.GDTileMap_9595TerrainBGObjects1.length = 0;
gdjs.IntroCode.GDTileMap_9595TerrainBGObjects2.length = 0;
gdjs.IntroCode.GDTileMap_9595DecorationMGObjects1.length = 0;
gdjs.IntroCode.GDTileMap_9595DecorationMGObjects2.length = 0;
gdjs.IntroCode.GDPlayerSpawnerObjects1.length = 0;
gdjs.IntroCode.GDPlayerSpawnerObjects2.length = 0;
gdjs.IntroCode.GDHero_9595GrayObjects1.length = 0;
gdjs.IntroCode.GDHero_9595GrayObjects2.length = 0;
gdjs.IntroCode.GDDoorMGObjects1.length = 0;
gdjs.IntroCode.GDDoorMGObjects2.length = 0;
gdjs.IntroCode.GDWaterObjects1.length = 0;
gdjs.IntroCode.GDWaterObjects2.length = 0;
gdjs.IntroCode.GDWaterReflectionObjects1.length = 0;
gdjs.IntroCode.GDWaterReflectionObjects2.length = 0;
gdjs.IntroCode.GDWaterBottomObjects1.length = 0;
gdjs.IntroCode.GDWaterBottomObjects2.length = 0;
gdjs.IntroCode.GDSpikesObjects1.length = 0;
gdjs.IntroCode.GDSpikesObjects2.length = 0;
gdjs.IntroCode.GDBoxObjects1.length = 0;
gdjs.IntroCode.GDBoxObjects2.length = 0;
gdjs.IntroCode.GDHero_9595RedObjects1.length = 0;
gdjs.IntroCode.GDHero_9595RedObjects2.length = 0;
gdjs.IntroCode.GDtransition2Objects1.length = 0;
gdjs.IntroCode.GDtransition2Objects2.length = 0;
gdjs.IntroCode.GDDustObjects1.length = 0;
gdjs.IntroCode.GDDustObjects2.length = 0;
gdjs.IntroCode.GDJumpDustObjects1.length = 0;
gdjs.IntroCode.GDJumpDustObjects2.length = 0;
gdjs.IntroCode.GDFallDustObjects1.length = 0;
gdjs.IntroCode.GDFallDustObjects2.length = 0;
gdjs.IntroCode.GDFireObjects1.length = 0;
gdjs.IntroCode.GDFireObjects2.length = 0;
gdjs.IntroCode.GDDoorClosingObjects1.length = 0;
gdjs.IntroCode.GDDoorClosingObjects2.length = 0;
gdjs.IntroCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.IntroCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.IntroCode.GDBtn_9595RightObjects1.length = 0;
gdjs.IntroCode.GDBtn_9595RightObjects2.length = 0;
gdjs.IntroCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.IntroCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.IntroCode.GDBtn_9595DownObjects1.length = 0;
gdjs.IntroCode.GDBtn_9595DownObjects2.length = 0;
gdjs.IntroCode.GDBtn_9595HomeObjects1.length = 0;
gdjs.IntroCode.GDBtn_9595HomeObjects2.length = 0;
gdjs.IntroCode.GDtransitionObjects1.length = 0;
gdjs.IntroCode.GDtransitionObjects2.length = 0;
gdjs.IntroCode.GDPickup_9595DaimondObjects1.length = 0;
gdjs.IntroCode.GDPickup_9595DaimondObjects2.length = 0;
gdjs.IntroCode.GDUI_9595DaimondObjects1.length = 0;
gdjs.IntroCode.GDUI_9595DaimondObjects2.length = 0;
gdjs.IntroCode.GDUI_9595DaimondsCollectedObjects1.length = 0;
gdjs.IntroCode.GDUI_9595DaimondsCollectedObjects2.length = 0;
gdjs.IntroCode.GDDaimond_9595ParticleObjects1.length = 0;
gdjs.IntroCode.GDDaimond_9595ParticleObjects2.length = 0;
gdjs.IntroCode.GDLevelName3Objects1.length = 0;
gdjs.IntroCode.GDLevelName3Objects2.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
