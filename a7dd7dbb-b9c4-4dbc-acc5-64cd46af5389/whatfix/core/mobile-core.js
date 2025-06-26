// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck


// js filename- variables.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

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
let coreSdkVersionCode = "";
let appSessionId = "";
let totalHierarchyCount = 0;
let totalHierarchySizeSum = 0;
let maxHierarchySize = 0;
let avgHierarchySizeCalcInterval = undefined;
let lastProfileUpdatedAt = null;
let lastUpdatedConfigAt = undefined;
let lastUpdatedEmbedConfigAt = undefined;
let sortedProjectArray = [];
let allProjectStatus = {};
let embedProject = [];
let flowWalkthroughs = {};
let LiveFeatures = {};
let LiveMetaConfigs = {};
let features = {};
let metaConfigs = {};
let loggerConfig = {};
let customProperties = {};
let defaultProperties = {};
let flowShown = false;
let inPreviewMode = false;
let currentlyRunningFlow = {
    id: "",
    active: false,
};

let timer = undefined;
let tackProjectBeingIdentified = [];
let prevMatchedIdentifiers = [];
let currentMatchedWebIdentifiers = {};
let previousBoundState = {};
let isSelfHosted = 0;
let segmentConfigMap = {};
let appObserverBaseUrl = "https://whatfix.com/";
let wfAppId = "";
let parentDeploymentVersion = "";
let connectProjectsParentMap = {};

let activeStep = {
    id: "",
    step: {},
    isAnchoredElement: false,
};

let activeProject = {
    id: "",
    projectType: "",
    iconSetting: {},
    isShowing: false,
    isAnchoredElement: false,
    standAlone: false,
    isAFlow: false,
    isAFlowMenu: false,
};

let currentStaticFlow = {
    id: undefined,
    status: undefined,
    completed: undefined,
    autoStart: false,
    stepsStatus: [],
};

let completedProjectsInFlow = {};

let cachedFinderObserverEvents = {
    on_identifier_matched: [],
    on_identifier_not_matched: [],
    on_project_detected: [],
    on_no_project_detected: [],
    on_step_detected: [],
    on_no_step_detected: [],
};

let finderObserverEvents = {
    on_identifier_matched: [],
    on_identifier_not_matched: [],
    on_project_detected: [],
    on_no_project_detected: [],
    on_step_detected: [],
    on_no_step_detected: [],
};

const PLATFORMS = {
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

const SENDING_COMMANDS = {
    ON_CONFIG_FETCH: "ON_CONFIG_FETCH",
    WEB_SCRIPT: "WEB_SCRIPT",
    PROJECT_COMPLETED: "PROJECT_COMPLETED",
    SAVE_USER_STATE: "SAVE_USER_STATE",
    ANALYTICS_EVENT: "ANALYTICS_EVENT",
    EVENT_CALLBACK : "EVENT_CALLBACK",
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
    GET_PREF: "GET_PREF",
    SAVE_PREF: "SAVE_PREF",
    CLEAR_PREF: "CLEAR_PREF",
};

const RECEIVING_COMMANDS = {
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
    SURVEY_INFO: "SURVEY_INFO",
    PREF_RESPONSE: "PREF_RESPONSE",
    OBSERVER_LOG: "OBSERVER_LOG",
    NETWORK_SWITCH: "NETWORK_SWITCH",
};

const OBSERVER_EVENT_CATEGORIES = {
    NETWORK: "network",
    FINDER: "finder",
    OPERATION: "operation",
};

const OBSERVER_EVENTS = {
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
    SDK: {
        ON_SDK_LOGGED: "on_sdk_logged",
    }
};

const ANALYTICS_EVENTS = {
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

const ACTION_EVENT_TYPES = {
    DEEP_LINK: "deep_link",
    EXTERNAL_LINK: "external_link",
    CLOSE: "close",
};

const observerEventLevels = {
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

const LeapDataType = {
    INTEGER: "INTEGER",
    TIME: "TIME",
    STRING: "STRING",
    APP_VERSION_CODE: "APP_VERSION_CODE",
    APP_VERSION_NAME: "APP_VERSION_NAME",
};

const LeapOperatorKey = {
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

const selfHostingEndPoints = {
    SELF_HOSTING: "/whatfix",
    SEGMENT_CONFIG_FOLDER: "/config/segments/",
};

//MDA debugging changes

let appLocale = "";
const forceSendJsObserverLogs = false;
const jsVersionNumber = 5069;
let userSessionId;
let isUserLoggedIn = false;

let defaultLanguage = "";

let disableObserverLogging = false;

let hierarchyCommandLastSentAt = 0;
let hierarchyCommandLastResponseAt = 0;
let waitingForResponse = false;

const hierarchyCommandFallbackTimeout = 10000;
const hierarchyFetchTimeTakenLogBuffer = 50;
const ObserverLogLevel = {
    ALL: 100,
    DEBUG: 200,
    WARNING: 300,
    PERFORMANCE: 400,
    ERROR: 500,
    INFO: 600,
    NFR: 700
}



// js filename- cache/cacheStore.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

class CacheStore {
    save(preferenceKey, dataQueue = []) {
        if (!preferenceKey) return;

        sendMessageToNative({
            command: SENDING_COMMANDS.SAVE_PREF,
            data: {
                key: preferenceKey,
                value: JSON.stringify(dataQueue)
            }
        }, generateUUID());

        console.debug("cacheStore.save() preferenceKey-", preferenceKey, " dataQueue-", JSON.stringify(dataQueue));
        console.info("cacheStore.save() preferenceKey-", preferenceKey, " data Size-", dataQueue.length);
    }

    clear(preferenceKey) {
        if (!preferenceKey) return;

        sendMessageToNative({
            command: SENDING_COMMANDS.CLEAR_PREF,
            data: {
                key: preferenceKey,
            }
        }, generateUUID());

        console.info("cacheStore.clear() preferenceKey-", JSON.stringify(preferenceKey));
    }

    get(preferenceKey) {
        if (!preferenceKey) return;

        sendMessageToNative({
            command: SENDING_COMMANDS.GET_PREF,
            data: {
                key: preferenceKey,
            }
        }, generateUUID());
        console.info("cacheStore.clear() preferenceKey-", JSON.stringify(preferenceKey));
    }
}

// js filename- helperFunctions.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const getBoundingArea = (bound) =>
    bound !== undefined &&
    (bound?.right - bound?.left) * (bound?.bottom - bound?.top);

function isArrayMatched(arr1, arr2) {
    if (!arr1 || !arr2) {
        return false;
    }
    // Check if the arrays have the same length
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Sort both arrays
    const sortedArr1 = arr1.slice().sort();
    const sortedArr2 = arr2.slice().sort();

    // Compare each element in the sorted arrays
    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }

    // If all elements match, return true
    return true;
}

async function decompressGzipString(gzippedBase64) {
    // Decoding the Base64 string to raw binary data (Uint8Array)
    const compressedData = Uint8Array.from(atob(gzippedBase64), (c) =>
        c.charCodeAt(0)
    );

    // Creating Blob from the compressed binary data
    const compressedBlob = new Blob([compressedData]);

    // Creating a stream to decompress the Gzip data
    const dsInstance = new DecompressionStream("gzip");
    const decompressedStream = compressedBlob.stream().pipeThrough(dsInstance);

    // Converting the decompressed stream back to a string
    const decompressedBlob = await new Response(decompressedStream).blob();
    const decompressedText = await decompressedBlob.text();

    return decompressedText;
}

function noActiveProjects() {
    return (
        !activeProject?.id &&
        sortedProjectArray?.every(
            (project) => {
                if (allProjectStatus?.[project.id]?.isTerminated) {
                    return true;
                }
                if (!project.id?.includes("discovery") && allProjectStatus?.[project.id]?.isCompleted) {
                    return true;
                }
                return !checkToShowProject(project?.id);
            }
        )
    );
}

function calculateAvgHierarchySize(screenHierarchy, traceId) {
    if (!screenHierarchy) return;

    totalHierarchyCount++;
    const stringifiedHierarchy = JSON.stringify(screenHierarchy);
    maxHierarchySize = Math.max(maxHierarchySize, stringifiedHierarchy.length);
    totalHierarchySizeSum += stringifiedHierarchy.length;

    if (!avgHierarchySizeCalcInterval) {
        avgHierarchySizeCalcInterval = setTimeout(() => {
            if (!totalHierarchyCount) return;

            let avgHierarchySize = Math.round(
                totalHierarchySizeSum / totalHierarchyCount
            );

            if (
                (avgHierarchySize > (metaConfigs?.observeHierarchySize?.avgSizeThreshold || 0)) ||
                (maxHierarchySize > (metaConfigs?.observeHierarchySize?.maxSizeThreshold || 0))
            ) {
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
        }, metaConfigs?.observeHierarchySize?.loopInterval || 60000);
    }
}

// Helper function to compare version strings
function compareVersions(version1, version2) {
    const v1 = version1.split(".").map(Number);
    const v2 = version2.split(".").map(Number);

    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
        if ((v1[i] || 0) > (v2[i] || 0)) return 1;
        if ((v1[i] || 0) < (v2[i] || 0)) return -1;
    }
    return 0;
}

// Function to check if app version rule is valid
function validateAppVersionNameRule(propertyValue, value, operatorKey) {
    if (propertyValue == null || value == null) {
        return false;
    }

    const comparisonResult = compareVersions(propertyValue, value);
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

// Function to check if time rule is valid
function validateTimeRule(propertyValue, value, operatorKey, unit) {
    if (
        propertyValue == null ||
        value == null ||
        isNaN(propertyValue) ||
        isNaN(value)
    ) {
        return false;
    }

    let multiplier = 1;
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

    const intValue = parseInt(value);
    const currentTime = Math.floor(Date.now() / 1000);
    switch (operatorKey) {
        case LeapOperatorKey.TIME_ELAPSED_GREATER_THAN:
            return currentTime - propertyValue > intValue * multiplier;
        case LeapOperatorKey.TIME_ELAPSED_LESS_THAN:
            return currentTime - propertyValue < intValue * multiplier;
        default:
            return false;
    }
}

// Function to check if integer rule is valid
function validateIntegerRule(propertyValue, value, operatorKey) {
    if (
        propertyValue == null ||
        value == null ||
        isNaN(propertyValue) ||
        isNaN(value)
    ) {
        return false;
    }

    const intValue = parseInt(value);
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

// Function to check if string rule is valid
function validateStringRule(propertyValue, value, operatorKey) {
    if (propertyValue == null || value == null) {
        return false;
    }

    if (operatorKey === LeapOperatorKey.IS) {
        return propertyValue === value;
    } else if (operatorKey === LeapOperatorKey.IS_NOT) {
        return propertyValue !== value;
    }
    return false;
}

// Function to validate the rule (can handle multiple rule types)
function isRuleValid(rule) {
    const {dataType, propertyKey, operator, value, unit} = rule;
    const allProperties = {...defaultProperties, ...customProperties};
    switch (dataType) {
        case LeapDataType.STRING:
            return validateStringRule(allProperties[propertyKey], value, operator);
        case LeapDataType.INTEGER:
            return validateIntegerRule(allProperties[propertyKey], value, operator);
        case LeapDataType.TIME:
            return validateTimeRule(
                allProperties[propertyKey],
                value,
                operator,
                unit
            );
        case LeapDataType.APP_VERSION_CODE:
            return (
                platform === PLATFORMS.ANDROID &&
                validateIntegerRule(appVersionCode, value, operator)
            );
        case LeapDataType.APP_VERSION_NAME:
            return (
                platform === PLATFORMS.IOS &&
                validateAppVersionNameRule(appVersionName, value, operator)
            );
        default:
            return false;
    }
}

// Function to validate the OR segment rule
function isSegmentValid(segmentOrBlocks) {
    if (!segmentOrBlocks || segmentOrBlocks.length === 0) {
        return true;
    }

    for (const orBlock of segmentOrBlocks) {
        let isAllTrue = true;
        for (const andBlock of orBlock.andBlocks || []) {
            if (!isRuleValid(andBlock)) {
                isAllTrue = false;
                break;
            }
        }
        if (isAllTrue) return true;
    }
    return false;
}

function getCurrentTimeInGMT() {
    const now = new Date();

    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, "0");
    const day = String(now.getUTCDate()).padStart(2, "0");
    const hours = String(now.getUTCHours()).padStart(2, "0");
    const minutes = String(now.getUTCMinutes()).padStart(2, "0");
    const seconds = String(now.getUTCSeconds()).padStart(2, "0");
    const milliseconds = String(now.getUTCMilliseconds()).padStart(3, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
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
        if (value > 2147483647) return "long";
        return "int";
    }
    return typeof value;
}

function appendTypesToKeys(body) {
    const updatedBody = {};

    Object.keys(body).forEach((key) => {
        if (
            ["max_hierarchy_size", "avg_hierarchy_size", "timestamp"].includes(key)
        ) {
            updatedBody[`long.${key}`] = body[key];
        } else {
            updatedBody[`${getJavaType(body[key])}.${key}`] = body[key];
        }
    });

    return updatedBody;
}

function isInsideBounds(nodeABounds, nodeBBounds) {
    return (
        nodeABounds &&
        nodeBBounds &&
        nodeABounds.left < nodeABounds.right &&
        nodeABounds.top < nodeABounds.bottom &&
        nodeABounds.top <= nodeBBounds.top &&
        nodeABounds.left <= nodeBBounds.left &&
        nodeABounds.right >= nodeBBounds.right &&
        nodeABounds.bottom >= nodeBBounds.bottom
    );
}

function isAClickableNode(bounds) {
    return (
        this?.left < this?.right &&
        this?.top < this?.bottom &&
        this?.left <= bounds?.left &&
        this?.top <= bounds?.top &&
        this?.right >= bounds?.right &&
        this?.bottom >= bounds?.bottom
    );
}

function checkIfIdentifierMatch(matchedIdentifier, identifierToMatch) {
    // Convert the first array to a Set for efficient lookup
    const set1 = new Set(matchedIdentifier);

    // Check if every element in identifierToMatch is present in set1
    return identifierToMatch?.every((element) => set1.has(element));
}

function generateUUID() {
    // Helper function to generate a random number between 0 and 15
    function randomHexDigit() {
        return Math.floor(Math.random() * 16).toString(16);
    }

    // Replace function for the UUID template
    function replacePlaceholders(char) {
        var random = randomHexDigit();
        // Ensure the UUID version is set correctly (4xxx)
        if (char === "x") {
            return random;
        } else if (char === "y") {
            // Ensure the correct variant of the UUID
            return ((parseInt(random, 16) & 0x3) | 0x8).toString(16);
        }
        return char;
    }

    // Template for a UUID
    var template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

    // Replace each character in the template with random hex digits or fixed values
    return template.replace(/[xy]/g, replacePlaceholders);
}

function isValidDateString(dateString) {
    const gmtRegex = /^[A-Za-z]{3}\s[A-Za-z]{3}\s\d{1,2}\s\d{2}:\d{2}:\d{2}\s(GMT|GMT[+-]\d{2}(:\d{2})?)\s\d{4}$/;
    const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    if (isoRegex.test(dateString) || gmtRegex.test(dateString)) {
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) {
            return true;
        }
    }
    return false;
}

const getWidth = (element) => parseInt(element.right) - parseInt(element.left);
const getHeight = (element) => parseInt(element.bottom) - parseInt(element.top);
const checkForEmptyBounds = (bounds) =>
    getWidth(bounds) <= 0 || getHeight(bounds) <= 0;

function findTerminationStatuses(project, savedAllProjectStatus) {
    const terminationTemplate = {
        perSession: 0,
        perApp: 0,
        untilAllFlowsAreCompleted: false,
        nSession: 0,
        nDismissedByUser: 0,
    };

    const objKey =
        project.discoveryList?.[0].uniqueID || project.assists?.[0].uniqueID;
    let initialTerminationStatus =
        project.discoveryList?.[0].uniqueID !== undefined
            ? project.discoveryList?.[0].flowTerminationFrequency
            : project.assists?.[0].terminationFrequency;
    let terminationStatus = savedAllProjectStatus?.[objKey]
        ? savedAllProjectStatus[objKey].terminationStatus
        : {...terminationTemplate};

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
        objKey,
        initialTerminationStatus,
        terminationStatus,
    };
}

function organizeProject(
    project,
    objKey,
    initialTerminationStatus,
    terminationStatus
) {
    return {
        id: objKey,
        isAFlow: objKey.includes("discovery"),
        isAFlowMenu: ["STATIC_FLOW_MENU", "STATIC_FLOW_CHECKLIST"].includes(
            project.projectParameters.projectType
        ),
        isWebView: objKey.includes("discovery")
            ? project.discoveryList?.[0].webIdentifiers !== undefined
            : project.webIdentifiers !== undefined,
        assist: objKey.includes("discovery")
            ? project?.discoveryList?.[0]
            : project?.assists?.[0],
        flows: project.flows,
        isAnchoredElement: objKey.includes("discovery")
            ? false
            : !!project?.assists?.[0].instruction?.assistInfo?.identifier,
        targetId: objKey.includes("discovery")
            ? ""
            : project?.assists?.[0].instruction?.assistInfo?.identifier,
        triggerDelay: objKey.includes("discovery")
            ? project.discoveryList?.[0].trigger.type === "instant"
                ? 0
                : project.discoveryList?.[0].trigger.delay
            : project?.assists?.[0].trigger.type === "instant"
                ? 0
                : project?.assists?.[0].trigger.delay,
        initialTerminationStatus,
        terminationStatus,
        nativeIdentifiers: project.nativeIdentifiers,
        webIdentifiers: project.webIdentifiers,
        auiContent: project.auiContent,
        localeSounds: project.localeSounds,
        projectParameters: project.projectParameters,
        webViewList: project.webViewList,
        languages: project.languages,
        connectedProjects: project?.connectedProjects || [],
        triggerCase: project?.discoveryList?.[0]?.triggerFrequency?.type,
        isIconEnabled: !!project.discoveryList?.[0]?.enableIcon,
        iconSetting: {
            ...Object.values(project?.iconSetting || {})?.[0],
            stopEnabled:
                typeof features?.iconOptions?.stopEnabled === "boolean"
                    ? features?.iconOptions?.stopEnabled
                    : true,
        },
    };
}

function sortAndOrganizeProjects(
    projects,
    embedProject = false,
    savedAllProjectStatus,
    savedCompletedProjectsInFlow
) {
    const specifiedOrder = [
        "STATIC_FLOW",
        "STATIC_FLOW_MENU",
        "STATIC_FLOW_CHECKLIST",
    ];
    const projectTypeOrder = new Map(
        specifiedOrder.map((type, index) => [type, index])
    );

    const priorityOrder = [];
    const priorityLessOrder = [];
    const flowWalkthroughs = [];

    projects.forEach((project) => {
        connectProjectsParentMap = initialiseConnectedProjectsParentObjectMap(project);
        // console.debug("initialiseConnectedProjectsParentIdMap", connectProjectsParentMap);
        if (project.projectParameters.deploymentType === "LINK") {
            flowWalkthroughs.push(project);
            return;
        }
        if (project.projectParameters.priority === null) {
            priorityLessOrder.push(project);
        } else {
            priorityOrder.push(project);
        }
    });

    priorityOrder.sort(
        (a, b) => a.projectParameters.priority - b.projectParameters.priority
    );

    priorityLessOrder.sort((a, b) => {
        const typeA = projectTypeOrder.has(a.projectParameters.projectType)
            ? projectTypeOrder.get(a.projectParameters.projectType)
            : -1;
        const typeB = projectTypeOrder.has(b.projectParameters.projectType)
            ? projectTypeOrder.get(b.projectParameters.projectType)
            : -1;
        return typeA - typeB;
    });

    const sortedProjects = [...priorityOrder, ...priorityLessOrder];
    const organizedProjects = [];
    const flowsWalkthroughProjects = {};
    const projectStatus = {};
    const initialCompletedProjectsInFlow = {};

    sortedProjects?.forEach((project) => {
        const {objKey, initialTerminationStatus, terminationStatus} =
            findTerminationStatuses(project, savedAllProjectStatus);

        organizedProjects.push(
            organizeProject(
                project,
                objKey,
                initialTerminationStatus,
                terminationStatus
            )
        );

        // For flow completion
        if (project.connectedProjects !== undefined) {
            computeCompletedProjectsInFlow(project, objKey, savedCompletedProjectsInFlow, initialCompletedProjectsInFlow);
        }

        projectStatus[objKey] = {
            id: objKey,
            projectType: project.projectParameters.projectType,
            shownOnce: savedAllProjectStatus?.[objKey]?.shownOnce || false,
            isShown: savedAllProjectStatus?.[objKey]?.isShown || false,
            isCompleted: savedAllProjectStatus?.[objKey]?.isCompleted || false,
            isFlowTriggered:
                savedAllProjectStatus?.[objKey]?.isFlowTriggered || false,
            isTerminated: savedAllProjectStatus?.[objKey]?.isTerminated || false,
            triggerCase: project?.discoveryList?.[0]?.triggerFrequency?.type,
            initialTerminationStatus,
            terminationStatus,
        };
    });

    flowWalkthroughs?.forEach((project) => {
        const {objKey, initialTerminationStatus, terminationStatus} =
            findTerminationStatuses(project, savedAllProjectStatus);

        flowsWalkthroughProjects[project.projectParameters.deploymentId] =
            organizeProject(
                project,
                objKey,
                initialTerminationStatus,
                terminationStatus
            );

        if (embedProject) {
            projectStatus[objKey] = {
                id: objKey,
                projectType: project.projectParameters.projectType,
                shownOnce: false,
                isShown: false,
                isCompleted: false,
                isFlowTriggered: false,
                isTerminated: false,
                triggerCase:
                    project.discoveryList?.[0].uniqueID !== undefined
                        ? project.discoveryList?.[0].triggerFrequency?.type
                        : project.assists?.[0].triggerFrequency?.type,
                initialTerminationStatus,
                terminationStatus,
                connectProjectsParentMap: connectProjectsParentMap
            };
        }
    });

    return {
        sortedProjects: organizedProjects,
        projectStatus,
        flowsWalkthroughProjects,
        initialCompletedProjectsInFlow,
    };
}

function initialiseConnectedProjectsParentObjectMap(project) {
    try {
        const projectId = project.projectParameters?.projectId;
        const map = connectProjectsParentMap;

        if (project.connectedProjects && project.connectedProjects.length > 0 && projectId) {
            let projectDetails = {};
            projectDetails.projectType = project?.projectParameters.projectType;
            projectDetails.projectId = project?.projectParameters.projectId;
            projectDetails.deploymentId = project?.projectParameters.deploymentId;
            projectDetails.deploymentVersion = project.projectParameters.deploymentVersion;
            projectDetails.deploymentName = project.projectParameters.deploymentName;
            projectDetails.projectName = project.projectParameters.projectName;
            project.connectedProjects.forEach(connectedProject => {
                map[connectedProject.projectId] = projectDetails;
            });
            return map;
        }
        return map;
    }catch (error){
        console.error(error);
        sendJSErrorObserverLog({
            message: "Error in initialiseConnectedProjectsParentIdMap",
            error,
            className: "helperFunctions",
            methodName: "initialiseConnectedProjectsParentIdMap",
        }, error?.traceId || undefined);
    }
}
function checkToShowProject(id) {
    const project = allProjectStatus?.[id];

    // Project terminated so return false
    if (!project) return false;

    const initialTerminationStatus = project?.initialTerminationStatus;
    const terminationStatus = project?.terminationStatus;

    // If the terminationStatus is undefined then terminationStatus logic is not set so return true
    if (!terminationStatus) return true;

    // sessions
    if (initialTerminationStatus?.nSession !== -1) {
        return !!(
            terminationStatus.nSession < initialTerminationStatus.nSession ||
            allProjectStatus[project.id].shownOnce
        );
    }
    // Dismiss by user
    if (
        initialTerminationStatus?.nDismissedByUser !== -1 &&
        terminationStatus?.nDismissedByUser === 0
    ) {
        return true;
    }
    // Flow completion times
    if (initialTerminationStatus?.perApp !== -1) {
        return terminationStatus.perApp < initialTerminationStatus.perApp;
    }
    // Until all flows are completed
    if (
        initialTerminationStatus?.untilAllFlowsAreCompleted &&
        !terminationStatus?.untilAllFlowsAreCompleted
    ) {
        return true;
    }

    // When none of the condition is matching
    if (
        initialTerminationStatus?.nSession === -1 &&
        initialTerminationStatus?.nDismissedByUser === -1 &&
        initialTerminationStatus?.perApp === -1 &&
        !initialTerminationStatus?.untilAllFlowsAreCompleted
    ) {
        return true;
    } else {
        return false;
    }
}

function removeProjectFromStatusArray({
                                          id = undefined,
                                          isTerminated = false,
                                          terminatedByIcon = false,
                                          saveState = true,
                                      }, traceId) {
    const activeProjectId = id
        ? id
        : currentlyRunningFlow?.id === ""
            ? activeProject?.id
            : currentlyRunningFlow?.id;

    const index = embedProject
        .concat(sortedProjectArray)
        .findIndex((s) => s.id === activeProjectId);

    if (index !== -1 && embedProject?.[0]?.id === activeProjectId)
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
    ////console.log("updateViewStatusForTheProject", key, traceId);
    //console.log("updateViewStatusForTheProject()- activeProject", activeProject);
    if (activeProject.id !== undefined) {
        const project =
            currentlyRunningFlow.id === ""
                ? allProjectStatus[activeProject.id]
                : allProjectStatus[currentlyRunningFlow.id];

        const initialTerminationStatus = project?.initialTerminationStatus;
        const terminationStatus = project?.terminationStatus;

        //console.log("updateViewStatusForTheProject()- project- ", project);
        //console.log("updateViewStatusForTheProject()- initialTerminationStatus- ", initialTerminationStatus);
        //console.log("updateViewStatusForTheProject()- terminationStatus- ", terminationStatus);

        // If the terminationStatus is undefined then terminationStatus logic is not set so don't do anything
        if (terminationStatus === undefined) return;


        // sessions
        if (key === "nSession" && initialTerminationStatus.nSession !== -1) {
            if (project.shownOnce === false) ++terminationStatus.nSession;

            // update shownOnce
            allProjectStatus[project.id] = {
                ...allProjectStatus[project.id],
                shownOnce: true,
            };

            if (allProjectStatus?.[project.id]?.initialTerminationStatus?.nSession !== -1 &&
                allProjectStatus?.[project.id]?.terminationStatus?.nSession === allProjectStatus?.[project.id]?.initialTerminationStatus?.nSession
            ) {
                sendAnalyticEvent(ANALYTICS_EVENTS.PROJECT_TERMINATION, {
                    terminationRule: `nSession: ${allProjectStatus?.[project?.id]?.initialTerminationStatus.nSession}`,
                }, traceId);
            }
        }

            // Dismiss by user
        // The values will be either -1 or 1
        else if (
            key === "nDismissedByUser" &&
            initialTerminationStatus.nDismissedByUser !== -1 &&
            terminationStatus.nDismissedByUser === 0
        ) {
            sendAnalyticEvent(ANALYTICS_EVENTS.PROJECT_TERMINATION, {
                terminationRule: `nDismissedByUser: ${initialTerminationStatus.nDismissedByUser}`,
            }, traceId);
            ++terminationStatus.nDismissedByUser;
            removeProjectFromStatusArray({saveState: false}, traceId);
        }

        // Flow completion times
        else if (key === "perApp" && initialTerminationStatus.perApp !== -1) {
            ++terminationStatus.perApp;
            if (terminationStatus.perApp === initialTerminationStatus.perApp) {
                sendAnalyticEvent(ANALYTICS_EVENTS.PROJECT_TERMINATION, {
                    terminationRule: `perApp: ${initialTerminationStatus.perApp}`,
                }, traceId);
                removeProjectFromStatusArray({saveState: false}, traceId);
            }
        }

        // Until all flows are completed
        else if (
            key === "untilAllFlowsAreCompleted" &&
            initialTerminationStatus?.untilAllFlowsAreCompleted &&
            !terminationStatus.untilAllFlowsAreCompleted
        ) {
            sendAnalyticEvent(ANALYTICS_EVENTS.PROJECT_TERMINATION, {
                terminationRule: `untilAllFlowsAreCompleted: ${initialTerminationStatus.untilAllFlowsAreCompleted}`,
            }, traceId);
            terminationStatus.untilAllFlowsAreCompleted = true;
            removeProjectFromStatusArray({saveState: false});
        }

        //console.log("updateViewStatusForTheProject()- project after- ", project);
        //console.log("updateViewStatusForTheProject()- terminationStatus after- ", terminationStatus);
        updateUserProfile(traceId);
    }
}

function areAllProjectsCompleted(data) {
    // Iterate over each item in the project array
    for (const project of data.projects) {
        // If any project is not completed, return false
        if (!project.completed) {
            return false;
        }
    }
    // If all projects are completed, return true
    return true;
}

function getTriggerConditionForStaticFlow(
    condition,
    isShown,
    triggeredAlready
) {
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
        const found = languages.find((l) => l.localeId === languageCode);
        if (found) {
            return found.localeId;
        }
    }
    let codeToUse = languages.length === 1 ? languages[0].localeId : "";
    return codeToUse || defaultLanguage;
}

function logCat(data) {
    const pattern = /"http[s]?:\/\/[^"]*"/g;

    // Replace matches with an empty string
    return JSON.stringify(data).replace(pattern, '""');
}

