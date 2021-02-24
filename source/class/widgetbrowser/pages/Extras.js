/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Tristan Koch (tristankoch)
     * Chris Eskew (sqville) 1/21/2021 - included controls to show new, ville.Clean, appearances 

************************************************************************ */

/**
 * Demonstrates ville.theme.Wireframes extra hand drawn feature
 * @asset(ville/theme/wireframe/wireframe-image-sm.png)
 */

qx.Class.define("widgetbrowser.pages.Extras",
{
  extend: widgetbrowser.pages.AbstractPage,

  construct: function()
  {
    this.base(arguments);

    var vbox = new qx.ui.container.Composite(new qx.ui.layout.VBox(20));
    this.add(vbox, {top: 20});

    // add a label
    var lblaboutthis = new qx.ui.basic.Label("<b>Apply a hand-drawn look to ui controls</b>").set({rich: true});

    // Enables adding CSS to tag and psudo classes (after and before) to the Decorator class
    qx.Class.include(qx.ui.decoration.Decorator, ville.theme.wireframe.MFreestyleCss);

    //create decorator objects for the controls
    //one for the groupbox-frame
    var groupboxframedec = new qx.ui.decoration.Decorator().set({
      width: [3,3,5,5],
      color: "main",
      backgroundColor : "background",
      freestyleCss : "handdrawnbox"
    });
    //one for the button-box
    var buttonboxdec = new qx.ui.decoration.Decorator().set({
      width: [3,4,3,5],
      color: "main",
      backgroundColor : "background",
      freestyleCss : "handdrawnbuttonbox"
    });

    var gb1 = new qx.ui.groupbox.GroupBox("Hand drawn GroupBox border").set({width: 400, height: 250});
    gb1.getChildControl("frame").set({decorator: groupboxframedec});

    var hbtnbox = new qx.ui.container.Composite(new qx.ui.layout.HBox(20));
    var btn1 = new qx.ui.form.Button("Cancel","ville/theme/wireframe/wireframe-image-sm.png").set({width: 180, decorator: buttonboxdec});
    var btn2 = new qx.ui.form.Button("Submit","ville/theme/wireframe/wireframe-image-sm.png").set({width: 180, decorator: buttonboxdec});
    hbtnbox.add(new qx.ui.basic.Label("<b>Buttons:</b>").set({rich: true}));
    hbtnbox.add(btn1);
    hbtnbox.add(btn2);
     

    vbox.add(lblaboutthis);
    vbox.add(gb1);
    vbox.add(hbtnbox);
  }
});
