/*! createdTime: Thu May 29 2025 11:01:20 GMT+0000 (Coordinated Universal Time) */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 104:
/***/ (function() {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var filteredHierarchy = {};
var flattenedHierarchy = {};
var flattenedHierarchyArray = [];
var intervalTime = 2000;
var delayTimer = undefined;
var platform = "ANDROID";
var subPlatform = "";
var sdkVersion = 22;
var appApiKey = "";
var configBaseUrl = "";
var appVersionName = "";
var appVersionCode = 0;
var selectedLanguage = "";
var coreSdkVersionCode = "";
var appSessionId = "";
var totalHierarchyCount = 0;
var totalHierarchySizeSum = 0;
var maxHierarchySize = 0;
var avgHierarchySizeCalcInterval = undefined;
var lastProfileUpdatedAt = null;
var lastUpdatedConfigAt = undefined;
var lastUpdatedEmbedConfigAt = undefined;
var sortedProjectArray = [];
var allProjectStatus = {};
var embedProject = [];
var flowWalkthroughs = {};
var LiveFeatures = {};
var LiveMetaConfigs = {};
var features = {};
var metaConfigs = {};
var loggerConfig = {};
var customProperties = {};
var defaultProperties = {};
var flowShown = false;
var inPreviewMode = false;
var currentlyRunningFlow = {
    id: "",
    active: false,
};
var timer = undefined;
var tackProjectBeingIdentified = (/* unused pure expression or super */ null && ([]));
var prevMatchedIdentifiers = [];
var currentMatchedWebIdentifiers = {};
var previousBoundState = {};
var isSelfHosted = 0;
var segmentConfigMap = {};
var appObserverBaseUrl = "https://whatfix.com/";
var wfAppId = "";
var activeStep = {
    id: "",
    step: {},
    isAnchoredElement: false,
};
var activeProject = {
    id: "",
    projectType: "",
    iconSetting: {},
    isShowing: false,
    isAnchoredElement: false,
    standAlone: false,
    isAFlow: false,
    isAFlowMenu: false,
};
var currentStaticFlow = {
    id: undefined,
    status: undefined,
    completed: undefined,
    autoStart: false,
    stepsStatus: [],
};
var completedProjectsInFlow = {};
var cachedFinderObserverEvents = {
    on_identifier_matched: [],
    on_identifier_not_matched: [],
    on_project_detected: [],
    on_no_project_detected: [],
    on_step_detected: [],
    on_no_step_detected: [],
};
var finderObserverEvents = {
    on_identifier_matched: [],
    on_identifier_not_matched: [],
    on_project_detected: [],
    on_no_project_detected: [],
    on_step_detected: [],
    on_no_step_detected: [],
};
var logHistory = (/* unused pure expression or super */ null && ([]));
var PLATFORMS = {
    DASHBOARD: "DASHBOARD",
    IOS: "IOS",
    REACT_NATIVE_IOS: "REACT_NATIVE_IOS",
    REACT_NATIVE_ANDROID: "REACT_NATIVE_ANDROID",
    ANDROID: "ANDROID",
    XAMARIN_ANDROID: "XAMARIN_ANDROID",
    XAMARIN_IOS: "XAMARIN_IOS",
    CORDOVA_ANDROID: "CORDOVA_ANDROID",
    CORDOVA_IOS: "CORDOVA_IOS",
    IONIC_ANDROID: "IONIC_ANDROID",
    IONIC_IOS: "IONIC_IOS",
    FLUTTER: "FLUTTER",
    JETPACK_COMPOSE_ANDROID: "JETPACK_COMPOSE_ANDROID",
    MAUI_ANDROID: "MAUI_ANDROID",
};
var SENDING_COMMANDS = {
    ON_CONFIG_FETCH: "ON_CONFIG_FETCH",
    ACTION_TAKEN: "ACTION_TAKEN",
    WEB_SCRIPT: "WEB_SCRIPT",
    PROJECT_COMPLETED: "PROJECT_COMPLETED",
    SAVE_USER_STATE: "SAVE_USER_STATE",
    ANALYTICS_EVENT: "ANALYTICS_EVENT",
    OBSERVER_LOG: "OBSERVER_LOG",
    NO_CONTEXT_FOUND: "NO_CONTEXT_FOUND",
    WALKTHROUGH_FOUND: "WALKTHROUGH_FOUND",
    UPDATE_ASSIST_BOUNDS: "UPDATE_ASSIST_BOUNDS",
    UPDATE_STEP_BOUNDS: "UPDATE_STEP_BOUNDS",
    STEP_FOUND: "STEP_FOUND",
    ASSIST_FOUND: "ASSIST_FOUND",
    HIERARCHY: "HIERARCHY",
    SAVE_USER_PROPS: "SAVE_USER_PROPS",
    OBSERVER_EVENT_LEVELS: "OBSERVER_EVENT_LEVELS",
    FLUSH_CACHED_EVENTS: "FLUSH_CACHED_EVENTS",
    CLEAR_ANALYTICS_PENDING_QUEUE: "CLEAR_ANALYTICS_PENDING_QUEUE",
};
var RECEIVING_COMMANDS = {
    START: "START",
    SCREEN_HIERARCHY: "SCREEN_HIERARCHY",
    ASSIST_INTERACTION: "ASSIST_INTERACTION",
    WEB_IDENTIFIERS: "WEB_IDENTIFIERS",
    LANGUAGE_SELECTED: "LANGUAGE_SELECTED",
    ACTIVITY_PAUSE: "ACTIVITY_PAUSE",
    ACTIVITY_RESUME: "ACTIVITY_RESUME",
    ICON_STOP: "ICON_STOP",
    ICON_CLICK: "ICON_CLICK",
    ASSIST_VISIBLE: "ASSIST_VISIBLE",
    USER_PROPERTIES: "USER_PROPERTIES",
    EMBED_PROJECT: "EMBED_PROJECT",
    APP_LOCALE: "APP_LOCALE",
    PREVIEW_CONFIG: "PREVIEW_CONFIG",
    DISABLE_PANEL_EVENT: "DISABLE_PANEL_EVENT",
    STOP_PREVIEW: "STOP_PREVIEW",
    SET_USER_ID: "SET_USER_ID",
    LOGOUT: "LOGOUT",
};
var OBSERVER_EVENT_CATEGORIES = {
    NETWORK: "network",
    FINDER: "finder",
    OPERATION: "operation",
};
var OBSERVER_EVENTS = {
    NETWORK: {
        ON_CONFIG_DOWNLOAD_STARTED: "on_config_download_started",
        ON_CONFIG_DOWNLOAD_COMPLETED: "on_config_download_completed",
    },
    OPERATION: {
        AVG_HIERARCHY_SIZE: "AVG_HIERARCHY_SIZE",
    },
    FINDER: {
        ON_IDENTIFIER_MATCHED: "on_identifier_matched",
        ON_IDENTIFIER_NOT_MATCHED: "on_identifier_not_matched",
        ON_PROJECT_DETECTED: "on_project_detected",
        ON_NO_PROJECT_DETECTED: "on_no_project_detected",
        ON_STEP_DETECTED: "on_step_detected",
        ON_NO_STEP_DETECTED: "on_no_step_detected",
    },
};
var ANALYTICS_EVENTS = {
    FLOW_START: "flow_start",
    FLOW_MENU_START: "flow_menu_start",
    FLOW_STOP: "flow_stop",
    FLOW_OPT_IN: "flow_opt_in",
    FLOW_OPT_OUT: "flow_opt_out",
    ELEMENT_SEEN: "element_seen",
    ELEMENT_ACTION: "element_action",
    FLOW_LANGUAGE_CHANGE: "flow_language_change",
    FLOW_SUCCESS: "flow_success",
    FLOW_DISABLE: "flow_disable",
    PROJECT_TERMINATION: "project_termination",
};
var ACTION_EVENT_TYPES = {
    DEEP_LINK: "deep_link",
    EXTERNAL_LINK: "external_link",
    CLOSE: "close",
};
var observerEventLevels = {
    on_sdk_started: 600,
    on_sdk_started_with_properties: 600,
    on_sdk_embed_project_called: 600,
    on_set_app_locale_called: 600,
    on_logout_called: 600,
    on_set_unique_user_id_called: 600,
    on_user_properties_flush_called: 600,
    on_config_download_started: 600,
    on_config_download_completed: 600,
    on_asset_download_started: 200,
    on_asset_download_completed: 200,
    on_screen_capture_started: 600,
    on_screen_capture_completed: 600,
    on_log_file_upload_started: 600,
    on_log_file_upload_completed: 600,
    on_preview_config_download_started: 600,
    on_preview_config_download_completed: 600,
    on_no_page_detected: 200,
    on_page_detected: 200,
    on_step_detected: 600,
    on_no_step_detected: 600,
    on_no_project_detected: 600,
    on_project_detected: 600,
    on_identifier_not_matched: 200,
    on_identifier_matched: 200,
    on_device_orientation_changed: 200,
    on_activity_resume: 200,
    on_activity_pause: 200,
    on_context_detection_started: 200,
    on_context_detection_stopped: 200,
    on_button_action_performed: 600,
    on_project_start_opt_in_action_performed: 600,
    on_close_button_action_performed: 600,
    on_project_start_dismiss_action_performed: 600,
    on_outside_click_action_performed: 600,
    on_anchor_click_action_performed: 600,
    on_project_step_end_flow_action_performed: 600,
    on_project_step_external_link_redirection_action_performed: 600,
    on_project_step_deep_link_redirection_action_performed: 600,
    on_project_start_external_link_redirection_action_performed: 600,
    on_project_start_deep_link_redirection_action_performed: 600,
    on_project_step_next_action_performed: 600,
    on_project_success_action_performed: 600,
    on_carousel_arrow_action_performed: 600,
    on_carousel_swipe_action_performed: 600,
    on_project_preview_started: 600,
    on_project_preview_cancelled: 600,
    on_project_selection_action_performed: 600,
    on_project_start_loaded: 200,
    on_project_step_loaded: 200,
    on_language_panel_loaded: 200,
    on_project_start_animation_started: 200,
    on_project_step_animation_started: 200,
    on_language_panel_animation_started: 200,
    on_project_start_animation_completed: 200,
    on_project_step_animation_completed: 200,
    on_language_panel_animation_completed: 200,
    on_project_start_render_completed: 600,
    on_project_step_render_completed: 600,
    on_language_panel_render_completed: 600,
    on_carousel_slide_render_completed: 600,
};
var LeapDataType = {
    INTEGER: "INTEGER",
    TIME: "TIME",
    STRING: "STRING",
    APP_VERSION_CODE: "APP_VERSION_CODE",
    APP_VERSION_NAME: "APP_VERSION_NAME",
};
var LeapOperatorKey = {
    IS: "IS",
    IS_NOT: "IS_NOT",
    IS_EQUAL_TO: "IS_EQUAL_TO",
    IS_NOT_EQUAL_TO: "IS_NOT_EQUAL_TO",
    LESS_THAN: "LESS_THAN",
    LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
    GREATER_THAN: "GREATER_THAN",
    GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
    TIME_ELAPSED_LESS_THAN: "TIME_ELAPSED_LESS_THAN",
    TIME_ELAPSED_GREATER_THAN: "TIME_ELAPSED_GREATER_THAN",
};
var selfHostingEndPoints = {
    SELF_HOSTING: "/whatfix",
    SEGMENT_CONFIG_FOLDER: "/config/segments/",
};
var appLocale = "";
var forceSendJsObserverLogs = false;
var jsVersionNumber = 5068;
var userSessionId;
var isUserLoggedIn = false;
var defaultLanguage = "";
var disableObserverLogging = false;
var hierarchyCommandLastSentAt = 0;
var hierarchyCommandLastResponseAt = 0;
var waitingForResponse = false;
var hierarchyCommandFallbackTimeout = 10000;
var hierarchyFetchTimeTakenLogBuffer = 50;
var getBoundingArea = function (bound) {
    return bound !== undefined &&
        ((bound === null || bound === void 0 ? void 0 : bound.right) - (bound === null || bound === void 0 ? void 0 : bound.left)) * ((bound === null || bound === void 0 ? void 0 : bound.bottom) - (bound === null || bound === void 0 ? void 0 : bound.top));
};
function isArrayMatched(arr1, arr2) {
    if (!arr1 || !arr2) {
        return false;
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    var sortedArr1 = arr1.slice().sort();
    var sortedArr2 = arr2.slice().sort();
    for (var i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }
    return true;
}
function decompressGzipString(gzippedBase64) {
    return __awaiter(this, void 0, void 0, function () {
        var compressedData, compressedBlob, dsInstance, decompressedStream, decompressedBlob, decompressedText;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    compressedData = Uint8Array.from(atob(gzippedBase64), function (c) {
                        return c.charCodeAt(0);
                    });
                    compressedBlob = new Blob([compressedData]);
                    dsInstance = new DecompressionStream("gzip");
                    decompressedStream = compressedBlob.stream().pipeThrough(dsInstance);
                    return [4, new Response(decompressedStream).blob()];
                case 1:
                    decompressedBlob = _a.sent();
                    return [4, decompressedBlob.text()];
                case 2:
                    decompressedText = _a.sent();
                    return [2, decompressedText];
            }
        });
    });
}
function noActiveProjects() {
    return (!(activeProject === null || activeProject === void 0 ? void 0 : activeProject.id) &&
        (sortedProjectArray === null || sortedProjectArray === void 0 ? void 0 : sortedProjectArray.every(function (project) {
            var _a, _b, _c;
            if ((_a = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _a === void 0 ? void 0 : _a.isTerminated) {
                return true;
            }
            if (!((_b = project.id) === null || _b === void 0 ? void 0 : _b.includes("discovery")) && ((_c = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _c === void 0 ? void 0 : _c.isCompleted)) {
                return true;
            }
            return !checkToShowProject(project === null || project === void 0 ? void 0 : project.id);
        })));
}
function calculateAvgHierarchySize(screenHierarchy, traceId) {
    var _a;
    if (!screenHierarchy)
        return;
    totalHierarchyCount++;
    var stringifiedHierarchy = JSON.stringify(screenHierarchy);
    maxHierarchySize = Math.max(maxHierarchySize, stringifiedHierarchy.length);
    totalHierarchySizeSum += stringifiedHierarchy.length;
    if (!avgHierarchySizeCalcInterval) {
        avgHierarchySizeCalcInterval = setTimeout(function () {
            var _a, _b;
            if (!totalHierarchyCount)
                return;
            var avgHierarchySize = Math.round(totalHierarchySizeSum / totalHierarchyCount);
            if ((avgHierarchySize > (((_a = metaConfigs === null || metaConfigs === void 0 ? void 0 : metaConfigs.observeHierarchySize) === null || _a === void 0 ? void 0 : _a.avgSizeThreshold) || 0)) ||
                (maxHierarchySize > (((_b = metaConfigs === null || metaConfigs === void 0 ? void 0 : metaConfigs.observeHierarchySize) === null || _b === void 0 ? void 0 : _b.maxSizeThreshold) || 0))) {
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.OPERATION,
                    event_name: OBSERVER_EVENTS.OPERATION.AVG_HIERARCHY_SIZE,
                    properties: {
                        avg_hierarchy_size: avgHierarchySize,
                        max_hierarchy_size: maxHierarchySize,
                        hierarchy_count: totalHierarchyCount,
                    },
                    className: "helperFunctions",
                    methodName: "calculateAvgHierarchySize",
                }, traceId);
            }
            totalHierarchyCount = 0;
            totalHierarchySizeSum = 0;
            maxHierarchySize = 0;
            avgHierarchySizeCalcInterval = undefined;
        }, ((_a = metaConfigs === null || metaConfigs === void 0 ? void 0 : metaConfigs.observeHierarchySize) === null || _a === void 0 ? void 0 : _a.loopInterval) || 60000);
    }
}
function compareVersions(version1, version2) {
    var v1 = version1.split(".").map(Number);
    var v2 = version2.split(".").map(Number);
    for (var i = 0; i < Math.max(v1.length, v2.length); i++) {
        if ((v1[i] || 0) > (v2[i] || 0))
            return 1;
        if ((v1[i] || 0) < (v2[i] || 0))
            return -1;
    }
    return 0;
}
function validateAppVersionNameRule(propertyValue, value, operatorKey) {
    if (propertyValue == null || value == null) {
        return false;
    }
    var comparisonResult = compareVersions(propertyValue, value);
    switch (operatorKey) {
        case LeapOperatorKey.IS_EQUAL_TO:
            return comparisonResult === 0;
        case LeapOperatorKey.GREATER_THAN:
            return comparisonResult > 0;
        case LeapOperatorKey.GREATER_THAN_OR_EQUAL_TO:
            return comparisonResult >= 0;
        case LeapOperatorKey.LESS_THAN:
            return comparisonResult < 0;
        case LeapOperatorKey.LESS_THAN_OR_EQUAL_TO:
            return comparisonResult <= 0;
        default:
            return false;
    }
}
function validateTimeRule(propertyValue, value, operatorKey, unit) {
    if (propertyValue == null ||
        value == null ||
        isNaN(propertyValue) ||
        isNaN(value)) {
        return false;
    }
    var multiplier = 1;
    if (unit) {
        switch (unit) {
            case "hours":
                multiplier = 3600;
                break;
            case "minutes":
                multiplier = 60;
                break;
            default:
                break;
        }
    }
    var intValue = parseInt(value);
    var currentTime = Math.floor(Date.now() / 1000);
    switch (operatorKey) {
        case LeapOperatorKey.TIME_ELAPSED_GREATER_THAN:
            return currentTime - propertyValue > intValue * multiplier;
        case LeapOperatorKey.TIME_ELAPSED_LESS_THAN:
            return currentTime - propertyValue < intValue * multiplier;
        default:
            return false;
    }
}
function validateIntegerRule(propertyValue, value, operatorKey) {
    if (propertyValue == null ||
        value == null ||
        isNaN(propertyValue) ||
        isNaN(value)) {
        return false;
    }
    var intValue = parseInt(value);
    switch (operatorKey) {
        case LeapOperatorKey.IS_EQUAL_TO:
            return propertyValue === intValue;
        case LeapOperatorKey.IS_NOT_EQUAL_TO:
            return propertyValue !== intValue;
        case LeapOperatorKey.GREATER_THAN:
            return propertyValue > intValue;
        case LeapOperatorKey.LESS_THAN:
            return propertyValue < intValue;
        case LeapOperatorKey.GREATER_THAN_OR_EQUAL_TO:
            return propertyValue >= intValue;
        case LeapOperatorKey.LESS_THAN_OR_EQUAL_TO:
            return propertyValue <= intValue;
        default:
            return false;
    }
}
function validateStringRule(propertyValue, value, operatorKey) {
    if (propertyValue == null || value == null) {
        return false;
    }
    if (operatorKey === LeapOperatorKey.IS) {
        return propertyValue === value;
    }
    else if (operatorKey === LeapOperatorKey.IS_NOT) {
        return propertyValue !== value;
    }
    return false;
}
function isRuleValid(rule) {
    var dataType = rule.dataType, propertyKey = rule.propertyKey, operator = rule.operator, value = rule.value, unit = rule.unit;
    var allProperties = __assign(__assign({}, defaultProperties), customProperties);
    switch (dataType) {
        case LeapDataType.STRING:
            return validateStringRule(allProperties[propertyKey], value, operator);
        case LeapDataType.INTEGER:
            return validateIntegerRule(allProperties[propertyKey], value, operator);
        case LeapDataType.TIME:
            return validateTimeRule(allProperties[propertyKey], value, operator, unit);
        case LeapDataType.APP_VERSION_CODE:
            return (platform === PLATFORMS.ANDROID &&
                validateIntegerRule(appVersionCode, value, operator));
        case LeapDataType.APP_VERSION_NAME:
            return (platform === PLATFORMS.IOS &&
                validateAppVersionNameRule(appVersionName, value, operator));
        default:
            return false;
    }
}
function isSegmentValid(segmentOrBlocks) {
    var e_1, _a, e_2, _b;
    if (!segmentOrBlocks || segmentOrBlocks.length === 0) {
        return true;
    }
    try {
        for (var segmentOrBlocks_1 = __values(segmentOrBlocks), segmentOrBlocks_1_1 = segmentOrBlocks_1.next(); !segmentOrBlocks_1_1.done; segmentOrBlocks_1_1 = segmentOrBlocks_1.next()) {
            var orBlock = segmentOrBlocks_1_1.value;
            var isAllTrue = true;
            try {
                for (var _c = (e_2 = void 0, __values(orBlock.andBlocks || [])), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var andBlock = _d.value;
                    if (!isRuleValid(andBlock)) {
                        isAllTrue = false;
                        break;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if (isAllTrue)
                return true;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (segmentOrBlocks_1_1 && !segmentOrBlocks_1_1.done && (_a = segmentOrBlocks_1.return)) _a.call(segmentOrBlocks_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return false;
}
function getCurrentTimeInGMT() {
    var now = new Date();
    var year = now.getUTCFullYear();
    var month = String(now.getUTCMonth() + 1).padStart(2, "0");
    var day = String(now.getUTCDate()).padStart(2, "0");
    var hours = String(now.getUTCHours()).padStart(2, "0");
    var minutes = String(now.getUTCMinutes()).padStart(2, "0");
    var seconds = String(now.getUTCSeconds()).padStart(2, "0");
    var milliseconds = String(now.getUTCMilliseconds()).padStart(3, "0");
    return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds, ".").concat(milliseconds);
}
function getStatusMessage(statusCode) {
    switch (statusCode) {
        case 200:
            return "OK";
        case 401:
            return "Unauthorized";
        case 404:
            return "Not Found";
        case 500:
            return "Internal Server Error";
        default:
            return "OK";
    }
}
function getJavaType(value) {
    if (typeof value === "number") {
        if (value > 2147483647)
            return "long";
        return "int";
    }
    return typeof value;
}
function appendTypesToKeys(body) {
    var updatedBody = {};
    Object.keys(body).forEach(function (key) {
        if (["max_hierarchy_size", "avg_hierarchy_size", "timestamp"].includes(key)) {
            updatedBody["long.".concat(key)] = body[key];
        }
        else {
            updatedBody["".concat(getJavaType(body[key]), ".").concat(key)] = body[key];
        }
    });
    return updatedBody;
}
function isInsideBounds(nodeABounds, nodeBBounds) {
    return (nodeABounds &&
        nodeBBounds &&
        nodeABounds.left < nodeABounds.right &&
        nodeABounds.top < nodeABounds.bottom &&
        nodeABounds.top <= nodeBBounds.top &&
        nodeABounds.left <= nodeBBounds.left &&
        nodeABounds.right >= nodeBBounds.right &&
        nodeABounds.bottom >= nodeBBounds.bottom);
}
function isAClickableNode(bounds) {
    return ((this === null || this === void 0 ? void 0 : this.left) < (this === null || this === void 0 ? void 0 : this.right) &&
        (this === null || this === void 0 ? void 0 : this.top) < (this === null || this === void 0 ? void 0 : this.bottom) &&
        (this === null || this === void 0 ? void 0 : this.left) <= (bounds === null || bounds === void 0 ? void 0 : bounds.left) &&
        (this === null || this === void 0 ? void 0 : this.top) <= (bounds === null || bounds === void 0 ? void 0 : bounds.top) &&
        (this === null || this === void 0 ? void 0 : this.right) >= (bounds === null || bounds === void 0 ? void 0 : bounds.right) &&
        (this === null || this === void 0 ? void 0 : this.bottom) >= (bounds === null || bounds === void 0 ? void 0 : bounds.bottom));
}
function checkIfIdentifierMatch(matchedIdentifier, identifierToMatch) {
    var set1 = new Set(matchedIdentifier);
    return identifierToMatch === null || identifierToMatch === void 0 ? void 0 : identifierToMatch.every(function (element) { return set1.has(element); });
}
function generateUUID() {
    function randomHexDigit() {
        return Math.floor(Math.random() * 16).toString(16);
    }
    function replacePlaceholders(char) {
        var random = randomHexDigit();
        if (char === "x") {
            return random;
        }
        else if (char === "y") {
            return ((parseInt(random, 16) & 0x3) | 0x8).toString(16);
        }
        return char;
    }
    var template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
    return template.replace(/[xy]/g, replacePlaceholders);
}
function isValidDateString(dateString) {
    var gmtRegex = /^[A-Za-z]{3}\s[A-Za-z]{3}\s\d{1,2}\s\d{2}:\d{2}:\d{2}\s(GMT|GMT[+-]\d{2}(:\d{2})?)\s\d{4}$/;
    var isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    if (isoRegex.test(dateString) || gmtRegex.test(dateString)) {
        var date = new Date(dateString);
        if (!isNaN(date.getTime())) {
            return true;
        }
    }
    return false;
}
var getWidth = function (element) { return parseInt(element.right) - parseInt(element.left); };
var getHeight = function (element) { return parseInt(element.bottom) - parseInt(element.top); };
var checkForEmptyBounds = function (bounds) {
    return getWidth(bounds) <= 0 || getHeight(bounds) <= 0;
};
function findTerminationStatuses(project, savedAllProjectStatus) {
    var _a, _b, _c, _d, _e;
    var terminationTemplate = {
        perSession: 0,
        perApp: 0,
        untilAllFlowsAreCompleted: false,
        nSession: 0,
        nDismissedByUser: 0,
    };
    var objKey = ((_a = project.discoveryList) === null || _a === void 0 ? void 0 : _a[0].uniqueID) || ((_b = project.assists) === null || _b === void 0 ? void 0 : _b[0].uniqueID);
    var initialTerminationStatus = ((_c = project.discoveryList) === null || _c === void 0 ? void 0 : _c[0].uniqueID) !== undefined
        ? (_d = project.discoveryList) === null || _d === void 0 ? void 0 : _d[0].flowTerminationFrequency
        : (_e = project.assists) === null || _e === void 0 ? void 0 : _e[0].terminationFrequency;
    var terminationStatus = (savedAllProjectStatus === null || savedAllProjectStatus === void 0 ? void 0 : savedAllProjectStatus[objKey])
        ? savedAllProjectStatus[objKey].terminationStatus
        : __assign({}, terminationTemplate);
    if (!initialTerminationStatus) {
        initialTerminationStatus = {
            perSession: -1,
            perApp: -1,
            untilAllFlowsAreCompleted: false,
            nSession: -1,
            nDismissedByUser: -1,
        };
    }
    return {
        objKey: objKey,
        initialTerminationStatus: initialTerminationStatus,
        terminationStatus: terminationStatus,
    };
}
function organizeProject(project, objKey, initialTerminationStatus, terminationStatus) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
    return {
        id: objKey,
        isAFlow: objKey.includes("discovery"),
        isAFlowMenu: ["STATIC_FLOW_MENU", "STATIC_FLOW_CHECKLIST"].includes(project.projectParameters.projectType),
        isWebView: objKey.includes("discovery")
            ? ((_a = project.discoveryList) === null || _a === void 0 ? void 0 : _a[0].webIdentifiers) !== undefined
            : project.webIdentifiers !== undefined,
        assist: objKey.includes("discovery")
            ? (_b = project === null || project === void 0 ? void 0 : project.discoveryList) === null || _b === void 0 ? void 0 : _b[0]
            : (_c = project === null || project === void 0 ? void 0 : project.assists) === null || _c === void 0 ? void 0 : _c[0],
        flows: project.flows,
        isAnchoredElement: objKey.includes("discovery")
            ? false
            : !!((_f = (_e = (_d = project === null || project === void 0 ? void 0 : project.assists) === null || _d === void 0 ? void 0 : _d[0].instruction) === null || _e === void 0 ? void 0 : _e.assistInfo) === null || _f === void 0 ? void 0 : _f.identifier),
        targetId: objKey.includes("discovery")
            ? ""
            : (_j = (_h = (_g = project === null || project === void 0 ? void 0 : project.assists) === null || _g === void 0 ? void 0 : _g[0].instruction) === null || _h === void 0 ? void 0 : _h.assistInfo) === null || _j === void 0 ? void 0 : _j.identifier,
        triggerDelay: objKey.includes("discovery")
            ? ((_k = project.discoveryList) === null || _k === void 0 ? void 0 : _k[0].trigger.type) === "instant"
                ? 0
                : (_l = project.discoveryList) === null || _l === void 0 ? void 0 : _l[0].trigger.delay
            : ((_m = project === null || project === void 0 ? void 0 : project.assists) === null || _m === void 0 ? void 0 : _m[0].trigger.type) === "instant"
                ? 0
                : (_o = project === null || project === void 0 ? void 0 : project.assists) === null || _o === void 0 ? void 0 : _o[0].trigger.delay,
        initialTerminationStatus: initialTerminationStatus,
        terminationStatus: terminationStatus,
        nativeIdentifiers: project.nativeIdentifiers,
        webIdentifiers: project.webIdentifiers,
        auiContent: project.auiContent,
        localeSounds: project.localeSounds,
        projectParameters: project.projectParameters,
        webViewList: project.webViewList,
        languages: project.languages,
        connectedProjects: (project === null || project === void 0 ? void 0 : project.connectedProjects) || [],
        triggerCase: (_r = (_q = (_p = project === null || project === void 0 ? void 0 : project.discoveryList) === null || _p === void 0 ? void 0 : _p[0]) === null || _q === void 0 ? void 0 : _q.triggerFrequency) === null || _r === void 0 ? void 0 : _r.type,
        isIconEnabled: !!((_t = (_s = project.discoveryList) === null || _s === void 0 ? void 0 : _s[0]) === null || _t === void 0 ? void 0 : _t.enableIcon),
        iconSetting: __assign(__assign({}, (_u = Object.values((project === null || project === void 0 ? void 0 : project.iconSetting) || {})) === null || _u === void 0 ? void 0 : _u[0]), { stopEnabled: typeof ((_v = features === null || features === void 0 ? void 0 : features.iconOptions) === null || _v === void 0 ? void 0 : _v.stopEnabled) === "boolean"
                ? (_w = features === null || features === void 0 ? void 0 : features.iconOptions) === null || _w === void 0 ? void 0 : _w.stopEnabled
                : true }),
    };
}
function sortAndOrganizeProjects(projects, embedProject, savedAllProjectStatus, savedCompletedProjectsInFlow) {
    if (embedProject === void 0) { embedProject = false; }
    var specifiedOrder = [
        "STATIC_FLOW",
        "STATIC_FLOW_MENU",
        "STATIC_FLOW_CHECKLIST",
    ];
    var projectTypeOrder = new Map(specifiedOrder.map(function (type, index) { return [type, index]; }));
    var priorityOrder = [];
    var priorityLessOrder = [];
    var flowWalkthroughs = [];
    projects.forEach(function (project) {
        if (project.projectParameters.deploymentType === "LINK") {
            flowWalkthroughs.push(project);
            return;
        }
        if (project.projectParameters.priority === null) {
            priorityLessOrder.push(project);
        }
        else {
            priorityOrder.push(project);
        }
    });
    priorityOrder.sort(function (a, b) { return a.projectParameters.priority - b.projectParameters.priority; });
    priorityLessOrder.sort(function (a, b) {
        var typeA = projectTypeOrder.has(a.projectParameters.projectType)
            ? projectTypeOrder.get(a.projectParameters.projectType)
            : -1;
        var typeB = projectTypeOrder.has(b.projectParameters.projectType)
            ? projectTypeOrder.get(b.projectParameters.projectType)
            : -1;
        return typeA - typeB;
    });
    var sortedProjects = __spreadArray(__spreadArray([], __read(priorityOrder), false), __read(priorityLessOrder), false);
    var organizedProjects = [];
    var flowsWalkthroughProjects = {};
    var projectStatus = {};
    var initialCompletedProjectsInFlow = {};
    sortedProjects === null || sortedProjects === void 0 ? void 0 : sortedProjects.forEach(function (project) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var _j = findTerminationStatuses(project, savedAllProjectStatus), objKey = _j.objKey, initialTerminationStatus = _j.initialTerminationStatus, terminationStatus = _j.terminationStatus;
        organizedProjects.push(organizeProject(project, objKey, initialTerminationStatus, terminationStatus));
        if (project.connectedProjects !== undefined) {
            computeCompletedProjectsInFlow(project, objKey, savedCompletedProjectsInFlow, initialCompletedProjectsInFlow);
        }
        projectStatus[objKey] = {
            id: objKey,
            projectType: project.projectParameters.projectType,
            shownOnce: ((_a = savedAllProjectStatus === null || savedAllProjectStatus === void 0 ? void 0 : savedAllProjectStatus[objKey]) === null || _a === void 0 ? void 0 : _a.shownOnce) || false,
            isShown: ((_b = savedAllProjectStatus === null || savedAllProjectStatus === void 0 ? void 0 : savedAllProjectStatus[objKey]) === null || _b === void 0 ? void 0 : _b.isShown) || false,
            isCompleted: ((_c = savedAllProjectStatus === null || savedAllProjectStatus === void 0 ? void 0 : savedAllProjectStatus[objKey]) === null || _c === void 0 ? void 0 : _c.isCompleted) || false,
            isFlowTriggered: ((_d = savedAllProjectStatus === null || savedAllProjectStatus === void 0 ? void 0 : savedAllProjectStatus[objKey]) === null || _d === void 0 ? void 0 : _d.isFlowTriggered) || false,
            isTerminated: ((_e = savedAllProjectStatus === null || savedAllProjectStatus === void 0 ? void 0 : savedAllProjectStatus[objKey]) === null || _e === void 0 ? void 0 : _e.isTerminated) || false,
            triggerCase: (_h = (_g = (_f = project === null || project === void 0 ? void 0 : project.discoveryList) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.triggerFrequency) === null || _h === void 0 ? void 0 : _h.type,
            initialTerminationStatus: initialTerminationStatus,
            terminationStatus: terminationStatus,
        };
    });
    flowWalkthroughs === null || flowWalkthroughs === void 0 ? void 0 : flowWalkthroughs.forEach(function (project) {
        var _a, _b, _c, _d, _e;
        var _f = findTerminationStatuses(project, savedAllProjectStatus), objKey = _f.objKey, initialTerminationStatus = _f.initialTerminationStatus, terminationStatus = _f.terminationStatus;
        flowsWalkthroughProjects[project.projectParameters.deploymentId] =
            organizeProject(project, objKey, initialTerminationStatus, terminationStatus);
        if (embedProject) {
            projectStatus[objKey] = {
                id: objKey,
                projectType: project.projectParameters.projectType,
                shownOnce: false,
                isShown: false,
                isCompleted: false,
                isFlowTriggered: false,
                isTerminated: false,
                triggerCase: ((_a = project.discoveryList) === null || _a === void 0 ? void 0 : _a[0].uniqueID) !== undefined
                    ? (_c = (_b = project.discoveryList) === null || _b === void 0 ? void 0 : _b[0].triggerFrequency) === null || _c === void 0 ? void 0 : _c.type
                    : (_e = (_d = project.assists) === null || _d === void 0 ? void 0 : _d[0].triggerFrequency) === null || _e === void 0 ? void 0 : _e.type,
                initialTerminationStatus: initialTerminationStatus,
                terminationStatus: terminationStatus,
            };
        }
    });
    return {
        sortedProjects: organizedProjects,
        projectStatus: projectStatus,
        flowsWalkthroughProjects: flowsWalkthroughProjects,
        initialCompletedProjectsInFlow: initialCompletedProjectsInFlow,
    };
}
function checkToShowProject(id) {
    var project = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[id];
    if (!project)
        return false;
    var initialTerminationStatus = project === null || project === void 0 ? void 0 : project.initialTerminationStatus;
    var terminationStatus = project === null || project === void 0 ? void 0 : project.terminationStatus;
    if (!terminationStatus)
        return true;
    if ((initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.nSession) !== -1) {
        return !!(terminationStatus.nSession < initialTerminationStatus.nSession ||
            allProjectStatus[project.id].shownOnce);
    }
    if ((initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.nDismissedByUser) !== -1 &&
        (terminationStatus === null || terminationStatus === void 0 ? void 0 : terminationStatus.nDismissedByUser) === 0) {
        return true;
    }
    if ((initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.perApp) !== -1) {
        return terminationStatus.perApp < initialTerminationStatus.perApp;
    }
    if ((initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.untilAllFlowsAreCompleted) &&
        !(terminationStatus === null || terminationStatus === void 0 ? void 0 : terminationStatus.untilAllFlowsAreCompleted)) {
        return true;
    }
    if ((initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.nSession) === -1 &&
        (initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.nDismissedByUser) === -1 &&
        (initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.perApp) === -1 &&
        !(initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.untilAllFlowsAreCompleted)) {
        return true;
    }
    else {
        return false;
    }
}
function removeProjectFromStatusArray(_a, traceId) {
    var _b;
    var _c = _a.id, id = _c === void 0 ? undefined : _c, _d = _a.isTerminated, isTerminated = _d === void 0 ? false : _d, _e = _a.terminatedByIcon, terminatedByIcon = _e === void 0 ? false : _e, _f = _a.saveState, saveState = _f === void 0 ? true : _f;
    var activeProjectId = id
        ? id
        : (currentlyRunningFlow === null || currentlyRunningFlow === void 0 ? void 0 : currentlyRunningFlow.id) === ""
            ? activeProject === null || activeProject === void 0 ? void 0 : activeProject.id
            : currentlyRunningFlow === null || currentlyRunningFlow === void 0 ? void 0 : currentlyRunningFlow.id;
    var index = embedProject
        .concat(sortedProjectArray)
        .findIndex(function (s) { return s.id === activeProjectId; });
    if (index !== -1 && ((_b = embedProject === null || embedProject === void 0 ? void 0 : embedProject[0]) === null || _b === void 0 ? void 0 : _b.id) === activeProjectId)
        embedProject = [];
    updateProjectStatus({
        id: activeProjectId,
        isCompleted: !isTerminated,
        isTerminated: isTerminated,
        terminatedByIcon: isTerminated && terminatedByIcon,
    }, traceId);
    if (saveState) {
        updateUserProfile(traceId);
    }
}
function updateViewStatusForTheProject(key, traceId) {
    if (activeProject.id !== undefined) {
        var project = currentlyRunningFlow.id === ""
            ? allProjectStatus[activeProject.id]
            : allProjectStatus[currentlyRunningFlow.id];
        var initialTerminationStatus = project === null || project === void 0 ? void 0 : project.initialTerminationStatus;
        var terminationStatus = project === null || project === void 0 ? void 0 : project.terminationStatus;
        if (terminationStatus === undefined)
            return;
        if (key === "nSession" && initialTerminationStatus.nSession !== -1) {
            if (project.shownOnce === false)
                ++terminationStatus.nSession;
            allProjectStatus[project.id] = __assign(__assign({}, allProjectStatus[project.id]), { shownOnce: true });
        }
        else if (key === "nDismissedByUser" &&
            initialTerminationStatus.nDismissedByUser !== -1 &&
            terminationStatus.nDismissedByUser === 0) {
            sendAnalyticEvent(ANALYTICS_EVENTS.PROJECT_TERMINATION, {
                terminationRule: "nDismissedByUser: ".concat(initialTerminationStatus.nDismissedByUser),
            }, traceId);
            ++terminationStatus.nDismissedByUser;
            removeProjectFromStatusArray({ saveState: false }, traceId);
        }
        else if (key === "perApp" && initialTerminationStatus.perApp !== -1) {
            ++terminationStatus.perApp;
            if (terminationStatus.perApp === initialTerminationStatus.perApp) {
                sendAnalyticEvent(ANALYTICS_EVENTS.PROJECT_TERMINATION, {
                    terminationRule: "perApp: ".concat(initialTerminationStatus.perApp),
                }, traceId);
                removeProjectFromStatusArray({ saveState: false }, traceId);
            }
        }
        else if (key === "untilAllFlowsAreCompleted" &&
            (initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.untilAllFlowsAreCompleted) &&
            !terminationStatus.untilAllFlowsAreCompleted) {
            sendAnalyticEvent(ANALYTICS_EVENTS.PROJECT_TERMINATION, {
                terminationRule: "untilAllFlowsAreCompleted: ".concat(initialTerminationStatus.untilAllFlowsAreCompleted),
            }, traceId);
            terminationStatus.untilAllFlowsAreCompleted = true;
            removeProjectFromStatusArray({ saveState: false });
        }
        updateUserProfile(traceId);
    }
}
function areAllProjectsCompleted(data) {
    var e_3, _a;
    try {
        for (var _b = __values(data.projects), _c = _b.next(); !_c.done; _c = _b.next()) {
            var project = _c.value;
            if (!project.completed) {
                return false;
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return true;
}
function getTriggerConditionForStaticFlow(condition, isShown, triggeredAlready) {
    switch (condition) {
        case "EVERY_SESSION":
        case "PLAY_ONCE":
        case "EVERY_SESSION_UNTIL_DISMISSED":
        case "EVERY_SESSION_UNTIL_FLOW_COMPLETE":
        case "EVERY_SESSION_UNTIL_ALL_FLOWS_ARE_COMPLETED": {
            return triggeredAlready ? "ICON" : isShown ? "ICON" : "SHOW";
        }
        case "MANUAL_TRIGGER": {
            return "ICON";
        }
    }
}
function setSelectedLanguage(languages, languageCode) {
    if (languageCode) {
        var found = languages.find(function (l) { return l.localeId === languageCode; });
        if (found) {
            return found.localeId;
        }
    }
    var codeToUse = languages.length === 1 ? languages[0].localeId : "";
    return codeToUse || defaultLanguage;
}
function logCat(data) {
    var pattern = /"http[s]?:\/\/[^"]*"/g;
    return JSON.stringify(data).replace(pattern, '""');
}
function parseRegexString(regexString) {
    var match = regexString.match(/^\/(.*)\/([gimsuy]*)$/);
    if (match) {
        var pattern = match[1];
        var flags = match[2];
        return new RegExp(pattern, flags);
    }
    else {
        return new RegExp(regexString);
    }
}
function getElapsedTimeInSeconds(timestamp) {
    var currentTime = new Date(new Date().toUTCString()).getTime();
    var timeStampToDateTime = new Date(new Date(timestamp).toUTCString()).getTime();
    var elapsedTime = currentTime - timeStampToDateTime;
    var elapsedTimeInSeconds = Math.floor(elapsedTime / 1000);
    return elapsedTimeInSeconds;
}
var SequentialExecutor = (function () {
    function SequentialExecutor() {
        this.queue = [];
        this.isRunning = false;
    }
    SequentialExecutor.prototype.addTask = function (task) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.queue.push({ task: task, resolve: resolve, reject: reject });
            _this.executeNext();
        });
    };
    SequentialExecutor.prototype.executeNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, task, resolve, reject, result, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.isRunning || this.queue.length === 0) {
                            return [2];
                        }
                        this.isRunning = true;
                        _a = this.queue.shift(), task = _a.task, resolve = _a.resolve, reject = _a.reject;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, 4, 5]);
                        return [4, task()];
                    case 2:
                        result = _b.sent();
                        resolve(result);
                        return [3, 5];
                    case 3:
                        error_1 = _b.sent();
                        reject(error_1);
                        return [3, 5];
                    case 4:
                        this.isRunning = false;
                        this.executeNext();
                        return [7];
                    case 5: return [2];
                }
            });
        });
    };
    return SequentialExecutor;
}());
var executor = new SequentialExecutor();
function isEmptyObject(obj) {
    return obj && typeof obj === 'object' && !Array.isArray(obj) && Object.keys(obj).length === 0;
}
function isNonEmptyObject(obj) {
    return !isEmptyObject(obj);
}
function reCalculateCompletedProjectsInFlow(sortedProjects, savedCompletedProjectsInFlow) {
    completedProjectsInFlow = {};
    sortedProjects === null || sortedProjects === void 0 ? void 0 : sortedProjects.forEach(function (project) {
        var _a;
        if (((_a = project.connectedProjects) === null || _a === void 0 ? void 0 : _a.length) !== 0) {
            computeCompletedProjectsInFlow(project, project.id, savedCompletedProjectsInFlow, completedProjectsInFlow);
        }
    });
}
function computeCompletedProjectsInFlow(project, flowMenuProjectId, savedCompletedProjectsInFlow, initialCompletedProjectsInFlow) {
    var _a;
    var projects = [];
    var savedConnectedProjectStatus = {};
    if (savedCompletedProjectsInFlow === null || savedCompletedProjectsInFlow === void 0 ? void 0 : savedCompletedProjectsInFlow[flowMenuProjectId]) {
        (_a = savedCompletedProjectsInFlow[flowMenuProjectId].projects) === null || _a === void 0 ? void 0 : _a.forEach(function (proj) {
            savedConnectedProjectStatus[proj.id] = proj.completed;
        });
    }
    project.connectedProjects.forEach(function (s) {
        projects.push({
            id: s.projectId,
            completed: savedConnectedProjectStatus[s.projectId] || false,
        });
    });
    initialCompletedProjectsInFlow[flowMenuProjectId] = {
        id: flowMenuProjectId,
        projects: projects,
    };
}
var SDK_STATE_VERSION = 1;
var sdkStateService = {
    init: function (storedSdkStateString) {
        if (storedSdkStateString === void 0) { storedSdkStateString = "{}"; }
        var storedSdkState = safeParse(storedSdkStateString);
        var isFirstStart = isEmptyObject(storedSdkState);
        var sdkState = sdkStateVersionConverter.validateAndConvert(storedSdkState);
        this.version = SDK_STATE_VERSION;
        console.warn("sdkStateService.init(): sdkStateVersion", SDK_STATE_VERSION);
        this.userStates = sdkState.userStates || {};
        this.internalUserId = sdkState.internalUserId || this.generateWfUid();
        this.currentUserId = sdkState.currentUserId;
        this.segmentConfigMap = sdkState.segmentConfigMap || {};
        this.appLocale = sdkState.appLocale;
        this.deviceInstallId = sdkState.deviceInstallId || generateUUID();
        if (isFirstStart) {
            this.currentUserId = this.internalUserId;
        }
        this.ensureUserStateExists(this.internalUserId);
        this.ensureUserStateExists(this.currentUserId);
    },
    get isCurrentUserInternal() {
        return this.isUserIdInternal(this.currentUserId);
    },
    get isCurrentUserExternal() {
        return this.isUserIdExternal(this.currentUserId);
    },
    isUserIdInternal: function (userId) {
        return this.internalUserId === userId;
    },
    isUserIdExternal: function (userId) {
        return !this.isUserIdInternal(userId);
    },
    get isLoggedIn() {
        return !!this.currentUserId;
    },
    get isLoggedOut() {
        return !this.isLoggedIn;
    },
    setUserId: function (userId, traceId) {
        if (!userId) {
            return;
        }
        this.currentUserId = userId;
        this.ensureUserStateExists(userId);
        this.persistState(traceId);
    },
    logout: function (traceId) {
        var currentUserState = this.currentUserState;
        var emptyState = this.createEmptyUserState(currentUserState.userId, currentUserState.wfId);
        emptyState.projectsStatus = currentUserState.projectsStatus || [];
        emptyState.projectsCompletionStats = currentUserState.projectsCompletionStats;
        emptyState.language = currentUserState.language;
        emptyState.lastProfileUpdatedAt = currentUserState.lastProfileUpdatedAt;
        emptyState.lastProfileSyncedAt = currentUserState.lastProfileSyncedAt;
        this.currentUserId = null;
        this.persistState(traceId);
    },
    ensureUserStateExists: function (userId) {
        if (!userId) {
            return;
        }
        if (!this.userStates[userId]) {
            this.userStates[userId] = this.createEmptyUserState(userId);
        }
    },
    persistState: function (traceId) {
        var currentSdkState = this.sdkState;
        var message = {
            command: SENDING_COMMANDS.SAVE_USER_STATE,
            data: this.sdkState,
        };
        sendMessageToNative(message, traceId);
    },
    get sdkState() {
        var state = {
            version: this.version,
            userStates: this.userStates,
            internalUserId: this.internalUserId,
            currentUserId: this.currentUserId,
            segmentConfigMap: this.segmentConfigMap,
            appLocale: this.appLocale,
            deviceInstallId: this.deviceInstallId,
        };
        if (this.isLoggedIn) {
            state[this.currentUserId] = this.currentUserState;
        }
        return state;
    },
    createEmptyUserState: function (userId, wfId) {
        return {
            projectArray: [],
            projectsStatus: {},
            connectedWalkthroughs: {},
            language: undefined,
            currentPlatform: undefined,
            lastUpdatedConfigAt: undefined,
            lastUpdatedEmbedConfigAt: undefined,
            lastProfileUpdatedAt: undefined,
            lastProfileSyncedAt: undefined,
            savedEmbedProject: [],
            userId: userId,
            wfId: wfId || this.generateWfUid(),
            projectsCompletionStats: {},
            apiKey: appApiKey,
            baseURL: configBaseUrl,
            appVersion: appVersionName,
            features: features,
            metaConfigs: metaConfigs,
            loggerConfig: loggerConfig,
            customProps: customProperties,
        };
    },
    updateCurrentUserState: function (updates) {
        if (updates === void 0) { updates = {}; }
        var userId = this.currentUserId;
        this.updateUserStateById(userId, updates);
    },
    get currentUserState() {
        var userId = this.currentUserId;
        return this.getUserStateById(userId);
    },
    getUserStateById: function (userId) {
        this.ensureUserStateExists(userId);
        return this.userStates[userId] || {};
    },
    updateUserStateById: function (userId, updates) {
        if (updates === void 0) { updates = {}; }
        this.ensureUserStateExists(userId);
        Object.assign(this.userStates[userId], updates);
    },
    generateWfUid: function () {
        return "wf:".concat(generateUUID());
    },
    get allUserIds() {
        return Object.keys(this.userStates);
    },
    cleanUpSyncedUserStates: function () {
        for (var userStatesKey in this.userStates) {
            if (userStatesKey !== this.currentUserId) {
                var savedUserState = this.getUserStateById(userStatesKey);
                if (this.isStateSyncedForUserState(savedUserState)) {
                    this.deleteUserStateById(userStatesKey);
                }
            }
        }
    },
    isStateSyncedForUserId: function (userId) {
        var savedUserState = this.getUserStateById(userId);
        return this.isStateSyncedForUserState(savedUserState);
    },
    isStateSyncedForUserState: function (userState) {
        var updatedAtString = userState === null || userState === void 0 ? void 0 : userState.lastProfileUpdatedAt;
        var updatedAt = updatedAtString ? new Date(updatedAtString).getTime() : null;
        var lastSyncedAtString = userState === null || userState === void 0 ? void 0 : userState.lastProfileSyncedAt;
        var lastSyncedAt = lastSyncedAtString ? new Date(lastSyncedAtString).getTime() : null;
        if (!updatedAt) {
            return true;
        }
        return typeof updatedAt === 'number' && typeof lastSyncedAt === 'number' && updatedAt <= lastSyncedAt;
    },
    deleteUserStateById: function (userId, traceId) {
        if (this.currentUserId !== userId) {
            delete this.userStates[userId];
            this.persistState(traceId);
        }
    }
};
var sdkStateVersionConverter = {
    validateAndConvert: function (storedSdkState) {
        var storedSdkStateVersion = (storedSdkState === null || storedSdkState === void 0 ? void 0 : storedSdkState.version) || 0;
        if (SDK_STATE_VERSION !== storedSdkStateVersion) {
            switch (storedSdkStateVersion) {
                case 0:
                    return this.v0Tov1(storedSdkState);
                default:
                    throw new Error("sdkStateVersionConverter(): converter not implemented for version- ".concat(storedSdkStateVersion));
            }
        }
        return storedSdkState;
    },
    v0Tov1: function (sdkStateV0) {
        var convertedSdkState = {};
        for (var key in sdkStateV0) {
            var child = sdkStateV0[key];
            if (typeof child === 'object' && (child === null || child === void 0 ? void 0 : child.apiKey)) {
                if (!convertedSdkState.userStates) {
                    convertedSdkState.userStates = {};
                }
                child.userId = key;
                convertedSdkState.userStates[key] = child;
                convertedSdkState.currentUserId = key;
            }
            else {
                convertedSdkState[key] = child;
            }
        }
        return convertedSdkState;
    }
};
function safeParse(jsonString, fallback) {
    if (fallback === void 0) { fallback = {}; }
    try {
        return JSON.parse(jsonString || "{}");
    }
    catch (e) {
        console.warn("unable to parse sdk state string", e);
        return fallback;
    }
}
var screenWidth = -1;
var screenHeight = -1;
function filterHierarchy(node, currentPlatform, isLayout) {
    var _a, _b, _c;
    if (currentPlatform === void 0) { currentPlatform = platform; }
    if (isLayout === void 0) { isLayout = false; }
    if (subPlatform === "FLUTTER") {
        return node;
    }
    var isRoot = (node === null || node === void 0 ? void 0 : node.layout) !== undefined;
    if (isRoot) {
        screenWidth = node === null || node === void 0 ? void 0 : node.screen_width;
        screenHeight = node === null || node === void 0 ? void 0 : node.screen_height;
    }
    else if (isLayout) {
        if (currentPlatform !== PLATFORMS.ANDROID) {
            if ((_a = features === null || features === void 0 ? void 0 : features.filterByOpaqueViews) === null || _a === void 0 ? void 0 : _a.isReactNative) {
                removeIrrelevantNodesIOS(node, null);
            }
            else if (features === null || features === void 0 ? void 0 : features.useClickableBounds) {
                calculateClickableBoundsForIos(node);
            }
        }
        else if (currentPlatform === PLATFORMS.ANDROID) {
            calculateClickableBoundsForAndroid(node);
        }
    }
    else {
        if (currentPlatform === PLATFORMS.ANDROID) {
            if ((_c = (_b = features === null || features === void 0 ? void 0 : features.doNotFliter) === null || _b === void 0 ? void 0 : _b.classNames) === null || _c === void 0 ? void 0 : _c.includes(node === null || node === void 0 ? void 0 : node.class)) {
                return node;
            }
            filterNoHideDescendants(node);
        }
        var ignoreNode = currentPlatform === PLATFORMS.ANDROID
            ? ignoreInvalidViewsAndroid(node)
            : ignoreInvalidViewsIOS(node);
        if (ignoreNode) {
            return;
        }
    }
    var children = isRoot ? [__assign({}, node === null || node === void 0 ? void 0 : node.layout)] : node === null || node === void 0 ? void 0 : node.children;
    var filteredChildren = [];
    children === null || children === void 0 ? void 0 : children.forEach(function (child) {
        var res = filterHierarchy(child, currentPlatform, isRoot);
        if (res)
            filteredChildren.push(child);
    });
    if (filteredChildren.length > 1) {
        filteredChildren =
            currentPlatform === PLATFORMS.ANDROID
                ? ignoreOverlappingNodesAndroid(filteredChildren)
                : ignoreOverlappingNodesIOS(filteredChildren);
    }
    else if (filteredChildren.length === 0 &&
        currentPlatform === PLATFORMS.ANDROID &&
        (node === null || node === void 0 ? void 0 : node.is_view_group) &&
        !(node === null || node === void 0 ? void 0 : node.is_clickable) &&
        !(node === null || node === void 0 ? void 0 : node.is_focusable) &&
        !(node === null || node === void 0 ? void 0 : node.is_long_clickable)) {
        return;
    }
    isRoot
        ? (node.layout = filteredChildren[0])
        : (node.children = filteredChildren);
    return node;
}
function calculateClickableBoundsForAndroid(node) {
    var _a, _b, _c;
    var isClickable = (node === null || node === void 0 ? void 0 : node.is_clickable) || (node === null || node === void 0 ? void 0 : node.is_long_clickable);
    var clickableBoundsChildren = null;
    (_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
        calculateClickableBoundsForAndroid(child);
        !isClickable &&
            (clickableBoundsChildren = calcInclusiveBounds(clickableBoundsChildren, child.clickable_bounds));
    });
    if (isClickable) {
        node.clickable_bounds = node === null || node === void 0 ? void 0 : node.bounds;
        return;
    }
    if (!clickableBoundsChildren) {
        node.clickable_bounds = null;
        return;
    }
    node.clickable_bounds = clickableBoundsChildren;
    if (getBoundingArea(node === null || node === void 0 ? void 0 : node.clickable_bounds) === 0) {
        if ((node === null || node === void 0 ? void 0 : node.alpha) < ((_b = features === null || features === void 0 ? void 0 : features.filterByOpaqueViews) === null || _b === void 0 ? void 0 : _b.opacityLimit)) {
            node.clickable_bounds = null;
            return;
        }
        node.clickable_bounds = node === null || node === void 0 ? void 0 : node.bounds;
    }
    else if (!isClickable &&
        (node === null || node === void 0 ? void 0 : node.alpha) > ((_c = features === null || features === void 0 ? void 0 : features.filterByOpaqueViews) === null || _c === void 0 ? void 0 : _c.opacityLimit)) {
        node.clickable_bounds = node === null || node === void 0 ? void 0 : node.bounds;
    }
    node.clickable_bounds = calcExclusiveBounds(node === null || node === void 0 ? void 0 : node.clickable_bounds, node === null || node === void 0 ? void 0 : node.bounds);
    return;
}
function calculateClickableBoundsForIos(node) {
    var _a, _b;
    var clickableBoundsChildren = null;
    if (!["RCTView", "RCTSafeAreaView"].includes(node === null || node === void 0 ? void 0 : node.class)) {
        node.clickable_bounds = __assign({}, node === null || node === void 0 ? void 0 : node.bounds);
        (_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
            calculateClickableBoundsForIos(child);
        });
        return node.clickable_bounds;
    }
    (_b = node === null || node === void 0 ? void 0 : node.children) === null || _b === void 0 ? void 0 : _b.forEach(function (child) {
        calculateClickableBoundsForIos(child);
        clickableBoundsChildren = calcInclusiveBounds(clickableBoundsChildren, child.clickable_bounds);
    });
    if (!clickableBoundsChildren) {
        node.clickable_bounds = null;
        return;
    }
    node.clickable_bounds = calcExclusiveBounds(clickableBoundsChildren, node === null || node === void 0 ? void 0 : node.bounds);
    return;
}
function calcInclusiveBounds(bounds1, bounds2) {
    if (!bounds1 && !bounds2) {
        return null;
    }
    else if (!bounds1) {
        return bounds2;
    }
    else if (!bounds2) {
        return bounds1;
    }
    return {
        left: Math.min(bounds1.left, bounds2.left),
        top: Math.min(bounds1.top, bounds2.top),
        right: Math.max(bounds1.right, bounds2.right),
        bottom: Math.max(bounds1.bottom, bounds2.bottom),
    };
}
function calcExclusiveBounds(bounds1, bounds2) {
    if (!bounds1 && !bounds2) {
        return null;
    }
    else if (!bounds1) {
        return bounds2;
    }
    else if (!bounds2) {
        return bounds1;
    }
    return {
        left: Math.max(bounds1.left, bounds2.left),
        top: Math.max(bounds1.top, bounds2.top),
        right: Math.min(bounds1.right, bounds2.right),
        bottom: Math.min(bounds1.bottom, bounds2.bottom),
    };
}
function removeIrrelevantNodesIOS(node, parentBounds) {
    var _a;
    if (isIrrelevantView(node, parentBounds))
        return true;
    if (node === null || node === void 0 ? void 0 : node.children) {
        node.children = node === null || node === void 0 ? void 0 : node.children.filter(function (child) {
            return !removeIrrelevantNodesIOS(child, (node === null || node === void 0 ? void 0 : node.clipsToBounds) ? node === null || node === void 0 ? void 0 : node.bounds : null);
        });
    }
    if (((_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a.length) === 0 &&
        ["RCTView", "RCTSafeAreaView"].includes(node === null || node === void 0 ? void 0 : node.class)) {
        return true;
    }
    return false;
}
function isIrrelevantView(node, parentBounds) {
    var _a, _b, _c, _d;
    if (ignoreInvalidViewsIOS(node)) {
        return true;
    }
    if (parentBounds &&
        (((_a = node === null || node === void 0 ? void 0 : node.bounds) === null || _a === void 0 ? void 0 : _a.left) >= parentBounds.right ||
            ((_b = node === null || node === void 0 ? void 0 : node.bounds) === null || _b === void 0 ? void 0 : _b.right) <= parentBounds.left ||
            ((_c = node === null || node === void 0 ? void 0 : node.bounds) === null || _c === void 0 ? void 0 : _c.top) >= parentBounds.bottom ||
            ((_d = node === null || node === void 0 ? void 0 : node.bounds) === null || _d === void 0 ? void 0 : _d.bottom) <= parentBounds.top)) {
        return true;
    }
    if (!isVisibleInWindow(node)) {
        return true;
    }
    return false;
}
function isVisibleInWindow(node) {
    var _a, _b, _c, _d;
    return (((_a = node === null || node === void 0 ? void 0 : node.bounds) === null || _a === void 0 ? void 0 : _a.right) > 0 &&
        ((_b = node === null || node === void 0 ? void 0 : node.bounds) === null || _b === void 0 ? void 0 : _b.left) < screenWidth &&
        ((_c = node === null || node === void 0 ? void 0 : node.bounds) === null || _c === void 0 ? void 0 : _c.bottom) > 0 &&
        ((_d = node === null || node === void 0 ? void 0 : node.bounds) === null || _d === void 0 ? void 0 : _d.top) < screenHeight);
}
function filterNoHideDescendants(node) {
    var _a, _b, _c;
    if (isDrawerLayout(node) ||
        ((_b = (_a = features === null || features === void 0 ? void 0 : features.filterByNoHideDescendants) === null || _a === void 0 ? void 0 : _a.classNames) === null || _b === void 0 ? void 0 : _b.includes(node === null || node === void 0 ? void 0 : node.class))) {
        node.children = (_c = node === null || node === void 0 ? void 0 : node.children) === null || _c === void 0 ? void 0 : _c.filter(function (child) { return child.importantForAccessibilityStr !== "noHideDescendants"; });
    }
}
function isDrawerLayout(node) {
    var ANDROIDX_DRAWER_LAYOUT = "androidx.drawerlayout.widget.DrawerLayout";
    var ANDROID_SUPPORT_DRAWER_LAYOUT = "android.support.v4.widget.DrawerLayout";
    return [ANDROIDX_DRAWER_LAYOUT, ANDROID_SUPPORT_DRAWER_LAYOUT].includes(node === null || node === void 0 ? void 0 : node.class);
}
function ignoreInvalidViewsIOS(node) {
    var _a, _b;
    if ((_a = node === null || node === void 0 ? void 0 : node.class) === null || _a === void 0 ? void 0 : _a.includes("Leap"))
        return true;
    if ((_b = features === null || features === void 0 ? void 0 : features.classes) === null || _b === void 0 ? void 0 : _b.includes(node === null || node === void 0 ? void 0 : node.class))
        return true;
    if (!!(node === null || node === void 0 ? void 0 : node.clip_to_bounds) && checkForEmptyBounds(node === null || node === void 0 ? void 0 : node.bounds))
        return true;
    if ((node === null || node === void 0 ? void 0 : node.hidden) || (node === null || node === void 0 ? void 0 : node.alpha) <= 0)
        return true;
    return false;
}
function ignoreInvalidViewsAndroid(node) {
    var _a, _b, _c, _d;
    if (((_a = node === null || node === void 0 ? void 0 : node.bounds) === null || _a === void 0 ? void 0 : _a.right) <= 5 || ((_b = node === null || node === void 0 ? void 0 : node.bounds) === null || _b === void 0 ? void 0 : _b.left) >= screenWidth)
        return true;
    if ((node === null || node === void 0 ? void 0 : node.visibility) !== 0)
        return true;
    if (((_c = node === null || node === void 0 ? void 0 : node.tag) === null || _c === void 0 ? void 0 : _c.includes("LeapView")) ||
        ((_d = node === null || node === void 0 ? void 0 : node.class) === null || _d === void 0 ? void 0 : _d.startsWith("is.leap.android.aui")))
        return true;
    if (getWidth(node === null || node === void 0 ? void 0 : node.bounds) <= 0 || getHeight(node === null || node === void 0 ? void 0 : node.bounds) <= 0)
        return true;
    if ((node === null || node === void 0 ? void 0 : node.clickable_bounds) &&
        ((node === null || node === void 0 ? void 0 : node.clickable_bounds.bottom) < (node === null || node === void 0 ? void 0 : node.clickable_bounds.top) ||
            (node === null || node === void 0 ? void 0 : node.clickable_bounds.right) < (node === null || node === void 0 ? void 0 : node.clickable_bounds.left)))
        return true;
    if (((node === null || node === void 0 ? void 0 : node.children) === undefined || (node === null || node === void 0 ? void 0 : node.children.length) === 0) &&
        (node === null || node === void 0 ? void 0 : node.is_view_group) &&
        !(node === null || node === void 0 ? void 0 : node.is_clickable) &&
        !(node === null || node === void 0 ? void 0 : node.is_focusable) &&
        !(node === null || node === void 0 ? void 0 : node.is_long_clickable))
        return true;
    return false;
}
function ignoreOverlappingNodesIOS(nodes) {
    var sortedNodes = nodes.sort(function (a, b) { return parseFloat(b.z) - parseFloat(a.z) || b.node_index - a.node_index; });
    var filteredNodes = [sortedNodes[0]];
    var _loop_1 = function (i) {
        var currentObject = sortedNodes[i];
        var currentBounds = (features === null || features === void 0 ? void 0 : features.useClickableBounds)
            ? currentObject.clickable_bounds
            : currentObject.bounds;
        var isCurrentObjPresent = filteredNodes.findIndex(function (s) { return s.uuid === currentObject.uuid; });
        if (i !== 0 && isCurrentObjPresent === -1)
            return "continue";
        var _loop_2 = function (j) {
            var nextObject = sortedNodes[j];
            var nextBounds = (features === null || features === void 0 ? void 0 : features.useClickableBounds)
                ? nextObject.clickable_bounds
                : nextObject.bounds;
            var index = filteredNodes.findIndex(function (s) { return s.uuid === nextObject.uuid; });
            if (i !== 0 && index === -1)
                return "continue";
            if (!isInsideBounds(currentBounds, nextBounds)) {
                if (i === 0) {
                    filteredNodes.push(nextObject);
                }
                return "continue";
            }
            else if (i !== 0) {
                filteredNodes.splice(index, 1);
            }
        };
        for (var j = i + 1; j < sortedNodes.length; j++) {
            _loop_2(j);
        }
    };
    for (var i = 0; i < sortedNodes.length; i++) {
        _loop_1(i);
    }
    return filteredNodes.reverse();
}
function ignoreOverlappingNodesAndroid(children) {
    if (!children || children.length === 0) {
        return;
    }
    children.sort(function (a, b) {
        return parseFloat(a.z) - parseFloat(b.z);
    });
    var newChildren = JSON.parse(JSON.stringify(children));
    for (var topSiblingIndex = children.length - 1; topSiblingIndex > 0; topSiblingIndex--) {
        var topSibling = children[topSiblingIndex];
        if (!topSibling)
            continue;
        for (var childIndex = topSiblingIndex - 1; childIndex >= 0; childIndex--) {
            var sibling = children[childIndex];
            if (!sibling)
                continue;
            if ((topSibling === null || topSibling === void 0 ? void 0 : topSibling.clickable_bounds) === null) {
                if (!isInsideBounds(topSibling.bounds, sibling.bounds))
                    continue;
                if ((topSibling === null || topSibling === void 0 ? void 0 : topSibling.is_text_view) ||
                    (topSibling === null || topSibling === void 0 ? void 0 : topSibling.is_text_view) ||
                    topSibling.has_child_with_text_or_image)
                    continue;
                newChildren[topSiblingIndex] = null;
                break;
            }
            if (isInsideBounds(topSibling === null || topSibling === void 0 ? void 0 : topSibling.clickable_bounds, sibling.bounds) ||
                (sibling.clickable_bounds !== null &&
                    isInsideBounds(topSibling === null || topSibling === void 0 ? void 0 : topSibling.clickable_bounds, sibling.clickable_bounds))) {
                newChildren[childIndex] = null;
            }
        }
    }
    return newChildren.filter(function (node) { return node; });
}
function getCorrectKey(key) {
    var reverseMappings = {
        id: "r_id",
        class: "classname",
    };
    if (key in reverseMappings) {
        return reverseMappings[key];
    }
    return key;
}
function standardizeIdParams(params) {
    var e_4, _a;
    var mappings = {
        R_ID: "id",
        AR_ID: "ar_id",
        className: "class",
        CONTENT_DESC: "content_desc",
        ACC_ID: "acc_id",
        TAG: "tag",
        ACC_LABEL: "acc_label",
    };
    var standardized = __assign({}, params);
    try {
        for (var _b = __values(Object.entries(mappings)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), oldKey = _d[0], newKey = _d[1];
            if (standardized[oldKey]) {
                standardized[newKey] = standardized[oldKey];
                delete standardized[oldKey];
            }
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_4) throw e_4.error; }
    }
    return standardized;
}
function getTargetValuesToMatch(target, relationToTarget) {
    var _a;
    if (!relationToTarget)
        return {};
    var targetIdParams = standardizeIdParams(__assign({}, target === null || target === void 0 ? void 0 : target.idParams));
    if ((_a = targetIdParams.text) === null || _a === void 0 ? void 0 : _a.ang) {
        targetIdParams.text = targetIdParams.text.ang;
    }
    return __assign(__assign({}, targetIdParams), { relationship: relationToTarget });
}
function getIdentifiersInArray(identifiers) {
    var e_5, _a;
    var _b, _c, _d, _e, _f;
    var arrayResult = [];
    try {
        for (var _g = __values(Object.entries(identifiers)), _h = _g.next(); !_h.done; _h = _g.next()) {
            var _j = __read(_h.value, 2), name_1 = _j[0], value = _j[1];
            var idParams = name_1 === "wfxWebViewList"
                ? standardizeIdParams(__assign({}, value))
                : standardizeIdParams(__assign({}, value.idParams));
            var regex = name_1 !== "wfxWebViewList" && standardizeIdParams(__assign({}, value === null || value === void 0 ? void 0 : value.regex));
            if (regex !== undefined) {
                if ((_b = regex === null || regex === void 0 ? void 0 : regex.text) === null || _b === void 0 ? void 0 : _b.ang) {
                    regex.text = regex.text.ang;
                }
            }
            if ((_c = idParams.text) === null || _c === void 0 ? void 0 : _c.ang) {
                idParams.text = idParams.text.ang;
            }
            if (value.activityName) {
                idParams.activityName = value.activityName;
            }
            if (value.controller) {
                idParams.controller = value.controller;
            }
            var targetValuesToMatch = getTargetValuesToMatch(value.target, value.relationToTarget);
            if (Object.keys(targetValuesToMatch).length !== 0 && ((_d = value === null || value === void 0 ? void 0 : value.target) === null || _d === void 0 ? void 0 : _d.regex)) {
                targetValuesToMatch.regex =
                    name_1 !== "wfxWebViewList" &&
                        standardizeIdParams(__assign({}, (_e = value === null || value === void 0 ? void 0 : value.target) === null || _e === void 0 ? void 0 : _e.regex));
                if (targetValuesToMatch.regex !== undefined) {
                    if ((_f = targetValuesToMatch.regex.text) === null || _f === void 0 ? void 0 : _f.ang) {
                        targetValuesToMatch.regex.text = targetValuesToMatch.regex.text.ang;
                    }
                }
            }
            arrayResult.push(__assign(__assign({ name: name_1, regex: regex }, idParams), { target: targetValuesToMatch }));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (_h && !_h.done && (_a = _g.return)) _a.call(_g);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return arrayResult;
}
function findMatchingNode(root, identifier, regex) {
    var e_6, _a;
    var isMatchingNode = function (node, identifier) {
        var e_7, _a;
        var _b, _c, _d, _e, _f;
        try {
            for (var _g = __values(Object.entries(identifier)), _h = _g.next(); !_h.done; _h = _g.next()) {
                var _j = __read(_h.value, 2), key = _j[0], value = _j[1];
                if (key === "name")
                    continue;
                if (key === "ar_id") {
                    var nodeId = (_b = node.id) === null || _b === void 0 ? void 0 : _b.split("android:id/").pop();
                    if (regex === null || regex === void 0 ? void 0 : regex[key]) {
                        if (!((_c = parseRegexString(regex === null || regex === void 0 ? void 0 : regex[key])) === null || _c === void 0 ? void 0 : _c.test(nodeId)))
                            return false;
                    }
                    else {
                        if (nodeId !== value)
                            return false;
                    }
                }
                else if (key === "id") {
                    var nodeId = (_d = node[key]) === null || _d === void 0 ? void 0 : _d.split("".concat(root.ROOT_NODE.client_package_name, ":id/")).pop();
                    if (regex === null || regex === void 0 ? void 0 : regex[key]) {
                        if (!((_e = parseRegexString(regex === null || regex === void 0 ? void 0 : regex[key])) === null || _e === void 0 ? void 0 : _e.test(nodeId)))
                            return false;
                    }
                    else {
                        if (nodeId !== value)
                            return false;
                    }
                }
                else {
                    if (regex === null || regex === void 0 ? void 0 : regex[key]) {
                        if (!((_f = parseRegexString(regex === null || regex === void 0 ? void 0 : regex[key])) === null || _f === void 0 ? void 0 : _f.test(node[key])))
                            return false;
                    }
                    else {
                        if (node[key] !== value)
                            return false;
                    }
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_h && !_h.done && (_a = _g.return)) _a.call(_g);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return true;
    };
    try {
        for (var _b = __values(Object.keys(root)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var id = _c.value;
            var node = root[id];
            if (isMatchingNode(node, identifier)) {
                return node;
            }
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_6) throw e_6.error; }
    }
    return undefined;
}
function followRelationship(root, startNode, relationship) {
    var e_8, _a;
    var _b;
    var currentNode = startNode;
    var _loop_3 = function (step) {
        if (!currentNode) {
            return { value: null };
        }
        var direction = step.charAt(0);
        if (direction === "P") {
            currentNode = root[currentNode.parentId] || null;
            return "continue";
        }
        else if (direction === "C") {
            var index_1 = parseInt(step.slice(1), 10) || 0;
            if (typeof currentNode === "string") {
                currentNode = root[currentNode];
            }
            if (((_b = currentNode === null || currentNode === void 0 ? void 0 : currentNode.children) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                currentNode = currentNode.children.find(function (s) { return root[s].node_index === index_1; });
                return "continue";
            }
            else {
                return { value: null };
            }
        }
    };
    try {
        for (var relationship_1 = __values(relationship), relationship_1_1 = relationship_1.next(); !relationship_1_1.done; relationship_1_1 = relationship_1.next()) {
            var step = relationship_1_1.value;
            var state_1 = _loop_3(step);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (relationship_1_1 && !relationship_1_1.done && (_a = relationship_1.return)) _a.call(relationship_1);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return typeof currentNode === "string" ? root[currentNode] : currentNode;
}
function findFirstWebView() {
    return flattenedHierarchyArray.find(function (node) {
        var isWebView = node["is_webview"];
        if (isWebView && platform === "ANDROID") {
            return "com.google.android.gms.ads.internal.webview" !== node["class"];
        }
        return isWebView;
    });
}
function findMatches(filteredHierarchy, identifiers, traceId) {
    if (!identifiers) {
        return;
    }
    var matchedIdentifiers = [];
    var unMatchedIdentifiers = [];
    var matchedNode = [];
    var identifiersArray = getIdentifiersInArray(identifiers);
    var regex = {};
    identifiersArray === null || identifiersArray === void 0 ? void 0 : identifiersArray.forEach(function (identifier) {
        var e_9, _a;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        var name = identifier.name;
        var found = false;
        var ObserverData = {
            identifier_id: name,
        };
        regex = identifier.regex;
        delete identifier.regex;
        if (Object.keys(identifier === null || identifier === void 0 ? void 0 : identifier.target).length === 0) {
            delete identifier.target;
            var compareActivityName = (identifier === null || identifier === void 0 ? void 0 : identifier.activityName) &&
                (regex.activityName
                    ? !((_b = parseRegexString(regex === null || regex === void 0 ? void 0 : regex.activityName)) === null || _b === void 0 ? void 0 : _b.test(filteredHierarchy === null || filteredHierarchy === void 0 ? void 0 : filteredHierarchy.activity_name))
                    : !((_c = filteredHierarchy === null || filteredHierarchy === void 0 ? void 0 : filteredHierarchy.activity_name) === null || _c === void 0 ? void 0 : _c.includes(identifier === null || identifier === void 0 ? void 0 : identifier.activityName)));
            var compareController = (identifier === null || identifier === void 0 ? void 0 : identifier.controller) &&
                (regex.controller
                    ? !((_d = parseRegexString(regex === null || regex === void 0 ? void 0 : regex.controller)) === null || _d === void 0 ? void 0 : _d.test(filteredHierarchy === null || filteredHierarchy === void 0 ? void 0 : filteredHierarchy.controller))
                    : !((_e = filteredHierarchy === null || filteredHierarchy === void 0 ? void 0 : filteredHierarchy.controller) === null || _e === void 0 ? void 0 : _e.includes(identifier === null || identifier === void 0 ? void 0 : identifier.controller)));
            if (compareActivityName) {
                unMatchedIdentifiers.push(name);
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.ON_IDENTIFIER_NOT_MATCHED,
                    properties: __assign(__assign({}, ObserverData), { activity_name: "false" }),
                    className: "finder.js",
                    methodName: "findMatches",
                }, traceId);
            }
            else if (compareController) {
                unMatchedIdentifiers.push(name);
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.ON_IDENTIFIER_NOT_MATCHED,
                    properties: __assign(__assign({}, ObserverData), { controller: "false" }),
                    className: "finder.js",
                    methodName: "findMatches",
                }, traceId);
            }
            else {
                if (identifier.activityName) {
                    ObserverData.activity_name = "true";
                }
                else {
                    ObserverData.controller = "true";
                }
                delete identifier.activityName;
                delete identifier.controller;
                try {
                    for (var flattenedHierarchyArray_1 = __values(flattenedHierarchyArray), flattenedHierarchyArray_1_1 = flattenedHierarchyArray_1.next(); !flattenedHierarchyArray_1_1.done; flattenedHierarchyArray_1_1 = flattenedHierarchyArray_1.next()) {
                        var node = flattenedHierarchyArray_1_1.value;
                        var isMatch = true;
                        for (var key in identifier) {
                            if ((regex === null || regex === void 0 ? void 0 : regex[key]) !== undefined) {
                                var regexValue = parseRegexString(regex === null || regex === void 0 ? void 0 : regex[key]);
                                if (key !== "name" &&
                                    key !== "id" &&
                                    key !== "ar_id" &&
                                    !regexValue.test(node[key])) {
                                    ObserverData[getCorrectKey(key)] = "false";
                                    isMatch = false;
                                    break;
                                }
                                else if (key === "ar_id" &&
                                    !regexValue.test((_f = node.id) === null || _f === void 0 ? void 0 : _f.split("android:id/").pop())) {
                                    ObserverData.ar_id = "false";
                                    isMatch = false;
                                    break;
                                }
                                else if (key === "id" &&
                                    !regexValue.test((_g = node[key]) === null || _g === void 0 ? void 0 : _g.split("".concat(filteredHierarchy.client_package_name, ":id/")).pop())) {
                                    ObserverData.r_id = "false";
                                    isMatch = false;
                                    break;
                                }
                                else {
                                    ObserverData[getCorrectKey(key)] = "true";
                                }
                            }
                            else {
                                if (key !== "name" &&
                                    key !== "id" &&
                                    key !== "ar_id" &&
                                    node[key] !== identifier[key]) {
                                    ObserverData[getCorrectKey(key)] = "false";
                                    isMatch = false;
                                    break;
                                }
                                else if (key === "ar_id" &&
                                    ((_h = node.id) === null || _h === void 0 ? void 0 : _h.split("android:id/").pop()) !== identifier[key]) {
                                    ObserverData.ar_id = "false";
                                    isMatch = false;
                                    break;
                                }
                                else if (key === "id" &&
                                    ((_j = node[key]) === null || _j === void 0 ? void 0 : _j.split("".concat(filteredHierarchy.client_package_name, ":id/")).pop()) !== identifier[key]) {
                                    ObserverData.r_id = "false";
                                    isMatch = false;
                                    break;
                                }
                                else {
                                    ObserverData[getCorrectKey(key)] = "true";
                                }
                            }
                        }
                        if (isMatch) {
                            found = true;
                            var updatedNodeBounds = getRelativeBounds(node);
                            matchedNode.push({
                                id: name,
                                bounds: updatedNodeBounds,
                                scale: node.scale,
                                node: node,
                            });
                            break;
                        }
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (flattenedHierarchyArray_1_1 && !flattenedHierarchyArray_1_1.done && (_a = flattenedHierarchyArray_1.return)) _a.call(flattenedHierarchyArray_1);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
                if (found) {
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.FINDER,
                        event_name: OBSERVER_EVENTS.FINDER.ON_IDENTIFIER_MATCHED,
                        properties: __assign({}, ObserverData),
                        className: "finder.js",
                        methodName: "findMatches",
                    }, traceId);
                    matchedIdentifiers.push(name);
                }
                else {
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.FINDER,
                        event_name: OBSERVER_EVENTS.FINDER.ON_IDENTIFIER_NOT_MATCHED,
                        properties: __assign({}, ObserverData),
                        className: "finder.js",
                        methodName: "findMatches",
                    }, traceId);
                    unMatchedIdentifiers.push(name);
                }
                return;
            }
        }
        else {
            var target = identifier.target;
            delete identifier.target;
            var compareActivityName = (identifier === null || identifier === void 0 ? void 0 : identifier.activityName) &&
                (regex.activityName
                    ? !((_k = parseRegexString(regex === null || regex === void 0 ? void 0 : regex.activityName)) === null || _k === void 0 ? void 0 : _k.test((_l = flattenedHierarchy.ROOT_NODE) === null || _l === void 0 ? void 0 : _l.activity_name))
                    : !((_o = (_m = flattenedHierarchy.ROOT_NODE) === null || _m === void 0 ? void 0 : _m.activity_name) === null || _o === void 0 ? void 0 : _o.includes(identifier === null || identifier === void 0 ? void 0 : identifier.activityName)));
            var compareController = (identifier === null || identifier === void 0 ? void 0 : identifier.controller) &&
                (regex.controller
                    ? !((_p = parseRegexString(regex === null || regex === void 0 ? void 0 : regex.controller)) === null || _p === void 0 ? void 0 : _p.test((_q = flattenedHierarchy.ROOT_NODE) === null || _q === void 0 ? void 0 : _q.controller))
                    : !((_s = (_r = flattenedHierarchy.ROOT_NODE) === null || _r === void 0 ? void 0 : _r.controller) === null || _s === void 0 ? void 0 : _s.includes(identifier === null || identifier === void 0 ? void 0 : identifier.controller)));
            if (compareActivityName) {
                unMatchedIdentifiers.push(name);
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.ON_IDENTIFIER_NOT_MATCHED,
                    properties: __assign(__assign({}, ObserverData), { activity_name: "false" }),
                    className: "finder.js",
                    methodName: "findMatches",
                }, traceId);
            }
            else if (compareController) {
                unMatchedIdentifiers.push(name);
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.ON_IDENTIFIER_NOT_MATCHED,
                    properties: __assign(__assign({}, ObserverData), { controller: "false" }),
                    className: "finder.js",
                    methodName: "findMatches",
                }, traceId);
            }
            else {
                if (identifier.activityName) {
                    ObserverData.activity_name = "true";
                }
                else {
                    ObserverData.controller = "true";
                }
                delete identifier.activityName;
                delete identifier.controller;
                var referenceNode = findMatchingNode(flattenedHierarchy, identifier, regex);
                if (!referenceNode)
                    return unMatchedIdentifiers.push(name);
                var actualNode = followRelationship(flattenedHierarchy, referenceNode, target.relationship);
                if (!actualNode)
                    return unMatchedIdentifiers.push(name);
                var targetRegex = target === null || target === void 0 ? void 0 : target.regex;
                target === null || target === void 0 ? true : delete target.relationship;
                target === null || target === void 0 ? true : delete target.regex;
                var isMatch = true;
                if (Object.keys(target).length > 1) {
                    for (var key in target) {
                        if ((targetRegex === null || targetRegex === void 0 ? void 0 : targetRegex[key]) !== undefined) {
                            var regexValue = parseRegexString(targetRegex === null || targetRegex === void 0 ? void 0 : targetRegex[key]);
                            if (key !== "id" &&
                                key !== "ar_id" &&
                                !regexValue.test(actualNode === null || actualNode === void 0 ? void 0 : actualNode[key])) {
                                ObserverData[getCorrectKey(key)] = "false";
                                isMatch = false;
                                break;
                            }
                            else if (key === "ar_id" &&
                                !regexValue.test((_t = actualNode.id) === null || _t === void 0 ? void 0 : _t.split("android:id/").pop())) {
                                ObserverData.ar_id = "false";
                                isMatch = false;
                                break;
                            }
                            else if (key === "id" &&
                                !regexValue.test((_u = actualNode[key]) === null || _u === void 0 ? void 0 : _u.split("".concat(filteredHierarchy.client_package_name, ":id/")).pop())) {
                                ObserverData.r_id = "false";
                                isMatch = false;
                                break;
                            }
                            else {
                                ObserverData[getCorrectKey(key)] = "true";
                            }
                        }
                        else {
                            if (key !== "id" &&
                                key !== "ar_id" &&
                                (actualNode === null || actualNode === void 0 ? void 0 : actualNode[key]) !== (target === null || target === void 0 ? void 0 : target[key])) {
                                ObserverData[getCorrectKey(key)] = "false";
                                isMatch = false;
                                break;
                            }
                            else if (key === "ar_id" &&
                                ((_v = actualNode["id"]) === null || _v === void 0 ? void 0 : _v.split("android:id/").pop()) !== (target === null || target === void 0 ? void 0 : target[key])) {
                                ObserverData.ar_id = "false";
                                isMatch = false;
                                break;
                            }
                            else if (key === "id" &&
                                ((_w = actualNode[key]) === null || _w === void 0 ? void 0 : _w.split("".concat(filteredHierarchy.client_package_name, ":id/")).pop()) !== (target === null || target === void 0 ? void 0 : target[key])) {
                                ObserverData.r_id = "false";
                                isMatch = false;
                                break;
                            }
                            else {
                                ObserverData[getCorrectKey(key)] = "true";
                            }
                        }
                    }
                }
                var updatedNodeBounds = getRelativeBounds(actualNode);
                if (isMatch) {
                    matchedNode.push({
                        id: name,
                        bounds: updatedNodeBounds,
                        scale: actualNode === null || actualNode === void 0 ? void 0 : actualNode.scale,
                        node: actualNode,
                    });
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.FINDER,
                        event_name: OBSERVER_EVENTS.FINDER.ON_IDENTIFIER_MATCHED,
                        properties: __assign({}, ObserverData),
                        className: "finder.js",
                        methodName: "findMatches",
                    }, traceId);
                    matchedIdentifiers.push(name);
                }
                else {
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.FINDER,
                        event_name: OBSERVER_EVENTS.FINDER.ON_IDENTIFIER_NOT_MATCHED,
                        properties: __assign({}, ObserverData),
                        className: "finder.js",
                        methodName: "findMatches",
                    }, traceId);
                    unMatchedIdentifiers.push(name);
                }
            }
        }
    });
    return {
        matchedIdentifiers: matchedIdentifiers,
        unMatchedIdentifiers: unMatchedIdentifiers,
        matchedNode: matchedNode,
    };
}
function getFlattenedHierarchy(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var currentNode = _a.currentNode, parentId = _a.parentId, _l = _a.root, root = _l === void 0 ? true : _l, _m = _a.hierarchy, hierarchy = _m === void 0 ? {} : _m;
    if (parentId === undefined)
        parentId = "NULL_PARENT_UUID";
    var list = [];
    if (currentNode === undefined)
        return list;
    currentNode.parentId = parentId || "";
    if (currentNode.normalised_bounds !== undefined && currentNode.bounds) {
        currentNode.bounds = currentNode.normalised_bounds;
    }
    hierarchy[currentNode.uuid || "ROOT_NODE"] = currentNode;
    list.push(currentNode);
    if (root &&
        ((_c = (_b = currentNode.layout) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c.length) &&
        ((_e = (_d = currentNode.layout) === null || _d === void 0 ? void 0 : _d.children) === null || _e === void 0 ? void 0 : _e.length) > 0) {
        var layout = currentNode.layout;
        var childrenLength = ((_f = layout === null || layout === void 0 ? void 0 : layout.children) === null || _f === void 0 ? void 0 : _f.length) || 0;
        for (var i = 0; i < childrenLength; i++) {
            var res = getFlattenedHierarchy({
                currentNode: (_g = layout === null || layout === void 0 ? void 0 : layout.children) === null || _g === void 0 ? void 0 : _g[i],
                parentId: layout.uuid,
                root: false,
                hierarchy: hierarchy,
            });
            list.push.apply(list, __spreadArray([], __read(res), false));
        }
        currentNode.layout.children = layout.children.map(function (child) { return child.uuid; });
    }
    else if (((_h = currentNode.children) === null || _h === void 0 ? void 0 : _h.length) && ((_j = currentNode.children) === null || _j === void 0 ? void 0 : _j.length) > 0) {
        (_k = currentNode === null || currentNode === void 0 ? void 0 : currentNode.children) === null || _k === void 0 ? void 0 : _k.forEach(function (n) {
            var res = getFlattenedHierarchy({
                currentNode: __assign(__assign({}, n), { boundingArea: getBoundingArea(n === null || n === void 0 ? void 0 : n.bounds) || 0 }),
                parentId: currentNode.uuid,
                root: false,
                hierarchy: hierarchy,
            });
            list.push.apply(list, __spreadArray([], __read(res), false));
        });
        currentNode.children = currentNode.children.map(function (child) { return child.uuid; });
    }
    return list;
}
function getRelativeBounds(node) {
    var _a;
    if (!node)
        return;
    var nodeBounds = __assign({}, node === null || node === void 0 ? void 0 : node.bounds);
    var layoutBounds = (_a = filteredHierarchy === null || filteredHierarchy === void 0 ? void 0 : filteredHierarchy.layout) === null || _a === void 0 ? void 0 : _a.bounds;
    nodeBounds.left = (nodeBounds === null || nodeBounds === void 0 ? void 0 : nodeBounds.left) - (layoutBounds === null || layoutBounds === void 0 ? void 0 : layoutBounds.left);
    nodeBounds.top = (nodeBounds === null || nodeBounds === void 0 ? void 0 : nodeBounds.top) - (layoutBounds === null || layoutBounds === void 0 ? void 0 : layoutBounds.top);
    nodeBounds.right = (nodeBounds === null || nodeBounds === void 0 ? void 0 : nodeBounds.right) - (layoutBounds === null || layoutBounds === void 0 ? void 0 : layoutBounds.left);
    nodeBounds.bottom = (nodeBounds === null || nodeBounds === void 0 ? void 0 : nodeBounds.bottom) - (layoutBounds === null || layoutBounds === void 0 ? void 0 : layoutBounds.top);
    return nodeBounds;
}
function init(traceId) {
    var _a;
    clearInterval(timer);
    waitingForResponse = false;
    hierarchyCommandLastSentAt = 0;
    hierarchyCommandLastResponseAt = 0;
    if (embedProject.concat(sortedProjectArray).length !== 0) {
        timer = setInterval(function () {
            try {
                if (noActiveProjects()) {
                    clearInterval(timer);
                    return;
                }
                var now = Date.now();
                var shouldSend = !waitingForResponse ||
                    (now - hierarchyCommandLastSentAt >= hierarchyCommandFallbackTimeout);
                if (shouldSend) {
                    sendMessageToNative({
                        command: SENDING_COMMANDS.HIERARCHY,
                        data: {
                            filterElementsOutsideViewPort: (features === null || features === void 0 ? void 0 : features.filterElementsOutsideViewPort) || false,
                        },
                    }, traceId);
                    waitingForResponse = true;
                    hierarchyCommandLastSentAt = now;
                }
            }
            catch (error) {
                console.warn("init(): unable to successfully complete hierarchy loop", error);
            }
        }, ((_a = features === null || features === void 0 ? void 0 : features.hierarchyLoopInterval) === null || _a === void 0 ? void 0 : _a.intervalTime) || intervalTime);
    }
}
function getIdFromProperty(key, property) {
    if (key && property && (key === null || key === void 0 ? void 0 : key.length) > (property === null || property === void 0 ? void 0 : property.length)) {
        var id = key.substr(property === null || property === void 0 ? void 0 : property.length, key === null || key === void 0 ? void 0 : key.length).replace("_", "");
        return id;
    }
}
function convertOldWfxData(configData, oldSortedProjectArray, oldProjectStatus, oldCompletedProjectsInFlow, oldProfileData) {
    var _a, _b, _c, _d, _e;
    var convertedData = {
        projectArray: oldSortedProjectArray,
        selectedLanguage: selectedLanguage,
        allProjectStatus: oldProjectStatus,
        completedFlowProjects: oldCompletedProjectsInFlow,
    };
    var idToUniqueIdMap = {};
    var deploymentIdToIdMap = {};
    var idToProjectIdMap = {};
    var flowsInMenu = {};
    oldSortedProjectArray.map(function (project) {
        var _a, _b, _c, _d, _e;
        var objKey = project.id;
        idToProjectIdMap[(_a = project === null || project === void 0 ? void 0 : project.assist) === null || _a === void 0 ? void 0 : _a.id] =
            (_b = project === null || project === void 0 ? void 0 : project.projectParameters) === null || _b === void 0 ? void 0 : _b.projectId;
        deploymentIdToIdMap[(_c = project === null || project === void 0 ? void 0 : project.projectParameters) === null || _c === void 0 ? void 0 : _c.deploymentId] =
            (_d = project === null || project === void 0 ? void 0 : project.assist) === null || _d === void 0 ? void 0 : _d.id;
        idToUniqueIdMap[project.assist.id] = objKey;
        if (((_e = project === null || project === void 0 ? void 0 : project.connectedProjects) === null || _e === void 0 ? void 0 : _e.length) > 0) {
            flowsInMenu[objKey] = [];
            project.connectedProjects.forEach(function (connectedProject) {
                deploymentId = connectedProject.projectId;
                configData === null || configData === void 0 ? void 0 : configData.every(function (projectData) {
                    var _a, _b, _c, _d, _e, _f;
                    if (projectData.projectParameters.deploymentType === "LINK" &&
                        projectData.projectParameters.deploymentId === deploymentId) {
                        flowsInMenu[objKey].push(((_a = projectData.discoveryList) === null || _a === void 0 ? void 0 : _a[0].id) || ((_b = projectData.assists) === null || _b === void 0 ? void 0 : _b[0].id));
                        deploymentIdToIdMap[deploymentId] =
                            ((_c = projectData.discoveryList) === null || _c === void 0 ? void 0 : _c[0].id) || ((_d = projectData.assists) === null || _d === void 0 ? void 0 : _d[0].id);
                        idToProjectIdMap[((_e = projectData.discoveryList) === null || _e === void 0 ? void 0 : _e[0].id) || ((_f = projectData.assists) === null || _f === void 0 ? void 0 : _f[0].id)] = projectData.projectParameters.projectId;
                        return false;
                    }
                    return true;
                });
            });
        }
    });
    if (platform === "ANDROID") {
        var OldProperties_1 = {
            DISCOVERY_PER_APP_FREQUENCY: "discovery_per_app_frequency",
            N_DISMISSED_BY_USER: "n_dismissed_by_user",
            N_SESSION_FREQUENCY: "n_session_frequency",
            N_DISMISS_BY_USER_ASSIST_FREQUENCY: "n_dismiss_by_user_assist_frequency",
            N_SESSION_ASSIST_FREQUENCY: "n_session_assist_frequency",
            PROJECT_COMPLETED: "project_completed",
            PERMANENTLY_DISABLED_PROJECT_LIST: "perm_disabled_project_list",
            PROJECT_MUTED: "project_muted",
        };
        var oldProfileKeys = (oldProfileData && Object.keys(oldProfileData)) || [];
        oldProfileKeys === null || oldProfileKeys === void 0 ? void 0 : oldProfileKeys.forEach(function (key) {
            if (key.includes(OldProperties_1.DISCOVERY_PER_APP_FREQUENCY)) {
                var discovery_id = getIdFromProperty(key, OldProperties_1.DISCOVERY_PER_APP_FREQUENCY);
                var uniqueId = idToUniqueIdMap[discovery_id];
                var projectStatus = convertedData === null || convertedData === void 0 ? void 0 : convertedData.allProjectStatus[uniqueId];
                if (projectStatus) {
                    projectStatus.terminationStatus.perApp = oldProfileData[key];
                }
            }
            if (key.includes(OldProperties_1.N_DISMISSED_BY_USER)) {
                var discovery_id = getIdFromProperty(key, OldProperties_1.N_DISMISSED_BY_USER);
                var uniqueId = idToUniqueIdMap[discovery_id];
                var projectStatus = convertedData === null || convertedData === void 0 ? void 0 : convertedData.allProjectStatus[uniqueId];
                if (projectStatus) {
                    projectStatus.terminationStatus.nDismissedByUser = 1;
                }
            }
            if (key.includes(OldProperties_1.N_DISMISS_BY_USER_ASSIST_FREQUENCY)) {
                var assist_id = getIdFromProperty(key, OldProperties_1.N_DISMISS_BY_USER_ASSIST_FREQUENCY);
                var uniqueId = idToUniqueIdMap[assist_id];
                var projectStatus = convertedData === null || convertedData === void 0 ? void 0 : convertedData.allProjectStatus[uniqueId];
                if (projectStatus) {
                    projectStatus.terminationStatus.nDismissedByUser = 1;
                }
            }
            if (key.includes(OldProperties_1.N_SESSION_FREQUENCY)) {
                var discovery_id = getIdFromProperty(key, OldProperties_1.N_SESSION_FREQUENCY);
                var uniqueId = idToUniqueIdMap[discovery_id];
                var projectStatus = convertedData === null || convertedData === void 0 ? void 0 : convertedData.allProjectStatus[uniqueId];
                if (projectStatus) {
                    projectStatus.terminationStatus.nSession = oldProfileData[key];
                }
            }
            if (key.includes(OldProperties_1.N_SESSION_ASSIST_FREQUENCY)) {
                var assist_id = getIdFromProperty(key, OldProperties_1.N_SESSION_ASSIST_FREQUENCY);
                var uniqueId = idToUniqueIdMap[assist_id];
                var projectStatus = convertedData === null || convertedData === void 0 ? void 0 : convertedData.allProjectStatus[uniqueId];
                if (projectStatus) {
                    projectStatus.terminationStatus.nSession = oldProfileData[key];
                }
            }
        });
        var oldProfileDataCompletedProjects_1 = ((oldProfileKeys === null || oldProfileKeys === void 0 ? void 0 : oldProfileKeys.length) &&
            oldProfileData[OldProperties_1.PROJECT_COMPLETED] &&
            Object.keys(JSON.parse(oldProfileData[OldProperties_1.PROJECT_COMPLETED]))) ||
            [];
        (_a = Object.entries(flowsInMenu)) === null || _a === void 0 ? void 0 : _a.forEach(function (entry) {
            var _a, _b;
            var flowMenuId = entry[0];
            var connectFlows = entry[1];
            if ((connectFlows === null || connectFlows === void 0 ? void 0 : connectFlows.length) > 0) {
                convertedData.allProjectStatus[flowMenuId].terminationStatus.untilAllFlowsAreCompleted = connectFlows === null || connectFlows === void 0 ? void 0 : connectFlows.every(function (connectedFlow) {
                    projectId = idToProjectIdMap[connectedFlow];
                    return oldProfileDataCompletedProjects_1 === null || oldProfileDataCompletedProjects_1 === void 0 ? void 0 : oldProfileDataCompletedProjects_1.includes(projectId);
                });
            }
            (_b = (_a = convertedData === null || convertedData === void 0 ? void 0 : convertedData.completedFlowProjects[flowMenuId]) === null || _a === void 0 ? void 0 : _a.projects) === null || _b === void 0 ? void 0 : _b.forEach(function (project) {
                if (oldProfileDataCompletedProjects_1 === null || oldProfileDataCompletedProjects_1 === void 0 ? void 0 : oldProfileDataCompletedProjects_1.includes(project.id)) {
                    project.completed = true;
                }
            });
        });
        (oldProfileKeys === null || oldProfileKeys === void 0 ? void 0 : oldProfileKeys.length) &&
            ((_b = oldProfileData[OldProperties_1.PERMANENTLY_DISABLED_PROJECT_LIST]) === null || _b === void 0 ? void 0 : _b.forEach(function (deploymentId) {
                var id = deploymentIdToIdMap[deploymentId];
                var uniqueId = idToUniqueIdMap[id];
                if (uniqueId) {
                    convertedData.allProjectStatus[uniqueId].isTerminated = true;
                }
            }));
        var oldProfileDataMutedProjects = ((oldProfileKeys === null || oldProfileKeys === void 0 ? void 0 : oldProfileKeys.length) &&
            oldProfileData[OldProperties_1.PROJECT_MUTED] &&
            JSON.parse(oldProfileData[OldProperties_1.PROJECT_MUTED])) ||
            {};
        (_c = Object.entries(oldProfileDataMutedProjects)) === null || _c === void 0 ? void 0 : _c.forEach(function (_a) {
            var _b = __read(_a, 2), flowId = _b[0], value = _b[1];
        });
        convertedData.selectedLanguage = oldProfileData === null || oldProfileData === void 0 ? void 0 : oldProfileData.language_selected;
    }
    else {
        convertedData.selectedLanguage = oldProfileData.leap_language_code;
        Object.entries(oldProfileData.leap_discovery_flow_completed).forEach(function (entry) {
            convertedData.allProjectStatus[idToUniqueIdMap[entry[0]]].terminationStatus.perApp = entry[1];
        });
        __spreadArray(__spreadArray([], __read(oldProfileData.leap_assists_dismissed), false), __read(oldProfileData.leap_discovery_dismissed), false).forEach(function (id) {
            convertedData.allProjectStatus[idToUniqueIdMap[id]].terminationStatus.nDismissedByUser = 1;
        });
        Object.entries(oldProfileData.leap_completed_flows).forEach(function (entry) {
            var flowMenuId = idToUniqueIdMap[entry[0]];
            if (flowsInMenu[flowMenuId]) {
                convertedData.allProjectStatus[flowMenuId].terminationStatus.untilAllFlowsAreCompleted = flowsInMenu[flowMenuId].every(function (connectedFlowId) {
                    if (!entry[1].includes(connectedFlowId)) {
                        return false;
                    }
                    return true;
                });
                convertedData.completedFlowProjects[flowMenuId].projects.forEach(function (project) {
                    if (entry[1].includes(deploymentIdToIdMap[project.id])) {
                        project.completed = true;
                    }
                });
            }
        });
        (_d = oldProfileData.leap_muted_discoveries) === null || _d === void 0 ? void 0 : _d.forEach(function (id) {
        });
        (_e = oldProfileData.leap_terminated_discoveries) === null || _e === void 0 ? void 0 : _e.forEach(function (id) {
            var uniqueId = idToUniqueIdMap[id];
            if (uniqueId) {
                convertedData.allProjectStatus[uniqueId].isTerminated = true;
            }
        });
        Object.entries(__assign(__assign({}, oldProfileData.leap_discovery_presented), oldProfileData.leap_assists_presented)).forEach(function (entry) {
            convertedData.allProjectStatus[idToUniqueIdMap[entry[0]]].terminationStatus.nSession = entry[1];
        });
    }
    Object.keys(convertedData.allProjectStatus).forEach(function (uniqueId) {
        if (uniqueId.includes("discovery")) {
            switch (convertedData.allProjectStatus[uniqueId].triggerCase) {
                case "EVERY_SESSION": {
                    convertedData.allProjectStatus[uniqueId].isFlowTriggered = false;
                    break;
                }
                case "MANUAL_TRIGGER": {
                    convertedData.allProjectStatus[uniqueId].isFlowTriggered = true;
                    break;
                }
                case "PLAY_ONCE": {
                    if (convertedData.allProjectStatus[uniqueId].terminationStatus
                        .nSession > 0)
                        convertedData.allProjectStatus[uniqueId].isFlowTriggered = true;
                    break;
                }
                case "EVERY_SESSION_UNTIL_DISMISSED": {
                    if (convertedData.allProjectStatus[uniqueId].terminationStatus
                        .nDismissedByUser === 1)
                        convertedData.allProjectStatus[uniqueId].isFlowTriggered = true;
                    break;
                }
                case "EVERY_SESSION_UNTIL_FLOW_COMPLETE": {
                    if (convertedData.allProjectStatus[uniqueId].terminationStatus.perApp >
                        0)
                        convertedData.allProjectStatus[uniqueId].isFlowTriggered = true;
                    break;
                }
                case "EVERY_SESSION_UNTIL_ALL_FLOWS_ARE_COMPLETED": {
                    if (convertedData.allProjectStatus[uniqueId].terminationStatus
                        .untilAllFlowsAreCompleted)
                        convertedData.allProjectStatus[uniqueId].isFlowTriggered = true;
                    break;
                }
                default: {
                }
            }
        }
        else {
            convertedData.allProjectStatus[uniqueId].isFlowTriggered = false;
        }
    });
    return convertedData;
}
function saveConfigAndDownloadBulkAssets(res, traceId) {
    var assetList = [];
    var soundList = {};
    embedProject
        .concat(sortedProjectArray === null || sortedProjectArray === void 0 ? void 0 : sortedProjectArray.concat(Object.values(flowWalkthroughs)))
        .forEach(function (p) {
        var _a;
        if (p === undefined)
            return;
        p.auiContent.content.forEach(function (c) {
            if (!c)
                return;
            c.startsWith("http")
                ? assetList.push("".concat(c))
                : assetList.push("".concat(p.auiContent.baseUrl).concat(c));
        });
        var sounds = Object.keys((_a = p.localeSounds) === null || _a === void 0 ? void 0 : _a.sounds);
        if (sounds.length > 0) {
            sounds.forEach(function (sound) {
                var _a;
                if (soundList[sound] === undefined)
                    soundList[sound] = [];
                var updatedSounds = (_a = p.localeSounds) === null || _a === void 0 ? void 0 : _a.sounds[sound].map(function (s) {
                    var _a, _b;
                    s.url = ((_a = s.url) === null || _a === void 0 ? void 0 : _a.startsWith("http"))
                        ? "".concat(s === null || s === void 0 ? void 0 : s.url)
                        : "".concat((_b = p === null || p === void 0 ? void 0 : p.localeSounds) === null || _b === void 0 ? void 0 : _b.baseUrl).concat(s === null || s === void 0 ? void 0 : s.url);
                    return s;
                });
                soundList[sound] = __spreadArray(__spreadArray([], __read(soundList[sound]), false), __read(updatedSounds), false);
            });
        }
    });
    sendMessageToNative({
        command: SENDING_COMMANDS.ON_CONFIG_FETCH,
        data: {
            config: res,
            features: features,
            loggerConfig: loggerConfig,
            assetsToDownload: {
                files: assetList,
                sounds: soundList,
            },
        },
    }, traceId);
}
function sendWebJSscript(_a, traceId) {
    var webIdentifiers = _a.webIdentifiers, webViewNode = _a.webViewNode;
    var webViewBounds = webViewNode["bounds"];
    var webViewScale = webViewNode["scale"];
    var message = {
        command: SENDING_COMMANDS.WEB_SCRIPT,
        data: {
            script: createFinderJavascript(webIdentifiers, webViewBounds, webViewScale, webViewNode.uuid),
            webviewInfo: {
                uuid: webViewNode.uuid,
            },
        },
    };
    sendMessageToNative(message, traceId);
}
function sendProjectCompletion(_a, traceId) {
    var id = _a.id, reset = _a.reset;
    var flow = completedProjectsInFlow === null || completedProjectsInFlow === void 0 ? void 0 : completedProjectsInFlow[currentlyRunningFlow.id || id];
    if (flow === undefined)
        return;
    var message = {
        command: SENDING_COMMANDS.PROJECT_COMPLETED,
        data: {
            language: selectedLanguage,
            projects: reset ? [] : flow.projects,
        },
    };
    sendMessageToNative(message, traceId);
}
function saveTheLatestStateChange(traceId) {
    if (inPreviewMode)
        return;
    var currentUserState = buildCurrentUserStateObject();
    sdkStateService.updateCurrentUserState(currentUserState);
    sdkStateService.segmentConfigMap = segmentConfigMap;
    sdkStateService.appLocale = appLocale;
    sendJSObserverLog({
        message: "saving user state",
        methodName: "saveTheLatestStateChange",
        level: ObserverLogLevel.DEBUG,
        userState: buildUserStateObjectForObserverLog(currentUserState),
        traceId: traceId
    });
    sdkStateService.persistState(traceId);
}
function buildCurrentUserStateObject() {
    return {
        projectArray: sortedProjectArray,
        projectsStatus: allProjectStatus,
        connectedWalkthroughs: flowWalkthroughs,
        language: selectedLanguage,
        currentPlatform: platform,
        lastUpdatedConfigAt: lastUpdatedConfigAt,
        lastProfileUpdatedAt: lastProfileUpdatedAt,
        lastUpdatedEmbedConfigAt: lastUpdatedEmbedConfigAt,
        savedEmbedProject: embedProject,
        userId: sdkStateService.currentUserId,
        projectsCompletionStats: completedProjectsInFlow,
        apiKey: appApiKey,
        baseURL: configBaseUrl,
        appVersion: appVersionName,
        features: features,
        metaConfigs: metaConfigs,
        loggerConfig: loggerConfig,
        customProps: customProperties,
    };
}
function resetGlobalUserState() {
    segmentConfigMap = {};
    sortedProjectArray = [];
    allProjectStatus = {};
    flowWalkthroughs = {};
    lastUpdatedConfigAt = null;
    lastProfileUpdatedAt = null;
    lastUpdatedEmbedConfigAt = null;
    embedProject = [];
    completedProjectsInFlow = {};
    features = {};
    metaConfigs = {};
    customProperties = {};
    resetUserLoggedIn();
}
function saveTheLatestProps(traceId) {
    var message = {
        command: SENDING_COMMANDS.SAVE_USER_PROPS,
        data: {
            userProps: customProperties,
        },
    };
    !inPreviewMode && sendMessageToNative(message, traceId);
}
function sendAnalyticEvent(eventName, properties, traceId) {
    var _a, _b, _c;
    if (eventName === void 0) { eventName = ANALYTICS_EVENTS.ELEMENT_SEEN; }
    if (properties === void 0) { properties = {}; }
    if (isSelfHosted)
        return;
    var selectedProject;
    if (currentlyRunningFlow.id && currentStaticFlow.stepsStatus.length > 0) {
        selectedProject = Object.values(flowWalkthroughs).find(function (s) { return (currentStaticFlow === null || currentStaticFlow === void 0 ? void 0 : currentStaticFlow.id) === (s === null || s === void 0 ? void 0 : s.id); });
    }
    else {
        selectedProject = embedProject
            .concat(sortedProjectArray)
            .find(function (s) { return (activeProject === null || activeProject === void 0 ? void 0 : activeProject.id) === (s === null || s === void 0 ? void 0 : s.id); });
    }
    var message = {
        command: SENDING_COMMANDS.ANALYTICS_EVENT,
        data: {
            event: __assign({ id: generateUUID(), sessionId: appSessionId, timestamp: new Date().toISOString(), eventName: eventName, projectName: selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.projectParameters.projectName, projectId: selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.projectParameters.projectId, deploymentId: selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.projectParameters.deploymentId, deploymentVersion: selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.projectParameters.deploymentVersion, language: selectedLanguage, deploymentName: selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.projectParameters.deploymentName, elementName: (activeStep === null || activeStep === void 0 ? void 0 : activeStep.id)
                    ? (_b = (_a = activeStep === null || activeStep === void 0 ? void 0 : activeStep.step) === null || _a === void 0 ? void 0 : _a.assist) === null || _b === void 0 ? void 0 : _b.name
                    : (_c = selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.assist) === null || _c === void 0 ? void 0 : _c.name }, properties),
            clientCallback: {},
            leapUserId: getCurrentUserId(),
        },
    };
    sendMessageToNative(message, traceId);
}
function removeTimestamps(message) {
    var _a = message.data, _ = _a["string.created_at"], __ = _a["long.timestamp"], dataWithoutTimestamp = __rest(_a, ["string.created_at", "long.timestamp"]);
    return {
        command: message.command,
        data: dataWithoutTimestamp,
    };
}
function flushFinderObserverEvents(traceId) {
    var sameAsCached = true;
    sameAsCached = Object.keys(finderObserverEvents).every(function (eventName) {
        if (finderObserverEvents[eventName].length !==
            cachedFinderObserverEvents[eventName].length) {
            return false;
        }
        messageListsMatch = finderObserverEvents[eventName].every(function (message, index) {
            if (JSON.stringify(removeTimestamps(message)) ===
                JSON.stringify(removeTimestamps(cachedFinderObserverEvents[eventName][index])))
                return true;
            return false;
        });
        return messageListsMatch;
    });
    if (!sameAsCached) {
        Object.entries(finderObserverEvents).forEach(function (_a) {
            var _b = __read(_a, 2), eventName = _b[0], messageList = _b[1];
            cachedFinderObserverEvents[eventName] = finderObserverEvents[eventName];
            messageList.forEach(function (message) {
                sendMessageToNative(message, traceId);
            });
        });
    }
}
function sendJSObserverLog(_a) {
    var message = _a.message, _b = _a.logData, logData = _b === void 0 ? {} : _b, _c = _a.className, className = _c === void 0 ? "Global" : _c, methodName = _a.methodName, _d = _a.level, level = _d === void 0 ? ObserverLogLevel.INFO : _d, userState = _a.userState, traceId = _a.traceId;
    if (disableObserverLogging)
        return;
    try {
        observerLogService.sendObserverLog(message, logData, new Date(), className, methodName, level, userState, traceId);
    }
    catch (error) {
    }
}
function sendJSErrorObserverLog(_a) {
    var message = _a.message, _b = _a.logData, logData = _b === void 0 ? {} : _b, _c = _a.level, level = _c === void 0 ? ObserverLogLevel.ERROR : _c, error = _a.error, className = _a.className, methodName = _a.methodName, traceId = _a.traceId;
    if (disableObserverLogging)
        return;
    sendJSObserverLog({
        message: "[ERROR] ".concat(message),
        logData: __assign(__assign({}, logData), { error: getErrorLogObjectFromError(error) }),
        className: className,
        methodName: methodName,
        level: level,
        traceId: traceId
    });
}
function buildUserStateObjectForObserverLog(userState) {
    var userStateLog = {};
    try {
        var projectArrayLog_1 = [];
        if (userState.projectArray) {
            userState.projectArray.forEach(function (project) {
                var _a, _b;
                projectArrayLog_1.push({
                    id: project === null || project === void 0 ? void 0 : project.id,
                    projectId: (_a = project === null || project === void 0 ? void 0 : project.projectParameters) === null || _a === void 0 ? void 0 : _a.projectId,
                    deploymentVersion: (_b = project === null || project === void 0 ? void 0 : project.projectParameters) === null || _b === void 0 ? void 0 : _b.deploymentVersion
                });
            });
        }
        userStateLog = {
            projectArrayLog: projectArrayLog_1,
            projectsStatus: userState.projectsStatus,
            language: userState.language,
            lastUpdatedConfigAt: userState.lastUpdatedConfigAt,
            lastProfileUpdatedAt: userState.lastProfileUpdatedAt,
            lastUpdatedEmbedConfigAt: userState.lastUpdatedEmbedConfigAt,
            userId: userState.userId,
            wfId: userState.wfId,
            projectsCompletionStats: userState.projectsCompletionStats,
            customProps: userState.customProps,
        };
    }
    catch (error) {
        console.error("Unable to generate JS Observer userStateLog", error);
    }
    return userStateLog || userState;
}
function buildUserStateObjectForJSLog() {
    var userState = buildCurrentUserStateObject();
    return buildUserStateObjectForObserverLog(userState);
}
function sendObserverLogs(_a, traceId) {
    var _b = _a.event_name, event_name = _b === void 0 ? OBSERVER_EVENTS.NETWORK.ON_CONFIG_DOWNLOAD_STARTED : _b, _c = _a.category, category = _c === void 0 ? OBSERVER_EVENT_CATEGORIES.NETWORK : _c, _d = _a.properties, properties = _d === void 0 ? {} : _d, className = _a.className, methodName = _a.methodName, _e = _a.level, level = _e === void 0 ? ObserverLogLevel.INFO : _e;
    if (disableObserverLogging)
        return;
    if (isSelfHosted)
        return;
    var logData = appendTypesToKeys(__assign(__assign({ category: category, event_name: event_name, sdk_name: "leap_sdk" }, properties), { class_name: className, created_at: getCurrentTimeInGMT(), timestamp: Date.now(), trace_id: traceId }));
    try {
        var userState = buildUserStateObjectForJSLog();
        var message = {
            command: SENDING_COMMANDS.OBSERVER_LOG,
            data: logData,
        };
        var eventName = message.data["string.event_name"];
        if (eventName in finderObserverEvents) {
            finderObserverEvents[message.data["string.event_name"]].push(message);
            return;
        }
        console.log("sendObserverLog() message command ", message === null || message === void 0 ? void 0 : message.command);
        sendJSObserverLog({
            message: "command to native [".concat(message.command, "]"),
            logData: message === null || message === void 0 ? void 0 : message.data,
            className: className,
            methodName: methodName,
            level: level,
            userState: userState,
        }, traceId);
    }
    catch (error) {
        console.error("Unable to push JS Observer log", error);
    }
}
function shouldBlockRequestToNative(message) {
    return message && message.command && message.command === SENDING_COMMANDS.OBSERVER_LOG;
}
function sendMessageToNative(message, traceId) {
    if (!message) {
        return;
    }
    logCommandToNativeLayer(message, traceId);
    if (shouldBlockRequestToNative(message))
        return;
    postMessageToAndroid(JSON.stringify(message));
    postMessageToIos(JSON.stringify(message));
    function logCommandToNativeLayer(message, traceId) {
        var _a;
        try {
            if (shouldLogCommandName(message)) {
                console.log("sendMessageToNative() message command ", message === null || message === void 0 ? void 0 : message.command);
                var messageData = shouldLogData(message) ? (_a = message.data) !== null && _a !== void 0 ? _a : {} : { included: false };
                sendJSObserverLog({
                    message: "command to native [".concat(message.command, "]"),
                    logData: { messageData: messageData },
                    level: ObserverLogLevel.INFO,
                    methodName: "sendMessageToNative",
                    traceId: traceId
                });
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    function shouldLogCommandName(message) {
        return (message === null || message === void 0 ? void 0 : message.command) && ![
            SENDING_COMMANDS.HIERARCHY,
            SENDING_COMMANDS.ANALYTICS_EVENT,
            SENDING_COMMANDS.OBSERVER_LOG,
            SENDING_COMMANDS.NO_CONTEXT_FOUND,
            SENDING_COMMANDS.WEB_SCRIPT,
            SENDING_COMMANDS.OBSERVER_EVENT_LEVELS,
            SENDING_COMMANDS.CLEAR_ANALYTICS_PENDING_QUEUE,
            SENDING_COMMANDS.FLUSH_CACHED_EVENTS
        ].includes(message.command);
    }
    function shouldLogData(message) {
        return (message === null || message === void 0 ? void 0 : message.command) && ![
            SENDING_COMMANDS.ON_CONFIG_FETCH,
            SENDING_COMMANDS.WEB_SCRIPT,
            SENDING_COMMANDS.SAVE_USER_STATE,
            SENDING_COMMANDS.ANALYTICS_EVENT,
            SENDING_COMMANDS.OBSERVER_LOG,
            SENDING_COMMANDS.NO_CONTEXT_FOUND,
            SENDING_COMMANDS.HIERARCHY,
            SENDING_COMMANDS.OBSERVER_EVENT_LEVELS,
            SENDING_COMMANDS.FLUSH_CACHED_EVENTS,
            SENDING_COMMANDS.STEP_FOUND,
            SENDING_COMMANDS.ASSIST_FOUND,
            SENDING_COMMANDS.UPDATE_ASSIST_BOUNDS,
            SENDING_COMMANDS.UPDATE_STEP_BOUNDS
        ].includes(message.command);
    }
}
function postMessageToAndroid(message) {
    var _a;
    (window === null || window === void 0 ? void 0 : window.JinyAndroid) && ((_a = window === null || window === void 0 ? void 0 : window.JinyAndroid) === null || _a === void 0 ? void 0 : _a.postMessage(message));
}
function postMessageToIos(e) {
    window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers.iosListener &&
        window.webkit.messageHandlers.iosListener.postMessage(e);
}
function receiveScreenHierarchy(screenHierarchy, isWebFetchComplete, webIdentifiers, traceId) {
    var _a, _b, _c, _d, _e, _f;
    waitingForResponse = false;
    hierarchyCommandLastResponseAt = Date.now();
    var timeTaken = hierarchyCommandLastResponseAt - hierarchyCommandLastSentAt;
    if (timeTaken > hierarchyFetchTimeTakenLogBuffer) {
        console.debug("receiveScreenHierarchy(): timeTaken- ".concat(timeTaken, "ms, size- ").concat(JSON.stringify(screenHierarchy || {}).length / 1000, "KB"));
    }
    if (screenHierarchy) {
        filteredHierarchy = filterHierarchy(screenHierarchy);
    }
    if (!filteredHierarchy || Object.keys(filteredHierarchy).length == 0)
        return;
    if (!isWebFetchComplete) {
        flattenedHierarchy = {};
        flattenedHierarchyArray = getFlattenedHierarchy({
            currentNode: filteredHierarchy,
            parentId: undefined,
            root: true,
            hierarchy: flattenedHierarchy,
        });
    }
    resetFinderObserverEvents();
    if (!isWebFetchComplete) {
        callWebScriptForAllProject(traceId);
    }
    if (activeProject.id !== "" &&
        currentStaticFlow.id !== undefined &&
        currentStaticFlow.status === "RENDERING-STEPS" &&
        selectedLanguage !== "") {
        var lastStep = (_b = (_a = currentStaticFlow === null || currentStaticFlow === void 0 ? void 0 : currentStaticFlow.stepsStatus) === null || _a === void 0 ? void 0 : _a.slice(-1)) === null || _b === void 0 ? void 0 : _b[0];
        var foundProject = void 0;
        if (currentlyRunningFlow.id !== "") {
            foundProject = runDetectionLogicForProjects(true, webIdentifiers, traceId);
        }
        var stepFound = runDetectionLogicForSteps({ lastStep: lastStep }, webIdentifiers, traceId);
        if (stepFound !== "isWeb" || isWebFetchComplete) {
            if (stepFound !== undefined) {
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.ON_STEP_DETECTED,
                    properties: {
                        project_id: activeProject.projectParameters.projectId,
                        project_name: activeProject.projectParameters.projectName,
                        deployment_id: activeProject.projectParameters.deploymentId,
                        deployment_version: Number(activeProject.projectParameters.deploymentVersion),
                        type: stepFound.assistType,
                        step_name: stepFound.assist.name,
                        step_id: stepFound.assist.id,
                        step_unique_id: stepFound.assist.uniqueID,
                    },
                    className: "listener.js",
                    methodName: "receivedScreenHierarchy",
                }, traceId);
                if (checkAndUpdateBounds({
                    activeAssist: stepFound,
                    activeProjectId: activeStep === null || activeStep === void 0 ? void 0 : activeStep.id,
                    isAStep: true,
                }, traceId))
                    return;
                renderStep(stepFound, activeProject, traceId);
            }
            else {
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.ON_NO_STEP_DETECTED,
                    properties: {
                        project_id: activeProject.projectParameters.projectId,
                        project_name: activeProject.projectParameters.projectName,
                        deployment_id: activeProject.projectParameters.deploymentId,
                        deployment_version: Number(activeProject.projectParameters.deploymentVersion),
                    },
                    className: "listener.js",
                    methodName: "receivedScreenHierarchy",
                }, traceId);
                if (currentlyRunningFlow.id === "" && foundProject !== undefined) {
                    if (activeStep.id !== "")
                        resetActiveStep();
                    sendMessageToNative({
                        command: SENDING_COMMANDS.NO_CONTEXT_FOUND,
                    }, traceId);
                }
            }
            if (foundProject !== "isWeb" || isWebFetchComplete) {
                if (foundProject !== undefined) {
                    if (foundProject.id !== currentlyRunningFlow.id || !flowShown) {
                        renderProject(foundProject, true, traceId);
                        flowShown = true;
                    }
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.FINDER,
                        event_name: OBSERVER_EVENTS.FINDER.ON_PROJECT_DETECTED,
                        properties: {
                            project_id: activeProject.projectParameters.projectId,
                            project_name: activeProject.projectParameters.projectName,
                            deployment_id: activeProject.projectParameters.deploymentId,
                            deployment_version: Number(activeProject.projectParameters.deploymentVersion),
                            type: activeProject.projectType,
                        },
                    }, traceId);
                }
                else if (currentlyRunningFlow.id !== "") {
                    if (stepFound === undefined) {
                        resetActiveStep();
                        currentMatchedWebIdentifiers = {};
                        sendMessageToNative({
                            command: SENDING_COMMANDS.NO_CONTEXT_FOUND,
                        }, traceId);
                        flowShown = false;
                    }
                }
            }
        }
    }
    else {
        var projectFound = runDetectionLogicForProjects(undefined, undefined, traceId);
        if (projectFound !== "isWeb" || isWebFetchComplete) {
            if (projectFound !== undefined) {
                if (checkAndUpdateBounds({
                    activeAssist: projectFound,
                    activeProjectId: activeProject === null || activeProject === void 0 ? void 0 : activeProject.id,
                    isAStep: false,
                }, traceId))
                    return;
                renderProject(projectFound, undefined, traceId);
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.ON_PROJECT_DETECTED,
                    properties: {
                        project_id: (_c = activeProject === null || activeProject === void 0 ? void 0 : activeProject.projectParameters) === null || _c === void 0 ? void 0 : _c.projectId,
                        project_name: (_d = activeProject === null || activeProject === void 0 ? void 0 : activeProject.projectParameters) === null || _d === void 0 ? void 0 : _d.projectName,
                        deployment_id: (_e = activeProject === null || activeProject === void 0 ? void 0 : activeProject.projectParameters) === null || _e === void 0 ? void 0 : _e.deploymentId,
                        deployment_version: Number((_f = activeProject === null || activeProject === void 0 ? void 0 : activeProject.projectParameters) === null || _f === void 0 ? void 0 : _f.deploymentVersion),
                        type: activeProject === null || activeProject === void 0 ? void 0 : activeProject.projectType,
                    },
                }, traceId);
            }
            else {
                if (currentStaticFlow.status === "START") {
                    resetActiveStep();
                    resetCurrentStaticFlow();
                }
                clearTimeout(delayTimer);
                sendMessageToNative({
                    command: SENDING_COMMANDS.NO_CONTEXT_FOUND,
                }, traceId);
                resetActiveProject();
                currentMatchedWebIdentifiers = {};
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.ON_NO_PROJECT_DETECTED,
                }, traceId);
            }
        }
    }
    flushFinderObserverEvents(traceId);
}
function callWebScriptForAllProject(traceId) {
    var webViewProjects = embedProject
        .concat(sortedProjectArray)
        .concat(Object.values(flowWalkthroughs))
        .filter(function (project) { return project === null || project === void 0 ? void 0 : project.isWebView; });
    var matchedWebViewNode = findFirstWebView(filteredHierarchy);
    if (!matchedWebViewNode) {
        return;
    }
    sendWebJSscript({
        webIdentifiers: webViewProjects.reduce(function (webIdentifierObject, project) {
            return (webIdentifierObject = __assign(__assign({}, webIdentifierObject), project.webIdentifiers));
        }, {}),
        webViewNode: matchedWebViewNode,
    }, traceId);
}
function checkAndUpdateBounds(_a, traceId) {
    var _b, _c, _d;
    var activeAssist = _a.activeAssist, activeProjectId = _a.activeProjectId, isAStep = _a.isAStep;
    if ((activeAssist === null || activeAssist === void 0 ? void 0 : activeAssist.id) === activeProjectId) {
        if (activeAssist.isAnchoredElement) {
            var matchedNode = prevMatchedIdentifiers.matchedNode.find(function (s) { return activeAssist.targetId === s.id; });
            if (JSON.stringify(matchedNode === null || matchedNode === void 0 ? void 0 : matchedNode.bounds) !==
                JSON.stringify(previousBoundState)) {
                var bodyObj = {
                    command: isAStep
                        ? SENDING_COMMANDS.UPDATE_STEP_BOUNDS
                        : SENDING_COMMANDS.UPDATE_ASSIST_BOUNDS,
                    data: {
                        assist: activeAssist.assist,
                        projectParameters: activeProject.projectParameters,
                        auiContent: activeProject.auiContent,
                        bounds: matchedNode === null || matchedNode === void 0 ? void 0 : matchedNode.bounds,
                        anchorNodeInfo: getAnchorNodeInfo((_d = (_c = (_b = activeAssist === null || activeAssist === void 0 ? void 0 : activeAssist.assist) === null || _b === void 0 ? void 0 : _b.instruction) === null || _c === void 0 ? void 0 : _c.assistInfo) === null || _d === void 0 ? void 0 : _d.type, activeAssist.targetId, activeAssist, [matchedNode]),
                    },
                };
                previousBoundState = matchedNode === null || matchedNode === void 0 ? void 0 : matchedNode.bounds;
                if (isAStep) {
                    bodyObj = __assign(__assign({}, bodyObj), { data: __assign(__assign({}, bodyObj.data), { iconSetting: activeProject.iconSetting, showLanguageOption: activeProject.languages.length > 1, showIcon: currentlyRunningFlow.id === "" ? true : false, selectedLanguage: selectedLanguage }) });
                }
                sendMessageToNative(bodyObj, traceId);
            }
        }
        return true;
    }
    return false;
}
function constructActiveProjectObject(projectFound) {
    activeProject = {
        id: projectFound.id,
        projectType: projectFound.projectParameters.projectType,
        isShowing: true,
        isAnchoredElement: projectFound.isAnchoredElement,
        isWebView: projectFound.webIdentifiers !== undefined,
        flows: projectFound.flows,
        nativeIdentifiers: projectFound.nativeIdentifiers,
        webIdentifiers: projectFound.webIdentifiers,
        auiContent: projectFound.auiContent,
        languages: projectFound.languages,
        projectParameters: projectFound.projectParameters,
        iconSetting: projectFound.iconSetting,
        webViewList: projectFound.webViewList,
        standAlone: ![
            "STATIC_FLOW",
            "STATIC_FLOW_MENU",
            "STATIC_FLOW_CHECKLIST",
        ].includes(projectFound.projectParameters.projectType),
        isAFlow: projectFound.projectParameters.projectType === "STATIC_FLOW",
        isAFlowMenu: ["STATIC_FLOW_MENU", "STATIC_FLOW_CHECKLIST"].includes(projectFound.projectParameters.projectType),
    };
}
function renderStep(stepFound, projectFound, traceId) {
    currentStaticFlow.stepsStatus.push({
        id: stepFound.id,
        toShow: true,
        completed: false,
        isOptional: stepFound.isOptional,
        isAnchoredElement: !!(stepFound === null || stepFound === void 0 ? void 0 : stepFound.isAnchoredElement),
        identifier: stepFound.targetId,
        nextSteps: stepFound.nextSteps,
        completionStep: !!stepFound.isSuccess,
        step: stepFound.assist,
    });
    activeStep = {
        step: stepFound,
        id: stepFound.id,
        isAnchoredElement: !!(stepFound === null || stepFound === void 0 ? void 0 : stepFound.isAnchoredElement),
    };
    var bodyObj = {
        command: SENDING_COMMANDS.STEP_FOUND,
        data: {
            assist: stepFound.assist,
            localeSounds: stepFound === null || stepFound === void 0 ? void 0 : stepFound.localeSounds,
            projectParameters: activeProject.projectParameters,
            auiContent: activeProject.auiContent,
            iconSetting: activeProject.iconSetting,
            showLanguageOption: activeProject.languages.length > 1,
            showIcon: currentlyRunningFlow.id === "" ? true : false,
            selectedLanguage: selectedLanguage,
            anchorNodeInfo: getAnchorNodeInfo(stepFound.assistType, stepFound.targetId, projectFound, prevMatchedIdentifiers.matchedNode),
        },
    };
    if (stepFound.targetId) {
        var matchedNode = prevMatchedIdentifiers.matchedNode.find(function (s) { return stepFound.targetId === s.id; });
        previousBoundState = matchedNode === null || matchedNode === void 0 ? void 0 : matchedNode.bounds;
        bodyObj.data.bounds = matchedNode === null || matchedNode === void 0 ? void 0 : matchedNode.bounds;
    }
    sendMessageToNative(bodyObj, traceId);
}
function renderProject(projectFound, showOnlyFlowIcon, traceId) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (showOnlyFlowIcon === void 0) { showOnlyFlowIcon = false; }
    var bodyObj = {
        command: SENDING_COMMANDS.ASSIST_FOUND,
        data: {
            assist: projectFound.assist,
            projectParameters: projectFound.projectParameters,
            auiContent: projectFound.auiContent,
            localeSounds: projectFound === null || projectFound === void 0 ? void 0 : projectFound.localeSounds,
        },
    };
    var showOnlyIcon = projectFound.assist.autoStart ||
        getTriggerConditionForStaticFlow(projectFound.triggerCase, (_a = allProjectStatus[projectFound.id]) === null || _a === void 0 ? void 0 : _a.isShown, (_b = allProjectStatus[projectFound.id]) === null || _b === void 0 ? void 0 : _b.isFlowTriggered) === "ICON";
    if (projectFound.isAFlow || projectFound.isAFlowMenu) {
        bodyObj.command = SENDING_COMMANDS.WALKTHROUGH_FOUND;
        selectedLanguage = setSelectedLanguage(projectFound.languages, selectedLanguage || appLocale);
        bodyObj.data = __assign(__assign({}, bodyObj.data), { selectedLanguage: selectedLanguage, showLanguagePanel: selectedLanguage === "", languages: projectFound.languages, iconSetting: projectFound.iconSetting, showIcon: showOnlyFlowIcon || showOnlyIcon, autoStart: projectFound.assist.autoStart });
    }
    if (projectFound.isAFlowMenu) {
        if (currentlyRunningFlow.id === projectFound.id ||
            currentlyRunningFlow.id === "")
            sendProjectCompletion({ id: projectFound.id, reset: false }, traceId);
        else
            sendProjectCompletion({ reset: true }, traceId);
        activeProject.id = projectFound.id;
        flowShown = true;
        currentlyRunningFlow = {
            id: projectFound.id,
            active: true,
        };
    }
    if (projectFound.isAFlow && !projectFound.isAFlowMenu && !showOnlyFlowIcon) {
        currentStaticFlow = {
            id: projectFound.id,
            isWebView: projectFound.isWebView,
            projectId: projectFound.projectParameters.deploymentId,
            status: "START",
            onlyIcon: showOnlyIcon,
            completed: false,
            autoStart: projectFound === null || projectFound === void 0 ? void 0 : projectFound.assist.autoStart,
            stepsStatus: [],
        };
    }
    if (!(projectFound.isAFlow || projectFound.isAFlowMenu)) {
        if (projectFound.isAnchoredElement) {
            var getNativeMatchedNode = (_c = prevMatchedIdentifiers === null || prevMatchedIdentifiers === void 0 ? void 0 : prevMatchedIdentifiers.matchedNode) === null || _c === void 0 ? void 0 : _c.find(function (s) { return projectFound.targetId === s.id; });
            var getWebMatchedNode = (_d = currentMatchedWebIdentifiers === null || currentMatchedWebIdentifiers === void 0 ? void 0 : currentMatchedWebIdentifiers.matchedNode) === null || _d === void 0 ? void 0 : _d.find(function (s) { return projectFound.targetId === s.id; });
            var matchedNode = projectFound.isWebView
                ? getWebMatchedNode
                : getNativeMatchedNode;
            previousBoundState = matchedNode === null || matchedNode === void 0 ? void 0 : matchedNode.bounds;
            bodyObj.data.bounds = matchedNode === null || matchedNode === void 0 ? void 0 : matchedNode.bounds;
            bodyObj.data.anchorNodeInfo = getAnchorNodeInfo((_g = (_f = (_e = projectFound === null || projectFound === void 0 ? void 0 : projectFound.assist) === null || _e === void 0 ? void 0 : _e.instruction) === null || _f === void 0 ? void 0 : _f.assistInfo) === null || _g === void 0 ? void 0 : _g.type, projectFound === null || projectFound === void 0 ? void 0 : projectFound.targetId, projectFound, prevMatchedIdentifiers === null || prevMatchedIdentifiers === void 0 ? void 0 : prevMatchedIdentifiers.matchedNode);
        }
    }
    if (!projectFound.isAFlowMenu && !showOnlyFlowIcon) {
        constructActiveProjectObject(projectFound);
    }
    if (projectFound.assist.autoStart &&
        showOnlyIcon &&
        !allProjectStatus[projectFound.id].isShown) {
        currentStaticFlow = __assign(__assign({}, currentStaticFlow), { status: "RENDERING-STEPS", onlyIcon: false, autoStart: projectFound === null || projectFound === void 0 ? void 0 : projectFound.assist.autoStart });
        resetFlow();
    }
    delayTimer = setTimeout(function () { return sendMessageToNative(bodyObj, traceId); }, ((_h = allProjectStatus[projectFound.id]) === null || _h === void 0 ? void 0 : _h.isShown) ? 0 : projectFound === null || projectFound === void 0 ? void 0 : projectFound.triggerDelay);
}
function runDetectionLogicForProjects(searchOnlyFlowMenu, webIdentifiers, traceId) {
    var _a;
    if (searchOnlyFlowMenu === void 0) { searchOnlyFlowMenu = false; }
    var projectFound = (_a = embedProject
        .concat(sortedProjectArray)) === null || _a === void 0 ? void 0 : _a.find(function (project, i) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        if (project === undefined)
            return;
        if (((_a = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _a === void 0 ? void 0 : _a.isTerminated) ||
            (!project.id.includes("discovery") && ((_b = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _b === void 0 ? void 0 : _b.isCompleted)))
            return;
        if (project.isWebView && !currentMatchedWebIdentifiers)
            return true;
        if (((_d = (_c = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _c === void 0 ? void 0 : _c.initialTerminationStatus) === null || _d === void 0 ? void 0 : _d.nSession) !==
            -1 &&
            ((_f = (_e = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _e === void 0 ? void 0 : _e.terminationStatus) === null || _f === void 0 ? void 0 : _f.nSession) ===
                ((_h = (_g = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _g === void 0 ? void 0 : _g.initialTerminationStatus) === null || _h === void 0 ? void 0 : _h.nSession) &&
            ((_j = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _j === void 0 ? void 0 : _j.shownOnce) === false) {
            sendAnalyticEvent(ANALYTICS_EVENTS.PROJECT_TERMINATION, {
                terminationRule: "nSession: ".concat((_k = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project === null || project === void 0 ? void 0 : project.id]) === null || _k === void 0 ? void 0 : _k.initialTerminationStatus.nSession),
            }, traceId);
            removeProjectFromStatusArray({ id: project === null || project === void 0 ? void 0 : project.id });
            return false;
        }
        else if ((((_m = (_l = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _l === void 0 ? void 0 : _l.initialTerminationStatus) === null || _m === void 0 ? void 0 : _m.nDismissedByUser) !== -1 &&
            ((_p = (_o = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _o === void 0 ? void 0 : _o.terminationStatus) === null || _p === void 0 ? void 0 : _p.nDismissedByUser) === 1) ||
            (((_r = (_q = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _q === void 0 ? void 0 : _q.initialTerminationStatus) === null || _r === void 0 ? void 0 : _r.perApp) !== -1 &&
                ((_t = (_s = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _s === void 0 ? void 0 : _s.terminationStatus) === null || _t === void 0 ? void 0 : _t.perApp) === ((_v = (_u = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _u === void 0 ? void 0 : _u.initialTerminationStatus) === null || _v === void 0 ? void 0 : _v.perApp)) ||
            (((_x = (_w = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _w === void 0 ? void 0 : _w.initialTerminationStatus) === null || _x === void 0 ? void 0 : _x.untilAllFlowsAreCompleted) &&
                ((_z = (_y = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _y === void 0 ? void 0 : _y.terminationStatus) === null || _z === void 0 ? void 0 : _z.untilAllFlowsAreCompleted))) {
            removeProjectFromStatusArray({ id: project === null || project === void 0 ? void 0 : project.id, saveState: false });
            return false;
        }
        switch (true) {
            case project.isAFlow:
            case project.isAFlowMenu: {
                var resWeb = webIdentifiers || currentMatchedWebIdentifiers;
                var resNative = findMatches(filteredHierarchy, project.nativeIdentifiers, traceId);
                var res = (project === null || project === void 0 ? void 0 : project.isWebView) ? resWeb : resNative;
                found = checkIfIdentifierMatch(res === null || res === void 0 ? void 0 : res.matchedIdentifiers, (project === null || project === void 0 ? void 0 : project.isWebView)
                    ? __spreadArray(__spreadArray([], __read(project.assist.webIdentifiers), false), __read((project.targetId ? [project.targetId] : [])), false) : __spreadArray(__spreadArray([], __read(project.assist.nativeIdentifiers), false), __read((project.targetId ? [project.targetId] : [])), false));
                if (found &&
                    (((!((_0 = allProjectStatus[project === null || project === void 0 ? void 0 : project.id]) === null || _0 === void 0 ? void 0 : _0.isShown) ||
                        !((_1 = allProjectStatus[project === null || project === void 0 ? void 0 : project.id]) === null || _1 === void 0 ? void 0 : _1.isCompleted) ||
                        (project === null || project === void 0 ? void 0 : project.isIconEnabled)) &&
                        checkToShowProject(project === null || project === void 0 ? void 0 : project.id)) ||
                        searchOnlyFlowMenu))
                    return project;
                break;
            }
            case !project.isWebView: {
                if (searchOnlyFlowMenu)
                    break;
                var res = findMatches(filteredHierarchy, project.nativeIdentifiers, traceId);
                prevMatchedIdentifiers = res;
                var found = false;
                if (project.isAnchoredElement)
                    found = isArrayMatched(__spreadArray(__spreadArray([], __read(project.assist.nativeIdentifiers), false), [project.targetId], false), res.matchedIdentifiers);
                else
                    found = isArrayMatched(project.assist.nativeIdentifiers, res.matchedIdentifiers);
                if (found &&
                    allProjectStatus[project.id] &&
                    (!((_2 = allProjectStatus[project.id]) === null || _2 === void 0 ? void 0 : _2.isShown) ||
                        !((_3 = allProjectStatus[project.id]) === null || _3 === void 0 ? void 0 : _3.isCompleted)) &&
                    checkToShowProject(project.id))
                    return project;
                break;
            }
            case project.isWebView: {
                if (searchOnlyFlowMenu)
                    break;
                var res = currentMatchedWebIdentifiers;
                prevMatchedIdentifiers = res;
                var found = false;
                if (res === undefined)
                    break;
                if (project.isAnchoredElement)
                    found = checkIfIdentifierMatch(res.matchedIdentifiers, __spreadArray(__spreadArray([], __read(project.assist.webIdentifiers), false), [
                        project.targetId,
                    ], false));
                else
                    found = checkIfIdentifierMatch(res.matchedIdentifiers, project.assist.webIdentifiers);
                if (found &&
                    (!allProjectStatus[project.id].isShown ||
                        !allProjectStatus[project.id].isCompleted) &&
                    checkToShowProject(project.id))
                    return project;
                break;
            }
        }
    });
    return (projectFound === null || projectFound === void 0 ? void 0 : projectFound.isWebView) && !currentMatchedWebIdentifiers
        ? "isWeb"
        : projectFound;
}
function runDetectionLogicForSteps(_a, webIdentifiers, traceId) {
    var lastStep = _a.lastStep;
    var currentStepIds = lastStep === undefined
        ? [activeProject.flows[0].firstStep]
        : lastStep.nextSteps;
    var resWeb = webIdentifiers;
    var resNative = findMatches(filteredHierarchy, activeProject.nativeIdentifiers, traceId);
    if ((lastStep === null || lastStep === void 0 ? void 0 : lastStep.toShow) && !(lastStep === null || lastStep === void 0 ? void 0 : lastStep.completed)) {
        currentStepIds = [lastStep.id];
    }
    var stepFound;
    activeProject.flows[0].pages.find(function (page) {
        var e_10, _a;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (checkIfIdentifierMatch(resNative.matchedIdentifiers, page.nativeIdentifiers)) {
            try {
                for (var _o = __values(page.stages), _p = _o.next(); !_p.done; _p = _o.next()) {
                    var stage = _p.value;
                    if (currentStepIds.includes(stage.uniqueID) &&
                        stage.webIdentifiers !== undefined &&
                        !webIdentifiers) {
                        stepFound = "isWeb";
                        return true;
                    }
                    if (currentStepIds.includes(stage.uniqueID) &&
                        checkIfIdentifierMatch(stage.webIdentifiers !== undefined
                            ? resWeb === null || resWeb === void 0 ? void 0 : resWeb.matchedIdentifiers
                            : resNative === null || resNative === void 0 ? void 0 : resNative.matchedIdentifiers, stage.webIdentifiers !== undefined
                            ? __spreadArray(__spreadArray([], __read(stage.webIdentifiers), false), __read((((_c = (_b = stage === null || stage === void 0 ? void 0 : stage.instruction) === null || _b === void 0 ? void 0 : _b.assistInfo) === null || _c === void 0 ? void 0 : _c.identifier)
                                ? [stage.instruction.assistInfo.identifier]
                                : [])), false) : __spreadArray(__spreadArray([], __read(stage.nativeIdentifiers), false), __read((((_e = (_d = stage === null || stage === void 0 ? void 0 : stage.instruction) === null || _d === void 0 ? void 0 : _d.assistInfo) === null || _e === void 0 ? void 0 : _e.identifier)
                            ? [stage.instruction.assistInfo.identifier]
                            : [])), false))) {
                        prevMatchedIdentifiers = stage.webIdentifiers ? resWeb : resNative;
                        stepFound = {
                            id: stage === null || stage === void 0 ? void 0 : stage.uniqueID,
                            isWebView: (stage === null || stage === void 0 ? void 0 : stage.webIdentifiers) !== undefined,
                            isOptional: stage === null || stage === void 0 ? void 0 : stage.optional,
                            assist: stage,
                            isAnchoredElement: !!((_g = (_f = stage === null || stage === void 0 ? void 0 : stage.instruction) === null || _f === void 0 ? void 0 : _f.assistInfo) === null || _g === void 0 ? void 0 : _g.identifier),
                            targetId: (_j = (_h = stage === null || stage === void 0 ? void 0 : stage.instruction) === null || _h === void 0 ? void 0 : _h.assistInfo) === null || _j === void 0 ? void 0 : _j.identifier,
                            nextSteps: (_k = stage === null || stage === void 0 ? void 0 : stage.transition) === null || _k === void 0 ? void 0 : _k.nextSteps,
                            nativeIdentifiers: stage === null || stage === void 0 ? void 0 : stage.nativeIdentifiers,
                            webIdentifiers: stage === null || stage === void 0 ? void 0 : stage.webIdentifiers,
                            isSuccess: stage === null || stage === void 0 ? void 0 : stage.isSuccess,
                            assistType: (_m = (_l = stage === null || stage === void 0 ? void 0 : stage.instruction) === null || _l === void 0 ? void 0 : _l.assistInfo) === null || _m === void 0 ? void 0 : _m.type,
                        };
                        return true;
                    }
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (_p && !_p.done && (_a = _o.return)) _a.call(_o);
                }
                finally { if (e_10) throw e_10.error; }
            }
        }
    });
    return stepFound;
}
function getAnchorNodeInfo(assistType, targetIdentifierId, projectFound, matchedNode) {
    var _a;
    if (!["TOOLTIP", "HIGHLIGHT_WITH_DESC"].includes(assistType))
        return null;
    var anchorNode = matchedNode.find(function (node) { return (node === null || node === void 0 ? void 0 : node.id) === targetIdentifierId; });
    var bounds = anchorNode === null || anchorNode === void 0 ? void 0 : anchorNode["bounds"];
    var node = flattenedHierarchy[(_a = anchorNode === null || anchorNode === void 0 ? void 0 : anchorNode["node"]) === null || _a === void 0 ? void 0 : _a["uuid"]];
    if (node["is_webview"]) {
        var targetIdentifier = projectFound.webIdentifiers[targetIdentifierId];
        var focusScript = createFocusJavascript(targetIdentifier);
        return {
            uuid: node["uuid"],
            autoFocus: true,
            autoFocusScript: focusScript,
            autoScroll: shouldAutoScroll(assistType, node, bounds),
            scrollToViewScript: getScrollToViewScript(assistType, node, targetIdentifier),
            scrollingParentInfo: getScrollingParentNodeInfo(assistType, node),
        };
    }
    return {
        uuid: node["uuid"],
        autoFocus: true,
        autoScroll: shouldAutoScroll(assistType, node, bounds),
        scrollingParentInfo: getScrollingParentNodeInfo(assistType, node),
    };
}
function getScrollToViewScript(assistType, anchorNode, targetIdentifier) {
    if (!anchorNode)
        return false;
    if (![
        "TOOLTIP",
        "HIGHLIGHT_WITH_DESC",
        "FINGER_RIPPLE",
        "SWIPE_LEFT",
        "SWIPE_RIGHT",
        "SWIPE_UP",
        "SWIPE_DOWN",
        "BEACON",
    ].includes(assistType))
        return null;
    var querySelectorAllStatement = createQuerySelectorAllStatement(targetIdentifier);
    return "".concat(querySelectorAllStatement, ".scrollIntoView({ behavior: 'smooth', block: 'center' });");
}
function shouldAutoScroll(assistType, anchorNode, bounds) {
    var _a, _b;
    if (!anchorNode)
        return false;
    if (![
        "TOOLTIP",
        "HIGHLIGHT_WITH_DESC",
        "FINGER_RIPPLE",
        "SWIPE_LEFT",
        "SWIPE_RIGHT",
        "SWIPE_UP",
        "SWIPE_DOWN",
        "BEACON",
    ].includes(assistType))
        return false;
    var screenHeight = (_b = (_a = flattenedHierarchy === null || flattenedHierarchy === void 0 ? void 0 : flattenedHierarchy.ROOT_NODE) === null || _a === void 0 ? void 0 : _a.screen_height) !== null && _b !== void 0 ? _b : -1;
    if (screenHeight == -1)
        return false;
    var top = bounds === null || bounds === void 0 ? void 0 : bounds.top;
    var bottom = bounds === null || bounds === void 0 ? void 0 : bounds.bottom;
    return bottom > screenHeight || top < 5;
}
var ANDROID_SUPPORT_COLLAPSING_TOOLBAR = "android.support.design.widget.CollapsingToolbarLayout";
var GOOGLE_MATERIAL_COLLAPSING_TOOLBAR = "com.google.android.material.appbar.CollapsingToolbarLayout";
var ANDROID_SUPPORT_APP_BAR_LAYOUT = "android.support.design.widget.AppBarLayout";
var GOOGLE_MATERIAL_APP_BAR_LAYOUT = "com.google.android.material.appbar.AppBarLayout";
function getNativeScrollingParentNodeDetails(anchorNode) {
    function isCollapsibleToolbar(node) {
        var className = node.class;
        return (ANDROID_SUPPORT_COLLAPSING_TOOLBAR === className ||
            GOOGLE_MATERIAL_COLLAPSING_TOOLBAR === className);
    }
    function canOnlyHorizontallyScroll(node) {
        return node && node["is_horizontally_scrollable"];
    }
    function canViewVerticallyScroll(node) {
        return node && node["is_vertically_scrollable"];
    }
    function fetchAppBarLayout(node) {
        if (!node)
            return null;
        var className = node.class;
        if (ANDROID_SUPPORT_APP_BAR_LAYOUT === className ||
            GOOGLE_MATERIAL_APP_BAR_LAYOUT === className)
            return node;
        var parentUUID = node["parent_uuid"];
        if (!parentUUID)
            return null;
        var parentNode = flattenedHierarchy[parentUUID];
        return fetchAppBarLayout(parentNode);
    }
    if (!anchorNode)
        return null;
    if (platform === "ANDROID" && isCollapsibleToolbar(anchorNode)) {
        return {
            uuid: fetchAppBarLayout(anchorNode).uuid,
            isAppBarLayout: true,
        };
    }
    if (canViewVerticallyScroll(anchorNode)) {
        return {
            uuid: anchorNode.uuid,
            isAppBarLayout: false,
        };
    }
    var parentUUID = anchorNode["parent_uuid"];
    if (!parentUUID)
        return null;
    var parentNode = flattenedHierarchy[parentUUID];
    return getNativeScrollingParentNodeDetails(parentNode);
}
function getScrollingParentNodeInfo(assistType, anchorNode) {
    if (![
        "TOOLTIP",
        "HIGHLIGHT_WITH_DESC",
        "FINGER_RIPPLE",
        "SWIPE_LEFT",
        "SWIPE_RIGHT",
        "SWIPE_UP",
        "SWIPE_DOWN",
        "BEACON",
    ].includes(assistType))
        return null;
    if (!anchorNode)
        return null;
    var isAnchorNodeWebView = anchorNode["is_webview"];
    if (isAnchorNodeWebView)
        return {
            uuid: anchorNode.uuid,
        };
    return getNativeScrollingParentNodeDetails(anchorNode);
}
function updateProjectStatus(_a, traceId) {
    var id = _a.id, isShown = _a.isShown, isCompleted = _a.isCompleted, isFlowTriggered = _a.isFlowTriggered, isTerminated = _a.isTerminated, terminatedByIcon = _a.terminatedByIcon;
    if (!id)
        return;
    if (isShown) {
        allProjectStatus[id] = __assign(__assign({}, allProjectStatus[id]), { isShown: isShown });
    }
    if (isCompleted) {
        allProjectStatus[id] = __assign(__assign({}, allProjectStatus[id]), { isCompleted: isCompleted });
    }
    if (isFlowTriggered) {
        allProjectStatus[id] = __assign(__assign({}, allProjectStatus[id]), { isFlowTriggered: isFlowTriggered });
    }
    if (isTerminated) {
        allProjectStatus[id] = __assign(__assign({}, allProjectStatus[id]), { isTerminated: isTerminated });
    }
    if (terminatedByIcon) {
        allProjectStatus[id] = __assign(__assign({}, allProjectStatus[id]), { terminatedByIcon: terminatedByIcon });
    }
    saveTheLatestStateChange(traceId);
}
function receiveWebIdentifiers(webIdentifiers, traceId) {
    prevMatchedIdentifiers = {};
    currentMatchedWebIdentifiers = webIdentifiers;
    receiveScreenHierarchy(undefined, true, webIdentifiers, traceId);
}
function updateAssistInteraction(res, traceId) {
    var _a;
    var actionCallback = res.body;
    if ((actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.optIn) && !(currentlyRunningFlow === null || currentlyRunningFlow === void 0 ? void 0 : currentlyRunningFlow.id)) {
        sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_OPT_IN, (actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.flowTitle)
            ? {
                selectedFlow: actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.flowTitle,
                selectedProjectId: actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.projectId,
            }
            : {}, traceId);
    }
    if (actionCallback.carouselSlideId) {
        sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_ACTION, {
            actionEventType: actionCallback.type,
            actionEventValue: actionCallback.buttonLabel,
            externalLink: actionCallback.externalLink,
            deepLink: actionCallback.deepLink,
            carouselCompleted: actionCallback.carouselCompleted,
            carouselSlideId: actionCallback.carouselSlideId,
            carouselPreviousSlideId: !actionCallback.carouselPreviousSlideId ||
                actionCallback.carouselPreviousSlideId === "null"
                ? null
                : actionCallback.carouselPreviousSlideId,
            carouselDirection: !actionCallback.carouselDirection ||
                actionCallback.carouselDirection === "null"
                ? null
                : actionCallback.carouselDirection,
            sdkVersionCode: sdkVersion,
        }, traceId);
    }
    else if (actionCallback.deepLink) {
        sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_ACTION, {
            actionEventType: ACTION_EVENT_TYPES.DEEP_LINK,
        }, traceId);
    }
    else if (actionCallback.externalLink) {
        sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_ACTION, {
            actionEventType: ACTION_EVENT_TYPES.EXTERNAL_LINK,
        }, traceId);
    }
    else if (actionCallback.actionType &&
        (actionCallback.actionType === "overlayClicked" ||
            actionCallback.actionType === "optOutClick")) {
        sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_ACTION, {
            actionEventType: ACTION_EVENT_TYPES.CLOSE,
        }, traceId);
    }
    else if (actionCallback.type === "close") {
        sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_ACTION, {
            actionEventType: ACTION_EVENT_TYPES.CLOSE,
            actionEventValue: actionCallback.buttonLabel,
        }, traceId);
    }
    if (((_a = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[activeProject.id]) === null || _a === void 0 ? void 0 : _a.triggerCase) === "PLAY_ONCE")
        updateProjectStatus({ id: activeProject.id, isFlowTriggered: true }, traceId);
    if (actionCallback.close &&
        !actionCallback.optIn &&
        currentlyRunningFlow.id === "" &&
        currentStaticFlow.status === "START") {
        sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_OPT_OUT, undefined, traceId);
        if (allProjectStatus[activeProject.id].triggerCase ===
            "EVERY_SESSION_UNTIL_DISMISSED")
            updateProjectStatus({ id: activeProject.id, isFlowTriggered: true }, traceId);
        updateViewStatusForTheProject("nDismissedByUser", traceId);
    }
    if (actionCallback.close &&
        !actionCallback.optIn &&
        currentlyRunningFlow.id !== "" &&
        currentStaticFlow.id === undefined) {
        if (allProjectStatus[currentlyRunningFlow.id].triggerCase ===
            "EVERY_SESSION_UNTIL_DISMISSED")
            updateProjectStatus({
                id: currentlyRunningFlow.id,
                isFlowTriggered: true,
            }, traceId);
        updateViewStatusForTheProject("nDismissedByUser", traceId);
    }
    if (currentStaticFlow.id !== undefined &&
        currentStaticFlow.stepsStatus.length > 0) {
        var lastStep = currentStaticFlow.stepsStatus[currentStaticFlow.stepsStatus.length - 1];
        var activeProjectId = currentlyRunningFlow.id === ""
            ? activeProject.id
            : currentlyRunningFlow.id;
        flowShown = false;
        if (lastStep.completionStep) {
            sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_SUCCESS, undefined, traceId);
            if (currentlyRunningFlow.id !== "") {
                var currentRunningFlow = completedProjectsInFlow[activeProjectId];
                var foundCompletedProject = currentRunningFlow.projects.findIndex(function (c) { return c.id === currentStaticFlow.projectId; });
                if (foundCompletedProject !== -1) {
                    currentRunningFlow.projects[foundCompletedProject].completed = true;
                }
                if (areAllProjectsCompleted(currentRunningFlow)) {
                    updateViewStatusForTheProject("untilAllFlowsAreCompleted", traceId);
                }
            }
            if (currentlyRunningFlow.id === "")
                updateProjectStatus({ id: activeProject.id, isCompleted: true }, traceId);
            sendProjectCompletion({ reset: false }, traceId);
            if (allProjectStatus[activeProject.id].triggerCase ===
                "EVERY_SESSION_UNTIL_FLOW_COMPLETE")
                updateProjectStatus({ id: activeProject.id, isFlowTriggered: true }, traceId);
            updateViewStatusForTheProject("perApp", traceId);
            saveTheLatestStateChange(traceId);
            resetActiveProject();
            resetCurrentStaticFlow();
            resetFlow();
        }
    }
    if (actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.projectId) {
        var selectedWalkthrough = flowWalkthroughs[actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.projectId];
        activeProject = {
            id: selectedWalkthrough.id,
            projectType: selectedWalkthrough.projectParameters.projectType,
            isShowing: true,
            isAnchoredElement: selectedWalkthrough.isAnchoredElement,
            flows: selectedWalkthrough.flows,
            nativeIdentifiers: selectedWalkthrough.nativeIdentifiers,
            webIdentifiers: selectedWalkthrough.webIdentifiers,
            auiContent: selectedWalkthrough.auiContent,
            projectParameters: selectedWalkthrough.projectParameters,
            languages: selectedWalkthrough.languages,
            iconSetting: selectedWalkthrough.iconSetting,
            standAlone: ![
                "STATIC_FLOW",
                "STATIC_FLOW_MENU",
                "STATIC_FLOW_CHECKLIST",
            ].includes(selectedWalkthrough.projectParameters.projectType),
            isAFlow: selectedWalkthrough.projectParameters.projectType === "STATIC_FLOW",
            isAFlowMenu: ["STATIC_FLOW_MENU", "STATIC_FLOW_CHECKLIST"].includes(selectedWalkthrough.projectParameters.projectType),
        };
        currentStaticFlow = {
            id: selectedWalkthrough.id,
            projectId: selectedWalkthrough.projectParameters.deploymentId,
            completed: false,
            stepsStatus: [],
            status: "RENDERING-STEPS",
            autoStart: true,
        };
        flowShown = false;
        return;
    }
    if (actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.optIn) {
        previousBoundState = {};
        currentStaticFlow = __assign(__assign({}, currentStaticFlow), { status: "RENDERING-STEPS", onlyIcon: false, autoStart: false });
        resetFlow();
        return;
    }
    if (actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.endFlow) {
        currentStaticFlow.id !== undefined &&
            sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_STOP, undefined, traceId);
        previousBoundState = {};
        handleCloseEvent({
            clearAll: true,
        }, traceId);
        resetCurrentStaticFlow();
        return;
    }
    if (actionCallback.close) {
        if (currentStaticFlow.id === undefined ||
            (currentStaticFlow.id !== undefined &&
                currentStaticFlow.stepsStatus.length === 0))
            handleCloseEvent({
                clearAll: true,
            }, traceId);
        else
            handleCloseEvent({
                updateStepsStatus: true,
            }, traceId);
        return;
    }
}
function handleCloseEvent(_a, traceId) {
    var _b;
    var _c = _a.clearAll, clearAll = _c === void 0 ? false : _c, _d = _a.updateStepsStatus, updateStepsStatus = _d === void 0 ? false : _d;
    previousBoundState = {};
    switch (true) {
        case updateStepsStatus: {
            var lastStepIndex = ((_b = currentStaticFlow === null || currentStaticFlow === void 0 ? void 0 : currentStaticFlow.stepsStatus) === null || _b === void 0 ? void 0 : _b.length) - 1;
            if (lastStepIndex >= 0) {
                currentStaticFlow.stepsStatus[lastStepIndex].completed = true;
            }
            previousBoundState = {};
            resetActiveStep();
            break;
        }
        case clearAll: {
            updateProjectStatus({ id: activeProject.id, isCompleted: true }, traceId);
            clearActiveProject();
            break;
        }
    }
}
function setCurrentSelectedLanguage(language) {
    selectedLanguage = language;
    appLocale = language;
}
function resetShowForFlows() {
    tackProjectBeingIdentified.forEach(function (t) {
        if (t.projectType === "STATIC_FLOW_CHECKLIST") {
            t.toShow = true;
        }
    });
}
function clearEveryThing(clearTimer, traceId) {
    if (clearTimer === void 0) { clearTimer = false; }
    if (clearTimer)
        clearInterval(timer);
    sendMessageToNative({
        command: SENDING_COMMANDS.NO_CONTEXT_FOUND,
    }, traceId);
    clearActiveProject();
}
function clearActiveProject() {
    previousBoundState = {};
    resetFlow();
    resetActiveStep();
    resetActiveProject();
    resetCurrentStaticFlow();
}
function resetFinderObserverEvents() {
    finderObserverEvents = {
        on_identifier_matched: [],
        on_identifier_not_matched: [],
        on_project_detected: [],
        on_no_project_detected: [],
        on_step_detected: [],
        on_no_step_detected: [],
    };
}
function resetFlow() {
    currentlyRunningFlow = {
        id: "",
        active: false,
    };
}
function resetActiveStep() {
    activeStep = {
        id: "",
        step: {},
        isAnchoredElement: false,
    };
}
function resetActiveProject() {
    activeProject = {
        id: "",
        projectType: "",
        isShowing: false,
        isAnchoredElement: false,
        standAlone: false,
        iconSetting: {},
        isAFlow: false,
        isAFlowMenu: false,
    };
}
function resetCurrentStaticFlow() {
    currentStaticFlow = {
        id: undefined,
        status: undefined,
        completed: undefined,
        stepsStatus: [],
        autoStart: false,
    };
}
function handlePanelEvent(data, traceId) {
    if (data.action === "isVisible")
        return;
    else if (data.action === "clickEvent" && data.value) {
        sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_DISABLE, undefined, traceId);
        removeProjectFromStatusArray({ id: data.uniqueId, terminatedByIcon: true, isTerminated: true });
        clearEveryThing();
    }
}
function handleIconAction(id) {
    var project = embedProject
        .concat(sortedProjectArray)
        .find(function (s) { return s.id === id; });
    if (project !== undefined &&
        currentStaticFlow.id &&
        project.assist.autoStart &&
        currentStaticFlow.status === "START") {
        currentStaticFlow = __assign(__assign({}, currentStaticFlow), { status: "RENDERING-STEPS", onlyIcon: false, autoStart: project.assist.autoStart });
        resetFlow();
    }
}
function resetAndRemoveState(traceId) {
    resetGlobalUserState();
    sortedProjectArray = [];
    embedProject = [];
    allProjectStatus = {};
    lastProfileUpdatedAt = undefined;
    lastUpdatedConfigAt = undefined;
    lastUpdatedEmbedConfigAt = undefined;
    loggerConfig = {};
    prevMatchedIdentifiers = [];
    currentMatchedWebIdentifiers = {};
    previousBoundState = {};
    saveTheLatestStateChange(traceId);
}
function createFocusJavascript(targetIdentifier) {
    var querySelectorAllStatement = createQuerySelectorAllStatement(targetIdentifier);
    return "".concat(querySelectorAllStatement, ".focus();");
}
function createFinderJavascript(webIdentifiers, webViewBounds, webViewScale, webviewUUID) {
    var webIdentificationJavascriptFunction = "function runWhatfixMobileWebFinder(){";
    var webIdentificationJavascript = "let matchedNode = []; \n     let projectWrapper = { \"matchedNode\": matchedNode }; \n     let result = projectWrapper; \n     let matchedIdentifiers = [];\n     let unMatchedIdentifiers = [];";
    for (var key in webIdentifiers) {
        var webIdentifier = webIdentifiers[key];
        webIdentificationJavascript = webIdentificationJavascript.concat(createIfElseStatement(key, webIdentifier, webViewBounds, webViewScale, webviewUUID));
    }
    webIdentificationJavascript = webIdentificationJavascript
        .concat("projectWrapper.matchedIdentifiers=matchedIdentifiers;")
        .concat("projectWrapper.unMatchedIdentifiers=unMatchedIdentifiers;")
        .concat("return result;");
    webIdentificationJavascriptFunction = webIdentificationJavascriptFunction
        .concat(webIdentificationJavascript)
        .concat("} runWhatfixMobileWebFinder();");
    return webIdentificationJavascriptFunction;
}
function createIfElseStatement(id, webIdentifier, webViewBounds, webViewScale, webviewUUID) {
    var statementBlock = "if(";
    var querySelectorAllStatement = createQuerySelectorAllStatement(webIdentifier);
    if (webIdentifier["innerText"] === undefined ||
        webIdentifier["innerText"]["ang"] === undefined) {
        statementBlock = statementBlock
            .concat(querySelectorAllStatement)
            .concat(")");
    }
    else {
        statementBlock = statementBlock
            .concat(querySelectorAllStatement)
            .concat(" && ")
            .concat(querySelectorAllStatement +
            ".innerText === '" +
            webIdentifier["innerText"]["ang"])
            .concat("')");
    }
    var positionQuery = "".concat(querySelectorAllStatement, ".getBoundingClientRect()");
    statementBlock = statementBlock
        .concat("{")
        .concat("matchedIdentifiers.push(\"".concat(id, "\");"))
        .concat("\n      var position = ".concat(positionQuery, ";\n      var bounds = {\n          left: position.left * ").concat(webViewScale, " + ").concat(webViewBounds.left, ",\n          top: position.top * ").concat(webViewScale, " + ").concat(webViewBounds.top, ",\n          right: position.right * ").concat(webViewScale, " + ").concat(webViewBounds.left, ",\n          bottom: position.bottom * ").concat(webViewScale, " + ").concat(webViewBounds.top, "\n        };\n      "))
        .concat("matchedNode.push({ \n        \"id\" : \"".concat(id, "\", \n        \"bounds\" : bounds,\n        \"node\": {\n          \"uuid\": \"").concat(webviewUUID, "\"\n        }\n      });"))
        .concat("}");
    statementBlock = statementBlock.concat("else{unMatchedIdentifiers.push(\"".concat(id, "\");}"));
    return statementBlock;
}
function createQuerySelectorAllStatement(webIdentifier) {
    var tagName = webIdentifier.tagName;
    var attributes = webIdentifier["attributes"]["ang"];
    var querySelectorAllStatement = "document.querySelectorAll('".concat(tagName);
    for (var attributeKey in attributes) {
        var attributeValue = attributes[attributeKey];
        var attributeString = "["
            .concat(attributeKey)
            .concat('="')
            .concat(attributeValue)
            .concat('"]');
        querySelectorAllStatement =
            querySelectorAllStatement.concat(attributeString);
    }
    var index = webIdentifier["index"];
    if (index && index < 0) {
        index = 0;
    }
    querySelectorAllStatement = querySelectorAllStatement.concat("')[".concat(index, "]"));
    return querySelectorAllStatement;
}
var configFetchStartTime;
var jsSdkSessionId = generateUUID();
var jsSdkInitialized = false;
var enterpriseId = "";
function start(_a, traceId) {
    var _b = _a.baseUrl, baseUrl = _b === void 0 ? "" : _b, apiKey = _a.apiKey, _c = _a.devicePlatform, devicePlatform = _c === void 0 ? platform : _c, _d = _a.deviceSubPlatform, deviceSubPlatform = _d === void 0 ? "" : _d, _e = _a.appVersion, appVersion = _e === void 0 ? "ALL" : _e, _f = _a.appVersionCodeValue, appVersionCodeValue = _f === void 0 ? 0 : _f, userState = _a.userState, leapUserId = _a.leapUserId, _g = _a.sdkVersionCode, sdkVersionCode = _g === void 0 ? 22 : _g, sessionId = _a.sessionId, defaultProps = _a.defaultProps, userProps = _a.userProps, _h = _a.isSelfHostingEnabled, isSelfHostingEnabled = _h === void 0 ? 0 : _h;
    return __awaiter(this, void 0, void 0, function () {
        function getObserverUrl(baseUrl) {
            if (baseUrl.includes("https://leap-api-eus")) {
                appObserverBaseUrl = "https://whatfix.com/";
            }
            else if (baseUrl.includes("https://leap-api-eu")) {
                appObserverBaseUrl = "https://eu.whatfix.com/";
            }
            else if (baseUrl.includes("quickolabs.com")) {
                appObserverBaseUrl = "https://uataz.quickolabs.com/";
            }
        }
        function fetchAndSetEnterpriseId() {
            return __awaiter(this, void 0, void 0, function () {
                var enterpriseId, jsMetadataResponse, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            enterpriseId = "";
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, fetchObserverMetadata(traceId)];
                        case 2:
                            jsMetadataResponse = _a.sent();
                            if (jsMetadataResponse !== null) {
                                enterpriseId = jsMetadataResponse === null || jsMetadataResponse === void 0 ? void 0 : jsMetadataResponse.entId;
                                wfAppId = jsMetadataResponse === null || jsMetadataResponse === void 0 ? void 0 : jsMetadataResponse.appId;
                                return [2, enterpriseId];
                            }
                            else {
                                sendJSErrorObserverLog({
                                    logData: {
                                        observerMetadataMap: JSON.stringify(jsMetadataResponse),
                                        apikey: apiKey,
                                    },
                                    message: "[ERROR] error fetching enterprise metadata",
                                    methodName: "fetchObserverMetadata",
                                    className: "init.js",
                                    traceId: traceId
                                });
                            }
                            return [2, enterpriseId];
                        case 3:
                            error_3 = _a.sent();
                            console.error("Error fetching observer metadata", error_3);
                            sendJSErrorObserverLog({
                                logData: {
                                    apikey: apiKey,
                                    error: error_3
                                },
                                message: "[ERROR] error fetching observer metadata",
                                methodName: "fetchObserverMetadata",
                                className: "init.js",
                                traceId: traceId
                            });
                            return [2, enterpriseId];
                        case 4: return [2];
                    }
                });
            });
        }
        function sendStartLog() {
            sendJSObserverLog({
                message: "starting js sdk",
                logData: {
                    jsSdkSessionId: jsSdkSessionId,
                    baseUrl: baseUrl,
                },
                methodName: "start",
                level: 600,
                userState: buildUserStateObjectForObserverLog(sdkStateService.currentUserState),
                traceId: traceId
            });
        }
        function sendObserverEventLevelsToNative() {
            sendMessageToNative({
                command: SENDING_COMMANDS.OBSERVER_EVENT_LEVELS,
                data: __assign({}, observerEventLevels)
            }, traceId);
        }
        function resolveApiConfig() {
            var isEus = apiKey.startsWith("eus:");
            var isEu = apiKey.startsWith("eu:");
            if (isSelfHostingEnabled) {
                if (isEus) {
                    apiKey = apiKey.replace(/^eus:/, "");
                }
                else if (isEu) {
                    apiKey = apiKey.replace(/^eu:/, "");
                }
            }
            else {
                if (isEus) {
                    baseUrl = "https://leap-api-eus.whatfix.com/";
                }
                else if (isEu) {
                    baseUrl = "https://leap-api-eu.whatfix.com/";
                }
            }
            return { baseUrl: baseUrl, apiKey: apiKey };
        }
        function sendErrorLog(error) {
            sendJSErrorObserverLog({
                message: "failed to start js sdk",
                error: error,
                methodName: "start",
                traceId: traceId
            });
        }
        var _j, baseUrl_1, apiKey_1, savedUserState, error_2;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    _k.trys.push([0, 4, , 5]);
                    if (!!jsSdkInitialized) return [3, 2];
                    ensureSessionStarted();
                    sendObserverEventLevelsToNative();
                    isSelfHosted = isSelfHostingEnabled;
                    platform = devicePlatform;
                    subPlatform = deviceSubPlatform;
                    appSessionId = sessionId;
                    appVersionName = appVersion;
                    appVersionCode = appVersionCodeValue;
                    coreSdkVersionCode = sdkVersionCode;
                    _j = resolveApiConfig(), baseUrl_1 = _j.baseUrl, apiKey_1 = _j.apiKey;
                    appApiKey = apiKey_1;
                    configBaseUrl = baseUrl_1;
                    getObserverUrl(configBaseUrl);
                    defaultProperties = __assign({}, defaultProps);
                    sdkStateService.init(userState);
                    sendStartLog();
                    if (sdkStateService.isLoggedIn) {
                        savedUserState = sdkStateService.currentUserState;
                        lastUpdatedEmbedConfigAt = savedUserState.lastUpdatedEmbedConfigAt;
                        lastProfileUpdatedAt = savedUserState.lastProfileUpdatedAt;
                        savedEmbedProject = savedUserState.savedEmbedProject;
                        appLocale = sdkStateService.appLocale;
                        savedUserState.customProps = __assign(__assign({}, savedUserState.customProps), userProps);
                        customProperties = savedUserState.customProps;
                        configFetchStartTime = Date.now();
                        if (!isSelfHosted) {
                            sendObserverLogs({
                                category: OBSERVER_EVENT_CATEGORIES.NETWORK,
                                event_name: OBSERVER_EVENTS.NETWORK.ON_CONFIG_DOWNLOAD_STARTED,
                                properties: {
                                    url: "".concat(baseUrl_1, "odin/api/v1/config/fetch"),
                                },
                                className: "init.js",
                                methodName: "start"
                            }, traceId);
                        }
                    }
                    if (!!enterpriseId) return [3, 2];
                    return [4, fetchAndSetEnterpriseId()];
                case 1:
                    enterpriseId = _k.sent();
                    _k.label = 2;
                case 2: return [4, fetchConfig({
                        userId: sdkStateService.currentUserId,
                    }, traceId)];
                case 3:
                    _k.sent();
                    jsSdkInitialized = true;
                    setUserLoggedIn();
                    flushAllPendingOperations(traceId);
                    return [3, 5];
                case 4:
                    error_2 = _k.sent();
                    console.error("[".concat(traceId, "] start(): failed to start js sdk"), error_2);
                    sendErrorLog(traceId, error_2);
                    return [3, 5];
                case 5: return [2];
            }
        });
    });
}
function fetchObserverMetadata(traceId) {
    return __awaiter(this, void 0, void 0, function () {
        var baseUrl, jsModuleHeaders, moduleResponse, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    baseUrl = getBaseURLUsingAPIKey(configBaseUrl, appApiKey);
                    jsModuleHeaders = {
                        "X-Wf-ApiKey": appApiKey,
                        "Content-Type": "application/json",
                        "Allow-Control-Access-Origin": "*"
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    console.log("fetchObserverMetadata(): Fetching observer metadata from baseUrl {} apikey {} ", baseUrl, appApiKey);
                    return [4, fetch("".concat(baseUrl, "odin/api/v1/js-metadata"), {
                            method: "GET",
                            headers: jsModuleHeaders,
                        })];
                case 2:
                    moduleResponse = _a.sent();
                    if (!moduleResponse.ok)
                        return [2, null];
                    return [4, moduleResponse.json()];
                case 3: return [2, _a.sent()];
                case 4:
                    error_4 = _a.sent();
                    console.error("fetchObserverMetadata(): unable to fetch observer metadata", error_4);
                    sendJSErrorObserverLog({
                        message: "failed to fetch observer metadata",
                        error: error_4,
                        methodName: "fetchObserverMetadata",
                        traceId: traceId
                    });
                    return [3, 5];
                case 5: return [2];
            }
        });
    });
}
function getBaseURLUsingAPIKey(baseUrl, apiKey) {
    var metadataEndpoint = "https://leap-api-in.whatfix.com/";
    if (apiKey.substring(0, 4) === "eus:") {
        metadataEndpoint = "https://leap-api-eus.whatfix.com/";
    }
    else if (apiKey.substring(0, 3) === "eu:") {
        metadataEndpoint = "https://leap-api-eu.whatfix.com/";
    }
    else if (baseUrl.includes("quickolabs.com")) {
        metadataEndpoint = "https://leap-uat-api-mama.quickolabs.com/";
    }
    return metadataEndpoint;
}
function setUserLoggedIn() {
    isUserLoggedIn = true;
}
function resetUserLoggedIn() {
    isUserLoggedIn = false;
}
function getCurrentUserId() {
    return sdkStateService.currentUserId;
}
function ensureSessionStarted() {
    if (!userSessionId) {
        userSessionId = generateUUID();
    }
}
function startNewSession() {
    userSessionId = generateUUID();
}
function getUserSessionId() {
    return userSessionId;
}
function fetchByUserProperties(traceId) {
    sendJSObserverLog({
        message: "starting config fetch by user properties",
        methodName: "fetchByUserProperties",
        logData: __assign(__assign({}, defaultProperties), customProperties),
        level: ObserverLogLevel.INFO,
        traceId: traceId
    });
    configFetchStartTime = Date.now();
    return fetchConfig({
        userId: sdkStateService.currentUserId,
    }, traceId);
}
function fetchByProjectId(id, traceId) {
    sendJSObserverLog({
        message: "starting config fetch by project id",
        methodName: "fetchByProjectId",
        level: ObserverLogLevel.INFO,
        traceId: traceId
    });
    return fetchConfig({
        userId: sdkStateService.currentUserId,
        isEmbed: true,
        projectId: id,
    }, traceId);
}
function fetchByUserId(id, traceId) {
    sendJSObserverLog({
        message: "starting config fetch by user id", methodName: "fetchByUserId", level: ObserverLogLevel.INFO,
        traceId: traceId
    });
    return fetchConfig({
        userId: id,
    }, traceId);
}
function consumeSavedStateAndInit(savedState, traceId) {
    if (!savedState) {
        return;
    }
    sortedProjectArray = savedState.projectArray;
    allProjectStatus = savedState.projectsStatus;
    flowWalkthroughs = savedState.connectedWalkthroughs;
    selectedLanguage = savedState.language || selectedLanguage;
    completedProjectsInFlow = savedState.projectsCompletionStats;
    features = savedState.features;
    metaConfigs = savedState.metaConfigs;
    loggerConfig = savedState.loggerConfig;
    reCalculateCompletedProjectsInFlow(sortedProjectArray, completedProjectsInFlow);
    init(traceId);
}
function storeConfigInSegmentMap(segment, config) {
    return __awaiter(this, void 0, void 0, function () {
        var decompressedData;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Promise.all(config.data.map(function (configData) { return __awaiter(_this, void 0, void 0, function () {
                        var decompressed, decompressedDataWithBaseUrl;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, decompressGzipString(configData)];
                                case 1:
                                    decompressed = _a.sent();
                                    decompressedDataWithBaseUrl = decompressed.replace(/"baseUrl":""/g, "\"baseUrl\":\"".concat(configBaseUrl, "/").concat(appApiKey).concat(selfHostingEndPoints.SELF_HOSTING, "\""));
                                    return [2, JSON.parse(decompressedDataWithBaseUrl)];
                            }
                        });
                    }); }))];
                case 1:
                    decompressedData = _a.sent();
                    segmentConfigMap[segment.segmentId] = {
                        config: {
                            data: decompressedData,
                            configStatus: 200,
                            wfxProfile: null,
                            loggerConfig: null,
                            metaConfig: (config === null || config === void 0 ? void 0 : config.metaConfig) || null,
                            params: (config === null || config === void 0 ? void 0 : config.params) || null,
                            feature: (config === null || config === void 0 ? void 0 : config.feature) || null,
                        },
                        orBlocks: (segment === null || segment === void 0 ? void 0 : segment.orBlocks) || [],
                        lastUpdatedAt: segment === null || segment === void 0 ? void 0 : segment.lastUpdatedAt,
                    };
                    return [2];
            }
        });
    });
}
function fetchAndStoreConfigFromSavedState(savedSegmentConfigMap) {
    var segConfMapAvailableInSavedState = Object.keys(savedSegmentConfigMap || {}).length;
    if (segConfMapAvailableInSavedState) {
        segmentConfigMap = savedSegmentConfigMap;
        return 200;
    }
    return 404;
}
function downloadConfigFromCDN(savedSegmentConfigMap) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var segmentationBaseUrl, response, segmentationList, data, _b;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    segmentationBaseUrl = "".concat(configBaseUrl, "/").concat(appApiKey).concat(selfHostingEndPoints.SELF_HOSTING, "/segmentation.json");
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 6, , 7]);
                    return [4, fetch(segmentationBaseUrl)];
                case 2:
                    response = _c.sent();
                    return [4, response.json()];
                case 3:
                    segmentationList = _c.sent();
                    if (!((_a = segmentationList === null || segmentationList === void 0 ? void 0 : segmentationList.segments) === null || _a === void 0 ? void 0 : _a.length)) return [3, 5];
                    return [4, Promise.all(segmentationList.segments.map(function (segmentObject) { return __awaiter(_this, void 0, void 0, function () {
                            var configUrl, configResponse, segmentSpecificConfig;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        configUrl = "".concat(configBaseUrl, "/").concat(appApiKey).concat(selfHostingEndPoints.SELF_HOSTING).concat(selfHostingEndPoints.SEGMENT_CONFIG_FOLDER).concat(segmentObject === null || segmentObject === void 0 ? void 0 : segmentObject.segmentId, ".json");
                                        return [4, fetch(configUrl)];
                                    case 1:
                                        configResponse = _a.sent();
                                        return [4, configResponse.json()];
                                    case 2:
                                        segmentSpecificConfig = _a.sent();
                                        return [4, storeConfigInSegmentMap(segmentObject, segmentSpecificConfig)];
                                    case 3:
                                        _a.sent();
                                        return [2];
                                }
                            });
                        }); })).catch(function (error) {
                            console.warn(error);
                            return fetchAndStoreConfigFromSavedState(savedSegmentConfigMap);
                        })];
                case 4:
                    data = _c.sent();
                    return [2, 200];
                case 5: return [3, 7];
                case 6:
                    _b = _c.sent();
                    console.warn("Error while fetching the segments and configs, use any configs available in segmentConfigMap in savedState");
                    return [2, fetchAndStoreConfigFromSavedState(savedSegmentConfigMap)];
                case 7: return [2];
            }
        });
    });
}
function findSegmentIds() {
    return Object.keys(segmentConfigMap).filter(function (segmentId) {
        return isSegmentValid(segmentConfigMap[segmentId].orBlocks);
    });
}
function collateConfigsFromValidSegments(validSegmentIds) {
    var collatedConfig;
    validSegmentIds.map(function (segmentId, index) {
        var _a, _b;
        if (index === 0) {
            collatedConfig = (_a = segmentConfigMap[segmentId]) === null || _a === void 0 ? void 0 : _a.config;
        }
        else {
            collatedConfig.data = __spreadArray(__spreadArray([], __read(collatedConfig.data), false), __read((_b = segmentConfigMap[segmentId]) === null || _b === void 0 ? void 0 : _b.config.data), false);
        }
    });
    return collatedConfig;
}
function getSelfHostedConfig() {
    var validSegmentIds = findSegmentIds();
    return collateConfigsFromValidSegments(validSegmentIds);
}
function fetchConfig(_a, traceId) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var userId = _a.userId, _o = _a.isEmbed, isEmbed = _o === void 0 ? false : _o, projectId = _a.projectId;
    return __awaiter(this, void 0, void 0, function () {
        function resetIsShownIsCompletedAndShownOnce(projectsStatus) {
            if (projectsStatus) {
                Object.values(projectsStatus).forEach(function (status) {
                    status.isShown = false;
                    status.shownOnce = false;
                    status.isCompleted = false;
                });
            }
        }
        var status, config, headers, requestBody, dataString, savedUserState, allUserProperties, customPropsDateObjects_1, keys, dateObjects, lastUpdatedAt, wfxProfileBody, response, _p, _q, wfxProfileProperties, error_5;
        return __generator(this, function (_r) {
            switch (_r.label) {
                case 0:
                    status = 200;
                    if (sdkStateService.isLoggedOut) {
                        return [2];
                    }
                    savedUserState = sdkStateService.getUserStateById(userId) || {};
                    if (isNewUserSession()) {
                        resetIsShownIsCompletedAndShownOnce(savedUserState.projectsStatus);
                    }
                    allUserProperties = __assign(__assign({}, defaultProperties), savedUserState.customProps);
                    sendJSObserverLog({
                        message: "starting config fetch",
                        logData: { userId: userId, wfId: savedUserState.wfId, allUserProperties: allUserProperties },
                        methodName: "fetchConfig",
                        level: ObserverLogLevel.DEBUG,
                        userState: buildUserStateObjectForObserverLog(savedUserState),
                        traceId: traceId
                    });
                    if (!isSelfHosted) return [3, 2];
                    return [4, downloadConfigFromCDN(sdkStateService.segmentConfigMap)];
                case 1:
                    status = _r.sent();
                    config = getSelfHostedConfig();
                    if (!config) {
                        return [2];
                    }
                    _r.label = 2;
                case 2:
                    if (!isSelfHosted) {
                        customPropsDateObjects_1 = {};
                        keys = Object.keys(allUserProperties);
                        keys === null || keys === void 0 ? void 0 : keys.forEach(function (key) {
                            if (![
                                "lastUpdateTimeStamp",
                                "firstInstallTimeStamp",
                                "firstSessionTimeStamp",
                            ].includes(key)) {
                                var value = allUserProperties[key];
                                if (typeof value === "string") {
                                    if (isValidDateString(value)) {
                                        var elapsedTime = getElapsedTimeInSeconds(value);
                                        customPropsDateObjects_1[key] = elapsedTime;
                                    }
                                }
                            }
                        });
                        dateObjects = isEmbed
                            ? {}
                            : {
                                lastUpdateTimeStamp: new Date(allUserProperties === null || allUserProperties === void 0 ? void 0 : allUserProperties.lastUpdateTimeStamp).toISOString(),
                                timeElapsedSinceLastUpdate: getElapsedTimeInSeconds(allUserProperties === null || allUserProperties === void 0 ? void 0 : allUserProperties.lastUpdateTimeStamp),
                                firstInstallTimeStamp: new Date(allUserProperties === null || allUserProperties === void 0 ? void 0 : allUserProperties.firstInstallTimeStamp).toISOString(),
                                timeElapsedSinceFirstInstall: getElapsedTimeInSeconds(allUserProperties === null || allUserProperties === void 0 ? void 0 : allUserProperties.firstInstallTimeStamp),
                                firstSessionTimeStamp: getElapsedTimeInSeconds(allUserProperties === null || allUserProperties === void 0 ? void 0 : allUserProperties.firstSessionTimeStamp),
                                timeElapsedSinceFirstSession: getElapsedTimeInSeconds(allUserProperties === null || allUserProperties === void 0 ? void 0 : allUserProperties.firstSessionTimeStamp),
                            };
                        lastUpdatedAt = isEmbed ? savedUserState.lastUpdatedEmbedConfigAt : savedUserState.lastUpdatedConfigAt;
                        headers = {
                            "Content-Type": "application/json",
                            "Allow-Control-Access-Origin": "",
                            "x-jiny-client-id": appApiKey,
                            "x-app-version-name": appVersionName,
                        };
                        headers["x-leap-id"] = userId;
                        if (lastUpdatedAt) {
                            headers["x-jiny-last-updated-at"] = JSON.stringify(lastUpdatedAt);
                        }
                        if (isEmbed) {
                            headers["x-jiny-deployment-ids"] = JSON.stringify([projectId]);
                        }
                        wfxProfileBody = void 0;
                        if (sdkStateService.isUserIdExternal(userId)) {
                            wfxProfileBody = {
                                id: userId,
                                updatedAt: savedUserState.lastProfileUpdatedAt,
                            };
                        }
                        requestBody = __assign(__assign(__assign({ wfx_sdkVersionCode: coreSdkVersionCode, wfxProfile: wfxProfileBody }, allUserProperties), dateObjects), customPropsDateObjects_1);
                        dataString = JSON.stringify(requestBody);
                    }
                    _r.label = 3;
                case 3:
                    _r.trys.push([3, 18, , 19]);
                    if (!!isSelfHosted) return [3, 8];
                    sendJSObserverLog({
                        message: "starting config fetch API call",
                        logData: {
                            requestBody: requestBody,
                            headers: {
                                "x-jiny-last-updated-at": headers["x-jiny-last-updated-at"],
                            }
                        },
                        methodName: "fetchConfig",
                        level: ObserverLogLevel.DEBUG,
                        traceId: traceId
                    });
                    return [4, fetch("".concat(configBaseUrl, "odin/api/v1/config/fetch"), {
                            method: "POST",
                            headers: headers,
                            body: dataString,
                        })];
                case 4:
                    response = _r.sent();
                    status = response.status;
                    if (!(response.status === 200)) return [3, 6];
                    return [4, response.json()];
                case 5:
                    _p = _r.sent();
                    return [3, 7];
                case 6:
                    _p = {};
                    _r.label = 7;
                case 7:
                    config = _p;
                    headers = response.headers;
                    sendJSObserverLog({
                        message: "config fetch ended",
                        logData: {
                            status: status,
                            projectIds: headers.get("x-jiny-project-ids"),
                            configStatus: config === null || config === void 0 ? void 0 : config.configStatus,
                            wfxProfileStatus: (_b = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _b === void 0 ? void 0 : _b.status,
                            wfxProfileUpdatedAt: (_c = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _c === void 0 ? void 0 : _c.updatedAt
                        },
                        methodName: "fetchConfig",
                        traceId: traceId
                    });
                    isEmbed
                        ? (lastUpdatedEmbedConfigAt = JSON.parse(headers.get("x-jiny-last-updated-at")))
                        : (lastUpdatedConfigAt = JSON.parse(headers.get("x-jiny-last-updated-at")));
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.NETWORK,
                        event_name: OBSERVER_EVENTS.NETWORK.ON_CONFIG_DOWNLOAD_COMPLETED,
                        properties: {
                            status_code: response.status,
                            response_message: getStatusMessage(response.status),
                            time_taken: Date.now() - configFetchStartTime,
                        },
                        className: "init.js",
                        methodName: "fetchConfig",
                    }, traceId);
                    _r.label = 8;
                case 8:
                    _q = status;
                    switch (_q) {
                        case 200: return [3, 9];
                        case 408: return [3, 13];
                        case 504: return [3, 13];
                        case 401: return [3, 14];
                        case 404: return [3, 15];
                        case 500: return [3, 16];
                    }
                    return [3, 17];
                case 9:
                    if (!(config.configStatus === 200)) return [3, 11];
                    console.info("[".concat(traceId, "] Serving config from API"));
                    features = config.feature || {};
                    metaConfigs = config.metaConfig || {};
                    loggerConfig = config.loggerConfig || {};
                    if (((_d = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _d === void 0 ? void 0 : _d.status) === 304) {
                        console.info("[".concat(traceId, "] Service profile from cache"));
                    }
                    return [4, organizeProjectArray(config.data, isEmbed, config.wfxProfile, savedUserState.projectsStatus || {}, savedUserState.projectsCompletionStats || {}, traceId)];
                case 10:
                    _r.sent();
                    saveTheLatestStateChange(traceId);
                    return [3, 12];
                case 11:
                    if (config.configStatus === 304) {
                        console.info("[".concat(traceId, "] Service config from cache"));
                        if (((_e = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _e === void 0 ? void 0 : _e.status) === 200 && ((_f = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _f === void 0 ? void 0 : _f.properties)) {
                            console.info("[".concat(traceId, "] Service profile from API"));
                            sendJSObserverLog({
                                message: "using user profile from API response",
                                methodName: "fetchConfig",
                                traceId: traceId
                            });
                            wfxProfileProperties = void 0;
                            if (isNonEmptyObject((_h = (_g = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _g === void 0 ? void 0 : _g.properties) === null || _h === void 0 ? void 0 : _h.allProjectStatus)) {
                                wfxProfileProperties = (_j = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _j === void 0 ? void 0 : _j.properties;
                            }
                            else {
                                wfxProfileProperties = convertOldWfxData(config === null || config === void 0 ? void 0 : config.data, savedUserState.projectArray || [], savedUserState.projectsStatus || {}, savedUserState.projectsCompletionStats || {}, (_k = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _k === void 0 ? void 0 : _k.properties);
                            }
                            resetIsShownIsCompletedAndShownOnce(wfxProfileProperties.allProjectStatus);
                            sortedProjectArray = savedUserState.projectArray;
                            allProjectStatus = wfxProfileProperties === null || wfxProfileProperties === void 0 ? void 0 : wfxProfileProperties.allProjectStatus;
                            completedProjectsInFlow = wfxProfileProperties === null || wfxProfileProperties === void 0 ? void 0 : wfxProfileProperties.completedFlowProjects;
                            selectedLanguage = (wfxProfileProperties === null || wfxProfileProperties === void 0 ? void 0 : wfxProfileProperties.selectedLanguage) || savedUserState.language || appLocale;
                            flowWalkthroughs = savedUserState.connectedWalkthroughs || {};
                            features = savedUserState.features;
                            metaConfigs = savedUserState.metaConfigs;
                            loggerConfig = config.loggerConfig || savedUserState.loggerConfig;
                            saveTheLatestStateChange(traceId);
                            init(traceId);
                        }
                        else {
                            sendJSObserverLog({
                                message: "using user profile from saved state",
                                methodName: "fetchConfig",
                                traceId: traceId
                            });
                            if (((_l = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _l === void 0 ? void 0 : _l.status) === 304) {
                                console.info("[".concat(traceId, "] Serving profile from cache"));
                            }
                            else {
                                console.info("[".concat(traceId, "] No config returned from API. status- ").concat((_m = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _m === void 0 ? void 0 : _m.status));
                            }
                            loggerConfig = config.loggerConfig || savedUserState.loggerConfig;
                            consumeSavedStateAndInit(savedUserState, traceId);
                        }
                    }
                    else if (config.configStatus === 404) {
                        console.error("[".concat(traceId, "] unable to fetch config from API. status: 404"));
                        resetAndRemoveState(traceId);
                    }
                    _r.label = 12;
                case 12: return [3, 17];
                case 13:
                    {
                        consumeSavedStateAndInit(savedUserState, traceId);
                        return [3, 17];
                    }
                    // removed by dead control flow
{}
                case 14:
                    {
                        console.error("UNAUTHORIZED_401");
                        resetAndRemoveState(traceId);
                        return [3, 17];
                    }
                    // removed by dead control flow
{}
                case 15:
                    {
                        console.error("UNABLE_TO_FETCH_CONFIG_THROWING_404");
                        resetAndRemoveState(traceId);
                        return [3, 17];
                    }
                    // removed by dead control flow
{}
                case 16:
                    {
                        console.error("UNABLE_TO_FETCH_CONFIG_THROWING_500");
                        return [3, 17];
                    }
                    // removed by dead control flow
{}
                case 17: return [3, 19];
                case 18:
                    error_5 = _r.sent();
                    console.error("fetchConfig(): failed to fetch config", error_5);
                    sendJSErrorObserverLog({
                        message: "config fetch failed",
                        error: error_5,
                        methodName: "fetchConfig",
                        traceId: traceId
                    });
                    if (error_5 instanceof DOMException && error_5.name === "AbortError") {
                        console.error("Abort API call: Request aborted due to new user properties call");
                    }
                    else {
                        consumeSavedStateAndInit(savedUserState, traceId);
                        console.error(error_5);
                    }
                    return [3, 19];
                case 19:
                    sendJSObserverLog({
                        message: "config fetch ended", methodName: "fetchConfig", userState: buildUserStateObjectForJSLog(),
                        traceId: traceId
                    });
                    return [2];
            }
        });
    });
}
function isNewUserSession() {
    return !isUserLoggedIn;
}
function updateUserProfile(traceId) {
    try {
        if (inPreviewMode || isSelfHosted) {
            return;
        }
        if (sdkStateService.isCurrentUserInternal || sdkStateService.isLoggedOut) {
            return;
        }
        var now = new Date();
        lastProfileUpdatedAt = now.toISOString();
        saveTheLatestStateChange(traceId);
        var userId = sdkStateService.currentUserId;
        var savedUserState = sdkStateService.currentUserState;
        if (isEmptyObject(savedUserState.projectsStatus)) {
            return;
        }
        var requestBody = isNonEmptyObject(savedUserState.projectsStatus) ?
            {
                id: userId,
                properties: {
                    allProjectStatus: savedUserState.projectsStatus,
                    completedFlowProjects: savedUserState.projectsCompletionStats,
                    selectedLanguage: savedUserState.language,
                },
                updatedAt: lastProfileUpdatedAt,
            } : {};
        sendJSObserverLog({
            message: "enqueueing profile update",
            logData: { requestBody: requestBody },
            level: ObserverLogLevel.DEBUG,
            methodName: "updateUserProfile",
            traceId: traceId
        });
        userProfileService.enqueueUpdate(userId, traceId);
    }
    catch (error) {
        console.error("updateUserProfile(): unable to enqueue profile update", error);
        sendJSErrorObserverLog({
            message: "unable to enqueue profile update",
            error: error,
            level: ObserverLogLevel.DEBUG,
            methodName: "updateUserProfile",
            traceId: traceId
        });
    }
}
function enterPreviewMode(data, traceId) {
    LiveFeatures = features;
    LiveMetaConfigs = metaConfigs;
    features = data.feature;
    metaConfigs = data.metaConfig;
    organizeProjectArray(data.configs, undefined, undefined, undefined, undefined, traceId);
}
function organizeProjectArray(configData, isEmbed, wfxProfile, savedAllProjectStatus, savedCompletedProjectsInFlow, traceId) {
    if (isEmbed === void 0) { isEmbed = false; }
    var organizedArray = sortAndOrganizeProjects(configData, isEmbed, savedAllProjectStatus, savedCompletedProjectsInFlow);
    if (isEmbed) {
        embedProject = Object.values(organizedArray.flowsWalkthroughProjects);
        flowWalkthroughs = __assign(__assign({}, flowWalkthroughs), organizedArray.flowsWalkthroughProjects);
        allProjectStatus = __assign(__assign({}, allProjectStatus), organizedArray.projectStatus);
    }
    else {
        sortedProjectArray = (organizedArray === null || organizedArray === void 0 ? void 0 : organizedArray.sortedProjects) || [];
        flowWalkthroughs = organizedArray.flowsWalkthroughProjects;
        allProjectStatus = organizedArray.projectStatus;
        completedProjectsInFlow = organizedArray.initialCompletedProjectsInFlow;
        if (wfxProfile && wfxProfile.properties) {
            var wfxProfileProperties = void 0;
            if (wfxProfile.properties.allProjectStatus) {
                wfxProfileProperties = wfxProfile.properties;
            }
            else {
                wfxProfileProperties = convertOldWfxData(configData, organizedArray.sortedProjects, organizedArray.projectStatus, organizedArray.initialCompletedProjectsInFlow, wfxProfile.properties);
            }
            var wfxP = JSON.stringify(wfxProfileProperties);
            var wfxProf_1 = JSON.parse(wfxP
                .replace(/"isShown":true/g, '"isShown":false')
                .replace(/"shownOnce":true/g, '"shownOnce":false')
                .replace(/"isCompleted":true/g, '"isCompleted":false'));
            selectedLanguage = (wfxProf_1 === null || wfxProf_1 === void 0 ? void 0 : wfxProf_1.selectedLanguage) || selectedLanguage || appLocale;
            Object.keys((wfxProf_1 === null || wfxProf_1 === void 0 ? void 0 : wfxProf_1.allProjectStatus) || {}).forEach(function (key) {
                var _a;
                allProjectStatus[key] = __assign(__assign({}, wfxProf_1 === null || wfxProf_1 === void 0 ? void 0 : wfxProf_1.allProjectStatus[key]), { initialTerminationStatus: ((_a = allProjectStatus[key]) === null || _a === void 0 ? void 0 : _a.initialTerminationStatus) ? allProjectStatus[key].initialTerminationStatus : wfxProf_1.allProjectStatus[key].initialTerminationStatus });
                if (wfxProf_1 === null || wfxProf_1 === void 0 ? void 0 : wfxProf_1.completedFlowProjects[key]) {
                    completedProjectsInFlow[key] = wfxProf_1 === null || wfxProf_1 === void 0 ? void 0 : wfxProf_1.completedFlowProjects[key];
                }
            });
        }
    }
    saveTheLatestStateChange(traceId);
    saveConfigAndDownloadBulkAssets(configData, traceId);
    init(traceId);
}
function receiveDataFromNativeLayer(message) {
    var _this = this;
    var _a, _b, _c, _d, _e, _f;
    var traceId = generateUUID();
    try {
        if (!message)
            return;
        ensureSessionStarted();
        logCommandFromNativeLayer(message, traceId);
        switch (message.commandName) {
            case RECEIVING_COMMANDS.START: {
                executor.addTask(function () { return start(message.data, traceId); });
                break;
            }
            case RECEIVING_COMMANDS.SCREEN_HIERARCHY: {
                (metaConfigs === null || metaConfigs === void 0 ? void 0 : metaConfigs.observeHierarchySize) && calculateAvgHierarchySize(message.data.screenHierarchy, traceId);
                receiveScreenHierarchy(message.data.screenHierarchy, undefined, undefined, traceId);
                break;
            }
            case RECEIVING_COMMANDS.ASSIST_INTERACTION: {
                updateAssistInteraction(message.data, traceId);
                break;
            }
            case RECEIVING_COMMANDS.WEB_IDENTIFIERS: {
                receiveWebIdentifiers(message.data.identifiers, traceId);
                break;
            }
            case RECEIVING_COMMANDS.LANGUAGE_SELECTED: {
                var previousLanguage = selectedLanguage;
                setCurrentSelectedLanguage(message.data.language);
                if (currentStaticFlow.id !== undefined &&
                    currentStaticFlow.stepsStatus.length !== 0) {
                    sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_LANGUAGE_CHANGE, {
                        previousLanguage: previousLanguage,
                    }, traceId);
                    (_a = currentStaticFlow === null || currentStaticFlow === void 0 ? void 0 : currentStaticFlow.stepsStatus) === null || _a === void 0 ? void 0 : _a.splice(-1);
                    resetActiveStep();
                    saveTheLatestStateChange(traceId);
                }
                break;
            }
            case RECEIVING_COMMANDS.ACTIVITY_PAUSE: {
                resetActiveStep();
                clearInterval(timer);
                if (currentlyRunningFlow.id) {
                    flowShown = false;
                }
                if (activeProject.id &&
                    (currentStaticFlow.id === undefined ||
                        currentlyRunningFlow.id === undefined))
                    resetActiveProject();
                timer = undefined;
                cachedFinderObserverEvents = {
                    on_identifier_matched: [],
                    on_identifier_not_matched: [],
                    on_project_detected: [],
                    on_no_project_detected: [],
                    on_step_detected: [],
                    on_no_step_detected: [],
                };
                break;
            }
            case RECEIVING_COMMANDS.ACTIVITY_RESUME: {
                currentMatchedWebIdentifiers = {};
                if (timer === undefined)
                    init();
                break;
            }
            case RECEIVING_COMMANDS.ICON_STOP: {
                sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_STOP, undefined, traceId);
                clearActiveProject();
                break;
            }
            case RECEIVING_COMMANDS.ICON_CLICK: {
                handleIconAction(message.data.uniqueId);
                break;
            }
            case RECEIVING_COMMANDS.ASSIST_VISIBLE: {
                updateProjectStatus({ id: activeProject.id, isShown: true }, traceId);
                updateViewStatusForTheProject("nSession", traceId);
                if ((_b = ["STATIC_FLOW_CHECKLIST", "STATIC_FLOW_MENU"]) === null || _b === void 0 ? void 0 : _b.includes((_c = message === null || message === void 0 ? void 0 : message.data) === null || _c === void 0 ? void 0 : _c.projectType)) {
                    resetActiveStep();
                    resetCurrentStaticFlow();
                }
                if ((currentStaticFlow === null || currentStaticFlow === void 0 ? void 0 : currentStaticFlow.status) === "START") {
                    sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_START, {
                        elementName: (_d = activeProject === null || activeProject === void 0 ? void 0 : activeProject.projectParameters) === null || _d === void 0 ? void 0 : _d.projectName,
                    }, traceId);
                    currentStaticFlow.autoStart = false;
                }
                if (currentStaticFlow.autoStart) {
                    sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_START, {
                        elementName: (_e = activeProject === null || activeProject === void 0 ? void 0 : activeProject.projectParameters) === null || _e === void 0 ? void 0 : _e.projectName,
                    }, traceId);
                    sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_OPT_IN, {
                        elementName: (_f = activeProject === null || activeProject === void 0 ? void 0 : activeProject.projectParameters) === null || _f === void 0 ? void 0 : _f.projectName,
                    }, traceId);
                    currentStaticFlow.autoStart = false;
                }
                if (currentlyRunningFlow.id &&
                    currentStaticFlow.stepsStatus.length === 0) {
                    sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_MENU_START, undefined, traceId);
                }
                sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_SEEN, undefined, traceId);
                break;
            }
            case RECEIVING_COMMANDS.EMBED_PROJECT: {
                executor.addTask(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (isSelfHosted) {
                                    return [2];
                                }
                                clearEveryThing(true, traceId);
                                return [4, fetchByProjectId(message.data.projectId, traceId)];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); });
                break;
            }
            case RECEIVING_COMMANDS.SET_USER_ID: {
                executor.addTask(function () { return login_user(message.data.leapUserId, traceId); });
                break;
            }
            case RECEIVING_COMMANDS.LOGOUT: {
                executor.addTask(function () { return logout_user(traceId); });
                break;
            }
            case RECEIVING_COMMANDS.STOP_PREVIEW: {
                inPreviewMode = false;
                sendMessageToNative({
                    command: SENDING_COMMANDS.NO_CONTEXT_FOUND,
                }, traceId);
                clearEveryThing(true, traceId);
                features = LiveFeatures;
                metaConfigs = LiveMetaConfigs;
                break;
            }
            case RECEIVING_COMMANDS.DISABLE_PANEL_EVENT: {
                currentMatchedWebIdentifiers = {};
                handlePanelEvent(message.data, traceId);
                break;
            }
            case RECEIVING_COMMANDS.PREVIEW_CONFIG: {
                inPreviewMode = true;
                clearEveryThing(true, traceId);
                enterPreviewMode(JSON.parse(message.data.previewConfig), traceId);
                break;
            }
            case RECEIVING_COMMANDS.USER_PROPERTIES: {
                executor.addTask(function () { return __awaiter(_this, void 0, void 0, function () {
                    var userProps;
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                userProps = (_a = message === null || message === void 0 ? void 0 : message.data) === null || _a === void 0 ? void 0 : _a.userProps;
                                customProperties = __assign(__assign({}, customProperties), userProps);
                                defaultProperties = __assign({}, (_b = message === null || message === void 0 ? void 0 : message.data) === null || _b === void 0 ? void 0 : _b.defaultProps);
                                saveTheLatestProps(traceId);
                                saveTheLatestStateChange(traceId);
                                clearEveryThing(true, traceId);
                                return [4, fetchByUserProperties(traceId)];
                            case 1:
                                _c.sent();
                                return [2];
                        }
                    });
                }); });
                break;
            }
            case RECEIVING_COMMANDS.APP_LOCALE: {
                setCurrentSelectedLanguage(message.data.appLocale);
                saveTheLatestProps(traceId);
                saveTheLatestStateChange(traceId);
                break;
            }
            case RECEIVING_COMMANDS.ACTION_TAKEN: {
                break;
            }
            case RECEIVING_COMMANDS.ON_NETWORK_SWITCH: {
                break;
            }
            default: {
                console.log("No command found", JSON.stringify(message));
                break;
            }
        }
    }
    catch (error) {
        console.error("receiveDataFromNativeLayer(): unable to execute command from native", error);
        sendJSErrorObserverLog({
            message: "failed to execute command from native layer",
            logData: { message: message },
            error: error,
            methodName: "receiveDataFromNativeLayer",
            traceId: traceId
        });
    }
    function logCommandFromNativeLayer(message, traceId) {
        var _a;
        try {
            if (shouldLogCommand(message)) {
                console.log("command to js: " + (message === null || message === void 0 ? void 0 : message.commandName));
                var messageData = shouldLogData(message) ? (_a = message.data) !== null && _a !== void 0 ? _a : {} : { included: false };
                sendJSObserverLog({
                    message: "command to js [".concat(message === null || message === void 0 ? void 0 : message.commandName, "]"),
                    logData: { messageData: messageData },
                    methodName: "receiveDataFromNativeLayer",
                    traceId: traceId
                });
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    function shouldLogCommand(message) {
        return (message === null || message === void 0 ? void 0 : message.commandName) && ![
            RECEIVING_COMMANDS.SCREEN_HIERARCHY,
            RECEIVING_COMMANDS.WEB_IDENTIFIERS,
            RECEIVING_COMMANDS.ACTIVITY_PAUSE,
            RECEIVING_COMMANDS.ACTIVITY_RESUME,
        ].includes(message.commandName);
    }
    function shouldLogData(message) {
        return (message === null || message === void 0 ? void 0 : message.commandName) && ![
            RECEIVING_COMMANDS.START,
            RECEIVING_COMMANDS.SCREEN_HIERARCHY,
            RECEIVING_COMMANDS.WEB_IDENTIFIERS,
            RECEIVING_COMMANDS.ACTIVITY_PAUSE,
            RECEIVING_COMMANDS.ACTIVITY_RESUME,
            RECEIVING_COMMANDS.PREVIEW_CONFIG,
            RECEIVING_COMMANDS.STOP_PREVIEW
        ].includes(message.commandName);
    }
}
function login_user(userId, traceId) {
    return __awaiter(this, void 0, void 0, function () {
        var currentUserId, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    currentUserId = getCurrentUserId();
                    if (isSelfHosted) {
                        return [2];
                    }
                    sendMessageToNative({
                        command: SENDING_COMMANDS.NO_CONTEXT_FOUND,
                        data: {
                            leapUserId: currentUserId,
                        },
                    }, traceId);
                    ensureSessionStarted();
                    if (!(sdkStateService.isLoggedIn && userId !== currentUserId)) return [3, 2];
                    clearEveryThing(true, traceId);
                    return [4, logout_user(traceId)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    sdkStateService.setUserId(userId, traceId);
                    return [4, fetchByUserId(userId, traceId)];
                case 3:
                    _a.sent();
                    setUserLoggedIn();
                    return [3, 5];
                case 4:
                    error_6 = _a.sent();
                    console.error("login_user(): failed to login user", error_6);
                    sendJSErrorObserverLog({
                        message: "failed to login user",
                        error: error_6,
                        methodName: "login_user",
                        traceId: traceId
                    });
                    return [3, 5];
                case 5: return [2];
            }
        });
    });
}
function logout_user(traceId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                if (isSelfHosted) {
                    return [2];
                }
                if (sdkStateService.isLoggedOut) {
                    return [2];
                }
                sendMessageToNative({
                    command: SENDING_COMMANDS.NO_CONTEXT_FOUND,
                    data: {
                        leapUserId: getCurrentUserId(),
                    },
                }, traceId);
                clearEveryThing(true, traceId);
                saveTheLatestStateChange(traceId);
                updateUserProfile(traceId);
                cleanUpGlobalState(traceId);
                sdkStateService.logout(traceId);
                startNewSession();
            }
            catch (error) {
                console.error("logout_user(): failed to logout user", error);
                sendJSErrorObserverLog({
                    message: "failed to logout user",
                    error: error,
                    methodName: "logout_user",
                    traceId: traceId
                });
            }
            return [2];
        });
    });
}
function cleanUpGlobalState(traceId) {
    customProperties = {};
    saveTheLatestProps(traceId);
    resetGlobalUserState();
}
var JS_OBSERVER_LOG_TYPE = "MOBILE_JS_LOG";
var LOG_API_REQUEST_NULL_STRING_VALUE = "[NULL]";
var observerLogService = {
    init: function (maxBatchSize, batchWaitTime) {
        if (maxBatchSize === void 0) { maxBatchSize = 20; }
        if (batchWaitTime === void 0) { batchWaitTime = toMilliSeconds(10); }
        this.maxBatchSize = maxBatchSize;
        this.batchWaitTime = batchWaitTime;
        this.logQueue = [];
        this.isUploading = false;
        this.logVersion = "1";
        this.batchTimer = null;
        this.maxQueueSize = 2000;
    },
    queueLogRequests: function (logRequests, traceId) {
        var _a;
        var _this = this;
        if (logRequests === void 0) { logRequests = []; }
        if (isSelfHosted)
            return;
        if (!logRequests.length)
            return;
        var availableSpace = this.maxQueueSize - this.logQueue.length;
        if (availableSpace <= 0) {
            return;
        }
        var logsToAdd = logRequests.slice(0, availableSpace);
        (_a = this.logQueue).push.apply(_a, __spreadArray([], __read(logsToAdd), false));
        if (!this.batchTimer) {
            this.batchTimer = setTimeout(function () {
                _this.batchTimer = null;
                _this.uploadNextBatch(traceId);
            }, this.batchWaitTime);
        }
    },
    uploadNextBatch: function (traceId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, batch, error_7;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.isUploading;
                        if (_a) return [3, 2];
                        return [4, this.cannotMakeApiCall()];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        if (_a || !this.logQueue.length) {
                            return [2];
                        }
                        this.isUploading = true;
                        batch = this.logQueue.splice(0, this.maxBatchSize);
                        this.addUploadMetaToLogRequests(batch);
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 5, 6, 7]);
                        return [4, this.uploadLogs(batch)];
                    case 4:
                        _c.sent();
                        return [3, 7];
                    case 5:
                        error_7 = _c.sent();
                        console.error("[".concat(traceId, "]Error uploading logs"), error_7);
                        (_b = this.logQueue).unshift.apply(_b, __spreadArray([], __read(batch), false));
                        return [3, 7];
                    case 6:
                        this.isUploading = false;
                        return [7];
                    case 7: return [2];
                }
            });
        });
    },
    addUploadMetaToLogRequests: function (logRequestBatch) {
        var e_11, _a;
        var _b;
        var nowISOString = new Date().toISOString();
        try {
            for (var logRequestBatch_1 = __values(logRequestBatch), logRequestBatch_1_1 = logRequestBatch_1.next(); !logRequestBatch_1_1.done; logRequestBatch_1_1 = logRequestBatch_1.next()) {
                var log = logRequestBatch_1_1.value;
                var isFirstAttempt = !log.firstUploadAttemptedAt;
                if (isFirstAttempt) {
                    log.firstUploadAttemptedAt = nowISOString;
                }
                else {
                    log.lastUploadAttemptedAt = nowISOString;
                }
                log.uploadAttemptCount = ((_b = log.uploadAttemptCount) !== null && _b !== void 0 ? _b : 0) + 1;
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (logRequestBatch_1_1 && !logRequestBatch_1_1.done && (_a = logRequestBatch_1.return)) _a.call(logRequestBatch_1);
            }
            finally { if (e_11) throw e_11.error; }
        }
    },
    uploadLogs: function (logRequests) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, requestBody, requestBodyString, response, responseText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!logRequests || logRequests.length === 0) {
                            return [2];
                        }
                        url = this.getLogsUrl();
                        headers = this.buildHeaders();
                        return [4, this.isDeviceOffline()];
                    case 1:
                        if (_a.sent()) {
                            throw new Error("No network connectivity");
                        }
                        requestBody = logRequests.map(this.generateLogBody);
                        requestBodyString = JSON.stringify(requestBody);
                        return [4, fetch(url, {
                                method: "POST",
                                headers: headers,
                                body: requestBodyString,
                            })];
                    case 2:
                        response = _a.sent();
                        if (!!response.ok) return [3, 4];
                        return [4, response.text().catch(function () { return "Could not read response body"; })];
                    case 3:
                        responseText = _a.sent();
                        throw new Error("Server responded with ".concat(response.status, ": ").concat(responseText));
                    case 4: return [2, response];
                }
            });
        });
    },
    getLogsUrl: function () {
        return "".concat(appObserverBaseUrl, "service/log/collect/").concat(enterpriseId);
    },
    buildHeaders: function () {
        return {
            "Content-Type": "application/json"
        };
    },
    canMakeApiCall: function () {
        return __awaiter(this, void 0, void 0, function () {
            var userId, hasConfigBaseUrl, hasAppApiKey, hasAppVersionName, hasUserId, hasSessionId, hasEnterpriseId, online, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = getCurrentUserId();
                        hasConfigBaseUrl = typeof configBaseUrl === 'string' && configBaseUrl.trim() !== '';
                        hasAppApiKey = typeof appApiKey === 'string' && appApiKey.trim() !== '';
                        hasAppVersionName = typeof appVersionName === 'string' && appVersionName.trim() !== '';
                        hasUserId = typeof userId === 'string' && userId.trim() !== '';
                        hasSessionId = typeof appSessionId === 'string' && appSessionId.trim() !== '';
                        hasEnterpriseId = typeof enterpriseId === 'string' && enterpriseId.trim() !== '';
                        return [4, this.isDeviceOnline()];
                    case 1:
                        online = _a.sent();
                        status = hasConfigBaseUrl && hasAppApiKey && hasAppVersionName && hasUserId && hasSessionId && online && hasEnterpriseId;
                        console.warn("ObserverLogService.canMakeApiCall(): Sync status: ", status);
                        return [2, status];
                }
            });
        });
    },
    isDeviceOnline: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, networkService.isReallyOnline()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    },
    cannotMakeApiCall: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.canMakeApiCall()];
                    case 1: return [2, !(_a.sent())];
                }
            });
        });
    },
    isDeviceOffline: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.isDeviceOnline()];
                    case 1: return [2, !(_a.sent())];
                }
            });
        });
    },
    wait: function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
            });
        });
    },
    flushAll: function (traceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.uploadNextBatch(traceId)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    },
    generateLogBody: function (_a) {
        var _b = _a === void 0 ? {} : _a, message = _b.message, _c = _b.logData, logData = _c === void 0 ? {} : _c, _d = _b.time, time = _d === void 0 ? new Date() : _d, userId = _b.userId, userSessionId = _b.userSessionId, className = _b.className, methodName = _b.methodName, _e = _b.level, level = _e === void 0 ? ObserverLogLevel.INFO : _e, userState = _b.userState, firstUploadAttemptedAt = _b.firstUploadAttemptedAt, lastUploadAttemptedAt = _b.lastUploadAttemptedAt, _f = _b.uploadAttemptCount, uploadAttemptCount = _f === void 0 ? 1 : _f, traceId = _b.traceId;
        var now = new Date();
        message = message || LOG_API_REQUEST_NULL_STRING_VALUE;
        logData = logData || {};
        time = time || now;
        userId = userId || getCurrentUserId() || LOG_API_REQUEST_NULL_STRING_VALUE;
        userSessionId = userSessionId || LOG_API_REQUEST_NULL_STRING_VALUE;
        className = className || LOG_API_REQUEST_NULL_STRING_VALUE;
        methodName = methodName || LOG_API_REQUEST_NULL_STRING_VALUE;
        level = level || ObserverLogLevel.INFO;
        userState = userState || { included: false };
        var nonNullSessionId = appSessionId || LOG_API_REQUEST_NULL_STRING_VALUE;
        var nonNullAppVersionName = appVersionName || LOG_API_REQUEST_NULL_STRING_VALUE;
        var nonNullJsVersionNumber = jsVersionNumber || 0;
        traceId = traceId || LOG_API_REQUEST_NULL_STRING_VALUE;
        var appId = wfAppId || LOG_API_REQUEST_NULL_STRING_VALUE;
        var uploadMeta = {
            uploadMeta: {
                firstAt: firstUploadAttemptedAt || now,
                lastAt: lastUploadAttemptedAt || LOG_API_REQUEST_NULL_STRING_VALUE,
                count: uploadAttemptCount || 1,
            }
        };
        var finalLogData;
        try {
            finalLogData = typeof logData === 'string' || logData instanceof String
                ? logData
                : JSON.stringify(logData);
        }
        catch (e) {
            finalLogData = '"[Unserializable logData]"';
        }
        return {
            user: userId,
            platform: "MOBILE",
            level: level,
            module: "MOBILE_SDK_LOGS",
            message: message,
            ent_id: enterpriseId,
            org_id: enterpriseId,
            unq_id: nonNullSessionId,
            on_id: "".concat(jsVersionNumber),
            message_id: generateUUID(),
            class_name: className,
            method_name: methodName,
            log_data: {
                "string.user_session_id": userSessionId,
                "string.log_data": finalLogData,
                "string.leap_id": userId,
                "string.app_version": nonNullAppVersionName,
                "string.log_type": JS_OBSERVER_LOG_TYPE,
                "string.user_state": JSON.stringify(userState),
                "string.trace_id": traceId,
                "string.time": time.toISOString(),
                "string.upload_meta": JSON.stringify(uploadMeta),
                "int.js_version_number": nonNullJsVersionNumber,
                "string.app_id": appId,
            }
        };
    },
    sendObserverLog: function (message, logData, time, className, methodName, level, userState, traceId) {
        var _a;
        if (logData === void 0) { logData = {}; }
        if (time === void 0) { time = new Date(); }
        if (level === void 0) { level = ObserverLogLevel.INFO; }
        var userId = getCurrentUserId();
        try {
            var shouldSendLogs = forceSendJsObserverLogs || ((_a = loggerConfig === null || loggerConfig === void 0 ? void 0 : loggerConfig.log_types) === null || _a === void 0 ? void 0 : _a.includes(level));
            if (shouldSendLogs) {
                var logRequest = {
                    message: message,
                    logData: logData,
                    time: time,
                    userId: userId,
                    userSessionId: getUserSessionId(),
                    className: className,
                    methodName: methodName,
                    level: level,
                    userState: userState,
                    traceId: traceId
                };
                this.queueLogRequests([logRequest], traceId);
            }
        }
        catch (error) {
            console.error("sendObserverLog(): error while queuing log requests.", error);
        }
    }
};
var ObserverLogLevel = {
    ALL: 100,
    DEBUG: 200,
    WARNING: 300,
    PERFORMANCE: 400,
    ERROR: 500,
    INFO: 600,
    NFR: 700
};
function getErrorLogObjectFromError(error) {
    return {
        name: (error === null || error === void 0 ? void 0 : error.name) || "Error",
        message: (error === null || error === void 0 ? void 0 : error.message) || "No message",
        stack: (error === null || error === void 0 ? void 0 : error.stack) || "No stack trace available"
    };
}
function toMilliSeconds(seconds) {
    return seconds * 1000;
}
observerLogService.init();
var Queue = (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.isEmpty() ? null : this.items.shift();
    };
    Queue.prototype.peek = function () {
        return this.isEmpty() ? null : this.items[0];
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Queue.prototype.size = function () {
        return this.items.length;
    };
    Queue.prototype.print = function () {
    };
    return Queue;
}());
var userProfileService = {
    init: function () {
        this.userIds = new Queue();
        this.inProgress = new Set();
    },
    enqueueUpdate: function (userId, traceId) {
        this.userIds.enqueue({ userId: userId, traceId: traceId });
        this.startUserUpdateIfNeeded(userId, traceId);
    },
    startUserUpdateIfNeeded: function (userId) {
        if (!this.inProgress.has(userId)) {
            var queueItem = this.userIds.dequeue(userId);
            if (!sdkStateService.isStateSyncedForUserId(userId)) {
                this.startUserUpdate(userId, queueItem.traceId);
            }
        }
    },
    startUserUpdate: function (userId, traceId) {
        return __awaiter(this, void 0, void 0, function () {
            var savedUserState, requestBody, success, latestUserState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.inProgress.add(userId);
                        return [4, this.cannotMakeApiCall()];
                    case 1:
                        if (_a.sent()) {
                            this.inProgress.delete(userId);
                            return [2];
                        }
                        savedUserState = sdkStateService.getUserStateById(userId);
                        if (isEmptyObject(savedUserState === null || savedUserState === void 0 ? void 0 : savedUserState.projectsStatus)) {
                            this.inProgress.delete(userId);
                            return [2];
                        }
                        if (!(savedUserState === null || savedUserState === void 0 ? void 0 : savedUserState.lastProfileUpdatedAt)) {
                            savedUserState.lastProfileUpdatedAt = new Date();
                            sdkStateService.persistState(traceId);
                        }
                        requestBody = isNonEmptyObject(savedUserState.projectsStatus) ?
                            {
                                id: userId,
                                properties: {
                                    allProjectStatus: savedUserState.projectsStatus,
                                    completedFlowProjects: savedUserState.projectsCompletionStats,
                                    selectedLanguage: savedUserState.language,
                                },
                                updatedAt: savedUserState.lastProfileUpdatedAt
                            } : {};
                        return [4, this.tryUpload(userId, requestBody, traceId)];
                    case 2:
                        success = _a.sent();
                        if (success) {
                            latestUserState = sdkStateService.getUserStateById(userId);
                            latestUserState.lastProfileSyncedAt = savedUserState.lastProfileUpdatedAt;
                            sdkStateService.persistState(traceId);
                            this.inProgress.delete(userId);
                            this.startUserUpdateIfNeeded(userId);
                            return [2];
                        }
                        this.inProgress.delete(userId);
                        return [2];
                }
            });
        });
    },
    canMakeApiCall: function () {
        return __awaiter(this, void 0, void 0, function () {
            var hasBaseUrl, hasAppApiKey, hasAppVersionName, online, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hasBaseUrl = typeof configBaseUrl === 'string' && configBaseUrl.trim() !== '';
                        hasAppApiKey = typeof appApiKey === 'string' && appApiKey.trim() !== '';
                        hasAppVersionName = typeof appVersionName === 'string' && appApiKey.trim() !== '';
                        return [4, this.isDeviceOnline()];
                    case 1:
                        online = _a.sent();
                        status = hasBaseUrl && hasAppApiKey && hasAppVersionName && online;
                        console.warn("UserProfileService.canMakeApiCall(): Sync status: ", status);
                        return [2, status];
                }
            });
        });
    },
    isDeviceOnline: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, networkService.isReallyOnline()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    },
    cannotMakeApiCall: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.canMakeApiCall()];
                    case 1: return [2, !(_a.sent())];
                }
            });
        });
    },
    isDeviceOffline: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.isDeviceOnline()];
                    case 1: return [2, !(_a.sent())];
                }
            });
        });
    },
    tryUpload: function (userId, requestBody, traceId) {
        return __awaiter(this, void 0, void 0, function () {
            var requestBodyString, response, responseText, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        requestBodyString = JSON.stringify(requestBody);
                        sendJSObserverLog({
                            message: "Starting user profile upload API call",
                            className: "UserProfileService",
                            methodName: "tryUpload",
                            traceId: traceId,
                            level: ObserverLogLevel.DEBUG,
                        });
                        return [4, fetch("".concat(configBaseUrl, "odin/api/v1/profile"), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "x-jiny-client-id": appApiKey,
                                    "x-app-version-name": appVersionName,
                                    "x-leap-id": userId,
                                },
                                body: requestBodyString,
                            })];
                    case 1:
                        response = _a.sent();
                        sendJSObserverLog({
                            message: "User profile upload API call finished",
                            logData: {
                                status: response.status,
                            },
                            className: "UserProfileService",
                            methodName: "tryUpload",
                            traceId: traceId,
                        });
                        if (response.ok) {
                            return [2, true];
                        }
                        return [4, response.text().catch(function () { return "Could not read response body"; })];
                    case 2:
                        responseText = _a.sent();
                        return [3, 4];
                    case 3:
                        error_8 = _a.sent();
                        console.error("UserProfileService.tryUpload(): Network error for userId=".concat(userId), error_8);
                        sendJSErrorObserverLog({
                            message: "Failed to update user profile",
                            error: error_8,
                            className: "UserProfileService",
                            methodName: "tryUpload",
                            traceId: traceId
                        });
                        return [3, 4];
                    case 4: return [2, false];
                }
            });
        });
    },
    flushAll: function (traceId) {
        return __awaiter(this, void 0, void 0, function () {
            var userIds, userIds_1, userIds_1_1, userId, e_12_1;
            var e_12, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userIds = sdkStateService.allUserIds;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        userIds_1 = __values(userIds), userIds_1_1 = userIds_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!userIds_1_1.done) return [3, 5];
                        userId = userIds_1_1.value;
                        if (!!sdkStateService.isStateSyncedForUserId(userId)) return [3, 4];
                        return [4, this.enqueueUpdate(userId, traceId)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        userIds_1_1 = userIds_1.next();
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        e_12_1 = _b.sent();
                        e_12 = { error: e_12_1 };
                        return [3, 8];
                    case 7:
                        try {
                            if (userIds_1_1 && !userIds_1_1.done && (_a = userIds_1.return)) _a.call(userIds_1);
                        }
                        finally { if (e_12) throw e_12.error; }
                        return [7];
                    case 8:
                        sdkStateService.cleanUpSyncedUserStates();
                        return [2];
                }
            });
        });
    },
};
userProfileService.init();
function setupGlobalErrorHandlers() {
    window.onerror = function (message, source, lineno, colno, error) {
        console.error('Unhandled JavaScript Error:', { message: message, source: source, lineno: lineno, colno: colno, error: error });
        if (!error) {
            error = new Error(message);
            error.stack = "at ".concat(source, ":").concat(lineno, ":").concat(colno);
        }
        sendJSErrorObserverLog({
            message: 'Unhandled JavaScript Error',
            logData: {
                source: source,
                lineno: lineno,
                colno: colno,
            },
            error: error,
            methodName: 'setupGlobalErrorHandlers',
            traceId: generateUUID(),
        });
    };
    window.addEventListener('unhandledrejection', function (event) {
        console.error('Unhandled Promise Rejection:', { reason: event.reason });
        var error = event.reason;
        if (!(error instanceof Error)) {
            error = new Error(typeof error === 'string' ? error : JSON.stringify(error));
        }
        sendJSErrorObserverLog({
            message: 'Unhandled Promise Rejection',
            error: error,
            methodName: 'setupGlobalErrorHandlers',
            traceId: generateUUID(),
        });
    });
}
setupGlobalErrorHandlers();
var globalSchedulerService = {
    init: function (intervalMs) {
        if (intervalMs === void 0) { intervalMs = 180000; }
        this.intervalMs = intervalMs;
        this.shouldStop = false;
        this.isRunning = false;
        this.start();
    },
    start: function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isRunning)
                            return [2];
                        this.isRunning = true;
                        this.shouldStop = false;
                        _a.label = 1;
                    case 1:
                        if (!!this.shouldStop) return [3, 7];
                        console.log("GlobalSchedulerService.start(): Waiting ".concat(this.intervalMs, "ms"));
                        return [4, this.sleep(this.intervalMs)];
                    case 2:
                        _a.sent();
                        console.log("GlobalSchedulerService.start(): Starting flush cycle");
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4, this.flushAll("GlobalSchedulerService:".concat(generateUUID()))];
                    case 4:
                        _a.sent();
                        return [3, 6];
                    case 5:
                        err_1 = _a.sent();
                        console.error("GlobalSchedulerService.start(): Error during flushAll", err_1);
                        return [3, 6];
                    case 6:
                        console.log("GlobalSchedulerService.start(): Flush cycle complete");
                        return [3, 1];
                    case 7:
                        this.isRunning = false;
                        return [2];
                }
            });
        });
    },
    stop: function () {
        this.shouldStop = true;
    },
    flushAll: function (traceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, flushAllPendingOperations(traceId)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    },
    sleep: function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    }
};
globalSchedulerService.init();
var isFlushAllExecuting = false;
var lastFlushedAllAt = 0;
var FLUSH_INTERVAL_MS = 30 * 1000;
function flushAllPendingOperations(traceId) {
    return __awaiter(this, void 0, void 0, function () {
        var now, timeLeft, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    now = Date.now();
                    if (isFlushAllExecuting) {
                        console.log("[".concat(traceId, "] Skipping flush: already executing"));
                        return [2];
                    }
                    if (now - lastFlushedAllAt < FLUSH_INTERVAL_MS) {
                        timeLeft = Math.ceil((FLUSH_INTERVAL_MS - (now - lastFlushedAllAt)) / 1000);
                        console.log("[".concat(traceId, "] Skipping flush: last flush was ").concat(Math.floor((now - lastFlushedAllAt) / 1000), "s ago, must wait ").concat(timeLeft, "s more"));
                        return [2];
                    }
                    isFlushAllExecuting = true;
                    lastFlushedAllAt = now;
                    console.log("[".concat(traceId, "] Starting flush operations"));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, Promise.all([
                            userProfileService.flushAll(traceId),
                            observerLogService.flushAll(traceId),
                        ])];
                case 2:
                    _a.sent();
                    console.log("[".concat(traceId, "] All flush operations completed"));
                    return [3, 4];
                case 3:
                    error_9 = _a.sent();
                    console.error("[".concat(traceId, "] Error flushing pending requests"), error_9);
                    return [3, 4];
                case 4:
                    isFlushAllExecuting = false;
                    return [2];
            }
        });
    });
}
var networkService = {
    init: function () {
        this.handleOnline = this.handleOnline.bind(this);
        this.handleOffline = this.handleOffline.bind(this);
        window.addEventListener('online', this.handleOnline);
        window.addEventListener('offline', this.handleOffline);
        console.log('networkService.init(): Event listeners for online/offline events initialized.');
    },
    handleOnline: function () {
        console.log('networkService.handleOnline(): Device is online, flushing pending requests.');
        flushAllPendingOperations("NetworkService:".concat(generateUUID()));
    },
    handleOffline: function () {
        console.log('networkService.handleOffline(): Device is offline.');
    },
    isReallyOnline: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (isSelfHosted) {
                    return [2, false];
                }
                return [2, typeof navigator !== "undefined" && navigator.onLine];
            });
        });
    }
};
networkService.init();
window.receiveDataFromNativeLayer = receiveDataFromNativeLayer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	!function() {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = function(name, initScope) {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = function(msg) {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = "mobile-js-core";
/******/ 			var register = function(name, version, factory, eager) {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = function(id) {
/******/ 				var handleError = function(err) { warn("Initialization of sharing external failed: " + err); };
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = function(module) { return module && module.init && module.init(__webpack_require__.S[name], initScope); }
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(function() { return initPromises[name] = 1; });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(104);
/******/ 	
/******/ })()
;