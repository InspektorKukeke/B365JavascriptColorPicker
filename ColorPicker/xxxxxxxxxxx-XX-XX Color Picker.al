page xxxxxxxxxxx "XX-XX Color Picker"
{
    PageType = ConfirmationDialog;
    ApplicationArea = All;
    UsageCategory = Administration;
    SourceTable = "Standard Text";
    SourceTableTemporary = true;

    layout
    {
        area(Content)
        {
            usercontrol(ColorPicker; "SimplyD.ColorPicker")
            {
                trigger OnAddInReady()
                begin
                end;

                trigger OnValueSet(HexCode: Text)
                begin
                    Description := HexCode;
                end;

            }
        }


    }

}

/*

//this fn can be linked with an action/field drilldown - returns hexcode

    procedure GetHexColor(): Text
    var
        TmpStdText: Record "Standard Text" temporary;
    begin

        TmpStdText.Insert();
        if page.RunModal(Page::"XX-XX Color Picker", TmpStdText) = Action::Yes then
            exit(TmpStdText.Description);

    end;
    
  */