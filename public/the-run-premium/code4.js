gdjs.ShopCode = {};
gdjs.ShopCode.localVariables = [];
gdjs.ShopCode.idToCallbackMap = new Map();
gdjs.ShopCode.GDBG_9595MenuObjects1= [];
gdjs.ShopCode.GDBG_9595MenuObjects2= [];
gdjs.ShopCode.GDBG_9595MenuObjects3= [];
gdjs.ShopCode.GDHomeButtonObjects1= [];
gdjs.ShopCode.GDHomeButtonObjects2= [];
gdjs.ShopCode.GDHomeButtonObjects3= [];
gdjs.ShopCode.GDShopTitleObjects1= [];
gdjs.ShopCode.GDShopTitleObjects2= [];
gdjs.ShopCode.GDShopTitleObjects3= [];
gdjs.ShopCode.GDVIP_9595IconObjects1= [];
gdjs.ShopCode.GDVIP_9595IconObjects2= [];
gdjs.ShopCode.GDVIP_9595IconObjects3= [];
gdjs.ShopCode.GDVIP_9595FeaturesObjects1= [];
gdjs.ShopCode.GDVIP_9595FeaturesObjects2= [];
gdjs.ShopCode.GDVIP_9595FeaturesObjects3= [];
gdjs.ShopCode.GDSubscribeButtonObjects1= [];
gdjs.ShopCode.GDSubscribeButtonObjects2= [];
gdjs.ShopCode.GDSubscribeButtonObjects3= [];
gdjs.ShopCode.GDSubscribedButtonObjects1= [];
gdjs.ShopCode.GDSubscribedButtonObjects2= [];
gdjs.ShopCode.GDSubscribedButtonObjects3= [];
gdjs.ShopCode.GDPlayerControllerObjects1= [];
gdjs.ShopCode.GDPlayerControllerObjects2= [];
gdjs.ShopCode.GDPlayerControllerObjects3= [];
gdjs.ShopCode.GDGroundMaskObjects1= [];
gdjs.ShopCode.GDGroundMaskObjects2= [];
gdjs.ShopCode.GDGroundMaskObjects3= [];
gdjs.ShopCode.GDBGObjects1= [];
gdjs.ShopCode.GDBGObjects2= [];
gdjs.ShopCode.GDBGObjects3= [];
gdjs.ShopCode.GDRoomGenObjects1= [];
gdjs.ShopCode.GDRoomGenObjects2= [];
gdjs.ShopCode.GDRoomGenObjects3= [];
gdjs.ShopCode.GDEnemyObjects1= [];
gdjs.ShopCode.GDEnemyObjects2= [];
gdjs.ShopCode.GDEnemyObjects3= [];
gdjs.ShopCode.GDCoinObjects1= [];
gdjs.ShopCode.GDCoinObjects2= [];
gdjs.ShopCode.GDCoinObjects3= [];
gdjs.ShopCode.GDCoinPickEffectObjects1= [];
gdjs.ShopCode.GDCoinPickEffectObjects2= [];
gdjs.ShopCode.GDCoinPickEffectObjects3= [];
gdjs.ShopCode.GDFadeBGObjects1= [];
gdjs.ShopCode.GDFadeBGObjects2= [];
gdjs.ShopCode.GDFadeBGObjects3= [];
gdjs.ShopCode.GDJumpButtonObjects1= [];
gdjs.ShopCode.GDJumpButtonObjects2= [];
gdjs.ShopCode.GDJumpButtonObjects3= [];
gdjs.ShopCode.GDGround_9595ThruMaskObjects1= [];
gdjs.ShopCode.GDGround_9595ThruMaskObjects2= [];
gdjs.ShopCode.GDGround_9595ThruMaskObjects3= [];
gdjs.ShopCode.GDFlagUIObjects1= [];
gdjs.ShopCode.GDFlagUIObjects2= [];
gdjs.ShopCode.GDFlagUIObjects3= [];
gdjs.ShopCode.GDCoinUIObjects1= [];
gdjs.ShopCode.GDCoinUIObjects2= [];
gdjs.ShopCode.GDCoinUIObjects3= [];
gdjs.ShopCode.GDPauseButtonObjects1= [];
gdjs.ShopCode.GDPauseButtonObjects2= [];
gdjs.ShopCode.GDPauseButtonObjects3= [];
gdjs.ShopCode.GDCoinsCollectedObjects1= [];
gdjs.ShopCode.GDCoinsCollectedObjects2= [];
gdjs.ShopCode.GDCoinsCollectedObjects3= [];
gdjs.ShopCode.GDDistanceMadeObjects1= [];
gdjs.ShopCode.GDDistanceMadeObjects2= [];
gdjs.ShopCode.GDDistanceMadeObjects3= [];
gdjs.ShopCode.GDDeathAnimationObjects1= [];
gdjs.ShopCode.GDDeathAnimationObjects2= [];
gdjs.ShopCode.GDDeathAnimationObjects3= [];
gdjs.ShopCode.GDChar_9595AbdullahObjects1= [];
gdjs.ShopCode.GDChar_9595AbdullahObjects2= [];
gdjs.ShopCode.GDChar_9595AbdullahObjects3= [];
gdjs.ShopCode.GDChar_9595FatimaObjects1= [];
gdjs.ShopCode.GDChar_9595FatimaObjects2= [];
gdjs.ShopCode.GDChar_9595FatimaObjects3= [];


