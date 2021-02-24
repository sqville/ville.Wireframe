/* *********************************************************************

   Copyright: sqville 2021

   License:
     MIT

   Authors:
     * Chris Eskew (sqville) chris.eskew@sqville.com

************************************************************************ */

/**
 * The simple qooxdoo decoration theme.
 */
qx.Theme.define("ville.theme.wireframe.Decoration",
{
  
  aliases : {
    decoration : "ville/theme/wireframe/decoration"
  },
   

  decorations :
  {   
    /*
    ---------------------------------------------------------------------------
      CORE
    ---------------------------------------------------------------------------
    */

    "border-blue" :
    {
      style :
      {
        width : 4,
        color : "background-selected"
      }
    },


    "main" :
    {
      style :
      {
        width : 2,
        radius : 0,
        color : "main"
      }
    },

    "main-dark" :
    {
      style :
      {
        width : 2,
        color : "main"
      }
    },

    "popup" :
    {
      style :
      {
        width: 2,
        color : "main",
        shadowLength : 1,
        shadowBlurRadius : 5,
        shadowColor : "rgba(0, 0, 0, 0.2)"
      }
    },
    
    "dragover" :
    {
      style : {
        bottom: [2, "solid", "dark-blue"]
      }
    },

    "cursor-move" :
    {
      style : {
        width: [2,2,2,2],
        color : "black",
        style : "dotted"
      }
    },

    "cursor-nodrop" :
    {  
      style : {
        width : 0
      }
    },

    "cursor-copy" :
    {
      style : {
        width: 0
      }
    },

    "cursor-alias" :
    {
      style : {
        width: 0
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      ville.wireframe
      
      PRIMARY BUTTON 
    ---------------------------------------------------------------------------
    */
    "primary-button-box" :
    {
      style :
      {
        radius : 0,
        width : 2,
        backgroundColor : "primary"
      }
    },
    

	/*
    ---------------------------------------------------------------------------
      ville.wireframe icons using only Qx
      
      ICONS
    ---------------------------------------------------------------------------
    */
   "ville-icon-arrow-up" :
   {
   	  style :
      {
        color : [null,"transparent","ville-black","transparent"],
        style : [null, "solid","solid","solid"],
        width : [0,4.5,4,4.5]
      }
   },
   
   "ville-icon-arrow-up-med-gray" :
   {
   	  include : "ville-icon-arrow-up",
   	  
   	  style :
      {
        color : [null,"transparent","ville-arrow-med-gray","transparent"]
      }
   },
   
   "ville-icon-arrow-up-invert" :
   {
   	  include : "ville-icon-arrow-up",
   	  
   	  style :
      {
        color : [null,"transparent","white","transparent"]
      }
   },
   
   "ville-icon-arrow-up-small" :
   {
   	  style :
      {
        color : [null,"transparent","ville-black","transparent"],
        style : [null, "solid","solid","solid"],
        width : [0,3.5,3,3.5]
      }
   },
   
   "ville-icon-arrow-down" :
   {
   	  style :
      {
        color : ["ville-black","transparent",null,"transparent"],
        style : ["solid", "solid",null,"solid"],
        width : [4,4.5,0,4.5]
      }
   },
   
   "ville-icon-arrow-down-med-gray" :
   {
   	  include : "ville-icon-arrow-down",
   	  
   	  style :
      {
        color : ["ville-arrow-med-gray","transparent",null,"transparent"]
      }
   },
   
   "ville-icon-arrow-down-invert" :
   {
   	  include : "ville-icon-arrow-down",
   	  
   	  style :
      {
        color : ["white","transparent",null,"transparent"]
      }
   },
   
   "ville-icon-arrow-down-small" :
   {
   	  style :
      {
        color : ["ville-black","transparent",null,"transparent"],
        style : ["solid", "solid",null,"solid"],
        width : [3,3.5,0,3.5]
      }
   },
   
   "ville-icon-arrow-right" :
   {
   	  style :
      {
        color : ["transparent",null,"transparent","ville-arrow-gray"],
        style : ["solid",null,"solid","solid"],
        width : [4.5,0,4.5,4]
      }
   },
   
   "ville-icon-arrow-right-invert" :
   {
   	  include : "ville-icon-arrow-right",
   	  
   	  style :
      {
        color : ["transparent",null,"transparent","white"]
      }
   },
   
   "ville-icon-arrow-right-small" :
   {
   	  style :
      {
        color : ["transparent",null,"transparent","ville-black"],
        style : ["solid",null,"solid","solid"],
        width : [3.5,0,3.5,4]
      }
   },
   
   "ville-icon-arrow-forward" :
   {
   	  style :
      {
        color : ["transparent",null,"transparent","ville-black"],
        style : ["solid",null,"solid","solid"],
        width : [3.5,0,3.5,4],
        shadowColor : "ville-black",
        shadowLength : [0, 2],
        shadowBlurRadius : 0,
        shadowSpreadRadius : 0
      }
   },

   "ville-icon-arrow-rewind" :
   {
    include : "ville-icon-arrow-left-small",   
    
    style :
   	  {
        shadowColor : "ville-black",
        shadowLength : [0, 2],
        shadowBlurRadius : 0,
        shadowSpreadRadius : 0
   	  }
   },
   
   "ville-icon-arrow-left" :
   {
   	  style :
   	  {
   	  	color : ["transparent","ville-arrow-gray","transparent",null],
        style : ["solid","solid","solid",null],
        width : [4.5,4,4.5,0]
   	  }
   },
   
   "ville-icon-arrow-left-small" :
   {
   	  style :
      {
        color : ["transparent","ville-black","transparent",null],
        style : ["solid", "solid","solid",null],
        width : [3.5,4,3.5,0]
      }
   },
   
   "ville-icon-triangle-bottom-right" :
   {
   	style :
      {
        color : [null,null,"ville-arrow-gray","transparent"],
        style : [null,null,"solid","solid"],
        width : [0,0,6,6]
      }
   },
   
   "ville-icon-dot-black" :
    {
      style :
      {
        radius : 10,
        width : 1,
        color : "ville-black",
        innerColor: "white",
        innerWidth: 3
      }
    },
  

    /*
    ---------------------------------------------------------------------------
      BUTTON
    ---------------------------------------------------------------------------
    */
    "button-box" :
    {
      style :
      {
        radius : 0,
        width : 2,
        color : "main",
        backgroundColor : "background"
      }
    },

    "button-box-blank" :
    {
      include : "button-box",

      style :
      {
        backgroundColor : "white"
      }
    },

    "button-box-pressed" :
    {
      include : "button-box",

      style :
      {
        backgroundColor : "primary"
      }
    },

    "button-box-pressed-hovered" :
    {
      include : "button-box-pressed",

      style :
      {
        color : "button-border-hovered"
      }
    },

    "button-box-hovered" :
    {
      include : "button-box",

      style :
      {
        backgroundColor : "button-box-bright-hovered"
      }
    },



    /*
    ---------------------------------------------------------------------------
      BUTTON FOCUSED
    ---------------------------------------------------------------------------
    */
    "button-box-focused" :
    {
      include : "button-box-pressed"
    },

    "button-box-pressed-focused" :
    {
      include : "button-box-pressed",

      style :
      {
        color : "background-selected"
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON RIGHT
    ---------------------------------------------------------------------------
    */
    "button-box-right" :
    {
      include : "button-box",

      style :
      {
        radius : 0
      }
    },

    "button-box-pressed-right" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : [0, 0, 0, 0]
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON BORDERLESS RIGHT
    ---------------------------------------------------------------------------
    */
    
    "button-box-right-borderless" :
    {
      include : "button-box",

      style :
      {
        radius : 0,
        width: 2,
        color : "main"
      }
    },

    "button-box-pressed-right-borderless" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : [0, 3, 3, 0],
        width: 1
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON TOP RIGHT
    ---------------------------------------------------------------------------
    */
    "button-box-top-right" :
    {
      include : "button-box",

      style :
      {
        radius : [0, 3, 0, 0],
        width: [1, 1, 1, 1],
        color: "border-light"
      }
    },
    

    /*
    ---------------------------------------------------------------------------
      BUTTON BOTTOM RIGHT
    ---------------------------------------------------------------------------
    */
    "button-box-bottom-right" :
    {
      include : "button-box",

      style :
      {
        radius : [0, 0, 3, 0],
        width : [0, 1, 1, 1],
        color: "border-light"
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON BOTTOM LEFT
    ---------------------------------------------------------------------------
    */
    "button-box-bottom-left" :
    {
      include : "button-box",

      style :
      {
        radius : [0, 0, 0, 3],
        width : [0, 0, 1, 1]
      }
    },

    "button-box-pressed-bottom-left" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : [0, 0, 0, 3],
        width : [0, 0, 1, 1]
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON TOP LEFT
    ---------------------------------------------------------------------------
    */
    "button-box-top-left" :
    {
      include : "button-box",

      style :
      {
        radius : [3, 0, 0, 0],
        width : [1, 0, 0, 1]
      }
    },

    "button-box-pressed-top-left" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : [3, 0, 0, 0],
        width : [1, 0, 0, 1]
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON MIDDLE
    ---------------------------------------------------------------------------
    */
    "button-box-middle" :
    {
      include : "button-box",

      style :
      {
        radius : 0
      }
    },

    "button-box-pressed-middle" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : 0,
        width : 2,
        innerColor : "primary"
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON LEFT
    ---------------------------------------------------------------------------
    */
    "button-box-left" :
    {
      include : "button-box",

      style :
      {
        radius : [0, 0, 0, 0]
      }
    },

    "button-box-pressed-left" :
    {
      include : "button-box-pressed",      

      style :
      {
        radius : [0, 0, 0, 0]
      }
    },

 

        /*
    ---------------------------------------------------------------------------
      BUTTON LEFT BORDER
    ---------------------------------------------------------------------------
    */
   "button-box-left-border" :
   {
     include : "button-box-left",

     style :
     {
       width : [2,0,2,2]
     }
   },

   "button-box-pressed-left-border" :
   {
     include : "button-box-pressed-left",

     style :
     {
      width : 1
     }
   },
       
    
    /*
    ---------------------------------------------------------------------------
      SPLITBUTTON
    ---------------------------------------------------------------------------
    */
    
    "splitbutton" :
    {
      include : "button-box",
      style :
    	{
    		radius : 0
    	}
    },
    
    "splitbutton-box-left" :
    {
      inclue : "button-box",
      
      style :
      {
        backgroundColor : "background"
      }
    },



    /*
    ---------------------------------------------------------------------------
      SEPARATOR
    ---------------------------------------------------------------------------
    */

    "separator-horizontal" :
    {
      style :
      {
        widthLeft : 1,
        colorLeft : "border-separator"
      }
    },

    "separator-vertical" :
    {
      style :
      {
        widthTop : 1,
        colorTop : "border-separator"
      }
    },


    /*
    ---------------------------------------------------------------------------
      SCROLL KNOB
    ---------------------------------------------------------------------------
    */
    "scroll-knob" :
    {
      style :
      {
        radius : 0,
        width : 2,
        color : "main",
        backgroundColor : "background"
      }
    },

    "scroll-knob-pressed" :
    {
      include : "scroll-knob",

      style :
      {
        backgroundColor : "scrollbar-dark"
      }
    },

    "scroll-knob-hovered" :
    {
      include: "scroll-knob",

      style :
      {
        color : "button-border-hovered"
      }
    },

    "scroll-knob-pressed-hovered" :
    {
      include: "scroll-knob-pressed",

      style :
      {
        color : "button-border-hovered"
      }
    },

    /*
    ---------------------------------------------------------------------------
      SLIDER KNOB
    ---------------------------------------------------------------------------
    */
   "slider-knob" :
   {
    include : "scroll-knob", 
    
    style :
     {
       radius : 10
     }
   },

   "slider-knob-pressed" :
   {
     include : "slider-knob",

     style :
     {
       backgroundColor : "scrollbar-dark"
     }
   },

   "slider-knob-hovered" :
   {
     include: "slider-knob",

     style :
     {
       color : "button-border-hovered"
     }
   },

   "slider-knob-pressed-hovered" :
   {
     include: "slider-knob-pressed",

     style :
     {
       color : "button-border-hovered"
     }
   },

    /*
    ---------------------------------------------------------------------------
      SPLITPANE KNOB
    ---------------------------------------------------------------------------
    */
    "splitpane-knob" :
    {
      style : 
      {
        width : [0,2,0,0],
        color : "main",
        style : "dotted"
      }
    },

    /*
    ---------------------------------------------------------------------------
      HOVER BUTTON
    ---------------------------------------------------------------------------
    */
    "button-hover" :
    {
      style :
      {
        backgroundColor : "background",
        radius : 0
      }
    },
  
    
    /*
    ---------------------------------------------------------------------------
      WINDOW
    ---------------------------------------------------------------------------
    */
    "window" :
    {
      style :
      {
        width : 2,
        color : "main",
        innerWidth : 4,
        innerColor: "window-border-inner",
        shadowLength : 0,
        shadowBlurRadius : 0,
        shadowColor : "main",
        backgroundColor : "background",
        radius : 0
      }
    },

    "window-active" :
    {
      include : "window",

      style :
      {
        shadowLength : [1,2],
        shadowBlurRadius : 0
      }
    },


    "window-caption" : {
      style :
      {
        width : [0, 0, 2, 0],
        color : "background"
      }
    },

    "window-statusbar" :
    {
      include : "statusbar",

      style :
      {
        width : 0
      }
    },
    
    "window-button-minimize-icon" :
    {
      style :
      {
        width : [0,10,4,0],
        color : "main"
      }
    },
    
    "window-button-minimize-icon-hover" :
    {
      include : "window-button-minimize-icon",
      
      style :
      {
        color : "main"
      }
    },
    
    "window-button-maximize-icon" :
    {
      style :
      {
        width : [4,2,2,2],
        color : "main"
      }
    },
    
    "window-button-maximize-icon-hover" :
    {
      include : "window-button-maximize-icon",
      
      style :
      {
        color : "main"
      }
    },
    
    "window-button-close-icon" :
    {
      style :
      {
        color : "main"
      }
    },
    
    "window-button-close-icon-hover" :
    {     
      style :
      {
        color : "main"
      }
    },
   
   "window-button-restore-icon" :
    {
      style :
      {
        width : [4,2,2,2],
        color : "main",
        shadowColor : "main",
        shadowLength : [2, 2],
        shadowBlurRadius : 0,
        shadowSpreadRadius : 0
      }
    },
    
    "window-button-restore-icon-hover" :
    {
      include : "window-button-restore-icon",
      
      style :
      {
        color : "main"
      }
    },


    /*
    ---------------------------------------------------------------------------
      GROUP BOX
    ---------------------------------------------------------------------------
    */
    
    "white-box" :
    {
      style :
      {
        width: 2,
        color: "main",
        radius: 0,
        backgroundColor : "background"
      }
    },

    "handdrawn-box" :
    {
      style :
      {
        width : 2,
        //width: [3,4,3,5],
        color: "main",
        backgroundColor : "background"
        //freestyleCss : "handdrawnbox"
      }
    },


    /*
    ---------------------------------------------------------------------------
      TEXT FIELD
    ---------------------------------------------------------------------------
    */

    "inset" :
    {
      style :
      {
        width : 2,
        color : "main",
        radius : 0
      }
    },

    "inset-line" :
    {
      style :
      {
        backgroundImage: "ville/theme/wireframe/decoration/slider/line.png",
        backgroundRepeat: 'repeat',
        backgroundPositionX: "center",
        backgroundPositionY: "center"
      }
    },

    "focused-inset" :
    {
      include : "inset",
      style :
      {
        color : "textfield-selected"
      }
    },

    "focused-inset-line" :
    {
      include : "inset-line",
      style :
      {
        backgroundImage: "ville/theme/wireframe/decoration/slider/line-selected.png"
      }
    },
    
    "form-focused-inset" :
    {
      style :
      {
        width : [1,1,1,2],
        color: [ "textfield-selected", "textfield-selected", "textfield-selected", "box-border-blue" ],
        radius: [ 3, 2, 2, 3 ]
      }
    },

    "border-invalid" :
    {
      include : "inset",
      style :
      {
        color : "#dbb1b1"
      }
    },

    "invalid-line" :
    {
      include : "inset-line",
      style :
      {
        backgroundImage: "ville/theme/wireframe/decoration/slider/line-invalid.png"
      }
    },
    
    "combobox-inset" :
    {
      include : "inset",
      
      style :
      {
        width : [2,0,2,2],
        radius : 0
      }
    },

    "combobox-focused-inset" :
    {
      include : "focused-inset",
      
      style :
      {
        width : [1,0,1,1],
        radius : [3,0,0,3]
      }
    },

    "combobox-border-invalid" :
    {
      include : "combobox-inset",
      
      style :
      {
        color : "#dbb1b1"
      }
    },
    
    "selectbox-popup" :
    {
    	include : "popup",
    	
    	style :
    	{
        color : "main"
    	}
    },
    
    "combobox-listitem" :
    {
    	
    	style :
    	{
    	  width : [0,0,0,0],
        color : "border-super-light"
    	}
    },


    /*
    ---------------------------------------------------------------------------
      LIST ITEM
    ---------------------------------------------------------------------------
    */

    "lead-item" :
    {
      style :
      {
        width : 1,
        style : "dotted",
        color : "border-lead"
      }
    },




    /*
    ---------------------------------------------------------------------------
      TOOL TIP
    ---------------------------------------------------------------------------
    */

    "tooltip" :
    {
      style :
      {
        width : 1,
        color : "main"
      }
    },


    "tooltip-error" :
    {
      style : {
        radius: 5,
        backgroundColor: "invalid"
      }
    },




    /*
    ---------------------------------------------------------------------------
      TOOLBAR
    ---------------------------------------------------------------------------
    */

    "toolbar-separator" :
    {
      style :
      {
        colorLeft : "main"
      }
    },


    /*
    ---------------------------------------------------------------------------
      MENU
    ---------------------------------------------------------------------------
    */
    "menu-separator" :
    {
      style :
      {
        widthTop: 2,
        colorTop : "main"
      }
    },

    "menu-radiobutton" :
    {
      style :
      {
        radius : 10,
        width : 0,
        color : "transparent",
        innerColor: "main",
        innerWidth: 0
      }
    },

    "menu-checkbox-checked" :
    {
      include: "checkbox-checked",
      style :
      {
        radius : 0,
        width : 0,
        color : "transparent",
        innerColor: "transparent",
        innerWidth: 0
      }
    },


    /*
    ---------------------------------------------------------------------------
      MENU BAR
    ---------------------------------------------------------------------------
    */
    "menubar-button-hovered" :
    {
      style :
      {
        width : 1,
        backgroundColor : "white"
      }
    },


    "menubar-button-pressed" :
    {
      include : "menubar-button-hovered",

      style :
      {
        radius : [3, 3, 0, 0],
        width : [1, 1, 0, 1]
      }
    },


    /*
    ---------------------------------------------------------------------------
      DATE CHOOSER
    ---------------------------------------------------------------------------
    */
   
    "datechooser-button" :
    {},

    "datechooser-date-pane" :
    {
      style :
      {
        widthTop: 1,
        colorTop : "border-light",
        style : "solid"
      }
    },


    "datechooser-weekday" :
    {
      style :
      {
        widthBottom: 1,
        colorBottom : "border-light",
        style : "solid"
      }
    },

    "datechooser-week" :
    {
      style :
      {
        widthRight: 1,
        colorRight : "border-light",
        style : "solid"
      }
    },

    "datechooser-week-header" :
    {
      style :
      {
        widthBottom : 1,
        colorBottom : "border-light",
        widthRight: 1,
        colorRight : "border-light",
        style : "solid"
      }
    },





    /*
    ---------------------------------------------------------------------------
      TAB VIEW
    ---------------------------------------------------------------------------
    */
   

    "tabview-page-button-top" :
    {
      style :
      {
        width : 2,
        backgroundColor: "background",
        color : "main",
        radius : 0
      }
    },

    "tabview-page-button-bottom" : {
      include : "tabview-page-button-top",

      style :
      {
        width : 2
      }
    },

    "tabview-page-button-left" : {
      include : "tabview-page-button-top",

      style :
      {
        width : 2
      }
    },

    "tabview-page-button-right" : {
      include : "tabview-page-button-top",

      style :
      {
        width : 2
      }
    },
    

    /*
    ---------------------------------------------------------------------------
      TABLE
    ---------------------------------------------------------------------------
    */
   
   "table-standard" :
   {
      style :
      {
        radius : 0,
        width : 10,
        color : "green",
        style : "solid"
      }
    },

    "table-pane" :
    {
      width : 2,
      color : "main"
    },

    "statusbar" :
    {
      style :
      {
        width : 2,
        color : "main",
        style : "solid",
        radius : 0
      }
    },

    "table-scroller-focus-indicator" :
    {
      style :
      {
        width : 0,
        color : "primary",
        style : "solid"
      }
    },

    "table-header" :
    {
      style :
      {
        radius : 0,
        width : 2,
        color : "main"
        
      }
    },

    "table-header-column-button" :
    {
      include : "table-header",
      style : {
        radius : 0,
        width : 2,
        color : "main"
      }
    },

    "select-column-order-vert" :
    {
    	style : {
    		radius : 1,
        widthLeft : 2,
        widthRight : 2,
        widthTop : 3,
        widthBottom : 2,
	      innerWidthTop: 0,
	      innerWidthLeft: 3,
	      innerWidthRight: 3,
	      innerWidthBottom: 0,
        colorTop : "main",
        colorBottom : "main",
        colorLeft : "main",
        colorRight : "main",
        innerColorLeft: "background",
        innerColorRight: "background"
    	}
    },

    "select-column-order-hovered-vert" :
    {
    	style : {
    		radius : 1,
        widthLeft : 2,
        widthRight : 2,
        widthTop : 3,
        widthBottom : 2,
	      innerWidthTop: 0,
	      innerWidthLeft: 3,
	      innerWidthRight: 3,
	      innerWidthBottom: 0,
        colorTop : "main",
        colorBottom : "main",
        colorLeft : "main",
        colorRight : "main",
        innerColorLeft: "background",
        innerColorRight: "background"
    	}
    },
    
    "select-column-order" :
    {
    	style : {
    		radius : 1,
        widthLeft : 0,
        widthRight : 0,
        widthTop : 2,
        widthBottom : 2,
	      innerWidthTop: 2,
	      innerWidthLeft: 0,
	      innerWidthRight: 0,
	      innerWidthBottom: 2,
	      colorTop : "main",
        innerColorTop: "background",
        innerColorBottom: "background",
        colorBottom : "main"
    	}
    },
    
    "select-column-order-hover" :
    {
    	include: "select-column-order",
    	style : {
	        color : "main",
	        innerColor: "main"
    	}
    },

    "table-header-cell" :
    {
      style :
      {
        widthRight : 2,
        widthBottom : 0,
        color : "main"
      }
    },

    "table-header-cell-first" :
    {
      include : "table-header-cell",
      style : {
        radius : [0,0,0,0]
      }
    },

    "progressive-table-header" :
    {
      include : "button-box",

      style :
      {
        radius : 0,
        width : [1, 0, 1, 1]
      }
    },

    "progressive-table-header-cell" :
    {
      style :
      {
        widthRight: 1,
        color : "button-border"
      }
    },


    /*
    ---------------------------------------------------------------------------
      PROGRESSBAR
    ---------------------------------------------------------------------------
    */

    "progressbar" :
    {
      style:
      {
        backgroundColor: "background",
        radius : 0,
        width: 2,
        color: "main"
      }
    },
    
    "progressbar-trans" :
    {
        radius : 0,
        width: 0
    },



    /*
    ---------------------------------------------------------------------------
      RADIO BUTTON
    ---------------------------------------------------------------------------
    */

    "radiobutton" :
    {
      style :
      {
        radius : 10,
        width : 2,
        color : "main",
        innerColor: "white",
        innerWidth: 3
      }
    },

    // Not used any more
    /*"radiobutton-focused" :
    {
      include : "radiobutton",
      style :
      {
        //color : "textfield-selected"
      }
    },*/

    "radiobutton-invalid" :
    {
      include : "radiobutton",
      style :
      {
        color : "invalid"
      }
    },


    /*
    ---------------------------------------------------------------------------
      CHECK BOX
    ---------------------------------------------------------------------------
    */

   "checkbox" :
    {
      include : "radiobutton",
      
      style :
      {
        radius : 0,
        innerWidth: 0
      }
    },
    
    "checkbox-checked" :
    {
    	include : "checkbox",
    	
    	style :
    	{
    		innerWidth : 0
    	}
    },

    "checkbox-checked-disabled" : "checkbox-checked",   

    "checkbox-focused" :
    {
      include : "checkbox",
      style :
      {
        color : "textfield-selected"
      }
    },

    "checkbox-checked-focused" :
    {
    	include : "checkbox-checked",
    	
    	style :
    	{
        innerWidth : 0,
        color : "textfield-selected"
    	}
    },

    "checkbox-invalid" :
    {
      include : "checkbox",
      style :
      {
        color : "invalid"
      }
    },

    "checkbox-checked-invalid" :
    {
      include : "checkbox-checked",
      style :
      {
        color : "invalid"
      }
    },

    "checkbox-undetermined" :
    {
      include : "checkbox",
      style :
      {
        innerWidth : [5,3],
        innerColor: "white"
      }
    },

    "checkbox-undetermined-focused" :
    {
    	include : "checkbox-undetermined",
    	
    	style :
    	{
    		color : "textfield-selected"
    	}
    },

    "checkbox-undetermined-disabled" :
    {
      include : "checkbox-undetermined",
      style :
      {
        color : "text-disabled"
      }
    },

    "checkbox-undetermined-invalid" :
    {
      include : "checkbox-undetermined",
      style :
      {
        color : "invalid"
      }
    }
  }
});
