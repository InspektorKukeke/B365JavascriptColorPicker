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
        
        //simplePicker('color','picker');
        advancedPicker('color','picker');
  Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnAddInReady', null);
}

function simplePicker(color,picker){
  new KellyColorPicker({
    place : picker, 
    input : color
});

}

function sendToNav(funct, paras) {
  Microsoft.Dynamics.NAV.InvokeExtensibilityMethod(funct, [paras]);
 }

 function advancedPicker(color,picker){

    var picker = new KellyColorPicker(
    {
        input : color,
        place : picker, 
        resizeWith : true, // if true - redraw on resize according to current element bounds else - get size from 'resizeWith' element - body \ div \ etc.
        colorSaver : true,
        methodSwitch : true,
        method : 'triangle',
        changeCursor : false, // cursor change disable, may be usefull in some cases
        userEvents : {
            change : function(self) {
                
                if (self.updateColorButtonState) {
                    self.updateColorButtonState();
                }
            },
            setmethod : function (handler, newMethod) {
                // on change method - triangle \ quad
            },
            selectcolorsaver : function (handler, colorSaverObj) {
                // on click on color saver
                
                picker.updateColorButtonState();
                // handler.getColorSaver(align) - select colorsaver where align = 'left' | 'right' | false - current slected
            },	
        }
    }
);

// user functions and vars

picker.colorButtonInfoEl = document.getElementById('color-button-state');

picker.updateColorButtonState = function() {

    if (!picker.colorButtonInfoEl) return;
    
    var colorButton =  picker.getColorSaver();
    if (!colorButton) return;
    
    picker.colorButtonInfoEl.innerText = 'Side ' + colorButton.align + ' | Color : ' + colorButton.color;
};

picker.setColorForColorSaver('#ff9f37', 'right');
picker.updateColorButtonState();
 }