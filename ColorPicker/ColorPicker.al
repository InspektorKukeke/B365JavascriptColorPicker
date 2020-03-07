controladdin "ColorPicker"
{
    VerticalStretch = true;
    HorizontalStretch = true;
    VerticalShrink = true;
    HorizontalShrink = true;
    RequestedHeight = 360;
    RequestedWidth = 300;



    Scripts = 'ControlAddIn/ColorPicker/Script/ColorPicker.js',
            'ControlAddIn/ColorPicker/Script/html5kellycolorpicker.js',
            'ControlAddIn/ColorPicker/Script/jquery-1.12.js';
    StyleSheets = 'ControlAddIn/ColorPicker/Stylesheet/common.css';


    StartupScript = 'ControlAddIn/ColorPicker/Script/start.js';

    event OnAddInReady();

    event OnValueSet(HexCode: Text);
}