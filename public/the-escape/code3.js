gdjs.CharSelectCode = {};
gdjs.CharSelectCode.localVariables = [];
gdjs.CharSelectCode.idToCallbackMap = new Map();
gdjs.CharSelectCode.GDPlatformObjects1= [];
gdjs.CharSelectCode.GDPlatformObjects2= [];
gdjs.CharSelectCode.GDCornerLObjects1= [];
gdjs.CharSelectCode.GDCornerLObjects2= [];
gdjs.CharSelectCode.GDCornerRObjects1= [];
gdjs.CharSelectCode.GDCornerRObjects2= [];
gdjs.CharSelectCode.GDWallLObjects1= [];
gdjs.CharSelectCode.GDWallLObjects2= [];
gdjs.CharSelectCode.GDWallRObjects1= [];
gdjs.CharSelectCode.GDWallRObjects2= [];
gdjs.CharSelectCode.GDSelect_9595HeroRedObjects1= [];
gdjs.CharSelectCode.GDSelect_9595HeroRedObjects2= [];
gdjs.CharSelectCode.GDSelect_9595HeroGrayObjects1= [];
gdjs.CharSelectCode.GDSelect_9595HeroGrayObjects2= [];
gdjs.CharSelectCode.GDCharRedObjects1= [];
gdjs.CharSelectCode.GDCharRedObjects2= [];
gdjs.CharSelectCode.GDCharGrayObjects1= [];
gdjs.CharSelectCode.GDCharGrayObjects2= [];
gdjs.CharSelectCode.GDSelectTxtObjects1= [];
gdjs.CharSelectCode.GDSelectTxtObjects2= [];
gdjs.CharSelectCode.GDTileMap_9595TerrainBGObjects1= [];
gdjs.CharSelectCode.GDTileMap_9595TerrainBGObjects2= [];
gdjs.CharSelectCode.GDTileMap_9595DecorationMGObjects1= [];
gdjs.CharSelectCode.GDTileMap_9595DecorationMGObjects2= [];
gdjs.CharSelectCode.GDPlayerSpawnerObjects1= [];
gdjs.CharSelectCode.GDPlayerSpawnerObjects2= [];
gdjs.CharSelectCode.GDHero_9595GrayObjects1= [];
gdjs.CharSelectCode.GDHero_9595GrayObjects2= [];
gdjs.CharSelectCode.GDDoorMGObjects1= [];
gdjs.CharSelectCode.GDDoorMGObjects2= [];
gdjs.CharSelectCode.GDWaterObjects1= [];
gdjs.CharSelectCode.GDWaterObjects2= [];
gdjs.CharSelectCode.GDWaterReflectionObjects1= [];
gdjs.CharSelectCode.GDWaterReflectionObjects2= [];
gdjs.CharSelectCode.GDWaterBottomObjects1= [];
gdjs.CharSelectCode.GDWaterBottomObjects2= [];
gdjs.CharSelectCode.GDSpikesObjects1= [];
gdjs.CharSelectCode.GDSpikesObjects2= [];
gdjs.CharSelectCode.GDBoxObjects1= [];
gdjs.CharSelectCode.GDBoxObjects2= [];
gdjs.CharSelectCode.GDHero_9595RedObjects1= [];
gdjs.CharSelectCode.GDHero_9595RedObjects2= [];
gdjs.CharSelectCode.GDtransition2Objects1= [];
gdjs.CharSelectCode.GDtransition2Objects2= [];
gdjs.CharSelectCode.GDDustObjects1= [];
gdjs.CharSelectCode.GDDustObjects2= [];
gdjs.CharSelectCode.GDJumpDustObjects1= [];
gdjs.CharSelectCode.GDJumpDustObjects2= [];
gdjs.CharSelectCode.GDFallDustObjects1= [];
gdjs.CharSelectCode.GDFallDustObjects2= [];
gdjs.CharSelectCode.GDFireObjects1= [];
gdjs.CharSelectCode.GDFireObjects2= [];
gdjs.CharSelectCode.GDDoorClosingObjects1= [];
gdjs.CharSelectCode.GDDoorClosingObjects2= [];
gdjs.CharSelectCode.GDBtn_9595LeftObjects1= [];
gdjs.CharSelectCode.GDBtn_9595LeftObjects2= [];
gdjs.CharSelectCode.GDBtn_9595RightObjects1= [];
gdjs.CharSelectCode.GDBtn_9595RightObjects2= [];
gdjs.CharSelectCode.GDBtn_9595JumpObjects1= [];
gdjs.CharSelectCode.GDBtn_9595JumpObjects2= [];
gdjs.CharSelectCode.GDBtn_9595DownObjects1= [];
gdjs.CharSelectCode.GDBtn_9595DownObjects2= [];
gdjs.CharSelectCode.GDBtn_9595HomeObjects1= [];
gdjs.CharSelectCode.GDBtn_9595HomeObjects2= [];
gdjs.CharSelectCode.GDtransitionObjects1= [];
gdjs.CharSelectCode.GDtransitionObjects2= [];
gdjs.CharSelectCode.GDPickup_9595DaimondObjects1= [];
gdjs.CharSelectCode.GDPickup_9595DaimondObjects2= [];
gdjs.CharSelectCode.GDUI_9595DaimondObjects1= [];
gdjs.CharSelectCode.GDUI_9595DaimondObjects2= [];
gdjs.CharSelectCode.GDUI_9595DaimondsCollectedObjects1= [];
gdjs.CharSelectCode.GDUI_9595DaimondsCollectedObjects2= [];
gdjs.CharSelectCode.GDDaimond_9595ParticleObjects1= [];
gdjs.CharSelectCode.GDDaimond_9595ParticleObjects2= [];
gdjs.CharSelectCode.GDLevelName3Objects1= [];
gdjs.CharSelectCode.GDLevelName3Objects2= [];