function parseRegexString(regexString) {
    // Match the pattern and flags from the regex string
    const match = regexString.match(/^\/(.*)\/([gimsuy]*)$/);

    if (match) {
        const pattern = match[1];
        const flags = match[2];
        return new RegExp(pattern, flags);
    } else {
        return new RegExp(regexString);
    }
}

function getElapsedTimeInSeconds(timestamp) {
    // Get the current time in milliseconds
    const currentTime = new Date(new Date().toUTCString()).getTime();

    // Calculate the elapsed time in milliseconds
    const timeStampToDateTime = new Date(
        new Date(timestamp).toUTCString()
    ).getTime();
    const elapsedTime = currentTime - timeStampToDateTime;

    // Convert the elapsed time to seconds
    const elapsedTimeInSeconds = Math.floor(elapsedTime / 1000);

    return elapsedTimeInSeconds;
}

class SequentialExecutor {
    constructor() {
        this.queue = []; // Queue to maintain stack trace
        this.isRunning = false; // Flag to check if a function is currently executing
    }

    // Function to add tasks to the queue
    addTask(task) {
        return new Promise((resolve, reject) => {
            this.queue.push({task, resolve, reject}); // Push the task to the queue
            this.executeNext(); // Attempt to execute the next task
        });
    }

    // Function to execute the next task in the queue
    async executeNext() {
        if (this.isRunning || this.queue.length === 0) {
            return; // If a task is currently running or the queue is empty, do nothing
        }

        this.isRunning = true; // Set the flag to indicate a task is running
        const {task, resolve, reject} = this.queue.shift(); // Get the next task from the queue

        try {
            const result = await task(); // Await the execution of the task
            resolve(result); // Resolve the promise associated with the task
        } catch (error) {
            reject(error); // Reject the promise if the task throws an error
        } finally {
            this.isRunning = false; // Reset the flag
            this.executeNext(); // Attempt to execute the next task
        }
    }
}

// Example usage:

const executor = new SequentialExecutor();

function isEmptyObject(obj) {
    return obj && typeof obj === 'object' && !Array.isArray(obj) && Object.keys(obj).length === 0;
}

function isNonEmptyObject(obj) {
    return !isEmptyObject(obj);
}

function reCalculateCompletedProjectsInFlow(sortedProjects, savedCompletedProjectsInFlow) {
    completedProjectsInFlow = {};
    sortedProjects?.forEach((project) => {
        if (project.connectedProjects?.length !== 0) {
            computeCompletedProjectsInFlow(project, project.id, savedCompletedProjectsInFlow, completedProjectsInFlow);
        }
    })
}

function computeCompletedProjectsInFlow(project, flowMenuProjectId, savedCompletedProjectsInFlow, initialCompletedProjectsInFlow) {
    const projects = [];
    const savedConnectedProjectStatus = {};
    if (savedCompletedProjectsInFlow?.[flowMenuProjectId]) {
        savedCompletedProjectsInFlow[flowMenuProjectId].projects?.forEach((proj) => {
            savedConnectedProjectStatus[proj.id] = proj.completed;
        });
    }

    project.connectedProjects.forEach((s) => {
        projects.push({
            // s.projectId is actually deploymentId
            id: s.projectId,
            completed: savedConnectedProjectStatus[s.projectId] || false,
        });
    });

    initialCompletedProjectsInFlow[flowMenuProjectId] = {
        id: flowMenuProjectId,
        projects,
    };
}

// js filename- sdkStateService.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const SDK_STATE_VERSION = 1;

const sdkStateService = {
    init(storedSdkStateString = "{}") {
        const storedSdkState = safeParse(storedSdkStateString)
        const isFirstStart = isEmptyObject(storedSdkState);
        //console.log("isFirstStart", isFirstStart);
        //console.log("storedSdkState", storedSdkState);
        //console.log("storedSdkStateString", storedSdkStateString);
        const sdkState = sdkStateVersionConverter.validateAndConvert(storedSdkState);

        this.version = SDK_STATE_VERSION;
        console.warn("sdkStateService.init(): sdkStateVersion", SDK_STATE_VERSION);
        this.userStates = sdkState.userStates || {};
        this.internalUserId = sdkState.internalUserId || this.generateWfUid();
        this.currentUserId = sdkState.currentUserId;
        this.segmentConfigMap = sdkState.segmentConfigMap || {};
        this.appLocale = sdkState.appLocale;
        this.entId = sdkState.entId;
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

    isUserIdInternal(userId) {
        return this.internalUserId === userId;
    },

    isUserIdExternal(userId) {
        return !this.isUserIdInternal(userId);
    },

    get isLoggedIn() {
        return !!this.currentUserId;
    },

    get isLoggedOut() {
        return !this.isLoggedIn;
    },


    setUserId(userId, traceId) {
        if (!userId) {
            return;
        }
        this.currentUserId = userId;
        this.ensureUserStateExists(userId);
        this.persistState(traceId)
    },

    logout(traceId) {
        let currentUserState = this.currentUserState;
        let emptyState = this.createEmptyUserState(currentUserState.userId, currentUserState.wfId);
        emptyState.projectsStatus = currentUserState.projectsStatus || [];
        emptyState.projectsCompletionStats = currentUserState.projectsCompletionStats;
        emptyState.language = currentUserState.language;
        emptyState.lastProfileUpdatedAt = currentUserState.lastProfileUpdatedAt;
        emptyState.lastProfileSyncedAt = currentUserState.lastProfileSyncedAt;
        this.currentUserId = null;
        this.persistState(traceId);
    },


    ensureUserStateExists(userId) {
        if (!userId) {
            return;
        }
        if (!this.userStates[userId]) {
            this.userStates[userId] = this.createEmptyUserState(userId);
        }
    },


    persistState(traceId) {
        let currentSdkState = this.sdkState;
        //console.debug("sdkState", currentSdkState);
        let message = {
            command: SENDING_COMMANDS.SAVE_USER_STATE,
            data: this.sdkState,
        };
        sendMessageToNative(message, traceId);
    },

    get sdkState() {
        let state = {
            version: this.version,
            userStates: this.userStates,
            internalUserId: this.internalUserId,
            currentUserId: this.currentUserId,
            segmentConfigMap: this.segmentConfigMap,
            appLocale: this.appLocale,
            deviceInstallId: this.deviceInstallId,
            entId: this.entId,
        };
        if (this.isLoggedIn) {
            state[this.currentUserId] = this.currentUserState;
        }
        return state;
    },

    createEmptyUserState(userId, wfId) {
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
            userId,
            wfId: wfId || this.generateWfUid(),
            projectsCompletionStats: {},
            apiKey: appApiKey,
            baseURL: configBaseUrl,
            appVersion: appVersionName,
            features,
            metaConfigs,
            loggerConfig,
            customProps: customProperties,
            connectProjectsParentMap: {}
        };
    },

    updateCurrentUserState(updates = {}) {
        const userId = this.currentUserId;
        this.updateUserStateById(userId, updates);
    },

    get currentUserState() {
        const userId = this.currentUserId;
        return this.getUserStateById(userId);
    },

    getUserStateById(userId) {
        this.ensureUserStateExists(userId);
        return this.userStates[userId] || {};
    },

    updateUserStateById(userId, updates = {}) {
        this.ensureUserStateExists(userId);
        Object.assign(this.userStates[userId], updates);
    },

    generateWfUid() {
        return `wf:${generateUUID()}`;
    },

    get allUserIds() {
        return Object.keys(this.userStates);
    },

    cleanUpSyncedUserStates() {
        for (let userStatesKey in this.userStates) {
            if (userStatesKey !== this.currentUserId) {
                let savedUserState = this.getUserStateById(userStatesKey);
                if (this.isStateSyncedForUserState(savedUserState)) {
                    this.deleteUserStateById(userStatesKey);
                }
            }
        }
    },

    isStateSyncedForUserId(userId) {
        let savedUserState = this.getUserStateById(userId);
        return this.isStateSyncedForUserState(savedUserState);
    },

    isStateSyncedForUserState(userState) {
        const updatedAtString = userState?.lastProfileUpdatedAt;
        const updatedAt = updatedAtString ? new Date(updatedAtString).getTime() : null;
        const lastSyncedAtString = userState?.lastProfileSyncedAt;
        const lastSyncedAt = lastSyncedAtString ? new Date(lastSyncedAtString).getTime() : null;
        if (!updatedAt) {
            return true;
        }
        return typeof updatedAt === 'number' && typeof lastSyncedAt === 'number' && updatedAt <= lastSyncedAt;
    },

    deleteUserStateById(userId, traceId) {
        if (this.currentUserId !== userId) {
            delete this.userStates[userId];
            this.persistState(traceId);
        }
    }
}

const sdkStateVersionConverter = {
    validateAndConvert(storedSdkState) {
        //console.debug('sdkStateVersionConverter', storedSdkState);
        const storedSdkStateVersion = storedSdkState?.version || 0;
        if (SDK_STATE_VERSION !== storedSdkStateVersion) {
            switch (storedSdkStateVersion) {
                case 0:
                    return this.v0Tov1(storedSdkState);
                default:
                    throw new Error(`sdkStateVersionConverter(): converter not implemented for version- ${storedSdkStateVersion}`);
            }
        }
        return storedSdkState;
    },

    v0Tov1(sdkStateV0) {
        let convertedSdkState = {}
        //console.log("converting v0 to v1");
        for (const key in sdkStateV0) {
            const child = sdkStateV0[key];
            if (typeof child === 'object' && child?.apiKey) {
                if (!convertedSdkState.userStates) {
                    convertedSdkState.userStates = {};
                }
                child.userId = key;
                convertedSdkState.userStates[key] = child;
                convertedSdkState.currentUserId = key;
            } else {
                convertedSdkState[key] = child;
            }
        }
        return convertedSdkState;
    }
}

function safeParse(jsonString, fallback = {}) {
    try {
        return JSON.parse(jsonString || "{}");
    } catch (e) {
        console.warn("unable to parse sdk state string", e);
        return fallback;
    }
}

// js filename- filterHierarchy.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

let screenWidth = -1;
let screenHeight = -1;

function filterHierarchy(node, currentPlatform = platform, isLayout = false) {
    if (subPlatform === "FLUTTER") {
        return node;
    }

    // Check if the node at root level
    const isRoot = node?.layout !== undefined;

    if (isRoot) {
        screenWidth = node?.screen_width;
        screenHeight = node?.screen_height;
    } else if (isLayout) {
        // if the node is node?.layout
        if (currentPlatform !== PLATFORMS.ANDROID) {
            if (features?.filterByOpaqueViews?.isReactNative) {
                removeIrrelevantNodesIOS(node, null);
            } else if (features?.useClickableBounds) {
                calculateClickableBoundsForIos(node);
            }
        } else if (currentPlatform === PLATFORMS.ANDROID) {
            calculateClickableBoundsForAndroid(node);
        }
    } else {
        if (currentPlatform === PLATFORMS.ANDROID) {
            if (features?.doNotFliter?.classNames?.includes(node?.class)) {
                return node;
            }
            filterNoHideDescendants(node);
        }

        // Filter the nodes
        const ignoreNode =
            currentPlatform === PLATFORMS.ANDROID
                ? ignoreInvalidViewsAndroid(node)
                : ignoreInvalidViewsIOS(node);

        if (ignoreNode) {
            return;
        }
    }

    // Iterate from layout or children if the node is root level
    const children = isRoot ? [{ ...node?.layout }] : node?.children;

    let filteredChildren = [];

    // Iterate through children to check invalid nodes
    children?.forEach((child) => {
        const res = filterHierarchy(child, currentPlatform, isRoot);

        if (res) filteredChildren.push(child);
    });

    // Check if the siblings of the node is overlapping
    if (filteredChildren.length > 1) {
        filteredChildren =
            currentPlatform === PLATFORMS.ANDROID
                ? ignoreOverlappingNodesAndroid(filteredChildren)
                : ignoreOverlappingNodesIOS(filteredChildren);
    } else if (
        filteredChildren.length === 0 &&
        currentPlatform === PLATFORMS.ANDROID &&
        node?.is_view_group &&
        !node?.is_clickable &&
        !node?.is_focusable &&
        !node?.is_long_clickable
    ) {
        return;
    }

    // Update the new object
    isRoot
        ? (node.layout = filteredChildren[0])
        : (node.children = filteredChildren);

    //  Return the filtered node
    return node;
}

function calculateClickableBoundsForAndroid(node) {
    const isClickable = node?.is_clickable || node?.is_long_clickable;
    let clickableBoundsChildren = null;

    node?.children?.forEach((child) => {
        calculateClickableBoundsForAndroid(child);

        !isClickable &&
        (clickableBoundsChildren = calcInclusiveBounds(
            clickableBoundsChildren,
            child.clickable_bounds
        ));
    });

    if (isClickable) {
        node.clickable_bounds = node?.bounds;
        return;
    }

    if (!clickableBoundsChildren) {
        node.clickable_bounds = null;
        return;
    }

    node.clickable_bounds = clickableBoundsChildren;

    if (getBoundingArea(node?.clickable_bounds) === 0) {
        if (node?.alpha < features?.filterByOpaqueViews?.opacityLimit) {
            node.clickable_bounds = null;
            return;
        }
        node.clickable_bounds = node?.bounds;
    } else if (
        !isClickable &&
        node?.alpha > features?.filterByOpaqueViews?.opacityLimit
    ) {
        node.clickable_bounds = node?.bounds;
    }

    node.clickable_bounds = calcExclusiveBounds(
        node?.clickable_bounds,
        node?.bounds
    );
    return;
}

function calculateClickableBoundsForIos(node) {
    let clickableBoundsChildren = null;

    if (!["RCTView", "RCTSafeAreaView"].includes(node?.class)) {
        node.clickable_bounds = { ...node?.bounds };

        node?.children?.forEach((child) => {
            calculateClickableBoundsForIos(child);
        });

        return node.clickable_bounds;
    }

    node?.children?.forEach((child) => {
        calculateClickableBoundsForIos(child);

        clickableBoundsChildren = calcInclusiveBounds(
            clickableBoundsChildren,
            child.clickable_bounds
        );
    });

    if (!clickableBoundsChildren) {
        node.clickable_bounds = null;
        return;
    }

    node.clickable_bounds = calcExclusiveBounds(
        clickableBoundsChildren,
        node?.bounds
    );
    return;
}