gdjs.ShopCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__InAppPurchase__RegisterItem.func(runtimeScene, "vip_subscription", "paid subscription", "android-playstore", null);
}
{gdjs.evtsExt__InAppPurchase__RegisterItem.func(runtimeScene, "vip_subscription", "paid subscription", "ios-appstore", null);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__InAppPurchase__FinalizeRegistration.func(runtimeScene, null);
}
}

}


};gdjs.ShopCode.asyncCallback41333988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ShopCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
gdjs.ShopCode.localVariables.length = 0;
}
gdjs.ShopCode.idToCallbackMap.set(41333988, gdjs.ShopCode.asyncCallback41333988);
gdjs.ShopCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ShopCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.ShopCode.asyncCallback41333988(runtimeScene, asyncObjectsList)), 41333988, asyncObjectsList);
}
}

}


};gdjs.ShopCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__InAppPurchase__GetProduct.func(runtimeScene, "vip_subscription", "sc_vip_subscription", null);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__InAppPurchase__WatchItemEvent.func(runtimeScene, "vip_subscription", "vip_purchased", "approved", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SubscribeButton"), gdjs.ShopCode.GDSubscribeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDSubscribeButtonObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDSubscribeButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDSubscribeButtonObjects1[k] = gdjs.ShopCode.GDSubscribeButtonObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDSubscribeButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__InAppPurchase__OrderItem.func(runtimeScene, "vip_subscription", null);
}
}

}


};gdjs.ShopCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeBG"), gdjs.ShopCode.GDFadeBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubscribedButton"), gdjs.ShopCode.GDSubscribedButtonObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDFadeBGObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDFadeBGObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDSubscribedButtonObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDSubscribedButtonObjects1[i].hide();
}
}
{gdjs.adMob.loadInterstitial("ca-app-pub-6257695730616358/9656020166", "ca-app-pub-6257695730616358/9390945211", true);
}

