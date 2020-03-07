
                usercontrol(ColorPicker; "ColorPicker")
                {
                    ApplicationArea = All;

                    trigger OnAddInReady()
                    begin
                        //Add in is ready for action
                    end;

                    trigger OnValueSet(HexCode: Text)
                    begin
                        //put your logic here
                        Message(HexCode);
                    end;
                }