function calcInclusiveBounds(bounds1, bounds2) {
    if (!bounds1 && !bounds2) {
        return null;
    } else if (!bounds1) {
        return bounds2;
    } else if (!bounds2) {
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
    } else if (!bounds1) {
        return bounds2;
    } else if (!bounds2) {
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
    if (isIrrelevantView(node, parentBounds)) return true;

    if (node?.children) {
        node.children = node?.children.filter(
            (child) =>
                !removeIrrelevantNodesIOS(
                    child,
                    node?.clipsToBounds ? node?.bounds : null
                )
        );
    }

    if (
        node?.children?.length === 0 &&
        ["RCTView", "RCTSafeAreaView"].includes(node?.class)
    ) {
        return true;
    }

    return false;
}

function isIrrelevantView(node, parentBounds) {
    if (ignoreInvalidViewsIOS(node)) {
        return true;
    }
    if (
        parentBounds &&
        (node?.bounds?.left >= parentBounds.right ||
            node?.bounds?.right <= parentBounds.left ||
            node?.bounds?.top >= parentBounds.bottom ||
            node?.bounds?.bottom <= parentBounds.top)
    ) {
        return true;
    }
    if (!isVisibleInWindow(node)) {
        return true;
    }
    return false;
}

function isVisibleInWindow(node) {
    return (
        node?.bounds?.right > 0 &&
        node?.bounds?.left < screenWidth &&
        node?.bounds?.bottom > 0 &&
        node?.bounds?.top < screenHeight
    );
}

function filterNoHideDescendants(node) {
    if (
        isDrawerLayout(node) ||
        features?.filterByNoHideDescendants?.classNames?.includes(node?.class)
    ) {
        node.children = node?.children?.filter(
            (child) => child.importantForAccessibilityStr !== "noHideDescendants"
        );
    }
}

function isDrawerLayout(node) {
    const ANDROIDX_DRAWER_LAYOUT = "androidx.drawerlayout.widget.DrawerLayout";
    const ANDROID_SUPPORT_DRAWER_LAYOUT =
        "android.support.v4.widget.DrawerLayout";

    return [ANDROIDX_DRAWER_LAYOUT, ANDROID_SUPPORT_DRAWER_LAYOUT].includes(
        node?.class
    );
}

function ignoreInvalidViewsIOS(node) {
    // Ignore if the class contains Leap string in it
    if (node?.class?.includes("Leap")) return true;

    if (features?.classes?.includes(node?.class)) return true;

    // Ignore if the node size is invalid
    if (!!node?.clip_to_bounds && checkForEmptyBounds(node?.bounds)) return true;

    // Ignore if the node is not visible
    if (node?.hidden || node?.alpha <= 0) return true;

    return false;
}

function ignoreInvalidViewsAndroid(node) {
    // Ignore if node is not in the horizontal view
    if (node?.bounds?.right <= 5 || node?.bounds?.left >= screenWidth)
        return true;

    // Ignore if the visibility is not 0
    if (node?.visibility !== 0) return true;

    // Ignore node if contains LeapView or is.leap.android.aui in it's class
    if (
        node?.tag?.includes("LeapView") ||
        node?.class?.startsWith("is.leap.android.aui")
    )
        return true;

    // Ignore if node is not in the vertical view
    //  if (node?.bounds?.top > screenHeight) return true;

    // Check if the node as clickable area
    if (getWidth(node?.bounds) <= 0 || getHeight(node?.bounds) <= 0) return true;

    if (
        node?.clickable_bounds &&
        (node?.clickable_bounds.bottom < node?.clickable_bounds.top ||
            node?.clickable_bounds.right < node?.clickable_bounds.left)
    )
        return true;

    // Ignore if the the node is not clickable and does not contain any children
    if (
        (node?.children === undefined || node?.children.length === 0) &&
        node?.is_view_group &&
        !node?.is_clickable &&
        !node?.is_focusable &&
        !node?.is_long_clickable
    )
        return true;

    return false;
}

// This function takes an array of nodes and returns a filtered array containing nodes
// that don't overlap with each other.
function ignoreOverlappingNodesIOS(nodes) {
    // Sort the nodes by zIndex in descending order
    const sortedNodes = nodes.sort(
        (a, b) => parseFloat(b.z) - parseFloat(a.z) || b.node_index - a.node_index
    );

    const filteredNodes = [sortedNodes[0]];

    // Iterate over the objects
    for (let i = 0; i < sortedNodes.length; i++) {
        const currentObject = sortedNodes[i];
        const currentBounds = features?.useClickableBounds
            ? currentObject.clickable_bounds
            : currentObject.bounds;

        // Check if the current object is already present in the filteredNodes array
        const isCurrentObjPresent = filteredNodes.findIndex(
            (s) => s.uuid === currentObject.uuid
        );

        // If the current object is not the first object and it's not present in the filteredNodes array, continue to the next iteration
        if (i !== 0 && isCurrentObjPresent === -1) continue;

        // Iterate over the remaining objects and check if they are inside the current bounds
        for (let j = i + 1; j < sortedNodes.length; j++) {
            const nextObject = sortedNodes[j];
            const nextBounds = features?.useClickableBounds
                ? nextObject.clickable_bounds
                : nextObject.bounds;

            // Check if the next object is already present in the filteredNodes array
            const index = filteredNodes.findIndex((s) => s.uuid === nextObject.uuid);

            // If the current object is not the first object and the next object is not present in the filteredNodes array, continue to the next iteration
            if (i !== 0 && index === -1) continue;

            // If the next object is not inside the current bounds, then add to array else remove from the array
            if (!isInsideBounds(currentBounds, nextBounds)) {
                // If the current object is the first object, add the next object to the filteredNodes array
                if (i === 0) {
                    filteredNodes.push(nextObject);
                }

                continue;
            } else if (i !== 0) {
                // If the current object is not the first object and the next object is inside the current bounds, remove the next object from the filteredNodes array
                filteredNodes.splice(index, 1);
            }
        }
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

    const newChildren = JSON.parse(JSON.stringify(children));

    for (
        let topSiblingIndex = children.length - 1;
        topSiblingIndex > 0;
        topSiblingIndex--
    ) {
        const topSibling = children[topSiblingIndex];
        if (!topSibling) continue;

        for (let childIndex = topSiblingIndex - 1; childIndex >= 0; childIndex--) {
            const sibling = children[childIndex];
            if (!sibling) continue;

            if (topSibling?.clickable_bounds === null) {
                if (!isInsideBounds(topSibling.bounds, sibling.bounds)) continue;
                if (
                    topSibling?.is_text_view ||
                    topSibling?.is_text_view ||
                    topSibling.has_child_with_text_or_image
                )
                    continue;
                newChildren[topSiblingIndex] = null;
                break;
            }

            if (
                isInsideBounds(topSibling?.clickable_bounds, sibling.bounds) ||
                (sibling.clickable_bounds !== null &&
                    isInsideBounds(
                        topSibling?.clickable_bounds,
                        sibling.clickable_bounds
                    ))
            ) {
                newChildren[childIndex] = null;
            }
        }
    }

    return newChildren.filter((node) => node);
}


// js filename- finder.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// Utility function to standardize key names in idParams
// This function renames certain keys and removes the original ones

function getCorrectKey(key) {
    const reverseMappings = {
        id: "r_id",
        class: "classname",
    };

    if (key in reverseMappings) {
        return reverseMappings[key];
    }
    return key;
}

function standardizeIdParams(params) {
    const mappings = {
        R_ID: "id",
        AR_ID: "ar_id",
        className: "class",
        CONTENT_DESC: "content_desc",
        ACC_ID: "acc_id",
        TAG: "tag",
        ACC_LABEL: "acc_label",
    };

    const standardized = {...params};

    for (const [oldKey, newKey] of Object.entries(mappings)) {
        if (standardized[oldKey]) {
            standardized[newKey] = standardized[oldKey];
            delete standardized[oldKey];
        }
    }

    return standardized;
}

// Function to process and return the target details
function getTargetValuesToMatch(target, relationToTarget) {
    if (!relationToTarget) return {};

    // Standardize the target's parameters
    const targetIdParams = standardizeIdParams({...target?.idParams});

    // Fix potential misnamed property
    if (targetIdParams.text?.ang) {
        targetIdParams.text = targetIdParams.text.ang;
    }

    // Return a detailed object with the relationship to the target
    return {
        ...targetIdParams,
        relationship: relationToTarget,
    };
}

// Main function to convert identifiers to an array with transformed keys
function getIdentifiersInArray(identifiers) {
    const arrayResult = []; // Initialize an empty result array

    // Loop through each entry in the identifiers object
    for (const [name, value] of Object.entries(identifiers)) {
        const idParams =
            name === "wfxWebViewList"
                ? standardizeIdParams({...value})
                : standardizeIdParams({...value.idParams});

        const regex =
            name !== "wfxWebViewList" && standardizeIdParams({...value?.regex});

        if (regex !== undefined) {
            // Handle potential misnamed property in idParams
            if (regex?.text?.ang) {
                regex.text = regex.text.ang;
            }
        }

        // Handle potential misnamed property in idParams
        if (idParams.text?.ang) {
            idParams.text = idParams.text.ang;
        }

        if (value.activityName) {
            idParams.activityName = value.activityName;
        }

        if (value.controller) {
            idParams.controller = value.controller;
        }

        const targetValuesToMatch = getTargetValuesToMatch(
            value.target,
            value.relationToTarget
        );

        if (Object.keys(targetValuesToMatch).length !== 0 && value?.target?.regex) {
            targetValuesToMatch.regex =
                name !== "wfxWebViewList" &&
                standardizeIdParams({...value?.target?.regex});

            if (targetValuesToMatch.regex !== undefined) {
                // Handle potential misnamed property in idParams
                if (targetValuesToMatch.regex.text?.ang) {
                    targetValuesToMatch.regex.text = targetValuesToMatch.regex.text.ang;
                }
            }
        }

        // Build the resulting object
        arrayResult.push({
            name, // The key name
            regex,
            ...idParams, // Standardized idParams
            target: targetValuesToMatch, // Any target data
        });
    }

    return arrayResult; // Return the populated array
}

function findMatchingNode(root, identifier, regex) {
    // Helper function to check if a node matches the given identifier
    const isMatchingNode = (node, identifier) => {
        for (const [key, value] of Object.entries(identifier)) {
            // Exclude 'name' from matching criteria
            if (key === "name") continue;

            // For Android resource id
            if (key === "ar_id") {
                const nodeId = node.id?.split(`android:id/`).pop();
                if (regex?.[key]) {
                    if (!parseRegexString(regex?.[key])?.test(nodeId)) return false;
                } else {
                    if (nodeId !== value) return false;
                }
            }

            // Special handling for 'id', compare after transformation
            else if (key === "id") {
                const nodeId = node[key]
                    ?.split(`${root.ROOT_NODE.client_package_name}:id/`)
                    .pop();
                if (regex?.[key]) {
                    if (!parseRegexString(regex?.[key])?.test(nodeId)) return false;
                } else {
                    if (nodeId !== value) return false;
                }
            } else {
                // For other keys, direct comparison
                if (regex?.[key]) {
                    if (!parseRegexString(regex?.[key])?.test(node[key])) return false;
                } else {
                    if (node[key] !== value) return false;
                }
            }
        }
        return true;
    };

    // Loop through the keys and find a matching node
    for (const id of Object.keys(root)) {
        const node = root[id];
        if (isMatchingNode(node, identifier)) {
            return node; // Return early once a match is found
        }
    }

    // Return undefined if no match is found
    return undefined;
}

// Follow a relationship path from a given node
function followRelationship(root, startNode, relationship) {
    let currentNode = startNode;

    for (const step of relationship) {
        if (!currentNode) {
            return null; // If the current node is null, break out
        }

        const direction = step.charAt(0); // 'P' or 'C'

        if (direction === "P") {
            currentNode = root[currentNode.parentId] || null; // Go to the parent node
            continue;
        } else if (direction === "C") {
            const index = parseInt(step.slice(1), 10) || 0; // Default child index to 0 if not specified
            if (typeof currentNode === "string") {
                currentNode = root[currentNode];
            }
            if (currentNode?.children?.length > 0) {
                currentNode = currentNode.children.find(
                    (s) => root[s].node_index === index
                ); // Go to the specified child node index
                continue;
            } else {
                return null; // Return null if child index is out of bounds
            }
        }
    }

    return typeof currentNode === "string" ? root[currentNode] : currentNode;
}

function findFirstWebView() {
    return flattenedHierarchyArray.find((node) => {
        let isWebView = node["is_webview"];
        if (isWebView && platform === "ANDROID") {
            // For Android skip webviews that are google ads
            return "com.google.android.gms.ads.internal.webview" !== node["class"];
        }

        return isWebView;
    });
}

// TODO: Optimization needed
function findMatches(filteredHierarchy, identifiers, traceId) {
    if (!identifiers) {
        return;
    }
    // Initialize the output array
    const matchedIdentifiers = [];
    const unMatchedIdentifiers = [];
    const matchedNode = [];
    const identifiersArray = getIdentifiersInArray(identifiers);

    let regex = {};

    // Iterate over each object in the second array
    identifiersArray?.forEach((identifier) => {
        const name = identifier.name; // Store the name for the output
        let found = false; // Flag to indicate if a match is found
        const ObserverData = {
            identifier_id: name,
        };
        regex = identifier.regex;
        delete identifier.regex;
        /*
      Step: 1
      Check if the element is referenced or not
      if the target array is empty the the node is identified uniquely
      */

        if (Object.keys(identifier?.target).length === 0) {
            delete identifier.target;

            const compareActivityName =
                identifier?.activityName &&
                (regex.activityName
                    ? !parseRegexString(regex?.activityName)?.test(
                        filteredHierarchy?.activity_name
                    )
                    : !filteredHierarchy?.activity_name?.includes(
                        identifier?.activityName
                    ));

            const compareController =
                identifier?.controller &&
                (regex.controller
                    ? !parseRegexString(regex?.controller)?.test(
                        filteredHierarchy?.controller
                    )
                    : !filteredHierarchy?.controller?.includes(identifier?.controller));

            if (compareActivityName) {
                unMatchedIdentifiers.push(name);
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.ON_IDENTIFIER_NOT_MATCHED,
                    properties: {
                        ...ObserverData,
                        activity_name: "false",
                    },
                    className: "finder.js",
                    methodName: "findMatches",
                }, traceId);
            } else if (compareController) {
                unMatchedIdentifiers.push(name);
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.ON_IDENTIFIER_NOT_MATCHED,
                    properties: {
                        ...ObserverData,
                        controller: "false",
                    },
                    className: "finder.js",
                    methodName: "findMatches",
                }, traceId);
            } else {
                if (identifier.activityName) {
                    ObserverData.activity_name = "true";
                } else {
                    ObserverData.controller = "true";
                }

                delete identifier.activityName;
                delete identifier.controller;

                // Iterate over each object in the first array
                for (const node of flattenedHierarchyArray) {
                    let isMatch = true; // Assume a match until proven otherwise
                    // Check if all key-value pairs in identifier (except 'name') match with node
                    for (const key in identifier) {
                        // check if the key is in regex
                        if (regex?.[key] !== undefined) {
                            const regexValue = parseRegexString(regex?.[key]);

                            if (
                                key !== "name" &&
                                key !== "id" &&
                                key !== "ar_id" &&
                                !regexValue.test(node[key])
                            ) {
                                ObserverData[getCorrectKey(key)] = "false";
                                isMatch = false; // If any key doesn't match, it's not a match
                                break;
                            } else if (
                                key === "ar_id" &&
                                !regexValue.test(node.id?.split(`android:id/`).pop())
                            ) {
                                ObserverData.ar_id = "false";
                                isMatch = false; // If any key doesn't match, it's not a match
                                break;
                            } else if (
                                key === "id" &&
                                !regexValue.test(
                                    node[key]
                                        ?.split(`${filteredHierarchy.client_package_name}:id/`)
                                        .pop()
                                )
                            ) {
                                ObserverData.r_id = "false";
                                isMatch = false; // If any key doesn't match, it's not a match
                                break;
                            } else {
                                ObserverData[getCorrectKey(key)] = "true";
                            }
                        } else {
                            if (
                                key !== "name" &&
                                key !== "id" &&
                                key !== "ar_id" &&
                                node[key] !== identifier[key]
                            ) {
                                ObserverData[getCorrectKey(key)] = "false";
                                isMatch = false; // If any key doesn't match, it's not a match
                                break;
                            } else if (
                                key === "ar_id" &&
                                node.id?.split(`android:id/`).pop() !== identifier[key]
                            ) {
                                ObserverData.ar_id = "false";
                                isMatch = false; // If any key doesn't match, it's not a match
                                break;
                            } else if (
                                key === "id" &&
                                node[key]
                                    ?.split(`${filteredHierarchy.client_package_name}:id/`)
                                    .pop() !== identifier[key]
                            ) {
                                ObserverData.r_id = "false";
                                isMatch = false; // If any key doesn't match, it's not a match
                                break;
                            } else {
                                ObserverData[getCorrectKey(key)] = "true";
                            }
                        }
                    }

                    // If a match is found, set found to true and break the loop
                    if (isMatch) {
                        found = true;

                        const updatedNodeBounds = getRelativeBounds(node);

                        matchedNode.push({
                            id: name,
                            bounds: updatedNodeBounds,
                            scale: node.scale,
                            node,
                        });
                        break;
                    }
                }

                // Add the result to the output array
                if (found) {
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.FINDER,
                        event_name: OBSERVER_EVENTS.FINDER.ON_IDENTIFIER_MATCHED,
                        properties: {
                            ...ObserverData,
                        },
                        className: "finder.js",
                        methodName: "findMatches",
                    }, traceId);
                    matchedIdentifiers.push(name);
                } else {
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.FINDER,
                        event_name: OBSERVER_EVENTS.FINDER.ON_IDENTIFIER_NOT_MATCHED,
                        properties: {
                            ...ObserverData,
                        },
                        className: "finder.js",
                        methodName: "findMatches",
                    }, traceId);
                    unMatchedIdentifiers.push(name);
                }
                return;
            }
        } else {
            /*
      Step: 2
      Check if the element is referenced or not
      if the target array is not empty then find out the unique node and track the non referenced node by the relation ship array and compare with the params
      */

            const target = identifier.target;
            delete identifier.target;

            const compareActivityName =
                identifier?.activityName &&
                (regex.activityName
                    ? !parseRegexString(regex?.activityName)?.test(
                        flattenedHierarchy.ROOT_NODE?.activity_name
                    )
                    : !flattenedHierarchy.ROOT_NODE?.activity_name?.includes(
                        identifier?.activityName
                    ));

            const compareController =
                identifier?.controller &&
                (regex.controller
                    ? !parseRegexString(regex?.controller)?.test(
                        flattenedHierarchy.ROOT_NODE?.controller
                    )
                    : !flattenedHierarchy.ROOT_NODE?.controller?.includes(
                        identifier?.controller
                    ));

            if (compareActivityName) {
                unMatchedIdentifiers.push(name);
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.ON_IDENTIFIER_NOT_MATCHED,
                    properties: {
                        ...ObserverData,
                        activity_name: "false",
                    },
                    className: "finder.js",
                    methodName: "findMatches",
                }, traceId);
            } else if (compareController) {
                unMatchedIdentifiers.push(name);
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.ON_IDENTIFIER_NOT_MATCHED,
                    properties: {
                        ...ObserverData,
                        controller: "false",
                    },
                    className: "finder.js",
                    methodName: "findMatches",
                }, traceId);
            } else {
                if (identifier.activityName) {
                    ObserverData.activity_name = "true";
                } else {
                    ObserverData.controller = "true";
                }

                delete identifier.activityName;
                delete identifier.controller;

                const referenceNode = findMatchingNode(
                    flattenedHierarchy,
                    identifier,
                    regex
                );

                if (!referenceNode) return unMatchedIdentifiers.push(name);

                const actualNode = followRelationship(
                    flattenedHierarchy,
                    referenceNode,
                    target.relationship
                );

                if (!actualNode) return unMatchedIdentifiers.push(name);

                const targetRegex = target?.regex;
                delete target?.relationship;
                delete target?.regex;

                let isMatch = true;

                // Check if matching to the node is required
                if (Object.keys(target).length > 1) {
                    for (const key in target) {
                        if (targetRegex?.[key] !== undefined) {
                            const regexValue = parseRegexString(targetRegex?.[key]);
                            if (
                                key !== "id" &&
                                key !== "ar_id" &&
                                !regexValue.test(actualNode?.[key])
                            ) {
                                ObserverData[getCorrectKey(key)] = "false";
                                isMatch = false; // If any key doesn't match, it's not a match
                                break;
                            } else if (
                                key === "ar_id" &&
                                !regexValue.test(actualNode.id?.split(`android:id/`).pop())
                            ) {
                                ObserverData.ar_id = "false";
                                isMatch = false; // If any key doesn't match, it's not a match
                                break;
                            } else if (
                                key === "id" &&
                                !regexValue.test(
                                    actualNode[key]
                                        ?.split(`${filteredHierarchy.client_package_name}:id/`)
                                        .pop()
                                )
                            ) {
                                ObserverData.r_id = "false";
                                isMatch = false; // If any key doesn't match, it's not a match
                                break;
                            } else {
                                ObserverData[getCorrectKey(key)] = "true";
                            }
                        } else {
                            if (
                                key !== "id" &&
                                key !== "ar_id" &&
                                actualNode?.[key] !== target?.[key]
                            ) {
                                ObserverData[getCorrectKey(key)] = "false";
                                isMatch = false; // If any key doesn't match, it's not a match
                                break;
                            } else if (
                                key === "ar_id" &&
                                actualNode["id"]?.split(`android:id/`).pop() !== target?.[key]
                            ) {
                                ObserverData.ar_id = "false";
                                isMatch = false; // If any key doesn't match, it's not a match
                                break;
                            } else if (
                                key === "id" &&
                                actualNode[key]
                                    ?.split(`${filteredHierarchy.client_package_name}:id/`)
                                    .pop() !== target?.[key]
                            ) {
                                ObserverData.r_id = "false";
                                isMatch = false; // If any key doesn't match, it's not a match
                                break;
                            } else {
                                ObserverData[getCorrectKey(key)] = "true";
                            }
                        }
                    }
                }

                const updatedNodeBounds = getRelativeBounds(actualNode);

                if (isMatch) {
                    matchedNode.push({
                        id: name,
                        bounds: updatedNodeBounds,
                        scale: actualNode?.scale,
                        node: actualNode,
                    });
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.FINDER,
                        event_name: OBSERVER_EVENTS.FINDER.ON_IDENTIFIER_MATCHED,
                        properties: {
                            ...ObserverData,
                        },
                        className: "finder.js",
                        methodName: "findMatches",
                    }, traceId);
                    matchedIdentifiers.push(name);
                } else {
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.FINDER,
                        event_name: OBSERVER_EVENTS.FINDER.ON_IDENTIFIER_NOT_MATCHED,
                        properties: {
                            ...ObserverData,
                        },
                        className: "finder.js",
                        methodName: "findMatches",
                    }, traceId);
                    unMatchedIdentifiers.push(name);
                }
            }
        }
    });

    return {
        matchedIdentifiers,
        unMatchedIdentifiers,
        matchedNode,
    }; // Return the final output array
}

// Flatten the hierarchy
function getFlattenedHierarchy({
                                   currentNode,
                                   parentId,
                                   root = true,
                                   hierarchy = {},
                               }) {
    // If parentId is not present then add this
    if (parentId === undefined) parentId = "NULL_PARENT_UUID";

    let list = [];
    // Final check both root and node not present, then exit
    if (currentNode === undefined) return list;

    // Assign the parent node to the current node
    currentNode.parentId = parentId || "";

    // Check if the node is a web node
    if (currentNode.normalised_bounds !== undefined && currentNode.bounds) {
        currentNode.bounds = currentNode.normalised_bounds;
    }

    // Store the current node in the hierarchy
    hierarchy[currentNode.uuid || "ROOT_NODE"] = currentNode;
    list.push(currentNode);

    // If it's a root node, iterate over children
    if (
        root &&
        currentNode.layout?.children?.length &&
        currentNode.layout?.children?.length > 0
    ) {
        const layout = currentNode.layout;
        const childrenLength = layout?.children?.length || 0;

        for (let i = 0; i < childrenLength; i++) {
            const res = getFlattenedHierarchy({
                currentNode: layout?.children?.[i],
                parentId: layout.uuid,
                root: false,
                hierarchy,
            });

            list.push(...res);
        }

        currentNode.layout.children = layout.children.map((child) => child.uuid); // Update to hold only child UUIDs
    }
    // Apart from root node, iterate over children
    else if (currentNode.children?.length && currentNode.children?.length > 0) {
        currentNode?.children?.forEach((n) => {
            const res = getFlattenedHierarchy({
                currentNode: {
                    ...n,
                    boundingArea: getBoundingArea(n?.bounds) || 0,
                },
                parentId: currentNode.uuid,
                root: false,
                hierarchy,
            });

            list.push(...res);
        });

        currentNode.children = currentNode.children.map((child) => child.uuid); // Update to hold only child UUIDs
    }

    return list;
}

function getRelativeBounds(node) {
    if (!node) return;
    const nodeBounds = {...node?.bounds};

    const layoutBounds = filteredHierarchy?.layout?.bounds;

    nodeBounds.left = nodeBounds?.left - layoutBounds?.left;
    nodeBounds.top = nodeBounds?.top - layoutBounds?.top;
    nodeBounds.right = nodeBounds?.right - layoutBounds?.left;
    nodeBounds.bottom = nodeBounds?.bottom - layoutBounds?.top;

    return nodeBounds;
}

// js filename- observable.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// Initiate the loop to get the latest hierarchy


function init(traceId) {
    clearInterval(timer);
    waitingForResponse = false;
    hierarchyCommandLastSentAt = 0;
    hierarchyCommandLastResponseAt = 0;

    if (embedProject.concat(sortedProjectArray).length !== 0) {
        timer = setInterval(() => {
            try {
                if (noActiveProjects()) {
                    clearInterval(timer);
                    return;
                }

                const now = Date.now();
                const shouldSend = !waitingForResponse ||
                    (now - hierarchyCommandLastSentAt >= hierarchyCommandFallbackTimeout);

                if (shouldSend) {
                    sendMessageToNative({
                        command: SENDING_COMMANDS.HIERARCHY,
                        data: {
                            filterElementsOutsideViewPort:
                                features?.filterElementsOutsideViewPort || false,
                        },
                    }, traceId);

                    waitingForResponse = true;
                    hierarchyCommandLastSentAt = now;
                }
            } catch (error) {
                console.warn("init(): unable to successfully complete hierarchy loop", error);
            }
        }, features?.hierarchyLoopInterval?.intervalTime || intervalTime);
    }
}

function getIdFromProperty(key, property) {
    if (key && property && key?.length > property?.length) {
        const id = key.substr(property?.length, key?.length).replace("_", "");
        return id;
    }
}

function convertOldWfxData(
    configData,
    oldSortedProjectArray,
    oldProjectStatus,
    oldCompletedProjectsInFlow,
    oldProfileData
) {
    let convertedData = {
        projectArray: oldSortedProjectArray,
        selectedLanguage: selectedLanguage,
        allProjectStatus: oldProjectStatus,
        completedFlowProjects: oldCompletedProjectsInFlow,
    };

    const idToUniqueIdMap = {};
    const deploymentIdToIdMap = {};
    const idToProjectIdMap = {};
    const flowsInMenu = {};

    oldSortedProjectArray.map((project) => {
        let objKey = project.id;

        idToProjectIdMap[project?.assist?.id] =
            project?.projectParameters?.projectId;
        deploymentIdToIdMap[project?.projectParameters?.deploymentId] =
            project?.assist?.id;

        // coz in old native data they were using project id as id and now we are using project uniqueID as id
        idToUniqueIdMap[project.assist.id] = objKey;

        if (project?.connectedProjects?.length > 0) {
            flowsInMenu[objKey] = [];
            project.connectedProjects.forEach((connectedProject) => {
                // connectedProject.projectId is actually deploymentId
                deploymentId = connectedProject.projectId;
                console.warn("convertOldWfxData(): connectedProjectsParentIdMap", connectProjectsParentMap);
                configData?.every((projectData) => {
                    if (
                        projectData.projectParameters.deploymentType === "LINK" &&
                        projectData.projectParameters.deploymentId === deploymentId
                    ) {
                        flowsInMenu[objKey].push(
                            projectData.discoveryList?.[0].id || projectData.assists?.[0].id
                        );
                        deploymentIdToIdMap[deploymentId] =
                            projectData.discoveryList?.[0].id || projectData.assists?.[0].id;
                        idToProjectIdMap[
                        projectData.discoveryList?.[0].id || projectData.assists?.[0].id
                            ] = projectData.projectParameters.projectId;
                        return false;
                    }
                    return true;
                });
            });
        }
    });

    if (platform === "ANDROID") {
        const OldProperties = {
            DISCOVERY_PER_APP_FREQUENCY: "discovery_per_app_frequency",
            N_DISMISSED_BY_USER: "n_dismissed_by_user",
            N_SESSION_FREQUENCY: "n_session_frequency",
            N_DISMISS_BY_USER_ASSIST_FREQUENCY: "n_dismiss_by_user_assist_frequency",
            N_SESSION_ASSIST_FREQUENCY: "n_session_assist_frequency",
            PROJECT_COMPLETED: "project_completed",
            PERMANENTLY_DISABLED_PROJECT_LIST: "perm_disabled_project_list",
            PROJECT_MUTED: "project_muted",
        };
        const oldProfileKeys =
            (oldProfileData && Object.keys(oldProfileData)) || [];
        oldProfileKeys?.forEach((key) => {
            if (key.includes(OldProperties.DISCOVERY_PER_APP_FREQUENCY)) {
                const discovery_id = getIdFromProperty(
                    key,
                    OldProperties.DISCOVERY_PER_APP_FREQUENCY
                );
                const uniqueId = idToUniqueIdMap[discovery_id];
                const projectStatus = convertedData?.allProjectStatus[uniqueId];
                if (projectStatus) {
                    projectStatus.terminationStatus.perApp = oldProfileData[key];
                }
            }

            if (key.includes(OldProperties.N_DISMISSED_BY_USER)) {
                const discovery_id = getIdFromProperty(
                    key,
                    OldProperties.N_DISMISSED_BY_USER
                );
                const uniqueId = idToUniqueIdMap[discovery_id];
                const projectStatus = convertedData?.allProjectStatus[uniqueId];
                if (projectStatus) {
                    projectStatus.terminationStatus.nDismissedByUser = 1;
                }
            }

            if (key.includes(OldProperties.N_DISMISS_BY_USER_ASSIST_FREQUENCY)) {
                const assist_id = getIdFromProperty(
                    key,
                    OldProperties.N_DISMISS_BY_USER_ASSIST_FREQUENCY
                );
                const uniqueId = idToUniqueIdMap[assist_id];
                const projectStatus = convertedData?.allProjectStatus[uniqueId];
                if (projectStatus) {
                    projectStatus.terminationStatus.nDismissedByUser = 1;
                }
            }

            if (key.includes(OldProperties.N_SESSION_FREQUENCY)) {
                const discovery_id = getIdFromProperty(
                    key,
                    OldProperties.N_SESSION_FREQUENCY
                );
                const uniqueId = idToUniqueIdMap[discovery_id];
                const projectStatus = convertedData?.allProjectStatus[uniqueId];
                if (projectStatus) {
                    projectStatus.terminationStatus.nSession = oldProfileData[key];
                }
            }

            if (key.includes(OldProperties.N_SESSION_ASSIST_FREQUENCY)) {
                const assist_id = getIdFromProperty(
                    key,
                    OldProperties.N_SESSION_ASSIST_FREQUENCY
                );
                const uniqueId = idToUniqueIdMap[assist_id];
                const projectStatus = convertedData?.allProjectStatus[uniqueId];
                if (projectStatus) {
                    projectStatus.terminationStatus.nSession = oldProfileData[key];
                }
            }
        });

        const oldProfileDataCompletedProjects =
            (oldProfileKeys?.length &&
                oldProfileData[OldProperties.PROJECT_COMPLETED] &&
                Object.keys(
                    JSON.parse(oldProfileData[OldProperties.PROJECT_COMPLETED])
                )) ||
            [];

        Object.entries(flowsInMenu)?.forEach((entry) => {
            const flowMenuId = entry[0];
            const connectFlows = entry[1];
            if (connectFlows?.length > 0) {
                convertedData.allProjectStatus[
                    flowMenuId
                    ].terminationStatus.untilAllFlowsAreCompleted = connectFlows?.every(
                    (connectedFlow) => {
                        projectId = idToProjectIdMap[connectedFlow];
                        return oldProfileDataCompletedProjects?.includes(projectId);
                    }
                );
            }
            convertedData?.completedFlowProjects[flowMenuId]?.projects?.forEach(
                (project) => {
                    if (oldProfileDataCompletedProjects?.includes(project.id)) {
                        project.completed = true;
                    }
                }
            );
        });

        oldProfileKeys?.length &&
        oldProfileData[OldProperties.PERMANENTLY_DISABLED_PROJECT_LIST]?.forEach(
            (deploymentId) => {
                const id = deploymentIdToIdMap[deploymentId];
                const uniqueId = idToUniqueIdMap[id];
                if (uniqueId) {
                    convertedData.allProjectStatus[uniqueId].isTerminated = true;
                }
            }
        );

        // Case for Project muted to be tested later eg data in old properties project_muted:{"5":false,"8":false,"9":true}
        const oldProfileDataMutedProjects =
            (oldProfileKeys?.length &&
                oldProfileData[OldProperties.PROJECT_MUTED] &&
                JSON.parse(oldProfileData[OldProperties.PROJECT_MUTED])) ||
            {};
        Object.entries(oldProfileDataMutedProjects)?.forEach(
            ([flowId, value]) => {
            }
        );

        convertedData.selectedLanguage = oldProfileData?.language_selected;
    } else {
        convertedData.selectedLanguage = oldProfileData.leap_language_code;

        Object.entries(oldProfileData.leap_discovery_flow_completed).forEach(
            (entry) => {
                convertedData.allProjectStatus[
                    idToUniqueIdMap[entry[0]]
                    ].terminationStatus.perApp = entry[1];
            }
        );

        [
            ...oldProfileData.leap_assists_dismissed,
            ...oldProfileData.leap_discovery_dismissed,
        ].forEach((id) => {
            convertedData.allProjectStatus[
                idToUniqueIdMap[id]
                ].terminationStatus.nDismissedByUser = 1;
        });

        Object.entries(oldProfileData.leap_completed_flows).forEach((entry) => {
            const flowMenuId = idToUniqueIdMap[entry[0]];

            if (flowsInMenu[flowMenuId]) {
                convertedData.allProjectStatus[
                    flowMenuId
                    ].terminationStatus.untilAllFlowsAreCompleted = flowsInMenu[
                    flowMenuId
                    ].every((connectedFlowId) => {
                    if (!entry[1].includes(connectedFlowId)) {
                        return false;
                    }
                    return true;
                });

                convertedData.completedFlowProjects[flowMenuId].projects.forEach(
                    (project) => {
                        if (entry[1].includes(deploymentIdToIdMap[project.id])) {
                            project.completed = true;
                        }
                    }
                );
            }
        });

        // Case for Project muted to be tested later - data in oldProfileData.leap_muted_discoveries:[10, 6]
        oldProfileData.leap_muted_discoveries?.forEach((id) => {
            // const uniqueId = idToUniqueIdMap[id];
        });

        oldProfileData.leap_terminated_discoveries?.forEach((id) => {
            const uniqueId = idToUniqueIdMap[id];
            if (uniqueId) {
                convertedData.allProjectStatus[uniqueId].isTerminated = true;
            }
        });

        Object.entries({
            ...oldProfileData.leap_discovery_presented,
            ...oldProfileData.leap_assists_presented,
        }).forEach((entry) => {
            convertedData.allProjectStatus[
                idToUniqueIdMap[entry[0]]
                ].terminationStatus.nSession = entry[1];
        });
    }
    Object.keys(convertedData.allProjectStatus).forEach((uniqueId) => {
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
                    if (
                        convertedData.allProjectStatus[uniqueId].terminationStatus
                            .nSession > 0
                    )
                        convertedData.allProjectStatus[uniqueId].isFlowTriggered = true;
                    break;
                }
                case "EVERY_SESSION_UNTIL_DISMISSED": {
                    if (
                        convertedData.allProjectStatus[uniqueId].terminationStatus
                            .nDismissedByUser === 1
                    )
                        convertedData.allProjectStatus[uniqueId].isFlowTriggered = true;
                    break;
                }
                case "EVERY_SESSION_UNTIL_FLOW_COMPLETE": {
                    if (
                        convertedData.allProjectStatus[uniqueId].terminationStatus.perApp >
                        0
                    )
                        convertedData.allProjectStatus[uniqueId].isFlowTriggered = true;
                    break;
                }
                case "EVERY_SESSION_UNTIL_ALL_FLOWS_ARE_COMPLETED": {
                    if (
                        convertedData.allProjectStatus[uniqueId].terminationStatus
                            .untilAllFlowsAreCompleted
                    )
                        convertedData.allProjectStatus[uniqueId].isFlowTriggered = true;
                    break;
                }
                default: {
                    //console.log( "Unknown trigger frequency: " convertedData.allProjectStatus[uniqueId].triggerCase);
                }
            }
        } else {
            convertedData.allProjectStatus[uniqueId].isFlowTriggered = false;
        }
    });
    return convertedData;
}