{ //Subevents
gdjs.ShopCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeBG"), gdjs.ShopCode.GDFadeBGObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDFadeBGObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDFadeBGObjects1[i].getBehavior("Opacity").setOpacity(gdjs.ShopCode.GDFadeBGObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.ShopCode.GDHomeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDHomeButtonObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDHomeButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDHomeButtonObjects1[k] = gdjs.ShopCode.GDHomeButtonObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDHomeButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.ShopCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InAppPurchase__StoreReady.func(runtimeScene, null);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ShopCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(41338612);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SubscribeButton"), gdjs.ShopCode.GDSubscribeButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubscribedButton"), gdjs.ShopCode.GDSubscribedButtonObjects1);
{gdjs.evtsExt__InAppPurchase__FinalizePurchase.func(runtimeScene, "vip_subscription", null);
}
{for(var i = 0, len = gdjs.ShopCode.GDSubscribeButtonObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDSubscribeButtonObjects1[i].hide();
}
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(true);
}
{for(var i = 0, len = gdjs.ShopCode.GDSubscribedButtonObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDSubscribedButtonObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(41340732);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SubscribeButton"), gdjs.ShopCode.GDSubscribeButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubscribedButton"), gdjs.ShopCode.GDSubscribedButtonObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDSubscribedButtonObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDSubscribedButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDSubscribeButtonObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDSubscribeButtonObjects1[i].hide(false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(false);
}
}

}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDBG_9595MenuObjects1.length = 0;
gdjs.ShopCode.GDBG_9595MenuObjects2.length = 0;
gdjs.ShopCode.GDBG_9595MenuObjects3.length = 0;
gdjs.ShopCode.GDHomeButtonObjects1.length = 0;
gdjs.ShopCode.GDHomeButtonObjects2.length = 0;
gdjs.ShopCode.GDHomeButtonObjects3.length = 0;
gdjs.ShopCode.GDShopTitleObjects1.length = 0;
gdjs.ShopCode.GDShopTitleObjects2.length = 0;
gdjs.ShopCode.GDShopTitleObjects3.length = 0;
gdjs.ShopCode.GDVIP_9595IconObjects1.length = 0;
gdjs.ShopCode.GDVIP_9595IconObjects2.length = 0;
gdjs.ShopCode.GDVIP_9595IconObjects3.length = 0;
gdjs.ShopCode.GDVIP_9595FeaturesObjects1.length = 0;
gdjs.ShopCode.GDVIP_9595FeaturesObjects2.length = 0;
gdjs.ShopCode.GDVIP_9595FeaturesObjects3.length = 0;
gdjs.ShopCode.GDSubscribeButtonObjects1.length = 0;
gdjs.ShopCode.GDSubscribeButtonObjects2.length = 0;
gdjs.ShopCode.GDSubscribeButtonObjects3.length = 0;
gdjs.ShopCode.GDSubscribedButtonObjects1.length = 0;
gdjs.ShopCode.GDSubscribedButtonObjects2.length = 0;
gdjs.ShopCode.GDSubscribedButtonObjects3.length = 0;
gdjs.ShopCode.GDPlayerControllerObjects1.length = 0;
gdjs.ShopCode.GDPlayerControllerObjects2.length = 0;
gdjs.ShopCode.GDPlayerControllerObjects3.length = 0;
gdjs.ShopCode.GDGroundMaskObjects1.length = 0;
gdjs.ShopCode.GDGroundMaskObjects2.length = 0;
gdjs.ShopCode.GDGroundMaskObjects3.length = 0;
gdjs.ShopCode.GDBGObjects1.length = 0;
gdjs.ShopCode.GDBGObjects2.length = 0;
gdjs.ShopCode.GDBGObjects3.length = 0;
gdjs.ShopCode.GDRoomGenObjects1.length = 0;
gdjs.ShopCode.GDRoomGenObjects2.length = 0;
gdjs.ShopCode.GDRoomGenObjects3.length = 0;
gdjs.ShopCode.GDEnemyObjects1.length = 0;
gdjs.ShopCode.GDEnemyObjects2.length = 0;
gdjs.ShopCode.GDEnemyObjects3.length = 0;
gdjs.ShopCode.GDCoinObjects1.length = 0;
gdjs.ShopCode.GDCoinObjects2.length = 0;
gdjs.ShopCode.GDCoinObjects3.length = 0;
gdjs.ShopCode.GDCoinPickEffectObjects1.length = 0;
gdjs.ShopCode.GDCoinPickEffectObjects2.length = 0;
gdjs.ShopCode.GDCoinPickEffectObjects3.length = 0;
gdjs.ShopCode.GDFadeBGObjects1.length = 0;
gdjs.ShopCode.GDFadeBGObjects2.length = 0;
gdjs.ShopCode.GDFadeBGObjects3.length = 0;
gdjs.ShopCode.GDJumpButtonObjects1.length = 0;
gdjs.ShopCode.GDJumpButtonObjects2.length = 0;
gdjs.ShopCode.GDJumpButtonObjects3.length = 0;
gdjs.ShopCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.ShopCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.ShopCode.GDGround_9595ThruMaskObjects3.length = 0;
gdjs.ShopCode.GDFlagUIObjects1.length = 0;
gdjs.ShopCode.GDFlagUIObjects2.length = 0;
gdjs.ShopCode.GDFlagUIObjects3.length = 0;
gdjs.ShopCode.GDCoinUIObjects1.length = 0;
gdjs.ShopCode.GDCoinUIObjects2.length = 0;
gdjs.ShopCode.GDCoinUIObjects3.length = 0;
gdjs.ShopCode.GDPauseButtonObjects1.length = 0;
gdjs.ShopCode.GDPauseButtonObjects2.length = 0;
gdjs.ShopCode.GDPauseButtonObjects3.length = 0;
gdjs.ShopCode.GDCoinsCollectedObjects1.length = 0;
gdjs.ShopCode.GDCoinsCollectedObjects2.length = 0;
gdjs.ShopCode.GDCoinsCollectedObjects3.length = 0;
gdjs.ShopCode.GDDistanceMadeObjects1.length = 0;
gdjs.ShopCode.GDDistanceMadeObjects2.length = 0;
gdjs.ShopCode.GDDistanceMadeObjects3.length = 0;
gdjs.ShopCode.GDDeathAnimationObjects1.length = 0;
gdjs.ShopCode.GDDeathAnimationObjects2.length = 0;
gdjs.ShopCode.GDDeathAnimationObjects3.length = 0;
gdjs.ShopCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.ShopCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.ShopCode.GDChar_9595AbdullahObjects3.length = 0;
gdjs.ShopCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.ShopCode.GDChar_9595FatimaObjects2.length = 0;
gdjs.ShopCode.GDChar_9595FatimaObjects3.length = 0;