gdjs.CharSelectCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CharGray"), gdjs.CharSelectCode.GDCharGrayObjects1);
gdjs.copyArray(runtimeScene.getObjects("CharRed"), gdjs.CharSelectCode.GDCharRedObjects1);
{for(var i = 0, len = gdjs.CharSelectCode.GDCharRedObjects1.length ;i < len;++i) {
    gdjs.CharSelectCode.GDCharRedObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.CharSelectCode.GDCharGrayObjects1.length ;i < len;++i) {
    gdjs.CharSelectCode.GDCharGrayObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharRed"), gdjs.CharSelectCode.GDCharRedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharSelectCode.GDCharRedObjects1.length;i<l;++i) {
    if ( gdjs.CharSelectCode.GDCharRedObjects1[i].IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharSelectCode.GDCharRedObjects1[k] = gdjs.CharSelectCode.GDCharRedObjects1[i];
        ++k;
    }
}
gdjs.CharSelectCode.GDCharRedObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Select_HeroRed"), gdjs.CharSelectCode.GDSelect_9595HeroRedObjects1);
{for(var i = 0, len = gdjs.CharSelectCode.GDSelect_9595HeroRedObjects1.length ;i < len;++i) {
    gdjs.CharSelectCode.GDSelect_9595HeroRedObjects1[i].getBehavior("Effect").setEffectDoubleParameter("Effect", "thickness", 2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharRed"), gdjs.CharSelectCode.GDCharRedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharSelectCode.GDCharRedObjects1.length;i<l;++i) {
    if ( !(gdjs.CharSelectCode.GDCharRedObjects1[i].IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.CharSelectCode.GDCharRedObjects1[k] = gdjs.CharSelectCode.GDCharRedObjects1[i];
        ++k;
    }
}
gdjs.CharSelectCode.GDCharRedObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Select_HeroRed"), gdjs.CharSelectCode.GDSelect_9595HeroRedObjects1);
{for(var i = 0, len = gdjs.CharSelectCode.GDSelect_9595HeroRedObjects1.length ;i < len;++i) {
    gdjs.CharSelectCode.GDSelect_9595HeroRedObjects1[i].getBehavior("Effect").setEffectDoubleParameter("Effect", "thickness", 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharGray"), gdjs.CharSelectCode.GDCharGrayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharSelectCode.GDCharGrayObjects1.length;i<l;++i) {
    if ( gdjs.CharSelectCode.GDCharGrayObjects1[i].IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharSelectCode.GDCharGrayObjects1[k] = gdjs.CharSelectCode.GDCharGrayObjects1[i];
        ++k;
    }
}
gdjs.CharSelectCode.GDCharGrayObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Select_HeroGray"), gdjs.CharSelectCode.GDSelect_9595HeroGrayObjects1);
{for(var i = 0, len = gdjs.CharSelectCode.GDSelect_9595HeroGrayObjects1.length ;i < len;++i) {
    gdjs.CharSelectCode.GDSelect_9595HeroGrayObjects1[i].getBehavior("Effect").setEffectDoubleParameter("Effect", "thickness", 2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharGray"), gdjs.CharSelectCode.GDCharGrayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharSelectCode.GDCharGrayObjects1.length;i<l;++i) {
    if ( !(gdjs.CharSelectCode.GDCharGrayObjects1[i].IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.CharSelectCode.GDCharGrayObjects1[k] = gdjs.CharSelectCode.GDCharGrayObjects1[i];
        ++k;
    }
}
gdjs.CharSelectCode.GDCharGrayObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Select_HeroGray"), gdjs.CharSelectCode.GDSelect_9595HeroGrayObjects1);
{for(var i = 0, len = gdjs.CharSelectCode.GDSelect_9595HeroGrayObjects1.length ;i < len;++i) {
    gdjs.CharSelectCode.GDSelect_9595HeroGrayObjects1[i].getBehavior("Effect").setEffectDoubleParameter("Effect", "thickness", 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharRed"), gdjs.CharSelectCode.GDCharRedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharSelectCode.GDCharRedObjects1.length;i<l;++i) {
    if ( gdjs.CharSelectCode.GDCharRedObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharSelectCode.GDCharRedObjects1[k] = gdjs.CharSelectCode.GDCharRedObjects1[i];
        ++k;
    }
}
gdjs.CharSelectCode.GDCharRedObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Select_HeroRed"), gdjs.CharSelectCode.GDSelect_9595HeroRedObjects1);
gdjs.copyArray(runtimeScene.getObjects("transition2"), gdjs.CharSelectCode.GDtransition2Objects1);
{for(var i = 0, len = gdjs.CharSelectCode.GDSelect_9595HeroRedObjects1.length ;i < len;++i) {
    gdjs.CharSelectCode.GDSelect_9595HeroRedObjects1[i].getBehavior("Effect").setEffectDoubleParameter("Effect", "thickness", 2);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}
{for(var i = 0, len = gdjs.CharSelectCode.GDtransition2Objects1.length ;i < len;++i) {
    gdjs.CharSelectCode.GDtransition2Objects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Horizontal", "Forward", 0, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharGray"), gdjs.CharSelectCode.GDCharGrayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharSelectCode.GDCharGrayObjects1.length;i<l;++i) {
    if ( gdjs.CharSelectCode.GDCharGrayObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharSelectCode.GDCharGrayObjects1[k] = gdjs.CharSelectCode.GDCharGrayObjects1[i];
        ++k;
    }
}
gdjs.CharSelectCode.GDCharGrayObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Select_HeroGray"), gdjs.CharSelectCode.GDSelect_9595HeroGrayObjects1);
gdjs.copyArray(runtimeScene.getObjects("transition2"), gdjs.CharSelectCode.GDtransition2Objects1);
{for(var i = 0, len = gdjs.CharSelectCode.GDSelect_9595HeroGrayObjects1.length ;i < len;++i) {
    gdjs.CharSelectCode.GDSelect_9595HeroGrayObjects1[i].getBehavior("Effect").setEffectDoubleParameter("Effect", "thickness", 2);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}
{for(var i = 0, len = gdjs.CharSelectCode.GDtransition2Objects1.length ;i < len;++i) {
    gdjs.CharSelectCode.GDtransition2Objects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Horizontal", "Forward", 0, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("transition2"), gdjs.CharSelectCode.GDtransition2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharSelectCode.GDtransition2Objects1.length;i<l;++i) {
    if ( gdjs.CharSelectCode.GDtransition2Objects1[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharSelectCode.GDtransition2Objects1[k] = gdjs.CharSelectCode.GDtransition2Objects1[i];
        ++k;
    }
}
gdjs.CharSelectCode.GDtransition2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelSelect", false);
}
}

}


};

gdjs.CharSelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CharSelectCode.GDPlatformObjects1.length = 0;
gdjs.CharSelectCode.GDPlatformObjects2.length = 0;
gdjs.CharSelectCode.GDCornerLObjects1.length = 0;
gdjs.CharSelectCode.GDCornerLObjects2.length = 0;
gdjs.CharSelectCode.GDCornerRObjects1.length = 0;
gdjs.CharSelectCode.GDCornerRObjects2.length = 0;
gdjs.CharSelectCode.GDWallLObjects1.length = 0;
gdjs.CharSelectCode.GDWallLObjects2.length = 0;
gdjs.CharSelectCode.GDWallRObjects1.length = 0;
gdjs.CharSelectCode.GDWallRObjects2.length = 0;
gdjs.CharSelectCode.GDSelect_9595HeroRedObjects1.length = 0;
gdjs.CharSelectCode.GDSelect_9595HeroRedObjects2.length = 0;
gdjs.CharSelectCode.GDSelect_9595HeroGrayObjects1.length = 0;
gdjs.CharSelectCode.GDSelect_9595HeroGrayObjects2.length = 0;
gdjs.CharSelectCode.GDCharRedObjects1.length = 0;
gdjs.CharSelectCode.GDCharRedObjects2.length = 0;
gdjs.CharSelectCode.GDCharGrayObjects1.length = 0;
gdjs.CharSelectCode.GDCharGrayObjects2.length = 0;
gdjs.CharSelectCode.GDSelectTxtObjects1.length = 0;
gdjs.CharSelectCode.GDSelectTxtObjects2.length = 0;
gdjs.CharSelectCode.GDTileMap_9595TerrainBGObjects1.length = 0;
gdjs.CharSelectCode.GDTileMap_9595TerrainBGObjects2.length = 0;
gdjs.CharSelectCode.GDTileMap_9595DecorationMGObjects1.length = 0;
gdjs.CharSelectCode.GDTileMap_9595DecorationMGObjects2.length = 0;
gdjs.CharSelectCode.GDPlayerSpawnerObjects1.length = 0;
gdjs.CharSelectCode.GDPlayerSpawnerObjects2.length = 0;
gdjs.CharSelectCode.GDHero_9595GrayObjects1.length = 0;
gdjs.CharSelectCode.GDHero_9595GrayObjects2.length = 0;
gdjs.CharSelectCode.GDDoorMGObjects1.length = 0;
gdjs.CharSelectCode.GDDoorMGObjects2.length = 0;
gdjs.CharSelectCode.GDWaterObjects1.length = 0;
gdjs.CharSelectCode.GDWaterObjects2.length = 0;
gdjs.CharSelectCode.GDWaterReflectionObjects1.length = 0;
gdjs.CharSelectCode.GDWaterReflectionObjects2.length = 0;
gdjs.CharSelectCode.GDWaterBottomObjects1.length = 0;
gdjs.CharSelectCode.GDWaterBottomObjects2.length = 0;
gdjs.CharSelectCode.GDSpikesObjects1.length = 0;
gdjs.CharSelectCode.GDSpikesObjects2.length = 0;
gdjs.CharSelectCode.GDBoxObjects1.length = 0;
gdjs.CharSelectCode.GDBoxObjects2.length = 0;
gdjs.CharSelectCode.GDHero_9595RedObjects1.length = 0;
gdjs.CharSelectCode.GDHero_9595RedObjects2.length = 0;
gdjs.CharSelectCode.GDtransition2Objects1.length = 0;
gdjs.CharSelectCode.GDtransition2Objects2.length = 0;
gdjs.CharSelectCode.GDDustObjects1.length = 0;
gdjs.CharSelectCode.GDDustObjects2.length = 0;
gdjs.CharSelectCode.GDJumpDustObjects1.length = 0;
gdjs.CharSelectCode.GDJumpDustObjects2.length = 0;
gdjs.CharSelectCode.GDFallDustObjects1.length = 0;
gdjs.CharSelectCode.GDFallDustObjects2.length = 0;
gdjs.CharSelectCode.GDFireObjects1.length = 0;
gdjs.CharSelectCode.GDFireObjects2.length = 0;
gdjs.CharSelectCode.GDDoorClosingObjects1.length = 0;
gdjs.CharSelectCode.GDDoorClosingObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595RightObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595RightObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595DownObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595DownObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595HomeObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595HomeObjects2.length = 0;
gdjs.CharSelectCode.GDtransitionObjects1.length = 0;
gdjs.CharSelectCode.GDtransitionObjects2.length = 0;
gdjs.CharSelectCode.GDPickup_9595DaimondObjects1.length = 0;
gdjs.CharSelectCode.GDPickup_9595DaimondObjects2.length = 0;
gdjs.CharSelectCode.GDUI_9595DaimondObjects1.length = 0;
gdjs.CharSelectCode.GDUI_9595DaimondObjects2.length = 0;
gdjs.CharSelectCode.GDUI_9595DaimondsCollectedObjects1.length = 0;
gdjs.CharSelectCode.GDUI_9595DaimondsCollectedObjects2.length = 0;
gdjs.CharSelectCode.GDDaimond_9595ParticleObjects1.length = 0;
gdjs.CharSelectCode.GDDaimond_9595ParticleObjects2.length = 0;
gdjs.CharSelectCode.GDLevelName3Objects1.length = 0;
gdjs.CharSelectCode.GDLevelName3Objects2.length = 0;

gdjs.CharSelectCode.eventsList0(runtimeScene);
gdjs.CharSelectCode.GDPlatformObjects1.length = 0;
gdjs.CharSelectCode.GDPlatformObjects2.length = 0;
gdjs.CharSelectCode.GDCornerLObjects1.length = 0;
gdjs.CharSelectCode.GDCornerLObjects2.length = 0;
gdjs.CharSelectCode.GDCornerRObjects1.length = 0;
gdjs.CharSelectCode.GDCornerRObjects2.length = 0;
gdjs.CharSelectCode.GDWallLObjects1.length = 0;
gdjs.CharSelectCode.GDWallLObjects2.length = 0;
gdjs.CharSelectCode.GDWallRObjects1.length = 0;
gdjs.CharSelectCode.GDWallRObjects2.length = 0;
gdjs.CharSelectCode.GDSelect_9595HeroRedObjects1.length = 0;
gdjs.CharSelectCode.GDSelect_9595HeroRedObjects2.length = 0;
gdjs.CharSelectCode.GDSelect_9595HeroGrayObjects1.length = 0;
gdjs.CharSelectCode.GDSelect_9595HeroGrayObjects2.length = 0;
gdjs.CharSelectCode.GDCharRedObjects1.length = 0;
gdjs.CharSelectCode.GDCharRedObjects2.length = 0;
gdjs.CharSelectCode.GDCharGrayObjects1.length = 0;
gdjs.CharSelectCode.GDCharGrayObjects2.length = 0;
gdjs.CharSelectCode.GDSelectTxtObjects1.length = 0;
gdjs.CharSelectCode.GDSelectTxtObjects2.length = 0;
gdjs.CharSelectCode.GDTileMap_9595TerrainBGObjects1.length = 0;
gdjs.CharSelectCode.GDTileMap_9595TerrainBGObjects2.length = 0;
gdjs.CharSelectCode.GDTileMap_9595DecorationMGObjects1.length = 0;
gdjs.CharSelectCode.GDTileMap_9595DecorationMGObjects2.length = 0;
gdjs.CharSelectCode.GDPlayerSpawnerObjects1.length = 0;
gdjs.CharSelectCode.GDPlayerSpawnerObjects2.length = 0;
gdjs.CharSelectCode.GDHero_9595GrayObjects1.length = 0;
gdjs.CharSelectCode.GDHero_9595GrayObjects2.length = 0;
gdjs.CharSelectCode.GDDoorMGObjects1.length = 0;
gdjs.CharSelectCode.GDDoorMGObjects2.length = 0;
gdjs.CharSelectCode.GDWaterObjects1.length = 0;
gdjs.CharSelectCode.GDWaterObjects2.length = 0;
gdjs.CharSelectCode.GDWaterReflectionObjects1.length = 0;
gdjs.CharSelectCode.GDWaterReflectionObjects2.length = 0;
gdjs.CharSelectCode.GDWaterBottomObjects1.length = 0;
gdjs.CharSelectCode.GDWaterBottomObjects2.length = 0;
gdjs.CharSelectCode.GDSpikesObjects1.length = 0;
gdjs.CharSelectCode.GDSpikesObjects2.length = 0;
gdjs.CharSelectCode.GDBoxObjects1.length = 0;
gdjs.CharSelectCode.GDBoxObjects2.length = 0;
gdjs.CharSelectCode.GDHero_9595RedObjects1.length = 0;
gdjs.CharSelectCode.GDHero_9595RedObjects2.length = 0;
gdjs.CharSelectCode.GDtransition2Objects1.length = 0;
gdjs.CharSelectCode.GDtransition2Objects2.length = 0;
gdjs.CharSelectCode.GDDustObjects1.length = 0;
gdjs.CharSelectCode.GDDustObjects2.length = 0;
gdjs.CharSelectCode.GDJumpDustObjects1.length = 0;
gdjs.CharSelectCode.GDJumpDustObjects2.length = 0;
gdjs.CharSelectCode.GDFallDustObjects1.length = 0;
gdjs.CharSelectCode.GDFallDustObjects2.length = 0;
gdjs.CharSelectCode.GDFireObjects1.length = 0;
gdjs.CharSelectCode.GDFireObjects2.length = 0;
gdjs.CharSelectCode.GDDoorClosingObjects1.length = 0;
gdjs.CharSelectCode.GDDoorClosingObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595RightObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595RightObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595DownObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595DownObjects2.length = 0;
gdjs.CharSelectCode.GDBtn_9595HomeObjects1.length = 0;
gdjs.CharSelectCode.GDBtn_9595HomeObjects2.length = 0;
gdjs.CharSelectCode.GDtransitionObjects1.length = 0;
gdjs.CharSelectCode.GDtransitionObjects2.length = 0;
gdjs.CharSelectCode.GDPickup_9595DaimondObjects1.length = 0;
gdjs.CharSelectCode.GDPickup_9595DaimondObjects2.length = 0;
gdjs.CharSelectCode.GDUI_9595DaimondObjects1.length = 0;
gdjs.CharSelectCode.GDUI_9595DaimondObjects2.length = 0;
gdjs.CharSelectCode.GDUI_9595DaimondsCollectedObjects1.length = 0;
gdjs.CharSelectCode.GDUI_9595DaimondsCollectedObjects2.length = 0;
gdjs.CharSelectCode.GDDaimond_9595ParticleObjects1.length = 0;
gdjs.CharSelectCode.GDDaimond_9595ParticleObjects2.length = 0;
gdjs.CharSelectCode.GDLevelName3Objects1.length = 0;
gdjs.CharSelectCode.GDLevelName3Objects2.length = 0;


return;

}

gdjs['CharSelectCode'] = gdjs.CharSelectCode;