// Function used to send config settings and assets links to pre download
function saveConfigAndDownloadBulkAssets(res, traceId) {
    const assetList = [];
    const soundList = {};

    embedProject
        .concat(sortedProjectArray?.concat(Object.values(flowWalkthroughs)))
        .forEach((p) => {
            if (p === undefined) return;
            p.auiContent.content.forEach((c) => {
                if (!c) return;
                c.startsWith("http")
                    ? assetList.push(`${c}`)
                    : assetList.push(`${p.auiContent.baseUrl}${c}`);
            });

            const sounds = Object.keys(p.localeSounds?.sounds);

            if (sounds.length > 0) {
                sounds.forEach((sound) => {
                    if (soundList[sound] === undefined) soundList[sound] = [];

                    const updatedSounds = p.localeSounds?.sounds[sound].map((s) => {
                        s.url = s.url?.startsWith("http")
                            ? `${s?.url}`
                            : `${p?.localeSounds?.baseUrl}${s?.url}`;
                        return s;
                    });

                    soundList[sound] = [...soundList[sound], ...updatedSounds];
                });
            }
        });

    // Ask native to save config
    sendMessageToNative({
        command: SENDING_COMMANDS.ON_CONFIG_FETCH,
        data: {
            config: res,
            features,
            loggerConfig,
            assetsToDownload: {
                files: assetList,
                sounds: soundList,
            },
        },
    }, traceId);
}

// Script uses to extract the matching identifiers from the client web view
function sendWebJSscript({webIdentifiers, webViewNode}, traceId) {
    let webViewBounds = webViewNode["bounds"];
    let webViewScale = webViewNode["scale"];

    var message = {
        command: SENDING_COMMANDS.WEB_SCRIPT,
        data: {
            script: createFinderJavascript(
                webIdentifiers,
                webViewBounds,
                webViewScale,
                webViewNode.uuid
            ),
            webviewInfo: {
                uuid: webViewNode.uuid,
            },
        },
    };
    sendMessageToNative(message, traceId);
}

// Once flow is completed send the call back to native side
function sendProjectCompletion({id, reset}, traceId) {
    const flow = completedProjectsInFlow?.[currentlyRunningFlow.id || id];

    if (flow === undefined) return;

    var message = {
        command: SENDING_COMMANDS.PROJECT_COMPLETED,
        data: {
            language: selectedLanguage,
            projects: reset ? [] : flow.projects,
        },
    };

    sendMessageToNative(message, traceId);
}

