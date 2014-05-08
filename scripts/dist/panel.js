(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/*
ADOBE SYSTEMS INCORPORATED
Copyright 2013 Adobe Systems Incorporated. All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying it.
If you have received this file from a source other than Adobe, then your
use, modification, or distribution of it requires the prior written
permission of Adobe.
*/

/**
 * Stores constants for the window types supported by the CSXS infrastructure.
 */
function CSXSWindowType()
{
};

/** Constant for the CSXS window type Panel. **/
CSXSWindowType._PANEL = "Panel";

/** Constant for the CSXS window type Modeless. **/
CSXSWindowType._MODELESS = "Modeless";

/** Constant for the CSXS window type ModalDialog. **/
CSXSWindowType._MODAL_DIALOG = "ModalDialog";

/** EvalScript error message**/
EvalScript_ErrMessage = "EvalScript error.";

/**
 * Class Version
 * Defines a version number with major, minor, micro, and special
 * components. The major, minor and micro values are numeric; the special
 * value can be any string.
 *
 * @param major   The major version component, a positive integer up to nine digits long.
 * @param minor   The minor version component, a positive integer up to nine digits long.
 * @param micro   The micro version component, a positive integer up to nine digits long.
 * @param special The special version component, an arbitrary string.
 *
 * @return A Version object.
 */
function Version(major, minor, micro, special)
{
	this.major = major;
	this.minor = minor;
	this.micro = micro;
	this.special = special;
};

/**
 * The maximum value allowed for a Numeric version component.
 * This reflects the maximum value allowed in PlugPlug and the manifest schema.
 */
Version.MAX_NUM = 999999999;

/**
 * Class VersionBound
 * Defines a boundary for a version range, which associates a Version object with a flag for whether it is an inclusive
 * or exclusive boundary.
 *
 * @param version   The Version object.
 *					@see Version class.
 * @param inclusive True if this boundary is inclusive, false if it is exclusive.
 *
 * @return A VersionBound object.
 */
function VersionBound(version, inclusive)
{
	this.version = version;
	this.inclusive = inclusive;
};

/**
 * Class VersionRange.
 * Defines a range of versions using a lower boundary and optional upper boundary.
 *
 * @param lowerBound The VersionBound object. @see VersionBound.
 * @param upperBound The VersionBound object, or null for a range with no upper boundary. @see VersionBound.
 *
 * @return A VersionRange object.
 */
function VersionRange(lowerBound, upperBound)
{
	this.lowerBound = lowerBound;
	this.upperBound = upperBound;
};

/**
 * Class Runtime.
 * Represents a runtime related to the CSXS infrastructure. Extensions can declare dependencies on particular
 * CSXS runtime versions in the extension manifest.
 *
 * @param name 	  The runtime name.
 * @param version The VersionRange object. @see VersionRange.
 *
 * @return A Runtime object.
 */
function Runtime(name, versionRange)
{
	this.name = name;
	this.versionRange = versionRange;
};

/**
* Class Extension.
* Contains the classes that define data types for the CEP libraries.
*
* @param id 					 The unique identifier of this extension.
* @param name 					 The localizable display name of this extension.
* @param mainPath 				 The path of the "index.html" file.
* @param basePath 				 The base path of this extension.
* @param windowType 			 The window type of the main window of this extension. Valid values are defined by CSXSWindowType. @see CSXSWindowType.
* @param width 					 The default width in pixels of the main window of this extension.
* @param height 				 The default height in pixels of the main window of this extension.
* @param minWidth 				 The minimum width in pixels of the main window of this extension.
* @param minHeight 				 The minimum height in pixels of the main window of this extension.
* @param maxWidth 				 The maximum width in pixels of the main window of this extension.
* @param maxHeight 				 The maximum height in pixels of the main window of this extension.
* @param defaultExtensionDataXml The extension data contained in the default ExtensionDispatchInfo section of the extension manifest.
* @param specialExtensionDataXml The extension data contained in the application-specific ExtensionDispatchInfo section of the extension manifest.
* @param requiredRuntimeList 	 An array of Runtime objects for runtimes required by this extension. @see VersionRange.
* @param isAutoVisible 			 True if this extension is visible on loading.
* @param isPluginExtension 		 True if this extension has been deployed in the Plugins folder of the host application.
*
* @return An Extension object.
*/
function Extension(id, name, mainPath, basePath, windowType, width, height, minWidth, minHeight, maxWidth, maxHeight,
				   defaultExtensionDataXml, specialExtensionDataXml, requiredRuntimeList, isAutoVisible, isPluginExtension)
{
	this.id = id;
	this.name = name;
	this.mainPath = mainPath;
	this.basePath = basePath;
	this.windowType = windowType;
	this.width = width;
	this.height = height;
	this.minWidth = minWidth;
	this.minHeight = minHeight;
	this.maxWidth = maxWidth;
	this.maxHeight = maxHeight;
	this.defaultExtensionDataXml = defaultExtensionDataXml;
	this.specialExtensionDataXml = specialExtensionDataXml;
	this.requiredRuntimeList = requiredRuntimeList;
	this.isAutoVisible = isAutoVisible;
	this.isPluginExtension = isPluginExtension;
};

/**
 * Class CSEvent.
 * You can use it to dispatch a standard Javascript event.
 *
 * @param type 		  Event type.
 * @param scope 	  The scope of event, can be "GLOBAL" or "APPLICATION".
 * @param appId 	  The unique identifier of the application that generated the event.
 * @param extensionId The unique identifier of the extension that generated the event.
 *
 * @return CSEvent object
 */
function CSEvent(type, scope, appId, extensionId)
{
    this.type = type;
    this.scope = scope;
    this.appId = appId;
    this.extensionId = extensionId;
};

/** The event specific data. **/
CSEvent.prototype.data = "";

/**
 * Class SystemPath
 * Stores operating-system-specific location constants for use getSystemPath method.
 */
function SystemPath()
{
};

/** Identifies the path to user data.  */
SystemPath.USER_DATA = "userData";

/** Identifies the path to common files for Adobe applications.  */
SystemPath.COMMON_FILES = "commonFiles";

/** Identifies the path to the user's default document folder.  */
SystemPath.MY_DOCUMENTS = "myDocuments";

/** Identifies the path to current extension.  */
/** DEPRECATED, PLEASE USE EXTENSION INSTEAD.  */
SystemPath.APPLICATION = "application";

/** Identifies the path to current extension.  */
SystemPath.EXTENSION = "extension";

/** Identifies the path to hosting application's executable.  */
SystemPath.HOST_APPLICATION = "hostApplication";

/**
 * Class ColorType
 * Stores the color-type constants.
 */
function ColorType()
{
};

/** rgb type. */
ColorType.RGB = "rgb";

/** gradient type. */
ColorType.GRADIENT = "gradient";

/** none type. */
ColorType.NONE = "none";

/**
 * Class RGBColor
 * Stores an RGB color with red, green, blue, and alpha values. All values are in the range
 * [0.0 to 255.0]. Invalid numeric values are converted to numbers within this range.
 *
 * @param red   The red value, in the range [0.0 to 255.0].
 * @param green The green value, in the range [0.0 to 255.0].
 * @param blue  The blue value, in the range [0.0 to 255.0].
 * @param alpha The alpha (transparency) value, in the range [0.0 to 255.0].
 * 		  		The default (255.0) means that the color is fully opaque.
 *
 * @return RGBColor object.
 */
function RGBColor(red, green, blue, alpha)
{
	this.red = red;
	this.green = green;
	this.blue = blue;
	this.alpha = alpha;
};

/**
 * Class Direction
 * Stores a point information.
 *
 * @param x X axis position.
 * @param y Y axis position.
 *
 * @return Direction object.
 */
function Direction(x, y)
{
	this.x = x;
	this.y = y;
};

/**
 * Class GradientStop
 * Stores gradient stop information.
 *
 * @param offset   The offset of the gradient stop, in the range [0.0 to 1.0].
 * @param rgbColor The RGBColor object. @see RGBColor.
 *
 * @return GradientStop object.
 */
function GradientStop(offset, rgbColor)
{
	this.offset = offset;
	this.rgbColor = rgbColor;
};

/**
 * Class GradientColor
 * Stores gradient color information.
 *
 * @param type 		 	   The gradient type, the only valid value is "linear".
 * @param direction 	   A vector describing the direction of the gradient.
 *						   A point value, in which the y component is 0 and the x component
 *						   is positive or negative for a right or left direction,
 * 						   or the x component is 0 and the y component is positive or negative for
 *						   an up or down direction. @see Direction.
 * @param numStops  	   The number of stops.
 * @param gradientStopList An array of GradientStop objects. @see GradientStop.
 *
 * @return GradientColor object.
 */
function GradientColor(type, direction, numStops, arrGradientStop)
{
	this.type = type;
	this.direction = direction;
	this.numStops = numStops;
	this.arrGradientStop = arrGradientStop;
};

/**
 * Class UIColor
 * Stores color information, including the type, anti-alias level, and specific color
 * values in a color object of an appropriate type.
 *
 * @param type 			 The color type constant, 1 for "rgb" and 2 for "gradient".
 * @param antialiasLevel The anti-alias level constant.
 * @param color 		 A GradientColor object or a RGBColor containing specific color information.
 *						 The type of color object depends on type parameter. @see GradientColor and RGBColor.
 *
 * @return UIColor object.
 */
function UIColor(type, antialiasLevel, color)
{
	this.type = type;
	this.antialiasLevel = antialiasLevel;
	this.color = color;
};

/**
 * Class AppSkinInfo
 * Stores window-skin properties, such as color and font. All parameters' type are UIColor. @see UIColor.
 *
 * @param baseFontFamily 			The base font family of the application.
 * @param baseFontSize 				The base font size of the application.
 * @param appBarBackgroundColor 	The application bar background color.
 * @param panelBackgroundColor 		The background color of the extension panel.
 * @param appBarBackgroundColorSRGB The application bar background color, as sRGB.
 * @param panelBackgroundColorSRGB  The background color of the extension panel, as sRGB.
 * @param systemHighlightColor      The operating-system highlight color, as sRGB.
 *
 * @return AppSkinInfo object.
 */
function AppSkinInfo(baseFontFamily, baseFontSize, appBarBackgroundColor, panelBackgroundColor, appBarBackgroundColorSRGB, panelBackgroundColorSRGB, systemHighlightColor)
{
	this.baseFontFamily = baseFontFamily;
	this.baseFontSize = baseFontSize;
	this.appBarBackgroundColor = appBarBackgroundColor;
	this.panelBackgroundColor = panelBackgroundColor;
	this.appBarBackgroundColorSRGB = appBarBackgroundColorSRGB;
	this.panelBackgroundColorSRGB = panelBackgroundColorSRGB;
	this.systemHighlightColor = systemHighlightColor;
};

/**
 * Class HostEnvironment
 * Stores information about the environment in which the extension is loaded.
 *
 * @param appName 	   The application's name.
 * @param appVersion   The application's version.
 * @param appLocale    The application's current license locale.
 * @param appId 	   The application's unique identifier.
 * @param isAppOffline True if the application is currently offline.
 * @param appSkinInfo  A skin-information object containing the application's default color and font styles. @see AppSkinInfo.
 * @param appUILocale  The application's current UI locale.
 *
 * @return HostEnvironment object.
 */
function HostEnvironment(appName, appVersion, appLocale, appUILocale, appId, isAppOffline, appSkinInfo)
{
	this.appName = appName;
	this.appVersion = appVersion;
	this.appLocale = appLocale;
	this.appUILocale = appUILocale;
	this.appId = appId;
	this.isAppOffline = isAppOffline;
	this.appSkinInfo = appSkinInfo;
};

/***********************************************************************************/
/**
 * Class CSInterface.
 * You can use it to communicate with native application.
 *
 * @return CSInterface object
 */
function CSInterface()
{
};

/**
 * User can add this event listener to handle native application theme color changes.
 * Callback function gives extensions ability to fine-tune their theme color after the
 * global theme color has been changed.
 * The callback function should be like below:
 *
 * @example
 * // event is a CSEvent object, but user can ignore it.
 * function OnAppThemeColorChanged(event)
 * {
 *	  // Should get a latest HostEnvironment object from application.
 *	  var skinInfo = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo;
 *    // Gets the style information such as color info from the skinInfo,
 *	  // and redraw all UI controls of your extension according to the style info.
 * }
 */
CSInterface.THEME_COLOR_CHANGED_EVENT = "com.adobe.csxs.events.ThemeColorChanged";

/** The host environment data object **/
CSInterface.prototype.hostEnvironment = JSON.parse(window.__adobe_cep__.getHostEnvironment());

/** Close the current extension **/
CSInterface.prototype.closeExtension = function()
{
	window.__adobe_cep__.closeExtension();
};

/**
 * Get system path.
 *
 * @param pathType A string containing a path-type constant defined in the SystemPath class,
 * 		           such as SystemPath.USER_DATA.
 * @return path string
 */
CSInterface.prototype.getSystemPath = function(pathType)
{
	var path = decodeURI(window.__adobe_cep__.getSystemPath(pathType));
	var OSVersion = this.getOSInformation();
	if (OSVersion.indexOf("Windows") >= 0)
	{
	  path = path.replace("file:///", "");
	}
	else if (OSVersion.indexOf("Mac") >= 0)
	{
	  path = path.replace("file://", "");
	}
    return path;
};

/**
 * Eval scripts. You can use it to operate the DOM of native application.
 *
 * @param script   The raw JavaScript.
 * @param callback The callback function that receives the execution result of the script. This parameter is optional.
 * 				   If it fails to execute the script, the callback function will receive the error message EvalScript_ErrMessage.
 */
CSInterface.prototype.evalScript = function(script, callback)
{
    if(callback == null || callback == undefined)
    {
        callback = function(result){};
    }
    window.__adobe_cep__.evalScript(script, callback);
};

/**
 * Get the identifier of the host application.
 *
 * @return a string identifier of the host application
 */
CSInterface.prototype.getApplicationID = function()
{
    var appId = this.hostEnvironment.appId;
    return appId;
};

/**
 * Get host capability information about the host application.
 *
 * @return an object that contains host capability information
 */
CSInterface.prototype.getHostCapabilities = function()
{
    var hostCapabilities = JSON.parse(window.__adobe_cep__.getHostCapabilities() );
    return hostCapabilities;
};

/**
 * Triggering a CS Event programmatically. You can use it to dispatch a CSEvent.
 *
 * @param event a CS Event
 */
CSInterface.prototype.dispatchEvent = function(event)
{
    if (typeof event.data == "object")
    {
        event.data = JSON.stringify(event.data);
    }

    window.__adobe_cep__.dispatchEvent(event);
};

/**
 * Register a CS Event listener. You can use it to listen a CSEvent.
 *
 * @param type     The Event type
 * @param listener The JavaScript function that receives a notification when
 *                 a CS event of the specified type occurs.
 * @param obj 	   The object that listener belongs to. Use it when listener is a method
 *				   of an object. This parameter is optional and its default value is null.
 */
CSInterface.prototype.addEventListener = function(type, listener, obj)
{
    window.__adobe_cep__.addEventListener(type, listener, obj);
};

/**
 * Remove the CS Event listener.
 *
 * @param type event type
 * @param listener The JavaScript function that receives a notification when
 *                 a CS event of the specified type occurs.
 * @param obj 	   The object that listener belongs to. Use it when listener is a method
 *				   of an object. This parameter is optional and its default value is null.
 */
CSInterface.prototype.removeEventListener = function(type, listener, obj)
{
    window.__adobe_cep__.removeEventListener(type, listener, obj);
};

/**
 * Loads and launches another extension. If the target extension is already loaded, it is activated.
 *
 * @param extensionId   The extension's unique identifier.
 * @param startupParams Startup parameters to be passed to the loaded extension.
 * 	 					Specify key-value pairs as a GET URL parameter list; for example: "key1=value1&amp;key2=value2".
 *						Currently this parameter is not supported by CEP, so it will always be "" for now.
 *
 * @example
 * To launch the extension "help" with ID "HLP" from this extension, call:
 * requestOpenExtension("HLP", "");
 *
 */
CSInterface.prototype.requestOpenExtension = function(extensionId, params)
{
	window.__adobe_cep__.requestOpenExtension(extensionId, params);
};

/**
 * Retrieves the list of extensions currently loaded in the current host application.
 * The extension list is initialized once, and remains the same during the lifetime of the CSXS session.
 *
 * @param extensionIds An array of unique identifiers for extensions of interest.
 * 					   If omitted, retrieves data for all extensions.
 *
 * @return An Extension object.
 */
CSInterface.prototype.getExtensions = function(extensionIds)
{
	var extensionIdsStr = JSON.stringify(extensionIds);
	var extensionsStr = window.__adobe_cep__.getExtensions(extensionIdsStr);

	var extensions = JSON.parse(extensionsStr);
	return extensions;
};

/**
 * Retrieves network-related preferences.
 *
 * @return A NetworkPreferences object.
 */
CSInterface.prototype.getNetworkPreferences = function()
{
	var result = window.__adobe_cep__.getNetworkPreferences();
	var networkPre = JSON.parse(result);

	return networkPre;
};

/**
 * Initializes the resource bundle for this extension with property values for the current application and locale.
 * If user wants to support multi-locale to the extension, they should define a property file. An example of the property file content is:
 *
 *  key1=value1
 *  key2=value2
 *	key3.value=value3
 *
 * The property file should be placed in its corresponding locale folder. For example for en_US, the property file would be placed in YourExtension/locale/en_US/messages.properties.
 * Users can define a default property file, placed in "YourExtension/locale/" which will be used when the corresponding locale file is not defined.
 * Users should initialize locale strings during the loading of the extension. The locale loaded should match the current UI locale of the host application.
 * 'data-locale' is the custom HTML element attribute and you can added it to each HTML element that you want to localize.
 *
 * For example:
 *
 *	<input type="submit" value="" data-locale="key3"/>
 *	<script type="text/javascript">
 *		var cs = new CSInterface();
 *		// Get properties according to current locale of host application.
 *		var resourceBundle = cs.initResourceBundle();
 *		// Refer the locale string.
 *		document.write(resourceBundle.key1);
 *		document.write(resourceBundle.key2);
 *	</script>
 *
 * @return An object containing the resource bundle information.
 */
CSInterface.prototype.initResourceBundle = function()
{
	var resourceBundle = JSON.parse(window.__adobe_cep__.initResourceBundle());
	var resElms = document.querySelectorAll('[data-locale]');
	for (var n = 0; n < resElms.length; n++)
	{
	   var resEl = resElms[n];
	   // Get the resource key from the element.
	   var resKey = resEl.getAttribute('data-locale');
	   if (resKey)
	   {
		   // Get all the resources that start with the key.
		   for (var key in resourceBundle)
		   {
			   if (key.indexOf(resKey) == 0)
			   {
				   var resValue = resourceBundle[key];
				   if (key.indexOf('.') == -1)
				   {
					   // No dot notation in resource key,
					   // assign the resource value to the element's
					   // innerHTML.
					   resEl.innerHTML = resValue;
				   }
				   else
				   {
					   // Dot notation in resource key, assign the
					   // resource value to the element's property
					   // whose name corresponds to the substring
					   // after the dot.
					   var attrKey = key.substring(key.indexOf('.') + 1);
					   resEl[attrKey] = resValue;
				   }
			   }
		   }
	   }
	}
	return resourceBundle;
};

/**
 * Writes installation information to a file.
 *
 * @return The dump info file path.
 */
CSInterface.prototype.dumpInstallationInfo = function()
{
	return window.__adobe_cep__.dumpInstallationInfo();
};

/**
 * Get current Operating System information including version and 32-bit/64-bit.
 * Refer to http://www.useragentstring.com/pages/Chrome/ for all of the navigator.userAgent values retrieved by Chrome.
 *
 * @return The OS version in string or "unknown Operation System".
 */
CSInterface.prototype.getOSInformation = function()
{
    var userAgent = navigator.userAgent;

    if ((navigator.platform == "Win32") || (navigator.platform == "Windows"))
    {
        var winVersion = "Windows platform";
        if (userAgent.indexOf("Windows NT 5.0") > -1)
        {
            winVersion = "Windows 2000";
        }
        else if (userAgent.indexOf("Windows NT 5.1") > -1)
        {
            winVersion = "Windows XP";
        }
        else if (userAgent.indexOf("Windows NT 5.2") > -1)
        {
            winVersion = "Windows Server 2003";
        }
        else if (userAgent.indexOf("Windows NT 6.0") > -1)
        {
            winVersion = "Windows Vista";
        }
        else if (userAgent.indexOf("Windows NT 6.1") > -1)
        {
            winVersion = "Windows 7";
        }
        else if (userAgent.indexOf("Windows NT 6.2") > -1)
        {
            winVersion = "Windows 8";
        }

        var winBit = "32-bit";
        if (userAgent.indexOf("WOW64") > -1)
        {
            winBit = "64-bit";
        }

        return winVersion + " " + winBit;
    }
    else if ((navigator.platform == "MacIntel") || (navigator.platform == "Macintosh"))
    {
        var agentStr = new String();
        agentStr = userAgent;
		var verLength = agentStr.indexOf(")") - agentStr.indexOf("Mac OS X");
		var verStr = agentStr.substr(agentStr.indexOf("Mac OS X"), verLength);
		var result = verStr.replace("_", ".");
		result = result.replace("_", ".");
        return result;
    }

    return "Unknown Operation System";
};

;
CSInterface.SystemPath = SystemPath;

module.exports = CSInterface;

},{}],2:[function(require,module,exports){
var CSInterface, Form, OpenInBrowserHelper, Panel, Rotator, ThemeHandler, UpdateNotifier;

OpenInBrowserHelper = require('./widgets/OpenInBrowserHelper');

UpdateNotifier = require('./panel/UpdateNotifier');

ThemeHandler = require('./ThemeHandler');

CSInterface = require('./CSInterface');

Rotator = require('./widgets/Rotator');

Form = require('./widgets/Form');

module.exports = Panel = (function() {
  function Panel(panelName, rootNode) {
    this.panelName = panelName;
    this.rootNode = rootNode != null ? rootNode : document.body;
    this.rootNode.addEventListener('click', function(e) {
      if (e.ctrlKey && e.shiftKey) {
        window.__adobe_cep__.showDevTools();
      }
    });
    this.csi = new CSInterface;
    this.themeHandler = new ThemeHandler(this);
    Rotator.applyTo(this.rootNode, this);
    Form.applyTo(this.rootNode, this);
    OpenInBrowserHelper.applyTo(this.rootNode, this);
    this.updateNotifier = new UpdateNotifier(this);
  }

  return Panel;

})();

},{"./CSInterface":1,"./ThemeHandler":3,"./panel/UpdateNotifier":5,"./widgets/Form":6,"./widgets/OpenInBrowserHelper":7,"./widgets/Rotator":8}],3:[function(require,module,exports){
var ThemeHandler, console,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

console = require('./console');

module.exports = ThemeHandler = (function() {
  function ThemeHandler(panel) {
    this.panel = panel;
    this._themeChangeListener = __bind(this._themeChangeListener, this);
    this.current = 'light1';
    this._changeTheme('dark1', 'Tahoma', '10');
    this.panel.csi.addEventListener(this.panel.csi.constructor.THEME_COLOR_CHANGED_EVENT, this._themeChangeListener);
    this._themeChangeListener();
  }

  ThemeHandler.prototype._themeChangeListener = function() {
    var color, skin, theme;
    skin = this.panel.csi.hostEnvironment.appSkinInfo;
    color = skin.panelBackgroundColor.color;
    theme = color.red > 200 ? 'light2' : color.red > 120 ? 'light1' : color.red > 75 ? 'dark2' : 'dark1';
    return this._changeTheme(theme, skin.baseFontFamily, skin.baseFontSize);
  };

  ThemeHandler.prototype._changeTheme = function(theme, fontFamily, fontSize) {
    var body, html, t, _i, _len, _ref;
    html = document.querySelector('html');
    body = document.body;
    body.style.fontFamily = fontFamily;
    body.style.fontSize = fontSize + 'px';
    _ref = ['light1', 'light2', 'dark1', 'dark2', 'light', 'dark'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      t = _ref[_i];
      html.classList.remove(t);
    }
    html.classList.add(theme);
    if (theme === 'light1' || theme === 'light2') {
      html.classList.add('light');
    } else {
      html.classList.add('dark');
    }
    return this.current = theme;
  };

  ThemeHandler.prototype.isLight = function() {
    var _ref;
    return (_ref = this.current) === 'light1' || _ref === 'light2';
  };

  return ThemeHandler;

})();

},{"./console":4}],4:[function(require,module,exports){
var console, prependToEachLine,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

if (window.console != null) {
  module.exports = window.console;
  window.console["native"] = true;
  return;
}

module.exports = console = {
  inspectLimit: 100,
  "native": false,
  _inspectSingle: function(given, persist) {
    var i, items, iterator, k, name, prop, r, subs, type, v, val, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3;
    if (persist == null) {
      persist = {
        limit: console.inspectLimit,
        covered: []
      };
    }
    r = '';
    if (given === null) {
      return 'null';
    }
    if ((_ref = typeof given) === 'object' || _ref === 'function') {
      if (__indexOf.call(persist.covered, given) >= 0) {
        return '[Recursive]';
      } else {
        persist.covered.push(given);
      }
      items = [];
      iterator = function(v, k) {
        persist.limit--;
        if (persist.limit <= 0) {
          return;
        }
        k = k + " -> ";
        try {
          return items.push(k + console._inspectSingle(v, persist));
        } catch (_error) {}
      };
      if (given instanceof Element) {
        type = "<" + given.tagName + ">";
        subs = {};
        _ref1 = ['id', 'className', 'action'];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          prop = _ref1[_i];
          if ((given[prop] != null) && given[prop].length > 0) {
            subs[prop] = given[prop];
          }
        }
        if (given.childElementCount > 0) {
          subs.children = given.children;
        }
        for (name in subs) {
          val = subs[name];
          iterator(val, name);
        }
      } else if (given instanceof Array) {
        type = 'array';
        for (i = _j = 0, _len1 = given.length; _j < _len1; i = ++_j) {
          v = given[i];
          iterator(v, i);
        }
      } else {
        if (typeof given === 'function') {
          type = '#Function';
        } else {
          type = '#Object';
          if (((_ref2 = given.constructor) != null ? _ref2.name : void 0) != null) {
            name = given.constructor.name;
            if (name !== 'Object') {
              type = '#' + name;
            }
          }
        }
        for (k in given) {
          if (k === 'prototype' || k === 'parent') {
            continue;
          }
          try {
            v = given[k];
            iterator(v, k);
          } catch (_error) {}
        }
      }
      r = prependToEachLine("\n" + items.join(", \n"), '   ');
    } else if (given === void 0) {
      return 'undefined';
    } else if (typeof given === 'string') {
      if (given.length > 200) {
        given = given.substr(0, 200);
      }
      return '"' + given + '"';
    } else if ((_ref3 = typeof given) === 'boolean' || _ref3 === 'number') {
      return String(given);
    } else {
      r = given;
    }
    if (!type) {
      type = typeof given;
    }
    return type + ' -> ' + r;
  },
  _inspect: function() {
    var r, v;
    r = [];
    r = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = arguments.length; _i < _len; _i++) {
        v = arguments[_i];
        _results.push(console._inspectSingle(v));
      }
      return _results;
    }).apply(this, arguments);
    return r.join("   ", r);
  },
  log: function() {
    return this.alert.apply(this, arguments);
  },
  alert: function() {
    return alert(this._inspect.apply(this, arguments));
  },
  error: function(e) {
    return console.log('Error', e);
  },
  notice: function() {
    return alert("Notice: " + Array.from(arguments).join(" "));
  },
  type: function(v) {
    var t;
    t = typeof v;
    if (t === 'string' || t === 'number' || t === 'boolean') {
      alert(t + ': ' + v);
    }
    return alert(v);
  }
};

