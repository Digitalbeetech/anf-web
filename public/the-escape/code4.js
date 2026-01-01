gdjs.LevelSelectCode = {};
gdjs.LevelSelectCode.localVariables = [];
gdjs.LevelSelectCode.idToCallbackMap = new Map();
gdjs.LevelSelectCode.GDTxt_9595LevelSelectObjects1= [];
gdjs.LevelSelectCode.GDTxt_9595LevelSelectObjects2= [];
gdjs.LevelSelectCode.GDLvlSelect_9595BGObjects1= [];
gdjs.LevelSelectCode.GDLvlSelect_9595BGObjects2= [];
gdjs.LevelSelectCode.GDLevelButtonObjects1= [];
gdjs.LevelSelectCode.GDLevelButtonObjects2= [];
gdjs.LevelSelectCode.GDTileMap_9595TerrainBGObjects1= [];
gdjs.LevelSelectCode.GDTileMap_9595TerrainBGObjects2= [];
gdjs.LevelSelectCode.GDTileMap_9595DecorationMGObjects1= [];
gdjs.LevelSelectCode.GDTileMap_9595DecorationMGObjects2= [];
gdjs.LevelSelectCode.GDPlayerSpawnerObjects1= [];
gdjs.LevelSelectCode.GDPlayerSpawnerObjects2= [];
gdjs.LevelSelectCode.GDHero_9595GrayObjects1= [];
gdjs.LevelSelectCode.GDHero_9595GrayObjects2= [];
gdjs.LevelSelectCode.GDDoorMGObjects1= [];
gdjs.LevelSelectCode.GDDoorMGObjects2= [];
gdjs.LevelSelectCode.GDWaterObjects1= [];
gdjs.LevelSelectCode.GDWaterObjects2= [];
gdjs.LevelSelectCode.GDWaterReflectionObjects1= [];
gdjs.LevelSelectCode.GDWaterReflectionObjects2= [];
gdjs.LevelSelectCode.GDWaterBottomObjects1= [];
gdjs.LevelSelectCode.GDWaterBottomObjects2= [];
gdjs.LevelSelectCode.GDSpikesObjects1= [];
gdjs.LevelSelectCode.GDSpikesObjects2= [];
gdjs.LevelSelectCode.GDBoxObjects1= [];
gdjs.LevelSelectCode.GDBoxObjects2= [];
gdjs.LevelSelectCode.GDHero_9595RedObjects1= [];
gdjs.LevelSelectCode.GDHero_9595RedObjects2= [];
gdjs.LevelSelectCode.GDtransition2Objects1= [];
gdjs.LevelSelectCode.GDtransition2Objects2= [];
gdjs.LevelSelectCode.GDDustObjects1= [];
gdjs.LevelSelectCode.GDDustObjects2= [];
gdjs.LevelSelectCode.GDJumpDustObjects1= [];
gdjs.LevelSelectCode.GDJumpDustObjects2= [];
gdjs.LevelSelectCode.GDFallDustObjects1= [];
gdjs.LevelSelectCode.GDFallDustObjects2= [];
gdjs.LevelSelectCode.GDFireObjects1= [];
gdjs.LevelSelectCode.GDFireObjects2= [];
gdjs.LevelSelectCode.GDDoorClosingObjects1= [];
gdjs.LevelSelectCode.GDDoorClosingObjects2= [];
gdjs.LevelSelectCode.GDBtn_9595LeftObjects1= [];
gdjs.LevelSelectCode.GDBtn_9595LeftObjects2= [];
gdjs.LevelSelectCode.GDBtn_9595RightObjects1= [];
gdjs.LevelSelectCode.GDBtn_9595RightObjects2= [];
gdjs.LevelSelectCode.GDBtn_9595JumpObjects1= [];
gdjs.LevelSelectCode.GDBtn_9595JumpObjects2= [];
gdjs.LevelSelectCode.GDBtn_9595DownObjects1= [];
gdjs.LevelSelectCode.GDBtn_9595DownObjects2= [];
gdjs.LevelSelectCode.GDBtn_9595HomeObjects1= [];
gdjs.LevelSelectCode.GDBtn_9595HomeObjects2= [];
gdjs.LevelSelectCode.GDtransitionObjects1= [];
gdjs.LevelSelectCode.GDtransitionObjects2= [];
gdjs.LevelSelectCode.GDPickup_9595DaimondObjects1= [];
gdjs.LevelSelectCode.GDPickup_9595DaimondObjects2= [];
gdjs.LevelSelectCode.GDUI_9595DaimondObjects1= [];
gdjs.LevelSelectCode.GDUI_9595DaimondObjects2= [];
gdjs.LevelSelectCode.GDUI_9595DaimondsCollectedObjects1= [];
gdjs.LevelSelectCode.GDUI_9595DaimondsCollectedObjects2= [];
gdjs.LevelSelectCode.GDDaimond_9595ParticleObjects1= [];
gdjs.LevelSelectCode.GDDaimond_9595ParticleObjects2= [];
gdjs.LevelSelectCode.GDLevelName3Objects1= [];
gdjs.LevelSelectCode.GDLevelName3Objects2= [];


