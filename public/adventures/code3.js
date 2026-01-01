gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.idToCallbackMap = new Map();
gdjs.MainMenuCode.GDBGObjects1= [];
gdjs.MainMenuCode.GDBGObjects2= [];
gdjs.MainMenuCode.GDBG_9595CloudsObjects1= [];
gdjs.MainMenuCode.GDBG_9595CloudsObjects2= [];
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];
gdjs.MainMenuCode.GDBtn_9595StartObjects1= [];
gdjs.MainMenuCode.GDBtn_9595StartObjects2= [];
gdjs.MainMenuCode.GDBtn_9595MuteObjects1= [];
gdjs.MainMenuCode.GDBtn_9595MuteObjects2= [];
gdjs.MainMenuCode.GDFadeWObjects1= [];
gdjs.MainMenuCode.GDFadeWObjects2= [];
gdjs.MainMenuCode.GDBtn_9595LeftObjects1= [];
gdjs.MainMenuCode.GDBtn_9595LeftObjects2= [];
gdjs.MainMenuCode.GDBtn_9595RightObjects1= [];
gdjs.MainMenuCode.GDBtn_9595RightObjects2= [];
gdjs.MainMenuCode.GDBtn_9595JumpObjects1= [];
gdjs.MainMenuCode.GDBtn_9595JumpObjects2= [];


gdjs.MainMenuCode.asyncCallback19734076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CharSelect", false);
}
gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.idToCallbackMap.set(19734076, gdjs.MainMenuCode.asyncCallback19734076);
gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback19734076(runtimeScene, asyncObjectsList)), 19734076, asyncObjectsList);
}
}

}


};gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Btn_Start"), gdjs.MainMenuCode.GDBtn_9595StartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBtn_9595StartObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDBtn_9595StartObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBtn_9595StartObjects1[k] = gdjs.MainMenuCode.GDBtn_9595StartObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBtn_9595StartObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

};gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeW"), gdjs.MainMenuCode.GDFadeWObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDFadeWObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFadeWObjects1[i].getBehavior("Opacity").setOpacity(gdjs.MainMenuCode.GDFadeWObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
}

}


{


gdjs.MainMenuCode.eventsList1(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList2(runtimeScene);
}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDBGObjects1.length = 0;
gdjs.MainMenuCode.GDBGObjects2.length = 0;
gdjs.MainMenuCode.GDBG_9595CloudsObjects1.length = 0;
gdjs.MainMenuCode.GDBG_9595CloudsObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDBtn_9595StartObjects1.length = 0;
gdjs.MainMenuCode.GDBtn_9595StartObjects2.length = 0;
gdjs.MainMenuCode.GDBtn_9595MuteObjects1.length = 0;
gdjs.MainMenuCode.GDBtn_9595MuteObjects2.length = 0;
gdjs.MainMenuCode.GDFadeWObjects1.length = 0;
gdjs.MainMenuCode.GDFadeWObjects2.length = 0;
gdjs.MainMenuCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.MainMenuCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.MainMenuCode.GDBtn_9595RightObjects1.length = 0;
gdjs.MainMenuCode.GDBtn_9595RightObjects2.length = 0;
gdjs.MainMenuCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.MainMenuCode.GDBtn_9595JumpObjects2.length = 0;

gdjs.MainMenuCode.eventsList3(runtimeScene);
gdjs.MainMenuCode.GDBGObjects1.length = 0;
gdjs.MainMenuCode.GDBGObjects2.length = 0;
gdjs.MainMenuCode.GDBG_9595CloudsObjects1.length = 0;
gdjs.MainMenuCode.GDBG_9595CloudsObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDBtn_9595StartObjects1.length = 0;
gdjs.MainMenuCode.GDBtn_9595StartObjects2.length = 0;
gdjs.MainMenuCode.GDBtn_9595MuteObjects1.length = 0;
gdjs.MainMenuCode.GDBtn_9595MuteObjects2.length = 0;
gdjs.MainMenuCode.GDFadeWObjects1.length = 0;
gdjs.MainMenuCode.GDFadeWObjects2.length = 0;
gdjs.MainMenuCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.MainMenuCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.MainMenuCode.GDBtn_9595RightObjects1.length = 0;
gdjs.MainMenuCode.GDBtn_9595RightObjects2.length = 0;
gdjs.MainMenuCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.MainMenuCode.GDBtn_9595JumpObjects2.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