// Update the state change to native side to cache it
function saveTheLatestStateChange(traceId) {
    if (inPreviewMode)
        return;

    const currentUserState = buildCurrentUserStateObject();
    sdkStateService.updateCurrentUserState(currentUserState);
    sdkStateService.segmentConfigMap = segmentConfigMap;
    sdkStateService.appLocale = appLocale;

    //console.debug("SAVE_USER_STATE", currentUserState);
    sendJSObserverLog({
        message: "saving user state",
        methodName: "saveTheLatestStateChange",
        level: ObserverLogLevel.DEBUG,
        userState: buildUserStateObjectForObserverLog(currentUserState),
        traceId
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
        lastUpdatedConfigAt,
        lastProfileUpdatedAt,
        lastUpdatedEmbedConfigAt,
        savedEmbedProject: embedProject,
        userId: sdkStateService.currentUserId,
        projectsCompletionStats: completedProjectsInFlow,
        apiKey: appApiKey,
        baseURL: configBaseUrl,
        appVersion: appVersionName,
        features,
        metaConfigs,
        loggerConfig,
        customProps: customProperties,
        connectProjectsParentMap: connectProjectsParentMap,
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
    connectProjectsParentMap = {};
    resetUserLoggedIn();
}


// Update the state change to native side to cache it
function saveTheLatestProps(traceId) {
    let message = {
        command: SENDING_COMMANDS.SAVE_USER_PROPS,
        data: {
            userProps: customProperties,
        },
    };

    !inPreviewMode && sendMessageToNative(message, traceId);
}

// construct the event and send to SDK
function sendAnalyticEvent(
    eventName = ANALYTICS_EVENTS.ELEMENT_SEEN,
    properties = {},
    traceId
) {
    if (isSelfHosted) return;
    let eventId = generateUUID();
    let timestamp = new Date().toISOString();

    const eventMessage = {
        eventName: eventName,
        data: {
            eventId,
            timestamp,
            ...properties
        }
    };

    eventCollectorService.enqueueEvent(eventMessage, traceId);
    let projectGenerateProperties = analyticsService.getGeneralProperties();
    const message = {

        command: SENDING_COMMANDS.EVENT_CALLBACK,
        data: {
            clientCallback: {
                projectName: projectGenerateProperties?.projectName,
                language: projectGenerateProperties?.language,
                previousLanguage: properties?.previousLanguage,
                timestamp: timestamp,
                eventName: eventName,
                deploymentName: projectGenerateProperties?.deploymentName,
                id: eventId,
                deploymentVersion: projectGenerateProperties?.deploymentVersion,
                pageName: properties?.pageName,
                instructionName: properties?.instructionName,
                actionEventType: properties?.actionEventType,
                actionEventValue: properties?.actionEventValue,
                terminationRule: properties?.terminationRule,
                eventSource: JS_SDK,
                eventSourceVersion: jsVersionNumber,
                userId: getCurrentUserId(),
            },
            leapUserId: getCurrentUserId(),
        },
    };
    sendMessageToNative(message, traceId);
}

function removeTimestamps(message) {
    const {
        "string.created_at": _,
        "long.timestamp": __,
        ...dataWithoutTimestamp
    } = message.data;

    return {
        command: message.command,
        data: dataWithoutTimestamp,
    };
}

function flushFinderObserverEvents(traceId) {
    let sameAsCached = true;

    sameAsCached = Object.keys(finderObserverEvents).every((eventName) => {
        if (
            finderObserverEvents[eventName].length !==
            cachedFinderObserverEvents[eventName].length
        ) {
            return false;
        }

        messageListsMatch = finderObserverEvents[eventName].every(
            (message, index) => {
                if (
                    JSON.stringify(removeTimestamps(message)) ===
                    JSON.stringify(
                        removeTimestamps(cachedFinderObserverEvents[eventName][index])
                    )
                )
                    return true;
                return false;
            }
        );
        return messageListsMatch;
    });

    if (!sameAsCached) {
        Object.entries(finderObserverEvents).forEach(([eventName, messageList]) => {
            cachedFinderObserverEvents[eventName] = finderObserverEvents[eventName];
            messageList.forEach((message) => {
                sendMessageToNative(message, traceId);
            });
        });
    }
}

function sendJSObserverLog({
                               message,
                               logData = {},
                               className = "Global",
                               methodName,
                               level = ObserverLogLevel.INFO,
                               userState,
                               traceId
                           }) {
    if (disableObserverLogging)
        return;
    try {
        observerLogService.sendObserverLog(message, logData, new Date(), className, methodName, level, userState, traceId);
    } catch (error) {
        //console.error("sendJSDebugObserverLog(): error while sending.", error)
    }
}

function sendJSErrorObserverLog({
                                    message,
                                    logData = {},
                                    level = ObserverLogLevel.ERROR,
                                    error,
                                    className,
                                    methodName,
                                    traceId
                                }) {
    if (disableObserverLogging)
        return;
    sendJSObserverLog({
        message: `[ERROR] ${message}`,
        logData: {...logData, error: getErrorLogObjectFromError(error)},
        className: className,
        methodName: methodName,
        level: level,
        traceId
    });
}

function buildUserStateObjectForObserverLog(userState) {
    let userStateLog = {};
    try {
        let projectArrayLog = [];
        if (userState.projectArray) {
            userState.projectArray.forEach((project) => {
                projectArrayLog.push({
                    id: project?.id,
                    projectId: project?.projectParameters?.projectId,
                    deploymentVersion: project?.projectParameters?.deploymentVersion
                });
            })
        }

        userStateLog = {
            projectArrayLog: projectArrayLog,
            projectsStatus: userState.projectsStatus,
            language: userState.language,
            lastUpdatedConfigAt: userState.lastUpdatedConfigAt,
            lastProfileUpdatedAt: userState.lastProfileUpdatedAt,
            lastUpdatedEmbedConfigAt: userState.lastUpdatedEmbedConfigAt,
            userId: userState.userId,
            wfId: userState.wfId,
            projectsCompletionStats: userState.projectsCompletionStats,
            customProps: userState.customProps,
        }
    } catch (error) {
        console.error("Unable to generate JS Observer userStateLog", error);
    }
    return userStateLog || userState;
}


function buildUserStateObjectForJSLog() {
    const userState = buildCurrentUserStateObject();
    return buildUserStateObjectForObserverLog(userState);
}

// construct the observer logs and send to SDK
function sendObserverLogs({
                              event_name = OBSERVER_EVENTS.NETWORK.ON_CONFIG_DOWNLOAD_STARTED,
                              category = OBSERVER_EVENT_CATEGORIES.NETWORK,
                              properties = {},
                              className,
                              methodName,
                              level = ObserverLogLevel.INFO,
                          }, traceId) {
    if (disableObserverLogging)
        return;

    if (isSelfHosted) return;

    let logData = appendTypesToKeys({
        category,
        event_name,
        sdk_name: "leap_sdk",
        ...properties,
        class_name: className,
        created_at: getCurrentTimeInGMT(),
        timestamp: Date.now(),
        trace_id: traceId,
    });
    try {

        let userState = buildUserStateObjectForJSLog();

        const message = {
            command: SENDING_COMMANDS.OBSERVER_LOG,
            data: logData,
        };

        let eventName = message.data["string.event_name"];
        if (eventName in finderObserverEvents) {
            finderObserverEvents[message.data["string.event_name"]].push(message);
            return;
        }
        console.log("sendObserverLog() message command ", message?.command);

        sendJSObserverLog({
            message: `command to native [${message.command}]`,
            logData: message?.data,
            className: className,
            methodName: methodName,
            level: level,
            userState: userState,
        }, traceId);
    }catch (error) {
        console.error("Unable to push JS Observer log", error);
    }
}

function shouldBlockRequestToNative(message) {
    return message && message.command && (message.command === SENDING_COMMANDS.OBSERVER_LOG
        || message.command === SENDING_COMMANDS.ANALYTICS_EVENT);
}

// Callback function to target the native platform and pass the message
function sendMessageToNative(message, traceId) {
    if (!message) {
        return;
    }

    logCommandToNativeLayer(message, traceId);

    if (shouldBlockRequestToNative(message)) return;

    postMessageToAndroid(JSON.stringify(message));
    postMessageToIos(JSON.stringify(message));

    function logCommandToNativeLayer(message, traceId) {
        try {
            if (shouldLogCommandName(message)) {
                console.log("sendMessageToNative() message command ", message?.command);
                let messageData = shouldLogData(message) ? message.data ?? {} : {included: false};
                sendJSObserverLog({
                    message: `command to native [${message.command}]`,
                    logData: {messageData},
                    level: ObserverLogLevel.INFO,
                    methodName: "sendMessageToNative",
                    traceId
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    function shouldLogCommandName(message) {
        return message?.command && ![
            SENDING_COMMANDS.HIERARCHY,
            SENDING_COMMANDS.ANALYTICS_EVENT,
            SENDING_COMMANDS.NO_CONTEXT_FOUND,
            SENDING_COMMANDS.WEB_SCRIPT,
            SENDING_COMMANDS.OBSERVER_EVENT_LEVELS,
            SENDING_COMMANDS.CLEAR_ANALYTICS_PENDING_QUEUE,
            SENDING_COMMANDS.FLUSH_CACHED_EVENTS

        ].includes(message.command);
    }

    function shouldLogData(message) {
        return message?.command && ![
            SENDING_COMMANDS.ON_CONFIG_FETCH,
            SENDING_COMMANDS.WEB_SCRIPT,
            SENDING_COMMANDS.SAVE_USER_STATE,
            SENDING_COMMANDS.ANALYTICS_EVENT,
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

// Callback function for the Android
function postMessageToAndroid(message) {
    window?.JinyAndroid && window?.JinyAndroid?.postMessage(message);
}

// Callback function for the IOS
function postMessageToIos(e) {
    window.webkit &&
    window.webkit.messageHandlers &&
    window.webkit.messageHandlers.iosListener &&
    window.webkit.messageHandlers.iosListener.postMessage(e);
}

// js filename- listener.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

function receiveScreenHierarchy(
    screenHierarchy,
    isWebFetchComplete,
    webIdentifiers,
    traceId
) {

    waitingForResponse = false;
    hierarchyCommandLastResponseAt = Date.now();

    let timeTaken = hierarchyCommandLastResponseAt - hierarchyCommandLastSentAt;
    if (timeTaken > hierarchyFetchTimeTakenLogBuffer) {
        console.debug(`receiveScreenHierarchy(): timeTaken- ${timeTaken}ms, size- ${JSON.stringify(screenHierarchy || {}).length/1000}KB`);
    }

    if (screenHierarchy) {
        filteredHierarchy = filterHierarchy(screenHierarchy);
    }

    if (!filteredHierarchy || Object.keys(filteredHierarchy).length == 0) return;

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

    // If any project is active search for steps
    if (
        activeProject.id !== "" &&
        currentStaticFlow.id !== undefined && // If flow is active
        currentStaticFlow.status === "RENDERING-STEPS" && // If flow start screen is rendered
        selectedLanguage !== ""
    ) {
        let lastStep = currentStaticFlow?.stepsStatus?.slice(-1)?.[0];
        let foundProject;
        if (activeProject.isAFlowMenu){
            parentDeploymentVersion = activeProject.projectParameters.deploymentVersion;
        }

        if (currentlyRunningFlow.id !== "") {
            foundProject = runDetectionLogicForProjects(true, webIdentifiers, traceId);
            if (!parentDeploymentVersion && foundProject?.isAFlowMenu) {
                parentDeploymentVersion = foundProject?.projectParameters.deploymentVersion;
            }
        }

        const stepFound = runDetectionLogicForSteps({lastStep}, webIdentifiers, traceId);

        if (stepFound !== "isWeb" || isWebFetchComplete) {
            // If any step is found
            if (stepFound !== undefined) {
                // Check and update the bounds if the step is same as previous else do nothing
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.ON_STEP_DETECTED,
                    properties: {
                        project_id: activeProject.projectParameters.projectId,
                        project_name: activeProject.projectParameters.projectName,
                        deployment_id: activeProject.projectParameters.deploymentId,
                        deployment_version: Number(
                            activeProject.projectParameters.deploymentVersion
                        ),
                        type: stepFound.assistType,
                        step_name: stepFound.assist.name,
                        step_id: stepFound.assist.id,
                        step_unique_id: stepFound.assist.uniqueID,
                    },
                    className: "listener.js",
                    methodName: "receivedScreenHierarchy",
                }, traceId);

                if (
                    checkAndUpdateBounds({
                        activeAssist: stepFound,
                        activeProjectId: activeStep?.id,
                        isAStep: true,
                    }, traceId)
                )
                    return;

                renderStep(stepFound, activeProject, traceId);
            } else {
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.ON_NO_STEP_DETECTED,
                    properties: {
                        project_id: activeProject.projectParameters.projectId,
                        project_name: activeProject.projectParameters.projectName,
                        deployment_id: activeProject.projectParameters.deploymentId,
                        deployment_version: Number(
                            activeProject.projectParameters.deploymentVersion
                        ),
                    },
                    className: "listener.js",
                    methodName: "receivedScreenHierarchy",
                }, traceId);

                if (currentlyRunningFlow.id === "" && foundProject !== undefined) {
                    if (activeStep.id !== "") resetActiveStep();
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
                            deployment_version: Number(
                                activeProject.projectParameters.deploymentVersion
                            ),
                            type: activeProject.projectType,
                        }
                    }, traceId);
                } else if (currentlyRunningFlow.id !== "") {
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
    // If no project is active search for all projects
    else {
        // get the webview identifiers
        const projectFound = runDetectionLogicForProjects(undefined, undefined, traceId);
        if (!parentDeploymentVersion && activeProject.isAFlowMenu) {
            parentDeploymentVersion = projectFound?.projectParameters.deploymentVersion;
        }

        if (projectFound !== "isWeb" || isWebFetchComplete) {
            // If any project is found
            if (projectFound !== undefined) {
                // Check and update the bounds if the project is same as previous else do nothing
                if (
                    checkAndUpdateBounds({
                        activeAssist: projectFound,
                        activeProjectId: activeProject?.id,
                        isAStep: false,
                    }, traceId)
                )
                    return;

                renderProject(projectFound, undefined, traceId);
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.ON_PROJECT_DETECTED,
                    properties: {
                        project_id: activeProject?.projectParameters?.projectId,
                        project_name: activeProject?.projectParameters?.projectName,
                        deployment_id: activeProject?.projectParameters?.deploymentId,
                        deployment_version: Number(
                            activeProject?.projectParameters?.deploymentVersion
                        ),
                        type: activeProject?.projectType,
                    },
                }, traceId);
            } else {
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
    const webViewProjects = embedProject
        .concat(sortedProjectArray)
        .concat(Object.values(flowWalkthroughs))
        .filter((project) => project?.isWebView);

    let matchedWebViewNode = findFirstWebView(filteredHierarchy);

    if (!matchedWebViewNode) {
        return;
    }

    sendWebJSscript({
        webIdentifiers: webViewProjects.reduce(
            (webIdentifierObject, project) =>
                (webIdentifierObject = {
                    ...webIdentifierObject,
                    ...project.webIdentifiers,
                }),
            {}
        ),
        webViewNode: matchedWebViewNode,
    }, traceId);
}

function checkAndUpdateBounds({activeAssist, activeProjectId, isAStep}, traceId) {
    // If the current and previous project are same
    if (activeAssist?.id === activeProjectId) {
        // Check if the current project is anchored element
        if (activeAssist.isAnchoredElement) {
            // Get the node bounds from the identified array
            const matchedNode = prevMatchedIdentifiers.matchedNode.find(
                (s) => activeAssist.targetId === s.id
            );

            // If the nodes bounds is not same is previous then update
            if (
                JSON.stringify(matchedNode?.bounds) !==
                JSON.stringify(previousBoundState)
            ) {
                let bodyObj = {
                    command: isAStep
                        ? SENDING_COMMANDS.UPDATE_STEP_BOUNDS
                        : SENDING_COMMANDS.UPDATE_ASSIST_BOUNDS,
                    data: {
                        assist: activeAssist.assist,
                        projectParameters: activeProject.projectParameters,
                        auiContent: activeProject.auiContent,
                        bounds: matchedNode?.bounds,
                        anchorNodeInfo: getAnchorNodeInfo(
                            activeAssist?.assist?.instruction?.assistInfo?.type,
                            activeAssist.targetId,
                            activeAssist,
                            [matchedNode]
                        ),
                    },
                };

                // Update the previousBoundState to current found bound
                previousBoundState = matchedNode?.bounds;

                if (isAStep) {
                    bodyObj = {
                        ...bodyObj,
                        data: {
                            ...bodyObj.data,
                            iconSetting: activeProject.iconSetting,
                            showLanguageOption: activeProject.languages.length > 1,
                            showIcon: currentlyRunningFlow.id === "" ? true : false,
                            selectedLanguage,
                        },
                    };
                }
                sendMessageToNative(bodyObj, traceId);
            }
        }
        // Do nothing
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
        isAFlowMenu: ["STATIC_FLOW_MENU", "STATIC_FLOW_CHECKLIST"].includes(
            projectFound.projectParameters.projectType
        ),
    };
}

function renderStep(stepFound, projectFound, traceId) {
    currentStaticFlow.stepsStatus.push({
        id: stepFound.id,
        toShow: true,
        completed: false,
        isOptional: stepFound.isOptional,
        isAnchoredElement: !!stepFound?.isAnchoredElement,
        identifier: stepFound.targetId,
        nextSteps: stepFound.nextSteps,
        completionStep: !!stepFound.isSuccess,
        step: stepFound.assist,
    });

    activeStep = {
        step: stepFound,
        id: stepFound.id,
        isAnchoredElement: !!stepFound?.isAnchoredElement,
    };

    const bodyObj = {
        command: SENDING_COMMANDS.STEP_FOUND,
        data: {
            assist: stepFound.assist,
            localeSounds: stepFound?.localeSounds,
            projectParameters: activeProject.projectParameters,
            auiContent: activeProject.auiContent,
            iconSetting: activeProject.iconSetting,
            showLanguageOption: activeProject.languages.length > 1,
            showIcon: currentlyRunningFlow.id === "" ? true : false,
            selectedLanguage,
            anchorNodeInfo: getAnchorNodeInfo(
                stepFound.assistType,
                stepFound.targetId,
                projectFound,
                prevMatchedIdentifiers.matchedNode
            ),
        },
    };

    if (stepFound.targetId) {
        const matchedNode = prevMatchedIdentifiers.matchedNode.find(
            (s) => stepFound.targetId === s.id
        );

        previousBoundState = matchedNode?.bounds;
        bodyObj.data.bounds = matchedNode?.bounds;
    }

    sendMessageToNative(bodyObj, traceId);
}

function renderProject(projectFound, showOnlyFlowIcon = false, traceId) {
    const bodyObj = {
        command: SENDING_COMMANDS.ASSIST_FOUND,
        data: {
            assist: projectFound.assist,
            projectParameters: projectFound.projectParameters,
            auiContent: projectFound.auiContent,
            localeSounds: projectFound?.localeSounds,
        },
    };

    const showOnlyIcon =
        projectFound.assist.autoStart ||
        getTriggerConditionForStaticFlow(
            projectFound.triggerCase,
            allProjectStatus[projectFound.id]?.isShown,
            allProjectStatus[projectFound.id]?.isFlowTriggered
        ) === "ICON";

    // If the project is a flow or a walkthrough
    if (projectFound.isAFlow || projectFound.isAFlowMenu) {
        bodyObj.command = SENDING_COMMANDS.WALKTHROUGH_FOUND;

        selectedLanguage = setSelectedLanguage(
            projectFound.languages,
            selectedLanguage || appLocale
        );

        bodyObj.data = {
            ...bodyObj.data,
            selectedLanguage,
            showLanguagePanel: selectedLanguage === "",
            languages: projectFound.languages,
            iconSetting: projectFound.iconSetting,
            showIcon: showOnlyFlowIcon || showOnlyIcon,
            autoStart: projectFound.assist.autoStart,
        };
    }

    // If the project is a flow
    if (projectFound.isAFlowMenu) {
        // In case if the running flow menu changes
        if (
            currentlyRunningFlow.id === projectFound.id ||
            currentlyRunningFlow.id === ""
        )
            sendProjectCompletion({id: projectFound.id, reset: false}, traceId);
        // In case if the executed flow is reselected
        else sendProjectCompletion({reset: true}, traceId);

        activeProject.id = projectFound.id;
        flowShown = true;

        currentlyRunningFlow = {
            id: projectFound.id,
            active: true,
        };
    }

    // If the project is a walkthrough
    if (projectFound.isAFlow && !projectFound.isAFlowMenu && !showOnlyFlowIcon) {
        // Don't break since next is the construction of the active object
        currentStaticFlow = {
            id: projectFound.id,
            isWebView: projectFound.isWebView,
            projectId: projectFound.projectParameters.deploymentId,
            status: "START",
            onlyIcon: showOnlyIcon,
            completed: false,
            autoStart: projectFound?.assist.autoStart,
            stepsStatus: [],
        };
    }

    // If the project is neither a flow or a walkthrough
    if (!(projectFound.isAFlow || projectFound.isAFlowMenu)) {
        if (projectFound.isAnchoredElement) {
            const getNativeMatchedNode = prevMatchedIdentifiers?.matchedNode?.find(
                (s) => projectFound.targetId === s.id
            );

            const getWebMatchedNode = currentMatchedWebIdentifiers?.matchedNode?.find(
                (s) => projectFound.targetId === s.id
            );

            const matchedNode = projectFound.isWebView
                ? getWebMatchedNode
                : getNativeMatchedNode;

            previousBoundState = matchedNode?.bounds;
            bodyObj.data.bounds = matchedNode?.bounds;
            bodyObj.data.anchorNodeInfo = getAnchorNodeInfo(
                projectFound?.assist?.instruction?.assistInfo?.type,
                projectFound?.targetId,
                projectFound,
                prevMatchedIdentifiers?.matchedNode
            );
        }
    }

    // For all the projects except flow
    if (!projectFound.isAFlowMenu && !showOnlyFlowIcon) {
        constructActiveProjectObject(projectFound);
    }

    if (
        projectFound.assist.autoStart &&
        showOnlyIcon &&
        !allProjectStatus[projectFound.id].isShown
    ) {
        currentStaticFlow = {
            ...currentStaticFlow,
            status: "RENDERING-STEPS",
            onlyIcon: false,
            autoStart: projectFound?.assist.autoStart,
        };
        resetFlow();
    }

    delayTimer = setTimeout(
        () => sendMessageToNative(bodyObj, traceId),
        allProjectStatus[projectFound.id]?.isShown ? 0 : projectFound?.triggerDelay
    );
}

function runDetectionLogicForProjects(
    searchOnlyFlowMenu = false,
    webIdentifiers,
    traceId
) {
    const projectFound = embedProject
        .concat(sortedProjectArray)
        ?.find((project, i) => {
            if (project === undefined) return;
            // Skip Survey projects if internet is not available
            if (
                [
                    'FEEDBACK_BOTTOM_SHEET',
                    'FEEDBACK_FULLSCREEN',
                    'FEEDBACK_POPUP',
                    'NPS_BOTTOM_SHEET',
                    'NPS_FULLSCREEN',
                    'NPS_POPUP'
                ].includes(project.projectParameters?.projectType) &&
                !navigator.onLine
            ) {
                return false;
            }
            if (
                allProjectStatus?.[project.id]?.isTerminated ||
                (!project.id.includes("discovery") && allProjectStatus?.[project.id]?.isCompleted)
            )
                return;
            // this is for webview project with first cycle having no matchedWebIdentifiers
            if (project.isWebView && !currentMatchedWebIdentifiers) return true;

            if (
                allProjectStatus?.[project.id]?.initialTerminationStatus?.nSession !==
                -1 &&
                allProjectStatus?.[project.id]?.terminationStatus?.nSession ===
                allProjectStatus?.[project.id]?.initialTerminationStatus?.nSession &&
                allProjectStatus?.[project.id]?.shownOnce === false
            ) {
                sendAnalyticEvent(ANALYTICS_EVENTS.PROJECT_TERMINATION, {
                    terminationRule: `nSession: ${allProjectStatus?.[project?.id]?.initialTerminationStatus.nSession}`,
                }, traceId);
                removeProjectFromStatusArray({id: project?.id});
                return false;
            } else if (
                (
                    allProjectStatus?.[project.id]?.initialTerminationStatus?.nDismissedByUser !== -1 &&
                    allProjectStatus?.[project.id]?.terminationStatus?.nDismissedByUser === 1
                ) ||
                (
                    allProjectStatus?.[project.id]?.initialTerminationStatus?.perApp !== -1 &&
                    allProjectStatus?.[project.id]?.terminationStatus?.perApp === allProjectStatus?.[project.id]?.initialTerminationStatus?.perApp
                ) ||
                (
                    allProjectStatus?.[project.id]?.initialTerminationStatus?.untilAllFlowsAreCompleted &&
                    allProjectStatus?.[project.id]?.terminationStatus?.untilAllFlowsAreCompleted
                )
            ) {
                // not sending the analytics since that is already sent
                removeProjectFromStatusArray({id: project?.id, saveState: false});
                return false;
            }

            switch (true) {
                case project.isAFlow:
                case project.isAFlowMenu: {
                    // For static and flow menu

                    const resWeb = webIdentifiers || currentMatchedWebIdentifiers;
                    const resNative = findMatches(
                        filteredHierarchy,
                        project.nativeIdentifiers,
                        traceId
                    );
                    // In case if the project is webview
                    const res = project?.isWebView ? resWeb : resNative;

                    found = checkIfIdentifierMatch(
                        res?.matchedIdentifiers,
                        project?.isWebView
                            ? [
                                ...project.assist.webIdentifiers,
                                ...(project.targetId ? [project.targetId] : []),
                            ]
                            : [
                                ...project.assist.nativeIdentifiers,
                                ...(project.targetId ? [project.targetId] : []),
                            ]
                    );

                    if (
                        found &&
                        (((!allProjectStatus[project?.id]?.isShown ||
                                    !allProjectStatus[project?.id]?.isCompleted ||
                                    project?.isIconEnabled) &&
                                checkToShowProject(project?.id)) ||
                            searchOnlyFlowMenu)
                    )
                        return project;
                    break;
                }

                case !project.isWebView: {
                    if (searchOnlyFlowMenu) break;

                    const res = findMatches(filteredHierarchy, project.nativeIdentifiers, traceId);
                    prevMatchedIdentifiers = res;
                    let found = false;

                    if (project.isAnchoredElement)
                        found = isArrayMatched(
                            [...project.assist.nativeIdentifiers, project.targetId],
                            res.matchedIdentifiers
                        );
                    else
                        found = isArrayMatched(
                            project.assist.nativeIdentifiers,
                            res.matchedIdentifiers
                        );

                    if (
                        found &&
                        allProjectStatus[project.id] &&
                        (!allProjectStatus[project.id]?.isShown ||
                            !allProjectStatus[project.id]?.isCompleted) &&
                        checkToShowProject(project.id)
                    )
                        return project;

                    break;
                }

                // Standalone web project project
                case project.isWebView: {
                    if (searchOnlyFlowMenu) break;

                    // const res = findMatches(filteredHierarchy, project.nativeIdentifiers);
                    const res = currentMatchedWebIdentifiers;
                    prevMatchedIdentifiers = res;
                    let found = false;
                    if (res === undefined) break;

                    if (project.isAnchoredElement)
                        found = checkIfIdentifierMatch(res.matchedIdentifiers, [
                            ...project.assist.webIdentifiers,
                            project.targetId,
                        ]);
                    else
                        found = checkIfIdentifierMatch(
                            res.matchedIdentifiers,
                            project.assist.webIdentifiers
                        );

                    if (
                        found &&
                        (!allProjectStatus[project.id].isShown ||
                            !allProjectStatus[project.id].isCompleted) &&
                        checkToShowProject(project.id)
                    )
                        return project;

                    break;
                }
            }
        });

    return projectFound?.isWebView && !currentMatchedWebIdentifiers
        ? "isWeb"
        : projectFound;
}

function runDetectionLogicForSteps({lastStep}, webIdentifiers, traceId) {
    let currentStepIds =
        lastStep === undefined
            ? [activeProject.flows[0].firstStep]
            : lastStep.nextSteps;

    const resWeb = webIdentifiers;

    const resNative = findMatches(
        filteredHierarchy,
        activeProject.nativeIdentifiers,
        traceId
    );

    if (lastStep?.toShow && !lastStep?.completed) {
        currentStepIds = [lastStep.id];
    }

    let stepFound;

    activeProject.flows[0].pages.find((page) => {
        if (
            checkIfIdentifierMatch(
                resNative.matchedIdentifiers,
                page.nativeIdentifiers
            )
        ) {
            for (let stage of page.stages) {
                if (
                    currentStepIds.includes(stage.uniqueID) &&
                    stage.webIdentifiers !== undefined &&
                    !webIdentifiers
                ) {
                    stepFound = "isWeb";
                    return true;
                }
                if (
                    currentStepIds.includes(stage.uniqueID) &&
                    checkIfIdentifierMatch(
                        stage.webIdentifiers !== undefined
                            ? resWeb?.matchedIdentifiers
                            : resNative?.matchedIdentifiers,
                        stage.webIdentifiers !== undefined
                            ? [
                                ...stage.webIdentifiers,
                                ...(stage?.instruction?.assistInfo?.identifier
                                    ? [stage.instruction.assistInfo.identifier]
                                    : []),
                            ]
                            : [
                                ...stage.nativeIdentifiers,
                                ...(stage?.instruction?.assistInfo?.identifier
                                    ? [stage.instruction.assistInfo.identifier]
                                    : []),
                            ]
                    )
                ) {
                    prevMatchedIdentifiers = stage.webIdentifiers ? resWeb : resNative;

                    stepFound = {
                        id: stage?.uniqueID,
                        isWebView: stage?.webIdentifiers !== undefined,
                        isOptional: stage?.optional,
                        assist: stage,
                        isAnchoredElement: !!stage?.instruction?.assistInfo?.identifier,
                        targetId: stage?.instruction?.assistInfo?.identifier,
                        nextSteps: stage?.transition?.nextSteps,
                        nativeIdentifiers: stage?.nativeIdentifiers,
                        webIdentifiers: stage?.webIdentifiers,
                        isSuccess: stage?.isSuccess,
                        assistType: stage?.instruction?.assistInfo?.type,
                    };
                    // Return page to stop the find() loop and signal that we found the page
                    return true;
                }
            }
        }
    });

    return stepFound;
}

function getAnchorNodeInfo(
    assistType,
    targetIdentifierId,
    projectFound,
    matchedNode
) {
    if (!["TOOLTIP", "HIGHLIGHT_WITH_DESC"].includes(assistType)) return null;

    let anchorNode = matchedNode.find((node) => node?.id === targetIdentifierId);
    let bounds = anchorNode?.["bounds"];

    let node = flattenedHierarchy[anchorNode?.["node"]?.["uuid"]];

    if (node["is_webview"]) {
        let targetIdentifier = projectFound.webIdentifiers[targetIdentifierId];
        let focusScript = createFocusJavascript(targetIdentifier);

        return {
            uuid: node["uuid"],
            autoFocus: true,
            autoFocusScript: focusScript,
            autoScroll: shouldAutoScroll(assistType, node, bounds),
            scrollToViewScript: getScrollToViewScript(
                assistType,
                node,
                targetIdentifier
            ),
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
    if (!anchorNode) return false;
    if (
        ![
            "TOOLTIP",
            "HIGHLIGHT_WITH_DESC",
            "FINGER_RIPPLE",
            "SWIPE_LEFT",
            "SWIPE_RIGHT",
            "SWIPE_UP",
            "SWIPE_DOWN",
            "BEACON",
        ].includes(assistType)
    )
        return null;

    let querySelectorAllStatement =
        createQuerySelectorAllStatement(targetIdentifier);
    return `${querySelectorAllStatement}.scrollIntoView({ behavior: 'smooth', block: 'center' });`;
}

function shouldAutoScroll(assistType, anchorNode, bounds) {
    if (!anchorNode) return false;
    if (
        ![
            "TOOLTIP",
            "HIGHLIGHT_WITH_DESC",
            "FINGER_RIPPLE",
            "SWIPE_LEFT",
            "SWIPE_RIGHT",
            "SWIPE_UP",
            "SWIPE_DOWN",
            "BEACON",
        ].includes(assistType)
    )
        return false;

    const screenHeight = flattenedHierarchy?.ROOT_NODE?.screen_height ?? -1;
    if (screenHeight == -1) return false;

    const top = bounds?.top;
    const bottom = bounds?.bottom;

    return bottom > screenHeight || top < 5;
}

const ANDROID_SUPPORT_COLLAPSING_TOOLBAR =
    "android.support.design.widget.CollapsingToolbarLayout";
const GOOGLE_MATERIAL_COLLAPSING_TOOLBAR =
    "com.google.android.material.appbar.CollapsingToolbarLayout";
const ANDROID_SUPPORT_APP_BAR_LAYOUT =
    "android.support.design.widget.AppBarLayout";
const GOOGLE_MATERIAL_APP_BAR_LAYOUT =
    "com.google.android.material.appbar.AppBarLayout";

function getNativeScrollingParentNodeDetails(anchorNode) {
    function isCollapsibleToolbar(node) {
        const className = node.class;
        return (
            ANDROID_SUPPORT_COLLAPSING_TOOLBAR === className ||
            GOOGLE_MATERIAL_COLLAPSING_TOOLBAR === className
        );
    }

    function canOnlyHorizontallyScroll(node) {
        return node && node["is_horizontally_scrollable"];
    }

    function canViewVerticallyScroll(node) {
        return node && node["is_vertically_scrollable"];
    }

    function fetchAppBarLayout(node) {
        if (!node) return null;
        const className = node.class;
        if (
            ANDROID_SUPPORT_APP_BAR_LAYOUT === className ||
            GOOGLE_MATERIAL_APP_BAR_LAYOUT === className
        )
            return node;

        const parentUUID = node["parent_uuid"];
        if (!parentUUID) return null;
        const parentNode = flattenedHierarchy[parentUUID];
        return fetchAppBarLayout(parentNode);
    }

    if (!anchorNode) return null;
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

    const parentUUID = anchorNode["parent_uuid"];
    if (!parentUUID) return null;
    const parentNode = flattenedHierarchy[parentUUID];

    return getNativeScrollingParentNodeDetails(parentNode);
}

function getScrollingParentNodeInfo(assistType, anchorNode) {
    if (
        ![
            "TOOLTIP",
            "HIGHLIGHT_WITH_DESC",
            "FINGER_RIPPLE",
            "SWIPE_LEFT",
            "SWIPE_RIGHT",
            "SWIPE_UP",
            "SWIPE_DOWN",
            "BEACON",
        ].includes(assistType)
    )
        return null;

    if (!anchorNode) return null;
    const isAnchorNodeWebView = anchorNode["is_webview"];
    // If Anchor Node is webview, scrolling parent is Web View
    if (isAnchorNodeWebView)
        return {
            uuid: anchorNode.uuid,
        };

    return getNativeScrollingParentNodeDetails(anchorNode);
}

function updateProjectStatus({
                                 id,
                                 isShown,
                                 isCompleted,
                                 isFlowTriggered,
                                 isTerminated,
                                 terminatedByIcon,
                             }, traceId) {
    if (!id) return;

    if (isShown) {
        allProjectStatus[id] = {
            ...allProjectStatus[id],
            isShown,
        };
    }

    if (isCompleted) {
        allProjectStatus[id] = {
            ...allProjectStatus[id],
            isCompleted,
        };
    }

    if (isFlowTriggered) {
        allProjectStatus[id] = {
            ...allProjectStatus[id],
            isFlowTriggered,
        };
    }

    if (isTerminated) {
        allProjectStatus[id] = {
            ...allProjectStatus[id],
            isTerminated,
        };
    }

    if (terminatedByIcon) {
        allProjectStatus[id] = {
            ...allProjectStatus[id],
            terminatedByIcon,
        };
    }

    saveTheLatestStateChange(traceId);
}

// TODO: WORK on this to fix for the current flow
function receiveWebIdentifiers(webIdentifiers, traceId) {
    prevMatchedIdentifiers = {};
    currentMatchedWebIdentifiers = webIdentifiers;
    receiveScreenHierarchy(undefined, true, webIdentifiers, traceId);
}

function updateAssistInteraction(res, traceId) {
    const actionCallback = res.body;

    function isRunningFlowPartOfChecklist(projectId) {
        return connectProjectsParentMap?.[projectId];
    }

    // Sending event in case of optin
    if (actionCallback?.optIn) {
        if (actionCallback?.projectId && isRunningFlowPartOfChecklist(actionCallback?.projectId)) {
            sendAnalyticEvent(
                ANALYTICS_EVENTS.FLOW_OPT_IN,
                {
                    selectedProjectId: actionCallback?.projectId,
                    deploymentId: connectProjectsParentMap?.[actionCallback?.projectId].deploymentId,
                    projectId: connectProjectsParentMap?.[actionCallback?.projectId].projectId,
                    deploymentVersion: connectProjectsParentMap?.[actionCallback?.projectId].deploymentVersion,
                    selectedFlow: actionCallback?.flowTitle,
                    elementName: actionCallback?.flowTitle,
                }, traceId);
        }
        if (!currentlyRunningFlow?.id){
            sendAnalyticEvent(
                ANALYTICS_EVENTS.FLOW_OPT_IN,
                actionCallback?.flowTitle
                    ? {
                        selectedFlow: actionCallback?.flowTitle,
                        selectedProjectId: actionCallback?.projectId,
                    }
                    : {}, traceId
            );
        }
    }
    // Sending event for Carousel
    if (actionCallback.carouselSlideId) {
        sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_ACTION, {
            actionEventType: actionCallback.type,
            actionEventValue: actionCallback.buttonLabel,
            externalLink: actionCallback.externalLink,
            deepLink: actionCallback.deepLink,
            carouselCompleted: actionCallback.carouselCompleted,
            carouselSlideId: actionCallback.carouselSlideId,
            carouselPreviousSlideId:
                !actionCallback.carouselPreviousSlideId ||
                actionCallback.carouselPreviousSlideId === "null"
                    ? null
                    : actionCallback.carouselPreviousSlideId,
            carouselDirection:
                !actionCallback.carouselDirection ||
                actionCallback.carouselDirection === "null"
                    ? null
                    : actionCallback.carouselDirection,
            sdkVersionCode: sdkVersion,
        }, traceId);
    } else if (actionCallback.deepLink) {
        sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_ACTION, {
            actionEventType: ACTION_EVENT_TYPES.DEEP_LINK,
            externalLink: actionCallback.externalLink,
            deepLink: actionCallback.deepLink,
        }, traceId);
    } else if (actionCallback.externalLink) {
        sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_ACTION, {
            actionEventType: ACTION_EVENT_TYPES.EXTERNAL_LINK,
            externalLink: actionCallback.externalLink,
            deepLink: actionCallback.deepLink,
        }, traceId);
    } else if (
        actionCallback.actionType &&
        (actionCallback.actionType === "overlayClicked" ||
            actionCallback.actionType === "optOutClick")
    ) {
        sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_ACTION, {
            actionEventType: ACTION_EVENT_TYPES.CLOSE,
        }, traceId);
    } else if (actionCallback.type === "close") {
        sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_ACTION, {
            actionEventType: ACTION_EVENT_TYPES.CLOSE,
            actionEventValue: actionCallback.buttonLabel,
        }, traceId);
    }

    if (allProjectStatus?.[activeProject.id]?.triggerCase === "PLAY_ONCE")
        updateProjectStatus({id: activeProject.id, isFlowTriggered: true}, traceId);

    // If the close action is performed on opt-in
    if (
        actionCallback.close &&
        !actionCallback.optIn &&
        currentlyRunningFlow.id === "" &&
        currentStaticFlow.status === "START"
    ) {
        sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_OPT_OUT, undefined, traceId);
        if (allProjectStatus[activeProject.id].triggerCase === "EVERY_SESSION_UNTIL_DISMISSED")
            updateProjectStatus({id: activeProject.id, isFlowTriggered: true}, traceId);
        updateViewStatusForTheProject("nDismissedByUser", traceId);
    }

    if (
        actionCallback.close &&
        !actionCallback.optIn &&
        currentlyRunningFlow.id !== "" &&
        currentStaticFlow.id === undefined
    ) {
        if (
            allProjectStatus[currentlyRunningFlow.id].triggerCase ===
            "EVERY_SESSION_UNTIL_DISMISSED"
        )
            updateProjectStatus({
                id: currentlyRunningFlow.id,
                isFlowTriggered: true,
            }, traceId);
        updateViewStatusForTheProject("nDismissedByUser", traceId);
    }

    if (
        currentStaticFlow.id !== undefined &&
        currentStaticFlow.stepsStatus.length > 0
    ) {
        // Send flow completion command to the native
        const lastStep =
            currentStaticFlow.stepsStatus[currentStaticFlow.stepsStatus.length - 1];
        const activeProjectId =
            currentlyRunningFlow.id === ""
                ? activeProject.id
                : currentlyRunningFlow.id;
        flowShown = false;

        if (lastStep.completionStep) {
            sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_SUCCESS, undefined, traceId);
            if (currentlyRunningFlow.id !== "") {
                const currentRunningFlow = completedProjectsInFlow[activeProjectId];

                const foundCompletedProject = currentRunningFlow.projects.findIndex(
                    (c) => c.id === currentStaticFlow.projectId
                );

                if (foundCompletedProject !== -1) {
                    currentRunningFlow.projects[foundCompletedProject].completed = true;
                }

                // In case if all the projects status are completed
                if (areAllProjectsCompleted(currentRunningFlow)) {
                    updateViewStatusForTheProject("untilAllFlowsAreCompleted", traceId);
                }
            }

            if (currentlyRunningFlow.id === "")
                updateProjectStatus({id: activeProject.id, isCompleted: true}, traceId);
            sendProjectCompletion({reset: false}, traceId);

            if (
                allProjectStatus[activeProject.id].triggerCase ===
                "EVERY_SESSION_UNTIL_FLOW_COMPLETE"
            )
                updateProjectStatus({id: activeProject.id, isFlowTriggered: true}, traceId);

            updateViewStatusForTheProject("perApp", traceId);
            saveTheLatestStateChange(traceId);
            resetActiveProject();
            resetCurrentStaticFlow();
            resetFlow();
        }
    }

    if (actionCallback?.projectId) {
        const selectedWalkthrough = flowWalkthroughs[actionCallback?.projectId];

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
            isAFlow:
                selectedWalkthrough.projectParameters.projectType === "STATIC_FLOW",
            isAFlowMenu: ["STATIC_FLOW_MENU", "STATIC_FLOW_CHECKLIST"].includes(
                selectedWalkthrough.projectParameters.projectType
            ),
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

    if (actionCallback?.optIn) {
        previousBoundState = {};
        currentStaticFlow = {
            ...currentStaticFlow,
            status: "RENDERING-STEPS",
            onlyIcon: false,
            autoStart: false,
        };
        resetFlow();
        return;
    }

    if (actionCallback?.endFlow) {
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
        if (
            currentStaticFlow.id === undefined ||
            (currentStaticFlow.id !== undefined &&
                currentStaticFlow.stepsStatus.length === 0)
        )
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

function handleCloseEvent({clearAll = false, updateStepsStatus = false}, traceId) {
    previousBoundState = {};

    switch (true) {
        case updateStepsStatus: {
            const lastStepIndex = currentStaticFlow?.stepsStatus?.length - 1;

            if (lastStepIndex >= 0) {
                currentStaticFlow.stepsStatus[lastStepIndex].completed = true;
            }

            previousBoundState = {};
            // Rest active step
            resetActiveStep();
            break;
        }

        case clearAll: {
            updateProjectStatus({id: activeProject.id, isCompleted: true}, traceId);
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
    tackProjectBeingIdentified.forEach((t) => {
        if (t.projectType === "STATIC_FLOW_CHECKLIST") {
            t.toShow = true;
        }
    });
}

function clearEveryThing(clearTimer = false, traceId) {
    if (clearTimer) clearInterval(timer);
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
    if (data.action === "isVisible") return;
    else if (data.action === "clickEvent" && data.value) {
        sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_DISABLE, undefined, traceId);
        removeProjectFromStatusArray({id: data.uniqueId, terminatedByIcon: true, isTerminated: true});
        clearEveryThing();
    }
}

function handleIconAction(id) {
    const project = embedProject
        .concat(sortedProjectArray)
        .find((s) => s.id === id);

    if (
        project !== undefined &&
        currentStaticFlow.id &&
        project.assist.autoStart &&
        currentStaticFlow.status === "START"
    ) {
        currentStaticFlow = {
            ...currentStaticFlow,
            status: "RENDERING-STEPS",
            onlyIcon: false,
            autoStart: project.assist.autoStart,
        };
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


// js filename- webFinder.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// {
//   project_id_value: {
//     matchedNode: [{
//       id: "",
//       bounds: []
//     }],
//     matchedIdentifiers: ["identifier_id_1", "identifier_id_2"],
//     unMatchedIdentifiers: ["identifier_id_3", "identifier_id_4"]
//   }
// }

function createFocusJavascript(targetIdentifier) {
    let querySelectorAllStatement =
        createQuerySelectorAllStatement(targetIdentifier);
    return `${querySelectorAllStatement}.focus();`;
}

// Context detection logic for the web view
function createFinderJavascript(
    webIdentifiers,
    webViewBounds,
    webViewScale,
    webviewUUID
) {
    let webIdentificationJavascriptFunction = `function runWhatfixMobileWebFinder() {`;

    let webIdentificationJavascript = `
  try{
    let matchedNode = []; 
    let projectWrapper = { matchedNode: matchedNode }; 
    let result = projectWrapper; 
    let matchedIdentifiers = [];
    let unMatchedIdentifiers = [];
  `;

    for (const key in webIdentifiers) {
        const webIdentifier = webIdentifiers[key];
        webIdentificationJavascript += createIfElseStatement(
            key,
            webIdentifier,
            webViewBounds,
            webViewScale,
            webviewUUID
        );
    }

    webIdentificationJavascript += `
    projectWrapper.matchedIdentifiers = matchedIdentifiers;
    projectWrapper.unMatchedIdentifiers = unMatchedIdentifiers;
    return result;}
    catch(error) {
     console.error(error);
     return ( { matchedNode: [], matchedIdentifiers: [], unMatchedIdentifiers: [] } );
    }
  `;

    webIdentificationJavascriptFunction += `
    ${webIdentificationJavascript}
  } runWhatfixMobileWebFinder();`;

    return webIdentificationJavascriptFunction;
}

/*
      1. Create basic querySelectorAll statement
      2. Add null checks
      3. Add index and innerText check
  */
function createIfElseStatement(
    id,
    webIdentifier,
    webViewBounds,
    webViewScale,
    webviewUUID
) {
    const querySelectorAllStatement = createQuerySelectorAllStatement(webIdentifier);
    let condition = `${querySelectorAllStatement}`;
    if (
        webIdentifier["innerText"] !== undefined &&
        webIdentifier["innerText"]["ang"] !== undefined
    ) {
        const expectedText = JSON.stringify(webIdentifier["innerText"]["ang"]);
        condition += ` && ${querySelectorAllStatement}.innerText === ${expectedText}`;
    }
    const positionQuery = `${querySelectorAllStatement}.getBoundingClientRect()`;

    return `
    if (${condition}) {
      matchedIdentifiers.push("${id}");
      var position = ${positionQuery};
      var bounds = {
        left: position.left * ${webViewScale} + ${webViewBounds.left},
        top: position.top * ${webViewScale} + ${webViewBounds.top},
        right: position.right * ${webViewScale} + ${webViewBounds.left},
        bottom: position.bottom * ${webViewScale} + ${webViewBounds.top}
      };
      matchedNode.push({ 
        id: "${id}", 
        bounds: bounds,
        node: {
          uuid: "${webviewUUID}"
        }
      });
    } else {
      unMatchedIdentifiers.push("${id}");
    }
  `;
}

function createQuerySelectorAllStatement(webIdentifier) {
    const tagName = webIdentifier.tagName;
    const attributes = webIdentifier.attributes["ang"];
    let cssSelector = tagName;

    for (const attributeKey in attributes) {
        const escapedAttributeValue = CSS.escape(attributes[attributeKey]);
        cssSelector += `[${attributeKey}="${escapedAttributeValue}"]`;
    }

    let index = webIdentifier.index;
    if (index && index < 0) {
        index = 0;
    }

    return `document.querySelectorAll(${JSON.stringify(cssSelector)})[${index}]`;
}


// js filename- init.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck


let configFetchStartTime;
let jsSdkSessionId = generateUUID();
let jsSdkInitialized = false;
let enterpriseId = "";
var jsMetadata={};

async function start({
                         baseUrl = "",
                         apiKey,
                         devicePlatform = platform,
                         deviceSubPlatform = "",
                         appVersion = "ALL",
                         appVersionCodeValue = 0,
                         userState,
                         leapUserId,
                         sdkVersionCode = 22,
                         sessionId,
                         defaultProps,
                         userProps,
                         isSelfHostingEnabled = 0,
                     }
    , traceId,
) {
    try {
        if (!jsSdkInitialized) {
            ensureSessionStarted();
            sendObserverEventLevelsToNative();
            isSelfHosted = isSelfHostingEnabled;
            platform = devicePlatform;
            subPlatform = deviceSubPlatform;
            appSessionId = sessionId;
            appVersionName = appVersion;
            appVersionCode = appVersionCodeValue;
            coreSdkVersionCode = sdkVersionCode;
            const {baseUrl, apiKey} = resolveApiConfig();
            appApiKey = apiKey;
            configBaseUrl = baseUrl;
            getObserverUrl(configBaseUrl);
            defaultProperties = {...defaultProps};

            sdkStateService.init(userState);
            console.log("sdkState- ", sdkStateService.sdkState);
            console.log("isLoggedIn- ", sdkStateService.isLoggedIn);
            sendStartLog();
            await setEnterpriseId();
            eventCollectorService.fetchCachedEvents();

            if (sdkStateService.isLoggedIn) {
                let savedUserState = sdkStateService.currentUserState;
                lastUpdatedEmbedConfigAt = savedUserState.lastUpdatedEmbedConfigAt;
                lastProfileUpdatedAt = savedUserState.lastProfileUpdatedAt;
                savedEmbedProject = savedUserState.savedEmbedProject;
                appLocale = sdkStateService.appLocale;

                savedUserState.customProps = {
                    ...savedUserState.customProps,
                    ...userProps,
                };

                customProperties = savedUserState.customProps;

                configFetchStartTime = Date.now();
                //TODO: review this observer event
                if (!isSelfHosted) {
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.NETWORK,
                        event_name: OBSERVER_EVENTS.NETWORK.ON_CONFIG_DOWNLOAD_STARTED,
                        properties: {
                            url: `${baseUrl}odin/api/v1/config/fetch`,
                        },
                        className: "init.js",
                        methodName: "start"
                    }, traceId);
                }
            }
        }

        function getObserverUrl(baseUrl) {
            if (baseUrl.includes("https://leap-api-eus")) {
                appObserverBaseUrl = "https://whatfix.com/";
            }else if(baseUrl.includes("https://leap-api-eu")) {
                appObserverBaseUrl = "https://eu.whatfix.com/";
            }else if (baseUrl.includes("quickolabs.com")) {
                appObserverBaseUrl = "https://uataz.quickolabs.com/";
            }
        }

        await fetchConfig({
            userId: sdkStateService.currentUserId,
        }, traceId);
        jsSdkInitialized = true;
        //TODO: rename this function and corresponding variable based on its actual usage
        setUserLoggedIn();
        flushAllPendingOperations(traceId);
    } catch (error) {
        console.error(`[${traceId}] start(): failed to start js sdk`, error);
        sendErrorLog(traceId, error);
    }

    function sendStartLog() {
        sendJSObserverLog({
            message: "starting js sdk",
            logData: {
                jsSdkSessionId,
                baseUrl,
            },
            methodName: "start",
            level: 600,
            userState: buildUserStateObjectForObserverLog(sdkStateService.currentUserState),
            traceId
        });
    }

    function sendObserverEventLevelsToNative() {
        sendMessageToNative({
            command: SENDING_COMMANDS.OBSERVER_EVENT_LEVELS,
            data: {
                ...observerEventLevels,
            }
        }, traceId);
    }

    function resolveApiConfig() {
        let isEus = apiKey.startsWith("eus:");
        let isEu = apiKey.startsWith("eu:");
        if (isSelfHostingEnabled) {
            if (isEus) {
                apiKey = apiKey.replace(/^eus:/, "");
            } else if (isEu) {
                apiKey = apiKey.replace(/^eu:/, "");
            }
        } else {
            if (isEus) {
                baseUrl = "https://leap-api-eus.whatfix.com/";
            } else if (isEu) {
                baseUrl = "https://leap-api-eu.whatfix.com/";
            }
        }
        return {baseUrl, apiKey};
    }

    function sendErrorLog(error) {
        sendJSErrorObserverLog({
            message: "failed to start js sdk",
            error,
            methodName: "start",
            traceId
        });
    }
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
    // Fetch the latest config
    //console.info(`[${traceId}] fetchByUserProperties(): USER_CONFIG_FETCH_STARTED`);
    sendJSObserverLog({
        message: "starting config fetch by user properties",
        methodName: "fetchByUserProperties",
        logData: {
            ...defaultProperties,
            ...customProperties,
        },
        level: ObserverLogLevel.INFO,
        traceId
    });

    configFetchStartTime = Date.now();
    return fetchConfig({
        userId: sdkStateService.currentUserId,
    }, traceId);
}

function fetchByProjectId(id, traceId) {
    // Fetch the latest config
    //console.info(`[${traceId}] fetchByProjectId(): EMBED_CONFIG_FETCH_STARTED`);
    sendJSObserverLog({
        message: "starting config fetch by project id",
        methodName: "fetchByProjectId",
        level: ObserverLogLevel.INFO,
        traceId
    });

    return fetchConfig({
        userId: sdkStateService.currentUserId,
        isEmbed: true,
        projectId: id,
    }, traceId);
}


function fetchByUserId(id, traceId) {
    // Fetch the latest config
    //console.info("USER_PROFILE_CONFIG_FETCH_STARTED");
    sendJSObserverLog({
        message: "starting config fetch by user id", methodName: "fetchByUserId", level: ObserverLogLevel.INFO, traceId
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
    connectProjectsParentMap = savedState.connectProjectsParentMap;
    features = savedState.features;
    metaConfigs = savedState.metaConfigs;
    loggerConfig = savedState.loggerConfig;
    reCalculateCompletedProjectsInFlow(sortedProjectArray, completedProjectsInFlow);
    init(traceId);
}

async function storeConfigInSegmentMap(segment, config) {
    const decompressedData = await Promise.all(
        config.data.map(async (configData) => {
            const decompressed = await decompressGzipString(configData);
            const decompressedDataWithBaseUrl = decompressed.replace(
                /"baseUrl":""/g,
                `"baseUrl":"${configBaseUrl}/${appApiKey}${selfHostingEndPoints.SELF_HOSTING}"`
            );
            const parsedData =JSON.parse(decompressedDataWithBaseUrl);
            console.log("parsedData===>",parsedData)
            return parsedData;
        })
    );
    segmentConfigMap[segment.segmentId] = {
        config: {
            data: decompressedData,
            configStatus: 200,
            wfxProfile: null,
            loggerConfig: null,
            metaConfig: config?.metaConfig || null,
            params: config?.params || null,
            feature: config?.feature || null,
        },
        orBlocks: segment?.orBlocks || [],
        lastUpdatedAt: segment?.lastUpdatedAt,
    };
}

function fetchAndStoreConfigFromSavedState(savedSegmentConfigMap) {
    const segConfMapAvailableInSavedState = Object.keys(savedSegmentConfigMap || {}).length;
    if (segConfMapAvailableInSavedState) {
        segmentConfigMap = savedSegmentConfigMap;
        return 200;
    }
    return 404;
}

async function downloadConfigFromCDN(savedSegmentConfigMap) {
    console.log("downloadConfigFromCDN===>");
    const segmentationBaseUrl = `${configBaseUrl}/${appApiKey}${selfHostingEndPoints.SELF_HOSTING}/segmentation.json`;
    try {
        const response = await fetch(segmentationBaseUrl);
        const segmentationList = await response.json();
        console.log('segmentationList===>',segmentationList)
        if (segmentationList?.segments?.length) {
            const data = await Promise.all(
                segmentationList.segments.map(async (segmentObject) => {
                    const configUrl = `${configBaseUrl}/${appApiKey}${selfHostingEndPoints.SELF_HOSTING}${selfHostingEndPoints.SEGMENT_CONFIG_FOLDER}${segmentObject?.segmentId}.json`;
                    const configResponse = await fetch(configUrl);
                    const segmentSpecificConfig = await configResponse.json();
                    console.log("segmentSpecificConfig===>",segmentSpecificConfig)
                    await storeConfigInSegmentMap(segmentObject, segmentSpecificConfig);
                })
            ).catch((error) => {
                console.warn(error);
                return fetchAndStoreConfigFromSavedState(savedSegmentConfigMap);
            });
            return 200;
        }
    } catch {
        console.warn("Error while fetching the segments and configs, use any configs available in segmentConfigMap in savedState");
        return fetchAndStoreConfigFromSavedState(savedSegmentConfigMap);
    }
}

function findSegmentIds() {
    return Object.keys(segmentConfigMap).filter((segmentId) => {
        return isSegmentValid(segmentConfigMap[segmentId].orBlocks);
    });
}

function collateConfigsFromValidSegments(validSegmentIds) {
    let collatedConfig;
    validSegmentIds.map((segmentId, index) => {
        if (index === 0) {
            collatedConfig = segmentConfigMap[segmentId]?.config;
        } else {
            collatedConfig.data = [
                ...collatedConfig.data,
                ...segmentConfigMap[segmentId]?.config.data,
            ];
        }
    });

    return collatedConfig;
}

function getSelfHostedConfig() {
    const validSegmentIds = findSegmentIds();
    return collateConfigsFromValidSegments(validSegmentIds);
}

async function fetchConfig({
                               userId,
                               isEmbed = false,
                               projectId,
                           }, traceId) {

    let status = 200;
    let config;
    let headers;
    let requestBody;
    let dataString;

    if (sdkStateService.isLoggedOut) {
        return;
    }

    let savedUserState = sdkStateService.getUserStateById(userId) || {};

    if (isNewUserSession()) {
        resetIsShownIsCompletedAndShownOnce(savedUserState.projectsStatus);
    }

    let allUserProperties = {...defaultProperties, ...savedUserState.customProps};

    sendJSObserverLog({
        message: "starting config fetch",
        logData: {userId, wfId: savedUserState.wfId, allUserProperties},
        methodName: "fetchConfig",
        level: ObserverLogLevel.DEBUG,
        userState: buildUserStateObjectForObserverLog(savedUserState),
        traceId
    });
    console.log("isSelfHosted===>", isSelfHosted);
    if (isSelfHosted) {
        status = await downloadConfigFromCDN(sdkStateService.segmentConfigMap);
        config = getSelfHostedConfig();
        console.log("isSelfHosted===>config===>",config)
        if (!config) {
            return;
        }
    }

    if (!isSelfHosted) {
        const customPropsDateObjects = {};
        const keys = Object.keys(allUserProperties);
        keys?.forEach((key) => {
            // Exclude default props timeStamps
            if (
                ![
                    "lastUpdateTimeStamp",
                    "firstInstallTimeStamp",
                    "firstSessionTimeStamp",
                ].includes(key)
            ) {
                let value = allUserProperties[key];
                if (typeof value === "string") {
                    if (isValidDateString(value)) {
                        let elapsedTime = getElapsedTimeInSeconds(value);
                        customPropsDateObjects[key] = elapsedTime;
                    }
                }
            }
        });

        let dateObjects = isEmbed
            ? {}
            : {
                lastUpdateTimeStamp: new Date(
                    allUserProperties?.lastUpdateTimeStamp
                ).toISOString(),
                timeElapsedSinceLastUpdate: getElapsedTimeInSeconds(
                    allUserProperties?.lastUpdateTimeStamp
                ),
                firstInstallTimeStamp: new Date(
                    allUserProperties?.firstInstallTimeStamp
                ).toISOString(),
                timeElapsedSinceFirstInstall: getElapsedTimeInSeconds(
                    allUserProperties?.firstInstallTimeStamp
                ),
                firstSessionTimeStamp: getElapsedTimeInSeconds(
                    allUserProperties?.firstSessionTimeStamp
                ),
                timeElapsedSinceFirstSession: getElapsedTimeInSeconds(
                    allUserProperties?.firstSessionTimeStamp
                ),
            };

        const lastUpdatedAt = isEmbed ? savedUserState.lastUpdatedEmbedConfigAt : savedUserState.lastUpdatedConfigAt;

        headers = {
            "Content-Type": "application/json",
            "Allow-Control-Access-Origin": "",
            "x-jiny-client-id": appApiKey,
            "x-app-version-name": appVersionName,
        };
        headers["x-leap-id"] = userId;
        if (lastUpdatedAt) {
            headers["x-jiny-last-updated-at"] = JSON.stringify(lastUpdatedAt)
        }
        if (isEmbed) {
            headers["x-jiny-deployment-ids"] = JSON.stringify([projectId]);
        }

        let wfxProfileBody;
        if (sdkStateService.isUserIdExternal(userId)) {
            wfxProfileBody = {
                id: userId,
                updatedAt: savedUserState.lastProfileUpdatedAt,
            }
        }
        requestBody = {
            wfx_sdkVersionCode: coreSdkVersionCode,
            wfxProfile: wfxProfileBody,
            ...allUserProperties,
            ...dateObjects,
            ...customPropsDateObjects,
        };
        dataString = JSON.stringify(requestBody);
    }

    try {
        if (!isSelfHosted) {
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
                traceId
            });

            const response = await fetch(`${configBaseUrl}odin/api/v1/config/fetch`, {
                method: "POST",
                headers: headers,
                body: dataString,
            });
            status = response.status;
            config = response.status === 200 ? await response.json() : {};
            headers = response.headers;

            //console.log("headers", headers);
            //console.debug("config", config);

            sendJSObserverLog({
                message: "config fetch ended",
                logData:
                    {
                        status: status,
                        projectIds: headers.get("x-jiny-project-ids"),
                        configStatus: config?.configStatus,
                        wfxProfileStatus: config?.wfxProfile?.status,
                        wfxProfileUpdatedAt: config?.wfxProfile?.updatedAt
                    },
                methodName: "fetchConfig",
                traceId
            });
            // Update the last update
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
        }
        // Initialize all the variables
        switch (status) {
            case 200: {
                if (config.configStatus === 200) {
                    console.info(`[${traceId}] Serving config from API`);
                    features = config.feature || {};
                    metaConfigs = config.metaConfig || {};
                    loggerConfig = config.loggerConfig || {};

                    if (config?.wfxProfile?.status === 304) {
                        console.info(`[${traceId}] Service profile from cache`);
                    }

                    await organizeProjectArray(
                        config.data,
                        isEmbed,
                        config.wfxProfile,
                        savedUserState.projectsStatus || {},
                        savedUserState.projectsCompletionStats || {},
                        traceId
                    );
                    saveTheLatestStateChange(traceId);
                } else if (config.configStatus === 304) {
                    console.info(`[${traceId}] Service config from cache`);
                    if (config?.wfxProfile?.status === 200 && config?.wfxProfile?.properties) {
                        console.info(`[${traceId}] Service profile from API`);
                        sendJSObserverLog({
                            message: "using user profile from API response"
                            , methodName: "fetchConfig", traceId
                        });
                        let wfxProfileProperties;
                        if (isNonEmptyObject(config?.wfxProfile?.properties?.allProjectStatus)) {
                            wfxProfileProperties = config?.wfxProfile?.properties;
                        } else {
                            wfxProfileProperties = convertOldWfxData(
                                config?.data,
                                savedUserState.projectArray || [],
                                savedUserState.projectsStatus || {},
                                savedUserState.projectsCompletionStats || {},
                                config?.wfxProfile?.properties
                            );
                        }
                        //console.log("wfxProfileProperties", wfxProfileProperties);
                        resetIsShownIsCompletedAndShownOnce(wfxProfileProperties.allProjectStatus)
                        //console.log("wfxProfileProperties", wfxProfileProperties);

                        sortedProjectArray = savedUserState.projectArray;
                        connectProjectsParentMap = savedUserState.connectProjectsParentMap;
                        allProjectStatus = wfxProfileProperties?.allProjectStatus;
                        completedProjectsInFlow = wfxProfileProperties?.completedFlowProjects;
                        selectedLanguage = wfxProfileProperties?.selectedLanguage || savedUserState.language || appLocale;
                        flowWalkthroughs = savedUserState.connectedWalkthroughs || {};
                        features = savedUserState.features;
                        metaConfigs = savedUserState.metaConfigs;
                        loggerConfig = config.loggerConfig || savedUserState.loggerConfig;
                        saveTheLatestStateChange(traceId);
                        init(traceId);
                    } else {
                        sendJSObserverLog({
                            message: "using user profile from saved state"
                            , methodName: "fetchConfig", traceId
                        });
                        if (config?.wfxProfile?.status === 304) {
                            console.info(`[${traceId}] Serving profile from cache`);
                        } else {
                            console.info(`[${traceId}] No config returned from API. status- ${config?.wfxProfile?.status}`);
                        }
                        loggerConfig = config.loggerConfig || savedUserState.loggerConfig;
                        consumeSavedStateAndInit(savedUserState, traceId);
                    }
                } else if (config.configStatus === 404) {
                    console.error(`[${traceId}] unable to fetch config from API. status: 404`);
                    resetAndRemoveState(traceId);
                }
                break;
            }

            case 408:
            case 504: {
                consumeSavedStateAndInit(savedUserState, traceId);
                break;
            }

            case 401: {
                console.error("UNAUTHORIZED_401");
                resetAndRemoveState(traceId);
                break;
            }

            case 404: {
                console.error("UNABLE_TO_FETCH_CONFIG_THROWING_404");
                resetAndRemoveState(traceId);
                break;
            }

            case 500: {
                console.error("UNABLE_TO_FETCH_CONFIG_THROWING_500");
                break;
            }
        }
    } catch (error) {
        console.error(`fetchConfig(): failed to fetch config`, error);
        sendJSErrorObserverLog({
            message: "config fetch failed",
            error,
            methodName: "fetchConfig",
            traceId
        });
        if (error instanceof DOMException && error.name === "AbortError") {
            console.error("Abort API call: Request aborted due to new user properties call");
        } else {
            consumeSavedStateAndInit(savedUserState, traceId);
            console.error(error);
        }
    }

    sendJSObserverLog({
        message: "config fetch ended", methodName: "fetchConfig", userState: buildUserStateObjectForJSLog(), traceId
    });

    function resetIsShownIsCompletedAndShownOnce(projectsStatus) {
        if (projectsStatus) {
            Object.values(projectsStatus).forEach(status => {
                status.isShown = false;
                status.shownOnce = false;
                status.isCompleted = false;
            });
        }
    }
}

function isNewUserSession() {
    return !isUserLoggedIn;
}

function updateUserProfile(traceId) {
    try {
        if (inPreviewMode || isSelfHosted) {
            //console.info("updateUserProfile(): Skipped due to preview mode or self-hosted environment");
            return;
        }

        if (sdkStateService.isLoggedOut) {
            return;
        }

        const now = new Date();
        lastProfileUpdatedAt = now.toISOString();
        saveTheLatestStateChange(traceId);

        const userId = sdkStateService.currentUserId;
        const savedUserState = sdkStateService.currentUserState;

        //console.info(`updateUserProfile(): Active userId- ${userId}, state-`, savedUserState);
        if (isEmptyObject(savedUserState.projectsStatus)) {
            return;
        }

        //console.info(`updateUserProfile(): Active userId = ${userId}`);

        const requestBody = isNonEmptyObject(savedUserState.projectsStatus) ?
            {
                id: userId,
                properties: {
                    allProjectStatus: savedUserState.projectsStatus,
                    completedFlowProjects: savedUserState.projectsCompletionStats,
                    selectedLanguage: savedUserState.language,
                },
                updatedAt: lastProfileUpdatedAt,
            } : {};

        //console.log("updateUserProfile(): Enqueuing update with payload", {traceId, requestBody, });
        sendJSObserverLog({
            message: "enqueueing profile update",
            logData: {requestBody},
            level: ObserverLogLevel.DEBUG,
            methodName: "updateUserProfile",
            traceId
        });
        userProfileService.enqueueUpdate(userId, traceId);
    } catch (error) {
        console.error(`updateUserProfile(): unable to enqueue profile update`, error);
        sendJSErrorObserverLog({
            message: "unable to enqueue profile update",
            error,
            level: ObserverLogLevel.DEBUG,
            methodName: "updateUserProfile",
            traceId
        });
    }
}

function enterPreviewMode(data, traceId) {
    //console.warn("PREVIEW_STARTED");
    LiveFeatures = features;
    LiveMetaConfigs = metaConfigs;
    features = data.feature;
    metaConfigs = data.metaConfig;
    organizeProjectArray(data.configs, undefined, undefined, undefined, undefined, traceId);
}

function organizeProjectArray(
    configData,
    isEmbed = false,
    wfxProfile,
    savedAllProjectStatus,
    savedCompletedProjectsInFlow,
    traceId
) {
    let organizedArray = sortAndOrganizeProjects(
        configData,
        isEmbed,
        savedAllProjectStatus,
        savedCompletedProjectsInFlow
    );

    if (isEmbed) {
        embedProject = Object.values(organizedArray.flowsWalkthroughProjects);

        flowWalkthroughs = {
            ...flowWalkthroughs,
            ...organizedArray.flowsWalkthroughProjects,
        };
        allProjectStatus = {
            ...allProjectStatus,
            ...organizedArray.projectStatus,
        };
    } else {
        sortedProjectArray = organizedArray?.sortedProjects || [];
        flowWalkthroughs = organizedArray.flowsWalkthroughProjects;
        allProjectStatus = organizedArray.projectStatus;
        completedProjectsInFlow = organizedArray.initialCompletedProjectsInFlow;

        // Update the two states all project status and completed project flow
        if (wfxProfile && wfxProfile.properties) {
            let wfxProfileProperties;
            if (wfxProfile.properties.allProjectStatus) {
                wfxProfileProperties = wfxProfile.properties;
            } else {
                wfxProfileProperties = convertOldWfxData(
                    configData,
                    organizedArray.sortedProjects,
                    organizedArray.projectStatus,
                    organizedArray.initialCompletedProjectsInFlow,
                    wfxProfile.properties
                );
            }
            //console.warn(`SERVING_CONFIG_FROM_PROFILE_API`);
            const wfxP = JSON.stringify(wfxProfileProperties);
            const wfxProf = JSON.parse(
                wfxP
                    .replace(/"isShown":true/g, '"isShown":false')
                    .replace(/"shownOnce":true/g, '"shownOnce":false')
                    .replace(/"isCompleted":true/g, '"isCompleted":false')
            );

            selectedLanguage = wfxProf?.selectedLanguage || selectedLanguage || appLocale;
            Object.keys(wfxProf?.allProjectStatus || {}).forEach((key) => {
                allProjectStatus[key] = {
                    ...wfxProf?.allProjectStatus[key],
                    initialTerminationStatus: allProjectStatus[key]?.initialTerminationStatus ? allProjectStatus[key].initialTerminationStatus : wfxProf.allProjectStatus[key].initialTerminationStatus,
                };
                if (wfxProf?.completedFlowProjects[key]) {
                    completedProjectsInFlow[key] = wfxProf?.completedFlowProjects[key];
                }
            });
        }
    }

    saveTheLatestStateChange(traceId);
    saveConfigAndDownloadBulkAssets(configData, traceId);
    //console.info(`START_BULK_DOWNLOAD`);
    init(traceId);
}


// js filename- api/apiService.js

// @ts-nocheck
class ApiService {
    /**
     * @param {Object} options - Configuration options for the service.
     * @param {boolean} [options.shouldHandleFailedRequest=true] - Whether to store & retry failed requests later.
     * @param {string} [options.failedRequestsStorageKey='leap_failedRequests'] - Storage key for failed requests.
     * @param {string} [options.isSelfHosted=false]
     * @param {function} options.processFailedRequestsForStorage
     * @param {function} options.getHeaders
     * @param {(data: Array<Object>) => Array<Object>} [options.processFailedRequestsForStorage] - Optional function to process failed requests before storing. ex usage: batch data.
     */
    constructor(options) {
        this.options = {
            failedRequestsStorageKey: "leap_failedRequests",
            processFailedRequestsForStorage: (data) => data,
            getHeaders: () => {
                return {};
            },
            isSelfHosted: false,
            retryBatchSize:1,
            getRetryBatchPayload: (data=[])=>(data[0] || {}),
            ...(options || {}),
        };
        this.failedRequestsFromStorage = [];
        this.pendingRequestsForStorage = [];
        this.requestsProcessing = false; // Flag to track if failed requests are being retried
        this.getPrefPending = false;
        this.firstTimeFailedRequestsProcessed = false; // Flag to determine if failed requests have been fetched from storage for the first time
        this.getFailedRequestsFromStorage();
    }

    /**
     * Fetches failed requests from storage via the native bridge.
     */
    getFailedRequestsFromStorage = () => {
        this.getPrefPending = true;
        sendMessageToNative(
            {
                command: SENDING_COMMANDS.GET_PREF,
                data: {
                    key: this.options.failedRequestsStorageKey,
                },
            },
            generateUUID(),
        );
    };

    /**
     * Stores failed requests using the native bridge.
     * @param {Array<Object>} requests
     * @param {string} requests[].url
     * @param {string} requests[].method
     * @param {Object} requests[].headers
     * @param {*} requests[].body
     */
    putFailedRequestsToStorage = (requests = []) => {
        sendMessageToNative(
            {
                command: SENDING_COMMANDS.SAVE_PREF,
                data: {
                    key: this.options.failedRequestsStorageKey,
                    value: JSON.stringify(requests),
                },
            },
            generateUUID(),
        );
    };

    /**
     * Clears stored failed requests via the native bridge.
     */
    clearFailedRequestsFromStorage = () => {
        sendMessageToNative(
            {
                command: SENDING_COMMANDS.CLEAR_PREF,
                data: {
                    key: this.options.failedRequestsStorageKey,
                },
            },
            generateUUID(),
        );
    };

    /**
     * Saves request to prefs
     * @param request
     * @param {string} request.url
     * @param {string} request.method
     * @param {*} request.body
     */
    handleFailedRequest = (request) => {
        if (this.requestsProcessing) {
            this.pendingRequestsForStorage.push(request);
            this.putFailedRequestsToStorage(
                this.failedRequestsFromStorage.concat(this.pendingRequestsForStorage),
            );
            return;
        }
        if (
            this.failedRequestsFromStorage.length === 0 &&
            !this.firstTimeFailedRequestsProcessed
        ) {
            this.pendingRequestsForStorage.push(request);
            // Avoid making multiple get calls if one is already in progress
            if (!this.getPrefPending) {
                this.getFailedRequestsFromStorage();
            }
        } else {
            this.failedRequestsFromStorage.push(request);
            this.failedRequestsFromStorage =
                this.options.processFailedRequestsForStorage(
                    this.failedRequestsFromStorage,
                );
            this.putFailedRequestsToStorage(this.failedRequestsFromStorage);
        }
    };

    /**
     * Restores requests from storage and triggers processing/ apis of failed requests.
     * @param {Array<Object>} requests
     * @param {string} requests[].url
     * @param {string} requests[].method
     * @param {Object} requests[].headers
     * @param {*} requests[].body
     */
    restoreFailedRequestsFromStorage = (requests) => {
        this.failedRequestsFromStorage = Array.isArray(requests) ? requests : [];
        if (this.pendingRequestsForStorage.length > 0) {
            this.failedRequestsFromStorage =
                this.options.processFailedRequestsForStorage(
                    requests.concat(this.pendingRequestsForStorage),
                );
            this.pendingRequestsForStorage = [];
            this.putFailedRequestsToStorage(this.failedRequestsFromStorage);
        }
        this.getPrefPending = false;
        this.firstTimeFailedRequestsProcessed = true;
        this.processFailedRequests();
    };

    /**
     * Calling apis for all failed requests.
     * @returns {Promise<void>}
     */
    processFailedRequests = async () => {
        // Do not mark the Promise executor as async, as it can lead to unexpected behavior and is not recommended
        return new Promise((resolve) => {
            if (
                this.requestsProcessing ||
                this.failedRequestsFromStorage.length === 0
            ) {
                return resolve();
            }
            this.requestsProcessing = true;
            const processRequests = async () => {
                try {
                    // old requests should stay in order so we cant let call api handle the failed requests
                    const failedRequests = [];
                    const {retryBatchSize,getRetryBatchPayload}=this.options;
                    const {failedRequestsFromStorage} = this;
                    for (let i = 0; i < failedRequestsFromStorage.length; i+=retryBatchSize) {
                        const batch = failedRequestsFromStorage.slice(i,i+retryBatchSize);
                        try {
                            const batchedPayload = getRetryBatchPayload(batch);
                            await this.callApi(batchedPayload, {
                                shouldHandleFailedRequest: false,
                                retry: true,
                            });
                        } catch (e) {
                            failedRequests.push(...batch);
                            console.error(e);
                        }
                    }
                    this.failedRequestsFromStorage =
                        this.options.processFailedRequestsForStorage(
                            failedRequests.concat(this.pendingRequestsForStorage),
                        );
                    this.pendingRequestsForStorage = [];
                    if (this.failedRequestsFromStorage.length === 0) {
                        this.clearFailedRequestsFromStorage();
                    } else {
                        this.putFailedRequestsToStorage(this.failedRequestsFromStorage);
                    }
                } catch (e) {
                    console.error(e);
                } finally {
                    this.requestsProcessing = false;
                    resolve();
                }
            };
            processRequests();
        });
    };

    /**
     * Makes an API request and optionally retries if it fails.
     * @param {Object} request
     * @param {string} request.url
     * @param {string} request.method
     * @param {*} request.body
     * @param {Object} requestOptions
     * @param {boolean} requestOptions.shouldHandleFailedRequest - Whether to store failed POST requests.
     * @returns {Promise<any>}
     */
    callApi = async (request, requestOptions) => {
        return new Promise((resolve, reject) => {
            const globalOptions = this.options;
            if (globalOptions.isSelfHosted) {
                return resolve();
            }

            const { url = "", method = "GET", body = "" } = request || {};

            if (!url) {
                return reject("url should not be empty");
            }

            const handleRequestError = (error) => {
                if (
                    requestOptions.shouldHandleFailedRequest &&
                    request.method === "POST"
                ) {
                    this.handleFailedRequest(request);
                }
                if (globalOptions.sendObserverErrorLog) {
                    globalOptions.sendObserverErrorLog(error, {
                        retry: !!requestOptions.retry,
                        url,
                        method,
                        body,
                    });
                }
            };

            const api = async () => {
                try {
                    const fetchRequestData = {
                        method,
                        headers: globalOptions.getHeaders(),
                    };

                    if (body) {
                        fetchRequestData.body =
                            typeof body === "string" ? body : JSON.stringify(body);
                    }

                    const result = await fetch(url, fetchRequestData);
                    if (!result.ok) {
                        handleRequestError({message:`Request failed with status ${result.status} ${result.statusText?'('+result.statusText+')':''}` });
                        return reject(result);
                    }
                    const response = await result.json();
                    resolve(response);
                } catch (error) {
                    handleRequestError(error);
                    reject(error);
                }
            };
            api();
        });
    };
}


// js filename- analytics/analytics.js

// @ts-nocheck
var analyticsService = (() => {
    function getSelectedProject() {
        let selectedProject;
        if (currentlyRunningFlow.id && currentStaticFlow.stepsStatus.length > 0) {
            selectedProject = Object.values(flowWalkthroughs).find(
                (s) => currentStaticFlow?.id === s?.id,
            );
        } else {
            selectedProject = embedProject
                .concat(sortedProjectArray)
                .find((s) => activeProject?.id === s?.id);
        }
        return selectedProject;
    }

    /**
     * Generates a general analytics event payload.
     * @param {string} eventName - The name of the analytics event.
     * @param properties
     * @returns {Object}
     */
    function getGeneralProperties(eventName = "", properties = {}) {
        let selectedProject = getSelectedProject();
        return {
            id: generateUUID(),
            sessionId: appSessionId,
            timestamp: new Date().toISOString(),
            eventName,
            projectName: selectedProject?.projectParameters.projectName,
            projectId: selectedProject?.projectParameters.projectId,
            deploymentVersion: selectedProject?.projectParameters.deploymentVersion,
            deploymentName: selectedProject?.projectParameters.deploymentName,
            language: selectedLanguage,
            elementName: activeStep?.id
                ? activeStep?.step?.assist?.name
                : selectedProject?.assist?.name,
            deploymentId: selectedProject?.projectParameters?.deploymentId || null,
            projectType: selectedProject?.projectParameters?.projectType,
            deploymentType: selectedProject?.projectParameters?.deploymentType,
            configId: selectedProject?.projectParameters?.configId,
            clientCallback: {},
            leapUserId: getCurrentUserId(),
            ...properties
        };
    }
    return { getGeneralProperties };
})();


// js filename- analytics/surveyAnalytics.js

// @ts-nocheck

/**
 * Handles sending survey analytics events, batching failed requests for retry.
 */
var surveyAnalyticsService = (() => {
    const maxStorageSize = 40;

    const surveyApiService = new ApiService({
        processFailedRequestsForStorage,
        getHeaders,
        isSelfHosted,
        failedRequestsStorageKey: "leap_survey_failed_requests",
        sendObserverErrorLog,
        retryBatchSize:10,
        getRetryBatchPayload,
    });

    function getRetryBatchPayload(requests){
        if(!requests || !requests.length){
            return  ({})
        }
        const resultBody = []
        for(let i=0; i<requests.length; i++){
            resultBody.push(...requests[i].body);
        }
        return ({
            ...requests[0], // url,headers, method data
            body: resultBody
        })

    }

    function getHeaders() {
        return {
            Authorization: jsMetadata?.analyticsMetadata?.surveyAuthToken,
            "Content-Type": "application/json",
        };
    }

    function sendObserverErrorLog(error, { body, retry }) {
        try {
            if (body?.length > 0) {
                const projectIds = new Set()
                body.forEach((question) => {
                    projectIds.add(question?.properties?.wfe_project_id)
                })
                sendJSErrorObserverLog({
                    message: `Unable to ${retry ? "resend" : "send"} survey analytics event`,
                    logData: {
                        projectIds: [...projectIds],
                    },
                    error,
                });
            }
        } catch (error) {
            sendJSErrorObserverLog({
                message: `Unable to send observer logs`,
                error,
                methodName: "surveyApiService.sendObserverErrorLog",
            });
        }
    }

    /**
     * Processes and batches failed requests before storing them.
     * Combines multiple survey request bodies into one for efficient retry.
     *
     * @param {Array<Object>} requests - List of failed API request objects.
     * @param {Array<Object>} requests
     * @param {string} requests[].url
     * @param {string} requests[].method
     * @param {Object} requests[].headers
     * @param {*} requests[].body
     * @returns {Array<Object>}
     */
    function processFailedRequestsForStorage(requests = []) {
        if (requests.length > maxStorageSize) {
            return requests.slice(requests.length - maxStorageSize);
        }
        return requests;
    }

    /**
     * Constructs the payload for a survey analytics event using general context and specific answers.
     *
     * @param {Object} data
     * @param {Array<Object>} [data.properties=[]] - List of survey question/answer objects.
     * @returns {Array<Object>}
     */
    function getApiPayload(data = {}) {
        try {
            const { properties = [] } = data;
            const generalProps = analyticsService.getGeneralProperties();
            const payload = [];
            const userIds = [generalProps.leapUserId];
            const numeric_properties = {
                wfe_survey_deployment_version: generalProps.deploymentVersion,
            };
            const pii_properties = {
                user_id: generalProps.leapUserId,
            };
            const {
                deploymentId,
                surveyDeploymentId,
                surveyDeploymentVersion,
                surveyId,
                projectName,
            } = activeProject?.projectParameters || {};

            const getProperties = (info) => {
                let {
                    wfe_survey_question,
                    wfe_survey_answer: wfu_survey_answer,
                    wfe_survey_question_id,
                } = info;
                return {
                    wf_app_id: jsMetadata?.appId,
                    wf_org_id: jsMetadata?.orgId,
                    wfe_app_id: jsMetadata?.appId,
                    wfe_survey_question_id,
                    wfe_survey_question,
                    wfu_survey_answer,
                    wfe_id: generalProps.id,
                    wfe_user_id: generalProps.leapUserId,
                    wfe_leap_id: generalProps.leapUserId,
                    wfu_uid: generalProps.leapUserId,
                    wfe_session_id: generalProps.sessionId,
                    wfe_timestamp: generalProps.timestamp,
                    wfe_language: generalProps.language,
                    wfe_survey_language: "ang",
                    wfe_event_id: generateUUID(),
                    wfe_element_name: generalProps.elementName,
                    wfe_survey_name: projectName,
                    wfe_project_id: generalProps.projectId,
                    wfe_deployment_id: deploymentId,
                    wfe_survey_id: surveyId,
                    wfe_survey_deployment_id: surveyDeploymentId,
                    wfe_survey_deployment_version: surveyDeploymentVersion,
                };
            };

            properties.forEach((info) => {
                payload.push({
                    type: "wf_survey",
                    userIds,
                    numeric_properties,
                    pii_properties,
                    properties: getProperties(info),
                });
            });

            return payload;
        } catch (error) {
            console.error("getApiPayload(): unable to parse api payload", error);
            sendJSErrorObserverLog({
                message: "unable to parse api payload",
                error,
                methodName: "getApiPayload",
            });
            return [];
        }
    }

    /**
     * Sends the survey analytics event to the backend.
     * @param {Object} data - Survey event data from native.
     */
    function sendEvent(data = {}) {
        if (isSelfHosted) {
            return;
        }
        const { surveyEventsUrl } = jsMetadata?.analyticsMetadata || {};
        const url = surveyEventsUrl;
        const body = getApiPayload(data);
        if (body.length > 0) {
            surveyApiService.callApi(
                { url, body, method: "POST" },
                { shouldHandleFailedRequest: true },
            );
        }
    }
    /**
     * Attempts to resend all previously failed survey requests.
     * @returns {Promise<void>}
     */
    async function flushAll() {
        return await surveyApiService.processFailedRequests();
    }

    function restoreFailedRequestsFromStorage(data) {
        try {
            let restoredData = JSON.parse(data || "[]");
            if (!Array.isArray(restoredData)) {
                restoredData = [];
                surveyApiService.clearFailedRequestsFromStorage();
            }
            surveyApiService.restoreFailedRequestsFromStorage(restoredData);
        } catch (error) {
            surveyApiService.clearFailedRequestsFromStorage();
            surveyApiService.restoreFailedRequestsFromStorage([]);
            console.error(
                "restoreFailedRequestsFromStorage(): Unable to parse data from shared preferences",
                error,
            );
            sendJSErrorObserverLog({
                message: "Unable to parse data from shared preferences",
                error,
                methodName: "restoreFailedRequestsFromStorage",
            });
        }
    }

    return { sendEvent, flushAll, restoreFailedRequestsFromStorage };
})();


// js filename- analytics/eventCollectorService.js

// @ts-nocheck

const EVENT_SOURCE = "mobile";
const EVENT_CATEGORY = "whatfix";
const EVENT_SINK = "WHATFIX_ANALYTICS";
const JS_SDK = "js_sdk";
const EVENTS_PREFERENCES = "events_preferences"
const eventCollectorService = {
    init(maxBatchSize = 5, batchWaitTime = toMilliSeconds(10)) {
        this.maxBatchSize = maxBatchSize;
        this.batchWaitTime = batchWaitTime;
        this.eventRequestQueue = [];
        this.isUploading = false;
        this.batchTimer = null;
        this.maxQueueSize = 100;
        this.cacheStore = undefined;
        this.persistedEventSyncInProgress = false;
        console.log("eventCollectorService.constructor(): initialised successfully.");
    },

    async enqueueEventRequests(eventRequests = [], traceId) {
        if (isSelfHosted) return;
        if (!eventRequests.length) return;

        const availableSpace = this.maxQueueSize - this.eventRequestQueue.length;
        if (availableSpace <= 0) {
            console.warn(`event queue full (${this.eventRequestQueue.length} items), dropping ${eventRequests.length} new logs`);
            return;
        }

        const eventsPendingToBeAdded = eventRequests.slice(0, availableSpace);
        this.eventRequestQueue.push(...eventsPendingToBeAdded);

        this.cacheEventQueue();

        if (!this.batchTimer) {
            this.batchTimer = setTimeout(() => {
                this.batchTimer = null;
                this.uploadNextBatch(traceId);
            }, this.batchWaitTime);
        }
    },

    async uploadNextBatch(traceId) {
        if (this.isUploading || await this.cannotMakeApiCall() || !this.eventRequestQueue.length) {
            return;
        }
        this.isUploading = true;
        console.log(`eventCollectorService.uploadNextBatch(): Uploading next batch of events. Queue size: ${this.eventRequestQueue.length}`);
        const batch = this.eventRequestQueue.splice(0, this.maxBatchSize);
        this.addUploadMetadataToEventPayload(batch);
        try {
            let responseUploadedStatus = await this.uploadEvents(batch);
            if (responseUploadedStatus) this.cacheEventQueue();
        } catch (error) {
            console.error(`[${traceId}]Error uploading logs`, error);
            this.eventRequestQueue.unshift(...batch);
        } finally {
            this.isUploading = false;
        }
    },

    addUploadMetadataToEventPayload(eventBatch) {
        const nowISOString = new Date().toISOString();
        for (const event of eventBatch) {
            const isFirstAttempt = !event?.properties?.wf_first_upload_timestamp;
            if (isFirstAttempt) {
                event.properties.wf_first_upload_timestamp = nowISOString;
            } else {
                event.properties.wf_last_upload_timestamp = nowISOString;
            }
            event.numeric_properties.wf_upload_attempt_count = (event.numeric_properties.wf_upload_attempt_count ?? 0) + 1;
            if (!event?.ent_id) {
                event.ent_id = enterpriseId;
            }
        }
    },

    cacheEventQueue() {
        this.getCache().save(EVENTS_PREFERENCES, this.eventRequestQueue);
        console.debug("eventCollectorService.persistEvents(): cached events and size", JSON.stringify(this.eventRequestQueue), this.eventRequestQueue.size);
    },

    async fetchCachedEvents() {
        console.log("eventCollectorService.fetchCachedEvents(): called");
        this.getCache().get(EVENTS_PREFERENCES);
    },

    getCache() {
        if (!this.cacheStore) {
            this.cacheStore = new CacheStore();
            console.debug("eventCollectorService.getCache(): cacheStore initialized");
        }
        return this.cacheStore;
    },

    clearCache() {
        this.getCache().clear(EVENTS_PREFERENCES);
    },

    async handlePersistedEvents(persistedEvents = [], traceId){
        console.debug("eventCollectorService.handlePersistedEvents(): called with persistedEvents: ", JSON.stringify(persistedEvents));
        if (this.persistedEventSyncInProgress) return;
        try{
            this.persistedEventSyncInProgress = true;
            let parsedPersistedEvents = JSON.parse(persistedEvents);
            console.log(`eventCollectorService.handlePersistedEvents(${persistedEvents})`);
            if (!Array.isArray(parsedPersistedEvents)) {
                console.warn("eventCollectorService.handlePersistedEvents(): Invalid persisted events data, expected an array.");
                this.clearCache();

                sendJSErrorObserverLog({
                    message: "Unable to parse event data from preferences",
                    error: "Invalid persisted events data, expected an array, received "+ JSON.stringify(persistedEvents),
                    methodName: "handlePersistentEvents",
                });
                this.persistedEventSyncInProgress = false;
                return;
            }
            this.appendEventsToQueue(parsedPersistedEvents, traceId);
            this.persistedEventSyncInProgress = false;
        } catch (error) {
            sendJSErrorObserverLog({
                message: "Unable to parse event data from preferences",
                error: "Error " + error + " while parsing persisted events data: " + JSON.stringify(persistedEvents),
                methodName: "handlePersistentEvents",
            });
            this.persistedEventSyncInProgress = false;
        }
    },

    appendEventsToQueue(parsedPersistedEvents, traceId) {
        if (!parsedPersistedEvents || parsedPersistedEvents.length === 0) {
            console.log("eventCollectorService.appendEventsToQueue(): No persisted events to process.");
            return;
        }
        this.enqueueEventRequests(parsedPersistedEvents, traceId);
    },

    async uploadEvents(eventRequests) {
        console.log("eventCollectorService.uploadEvents(): called");
        if (!eventRequests || eventRequests.length === 0) {
            return;
        }
        console.debug("eventCollectorService.uploadEvents(): eventRequests- ", JSON.stringify(eventRequests));
        const url = this.getEventCollectorUrl();
        const headers = this.buildHeaders();

        if (await this.isDeviceOffline()) {
            throw new Error("eventCollectorService No network connectivity");
        }

        const requestBodyString = JSON.stringify(eventRequests);
        console.log(`eventCollectorService.uploadEvents(): uploading events. eventCount- ${eventRequests.length}, requestSize- ${requestBodyString.length}`);
        console.debug(`eventCollectorService.uploadEvents(): events api call url- ${url}, headers- ${JSON.stringify(headers)}, body- ${requestBodyString}`);
        const response = await fetch(url, {
            method: "POST",
            headers,
            body: requestBodyString,
        });
        //console.debug("ObserverLogService.uploadLogs(): logs api call response- ", JSON.stringify(response));
        if (!response.ok) {
            const responseText = await response.text().catch(() => "Could not read response body");
            throw new Error(`Server responded with ${response.status}: ${responseText}`);
        }
        console.log("eventCollectorService.uploadEvents(): events api call successful");
        return true;
    },

    getEventCollectorUrl() {
        return jsMetadata?.analyticsMetadata?.eventsUrl;
    },

    buildHeaders() {
        return {
            "Content-Type": "application/json"
        }
    },

    async canMakeApiCall() {
        let userId = getCurrentUserId();
        // Check for required global configuration
        const hasConfigBaseUrl = typeof configBaseUrl === 'string' && configBaseUrl.trim() !== '';
        const hasAppApiKey = typeof appApiKey === 'string' && appApiKey.trim() !== '';
        const hasAppVersionName = typeof appVersionName === 'string' && appVersionName.trim() !== '';
        const hasUserId = typeof userId === 'string' && userId.trim() !== '';
        const hasSessionId = typeof appSessionId === 'string' && appSessionId.trim() !== '';
        const hasEnterpriseId = typeof enterpriseId === 'string' && enterpriseId.trim() !== '';

        if (!hasEnterpriseId) console.warn("event upload failed: enterpriseId is missing or invalid");

        // Check network connectivity
        const online = await this.isDeviceOnline();
        console.debug("eventCollectorService.uploadEvents(): online status ", online);
        if (online && !hasEnterpriseId) {
            console.debug("eventCollectorService.uploadEvents(): online fetching enterpriseId");
            await setEnterpriseId();
        }
        // if (!online) //console.warn("Log upload failed: No network connectivity");
        let status = hasConfigBaseUrl && hasAppApiKey && hasAppVersionName && hasUserId && hasSessionId && online && hasEnterpriseId;
        console.warn("eventCollectorService.canMakeApiCall(): Sync status: ", status);
        return status;
    },

    async isDeviceOnline() {
        return await networkService.isReallyOnline();
    },

    async cannotMakeApiCall() {
        return !(await this.canMakeApiCall())
    },

    async isDeviceOffline() {
        return !(await this.isDeviceOnline());
    },

    async wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    async flushAll(traceId) {
        await this.uploadNextBatch(traceId);
    },

    async enqueueEvent(event, traceId) {
        console.debug(`eventCollectorService.enqueueEvent(): sending event with name- ${event.eventName}
        , eventData- ${JSON.stringify(event.data)}, traceId ${traceId}`);
        try {
            const eventCollectorPayload = this.buildAnalyticsEventObject(event, traceId);
            console.debug("eventCollectorService.enqueueEvent() eventCollectorPayload", JSON.stringify(eventCollectorPayload));
            this.enqueueEventRequests([eventCollectorPayload], traceId);
        } catch (error) {
            console.error("enqueueEvent(): error while queuing event requests.", error);
        }
    },

    buildAnalyticsEventObject(eventRequest, traceId) {
        let selectedProjectProperties = analyticsService.getGeneralProperties();
        // console.log("buildAnalyticsEventObject", JSON.stringify(selectedProjectProperties), connectProjectsParentMap);
        let eventData = eventRequest?.data;
        // console.log("eventCollectorService.buildAnalyticsEventObject Data()", JSON.stringify(eventData));
        let collectorPayload = {
            "event_sink": EVENT_SINK,
            "event_version": 2,
            "ent_id": enterpriseId,
            "user_ids": [getCurrentUserId()],
            "source": EVENT_SOURCE,
            "category": EVENT_CATEGORY,
        }

        let wfProjectId = eventData?.projectId || activeProject?.projectParameters?.projectId || selectedProjectProperties?.projectId;
        let wfDeploymentId = eventData?.deploymentId || activeProject?.projectParameters?.deploymentId || selectedProjectProperties?.deploymentId;
        let wfSelectedProjectId = eventData?.selectedProjectId || (activeProject?.isAFlowMenu ? selectedProjectProperties?.projectId : null);
        let parentProject = connectProjectsParentMap?.[wfDeploymentId];

        // console.log("buildAnalyticsEventObject", wfDeploymentId, wfProjectId, wfSelectedProjectId);

        collectorPayload.properties = {
            "wf_event_id": eventData?.eventId || generateUUID(),
            "wf_event_source": JS_SDK,
            "wf_session_id": appSessionId,
            "wf_user_session_id": userSessionId,
            "wf_project_id": wfProjectId,
            "wf_deployment_id": wfDeploymentId,
            "wf_previous_language": eventData?.previousLanguage,

            "wf_language": selectedLanguage,
            "wf_timestamp": eventData?.timestamp,
            "wf_page_name": eventData?.pageName || null,
            "wf_element_name": eventData?.elementName || selectedProjectProperties?.elementName,
            "wf_action_event_type": eventData?.actionEventType,
            "wf_action_event_value": eventData?.actionEventValue,
            "wf_termination_rule": eventData?.terminationRule,
            "wf_selected_project_id": wfSelectedProjectId,
            ...( parentProject && {
                "wf_parent_project_id": connectProjectsParentMap?.[wfDeploymentId]?.projectId || undefined,
                "wf_parent_deployment_id": connectProjectsParentMap?.[wfDeploymentId]?.deploymentId || undefined,
            }),
            "wf_app_id": jsMetadata?.appId,
            "wf_org_id": jsMetadata?.orgId,
            "wf_carousel_slide_id": eventData?.carouselSlideId || undefined,
            "wf_carousel_previous_slide_id": eventData?.carouselPreviousSlideId || undefined,
            "wf_carousel_direction": eventData?.carouselDirection || undefined,
            "wf_carousel_completed": eventData?.carouselCompleted || undefined,
            "wf_external_link": eventData?.externalLink || undefined,
            "wf_deep_link": eventData?.deepLink || undefined,
            "wf_app_version_name": appVersionName,
            "wf_app_version_code": appVersionCode.toString(),
            "wf_config_id": selectedProjectProperties?.configId || undefined,
            "wf_trace_id": traceId
        };
        collectorPayload.numeric_properties = {
            "wf_deployment_version": Number(eventData?.deploymentVersion || selectedProjectProperties?.deploymentVersion),
            ... ( parentProject && {
                "wf_parent_deployment_version": Number(parentDeploymentVersion) || -1,
            }),
            "wf_sdk_version_code": Number(coreSdkVersionCode),
            "wf_model_version": 2,
            "wf_js_version": jsVersionNumber,
        };

        collectorPayload.pii_properties = {
            "wf_user_id": getCurrentUserId(),
        };

        collectorPayload.timestamp = new Date().getTime().toString();
        collectorPayload.type = eventRequest?.eventName;
        return collectorPayload;
    }
}

function toMilliSeconds(seconds) {
    return seconds * 1000;
}

eventCollectorService.init();

// js filename- index.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// Public methods
// Data receivers from native
function receiveDataFromNativeLayer(message) {
    const traceId = generateUUID();
    try {
        if (!message) return;
        ensureSessionStarted();
        logCommandFromNativeLayer(message, traceId);
        switch (message.commandName) {
            case RECEIVING_COMMANDS.START: {
                executor.addTask(() => start(message.data, traceId));
                break;
            }

            case RECEIVING_COMMANDS.SCREEN_HIERARCHY: {
                metaConfigs?.observeHierarchySize && calculateAvgHierarchySize(message.data.screenHierarchy, traceId);
                receiveScreenHierarchy(message.data.screenHierarchy, undefined, undefined, traceId);
                break;
            }

            case RECEIVING_COMMANDS.ASSIST_INTERACTION: {
                updateAssistInteraction(message.data, traceId);
                break;
            }

            case RECEIVING_COMMANDS.SURVEY_INFO: {
                surveyAnalyticsService.sendEvent(message?.data,traceId);
                break;
            }

            case RECEIVING_COMMANDS.PREF_RESPONSE: {
                if (!message.data || !message.data.key) {
                    console.debug("preferences response is missing key or data", message);
                    return;
                }

                switch (message.data.key) {
                    case 'leap_survey_failed_requests':
                        surveyAnalyticsService.restoreFailedRequestsFromStorage(message.data.value);
                        break;

                    case EVENTS_PREFERENCES:
                        console.debug("preferences response ", message.data.value);
                        eventCollectorService.handlePersistedEvents(message.data.value, traceId);
                        break;

                    default:
                        break;
                }
            }

            case RECEIVING_COMMANDS.WEB_IDENTIFIERS: {
                receiveWebIdentifiers(message.data.identifiers, traceId);
                break;
            }

            case RECEIVING_COMMANDS.LANGUAGE_SELECTED: {
                const previousLanguage = selectedLanguage;
                setCurrentSelectedLanguage(message.data.language);
                if (
                    currentStaticFlow.id !== undefined &&
                    currentStaticFlow.stepsStatus.length !== 0
                ) {
                    sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_LANGUAGE_CHANGE, {
                        previousLanguage,
                    }, traceId);
                    currentStaticFlow?.stepsStatus?.splice(-1);
                    resetActiveStep();
                    saveTheLatestStateChange(traceId);
                }
                break;
            }

            case RECEIVING_COMMANDS.ACTIVITY_PAUSE: {
                //console.warn("ACTIVITY_PAUSE");
                resetActiveStep();
                clearInterval(timer);

                if (currentlyRunningFlow.id) {
                    flowShown = false;
                }

                if (
                    activeProject.id &&
                    (currentStaticFlow.id === undefined ||
                        currentlyRunningFlow.id === undefined)
                )
                    resetActiveProject();

                timer = undefined;

                //resetting cached Finder Observer Events
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
                //console.warn("ACTIVITY_RESUME");
                currentMatchedWebIdentifiers = {};
                if (timer === undefined) init();
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
                updateProjectStatus({id: activeProject.id, isShown: true},
                    traceId);
                updateViewStatusForTheProject("nSession", traceId);

                // For the checklist
                if (
                    ["STATIC_FLOW_CHECKLIST", "STATIC_FLOW_MENU"]?.includes(
                        message?.data?.projectType
                    )
                ) {
                    resetActiveStep();
                    resetCurrentStaticFlow();
                }

                if (currentStaticFlow?.status === "START") {
                    sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_START, {
                        elementName: activeProject?.projectParameters?.projectName,
                    }, traceId);
                    currentStaticFlow.autoStart = false;
                }

                if (currentStaticFlow.autoStart) {
                    sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_START, {
                        elementName: activeProject?.projectParameters?.projectName,
                    }, traceId);
                    sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_OPT_IN, {
                        elementName: activeProject?.projectParameters?.projectName,
                    }, traceId);
                    currentStaticFlow.autoStart = false;
                }

                if (
                    currentlyRunningFlow.id &&
                    currentStaticFlow.stepsStatus.length === 0
                ) {
                    sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_MENU_START, undefined, traceId);
                }

                sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_SEEN, undefined, traceId);
                break;
            }

            case RECEIVING_COMMANDS.EMBED_PROJECT: {
                executor.addTask(async () => {
                    if (isSelfHosted) {
                        return;
                    }
                    clearEveryThing(true, traceId);
                    await fetchByProjectId(message.data.projectId, traceId);
                });

                break;
            }

            case RECEIVING_COMMANDS.SET_USER_ID: {
                executor.addTask(() => login_user(message.data.leapUserId, traceId));
                break;
            }

            case RECEIVING_COMMANDS.LOGOUT: {
                executor.addTask(() => logout_user(traceId));
                break;
            }

            case RECEIVING_COMMANDS.STOP_PREVIEW: {
                //console.warn("STOP_PREVIEW");
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
                //console.warn("PREVIEW_CONFIG");
                inPreviewMode = true;
                clearEveryThing(true, traceId);

                enterPreviewMode(JSON.parse(message.data.previewConfig), traceId);
                break;
            }

            case RECEIVING_COMMANDS.USER_PROPERTIES: {
                executor.addTask(async () => {
                    //console.warn("USER_PROPERTIES", message?.data?.userProps);
                    const userProps = message?.data?.userProps;

                    customProperties = {
                        ...customProperties,
                        ...userProps,
                    };
                    defaultProperties = {
                        ...message?.data?.defaultProps,
                    };

                    saveTheLatestProps(traceId);
                    saveTheLatestStateChange(traceId);
                    clearEveryThing(true, traceId);
                    await fetchByUserProperties(traceId);
                });
                break;
            }

            case RECEIVING_COMMANDS.APP_LOCALE: {
                setCurrentSelectedLanguage(message.data.appLocale);
                saveTheLatestProps(traceId);
                saveTheLatestStateChange(traceId);
                break;
            }

            case RECEIVING_COMMANDS.NETWORK_SWITCH: {
                console.log('NETWORK_SWITCH');
                break;
            }

            case RECEIVING_COMMANDS.OBSERVER_LOG: {
                if (!message.data) return;
                console.log('observer log');
                handleLogsSentFromNative(message.data)
                break;
            }

            default: {
                console.log("No command found", JSON.stringify(message));
                break;
            }
        }
    } catch (error) {
        console.error("receiveDataFromNativeLayer(): unable to execute command from native", error);
        sendJSErrorObserverLog({
            message: "failed to execute command from native layer",
            logData: {message},
            error,
            methodName: "receiveDataFromNativeLayer",
            traceId
        });
    }

    function logCommandFromNativeLayer(message, traceId) {
        try {
            if (shouldLogCommand(message)) {
                console.log("command to js: " + message?.commandName);
                let messageData = shouldLogData(message) ? message.data ?? {} : {included: false};
                sendJSObserverLog({
                    message: `command to js [${message?.commandName}]`,
                    logData: {messageData},
                    methodName: "receiveDataFromNativeLayer",
                    traceId
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    function shouldLogCommand(message) {
        return message?.commandName && ![
            RECEIVING_COMMANDS.SCREEN_HIERARCHY,
            RECEIVING_COMMANDS.WEB_IDENTIFIERS,
            RECEIVING_COMMANDS.ACTIVITY_PAUSE,
            RECEIVING_COMMANDS.ACTIVITY_RESUME,
        ].includes(message.commandName);
    }

    function shouldLogData(message) {
        return message?.commandName && ![
            RECEIVING_COMMANDS.START,
            RECEIVING_COMMANDS.SCREEN_HIERARCHY,
            RECEIVING_COMMANDS.WEB_IDENTIFIERS,
            RECEIVING_COMMANDS.ACTIVITY_PAUSE,
            RECEIVING_COMMANDS.ACTIVITY_RESUME,
            RECEIVING_COMMANDS.PREVIEW_CONFIG,
            RECEIVING_COMMANDS.STOP_PREVIEW].includes(message.commandName);
    }
}

async function login_user(userId, traceId) {
    try {
        let currentUserId = getCurrentUserId();
        //console.info("SET_USER_ID", `prev: ${currentUserId}`, `userId: ${userId}`);
        if (isSelfHosted) {
            return;
        }
        sendMessageToNative({
            command: SENDING_COMMANDS.NO_CONTEXT_FOUND,
            data: {
                leapUserId: currentUserId,
            },
        }, traceId);
        ensureSessionStarted();
        if (sdkStateService.isLoggedIn && userId !== currentUserId) {
            clearEveryThing(true, traceId);
            await logout_user(traceId);
        }
        sdkStateService.setUserId(userId, traceId);
        await fetchByUserId(userId, traceId);
        setUserLoggedIn();
    } catch (error) {
        console.error("login_user(): failed to login user", error);
        sendJSErrorObserverLog({
            message: `failed to login user`,
            error,
            methodName: "login_user",
            traceId
        });
    }
}

async function logout_user(traceId) {
    try {
        //console.info("LOGOUT");
        if (isSelfHosted) {
            return;
        }
        if (sdkStateService.isLoggedOut) {
            return;
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
    } catch (error) {
        console.error("logout_user(): failed to logout user", error);
        sendJSErrorObserverLog({
            message: `failed to logout user`,
            error,
            methodName: "logout_user",
            traceId
        });
    }
}

function cleanUpGlobalState(traceId) {
    customProperties = {};
    saveTheLatestProps(traceId);
    resetGlobalUserState();
}

function handleLogsSentFromNative(data) {
    sendObserverLogs({
        event_name: OBSERVER_EVENTS.SDK.ON_SDK_LOGGED,
        category: OBSERVER_EVENT_CATEGORIES.SDK,
        ...data,
    }, generateUUID());

}



// js filename- observer/observerLogService.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const JS_OBSERVER_LOG_TYPE = "MOBILE_JS_LOG";
const LOG_API_REQUEST_NULL_STRING_VALUE = "[NULL]";

const observerLogService = {
    init(maxBatchSize = 20, batchWaitTime = toMilliSeconds(10)) {
        this.maxBatchSize = maxBatchSize;
        this.batchWaitTime = batchWaitTime;
        this.logRequestQueue = [];
        this.isUploading = false;
        this.logVersion = "1";
        this.batchTimer = null;
        this.maxQueueSize = 2000;
        // //console.log("ObserverLogService.constructor(): initialised successfully.");
    },

    queueLogRequests(logRequests = [], traceId) {
        //console.log("ObserverLogService.queueLogRequests(): method called");
        if (isSelfHosted) return;
        if (!logRequests.length) return;

        const availableSpace = this.maxQueueSize - this.logRequestQueue.length;
        if (availableSpace <= 0) {
            // console.warn(`Log queue full (${this.logQueue.length} items), dropping ${logRequests.length} new logs`);
            return;
        }

        const logsToAdd = logRequests.slice(0, availableSpace);
        this.logRequestQueue.push(...logsToAdd);

        if (!this.batchTimer) {
            this.batchTimer = setTimeout(() => {
                this.batchTimer = null;
                this.uploadNextBatch(traceId);
            }, this.batchWaitTime);
        }
    },

    async uploadNextBatch(traceId) {
        if (this.isUploading || await this.cannotMakeApiCall() || !this.logRequestQueue.length) {
            return;
        }
        this.isUploading = true;
        const batch = this.logRequestQueue.splice(0, this.maxBatchSize);
        this.addUploadMetaToLogRequests(batch);
        try {
            await this.uploadLogs(batch);
        } catch (error) {
            console.error(`[${traceId}]Error uploading logs`, error);
            this.logRequestQueue.unshift(...batch);
        } finally {
            this.isUploading = false;
        }
    },

    addUploadMetaToLogRequests(logRequestBatch) {
        const nowISOString = new Date().toISOString();
        for (const log of logRequestBatch) {
            const isFirstAttempt = !log.firstUploadAttemptedAt;
            if (isFirstAttempt) {
                log.firstUploadAttemptedAt = nowISOString;
            } else {
                log.lastUploadAttemptedAt = nowISOString;
            }
            log.uploadAttemptCount = (log.uploadAttemptCount ?? 0) + 1;
        }
    },

    async uploadLogs(logRequests) {
        //console.log("ObserverLogService.uploadLogs(): called");
        if (!logRequests || logRequests.length === 0) {
            return;
        }
        //console.debug("ObserverLogService.uploadLogs(): logRequests- ", JSON.stringify(logRequests));
        const url = this.getLogsUrl();
        const headers = this.buildHeaders();

        if (await this.isDeviceOffline()) {
            throw new Error("No network connectivity");
        }

        const requestBody = logRequests.map(this.generateLogBody);
        const requestBodyString = JSON.stringify(requestBody);
        //console.log(`ObserverLogService.uploadLogs(): uploading logs. logCount- ${logRequests.length}, requestSize- ${requestBodyString.length}`);
        //console.debug(`ObserverLogService.uploadLogs(): logs api call url- ${url}, headers- ${JSON.stringify(headers)}, body- ${requestBodyString}`);
        const response = await fetch(url, {
            method: "POST",
            headers,
            body: requestBodyString,
        });
        //console.debug("ObserverLogService.uploadLogs(): logs api call response- ", JSON.stringify(response));
        if (!response.ok) {
            const responseText = await response.text().catch(() => "Could not read response body");
            throw new Error(`Server responded with ${response.status}: ${responseText}`);
        }
        //console.log("ObserverLogService.uploadLogs(): logs api call successful");
        return response;
    },

    getLogsUrl() {
        return `${appObserverBaseUrl}service/log/collect/${enterpriseId}`;
    },

    buildHeaders() {
        return {
            "Content-Type": "application/json"
        }
    },

    async canMakeApiCall() {
        let userId = getCurrentUserId();
        // Check for required global configuration
        const hasConfigBaseUrl = typeof configBaseUrl === 'string' && configBaseUrl.trim() !== '';
        const hasAppApiKey = typeof appApiKey === 'string' && appApiKey.trim() !== '';
        const hasAppVersionName = typeof appVersionName === 'string' && appVersionName.trim() !== '';
        const hasUserId = typeof userId === 'string' && userId.trim() !== '';
        const hasSessionId = typeof appSessionId === 'string' && appSessionId.trim() !== '';
        const hasEnterpriseId = typeof enterpriseId === 'string' && enterpriseId.trim() !== '';

        // if (!hasConfigBaseUrl) //console.warn("Log upload failed: configBaseUrl is missing or invalid");
        // if (!hasAppApiKey) //console.warn("Log upload failed: appApiKey is missing or invalid");
        // if (!hasAppVersionName) //console.warn("Log upload failed: appVersionName is missing or invalid");
        // if (!hasUserId) //console.warn("Log upload failed: userId is missing or invalid");
        // if (!hasSessionId) //console.warn("Log upload failed: sessionId is missing or invalid");
        // if (!hasEnterpriseId) console.warn("Log upload failed: enterpriseId is missing or invalid");

        // Check network connectivity
        const online = await this.isDeviceOnline();
        if (online && !hasEnterpriseId) {
            await setEnterpriseId();
        }
        // if (!online) //console.warn("Log upload failed: No network connectivity");
        let status = hasConfigBaseUrl && hasAppApiKey && hasAppVersionName && hasUserId && hasSessionId && online && hasEnterpriseId;
        console.warn("ObserverLogService.canMakeApiCall(): Sync status: ", status);
        return status;
    },

    async isDeviceOnline() {
        return await networkService.isReallyOnline();
    },

    async cannotMakeApiCall() {
        return !(await this.canMakeApiCall())
    },

    async isDeviceOffline() {
        return !(await this.isDeviceOnline());
    },

    async wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    async flushAll(traceId) {
        await this.uploadNextBatch(traceId);
    },

    generateLogBody({
                        message,
                        logData = {},
                        time = new Date(),
                        userId,
                        userSessionId,
                        className,
                        methodName,
                        level = ObserverLogLevel.INFO,
                        userState,
                        firstUploadAttemptedAt,
                        lastUploadAttemptedAt,
                        uploadAttemptCount = 1,
                        traceId,
                    } = {}) {
        let now = new Date();
        message = message || LOG_API_REQUEST_NULL_STRING_VALUE;
        logData = logData || {};
        time = time || now;
        userId = userId || getCurrentUserId() || LOG_API_REQUEST_NULL_STRING_VALUE;
        userSessionId = userSessionId || LOG_API_REQUEST_NULL_STRING_VALUE;
        className = className || LOG_API_REQUEST_NULL_STRING_VALUE;
        methodName = methodName || LOG_API_REQUEST_NULL_STRING_VALUE;
        level = level || ObserverLogLevel.INFO;
        userState = userState || {included: false};
        const nonNullSessionId = appSessionId || LOG_API_REQUEST_NULL_STRING_VALUE;
        const nonNullAppVersionName = appVersionName || LOG_API_REQUEST_NULL_STRING_VALUE;
        const nonNullJsVersionNumber = jsVersionNumber || 0;
        traceId = traceId || LOG_API_REQUEST_NULL_STRING_VALUE;
        let appId = wfAppId || LOG_API_REQUEST_NULL_STRING_VALUE;

        let uploadMeta = {
            uploadMeta: {
                firstAt: firstUploadAttemptedAt || now,
                lastAt: lastUploadAttemptedAt || LOG_API_REQUEST_NULL_STRING_VALUE,
                count: uploadAttemptCount || 1,
            }
        }

        let finalLogData;
        try {
            finalLogData = typeof logData === 'string' || logData instanceof String
                ? logData
                : JSON.stringify(logData);
        } catch (e) {
            finalLogData = '"[Unserializable logData]"';
        }

        return {
            user: userId,
            platform: "MOBILE",
            level,
            module: "MOBILE_SDK_LOGS",
            message: message,
            ent_id: enterpriseId,
            org_id: enterpriseId,
            unq_id: nonNullSessionId,
            on_id: `${jsVersionNumber}`,
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

    sendObserverLog(message,
                    logData = {},
                    time = new Date(),
                    className,
                    methodName,
                    level = ObserverLogLevel.INFO,
                    userState,
                    traceId) {
        //console.debug(`ObserverLogService.sendObserverLog(): sending observer log with message- ${message}, logData- ${JSON.stringify(logData)}, traceId ${traceId}`);
        const userId = getCurrentUserId();
        try {
            const shouldSendLogs = forceSendJsObserverLogs || loggerConfig?.log_types?.includes(level);
            if (shouldSendLogs) {
                const logRequest = {
                    message,
                    logData,
                    time,
                    userId,
                    userSessionId: getUserSessionId(),
                    className,
                    methodName,
                    level,
                    userState,
                    traceId
                };
                this.queueLogRequests([logRequest], traceId);
            }
        } catch (error) {
            console.error("sendObserverLog(): error while queuing log requests.", error);
        }
    }
}

function getErrorLogObjectFromError(error) {
    return {
        name: error?.name || "Error",
        message: error?.message || "No message",
        stack: error?.stack || "No stack trace available"
    };
}

function toMilliSeconds(seconds) {
    return seconds * 1000;
}

observerLogService.init();

// js filename- user/userProfileService.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck


class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.isEmpty() ? null : this.items.shift();
    }

    peek() {
        return this.isEmpty() ? null : this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        //console.log(this.items.join(', '));
    }
}

const userProfileService = {
    init() {
        this.userIds = new Queue();
        this.inProgress = new Set();
    },

    enqueueUpdate(userId, traceId) {
        this.userIds.enqueue({userId, traceId});
        this.startUserUpdateIfNeeded(userId, traceId);
    },

    startUserUpdateIfNeeded(userId) {
        //console.log(`UserProfileService.startUserUpdateIfNeeded(): Enqueuing process for userId=${userId}`);
        if (!this.inProgress.has(userId)) {
            let queueItem = this.userIds.dequeue(userId);
            if (!sdkStateService.isStateSyncedForUserId(userId)) {
                //console.log(`UserProfileService.startUserUpdateIfNeeded(): Starting process for userId=${userId}`);
                this.startUserUpdate(userId, queueItem.traceId);
            }
        }
    },

    async startUserUpdate(userId, traceId) {
        this.inProgress.add(userId);

        if (await this.cannotMakeApiCall()) {
            //console.warn(`UserProfileService.startUserUpdate(): Cannot start upload for userId=${userId}`);
            this.inProgress.delete(userId);
            return;
        }

        const savedUserState = sdkStateService.getUserStateById(userId);
        if (isEmptyObject(savedUserState?.projectsStatus)) {
            //console.warn(`UserProfileService.startUserUpdate(): No entry or project status found for userId=${userId}`);
            this.inProgress.delete(userId);
            return;
        }

        if (!savedUserState?.lastProfileUpdatedAt) {
            savedUserState.lastProfileUpdatedAt = new Date();
            sdkStateService.persistState(traceId);
        }

        const requestBody = isNonEmptyObject(savedUserState.projectsStatus) ?
            {
                id: userId,
                properties: {
                    allProjectStatus: savedUserState.projectsStatus,
                    completedFlowProjects: savedUserState.projectsCompletionStats,
                    selectedLanguage: savedUserState.language,
                },
                updatedAt: savedUserState.lastProfileUpdatedAt
            } : {};

        const success = await this.tryUpload(userId, requestBody, traceId);
        if (success) {
            const latestUserState = sdkStateService.getUserStateById(userId);
            latestUserState.lastProfileSyncedAt = savedUserState.lastProfileUpdatedAt;
            sdkStateService.persistState(traceId);
            this.inProgress.delete(userId);
            this.startUserUpdateIfNeeded(userId);
            return;
        }
        this.inProgress.delete(userId);
        //console.log(`UserProfileService.startUserUpdate(): Finished processing userId- ${userId}, success- ${success}`);
    },

    async canMakeApiCall() {
        const hasBaseUrl = typeof configBaseUrl === 'string' && configBaseUrl.trim() !== '';
        const hasAppApiKey = typeof appApiKey === 'string' && appApiKey.trim() !== '';
        const hasAppVersionName = typeof appVersionName === 'string' && appApiKey.trim() !== '';

        // if (!hasBaseUrl) //console.warn("UserProfileService.canMakeApiCall(): Sync failed: configBaseUrl is missing or invalid");
        // if (!hasAppApiKey) //console.warn("UserProfileService.canMakeApiCall(): Sync failed: appApiKey is missing or invalid");
        // if (!hasAppVersionName) //console.warn("UserProfileService.canMakeApiCall(): Sync failed: hasAppVersionName is missing or invalid");

        const online = await this.isDeviceOnline();
        // if (!online) //console.warn("UserProfileService.canMakeApiCall(): Sync failed: no network connectivity");
        let status = hasBaseUrl && hasAppApiKey && hasAppVersionName && online;
        console.warn("UserProfileService.canMakeApiCall(): Sync status: ", status);
        return status;
    },

    async isDeviceOnline() {
        return await networkService.isReallyOnline();
    },

    async cannotMakeApiCall() {
        return !(await this.canMakeApiCall())
    },

    async isDeviceOffline() {
        return !(await this.isDeviceOnline());
    },

    async tryUpload(userId, requestBody, traceId) {
        try {
            const requestBodyString = JSON.stringify(requestBody);
            //console.log(`UserProfileService.tryUpload(): Starting upload for userId=${userId}, traceId=${traceId}`);
            sendJSObserverLog({
                message: "Starting user profile upload API call",
                className: "UserProfileService",
                methodName: "tryUpload",
                traceId,
                level: ObserverLogLevel.DEBUG,
            });

            const response = await fetch(`${configBaseUrl}odin/api/v1/profile`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-jiny-client-id": appApiKey,
                    "x-app-version-name": appVersionName,
                    "x-leap-id": userId,
                },
                body: requestBodyString,
            });

            sendJSObserverLog({
                message: "User profile upload API call finished",
                logData: {
                    status: response.status,
                },
                className: "UserProfileService",
                methodName: "tryUpload",
                traceId,
            });

            if (response.ok) {
                //console.log(`UserProfileService.tryUpload(): Upload successful for userId=${userId}`);
                return true;
            }

            const responseText = await response.text().catch(() => "Could not read response body");
            //console.warn(`UserProfileService.tryUpload(): Sync failed for userId=${userId}: status=${response.status}, body=${responseText}`);

        } catch (error) {
            console.error(`UserProfileService.tryUpload(): Network error for userId=${userId}`, error);
            sendJSErrorObserverLog({
                message: "Failed to update user profile",
                error,
                className: "UserProfileService",
                methodName: "tryUpload",
                traceId
            });
        }
        return false;
    },

    async flushAll(traceId) {
        let userIds = sdkStateService.allUserIds;
        for (const userId of userIds) {
            if (!sdkStateService.isStateSyncedForUserId(userId)) {
                await this.enqueueUpdate(userId, traceId);
            }
        }
        sdkStateService.cleanUpSyncedUserStates();
    },
}

userProfileService.init();



// js filename- utils/globalErrorHandler.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

function setupGlobalErrorHandlers() {
    window.onerror = function (message, source, lineno, colno, error) {
        console.error('Unhandled JavaScript Error:', {message, source, lineno, colno, error});

        if (!error) {
            error = new Error(message);
            error.stack = `at ${source}:${lineno}:${colno}`;
        }

        sendJSErrorObserverLog({
            message: 'Unhandled JavaScript Error',
            logData: {
                source,
                lineno,
                colno,
            },
            error,
            methodName: 'setupGlobalErrorHandlers',
            traceId: generateUUID(),
        });
    };

    window.addEventListener('unhandledrejection', function (event) {
        console.error('Unhandled Promise Rejection:', {reason: event.reason});

        let error = event.reason;
        if (!(error instanceof Error)) {
            error = new Error(typeof error === 'string' ? error : JSON.stringify(error));
        }

        sendJSErrorObserverLog({
            message: 'Unhandled Promise Rejection',
            error,
            methodName: 'setupGlobalErrorHandlers',
            traceId: generateUUID(),
        });
    });
}

setupGlobalErrorHandlers();

// js filename- utils/globalSchedulerService.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck


const globalSchedulerService = {
    init(intervalMs = 180000) {
        this.intervalMs = intervalMs;
        this.shouldStop = false;
        this.isRunning = false;
        this.start();
    },

    async start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.shouldStop = false;

        while (!this.shouldStop) {
            console.log(`GlobalSchedulerService.start(): Waiting ${this.intervalMs}ms`);
            await this.sleep(this.intervalMs);

            console.log("GlobalSchedulerService.start(): Starting flush cycle");
            try {
                await this.flushAll(`GlobalSchedulerService:${generateUUID()}`);
            } catch (err) {
                console.error("GlobalSchedulerService.start(): Error during flushAll", err);
            }

            console.log("GlobalSchedulerService.start(): Flush cycle complete");
        }
        this.isRunning = false;
    },

    stop() {
        this.shouldStop = true;
    },

    async flushAll(traceId) {
        await flushAllPendingOperations(traceId);
    },

    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}

globalSchedulerService.init();

let isFlushAllExecuting = false;
let lastFlushedAllAt = 0;
const FLUSH_INTERVAL_MS = 30 * 1000;

async function flushAllPendingOperations(traceId) {
    const now = Date.now();

    if (isFlushAllExecuting) {
        console.log(`[${traceId}] Skipping flush: already executing`);
        return;
    }

    if (now - lastFlushedAllAt < FLUSH_INTERVAL_MS) {
        const timeLeft = Math.ceil((FLUSH_INTERVAL_MS - (now - lastFlushedAllAt)) / 1000);
        console.log(`[${traceId}] Skipping flush: last flush was ${Math.floor((now - lastFlushedAllAt) / 1000)}s ago, must wait ${timeLeft}s more`);
        return;
    }

    isFlushAllExecuting = true;
    lastFlushedAllAt = now;

    console.log(`[${traceId}] Starting flush operations`);

    try {
        await Promise.all([
            userProfileService.flushAll(traceId),
            eventCollectorService.flushAll(traceId),
            observerLogService.flushAll(traceId),
            surveyAnalyticsService.flushAll(traceId)

        ]);
        console.log(`[${traceId}] All flush operations completed`);
    } catch (error) {
        console.error(`[${traceId}] Error flushing pending requests`, error);
    }
    isFlushAllExecuting = false;
}




// js filename- utils/networkService.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const networkService = {

    init() {
        this.handleOnline = this.handleOnline.bind(this);
        this.handleOffline = this.handleOffline.bind(this);

        window.addEventListener('online', this.handleOnline);
        window.addEventListener('offline', this.handleOffline);

        console.log('networkService.init(): Event listeners for online/offline events initialized.');
    },

    handleOnline() {
        console.log('networkService.handleOnline(): Device is online, flushing pending requests.');
        flushAllPendingOperations(`NetworkService:${generateUUID()}`);
    },

    handleOffline() {
        console.log('networkService.handleOffline(): Device is offline.');
    },

    async isReallyOnline() {
        if (isSelfHosted) {
            return false;
        }
        return typeof navigator !== "undefined" && navigator.onLine;
    }
}

networkService.init();

// js filename- utils/enterpriseUtil.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment

async function setEnterpriseId(){
    if (!sdkStateService.entId) {
        enterpriseId = await fetchAndSetEnterpriseId();
        sdkStateService.entId = enterpriseId;
    }else{
        enterpriseId = sdkStateService.entId;
    }
    sdkStateService.persistState(generateUUID());
}

async function fetchAndSetEnterpriseId(traceId) {
    let enterpriseId = "";
    try{
        let jsMetadataResponse = await fetchObserverMetadata(traceId);
        if (jsMetadataResponse !== null) {
            // console.debug("fetchObserverMetadata(): baeUrl {} metadataMap {}, apikey {}", baseUrl, JSON.stringify(jsMetadataResponse), appApiKey);
            enterpriseId =  jsMetadataResponse?.entId;
            wfAppId = jsMetadataResponse?.appId;
            jsMetadata=jsMetadataResponse;
            return enterpriseId;
        }else{
            sendJSErrorObserverLog({
                logData: {
                    observerMetadataMap: JSON.stringify(jsMetadataResponse),
                    apikey: apiKey,
                },
                message: "[ERROR] error fetching enterprise metadata",
                methodName: "fetchObserverMetadata",
                className: "init.js",
                traceId
            })
        }
        return enterpriseId;
    } catch (error) {
        console.error("Error fetching observer metadata", error);
        sendJSErrorObserverLog({
            logData: {
                apikey: apiKey,
                error: error
            },
            message: "[ERROR] error fetching observer metadata",
            methodName: "fetchObserverMetadata",
            className: "init.js",
            traceId
        })
        return enterpriseId;
    }
}

async function fetchObserverMetadata(traceId) {
    // console.debug("fetchObserverMetadata(): fetchObserverMetadata current Base params url {} apikey {}", configBaseUrl, appApiKey);
    let baseUrl = getBaseURLUsingAPIKey(configBaseUrl, appApiKey);
    let jsModuleHeaders = {
        "X-Wf-ApiKey": appApiKey,
        "Content-Type": "application/json",
        "Allow-Control-Access-Origin": "*"
    }
    try {
        console.log("fetchObserverMetadata(): Fetching observer metadata from baseUrl {} apikey {} ", baseUrl, appApiKey);
        const moduleResponse = await fetch(`${baseUrl}odin/api/v1/js-metadata`, {
            method: "GET",
            headers: jsModuleHeaders,
        });

        if (!moduleResponse.ok) return null;

        return await moduleResponse.json();
    } catch (error) {
        console.error("fetchObserverMetadata(): unable to fetch observer metadata", error);
        sendJSErrorObserverLog({
            message: "failed to fetch observer metadata",
            error,
            methodName: "fetchObserverMetadata",
            traceId
        });
    }
}

function getBaseURLUsingAPIKey(baseUrl, apiKey) {
    let metadataEndpoint = "https://leap-api-in.whatfix.com/";
    if (apiKey.substring(0, 4) === "eus:") {
        metadataEndpoint = "https://leap-api-eus.whatfix.com/";
    } else if (apiKey.substring(0, 3) === "eu:") {
        metadataEndpoint = "https://leap-api-eu.whatfix.com/";
    }else if (baseUrl.includes("quickolabs.com")) {
        metadataEndpoint = "https://leap-uat-api-mama.quickolabs.com/";
    }
    return metadataEndpoint;
}


window.receiveDataFromNativeLayer = receiveDataFromNativeLayer;