prependToEachLine = function(str, toPrepend) {
  return String(str).split("\n").join("\n" + toPrepend);
};

},{}],5:[function(require,module,exports){
var UpdateNotifier,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = UpdateNotifier = (function() {
  function UpdateNotifier(panel) {
    this.panel = panel;
    this._close = __bind(this._close, this);
  }

  UpdateNotifier.prototype.init = function(options) {
    this.name = options.name;
    this.version = options.version;
    this.hub = options.hub;
    this.channel = options.channel;
    this.updateUrl = options.updateUrl;
    this.request = new XMLHttpRequest;
    this.request.onreadystatechange = (function(_this) {
      return function() {
        if (_this.request.readyState === 4) {
          return _this._processResult(_this.request.responseText);
        }
      };
    })(this);
    this.request.open('GET', this.hub, true);
    return this.request.send(null);
  };

  UpdateNotifier.prototype._processResult = function(response) {
    var json;
    json = JSON.parse(response);
    if (json.updateAvailable === 'yes') {
      return this._considerShowingUpdateNotification();
    }
  };

  UpdateNotifier.prototype._considerShowingUpdateNotification = function() {
    return this._showUpdateNotification();
  };

  UpdateNotifier.prototype._showUpdateNotification = function() {
    this.node = document.createElement('div');
    this.node.className = "serverNotification visible";
    document.body.appendChild(this.node);
    this.linkNode = document.createElement('a');
    this.linkNode.className = "serverNotification-msg browse";
    this.linkNode.href = this.updateUrl;
    this.linkNode.innerHTML = 'New Version Available at ' + this.updateUrl.replace('http://', '');
    this.node.appendChild(this.linkNode);
    this.closeNode = document.createElement('button');
    this.closeNode.className = "serverNotification-discard";
    this.closeNode.innerHTML = "Remind Me Later";
    this.node.appendChild(this.closeNode);
    this.linkNode.addEventListener('click', this._close);
    return this.closeNode.addEventListener('click', this._close);
  };

  UpdateNotifier.prototype._close = function() {
    return this.node.classList.remove('visible');
  };

  return UpdateNotifier;

})();

},{}],6:[function(require,module,exports){
var Form;

module.exports = Form = (function() {
  function Form(panel, node) {
    this.panel = panel;
    this.node = node;
    this.csi = this.panel.csi;
    this.node.addEventListener('submit', (function(_this) {
      return function(e) {
        e.preventDefault();
        return _this._submit();
      };
    })(this));
  }

  Form.prototype._submit = function() {
    var data, input, json, _i, _len, _ref;
    data = {};
    _ref = this.node.querySelectorAll('input');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      input = _ref[_i];
      data[input.name] = input.value;
    }
    json = JSON.stringify(data);
    return this._wire(json);
  };

  Form.prototype._wire = function(data) {
    var action, e, matches, method, src;
    action = this.node.action;
    if (!(matches = action.match(/\#([a-zA-Z0-9\_]+)$/))) {
      throw Error("Couldn't parse action address '" + action + "'");
    }
    method = matches[1];
    try {
      src = "$.global._panels." + method + ("(" + data + ");");
      console.log(src);
      this.csi.evalScript(src, function(ret) {
        return console.log(arguments);
      });
    } catch (_error) {
      e = _error;
      console.log(e);
    }
  };

  Form.applyTo = function(rootNode, panel) {
    var form, _i, _len, _ref;
    _ref = rootNode.querySelectorAll('form');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      form = _ref[_i];
      if (String(form.getAttribute('action')).match(/^#/)) {
        new Form(panel, form);
      }
    }
  };

  return Form;

})();

},{}],7:[function(require,module,exports){
var OpenInBrowserHelper;

module.exports = OpenInBrowserHelper = (function() {
  OpenInBrowserHelper.applyTo = function(node, panel) {
    return new OpenInBrowserHelper(node, panel);
  };

  function OpenInBrowserHelper(node, panel) {
    this.node = node;
    this.panel = panel;
    node.addEventListener('click', (function(_this) {
      return function(e) {
        var el;
        el = e.target;
        if (el.tagName === 'A' && el.classList.contains('browse')) {
          e.preventDefault();
          return _this.browse(el.href, panel);
        }
      };
    })(this));
  }

  OpenInBrowserHelper.prototype.browse = function(url) {
    var isWindows, processPath, rootDir;
    isWindows = window.navigator.platform.toLowerCase().indexOf("win") > -1;
    rootDir = "/";
    if (isWindows) {
      rootDir = this.panel.csi.getSystemPath("commonFiles").substring(0, 3);
    }
    processPath = "/usr/bin/open";
    if (isWindows) {
      processPath = rootDir + "Windows/explorer.exe";
    }
    return window.cep.process.createProcess(processPath, url);
  };

  return OpenInBrowserHelper;

})();

},{}],8:[function(require,module,exports){
var Rotator,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

module.exports = Rotator = (function() {
  function Rotator(node) {
    var i, o, options, thingy, _i, _j, _len, _ref;
    this.node = node;
    this.rotate = __bind(this.rotate, this);
    this.name = this.node.getAttribute('data-name');
    options = this.node.getAttribute('data-options');
    if (!((options != null) && options.trim() !== '')) {
      throw Error("Rotator isn't supplied with data-options");
    }
    this.options = [];
    _ref = options.split(/\s*,\s*/);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      o = _ref[_i];
      this.options.push(o);
    }
    this.node.classList.add('panel-input-rotator');
    for (i = _j = 0; _j <= 6; i = ++_j) {
      thingy = document.createElement('div');
      thingy.classList.add('thingy');
      thingy.classList.add('n' + i);
      this.node.appendChild(thingy);
    }
    this.input = document.createElement('input');
    this.input.type = 'hidden';
    this.input.name = this.name;
    this.node.parentNode.appendChild(this.input);
    this.set(this.node.getAttribute('data-default') || this.options[0]);
    this.node.addEventListener('click', this.rotate);
  }

  Rotator.prototype.set = function(to) {
    if (__indexOf.call(this.options, to) < 0) {
      throw Error("Option '" + to + "' isn't defined.");
    }
    if (this.current != null) {
      this.node.classList.remove(this.current);
    }
    this.node.classList.add(to);
    this.current = to;
    this.input.value = to;
    return this;
  };

  Rotator.prototype.rotate = function() {
    var newIndex;
    newIndex = this.options.indexOf(this.current) + 1;
    newIndex = newIndex % this.options.length;
    this.set(this.options[newIndex]);
    return this;
  };

  Rotator.applyTo = function(root) {
    var node, nodes, _i, _len;
    nodes = root.querySelectorAll('[data-type="rotator"]');
    for (_i = 0, _len = nodes.length; _i < _len; _i++) {
      node = nodes[_i];
      new Rotator(node);
    }
  };

  return Rotator;

})();

},{}],9:[function(require,module,exports){
module.exports={
  "name": "griddify",
  "version": "0.0.0",
  "description": "A lightweight photoshop panel to make guides and grids",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "coffee scripts/coffee/build/build.coffee"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/AriaMinaei/photoshopjs-rhythm.git"
  },
  "keywords": [
    "photoshop"
  ],
  "author": "Aria Minaei",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/AriaMinaei/photoshopjs-rhythm/issues"
  },
  "dependencies": {

  }
}

},{}],10:[function(require,module,exports){
var Panel, name, panel, version, _ref;

Panel = require('photoshopjs-panel');

panel = new Panel('Griddify');

_ref = require('../../../package.json'), name = _ref.name, version = _ref.version;

panel.updateNotifier.init({
  name: name,
  version: version,
  hub: "http://localhost/open-source/photoshopjs/hub/",
  updateUrl: "http://gelobi.org/griddify"
});

},{"../../../package.json":9,"photoshopjs-panel":2}]},{},[10])