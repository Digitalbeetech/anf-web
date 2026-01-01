gdjs.GameIntroCode = {};
gdjs.GameIntroCode.localVariables = [];
gdjs.GameIntroCode.idToCallbackMap = new Map();
gdjs.GameIntroCode.GDGameIntroLogoObjects1= [];
gdjs.GameIntroCode.GDGameIntroLogoObjects2= [];
gdjs.GameIntroCode.GDGameIntroTextObjects1= [];
gdjs.GameIntroCode.GDGameIntroTextObjects2= [];
gdjs.GameIntroCode.GDTileMap_9595TerrainBGObjects1= [];
gdjs.GameIntroCode.GDTileMap_9595TerrainBGObjects2= [];
gdjs.GameIntroCode.GDTileMap_9595DecorationMGObjects1= [];
gdjs.GameIntroCode.GDTileMap_9595DecorationMGObjects2= [];
gdjs.GameIntroCode.GDPlayerSpawnerObjects1= [];
gdjs.GameIntroCode.GDPlayerSpawnerObjects2= [];
gdjs.GameIntroCode.GDHero_9595GrayObjects1= [];
gdjs.GameIntroCode.GDHero_9595GrayObjects2= [];
gdjs.GameIntroCode.GDDoorMGObjects1= [];
gdjs.GameIntroCode.GDDoorMGObjects2= [];
gdjs.GameIntroCode.GDWaterObjects1= [];
gdjs.GameIntroCode.GDWaterObjects2= [];
gdjs.GameIntroCode.GDWaterReflectionObjects1= [];
gdjs.GameIntroCode.GDWaterReflectionObjects2= [];
gdjs.GameIntroCode.GDWaterBottomObjects1= [];
gdjs.GameIntroCode.GDWaterBottomObjects2= [];
gdjs.GameIntroCode.GDSpikesObjects1= [];
gdjs.GameIntroCode.GDSpikesObjects2= [];
gdjs.GameIntroCode.GDBoxObjects1= [];
gdjs.GameIntroCode.GDBoxObjects2= [];
gdjs.GameIntroCode.GDHero_9595RedObjects1= [];
gdjs.GameIntroCode.GDHero_9595RedObjects2= [];
gdjs.GameIntroCode.GDtransition2Objects1= [];
gdjs.GameIntroCode.GDtransition2Objects2= [];
gdjs.GameIntroCode.GDDustObjects1= [];
gdjs.GameIntroCode.GDDustObjects2= [];
gdjs.GameIntroCode.GDJumpDustObjects1= [];
gdjs.GameIntroCode.GDJumpDustObjects2= [];
gdjs.GameIntroCode.GDFallDustObjects1= [];
gdjs.GameIntroCode.GDFallDustObjects2= [];
gdjs.GameIntroCode.GDFireObjects1= [];
gdjs.GameIntroCode.GDFireObjects2= [];
gdjs.GameIntroCode.GDDoorClosingObjects1= [];
gdjs.GameIntroCode.GDDoorClosingObjects2= [];
gdjs.GameIntroCode.GDBtn_9595LeftObjects1= [];
gdjs.GameIntroCode.GDBtn_9595LeftObjects2= [];
gdjs.GameIntroCode.GDBtn_9595RightObjects1= [];
gdjs.GameIntroCode.GDBtn_9595RightObjects2= [];
gdjs.GameIntroCode.GDBtn_9595JumpObjects1= [];
gdjs.GameIntroCode.GDBtn_9595JumpObjects2= [];
gdjs.GameIntroCode.GDBtn_9595DownObjects1= [];
gdjs.GameIntroCode.GDBtn_9595DownObjects2= [];
gdjs.GameIntroCode.GDBtn_9595HomeObjects1= [];
gdjs.GameIntroCode.GDBtn_9595HomeObjects2= [];
gdjs.GameIntroCode.GDtransitionObjects1= [];
gdjs.GameIntroCode.GDtransitionObjects2= [];
gdjs.GameIntroCode.GDPickup_9595DaimondObjects1= [];
gdjs.GameIntroCode.GDPickup_9595DaimondObjects2= [];
gdjs.GameIntroCode.GDUI_9595DaimondObjects1= [];
gdjs.GameIntroCode.GDUI_9595DaimondObjects2= [];
gdjs.GameIntroCode.GDUI_9595DaimondsCollectedObjects1= [];
gdjs.GameIntroCode.GDUI_9595DaimondsCollectedObjects2= [];
gdjs.GameIntroCode.GDDaimond_9595ParticleObjects1= [];
gdjs.GameIntroCode.GDDaimond_9595ParticleObjects2= [];
gdjs.GameIntroCode.GDLevelName3Objects1= [];
gdjs.GameIntroCode.GDLevelName3Objects2= [];


