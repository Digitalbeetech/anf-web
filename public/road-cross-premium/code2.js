gdjs.LevelSelectCode = {};
gdjs.LevelSelectCode.localVariables = [];
gdjs.LevelSelectCode.idToCallbackMap = new Map();
gdjs.LevelSelectCode.GDGameBGObjects1= [];
gdjs.LevelSelectCode.GDGameBGObjects2= [];
gdjs.LevelSelectCode.GDGameLogoObjects1= [];
gdjs.LevelSelectCode.GDGameLogoObjects2= [];
gdjs.LevelSelectCode.GDTxt_9595SelectLevelObjects1= [];
gdjs.LevelSelectCode.GDTxt_9595SelectLevelObjects2= [];
gdjs.LevelSelectCode.GDCityObjects1= [];
gdjs.LevelSelectCode.GDCityObjects2= [];
gdjs.LevelSelectCode.GDDesertObjects1= [];
gdjs.LevelSelectCode.GDDesertObjects2= [];
gdjs.LevelSelectCode.GDFarmObjects1= [];
gdjs.LevelSelectCode.GDFarmObjects2= [];
gdjs.LevelSelectCode.GDUnderWaterObjects1= [];
gdjs.LevelSelectCode.GDUnderWaterObjects2= [];
gdjs.LevelSelectCode.GDAntarcticaObjects1= [];
gdjs.LevelSelectCode.GDAntarcticaObjects2= [];
gdjs.LevelSelectCode.GDLock_9595DesertObjects1= [];
gdjs.LevelSelectCode.GDLock_9595DesertObjects2= [];
gdjs.LevelSelectCode.GDLock_9595FarmObjects1= [];
gdjs.LevelSelectCode.GDLock_9595FarmObjects2= [];
gdjs.LevelSelectCode.GDLock_9595UnderWaterObjects1= [];
gdjs.LevelSelectCode.GDLock_9595UnderWaterObjects2= [];
gdjs.LevelSelectCode.GDLock_9595AntarcticaObjects1= [];
gdjs.LevelSelectCode.GDLock_9595AntarcticaObjects2= [];
gdjs.LevelSelectCode.GDPremiumButtonObjects1= [];
gdjs.LevelSelectCode.GDPremiumButtonObjects2= [];


gdjs.LevelSelectCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("City"), gdjs.LevelSelectCode.GDCityObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDCityObjects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDCityObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDCityObjects1[k] = gdjs.LevelSelectCode.GDCityObjects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDCityObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "City", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Desert"), gdjs.LevelSelectCode.GDDesertObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDDesertObjects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDDesertObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDDesertObjects1[k] = gdjs.LevelSelectCode.GDDesertObjects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDDesertObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Desert", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Farm"), gdjs.LevelSelectCode.GDFarmObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDFarmObjects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDFarmObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDFarmObjects1[k] = gdjs.LevelSelectCode.GDFarmObjects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDFarmObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Farm", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UnderWater"), gdjs.LevelSelectCode.GDUnderWaterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDUnderWaterObjects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDUnderWaterObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDUnderWaterObjects1[k] = gdjs.LevelSelectCode.GDUnderWaterObjects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDUnderWaterObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "UnderWater", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Antarctica"), gdjs.LevelSelectCode.GDAntarcticaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDAntarcticaObjects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDAntarcticaObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDAntarcticaObjects1[k] = gdjs.LevelSelectCode.GDAntarcticaObjects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDAntarcticaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Antarctica", false);
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "adaptWidth");
}
{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "adaptHeight");
}
{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Antarctica"), gdjs.LevelSelectCode.GDAntarcticaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Desert"), gdjs.LevelSelectCode.GDDesertObjects1);
gdjs.copyArray(runtimeScene.getObjects("Farm"), gdjs.LevelSelectCode.GDFarmObjects1);
gdjs.copyArray(runtimeScene.getObjects("UnderWater"), gdjs.LevelSelectCode.GDUnderWaterObjects1);
{for(var i = 0, len = gdjs.LevelSelectCode.GDDesertObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDDesertObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDFarmObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDFarmObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDUnderWaterObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDUnderWaterObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDAntarcticaObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDAntarcticaObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDDesertObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDDesertObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDFarmObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDFarmObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDUnderWaterObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDUnderWaterObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDAntarcticaObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDAntarcticaObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Antarctica"), gdjs.LevelSelectCode.GDAntarcticaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Desert"), gdjs.LevelSelectCode.GDDesertObjects1);
gdjs.copyArray(runtimeScene.getObjects("Farm"), gdjs.LevelSelectCode.GDFarmObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lock_Antarctica"), gdjs.LevelSelectCode.GDLock_9595AntarcticaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lock_Desert"), gdjs.LevelSelectCode.GDLock_9595DesertObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lock_Farm"), gdjs.LevelSelectCode.GDLock_9595FarmObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lock_UnderWater"), gdjs.LevelSelectCode.GDLock_9595UnderWaterObjects1);
gdjs.copyArray(runtimeScene.getObjects("PremiumButton"), gdjs.LevelSelectCode.GDPremiumButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("UnderWater"), gdjs.LevelSelectCode.GDUnderWaterObjects1);
{for(var i = 0, len = gdjs.LevelSelectCode.GDDesertObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDDesertObjects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDFarmObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDFarmObjects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDUnderWaterObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDUnderWaterObjects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDAntarcticaObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDAntarcticaObjects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDDesertObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDDesertObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDFarmObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDFarmObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDUnderWaterObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDUnderWaterObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDAntarcticaObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDAntarcticaObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDLock_9595DesertObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLock_9595DesertObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDLock_9595FarmObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLock_9595FarmObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDLock_9595UnderWaterObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLock_9595UnderWaterObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDLock_9595AntarcticaObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLock_9595AntarcticaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDPremiumButtonObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDPremiumButtonObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.LevelSelectCode.GDPremiumButtonObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDPremiumButtonObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PremiumButton"), gdjs.LevelSelectCode.GDPremiumButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDPremiumButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDPremiumButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDPremiumButtonObjects1[k] = gdjs.LevelSelectCode.GDPremiumButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDPremiumButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(41005100);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://abdullahandfatima.com/membership", runtimeScene);
}
}

}


};

