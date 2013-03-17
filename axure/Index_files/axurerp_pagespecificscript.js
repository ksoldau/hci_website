for(var i = 0; i < 20; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u1'] = 'center';
u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (((GetWidgetValueLength('u4')) > Number('0')) && ((GetWidgetText('u3')) != ('wrong'))) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Week.html');

}
else
if (true) {

	NewWindow($axure.globalVariableProvider.getLinkUrl('Error_Message.html'), "", "directories=0, height=200, location=0, menubar=0, resizable=1, scrollbars=0, status=0, toolbar=0, width=400", true, 400, 200);

}
});
gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u7'] = 'top';