gdjs.LevelSelectCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LevelButton"), gdjs.LevelSelectCode.GDLevelButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDLevelButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDLevelButtonObjects1[i].getVariableNumber(gdjs.LevelSelectCode.GDLevelButtonObjects1[i].getVariables().getFromIndex(0)) >= 11 ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDLevelButtonObjects1[k] = gdjs.LevelSelectCode.GDLevelButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDLevelButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LevelSelectCode.GDLevelButtonObjects1 */
{for(var i = 0, len = gdjs.LevelSelectCode.GDLevelButtonObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLevelButtonObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDLevelButtonObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLevelButtonObjects1[i].getBehavior("Opacity").setOpacity(180);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDLevelButtonObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLevelButtonObjects1[i].getBehavior("Effect").setEffectDoubleParameter("Effect", "opacity", 1);
}
}
}

}


};gdjs.LevelSelectCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LevelButton"), gdjs.LevelSelectCode.GDLevelButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDLevelButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDLevelButtonObjects1[i].getVariableNumber(gdjs.LevelSelectCode.GDLevelButtonObjects1[i].getVariables().getFromIndex(0)) >= 11 ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDLevelButtonObjects1[k] = gdjs.LevelSelectCode.GDLevelButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDLevelButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LevelSelectCode.GDLevelButtonObjects1 */
{for(var i = 0, len = gdjs.LevelSelectCode.GDLevelButtonObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLevelButtonObjects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDLevelButtonObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLevelButtonObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDLevelButtonObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLevelButtonObjects1[i].getBehavior("Effect").setEffectDoubleParameter("Effect", "opacity", 0);
}
}
}

}


};gdjs.LevelSelectCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LevelButton"), gdjs.LevelSelectCode.GDLevelButtonObjects1);
{for(var i = 0, len = gdjs.LevelSelectCode.GDLevelButtonObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLevelButtonObjects1[i].SetLabelTextOp(gdjs.LevelSelectCode.GDLevelButtonObjects1[i].getVariables().getFromIndex(0).getAsString(), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelButton"), gdjs.LevelSelectCode.GDLevelButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDLevelButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDLevelButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDLevelButtonObjects1[k] = gdjs.LevelSelectCode.GDLevelButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDLevelButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LevelSelectCode.GDLevelButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("transition2"), gdjs.LevelSelectCode.GDtransition2Objects1);
{for(var i = 0, len = gdjs.LevelSelectCode.GDtransition2Objects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDtransition2Objects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Horizontal", "Forward", 0, null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(((gdjs.LevelSelectCode.GDLevelButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LevelSelectCode.GDLevelButtonObjects1[0].getVariables()).getFromIndex(0).getAsNumber());
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("transition2"), gdjs.LevelSelectCode.GDtransition2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDtransition2Objects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDtransition2Objects1[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDtransition2Objects1[k] = gdjs.LevelSelectCode.GDtransition2Objects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDtransition2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LevelSelectCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LevelSelectCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.LevelSelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelSelectCode.GDTxt_9595LevelSelectObjects1.length = 0;
gdjs.LevelSelectCode.GDTxt_9595LevelSelectObjects2.length = 0;
gdjs.LevelSelectCode.GDLvlSelect_9595BGObjects1.length = 0;
gdjs.LevelSelectCode.GDLvlSelect_9595BGObjects2.length = 0;
gdjs.LevelSelectCode.GDLevelButtonObjects1.length = 0;
gdjs.LevelSelectCode.GDLevelButtonObjects2.length = 0;
gdjs.LevelSelectCode.GDTileMap_9595TerrainBGObjects1.length = 0;
gdjs.LevelSelectCode.GDTileMap_9595TerrainBGObjects2.length = 0;
gdjs.LevelSelectCode.GDTileMap_9595DecorationMGObjects1.length = 0;
gdjs.LevelSelectCode.GDTileMap_9595DecorationMGObjects2.length = 0;
gdjs.LevelSelectCode.GDPlayerSpawnerObjects1.length = 0;
gdjs.LevelSelectCode.GDPlayerSpawnerObjects2.length = 0;
gdjs.LevelSelectCode.GDHero_9595GrayObjects1.length = 0;
gdjs.LevelSelectCode.GDHero_9595GrayObjects2.length = 0;
gdjs.LevelSelectCode.GDDoorMGObjects1.length = 0;
gdjs.LevelSelectCode.GDDoorMGObjects2.length = 0;
gdjs.LevelSelectCode.GDWaterObjects1.length = 0;
gdjs.LevelSelectCode.GDWaterObjects2.length = 0;
gdjs.LevelSelectCode.GDWaterReflectionObjects1.length = 0;
gdjs.LevelSelectCode.GDWaterReflectionObjects2.length = 0;
gdjs.LevelSelectCode.GDWaterBottomObjects1.length = 0;
gdjs.LevelSelectCode.GDWaterBottomObjects2.length = 0;
gdjs.LevelSelectCode.GDSpikesObjects1.length = 0;
gdjs.LevelSelectCode.GDSpikesObjects2.length = 0;
gdjs.LevelSelectCode.GDBoxObjects1.length = 0;
gdjs.LevelSelectCode.GDBoxObjects2.length = 0;
gdjs.LevelSelectCode.GDHero_9595RedObjects1.length = 0;
gdjs.LevelSelectCode.GDHero_9595RedObjects2.length = 0;
gdjs.LevelSelectCode.GDtransition2Objects1.length = 0;
gdjs.LevelSelectCode.GDtransition2Objects2.length = 0;
gdjs.LevelSelectCode.GDDustObjects1.length = 0;
gdjs.LevelSelectCode.GDDustObjects2.length = 0;
gdjs.LevelSelectCode.GDJumpDustObjects1.length = 0;
gdjs.LevelSelectCode.GDJumpDustObjects2.length = 0;
gdjs.LevelSelectCode.GDFallDustObjects1.length = 0;
gdjs.LevelSelectCode.GDFallDustObjects2.length = 0;
gdjs.LevelSelectCode.GDFireObjects1.length = 0;
gdjs.LevelSelectCode.GDFireObjects2.length = 0;
gdjs.LevelSelectCode.GDDoorClosingObjects1.length = 0;
gdjs.LevelSelectCode.GDDoorClosingObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595RightObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595RightObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595DownObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595DownObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595HomeObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595HomeObjects2.length = 0;
gdjs.LevelSelectCode.GDtransitionObjects1.length = 0;
gdjs.LevelSelectCode.GDtransitionObjects2.length = 0;
gdjs.LevelSelectCode.GDPickup_9595DaimondObjects1.length = 0;
gdjs.LevelSelectCode.GDPickup_9595DaimondObjects2.length = 0;
gdjs.LevelSelectCode.GDUI_9595DaimondObjects1.length = 0;
gdjs.LevelSelectCode.GDUI_9595DaimondObjects2.length = 0;
gdjs.LevelSelectCode.GDUI_9595DaimondsCollectedObjects1.length = 0;
gdjs.LevelSelectCode.GDUI_9595DaimondsCollectedObjects2.length = 0;
gdjs.LevelSelectCode.GDDaimond_9595ParticleObjects1.length = 0;
gdjs.LevelSelectCode.GDDaimond_9595ParticleObjects2.length = 0;
gdjs.LevelSelectCode.GDLevelName3Objects1.length = 0;
gdjs.LevelSelectCode.GDLevelName3Objects2.length = 0;

gdjs.LevelSelectCode.eventsList2(runtimeScene);
gdjs.LevelSelectCode.GDTxt_9595LevelSelectObjects1.length = 0;
gdjs.LevelSelectCode.GDTxt_9595LevelSelectObjects2.length = 0;
gdjs.LevelSelectCode.GDLvlSelect_9595BGObjects1.length = 0;
gdjs.LevelSelectCode.GDLvlSelect_9595BGObjects2.length = 0;
gdjs.LevelSelectCode.GDLevelButtonObjects1.length = 0;
gdjs.LevelSelectCode.GDLevelButtonObjects2.length = 0;
gdjs.LevelSelectCode.GDTileMap_9595TerrainBGObjects1.length = 0;
gdjs.LevelSelectCode.GDTileMap_9595TerrainBGObjects2.length = 0;
gdjs.LevelSelectCode.GDTileMap_9595DecorationMGObjects1.length = 0;
gdjs.LevelSelectCode.GDTileMap_9595DecorationMGObjects2.length = 0;
gdjs.LevelSelectCode.GDPlayerSpawnerObjects1.length = 0;
gdjs.LevelSelectCode.GDPlayerSpawnerObjects2.length = 0;
gdjs.LevelSelectCode.GDHero_9595GrayObjects1.length = 0;
gdjs.LevelSelectCode.GDHero_9595GrayObjects2.length = 0;
gdjs.LevelSelectCode.GDDoorMGObjects1.length = 0;
gdjs.LevelSelectCode.GDDoorMGObjects2.length = 0;
gdjs.LevelSelectCode.GDWaterObjects1.length = 0;
gdjs.LevelSelectCode.GDWaterObjects2.length = 0;
gdjs.LevelSelectCode.GDWaterReflectionObjects1.length = 0;
gdjs.LevelSelectCode.GDWaterReflectionObjects2.length = 0;
gdjs.LevelSelectCode.GDWaterBottomObjects1.length = 0;
gdjs.LevelSelectCode.GDWaterBottomObjects2.length = 0;
gdjs.LevelSelectCode.GDSpikesObjects1.length = 0;
gdjs.LevelSelectCode.GDSpikesObjects2.length = 0;
gdjs.LevelSelectCode.GDBoxObjects1.length = 0;
gdjs.LevelSelectCode.GDBoxObjects2.length = 0;
gdjs.LevelSelectCode.GDHero_9595RedObjects1.length = 0;
gdjs.LevelSelectCode.GDHero_9595RedObjects2.length = 0;
gdjs.LevelSelectCode.GDtransition2Objects1.length = 0;
gdjs.LevelSelectCode.GDtransition2Objects2.length = 0;
gdjs.LevelSelectCode.GDDustObjects1.length = 0;
gdjs.LevelSelectCode.GDDustObjects2.length = 0;
gdjs.LevelSelectCode.GDJumpDustObjects1.length = 0;
gdjs.LevelSelectCode.GDJumpDustObjects2.length = 0;
gdjs.LevelSelectCode.GDFallDustObjects1.length = 0;
gdjs.LevelSelectCode.GDFallDustObjects2.length = 0;
gdjs.LevelSelectCode.GDFireObjects1.length = 0;
gdjs.LevelSelectCode.GDFireObjects2.length = 0;
gdjs.LevelSelectCode.GDDoorClosingObjects1.length = 0;
gdjs.LevelSelectCode.GDDoorClosingObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595RightObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595RightObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595DownObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595DownObjects2.length = 0;
gdjs.LevelSelectCode.GDBtn_9595HomeObjects1.length = 0;
gdjs.LevelSelectCode.GDBtn_9595HomeObjects2.length = 0;
gdjs.LevelSelectCode.GDtransitionObjects1.length = 0;
gdjs.LevelSelectCode.GDtransitionObjects2.length = 0;
gdjs.LevelSelectCode.GDPickup_9595DaimondObjects1.length = 0;
gdjs.LevelSelectCode.GDPickup_9595DaimondObjects2.length = 0;
gdjs.LevelSelectCode.GDUI_9595DaimondObjects1.length = 0;
gdjs.LevelSelectCode.GDUI_9595DaimondObjects2.length = 0;
gdjs.LevelSelectCode.GDUI_9595DaimondsCollectedObjects1.length = 0;
gdjs.LevelSelectCode.GDUI_9595DaimondsCollectedObjects2.length = 0;
gdjs.LevelSelectCode.GDDaimond_9595ParticleObjects1.length = 0;
gdjs.LevelSelectCode.GDDaimond_9595ParticleObjects2.length = 0;
gdjs.LevelSelectCode.GDLevelName3Objects1.length = 0;
gdjs.LevelSelectCode.GDLevelName3Objects2.length = 0;


return;

}

gdjs['LevelSelectCode'] = gdjs.LevelSelectCode;