gdjs.ShopCode.eventsList3(runtimeScene);
gdjs.ShopCode.GDBG_9595MenuObjects1.length = 0;
gdjs.ShopCode.GDBG_9595MenuObjects2.length = 0;
gdjs.ShopCode.GDBG_9595MenuObjects3.length = 0;
gdjs.ShopCode.GDHomeButtonObjects1.length = 0;
gdjs.ShopCode.GDHomeButtonObjects2.length = 0;
gdjs.ShopCode.GDHomeButtonObjects3.length = 0;
gdjs.ShopCode.GDShopTitleObjects1.length = 0;
gdjs.ShopCode.GDShopTitleObjects2.length = 0;
gdjs.ShopCode.GDShopTitleObjects3.length = 0;
gdjs.ShopCode.GDVIP_9595IconObjects1.length = 0;
gdjs.ShopCode.GDVIP_9595IconObjects2.length = 0;
gdjs.ShopCode.GDVIP_9595IconObjects3.length = 0;
gdjs.ShopCode.GDVIP_9595FeaturesObjects1.length = 0;
gdjs.ShopCode.GDVIP_9595FeaturesObjects2.length = 0;
gdjs.ShopCode.GDVIP_9595FeaturesObjects3.length = 0;
gdjs.ShopCode.GDSubscribeButtonObjects1.length = 0;
gdjs.ShopCode.GDSubscribeButtonObjects2.length = 0;
gdjs.ShopCode.GDSubscribeButtonObjects3.length = 0;
gdjs.ShopCode.GDSubscribedButtonObjects1.length = 0;
gdjs.ShopCode.GDSubscribedButtonObjects2.length = 0;
gdjs.ShopCode.GDSubscribedButtonObjects3.length = 0;
gdjs.ShopCode.GDPlayerControllerObjects1.length = 0;
gdjs.ShopCode.GDPlayerControllerObjects2.length = 0;
gdjs.ShopCode.GDPlayerControllerObjects3.length = 0;
gdjs.ShopCode.GDGroundMaskObjects1.length = 0;
gdjs.ShopCode.GDGroundMaskObjects2.length = 0;
gdjs.ShopCode.GDGroundMaskObjects3.length = 0;
gdjs.ShopCode.GDBGObjects1.length = 0;
gdjs.ShopCode.GDBGObjects2.length = 0;
gdjs.ShopCode.GDBGObjects3.length = 0;
gdjs.ShopCode.GDRoomGenObjects1.length = 0;
gdjs.ShopCode.GDRoomGenObjects2.length = 0;
gdjs.ShopCode.GDRoomGenObjects3.length = 0;
gdjs.ShopCode.GDEnemyObjects1.length = 0;
gdjs.ShopCode.GDEnemyObjects2.length = 0;
gdjs.ShopCode.GDEnemyObjects3.length = 0;
gdjs.ShopCode.GDCoinObjects1.length = 0;
gdjs.ShopCode.GDCoinObjects2.length = 0;
gdjs.ShopCode.GDCoinObjects3.length = 0;
gdjs.ShopCode.GDCoinPickEffectObjects1.length = 0;
gdjs.ShopCode.GDCoinPickEffectObjects2.length = 0;
gdjs.ShopCode.GDCoinPickEffectObjects3.length = 0;
gdjs.ShopCode.GDFadeBGObjects1.length = 0;
gdjs.ShopCode.GDFadeBGObjects2.length = 0;
gdjs.ShopCode.GDFadeBGObjects3.length = 0;
gdjs.ShopCode.GDJumpButtonObjects1.length = 0;
gdjs.ShopCode.GDJumpButtonObjects2.length = 0;
gdjs.ShopCode.GDJumpButtonObjects3.length = 0;
gdjs.ShopCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.ShopCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.ShopCode.GDGround_9595ThruMaskObjects3.length = 0;
gdjs.ShopCode.GDFlagUIObjects1.length = 0;
gdjs.ShopCode.GDFlagUIObjects2.length = 0;
gdjs.ShopCode.GDFlagUIObjects3.length = 0;
gdjs.ShopCode.GDCoinUIObjects1.length = 0;
gdjs.ShopCode.GDCoinUIObjects2.length = 0;
gdjs.ShopCode.GDCoinUIObjects3.length = 0;
gdjs.ShopCode.GDPauseButtonObjects1.length = 0;
gdjs.ShopCode.GDPauseButtonObjects2.length = 0;
gdjs.ShopCode.GDPauseButtonObjects3.length = 0;
gdjs.ShopCode.GDCoinsCollectedObjects1.length = 0;
gdjs.ShopCode.GDCoinsCollectedObjects2.length = 0;
gdjs.ShopCode.GDCoinsCollectedObjects3.length = 0;
gdjs.ShopCode.GDDistanceMadeObjects1.length = 0;
gdjs.ShopCode.GDDistanceMadeObjects2.length = 0;
gdjs.ShopCode.GDDistanceMadeObjects3.length = 0;
gdjs.ShopCode.GDDeathAnimationObjects1.length = 0;
gdjs.ShopCode.GDDeathAnimationObjects2.length = 0;
gdjs.ShopCode.GDDeathAnimationObjects3.length = 0;
gdjs.ShopCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.ShopCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.ShopCode.GDChar_9595AbdullahObjects3.length = 0;
gdjs.ShopCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.ShopCode.GDChar_9595FatimaObjects2.length = 0;
gdjs.ShopCode.GDChar_9595FatimaObjects3.length = 0;


return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
