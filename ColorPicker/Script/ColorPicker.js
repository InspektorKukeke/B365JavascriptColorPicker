"use strict"

function initializeControlAddIn(id) {
    var controlAddIn = document.getElementById(id);
    controlAddIn.innerHTML =
    '<div class="example-wrap example-wrap-test-1">'+
            '<canvas id="picker"></canvas>'+
            '<br>'+
            '<input id="color" value="#54aedb">'+
            ''
        '</div>';
        
        initializePicker('color','picker');
  Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnAddInReady', null);
}

function initializePicker(color,picker){
  new KellyColorPicker({
    place : picker, 
    input : color
});

}

function sendToNav(funct, paras) {
  Microsoft.Dynamics.NAV.InvokeExtensibilityMethod(funct, [paras]);
 }