gdjs.LevelSelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelSelectCode.GDGameBGObjects1.length = 0;
gdjs.LevelSelectCode.GDGameBGObjects2.length = 0;
gdjs.LevelSelectCode.GDGameLogoObjects1.length = 0;
gdjs.LevelSelectCode.GDGameLogoObjects2.length = 0;
gdjs.LevelSelectCode.GDTxt_9595SelectLevelObjects1.length = 0;
gdjs.LevelSelectCode.GDTxt_9595SelectLevelObjects2.length = 0;
gdjs.LevelSelectCode.GDCityObjects1.length = 0;
gdjs.LevelSelectCode.GDCityObjects2.length = 0;
gdjs.LevelSelectCode.GDDesertObjects1.length = 0;
gdjs.LevelSelectCode.GDDesertObjects2.length = 0;
gdjs.LevelSelectCode.GDFarmObjects1.length = 0;
gdjs.LevelSelectCode.GDFarmObjects2.length = 0;
gdjs.LevelSelectCode.GDUnderWaterObjects1.length = 0;
gdjs.LevelSelectCode.GDUnderWaterObjects2.length = 0;
gdjs.LevelSelectCode.GDAntarcticaObjects1.length = 0;
gdjs.LevelSelectCode.GDAntarcticaObjects2.length = 0;
gdjs.LevelSelectCode.GDLock_9595DesertObjects1.length = 0;
gdjs.LevelSelectCode.GDLock_9595DesertObjects2.length = 0;
gdjs.LevelSelectCode.GDLock_9595FarmObjects1.length = 0;
gdjs.LevelSelectCode.GDLock_9595FarmObjects2.length = 0;
gdjs.LevelSelectCode.GDLock_9595UnderWaterObjects1.length = 0;
gdjs.LevelSelectCode.GDLock_9595UnderWaterObjects2.length = 0;
gdjs.LevelSelectCode.GDLock_9595AntarcticaObjects1.length = 0;
gdjs.LevelSelectCode.GDLock_9595AntarcticaObjects2.length = 0;
gdjs.LevelSelectCode.GDPremiumButtonObjects1.length = 0;
gdjs.LevelSelectCode.GDPremiumButtonObjects2.length = 0;

gdjs.LevelSelectCode.eventsList0(runtimeScene);
gdjs.LevelSelectCode.GDGameBGObjects1.length = 0;
gdjs.LevelSelectCode.GDGameBGObjects2.length = 0;
gdjs.LevelSelectCode.GDGameLogoObjects1.length = 0;
gdjs.LevelSelectCode.GDGameLogoObjects2.length = 0;
gdjs.LevelSelectCode.GDTxt_9595SelectLevelObjects1.length = 0;
gdjs.LevelSelectCode.GDTxt_9595SelectLevelObjects2.length = 0;
gdjs.LevelSelectCode.GDCityObjects1.length = 0;
gdjs.LevelSelectCode.GDCityObjects2.length = 0;
gdjs.LevelSelectCode.GDDesertObjects1.length = 0;
gdjs.LevelSelectCode.GDDesertObjects2.length = 0;
gdjs.LevelSelectCode.GDFarmObjects1.length = 0;
gdjs.LevelSelectCode.GDFarmObjects2.length = 0;
gdjs.LevelSelectCode.GDUnderWaterObjects1.length = 0;
gdjs.LevelSelectCode.GDUnderWaterObjects2.length = 0;
gdjs.LevelSelectCode.GDAntarcticaObjects1.length = 0;
gdjs.LevelSelectCode.GDAntarcticaObjects2.length = 0;
gdjs.LevelSelectCode.GDLock_9595DesertObjects1.length = 0;
gdjs.LevelSelectCode.GDLock_9595DesertObjects2.length = 0;
gdjs.LevelSelectCode.GDLock_9595FarmObjects1.length = 0;
gdjs.LevelSelectCode.GDLock_9595FarmObjects2.length = 0;
gdjs.LevelSelectCode.GDLock_9595UnderWaterObjects1.length = 0;
gdjs.LevelSelectCode.GDLock_9595UnderWaterObjects2.length = 0;
gdjs.LevelSelectCode.GDLock_9595AntarcticaObjects1.length = 0;
gdjs.LevelSelectCode.GDLock_9595AntarcticaObjects2.length = 0;
gdjs.LevelSelectCode.GDPremiumButtonObjects1.length = 0;
gdjs.LevelSelectCode.GDPremiumButtonObjects2.length = 0;


return;

}

gdjs['LevelSelectCode'] = gdjs.LevelSelectCode;