gdjs.GameIntroCode.asyncCallback32025236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameIntroCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("GameIntroLogo"), gdjs.GameIntroCode.GDGameIntroLogoObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("GameIntroText"), gdjs.GameIntroCode.GDGameIntroTextObjects2);

{for(var i = 0, len = gdjs.GameIntroCode.GDGameIntroLogoObjects2.length ;i < len;++i) {
    gdjs.GameIntroCode.GDGameIntroLogoObjects2[i].getBehavior("Tween").addObjectOpacityTween2("IntroLogo", 255, "easeInOutQuad", 2, false);
}
}
{for(var i = 0, len = gdjs.GameIntroCode.GDGameIntroTextObjects2.length ;i < len;++i) {
    gdjs.GameIntroCode.GDGameIntroTextObjects2[i].getBehavior("Tween").addObjectOpacityTween2("IntroText", 255, "easeInOutQuad", 2, false);
}
}
gdjs.GameIntroCode.localVariables.length = 0;
}
gdjs.GameIntroCode.idToCallbackMap.set(32025236, gdjs.GameIntroCode.asyncCallback32025236);
gdjs.GameIntroCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameIntroCode.localVariables);
for (const obj of gdjs.GameIntroCode.GDGameIntroLogoObjects1) asyncObjectsList.addObject("GameIntroLogo", obj);
for (const obj of gdjs.GameIntroCode.GDGameIntroTextObjects1) asyncObjectsList.addObject("GameIntroText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.GameIntroCode.asyncCallback32025236(runtimeScene, asyncObjectsList)), 32025236, asyncObjectsList);
}
}

}


};gdjs.GameIntroCode.asyncCallback31883820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameIntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main menu", false);
}
gdjs.GameIntroCode.localVariables.length = 0;
}
gdjs.GameIntroCode.idToCallbackMap.set(31883820, gdjs.GameIntroCode.asyncCallback31883820);
gdjs.GameIntroCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameIntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.GameIntroCode.asyncCallback31883820(runtimeScene, asyncObjectsList)), 31883820, asyncObjectsList);
}
}

}


};gdjs.GameIntroCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GameIntroLogo"), gdjs.GameIntroCode.GDGameIntroLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameIntroText"), gdjs.GameIntroCode.GDGameIntroTextObjects1);
{for(var i = 0, len = gdjs.GameIntroCode.GDGameIntroLogoObjects1.length ;i < len;++i) {
    gdjs.GameIntroCode.GDGameIntroLogoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameIntroCode.GDGameIntroTextObjects1.length ;i < len;++i) {
    gdjs.GameIntroCode.GDGameIntroTextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs.GameIntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GameIntroLogo"), gdjs.GameIntroCode.GDGameIntroLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameIntroText"), gdjs.GameIntroCode.GDGameIntroTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameIntroCode.GDGameIntroLogoObjects1.length;i<l;++i) {
    if ( gdjs.GameIntroCode.GDGameIntroLogoObjects1[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.GameIntroCode.GDGameIntroLogoObjects1[k] = gdjs.GameIntroCode.GDGameIntroLogoObjects1[i];
        ++k;
    }
}
gdjs.GameIntroCode.GDGameIntroLogoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameIntroCode.GDGameIntroTextObjects1.length;i<l;++i) {
    if ( gdjs.GameIntroCode.GDGameIntroTextObjects1[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.GameIntroCode.GDGameIntroTextObjects1[k] = gdjs.GameIntroCode.GDGameIntroTextObjects1[i];
        ++k;
    }
}
gdjs.GameIntroCode.GDGameIntroTextObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameIntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.GameIntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameIntroCode.GDGameIntroLogoObjects1.length = 0;
gdjs.GameIntroCode.GDGameIntroLogoObjects2.length = 0;
gdjs.GameIntroCode.GDGameIntroTextObjects1.length = 0;
gdjs.GameIntroCode.GDGameIntroTextObjects2.length = 0;
gdjs.GameIntroCode.GDTileMap_9595TerrainBGObjects1.length = 0;
gdjs.GameIntroCode.GDTileMap_9595TerrainBGObjects2.length = 0;
gdjs.GameIntroCode.GDTileMap_9595DecorationMGObjects1.length = 0;
gdjs.GameIntroCode.GDTileMap_9595DecorationMGObjects2.length = 0;
gdjs.GameIntroCode.GDPlayerSpawnerObjects1.length = 0;
gdjs.GameIntroCode.GDPlayerSpawnerObjects2.length = 0;
gdjs.GameIntroCode.GDHero_9595GrayObjects1.length = 0;
gdjs.GameIntroCode.GDHero_9595GrayObjects2.length = 0;
gdjs.GameIntroCode.GDDoorMGObjects1.length = 0;
gdjs.GameIntroCode.GDDoorMGObjects2.length = 0;
gdjs.GameIntroCode.GDWaterObjects1.length = 0;
gdjs.GameIntroCode.GDWaterObjects2.length = 0;
gdjs.GameIntroCode.GDWaterReflectionObjects1.length = 0;
gdjs.GameIntroCode.GDWaterReflectionObjects2.length = 0;
gdjs.GameIntroCode.GDWaterBottomObjects1.length = 0;
gdjs.GameIntroCode.GDWaterBottomObjects2.length = 0;
gdjs.GameIntroCode.GDSpikesObjects1.length = 0;
gdjs.GameIntroCode.GDSpikesObjects2.length = 0;
gdjs.GameIntroCode.GDBoxObjects1.length = 0;
gdjs.GameIntroCode.GDBoxObjects2.length = 0;
gdjs.GameIntroCode.GDHero_9595RedObjects1.length = 0;
gdjs.GameIntroCode.GDHero_9595RedObjects2.length = 0;
gdjs.GameIntroCode.GDtransition2Objects1.length = 0;
gdjs.GameIntroCode.GDtransition2Objects2.length = 0;
gdjs.GameIntroCode.GDDustObjects1.length = 0;
gdjs.GameIntroCode.GDDustObjects2.length = 0;
gdjs.GameIntroCode.GDJumpDustObjects1.length = 0;
gdjs.GameIntroCode.GDJumpDustObjects2.length = 0;
gdjs.GameIntroCode.GDFallDustObjects1.length = 0;
gdjs.GameIntroCode.GDFallDustObjects2.length = 0;
gdjs.GameIntroCode.GDFireObjects1.length = 0;
gdjs.GameIntroCode.GDFireObjects2.length = 0;
gdjs.GameIntroCode.GDDoorClosingObjects1.length = 0;
gdjs.GameIntroCode.GDDoorClosingObjects2.length = 0;
gdjs.GameIntroCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.GameIntroCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.GameIntroCode.GDBtn_9595RightObjects1.length = 0;
gdjs.GameIntroCode.GDBtn_9595RightObjects2.length = 0;
gdjs.GameIntroCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.GameIntroCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.GameIntroCode.GDBtn_9595DownObjects1.length = 0;
gdjs.GameIntroCode.GDBtn_9595DownObjects2.length = 0;
gdjs.GameIntroCode.GDBtn_9595HomeObjects1.length = 0;
gdjs.GameIntroCode.GDBtn_9595HomeObjects2.length = 0;
gdjs.GameIntroCode.GDtransitionObjects1.length = 0;
gdjs.GameIntroCode.GDtransitionObjects2.length = 0;
gdjs.GameIntroCode.GDPickup_9595DaimondObjects1.length = 0;
gdjs.GameIntroCode.GDPickup_9595DaimondObjects2.length = 0;
gdjs.GameIntroCode.GDUI_9595DaimondObjects1.length = 0;
gdjs.GameIntroCode.GDUI_9595DaimondObjects2.length = 0;
gdjs.GameIntroCode.GDUI_9595DaimondsCollectedObjects1.length = 0;
gdjs.GameIntroCode.GDUI_9595DaimondsCollectedObjects2.length = 0;
gdjs.GameIntroCode.GDDaimond_9595ParticleObjects1.length = 0;
gdjs.GameIntroCode.GDDaimond_9595ParticleObjects2.length = 0;
gdjs.GameIntroCode.GDLevelName3Objects1.length = 0;
gdjs.GameIntroCode.GDLevelName3Objects2.length = 0;

gdjs.GameIntroCode.eventsList2(runtimeScene);
gdjs.GameIntroCode.GDGameIntroLogoObjects1.length = 0;
gdjs.GameIntroCode.GDGameIntroLogoObjects2.length = 0;
gdjs.GameIntroCode.GDGameIntroTextObjects1.length = 0;
gdjs.GameIntroCode.GDGameIntroTextObjects2.length = 0;
gdjs.GameIntroCode.GDTileMap_9595TerrainBGObjects1.length = 0;
gdjs.GameIntroCode.GDTileMap_9595TerrainBGObjects2.length = 0;
gdjs.GameIntroCode.GDTileMap_9595DecorationMGObjects1.length = 0;
gdjs.GameIntroCode.GDTileMap_9595DecorationMGObjects2.length = 0;
gdjs.GameIntroCode.GDPlayerSpawnerObjects1.length = 0;
gdjs.GameIntroCode.GDPlayerSpawnerObjects2.length = 0;
gdjs.GameIntroCode.GDHero_9595GrayObjects1.length = 0;
gdjs.GameIntroCode.GDHero_9595GrayObjects2.length = 0;
gdjs.GameIntroCode.GDDoorMGObjects1.length = 0;
gdjs.GameIntroCode.GDDoorMGObjects2.length = 0;
gdjs.GameIntroCode.GDWaterObjects1.length = 0;
gdjs.GameIntroCode.GDWaterObjects2.length = 0;
gdjs.GameIntroCode.GDWaterReflectionObjects1.length = 0;
gdjs.GameIntroCode.GDWaterReflectionObjects2.length = 0;
gdjs.GameIntroCode.GDWaterBottomObjects1.length = 0;
gdjs.GameIntroCode.GDWaterBottomObjects2.length = 0;
gdjs.GameIntroCode.GDSpikesObjects1.length = 0;
gdjs.GameIntroCode.GDSpikesObjects2.length = 0;
gdjs.GameIntroCode.GDBoxObjects1.length = 0;
gdjs.GameIntroCode.GDBoxObjects2.length = 0;
gdjs.GameIntroCode.GDHero_9595RedObjects1.length = 0;
gdjs.GameIntroCode.GDHero_9595RedObjects2.length = 0;
gdjs.GameIntroCode.GDtransition2Objects1.length = 0;
gdjs.GameIntroCode.GDtransition2Objects2.length = 0;
gdjs.GameIntroCode.GDDustObjects1.length = 0;
gdjs.GameIntroCode.GDDustObjects2.length = 0;
gdjs.GameIntroCode.GDJumpDustObjects1.length = 0;
gdjs.GameIntroCode.GDJumpDustObjects2.length = 0;
gdjs.GameIntroCode.GDFallDustObjects1.length = 0;
gdjs.GameIntroCode.GDFallDustObjects2.length = 0;
gdjs.GameIntroCode.GDFireObjects1.length = 0;
gdjs.GameIntroCode.GDFireObjects2.length = 0;
gdjs.GameIntroCode.GDDoorClosingObjects1.length = 0;
gdjs.GameIntroCode.GDDoorClosingObjects2.length = 0;
gdjs.GameIntroCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.GameIntroCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.GameIntroCode.GDBtn_9595RightObjects1.length = 0;
gdjs.GameIntroCode.GDBtn_9595RightObjects2.length = 0;
gdjs.GameIntroCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.GameIntroCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.GameIntroCode.GDBtn_9595DownObjects1.length = 0;
gdjs.GameIntroCode.GDBtn_9595DownObjects2.length = 0;
gdjs.GameIntroCode.GDBtn_9595HomeObjects1.length = 0;
gdjs.GameIntroCode.GDBtn_9595HomeObjects2.length = 0;
gdjs.GameIntroCode.GDtransitionObjects1.length = 0;
gdjs.GameIntroCode.GDtransitionObjects2.length = 0;
gdjs.GameIntroCode.GDPickup_9595DaimondObjects1.length = 0;
gdjs.GameIntroCode.GDPickup_9595DaimondObjects2.length = 0;
gdjs.GameIntroCode.GDUI_9595DaimondObjects1.length = 0;
gdjs.GameIntroCode.GDUI_9595DaimondObjects2.length = 0;
gdjs.GameIntroCode.GDUI_9595DaimondsCollectedObjects1.length = 0;
gdjs.GameIntroCode.GDUI_9595DaimondsCollectedObjects2.length = 0;
gdjs.GameIntroCode.GDDaimond_9595ParticleObjects1.length = 0;
gdjs.GameIntroCode.GDDaimond_9595ParticleObjects2.length = 0;
gdjs.GameIntroCode.GDLevelName3Objects1.length = 0;
gdjs.GameIntroCode.GDLevelName3Objects2.length = 0;


return;

}

gdjs['GameIntroCode'] = gdjs.GameIntroCode;
