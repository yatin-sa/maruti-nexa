(function (window) {
    window.MDIGITAL = window.MDIGITAL || {};
    window.MDIGITAL.version = "2.49.0";
})(window);
window.KAMPYLE_CONSTANT = {
    PLACEHOLDERS: {
        URL_PREFIX: "https://resources.digital-cloud.medallia.eu/",
        USERSNAP_CDN_URL: "//screencaptue-cdn.kampyle.com/",
        USERSNAP_HOST_PREFIX: "//screencapture.kampyle.com/",
        COOLADATA_SRC_PREFIX: "//nebula-cdn.kampyle.com/",
        COOLDATA_API_HOST: "udc-neb.kampyle.com/",
        USERSNAP_V4_HOST_PREFIX: "//scp.kampyle.com",
        USERSNAP_ONPREM_HOST_PREFIX: "https://md-scp.kampyle.com/",
        USER_AGENT_CLIENT_HINTS_LIST: '["brands", "mobile", "platform", "architecture", "model", "bitness", "platformVersion", "fullVersionList", "wow64", "uaFullVersion"]',
    },
    SRC: { OPEN_SANS: "resources/form/FormBuilder/vendor/fonts-googleapis/css/open-sans-v14.css", COOLADATA: "resources/onsite/js/cool-2.1.15.min.js", OOPS: "resources/onsite/images/oops.svg" },
    FORM_HEIGHT: "450",
    FORM_WIDTH: "450",
    COOKIE_EXPIRATION: 365,
    DEVICES: { DESKTOP: "desktop", MOBILE: "mobile", TABLET: "tablet" },
    FEATURE_VERSIONS: { MOBILE_DYNAMIC_SIZING: 2 },
    TIME_FORMATS: { SECONDS: "seconds", MINUTES: "minutes", HOURS: "hours", DAYS: "days", WEEKS: "weeks", MONTHS: "months", YEARS: "years" },
    DISPLAY_TYPES: { LIGHTBOX: "lightbox", ANIMATION: "animation", POPUP: "popup", EMBEDDED: "embedded" },
    FORM_TYPES: { EMBEDDED: "embedded", INVITATION: "invitation", BUTTON: "button", CODE: "code" },
    EVENT_DATA: { PAGE_NUMBER: "pageNumber", FEEDBACK_CORRELATION_UUID: "feedbackCorrelationUUID", FEEDBACK_UUID: "feedbackUUID" },
    EVENT_NAME: { NEB_LOAD_FORM: "neb_loadForm" },
    FEATURE_FLAGS: {
        WCAG: "WCAG",
        EXEMPT_BUTTON_FORMS_FROM_QUARANTINE: "exemptButtonFormsFromQuarantine",
        EXEMPT_EMBEDDED_FORMS_FROM_QUARANTINE: "exemptEmbeddedFormsFromQuarantine",
        EXEMPT_CODE_FORMS_FROM_QUARANTINE: "exemptCodeFormsFromQuarantine",
    },
    PROVISIONS: {
        cooladataNewEvents: "cooladataNewEvents",
        NEW_SCREEN_CAPTURE_CONFIG: "newScreenCaptureConfiguration",
        ON_PREM_HYBRID: "onPremHybrid",
        API_GATEWAY: "apiGateway",
        LOCALIZED_FORMS: "localizedForms",
        FORM_TEMPLATE_DATA_SEPERATION: "separateFormTemplateFromData",
        EVENT_INCLUDE_FEEDBACK_CONTENT: "eventIncludeFeedbackContent",
        CP_EXT_REFACTOR: "cpExtractRefactor",
        ADOBE_INCLUDE_LINK_TRACK_VARS: "adobeIncludeLinkTrackVars",
        ADOBE_ANALYTICS_OBJECT_NAME: "adobeAnalyticsObjectName",
        ADOBE_CONCAT_LINK_TRACK_VARS: "adobeConcatLinkTrackVars",
        ENABLE_OVERFLOW: "enableOverflow",
        SERVER_BASED_TARGETING: "serverBasedTargeting",
        COOLADATA_EVNETS_LIMIT: "cooladataEventsLimit",
        UBT_EXTRA_EVENTS: "UBTExtraEvents",
        ALTERNATIVE_UUID: "alternativeUUID",
        DISABLE_COOKIE_STORAGE: "cookieStorageDisable",
        SHARE_PROPERTY_DOMAIN: "sharePropertyBetweenSubdomains",
        SKIP_INVITATION_OPTIMIZATION: "skipInvitationOptimization",
        COOLADATA_SUBMITTED_BY_XHR: "cooladataSubmittedByXhr",
        DO_NOT_SURVEY_ON_UBT_NETWORK_FAIL: "doNotSurveyOnUBTNetworkFail",
        DHH: "dynamicHybridHosting",
        USER_SNAP_V4: "userSnapV4",
        USER_SNAP_ONPREM: "21dcr2_MPC3296_enable_usersnapOnpremCSP",
        DYNAMIC_ONSITE_EVENTS: "dynamicOnsiteEvents",
        CSP_RULES: "CSPRemoveInlineStyling",
        CREATE_SESSION: "cooladataCreateSessionEvent",
        FORM_TEMPLATES_WCAG: "formTemplatesWCAG",
        PREVENT_IFRAME_SCROLLBAR_FLICKERING: "20dcr32_NM11146_PreventIFrameScrollFlickering",
        BACKEND_GENERATED_UUID: "20dcr4_MPC2802_enable_backendGeneratedUUID",
        CHTML_LOGS: "chtmlLogs",
        EXEMPT_FORMS_FROM_QUARANTINE: "20dcr4_MPC2952_enable_exemptFormsFromQuarantine",
        USER_SNAP_AS_COMPONENT: "20dcr4_MPC2893_enable_ScreenCaptureAsComponent",
        ADDITIONAL_BUTTON_STYLES: "21dcr1_MPC3199_AdditionalButtonStyles",
        RTL: "21dcr1_MPC_3283_enable_RTL",
        GREATER_SMALLER_THAN_DECODE: "21dcr1_MPC3370_EnableGreaterSmallerThanSupport",
        NEW_MODAL_DIALOGS: "21dcr3_MPC3281_enable_newModalDialogs",
        IS_CHTML_HANDLE_INIT_FOCUS_INDEPENDENTLY: "21dcr3_MPC3281_enable_CHTMLHandleFocusIndependently",
        WCAG_TRAP_FOCUS_IN_MODAL: "WCAGTrapFocusInModal",
        WCAG_REVIEW_FIXES: "20dcr4_MPC2905_wcagReviewFixes",
        PROPERTY_MESSAGES: "propertyMessages",
        NOT_SCROLL_TO_LAST_POSITION_DISPLAY_TYPE_ANIMATION: "willNotScrollToLastPositionDisplayTypeAnimation",
        CLEAR_EMBEDDED_ON_UPDATE_PAGE: "21dcr2_MPC3571_enable_ClearEmbeddedFormOnUpdatePageView",
        ENABLE_EVENTS_FOR_CE_DEBUG: "21DCR2_MPC3662_EnableEventsForCEDebug",
        EXPOSE_SELECTION_QUESTIONS: "21DCR3_MPC3866_exposeSelectionQuestionsInCustomEvent",
        EXPOSE_VERBATIM_QUESTIONS: "21DCR3_MPC3866_exposeVerbatimQuestionsInCustomEvent",
        EXTENSION_ENABLED: "21dcr6_MPC4042_enable_exmdextension",
        LIVE_FORM_V2: "21dcr2_MPC2743_enable_newLiveForm",
        ENABLE_FIX_FOR_SPA_TIME_ON_PAGE: "21DCR5_MPC4030_EnableFixForSpaTimeOnPage",
        ENABLE_UBT_IDENTIFIER_HASH: "21dcr6_MPC4296_enable_UBTIdentifierHash",
        TARGETING_EVENTS_REPORTING: "targetingEventsReporting",
        ENABLE_CLIENT_HINTS: "23dcr1_MPC6052_EnableClientHints",
        ENABLE_WCAG_PREPEND_SURVEY: "23dcr1_MPC6711_enableWCAGPrependSurvey",
        MOBILE_WEB_BANNER_FIX: "23dcr1_mpc6083_enableMobileWebiOSBannerFix",
    },
    MEDALLIA_DIGITAL_EMBED_FILE: "medallia-digital-embed.js",
    DEFAULT_ADOBE_SDK_NAME: "s",
    ONPREM_URL_PREFIX: "/****ONPREM_URL_PREFIX****/",
    ONPREM_UDC_PREFIX: "/****JS_UDC****/",
    ANALYTICS_EVENT_FORBIDDEN_PROPERTIES: { sourceWindow: true, content: true, feedbackCorrelationUUID: true },
    FORM_TRIGGER_TYPES_MAP: { embedded: "Embedded", invitation: "Intercept", button: "AlwaysOn", code: "TriggeredByCode" },
    EXPOSED_FEEDBACK_KEYS: { FORM_ID_LABEL: "Form_ID", FORM_TYPE_LABEL: "Form_Type", FEEDBACK_UUID_LABEL: "Feedback_UUID", FEEDBACK_CONTENT_LABEL: "Content", FORM_LANGUAGE_LABEL: "Form_Language" },
    LANG_MEMORY_DATA_KEY_PREFIX: "formLanguage:",
    FORM_JSON_DATA_KEY_PREFIX: "formJsonData:",
    INVITE_JSON_DATA_KEY_PREFIX: "inviteJsonData:",
    FORM_BUTTON: "button",
    FORM_INVITATION: "invitation",
    CUSTOM_EVENT_OTHER: "Other",
    LOCALIZED_FORM_DEFAULT_REPLACE_VALUE: "default",
    NOT_RECORDING: "NOT_RECORDING",
    IFRAME_SETTINGS: {
        EMBEDDED: { IFRAME_ID_PREFIX: "embeddedIframe" },
        LIGHTBOX: { IFRAME_ID_PREFIX: "kampyleForm", CONTAINER_ID_PREFIX: "kampyleFormModal", WRAPPER_ID: "MDigitalLightboxWrapper" },
        ANIMATION: { CONTAINER_ID: "KampyleAnimationContainer", IFRAME_ID: "kampyleFormAnimation", WRAPPER_ID: "MDigitalAnimationWrapper" },
        INVITATION: { IFRAME_ID: "kampyleInvite", CONTAINER_ID: "kampyleInviteModal", IFRAME_TITLE: "Invitation to provide feedback", WRAPPER_ID: "MDigitalInvitationWrapper" },
        OOPS: { CONTAINER_ID_PREFIX: "mdigital-no-json-modal_", CLOSE_BUTTON_ID: "close-no-json-modal" },
        IFRAME_TITLE: "Feedback Survey",
    },
    PROPERTY_SETTINGS: { MANUALLY_INVITE_TARGETING: "MANUALLY_INVITE_TARGETING", CUSTOM_CSS_UPLOAD: "CUSTOM_CSS_UPLOAD" },
    EVENTS: {
        MDIGITAL_MANUALLY_INVITE_TARGETING: "MDigital_manuallyInviteTargeting",
        MDIGITAL_PAGE_TARGETING_PHASE_ENDED: "MDigital_pageTargetingPhaseEnded",
        MDIGITAL_BEHAVIORAL_TARGETING_PHASE_ENDED: "MDigital_behavioralTargetingPhaseEnded",
        MDIGITAL_QUARANTINED_SURVEY_PHASE_ENDED: "MDigital_quarantinedSurveyPhaseEnded",
        MDIGITAL_TARGETING_RULE_EVALUATED: "MDigital_targetingRuleEvaluated",
        MDIGITAL_SCREEN_CAPTURE_LOADED: "neb_screenCaptureLoaded",
        MDIGITAL_SDK_PAGE_VIEW: "neb_sdkPageView",
        MDIGITAL_WARNING: "MDigital_warning",
        MDIGITAL_COULD_NOT_FETCH_DATA: "MDigital_couldNotFetchData",
        MDIGITAL_COULD_NOT_LOAD_FORM_APPLICATION: "MDigital_couldNotLoadFormApplication",
        NEB_EVENT_DISPATCHER_ERROR: "neb_eventDispatcherError",
        NEB_LOAD_FORM: "neb_loadForm",
        NEB_FORM_LOADING_HAS_FAILED: "neb_formLoadingHasFailed",
        NEB_RESET_FORM_STATE: "neb_resetFormState",
        MDIGITAL_DYNAMIC_ONSITE_INITIALIZED_SUCCESSFULLY: "MDigital_DynamicOnsiteInitializedSuccessfully",
        CREATE_SESSION: "createSession",
        MDIGITAL_NO_JSON_MODAL_SHOWN: "MDigital_noJsonModalShown",
        MDIGITAL_NO_JSON_MODAL_CLOSED: "MDigital_noJsonModalClosed",
        MDIGITAL_UPDATE_TARGETING_WITH_DECLINED_DATE_FORM_CLOSED: "MDigital_updateTargetingWithDeclinedDateFormClosed",
        MDIGITAL_UPDATE_TARGETING_WITH_DECLINED_DATE_INVITE_DECLINED: "MDigital_updateTargetingWithDeclinedDateInviteDeclined",
        MDIGITAL_CHTML_LOGS: "MDigital_CHTML_Logs",
        SCREEN_CAPTURE_RETAKE: "MDigital_screenCaptureRetake",
        SCREEN_CAPTURE_DELETE: "MDigital_screenCaptureDelete",
        CUSTOM_EVENTS_DEBUG_MESSAGE: "mdigital_customEventsDebugMessage",
        MDIGITAL_VALIDATE_ORIGIN: "MDigital_validate_origin",
    },
    LOG_MESSAGES: {
        TRIGGER_MESSAGE_TEMPLATE: "Event {{EVENT_NAME}} has been {{STATUS}}. \n the data is: {{DATA}}. \n the context is :{{CONTEXT}}. \n the options are : {{OPTIONS}}.\n",
        ERROR_LOG_TEMPLATE: "Error Message is {{ERROR_MESSAGE}}",
        ERROR_DYNAMIC_ONSITE_INITIALIZATION: "Failed to fetch onsite data.",
        ERROR_ONSITE_SDK_CONFIGURATION_MISSING: "Failed to execute KAMPYLE_ONSITE_SDK.{{METHOD}}, due to missing onsite configuration.",
    },
    LOG_STATUSES: { FAILED: "failed", TRIGGERED: "triggered" },
    OPERATORS: {
        REGEX: "regex",
        EQUALS: "equals",
        DOES_NOT_EQUAL: "doesnotequal",
        CONTAINS: "contains",
        DOES_NOT_CONTAIN: "doesnotcontain",
        STARTS_WITH: "startswith",
        ENDS_WITH: "endswith",
        HAS_VALUE: "hasvalue",
        LATER_THAN: "laterthan",
        EARLIER_THAN: "earlierthan",
        GREATER_THAN: "greaterthan",
        SMALLER_THAN: "smallerthan",
    },
    TARGETING_STATUS: { CANDIDACY: "candidacy", TRIGGERED: "triggered", QUARANTINED: "quarantined" },
    TARGETING_PHASES: { PAGE_TARGETING: "pageTargeting", BEHAVIORAL_TARGETING: "behavioralTargeting", QUARANTINE_TARGETING: "quarantineTargeting" },
    TARGETING_RULES: { INVITE_IF_ANY_SURVEY_ALREADY_SUBMITTED_PER_SESSION: "InviteAnySurveyAlreadySubmittedPerSession", INVITE_IF_ANY_INVITE_ALREADY_SHOWN_PER_SESSION: "InvitePerSession" },
    REGIONS: { DEV: "dev", QA: "qa", COLO_QA: "digital-cloud-qa", COLO_US: "digital-cloud-us" },
    MEMORY_DATA_FIELDS: {
        MDIGITAL_ALTERNATIVE_UUID: "mdigital_alternative_uuid",
        FETCHING_DATA_IN_PROGRESS: "FETCHING_DATA_IN_PROGRESS_",
        DATA_JSON: "dataJson",
        HAS_ONSITE_CONFIGURATION: "hasOnsiteConfiguration",
        TIMEOUT_HANDLERS: "mdTimeoutHandlers",
        FEEDBACK_CORRELATION_UUID: "feedbackCorrelationUUID",
        IS_BUTTON_CONTAINER_CREATED: "isButtonContainerCreated",
        REGION: "region",
        FEEDBACK_BUTTON_POSITION_STYLE: "buttonPositionStyle",
        LIVE_FORM_V2_DEBUG_MODE: "md_liveFormV2_isDebugMode",
        DOM_EVENT_HANDLERS: "domEventHandlers",
        DECIBEL_DATA: "decibelData",
    },
    SESSION_DATA_FIELDS: { IS_SURVEY_SUBMITTED_IN_SESSION: "md_isSurveySubmittedInSession" },
    TIMEOUT_HANDLERS: { FORM_APP_STATUS: "formAppStatus", EMBEDDED_STATUS: "embeddedFormStatus" },
    CSS_FONT_RULE: "CSSFontFaceRule",
    NETWORK: { RETRY_TIMEOUT: 1000, REQUEST_TIMEOUT: 5000, TIME_FOR_FORM_TO_LOAD_MS: 60000, NUM_OF_RETRIES: 3 },
    ERROR_CODE: { SECURITY_ERROR: 18 },
    KEY_CODES: { SPACE: 32, TAB: 9, ENTER: 13, ESC: 27 },
    BROWSERS: { IE: "IE", CHROME: "Chrome", FIREFOX: "Firefox", SAFARI: "Safari" },
    URLS: { KMA_UDC: "https://nginx-log-post.kampyle.com/?data=" },
    TEXTS: {
        DEFAULT_JSON_ERROR_MESSAGES: { title: "Oops...", body: "We can’t collect your feedback at the moment.<br/>Refresh your page and try again", close: "Close this modal" },
        SCREEN_CAPTURE: { DEFAULT_DESCRIPTION: 'Click "Capture Image" button or drag the cursor to highlight a specific area' },
    },
    FORM_LOADING_FAILURE_CAUSE: { APPLICATION_FAILED: "applicationFailed", JSON_FAILED: "jsonFailed" },
    PROPERTY_MESSAGES: { NO_JSON_MESSAGE: { TYPE: "noJsonMessage", KEYS: { TITLE: "title", BODY: "body", CLOSE: "close" } } },
    BROWSER_EVENTS: { FOCUS: "focus", MOUSE_DOWN: "mousedown" },
    COOLADATA_INSTANCE_NAME: "cooladata_instance_for_medallia_digital",
    SCREEN_CAPTURE: { DOM_SELECTION: "DOM_SELECTION", DOM_SELECTION_VALUE: "domSelector", AREA_SELECTION_VALUE: "highlight" },
    COOLADATA_HTTP_EVENTS_BY_METHOD: {
        BEFORE: { POST: "neb_beforeHttpPostRequest" },
        AFTER: { GET: "neb_afterHttpGetRequest", POST: "neb_afterHttpPostRequest" },
        TIMEOUT: { GET: "neb_afterHttpGetRequestOnTimeout", POST: "neb_afterHttpPostRequestOnTimeout" },
        ERROR: { GET: "neb_afterHttpGetRequestOnError", POST: "neb_afterHttpPostRequestOnError" },
        ERROR_STATUS_CODE: { GET: "neb_afterHttpGetRequestOnErrorStatusCode", POST: "neb_afterHttpPostRequestOnErrorStatusCode" },
    },
    HTTP_METHODS: { GET: "GET", POST: "POST" },
    COLORS: { USERSNAP_V4_SELECTION_COLOR: "#fb585b", USERSNAP_ONPREM_SELECTION_COLOR: "#004CCB" },
    VIEW: { FEEDBACK_BUTTON_ID: "nebula_div_btn", FEEDBACK_BUTTON_CONTAINER_ID: "kampyleButtonContainer" },
    CLOSE_FORM_PARAM_VALUES: { ALL: "all", EMBEDDED: "embedded", MODAL: "modal" },
    SPINNER_SETTINGS: { ID: "MDigital_spinnerCircle", CONTAINER_ID: "MDigital_spinnerContainer", SIZE: { LARGE: "large", SMALL: "small" } },
    CSS_SETTINGS: { STYLE_SHEET_ANIMATION_NAME: "MDigital_animationStyle", ANIMATION_RULE_SPIN_NAME: "MDigital_spin" },
};
window.MDIGITAL.CONFIGURATION = (function (window, document) {
    function init() {
        KAMPYLE_DATA.setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.HAS_ONSITE_CONFIGURATION, false);
        var basicConfig = getOnsiteConfiguration();
        var region = (basicConfig && basicConfig.region) || KAMPYLE_CONSTANT.REGIONS.DEV;
        KAMPYLE_DATA.setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.REGION, region);
    }
    function isOnsiteConfigurationMissing() {
        return !KAMPYLE_DATA.getMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.HAS_ONSITE_CONFIGURATION);
    }
    function getOnsiteConfiguration() {
        var dataJson = KAMPYLE_DATA.getMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.DATA_JSON);
        if (dataJson) {
            return dataJson;
        }
        return {
            provisions: {
                "21dcr1_mpc3281_alignWCAGLogoMarkup": null,
                "20dcr4_MPC2905_wcagReviewFixes": null,
                ibmIncludeSpecificCPsInCooladataEvent: null,
                cpExtractRefactor: null,
                chtmlLogs: null,
                customEventsBroadcast: true,
                sharePropertyBetweenSubdomains: null,
                googleAnalyticsClientEventsEnabled: null,
                spaUrlPolling: null,
                "20dcr4_MPC2802_enable_backendGeneratedUUID": true,
                "21dcr2_MPC2743_enable_newLiveForm": true,
                "23dcr1_MPC6711_enableWCAGPrependSurvey": null,
                customCssUpload: true,
                willNotScrollToLastPositionDisplayTypeAnimation: null,
                cooladataNewEvents: null,
                "20dcr4_MPC2893_enable_ScreenCaptureAsComponent": null,
                adobeAnalytics: null,
                eventIncludeFeedbackContent: true,
                userSnapV4: null,
                dynamicModalSizeInCustomHtml: true,
                customHtmlFormsEnable: true,
                propertyMessages: null,
                cooladataEventsLimit: null,
                "23dcr1_MPC6052_EnableClientHints": true,
                "21DCR5_MPC4030_EnableFixForSpaTimeOnPage": null,
                targetingEventsReporting: null,
                cspUsersnapV2Support: null,
                "21DCR3_MPC3866_exposeSelectionQuestionsInCustomEvent": null,
                "23dcr1_mpc6083_enableMobileWebiOSBannerFix": null,
                "21dcr3_MPC3281_enable_CHTMLHandleFocusIndependently": null,
                serverBasedTargeting: true,
                CSPRemoveInlineStyling: null,
                enableOverflow: null,
                doNotSurveyOnUBTNetworkFail: null,
                mobileInvitationLayout: true,
                coolodataEventsByXhr: null,
                addingRandomTimeForTimeInSession: null,
                "21dcr2_MPC3571_enable_ClearEmbeddedFormOnUpdatePageView": true,
                "21dcr3_mpc3662_delaySurveyUntilCSSLoad": true,
                mobileWebDynamicFormSizeInFormBuilder: false,
                "21dcr1_MPC3370_enable_ratingOrientationChange": true,
                cookieStorageDisable: null,
                screenCaptureEnabled: true,
                skipInvitationOptimization: null,
                reusableResourcesLibrary: null,
                formTemplatesWCAG: null,
                formSpacing: true,
                "21dcr1_MPC_3283_enable_RTL": true,
                "21DCR3_MPC3866_exposeVerbatimQuestionsInCustomEvent": null,
                "20dcr4_MPC2952_enable_exemptFormsFromQuarantine": true,
                "21dcr1_MPC3199_AdditionalButtonStyles": true,
                "22dcr2_MPC4277_useDecibelTriggers": null,
                "21dcr6_MPC4143_enable_HideAlternativeOptions": true,
                "21dcr6_MPC4296_enable_UBTIdentifierHash": null,
                onPremHybrid: null,
                responsiveRatingComponent: true,
                localizedForms: true,
                "21dcr3_MPC3281_enable_newModalDialogs": true,
                UBTExtraEvents: null,
                "21dcr2_MPC3296_enable_usersnapOnpremCSP": true,
                adobeAnalyticsObjectName: null,
                mobileWebDynamicFormSize: true,
                WCAGTrapFocusInModal: null,
                dynamicHybridHosting: null,
                "21dcr1_MPC3370_EnableGreaterSmallerThanSupport": null,
                underScoreLocalization: null,
                thermoFisherTeaLeafIntegration: null,
                alternativeUUID: null,
                adobeConcatLinkTrackVars: null,
                errorMessageWcagSupport: true,
                multiOptionsID: true,
                adobeIncludeLinkTrackVars: null,
                "20dcr32_NM11146_PreventIFrameScrollFlickering": true,
                separateFormTemplateFromData: true,
                dynamicOnsiteEvents: null,
                "21dcr6_MPC4042_enable_exmdextension": null,
                cooladataIntegration: true,
                cooladataCreateSessionEvent: null,
                "21DCR1_MPC3199_enable_RatingLabelAlign": true,
                "21DCR2_MPC3662_EnableEventsForCEDebug": null,
                parallelTabSolution: null,
            },
            sbtServerDomain: "https://ubt.digital-cloud.medallia.eu",
            sbtEnvPrefix: "wdceu_",
            endUserIdentifier: {},
            formNodes: [
                {
                    formId: "12698",
                    isCustomHtmlEnabled: "false",
                    urlVersion: "V2",
                    formHtmlUrl: "https://resources.digital-cloud.medallia.eu/md-form/website/1.11.0/index.html",
                    formDataUrl: "https://resources.digital-cloud.medallia.eu/wdceu/6260/forms/12698/formDataV2_1674550838305_###LANGUAGE_CODE###.json",
                    formWidth: "455",
                    formHeight: "450",
                    isFixedSize: "false",
                    isFullWidthEmbedded: "null",
                    designSettings: { formBackgroundColor: "", thankYouPageBackgroundColor: "" },
                    formLocalizationSettings: { defaultLanguage: "en", useCustomParam: "false", customParam: "null" },
                    formJsonRelativePath: "wdceu/6260/forms/12698/formData1674550838305_###LANGUAGE_CODE###.json",
                    formJsonV2RelativePath: "wdceu/6260/forms/12698/formDataV2_1674550838305_###LANGUAGE_CODE###.json",
                    inviteJsonRelativePath: "wdceu/6260/forms/12698/invitationData1663778618972_###LANGUAGE_CODE###.json",
                    availableLanguages: ["en"],
                    triggerAvailableLanguages: ["en"],
                    functionFileUrl: "",
                    customParams:
                        '[{"id":"6040","unique_name":"SNow_Implemented_Date","type":"Text","source":"Var","source_name":"medallia.SN_Implemented_Date","is_identifier":"false"}, {"id":"6039","unique_name":"SNow_Ir_Logged_Date","type":"Text","source":"Var","source_name":"medallia.SN_Ir_Logged_Date","is_identifier":"false"}, {"id":"6038","unique_name":"SNow_Return_Date","type":"Text","source":"Var","source_name":"medallia.SN_Return_Date","is_identifier":"false"}, {"id":"6037","unique_name":"SNow_Wish_Date","type":"Text","source":"Var","source_name":"medallia.SN_Wish_Date","is_identifier":"false"}, {"id":"6036","unique_name":"SNow_Requested_Date","type":"Text","source":"Var","source_name":"medallia.SN_Requested_Date","is_identifier":"false"}, {"id":"6035","unique_name":"SNow_WO_Closed_Date","type":"Text","source":"Var","source_name":"medallia.SN_WO_Closed_Date","is_identifier":"false"}, {"id":"6034","unique_name":"SNow_Recovery_Date","type":"Text","source":"Var","source_name":"medallia.SN_Recovery_Date","is_identifier":"false"}, {"id":"6033","unique_name":"SNow_Returned_Date","type":"Text","source":"Var","source_name":"medallia.SN_Returned_Date","is_identifier":"false"}, {"id":"6031","unique_name":"SNow_Ir_Closed_Date","type":"Text","source":"Var","source_name":"medallia.SN_Ir_Closed_Date","is_identifier":"false"}, {"id":"5807","unique_name":"SNow_Escalation","type":"Text","source":"Var","source_name":"medallia.SN_Escalation","is_identifier":"false"}, {"id":"5806","unique_name":"SNow_Winapproach_Number","type":"Text","source":"Var","source_name":"medallia.SN_Winapproach_Number","is_identifier":"false"}, {"id":"5805","unique_name":"SNow_Agent_Country","type":"Text","source":"Var","source_name":"medallia.SN_Agent_Country","is_identifier":"false"}, {"id":"5804","unique_name":"SNow_Agent_City","type":"Text","source":"Var","source_name":"medallia.SN_Agent_City","is_identifier":"false"}, {"id":"5803","unique_name":"SNow_PI_PTR_Teams_Involved_Code","type":"Text","source":"Var","source_name":"medallia.SN_PI_PTR_Teams_Involved_Code","is_identifier":"false"}, {"id":"5802","unique_name":"SNow_Case_Close_Notes","type":"Text","source":"Var","source_name":"medallia.SN_Case_Close_Notes","is_identifier":"false"}, {"id":"5801","unique_name":"SNow_Case_Cause","type":"Text","source":"Var","source_name":"medallia.SN_Case_Cause","is_identifier":"false"}, {"id":"362","unique_name":"ACSP SMC Owner Group","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_Group","is_identifier":"false"}, {"id":"4871","unique_name":"ACSP_Siebel_Cat_D","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_D","is_identifier":"false"}, {"id":"5459","unique_name":"SNow_Subservice","type":"Text","source":"Var","source_name":"medallia.SN_Subservice","is_identifier":"false"}, {"id":"5458","unique_name":"SNow_First_Name","type":"Text","source":"Var","source_name":"medallia.SN_First_Name","is_identifier":"false"}, {"id":"5457","unique_name":"SNow_Template_Title","type":"Text","source":"Var","source_name":"medallia.SN_Template_Title","is_identifier":"false"}, {"id":"5455","unique_name":"SNow_Severity_Description","type":"Text","source":"Var","source_name":"medallia.SN_Severity_Description","is_identifier":"false"}, {"id":"5454","unique_name":"SNow_Siebel_Cat_ABCD","type":"Text","source":"Var","source_name":"medallia.SN_Siebel_Cat_ABCD","is_identifier":"false"}, {"id":"5453","unique_name":"SNow_SMC_Owner_Group_Display_Value","type":"Text","source":"Var","source_name":"medallia.SN_SMC_Owner_Group_Display_Value","is_identifier":"false"}, {"id":"5452","unique_name":"SNow_CRM_Account_ID_Galaxy","type":"Text","source":"Var","source_name":"medallia.SN_CRM_Account_ID_Galaxy","is_identifier":"false"}, {"id":"5451","unique_name":"SNow_Airline_Provider_Code","type":"Text","source":"Var","source_name":"medallia.SN_Airline_Provider_Code","is_identifier":"false"}, {"id":"5450","unique_name":"SNow_Keywords","type":"Text","source":"Var","source_name":"medallia.SN_Keywords","is_identifier":"false"}, {"id":"5449","unique_name":"SNow_Template_ID","type":"Text","source":"Var","source_name":"medallia.SN_Template_ID","is_identifier":"false"}, {"id":"5448","unique_name":"SNow_WO_Type","type":"Text","source":"Var","source_name":"medallia.SN_WO_Type","is_identifier":"false"}, {"id":"5447","unique_name":"SNow_User_Segment","type":"Text","source":"Var","source_name":"medallia.SN_User_Segment","is_identifier":"false"}, {"id":"5446","unique_name":"SNow_Status_Description","type":"Text","source":"Var","source_name":"medallia.SN_Status_Description","is_identifier":"false"}, {"id":"5443","unique_name":"SNow_Implementer_Group","type":"Text","source":"Var","source_name":"medallia.SN_Implementer_Group","is_identifier":"false"}, {"id":"5441","unique_name":"SNow_Logged_Tool","type":"Text","source":"Var","source_name":"medallia.SN_Logged_Tool","is_identifier":"false"}, {"id":"5440","unique_name":"SNow_PI_nbr","type":"Text","source":"Var","source_name":"medallia.SN_PI_nbr","is_identifier":"false"}, {"id":"5439","unique_name":"SNow_WO_Assignee_Group","type":"Text","source":"Var","source_name":"medallia.SN_WO_Assignee_Group","is_identifier":"false"}, {"id":"5438","unique_name":"SNow_Siebel_Cat_ABC","type":"Text","source":"Var","source_name":"medallia.SN_Siebel_Cat_ABC","is_identifier":"false"}, {"id":"5437","unique_name":"SNow_PI_PTR_Teams_Involved","type":"Text","source":"Var","source_name":"medallia.SN_PI_PTR_Teams_Involved","is_identifier":"false"}, {"id":"5436","unique_name":"SNow_ISP_Sev","type":"Text","source":"Var","source_name":"medallia.SN_ISP_Sev","is_identifier":"false"}, {"id":"5435","unique_name":"SNow_System","type":"Text","source":"Var","source_name":"medallia.SN_System","is_identifier":"false"}, {"id":"5434","unique_name":"SNow_Template_Category","type":"Text","source":"Var","source_name":"medallia.SN_Template_Category","is_identifier":"false"}, {"id":"5431","unique_name":"SNow_Siebel_Cat_C","type":"Text","source":"Var","source_name":"medallia.SN_Siebel_Cat_C","is_identifier":"false"}, {"id":"5430","unique_name":"SNow_Siebel_Cat_D","type":"Text","source":"Var","source_name":"medallia.SN_Siebel_Cat_D","is_identifier":"false"}, {"id":"5429","unique_name":"SNow_Record_Type","type":"Text","source":"Var","source_name":"medallia.SN_Record_Type","is_identifier":"false"}, {"id":"5101","unique_name":"SNow_ACSP_DisplayForm","type":"Number","source":"Var","source_name":"medallia.launch_survey","is_identifier":"false"}, {"id":"5102","unique_name":"SNow_ACSP_Service","type":"Text","source":"Var","source_name":"medallia.SN_Service","is_identifier":"false"}, {"id":"5422","unique_name":"SNow_Last_Name","type":"Text","source":"Var","source_name":"medallia.SN_Last_Name","is_identifier":"false"}, {"id":"5421","unique_name":"SNow_Email","type":"Text","source":"Var","source_name":"medallia.SN_Email","is_identifier":"false"}, {"id":"5420","unique_name":"SNow_Record_Id","type":"Text","source":"Var","source_name":"medallia.SN_Record_Id","is_identifier":"false"}, {"id":"5419","unique_name":"SNow_Title","type":"Text","source":"Var","source_name":"medallia.SN_Title","is_identifier":"false"}, {"id":"5418","unique_name":"SNow_SMC_Owner_User_Org","type":"Text","source":"Var","source_name":"medallia.SN_SMC_Owner_User_Org","is_identifier":"false"}, {"id":"5417","unique_name":"SNow_SMC_Owner_User_Email","type":"Text","source":"Var","source_name":"medallia.SN_SMC_Owner_User_Email","is_identifier":"false"}, {"id":"5416","unique_name":"SNow_SMC_Owner_User","type":"Text","source":"Var","source_name":"medallia.SN_SMC_Owner_User","is_identifier":"false"}, {"id":"5415","unique_name":"SNow_SMC_Owner_Location","type":"Text","source":"Var","source_name":"medallia.SN_SMC_Owner_Location","is_identifier":"false"}, {"id":"5414","unique_name":"SNow_Siebel_Cat_B","type":"Text","source":"Var","source_name":"medallia.SN_Siebel_Cat_B","is_identifier":"false"}, {"id":"5413","unique_name":"SNow_Siebel_Cat_A","type":"Text","source":"Var","source_name":"medallia.SN_Siebel_Cat_A","is_identifier":"false"}, {"id":"5412","unique_name":"SNow_Severity","type":"Number","source":"Var","source_name":"medallia.SN_Severity","is_identifier":"false"}, {"id":"5411","unique_name":"SNow_Service","type":"Text","source":"Var","source_name":"medallia.SN_Service_Display_Value","is_identifier":"false"}, {"id":"5409","unique_name":"SNow_PTR","type":"Boolean","source":"Var","source_name":"medallia.SN_PTR","is_identifier":"false"}, {"id":"5406","unique_name":"SNow_Incident_Cause","type":"Text","source":"Var","source_name":"medallia.SN_Incident_Cause","is_identifier":"false"}, {"id":"5404","unique_name":"SNow_CRM_Account_ID","type":"Text","source":"Var","source_name":"medallia.SN_CRM_Account_ID","is_identifier":"false"}, {"id":"5403","unique_name":"SNow_Airline_Code","type":"Text","source":"Var","source_name":"medallia.SN_Airline_Code","is_identifier":"false"}, {"id":"5402","unique_name":"SNow_Account_Name","type":"Text","source":"Var","source_name":"medallia.SN_Account_Name","is_identifier":"false"}, {"id":"5401","unique_name":"SNow_SMC_Owner_Group","type":"Text","source":"Var","source_name":"medallia.SN_SMC_Owner_Group","is_identifier":"false"}, {"id":"5400","unique_name":"SNow_Account_Type_Id","type":"Number","source":"Var","source_name":"medallia.SN_Account_Type_Id","is_identifier":"false"}, {"id":"4870","unique_name":"ACSP_Siebel_Cat_C","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_C","is_identifier":"false"}, {"id":"4869","unique_name":"ACSP_Siebel_Cat_B","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_B","is_identifier":"false"}, {"id":"4868","unique_name":"ACSP_Siebel_Cat_A","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_A","is_identifier":"false"}, {"id":"4867","unique_name":"ACSP_Keywords","type":"Text","source":"Var","source_name":"ACSP_Keywords","is_identifier":"false"}, {"id":"4866","unique_name":"ACSP_Template_Category","type":"Text","source":"Var","source_name":"ACSP_Template_Category","is_identifier":"false"}, {"id":"4865","unique_name":"ACSP_Template_Title","type":"Text","source":"Var","source_name":"ACSP_Template_Title","is_identifier":"false"}, {"id":"4864","unique_name":"ACSP_Template_ID","type":"Text","source":"Var","source_name":"ACSP_Template_ID","is_identifier":"false"}, {"id":"1561","unique_name":"ACSP_User_Segment","type":"Text","source":"Var","source_name":"ACSP_User_Segment","is_identifier":"false"}, {"id":"1558","unique_name":"ACSP_Siebel_Cat_ABCD","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_ABCD","is_identifier":"false"}, {"id":"1557","unique_name":"ACSP_WO_Closed_Date","type":"Text","source":"Var","source_name":"ACSP_WO_Closed_Date","is_identifier":"false"}, {"id":"1393","unique_name":"ACSP_Implementer_Group","type":"Text","source":"Var","source_name":"ACSP_Implementer_Group","is_identifier":"false"}, {"id":"1392","unique_name":"ACSP_Subservice","type":"Text","source":"Var","source_name":"ACSP_Subservice","is_identifier":"false"}, {"id":"1391","unique_name":"ACSP_Returned_Date","type":"Text","source":"Var","source_name":"ACSP_Returned_Date","is_identifier":"false"}, {"id":"1390","unique_name":"ACSP_Implemented_Date","type":"Text","source":"Var","source_name":"ACSP_Implemented_Date","is_identifier":"false"}, {"id":"1389","unique_name":"ACSP_Requested_Date","type":"Text","source":"Var","source_name":"ACSP_Requested_Date","is_identifier":"false"}, {"id":"1388","unique_name":"ACSP_Wish_Date","type":"Text","source":"Var","source_name":"ACSP_Wish_Date","is_identifier":"false"}, {"id":"1387","unique_name":"ACSP_WO_Type","type":"Text","source":"Var","source_name":"ACSP_WO_Type","is_identifier":"false"}, {"id":"1386","unique_name":"ACSP_System","type":"Text","source":"Var","source_name":"ACSP_System","is_identifier":"false"}, {"id":"1385","unique_name":"ACSP_Severity_Description","type":"Text","source":"Var","source_name":"ACSP_Severity_Description","is_identifier":"false"}, {"id":"1384","unique_name":"ACSP_WO_Assignee_Group","type":"Text","source":"Var","source_name":"ACSP_WO_Assignee_Group","is_identifier":"false"}, {"id":"825","unique_name":"ACSP_CRM_Account_ID","type":"Text","source":"Var","source_name":"ACSP_CRM_Account_ID","is_identifier":"false"}, {"id":"815","unique_name":"ACSP_Return_Date","type":"Text","source":"Var","source_name":"ACSP_Return_Date","is_identifier":"false"}, {"id":"814","unique_name":"ACSP_Recovery_Date","type":"Text","source":"Var","source_name":"ACSP_Recovery_Date","is_identifier":"false"}, {"id":"162","unique_name":"Case Id","type":"Text","source":"Var","source_name":"ACSP_Record_Id","is_identifier":"false"}, {"id":"380","unique_name":"ACSP_PI_PTR_Teams_Involved","type":"Text","source":"Var","source_name":"ACSP_PI_PTR_Teams_Involved","is_identifier":"false"}, {"id":"379","unique_name":"ACSP_PI_nbr","type":"Text","source":"Var","source_name":"ACSP_PI_nbr","is_identifier":"false"}, {"id":"378","unique_name":"ACSP_PTR","type":"Text","source":"Var","source_name":"ACSP_PTR","is_identifier":"false"}, {"id":"377","unique_name":"ACSP_Airline_Code","type":"Text","source":"Var","source_name":"ACSP_Airline_Code","is_identifier":"false"}, {"id":"376","unique_name":"ACSP_Account_Name","type":"Text","source":"Var","source_name":"ACSP_Account_Name","is_identifier":"false"}, {"id":"375","unique_name":"ACSP_Siebel_Cat_ABC","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_ABC","is_identifier":"false"}, {"id":"374","unique_name":"ACSP_Logged_Tool","type":"Text","source":"Var","source_name":"ACSP_Logged_Tool","is_identifier":"false"}, {"id":"373","unique_name":"ACSP_Incident_Cause","type":"Text","source":"Var","source_name":"ACSP_Incident_Cause","is_identifier":"false"}, {"id":"372","unique_name":"ACSP_Service","type":"Text","source":"Var","source_name":"ACSP_Service","is_identifier":"false"}, {"id":"371","unique_name":"ACSP_Ir_Closed_Date","type":"Text","source":"Var","source_name":"ACSP_Ir_Closed_Date","is_identifier":"false"}, {"id":"370","unique_name":"ACSP_Ir_Logged_Date","type":"Text","source":"Var","source_name":"ACSP_Ir_Logged_Date","is_identifier":"false"}, {"id":"369","unique_name":"ACSP_ISP_Sev","type":"Text","source":"Var","source_name":"ACSP_ISP_Sev","is_identifier":"false"}, {"id":"368","unique_name":"ACSP_Severity","type":"Text","source":"Var","source_name":"ACSP_Severity","is_identifier":"false"}, {"id":"367","unique_name":"ACSP_Status_Description","type":"Text","source":"Var","source_name":"ACSP_Status_Description","is_identifier":"false"}, {"id":"366","unique_name":"ACSP_SMC_Owner_User_Org","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_User_Org","is_identifier":"false"}, {"id":"365","unique_name":"ACSP_SMC_Owner_Location","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_Location","is_identifier":"false"}, {"id":"364","unique_name":"ACSP_SMC_Owner_User_Email","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_User_Email","is_identifier":"false"}, {"id":"363","unique_name":"ACSP_SMC_Owner_User","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_User","is_identifier":"false"}, {"id":"361","unique_name":"ACSP_Record_Type","type":"Text","source":"Var","source_name":"ACSP_Record_Type","is_identifier":"false"}, {"id":"360","unique_name":"ACSP_Title","type":"Text","source":"Var","source_name":"ACSP_Title","is_identifier":"false"}, {"id":"160","unique_name":"First_Name","type":"Text","source":"Var","source_name":"ACSP_First_Name","is_identifier":"false"}, {"id":"349","unique_name":"ACSP Account Type","type":"Text","source":"Var","source_name":"ACSP_Account_Type_Id","is_identifier":"false"}, {"id":"163","unique_name":"Airline _Provider_Code","type":"Text","source":"Var","source_name":"CHANGE","is_identifier":"false"}, {"id":"161","unique_name":"Last_Name","type":"Text","source":"Var","source_name":"ACSP_Last_Name","is_identifier":"false"}, {"id":"159","unique_name":"Contact email","type":"Text","source":"Var","source_name":"ACSP_Email","is_identifier":"false"}]',
                    formType: "invitation",
                    formDisplay: { displayType: "lightbox", displayDirection: "centerRight", isSelfHosted: "", selfHostedUrl: "" },
                    inviteData: {
                        inviteUrl: "https://resources.digital-cloud.medallia.eu/wdceu/6260/forms/12698/invitation1663778618914.html",
                        inviteHeight: "400",
                        inviteWidth: "700",
                        skipInvitation: "true",
                        invitationPosition: "top",
                        inviteDataUrl: "https://resources.digital-cloud.medallia.eu/wdceu/6260/forms/12698/invitationData1663778618972_###LANGUAGE_CODE###.json",
                    },
                    onSiteData: {
                        kampyleInvitePerSession: { inviteOncePerSession: "true" },
                        kampyleInvitePercentageUsers: { prec: "100.0" },
                        devicetypes: ["desktop", "mobile", "tablet"],
                        genericRule:
                            '{"type":"criteriaGroup","conjunction":"AND","childrenCriterias":[{"type":"criteriaGroup","conjunction":"OR","childrenCriterias":[{"type":"criteria","value":"1","formId":12698,"fieldId":5400,"formName":"Case Closure - ACU - Serv. Req. Only - ServiceNow","uniqueId":"customParam5400","condition":"equals","fieldName":"ACSP_Account_Type_Id_SN","fieldType":"Number","fieldOrigin":"customParam"},{"type":"criteria","value":"2","formId":12698,"fieldId":5400,"formName":"Case Closure - ACU - Serv. Req. Only - ServiceNow","uniqueId":"customParam5400","condition":"equals","fieldName":"ACSP_Account_Type_Id_SN","fieldType":"Number","fieldOrigin":"customParam"},{"type":"criteria","value":"5","formId":12698,"fieldId":5400,"formName":"Case Closure - ACU - Serv. Req. Only - ServiceNow","uniqueId":"customParam5400","condition":"equals","fieldName":"SNow_Account_Type_Id","fieldType":"Number","fieldOrigin":"customParam"}]},{"type":"criteriaGroup","conjunction":"AND","childrenCriterias":[{"type":"criteria","value":"Service Request","formId":12698,"fieldId":5429,"formName":"Case Closure - ACU - Serv. Req. Only - ServiceNow","uniqueId":"customParam5429","condition":"equals","fieldName":"SNow_Record_Type","fieldType":"Text","fieldOrigin":"customParam"}]},{"type":"criteriaGroup","conjunction":"AND","childrenCriterias":[{"type":"criteria","value":"1","formId":12698,"fieldId":5101,"formName":"Case Closure - ACU - Serv. Req. Only - ServiceNow","uniqueId":"customParam5101","condition":"equals","fieldName":"SN_ACSP_DisplayForm","fieldType":"Number","fieldOrigin":"customParam"}]}]}',
                    },
                    urlRules: {
                        exclusionUrl: { rule: "" },
                        inclusionUrl: {
                            rule:
                                "https://amadeusdev.service-now.com/;https://dev.amadeus-one.amadeus.com/;https://amadeustrain.service-now.com/;https://train.amadeus-one.amadeus.com/;https://amadeuspreprod.service-now.com/;https://preprod.amadeus-one.amadeus.com/;https://amadeus.service-now.com/;https://amadeus-one.amadeus.com/",
                        },
                    },
                },
                {
                    formId: "12697",
                    isCustomHtmlEnabled: "false",
                    urlVersion: "V2",
                    formHtmlUrl: "https://resources.digital-cloud.medallia.eu/md-form/website/1.11.0/index.html",
                    formDataUrl: "https://resources.digital-cloud.medallia.eu/wdceu/6260/forms/12697/formDataV2_1674550773246_###LANGUAGE_CODE###.json",
                    formWidth: "455",
                    formHeight: "450",
                    isFixedSize: "false",
                    isFullWidthEmbedded: "null",
                    designSettings: { formBackgroundColor: "", thankYouPageBackgroundColor: "" },
                    formLocalizationSettings: { defaultLanguage: "en", useCustomParam: "false", customParam: "null" },
                    formJsonRelativePath: "wdceu/6260/forms/12697/formData1674550773246_###LANGUAGE_CODE###.json",
                    formJsonV2RelativePath: "wdceu/6260/forms/12697/formDataV2_1674550773246_###LANGUAGE_CODE###.json",
                    inviteJsonRelativePath: "wdceu/6260/forms/12697/invitationData1663778623392_###LANGUAGE_CODE###.json",
                    availableLanguages: ["en"],
                    triggerAvailableLanguages: ["en"],
                    functionFileUrl: "",
                    customParams:
                        '[{"id":"6040","unique_name":"SNow_Implemented_Date","type":"Text","source":"Var","source_name":"medallia.SN_Implemented_Date","is_identifier":"false"}, {"id":"6039","unique_name":"SNow_Ir_Logged_Date","type":"Text","source":"Var","source_name":"medallia.SN_Ir_Logged_Date","is_identifier":"false"}, {"id":"6038","unique_name":"SNow_Return_Date","type":"Text","source":"Var","source_name":"medallia.SN_Return_Date","is_identifier":"false"}, {"id":"6037","unique_name":"SNow_Wish_Date","type":"Text","source":"Var","source_name":"medallia.SN_Wish_Date","is_identifier":"false"}, {"id":"6036","unique_name":"SNow_Requested_Date","type":"Text","source":"Var","source_name":"medallia.SN_Requested_Date","is_identifier":"false"}, {"id":"6035","unique_name":"SNow_WO_Closed_Date","type":"Text","source":"Var","source_name":"medallia.SN_WO_Closed_Date","is_identifier":"false"}, {"id":"6034","unique_name":"SNow_Recovery_Date","type":"Text","source":"Var","source_name":"medallia.SN_Recovery_Date","is_identifier":"false"}, {"id":"6033","unique_name":"SNow_Returned_Date","type":"Text","source":"Var","source_name":"medallia.SN_Returned_Date","is_identifier":"false"}, {"id":"6031","unique_name":"SNow_Ir_Closed_Date","type":"Text","source":"Var","source_name":"medallia.SN_Ir_Closed_Date","is_identifier":"false"}, {"id":"5807","unique_name":"SNow_Escalation","type":"Text","source":"Var","source_name":"medallia.SN_Escalation","is_identifier":"false"}, {"id":"5806","unique_name":"SNow_Winapproach_Number","type":"Text","source":"Var","source_name":"medallia.SN_Winapproach_Number","is_identifier":"false"}, {"id":"5805","unique_name":"SNow_Agent_Country","type":"Text","source":"Var","source_name":"medallia.SN_Agent_Country","is_identifier":"false"}, {"id":"5804","unique_name":"SNow_Agent_City","type":"Text","source":"Var","source_name":"medallia.SN_Agent_City","is_identifier":"false"}, {"id":"5803","unique_name":"SNow_PI_PTR_Teams_Involved_Code","type":"Text","source":"Var","source_name":"medallia.SN_PI_PTR_Teams_Involved_Code","is_identifier":"false"}, {"id":"5802","unique_name":"SNow_Case_Close_Notes","type":"Text","source":"Var","source_name":"medallia.SN_Case_Close_Notes","is_identifier":"false"}, {"id":"5801","unique_name":"SNow_Case_Cause","type":"Text","source":"Var","source_name":"medallia.SN_Case_Cause","is_identifier":"false"}, {"id":"362","unique_name":"ACSP SMC Owner Group","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_Group","is_identifier":"false"}, {"id":"4871","unique_name":"ACSP_Siebel_Cat_D","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_D","is_identifier":"false"}, {"id":"5459","unique_name":"SNow_Subservice","type":"Text","source":"Var","source_name":"medallia.SN_Subservice","is_identifier":"false"}, {"id":"5458","unique_name":"SNow_First_Name","type":"Text","source":"Var","source_name":"medallia.SN_First_Name","is_identifier":"false"}, {"id":"5457","unique_name":"SNow_Template_Title","type":"Text","source":"Var","source_name":"medallia.SN_Template_Title","is_identifier":"false"}, {"id":"5455","unique_name":"SNow_Severity_Description","type":"Text","source":"Var","source_name":"medallia.SN_Severity_Description","is_identifier":"false"}, {"id":"5454","unique_name":"SNow_Siebel_Cat_ABCD","type":"Text","source":"Var","source_name":"medallia.SN_Siebel_Cat_ABCD","is_identifier":"false"}, {"id":"5453","unique_name":"SNow_SMC_Owner_Group_Display_Value","type":"Text","source":"Var","source_name":"medallia.SN_SMC_Owner_Group_Display_Value","is_identifier":"false"}, {"id":"5452","unique_name":"SNow_CRM_Account_ID_Galaxy","type":"Text","source":"Var","source_name":"medallia.SN_CRM_Account_ID_Galaxy","is_identifier":"false"}, {"id":"5451","unique_name":"SNow_Airline_Provider_Code","type":"Text","source":"Var","source_name":"medallia.SN_Airline_Provider_Code","is_identifier":"false"}, {"id":"5450","unique_name":"SNow_Keywords","type":"Text","source":"Var","source_name":"medallia.SN_Keywords","is_identifier":"false"}, {"id":"5449","unique_name":"SNow_Template_ID","type":"Text","source":"Var","source_name":"medallia.SN_Template_ID","is_identifier":"false"}, {"id":"5448","unique_name":"SNow_WO_Type","type":"Text","source":"Var","source_name":"medallia.SN_WO_Type","is_identifier":"false"}, {"id":"5447","unique_name":"SNow_User_Segment","type":"Text","source":"Var","source_name":"medallia.SN_User_Segment","is_identifier":"false"}, {"id":"5446","unique_name":"SNow_Status_Description","type":"Text","source":"Var","source_name":"medallia.SN_Status_Description","is_identifier":"false"}, {"id":"5443","unique_name":"SNow_Implementer_Group","type":"Text","source":"Var","source_name":"medallia.SN_Implementer_Group","is_identifier":"false"}, {"id":"5441","unique_name":"SNow_Logged_Tool","type":"Text","source":"Var","source_name":"medallia.SN_Logged_Tool","is_identifier":"false"}, {"id":"5440","unique_name":"SNow_PI_nbr","type":"Text","source":"Var","source_name":"medallia.SN_PI_nbr","is_identifier":"false"}, {"id":"5439","unique_name":"SNow_WO_Assignee_Group","type":"Text","source":"Var","source_name":"medallia.SN_WO_Assignee_Group","is_identifier":"false"}, {"id":"5438","unique_name":"SNow_Siebel_Cat_ABC","type":"Text","source":"Var","source_name":"medallia.SN_Siebel_Cat_ABC","is_identifier":"false"}, {"id":"5437","unique_name":"SNow_PI_PTR_Teams_Involved","type":"Text","source":"Var","source_name":"medallia.SN_PI_PTR_Teams_Involved","is_identifier":"false"}, {"id":"5436","unique_name":"SNow_ISP_Sev","type":"Text","source":"Var","source_name":"medallia.SN_ISP_Sev","is_identifier":"false"}, {"id":"5435","unique_name":"SNow_System","type":"Text","source":"Var","source_name":"medallia.SN_System","is_identifier":"false"}, {"id":"5434","unique_name":"SNow_Template_Category","type":"Text","source":"Var","source_name":"medallia.SN_Template_Category","is_identifier":"false"}, {"id":"5431","unique_name":"SNow_Siebel_Cat_C","type":"Text","source":"Var","source_name":"medallia.SN_Siebel_Cat_C","is_identifier":"false"}, {"id":"5430","unique_name":"SNow_Siebel_Cat_D","type":"Text","source":"Var","source_name":"medallia.SN_Siebel_Cat_D","is_identifier":"false"}, {"id":"5429","unique_name":"SNow_Record_Type","type":"Text","source":"Var","source_name":"medallia.SN_Record_Type","is_identifier":"false"}, {"id":"5101","unique_name":"SNow_ACSP_DisplayForm","type":"Number","source":"Var","source_name":"medallia.launch_survey","is_identifier":"false"}, {"id":"5102","unique_name":"SNow_ACSP_Service","type":"Text","source":"Var","source_name":"medallia.SN_Service","is_identifier":"false"}, {"id":"5422","unique_name":"SNow_Last_Name","type":"Text","source":"Var","source_name":"medallia.SN_Last_Name","is_identifier":"false"}, {"id":"5421","unique_name":"SNow_Email","type":"Text","source":"Var","source_name":"medallia.SN_Email","is_identifier":"false"}, {"id":"5420","unique_name":"SNow_Record_Id","type":"Text","source":"Var","source_name":"medallia.SN_Record_Id","is_identifier":"false"}, {"id":"5419","unique_name":"SNow_Title","type":"Text","source":"Var","source_name":"medallia.SN_Title","is_identifier":"false"}, {"id":"5418","unique_name":"SNow_SMC_Owner_User_Org","type":"Text","source":"Var","source_name":"medallia.SN_SMC_Owner_User_Org","is_identifier":"false"}, {"id":"5417","unique_name":"SNow_SMC_Owner_User_Email","type":"Text","source":"Var","source_name":"medallia.SN_SMC_Owner_User_Email","is_identifier":"false"}, {"id":"5416","unique_name":"SNow_SMC_Owner_User","type":"Text","source":"Var","source_name":"medallia.SN_SMC_Owner_User","is_identifier":"false"}, {"id":"5415","unique_name":"SNow_SMC_Owner_Location","type":"Text","source":"Var","source_name":"medallia.SN_SMC_Owner_Location","is_identifier":"false"}, {"id":"5414","unique_name":"SNow_Siebel_Cat_B","type":"Text","source":"Var","source_name":"medallia.SN_Siebel_Cat_B","is_identifier":"false"}, {"id":"5413","unique_name":"SNow_Siebel_Cat_A","type":"Text","source":"Var","source_name":"medallia.SN_Siebel_Cat_A","is_identifier":"false"}, {"id":"5412","unique_name":"SNow_Severity","type":"Number","source":"Var","source_name":"medallia.SN_Severity","is_identifier":"false"}, {"id":"5411","unique_name":"SNow_Service","type":"Text","source":"Var","source_name":"medallia.SN_Service_Display_Value","is_identifier":"false"}, {"id":"5409","unique_name":"SNow_PTR","type":"Boolean","source":"Var","source_name":"medallia.SN_PTR","is_identifier":"false"}, {"id":"5406","unique_name":"SNow_Incident_Cause","type":"Text","source":"Var","source_name":"medallia.SN_Incident_Cause","is_identifier":"false"}, {"id":"5404","unique_name":"SNow_CRM_Account_ID","type":"Text","source":"Var","source_name":"medallia.SN_CRM_Account_ID","is_identifier":"false"}, {"id":"5403","unique_name":"SNow_Airline_Code","type":"Text","source":"Var","source_name":"medallia.SN_Airline_Code","is_identifier":"false"}, {"id":"5402","unique_name":"SNow_Account_Name","type":"Text","source":"Var","source_name":"medallia.SN_Account_Name","is_identifier":"false"}, {"id":"5401","unique_name":"SNow_SMC_Owner_Group","type":"Text","source":"Var","source_name":"medallia.SN_SMC_Owner_Group","is_identifier":"false"}, {"id":"5400","unique_name":"SNow_Account_Type_Id","type":"Number","source":"Var","source_name":"medallia.SN_Account_Type_Id","is_identifier":"false"}, {"id":"4870","unique_name":"ACSP_Siebel_Cat_C","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_C","is_identifier":"false"}, {"id":"4869","unique_name":"ACSP_Siebel_Cat_B","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_B","is_identifier":"false"}, {"id":"4868","unique_name":"ACSP_Siebel_Cat_A","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_A","is_identifier":"false"}, {"id":"4867","unique_name":"ACSP_Keywords","type":"Text","source":"Var","source_name":"ACSP_Keywords","is_identifier":"false"}, {"id":"4866","unique_name":"ACSP_Template_Category","type":"Text","source":"Var","source_name":"ACSP_Template_Category","is_identifier":"false"}, {"id":"4865","unique_name":"ACSP_Template_Title","type":"Text","source":"Var","source_name":"ACSP_Template_Title","is_identifier":"false"}, {"id":"4864","unique_name":"ACSP_Template_ID","type":"Text","source":"Var","source_name":"ACSP_Template_ID","is_identifier":"false"}, {"id":"1561","unique_name":"ACSP_User_Segment","type":"Text","source":"Var","source_name":"ACSP_User_Segment","is_identifier":"false"}, {"id":"1558","unique_name":"ACSP_Siebel_Cat_ABCD","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_ABCD","is_identifier":"false"}, {"id":"1557","unique_name":"ACSP_WO_Closed_Date","type":"Text","source":"Var","source_name":"ACSP_WO_Closed_Date","is_identifier":"false"}, {"id":"1393","unique_name":"ACSP_Implementer_Group","type":"Text","source":"Var","source_name":"ACSP_Implementer_Group","is_identifier":"false"}, {"id":"1392","unique_name":"ACSP_Subservice","type":"Text","source":"Var","source_name":"ACSP_Subservice","is_identifier":"false"}, {"id":"1391","unique_name":"ACSP_Returned_Date","type":"Text","source":"Var","source_name":"ACSP_Returned_Date","is_identifier":"false"}, {"id":"1390","unique_name":"ACSP_Implemented_Date","type":"Text","source":"Var","source_name":"ACSP_Implemented_Date","is_identifier":"false"}, {"id":"1389","unique_name":"ACSP_Requested_Date","type":"Text","source":"Var","source_name":"ACSP_Requested_Date","is_identifier":"false"}, {"id":"1388","unique_name":"ACSP_Wish_Date","type":"Text","source":"Var","source_name":"ACSP_Wish_Date","is_identifier":"false"}, {"id":"1387","unique_name":"ACSP_WO_Type","type":"Text","source":"Var","source_name":"ACSP_WO_Type","is_identifier":"false"}, {"id":"1386","unique_name":"ACSP_System","type":"Text","source":"Var","source_name":"ACSP_System","is_identifier":"false"}, {"id":"1385","unique_name":"ACSP_Severity_Description","type":"Text","source":"Var","source_name":"ACSP_Severity_Description","is_identifier":"false"}, {"id":"1384","unique_name":"ACSP_WO_Assignee_Group","type":"Text","source":"Var","source_name":"ACSP_WO_Assignee_Group","is_identifier":"false"}, {"id":"825","unique_name":"ACSP_CRM_Account_ID","type":"Text","source":"Var","source_name":"ACSP_CRM_Account_ID","is_identifier":"false"}, {"id":"815","unique_name":"ACSP_Return_Date","type":"Text","source":"Var","source_name":"ACSP_Return_Date","is_identifier":"false"}, {"id":"814","unique_name":"ACSP_Recovery_Date","type":"Text","source":"Var","source_name":"ACSP_Recovery_Date","is_identifier":"false"}, {"id":"162","unique_name":"Case Id","type":"Text","source":"Var","source_name":"ACSP_Record_Id","is_identifier":"false"}, {"id":"380","unique_name":"ACSP_PI_PTR_Teams_Involved","type":"Text","source":"Var","source_name":"ACSP_PI_PTR_Teams_Involved","is_identifier":"false"}, {"id":"379","unique_name":"ACSP_PI_nbr","type":"Text","source":"Var","source_name":"ACSP_PI_nbr","is_identifier":"false"}, {"id":"378","unique_name":"ACSP_PTR","type":"Text","source":"Var","source_name":"ACSP_PTR","is_identifier":"false"}, {"id":"377","unique_name":"ACSP_Airline_Code","type":"Text","source":"Var","source_name":"ACSP_Airline_Code","is_identifier":"false"}, {"id":"376","unique_name":"ACSP_Account_Name","type":"Text","source":"Var","source_name":"ACSP_Account_Name","is_identifier":"false"}, {"id":"375","unique_name":"ACSP_Siebel_Cat_ABC","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_ABC","is_identifier":"false"}, {"id":"374","unique_name":"ACSP_Logged_Tool","type":"Text","source":"Var","source_name":"ACSP_Logged_Tool","is_identifier":"false"}, {"id":"373","unique_name":"ACSP_Incident_Cause","type":"Text","source":"Var","source_name":"ACSP_Incident_Cause","is_identifier":"false"}, {"id":"372","unique_name":"ACSP_Service","type":"Text","source":"Var","source_name":"ACSP_Service","is_identifier":"false"}, {"id":"371","unique_name":"ACSP_Ir_Closed_Date","type":"Text","source":"Var","source_name":"ACSP_Ir_Closed_Date","is_identifier":"false"}, {"id":"370","unique_name":"ACSP_Ir_Logged_Date","type":"Text","source":"Var","source_name":"ACSP_Ir_Logged_Date","is_identifier":"false"}, {"id":"369","unique_name":"ACSP_ISP_Sev","type":"Text","source":"Var","source_name":"ACSP_ISP_Sev","is_identifier":"false"}, {"id":"368","unique_name":"ACSP_Severity","type":"Text","source":"Var","source_name":"ACSP_Severity","is_identifier":"false"}, {"id":"367","unique_name":"ACSP_Status_Description","type":"Text","source":"Var","source_name":"ACSP_Status_Description","is_identifier":"false"}, {"id":"366","unique_name":"ACSP_SMC_Owner_User_Org","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_User_Org","is_identifier":"false"}, {"id":"365","unique_name":"ACSP_SMC_Owner_Location","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_Location","is_identifier":"false"}, {"id":"364","unique_name":"ACSP_SMC_Owner_User_Email","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_User_Email","is_identifier":"false"}, {"id":"363","unique_name":"ACSP_SMC_Owner_User","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_User","is_identifier":"false"}, {"id":"361","unique_name":"ACSP_Record_Type","type":"Text","source":"Var","source_name":"ACSP_Record_Type","is_identifier":"false"}, {"id":"360","unique_name":"ACSP_Title","type":"Text","source":"Var","source_name":"ACSP_Title","is_identifier":"false"}, {"id":"160","unique_name":"First_Name","type":"Text","source":"Var","source_name":"ACSP_First_Name","is_identifier":"false"}, {"id":"349","unique_name":"ACSP Account Type","type":"Text","source":"Var","source_name":"ACSP_Account_Type_Id","is_identifier":"false"}, {"id":"163","unique_name":"Airline _Provider_Code","type":"Text","source":"Var","source_name":"CHANGE","is_identifier":"false"}, {"id":"161","unique_name":"Last_Name","type":"Text","source":"Var","source_name":"ACSP_Last_Name","is_identifier":"false"}, {"id":"159","unique_name":"Contact email","type":"Text","source":"Var","source_name":"ACSP_Email","is_identifier":"false"}]',
                    formType: "invitation",
                    formDisplay: { displayType: "lightbox", displayDirection: "centerRight", isSelfHosted: "", selfHostedUrl: "" },
                    inviteData: {
                        inviteUrl: "https://resources.digital-cloud.medallia.eu/wdceu/6260/forms/12697/invitation1663778623357.html",
                        inviteHeight: "400",
                        inviteWidth: "700",
                        skipInvitation: "true",
                        invitationPosition: "top",
                        inviteDataUrl: "https://resources.digital-cloud.medallia.eu/wdceu/6260/forms/12697/invitationData1663778623392_###LANGUAGE_CODE###.json",
                    },
                    onSiteData: {
                        kampyleInvitePerSession: { inviteOncePerSession: "true" },
                        devicetypes: ["desktop", "mobile", "tablet"],
                        kampyleInvitePercentageUsers: { prec: "100.0" },
                        genericRule:
                            '{"type":"criteriaGroup","conjunction":"AND","childrenCriterias":[{"type":"criteriaGroup","conjunction":"AND","childrenCriterias":[{"type":"criteria","value":"1","formId":12697,"fieldId":5101,"formName":"Case Closure - ACU - Issues Only - ServiceNow","uniqueId":"customParam5101","condition":"equals","fieldName":"SN_ACSP_DisplayForm","fieldType":"Number","fieldOrigin":"customParam"}]},{"type":"criteriaGroup","conjunction":"OR","childrenCriterias":[{"type":"criteria","value":"1","formId":12697,"fieldId":5400,"formName":"Case Closure - ACU - Issues Only - ServiceNow","uniqueId":"customParam5400","condition":"equals","fieldName":"SNow_Account_Type_Id","fieldType":"Number","fieldOrigin":"customParam"},{"type":"criteria","value":"2","formId":12697,"fieldId":5400,"formName":"Case Closure - ACU - Issues Only - ServiceNow","uniqueId":"customParam5400","condition":"equals","fieldName":"SNow_Account_Type_Id","fieldType":"Number","fieldOrigin":"customParam"},{"type":"criteria","value":"5","formId":12697,"fieldId":5400,"formName":"Case Closure - ACU - Issues Only - ServiceNow","uniqueId":"customParam5400","condition":"equals","fieldName":"SNow_Account_Type_Id","fieldType":"Number","fieldOrigin":"customParam"}]},{"type":"criteriaGroup","conjunction":"AND","childrenCriterias":[{"type":"criteria","value":"Issue","formId":12697,"fieldId":5429,"formName":"Case Closure - ACU - Issues Only - ServiceNow","uniqueId":"customParam5429","condition":"equals","fieldName":"SNow_Record_Type","fieldType":"Text","fieldOrigin":"customParam"}]}]}',
                    },
                    urlRules: {
                        exclusionUrl: { rule: "" },
                        inclusionUrl: {
                            rule:
                                "https://amadeusdev.service-now.com/;https://dev.amadeus-one.amadeus.com/;https://amadeustrain.service-now.com/;https://train.amadeus-one.amadeus.com/;https://amadeuspreprod.service-now.com/;https://preprod.amadeus-one.amadeus.com/;https://amadeus.service-now.com/;https://amadeus-one.amadeus.com/",
                        },
                    },
                },
                {
                    formId: "7608",
                    isCustomHtmlEnabled: "false",
                    urlVersion: "V2",
                    formHtmlUrl: "https://resources.digital-cloud.medallia.eu/md-form/website/1.11.0/index.html",
                    formDataUrl: "https://resources.digital-cloud.medallia.eu/wdceu/6260/forms/7608/formDataV2_1674550971317_###LANGUAGE_CODE###.json",
                    formWidth: "455",
                    formHeight: "450",
                    isFixedSize: "false",
                    isFullWidthEmbedded: "null",
                    designSettings: { formBackgroundColor: "", thankYouPageBackgroundColor: "" },
                    formLocalizationSettings: { defaultLanguage: "en", useCustomParam: "false", customParam: "null" },
                    formJsonRelativePath: "wdceu/6260/forms/7608/formData1674550971317_###LANGUAGE_CODE###.json",
                    formJsonV2RelativePath: "wdceu/6260/forms/7608/formDataV2_1674550971317_###LANGUAGE_CODE###.json",
                    inviteJsonRelativePath: "wdceu/6260/forms/7608/invitationData1661148122775_###LANGUAGE_CODE###.json",
                    availableLanguages: ["en"],
                    triggerAvailableLanguages: ["en"],
                    functionFileUrl: "",
                    customParams:
                        '[{"id":"362","unique_name":"ACSP SMC Owner Group","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_Group","is_identifier":"false"}, {"id":"4871","unique_name":"ACSP_Siebel_Cat_D","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_D","is_identifier":"false"}, {"id":"4870","unique_name":"ACSP_Siebel_Cat_C","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_C","is_identifier":"false"}, {"id":"4869","unique_name":"ACSP_Siebel_Cat_B","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_B","is_identifier":"false"}, {"id":"4868","unique_name":"ACSP_Siebel_Cat_A","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_A","is_identifier":"false"}, {"id":"4867","unique_name":"ACSP_Keywords","type":"Text","source":"Var","source_name":"ACSP_Keywords","is_identifier":"false"}, {"id":"4866","unique_name":"ACSP_Template_Category","type":"Text","source":"Var","source_name":"ACSP_Template_Category","is_identifier":"false"}, {"id":"4865","unique_name":"ACSP_Template_Title","type":"Text","source":"Var","source_name":"ACSP_Template_Title","is_identifier":"false"}, {"id":"4864","unique_name":"ACSP_Template_ID","type":"Text","source":"Var","source_name":"ACSP_Template_ID","is_identifier":"false"}, {"id":"1561","unique_name":"ACSP_User_Segment","type":"Text","source":"Var","source_name":"ACSP_User_Segment","is_identifier":"false"}, {"id":"1558","unique_name":"ACSP_Siebel_Cat_ABCD","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_ABCD","is_identifier":"false"}, {"id":"1557","unique_name":"ACSP_WO_Closed_Date","type":"Text","source":"Var","source_name":"ACSP_WO_Closed_Date","is_identifier":"false"}, {"id":"1393","unique_name":"ACSP_Implementer_Group","type":"Text","source":"Var","source_name":"ACSP_Implementer_Group","is_identifier":"false"}, {"id":"1392","unique_name":"ACSP_Subservice","type":"Text","source":"Var","source_name":"ACSP_Subservice","is_identifier":"false"}, {"id":"1391","unique_name":"ACSP_Returned_Date","type":"Text","source":"Var","source_name":"ACSP_Returned_Date","is_identifier":"false"}, {"id":"1390","unique_name":"ACSP_Implemented_Date","type":"Text","source":"Var","source_name":"ACSP_Implemented_Date","is_identifier":"false"}, {"id":"1389","unique_name":"ACSP_Requested_Date","type":"Text","source":"Var","source_name":"ACSP_Requested_Date","is_identifier":"false"}, {"id":"1388","unique_name":"ACSP_Wish_Date","type":"Text","source":"Var","source_name":"ACSP_Wish_Date","is_identifier":"false"}, {"id":"1387","unique_name":"ACSP_WO_Type","type":"Text","source":"Var","source_name":"ACSP_WO_Type","is_identifier":"false"}, {"id":"1386","unique_name":"ACSP_System","type":"Text","source":"Var","source_name":"ACSP_System","is_identifier":"false"}, {"id":"1385","unique_name":"ACSP_Severity_Description","type":"Text","source":"Var","source_name":"ACSP_Severity_Description","is_identifier":"false"}, {"id":"1384","unique_name":"ACSP_WO_Assignee_Group","type":"Text","source":"Var","source_name":"ACSP_WO_Assignee_Group","is_identifier":"false"}, {"id":"825","unique_name":"ACSP_CRM_Account_ID","type":"Text","source":"Var","source_name":"ACSP_CRM_Account_ID","is_identifier":"false"}, {"id":"815","unique_name":"ACSP_Return_Date","type":"Text","source":"Var","source_name":"ACSP_Return_Date","is_identifier":"false"}, {"id":"814","unique_name":"ACSP_Recovery_Date","type":"Text","source":"Var","source_name":"ACSP_Recovery_Date","is_identifier":"false"}, {"id":"162","unique_name":"Case Id","type":"Text","source":"Var","source_name":"ACSP_Record_Id","is_identifier":"false"}, {"id":"380","unique_name":"ACSP_PI_PTR_Teams_Involved","type":"Text","source":"Var","source_name":"ACSP_PI_PTR_Teams_Involved","is_identifier":"false"}, {"id":"379","unique_name":"ACSP_PI_nbr","type":"Text","source":"Var","source_name":"ACSP_PI_nbr","is_identifier":"false"}, {"id":"378","unique_name":"ACSP_PTR","type":"Text","source":"Var","source_name":"ACSP_PTR","is_identifier":"false"}, {"id":"377","unique_name":"ACSP_Airline_Code","type":"Text","source":"Var","source_name":"ACSP_Airline_Code","is_identifier":"false"}, {"id":"376","unique_name":"ACSP_Account_Name","type":"Text","source":"Var","source_name":"ACSP_Account_Name","is_identifier":"false"}, {"id":"375","unique_name":"ACSP_Siebel_Cat_ABC","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_ABC","is_identifier":"false"}, {"id":"374","unique_name":"ACSP_Logged_Tool","type":"Text","source":"Var","source_name":"ACSP_Logged_Tool","is_identifier":"false"}, {"id":"373","unique_name":"ACSP_Incident_Cause","type":"Text","source":"Var","source_name":"ACSP_Incident_Cause","is_identifier":"false"}, {"id":"372","unique_name":"ACSP_Service","type":"Text","source":"Var","source_name":"ACSP_Service","is_identifier":"false"}, {"id":"371","unique_name":"ACSP_Ir_Closed_Date","type":"Text","source":"Var","source_name":"ACSP_Ir_Closed_Date","is_identifier":"false"}, {"id":"370","unique_name":"ACSP_Ir_Logged_Date","type":"Text","source":"Var","source_name":"ACSP_Ir_Logged_Date","is_identifier":"false"}, {"id":"369","unique_name":"ACSP_ISP_Sev","type":"Text","source":"Var","source_name":"ACSP_ISP_Sev","is_identifier":"false"}, {"id":"368","unique_name":"ACSP_Severity","type":"Text","source":"Var","source_name":"ACSP_Severity","is_identifier":"false"}, {"id":"367","unique_name":"ACSP_Status_Description","type":"Text","source":"Var","source_name":"ACSP_Status_Description","is_identifier":"false"}, {"id":"366","unique_name":"ACSP_SMC_Owner_User_Org","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_User_Org","is_identifier":"false"}, {"id":"365","unique_name":"ACSP_SMC_Owner_Location","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_Location","is_identifier":"false"}, {"id":"364","unique_name":"ACSP_SMC_Owner_User_Email","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_User_Email","is_identifier":"false"}, {"id":"363","unique_name":"ACSP_SMC_Owner_User","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_User","is_identifier":"false"}, {"id":"361","unique_name":"ACSP_Record_Type","type":"Text","source":"Var","source_name":"ACSP_Record_Type","is_identifier":"false"}, {"id":"360","unique_name":"ACSP_Title","type":"Text","source":"Var","source_name":"ACSP_Title","is_identifier":"false"}, {"id":"160","unique_name":"First_Name","type":"Text","source":"Var","source_name":"ACSP_First_Name","is_identifier":"false"}, {"id":"349","unique_name":"ACSP Account Type","type":"Text","source":"Var","source_name":"ACSP_Account_Type_Id","is_identifier":"false"}, {"id":"163","unique_name":"Airline _Provider_Code","type":"Text","source":"Var","source_name":"CHANGE","is_identifier":"false"}, {"id":"161","unique_name":"Last_Name","type":"Text","source":"Var","source_name":"ACSP_Last_Name","is_identifier":"false"}, {"id":"159","unique_name":"Contact email","type":"Text","source":"Var","source_name":"ACSP_Email","is_identifier":"false"}]',
                    formType: "invitation",
                    formDisplay: { displayType: "lightbox", displayDirection: "centerRight", isSelfHosted: "", selfHostedUrl: "" },
                    inviteData: {
                        inviteUrl: "https://resources.digital-cloud.medallia.eu/wdceu/6260/forms/7608/invitation1661148122729.html",
                        inviteHeight: "400",
                        inviteWidth: "700",
                        skipInvitation: "true",
                        invitationPosition: "top",
                        inviteDataUrl: "https://resources.digital-cloud.medallia.eu/wdceu/6260/forms/7608/invitationData1661148122775_###LANGUAGE_CODE###.json",
                    },
                    onSiteData: {
                        genericRule:
                            '{"type":"criteriaGroup","conjunction":"AND","childrenCriterias":[{"type":"criteriaGroup","conjunction":"OR","childrenCriterias":[{"type":"criteria","value":"44606","formId":-1,"fieldId":349,"formName":"All Forms","uniqueId":"customParam349","condition":"equals","fieldName":"ACSP Account Type","fieldType":"Text","fieldOrigin":"customParam"},{"type":"criteria","value":"44610","formId":-1,"fieldId":349,"formName":"All Forms","uniqueId":"customParam349","condition":"equals","fieldName":"ACSP Account Type","fieldType":"Text","fieldOrigin":"customParam"}]},{"type":"criteriaGroup","conjunction":"AND","childrenCriterias":[{"type":"criteria","value":"IR","formId":-1,"fieldId":361,"formName":"All Forms","uniqueId":"customParam361","condition":"equals","fieldName":"ACSP_Record_Type","fieldType":"Text","fieldOrigin":"customParam"}]}]}',
                        devicetypes: ["desktop", "mobile", "tablet"],
                        kampyleInvitePercentageUsers: { prec: "100.0" },
                        kampyleInvitePerSession: { inviteOncePerSession: "true" },
                    },
                    urlRules: { exclusionUrl: { rule: "" }, inclusionUrl: { rule: "https://www.customerservicepoint.amadeus.com/" } },
                },
                {
                    formId: "7398",
                    isCustomHtmlEnabled: "false",
                    formVersion: "2",
                    formHtmlUrl: "https://resources.digital-cloud.medallia.eu/wdceu/6260/forms/7398/form1674550742504.html",
                    formDataUrl: "https://resources.digital-cloud.medallia.eu/wdceu/6260/forms/7398/formData1674550742651_###LANGUAGE_CODE###.json",
                    formWidth: "455",
                    formHeight: "450",
                    isFixedSize: "false",
                    isFullWidthEmbedded: "null",
                    designSettings: { formBackgroundColor: "", thankYouPageBackgroundColor: "" },
                    formLocalizationSettings: { defaultLanguage: "en", useCustomParam: "false", customParam: "null" },
                    formJsonRelativePath: "wdceu/6260/forms/7398/formData1674550742651_###LANGUAGE_CODE###.json",
                    formJsonV2RelativePath: "wdceu/6260/forms/7398/formDataV2_1674550742651_###LANGUAGE_CODE###.json",
                    inviteJsonRelativePath: "wdceu/6260/forms/7398/invitationData1661148122430_###LANGUAGE_CODE###.json",
                    availableLanguages: ["en"],
                    triggerAvailableLanguages: ["en"],
                    functionFileUrl: "",
                    customParams:
                        '[{"id":"362","unique_name":"ACSP SMC Owner Group","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_Group","is_identifier":"false"}, {"id":"4871","unique_name":"ACSP_Siebel_Cat_D","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_D","is_identifier":"false"}, {"id":"4870","unique_name":"ACSP_Siebel_Cat_C","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_C","is_identifier":"false"}, {"id":"4869","unique_name":"ACSP_Siebel_Cat_B","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_B","is_identifier":"false"}, {"id":"4868","unique_name":"ACSP_Siebel_Cat_A","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_A","is_identifier":"false"}, {"id":"4867","unique_name":"ACSP_Keywords","type":"Text","source":"Var","source_name":"ACSP_Keywords","is_identifier":"false"}, {"id":"4866","unique_name":"ACSP_Template_Category","type":"Text","source":"Var","source_name":"ACSP_Template_Category","is_identifier":"false"}, {"id":"4865","unique_name":"ACSP_Template_Title","type":"Text","source":"Var","source_name":"ACSP_Template_Title","is_identifier":"false"}, {"id":"4864","unique_name":"ACSP_Template_ID","type":"Text","source":"Var","source_name":"ACSP_Template_ID","is_identifier":"false"}, {"id":"1561","unique_name":"ACSP_User_Segment","type":"Text","source":"Var","source_name":"ACSP_User_Segment","is_identifier":"false"}, {"id":"1558","unique_name":"ACSP_Siebel_Cat_ABCD","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_ABCD","is_identifier":"false"}, {"id":"1557","unique_name":"ACSP_WO_Closed_Date","type":"Text","source":"Var","source_name":"ACSP_WO_Closed_Date","is_identifier":"false"}, {"id":"1393","unique_name":"ACSP_Implementer_Group","type":"Text","source":"Var","source_name":"ACSP_Implementer_Group","is_identifier":"false"}, {"id":"1392","unique_name":"ACSP_Subservice","type":"Text","source":"Var","source_name":"ACSP_Subservice","is_identifier":"false"}, {"id":"1391","unique_name":"ACSP_Returned_Date","type":"Text","source":"Var","source_name":"ACSP_Returned_Date","is_identifier":"false"}, {"id":"1390","unique_name":"ACSP_Implemented_Date","type":"Text","source":"Var","source_name":"ACSP_Implemented_Date","is_identifier":"false"}, {"id":"1389","unique_name":"ACSP_Requested_Date","type":"Text","source":"Var","source_name":"ACSP_Requested_Date","is_identifier":"false"}, {"id":"1388","unique_name":"ACSP_Wish_Date","type":"Text","source":"Var","source_name":"ACSP_Wish_Date","is_identifier":"false"}, {"id":"1387","unique_name":"ACSP_WO_Type","type":"Text","source":"Var","source_name":"ACSP_WO_Type","is_identifier":"false"}, {"id":"1386","unique_name":"ACSP_System","type":"Text","source":"Var","source_name":"ACSP_System","is_identifier":"false"}, {"id":"1385","unique_name":"ACSP_Severity_Description","type":"Text","source":"Var","source_name":"ACSP_Severity_Description","is_identifier":"false"}, {"id":"1384","unique_name":"ACSP_WO_Assignee_Group","type":"Text","source":"Var","source_name":"ACSP_WO_Assignee_Group","is_identifier":"false"}, {"id":"825","unique_name":"ACSP_CRM_Account_ID","type":"Text","source":"Var","source_name":"ACSP_CRM_Account_ID","is_identifier":"false"}, {"id":"815","unique_name":"ACSP_Return_Date","type":"Text","source":"Var","source_name":"ACSP_Return_Date","is_identifier":"false"}, {"id":"814","unique_name":"ACSP_Recovery_Date","type":"Text","source":"Var","source_name":"ACSP_Recovery_Date","is_identifier":"false"}, {"id":"162","unique_name":"Case Id","type":"Text","source":"Var","source_name":"ACSP_Record_Id","is_identifier":"false"}, {"id":"380","unique_name":"ACSP_PI_PTR_Teams_Involved","type":"Text","source":"Var","source_name":"ACSP_PI_PTR_Teams_Involved","is_identifier":"false"}, {"id":"379","unique_name":"ACSP_PI_nbr","type":"Text","source":"Var","source_name":"ACSP_PI_nbr","is_identifier":"false"}, {"id":"378","unique_name":"ACSP_PTR","type":"Text","source":"Var","source_name":"ACSP_PTR","is_identifier":"false"}, {"id":"377","unique_name":"ACSP_Airline_Code","type":"Text","source":"Var","source_name":"ACSP_Airline_Code","is_identifier":"false"}, {"id":"376","unique_name":"ACSP_Account_Name","type":"Text","source":"Var","source_name":"ACSP_Account_Name","is_identifier":"false"}, {"id":"375","unique_name":"ACSP_Siebel_Cat_ABC","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_ABC","is_identifier":"false"}, {"id":"374","unique_name":"ACSP_Logged_Tool","type":"Text","source":"Var","source_name":"ACSP_Logged_Tool","is_identifier":"false"}, {"id":"373","unique_name":"ACSP_Incident_Cause","type":"Text","source":"Var","source_name":"ACSP_Incident_Cause","is_identifier":"false"}, {"id":"372","unique_name":"ACSP_Service","type":"Text","source":"Var","source_name":"ACSP_Service","is_identifier":"false"}, {"id":"371","unique_name":"ACSP_Ir_Closed_Date","type":"Text","source":"Var","source_name":"ACSP_Ir_Closed_Date","is_identifier":"false"}, {"id":"370","unique_name":"ACSP_Ir_Logged_Date","type":"Text","source":"Var","source_name":"ACSP_Ir_Logged_Date","is_identifier":"false"}, {"id":"369","unique_name":"ACSP_ISP_Sev","type":"Text","source":"Var","source_name":"ACSP_ISP_Sev","is_identifier":"false"}, {"id":"368","unique_name":"ACSP_Severity","type":"Text","source":"Var","source_name":"ACSP_Severity","is_identifier":"false"}, {"id":"367","unique_name":"ACSP_Status_Description","type":"Text","source":"Var","source_name":"ACSP_Status_Description","is_identifier":"false"}, {"id":"366","unique_name":"ACSP_SMC_Owner_User_Org","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_User_Org","is_identifier":"false"}, {"id":"365","unique_name":"ACSP_SMC_Owner_Location","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_Location","is_identifier":"false"}, {"id":"364","unique_name":"ACSP_SMC_Owner_User_Email","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_User_Email","is_identifier":"false"}, {"id":"363","unique_name":"ACSP_SMC_Owner_User","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_User","is_identifier":"false"}, {"id":"361","unique_name":"ACSP_Record_Type","type":"Text","source":"Var","source_name":"ACSP_Record_Type","is_identifier":"false"}, {"id":"360","unique_name":"ACSP_Title","type":"Text","source":"Var","source_name":"ACSP_Title","is_identifier":"false"}, {"id":"160","unique_name":"First_Name","type":"Text","source":"Var","source_name":"ACSP_First_Name","is_identifier":"false"}, {"id":"349","unique_name":"ACSP Account Type","type":"Text","source":"Var","source_name":"ACSP_Account_Type_Id","is_identifier":"false"}, {"id":"163","unique_name":"Airline _Provider_Code","type":"Text","source":"Var","source_name":"CHANGE","is_identifier":"false"}, {"id":"161","unique_name":"Last_Name","type":"Text","source":"Var","source_name":"ACSP_Last_Name","is_identifier":"false"}, {"id":"159","unique_name":"Contact email","type":"Text","source":"Var","source_name":"ACSP_Email","is_identifier":"false"}]',
                    formType: "invitation",
                    formDisplay: { displayType: "lightbox", displayDirection: "centerRight", isSelfHosted: "", selfHostedUrl: "" },
                    inviteData: {
                        inviteUrl: "https://resources.digital-cloud.medallia.eu/wdceu/6260/forms/7398/invitation1661148122394.html",
                        inviteHeight: "400",
                        inviteWidth: "700",
                        skipInvitation: "true",
                        invitationPosition: "top",
                        inviteDataUrl: "https://resources.digital-cloud.medallia.eu/wdceu/6260/forms/7398/invitationData1661148122430_###LANGUAGE_CODE###.json",
                    },
                    onSiteData: {
                        genericRule:
                            '{"type":"criteriaGroup","conjunction":"AND","childrenCriterias":[{"type":"criteriaGroup","conjunction":"OR","childrenCriterias":[{"type":"criteria","value":"44606","formId":-1,"fieldId":349,"formName":"All Forms","uniqueId":"customParam349","condition":"equals","fieldName":"ACSP Account Type","fieldType":"Text","fieldOrigin":"customParam"},{"type":"criteria","value":"44610","formId":-1,"fieldId":349,"formName":"All Forms","uniqueId":"customParam349","condition":"equals","fieldName":"ACSP Account Type","fieldType":"Text","fieldOrigin":"customParam"}]},{"type":"criteriaGroup","conjunction":"AND","childrenCriterias":[{"type":"criteria","value":"WO","formId":-1,"fieldId":361,"formName":"All Forms","uniqueId":"customParam361","condition":"equals","fieldName":"ACSP_Record_Type","fieldType":"Text","fieldOrigin":"customParam"}]}]}',
                        kampyleInvitePercentageUsers: { prec: "100.0" },
                        devicetypes: ["desktop", "mobile", "tablet"],
                        kampyleInvitePerSession: { inviteOncePerSession: "true" },
                    },
                    urlRules: { exclusionUrl: { rule: "" }, inclusionUrl: { rule: "https://www.customerservicepoint.amadeus.com/" } },
                },
                {
                    formId: "14279",
                    isCustomHtmlEnabled: "false",
                    urlVersion: "V2",
                    formHtmlUrl: "https://resources.digital-cloud.medallia.eu/md-form/website/1.11.0/index.html",
                    formDataUrl: "https://resources.digital-cloud.medallia.eu/wdceu/6260/forms/14279/formDataV2_1674660372286_###LANGUAGE_CODE###.json",
                    formWidth: "450",
                    formHeight: "450",
                    isFixedSize: "false",
                    isFullWidthEmbedded: "null",
                    designSettings: { formBackgroundColor: "", thankYouPageBackgroundColor: "" },
                    formLocalizationSettings: { defaultLanguage: "en", useCustomParam: "false", customParam: "null" },
                    formJsonRelativePath: "wdceu/6260/forms/14279/formData1674660372286_###LANGUAGE_CODE###.json",
                    formJsonV2RelativePath: "wdceu/6260/forms/14279/formDataV2_1674660372286_###LANGUAGE_CODE###.json",
                    availableLanguages: ["en"],
                    triggerAvailableLanguages: ["en"],
                    buttonData: {
                        textLocalization: { en: { buttonText: "Feedback", isRtl: "false" } },
                        type: "vertical",
                        text: "Feedback",
                        textColor: "#ffffff",
                        backgroundColor: "#5081ff",
                        buttonUrl: "",
                        position: "right",
                        cornerMargin: "0.0",
                        verticalOffset: "0.0",
                        zIndex: "",
                        backgroundHoverColor: "#396cef",
                        textHoverColor: "#ffffff",
                    },
                    functionFileUrl: "",
                    customParams:
                        '[{"id":"362","unique_name":"ACSP SMC Owner Group","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_Group","is_identifier":"false"}, {"id":"4871","unique_name":"ACSP_Siebel_Cat_D","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_D","is_identifier":"false"}, {"id":"4870","unique_name":"ACSP_Siebel_Cat_C","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_C","is_identifier":"false"}, {"id":"4869","unique_name":"ACSP_Siebel_Cat_B","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_B","is_identifier":"false"}, {"id":"4868","unique_name":"ACSP_Siebel_Cat_A","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_A","is_identifier":"false"}, {"id":"4867","unique_name":"ACSP_Keywords","type":"Text","source":"Var","source_name":"ACSP_Keywords","is_identifier":"false"}, {"id":"4866","unique_name":"ACSP_Template_Category","type":"Text","source":"Var","source_name":"ACSP_Template_Category","is_identifier":"false"}, {"id":"4865","unique_name":"ACSP_Template_Title","type":"Text","source":"Var","source_name":"ACSP_Template_Title","is_identifier":"false"}, {"id":"4864","unique_name":"ACSP_Template_ID","type":"Text","source":"Var","source_name":"ACSP_Template_ID","is_identifier":"false"}, {"id":"1561","unique_name":"ACSP_User_Segment","type":"Text","source":"Var","source_name":"ACSP_User_Segment","is_identifier":"false"}, {"id":"1558","unique_name":"ACSP_Siebel_Cat_ABCD","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_ABCD","is_identifier":"false"}, {"id":"1557","unique_name":"ACSP_WO_Closed_Date","type":"Text","source":"Var","source_name":"ACSP_WO_Closed_Date","is_identifier":"false"}, {"id":"1393","unique_name":"ACSP_Implementer_Group","type":"Text","source":"Var","source_name":"ACSP_Implementer_Group","is_identifier":"false"}, {"id":"1392","unique_name":"ACSP_Subservice","type":"Text","source":"Var","source_name":"ACSP_Subservice","is_identifier":"false"}, {"id":"1391","unique_name":"ACSP_Returned_Date","type":"Text","source":"Var","source_name":"ACSP_Returned_Date","is_identifier":"false"}, {"id":"1390","unique_name":"ACSP_Implemented_Date","type":"Text","source":"Var","source_name":"ACSP_Implemented_Date","is_identifier":"false"}, {"id":"1389","unique_name":"ACSP_Requested_Date","type":"Text","source":"Var","source_name":"ACSP_Requested_Date","is_identifier":"false"}, {"id":"1388","unique_name":"ACSP_Wish_Date","type":"Text","source":"Var","source_name":"ACSP_Wish_Date","is_identifier":"false"}, {"id":"1387","unique_name":"ACSP_WO_Type","type":"Text","source":"Var","source_name":"ACSP_WO_Type","is_identifier":"false"}, {"id":"1386","unique_name":"ACSP_System","type":"Text","source":"Var","source_name":"ACSP_System","is_identifier":"false"}, {"id":"1385","unique_name":"ACSP_Severity_Description","type":"Text","source":"Var","source_name":"ACSP_Severity_Description","is_identifier":"false"}, {"id":"1384","unique_name":"ACSP_WO_Assignee_Group","type":"Text","source":"Var","source_name":"ACSP_WO_Assignee_Group","is_identifier":"false"}, {"id":"825","unique_name":"ACSP_CRM_Account_ID","type":"Text","source":"Var","source_name":"ACSP_CRM_Account_ID","is_identifier":"false"}, {"id":"815","unique_name":"ACSP_Return_Date","type":"Text","source":"Var","source_name":"ACSP_Return_Date","is_identifier":"false"}, {"id":"814","unique_name":"ACSP_Recovery_Date","type":"Text","source":"Var","source_name":"ACSP_Recovery_Date","is_identifier":"false"}, {"id":"162","unique_name":"Case Id","type":"Text","source":"Var","source_name":"ACSP_Record_Id","is_identifier":"false"}, {"id":"380","unique_name":"ACSP_PI_PTR_Teams_Involved","type":"Text","source":"Var","source_name":"ACSP_PI_PTR_Teams_Involved","is_identifier":"false"}, {"id":"379","unique_name":"ACSP_PI_nbr","type":"Text","source":"Var","source_name":"ACSP_PI_nbr","is_identifier":"false"}, {"id":"378","unique_name":"ACSP_PTR","type":"Text","source":"Var","source_name":"ACSP_PTR","is_identifier":"false"}, {"id":"377","unique_name":"ACSP_Airline_Code","type":"Text","source":"Var","source_name":"ACSP_Airline_Code","is_identifier":"false"}, {"id":"376","unique_name":"ACSP_Account_Name","type":"Text","source":"Var","source_name":"ACSP_Account_Name","is_identifier":"false"}, {"id":"375","unique_name":"ACSP_Siebel_Cat_ABC","type":"Text","source":"Var","source_name":"ACSP_Siebel_Cat_ABC","is_identifier":"false"}, {"id":"374","unique_name":"ACSP_Logged_Tool","type":"Text","source":"Var","source_name":"ACSP_Logged_Tool","is_identifier":"false"}, {"id":"373","unique_name":"ACSP_Incident_Cause","type":"Text","source":"Var","source_name":"ACSP_Incident_Cause","is_identifier":"false"}, {"id":"372","unique_name":"ACSP_Service","type":"Text","source":"Var","source_name":"ACSP_Service","is_identifier":"false"}, {"id":"371","unique_name":"ACSP_Ir_Closed_Date","type":"Text","source":"Var","source_name":"ACSP_Ir_Closed_Date","is_identifier":"false"}, {"id":"370","unique_name":"ACSP_Ir_Logged_Date","type":"Text","source":"Var","source_name":"ACSP_Ir_Logged_Date","is_identifier":"false"}, {"id":"369","unique_name":"ACSP_ISP_Sev","type":"Text","source":"Var","source_name":"ACSP_ISP_Sev","is_identifier":"false"}, {"id":"368","unique_name":"ACSP_Severity","type":"Text","source":"Var","source_name":"ACSP_Severity","is_identifier":"false"}, {"id":"367","unique_name":"ACSP_Status_Description","type":"Text","source":"Var","source_name":"ACSP_Status_Description","is_identifier":"false"}, {"id":"366","unique_name":"ACSP_SMC_Owner_User_Org","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_User_Org","is_identifier":"false"}, {"id":"365","unique_name":"ACSP_SMC_Owner_Location","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_Location","is_identifier":"false"}, {"id":"364","unique_name":"ACSP_SMC_Owner_User_Email","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_User_Email","is_identifier":"false"}, {"id":"363","unique_name":"ACSP_SMC_Owner_User","type":"Text","source":"Var","source_name":"ACSP_SMC_Owner_User","is_identifier":"false"}, {"id":"361","unique_name":"ACSP_Record_Type","type":"Text","source":"Var","source_name":"ACSP_Record_Type","is_identifier":"false"}, {"id":"360","unique_name":"ACSP_Title","type":"Text","source":"Var","source_name":"ACSP_Title","is_identifier":"false"}, {"id":"160","unique_name":"First_Name","type":"Text","source":"Var","source_name":"ACSP_First_Name","is_identifier":"false"}, {"id":"349","unique_name":"ACSP Account Type","type":"Text","source":"Var","source_name":"ACSP_Account_Type_Id","is_identifier":"false"}, {"id":"163","unique_name":"Airline _Provider_Code","type":"Text","source":"Var","source_name":"CHANGE","is_identifier":"false"}, {"id":"161","unique_name":"Last_Name","type":"Text","source":"Var","source_name":"ACSP_Last_Name","is_identifier":"false"}, {"id":"159","unique_name":"Contact email","type":"Text","source":"Var","source_name":"ACSP_Email","is_identifier":"false"}]',
                    formType: "button",
                    formDisplay: { displayType: "lightbox", displayDirection: "centerRight", isSelfHosted: "", selfHostedUrl: "" },
                    onSiteData: { devicetypes: ["desktop", "mobile", "tablet"] },
                    urlRules: { exclusionUrl: { rule: "" }, inclusionUrl: { rule: "https://learningmanagereu.adobe.com/amadeus-hospitality;https://amadeus-hospitality.eu.adobelearningmanager.com;http://viku.space,http://localhost:3000/test,http://localhost:3000/, http://localhost:51333/" } },
                },
            ],
            integrations: {
                recordedSessions: [
                    {
                        isEnabled: [{ source: "function", param: "decibelInsight", paramValue: null, predefinedArguments: "getSessionId" }],
                        parameters: [{ source: "function", param: "decibelInsight", putIn: "sessionId", predefinedArguments: "getSessionId" }],
                        integrationName: "decibelInsight",
                    },
                ],
            },
            usersnapEnvId: "1fc1a340-3a87-4f05-963b-09a09c3ca825",
            usersnapOnpremWidgetLoaderPath: "usersnap-widget/4.6.3\n/loader.js",
            propertyMessages: null,
            globalResourcesUrl: "https://resources.digital-cloud.medallia.eu/liveApp/resources",
            submitUrlPrefix: "https://feedback.digital-cloud.medallia.eu/",
            submitUrlSuffix: "feedback/api/feedback/submit",
            submitUrlWithBackendUUID: "https://feedback.digital-cloud.medallia.eu/feedback/api/v2/feedback/submit",
            region: "digital-cloud-eu",
            websiteId: 6260,
            accountId: 6176,
            packageVersion: null,
            isWCAG: false,
            isManuallyInviteTargeting: false,
            isGoogleAnalyticsClientGTM: false,
            isFormsPreloaded: true,
            cookieExpirationTime: null,
            adobeSdkName: null,
            sharedSubdomain: null,
            customCssUpload: true,
            exemptButtonFormsFromQuarantine: false,
            exemptCodeFormsFromQuarantine: false,
            exemptEmbeddedFormsFromQuarantine: false,
            screenCaptureSelectionTool: null,
            isSpa: false,
        };
    }
    function fetchOnsiteExternalConfiguration(onsiteDataUrl) {
        KAMPYLE_UTILS.httpRequest(KAMPYLE_CONSTANT.HTTP_METHODS.GET, onsiteDataUrl, null, MDIGITAL.CONFIGURATION.onsiteDataSuccess, MDIGITAL.CONFIGURATION.onsiteDataFailed);
    }
    function onsiteDataSuccess(data) {
        if (!data || data.error) {
            MDIGITAL.CONFIGURATION.onsiteDataFailed(data);
        } else {
            if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.DYNAMIC_ONSITE_EVENTS)) {
                KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_DYNAMIC_ONSITE_INITIALIZED_SUCCESSFULLY);
            }
            KAMPYLE_DATA.setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.HAS_ONSITE_CONFIGURATION, true);
            var formattedData = MDIGITAL.CONFIGURATION.formatConfiguration(data);
            var fullConfiguration = Object.assign({}, getOnsiteConfiguration(), formattedData);
            MDIGITAL.INIT.initOnsite(fullConfiguration);
        }
    }
    function onsiteDataFailed(error) {
        var eventData = { errorMessage: KAMPYLE_CONSTANT.LOG_MESSAGES.ERROR_DYNAMIC_ONSITE_INITIALIZATION, additionalInfo: error };
        KAMPYLE_EVENT_DISPATCHER.triggerError(eventData);
        KAMPYLE_DATA.setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.HAS_ONSITE_CONFIGURATION, false);
    }
    function formatConfiguration(propertyData) {
        var formattedData = propertyData;
        var customParams;
        if (formattedData.formNodes && formattedData.formNodes.length) {
            for (var i = 0; i < formattedData.formNodes.length; i++) {
                if (typeof formattedData.formNodes[i].customParams === "string") {
                    customParams = JSON.parse(formattedData.formNodes[i].customParams);
                    formattedData.formNodes[i].customParams = customParams;
                }
            }
        }
        return formattedData;
    }
    return {
        init: init,
        isOnsiteConfigurationMissing: isOnsiteConfigurationMissing,
        getOnsiteConfiguration: getOnsiteConfiguration,
        onsiteDataSuccess: onsiteDataSuccess,
        onsiteDataFailed: onsiteDataFailed,
        fetchOnsiteExternalConfiguration: fetchOnsiteExternalConfiguration,
        formatConfiguration: formatConfiguration,
    };
})(window, document);
window.KAMPYLE_FUNC = (function () {
    function init() {
        window.MDIGITAL && window.MDIGITAL.FORM_STATE && window.MDIGITAL.FORM_STATE.init();
        subscribeFirstToPageEvents();
        KAMPYLE_VIEW.init();
        window.MDIGITAL && window.MDIGITAL.EMBEDDED && window.MDIGITAL.EMBEDDED.init();
        if (checkProvision(KAMPYLE_CONSTANT.PROVISIONS.NEW_MODAL_DIALOGS)) {
            window.MDIGITAL && window.MDIGITAL.MODAL_DIALOGS && window.MDIGITAL.MODAL_DIALOGS.init();
        } else if (checkProvision(KAMPYLE_CONSTANT.PROVISIONS.WCAG_TRAP_FOCUS_IN_MODAL)) {
            window.MDIGITAL && window.MDIGITAL.WCAG && window.MDIGITAL.WCAG.init();
        }
        KAMPYLE_TARGETING.init();
        KAMPYLE_MESSAGE.init();
        KAMPYLE_ANIMATION.init();
        var formattedFormData = MDIGITAL.CONFIGURATION.getOnsiteConfiguration() || {};
        formattedFormData = validateFormContract(formattedFormData);
        KAMPYLE_DATA.setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.DATA_JSON, formattedFormData);
        var context = KAMPYLE_UTILS.getUrlParam("nebContext") || window.MDIGITAL.nebContext || "live";
        KAMPYLE_DATA.setMemoryData("context", context);
        KAMPYLE_DATA.setMemoryData("kampyleDevice", checkDevice());
        KAMPYLE_DATA.setMemoryData("hostedViewportContent", []);
        KAMPYLE_DATA.setMemoryData("isGuest", true);
        if (KAMPYLE_DATA.getMemoryData("context") !== "preview") {
        }
        MDIGITAL.CUSTOM_EVENTS.init();
        createSession();
        subscribeToPageEvents();
        subscribeToCustomEvents();
        KAMPYLE_UTILS.setEventHandler(window, "hashchange", handleHashChanged);
    }
    function validateFormContract(formsObj) {
        formsObj.formNodes = formsObj.formNodes || [];
        var currForm;
        for (var i = formsObj.formNodes.length - 1; i >= 0; i--) {
            currForm = formsObj.formNodes[i];
            if (!currForm.formHeight || currForm.formHeight === "null") {
                currForm.formHeight = KAMPYLE_CONSTANT.FORM_HEIGHT;
            }
            if (!currForm.formWidth || currForm.formWidth === "null") {
                currForm.formWidth = KAMPYLE_CONSTANT.FORM_WIDTH;
            }
        }
        return formsObj;
    }
    function subscribeFirstToPageEvents() {
        var eventMapping = {
            neb_inviteReady: [sendInviteInitialData],
            neb_buttonClicked: [loadFormFirst],
            neb_inviteAccepted: [loadFormFirst],
            neb_showInvitation: [prepareInviteTriggeringData],
            neb_sdkPageView: [setInviteState, KAMPYLE_DATA.initOnsiteDefaultState, KAMPYLE_DATA.resetAllFormsLanguagesCode],
        };
        KAMPYLE_EVENT_DISPATCHER.subscribeMany(eventMapping);
    }
    function loadFormFirst(eventName, data) {
        var formState = KAMPYLE_DATA.getFormState(data.formId);
        if (!formState.loaded && !formState.loading) {
            KAMPYLE_EVENT_DISPATCHER.trigger("neb_loadForm", { formId: data.formId });
        }
    }
    function loadMultipileForms(eventName, data) {
        var formIds = (data || {}).formIds || [];
        formIds.forEach(function (fid) {
            KAMPYLE_COMMON.loadForm(fid);
        });
    }
    function routeToForm(eventName, data) {
        data = data || {};
        KAMPYLE_COMMON.closeForm(data.sourceFormId);
        if (!KAMPYLE_COMMON.showForm(data.formId)) {
            throw new Error("Form cannot be loaded");
        }
    }
    function focusOnInviteIframe() {
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.NEW_MODAL_DIALOGS)) {
            return;
        }
        var iframe = document.querySelector("#kampyleInvite");
        if (iframe && typeof iframe.focus === "function") {
            iframe.focus();
        }
    }
    function handleInviteApplicationUpdated(eventName, data) {
        data = data || {};
        var shouldShowInvite = (KAMPYLE_DATA.getFormState(data.formId) || {}).inviteShown;
        if (shouldShowInvite && MDIGITAL.FORM_STATE.isInviteLoaded(data.formId) && isJsonDataLoaded(data.formId, true) && !isAnyOtherFormAlreadyShown()) {
            KAMPYLE_VIEW.showInvite("", { formId: data.formId });
            KAMPYLE_EVENT_DISPATCHER.trigger("neb_inviteReady", data);
            KAMPYLE_DATA.setMemoryData("inviteLoadedAndShown", true);
        } else if (hasApplicationLoadingFailed(data.formId, true) || isAnyOtherFormAlreadyShown()) {
            KAMPYLE_DATA.setFormState(data.formId, { inviteShown: false });
        }
    }
    function subscribeToCustomEvents() {
        var eventMapping = { neb_inviteDeclined: ["neb_displayClosed"], neb_formClosed: ["neb_displayClosed"] };
        KAMPYLE_EVENT_DISPATCHER.subscribeMany(eventMapping);
    }
    function isFormAlreadyShown(formId) {
        var shouldSkipShowingForm = KAMPYLE_DATA.isSkipInvitation(formId) && isAnyOtherFormAlreadyShown(formId);
        var isFormShown = MDIGITAL.FORM_STATE.isFormShown(formId);
        if (shouldSkipShowingForm) {
            KAMPYLE_EVENT_DISPATCHER.trigger("neb_formReady", { formId: formId });
            KAMPYLE_DATA.setFormState(formId, { shouldBeShown: false });
            KAMPYLE_EVENT_DISPATCHER.trigger("neb_skipShowingForm", { formId: formId });
        }
        return shouldSkipShowingForm || isFormShown;
    }
    function hasApplicationLoadingFailed(formId, isInvite) {
        var jsonDataKey = KAMPYLE_DATA.getMemoryJsonKey(formId, isInvite);
        var currentMemoryData = KAMPYLE_DATA.getMemoryData(jsonDataKey);
        var formState = KAMPYLE_DATA.getFormState(formId);
        return currentMemoryData === false || (!isInvite && formState && formState.loaded === false) || (isInvite && formState && formState.inviteLoaded === false);
    }
    function isJsonDataLoaded(formId, isInvite) {
        var jsonDataKey = KAMPYLE_DATA.getMemoryJsonKey(formId, isInvite);
        return !KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.FORM_TEMPLATE_DATA_SEPERATION) || KAMPYLE_DATA.getMemoryData(jsonDataKey);
    }
    function shouldSkipFetchingFormData(formId, isInvite, formLanguage, isLocalizedForm) {
        var isFetchingDataInProgressKey = KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.FETCHING_DATA_IN_PROGRESS + formId;
        if (isLocalizedForm) {
            isFetchingDataInProgressKey = isFetchingDataInProgressKey + "_" + formLanguage;
        }
        var isFetchingDataInProgress = KAMPYLE_DATA.getMemoryData(isFetchingDataInProgressKey);
        var dataSeparationProvision = KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.FORM_TEMPLATE_DATA_SEPERATION);
        return !dataSeparationProvision || isJsonDataLoaded(formId, false) || hasApplicationLoadingFailed(formId, isInvite) || isFetchingDataInProgress;
    }
    function handleFormLoadingFailed(eventName, data) {
        if (data.failureCause === KAMPYLE_CONSTANT.FORM_LOADING_FAILURE_CAUSE.APPLICATION_FAILED) {
            var formData = KAMPYLE_DATA.getFormData(data.formId);
            var displayType = KAMPYLE_DATA.getDisplayType(formData);
            var formState = KAMPYLE_DATA.getFormState(data.formId);
            var eventData = { errorData: { formId: data.formId, displayType: displayType, formState: formState } };
            KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_COULD_NOT_LOAD_FORM_APPLICATION, eventData);
        }
        setTimeout(function () {
            KAMPYLE_DATA.setFormState(data.formId, { shouldBeShown: false, loaded: false });
        }, 0);
    }
    function isFormLoaded(formId) {
        var formData = KAMPYLE_DATA.getFormData(formId);
        var displayType = KAMPYLE_DATA.getDisplayType(formData);
        return MDIGITAL.FORM_STATE.isFormLoaded(formId);
    }
    function handleInviteVersion(formId) {
        var inviteDataKey = KAMPYLE_DATA.getMemoryJsonKey(formId, true);
        var inviteData = KAMPYLE_DATA.getMemoryData(inviteDataKey);
        KAMPYLE_DATA.setMemoryData("inviteVersion", inviteData && inviteData.mobileDesign ? 1 : -1);
    }
    function prepareJsonData(eventName, data) {
        var isInvite = eventName === "neb_loadInvitation";
        var formLanguage = KAMPYLE_DATA.getMemoryData(KAMPYLE_CONSTANT.LANG_MEMORY_DATA_KEY_PREFIX + data.formId);
        var isLocalizationOn = KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.LOCALIZED_FORMS);
        var fetchingDataInProgressKey = KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.FETCHING_DATA_IN_PROGRESS + data.formId;
        if (isLocalizationOn) {
            fetchingDataInProgressKey = fetchingDataInProgressKey + "_" + formLanguage;
        }
        if (isInvite) {
            fetchingDataInProgressKey = fetchingDataInProgressKey + "_invite";
        }
        if (KAMPYLE_FUNC.shouldSkipFetchingFormData(data.formId, isInvite, formLanguage, isLocalizationOn)) {
            return;
        } else {
            KAMPYLE_DATA.setMemoryData(fetchingDataInProgressKey, true);
        }
        KAMPYLE_DATA.fetchFormJsonData({
            formId: data.formId,
            isInvite: isInvite,
            fetchingDataInProgressKey: fetchingDataInProgressKey,
            callback: function () {
                if (isInvite) {
                    KAMPYLE_VIEW.updateInviteIframeTitle("", data);
                    handleInviteVersion(data.formId);
                    KAMPYLE_FUNC.handleInviteApplicationUpdated("", data);
                } else {
                    KAMPYLE_FUNC.handleFormStateUpdated(data);
                }
            },
            onError: onJsonFetchingFailed.bind(null, data, isInvite),
        });
    }
    function shouldRenderForm(data) {
        var isPopup = KAMPYLE_DATA.isPopupDisplayType(data.formId);
        var isFormLoadedSuccessfully = isFormLoaded(data.formId) && isJsonDataLoaded(data.formId, false);
        var shouldShowForm = MDIGITAL.FORM_STATE.shouldFormBeShown(data.formId) && !isFormAlreadyShown(data.formId);
        return (isFormLoadedSuccessfully || isPopup) && shouldShowForm;
    }
    function onJsonFetchingFailed(data, isInvite, error) {
        var jsonDataKey = KAMPYLE_DATA.getMemoryJsonKey(data.formId, isInvite);
        KAMPYLE_DATA.setMemoryData(jsonDataKey, false);
        if (!isInvite) {
            KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.NEB_FORM_LOADING_HAS_FAILED, { formId: data.formId, failureCause: KAMPYLE_CONSTANT.FORM_LOADING_FAILURE_CAUSE.JSON_FAILED });
        }
        var eventData = { errorData: { formId: data.formId, isInvite: isInvite, errorDetails: error } };
        KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_COULD_NOT_FETCH_DATA, eventData);
    }
    function handleFormStateUpdated(data) {
        var isPopup = KAMPYLE_DATA.isPopupDisplayType(data.formId);
        var isFormShown = MDIGITAL.FORM_STATE.isFormShown(data.formId);
        var shouldTriggerShowForm = shouldRenderForm(data);
        var shouldTriggerFormReady = (isPopup && isFormShown) || (!isPopup && shouldTriggerShowForm);
        if (shouldTriggerShowForm) {
            KAMPYLE_EVENT_DISPATCHER.trigger("neb_showForm", { formId: data.formId });
            KAMPYLE_DATA.setFormState(data.formId, { shown: true, isCurrentlySubmitted: false });
        } else if (hasApplicationLoadingFailed(data.formId, false)) {
            KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.NEB_FORM_LOADING_HAS_FAILED, { formId: data.formId });
        }
        if (shouldTriggerFormReady) {
            KAMPYLE_EVENT_DISPATCHER.trigger("neb_formReady", { formId: data.formId });
        }
    }
    function subscribeToPageEvents() {
        var eventMapping = {
            neb_pageView: [increasePageViewCounter],
            neb_showInvitation: [setInviteState, KAMPYLE_UTILS.setCurrentScrollPosition, setFocusedElement, focusOnInviteIframe, handleInviteApplicationUpdated],
            neb_buttonClicked: [KAMPYLE_UTILS.setCurrentScrollPosition, setFocusedElement, handleShowForm],
            neb_sdkShowForm: [KAMPYLE_UTILS.setCurrentScrollPosition, setFocusedElement, handleShowForm],
            neb_skipInvitation: [KAMPYLE_UTILS.setCurrentScrollPosition, handleShowForm],
            neb_inviteLoaded: [setInviteState, handleInviteLoaded],
            neb_inviteAccepted: [setInviteState, KAMPYLE_UTILS.setCurrentScrollPosition, handleShowForm],
            neb_inviteDeclined: [setInviteState, handleInviteDeclined, KAMPYLE_UTILS.handleAfterFormPosition],
            neb_formClosed: [handleFormClosed, KAMPYLE_UTILS.handleAfterFormPosition],
            neb_popupBlocked: [handleFormClosed, KAMPYLE_UTILS.handleAfterFormPosition],
            neb_loadForm: [prepareJsonData, handleFormLoading],
            neb_loadInvitation: [prepareJsonData],
            neb_formLoaded: [handleFormLoaded],
            neb_loadMultipileForms: [loadMultipileForms],
            neb_routeToForm: [routeToForm],
            neb_formReady: [sendFormExtraData, handleVersion, loadScreenCaptureApi],
            neb_feedbackSubmitted: [handleFeedbackSubmitted],
            neb_submitFeedbackFailed: [handleFeedbackSubmitted],
            neb_sdkPageView: [startCheckingTargeting],
            neb_screenCaptureLoaded: [handleScreenCaptureApiLoaded],
            neb_formLoadingHasFailed: [handleFormLoadingFailed],
        };
        KAMPYLE_EVENT_DISPATCHER.subscribeMany(eventMapping);
    }
    function getTriggerTypeByEvent(eventName) {
        var eventTriggerMapping = { neb_buttonClicked: "Button", neb_sdkShowForm: "ByCode", neb_routeToForm: "ByCode", neb_skipInvitation: "Invitation", neb_inviteAccepted: "Invitation" };
        return eventTriggerMapping[eventName] || null;
    }
    function handleShowForm(eventName, data) {
        data = data || {};
        data.triggerType = data.triggerType || getTriggerTypeByEvent(eventName);
        KAMPYLE_DATA.saveFormExtraData(data.formId, { triggerType: data.triggerType });
        KAMPYLE_DATA.setMemoryData("currentFormId", data.formId);
        KAMPYLE_DATA.setMemoryData("formIsShown", true);
        KAMPYLE_DATA.setFormState(data.formId, { shouldBeShown: true, triggerType: data.triggerType });
        handleFormStateUpdated(data);
    }
    function createSession() {
        var referrerDifferentThanHost = KAMPYLE_FUNC.isReferrerDifferentThanHost();
        var kampyleUserSession = KAMPYLE_DATA.getData("kampyleUserSession");
        var isDirectNavigation = false;
        try {
            isDirectNavigation = document.referrer === "" || window.parent.document.referrer === "";
        } catch (e) {
            var data = { errorMessage: e.message, errorStack: e.stack, additionalInfo: "createSession- failed to access document.referrer, probably CORS problem when the customer's iframe is hosted in a website with different domain." };
            referrerDifferentThanHost = false;
            KAMPYLE_COOLADATA.triggerCooladataEvent(KAMPYLE_CONSTANT.MDIGITAL_WARNING, data);
        } finally {
            if (!kampyleUserSession || isDirectNavigation || referrerDifferentThanHost) {
                KAMPYLE_DATA.setMemoryData("isSyncedIdentifierData", false);
                KAMPYLE_DATA.setData("kampyleUserSession", KAMPYLE_UTILS.getCurrentTimestamp());
                KAMPYLE_DATA.setData("kampyleSessionPageCounter", 0);
                addToSessionCount();
                KAMPYLE_DATA.deleteData("kampyleUserPercentile");
                KAMPYLE_DATA.deleteData("kampyleInvitePresented");
                KAMPYLE_DATA.deleteData(KAMPYLE_CONSTANT.SESSION_DATA_FIELDS.IS_SURVEY_SUBMITTED_IN_SESSION);
            }
        }
    }
    function isReferrerDifferentThanHost() {
        var referrerDomain = document.referrer.match(/:\/\/(.[^/]+)/);
        if (!referrerDomain) {
            return true;
        }
        referrerDomain = referrerDomain[1];
        if (referrerDomain === window.location.host) {
            return false;
        }
        var propertySharedSubdomain = KAMPYLE_DATA.getPropertySharedSubdomain();
        if (propertySharedSubdomain) {
            return !KAMPYLE_UTILS.isHostMatchesSubdomain(referrerDomain, propertySharedSubdomain) || !KAMPYLE_UTILS.isHostMatchesSubdomain(window.location.host, propertySharedSubdomain);
        }
        return true;
    }
    function handleInviteLoaded(eventName, data) {
        data = data || {};
        if (!KAMPYLE_DATA.getMemoryData("inviteVersion")) {
            var inviteVersion = KAMPYLE_UTILS.getNestedPropertyValue(data, "inviteVersion");
            KAMPYLE_DATA.setMemoryData("inviteVersion", inviteVersion);
        }
        var formState = KAMPYLE_DATA.getFormState(data.formId) || {};
        if (formState.inviteShown) {
            handleInviteApplicationUpdated("", data);
        }
    }
    function handleFormLoading(eventName, data) {
        data = data || {};
        KAMPYLE_DATA.setFormState(data.formId, { loading: true });
        KAMPYLE_EVENT_DISPATCHER.trigger("neb_form_loaded", { formId: data.formId });
    }
    function sendInviteInitialData(eventName, data) {
        data = data || {};
        if (!KAMPYLE_DATA.getFormState(data.formId).inviteLoaded) {
            return false;
        }
        KAMPYLE_UTILS.sendMessageToIframe("kampyleInvite", { action: "inviteShown" });
        var messageData = {
            accountId: data.accountId,
            websiteId: data.websiteId,
            environment: data.enviroment,
            url: document.location.href,
            kampyle_version: window.MDIGITAL.version || "0.0.0.0",
            formId: data.formId,
            cookie_size: KAMPYLE_UTILS.getByteSize(document.cookie),
            isWCAG: KAMPYLE_DATA.isFeatureEnabled("WCAG"),
            deviceType: checkDevice(),
            provisions: getAllProvisions(),
            position: KAMPYLE_VIEW.getInvitePosition(data.formId),
            customCssUpload: KAMPYLE_DATA.isFeatureEnabled(KAMPYLE_CONSTANT.PROPERTY_SETTINGS.CUSTOM_CSS_UPLOAD),
        };
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.FORM_TEMPLATE_DATA_SEPERATION)) {
            var callbackFunction = function (jsonData) {
                var formData = KAMPYLE_DATA.getFormData(data.formId);
                var onsiteConfiguration = MDIGITAL.CONFIGURATION.getOnsiteConfiguration();
                var extraMessageData = {
                    submitUrlPrefix: onsiteConfiguration.submitUrlPrefix,
                    submitUrlSuffix: onsiteConfiguration.submitUrlSuffix,
                    globalResourcesUrl: onsiteConfiguration.globalResourcesUrl,
                    versionedResourcesUrl: formData.versionedResourcesUrl,
                };
                messageData = Object.assign({}, messageData, { inviteData: jsonData }, extraMessageData);
                if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.LOCALIZED_FORMS)) {
                    messageData.formLanguage = MDIGITAL.LOCALIZATION.getFormLanguage(data.formId) || null;
                }
                KAMPYLE_UTILS.sendMessageToIframe("kampyleInvite", { action: "setExtraData", data: messageData });
            };
            var onError = function (error) {
                console.error(error);
            };
            KAMPYLE_DATA.fetchFormJsonData({ formId: data.formId, callback: callbackFunction, onError: onError, isInvite: true }, true);
        } else {
            KAMPYLE_UTILS.sendMessageToIframe("kampyleInvite", { action: "setExtraData", data: messageData });
        }
    }
    function setInviteState(eventName, data) {
        KAMPYLE_UTILS.sendMessageToIframe("kampyleInvite", { action: KAMPYLE_CONSTANT.EVENTS.MDIGITAL_VALIDATE_ORIGIN });
        data = data || {};
        data.formId = data.formId || KAMPYLE_DATA.getMemoryData("currentFormId");
        switch (eventName) {
            case "neb_showInvitation":
                KAMPYLE_DATA.setFormState(data.formId, { inviteShown: true });
                break;
            case "neb_inviteDeclined":
            case "neb_inviteAccepted":
                KAMPYLE_DATA.setFormState(data.formId, { inviteShown: false });
                break;
            case "neb_inviteLoaded":
                KAMPYLE_DATA.setFormState(data.formId, { inviteLoaded: true });
                break;
            case "neb_sdkPageView":
                KAMPYLE_DATA.setFormState(data.formId, { inviteLoaded: null, inviteShown: false });
                break;
            default:
                KAMPYLE_UTILS.showWarning("Unhandled event name " + eventName);
        }
    }
    function updatePreviewIframeStyle(formData) {
        var currentFormId = formData.formId;
        var formWidth;
        var formHeight;
        if (formData) {
            formWidth = parseInt(formData.formWidth, 10);
            formHeight = parseInt(formData.formHeight, 10);
        }
        var hostWidth = document.documentElement.clientWidth;
        var hostHeight = document.documentElement.clientHeight;
        var innerContainerStyle = { overflowY: "auto", height: "100%" };
        KAMPYLE_UTILS.setElementStyle(document.getElementById("innerContainer"), innerContainerStyle);
        var iframeStyleObject = { border: 0, position: "relative", margin: "50px auto 50px", height: formHeight + "px", width: formWidth + "px" };
        if (hostWidth > formWidth && hostHeight > formHeight) {
            if (KAMPYLE_DATA.isCustomHtmlAndFixedSizeForm(currentFormId)) {
                iframeStyleObject = { position: "absolute", top: "50%", "margin-top": -formHeight / 2 + "px", left: "50%", "margin-left": -formWidth / 2 + "px", height: formHeight + "px", width: formWidth + "px" };
            } else {
                iframeStyleObject = { position: "fixed", height: "100%", width: "100%" };
            }
        }
        var modal = document.getElementById("kampyleFormModal");
        if (modal && modal.style && modal.removeAttribute) {
            modal.removeAttribute("style");
            KAMPYLE_UTILS.setElementStyle(modal, iframeStyleObject);
        }
    }
    function showPreviewForm() {
        var formHeight = 450;
        var formWidth = 450;
        var formUrl = KAMPYLE_UTILS.getUrlParam("url");
        var url;
        if (KAMPYLE_DATA.getMemoryData("kampyleDevice") === KAMPYLE_CONSTANT.DEVICES.MOBILE) {
            formWidth = "100%";
            formHeight = "100%";
        } else {
            var height = KAMPYLE_UTILS.getUrlParam("height");
            var width = KAMPYLE_UTILS.getUrlParam("width");
            if (!!height && !isNaN(height)) {
                formHeight = height;
            }
            if (!!width && !isNaN(width)) {
                formWidth = width;
            }
        }
        if (!!formUrl && KAMPYLE_UTILS.validateKampyleDomain(decodeURIComponent(formUrl))) {
            formUrl = decodeURIComponent(formUrl);
            formUrl += "?region=" + KAMPYLE_DATA.getMemoryData("region");
            var formId = KAMPYLE_UTILS.getUrlParam("formId");
            if (!!formId) {
                formUrl += "&formId=" + formId;
                KAMPYLE_DATA.setMemoryData("currentFormId", formId);
            } else {
                url = location.protocol + "//" + location.host;
                window.location = url + "/#/error/404";
            }
            var provisions = decodeURIComponent(window.getUrlParam("provisions"));
            if (!!provisions) {
                formUrl += "&provisions=" + encodeURIComponent(provisions);
            }
            var currentWebsiteId = decodeURIComponent(window.getUrlParam("websiteId"));
            if (!!currentWebsiteId) {
                formUrl += "&websiteId=" + encodeURIComponent(currentWebsiteId);
            }
            var type = KAMPYLE_UTILS.getUrlParam("type") || "direct";
            var validTypes = ["live", "direct", "preview"];
            if (validTypes.indexOf(type.toLowerCase()) === -1) {
                type = "direct";
            }
            formUrl += "&type=" + type;
            var iframeHeight = "100%";
            var iframeWidth = "100%";
            if (KAMPYLE_DATA.isCustomHtmlAndFixedSizeForm(formId)) {
                iframeHeight = formHeight;
                iframeWidth = formWidth;
            }
            var iframe = KAMPYLE_UTILS.createIframe(formUrl, iframeWidth, iframeHeight, "kampyleForm" + formId);
            if (KAMPYLE_DATA.isCustomHtmlForm(formId)) {
                updatePreviewIframeStyle({ formId: formId, formHeight: formHeight, formWidth: formWidth });
            }
            var modal = document.getElementById("kampyleFormModal");
            if (!!modal) {
                modal.appendChild(iframe);
                if (iframe.offsetTop < 30 && !KAMPYLE_DATA.getMemoryData("kampyleDevice") === KAMPYLE_CONSTANT.DEVICES.MOBILE) {
                    modal.style.paddingTop = 30 - iframe.offsetTop + "px";
                }
            }
        } else {
            url = location.protocol + "//" + location.host;
            window.location = url + "/#/error/404";
        }
    }
    function getUserIdentifierVal() {
        var identifierCustomParam = KAMPYLE_DATA.getUserIdentifier();
        if (!identifierCustomParam) {
            return null;
        }
        var userIdentifierVal = MDIGITAL.CUSTOM_PARAMETERS.getCustomParamValue({ name: identifierCustomParam.source_name, type: identifierCustomParam.type, source: identifierCustomParam.source });
        if (!userIdentifierVal) {
            return null;
        }
        return userIdentifierVal;
    }
    function setIdentifierData(identifierData) {
        KAMPYLE_DATA.setMemoryData("isSyncedIdentifierData", true);
        updateIdentifierDataIfNecessary(identifierData.data);
    }
    function updateIdentifierDataIfNecessary(identifierData) {
        updateIdentifierDataIntegerIfNecessary(identifierData.DECLINED_DATE, "DECLINED_DATE");
        updateIdentifierDataIntegerIfNecessary(identifierData.SUBMITTED_DATE, "SUBMITTED_DATE");
    }
    function updateIdentifierDataIntegerIfNecessary(identifierDataValue, userStateString) {
        var localStorageDate = parseInt(KAMPYLE_DATA.getData(userStateString));
        localStorageDate = localStorageDate ? localStorageDate : null;
        var identifierDataToSync = { identifierDataState: userStateString, identifierValOnLocalStorage: localStorageDate };
        var identifierDataValues = { identifierDataState: userStateString, identifierValOnSbt: identifierDataValue, identifierValOnLocalStorage: localStorageDate };
        identifierDataValue = identifierDataValue ? identifierDataValue : null;
        if (identifierDataValue === localStorageDate) {
            return null;
        }
        if ((identifierDataValue !== null && localStorageDate === null) || identifierDataValue > localStorageDate) {
            KAMPYLE_DATA.setData(userStateString, identifierDataValue);
        } else if ((localStorageDate !== null && identifierDataValue === null) || identifierDataValue < localStorageDate) {
            KAMPYLE_FUNC.updateTargeting(userStateString, localStorageDate);
        } else {
            KAMPYLE_UTILS.showWarning("special case");
        }
    }
    function syncIdentifierData(userIdentifierVal, callback) {
        var propertyId = MDIGITAL.CONFIGURATION.getOnsiteConfiguration().websiteId || null;
        var urlPrefix = KAMPYLE_DATA.getServerBasedTargetingPrefix();
        var envPrefix = KAMPYLE_DATA.getServerBasedTargetingEnv();
        var url = urlPrefix + "/api/targeting/property/" + envPrefix + propertyId + "/identity/" + userIdentifierVal;
        var onSuccess = KAMPYLE_FUNC.onSyncIdentifierDataSuccess.bind(null, callback);
        var onFailure = onSyncIdentifierDataFailure.bind(null, callback);
        KAMPYLE_UTILS.httpRequest(KAMPYLE_CONSTANT.HTTP_METHODS.GET, url, null, onSuccess, onFailure);
    }
    function onSyncIdentifierDataSuccess(callback, data) {
        if (!data || data.error) {
            KAMPYLE_COOLADATA.triggerCooladataEventDispatcherError({ message: "Invalid identifier data. Data: " + JSON.stringify(data) });
        } else {
            setIdentifierData(data);
        }
        typeof callback === "function" && callback();
    }
    function onSyncIdentifierDataFailure(callback, error) {
        KAMPYLE_COOLADATA.triggerCooladataEventDispatcherError({ message: "Failed to fetch identifier data. Error: " + JSON.stringify(error) });
        typeof callback === "function" && callback();
    }
    function shouldSyncIdentifier(newUserIdentifierVal) {
        var prevUserIdentifierVal = KAMPYLE_DATA.getMemoryData("identifierValue");
        var isSyncedIdentifierData = KAMPYLE_DATA.getMemoryData("isSyncedIdentifierData") === true;
        var isSBTOn = !!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.SERVER_BASED_TARGETING);
        var isIdentifiedUser = !!newUserIdentifierVal;
        return isIdentifiedUser && isSBTOn && (!isSyncedIdentifierData || prevUserIdentifierVal !== newUserIdentifierVal);
    }
    function startCheckingTargeting() {
        if (isAnyOtherFormAlreadyShown()) {
            return false;
        }
        KAMPYLE_DATA.setMemoryData("isInvitationShouldBeIgnored", false);
        KAMPYLE_EVENT_DISPATCHER.trigger("neb_pageView");
        if (window.KAMPYLE_ONSITE_STATE !== "manual") {
            var shouldSkipInviteTargeting = KAMPYLE_DATA.isFeatureEnabled(KAMPYLE_CONSTANT.PROPERTY_SETTINGS.MANUALLY_INVITE_TARGETING);
            KAMPYLE_EVENT_DISPATCHER.trigger("neb_targetingInit", { skipInviteTargeting: shouldSkipInviteTargeting });
        }
    }
    function increasePageViewCounter() {
        var sessionPageCounter = KAMPYLE_DATA.getData("kampyleSessionPageCounter") || 0;
        sessionPageCounter = parseInt(sessionPageCounter);
        KAMPYLE_DATA.setData("kampyleSessionPageCounter", ++sessionPageCounter);
    }
    function setQuarantineDeclinedDate(eventName) {
        var declinedDateKey = "DECLINED_DATE";
        var date = KAMPYLE_UTILS.getCurrentTimestamp();
        KAMPYLE_DATA.setData(declinedDateKey, date);
        if (checkProvision(KAMPYLE_CONSTANT.PROVISIONS.SERVER_BASED_TARGETING)) {
            KAMPYLE_EVENT_DISPATCHER.trigger(eventName, { declinedDate: date });
        }
        KAMPYLE_FUNC.updateTargeting(declinedDateKey, date);
    }
    function handleFormClosed(eventName, data) {
        data = data || {};
        if (!data.isFormSubmitted && (!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.EXEMPT_FORMS_FROM_QUARANTINE) || KAMPYLE_DATA.isFormOfType(data.formId, KAMPYLE_CONSTANT.FORM_TYPES.INVITATION))) {
            KAMPYLE_FUNC.setQuarantineDeclinedDate(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_UPDATE_TARGETING_WITH_DECLINED_DATE_FORM_CLOSED);
        }
        KAMPYLE_DATA.setMemoryData("formIsShown", false);
        KAMPYLE_DATA.setFormState(data.formId, { shouldBeShown: false, shown: false, loaded: null });
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.NEW_MODAL_DIALOGS)) {
            finishFormClosed(data.formId);
        } else {
            refocusActiveElement();
            KAMPYLE_UTILS.triggerCustomEvent("neb_formClosed", { formId: data.formId });
            if (KAMPYLE_DATA.getMemoryData("context") === "preview") {
                window.close();
            }
            finishFormClosed(data.formId);
        }
    }
    function finishFormClosed(formId) {
        var buttonFormId = KAMPYLE_DATA.getMemoryData("buttonFormId");
        var formData = KAMPYLE_DATA.getFormData(buttonFormId);
        var delay = KAMPYLE_DATA.getDisplayType(formData) === "animation" ? 1000 : 0;
        if (buttonFormId) {
            setTimeout(function () {
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_showButton", { formId: buttonFormId, formClosed: true });
                triggerFormClosedEvents(formId);
            }, delay);
        } else {
            triggerFormClosedEvents(formId);
        }
    }
    function triggerFormClosedEvents(formId) {
        KAMPYLE_EVENT_DISPATCHER.trigger("neb_afterFormClosed", { formId: formId });
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.NEW_MODAL_DIALOGS)) {
            KAMPYLE_UTILS.triggerCustomEvent("neb_formClosed", { formId: formId });
        }
    }
    function updateTargeting(stateType, data) {
        if (!!checkProvision(KAMPYLE_CONSTANT.PROVISIONS.SERVER_BASED_TARGETING) && !!KAMPYLE_DATA.getMemoryData("identifierValue")) {
            var dataJson = {};
            dataJson[stateType] = data;
            var urlPrefix = KAMPYLE_DATA.getServerBasedTargetingPrefix();
            var envPrefix = KAMPYLE_DATA.getServerBasedTargetingEnv();
            var url = urlPrefix + "/api/targeting/property/" + envPrefix + MDIGITAL.CONFIGURATION.getOnsiteConfiguration().websiteId + "/identity/" + encodeURIComponent(KAMPYLE_DATA.getMemoryData("identifierValue"));
            var dataStateType = dataJson[stateType];
            var dataObjForSbt = { dataState: dataStateType, dataValue: data };
            KAMPYLE_EVENT_DISPATCHER.trigger("MDigital_updatingSbtServer", dataObjForSbt);
            KAMPYLE_UTILS.httpRequest(KAMPYLE_CONSTANT.HTTP_METHODS.POST, url, dataJson);
        }
    }
    function setQuarantineSubmittedDate() {
        var submittedDateKey = "SUBMITTED_DATE";
        var date = KAMPYLE_UTILS.getCurrentTimestamp();
        KAMPYLE_DATA.setData(submittedDateKey, date);
        if (!!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.SERVER_BASED_TARGETING)) {
            KAMPYLE_EVENT_DISPATCHER.trigger("MDigital_updateTargetingWithSubmittedDate", { submittedDate: date });
        }
        KAMPYLE_FUNC.updateTargeting(submittedDateKey, date);
    }
    function exemptQuarantineSubmittedDateByFormType(formId) {
        switch (KAMPYLE_DATA.getFormTriggerType(formId)) {
            case KAMPYLE_CONSTANT.FORM_TYPES.BUTTON:
                return KAMPYLE_DATA.isFeatureEnabled(KAMPYLE_CONSTANT.FEATURE_FLAGS.EXEMPT_BUTTON_FORMS_FROM_QUARANTINE);
            case KAMPYLE_CONSTANT.FORM_TYPES.CODE:
                return KAMPYLE_DATA.isFeatureEnabled(KAMPYLE_CONSTANT.FEATURE_FLAGS.EXEMPT_CODE_FORMS_FROM_QUARANTINE);
            case KAMPYLE_CONSTANT.FORM_TYPES.EMBEDDED:
                return KAMPYLE_DATA.isFeatureEnabled(KAMPYLE_CONSTANT.FEATURE_FLAGS.EXEMPT_EMBEDDED_FORMS_FROM_QUARANTINE);
            default:
                return false;
        }
    }
    function handleFeedbackSubmitted(eventMapping, data) {
        if (!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.EXEMPT_FORMS_FROM_QUARANTINE) || !exemptQuarantineSubmittedDateByFormType(data.formId)) {
            KAMPYLE_FUNC.setQuarantineSubmittedDate();
        }
        KAMPYLE_DATA.setData(KAMPYLE_CONSTANT.SESSION_DATA_FIELDS.IS_SURVEY_SUBMITTED_IN_SESSION, true);
        KAMPYLE_DATA.setFormState(data.formId, { isCurrentlySubmitted: true });
    }
    function handleInviteDeclined(eventName, data) {
        KAMPYLE_FUNC.setQuarantineDeclinedDate(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_UPDATE_TARGETING_WITH_DECLINED_DATE_INVITE_DECLINED);
        refocusActiveElement();
    }
    function handleFormLoaded(eventName, data) {
        KAMPYLE_DATA.setFormState(data.formId, { loading: false, loaded: true });
        handleFormStateUpdated(data);
    }
    function loadScreenCaptureApi(eventName, data) {
        data = data || {};
        if (data.isScreenCaptureEnabled !== false) {
            KAMPYLE_SCREEN_CAPTURE.init(function () {
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_screenCaptureLoaded", { formId: data.formId });
            });
        }
    }
    function handleScreenCaptureApiLoaded(eventName, data) {
        data = data || {};
        var formData = KAMPYLE_DATA.getFormData(data.formId);
        var iframePrefix;
        switch (KAMPYLE_DATA.getDisplayType(formData)) {
            case KAMPYLE_CONSTANT.DISPLAY_TYPES.LIGHTBOX:
                iframePrefix = "kampyleForm";
                break;
            case KAMPYLE_CONSTANT.DISPLAY_TYPES.ANIMATION:
                iframePrefix = "kampyleFormAnimation";
                break;
            default:
                iframePrefix = "kampyleForm";
        }
        var iframeId = iframePrefix + data.formId;
        KAMPYLE_UTILS.sendMessageToIframe(iframeId, { action: "screenCaptureLoaded" });
    }
    function setFocusedElement() {
        KAMPYLE_DATA.setMemoryData("kampyleFocusedElement", document.activeElement);
    }
    function refocusActiveElement() {
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.NEW_MODAL_DIALOGS)) {
            return;
        }
        var focused = KAMPYLE_DATA.getMemoryData("kampyleFocusedElement");
        if (focused && focused.focus) {
            focused.focus();
        }
    }
    function checkProvision(name) {
        var dataObj = MDIGITAL.CONFIGURATION.getOnsiteConfiguration();
        return !!name && !!dataObj && !!dataObj.provisions && (!!dataObj.provisions[name] || dataObj.provisions[name] === "true");
    }
    function getAllProvisions() {
        var allProvisions = MDIGITAL.CONFIGURATION.getOnsiteConfiguration().provisions;
        var provisions = {};
        for (var provision in allProvisions) {
            if (allProvisions.hasOwnProperty(provision)) {
                provisions[provision] = checkProvision(provision);
            }
        }
        return provisions;
    }
    function checkDevice() {
        if (!KAMPYLE_DATA.getMemoryData("kampyleDevice")) {
            KAMPYLE_DATA.setMemoryData("kampyleDevice", KAMPYLE_UTILS.getDeviceTypeByUserAgent(navigator.userAgent, navigator.userAgentData));
        }
        return KAMPYLE_DATA.getMemoryData("kampyleDevice") || "desktop";
    }
    function addScreenCaptureData(messageData) {
        var version = KAMPYLE_DATA.getMemoryData("version");
        if (version === 1) {
            messageData.screenCapture = { isTaken: false };
        } else {
            messageData.integrations.screenCapture = { isTaken: false };
        }
        return messageData;
    }
    function sendFormExtraData(eventName, data) {
        data = data || {};
        var formData = KAMPYLE_DATA.getFormData(data.formId);
        if (!formData || !data.formId) {
            return false;
        }
        var targetWindow;
        var currIframe;
        var formDisplayType = KAMPYLE_DATA.getDisplayType(formData);
        switch (formDisplayType) {
            case "animation":
                currIframe = document.getElementById("kampyleFormAnimation" + data.formId);
                break;
            case "lightbox":
                currIframe = document.getElementById("kampyleForm" + data.formId);
                break;
            case "popup":
                targetWindow = KAMPYLE_DATA.getMemoryData("popupHandler");
                break;
            case KAMPYLE_CONSTANT.DISPLAY_TYPES.EMBEDDED:
                currIframe = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.EMBEDDED.IFRAME_ID_PREFIX + data.formId);
                break;
            default:
                KAMPYLE_UTILS.showWarning("Invalid display type - " + formDisplayType);
                return false;
        }
        var origin = "*";
        if (currIframe && currIframe.getAttribute) {
            origin = currIframe.getAttribute("origin") || "*";
            targetWindow = currIframe.contentWindow;
        }
        if (targetWindow && targetWindow.postMessage) {
            if (MDIGITAL.CUSTOM_PARAMETERS.hasCustomParams(data.formId)) {
                var customParams = MDIGITAL.CUSTOM_PARAMETERS.formatCustomParams(data.formId);
                targetWindow.postMessage('{"action": "customParamsLoaded","customParams" : ' + JSON.stringify(customParams) + "}", origin);
            }
            var messageData = '{"action": "setFormId","formId" : ' + data.formId + "}";
            targetWindow.postMessage(messageData, origin);
            messageData = { action: "setExtraData" };
            messageData.clientHints = KAMPYLE_UTILS.safeJsonParse(KAMPYLE_CONSTANT.PLACEHOLDERS.USER_AGENT_CLIENT_HINTS_LIST) || [];
            messageData.provisions = getAllProvisions();
            messageData.integrations = KAMPYLE_INTEGRATION.getIntegrationData();
            messageData.websiteId = MDIGITAL.CONFIGURATION.getOnsiteConfiguration().websiteId || null;
            messageData.device = KAMPYLE_DATA.getMemoryData("kampyleDevice");
            messageData.context = KAMPYLE_DATA.getMemoryData("context");
            messageData.url = encodeURIComponent(document.location.href);
            (messageData.customCssUpload = KAMPYLE_DATA.isFeatureEnabled(KAMPYLE_CONSTANT.PROPERTY_SETTINGS.CUSTOM_CSS_UPLOAD)), (messageData = addScreenCaptureData(messageData));
            messageData.isScreenCaptureEnabled = KAMPYLE_SCREEN_CAPTURE.isScreenCaptureEnabled(data.formId);
            messageData.provisions.screenCapture = checkProvision("screenCapture") || checkProvision("screenCaptureEnabled");
            messageData.displayType = KAMPYLE_DATA.getDisplayType(formData);
            var onsiteConfiguration = MDIGITAL.CONFIGURATION.getOnsiteConfiguration();
            Object.assign(messageData, {
                submitUrlPrefix: onsiteConfiguration.submitUrlPrefix,
                submitUrlSuffix: onsiteConfiguration.submitUrlSuffix,
                submitUrlWithBackendUUID: onsiteConfiguration.submitUrlWithBackendUUID,
                globalResourcesUrl: onsiteConfiguration.globalResourcesUrl,
                versionedResourcesUrl: formData.versionedResourcesUrl,
            });
            if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.SERVER_BASED_TARGETING)) {
                messageData.endUserIdentifier = getUserIdentifierVal();
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_initUserIdentifierOnExtraData", { hasIdentifierValue: messageData.endUserIdentifier !== null });
            }
            var pendingExtraData = KAMPYLE_DATA.flushFormExtraData(data.formId);
            if (pendingExtraData) {
                for (var extra in pendingExtraData) {
                    if (pendingExtraData.hasOwnProperty(extra)) {
                        messageData[extra] = pendingExtraData[extra];
                    }
                }
            }
            if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.FORM_TEMPLATE_DATA_SEPERATION)) {
                var callbackFunction = function (jsonData) {
                    messageData = Object.assign({}, messageData, { formData: jsonData });
                    if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.LOCALIZED_FORMS)) {
                        messageData.formLanguage = MDIGITAL.LOCALIZATION.getFormLanguage(data.formId) || null;
                    }
                    targetWindow.postMessage(JSON.stringify(messageData), origin);
                };
                var onError = function (error) {
                    console.error(error);
                };
                KAMPYLE_DATA.fetchFormJsonData({ formId: formData.formId, callback: callbackFunction, onError: onError }, true);
            } else {
                targetWindow.postMessage(JSON.stringify(messageData), origin);
            }
        }
        KAMPYLE_EVENT_DISPATCHER.trigger("neb_formShown", { formId: data.formId, feedbackCorrelationUUID: data.feedbackCorrelationUUID });
    }
    function handleVersion(eventName, data) {
        data = data || {};
        KAMPYLE_DATA.setMemoryData("NEB_FORM_VERSION", data.formVersion || 0);
    }
    function isAnyInviteShown() {
        var allFormStates = KAMPYLE_DATA.getMemoryData("formsState") || {};
        for (var formId in allFormStates) {
            if (allFormStates.hasOwnProperty(formId)) {
                if (allFormStates[formId].inviteShown) {
                    return true;
                }
            }
        }
        return false;
    }
    function isAnyOtherFormAlreadyShown(currentFormId, shouldIgnoreSkipInvitation) {
        var allFormStates = KAMPYLE_DATA.getMemoryData("formsState") || {};
        for (var formId in allFormStates) {
            if (allFormStates.hasOwnProperty(formId)) {
                var shouldIgnoreForm = !MDIGITAL.FORM_STATE.isFormShown(formId) && ((currentFormId && currentFormId == formId) || (shouldIgnoreSkipInvitation && KAMPYLE_DATA.isSkipInvitation(formId)));
                if ((allFormStates[formId].shown || allFormStates[formId].shouldBeShown) && !KAMPYLE_DATA.isEmbeddedDisplayType(formId) && !shouldIgnoreForm) {
                    return true;
                }
            }
        }
        return false;
    }
    function getSafeCustomParamVal(currParam) {
        currParam = currParam || {};
        var currParamVal = currParam.value;
        var currParamType = currParam.type || "";
        if (currParamVal === undefined) {
            currParamVal = MDIGITAL.CUSTOM_PARAMETERS.fetchCPValue(currParam);
        }
        if (currParamVal !== null) {
            switch (currParamType.toLowerCase()) {
                case "datetime":
                    if (typeof currParamVal === "string") {
                        currParamVal = parseInt(currParamVal) || null;
                    } else if (!(currParamVal instanceof Date) && (!currParamVal.getTime || isNaN(currParamVal.getTime()))) {
                        currParamVal = null;
                    } else {
                        currParamVal = currParamVal.getTime();
                    }
                    break;
                case "number":
                    currParamVal = KAMPYLE_UTILS.getNumericValue(currParamVal);
                    break;
                case "text":
                    if (typeof currParamVal !== "string") {
                        currParamVal = null;
                    }
                    break;
                case "boolean":
                    if (currParamVal === "true") {
                        currParamVal = true;
                    } else if (currParamVal === "false") {
                        currParamVal = false;
                    }
                    if (typeof currParamVal !== "boolean") {
                        currParamVal = null;
                    }
                    break;
                default:
                    currParamVal = null;
                    console.error("Invalid custom parameter type " + currParamType);
                    break;
            }
        }
        return currParamVal;
    }
    function isPreloadConfigured() {
        var data = MDIGITAL.CONFIGURATION.getOnsiteConfiguration();
        return !!data && data.isFormsPreloaded !== "false" && data.isFormsPreloaded !== false;
    }
    function addToSessionCount() {
        var kampyleUserSessionsCount = KAMPYLE_DATA.getData("kampyleUserSessionsCount");
        kampyleUserSessionsCount = Number(kampyleUserSessionsCount) || 0;
        KAMPYLE_DATA.setData("kampyleUserSessionsCount", ++kampyleUserSessionsCount);
    }
    function handleHashChanged() {
        if (KAMPYLE_DATA.isFeatureEnabled("SPA")) {
            KAMPYLE_ONSITE_SDK.updatePageView();
        }
    }
    function kampyleButtonClicked(formData) {
        formData = formData || {};
        KAMPYLE_EVENT_DISPATCHER.trigger("neb_buttonClicked", { formId: formData.formId });
    }
    function getTimeInSession() {
        var sessionStartTimestamp = Number(KAMPYLE_DATA.getData("kampyleUserSession"));
        return !!sessionStartTimestamp ? Math.floor(KAMPYLE_UTILS.getTimeDiff(sessionStartTimestamp, KAMPYLE_CONSTANT.TIME_FORMATS.SECONDS)) : 0;
    }
    function getTimeOnPage() {
        var timeOnPage = Number(KAMPYLE_DATA.getData("kampylePageLoadedTimestamp"));
        return !!timeOnPage ? Math.floor(KAMPYLE_UTILS.getTimeDiff(timeOnPage, KAMPYLE_CONSTANT.TIME_FORMATS.SECONDS)) : 0;
    }
    function getLastDeclineSubmit(key) {
        var date = Number(KAMPYLE_DATA.getData(key));
        return !!date ? KAMPYLE_UTILS.getTimeDiff(date, KAMPYLE_CONSTANT.TIME_FORMATS.DAYS) : null;
    }
    function prepareInviteTriggeringData(eventName, data) {
        var deviceName = (KAMPYLE_DATA.getMemoryData("kampyleDevice") || KAMPYLE_CONSTANT.DEVICES.DESKTOP).toLowerCase();
        var formData = KAMPYLE_DATA.getFormData(data.formId);
        var inviteTriggeringData = {
            desktop: deviceName === KAMPYLE_CONSTANT.DEVICES.DESKTOP,
            mobile: deviceName === KAMPYLE_CONSTANT.DEVICES.MOBILE,
            tablet: deviceName === KAMPYLE_CONSTANT.DEVICES.TABLET,
            abandon: !!KAMPYLE_DATA.getMemoryData("targetingState.abandon"),
            time_in_session: getTimeInSession(),
            time_on_page: getTimeOnPage(),
            excluded_urls: KAMPYLE_UTILS.getNestedPropertyValue(formData, "urlRules.exclusionUrl.rule"),
            included_urls: KAMPYLE_UTILS.getNestedPropertyValue(formData, "urlRules.inclusionUrl.rule"),
            number_of_visits: Number(KAMPYLE_DATA.getData("kampyleUserSessionsCount")) || 1,
            last_declined: getLastDeclineSubmit("DECLINED_DATE"),
            last_feedback: getLastDeclineSubmit("SUBMITTED_DATE"),
            percentage: KAMPYLE_TARGETING.getUserPercentile(data.formId),
        };
        KAMPYLE_DATA.setMemoryData("invitationTriggeringData", inviteTriggeringData);
    }
    function isContentPayloadEnabled() {
        return (
            KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.EVENT_INCLUDE_FEEDBACK_CONTENT) ||
            KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.EXPOSE_SELECTION_QUESTIONS) ||
            KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.EXPOSE_VERBATIM_QUESTIONS)
        );
    }
    return {
        increasePageViewCounter: increasePageViewCounter,
        subscribeToCustomEvents: subscribeToCustomEvents,
        subscribeToPageEvents: subscribeToPageEvents,
        createSession: createSession,
        updateTargeting: updateTargeting,
        checkProvision: checkProvision,
        getAllProvisions: getAllProvisions,
        onSyncIdentifierDataSuccess: onSyncIdentifierDataSuccess,
        shouldRenderForm: shouldRenderForm,
        addScreenCaptureData: addScreenCaptureData,
        sendFormExtraData: sendFormExtraData,
        handleVersion: handleVersion,
        showPreviewForm: showPreviewForm,
        updatePreviewIframeStyle: updatePreviewIframeStyle,
        validateFormContract: validateFormContract,
        getTriggerTypeByEvent: getTriggerTypeByEvent,
        prepareInviteTriggeringData: prepareInviteTriggeringData,
        loadScreenCaptureApi: loadScreenCaptureApi,
        handleInviteLoaded: handleInviteLoaded,
        sendInviteInitialData: sendInviteInitialData,
        checkDevice: checkDevice,
        shouldSyncIdentifier: shouldSyncIdentifier,
        prepareJsonData: prepareJsonData,
        shouldSkipFetchingFormData: shouldSkipFetchingFormData,
        getTimeInSession: getTimeInSession,
        getTimeOnPage: getTimeOnPage,
        isReferrerDifferentThanHost: isReferrerDifferentThanHost,
        setQuarantineDeclinedDate: setQuarantineDeclinedDate,
        setQuarantineSubmittedDate: setQuarantineSubmittedDate,
        handleFormClosed: handleFormClosed,
        handleFeedbackSubmitted: handleFeedbackSubmitted,
        handleInviteDeclined: handleInviteDeclined,
        init: init,
        startCheckingTargeting: startCheckingTargeting,
        isAnyOtherFormAlreadyShown: isAnyOtherFormAlreadyShown,
        isAnyInviteShown: isAnyInviteShown,
        getSafeCustomParamVal: getSafeCustomParamVal,
        isPreloadConfigured: isPreloadConfigured,
        kampyleButtonClicked: kampyleButtonClicked,
        loadMultipileForms: loadMultipileForms,
        routeToForm: routeToForm,
        updateIdentifierDataIntegerIfNecessary: updateIdentifierDataIntegerIfNecessary,
        syncIdentifierData: syncIdentifierData,
        getUserIdentifierVal: getUserIdentifierVal,
        handleFormStateUpdated: handleFormStateUpdated,
        hasApplicationLoadingFailed: hasApplicationLoadingFailed,
        isJsonDataLoaded: isJsonDataLoaded,
        handleInviteApplicationUpdated: handleInviteApplicationUpdated,
        isFormLoaded: isFormLoaded,
        isContentPayloadEnabled: isContentPayloadEnabled,
    };
})();
window.KAMPYLE_DATA = (function () {
    var dataJson;
    var _memory;
    var TargetingMapping = { abandon: "abandon", percentage: "kampyleInvitePercentageUsers", timeInSession: "kampyleTimeInSession", timeOnPage: "kampyleTimeOnPage", deviceTypes: "devicetypes", pageEvents: "pageElementEvent" };
    var featureToPathMapping = { GTM: "isGoogleAnalyticsClientGTM", WCAG: "isWCAG", SPA: "isSpa", MANUALLY_INVITE_TARGETING: "isManuallyInviteTargeting", CUSTOM_CSS_UPLOAD: "customCssUpload" };
    var supportedFeatures = [KAMPYLE_CONSTANT.FEATURE_FLAGS.EXEMPT_BUTTON_FORMS_FROM_QUARANTINE, KAMPYLE_CONSTANT.FEATURE_FLAGS.EXEMPT_EMBEDDED_FORMS_FROM_QUARANTINE, KAMPYLE_CONSTANT.FEATURE_FLAGS.EXEMPT_CODE_FORMS_FROM_QUARANTINE];
    var init = function () {
        dataJson = MDIGITAL.CONFIGURATION.getOnsiteConfiguration() || {};
        _memory = {};
    };
    function getNestedConfigurationProperty(propertyName) {
        var configuration = KAMPYLE_DATA.getMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.DATA_JSON);
        return KAMPYLE_UTILS.getNestedPropertyValue(configuration, propertyName);
    }
    function getShownFormId() {
        var allFormStates = KAMPYLE_DATA.getMemoryData("formsState") || {};
        for (var formId in allFormStates) {
            if (allFormStates.hasOwnProperty(formId)) {
                if (allFormStates[formId].shouldBeShown) {
                    return formId;
                }
            }
        }
        return false;
    }
    function initOnsiteDefaultState() {
        var formsState = {};
        var allData = MDIGITAL.CONFIGURATION.getOnsiteConfiguration() || {};
        var allForms = allData.formNodes || [];
        var len = allForms.length;
        var curr;
        for (var i = 0; i < len; i++) {
            curr = allForms[i];
            if (curr) {
                formsState[curr.formId] = {
                    loading: false,
                    loaded: null,
                    shouldBeShown: false,
                    shown: false,
                    inviteLoaded: null,
                    inviteShown: false,
                    jsonFailed: false,
                    applicationFailed: false,
                    isCurrentlySubmitted: false,
                    targeting: { pageTargeting: null, behavioralTargeting: [], quarantineTargeting: [] },
                };
            }
        }
        setMemoryData("formsState", formsState);
        setMemoryData("hostingElementsHeights", {});
        KAMPYLE_DATA.setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.IS_BUTTON_CONTAINER_CREATED, false);
        KAMPYLE_DATA.clearAllTimeoutHandlers();
        KAMPYLE_DATA.clearAllDOMEventsHandlers();
    }
    function clearAllTimeoutHandlers() {
        var allHandlers = getMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.TIMEOUT_HANDLERS);
        for (var handlerKey in allHandlers) {
            window.clearTimeout(allHandlers[handlerKey]);
        }
        setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.TIMEOUT_HANDLERS, {});
    }
    function setTimeoutHandler(key, timeoutHandler) {
        setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.TIMEOUT_HANDLERS + "." + key, timeoutHandler);
    }
    function getTimeoutHandler(key) {
        return getMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.TIMEOUT_HANDLERS + "." + key);
    }
    function setDOMEventHandler(key, eventName, eventHandler, targetElement) {
        var dataValue = { eventName: eventName, eventHandler: eventHandler, targetElement: targetElement };
        setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.DOM_EVENT_HANDLERS + "." + key, dataValue);
    }
    function getDOMEventHandler(key) {
        return getMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.DOM_EVENT_HANDLERS + "." + key);
    }
    function clearAllDOMEventsHandlers() {
        var handlers = getMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.DOM_EVENT_HANDLERS) || {};
        for (var key in handlers) {
            var eventName = handlers[key].eventName;
            var eventHandler = handlers[key].eventHandler;
            var targetElement = handlers[key].targetElement || document;
            targetElement.removeEventListener(eventName, eventHandler);
        }
        deleteMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.DOM_EVENT_HANDLERS);
    }
    function isFeatureEnabled(featureName) {
        var path = featureToPathMapping[featureName];
        if (path == null && supportedFeatures.indexOf(featureName) !== -1) {
            path = featureName;
        }
        return !!path && !!KAMPYLE_UTILS.getNestedPropertyValue(dataJson, path);
    }
    function getData(dataName) {
        try {
            if (KAMPYLE_DATA.getPropertySharedSubdomain()) {
                return KAMPYLE_UTILS.kampyleGetCookie(KAMPYLE_UTILS.TOP_LEVEL_DOMAIN_COOKIE_PREFIX + dataName);
            }
            return localStorage[dataName] || KAMPYLE_UTILS.kampyleGetCookie(dataName);
        } catch (e) {
            return KAMPYLE_UTILS.kampyleGetCookie(dataName);
        }
    }
    function getMemoryData(dataName) {
        dataName = dataName || "";
        return KAMPYLE_UTILS.getNestedPropertyValue(_memory, dataName);
    }
    function setMemoryData(dataName, dataValue) {
        KAMPYLE_UTILS.setNestedPropertyValue(_memory, dataName, dataValue);
    }
    function deleteMemoryData(dataName) {
        delete (_memory || {})[dataName];
    }
    function setData(dataName, dataValue, expriration) {
        if (!KAMPYLE_DATA.getPropertySharedSubdomain()) {
            try {
                localStorage[dataName] = dataValue;
            } catch (e) {}
        }
        KAMPYLE_UTILS.kampyleSetCookie(dataName, dataValue, expriration || getCookieExpiration(), KAMPYLE_DATA.getPropertySharedSubdomain());
        return true;
    }
    var deleteData = function (dataName) {
        var propertySharedSubdomain = KAMPYLE_DATA.getPropertySharedSubdomain();
        if (propertySharedSubdomain) {
            KAMPYLE_UTILS.kampyleDeleteCookie(KAMPYLE_UTILS.TOP_LEVEL_DOMAIN_COOKIE_PREFIX + dataName, propertySharedSubdomain);
            return;
        }
        try {
            if (localStorage[dataName] !== undefined) {
                delete localStorage[dataName];
            }
        } catch (e) {}
        KAMPYLE_UTILS.kampyleDeleteCookie(dataName);
    };
    function getFormData(formId) {
        var allForms = getAllForms();
        var len = allForms.length,
            curr;
        for (var i = 0; i < len; i++) {
            curr = allForms[i];
            if (parseInt(formId) === parseInt(curr.formId)) {
                return curr;
            }
        }
        return null;
    }
    function getMemory() {
        return _memory;
    }
    function getFormState(formId) {
        formId = formId || "";
        return getMemoryData("formsState." + formId) || null;
    }
    function setFormState(formId, data) {
        data = data || {};
        var allFormState = getMemoryData("formsState") || {};
        allFormState[formId] = allFormState[formId] || {};
        for (var prop in data) {
            if (typeof allFormState[formId][prop] === "object" && allFormState[formId][prop] !== null) {
                Object.assign(allFormState[formId][prop], data[prop]);
            } else {
                allFormState[formId][prop] = data[prop];
            }
        }
        setMemoryData("formsState", allFormState);
    }
    function getAllForms() {
        var allData = MDIGITAL.CONFIGURATION.getOnsiteConfiguration() || {};
        var allForms = allData.formNodes || [];
        return allForms;
    }
    function getInegrations() {
        var allData = MDIGITAL.CONFIGURATION.getOnsiteConfiguration() || {};
        return allData.integrations || {};
    }
    function getInviteData(formId) {
        var formData = getFormData(formId);
        return !!formData ? formData.inviteData : null;
    }
    function isNewMobileInvitation() {
        var hasProvision = KAMPYLE_FUNC.checkProvision("mobileInvitationLayout");
        var kampyleDevice = KAMPYLE_DATA.getMemoryData("kampyleDevice");
        return !!hasProvision && kampyleDevice !== "desktop";
    }
    function isSkipInvitation(formId) {
        var formData = getFormData(formId) || {};
        var isSkipInvitation = KAMPYLE_UTILS.getNestedPropertyValue(formData, "inviteData.skipInvitation");
        return isSkipInvitation && isSkipInvitation !== "false";
    }
    function isFixedSize(formId) {
        var formData = getFormData(formId) || {};
        return formData.isFixedSize === true || formData.isFixedSize === "true";
    }
    function isCustomHtmlAndFixedSizeForm(formId) {
        var customHtmlForm = KAMPYLE_DATA.isCustomHtmlForm(formId);
        var hasProvision = KAMPYLE_FUNC.checkProvision("dynamicModalSizeInCustomHtml");
        return customHtmlForm && (!hasProvision || (hasProvision && isFixedSize(formId)));
    }
    function getDisplayType(formData) {
        var kampyleDevice = KAMPYLE_DATA.getMemoryData("kampyleDevice");
        var displayType = KAMPYLE_UTILS.getNestedPropertyValue(formData, "formDisplay.displayType");
        if (kampyleDevice !== KAMPYLE_CONSTANT.DEVICES.DESKTOP) {
            return displayType === KAMPYLE_CONSTANT.DISPLAY_TYPES.EMBEDDED ? KAMPYLE_CONSTANT.DISPLAY_TYPES.EMBEDDED : KAMPYLE_CONSTANT.DISPLAY_TYPES.LIGHTBOX;
        } else {
            return displayType || KAMPYLE_CONSTANT.DISPLAY_TYPES.LIGHTBOX;
        }
    }
    function saveFormExtraData(formId, extraData) {
        extraData = extraData || {};
        var oldExtraData = (getFormState(formId) || {}).pendingExtraData || {};
        extraData = Object.assign(oldExtraData, extraData);
        setFormState(formId, { pendingExtraData: extraData });
    }
    function flushFormExtraData(formId) {
        var formState = getFormState(formId) || {};
        var extraData = {};
        if (formState && formState.pendingExtraData) {
            extraData = formState.pendingExtraData;
            delete formState.pendingExtraData;
        }
        return extraData;
    }
    function isCustomHtmlForm(formId) {
        var formData = getFormData(formId) || {};
        var isCustomHtml = KAMPYLE_UTILS.getUrlParam("isCustomHtml");
        return formData.isCustomHtmlEnabled === true || formData.isCustomHtmlEnabled === "true" || isCustomHtml === true || isCustomHtml === "true";
    }
    function getCookieExpiration() {
        return KAMPYLE_UTILS.getNestedPropertyValue(dataJson, "cookieExpirationTime") || KAMPYLE_CONSTANT.COOKIE_EXPIRATION;
    }
    function getTargetingData(formId, targetingName) {
        if (!formId || !targetingName || !TargetingMapping[targetingName]) {
            return null;
        }
        var selectedForm = getFormData(formId) || {};
        var targetingRealName = TargetingMapping[targetingName];
        return KAMPYLE_UTILS.getNestedPropertyValue(selectedForm, "onSiteData." + targetingRealName);
    }
    function getFormVersion(formId) {
        var formData = KAMPYLE_DATA.getFormData(formId);
        return Number((formData || {}).formVersion) || 0;
    }
    function getPropertyId() {
        return MDIGITAL.CONFIGURATION.getOnsiteConfiguration().websiteId || null;
    }
    function isMobileDynamicSizing(formId) {
        var device = KAMPYLE_DATA.getMemoryData("kampyleDevice");
        var requiredVersion = KAMPYLE_CONSTANT.FEATURE_VERSIONS.MOBILE_DYNAMIC_SIZING;
        formId = formId || KAMPYLE_DATA.getMemoryData("currentFormId");
        var isCustomHtml = KAMPYLE_DATA.isCustomHtmlForm(formId);
        var isProvisioned = (isCustomHtml && KAMPYLE_FUNC.checkProvision("mobileWebDynamicFormSize")) || (!isCustomHtml && KAMPYLE_FUNC.checkProvision("mobileWebDynamicFormSizeInFormBuilder"));
        return isProvisioned && device && device !== "desktop" && KAMPYLE_DATA.getFormVersion(formId) >= requiredVersion;
    }
    function isMobile() {
        var device = KAMPYLE_DATA.getMemoryData("kampyleDevice");
        return device && device !== "desktop";
    }
    function getServerBasedTargetingPrefix() {
        return getNestedConfigurationProperty("sbtServerDomain");
    }
    function getServerBasedTargetingEnv() {
        return getNestedConfigurationProperty("sbtEnvPrefix");
    }
    function getPropertySharedSubdomain() {
        var sharedSubdomain = getNestedConfigurationProperty("sharedSubdomain");
        return sharedSubdomain && KAMPYLE_UTILS.isHostMatchesSubdomain(window.location.host, sharedSubdomain) ? sharedSubdomain : null;
    }
    function getUserIdentifier() {
        var formNodes = getNestedConfigurationProperty("formNodes") || [];
        for (var i = 0; i < formNodes.length; i++) {
            var identifierCp =
                (formNodes[i].customParams || []).find(function (cp) {
                    return cp.is_identifier.toLowerCase() === "true";
                }) || null;
            if (identifierCp !== null) {
                return identifierCp;
            }
        }
        return null;
    }
    function isPopupDisplayType(formId) {
        var formData = getFormData(formId);
        return getDisplayType(formData) === KAMPYLE_CONSTANT.DISPLAY_TYPES.POPUP;
    }
    function isEmbeddedDisplayType(formId) {
        var formData = getFormData(formId);
        return getDisplayType(formData) === KAMPYLE_CONSTANT.DISPLAY_TYPES.EMBEDDED;
    }
    function isLightBoxDisplayType(formId) {
        var formData = getFormData(formId);
        return getDisplayType(formData) === KAMPYLE_CONSTANT.DISPLAY_TYPES.LIGHTBOX;
    }
    function getMemoryJsonKey(formId, isInvite, dataKey) {
        var isLocalizationOn = KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.LOCALIZED_FORMS);
        var jsonDataKey;
        if (!dataKey) {
            jsonDataKey = (isInvite ? KAMPYLE_CONSTANT.INVITE_JSON_DATA_KEY_PREFIX : KAMPYLE_CONSTANT.FORM_JSON_DATA_KEY_PREFIX) + formId;
        } else {
            jsonDataKey = isInvite ? dataKey + formId + "_invite" : dataKey + formId;
        }
        if (isLocalizationOn) {
            jsonDataKey = jsonDataKey + "_" + MDIGITAL.LOCALIZATION.getFormLanguage(formId);
        }
        return jsonDataKey;
    }
    function getMemoryJsonNestedPropertyValue(formId, propertyName, isInvite) {
        var key = KAMPYLE_DATA.getMemoryJsonKey(formId, isInvite);
        var data = KAMPYLE_DATA.getMemoryData(key);
        return data != null ? KAMPYLE_UTILS.getNestedPropertyValue(data, propertyName) : null;
    }
    function localizeUrl(formId, url) {
        var langCode = (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.LOCALIZED_FORMS) && MDIGITAL.LOCALIZATION.getFormLanguage(formId)) || KAMPYLE_CONSTANT.LOCALIZED_FORM_DEFAULT_REPLACE_VALUE;
        return url.replace("###LANGUAGE_CODE###", langCode);
    }
    function resetAllFormsLanguagesCode() {
        var allForms = KAMPYLE_DATA.getAllForms();
        for (var i = 0; i < allForms.length; i++) {
            var currForm = allForms[i];
            MDIGITAL.LOCALIZATION.detectAndSetFormLanguage(currForm);
        }
    }
    function getDataJsonUrl(formId, isInviteJson) {
        var formData = KAMPYLE_DATA.getFormData(formId);
        var jsonDataUrl = KAMPYLE_UTILS.getNestedPropertyValue(formData, isInviteJson ? "inviteData.inviteDataUrl" : "formDataUrl");
        if (!jsonDataUrl) {
            return null;
        }
        return KAMPYLE_DATA.localizeUrl(formId, jsonDataUrl);
    }
    function fetchFormJsonData(obj, isSecondCall) {
        var jsonDataMemoryKey = KAMPYLE_DATA.getMemoryJsonKey(obj.formId, obj.isInvite);
        var jsonData = KAMPYLE_DATA.getMemoryData(jsonDataMemoryKey);
        var url = KAMPYLE_DATA.getDataJsonUrl(obj.formId, obj.isInvite);
        if (jsonData) {
            obj.fetchingDataInProgressKey && KAMPYLE_DATA.setMemoryData(obj.fetchingDataInProgressKey, false);
            return typeof obj.callback === "function" && obj.callback(jsonData);
        }
        if (!url) {
            var error = new Error("Failed to get JSON, jsonDataUrl is missing.");
            return typeof obj.onError === "function" && obj.onError(error);
        }
        KAMPYLE_UTILS.httpRequest(
            KAMPYLE_CONSTANT.HTTP_METHODS.GET,
            url,
            null,
            function (data) {
                if (isSecondCall) {
                    var warnMessage = "second http request have been made to the url: " + url;
                    KAMPYLE_EVENT_DISPATCHER.trigger("MDigital_warning", { message: warnMessage });
                }
                if (!data) {
                    var error = new Error("Invalid form json data. Data: " + JSON.stringify(data));
                    KAMPYLE_COOLADATA.triggerCooladataEventDispatcherError(error);
                    typeof obj.onError === "function" && obj.onError(error);
                } else {
                    KAMPYLE_DATA.setMemoryData(jsonDataMemoryKey, data);
                    obj.fetchingDataInProgressKey && KAMPYLE_DATA.setMemoryData(obj.fetchingDataInProgressKey, false);
                    typeof obj.callback === "function" && obj.callback(data);
                }
            },
            function (error) {
                KAMPYLE_COOLADATA.triggerCooladataEventDispatcherError({ message: "Failed to fetch JSON data. Error: " + JSON.stringify(error) });
                typeof obj.onError === "function" && obj.onError(error);
            }
        );
    }
    function getFormTriggerType(formId) {
        var formType = KAMPYLE_UTILS.getNestedPropertyValue(KAMPYLE_DATA.getFormData(formId), "formType");
        return KAMPYLE_CONSTANT.FORM_TRIGGER_TYPES_MAP[formType] ? formType : null;
    }
    function isFormOfType(formId, formType) {
        var dataFormType = getFormTriggerType(formId);
        return !!dataFormType && dataFormType === formType;
    }
    function getFormIframeId(formId) {
        var formData = KAMPYLE_DATA.getFormData(formId);
        if (formData == null) return null;
        if (formData.formType === KAMPYLE_CONSTANT.FORM_TYPES.EMBEDDED) {
            return KAMPYLE_CONSTANT.IFRAME_SETTINGS.EMBEDDED.IFRAME_ID_PREFIX + formId;
        } else {
            var displayType = getDisplayType(formData);
            if (displayType === KAMPYLE_CONSTANT.DISPLAY_TYPES.LIGHTBOX) {
                return KAMPYLE_CONSTANT.IFRAME_SETTINGS.LIGHTBOX.IFRAME_ID_PREFIX + formId;
            } else if (displayType === KAMPYLE_CONSTANT.DISPLAY_TYPES.ANIMATION) {
                return KAMPYLE_CONSTANT.IFRAME_SETTINGS.ANIMATION.IFRAME_ID + formId;
            } else {
                return null;
            }
        }
    }
    function isV2Form(formId) {
        var formData = KAMPYLE_DATA.getFormData(formId);
        if (!formId || !formData) {
            return;
        }
        return KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.LIVE_FORM_V2) && formData.urlVersion === "V2";
    }
    return {
        init: init,
        isFeatureEnabled: isFeatureEnabled,
        getData: getData,
        setData: setData,
        deleteData: deleteData,
        getAllForms: getAllForms,
        getInegrations: getInegrations,
        getFormData: getFormData,
        getMemoryData: getMemoryData,
        getTargetingData: getTargetingData,
        setMemoryData: setMemoryData,
        getShownFormId: getShownFormId,
        getFormState: getFormState,
        setFormState: setFormState,
        getInviteData: getInviteData,
        getDisplayType: getDisplayType,
        saveFormExtraData: saveFormExtraData,
        flushFormExtraData: flushFormExtraData,
        isCustomHtmlForm: isCustomHtmlForm,
        getCookieExpiration: getCookieExpiration,
        isNewMobileInvitation: isNewMobileInvitation,
        isCustomHtmlAndFixedSizeForm: isCustomHtmlAndFixedSizeForm,
        deleteMemoryData: deleteMemoryData,
        getFormVersion: getFormVersion,
        isMobileDynamicSizing: isMobileDynamicSizing,
        getPropertySharedSubdomain: getPropertySharedSubdomain,
        getUserIdentifier: getUserIdentifier,
        getServerBasedTargetingPrefix: getServerBasedTargetingPrefix,
        getServerBasedTargetingEnv: getServerBasedTargetingEnv,
        isPopupDisplayType: isPopupDisplayType,
        isEmbeddedDisplayType: isEmbeddedDisplayType,
        isLightBoxDisplayType: isLightBoxDisplayType,
        fetchFormJsonData: fetchFormJsonData,
        getFormTriggerType: getFormTriggerType,
        getPropertyId: getPropertyId,
        isMobile: isMobile,
        isSkipInvitation: isSkipInvitation,
        getFormIframeId: getFormIframeId,
        isFormOfType: isFormOfType,
        getMemoryJsonNestedPropertyValue: getMemoryJsonNestedPropertyValue,
        resetAllFormsLanguagesCode: resetAllFormsLanguagesCode,
        getMemoryJsonKey: getMemoryJsonKey,
        setTimeoutHandler: setTimeoutHandler,
        getTimeoutHandler: getTimeoutHandler,
        isV2Form: isV2Form,
        setDOMEventHandler: setDOMEventHandler,
        getDOMEventHandler: getDOMEventHandler,
        clearAllDOMEventsHandlers: clearAllDOMEventsHandlers,
        localizeUrl: localizeUrl,
        getMemory: getMemory,
        initOnsiteDefaultState: initOnsiteDefaultState,
        getDataJsonUrl: getDataJsonUrl,
        clearAllTimeoutHandlers: clearAllTimeoutHandlers,
        getNestedConfigurationProperty: getNestedConfigurationProperty,
    };
})();
window.KAMPYLE_TARGETING = (function (window, document) {
    var QUARANTINE_DEFAULT_TEXTS = { DECLINED_DATE: "The user did not decline", SUBMITTED_DATE: "The user did not submit" };
    function init() {
        var eventMapping = { neb_targetingInit: [initTargeting], MDigital_manuallyInviteTargeting: [handleFormsTargeting], neb_initButton: [handleButton] };
        KAMPYLE_EVENT_DISPATCHER.subscribeMany(eventMapping);
        KAMPYLE_DATA.setMemoryData("targetingState", {});
    }
    function isDataValid(days, cookieName) {
        var checkingDate = Number(KAMPYLE_DATA.getData(cookieName));
        days = Number(days);
        if (!checkingDate || !days) {
            return false;
        }
        var msInOneDay = 1000 * 60 * 60 * 24;
        return checkingDate + msInOneDay * days > KAMPYLE_UTILS.getCurrentTimestamp();
    }
    function handleButton(eventName, data) {
        data = data || {};
        var formData = KAMPYLE_DATA.getFormData(data.formId);
        if (!formData) {
            return false;
        }
        var kampyleDevice = KAMPYLE_DATA.getMemoryData("kampyleDevice");
        if (kampyleDevice === KAMPYLE_CONSTANT.DEVICES.MOBILE || kampyleDevice === KAMPYLE_CONSTANT.DEVICES.TABLET) {
            if (KAMPYLE_FUNC.isPreloadConfigured()) {
                KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.NEB_LOAD_FORM, { formId: data.formId });
            }
        }
        KAMPYLE_DATA.setFormState(data.formId, { loaded: null });
        KAMPYLE_DATA.setMemoryData("buttonFormId", data.formId);
        KAMPYLE_EVENT_DISPATCHER.trigger("neb_showButton", { formId: data.formId });
        KAMPYLE_DATA.setMemoryData("isButtonShown", true);
        return true;
    }
    function getTextByQuarentine(quarentineKey) {
        if (KAMPYLE_DATA.getData(quarentineKey)) {
            return new Date(parseInt(KAMPYLE_DATA.getData(quarentineKey)));
        } else {
            return QUARANTINE_DEFAULT_TEXTS[quarentineKey];
        }
    }
    function isShowInvite(formData) {
        KAMPYLE_UTILS.sendMessageToIframe("kampyleInvite", { action: KAMPYLE_CONSTANT.EVENTS.MDIGITAL_VALIDATE_ORIGIN });
        var currentFormId = KAMPYLE_DATA.getMemoryData("currentInviteFormId");
        formData = formData || KAMPYLE_DATA.getFormData(currentFormId);
        if (!formData || KAMPYLE_DATA.getMemoryData("isInvitationShouldBeIgnored")) {
            return false;
        }
        var isSkipInvitation = KAMPYLE_UTILS.getNestedPropertyValue(formData, "inviteData.skipInvitation");
        var targetingState = KAMPYLE_DATA.getMemoryData("targetingState");
        for (var index in targetingState) {
            if (targetingState[index] !== true) {
                return false;
            }
        }
        var shouldDisableIntercept = KAMPYLE_TARGETING.shouldDisableIntercept(formData);
        KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_BEHAVIORAL_TARGETING_PHASE_ENDED, formData);
        if (shouldDisableIntercept) {
            return false;
        }
        var isQuarantinePassed = isQuarantinePhasePassed(formData);
        KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_QUARANTINED_SURVEY_PHASE_ENDED, formData);
        if (!isQuarantinePassed) {
            return false;
        }
        KAMPYLE_DATA.setData("kampyleInvitePresented", true);
        KAMPYLE_UTILS.isTruthy(isSkipInvitation) ? handleSkippedInvitaion(formData) : KAMPYLE_TARGETING.handleNotSkippedInvitaion(formData);
        return true;
    }
    function isQuarantinePhasePassed(formData) {
        var isCheckQuarentinePassed = checkQuarantine(formData);
        var isFormIsShown = KAMPYLE_DATA.getMemoryData("formIsShown") === true;
        var isInviteMoreThanOncePerSession = KAMPYLE_UTILS.isTrue(KAMPYLE_UTILS.getNestedPropertyValue(formData, "onSiteData.kampyleInvitePerSession.inviteOncePerSession"));
        var isInviteAlreadyShownInSession = !isInviteMoreThanOncePerSession && KAMPYLE_UTILS.isTrue(KAMPYLE_DATA.getData("kampyleInvitePresented"));
        KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
            formId: formData.formId,
            targetingRule: KAMPYLE_CONSTANT.TARGETING_RULES.INVITE_IF_ANY_INVITE_ALREADY_SHOWN_PER_SESSION,
            formTriggerType: KAMPYLE_DATA.getFormTriggerType(formData.formId),
            targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.QUARANTINE_TARGETING,
            isPassed: !isInviteAlreadyShownInSession,
            expected: "Display Invite " + (isInviteMoreThanOncePerSession ? "more than once per session" : "once per session"),
            actual: !isInviteAlreadyShownInSession,
        });
        var isSurveySubmittedInSession = false;
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.EXEMPT_FORMS_FROM_QUARANTINE)) {
            isSurveySubmittedInSession = !isInviteMoreThanOncePerSession && KAMPYLE_UTILS.isTrue(KAMPYLE_DATA.getData(KAMPYLE_CONSTANT.SESSION_DATA_FIELDS.IS_SURVEY_SUBMITTED_IN_SESSION));
            KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
                formId: formData.formId,
                targetingRule: KAMPYLE_CONSTANT.TARGETING_RULES.INVITE_IF_ANY_SURVEY_ALREADY_SUBMITTED_PER_SESSION,
                formTriggerType: KAMPYLE_DATA.getFormTriggerType(formData.formId),
                targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.QUARANTINE_TARGETING,
                isPassed: !isSurveySubmittedInSession,
                expected: "Display Invite " + (isInviteMoreThanOncePerSession ? "more than once per session" : "once per session"),
                actual: !isSurveySubmittedInSession,
            });
        }
        return !isCheckQuarentinePassed && !isFormIsShown && !isInviteAlreadyShownInSession && !isSurveySubmittedInSession;
    }
    function isUbtFailed(formData) {
        var isUbtCheckFailed =
            KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.SERVER_BASED_TARGETING) &&
            KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.DO_NOT_SURVEY_ON_UBT_NETWORK_FAIL) &&
            !KAMPYLE_DATA.getMemoryData("isGuest") &&
            !KAMPYLE_DATA.getMemoryData("isSyncedIdentifierData");
        if (isUbtCheckFailed) {
            KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
                formId: formData.formId,
                targetingRule: "ubtFailed",
                formTriggerType: KAMPYLE_DATA.getFormTriggerType(formData.formId),
                targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.PAGE_TARGETING,
                isPassed: !isUbtCheckFailed,
                expected: "should ignore quarantine rules evaluation",
                actual: isUbtCheckFailed,
            });
        }
        return isUbtCheckFailed;
    }
    function handleSkippedInvitaion(formData) {
        if (!KAMPYLE_FUNC.isPreloadConfigured()) {
            KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.NEB_LOAD_FORM, { formId: formData.formId });
        }
        KAMPYLE_EVENT_DISPATCHER.trigger("neb_skipInvitation", { formId: formData.formId });
    }
    function isAlreadySubmitted(formData) {
        var isAlreadySubmitted = isSubmitted(formData.onSiteData) === true;
        var submittedDays = KAMPYLE_UTILS.getNestedPropertyValue(formData, "onSiteData.submitted.days");
        var submittedDateText = KAMPYLE_TARGETING.getTextByQuarentine("SUBMITTED_DATE");
        submittedDays &&
            KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
                formId: formData.formId,
                targetingRule: "DontInviteOnSubmitted",
                formTriggerType: KAMPYLE_DATA.getFormTriggerType(formData.formId),
                targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.QUARANTINE_TARGETING,
                isPassed: !isAlreadySubmitted,
                expected: submittedDays + " days",
                actual: "Current: " + new Date() + " Submitted: " + submittedDateText,
            });
        return isAlreadySubmitted;
    }
    function isAlreadyDeclined(formData) {
        var isAlreadyDeclined = isDeclined(formData.onSiteData) === true;
        var declinedDateText = KAMPYLE_TARGETING.getTextByQuarentine("DECLINED_DATE");
        var declinedDays = KAMPYLE_UTILS.getNestedPropertyValue(formData, "onSiteData.declined.days");
        declinedDays &&
            KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
                formId: formData.formId,
                targetingRule: "DontInviteOnDeclined",
                formTriggerType: KAMPYLE_DATA.getFormTriggerType(formData.formId),
                targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.QUARANTINE_TARGETING,
                isPassed: !isAlreadyDeclined,
                expected: declinedDays + " days",
                actual: "Current: " + new Date() + " Declined: " + declinedDateText,
            });
        return isAlreadyDeclined;
    }
    function shouldDisableIntercept(formData) {
        var shouldDisableIntercept = false;
        var disableInterceptRule = KAMPYLE_UTILS.getNestedPropertyValue(formData, "onSiteData.disableInterceptRule");
        if (disableInterceptRule) {
            if (typeof disableInterceptRule === "string") {
                disableInterceptRule = JSON.parse(disableInterceptRule);
            }
            shouldDisableIntercept = KAMPYLE_TARGETING.evaluateRule(disableInterceptRule, formData);
            KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
                formId: formData.formId,
                targetingRule: "disableInterceptRule",
                formTriggerType: KAMPYLE_DATA.getFormTriggerType(formData.formId),
                targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.BEHAVIORAL_TARGETING,
                isPassed: shouldDisableIntercept,
                expected: "Disable intercept rule should be true",
                actual: shouldDisableIntercept,
            });
        }
        return shouldDisableIntercept;
    }
    function handleNotSkippedInvitaion(formData) {
        if (KAMPYLE_DATA.getDisplayType(formData) === KAMPYLE_CONSTANT.DISPLAY_TYPES.POPUP) {
            KAMPYLE_DATA.setFormState(formData.formId, { inviteShown: true });
            KAMPYLE_EVENT_DISPATCHER.trigger("neb_showInvitation", { formId: formData.formId });
        } else {
            if (KAMPYLE_FUNC.isFormLoaded(formData.formId)) {
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_showInvitation", { formId: formData.formId });
            } else {
                KAMPYLE_DATA.setMemoryData(KAMPYLE_TARGETING.generateShouldShowInviteParamName(formData.formId), true);
                KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.NEB_LOAD_FORM, { formId: formData.formId });
            }
        }
    }
    function initTargetingObject() {
        var targetingState = KAMPYLE_DATA.getMemoryData("targetingState");
        targetingState.kampyleTimeInSession = false;
        if (KAMPYLE_DATA.getMemoryData("kampyleDevice") === "desktop") {
            targetingState.abandon = false;
        }
        targetingState.kampylePageElementEvent = false;
        targetingState.kampyleTimeOnPage = false;
        KAMPYLE_DATA.setMemoryData("targetingState", targetingState);
    }
    function validateCommonTargetingOnForm(form) {
        var canShow = true;
        var isUrlExcludedResult;
        if (canShow === true) {
            isUrlExcludedResult = isUrlExcluded(form);
            KAMPYLE_UTILS.getNestedPropertyValue(form, "urlRules.exclusionUrl.rule") &&
                KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
                    formId: form.formId,
                    targetingRule: "UrlExclude",
                    formTriggerType: KAMPYLE_DATA.getFormTriggerType(form.formId),
                    targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.PAGE_TARGETING,
                    isPassed: !isUrlExcludedResult,
                    expected: KAMPYLE_UTILS.getNestedPropertyValue(form, "urlRules.exclusionUrl.rule"),
                    actual: location.href,
                });
            if (isUrlExcludedResult === true) {
                canShow = false;
            }
        }
        if (canShow === true) {
            var isIncluded = isUrlIncluded(form);
            KAMPYLE_UTILS.getNestedPropertyValue(form, "urlRules.inclusionUrl.rule") &&
                KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
                    formId: form.formId,
                    formTriggerType: KAMPYLE_DATA.getFormTriggerType(form.formId),
                    targetingRule: "UrlInclude",
                    targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.PAGE_TARGETING,
                    isPassed: isIncluded,
                    expected: KAMPYLE_UTILS.getNestedPropertyValue(form, "urlRules.inclusionUrl.rule"),
                    actual: location.href,
                });
            if (isIncluded === false) {
                canShow = false;
            }
        }
        if (canShow === true) {
            var isGenericRuleValidResult = isGenericRuleValid(form);
            KAMPYLE_UTILS.getNestedPropertyValue(form, "onSiteData.genericRule") &&
                KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
                    formId: form.formId,
                    targetingRule: "GenericRule",
                    formTriggerType: KAMPYLE_DATA.getFormTriggerType(form.formId),
                    targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.PAGE_TARGETING,
                    isPassed: isGenericRuleValidResult,
                    expected: "Generic rule evaluation result should be true",
                    actual: isGenericRuleValidResult,
                });
            canShow = isGenericRuleValidResult;
        }
        if (canShow === true) {
            canShow = targetingDevice(form);
            KAMPYLE_UTILS.getNestedPropertyValue(form, "onSiteData.devicetypes") &&
                KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
                    formId: form.formId,
                    targetingRule: "DeviceTypes",
                    formTriggerType: KAMPYLE_DATA.getFormTriggerType(form.formId),
                    targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.PAGE_TARGETING,
                    isPassed: canShow,
                    expected: KAMPYLE_UTILS.getNestedPropertyValue(form, "onSiteData.devicetypes").toString(),
                    actual: KAMPYLE_DATA.getMemoryData("kampyleDevice"),
                });
        }
        return canShow;
    }
    function isGenericRuleValid(data) {
        if (data && data.onSiteData && data.onSiteData.genericRule) {
            if (typeof data.onSiteData.genericRule === "string") {
                if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.GREATER_SMALLER_THAN_DECODE)) {
                    data.onSiteData.genericRule = KAMPYLE_UTILS.htmlDecode(data.onSiteData.genericRule);
                }
                data.onSiteData.genericRule = JSON.parse(data.onSiteData.genericRule);
            }
            return KAMPYLE_TARGETING.evaluateRule(data.onSiteData.genericRule, data);
        }
        return true;
    }
    function isUrlMatch(urlToMatch) {
        if (!(typeof urlToMatch === "string")) {
            return false;
        }
        urlToMatch = urlToMatch.toLowerCase();
        var currentUrl = document.location.href.toLowerCase();
        var matchUrl = currentUrl.substring(0, urlToMatch.length);
        if (matchUrl === urlToMatch) {
            return true;
        } else {
            currentUrl = currentUrl.replace(/^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i, "");
            matchUrl = currentUrl.substring(0, urlToMatch.length);
            if (matchUrl === urlToMatch) {
                return true;
            }
        }
        return false;
    }
    function isUrlLimits(urlsData) {
        urlsData = urlsData.split(";");
        var length = urlsData.length;
        for (var i = 0; i < length; i++) {
            var res = isUrlMatch(urlsData[i]);
            if (res === true) {
                return true;
            }
        }
        return false;
    }
    function isUrlExcluded(data) {
        if (!!data.urlRules && !!data.urlRules.exclusionUrl) {
            if (!!data.urlRules.exclusionUrl.rule) {
                var isExcluded = isUrlLimits(data.urlRules.exclusionUrl.rule);
                return isExcluded;
            }
        }
        return false;
    }
    function isUrlIncluded(data) {
        
        // if (!!data.urlRules && !!data.urlRules.inclusionUrl) {
        //     if (!!data.urlRules.inclusionUrl.rule) {
        //         var isIncluded = isUrlLimits(data.urlRules.inclusionUrl.rule);
        //         return isIncluded;
        //     }
        // }
        return true;
    }
    function checkAllowedOperator(paramType, operator) {
        var paramTypeToOperator = {
            text: [
                KAMPYLE_CONSTANT.OPERATORS.EQUALS,
                KAMPYLE_CONSTANT.OPERATORS.DOES_NOT_EQUAL,
                KAMPYLE_CONSTANT.OPERATORS.CONTAINS,
                KAMPYLE_CONSTANT.OPERATORS.DOES_NOT_CONTAIN,
                KAMPYLE_CONSTANT.OPERATORS.STARTS_WITH,
                KAMPYLE_CONSTANT.OPERATORS.ENDS_WITH,
                KAMPYLE_CONSTANT.OPERATORS.HAS_VALUE,
                KAMPYLE_CONSTANT.OPERATORS.REGEX,
            ],
            boolean: [KAMPYLE_CONSTANT.OPERATORS.EQUALS, KAMPYLE_CONSTANT.OPERATORS.HAS_VALUE],
            datetime: [KAMPYLE_CONSTANT.OPERATORS.EQUALS, KAMPYLE_CONSTANT.OPERATORS.DOES_NOT_EQUAL, KAMPYLE_CONSTANT.OPERATORS.LATER_THAN, KAMPYLE_CONSTANT.OPERATORS.EARLIER_THAN, KAMPYLE_CONSTANT.OPERATORS.HAS_VALUE],
            number: [KAMPYLE_CONSTANT.OPERATORS.EQUALS, KAMPYLE_CONSTANT.OPERATORS.DOES_NOT_EQUAL, KAMPYLE_CONSTANT.OPERATORS.GREATER_THAN, KAMPYLE_CONSTANT.OPERATORS.SMALLER_THAN, KAMPYLE_CONSTANT.OPERATORS.HAS_VALUE],
        };
        paramType = KAMPYLE_UTILS.safeToLower(paramType);
        operator = KAMPYLE_UTILS.safeToLower(operator);
        if (!paramType || !operator || !paramTypeToOperator[paramType] || paramTypeToOperator[paramType].indexOf(operator) === -1) {
            return false;
        } else {
            return true;
        }
    }
    function evaluateCriteria(criteria, formData) {
        var evaluation = false;
        var paramValue;
        var secondParamValue;
        var isAllowedOperator;
        if (!criteria) {
            return false;
        }
        var allowedTypes = ["customParam"];
        var condition = KAMPYLE_UTILS.safeToLower(criteria.condition);
        if (!criteria || criteria.value === undefined || criteria.value === null || allowedTypes.indexOf(criteria.fieldOrigin) === -1) {
            evaluation = false;
        } else {
            switch (criteria.fieldOrigin) {
                case "customParam":
                    var customParamObj = MDIGITAL.CUSTOM_PARAMETERS.getCustomParamById(criteria.fieldId, formData);
                    if (customParamObj && customParamObj.source_name) {
                        paramValue = MDIGITAL.CUSTOM_PARAMETERS.getCustomParamValue({ type: customParamObj.type, name: customParamObj.source_name, source: customParamObj.source });
                        secondParamValue = MDIGITAL.CUSTOM_PARAMETERS.getCustomParamValue({ type: customParamObj.type, name: customParamObj.source_name, source: customParamObj.source, value: criteria.value });
                        isAllowedOperator = checkAllowedOperator(customParamObj.type, criteria.condition);
                    }
                    if (paramValue !== undefined && isAllowedOperator) {
                        evaluation = KAMPYLE_UTILS.kampyleCompareByOperator(paramValue, secondParamValue, condition, customParamObj.type);
                    }
                    break;
                default:
                    break;
            }
        }
        return evaluation;
    }
    function evaluateRule(toEvaluate, formData) {
        var tmpEval;
        var finalEval = false;
        var stopFlag = false;
        if (toEvaluate && toEvaluate.type === "criteriaGroup" && toEvaluate.childrenCriterias && toEvaluate.childrenCriterias.length && toEvaluate.conjunction) {
            for (var i = 0; i < toEvaluate.childrenCriterias.length && !stopFlag; i++) {
                tmpEval = KAMPYLE_TARGETING.evaluateRule(toEvaluate.childrenCriterias[i], formData);
                if (tmpEval && toEvaluate.conjunction === "OR") {
                    finalEval = true;
                    stopFlag = true;
                } else if (!tmpEval && toEvaluate.conjunction === "AND") {
                    finalEval = false;
                    stopFlag = true;
                } else {
                    finalEval = tmpEval;
                }
            }
        } else if (toEvaluate && toEvaluate.type === "criteria") {
            finalEval = evaluateCriteria(toEvaluate, formData);
        }
        return finalEval;
    }
    function isNumSessions(data) {
        var kampyleUserSession = KAMPYLE_DATA.getData("kampyleUserSessionsCount");
        var numberOfVisitsResult = false;
        var numberOfRepeats = KAMPYLE_UTILS.getNestedPropertyValue(data, "onSiteData.numberOfVisits.numberOfRepeats");
        var compareString = KAMPYLE_UTILS.getNestedPropertyValue(data, "onSiteData.numberOfVisits.compareString");
        if (!!kampyleUserSession) {
            if (numberOfRepeats === null || compareString === null) {
                numberOfVisitsResult = true;
            } else {
                numberOfVisitsResult = KAMPYLE_UTILS.kampyleCompareByOperator(parseInt(kampyleUserSession), parseInt(numberOfRepeats), compareString);
            }
        }
        numberOfRepeats &&
            KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
                formId: data.formId,
                targetingRule: "NumberOfVisits",
                formTriggerType: KAMPYLE_DATA.getFormTriggerType(data.formId),
                targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.PAGE_TARGETING,
                isPassed: numberOfVisitsResult,
                expected: compareString + " " + numberOfRepeats,
                actual: kampyleUserSession,
            });
        return numberOfVisitsResult;
    }
    function targetingDevice(data) {
        if (data && data.onSiteData && data.onSiteData.devicetypes) {
            var devicetypesLength = data.onSiteData.devicetypes.length;
            for (var i = 0; i < devicetypesLength; i++) {
                if (data.onSiteData.devicetypes[i] === KAMPYLE_DATA.getMemoryData("kampyleDevice")) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }
    function checkPagesInSession(sessionPageObj) {
        sessionPageObj = sessionPageObj || {};
        var pageCount = Number(KAMPYLE_DATA.getData("kampyleSessionPageCounter") || 0);
        return KAMPYLE_UTILS.kampyleCompareByOperator(pageCount, parseInt(sessionPageObj.numberOfRepeats), sessionPageObj.compareString);
    }
    function timeInSession(time, formData) {
        validateGap(time, formData, true);
    }
    function getTimeInSession() {
        var kampyleUserSession = KAMPYLE_DATA.getData("kampyleUserSession");
        var kampyleUserSessionTimestamp = parseInt(kampyleUserSession);
        var diff = KAMPYLE_UTILS.getTimeDiff(kampyleUserSessionTimestamp);
        return diff;
    }
    function validateGap(time, formData, isFirstCall) {
        var requiredTimeInSession = parseInt(time) * 1000;
        var timeInSession = getTimeInSession();
        var targetingState = KAMPYLE_DATA.getMemoryData("targetingState");
        if (targetingState && timeInSession >= requiredTimeInSession) {
            targetingState.kampyleTimeInSession = true;
            KAMPYLE_DATA.setMemoryData("targetingState", targetingState);
            KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
                formId: formData.formId,
                targetingRule: "TimeInSession",
                formTriggerType: KAMPYLE_DATA.getFormTriggerType(formData.formId),
                targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.BEHAVIORAL_TARGETING,
                isPassed: true,
                expected: requiredTimeInSession,
                actual: "Over on the expected " + requiredTimeInSession,
            });
            KAMPYLE_TARGETING.isShowInvite();
        } else {
            var randomTime = 0;
            var diff = requiredTimeInSession - timeInSession;
            var thisObj = this;
            setTimeout(function () {
                validateGap(time, formData, false);
            }, diff + randomTime);
        }
    }
    function isDeclined(data) {
        data = data || {};
        if (data.declined !== null && data.declined !== undefined) {
            var isStillDeclined = isDataValid(data.declined.days, "DECLINED_DATE");
            return isStillDeclined;
        }
        return false;
    }
    function isSubmitted(data) {
        if (KAMPYLE_UTILS.getNestedPropertyValue(data, "submitted")) {
            var isStillSubmitted = isDataValid(data.submitted.days, "SUBMITTED_DATE");
            return isStillSubmitted;
        }
        return false;
    }
    function checkAbandon(formData) {
        var isAbandonmentPassed = isUrlIncluded(formData) && !isUrlExcluded(formData);
        if (isAbandonmentPassed) {
            KAMPYLE_DATA.setMemoryData("targetingState.abandon", true);
            if (isShowInvite() === false) {
                KAMPYLE_DATA.setMemoryData("targetingState.abandon", false);
            }
        }
        KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
            formId: formData.formId,
            targetingRule: "UserAbandonment",
            formTriggerType: KAMPYLE_DATA.getFormTriggerType(formData.formId),
            isPassed: isAbandonmentPassed,
            targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.BEHAVIORAL_TARGETING,
            expected: "Mouse over user abandonment",
            actual: "Mouse was over user abandonment",
        });
    }
    function abandon(abandonObj, formData) {
        var zIndexDef = "0",
            heightDef = "5";
        if (!abandonObj) {
            abandonObj = { height: heightDef, zIndex: zIndexDef };
        }
        var zIndex = !!abandonObj.zIndex ? abandonObj.zIndex : zIndexDef;
        var height = !!abandonObj.height && abandonObj.height !== "0" ? abandonObj.height + "px" : heightDef + "px";
        var abandon = document.getElementById("kampyle_abandon_zone");
        if (abandon === null) {
            var abandon = document.createElement("div");
            abandon.id = "kampyle_abandon_zone";
            abandon.style.width = "100%";
            abandon.style.height = height;
            abandon.style.zIndex = zIndex;
            abandon.style.position = "fixed";
            abandon.style.top = "0px";
            abandon.onmouseover = function () {
                checkAbandon(formData);
            };
            document.body.appendChild(abandon);
        } else {
            abandon.style.height = height;
            abandon.style.zIndex = zIndex;
        }
    }
    function getEventQuery(eventObj) {
        if (!eventObj || !eventObj.selectorValue || !eventObj.selectorType) {
            return null;
        }
        var query = "{{selector}}{{value}}";
        switch (eventObj.selectorType) {
            case "className":
                query = query.replace("{{selector}}", ".");
                break;
            case "objectId":
                query = query.replace("{{selector}}", "#");
                break;
            default:
                KAMPYLE_UTILS.showWarning("Invalid selector type:" + eventObj.selectorType);
                return null;
        }
        query = query.replace("{{value}}", eventObj.selectorValue);
        return query;
    }
    function handleTriggerByEvents(eventsObj, formData) {
        var queryString = getEventQuery(eventsObj);
        if (!queryString) {
            return null;
        }
        var delay = Number(eventsObj.time) || 0;
        var selectedElements = document.querySelectorAll(queryString) || [];
        for (var i = 0; i < selectedElements.length; i++) {
            var eventHandler = function () {
                var timeout = setTimeout(function () {
                    KAMPYLE_DATA.setMemoryData("targetingState.kampylePageElementEvent", true);
                    KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
                        formId: formData.formId,
                        targetingRule: "PageElement",
                        formTriggerType: KAMPYLE_DATA.getFormTriggerType(formData.formId),
                        isPassed: true,
                        targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.BEHAVIORAL_TARGETING,
                        expected: eventsObj.eventName + " for element with " + eventsObj.selectorType + "=" + eventsObj.selectorValue,
                        actual: true,
                    });
                    if (isShowInvite() === false) {
                        KAMPYLE_DATA.setMemoryData("targetingState.kampylePageElementEvent", false);
                    }
                    clearTimeout(timeout);
                }, delay * 1000);
                KAMPYLE_DATA.setTimeoutHandler("triggerByEventTimeout_" + i, timeout);
            };
            selectedElements[i].addEventListener(eventsObj.eventName, eventHandler);
            KAMPYLE_DATA.setDOMEventHandler("triggerByEvent_" + i, eventsObj.eventName, eventHandler, selectedElements[i]);
        }
    }
    function sendTimeOnPageEventData(formData) {
        var timeOnPage = KAMPYLE_UTILS.getNestedPropertyValue(formData, "onSiteData.kampyleTimeOnPage.time");
        timeOnPage &&
            KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
                formId: formData.formId,
                targetingRule: "TimeOnPage",
                formTriggerType: KAMPYLE_DATA.getFormTriggerType(formData.formId),
                isPassed: true,
                targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.BEHAVIORAL_TARGETING,
                expected: timeOnPage,
                actual: "Over on the expecetd " + timeOnPage,
            });
    }
    function timeOnPage(time, formData) {
        if (time === null) {
            KAMPYLE_DATA.setMemoryData("targetingState.kampyleTimeOnPage", true);
            return;
        }
        var timeOnPageTimeOut = setTimeout(function () {
            KAMPYLE_DATA.setMemoryData("targetingState.kampyleTimeOnPage", true);
            sendTimeOnPageEventData(formData);
            isShowInvite();
        }, time * 1000);
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ENABLE_FIX_FOR_SPA_TIME_ON_PAGE)) {
            var timeOnPageTimeOutKey = "timeOnPage" + "_" + formData.formId;
            KAMPYLE_DATA.setTimeoutHandler(timeOnPageTimeOutKey, timeOnPageTimeOut);
        }
        KAMPYLE_DATA.setData("kampylePageLoadedTimestamp", KAMPYLE_UTILS.getCurrentTimestamp());
    }
    function getUserPercentile(formId) {
        var percentile = KAMPYLE_DATA.getData("kampyleUserPercentile");
        if (!percentile && percentile !== "0") {
            percentile = Math.random() * 100;
            KAMPYLE_DATA.setData("kampyleUserPercentile", percentile);
        }
        if (Number(percentile) && Number(percentile).toFixed) {
            return Number(percentile).toFixed(1);
        } else {
            return Number(percentile);
        }
    }
    function checkPercentageUsers(precUsersObj) {
        var userPercentile = getUserPercentile();
        if (!!precUsersObj && !!userPercentile) {
            var prec = Number(precUsersObj.prec);
            if (userPercentile > prec) {
                return false;
            }
        }
        return true;
    }
    function initDynamicTargeting(formData) {
        KAMPYLE_DATA.setMemoryData("isInviteActivated", true);
        var targetingState = KAMPYLE_DATA.getMemoryData("targetingState");
        if (formData.onSiteData.kampyleTimeInSession !== undefined) {
            timeInSession(formData.onSiteData.kampyleTimeInSession.time, formData);
        } else {
            targetingState.kampyleTimeInSession = true;
        }
        if (!!formData.onSiteData.abandon) {
            if (KAMPYLE_DATA.getMemoryData("kampyleDevice") === "desktop") {
                abandon(formData.onSiteData.abandon, formData);
            }
        } else {
            targetingState.abandon = true;
        }
        var eventsContract = KAMPYLE_DATA.getTargetingData(formData.formId, "pageEvents");
        if (eventsContract) {
            handleTriggerByEvents(eventsContract, formData);
        } else {
            targetingState.kampylePageElementEvent = true;
        }
        if (formData.onSiteData.kampyleTimeOnPage !== undefined) {
            timeOnPage(formData.onSiteData.kampyleTimeOnPage.time, formData);
        } else {
            targetingState.kampyleTimeOnPage = true;
        }
        KAMPYLE_DATA.setMemoryData("targetingState", targetingState);
        for (var key in targetingState) {
            if (targetingState.hasOwnProperty(key) && !targetingState[key]) {
                return false;
            }
        }
        isShowInvite(formData);
    }
    function initTargeting(eventName, data) {
        initTargetingMemoryData();
        initTargetingObject();
        handleFormsTargeting(eventName, data);
    }
    function initTargetingMemoryData() {
        KAMPYLE_DATA.setMemoryData("invitationTimeStamp", null);
        KAMPYLE_DATA.setMemoryData("buttonFormId", null);
        KAMPYLE_DATA.setMemoryData("formIsShown", false);
        KAMPYLE_DATA.setMemoryData("isButtonShown", false);
        KAMPYLE_DATA.setMemoryData("isInviteActivated", false);
        KAMPYLE_DATA.setMemoryData("targetingState", {});
    }
    function initEmbeddedTargeting() {
        var allForms = KAMPYLE_DATA.getAllForms();
        if (!allForms || !allForms.length) {
            return;
        }
        var canShow;
        for (var i = allForms.length - 1; i >= 0; i--) {
            if (allForms[i].formType === KAMPYLE_CONSTANT.FORM_TYPES.EMBEDDED) {
                canShow = KAMPYLE_TARGETING.validateCommonTargetingOnForm(allForms[i]);
                if (canShow) {
                    var quarantineTargetingPassed = !KAMPYLE_TARGETING.checkQuarantine(allForms[i]);
                    var sessionTargetingPassed = KAMPYLE_TARGETING.validateCommonSessionTargeting(allForms[i].formId);
                    var isUbtInitializedSuccessfully = !isUbtFailed(allForms[i]);
                    if (isUbtInitializedSuccessfully && quarantineTargetingPassed && sessionTargetingPassed) {
                        KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.NEB_LOAD_FORM, { formId: allForms[i].formId });
                    }
                }
            }
        }
    }
    function initUserIdentifier() {
        var userIdentifierVal = null;
        if (!!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.SERVER_BASED_TARGETING)) {
            userIdentifierVal = KAMPYLE_FUNC.getUserIdentifierVal();
            var hasIdentifierValue = userIdentifierVal !== null;
            KAMPYLE_DATA.setMemoryData("isGuest", !hasIdentifierValue);
            KAMPYLE_EVENT_DISPATCHER.trigger("neb_initUserIdentifier", { hasIdentifierValue: hasIdentifierValue });
        }
        return userIdentifierVal;
    }
    function handleIdentifierData(userIdentifierVal, eventName, data) {
        if (KAMPYLE_FUNC.shouldSyncIdentifier(userIdentifierVal)) {
            KAMPYLE_EVENT_DISPATCHER.trigger("MDigital_settingIdentifierValueOnMemory", { hasIdentifierValue: userIdentifierVal !== null });
            KAMPYLE_DATA.setMemoryData("identifierValue", userIdentifierVal);
            KAMPYLE_FUNC.syncIdentifierData(encodeURIComponent(userIdentifierVal), initFormsTargeting.bind(this, arguments[0], arguments[1]));
        } else {
            KAMPYLE_EVENT_DISPATCHER.trigger("MDigital_shouldNotSyncIdentifier");
            initFormsTargeting(eventName, data);
        }
    }
    function handleFormsTargeting(eventName, data) {
        var originalIdentifierValue = initUserIdentifier();
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ENABLE_UBT_IDENTIFIER_HASH)) {
            var userIdentifierDigest = KAMPYLE_UTILS.sha512(originalIdentifierValue);
            userIdentifierDigest.then(function (ubtVal) {
                handleIdentifierData(ubtVal, eventName, data);
            });
        } else {
            handleIdentifierData(originalIdentifierValue, eventName, data);
        }
    }
    function initFormsTargeting(eventName, data) {
        data = data || {};
        var allForms = KAMPYLE_DATA.getAllForms();
        if (!allForms || !allForms.length) {
            return;
        }
        KAMPYLE_TARGETING.initEmbeddedTargeting();
        var canShow;
        for (var i = allForms.length - 1; i >= 0; i--) {
            if (allForms[i].formType === KAMPYLE_CONSTANT.FORM_TYPES.BUTTON && !data.skipButtonTargeting && KAMPYLE_DATA.getMemoryData("isButtonShown") === false) {
                canShow = KAMPYLE_TARGETING.validateCommonTargetingOnForm(allForms[i]);
                if (canShow === true) {
                    KAMPYLE_EVENT_DISPATCHER.trigger("neb_initButton", { formId: allForms[i].formId });
                }
            } else if (KAMPYLE_TARGETING.shouldCheckInvite(allForms[i], data)) {
                canShow = KAMPYLE_TARGETING.validateCommonTargetingOnForm(allForms[i]) && KAMPYLE_TARGETING.validateCommonSessionTargeting(allForms[i].formId);
                if (canShow === true) {
                    KAMPYLE_TARGETING.initDynamicTargeting(allForms[i]);
                }
            }
            if (KAMPYLE_DATA.getMemoryData("isInviteActivated") === true && KAMPYLE_DATA.getMemoryData("isButtonShown") === true) {
                break;
            }
        }
        KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_PAGE_TARGETING_PHASE_ENDED);
    }
    function shouldCheckInvite(form, targetingSettings) {
        return (
            form.formType === KAMPYLE_CONSTANT.FORM_TYPES.INVITATION &&
            KAMPYLE_UTILS.kampyleIsCookieEnabled() &&
            !targetingSettings.skipInviteTargeting &&
            KAMPYLE_DATA.getMemoryData("isInviteActivated") === false &&
            !KAMPYLE_TARGETING.isUbtFailed(form)
        );
    }
    function validateCommonSessionTargeting(formId) {
        formId = formId || "";
        var data = KAMPYLE_DATA.getFormData(formId) || {};
        var isInvite = data.formType === KAMPYLE_CONSTANT.FORM_TYPES.INVITATION;
        if (isInvite) {
            KAMPYLE_DATA.setMemoryData("currentInviteFormId", formId);
        }
        if (KAMPYLE_TARGETING.isNumSessions(data) === false) {
            return false;
        }
        if (KAMPYLE_UTILS.getNestedPropertyValue(data, "onSiteData.kampyleInvitePercentageUsers.prec")) {
            var formPercentageUsersResult = checkPercentageUsers(data.onSiteData.kampyleInvitePercentageUsers);
            KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
                formId: data.formId,
                targetingRule: "UsersPercentage",
                formTriggerType: KAMPYLE_DATA.getFormTriggerType(data.formId),
                targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.PAGE_TARGETING,
                isPassed: formPercentageUsersResult,
                expected: KAMPYLE_UTILS.getNestedPropertyValue(data, "onSiteData.kampyleInvitePercentageUsers.prec"),
                actual: getUserPercentile(),
            });
            if (formPercentageUsersResult === false) {
                return false;
            }
        }
        var numberOfPagesResult = !!data.onSiteData.numberOfPagesViewed && checkPagesInSession(data.onSiteData.numberOfPagesViewed) === false;
        KAMPYLE_UTILS.getNestedPropertyValue(data, "onSiteData.numberOfPagesViewed.numberOfRepeats") &&
            KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
                formId: data.formId,
                targetingRule: "NumberOfPagesViewed",
                targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.PAGE_TARGETING,
                isPassed: !numberOfPagesResult,
                expected: KAMPYLE_UTILS.getNestedPropertyValue(data, "onSiteData.numberOfPagesViewed.numberOfRepeats"),
                actual: KAMPYLE_DATA.getData("kampyleSessionPageCounter"),
            });
        if (numberOfPagesResult) {
            return false;
        }
        if (isInvite) {
            if (KAMPYLE_UTILS.isTrue(data.inviteData.skipInvitation)) {
                if (KAMPYLE_FUNC.isPreloadConfigured()) {
                    KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.NEB_LOAD_FORM, { formId: formId });
                }
            } else {
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_loadInvitation", { formId: formId });
            }
        }
        return true;
    }
    function setTargetingState(targetingName, isPassed) {
        KAMPYLE_DATA.setMemoryData("targetingState." + targetingName, isPassed);
    }
    function generateShouldShowInviteParamName(formId) {
        if (!formId) {
            return null;
        }
        return "shouldShowInvite" + "_" + formId;
    }
    function checkQuarantine(formData) {
        var isDeclined = KAMPYLE_TARGETING.isAlreadyDeclined(formData);
        var isSubmitted = KAMPYLE_TARGETING.isAlreadySubmitted(formData);
        return isDeclined || isSubmitted;
    }
    return {
        init: init,
        initTargeting: initTargeting,
        initFormsTargeting: initFormsTargeting,
        validateCommonTargetingOnForm: validateCommonTargetingOnForm,
        isShowInvite: isShowInvite,
        handleButton: handleButton,
        isDataValid: isDataValid,
        generateShouldShowInviteParamName: generateShouldShowInviteParamName,
        handleNotSkippedInvitaion: handleNotSkippedInvitaion,
        initDynamicTargeting: initDynamicTargeting,
        validateCommonSessionTargeting: validateCommonSessionTargeting,
        isUbtFailed: isUbtFailed,
        evaluateRule: evaluateRule,
        shouldDisableIntercept: shouldDisableIntercept,
        checkPagesInSession: checkPagesInSession,
        isNumSessions: isNumSessions,
        targetingDevice: targetingDevice,
        getUserPercentile: getUserPercentile,
        checkPercentageUsers: checkPercentageUsers,
        validateGap: validateGap,
        getEventQuery: getEventQuery,
        handleTriggerByEvents: handleTriggerByEvents,
        isUrlMatch: isUrlMatch,
        setTargetingState: setTargetingState,
        getTextByQuarentine: getTextByQuarentine,
        shouldCheckInvite: shouldCheckInvite,
        isQuarantinePhasePassed: isQuarantinePhasePassed,
        isGenericRuleValid: isGenericRuleValid,
        checkQuarantine: checkQuarantine,
        initEmbeddedTargeting: initEmbeddedTargeting,
        isAlreadyDeclined: isAlreadyDeclined,
        isAlreadySubmitted: isAlreadySubmitted,
    };
})(window, document);
window.KAMPYLE_ANIMATION = (function () {
    var DEFAULTS = { ANIMATION_DIRECTION: "centerRight" };
    function init() {
        var eventMapping = {
            neb_buttonClicked: [animateWithInit],
            neb_sdkShowForm: [animateWithInit],
            neb_loadForm: [handleAnimationIframe, initAnimationPosition],
            neb_inviteAccepted: [animateWithInit],
            neb_skipInvitation: [animateWithInit],
            neb_formClosed: [animateOut, refreshFormIframe],
            neb_popupBlocked: [animateOut, refreshFormIframe],
            neb_captureInit: [animateOut],
            neb_captureImageClicked: [animateIn],
            MDigital_Capture_Cancelled: [animateIn],
            neb_formHide: [animateOut],
            neb_formLoadingHasFailed: [hideAnimationContainer],
            neb_skipShowingForm: [hideFormAnimationContainer],
            neb_resetFormState: [refreshFormIframe],
        };
        KAMPYLE_EVENT_DISPATCHER.subscribeMany(eventMapping);
    }
    function animateWithInit(eventName, data) {
        initAnimationPosition(eventName, data);
        setTimeout(function () {
            animateIn(eventName, data);
        }, 10);
    }
    function shouldIgnoreRenderAnimationForm(formData, animationContainer, formId) {
        return !formData || !animationContainer || !isAnimationForm(formData) || KAMPYLE_FUNC.hasApplicationLoadingFailed(formId, false);
    }
    function animateIn(eventName, data) {
        data = data || {};
        var formData = KAMPYLE_DATA.getFormData(data.formId);
        var animationContainer = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.ANIMATION.CONTAINER_ID);
        if (shouldIgnoreRenderAnimationForm(formData, animationContainer, data.formId)) {
            return false;
        }
        KAMPYLE_DATA.setMemoryData("isInvitationShouldBeIgnored", true);
        var formIframe = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.ANIMATION.IFRAME_ID + data.formId);
        var v1IframeStyle = { display: "block", backgroundColor: formData.designSettings.formBackgroundColor || "white" };
        var v2IframeStyle = { display: "block", boxShadow: "-4px 0px 18px -1px rgba(0,0,0,0.37)", backgroundColor: formData.designSettings.formBackgroundColor || "white" };
        var displayDirection = getDisplayDirection(formData);
        switch (displayDirection) {
            case "centerRight":
                KAMPYLE_UTILS.setElementStyle(animationContainer, { right: 0 });
                v2IframeStyle.borderRadius = "8px 0px 0px 8px";
                break;
            case "centerLeft":
                KAMPYLE_UTILS.setElementStyle(animationContainer, { left: 0 });
                v2IframeStyle.borderRadius = "0px 8px 8px 0px";
                break;
            case "bottomRight":
                KAMPYLE_UTILS.setElementStyle(animationContainer, { bottom: 0 });
                v2IframeStyle.borderRadius = "8px 0px 0px 0px";
                break;
            case "bottomLeft":
                KAMPYLE_UTILS.setElementStyle(animationContainer, { bottom: 0 });
                v2IframeStyle.borderRadius = "0px 8px 0px 0px";
                break;
            case "topRight":
                KAMPYLE_UTILS.setElementStyle(animationContainer, { top: 0 });
                v2IframeStyle.borderRadius = "0px 0px 0px 8px";
                break;
            case "topLeft":
                KAMPYLE_UTILS.setElementStyle(animationContainer, { top: 0 });
                v2IframeStyle.borderRadius = "0px 0px 8px 0px";
                break;
            default:
                KAMPYLE_UTILS.showWarning("Invalid animation type - " + displayDirection);
                return false;
        }
        if (formIframe) {
            if (KAMPYLE_DATA.isV2Form(data.formId)) {
                KAMPYLE_UTILS.setElementStyle(formIframe, v2IframeStyle);
            } else {
                KAMPYLE_UTILS.setElementStyle(formIframe, v1IframeStyle);
            }
        }
    }
    function hideAnimationContainer() {
        var animationContainer = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.ANIMATION.CONTAINER_ID);
        if (animationContainer) {
            KAMPYLE_UTILS.setElementStyle(animationContainer, { width: 0, height: 0 });
        }
    }
    function refreshFormIframe(eventName, data) {
        setTimeout(function () {
            var formData = KAMPYLE_DATA.getFormData(data.formId);
            var currIframe = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.ANIMATION.IFRAME_ID + data.formId);
            if (!!currIframe) {
                currIframe.remove();
                KAMPYLE_DATA.initOnsiteDefaultState();
            }
            hideAnimationContainer();
        }, 1000);
    }
    function animateOut(eventName, data) {
        var formData = KAMPYLE_DATA.getFormData(data.formId);
        if (KAMPYLE_DATA.getDisplayType(formData) !== "animation") {
            return false;
        }
        data = data || {};
        var animationContainer = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.ANIMATION.CONTAINER_ID);
        if (!formData || !animationContainer || !isAnimationForm(formData)) {
            return false;
        }
        setAnimationContainerInitialPosition(formData, animationContainer);
    }
    function getMiddleHeight(formHeight) {
        return String((window.innerHeight - parseInt(formHeight, 10)) / 2) + "px";
    }
    function getDisplayDirection(formData) {
        formData = formData || {};
        return KAMPYLE_UTILS.getNestedPropertyValue(formData, "formDisplay.displayDirection") || DEFAULTS.ANIMATION_DIRECTION;
    }
    function setAnimationContainerInitialPosition(formData, animationContainer) {
        var cornerMargin;
        switch (getDisplayDirection(formData)) {
            case "centerRight":
                KAMPYLE_UTILS.setElementStyle(animationContainer, { top: getMiddleHeight(animationContainer.style.height), right: "-" + formData.formWidth + "px", bottom: null, left: null, transition: "right 1s ease-in-out" });
                break;
            case "centerLeft":
                KAMPYLE_UTILS.setElementStyle(animationContainer, { top: getMiddleHeight(animationContainer.style.height), right: null, bottom: null, left: "-" + formData.formWidth + "px", transition: "left 1s ease-in-out" });
                break;
            case "bottomRight":
                cornerMargin = KAMPYLE_VIEW.getCornerMargin(formData) + "px";
                KAMPYLE_UTILS.setElementStyle(animationContainer, { top: null, right: cornerMargin, bottom: "-" + formData.formHeight + "px", left: null, transition: "bottom 1s ease-in-out" });
                break;
            case "bottomLeft":
                cornerMargin = KAMPYLE_VIEW.getCornerMargin(formData) + "px";
                KAMPYLE_UTILS.setElementStyle(animationContainer, { top: null, right: null, bottom: "-" + formData.formHeight + "px", left: cornerMargin, transition: "bottom 1s ease-in-out" });
                break;
            case "topLeft":
                cornerMargin = KAMPYLE_VIEW.getCornerMargin(formData) + "px";
                KAMPYLE_UTILS.setElementStyle(animationContainer, { top: "-" + formData.formHeight + "px", right: null, bottom: null, left: cornerMargin, transition: "top 1s ease-in-out" });
                break;
            case "topRight":
                cornerMargin = KAMPYLE_VIEW.getCornerMargin(formData) + "px";
                KAMPYLE_UTILS.setElementStyle(animationContainer, { top: "-" + formData.formHeight + "px", right: cornerMargin, bottom: null, left: null, transition: "top 1s ease-in-out" });
                break;
            default:
                KAMPYLE_UTILS.showWarning("Invalid animation type - " + formData.formDisplayDirection);
                return false;
        }
    }
    function isAnimationForm(formData) {
        return KAMPYLE_DATA.getDisplayType(formData) === "animation";
    }
    function hideFormAnimationContainer(eventName, data) {
        var formData = KAMPYLE_DATA.getFormData(data.formId);
        if (isAnimationForm(formData)) {
            var formIframe = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.ANIMATION.IFRAME_ID + data.formId);
            if (formIframe) {
                KAMPYLE_UTILS.setElementStyle(formIframe, { display: "none" });
            }
        }
    }
    function getOrCreateAnimationContainer() {
        var container = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.ANIMATION.CONTAINER_ID);
        if (!container) {
            var formSpanPlacer = Object.assign(document.createElement("span"), { id: KAMPYLE_CONSTANT.IFRAME_SETTINGS.ANIMATION.WRAPPER_ID });
            container = document.createElement("div");
            KAMPYLE_UTILS.addAttributesOnElement(container, { id: KAMPYLE_CONSTANT.IFRAME_SETTINGS.ANIMATION.CONTAINER_ID });
            container.style.zIndex = "2147483000";
            formSpanPlacer.appendChild(container);
            document.body.appendChild(formSpanPlacer);
            KAMPYLE_UTILS.setElementStyle(container, { border: 0, position: "fixed", display: "block", zIndex: "2147483000" });
        }
        return container;
    }
    function handleAnimationIframe(eventName, data) {
        data = data || {};
        var formData = KAMPYLE_DATA.getFormData(data.formId);
        if (!formData || !KAMPYLE_ANIMATION.isAnimationForm(formData)) {
            return false;
        }
        var animationContainer = KAMPYLE_ANIMATION.getOrCreateAnimationContainer();
        var formIframe = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.ANIMATION.IFRAME_ID + data.formId);
        if (!formIframe) {
            var animationIframeStyle = { border: 0, height: formData.formHeight + "px", width: formData.formWidth + "px", display: "none" };
            var isStyleImportant = false;
            KAMPYLE_VIEW.createFormIframe(data.formId, KAMPYLE_CONSTANT.IFRAME_SETTINGS.ANIMATION.IFRAME_ID, animationContainer, animationIframeStyle, isStyleImportant);
        }
        var spinnerContainer = animationContainer.querySelector("#" + KAMPYLE_CONSTANT.SPINNER_SETTINGS.CONTAINER_ID);
        if (!spinnerContainer) {
            spinnerContainer = MDIGITAL_ELEMENT_BUILDER.createSpinnerElement();
            animationContainer.appendChild(spinnerContainer);
            KAMPYLE_UTILS.setSpinnerStyle(spinnerContainer, KAMPYLE_CONSTANT.SPINNER_SETTINGS.SIZE.LARGE);
        }
    }
    function initAnimationPosition(eventName, data) {
        data = data || {};
        var formData = KAMPYLE_DATA.getFormData(data.formId);
        var isSkipInvitation = KAMPYLE_DATA.isSkipInvitation(data.formId);
        var animationContainer = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.ANIMATION.CONTAINER_ID);
        if (!animationContainer || !formData || !isAnimationForm(formData) || (isSkipInvitation && KAMPYLE_FUNC.isAnyOtherFormAlreadyShown(data.formId))) {
            return false;
        }
        if (!document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.ANIMATION.IFRAME_ID + data.formId)) {
            handleAnimationIframe(eventName, data);
        }
        KAMPYLE_UTILS.setElementStyle(animationContainer, { height: formData.formHeight + "px", width: formData.formWidth + "px" });
        setAnimationContainerInitialPosition(formData, animationContainer);
    }
    return {
        initAnimationPosition: initAnimationPosition,
        getDisplayDirection: getDisplayDirection,
        getOrCreateAnimationContainer: getOrCreateAnimationContainer,
        init: init,
        hideAnimationContainer: hideAnimationContainer,
        hideFormAnimationContainer: hideFormAnimationContainer,
        handleAnimationIframe: handleAnimationIframe,
        isAnimationForm: isAnimationForm,
    };
})();
window.KAMPYLE_VIEW = (function (window, document) {
    var DEFAULTS = { CORNER_MARGIN: 0, TRIANGULAR_MARGIN: 0, VERTICAL_MARGIN: 30 };
    var BUTTON_FUNCTION_ENUM = { vertical: "getVerticalButton", triangular: "getTriangularButton", custom: "getCustomButton" };
    function handleInviteReady(eventName, data) {
        data = data || {};
        if (KAMPYLE_FUNC.hasApplicationLoadingFailed(data.formId, true)) {
            return;
        }
        var inviteContainer = document.getElementById("kampyleInviteContainer");
        if (newMobileInvite()) {
            restoreHostingDOM();
            if (inviteContainer) {
                var isMobileWebBannerFixEnabled = KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.MOBILE_WEB_BANNER_FIX);
                KAMPYLE_UTILS.setElementStyle(
                    inviteContainer,
                    { top: "", bottom: "", left: "", right: "", background: "none", visibility: isMobileWebBannerFixEnabled ? "hidden" : "", display: isMobileWebBannerFixEnabled ? "" : "none" },
                    true
                );
            }
        } else {
            KAMPYLE_UTILS.setElementStyle(inviteContainer, { visibility: "visible" }, true);
            var iframe = document.getElementById("kampyleInvite");
            if (iframe) {
                KAMPYLE_UTILS.setElementStyle(iframe, { visibility: "visible" }, true);
            }
        }
    }
    function onKeyboardClose(e) {
        KAMPYLE_UTILS.showInvite();
        KAMPYLE_UTILS.removeEventHandler(e.srcElement, "blur", onKeyboardClose);
    }
    function onKeyboardOpen(e) {
        KAMPYLE_UTILS.hideInvite();
        KAMPYLE_UTILS.setEventHandler(e.srcElement, "blur", onKeyboardClose);
    }
    function getAllFocusableElements() {
        var inputs = document.querySelectorAll("input");
        var textarea = document.querySelectorAll("textarea");
        var allFocusableElements = [];
        var i;
        for (i = 0; i < inputs.length; i++) {
            allFocusableElements.push(inputs[i]);
        }
        for (i = 0; i < textarea.length; i++) {
            allFocusableElements.push(textarea[i]);
        }
        return allFocusableElements;
    }
    function setupListenersForHideInviteWhenVirtualKeyboardIsOpen(eventName, data) {
        data = data || {};
        data.formId = data.formId || KAMPYLE_DATA.getMemoryData("currentFormId");
        var pos = KAMPYLE_VIEW.getInvitePosition(data.formId);
        if (newMobileInvite() && pos === "bottom") {
            var allFocusableElements = getAllFocusableElements();
            for (var i = 0; i < allFocusableElements.length; i++) {
                KAMPYLE_UTILS.setEventHandler(allFocusableElements[i], "focus", onKeyboardOpen);
            }
        }
    }
    function removeListenersForHideInviteWhenVirtualKeyboardIsOpen(eventName, data) {
        data = data || {};
        data.formId = data.formId || KAMPYLE_DATA.getMemoryData("currentFormId");
        var pos = KAMPYLE_VIEW.getInvitePosition(data.formId);
        if (newMobileInvite() && pos === "bottom") {
            var allFocusableElements = getAllFocusableElements();
            for (var i = 0; i < allFocusableElements.length; i++) {
                KAMPYLE_UTILS.removeEventHandler(allFocusableElements[i], "focus", onKeyboardOpen);
            }
        }
    }
    function showInviteIfNeeded(eventName, params) {
        var shouldShowParamName = KAMPYLE_TARGETING.generateShouldShowInviteParamName(params.formId);
        var shouldShowInvite = KAMPYLE_DATA.getMemoryData(shouldShowParamName);
        if (shouldShowInvite) {
            KAMPYLE_EVENT_DISPATCHER.trigger("neb_invitation_loaded", { formId: params.formId });
            KAMPYLE_EVENT_DISPATCHER.trigger("neb_showInvitation", { formId: params.formId });
            KAMPYLE_DATA.deleteMemoryData(shouldShowParamName);
        }
    }
    function scrollToEmbeddedForm(formId) {
        document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.EMBEDDED.IFRAME_ID_PREFIX + formId).scrollIntoView();
    }
    function doScrollY(numOfPixels) {
        window.scrollTo(0, numOfPixels);
    }
    function scrollToTop(eventName, data) {
        data = data || {};
        if (!KAMPYLE_DATA.isEmbeddedDisplayType(data.formId)) {
            doScrollY(0);
        }
    }
    function scrollFromTop(eventName, data) {
        var pixelsToScroll = (data || {}).numberOfPixels || 0;
        if (KAMPYLE_DATA.isEmbeddedDisplayType(data.formId)) {
            scrollToEmbeddedForm(data.formId);
            var scrollY = (KAMPYLE_UTILS.getScrollPosition() || {}).y || 0;
            KAMPYLE_VIEW.doScrollY(pixelsToScroll + scrollY);
        } else {
            KAMPYLE_VIEW.doScrollY(pixelsToScroll);
        }
    }
    function updateInviteIframeTitle(eventName, data) {
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.NEW_MODAL_DIALOGS)) {
            return;
        }
        var browser = KAMPYLE_UTILS.getNestedPropertyValue(KAMPYLE_UTILS.getBrowser(), "name");
        if (browser === KAMPYLE_CONSTANT.BROWSERS.SAFARI) {
            var inviteContent;
            if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.FORM_TEMPLATE_DATA_SEPERATION)) {
                var jsonDataMemoryKey = KAMPYLE_DATA.getMemoryJsonKey(data.formId, true);
                var jsonData = KAMPYLE_DATA.getMemoryData(jsonDataMemoryKey);
                inviteContent = jsonData.desktopDesign.invitationContentText;
            } else {
                inviteContent = data.inviteContent;
            }
            var titleText = KAMPYLE_UTILS.htmlDecode(inviteContent) || "";
            titleText = titleText.replace(/<[^>]+>/g, "").trim();
            var iframe = document.getElementById("kampyleInvite");
            iframe.title = titleText;
        }
    }
    function hideSpinnerIfPopup(eventName, data) {
        if (KAMPYLE_DATA.isPopupDisplayType(data.formId)) {
            hideSpinner();
        }
    }
    function handleInvitationSkippedForms(eventName, data) {
        if (KAMPYLE_DATA.getData("isSkipInvitationOptimized") !== "true") {
            return;
        }
        KAMPYLE_UTILS.setElementStyle(document.getElementById("kampyleFormContainer"), { visibility: "visible" }, true);
        KAMPYLE_VIEW.prepareHostingDOM();
        KAMPYLE_DATA.setData("isSkipInvitationOptimized", false);
    }
    function init() {
        var eventMapping = {
            neb_targetingInit: [removeAllShownElements],
            neb_loadInvitation: [createInviteIframe],
            neb_loadForm: [handleLightBoxIframe, showSpinner, applyMobileDynamicStyles],
            neb_formReady: [hideButton],
            neb_formLoaded: [setIframeOrigin, hideSpinner, showInviteIfNeeded],
            neb_formShown: [handleInvitationSkippedForms],
            neb_inviteHeightChanged: [changeInviteHeight],
            neb_iFrameHeightChanged: [reactToIframeHeightChange],
            neb_scrollToTop: [scrollToTop],
            neb_scrollFromTop: [scrollFromTop],
            neb_inviteReady: [handleInviteReady, setupListenersForHideInviteWhenVirtualKeyboardIsOpen],
            neb_scrollToForm: [scrollToForm],
            neb_showButton: [showButton, alignButtonWithForm, setVerticalOffset],
            neb_buttonClicked: [handleButtonClicked],
            neb_sdkShowForm: [hideButton],
            neb_captureInit: [hideVisibility, hideButton],
            neb_inviteAccepted: [hideInvite, hideButton, removeListenersForHideInviteWhenVirtualKeyboardIsOpen],
            neb_showForm: [showForm],
            neb_sdkPageView: [hideInvite, removeListenersForHideInviteWhenVirtualKeyboardIsOpen],
            neb_inviteDeclined: [hideInvite, removeListenersForHideInviteWhenVirtualKeyboardIsOpen],
            neb_formClosed: [hideForm],
            neb_popupBlocked: [hideForm],
            neb_formHide: [hideVisibility],
            neb_captureImageClicked: [showVisibility],
            MDigital_Capture_Cancelled: [showVisibility],
            neb_formLoadingHasFailed: [showFormCouldNotFechtedErrorMsg],
            neb_inviteLoaded: [updateInviteIframeTitle, hideSpinnerIfPopup],
            MDigital_Invalid_Origin: [showFormCouldNotFechtedErrorMsg],
        };
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ADDITIONAL_BUTTON_STYLES)) {
            eventMapping.neb_showButton.push(setZIndex);
        }
        KAMPYLE_EVENT_DISPATCHER.subscribeMany(eventMapping);
        if (!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.CSP_RULES)) {
            KAMPYLE_UTILS.addStyle(".noOutline{outline: none !important;}");
            KAMPYLE_UTILS.addStyle(".wcagOutline:focus{outline: 1px dashed #595959 !important;outline-offset: 2px !important;transition: none !important;}");
        }
        KAMPYLE_UTILS.setEventHandler(window, "resize", function (e) {
            updateIframeStyle();
        });
    }
    function toggleSpinner(isShow) {
        var display = isShow ? "block" : "none";
        var spinners = document.getElementsByClassName("neb-loading-spinner");
        if (spinners && spinners.length) {
            for (var i = spinners.length - 1; i >= 0; i--) {
                KAMPYLE_UTILS.setElementStyle(spinners[i], { display: display });
            }
        }
    }
    function hideSpinner(eventName, data) {
        toggleSpinner(false);
    }
    function showSpinner(eventName, data) {
        toggleSpinner(true);
    }
    function scrollToForm(eventName, data) {
        document.getElementById("kampyleFormContainer").scrollIntoView();
    }
    function getCornerMargin(formData) {
        formData = formData || {};
        var isInvite = KAMPYLE_UTILS.getNestedPropertyValue(formData, "formType") === "invitation";
        var margin;
        if (!isInvite) {
            var buttonType = KAMPYLE_UTILS.getNestedPropertyValue(formData, "buttonData.type");
            switch (buttonType) {
                case "vertical":
                case "triangular":
                    margin = DEFAULTS.TRIANGULAR_MARGIN;
                    break;
                case "custom":
                    margin = KAMPYLE_UTILS.getNestedPropertyValue(formData, "buttonData.cornerMargin") || DEFAULTS.CORNER_MARGIN;
                    break;
                default:
                    margin = DEFAULTS.CORNER_MARGIN;
                    break;
            }
        } else {
            margin = DEFAULTS.CORNER_MARGIN;
        }
        return parseInt(margin, 10);
    }
    function getButtonDirection(formData) {
        formData = formData || {};
        return KAMPYLE_UTILS.getNestedPropertyValue(formData, "buttonData.position") || "right";
    }
    function alignButtonWithForm(eventName, data) {
        data = data || {};
        var formData = KAMPYLE_DATA.getFormData(data.formId);
        var buttonContainer = document.getElementById("nebula_div_btn");
        if (!buttonContainer || !formData) {
            return false;
        }
        var cornerMargin = getCornerMargin(formData) + "px";
        switch (getButtonDirection(formData)) {
            case "bottomRight":
                buttonContainer.style.right = cornerMargin;
                break;
            case "bottomLeft":
                buttonContainer.style.left = cornerMargin;
                break;
            default:
                break;
        }
    }
    function setVerticalOffset(eventName, data) {
        var formData = KAMPYLE_DATA.getFormData(data.formId);
        var buttonData = KAMPYLE_UTILS.getNestedPropertyValue(formData, "buttonData");
        var offset = KAMPYLE_UTILS.getNestedPropertyValue(buttonData, "verticalOffset") || 0;
        if (!isNaN(offset)) {
            var nebButton = document.getElementById("nebula_div_btn");
            if (nebButton && nebButton.style) {
                if (buttonData.position.indexOf("bottom") > -1) {
                    nebButton.style.marginBottom = offset + "px";
                } else {
                    offset = Number(offset) * -1;
                    nebButton.style.marginTop = offset + "px";
                }
            }
        }
    }
    function setZIndex(eventName, data) {
        var formData = KAMPYLE_DATA.getFormData(data.formId);
        var zIndex = KAMPYLE_UTILS.getNestedPropertyValue(formData, "buttonData.zIndex");
        if (KAMPYLE_UTILS.isValueNumericAndDefined(zIndex)) {
            var nebButton = document.getElementById("nebula_div_btn");
            nebButton.style.zIndex = zIndex;
        }
    }
    function showVisibility(eventName, data) {
        var currentFormId = KAMPYLE_DATA.getMemoryData("currentFormId");
        var formData = KAMPYLE_DATA.getFormData(currentFormId);
        if (KAMPYLE_DATA.getDisplayType(formData) === "animation") {
            return false;
        }
        var formContainer = document.getElementById("kampyleFormContainer");
        var formIframe = document.getElementById("kampyleForm" + currentFormId);
        if (!!formContainer && !!formIframe) {
            KAMPYLE_UTILS.setElementStyle(formContainer, { display: "block", visibility: "visible" }, true);
        }
    }
    function getWCAGClass() {
        return KAMPYLE_DATA.isFeatureEnabled(KAMPYLE_CONSTANT.FEATURE_FLAGS.WCAG) ? " wcagOutline " : " noOutline ";
    }
    function hideVisibility() {
        var currentFormId = KAMPYLE_DATA.getMemoryData("currentFormId");
        if (!currentFormId) {
            return;
        }
        var formContainer = document.getElementById("kampyleFormContainer");
        var formIframe = document.getElementById("kampyleForm" + currentFormId);
        var noDataContainer = document.getElementById("mdigital-no-json-modal_" + currentFormId);
        if (!!formContainer && (!!formIframe || !!noDataContainer)) {
            KAMPYLE_UTILS.setElementStyle(formContainer, { display: "none", visibility: "hidden" }, true);
        }
    }
    function hideForm(eventName, data) {
        data = data || {};
        var currentFormId = KAMPYLE_DATA.getMemoryData("currentFormId");
        setMetaViewport("remove");
        if (document.getElementById("kampyleFormContainer") !== null) {
            var currIframe = document.getElementById("kampyleForm" + currentFormId);
            if (!!currIframe) {
                KAMPYLE_DATA.initOnsiteDefaultState();
                var kampyleFormContainer = document.getElementById("kampyleFormContainer");
                if (kampyleFormContainer && kampyleFormContainer.remove) {
                    kampyleFormContainer.remove();
                }
                KAMPYLE_UTILS.setElementStyle(currIframe, { display: "none" }, true);
                if (currIframe.removeAttribute) {
                    currIframe.removeAttribute("origin");
                }
            }
            hideVisibility();
            restoreHostingDOM();
        }
        if (KAMPYLE_DATA.isPopupDisplayType(currentFormId)) {
            if (data.sourceWindow && data.sourceWindow.close) {
                data.sourceWindow.close();
            }
        }
    }
    function formatTriangularStyle(formData) {
        var buttonData = formData.buttonData || {};
        var triangularStyle = [
            "button#nebula_div_btn { height: auto !important }",
            ".kampyle_feedback-button{",
            'background-color:transparent !important;font-family:"Open Sans",sans-serif;cursor:pointer;position:fixed;z-index:99999990',
            "}",
            ".kampyle_feedback-button .kampyle_triangle{position:absolute;width:0;height:0;z-index:-1}",
            ".kampyle_feedback-button .kampyle_button-text{",
            "height:81px;width:81px;text-align:center;z-index:1000;color:" + buttonData.textColor + ";font-size:14px;font-weight:normal !important;",
            "}",
            ".kampyle_feedback-button .kampyle_bottom{",
            "line-height:108px !important;",
            "}",
            ".kampyle_feedback-button .kampyle_top {",
            "line-height:53px !important;",
            "}",
            ".kampyle_feedback-button.kampyle_top-right{",
            "top:0;right:0;",
            "}",
            ".kampyle_feedback-button.kampyle_top-left .kampyle_triangle, .kampyle_feedback-button.kampyle_top-right .kampyle_triangle {",
            "top:0;border-top:81px solid;",
            "}",
            ".kampyle_feedback-button.kampyle_bottom-left .kampyle_triangle, .kampyle_feedback-button.kampyle_bottom-right .kampyle_triangle {",
            "bottom:0;border-bottom:81px solid;",
            "}",
            ".kampyle_feedback-button.kampyle_bottom-right .kampyle_triangle, .kampyle_feedback-button.kampyle_top-right .kampyle_triangle {",
            "right:0;border-left:81px solid transparent;",
            "}",
            ".kampyle_feedback-button.kampyle_bottom-left .kampyle_triangle, .kampyle_feedback-button.kampyle_top-left .kampyle_triangle {",
            "left:0;border-right:81px solid transparent;",
            "}",
            "#nebula_div_btn .kampyle_triangle {",
            "border-bottom-color: " + buttonData.backgroundColor + ";",
            "border-top-color: " + buttonData.backgroundColor + ";",
            "}",
            ".kampyle_feedback-button.kampyle_top-right .kampyle_button-text, .kampyle_feedback-button.kampyle_bottom-left .kampyle_button-text {",
            "-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg);transform:rotate(45deg);",
            "}",
            ".kampyle_feedback-button.kampyle_top-left .kampyle_button-text, .kampyle_feedback-button.kampyle_bottom-right .kampyle_button-text {",
            "-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transform:rotate(-45deg);",
            "}",
            ".kampyle_feedback-button.kampyle_top-left {",
            "top:0;left:0;",
            "}",
            ".kampyle_feedback-button.kampyle_bottom-right {",
            "bottom:0;right:0;",
            "}",
            ".kampyle_feedback-button.kampyle_bottom-left {",
            "bottom:0;left:0;",
            "}",
            ".kampyle_feedback-button.kampyle_bottom-left, .kampyle_feedback-button.kampyle_bottom-right, .kampyle_feedback-button.kampyle_top-left, .kampyle_feedback-button.kampyle_top-right {",
            "padding: 0 !important;",
            "}",
        ].join(" ");
        return triangularStyle;
    }
    function formatVerticalStyle(formData) {
        var buttonData = formData.buttonData || {};
        var textScaling = "";
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.RTL) && MDIGITAL.LOCALIZATION.isFormLanguageRtl(formData)) {
            textScaling = "transform: scale(-1);-ms-transform: scale(-1);-webkit-transform: scale(-1)";
        }
        var verticalStyle = [
            "button#nebula_div_btn { height: auto !important }",
            ".kampyle_vertical_button {",
            'background-color:transparent !important;font-family:"Open Sans",sans-serif;cursor:pointer;position:fixed;top:45%;z-index:99999990;height:35px !important;min-height: 35px !important;max-height: 35px !important;width:125px !important;max-width: 125px !important;min-width: 125px !important;-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg);transform:rotate(90deg)',
            "}",
            ".kampyle_vertical_button .kampyle_button {",
            "height:35px;min-height: 35px !important;max-height: 35px !important;width:125px !important;min-width: 125px !important;max-width: 125px !important; background:{{BUTTON_BACKGROUND_COLOR}};color:{{BUTTON_TEXT_COLOR}};position:absolute;top:0;left:0;z-index:-1;",
            "}",
            ".kampyle_vertical_button .kampyle_button-text {",
            "color:{{BUTTON_TEXT_COLOR}};font-size:14px;line-height:35px;text-align:center;font-weight:normal !important;" + textScaling,
            "}",
            ".kampyle_vertical_button.kampyle_left .kampyle_button {",
            "-webkit-border-radius:3px 3px 0 0;-moz-border-radius:3px 3px 0 0;-ms-border-radius:3px 3px 0 0;border-radius:3px 3px 0 0;",
            "}",
            ".kampyle_vertical_button.kampyle_right {",
            "right:-45px;",
            "}",
            ".kampyle_vertical_button.kampyle_left {",
            "left:-45px",
            "}",
            ".kampyle_vertical_button.kampyle_right .kampyle_button {",
            "-webkit-border-radius:0 0 3px 3px;-moz-border-radius:0 0 3px 3px;-ms-border-radius:0 0 3px 3px;border-radius:0 0 3px 3px",
            "}",
            ".kampyle_vertical_button.kampyle_right, .kampyle_vertical_button.kampyle_left  {",
            "padding: 0 !important;",
            "}",
        ].join(" ");
        verticalStyle = verticalStyle.replace(/{{BUTTON_TEXT_COLOR}}/g, buttonData.textColor);
        verticalStyle = verticalStyle.replace(/{{BUTTON_BACKGROUND_COLOR}}/g, buttonData.backgroundColor);
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ADDITIONAL_BUTTON_STYLES)) {
            verticalStyle += [
                ".kampyle_vertical_button:hover .kampyle_button-text {",
                "color:" + buttonData.textHoverColor + ";",
                "}",
                ".kampyle_vertical_button:hover .kampyle_button {",
                "background-color:" + buttonData.backgroundHoverColor + ";",
                "}",
            ].join(" ");
        }
        return verticalStyle;
    }
    function getTriangleButtonStyle(formData) {
        var buttonText = KAMPYLE_VIEW.getButtonText(formData);
        var classDirection = getClassDirectonByPosition(formData.buttonData.position);
        return (
            '<button id="nebula_div_btn" style="border: none; background: none" alt="' +
            buttonText +
            '" tabindex="0" class="kampyle_feedback-button ' +
            classDirection.leftright +
            " " +
            getWCAGClass() +
            '"><div class="kampyle_triangle"></div><div data-aut="feedback" class="kampyle_button-text ' +
            classDirection.topbottom +
            '">' +
            buttonText +
            "</div></button>"
        );
    }
    function getVerticalButtonStyle(formData) {
        var direction = "kampyle_left";
        var buttonText = KAMPYLE_VIEW.getButtonText(formData);
        switch (formData.buttonData.position) {
            case "left":
                direction = "kampyle_left";
                break;
            case "right":
                direction = "kampyle_right";
                break;
        }
        return (
            '<button id="nebula_div_btn" style="position: fixed !important; border: none" alt="' +
            buttonText +
            '" tabindex="0" class="kampyle_vertical_button ' +
            direction +
            " " +
            getWCAGClass() +
            '"><div class="kampyle_button"></div><div data-aut="feedback" class="kampyle_button-text">' +
            buttonText +
            "</div></button>"
        );
    }
    function displayGenericFormBtn(formData) {
        var btnBuilders = { vertical: { html: getVerticalButtonStyle, style: formatVerticalStyle }, triangular: { html: getTriangleButtonStyle, style: formatTriangularStyle } }[formData.buttonData.type];
        if (!btnBuilders) {
            KAMPYLE_UTILS.showWarning("Invalid button type " + formData.buttonData.type);
            return "";
        }
        KAMPYLE_UTILS.addStyle(btnBuilders.style(formData));
        return btnBuilders.html(formData);
    }
    function displayImageFormBtn(formData) {
        var divStyle = "z-index: 99999990 !important;position: fixed !important;cursor: pointer !important;line-height:1px !important; padding:0;";
        var buttonText = KAMPYLE_VIEW.getButtonText(formData);
        var imageBtnStyles = [".nebula_image_button {", "width: auto !important;", "background: transparent !important;", "}"].join(" ");
        KAMPYLE_UTILS.addStyle(imageBtnStyles);
        switch (formData.buttonData.position) {
            case "bottomLeft":
                divStyle += "bottom:0;left:0;";
                break;
            case "bottomRight":
                divStyle += "bottom:0;right:0;";
                break;
            case "topLeft":
                divStyle += "top:0;left:0;";
                break;
            case "topRight":
                divStyle += "top:0;right:0;";
                break;
            case "left":
                divStyle += "left:0;top:50%;";
                break;
            case "right":
                divStyle += "right:0;top:50%;";
                break;
            default:
                break;
        }
        return '<button id="nebula_div_btn" class="nebula_image_button ' + getWCAGClass() + '" style="' + divStyle + ';border: none" tabindex="0"><img alt="' + buttonText + '" src="' + formData.buttonData.buttonUrl + '" /></button>';
    }
    function showIframeContainers(formId) {
        setMetaViewport("add");
        var kampyleFormContainer = document.getElementById("kampyleFormContainer");
        if (kampyleFormContainer) {
            var currIframe = document.getElementById("kampyleForm" + formId);
            if (!!currIframe) {
                KAMPYLE_UTILS.setElementStyle(currIframe, { display: "block" }, true);
            }
            KAMPYLE_UTILS.setElementStyle(kampyleFormContainer, { display: "block", visibility: "visible" }, true);
        }
    }
    function onErrModalClose(formId) {
        var NO_JSON_MODAL_ID = "mdigital-no-json-modal_" + formId;
        hideForm({ formId: formId });
        var noJsonElement = document.getElementById(NO_JSON_MODAL_ID);
        if (noJsonElement) {
            noJsonElement.style.display = "none";
        }
        KAMPYLE_DATA.setFormState(formId, { shown: false });
        KAMPYLE_VIEW.resetFormState(formId);
        showButton("", { formId: KAMPYLE_DATA.getMemoryData("buttonFormId") });
        KAMPYLE_UTILS.triggerCustomEvent(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_NO_JSON_MODAL_CLOSED, { formId: formId });
        KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_NO_JSON_MODAL_CLOSED, { formId: formId });
    }
    function resetFormState(formId) {
        var isInvite = KAMPYLE_DATA.getFormTriggerType(formId) === KAMPYLE_CONSTANT.FORM_TYPES.INVITATION;
        var formJsonMemoryKey = KAMPYLE_DATA.getMemoryJsonKey(formId, isInvite);
        var progressFetchingKey = KAMPYLE_DATA.getMemoryJsonKey(formId, isInvite, KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.FETCHING_DATA_IN_PROGRESS);
        KAMPYLE_DATA.setMemoryData(formJsonMemoryKey, null);
        KAMPYLE_DATA.setMemoryData(progressFetchingKey, null);
        KAMPYLE_DATA.setFormState(formId, { loaded: null, loading: null });
        KAMPYLE_DATA.setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.IS_BUTTON_CONTAINER_CREATED, false);
        KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.NEB_RESET_FORM_STATE, { formId: formId });
    }
    function getErrorFetchedModal(formId) {
        var errorModalLang = "en";
        var errorMessageTitle = KAMPYLE_CONSTANT.TEXTS.DEFAULT_JSON_ERROR_MESSAGES.title;
        var errorMessageBody = KAMPYLE_CONSTANT.TEXTS.DEFAULT_JSON_ERROR_MESSAGES.body;
        var errorMessageClose = KAMPYLE_CONSTANT.TEXTS.DEFAULT_JSON_ERROR_MESSAGES.close;
        var NO_JSON_MODAL_ID = "mdigital-no-json-modal_" + formId;
        return MDIGITAL_ELEMENT_BUILDER.getErrorModal(NO_JSON_MODAL_ID, errorModalLang, errorMessageTitle, errorMessageBody, errorMessageClose);
    }
    function handleButtonClicked(eventName, data) {
        var formData = KAMPYLE_DATA.getFormData(data.formId);
        var displayType = KAMPYLE_DATA.getDisplayType(formData);
        displayType = displayType.toLowerCase();
        if (displayType === "lightbox") {
            var kampyleFormContainer = document.getElementById("kampyleFormContainer");
            if (!kampyleFormContainer || KAMPYLE_FUNC.hasApplicationLoadingFailed(data.formId, false) || KAMPYLE_FUNC.isAnyOtherFormAlreadyShown(data.formId, true)) {
                return false;
            }
            KAMPYLE_UTILS.setElementStyle(kampyleFormContainer, { display: "block", visibility: "visible" }, true);
        }
    }
    function getClassDirectonByPosition(position) {
        var classDirection = { topbottom: "kampyle_bottom", leftright: "kampyle_bottom-left" };
        switch (position) {
            case "bottomLeft":
                classDirection.leftright = "kampyle_bottom-left";
                classDirection.topbottom = "kampyle_bottom";
                break;
            case "bottomRight":
                classDirection.leftright = "kampyle_bottom-right";
                classDirection.topbottom = "kampyle_bottom";
                break;
            case "topLeft":
                classDirection.leftright = "kampyle_top-left";
                classDirection.topbottom = "kampyle_top";
                break;
            case "topRight":
                classDirection.leftright = "kampyle_top-right";
                classDirection.topbottom = "kampyle_top";
                break;
            default:
                break;
        }
        return classDirection;
    }
    function shouldShowErrMsgOnForm(formId) {
        var formTriggerType = KAMPYLE_DATA.getFormTriggerType(formId);
        return MDIGITAL.FORM_STATE.shouldFormBeShown(formId) && (formTriggerType === KAMPYLE_CONSTANT.FORM_TYPES.BUTTON || formTriggerType === KAMPYLE_CONSTANT.FORM_TYPES.CODE);
    }
    function handleCloseButtonInErroModalKeydown(e, formId) {
        if (e.keyCode === KAMPYLE_CONSTANT.KEY_CODES.SPACE || e.keyCode === KAMPYLE_CONSTANT.KEY_CODES.ENTER) {
            KAMPYLE_VIEW.onErrModalClose(formId);
        } else if (e.keyCode === KAMPYLE_CONSTANT.KEY_CODES.TAB) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    function onErrorModalKeyPressed(e, formId) {
        e.preventDefault();
        if (e.keyCode === KAMPYLE_CONSTANT.KEY_CODES.ESC) {
            KAMPYLE_VIEW.onErrModalClose(formId);
            return;
        }
        var closeButtonEl = document.querySelector("#mdigital-no-json-modal_" + formId + " #close-no-json-modal");
        if (!closeButtonEl) return;
        if (e.keyCode === KAMPYLE_CONSTANT.KEY_CODES.TAB && !e.shiftKey) {
            closeButtonEl.setAttribute("aria-hidden", false);
            closeButtonEl.focus();
        }
    }
    function showFormCouldNotFechtedErrorMsg(eventName, data) {
        if (KAMPYLE_FUNC.isAnyOtherFormAlreadyShown(data.formId) || !KAMPYLE_VIEW.shouldShowErrMsgOnForm(data.formId)) {
            return;
        }
        var NO_JSON_MODAL_ID = "mdigital-no-json-modal_" + data.formId;
        var kampyleFormModal = document.getElementById("kampyleFormModal");
        hideSpinner();
        showIframeContainers(data.formId);
        if (document.getElementById(NO_JSON_MODAL_ID)) {
            document.getElementById(NO_JSON_MODAL_ID).style.display = "block";
        } else {
            if (!kampyleFormModal) {
                createFormContainer();
                kampyleFormModal = document.getElementById("kampyleFormModal");
                showIframeContainers(data.formId);
            }
            var fetchedDataErrrModal = getErrorFetchedModal(data.formId);
            kampyleFormModal.innerHTML = "";
            if (kampyleFormModal && kampyleFormModal.appendChild) {
                kampyleFormModal.appendChild(fetchedDataErrrModal);
            }
            var closeBtnElem = document.querySelector("#" + NO_JSON_MODAL_ID + " #close-no-json-modal");
            closeBtnElem.onclick = onErrModalClose.bind(null, data.formId);
            if (KAMPYLE_DATA.isFeatureEnabled(KAMPYLE_CONSTANT.FEATURE_FLAGS.WCAG) || KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.NEW_MODAL_DIALOGS)) {
                fetchedDataErrrModal.addEventListener("keydown", function (e) {
                    onErrorModalKeyPressed(e, data.formId);
                });
                closeBtnElem.addEventListener("keydown", function (e) {
                    handleCloseButtonInErroModalKeydown(e, data.formId);
                });
            }
        }
        KAMPYLE_DATA.setFormState(data.formId, { loaded: null, shown: true });
        hideButton("", { formId: KAMPYLE_DATA.getMemoryData("buttonFormId") });
        KAMPYLE_UTILS.triggerCustomEvent(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_NO_JSON_MODAL_SHOWN, { formId: data.formId });
        var failureCause = KAMPYLE_COMMON.getFormFailureCause(data.formId);
        var payload = { failureCause: failureCause };
        if (failureCause === KAMPYLE_CONSTANT.FORM_LOADING_FAILURE_CAUSE.JSON_FAILED) {
            payload.jsonPath = KAMPYLE_DATA.getDataJsonUrl(data.formId, false);
        }
        KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_NO_JSON_MODAL_SHOWN, { additionalInfo: payload, formId: data.formId });
    }
    function showFeedbackButtonVisually() {
        var button = document.getElementById(KAMPYLE_CONSTANT.VIEW.FEEDBACK_BUTTON_ID);
        if (button == null) return;
        var positionStyles = KAMPYLE_DATA.getMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.FEEDBACK_BUTTON_POSITION_STYLE) || {};
        KAMPYLE_UTILS.setElementStyle(button, positionStyles, true);
        KAMPYLE_UTILS.removeAttribute(button, "tabindex");
        KAMPYLE_UTILS.removeAttribute(button, "aria-hidden");
    }
    function hideFeedbackButtonVisually() {
        var button = document.getElementById(KAMPYLE_CONSTANT.VIEW.FEEDBACK_BUTTON_ID);
        if (button == null) return;
        KAMPYLE_UTILS.setElementStyle(button, getVisualHidingStyleProperties(), true);
        KAMPYLE_UTILS.addAttributesOnElement(button, { tabindex: -1, "aria-hidden": true });
    }
    function showButton(eventName, data) {
        if (
            KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.NEW_MODAL_DIALOGS) &&
            document.getElementById(KAMPYLE_CONSTANT.VIEW.FEEDBACK_BUTTON_CONTAINER_ID) != null &&
            document.getElementById(KAMPYLE_CONSTANT.VIEW.FEEDBACK_BUTTON_ID) != null
        ) {
            KAMPYLE_VIEW.showFeedbackButtonVisually();
            triggerDisplayEvent(eventName, data);
        } else {
            KAMPYLE_VIEW.createButton(eventName, data);
        }
    }
    function triggerDisplayEvent(evetName, data) {
        data = data || {};
        var formData = KAMPYLE_DATA.getFormData(data.formId) || {};
        KAMPYLE_EVENT_DISPATCHER.trigger("neb_button_displayed", {
            formId: data.formId,
            position: KAMPYLE_UTILS.getNestedPropertyValue(formData, "buttonData.position") || "",
            formClosed: KAMPYLE_UTILS.getNestedPropertyValue(data, "formClosed") || false,
        });
    }
    function getVisualHidingStyleProperties() {
        return { position: "absolute", top: "-9999px", right: "9999px" };
    }
    function pickElementStyleProperties(button, properties) {
        var buttonStyle = button && button.style;
        return buttonStyle != null && properties != null && properties.length
            ? properties.reduce(function (acc, key) {
                  var value = buttonStyle[key];
                  if (value != null) {
                      acc[key] = value;
                  }
                  return acc;
              }, {})
            : {};
    }
    function createButton(eventName, data) {
        var btnHtml = "";
        data = data || {};
        var formData = KAMPYLE_DATA.getFormData(data.formId) || {};
        var buttonType = KAMPYLE_UTILS.getNestedPropertyValue(formData, "buttonData.type") || "";
        if (!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.CSP_RULES)) {
            switch (buttonType.toLowerCase()) {
                case "vertical":
                case "triangular":
                    btnHtml = displayGenericFormBtn(formData);
                    break;
                case "custom":
                    btnHtml = displayImageFormBtn(formData);
                    break;
                default:
                    KAMPYLE_UTILS.showWarning("Invalid button type - " + buttonType);
                    return false;
            }
            var spanContainer = document.getElementById("kampyleButtonContainer");
            if (spanContainer === null) {
                spanContainer = document.createElement("span");
                spanContainer.innerHTML = btnHtml;
                spanContainer.id = "kampyleButtonContainer";
                document.body.appendChild(spanContainer);
            } else {
                spanContainer.innerHTML = btnHtml;
            }
        }
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.NEW_MODAL_DIALOGS)) {
            var button = document.getElementById(KAMPYLE_CONSTANT.VIEW.FEEDBACK_BUTTON_ID);
            KAMPYLE_DATA.setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.FEEDBACK_BUTTON_POSITION_STYLE, pickElementStyleProperties(button, ["position", "top", "right"]));
        }
        KAMPYLE_EVENT_DISPATCHER.trigger("neb_button_displayed", {
            formId: data.formId,
            position: KAMPYLE_UTILS.getNestedPropertyValue(formData, "buttonData.position") || "",
            formClosed: KAMPYLE_UTILS.getNestedPropertyValue(data, "formClosed") || false,
        });
        spanContainer.onclick = function (event) {
            if (!KAMPYLE_FUNC.isAnyOtherFormAlreadyShown(data.formId, true)) {
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_buttonClicked", { formId: data.formId });
                event.preventDefault();
                event.stopPropagation();
            }
        };
        var isDesktop = KAMPYLE_DATA.getMemoryData("kampyleDevice") === KAMPYLE_CONSTANT.DEVICES.DESKTOP;
        if (isDesktop) {
            this.boundHandleLoadFormEvent = handleLoadFormEvent.bind(this, data, spanContainer);
            KAMPYLE_UTILS.setEventHandler(spanContainer, "mouseover", this.boundHandleLoadFormEvent);
            var buttonProximityFunc = function (event) {
                var formState = KAMPYLE_DATA.getFormState(data.formId);
                if (!formState || formState.loading || formState.loaded || KAMPYLE_DATA.getMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.IS_BUTTON_CONTAINER_CREATED)) {
                    return false;
                }
                var isNear = KAMPYLE_UTILS.isNear("nebula_div_btn", 100, event);
                if (isNear) {
                    KAMPYLE_EVENT_DISPATCHER.trigger("neb_load_form_preload_proximity", { formId: data.formId });
                    KAMPYLE_EVENT_DISPATCHER.trigger("neb_loadForm", { formId: data.formId });
                    KAMPYLE_DATA.setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.IS_BUTTON_CONTAINER_CREATED, true);
                }
            };
            KAMPYLE_UTILS.setEventHandler(window, "mousemove", buttonProximityFunc);
        }
        spanContainer.onkeyup = function (event) {
            switch (event.keyCode) {
                case KAMPYLE_CONSTANT.KEY_CODES.TAB:
                    KAMPYLE_EVENT_DISPATCHER.trigger("neb_loadForm", { formId: data.formId });
                    break;
                default:
                    break;
            }
        };
        spanContainer.onkeypress = function (event) {
            switch (event.keyCode) {
                case KAMPYLE_CONSTANT.KEY_CODES.ENTER:
                    if (!KAMPYLE_FUNC.isAnyOtherFormAlreadyShown(data.formId, true)) {
                        KAMPYLE_EVENT_DISPATCHER.trigger("neb_buttonClicked", { formId: data.formId });
                    }
                    break;
                default:
                    break;
            }
        };
    }
    function handleLoadFormEvent(data, spanContainer) {
        var formState = KAMPYLE_DATA.getFormState(data.formId);
        if (!(formState.loaded || KAMPYLE_DATA.getMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.IS_BUTTON_CONTAINER_CREATED))) {
            KAMPYLE_EVENT_DISPATCHER.trigger("neb_loadForm", { formId: data.formId });
            KAMPYLE_DATA.setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.IS_BUTTON_CONTAINER_CREATED, true);
        }
        KAMPYLE_UTILS.removeEventHandler(spanContainer, "mouseover", this.boundHandleLoadFormEvent);
    }
    function setIframeOrigin(eventName, data) {
        if (data.origin != undefined) {
            var formIframe = document.getElementById("kampyleForm" + data.formId);
            if (formIframe && formIframe.setAttribute) {
                formIframe.setAttribute("origin", data.origin);
            }
        }
    }
    function updateIframeStyle(formData) {
        var currentFormId = KAMPYLE_DATA.getMemoryData("currentFormId") || KAMPYLE_DATA.getShownFormId();
        if (document.getElementById("kampyleFormContainer") === null || !currentFormId) {
            return;
        }
        formData = formData || KAMPYLE_DATA.getFormData(currentFormId) || {};
        if (KAMPYLE_DATA.isMobileDynamicSizing(formData.formId)) {
            return updateDynamicIframeStyle(formData);
        } else {
            updateStaticIframeStyle(formData);
        }
    }
    function updateStaticIframeStyle(formData) {
        var currentFormId = (formData || {}).formId || KAMPYLE_DATA.getMemoryData("currentFormId") || KAMPYLE_DATA.getShownFormId();
        var formWidth;
        var formHeight;
        if (formData) {
            formWidth = parseInt(formData.formWidth, 10) || 450;
            formHeight = parseInt(formData.formHeight, 10) || 450;
        }
        var hostHeight = document.documentElement.clientHeight;
        var innerContainerStyle = { overflowY: "auto", height: "100%" };
        KAMPYLE_UTILS.setElementStyle(document.getElementById("innerContainer"), innerContainerStyle);
        var iframeStyleObject = { border: 0, position: "relative", margin: "50px auto 50px", height: formHeight + "px", width: formWidth + "px" };
        var kampyleDevice = KAMPYLE_DATA.getMemoryData("kampyleDevice");
        if (kampyleDevice === KAMPYLE_CONSTANT.DEVICES.MOBILE || kampyleDevice === KAMPYLE_CONSTANT.DEVICES.TABLET) {
            formHeight = "100%";
            formWidth = "100%";
            iframeStyleObject = { position: "relative", margin: "0", height: formHeight, width: formWidth };
        } else if (KAMPYLE_DATA.isCustomHtmlAndFixedSizeForm(currentFormId)) {
            iframeStyleObject = { position: "absolute", top: "50%", "margin-top": -formHeight / 2 + "px", left: "50%", "margin-left": -formWidth / 2 + "px", height: formHeight + "px", width: formWidth + "px" };
            if (hostHeight < formHeight) {
                iframeStyleObject.position = "relative";
                iframeStyleObject.top = "0";
                iframeStyleObject["margin-top"] = "50px";
                iframeStyleObject["margin-bottom"] = "50px";
            }
        } else {
            iframeStyleObject = { position: "fixed", height: "100%", width: "100%" };
        }
        var modal = document.getElementById("kampyleFormModal");
        if (modal && modal.style && modal.removeAttribute) {
            modal.removeAttribute("style");
            KAMPYLE_UTILS.setElementStyle(modal, iframeStyleObject, true);
        }
    }
    function updateDynamicIframeStyle(formData) {
        var spanContainer = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.LIGHTBOX.WRAPPER_ID);
        if (spanContainer) {
            spanContainer.setAttribute("aria-hidden", false);
        }
        var modal = document.getElementById("kampyleFormModal");
        if (modal) {
            KAMPYLE_UTILS.setElementStyle(modal, { top: 0, margin: 0, width: "100%" }, true);
        }
    }
    function openPopup(formUrl, formId, formWidth, formHeight, eventName) {
        formUrl = KAMPYLE_COMMON.createFormUrl(formUrl, formId);
        var popupPageName = "NebulaCX" + formId;
        var popupSettings = "width=" + formWidth + ", height=" + formHeight + ",scrollbars=yes";
        var popupHandler = window.open(formUrl, popupPageName, popupSettings);
        var isPopupBlocked = !popupHandler || popupHandler.closed || typeof popupHandler.closed == "undefined";
        KAMPYLE_DATA.setMemoryData("popupHandler", popupHandler);
        setTimeout(function () {
            if (isPopupBlocked) {
                if (eventName !== "neb_skipInvitation") {
                    alert("The survey was blocked, please disable popup blocker and refresh the page.");
                }
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_popupBlocked", { formId: formId });
            }
        }, 25);
    }
    function handlePopupShow(formUrl, formId, formWidth, formHeight, eventName) {
        if (KAMPYLE_FUNC.shouldRenderForm({ formId: formId })) {
            openPopup(formUrl, formId, formWidth, formHeight, eventName);
        }
    }
    function showForm(eventName, data) {
        var isSkipInvitationEvent = eventName === "neb_skipInvitation";
        data = data || {};
        var formData = KAMPYLE_DATA.getFormData(data.formId);
        if (KAMPYLE_VIEW.ignoreShowForm(formData) || KAMPYLE_FUNC.hasApplicationLoadingFailed(data.formId, false) || KAMPYLE_FUNC.isAnyOtherFormAlreadyShown(data.formId, true)) {
            return false;
        }
        var formUrl = formData.formHtmlUrl;
        var formWidth = formData.formWidth;
        var formHeight = formData.formHeight;
        var displayType = KAMPYLE_DATA.getDisplayType(formData);
        displayType = displayType.toLowerCase();
        setMetaViewport("add");
        KAMPYLE_DATA.setMemoryData("currentFormId", data.formId);
        if (!KAMPYLE_DATA.isEmbeddedDisplayType(data.formId)) {
            KAMPYLE_DATA.setMemoryData("formIsShown", true);
            KAMPYLE_DATA.setMemoryData("isInvitationShouldBeIgnored", true);
        }
        var kampyleDevice = KAMPYLE_DATA.getMemoryData("kampyleDevice");
        var shouldOptimizeSkipInvitation = isSkipInvitationEvent && KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.SKIP_INVITATION_OPTIMIZATION);
        if (displayType === "lightbox") {
            if (!shouldOptimizeSkipInvitation) {
                KAMPYLE_VIEW.prepareHostingDOM();
            } else {
                KAMPYLE_DATA.setData("isSkipInvitationOptimized", true);
            }
            var kampyleFormContainer = document.getElementById("kampyleFormContainer");
            if (kampyleFormContainer) {
                updateIframeStyle(formData);
                var currIframe = document.getElementById("kampyleForm" + data.formId);
                if (!!currIframe) {
                    KAMPYLE_UTILS.setElementStyle(currIframe, { display: "block" }, true);
                }
                KAMPYLE_UTILS.setElementStyle(kampyleFormContainer, { display: "block", visibility: shouldOptimizeSkipInvitation ? "hidden" : "visible" }, true);
            } else {
                KAMPYLE_UTILS.showWarning("formContainer wasn't loaded properly");
            }
        } else if (displayType === "popup") {
            handlePopupShow(formUrl, data.formId, formWidth, formHeight, eventName);
        }
        return true;
    }
    function ignoreShowForm(formData) {
        return !formData || KAMPYLE_DATA.getDisplayType(formData) === "animation";
    }
    function hideInvite() {
        KAMPYLE_DATA.setMemoryData("inviteLoadedAndShown", false);
        setMetaViewport("remove");
        var inviteContainer = document.getElementById("kampyleInviteContainer");
        var kampyleInvite = document.getElementById("kampyleInvite");
        if (inviteContainer && kampyleInvite) {
            KAMPYLE_UTILS.setElementStyle(inviteContainer, { display: "none" }, true);
            restoreHostingDOM();
        }
    }
    function changeInviteHeight(eventName, data) {
        data = data || {};
        var positions = ["top", "bottom"];
        var isInviteShown = (KAMPYLE_DATA.getFormState(data.formId) || {}).inviteShown;
        if (!newMobileInvite() || !isInviteShown) {
            return false;
        }
        var pos = KAMPYLE_VIEW.getInvitePosition(data.formId);
        var inviteContainer = document.getElementById("kampyleInviteContainer");
        var inviteIframe = document.getElementById("kampyleInvite");
        if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") {
            KAMPYLE_UTILS.hideInvite();
            KAMPYLE_UTILS.setEventHandler(
                document.activeElement,
                "blur",
                (function (elm) {
                    return function onBlurCallback() {
                        KAMPYLE_UTILS.removeEventHandler(elm, "blur", onBlurCallback);
                        KAMPYLE_UTILS.showInvite();
                    };
                })(document.activeElement)
            );
        } else {
            KAMPYLE_UTILS.showInvite();
        }
        var style = { display: "block", height: data.newHeight + "px", left: "0", right: "0" };
        style[pos] = 0;
        style[positions[(positions.indexOf(pos) + 1) % 2]] = "";
        KAMPYLE_UTILS.setElementStyle(inviteContainer, style, true);
    }
    function setMetaViewport(optional) {
        optional = optional || "";
        if (KAMPYLE_DATA.getMemoryData("kampyleDevice") === "desktop") {
            return;
        }
        var isWCAGUserScalable = KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.FORM_TEMPLATES_WCAG) ? "width=device-width, initial-scale=1.0" : "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
        var kampyleMeta = document.getElementById("kampyleMetaViewport");
        var hostedViewportContent = document.getElementsByName("viewport");
        var savedViewportContent = KAMPYLE_DATA.getMemoryData("hostedViewportContent") || [];
        if (hostedViewportContent && hostedViewportContent.length && !savedViewportContent.length) {
            for (var i = hostedViewportContent.length - 1; i >= 0; i--) {
                if (hostedViewportContent[i].hasAttribute("content")) {
                    savedViewportContent.push(hostedViewportContent[i]);
                }
            }
        }
        switch (optional.toLowerCase()) {
            case "add":
                if (savedViewportContent && savedViewportContent.length) {
                    for (var i = savedViewportContent.length - 1; i >= 0; i--) {
                        if (savedViewportContent[i].hasAttribute("id") && savedViewportContent[i].id === "kampyleMetaViewport") {
                            continue;
                        } else {
                            if (savedViewportContent[i].remove) {
                                savedViewportContent[i].remove();
                            }
                        }
                    }
                }
                if (!kampyleMeta) {
                    var meta = document.createElement("meta");
                    meta.content = isWCAGUserScalable;
                    meta.name = "viewport";
                    meta.id = "kampyleMetaViewport";
                    document.getElementsByTagName("head")[0].appendChild(meta);
                } else {
                    kampyleMeta.content = isWCAGUserScalable;
                    kampyleMeta.name = "viewport";
                }
                break;
            case "remove":
                if (kampyleMeta) {
                    kampyleMeta.content = "";
                    kampyleMeta.name = "";
                    if (kampyleMeta.remove) {
                        kampyleMeta.remove();
                    }
                }
                if (savedViewportContent && savedViewportContent.length) {
                    for (var i = savedViewportContent.length - 1; i >= 0; i--) {
                        if (savedViewportContent[i].hasAttribute("id") && savedViewportContent[i].id === "kampyleMetaViewport") {
                            continue;
                        } else {
                            document.getElementsByTagName("head")[0].appendChild(savedViewportContent[i]);
                        }
                    }
                }
                break;
        }
        KAMPYLE_DATA.setMemoryData("hostedViewportContent", savedViewportContent);
    }
    function newMobileInvite() {
        return Number(KAMPYLE_DATA.getMemoryData("inviteVersion")) > 0 && KAMPYLE_DATA.isNewMobileInvitation();
    }
    function getInvitePosition(formId) {
        var formData = KAMPYLE_DATA.getFormData(formId) || {};
        return (formData.inviteData || {}).invitationPosition || "top";
    }
    function showInvite(eventName, data) {
        setMetaViewport("add");
        var inviteTop = "25%";
        var inviteData = KAMPYLE_DATA.getInviteData(data.formId);
        if (!inviteData || !MDIGITAL.FORM_STATE.isInviteLoaded(data.formId) || !KAMPYLE_FUNC.isJsonDataLoaded(data.formId, true)) {
            return false;
        }
        var kampyleDevice = KAMPYLE_DATA.getMemoryData("kampyleDevice");
        if (kampyleDevice === KAMPYLE_CONSTANT.DEVICES.MOBILE || kampyleDevice === KAMPYLE_CONSTANT.DEVICES.TABLET) {
            inviteData.inviteHeight = "100%";
            inviteData.inviteWidth = "100%";
            inviteTop = 0;
        }
        var invitationTimeStamp = KAMPYLE_UTILS.getCurrentTimestamp();
        KAMPYLE_DATA.setMemoryData("invitationTimeStamp", invitationTimeStamp);
        KAMPYLE_DATA.setData("LAST_INVITATION_VIEW", invitationTimeStamp);
        var inviteContainer = document.getElementById("kampyleInviteContainer");
        if (inviteContainer && KAMPYLE_DATA.getMemoryData("formIsShown") === false) {
            KAMPYLE_UTILS.setElementStyle(inviteContainer, { display: "block", visibility: KAMPYLE_DATA.isNewMobileInvitation() ? "hidden" : "visible" }, true);
            prepareHostingDOM();
            KAMPYLE_EVENT_DISPATCHER.trigger("neb_invitation_ready", { formId: data.formId });
            var inviteModal = document.getElementById("kampyleInviteModal");
            if (inviteModal) {
                KAMPYLE_UTILS.setElementStyle(
                    inviteModal,
                    { top: inviteTop, width: inviteData.inviteWidth + "px", "max-width": inviteData.inviteWidth + "px", height: inviteData.inviteHeight + "px", "max-height": inviteData.inviteHeight + "px", display: "block" },
                    true
                );
            }
            var inviteIframe = document.getElementById("kampyleInvite");
            if (inviteIframe) {
                KAMPYLE_UTILS.setElementStyle(
                    inviteIframe,
                    {
                        width: inviteData.inviteWidth + "px",
                        "max-width": inviteData.inviteWidth + "px",
                        height: inviteData.inviteHeight + "px",
                        "max-height": inviteData.inviteHeight + "px",
                        display: "block",
                        visibility: KAMPYLE_DATA.isNewMobileInvitation() ? "hidden" : "visible",
                    },
                    true
                );
            }
        }
        return true;
    }
    function prepareHostingDOM() {
        if (KAMPYLE_DATA.isMobileDynamicSizing()) {
            KAMPYLE_VIEW.manipulateAriaHiddens();
            KAMPYLE_DATA.setMemoryData("hostedBodyOverflowXAttr", document.body.style.overflowX);
            document.body.style.overflowX = "hidden";
        } else {
            KAMPYLE_DATA.setMemoryData("hostedBodyPositionAttr", document.body.style.position);
            if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ENABLE_OVERFLOW)) {
                return false;
            } else {
                KAMPYLE_DATA.setMemoryData("hostedBodyOverflowAttr", document.body.style.overflow);
                document.body.style.overflow = "hidden";
                var kampyleDevice = KAMPYLE_DATA.getMemoryData("kampyleDevice");
                if (kampyleDevice === KAMPYLE_CONSTANT.DEVICES.MOBILE || kampyleDevice === KAMPYLE_CONSTANT.DEVICES.TABLET) {
                    document.body.style.position = "fixed";
                }
            }
        }
    }
    function restoreHostingDOM() {
        if (KAMPYLE_DATA.isMobileDynamicSizing()) {
            var modal = document.getElementById("kampyleFormModal");
            KAMPYLE_UTILS.setElementStyle(modal, { height: "100%" }, true);
            KAMPYLE_VIEW.restoreAriaHidden();
            document.body.style.overflowX = KAMPYLE_DATA.getMemoryData("hostedBodyOverflowXAttr") || "";
        } else {
            if (!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ENABLE_OVERFLOW)) {
                document.body.style.overflow = KAMPYLE_DATA.getMemoryData("hostedBodyOverflowAttr") || "";
            }
            document.body.style.position = KAMPYLE_DATA.getMemoryData("hostedBodyPositionAttr") || "";
        }
    }
    function createFormContainer() {
        if (!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.CSP_RULES)) {
            var formSpanPlacer = Object.assign(document.createElement("span"), { id: KAMPYLE_CONSTANT.IFRAME_SETTINGS.LIGHTBOX.WRAPPER_ID });
            var html = "";
            html +=
                '<div id="kampyleFormContainer" style="top:0 !important;left:0 !important;width: 100% !important;height: 100% !important;position: fixed !important;visibility:hidden !important;display:table !important;background-color: rgba(102,102,102,0.4) !important;z-index:99999999 !important;-webkit-overflow-scrolling: touch !important; ">';
            html += ' <div id="innerContainer">';
            html += '   <div id="kampyleFormModal" style="z-index:99999999 !important; -webkit-overflow-scrolling: touch !important;"></div>';
            html += " </div>";
            html += "</div>";
            formSpanPlacer.innerHTML = html;
            var spinnerContainer = MDIGITAL_ELEMENT_BUILDER.createSpinnerElement();
            formSpanPlacer.querySelector("#innerContainer").appendChild(spinnerContainer);
            KAMPYLE_UTILS.setSpinnerStyle(spinnerContainer, KAMPYLE_CONSTANT.SPINNER_SETTINGS.SIZE.LARGE);
            if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ENABLE_WCAG_PREPEND_SURVEY)) {
                document.body.prepend(formSpanPlacer);
            } else {
                document.body.appendChild(formSpanPlacer);
            }
        }
    }
    function handleLightBoxIframe(eventName, data) {
        data = data || {};
        var formState = KAMPYLE_DATA.getFormState(data.formId);
        if ((formState && formState.loaded) || KAMPYLE_FUNC.hasApplicationLoadingFailed(data.formId, false)) {
            return;
        }
        var formData = KAMPYLE_DATA.getFormData(data.formId);
        var displayType = KAMPYLE_DATA.getDisplayType(formData);
        if (!formData || !data.formId || displayType !== "lightbox") {
            return;
        }
        var timeoutKey = KAMPYLE_CONSTANT.TIMEOUT_HANDLERS.FORM_APP_STATUS + "_" + data.formId;
        var timeoutAlreadyCreated = !!KAMPYLE_DATA.getTimeoutHandler(timeoutKey);
        if (!timeoutAlreadyCreated) {
            var appStatusCheck = window.setTimeout(function () {
                if (!KAMPYLE_FUNC.isFormLoaded(data.formId)) {
                    KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.NEB_FORM_LOADING_HAS_FAILED, {
                        formId: data.formId,
                        failureCause: KAMPYLE_CONSTANT.FORM_LOADING_FAILURE_CAUSE.APPLICATION_FAILED,
                        formState: KAMPYLE_DATA.getFormState(data.formId),
                    });
                }
            }, KAMPYLE_CONSTANT.NETWORK.TIME_FOR_FORM_TO_LOAD_MS);
            KAMPYLE_DATA.setTimeoutHandler(timeoutKey, appStatusCheck);
        }
        if (!document.getElementById("kampyleFormContainer")) {
            createFormContainer();
        }
        var formIframe = document.getElementById("kampyleForm" + data.formId);
        if (!formIframe) {
            var iframeStyleObject = { border: 0, height: "100%", "max-height": "100%", "min-height": "100%", width: "100%", "max-width": "100%", "min-width": "100%", display: "none" };
            if (!KAMPYLE_DATA.isCustomHtmlForm(data.formId) && !KAMPYLE_DATA.isMobileDynamicSizing(formData.formId)) {
                iframeStyleObject.position = "fixed";
            }
            var isStyleImportant = true;
            var lightboxContainer = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.LIGHTBOX.CONTAINER_ID_PREFIX);
            KAMPYLE_VIEW.createFormIframe(data.formId, KAMPYLE_CONSTANT.IFRAME_SETTINGS.LIGHTBOX.IFRAME_ID_PREFIX, lightboxContainer, iframeStyleObject, isStyleImportant);
        }
    }
    function createFormIframe(formId, formPrefixId, iframeContainer, iframeStyleObject, isStyleImportant) {
        var formData = KAMPYLE_DATA.getFormData(formId);
        var formIframe = document.createElement("iframe");
        KAMPYLE_UTILS.setElementStyle(formIframe, iframeStyleObject, isStyleImportant);
        formIframe.id = formPrefixId + formId;
        var formHtml = formData.formHtmlUrl;
        formHtml = KAMPYLE_COMMON.createFormUrl(formHtml, formId);
        formIframe.src = formHtml;
        formIframe.tabIndex = -1;
        formIframe.setAttribute("title", KAMPYLE_CONSTANT.IFRAME_SETTINGS.IFRAME_TITLE);
        iframeContainer.appendChild(formIframe);
        return formIframe;
    }
    function applyMobileDynamicStyles(eventName, data) {
        var formId = data.formId;
        var kFormContainer = document.getElementById("kampyleFormContainer");
        if (!(formId && kFormContainer && KAMPYLE_DATA.isMobileDynamicSizing(formId))) {
            return false;
        }
        KAMPYLE_UTILS.setElementStyle(kFormContainer, { height: KAMPYLE_UTILS.getDocumentSize().height + "px", position: "absolute" }, true);
    }
    function getDefaultIframeHeight() {
        return KAMPYLE_UTILS.isIos() ? "30px" : "100%";
    }
    function iFrameHeightChangedHandler(eventData) {
        if (KAMPYLE_DATA.isLightBoxDisplayType(eventData.formId)) {
            var modal = document.getElementById("kampyleFormModal");
            var newHeight = Number((eventData || {}).newHeight);
            newHeight = isNaN(newHeight) ? getDefaultIframeHeight() : newHeight + "px";
            KAMPYLE_UTILS.setElementStyle(modal, { height: newHeight }, true);
        }
    }
    function reactToIframeHeightChange(eventName, eventData) {
        if (KAMPYLE_DATA.isMobileDynamicSizing((eventData || {}).formId)) {
            iFrameHeightChangedHandler(eventData);
            var formHeight = KAMPYLE_UTILS.getNestedPropertyValue(eventData, "newHeight");
            if (KAMPYLE_VIEW.shouldAddScroll(formHeight)) {
                var kFormContainer = document.getElementById("kampyleFormContainer");
                KAMPYLE_UTILS.setElementStyle(kFormContainer, { overflowY: "auto" }, true);
            }
        }
    }
    function manipulateAriaHiddens() {
        var bodyChilds = document.body.children;
        var ariaHiddenValues = [];
        for (var i = 0; i < bodyChilds.length; i++) {
            ariaHiddenValues.push({ element: bodyChilds[i], prevAriaHiddenValue: bodyChilds[i].getAttribute("aria-hidden") });
            bodyChilds[i].setAttribute("aria-hidden", true);
        }
        KAMPYLE_DATA.setMemoryData("initialAriaHiddenValues", ariaHiddenValues);
    }
    function restoreAriaHidden() {
        var storeValues = KAMPYLE_DATA.getMemoryData("initialAriaHiddenValues") || [];
        for (var i = 0; i < storeValues.length; i++) {
            if (!(storeValues[i].element && storeValues[i].element instanceof Element)) {
                continue;
            }
            if (storeValues[i].prevAriaHiddenValue === null) {
                storeValues[i].element.removeAttribute("aria-hidden");
            } else {
                storeValues[i].element.setAttribute("aria-hidden", storeValues[i].prevAriaHiddenValue);
            }
        }
        KAMPYLE_DATA.deleteMemoryData("initialAriaHiddenValues");
    }
    function createInviteIframe(eventName, eventData) {
        var data = KAMPYLE_DATA.getFormData(eventData.formId);
        var inviteSpanPlacer = Object.assign(document.createElement("span"), { id: KAMPYLE_CONSTANT.IFRAME_SETTINGS.INVITATION.WRAPPER_ID });
        if (!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.CSP_RULES)) {
            var inviteContainerStyles = "top:0 !important;left:0 !important;width: 100% !important;";
            inviteContainerStyles += "height: 100% !important;position: fixed !important;visibility:hidden !important;";
            inviteContainerStyles += "display:none !important;background-color: rgba(22,22,22,0.5) !important;";
            inviteContainerStyles += "z-index:99999999 !important;overflow:auto !important";
            inviteSpanPlacer.innerHTML =
                '<div id="kampyleInviteContainer" style="' +
                inviteContainerStyles +
                '">' +
                '<div id="kampyleInviteModal" style="overflow: hidden;margin: 0 auto;height:' +
                data.inviteData.inviteHeight +
                ";width:" +
                data.inviteData.inviteWidth +
                ';position:relative;z-index:99999999;top: 25%;-webkit-box-shadow:0 0 10px rgba(0,0,0,0.4);-moz-box-shadow:0 0 10px rgba(0,0,0,0.4); box-shadow:0 0 10px rgba(0,0,0,0.4);"></div></div>';
            var spinnerContainer = MDIGITAL_ELEMENT_BUILDER.createSpinnerElement();
            inviteSpanPlacer.querySelector("#kampyleInviteContainer").appendChild(spinnerContainer);
            KAMPYLE_UTILS.setSpinnerStyle(spinnerContainer, KAMPYLE_CONSTANT.SPINNER_SETTINGS.SIZE.LARGE);
            if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ENABLE_WCAG_PREPEND_SURVEY)) {
                document.body.prepend(inviteSpanPlacer);
            } else {
                document.body.appendChild(inviteSpanPlacer);
            }
        }
        var inviteIframe = document.createElement("iframe");
        inviteIframe.id = KAMPYLE_CONSTANT.IFRAME_SETTINGS.INVITATION.IFRAME_ID;
        inviteIframe.title = KAMPYLE_CONSTANT.IFRAME_SETTINGS.INVITATION.IFRAME_TITLE;
        inviteIframe.tabIndex = -1;
        var inviteHeight = data.inviteData.inviteHeight;
        var inviteWidth = data.inviteData.inviteWidth;
        var kampyleDevice = KAMPYLE_DATA.getMemoryData("kampyleDevice");
        if (kampyleDevice === KAMPYLE_CONSTANT.DEVICES.MOBILE || kampyleDevice === KAMPYLE_CONSTANT.DEVICES.TABLET) {
            inviteHeight = "100%";
            inviteWidth = "100%";
            var inviteModal = document.getElementById("kampyleInviteModal");
            if (!!inviteModal) {
                KAMPYLE_UTILS.setElementStyle(inviteModal, { height: "100%", width: "100%" }, true);
            }
        }
        KAMPYLE_UTILS.setElementStyle(inviteIframe, { height: inviteHeight, width: inviteWidth, display: "none", border: "0" }, true);
        var iframeSrc = data.inviteData.inviteUrl + "?formId=" + eventData.formId;
        if (KAMPYLE_DATA.isFeatureEnabled(KAMPYLE_CONSTANT.FEATURE_FLAGS.WCAG)) {
            iframeSrc += "&isWCAG=true";
        }
        iframeSrc += "&domainsListRelativePath=" + KAMPYLE_COMMON.getDomainsListRelativePath(iframeSrc);
        inviteIframe.src = iframeSrc;
        document.getElementById("kampyleInviteModal").appendChild(inviteIframe);
        if (KAMPYLE_DATA.isNewMobileInvitation()) {
            var spinner = document.getElementsByClassName("neb-loading-spinner")[0];
            KAMPYLE_UTILS.setElementStyle(spinner, { display: "none" }, true);
            KAMPYLE_UTILS.setElementStyle(inviteSpanPlacer, { "z-index": 99999998 }, true);
            var inviteContainer = document.getElementById("kampyleInviteContainer");
            if (inviteContainer) {
                KAMPYLE_UTILS.setElementStyle(inviteContainer, { "z-index": 99999998 }, true);
            }
        }
        setTimeout(function () {
            if (KAMPYLE_DATA.getFormState(data.formId).inviteLoaded !== true) {
                KAMPYLE_DATA.setFormState(data.formId, { inviteLoaded: false, inviteShown: false });
            }
        }, KAMPYLE_CONSTANT.NETWORK.TIME_FOR_FORM_TO_LOAD_MS);
    }
    function hideButton(eventName, data) {
        if (!data || KAMPYLE_DATA.isEmbeddedDisplayType(data.formId)) {
            return;
        }
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.NEW_MODAL_DIALOGS)) {
            KAMPYLE_VIEW.hideFeedbackButtonVisually();
        } else {
            KAMPYLE_VIEW.removeButton(eventName, data);
        }
    }
    function removeButton(eventName, data) {
        var buttonElementById = document.getElementById("kampyleButtonContainer");
        if (!buttonElementById) {
            return;
        }
        buttonElementById.innerHTML = "";
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.NEW_MODAL_DIALOGS)) {
            KAMPYLE_DATA.setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.FEEDBACK_BUTTON_POSITION_STYLE, {});
        }
    }
    function removeAllShownElements(eventName, data) {
        var lightboxWrapper = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.LIGHTBOX.WRAPPER_ID);
        var invitationWrapper = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.INVITATION.WRAPPER_ID);
        var animationWrapper = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.ANIMATION.WRAPPER_ID);
        var abandon = document.getElementById("kampyle_abandon_zone");
        KAMPYLE_VIEW.removeButton(eventName, data);
        if (lightboxWrapper) {
            KAMPYLE_UTILS.removeAllContent(lightboxWrapper);
        }
        if (invitationWrapper) {
            KAMPYLE_UTILS.removeAllContent(invitationWrapper);
        }
        if (animationWrapper) {
            KAMPYLE_UTILS.removeAllContent(animationWrapper);
        }
        if (abandon) {
            KAMPYLE_UTILS.removeAllContent(abandon);
        }
    }
    function getButtonText(formData) {
        if (typeof MDIGITAL.LOCALIZATION !== "undefined" && KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.LOCALIZED_FORMS)) {
            return MDIGITAL.LOCALIZATION.getLocalizedButtonText(formData);
        } else {
            return formData.buttonData.text;
        }
    }
    function shouldAddScroll(formHeight) {
        var bodyPosition = KAMPYLE_UTILS.getElementStyle(document.body, "position");
        return (bodyPosition === "fixed" || bodyPosition === "absolute") && KAMPYLE_UTILS.getDocumentSize().height <= formHeight;
    }
    return {
        setIframeOrigin: setIframeOrigin,
        ignoreShowForm: ignoreShowForm,
        scrollToEmbeddedForm: scrollToEmbeddedForm,
        scrollFromTop: scrollFromTop,
        doScrollY: doScrollY,
        removeAllShownElements: removeAllShownElements,
        handleLightBoxIframe: handleLightBoxIframe,
        createFormIframe: createFormIframe,
        createFormContainer: createFormContainer,
        showForm: showForm,
        hideForm: hideForm,
        showButton: showButton,
        createButton: createButton,
        hideInvite: hideInvite,
        hideButton: hideButton,
        hideFeedbackButtonVisually: hideFeedbackButtonVisually,
        showFeedbackButtonVisually: showFeedbackButtonVisually,
        removeButton: removeButton,
        handleInvitationSkippedForms: handleInvitationSkippedForms,
        updateIframeStyle: updateIframeStyle,
        formatTriangularStyle: formatTriangularStyle,
        formatVerticalStyle: formatVerticalStyle,
        prepareHostingDOM: prepareHostingDOM,
        restoreHostingDOM: restoreHostingDOM,
        getInvitePosition: getInvitePosition,
        newMobileInvite: newMobileInvite,
        changeInviteHeight: changeInviteHeight,
        iFrameHeightChangedHandler: iFrameHeightChangedHandler,
        manipulateAriaHiddens: manipulateAriaHiddens,
        restoreAriaHidden: restoreAriaHidden,
        getDefaultIframeHeight: getDefaultIframeHeight,
        shouldAddScroll: shouldAddScroll,
        shouldShowErrMsgOnForm: shouldShowErrMsgOnForm,
        onErrModalClose: onErrModalClose,
        handleLoadFormEvent: handleLoadFormEvent,
        handleCloseButtonInErroModalKeydown: handleCloseButtonInErroModalKeydown,
        onErrorModalKeyPressed: onErrorModalKeyPressed,
        pickElementStyleProperties: pickElementStyleProperties,
        resetFormState: resetFormState,
        init: init,
        setMetaViewport: setMetaViewport,
        setZIndex: setZIndex,
        showVisibility: showVisibility,
        getCornerMargin: getCornerMargin,
        showFormCouldNotFechtedErrorMsg: showFormCouldNotFechtedErrorMsg,
        handleInviteReady: handleInviteReady,
        getButtonText: getButtonText,
        showInvite: showInvite,
        getWCAGClass: getWCAGClass,
        getClassDirectonByPosition: getClassDirectonByPosition,
        updateInviteIframeTitle: updateInviteIframeTitle,
    };
})(window, document);
window.KAMPYLE_MESSAGE = (function () {
    function init() {
        KAMPYLE_UTILS.setEventHandler(window, "message", handleMessage);
    }
    function validateMessageEvent(e) {
        if (KAMPYLE_UTILS.isDebugMode()) {
            return true;
        }
        if (!e || !e.origin || !e.data) {
            return false;
        }
        var formData = KAMPYLE_DATA.getFormData(JSON.parse(e.data).formId);
        if (formData && formData.formHtmlUrl && KAMPYLE_UTILS.getParsedUrl(formData.formHtmlUrl).origin !== e.origin) {
            return false;
        }
        var baseUrl = KAMPYLE_CONSTANT.PLACEHOLDERS.URL_PREFIX;
        if (baseUrl.indexOf("://") > -1) {
            var baseUrlSplitted = baseUrl.split("/");
            baseUrl = baseUrlSplitted[0] + "//" + baseUrlSplitted[2];
        } else {
            var indexOfFirstSlash = baseUrl.indexOf("/");
            if (indexOfFirstSlash > -1) {
                baseUrl = baseUrl.slice(0, indexOfFirstSlash);
            }
        }
        return KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ON_PREM_HYBRID) || e.origin === baseUrl;
    }
    function handleMessage(e) {
        var data;
        try {
            data = JSON.parse(e.data);
        } catch (e) {
            return false;
        }
        if (!validateMessageEvent(e)) {
            return false;
        }
        switch (data.action) {
            case "inviteAccepted":
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_inviteAccepted", { formId: data.formId });
                break;
            case "inviteDeclined":
            case "inviteDefered":
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_inviteDeclined", { formId: data.formId });
                break;
            case "inviteHeightChanged":
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_inviteHeightChanged", { formId: data.formId, newHeight: data.newHeight });
                break;
            case "formLoaded":
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_formLoaded", { formId: data.formId, origin: e.origin, isScreenCaptureEnabled: data.isScreenCaptureEnabled });
                break;
            case "formSubmitPending":
            case "formHide":
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_formHide", { formId: data.formId });
                break;
            case "formSubmitted":
                var payload = {
                    formId: data.formId,
                    feedbackUUID: KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.BACKEND_GENERATED_UUID) ? data.feedbackUUID : data.uuid,
                    feedbackCorrelationUUID: KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.BACKEND_GENERATED_UUID) ? data.feedbackCorrelationUUID : data.uuid,
                };
                if (data && data.formLanguage) {
                    payload.formLanguage = data.formLanguage;
                }
                if (KAMPYLE_FUNC.isContentPayloadEnabled() && data.content) {
                    payload.content = data.content;
                }
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_feedbackSubmitted", payload);
                break;
            case "formClose":
                var payload = {
                    formId: data.formId,
                    feedbackUUID: KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.BACKEND_GENERATED_UUID) ? data.feedbackUUID : data.uuid,
                    sourceWindow: e.source,
                    isFormSubmitted: data.isFormSubmitted,
                    feedbackCorrelationUUID: KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.BACKEND_GENERATED_UUID) ? data.feedbackCorrelationUUID : data.uuid,
                };
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_formClosed", payload);
                break;
            case "formPageShown":
                var payload = { formId: data.formId, pageNumber: data.pageNumber, feedbackCorrelationUUID: KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.BACKEND_GENERATED_UUID) ? data.feedbackCorrelationUUID : data.uuid };
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_formPageShown", payload);
                break;
            case "triggerScreenCapture":
                var payload = {
                    formId: data.formId,
                    screenCaptureSettings: data.screenCaptureSettings,
                    feedbackCorrelationUUID: KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.BACKEND_GENERATED_UUID) ? data.feedbackCorrelationUUID : data.uuid,
                    screenCaptureUuid: KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.USER_SNAP_AS_COMPONENT) ? data.screenCaptureUuid : null,
                };
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_captureInit", payload);
                break;
            case "screenCaptureDelete":
                KAMPYLE_EVENT_DISPATCHER.trigger("screenCaptureDelete", data);
                break;
            case "screenCaptureRetake":
                KAMPYLE_EVENT_DISPATCHER.trigger("screenCaptureRetake", data);
                break;
            case "scrollToForm":
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_scrollToForm", { formId: data.formId });
                break;
            case "iFrameHeightChanged":
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_iFrameHeightChanged", { formId: data.formId, newHeight: data.newHeight });
                break;
            case "scrollToTop":
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_scrollToTop", { formId: data.formId });
                break;
            case "scrollFromTop":
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_scrollFromTop", { formId: data.formId, numberOfPixels: data.numberOfPixels });
                break;
            case "inviteLoaded":
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_inviteLoaded", { formId: data.formId, inviteVersion: data.inviteVersion, inviteContent: data.inviteContent });
                break;
            case "loadMultipleForms":
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_loadMultipileForms", { formId: data.formId, formIds: data.formIds });
                break;
            case "routeToForm":
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_routeToForm", { formId: data.destinationForm, sourceFormId: data.formId }, null, { isStrictMode: true });
                break;
            case "submitFeedbackFailed":
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_submitFeedbackFailed", data);
                break;
            case "feedbackUUIDisNull":
                KAMPYLE_EVENT_DISPATCHER.trigger("neb_feedbackUUIDisNull", data);
                break;
            case "MDigital_Form_Next_Page":
            case "MDigital_Form_Back_Page":
            case "MDigital_ThankYou_Displayed":
            case "MDigital_ThankYou_Close":
            case "MDigital_Form_Close_No_Submit":
            case "MDigital_Form_Close_Submitted":
            case "MDigital_CHTML_Logs":
                if (!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.BACKEND_GENERATED_UUID)) {
                    data.feedbackCorrelationUUID = data.uuid;
                }
                KAMPYLE_EVENT_DISPATCHER.trigger(data.action, data);
                break;
            case "MDigital_Invalid_Origin":
                var notAllowedDomainMessage = "Message origin domain is not allowed, ";
                var formData = KAMPYLE_DATA.getFormData(data.formId);
                var isPopup = KAMPYLE_DATA.getDisplayType(formData) === KAMPYLE_CONSTANT.DISPLAY_TYPES.POPUP;
                var isInvitation = KAMPYLE_DATA.getFormTriggerType(data.formId) === KAMPYLE_CONSTANT.FORM_TYPES.INVITATION;
                var isSkipInvitation = KAMPYLE_UTILS.getNestedPropertyValue(KAMPYLE_DATA.getFormData(data.formId), "inviteData.skipInvitation");
                if (!isPopup && isInvitation && MDIGITAL.FORM_STATE.isFormShown(data.formId)) {
                    KAMPYLE_ONSITE_SDK.closeForm(data.formId);
                    console.warn(notAllowedDomainMessage + "form has been closed!");
                }
                KAMPYLE_DATA.setFormState(data.formId, { shown: false });
                var isInviteShown = (KAMPYLE_DATA.getFormState(data.formId) || {}).inviteShown;
                if (isInviteShown) {
                    KAMPYLE_VIEW.hideInvite();
                    console.warn(notAllowedDomainMessage + "invitation has been closed!");
                }
                if (isPopup && !isInviteShown) {
                    var targetWindow = KAMPYLE_DATA.getMemoryData("popupHandler");
                    data.sourceWindow = targetWindow;
                    KAMPYLE_VIEW.hideForm("MDigital_Invalid_Origin", data);
                    console.warn(notAllowedDomainMessage + "popup has been closed!");
                }
                KAMPYLE_DATA.setMemoryData(KAMPYLE_TARGETING.generateShouldShowInviteParamName(data.formId), false);
                if (isSkipInvitation) {
                    KAMPYLE_DATA.setMemoryData("isInvitationShouldBeIgnored", true);
                }
                KAMPYLE_EVENT_DISPATCHER.trigger("MDigital_Invalid_Origin", { formId: data.formId });
                break;
            default:
                if (!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ON_PREM_HYBRID)) {
                    KAMPYLE_UTILS.showWarning("invalid action - " + data.action);
                }
                return false;
        }
    }
    return { init: init, handleMessage: handleMessage, validateMessageEvent: validateMessageEvent };
})();
window.KAMPYLE_UTILS = {
    TOP_LEVEL_DOMAIN_COOKIE_PREFIX: "Tld-",
    startsWith: function (originalString, searchString, position) {
        return originalString.substr(position || 0, searchString.length) === searchString;
    },
    isIos: function () {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    },
    isSafari: function () {
        return navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") < 0;
    },
    isiPhone: function () {
        return /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    },
    isiPadOS13: function () {
        return KAMPYLE_UTILS.isSafari() && !KAMPYLE_UTILS.isiPhone() && window.DeviceOrientationEvent !== undefined;
    },
    isDesktop: function () {
        return KAMPYLE_DATA.getMemoryData("kampyleDevice") === KAMPYLE_CONSTANT.DEVICES.DESKTOP;
    },
    triggerCustomEvent: function (eventName, data) {
        var e;
        data = data ? { detail: data } : {};
        e = new CustomEvent(eventName, data);
        try {
            window.dispatchEvent(e);
        } catch (e) {
            KAMPYLE_UTILS.showWarning("Could not trigger custom event " + eventName);
        }
    },
    isDebugMode: function () {
        var region = KAMPYLE_DATA.getMemoryData("region");
        return region === KAMPYLE_CONSTANT.REGIONS.DEV || region === KAMPYLE_CONSTANT.REGIONS.QA;
    },
    showErrorStack: function (e) {
        if (KAMPYLE_UTILS.isDebugMode()) {
            console.warn(e.stack);
        }
    },
    showWarning: function (message) {
        if (KAMPYLE_UTILS.isDebugMode()) {
            console.warn(message);
        }
    },
    addStyle: function (cssStyle, referencedDocument) {
        if (!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.CSP_RULES)) {
            referencedDocument = referencedDocument || window.document;
            var style = referencedDocument.getElementById("kampyleStyle");
            if (style === null) {
                style = referencedDocument.createElement("style");
                style.type = "text/css";
                style.id = "kampyleStyle";
                var head = referencedDocument.head || referencedDocument.getElementsByTagName("head")[0];
                head.appendChild(style);
            }
            if (style.styleSheet) {
                style.styleSheet.cssText += cssStyle;
            } else {
                style.appendChild(document.createTextNode(cssStyle));
                KAMPYLE_UTILS.setAnimationRule(KAMPYLE_CONSTANT.CSS_SETTINGS.ANIMATION_RULE_SPIN_NAME, "{0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }}");
            }
        } else {
            console.error("Should not use this method if the provision csp rules is on");
        }
    },
    addAttributesOnElement: function (element, attributesObj) {
        if (element && attributesObj) {
            for (var key in attributesObj) {
                if (attributesObj.hasOwnProperty(key) && element.setAttribute) {
                    element.setAttribute(key, attributesObj[key]);
                }
            }
        }
    },
    removeAttribute: function (element, name) {
        if (element && element.hasAttribute(name)) {
            element.removeAttribute(name);
        }
    },
    getViewportSize: function () {
        return { width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0), height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) };
    },
    getDocumentSize: function () {
        var body = document.body;
        var html = document.documentElement;
        var height = Math.max(body.scrollHeight || 0, body.offsetHeight || 0, html.clientHeight || 0, html.scrollHeight || 0, html.offsetHeight || 0);
        var width = Math.max(body.scrollWidth || 0, html.scrollWidth || 0, body.offsetWidth || 0, html.offsetWidth || 0, html.clientWidth || 0);
        return { width: width + (body.getBoundingClientRect ? body.getBoundingClientRect().left || 0 : 0), height: height + (body.getBoundingClientRect ? body.getBoundingClientRect().top || 0 : 0) };
    },
    getElementSize: function (element) {
        var height = Math.max(element.scrollHeight || 0, element.offsetHeight || 0, element.clientHeight || 0);
        var width = Math.max(element.scrollWidth || 0, element.offsetWidth || 0, element.clientWidth || 0);
        return { width: width, height: height };
    },
    getCurrentTimestamp: function () {
        return new Date().getTime();
    },
    getTimeDiff: function (time, format) {
        var datetime = typeof time !== "undefined" ? time : "2014-01-01 01:02:03.123456";
        datetime = new Date(datetime).getTime();
        var now = KAMPYLE_UTILS.getCurrentTimestamp();
        if (isNaN(datetime)) {
            return "";
        }
        var miliSecDiff = 0;
        if (datetime < now) {
            miliSecDiff = now - datetime;
        } else {
            miliSecDiff = datetime - now;
        }
        switch (format) {
            case KAMPYLE_CONSTANT.TIME_FORMATS.SECONDS:
                return miliSecDiff.toFixed(1) / 1000;
            case KAMPYLE_CONSTANT.TIME_FORMATS.DAYS:
                return Math.floor(miliSecDiff / 1000 / 60 / 60 / 24);
            default:
                return miliSecDiff;
        }
    },
    setEventHandler: function (elem, eventType, handler) {
        if (elem.addEventListener) {
            elem.addEventListener(eventType, handler, false);
        } else if (elem.attachEvent) {
            elem.attachEvent("on" + eventType, handler);
        }
    },
    subscribeToCustomEvent: function (eventType, handler) {
        if (window && window.addEventListener && typeof handler === "function") {
            window.addEventListener(
                eventType,
                function (event) {
                    var payload = event && event.detail;
                    handler.apply(null, [eventType, payload]);
                },
                false
            );
        }
    },
    removeEventHandler: function (elem, eventType, handler) {
        if (elem.removeEventListener) {
            elem.removeEventListener(eventType, handler);
        } else if (elem.detachEvent) {
            elem.detachEvent("on" + eventType, handler);
        }
    },
    setElementStyle: function (element, styleObj, isImportant) {
        var k;
        var dashed;
        isImportant = !!isImportant ? "important" : "";
        if (element) {
            for (k in styleObj) {
                if (styleObj.hasOwnProperty(k)) {
                    if (isImportant && element && element.style.setProperty) {
                        dashed = KAMPYLE_UTILS.camelToDash(k);
                        try {
                            element.style.setProperty(dashed, "" + styleObj[k], isImportant);
                        } catch (e) {
                            element.style.setProperty(dashed, "" + styleObj[k], "!" + isImportant);
                        }
                    } else {
                        element.style[k] = styleObj[k];
                    }
                }
            }
        }
    },
    setAnimationRule: function (ruleName, rule, iframe) {
        var allStyleSheets = (iframe && iframe.styleSheets && iframe.styleSheets) || (!iframe && window.document.styleSheets);
        var mDigitalAnimationStylesheet = null;
        for (var i = 0; i < allStyleSheets.length; i++) {
            if (allStyleSheets[i].title == KAMPYLE_CONSTANT.CSS_SETTINGS.STYLE_SHEET_ANIMATION_NAME) {
                mDigitalAnimationStylesheet = allStyleSheets[i];
            }
        }
        if (mDigitalAnimationStylesheet) {
            for (var i = 0; i < mDigitalAnimationStylesheet.cssRules.length; i++) {
                if (mDigitalAnimationStylesheet.cssRules[i].name == ruleName) {
                    return;
                }
            }
        }
        if (!mDigitalAnimationStylesheet) {
            var styleElement = document.createElement("style");
            styleElement.title = KAMPYLE_CONSTANT.CSS_SETTINGS.STYLE_SHEET_ANIMATION_NAME;
            if (iframe) {
                iframe.body.appendChild(styleElement);
                mDigitalAnimationStylesheet = iframe.styleSheets[iframe.styleSheets.length - 1];
            } else {
                document.body.appendChild(styleElement);
                mDigitalAnimationStylesheet = window.document.styleSheets[window.document.styleSheets.length - 1];
            }
        }
        var animationRule = "@keyframes " + ruleName + " " + rule;
        var idx = mDigitalAnimationStylesheet.cssRules.length;
        mDigitalAnimationStylesheet.insertRule(animationRule, idx);
    },
    isNear: function (elementId, distance, event) {
        var element = document.getElementById(elementId);
        if (!element) {
            return false;
        }
        var left = KAMPYLE_UTILS.offset(element).left - distance;
        var top = KAMPYLE_UTILS.offset(element).top - distance;
        var right = left + element.clientWidth + 2 * distance;
        var bottom = top + element.clientHeight + 2 * distance;
        var x = event.pageX;
        var y = event.pageY;
        return x > left && x < right && y > top && y < bottom;
    },
    offset: function (element) {
        if (!element) {
            return false;
        }
        var rect = element.getBoundingClientRect();
        var bodyElm = document.body;
        return { top: +rect.top + bodyElm.scrollTop, left: rect.left + bodyElm.scrollLeft };
    },
    createIframe: function (src, width, height, iframeId) {
        var iframe = document.createElement("iframe");
        iframe.width = width;
        iframe.height = height;
        iframe.src = src;
        iframe.id = iframeId;
        iframe.style.border = 0;
        iframe.frameBorder = 0;
        iframe.style.display = "inline-block";
        return iframe;
    },
    getUrlParam: function (name) {
        var params = location.search.substr(location.search.indexOf("?") + 1);
        if (params === "") {
            params = location.hash.substr(location.hash.indexOf("?") + 1);
        }
        var sval = null;
        params = params.split("&");
        var paramLenght = params.length;
        for (var i = 0; i < paramLenght; i++) {
            var temp = params[i].split("=");
            if (temp && [temp[0]] == name) {
                sval = decodeURIComponent(temp[1]);
            }
        }
        return sval;
    },
    htmlDecode: function (inputHtml) {
        inputHtml = inputHtml || "";
        var re;
        re = new RegExp("&lt", "g");
        inputHtml = inputHtml.replace(re, "<");
        re = new RegExp("&gt", "g");
        inputHtml = inputHtml.replace(re, ">");
        return inputHtml;
    },
    escapeRegExp: function (str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    },
    replaceAll: function (str, find, replace) {
        return str.replace(new RegExp(KAMPYLE_UTILS.escapeRegExp(find), "g"), replace);
    },
    sendMessageToIframe: function (iframeId, message) {
        var origin;
        var targetWindow;
        var iframe;
        if (!iframeId) {
            return;
        }
        iframe = document.getElementById(iframeId);
        if (!iframe || !iframe.getAttribute) {
            return;
        }
        var origin = iframe.getAttribute("origin") || "*";
        var targetWindow = iframe.contentWindow;
        if (targetWindow && targetWindow.postMessage) {
            targetWindow.postMessage(JSON.stringify(message), origin);
        }
    },
    getBrowser: function () {
        var ua = navigator.userAgent,
            tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (M[1] === "Chrome") {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null) {
                var temArr = tem.slice(1);
                return { name: temArr[0].replace("OPR", "Opera"), version: temArr[1] || "" };
            }
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
        return { name: M[0], version: M[1] };
    },
    initEventSubscriptions: function (eventObj, callback) {
        for (var prop in eventObj) {
            if (eventObj.hasOwnProperty(prop)) {
                KAMPYLE_EVENT_DISPATCHER.subscribe(prop, callback);
            }
        }
    },
    getRandomTimeMS: function (minValue, maxValue) {
        return minValue + Math.round(Math.random() * (maxValue - minValue));
    },
    kampyleGetUserId: function () {
        var userid = KAMPYLE_DATA.getData("kampyle_userid");
        if (!userid) {
            userid = KAMPYLE_UTILS.kampyleCreateUUID();
            KAMPYLE_DATA.setData("kampyle_userid", userid);
            if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ALTERNATIVE_UUID)) {
                KAMPYLE_DATA.setData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.MDIGITAL_ALTERNATIVE_UUID, KAMPYLE_UTILS.generateUUID());
            }
        }
        return userid;
    },
    kampyleCreateUUID: function () {
        var numAttempts = 8;
        var uuidAlgorithm = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        var uuid = uuidAlgorithm();
        for (var i = 0; i < numAttempts - 1; i++) {
            uuid += "-" + uuidAlgorithm();
        }
        return uuid;
    },
    removeAllContent: function (elem) {
        if (!elem) {
            return;
        }
        while (elem.firstChild) {
            elem.removeChild(elem.firstChild);
        }
        elem.parentNode.removeChild(elem);
    },
    safeToLower: function (toLower) {
        if (typeof toLower !== "string") {
            return toLower;
        } else {
            return toLower.toLowerCase();
        }
    },
    getCookieFlagByProtocol: function () {
        var isSecureProtocol = KAMPYLE_UTILS.isSecureProtocol();
        var sameSiteValue = isSecureProtocol ? "None" : "Lax";
        var secure = isSecureProtocol ? "Secure; " : "";
        return "SameSite=" + sameSiteValue + "; " + secure;
    },
    buildQueryParams: function (params) {
        return (
            Object.keys(params || {})
                .map(function (key, index) {
                    return (index === 0 ? "?" : "") + key + "=" + params[key];
                })
                .join("&") || ""
        );
    },
    kampyleSetCookie: function (cookieName, cookieValue, exDays, propertySharedSubdomain) {
        var currDate = new Date();
        currDate.setTime(currDate.getTime() + exDays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + currDate.toUTCString();
        var domain = propertySharedSubdomain ? ";domain=" + propertySharedSubdomain + ";" : "";
        var cookieFlag = KAMPYLE_UTILS.getCookieFlagByProtocol();
        cookieName = propertySharedSubdomain ? KAMPYLE_UTILS.TOP_LEVEL_DOMAIN_COOKIE_PREFIX + cookieName : cookieName;
        document.cookie = cookieName + "=" + cookieValue + "; " + cookieFlag + expires + ";path=/" + domain;
    },
    isSecureProtocol: function () {
        return location.protocol === "https:";
    },
    getCookie: function (cookieName) {
        this.name = cookieName + "=";
        this.ca = document.cookie.split(";");
        for (var i = 0; i < this.ca.length; i++) {
            this.c = this.ca[i];
            while (this.c.charAt(0) === " ") this.c = this.c.substring(1);
            if (this.c.indexOf(this.name) === 0) {
                var valueToReturn = this.c.substring(this.name.length, this.c.length);
                return valueToReturn;
            }
        }
        return null;
    },
    getDomainFromHost: function (host) {
        if (host === null) {
            return null;
        }
        var portStartIndex = host.indexOf(":");
        var lastDomainCharacter = portStartIndex === -1 ? host.length : portStartIndex;
        return host.substring(0, lastDomainCharacter);
    },
    isHostMatchesSubdomain: function (host, subdomain) {
        var domain = KAMPYLE_UTILS.getDomainFromHost(host);
        return domain === subdomain || domain.endsWith("." + subdomain);
    },
    kampyleGetCookie: function (cookieName) {
        this.name = cookieName + "=";
        this.ca = document.cookie.split(";");
        for (var i = 0; i < this.ca.length; i++) {
            this.c = this.ca[i];
            while (this.c.charAt(0) === " ") this.c = this.c.substring(1);
            if (this.c.indexOf(this.name) === 0) return this.c.substring(this.name.length, this.c.length);
        }
        return "";
    },
    getByteSize: function (s) {
        return encodeURIComponent("<q></q>" + s).length;
    },
    getAllKampyleData: function () {
        var kampyleDataNames = ["SUBMITTED_DATE", "kampyleUserPercentile", "kampyleUserSession", "kampyle_userid", "kampyleInvitePresented", "DECLINED_DATE", "LAST_INVITATION_VIEW"];
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ALTERNATIVE_UUID)) {
            kampyleDataNames.push(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.MDIGITAL_ALTERNATIVE_UUID);
        }
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.EXEMPT_FORMS_FROM_QUARANTINE)) {
            kampyleDataNames.push(KAMPYLE_CONSTANT.SESSION_DATA_FIELDS.IS_SURVEY_SUBMITTED_IN_SESSION);
        }
        var result = {};
        for (var i = kampyleDataNames.length - 1; i >= 0; i--) {
            result[kampyleDataNames[i]] = KAMPYLE_DATA.getData(kampyleDataNames[i]);
        }
        return result;
    },
    kampyleDeleteCookie: function (cookieName, propertySharedSubdomain) {
        var domain = "";
        if (propertySharedSubdomain) {
            domain = ";domain=" + propertySharedSubdomain + ";";
        }
        var cookieFlag = KAMPYLE_UTILS.getCookieFlagByProtocol();
        var expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = cookieName + "= ; " + cookieFlag + expires + ";path=/" + domain;
    },
    kampyleIsCookieEnabled: function () {
        return navigator.cookieEnabled;
    },
    kampyleCompareTimestamps: function (source, toCompare, operator) {
        if (typeof source !== "number" || typeof toCompare !== "number") {
            return false;
        }
        source = new Date(source);
        toCompare = new Date(toCompare);
        source.setHours(0, 0, 0, 0);
        switch (operator) {
            case "equals":
                toCompare.setHours(0, 0, 0, 0);
                return source.getTime() === toCompare.getTime();
                break;
            case "laterthan":
                toCompare.setHours(23, 59, 59, 999);
                return source > toCompare;
                break;
            case "earlierthan":
                toCompare.setHours(0, 0, 0, 0);
                return source < toCompare;
                break;
            case "doesnotequal":
                toCompare.setHours(0, 0, 0, 0);
                return source.getTime() !== toCompare.getTime();
                break;
            default:
                return false;
                break;
        }
    },
    kampyleCompareByOperator: function (source, toCompare, operator, varType) {
        varType = KAMPYLE_UTILS.safeToLower(varType);
        var ans = false;
        if (source === undefined) {
            return ans;
        }
        operator = KAMPYLE_UTILS.safeToLower(operator);
        switch (operator) {
            case KAMPYLE_CONSTANT.OPERATORS.EQUALS:
                if (varType === "datetime") {
                    ans = KAMPYLE_UTILS.kampyleCompareTimestamps(source, toCompare, operator);
                } else {
                    ans = source === toCompare;
                }
                break;
            case KAMPYLE_CONSTANT.OPERATORS.DOES_NOT_EQUAL:
                if (varType === "datetime") {
                    ans = KAMPYLE_UTILS.kampyleCompareTimestamps(source, toCompare, operator);
                } else {
                    ans = source !== toCompare;
                }
                break;
                break;
            case KAMPYLE_CONSTANT.OPERATORS.GREATER_THAN:
                ans = source > toCompare;
                break;
            case KAMPYLE_CONSTANT.OPERATORS.LATER_THAN:
                if (varType === "datetime") {
                    ans = KAMPYLE_UTILS.kampyleCompareTimestamps(source, toCompare, operator);
                } else {
                    ans = source > toCompare;
                }
                break;
            case KAMPYLE_CONSTANT.OPERATORS.SMALLER_THAN:
                ans = source < toCompare;
                break;
            case KAMPYLE_CONSTANT.OPERATORS.EARLIER_THAN:
                if (varType === "datetime") {
                    ans = KAMPYLE_UTILS.kampyleCompareTimestamps(source, toCompare, operator);
                } else {
                    ans = source > toCompare;
                }
                break;
            case KAMPYLE_CONSTANT.OPERATORS.CONTAINS:
                ans = !!source && source.indexOf && source.indexOf(toCompare) !== -1;
                break;
            case KAMPYLE_CONSTANT.OPERATORS.DOES_NOT_CONTAIN:
                ans = !!source && source.indexOf && source.indexOf(toCompare) === -1;
                break;
            case KAMPYLE_CONSTANT.OPERATORS.STARTS_WITH:
                ans = !!source && source.indexOf && source.indexOf(toCompare) === 0;
                break;
            case KAMPYLE_CONSTANT.OPERATORS.ENDS_WITH:
                ans = !!source && source.indexOf && source.length && source.indexOf(toCompare, source.length - source.length) !== -1;
                break;
            case KAMPYLE_CONSTANT.OPERATORS.HAS_VALUE:
                ans = !!source || source === "" || source === false || source === 0;
                break;
            case KAMPYLE_CONSTANT.OPERATORS.REGEX:
                try {
                    var regex = new RegExp(toCompare);
                    ans = !!source && regex.exec(source) !== null;
                } catch (e) {
                    ans = false;
                }
                break;
            default:
                break;
        }
        return ans;
    },
    setNestedPropertyValue: function (obj, propString, value) {
        var schema = obj;
        var pList = propString.split(".");
        var len = pList.length;
        for (var i = 0; i < len - 1; i++) {
            var elem = pList[i];
            if (!schema[elem]) {
                schema[elem] = {};
            }
            schema = schema[elem];
        }
        schema[pList[len - 1]] = value;
    },
    getNestedPropertyValue: function (obj, propString, fallback) {
        if (!obj || !propString || typeof propString !== "string") {
            return null;
        }
        var propNameDotPlaceholder = "#DOT#";
        var props = propString.split(".");
        var tmpObj = obj;
        var len = props.length;
        for (var i = 0; i < len; i++) {
            var currProp = props[i].split(propNameDotPlaceholder).join(".");
            if (!!tmpObj && (tmpObj.hasOwnProperty(currProp) || tmpObj[currProp])) {
                tmpObj = tmpObj[currProp];
            } else {
                return typeof fallback === "undefined" ? null : fallback;
            }
        }
        return tmpObj;
    },
    validateKampyleDomain: function (url) {
        var urlRegex = /(^https?:\/\/[A-Za-z0-9\-]+\.kampyle\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/;
        var result = urlRegex.test(url);
        if (!result) {
            console.warn("Invalid url in validateKampyleDomain: " + url);
        }
        return result;
    },
    camelToDash: function (str) {
        if (typeof str !== "string") {
            return str;
        } else {
            return str
                .replace(/\W+/g, "-")
                .replace(/([a-z\d])([A-Z])/g, "$1-$2")
                .toLowerCase();
        }
    },
    objectPropertyObserver: function (obj, pathToProperty, callback) {
        var MAX_TIMEOUT_RUNS = 100;
        var timeoutMs = 100;
        var runsCounter = 0;
        function timoutCallback() {
            var propertyValue = KAMPYLE_UTILS.getNestedPropertyValue(obj, pathToProperty);
            if (!!propertyValue && callback instanceof Function) {
                return callback(propertyValue);
            }
            if (runsCounter++ < MAX_TIMEOUT_RUNS) {
                window.setTimeout(timoutCallback, timeoutMs);
            }
        }
        window.setTimeout(timoutCallback, timeoutMs);
    },
    showInvite: function () {
        var inviteIframe = document.getElementById("kampyleInvite");
        KAMPYLE_UTILS.setElementStyle(inviteIframe, { visibility: "visible" }, true);
    },
    hideInvite: function () {
        var inviteIframe = document.getElementById("kampyleInvite");
        KAMPYLE_UTILS.setElementStyle(inviteIframe, { visibility: "hidden" }, true);
    },
    getNumericValue: function (val) {
        if (val === "" || val === null) {
            return null;
        }
        if (typeof val !== "number" && isNaN(Number(val))) {
            return null;
        }
        return Number(val);
    },
    extractAllObjectNonFunctionsProperties: function (obj) {
        var objectProperties = {};
        for (var key in obj) {
            if (typeof obj[key] !== "function") {
                objectProperties[key] = obj[key];
            }
        }
        return Object.keys(objectProperties).length > 0 ? objectProperties : null;
    },
    httpRequest: function (method, url, jsonData, onSuccess, onError, config) {
        var counter = 0;
        var numOfTimes = (config || {}).numOfTimes || KAMPYLE_CONSTANT.NETWORK.NUM_OF_RETRIES;
        var timeout = (config || {}).timeout || KAMPYLE_CONSTANT.NETWORK.REQUEST_TIMEOUT;
        function handleError(error, eventName, eventData) {
            if (counter < numOfTimes) {
                counter++;
                var timeoutBetweenRetries = KAMPYLE_UTILS.getRetryTimeout();
                setTimeout(makeRequest, timeoutBetweenRetries);
            } else {
                KAMPYLE_EVENT_DISPATCHER.trigger(eventName, eventData);
                if (typeof onError === "function") {
                    onError(error);
                }
            }
        }
        function makeRequest() {
            var requestStartDate = KAMPYLE_UTILS.getCurrentTimestamp();
            var beforeRequestData = { attemptNumber: counter, url: url };
            if (jsonData) {
                var postData = Object.assign({}, jsonData);
                postData.cdUserID = KAMPYLE_COOLADATA.getUserId();
                beforeRequestData = Object.assign({}, beforeRequestData, { postData: postData });
            }
            if (method === "POST") {
                KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.COOLADATA_HTTP_EVENTS_BY_METHOD.BEFORE.POST, { httpRequestData: beforeRequestData });
            }
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            jsonData ? xhr.setRequestHeader("Content-Type", "application/json") : null;
            xhr.timeout = timeout || 0;
            xhr.onerror = function (error) {
                var onErrorRequestTotalTime = KAMPYLE_UTILS.getTimeDiff(requestStartDate, KAMPYLE_CONSTANT.TIME_FORMATS.SECONDS);
                var onErrorData = { requestUrl: url, responseStatus: xhr.status, error: error, requestTotalTimeInSeconds: onErrorRequestTotalTime };
                handleError(onErrorData, KAMPYLE_CONSTANT.COOLADATA_HTTP_EVENTS_BY_METHOD.ERROR[method], { httpRequestData: onErrorData });
            };
            xhr.ontimeout = function (error) {
                var ontimeoutRequestTotalTime = KAMPYLE_UTILS.getTimeDiff(requestStartDate, KAMPYLE_CONSTANT.TIME_FORMATS.SECONDS);
                var onTimeoutData = {
                    requestUrl: url,
                    responseStatus: xhr.status,
                    error: error,
                    attemptNumber: counter,
                    networkConnectionDetails: KAMPYLE_UTILS.extractAllObjectNonFunctionsProperties(window.navigator.connection),
                    requestTotalTimeInSeconds: ontimeoutRequestTotalTime,
                };
                handleError(onTimeoutData, KAMPYLE_CONSTANT.COOLADATA_HTTP_EVENTS_BY_METHOD.TIMEOUT[method], { httpRequestData: onTimeoutData });
            };
            xhr.onload = function () {
                var onloadRequestTotalTime = KAMPYLE_UTILS.getTimeDiff(requestStartDate, KAMPYLE_CONSTANT.TIME_FORMATS.SECONDS);
                var responseData = KAMPYLE_UTILS.safeJsonParse(xhr.responseText);
                if (xhr.status === 200) {
                    var onSuccessEventData = { requestUrl: url, attemptNumber: counter, requestTotalTimeInSeconds: onloadRequestTotalTime };
                    KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.COOLADATA_HTTP_EVENTS_BY_METHOD.AFTER[method], { httpRequestData: onSuccessEventData });
                    if (typeof onSuccess === "function") {
                        onSuccess(responseData);
                    }
                } else {
                    var afterRequestData = { requestUrl: url, responseStatus: xhr.status, responseText: responseData, attemptNumber: counter, requestTotalTimeInSeconds: onloadRequestTotalTime };
                    handleError(afterRequestData, KAMPYLE_CONSTANT.COOLADATA_HTTP_EVENTS_BY_METHOD.ERROR_STATUS_CODE[method], { httpRequestData: afterRequestData });
                }
            };
            jsonData ? xhr.send(JSON.stringify(beforeRequestData.postData)) : xhr.send();
        }
        makeRequest();
    },
    lowerize: function (str) {
        return str.toLowerCase();
    },
    trim: function (str) {
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    },
    getDeviceTypeByUserAgent: function (agent, userAgentData) {
        var FUNC_TYPE = "function",
            MODEL = "model",
            OBJ_TYPE = "object",
            TYPE = "type",
            VENDOR = "vendor",
            CONSOLE = "console",
            MOBILE = "mobile",
            TABLET = "tablet",
            SMARTTV = "smarttv",
            WEARABLE = "wearable",
            DESKTOP = "desktop";
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ENABLE_CLIENT_HINTS) && userAgentData && userAgentData.platform) {
            return userAgentData.mobile ? MOBILE : userAgentData.platform.toLowerCase() === "android" ? TABLET : DESKTOP;
        }
        if (KAMPYLE_UTILS.isiPadOS13()) {
            return TABLET;
        }
        var device = {};
        var arrays = [
            [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
            [MODEL, VENDOR, [TYPE, TABLET]],
            [/applecoremedia\/[\w\.]+ \((ipad)/],
            [MODEL, [VENDOR, "Apple"], [TYPE, TABLET]],
            [
                /(archos)\s(gamepad2?)/i,
                /(hp).+(touchpad)/i,
                /(hp).+(tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /\s(nook)[\w\s]+build\/(\w+)/i,
                /(dell)\s(strea[kpr\s\d]*[\dko])/i,
                /SHIELD Tablet/,
                /A500/,
                /LG-V410\/V41020c/,
                /Puffin/,
                /^(?!.*Mobile).*Android.*$/,
            ],
            [VENDOR, MODEL, [TYPE, TABLET]],
            [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
            [MODEL, [VENDOR, "Amazon"], [TYPE, TABLET]],
            [/\((ip[honed|\s\w*]+);.+(apple)/i],
            [MODEL, VENDOR, [TYPE, MOBILE]],
            [/\((ip[honed|\s\w*]+);/i],
            [MODEL, [VENDOR, "Apple"], [TYPE, MOBILE]],
            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
            [VENDOR, MODEL, [TYPE, MOBILE]],
            [/\(bb10;\s(\w+)/i],
            [MODEL, [VENDOR, "BlackBerry"], [TYPE, MOBILE]],
            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
            [MODEL, [VENDOR, "Asus"], [TYPE, TABLET]],
            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
            [
                [VENDOR, "Sony"],
                [MODEL, "Xperia Tablet"],
                [TYPE, TABLET],
            ],
            [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
            [
                [VENDOR, "Sony"],
                [MODEL, "Xperia Phone"],
                [TYPE, MOBILE],
            ],
            [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
            [VENDOR, MODEL, [TYPE, TABLET]],
            [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
            [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
            [/(nexus\s9)/i],
            [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
            [/(nexus\s6p)/i],
            [MODEL, [VENDOR, "Huawei"], [TYPE, MOBILE]],
            [/(microsoft);\s(lumia[\s\w]+)/i],
            [VENDOR, MODEL, [TYPE, MOBILE]],
            [/(kin\.[onetw]{3})/i],
            [
                [MODEL, /\./g, " "],
                [VENDOR, "Microsoft"],
                [TYPE, MOBILE],
            ],
            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
            [MODEL, [VENDOR, "Motorola"], [TYPE, MOBILE]],
            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
            [MODEL, [VENDOR, "Motorola"], [TYPE, TABLET]],
            [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
            [[VENDOR, "Samsung"], MODEL, [TYPE, TABLET]],
            [/smart-tv.+(samsung)/i],
            [VENDOR, [TYPE, SMARTTV], MODEL],
            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
            [[VENDOR, "Samsung"], MODEL, [TYPE, MOBILE]],
            [/sie-(\w+)*/i],
            [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]],
            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
            [[VENDOR, "Nokia"], MODEL, [TYPE, MOBILE]],
            [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
            [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
            [[VENDOR, "LG"], MODEL, [TYPE, TABLET]],
            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
            [MODEL, [VENDOR, "LG"], [TYPE, MOBILE]],
            [/android.+(ideatab[a-z0-9\-\s]+)/i],
            [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]],
            [/linux;.+((jolla));/i],
            [VENDOR, MODEL, [TYPE, MOBILE]],
            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
            [VENDOR, MODEL, [TYPE, MOBILE]],
            [/android.+;\s(pixel c)\s/i],
            [MODEL, [VENDOR, "Google"], [TYPE, TABLET]],
            [/android.+;\s(pixel xl|pixel)\s/i],
            [MODEL, [VENDOR, "Google"], [TYPE, MOBILE]],
            [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],
            [
                [MODEL, /_/g, " "],
                [VENDOR, "Xiaomi"],
                [TYPE, MOBILE],
            ],
            [/android.+a000(1)\s+build/i],
            [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]],
            [/\s(tablet)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
            [[TYPE, KAMPYLE_UTILS.lowerize], VENDOR, MODEL],
            [/Mobile|iP(hone|od|ad)|(Android).*(Mobile|sdk)|BlackBerry|portalmmm|BOLT|Vodafone|WindowsCE|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/],
            [VENDOR, MODEL, [TYPE, MOBILE]],
        ];
        var ua = agent || navigator.userAgent;
        var i = 0,
            j,
            k,
            p,
            q,
            matches,
            match;
        while (i < arrays.length && !matches) {
            var regex = arrays[i],
                props = arrays[i + 1];
            j = k = 0;
            while (j < regex.length && !matches) {
                matches = regex[j++].exec(ua);
                if (!!matches) {
                    for (p = 0; p < props.length; p++) {
                        match = matches[++k];
                        q = props[p];
                        if (typeof q === OBJ_TYPE && q.length > 0) {
                            if (q.length == 2) {
                                if (typeof q[1] == FUNC_TYPE) {
                                    device[q[0]] = q[1].call(device, match);
                                } else {
                                    device[q[0]] = q[1];
                                }
                            } else if (q.length == 3) {
                                if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                    device[q[0]] = match ? q[1].call(device, match, q[2]) : undefined;
                                } else {
                                    device[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                }
                            } else if (q.length == 4) {
                                device[q[0]] = match ? q[3].call(device, match.replace(q[1], q[2])) : undefined;
                            }
                        } else {
                            device[q] = match ? match : undefined;
                        }
                    }
                }
            }
            i += 2;
        }
        if (!device[TYPE] || (device[TYPE] !== MOBILE && device[TYPE] !== TABLET)) {
            return DESKTOP;
        }
        return device[TYPE];
    },
    getElementStyle: function (domElement, styleProperty) {
        if (domElement instanceof HTMLElement) {
            try {
                return window.getComputedStyle(domElement).getPropertyValue(styleProperty);
            } catch (err) {}
        }
        return null;
    },
    isTruthy: function (expression) {
        if (typeof expression !== "string") {
            return expression;
        }
        try {
            expression = JSON.parse(expression);
        } catch (err) {}
        return expression;
    },
    safeJsonParse: function (str, msgOnFail) {
        try {
            return JSON.parse(str);
        } catch (e) {
            KAMPYLE_UTILS.showWarning(msgOnFail ? msgOnFail : "Failed to parse JSON, error message: " + (e || {}).message);
            KAMPYLE_UTILS.showErrorStack(e || {});
            return null;
        }
    },
    addWcagStyleOnFocus: function (element) {
        if (KAMPYLE_DATA.isFeatureEnabled(KAMPYLE_CONSTANT.FEATURE_FLAGS.WCAG)) {
            element.addEventListener("focusin", function () {
                KAMPYLE_UTILS.setElementStyle(element, { outline: "1px dashed #595959", outlineOffset: "2px", transition: "none" }, true);
            });
            element.addEventListener("focusout", function () {
                element.style.outline = "none";
                element.style.outlineOffset = null;
                element.style.transition = null;
            });
        }
    },
    addHoverEffectOnElement: function (element, defaultStyle, onHoverStyle) {
        if (element && typeof element.addEventListener === "function") {
            element.addEventListener("mouseenter", function () {
                KAMPYLE_UTILS.setElementStyle(element, onHoverStyle);
            });
            element.addEventListener("mouseleave", function () {
                KAMPYLE_UTILS.setElementStyle(element, defaultStyle);
            });
        }
    },
    handleAfterFormPosition: function (eventName, data) {
        var isScrollToPostion = true;
        if (isScrollToPostion) {
            KAMPYLE_UTILS.scrollToLastPosition();
        }
    },
    scrollToLastPosition: function () {
        var position = KAMPYLE_DATA.getMemoryData("scrollPosition");
        if (position) {
            window.scroll(position.x, position.y);
            KAMPYLE_DATA.deleteMemoryData("scrollPosition");
        }
    },
    setCurrentScrollPosition: function () {
        if (!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.NOT_SCROLL_TO_LAST_POSITION_DISPLAY_TYPE_ANIMATION) && document.body !== document.activeElement) {
            return false;
        }
        var position = KAMPYLE_UTILS.getScrollPosition() || {};
        KAMPYLE_DATA.setMemoryData("scrollPosition", { x: position.x, y: position.y });
    },
    getScrollPosition: function () {
        var isPageOffsetSupported = window.pageXOffset !== undefined;
        var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
        var x = isPageOffsetSupported ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
        var y = isPageOffsetSupported ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
        return { x: x, y: y };
    },
    getLangCodeFromNavAPI: function () {
        return window.navigator.language || window.navigator.userLanguage || null;
    },
    getStrigifiedData: function (data) {
        var strigifyData;
        if (typeof data === "object" && data !== null) {
            try {
                strigifyData = JSON.stringify(data);
            } catch (err) {
                strigifyData = data;
            }
        } else {
            strigifyData = data;
        }
        return strigifyData;
    },
    appendScript: function (scriptSrc) {
        var s = document.createElement("script");
        s.src = scriptSrc;
        document.body.appendChild(s);
    },
    toBase64: function (str) {
        str = str || "";
        return btoa(unescape(encodeURIComponent(str)));
    },
    styleObjToInline: function (styleObj) {
        var inlineStyle = "";
        for (var prop in styleObj) {
            inlineStyle += prop + ":" + styleObj[prop] + ";";
        }
        return inlineStyle;
    },
    getBaseUrl: function () {
        return location.origin + location.pathname;
    },
    generateUUID: function () {
        var seed = KAMPYLE_UTILS.getCurrentTimestamp();
        if (window.performance && typeof window.performance.now === "function") {
            seed += performance.now();
        }
        var UUID = "xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx".replace(/[x]/g, function () {
            var random = (seed + Math.random() * 16) % 16 | 0;
            seed = Math.floor(seed / 16);
            return random.toString(16);
        });
        return UUID;
    },
    getRetryTimeout: function () {
        var dataJson = KAMPYLE_DATA.getMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.DATA_JSON);
        return KAMPYLE_UTILS.getNestedPropertyValue(dataJson, "retryTimout") || KAMPYLE_CONSTANT.NETWORK.RETRY_TIMEOUT;
    },
    isTrue: function (value) {
        return value === true || value === "true";
    },
    isValueNumericAndDefined: function (value) {
        var isValueDefined = !!value;
        var isValueNumeric = !isNaN(value);
        return isValueDefined && isValueNumeric;
    },
    focusElement: function (element) {
        if (element && typeof element.focus === "function") {
            element.focus();
        }
    },
    fakePromise: function (val) {
        return {
            then: function (resolver) {
                resolver(val);
            },
        };
    },
    textEncode: function (str) {
        if (window.TextEncoder) {
            return new TextEncoder("utf-8").encode(str);
        }
        var utf8 = unescape(encodeURIComponent(str));
        var result = new window.Uint8Array(utf8.length);
        for (var i = 0; i < utf8.length; i++) {
            result[i] = utf8.charCodeAt(i);
        }
        return result;
    },
    toHex: function (buffer) {
        var byteArray = new window.Uint8Array(buffer);
        var hexParts = [];
        for (var i = 0; i < byteArray.length; i++) {
            var hex = byteArray[i].toString(16);
            var paddedHex = ("00" + hex).slice(-2);
            hexParts.push(paddedHex);
        }
        return hexParts.join("");
    },
    sha512: function (str) {
        var cryptoObj = window.crypto;
        if (!(cryptoObj && cryptoObj.subtle) || !str || !window.Uint8Array) {
            return KAMPYLE_UTILS.fakePromise(null);
        }
        var buffer = KAMPYLE_UTILS.textEncode(str);
        var digest = cryptoObj.subtle.digest("SHA-256", buffer);
        if (typeof digest.then === "function" && typeof digest.catch === "function") {
            return digest
                .then(function (hash) {
                    return KAMPYLE_UTILS.toHex(hash);
                })
                .catch(function () {
                    return null;
                });
        }
        return KAMPYLE_UTILS.fakePromise(null);
    },
    isModalFormType: function (formId) {
        var formData = KAMPYLE_DATA.getFormData(formId);
        var displayType = KAMPYLE_DATA.getDisplayType(formData);
        var validFormTypes = Boolean(formData) && Boolean(displayType) && formData.formType !== KAMPYLE_CONSTANT.FORM_TYPES.EMBEDDED && displayType !== KAMPYLE_CONSTANT.DISPLAY_TYPES.POPUP;
        return KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.NEW_MODAL_DIALOGS) ? validFormTypes && displayType !== KAMPYLE_CONSTANT.DISPLAY_TYPES.ANIMATION : validFormTypes;
    },
    isFormInPreviewContext: function (formId) {
        var formState = KAMPYLE_DATA.getFormState(formId);
        return formState != null && formState.triggerType == "Preview";
    },
    setSpinnerStyle: function (spinnerContainerElement, spinnerSize, iframe) {
        if (!(spinnerContainerElement || spinnerSize)) return;
        var spinerSizes = { small: { widthHeight: 15, border: 3 }, large: { widthHeight: 40, border: 4 } };
        var halfSpinnerSize = spinerSizes[spinnerSize]["widthHeight"] / 2 + spinerSizes[spinnerSize]["border"];
        var spinner = spinnerContainerElement.querySelector("#" + KAMPYLE_CONSTANT.SPINNER_SETTINGS.ID);
        var spinnerContainerStyle = { display: "block", height: "100%", "z-index": "2147483647" };
        if (spinnerSize === KAMPYLE_CONSTANT.SPINNER_SETTINGS.SIZE.LARGE) {
            spinnerContainerStyle.position = "absolute";
            spinnerContainerStyle.width = "100%";
            spinnerContainerStyle.top = 0;
        }
        KAMPYLE_UTILS.setElementStyle(
            spinner,
            {
                border: spinerSizes[spinnerSize]["border"] + "px solid #f3f3f3",
                "border-radius": "50%",
                width: spinerSizes[spinnerSize]["widthHeight"] + "px",
                height: spinerSizes[spinnerSize]["widthHeight"] + "px",
                "border-top": spinerSizes[spinnerSize]["border"] + "px solid #4050C6",
                "margin-top": "5px",
                "margin-right": "5px",
                top: "calc(50% - " + halfSpinnerSize + "px)",
                left: "calc(50% - " + halfSpinnerSize + "px)",
                position: "relative",
                animation: KAMPYLE_CONSTANT.CSS_SETTINGS.ANIMATION_RULE_SPIN_NAME + " 1s linear infinite",
            },
            true
        );
        KAMPYLE_UTILS.setElementStyle(spinnerContainerElement, spinnerContainerStyle, true);
        KAMPYLE_UTILS.setAnimationRule(KAMPYLE_CONSTANT.CSS_SETTINGS.ANIMATION_RULE_SPIN_NAME, "{0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }}", iframe);
    },
    getParsedUrl: function (url) {
        try {
            var urlParser = document.createElement("a");
            urlParser.href = url;
            return { protocol: urlParser.protocol, host: urlParser.host, hostname: urlParser.hostname, port: urlParser.port, pathname: urlParser.pathname, hash: urlParser.hash, search: urlParser.search, origin: urlParser.origin };
        } catch (e) {
            console.error("Not valid URL" + url);
            return null;
        }
    },
};
window.KAMPYLE_EVENT_DISPATCHER = (function (window, document) {
    var eventSubscriptions;
    function init() {
        eventSubscriptions = {};
    }
    function getTriggerMessage(settings) {
        var messageTemplate = KAMPYLE_CONSTANT.LOG_MESSAGES.TRIGGER_MESSAGE_TEMPLATE;
        messageTemplate = messageTemplate
            .replace("{{EVENT_NAME}}", settings.eventName)
            .replace("{{DATA}}", KAMPYLE_UTILS.getStrigifiedData(settings.data))
            .replace("{{CONTEXT}}", KAMPYLE_UTILS.getStrigifiedData(settings.context))
            .replace("{{OPTIONS}}", KAMPYLE_UTILS.getStrigifiedData(settings.options));
        if (settings.errorMessage) {
            messageTemplate = messageTemplate.replace("{{STATUS}}", KAMPYLE_CONSTANT.LOG_STATUSES.FAILED);
            messageTemplate += KAMPYLE_CONSTANT.LOG_MESSAGES.ERROR_LOG_TEMPLATE.replace("{{ERROR_MESSAGE}}", settings.errorMessage);
        } else {
            messageTemplate = messageTemplate.replace("{{STATUS}}", KAMPYLE_CONSTANT.LOG_STATUSES.TRIGGERED);
        }
        return messageTemplate;
    }
    function getEventSubscriptions(eventName) {
        if (eventName && eventSubscriptions && eventSubscriptions[eventName]) {
            return eventSubscriptions[eventName];
        } else {
            return eventSubscriptions;
        }
    }
    var unsubscribe = function (eventName, callback) {
        if (!eventName || typeof eventName !== "string" || !callback || typeof callback !== "function") {
            return false;
        }
        var subscribers = eventSubscriptions[eventName];
        if (typeof subscribers !== "undefined") {
            var callbackIndex = subscribers.indexOf(callback);
            if (callbackIndex !== -1) {
                subscribers.splice(callbackIndex, 1);
            }
        }
        return true;
    };
    var subscribe = function (eventName, callback) {
        if (!eventName || typeof eventName !== "string" || !callback || (typeof callback !== "function" && typeof callback !== "string")) {
            return false;
        }
        var subscribers = eventSubscriptions[eventName];
        if (typeof subscribers === "undefined") {
            subscribers = eventSubscriptions[eventName] = [];
        }
        var callbackIndex = subscribers.indexOf(callback);
        if (callbackIndex === -1) {
            subscribers.push(callback);
        }
        return true;
    };
    function appendDefaultEventParams(data) {
        data = data || {};
        var allData = MDIGITAL.CONFIGURATION.getOnsiteConfiguration();
        var defaultValues = {};
        if (allData) {
            defaultValues = { accountId: allData.accountId, websiteId: allData.websiteId, enviroment: allData.region };
        }
        return Object.assign(data, defaultValues);
    }
    var trigger = function (eventName, data, context, options) {
        var subscribers = KAMPYLE_UTILS.getNestedPropertyValue(eventSubscriptions, eventName);
        var i, iMax;
        if (typeof subscribers === "undefined" || subscribers === null) {
            return false;
        }
        data = appendDefaultEventParams(data);
        var dataAsArray = data instanceof Array ? data : [data];
        context = context || null;
        iMax = subscribers.length;
        for (i = 0; i < iMax; i += 1) {
            if (typeof subscribers[i] === "string") {
                KAMPYLE_UTILS.triggerCustomEvent(subscribers[i]);
            } else {
                try {
                    subscribers[i].apply(context, [eventName].concat(dataAsArray));
                    if (MDIGITAL.LOGGER.getLoggerStatus()) {
                        MDIGITAL.LOGGER.debug(getTriggerMessage({ eventName: eventName, data: data, context: context, options: options, errorMessage: null }));
                    }
                } catch (e) {
                    if (MDIGITAL.LOGGER.getLoggerStatus()) {
                        MDIGITAL.LOGGER.error(getTriggerMessage({ eventName: eventName, data: data, context: context, options: options, errorMessage: e.message }));
                    }
                    KAMPYLE_UTILS.showErrorStack(e);
                    if (window.KAMPYLE_COOLADATA) {
                        if (data) {
                            data.errorMessage = e.message;
                            data.errorStack = e.stack;
                            KAMPYLE_COOLADATA.triggerCooladataEventDispatcherError(data);
                        }
                    }
                    if (options && options.isStrictMode) {
                        break;
                    }
                    continue;
                }
            }
        }
        return true;
    };
    var triggerError = function (errorData) {
        KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.NEB_EVENT_DISPATCHER_ERROR, errorData);
    };
    var subscribeMany = function (eventMapping) {
        for (var eventName in eventMapping) {
            if (eventMapping.hasOwnProperty(eventName)) {
                for (var i = 0; i < eventMapping[eventName].length; i++) {
                    subscribe(eventName, eventMapping[eventName][i]);
                }
            }
        }
    };
    function subscribeOnce(eventName, callback) {
        var subscribers = getEventSubscriptions(eventName);
        if (!subscribers[eventName] || subscribers.indexOf(callback) === -1) {
            subscribe(eventName, callback);
        }
    }
    return {
        subscribe: subscribe,
        subscribeOnce: subscribeOnce,
        subscribeMany: subscribeMany,
        trigger: trigger,
        triggerError: triggerError,
        unsubscribe: unsubscribe,
        init: init,
        getEventSubscriptions: getEventSubscriptions,
        appendDefaultEventParams: appendDefaultEventParams,
    };
})(window, document);
window.KAMPYLE_GA = (function (window, document) {
    var formIdPlaceHolder = "{{FORM_ID}}";
    var gaEventQueue = [];
    var numAttempts = 0;
    var isGtm = false;
    var CONFIG = { POLLING_INTERVAL: 5000, POLLING_COUNTER: 3 };
    var gaEvents = {
        neb_formShown: { category: "NebulaCX", action: "Form_Displayed", label: formIdPlaceHolder },
        neb_showInvitation: { category: "NebulaCX", action: "Invite_Triggered", label: formIdPlaceHolder },
        neb_inviteDeclined: { category: "NebulaCX", action: "Invite Rejected", label: formIdPlaceHolder },
        neb_inviteAccepted: { category: "NebulaCX", action: "Invite_Accepted", label: formIdPlaceHolder },
        neb_formTriggerdByCode: { category: "NebulaCX", action: "Form_Triggered_By_Code", label: formIdPlaceHolder },
        neb_buttonClicked: { category: "NebulaCX", action: "Button_Clicked", label: formIdPlaceHolder },
        neb_sdkShowForm: { category: "NebulaCX", action: "Form_Triggered_By_Code", label: formIdPlaceHolder },
        neb_feedbackSubmitted: { category: "NebulaCX", action: "Feedback_Submitted", label: formIdPlaceHolder },
        neb_formClosed: { category: "NebulaCX", action: "Form_Close", label: formIdPlaceHolder },
        neb_popupBlocked: { category: "NebulaCX", action: "Popup_Blocked", label: formIdPlaceHolder },
        neb_formPageShown: { category: "NebulaCX", action: "Form_Page_Displayed", label: formIdPlaceHolder },
        neb_captureInit: { category: "NebulaCX", action: "Screen_Capture_Init", label: formIdPlaceHolder },
        neb_captureImageClicked: { category: "NebulaCX", action: "Capture_Image_Click", label: formIdPlaceHolder },
        MDigital_Capture_Cancelled: { category: "NebulaCX", action: "Cancel_Capture_Click", label: formIdPlaceHolder },
        screenCaptureDelete: { category: "NebulaCX", action: "Screen_Capture_Delete", label: formIdPlaceHolder },
        screenCaptureRetake: { category: "NebulaCX", action: "Screen_Capture_Retake", label: formIdPlaceHolder },
        MDigital_Form_Close_No_Submit: { category: "NebulaCX", action: "Form_Close_No_Submit", label: formIdPlaceHolder },
        MDigital_Form_Next_Page: { category: "NebulaCX", action: "Form_Next_Page", label: formIdPlaceHolder },
        MDigital_Form_Back_Page: { category: "NebulaCX", action: "Form_Back_Page", label: formIdPlaceHolder },
        MDigital_ThankYou_Displayed: { category: "NebulaCX", action: "ThankYou_Displayed", label: formIdPlaceHolder },
        MDigital_ThankYou_Close: { category: "NebulaCX", action: "ThankYou_Close", label: formIdPlaceHolder },
    };
    var allowedDataFields = ["pageNumber"];
    var getValueByAllowedFields = function (data) {
        var value;
        for (var i = allowedDataFields.length - 1; i >= 0; i--) {
            var currField = allowedDataFields[i];
            if (data[currField] !== undefined) {
                var toNumber = Number(data[currField]);
                if (!isNaN(toNumber)) {
                    return toNumber;
                }
            }
        }
        return value;
    };
    var sendGaEvent = function (eventName, data) {
        var category = !!gaEvents[eventName] && !!gaEvents[eventName].category ? gaEvents[eventName].category : "NebulaCX";
        var action = !!gaEvents[eventName] && !!gaEvents[eventName].action ? gaEvents[eventName].action : undefined;
        var label = !!gaEvents[eventName] && gaEvents[eventName].label === formIdPlaceHolder && data.formId ? data.formId : undefined;
        var value = getValueByAllowedFields(data);
        if (!!isGtm) {
            window.dataLayer.push({ event: "NebulaCXgaTriggerEvent", gaEventCategory: category, gaEventAction: action, gaEventLabel: label, gaEventValue: value });
        } else {
            window.ga("send", "event", category, action, label, value);
        }
    };
    var dequeueEvents = function (eventName, data) {
        if ((!window.ga && !isGtm) || (!!isGtm && !window.dataLayer)) {
            numAttempts++;
            if (numAttempts < CONFIG.POLLING_COUNTER) {
                window.setTimeout(KAMPYLE_GA.dequeueEvents, CONFIG.POLLING_INTERVAL);
            }
        } else {
            var queueLen = gaEventQueue.length;
            for (var i = 0; i < queueLen; i++) {
                sendGaEvent(gaEventQueue[i].eventName, gaEventQueue[i].data);
            }
            numAttempts = 0;
            gaEventQueue = [];
        }
    };
    var triggerEvent = function (eventName, data) {
        gaEventQueue = gaEventQueue || [];
        if (!!eventName && !!data) {
            gaEventQueue.push({ eventName: eventName, data: data });
        }
        dequeueEvents();
    };
    var init = function () {
        isGtm = KAMPYLE_DATA.isFeatureEnabled("GTM");
        for (var prop in gaEvents) {
            KAMPYLE_EVENT_DISPATCHER.subscribe(prop, triggerEvent);
        }
        return true;
    };
    return { init: init, triggerEvent: triggerEvent, sendGaEvent: sendGaEvent };
})(window, document);
window.MDIGITAL = window.MDIGITAL || {};
window.MDIGITAL.ON_PREM = (function () {
    var onPremRelatedPaths = ["formHtmlUrl", "buttonData.buttonUrl", "formDataUrl", "inviteData.inviteUrl", "inviteData.inviteDataUrl", "versionedResourcesUrl"];
    function getPackageRoot() {
        return window.KAMPYLE_EMBED.getResourcesPrefix();
    }
    function getPackageVersion() {
        return KAMPYLE_UTILS.getNestedPropertyValue(MDIGITAL.CONFIGURATION.getOnsiteConfiguration(), "packageVersion");
    }
    function replaceOnPremPrefixes(rawText) {
        rawText = rawText || "";
        var formattedText;
        if (rawText.indexOf(KAMPYLE_CONSTANT.ONPREM_URL_PREFIX) === -1) {
            return rawText;
        } else {
            var formattedText = rawText.replace(KAMPYLE_CONSTANT.ONPREM_URL_PREFIX, KAMPYLE_EMBED.getResourcesPrefix());
            return formattedText;
        }
    }
    function replaceFormNodeUrls(node) {
        if (!node) {
            return false;
        }
        onPremRelatedPaths.forEach(function (path) {
            var pathValue = KAMPYLE_UTILS.getNestedPropertyValue(node, path);
            if (pathValue) {
                KAMPYLE_UTILS.setNestedPropertyValue(node, path, replaceOnPremPrefixes(pathValue));
            }
        });
        return node;
    }
    return { replaceOnPremPrefixes: replaceOnPremPrefixes, getPackageVersion: getPackageVersion, getPackageRoot: getPackageRoot, replaceFormNodeUrls: replaceFormNodeUrls };
})();
window.MDIGITAL = window.MDIGITAL || {};
window.MDIGITAL.LOCALIZATION = (function () {
    function getLangCodeFromCP(formNode) {
        var formId = KAMPYLE_UTILS.getNestedPropertyValue(formNode, "formId");
        var customParamId = KAMPYLE_UTILS.getNestedPropertyValue(formNode, "formLocalizationSettings.customParam");
        var formData = KAMPYLE_DATA.getFormData(formId) || {};
        var customParam = MDIGITAL.CUSTOM_PARAMETERS.getCustomParamById(customParamId, formData) || {};
        return MDIGITAL.CUSTOM_PARAMETERS.fetchCPValue(customParam) || KAMPYLE_UTILS.getNestedPropertyValue(formNode, "formLocalizationSettings.defaultLanguage");
    }
    function getLangCode(formNode) {
        var shouldUseCustomParam = KAMPYLE_UTILS.isTruthy(KAMPYLE_UTILS.getNestedPropertyValue(formNode, "formLocalizationSettings.useCustomParam"));
        return shouldUseCustomParam ? MDIGITAL.LOCALIZATION.getLangCodeFromCP(formNode) : KAMPYLE_UTILS.getLangCodeFromNavAPI();
    }
    function getLangaugeFallback(formNode, languageCode) {
        var availableLanguages = KAMPYLE_UTILS.getNestedPropertyValue(formNode, "availableLanguages");
        var defaultLanguage = formNode.formLocalizationSettings.defaultLanguage;
        var mainLanguage = languageCode.split("-")[0].toLowerCase();
        var foundFallback =
            availableLanguages.find(function (lang) {
                return lang.toLowerCase() === mainLanguage;
            }) ||
            availableLanguages.find(function (lang) {
                return lang.indexOf(mainLanguage) === 0;
            });
        return foundFallback || defaultLanguage;
    }
    function detectUsableLanguageCode(formNode) {
        if (!formNode.availableLanguages) {
            return null;
        }
        var langCodeCandidate = getLangCode(formNode) || "";
        return (
            formNode.availableLanguages.find(function (lang) {
                return lang.toLowerCase() === langCodeCandidate.toLowerCase();
            }) || getLangaugeFallback(formNode, langCodeCandidate)
        );
    }
    function getLanguageCodeByForm(formNode) {
        return MDIGITAL.LOCALIZATION.detectUsableLanguageCode({ availableLanguages: formNode.availableLanguages, formLocalizationSettings: formNode.formLocalizationSettings, formId: formNode.formId });
    }
    function getLocalizedButtonText(formNode) {
        var langCodeMemKey = KAMPYLE_CONSTANT.LANG_MEMORY_DATA_KEY_PREFIX + formNode.formId;
        var languageCode = KAMPYLE_DATA.getMemoryData(langCodeMemKey);
        if (!languageCode) {
            languageCode = getLanguageCodeByForm(formNode);
            KAMPYLE_DATA.setMemoryData(langCodeMemKey, languageCode);
        }
        var textLocalization = KAMPYLE_UTILS.getNestedPropertyValue(formNode, "buttonData.textLocalization") || {};
        var buttonData = textLocalization[languageCode] || formNode.buttonData.text;
        if (buttonData && typeof buttonData === "object") {
            buttonData = buttonData.buttonText;
        }
        return buttonData;
    }
    function detectAndSetFormLanguage(formNode) {
        if (!formNode) {
            return null;
        }
        var langCodeMemKey = KAMPYLE_CONSTANT.LANG_MEMORY_DATA_KEY_PREFIX + formNode.formId;
        var detectedLanguage = getLanguageCodeByForm(formNode);
        KAMPYLE_DATA.setMemoryData(langCodeMemKey, detectedLanguage);
        return detectedLanguage;
    }
    function isFormLanguageRtl(formNode) {
        var languageCode = getLanguageCodeByForm(formNode);
        var buttonData = KAMPYLE_UTILS.getNestedPropertyValue(formNode, "buttonData.textLocalization") || {};
        return buttonData[languageCode] && buttonData[languageCode].isRtl === "true";
    }
    function getFormLanguage(formId) {
        var formData = KAMPYLE_DATA.getFormData(formId) || {};
        if (!formData) {
            return null;
        }
        return KAMPYLE_DATA.getMemoryData(KAMPYLE_CONSTANT.LANG_MEMORY_DATA_KEY_PREFIX + formId) || detectAndSetFormLanguage(formData);
    }
    return {
        getLangCodeFromCP: getLangCodeFromCP,
        getLangCode: getLangCode,
        getLangaugeFallback: getLangaugeFallback,
        detectUsableLanguageCode: detectUsableLanguageCode,
        detectAndSetFormLanguage: detectAndSetFormLanguage,
        getLocalizedButtonText: getLocalizedButtonText,
        getFormLanguage: getFormLanguage,
        isFormLanguageRtl: isFormLanguageRtl,
    };
})();
window.MDIGITAL = window.MDIGITAL || {};
window.MDIGITAL.EMBEDDED = (function (window, document) {
    function init() {
        var eventMapping = {
            neb_loadForm: [createEmbeddedIframe],
            neb_formLoaded: [showForm],
            neb_iFrameHeightChanged: [calculateFormSize],
            neb_formClosed: [handleFormClosed],
            MDigital_ThankYou_Displayed: [handleThankyouPage],
            neb_targetingInit: [removeEmbeddedIFrames],
        };
        KAMPYLE_EVENT_DISPATCHER.subscribeMany(eventMapping);
    }
    function removeEmbeddedIFrames() {
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.CLEAR_EMBEDDED_ON_UPDATE_PAGE)) {
            var allForms = KAMPYLE_DATA.getAllForms();
            for (var i = 0; i < allForms.length; i++) {
                var form = allForms[i];
                if (KAMPYLE_DATA.isEmbeddedDisplayType(form.formId)) {
                    MDIGITAL.EMBEDDED.deleteEmbeddedIframe(form.formId);
                }
            }
        }
    }
    function isEmbeddedFullWidth(formId) {
        var formData = KAMPYLE_DATA.getFormData(formId);
        return KAMPYLE_UTILS.getNestedPropertyValue(formData, "isFullWidthEmbedded");
    }
    function createEmbeddedIframe(eventName, data) {
        data = data || {};
        if (!KAMPYLE_DATA.isEmbeddedDisplayType(data.formId)) {
            return false;
        }
        var hostingElement = getHostingElement(data.formId);
        if (!isHostingElementValid(hostingElement)) {
            return false;
        }
        if (hostingElement) {
            var hostingElementHeight = parseInt(getComputedStyle(hostingElement).height);
            var hostingElementPaddingY = parseInt(getComputedStyle(hostingElement).paddingTop) + parseInt(getComputedStyle(hostingElement).paddingBottom);
            if (hostingElementPaddingY === hostingElementHeight) {
                hostingElementHeight = 0;
            }
            addHostingElementHeight(hostingElement.id, hostingElementHeight);
        }
        var timeoutHandler = setTimeout(function () {
            if (!KAMPYLE_FUNC.isFormLoaded(data.formId)) {
                KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.NEB_FORM_LOADING_HAS_FAILED, {
                    formId: data.formId,
                    failureCause: KAMPYLE_CONSTANT.FORM_LOADING_FAILURE_CAUSE.APPLICATION_FAILED,
                    formState: KAMPYLE_DATA.getFormState(data.formId),
                });
            }
        }, KAMPYLE_CONSTANT.NETWORK.TIME_FOR_FORM_TO_LOAD_MS);
        KAMPYLE_DATA.setTimeoutHandler(KAMPYLE_CONSTANT.TIMEOUT_HANDLERS.EMBEDDED_STATUS + "_" + data.formId, timeoutHandler);
        var formIframe = getOrCreateIframe(data.formId);
        var formData = KAMPYLE_DATA.getFormData(data.formId);
        formIframe.src = KAMPYLE_COMMON.createFormUrl(formData.formHtmlUrl, data.formId);
        hostingElement.appendChild(formIframe);
        KAMPYLE_DATA.setFormState(data.formId, { shouldBeShown: true });
        return true;
    }
    function showForm(eventName, data) {
        if (!KAMPYLE_DATA.isEmbeddedDisplayType(data.formId) || KAMPYLE_FUNC.hasApplicationLoadingFailed(data.formId)) {
            return false;
        }
        var currIframe = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.EMBEDDED.IFRAME_ID_PREFIX + data.formId);
        if (!!currIframe) {
            setIframeStyle(currIframe, { display: "block" });
        }
        return true;
    }
    function isHostingElementValid(element) {
        return element !== null && (!element.innerHTML || (typeof element.innerHTML === "string" && element.innerHTML.trim() === ""));
    }
    function getHostingElement(formId) {
        var formData = KAMPYLE_DATA.getFormData(formId);
        return document.getElementById(KAMPYLE_UTILS.getNestedPropertyValue(formData, "embeddedData.pageElementId"));
    }
    function shouldCustomizeScrolling(formId) {
        var isPreventIFrameScrollFlickeringEnabled = KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.PREVENT_IFRAME_SCROLLBAR_FLICKERING);
        var isFormV2 = KAMPYLE_DATA.isV2Form(formId);
        var isCustomHTML = KAMPYLE_DATA.isCustomHtmlForm(formId);
        return isPreventIFrameScrollFlickeringEnabled && !isFormV2 && !isCustomHTML;
    }
    function getOrCreateIframe(formId) {
        var iframeId = KAMPYLE_CONSTANT.IFRAME_SETTINGS.EMBEDDED.IFRAME_ID_PREFIX + formId;
        var formIframe = document.getElementById(iframeId);
        if (!formIframe) {
            formIframe = document.createElement("iframe");
            formIframe.id = iframeId;
            formIframe.setAttribute("title", KAMPYLE_CONSTANT.IFRAME_SETTINGS.IFRAME_TITLE);
            if (shouldCustomizeScrolling(formId)) {
                formIframe.setAttribute("scrolling", "no");
            }
            setIframeStyle(formIframe, { display: "none" });
        }
        return formIframe;
    }
    function setIframeStyle(formIframe, style) {
        var defaultStyle = { border: 0, width: "100%", height: "100%" };
        var formattedStyle = Object.assign({}, defaultStyle, style);
        KAMPYLE_UTILS.setElementStyle(formIframe, formattedStyle, false);
    }
    function setIframeScrolling(iframe, enableScroll) {
        if (!enableScroll) {
            KAMPYLE_UTILS.addAttributesOnElement(iframe, { scrolling: "no" });
        } else {
            KAMPYLE_UTILS.removeAttribute(iframe, "scrolling");
        }
    }
    function calculateFormSize(event, data) {
        data = data || {};
        var formData = KAMPYLE_DATA.getFormData(data.formId) || {};
        var hostingElement = getHostingElement(data.formId);
        var formIframe = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.EMBEDDED.IFRAME_ID_PREFIX + data.formId);
        if (!KAMPYLE_DATA.isEmbeddedDisplayType(data.formId) || hostingElement === null || formIframe === null) {
            return false;
        }
        var newHeightSettings = calculateHeights(hostingElement, formData, data);
        var newWidth = calculateWidth(hostingElement, formData);
        var iframeStyle = { height: newHeightSettings.iframeHeight + "px", width: isEmbeddedFullWidth(data.formId) ? "100%" : newWidth + "px" };
        setIframeStyle(formIframe, iframeStyle);
        if (shouldCustomizeScrolling(data.formId)) {
            setIframeScrolling(formIframe, newHeightSettings.shouldBeStatic);
        }
        var messageData = { height: newHeightSettings.formHeight, width: newWidth, shouldBeStatic: newHeightSettings.shouldBeStatic };
        KAMPYLE_UTILS.sendMessageToIframe(KAMPYLE_CONSTANT.IFRAME_SETTINGS.EMBEDDED.IFRAME_ID_PREFIX + data.formId, { action: "setFormStyle", data: messageData });
        return messageData;
    }
    function calculateHeights(hostingElement, formData, data) {
        var isStatic = formData.isFixedSize === "true" || formData.isFixedSize === true;
        var shouldBeStatic = isStatic;
        var formHeight = isStatic ? parseInt(formData.formHeight) : data.newHeight;
        var hostingElementComputedStyle = getComputedStyle(hostingElement);
        var hostHeight = getHostingElementHeight(hostingElement.id);
        hostHeight = isNaN(hostHeight) ? parseInt(hostingElement.style.height || 0) : hostHeight;
        var hostMaxHeight = isNaN(parseInt(hostingElementComputedStyle.maxHeight)) ? hostHeight || 0 : parseInt(hostingElementComputedStyle.maxHeight);
        var hostMinHeight = isNaN(parseInt(hostingElementComputedStyle.minHeight)) ? 0 : parseInt(hostingElementComputedStyle.minHeight);
        var isDynamicHost = hostMaxHeight === 0 && hostMinHeight === 0;
        if (hostMaxHeight !== 0 && hostMinHeight > hostMaxHeight) {
            hostMaxHeight = hostMinHeight;
        }
        return getNewHeightSettings(formHeight, shouldBeStatic, isDynamicHost, hostMaxHeight, hostMinHeight, hostHeight);
    }
    function getNewHeightSettings(formHeight, shouldBeStatic, isDynamicHost, hostMaxHeight, hostMinHeight, hostHeight) {
        var newIframeHeight;
        var newFormHeight = formHeight;
        if (isDynamicHost) {
            newFormHeight = formHeight;
            newIframeHeight = newFormHeight;
        } else {
            if (hostMaxHeight !== 0 && formHeight >= hostMaxHeight) {
                newFormHeight = hostMaxHeight;
                shouldBeStatic = true;
            }
            newIframeHeight = newFormHeight;
            if (formHeight < hostMinHeight || formHeight < hostHeight) {
                newIframeHeight = hostMinHeight !== 0 ? hostMinHeight : hostHeight;
            }
        }
        return { formHeight: newFormHeight, iframeHeight: newIframeHeight, shouldBeStatic: shouldBeStatic };
    }
    function calculateWidth(hostingElement, formData) {
        var formWidth = parseInt(formData.formWidth);
        return Math.min(formWidth, KAMPYLE_UTILS.getElementSize(hostingElement).width);
    }
    function handleFormClosed(eventName, data) {
        MDIGITAL.EMBEDDED.deleteEmbeddedIframe(data.formId);
    }
    function deleteEmbeddedIframe(formId) {
        if (!KAMPYLE_DATA.isEmbeddedDisplayType(formId)) {
            return false;
        }
        var currIframe = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.EMBEDDED.IFRAME_ID_PREFIX + formId);
        if (currIframe === null) {
            return false;
        }
        KAMPYLE_UTILS.removeAllContent(currIframe);
        return true;
    }
    function addHostingElementHeight(elementId, height) {
        var elementsHeightsObj = KAMPYLE_DATA.getMemoryData("hostingElementsHeights");
        elementsHeightsObj[elementId] = height;
        KAMPYLE_DATA.setMemoryData("hostingElementsHeights", elementsHeightsObj);
    }
    function getHostingElementHeight(elementId) {
        return KAMPYLE_DATA.getMemoryData("hostingElementsHeights")[elementId] || 0;
    }
    function handleThankyouPage(eventName, data) {
        data = data || {};
        if (KAMPYLE_DATA.isEmbeddedDisplayType(data.formId) && KAMPYLE_DATA.isMobile()) {
            KAMPYLE_VIEW.scrollToEmbeddedForm(data.formId);
        }
    }
    return {
        removeEmbeddedIFrames: removeEmbeddedIFrames,
        init: init,
        createEmbeddedIframe: createEmbeddedIframe,
        showForm: showForm,
        calculateFormSize: calculateFormSize,
        deleteEmbeddedIframe: deleteEmbeddedIframe,
        addHostingElementHeight: addHostingElementHeight,
        getHostingElementHeight: getHostingElementHeight,
        handleThankyouPage: handleThankyouPage,
        setIframeScrolling: setIframeScrolling,
    };
})(window, document);
window.MDIGITAL = window.MDIGITAL || {};
window.MDIGITAL.FORM_STATE = (function (window, document) {
    function init() {
        var eventMapping = { neb_formLoadingHasFailed: [onFormLoadingFailed], neb_formClosed: [onFormClosed] };
        KAMPYLE_EVENT_DISPATCHER.subscribeMany(eventMapping);
    }
    function onFormClosed(eventName, data) {
        var formId = data.formId;
        if (formId) {
            KAMPYLE_DATA.setFormState(data.formId, { shown: false });
        }
    }
    function onFormLoadingFailed(eventName, data) {
        var failureState = {};
        failureState[data.failureCause] = true;
        KAMPYLE_DATA.setFormState(data.formId, failureState);
    }
    function updateTargetingState(eventName, data) {
        if (!canUpdateState(data)) {
            return false;
        }
        var formState = KAMPYLE_DATA.getFormState(data.formId);
        var phaseRules = [].concat(formState.targeting[data.targetingPhase] || []);
        phaseRules.push(getRuleData(data));
        var targetingPhaseState = {};
        targetingPhaseState[data.targetingPhase] = phaseRules;
        KAMPYLE_DATA.setFormState(data.formId, { targeting: targetingPhaseState });
    }
    function isInviteLoaded(formId) {
        var formState = KAMPYLE_DATA.getFormState(formId);
        return !!formState && !!formState.inviteLoaded;
    }
    function isFormLoaded(formId) {
        var formState = KAMPYLE_DATA.getFormState(formId);
        return !!formState && !!formState.loaded;
    }
    function isFormFullyLoaded(formId) {
        var isSeparate = KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.FORM_TEMPLATE_DATA_SEPERATION);
        var formState = KAMPYLE_DATA.getFormState(formId);
        if (!isSeparate) {
            return formState.loaded;
        }
        return formState.loaded && KAMPYLE_FUNC.isJsonDataLoaded(formId, false);
    }
    function shouldFormBeShown(formId) {
        var formState = KAMPYLE_DATA.getFormState(formId);
        return formState && formState.shouldBeShown;
    }
    function isFormShown(formId) {
        var formState = KAMPYLE_DATA.getFormState(formId);
        return formState && formState.shown;
    }
    function getRuleData(data) {
        var ruleData = { targetingRule: "", isPassed: false, expected: "", actual: "" };
        Object.keys(ruleData).forEach(function (property) {
            ruleData[property] = data[property];
        });
        return ruleData;
    }
    function canUpdateState(data) {
        data = data || {};
        var formState = KAMPYLE_DATA.getFormState(data.formId);
        return !(!formState || !formState.targeting || !data.targetingPhase);
    }
    return {
        init: init,
        updateTargetingState: updateTargetingState,
        getRuleData: getRuleData,
        canUpdateState: canUpdateState,
        shouldFormBeShown: shouldFormBeShown,
        isFormLoaded: isFormLoaded,
        isInviteLoaded: isInviteLoaded,
        isFormShown: isFormShown,
        isFormFullyLoaded: isFormFullyLoaded,
    };
})(window, document);
window.MDIGITAL = window.MDIGITAL || {};
window.MDIGITAL_ELEMENT_BUILDER = (function () {
    function createScreenCaptureHeader() {
        var headElem = document.createElement("head");
        var linkElem = document.createElement("link");
        linkElem.rel = "stylesheet";
        linkElem.type = "text/css";
        linkElem.href = KAMPYLE_CONSTANT.PLACEHOLDERS.URL_PREFIX + KAMPYLE_CONSTANT.SRC.OPEN_SANS;
        headElem.appendChild(linkElem);
        return headElem;
    }
    function getScreenCaptureDescription(formData) {
        if (formData.screenCaptureSettings) {
            return formData.screenCaptureSettings.bodyInstructionsScreenCapture || formData.screenCaptureSettings.instructionsScreenCapture || KAMPYLE_CONSTANT.TEXTS.SCREEN_CAPTURE.DEFAULT_DESCRIPTION;
        }
        return KAMPYLE_CONSTANT.TEXTS.SCREEN_CAPTURE.DEFAULT_DESCRIPTION;
    }
    function createScreenCaptureFooter(formattedText, formattedStyles) {
        var divFooter = document.createElement("div");
        divFooter.className = "sc-widget-footer";
        KAMPYLE_UTILS.setElementStyle(divFooter, {
            "font-family": "'Open Sans'",
            padding: "10px",
            "font-size": "14px",
            "padding-top": "0",
            "font-stretch": "normal",
            "font-style": "normal",
            "font-variant": "normal",
            "font-weight": "normal",
            "letter-spacing": "normal",
            "line-height": "20px",
        });
        var cancelBtn = document.createElement("button");
        cancelBtn.className = "sc-widget-footer-cancel top-tip";
        KAMPYLE_UTILS.addAttributesOnElement(cancelBtn, { class: "sc-widget-footer-cancel top-tip", title: formattedText.cancelScreenCaptureTooltip });
        cancelBtn.addEventListener("click", function () {
            KAMPYLE_SCREEN_CAPTURE.onCancelScreenCaptureClick();
        });
        KAMPYLE_UTILS.setElementStyle(cancelBtn, Object.assign({ outline: "none" }, formattedStyles.widgetFooterCancel, formattedStyles.widgetFooterBtn));
        var cancelBtnText = document.createTextNode(formattedText.cancelScreenCaptureLabel);
        cancelBtn.appendChild(cancelBtnText);
        var submitBtn = document.createElement("button");
        KAMPYLE_UTILS.addAttributesOnElement(submitBtn, { class: "sc-widget-footer-capture top-tip", title: formattedText.submitScreenCaptureTooltip });
        submitBtn.addEventListener("click", KAMPYLE_SCREEN_CAPTURE.onSubmitScreenCaptureClick);
        KAMPYLE_UTILS.setElementStyle(submitBtn, Object.assign({ outline: "none" }, formattedStyles.widgetFooterCapture, formattedStyles.widgetFooterBtn));
        var spinnerContainer = createSpinnerElement();
        var spanElem = document.createElement("span");
        spanElem.id = "widgetFooterCaptureText";
        spanElem.appendChild(document.createTextNode(formattedText.submitScreenCaptureLabel));
        submitBtn.appendChild(spinnerContainer);
        submitBtn.appendChild(spanElem);
        divFooter.appendChild(cancelBtn);
        divFooter.appendChild(submitBtn);
        return divFooter;
    }
    function createScreenCaptureIframe(htmlElem, scContainer) {
        var scIframe = document.createElement("iframe");
        scIframe.addEventListener("load", function () {
            scIframe.focus();
        });
        scIframe.id = "nebScIframe";
        KAMPYLE_UTILS.setElementStyle(scIframe, { width: "310px", bottom: "20px", left: "20px", zIndex: 2147483647, position: "fixed" });
        KAMPYLE_UTILS.setElementStyle(scIframe, { display: "block" }, true);
        scIframe.frameBorder = "0";
        scIframe.sandbox = "allow-top-navigation allow-same-origin allow-scripts";
        if (scContainer) {
            scContainer.parentNode.insertBefore(scIframe, scContainer);
        } else {
            document.body.appendChild(scIframe);
        }
        var docIframe = scIframe.contentDocument || scIframe.contentWindow.document;
        docIframe.open();
        docIframe.write("<html><head></head><body></body></html>");
        docIframe.close();
        docIframe.replaceChild(htmlElem, docIframe.getElementsByTagName("html")[0]);
        scIframe.height = docIframe.getElementById("sc-widget") && docIframe.getElementById("sc-widget").scrollHeight + 20;
        KAMPYLE_SCREEN_CAPTURE.addEscKeyDownListenerToIframe(scIframe);
        setTimeout(function () {
            document.activeElement.blur();
            setTimeout(function () {
                scIframe.focus();
            }, 0);
        }, 100);
        return true;
    }
    function createScreenCaptureBody(formData, divFooter, formattedStyles) {
        var DEFAULT_TITLE = "Screen Capture";
        var bodyElem = document.createElement("body");
        KAMPYLE_UTILS.setElementStyle(bodyElem, { margin: "0px", overflow: "hidden" });
        var divWrapper = document.createElement("div");
        divWrapper.id = "sc-widget";
        divWrapper.className = "sc-widget";
        KAMPYLE_UTILS.setElementStyle(divWrapper, formattedStyles.widget);
        KAMPYLE_UTILS.setElementStyle(divWrapper, { zIndex: "2147483646" });
        var widgetContentElem = document.createElement("div");
        widgetContentElem.className = "sc-widget-content";
        KAMPYLE_UTILS.setElementStyle(widgetContentElem, formattedStyles.widgetContent);
        KAMPYLE_UTILS.setElementStyle(widgetContentElem, { fontFamily: "Open Sans" }, true);
        var h2Elem = document.createElement("h2");
        h2Elem.className = "scTitle";
        h2Elem.style.fontSize = "16px";
        if (!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.USER_SNAP_AS_COMPONENT)) {
            var headerForWidget = formData.screenCaptureSettings && formData.screenCaptureSettings.titleInstructionsScreenCapture ? formData.screenCaptureSettings.titleInstructionsScreenCapture : DEFAULT_TITLE;
            var h2Text = document.createTextNode(headerForWidget);
            h2Elem.appendChild(h2Text);
        }
        var pElem = document.createElement("p");
        pElem.className = "scParagraph";
        KAMPYLE_UTILS.setElementStyle(pElem, { fontSize: "12px", marginTop: "10px" });
        var descriptionForWidget = getScreenCaptureDescription(formData);
        var pText = document.createTextNode(descriptionForWidget);
        pElem.appendChild(pText);
        widgetContentElem.appendChild(h2Elem);
        widgetContentElem.appendChild(pElem);
        divWrapper.appendChild(widgetContentElem);
        divWrapper.appendChild(divFooter);
        bodyElem.appendChild(divWrapper);
        return bodyElem;
    }
    function createScreenCaptureHtml(headElem, bodyElem) {
        var htmlElem = document.createElement("html");
        htmlElem.appendChild(headElem);
        htmlElem.appendChild(bodyElem);
        return htmlElem;
    }
    function createScreenCaptureInstructionWidget(formData, scContainer) {
        var formattedText = KAMPYLE_SCREEN_CAPTURE.overrideDefaultScreenCaptureTexts(formData.screenCaptureSettings) || {};
        var formattedStyles = KAMPYLE_SCREEN_CAPTURE.overrideDefaultScreenCaptureStyles(formData.screenCaptureSettings) || {};
        var headElem = createScreenCaptureHeader();
        var footerElem = createScreenCaptureFooter(formattedText, formattedStyles);
        var bodyElem = createScreenCaptureBody(formData, footerElem, formattedStyles);
        var htmlElem = createScreenCaptureHtml(headElem, bodyElem);
        createScreenCaptureIframe(htmlElem, scContainer);
    }
    function createFormContainer() {
        var formSpanPlacer = Object.assign(document.createElement("span"), { id: KAMPYLE_CONSTANT.IFRAME_SETTINGS.LIGHTBOX.WRAPPER_ID });
        var divContainer = Object.assign(document.createElement("div"), { id: "kampyleFormContainer" });
        var containerStyle = { top: 0, left: 0, width: "100%", height: "100%", position: "fixed", visibility: "hidden", display: "table", backgroundColor: "rgba(102,102,102,0.4)", zIndex: "99999999", webkitOverflowScrolling: "touch" };
        KAMPYLE_UTILS.setElementStyle(divContainer, containerStyle, true);
        var divElem1 = document.createElement("div");
        divElem1.id = "kampyleFormContainer";
        var spinnerContainer = createSpinnerElement();
        var divElem2 = document.createElement("div");
        divElem2.id = "kampyleFormModal";
        KAMPYLE_UTILS.setElementStyle(divElem2, { zIndex: "99999999", webkitOverflowScrolling: "touch" }, true);
        divElem1.appendChild(spinnerContainer);
        divElem1.appendChild(divElem2);
        divContainer.appendChild(divElem1);
        formSpanPlacer.appendChild(divContainer);
        KAMPYLE_UTILS.setSpinnerStyle(spinnerContainer, KAMPYLE_CONSTANT.SPINNER_SETTINGS.SIZE.LARGE);
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ENABLE_WCAG_PREPEND_SURVEY)) {
            document.body.prepend(formSpanPlacer);
        } else {
            document.body.appendChild(formSpanPlacer);
        }
    }
    function createInviteIframeContainer(data) {
        var inviteSpanPlacer = Object.assign(document.createElement("span"), { id: KAMPYLE_CONSTANT.IFRAME_SETTINGS.INVITATION.WRAPPER_ID });
        var divContainer = Object.assign(document.createElement("div"), { id: "kampyleInviteContainer" });
        KAMPYLE_UTILS.setElementStyle(
            divContainer,
            { top: "0", left: "0", width: "100%", height: "100%", position: "fixed", visibility: "hidden", display: "none", backgroundColor: "rgba(22,22,22,0.5)", zIndex: "99999999", overflow: "auto" },
            true
        );
        var spinnerContainer = createSpinnerElement();
        var divElem1 = document.createElement("div");
        divElem1.id = "kampyleInviteModal";
        KAMPYLE_UTILS.setElementStyle(divElem1, {
            overflow: "hidden",
            margin: "0 auto",
            height: data.inviteData.inviteHeight,
            width: data.inviteData.inviteWidth,
            position: "relative",
            zIndex: "99999999",
            top: "25%",
            webkitBoxShadow: "0 0 10px rgba(0,0,0,0.4)",
            mozBoxShadow: "0 0 10px rgba(0,0,0,0.4)",
            boxShadow: "0 0 10px rgba(0,0,0,0.4)",
        });
        divContainer.appendChild(divElem1);
        divContainer.appendChild(spinnerContainer);
        inviteSpanPlacer.appendChild(divContainer);
        KAMPYLE_UTILS.setSpinnerStyle(spinnerContainer, KAMPYLE_CONSTANT.SPINNER_SETTINGS.SIZE.LARGE);
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ENABLE_PREPEND_SURVEY)) {
            document.body.prepend(inviteSpanPlacer);
        } else {
            document.body.appendChild(inviteSpanPlacer);
        }
    }
    function getErrorModal(noJsonModalId, errorModalLang, errorMessageTitle, errorMessageBody, errorMessageClose) {
        var errorModal = document.createElement("div");
        var errorModalAttributes = KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.NEW_MODAL_DIALOGS)
            ? { id: noJsonModalId }
            : { tabIndex: 0, id: noJsonModalId, role: "alertdialog", "aria-modal": true, "aria-labelledby": "title-no-json-modal", "aria-describedby": "description-no-json-modal", lang: errorModal };
        KAMPYLE_UTILS.addAttributesOnElement(errorModal, errorModalAttributes);
        KAMPYLE_UTILS.setElementStyle(errorModal, {
            position: "relative",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255, 1)",
            margin: "5% auto 2% auto",
            border: "1px solid #cccccc",
            boxShadow: "8px 10px 58px 2px rgba(64, 64, 74, 0.56)",
            color: "#2C3548",
            fontFamily: "helvetica",
            height: "500px",
            width: KAMPYLE_DATA.isMobile() ? "98%" : "450px",
        });
        var closeButton = getErrorModalCloseButton(errorMessageClose, errorModalLang);
        var backgroundImage = getErrorModalBackgroundImage();
        var title = getErrorModalTitle(errorMessageTitle);
        var description = getErrorModalDescription(errorMessageBody);
        errorModal.appendChild(closeButton);
        errorModal.appendChild(backgroundImage);
        errorModal.appendChild(title);
        errorModal.appendChild(description);
        return errorModal;
    }
    function getVerticalButton(formData) {
        var buttonText = KAMPYLE_VIEW.getButtonText(formData);
        var direction = "kampyle_" + formData.buttonData.position;
        var buttonElement = document.createElement("button");
        KAMPYLE_UTILS.addAttributesOnElement(buttonElement, { id: "nebula_div_btn", alt: buttonText, tabIndex: "0", class: "kampyle_vertical_button " + direction + " " + KAMPYLE_VIEW.getWCAGClass() });
        KAMPYLE_UTILS.setElementStyle(buttonElement, { backgroundColor: "transparent", height: "auto", minHeight: "35px", maxHeight: "35px", width: "125px", minWidth: "125px", maxWidth: "125px", padding: 0 }, true);
        KAMPYLE_UTILS.setElementStyle(buttonElement, {
            fontFamily: "Open Sans, sans-serif",
            cursor: "pointer",
            position: "fixed",
            top: "45%",
            border: "none",
            zIndex: "99999990",
            height: "35px !important",
            "-ms-transform": "rotate(90deg)",
            "-webkit-transform": "rotate(90deg)",
            transform: "rotate(90deg)",
        });
        if (KAMPYLE_DATA.isFeatureEnabled(KAMPYLE_CONSTANT.FEATURE_FLAGS.WCAG)) {
            KAMPYLE_UTILS.addWcagStyleOnFocus(buttonElement);
        } else {
            KAMPYLE_UTILS.setElementStyle(buttonElement, { outline: "none" }, true);
        }
        buttonElement.style[formData.buttonData.position] = "-45px";
        var divElement = document.createElement("div");
        divElement.setAttribute("class", "kampyle_button");
        var styleForRadius = formData.buttonData.position === "left" ? "3px 3px 0 0" : "0 0 3px 3px";
        KAMPYLE_UTILS.setElementStyle(
            divElement,
            {
                width: "125px",
                minWidth: "125px",
                maxWidth: "125px",
                minHeight: "35px",
                maxHeight: "35px",
                "-webkit-border-radius": styleForRadius,
                "-moz-border-radius": styleForRadius,
                "-ms-border-radius": styleForRadius,
                "border-radius": styleForRadius,
            },
            true
        );
        KAMPYLE_UTILS.setElementStyle(divElement, { height: "35px", background: formData.buttonData.backgroundColor, color: formData.buttonData.textColor, position: "absolute", top: 0, left: 0, zIndex: "-1" });
        var divElement2 = document.createElement("div");
        KAMPYLE_UTILS.addAttributesOnElement(divElement2, { "data-aut": "feedback", class: "kampyle_button-text" });
        KAMPYLE_UTILS.setElementStyle(divElement2, { fontWeight: "normal" }, true);
        KAMPYLE_UTILS.setElementStyle(divElement2, { color: formData.buttonData.textColor, fontSize: "14px", lineHeight: "35px", textAlign: "center" });
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.RTL) && MDIGITAL.LOCALIZATION.isFormLanguageRtl(formData)) {
            KAMPYLE_UTILS.setElementStyle(divElement2, { transform: "scale(-1)", "-ms-transform": "scale(-1)", "-webkit-transform": "scale(-1)" });
        }
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ADDITIONAL_BUTTON_STYLES)) {
            var defaultTextHoverColor = "#FFFFFF",
                defaultBackgroundHoverColor = "#396CEF";
            addHoverStyleToFeedbackButton(
                buttonElement,
                { bgElementStyle: { backgroundColor: formData.buttonData.backgroundColor }, textElementStyle: { color: formData.buttonData.textColor } },
                { bgElementStyle: { backgroundColor: formData.buttonData.backgroundHoverColor || defaultBackgroundHoverColor }, textElementStyle: { color: formData.buttonData.textHoverColor || defaultTextHoverColor } }
            );
        }
        var textNode = document.createTextNode(buttonText);
        divElement2.appendChild(textNode);
        buttonElement.appendChild(divElement);
        buttonElement.appendChild(divElement2);
        return buttonElement;
    }
    function addHoverStyleToFeedbackButton(parentElement, defaultStyles, onHoverStyles) {
        if (parentElement && defaultStyles && onHoverStyles && typeof parentElement.addEventListener === "function") {
            parentElement.addEventListener("mouseenter", function () {
                var div1_bg = parentElement.children[0];
                var div2_text = parentElement.children[1];
                KAMPYLE_UTILS.setElementStyle(div1_bg, onHoverStyles.bgElementStyle);
                KAMPYLE_UTILS.setElementStyle(div2_text, onHoverStyles.textElementStyle);
            });
            parentElement.addEventListener("mouseleave", function () {
                var div1_bg = parentElement.children[0];
                var div2_text = parentElement.children[1];
                KAMPYLE_UTILS.setElementStyle(div1_bg, defaultStyles.bgElementStyle);
                KAMPYLE_UTILS.setElementStyle(div2_text, defaultStyles.textElementStyle);
            });
        }
    }
    function getPositionEnum(formData) {
        return {
            topRight: {
                btnStyle: { top: 0, right: 0 },
                div1Style: { top: 0, right: 0, borderTop: "81px solid " + formData.buttonData.backgroundColor, borderLeft: "81px solid transparent" },
                div2Style: { "-ms-transform": "rotate(45deg)", "-webkit-transform": "rotate(45deg)", transform: "rotate(45deg)" },
            },
            topLeft: {
                btnStyle: { top: 0, left: 0 },
                div1Style: { top: 0, left: 0, borderTop: "81px solid " + formData.buttonData.backgroundColor, borderRight: "81px solid transparent" },
                div2Style: { "-ms-transform": "rotate(-45deg)", "-webkit-transform": "rotate(-45deg)", transform: "rotate(-45deg)" },
            },
            bottomRight: {
                btnStyle: { bottom: 0, right: 0 },
                div1Style: { bottom: 0, right: 0, borderBottom: "81px solid " + formData.buttonData.backgroundColor, borderLeft: "81px solid transparent" },
                div2Style: { "-ms-transform": "rotate(-45deg)", "-webkit-transform": "rotate(-45deg)", transform: "rotate(-45deg)" },
            },
            bottomLeft: {
                btnStyle: { bottom: 0, left: 0 },
                div1Style: { bottom: 0, left: 0, borderBottom: "81px solid " + formData.buttonData.backgroundColor, borderRight: "81px solid transparent" },
                div2Style: { "-ms-transform": "rotate(45deg)", "-webkit-transform": "rotate(45deg)", transform: "rotate(45deg)" },
            },
        };
    }
    function getTriangularButton(formData) {
        var STYLE_BY_POSITION = getPositionEnum(formData);
        var buttonElement = document.createElement("button");
        var buttonText = KAMPYLE_VIEW.getButtonText(formData);
        var position = formData.buttonData.position || "topLeft";
        var classDirection = KAMPYLE_VIEW.getClassDirectonByPosition(position);
        var styleForBtn = STYLE_BY_POSITION[position].btnStyle;
        var styleForDiv1 = STYLE_BY_POSITION[position].div1Style;
        var styleForDiv2 = STYLE_BY_POSITION[position].div2Style;
        KAMPYLE_UTILS.addAttributesOnElement(buttonElement, { id: "nebula_div_btn", alt: buttonText, tabindex: 0, class: "kampyle_feedback-button " + classDirection.leftright + " " + KAMPYLE_VIEW.getWCAGClass() });
        KAMPYLE_UTILS.setElementStyle(buttonElement, { backgroundColor: "transparent", height: "auto", padding: 0 }, true);
        KAMPYLE_UTILS.setElementStyle(buttonElement, Object.assign({ fontFamily: "Open Sans, sans-serif", cursor: "pointer", position: "fixed", border: "none", zIndex: "99999990" }, styleForBtn));
        if (KAMPYLE_DATA.isFeatureEnabled(KAMPYLE_CONSTANT.FEATURE_FLAGS.WCAG)) {
            buttonElement.addEventListener("focusin", function (event) {
                KAMPYLE_UTILS.setElementStyle(buttonElement, { outline: "1px dashed #595959", outlineOffset: "2px", transition: "none" }, true);
            });
            buttonElement.addEventListener("focusout", function (event) {
                buttonElement.style.outline = "none";
                buttonElement.style.outlineOffset = null;
                buttonElement.style.transition = null;
            });
        } else {
            KAMPYLE_UTILS.setElementStyle(buttonElement, { outline: "none" }, true);
        }
        var divElem1 = document.createElement("div");
        divElem1.setAttribute("class", "kampyle_triangle");
        KAMPYLE_UTILS.setElementStyle(divElem1, Object.assign({ position: "absolute", width: 0, height: 0, zIndex: -1 }, styleForDiv1));
        var divElem2 = document.createElement("div");
        KAMPYLE_UTILS.addAttributesOnElement(divElem2, { "data-aut": "feedback", class: "kampyle_button-text " + classDirection.topbottom });
        KAMPYLE_UTILS.setElementStyle(divElem2, { fontWeight: "normal", lineHeight: position === "bottomLeft" || position === "bottomRight" ? "108px" : "53px" }, true);
        KAMPYLE_UTILS.setElementStyle(divElem2, Object.assign({ height: "81px", width: "81px", textAlign: "center", zIndex: "1000", color: formData.buttonData.textColor, fontSize: "14px" }, styleForDiv2));
        var textNode = document.createTextNode(buttonText);
        divElem2.appendChild(textNode);
        buttonElement.appendChild(divElem1);
        buttonElement.appendChild(divElem2);
        return buttonElement;
    }
    function getCustomButton(formData) {
        var POSITION_ENUM = { bottomLeft: { bottom: 0, left: 0 }, bottomRight: { bottom: 0, right: 0 }, topLeft: { top: 0, left: 0 }, topRight: { top: 0, right: 0 }, left: { left: 0, top: "50%" }, right: { right: 0, top: "50%" } };
        var buttonElement = document.createElement("button");
        var imgElem = document.createElement("img");
        var buttonText = KAMPYLE_VIEW.getButtonText(formData);
        var styleForBtn = POSITION_ENUM[formData.buttonData.position];
        KAMPYLE_UTILS.addAttributesOnElement(buttonElement, { id: "nebula_div_btn", tabindex: 0, class: "nebula_image_button " + KAMPYLE_VIEW.getWCAGClass() });
        KAMPYLE_UTILS.setElementStyle(buttonElement, { zIndex: "99999990", position: "fixed", cursor: "pointer", border: "none", lineHeight: "1px", width: "auto", background: "transparent" }, true);
        KAMPYLE_UTILS.setElementStyle(buttonElement, Object.assign({ padding: 0 }, styleForBtn));
        if (KAMPYLE_DATA.isFeatureEnabled(KAMPYLE_CONSTANT.FEATURE_FLAGS.WCAG)) {
            buttonElement.addEventListener("focusin", function (event) {
                KAMPYLE_UTILS.setElementStyle(buttonElement, { outline: "1px dashed #595959", outlineOffset: "2px", transition: "none" }, true);
            });
            buttonElement.addEventListener("focusout", function (event) {
                buttonElement.style.outline = "none";
                buttonElement.style.outlineOffset = null;
                buttonElement.style.transition = null;
            });
        } else {
            KAMPYLE_UTILS.setElementStyle(buttonElement, { outline: "none" }, true);
        }
        KAMPYLE_UTILS.addAttributesOnElement(imgElem, { alt: buttonText, src: formData.buttonData.buttonUrl });
        buttonElement.appendChild(imgElem);
        return buttonElement;
    }
    function getErrorModalCloseButton(text, langCode) {
        var closeButton = document.createElement("i");
        KAMPYLE_UTILS.addAttributesOnElement(closeButton, {
            "aria-hidden": KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.NEW_MODAL_DIALOGS) ? false : true,
            tabIndex: KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.NEW_MODAL_DIALOGS) ? 0 : -1,
            id: "close-no-json-modal",
            "data-aut": "no-json-modal-close-button",
            role: "button",
            lang: langCode,
            "aria-label": text,
        });
        KAMPYLE_UTILS.setElementStyle(closeButton, { cursor: "pointer", position: "absolute", top: "3px", right: "12px", fontStyle: "normal", fontSize: "28px", opacity: 0.7 });
        if (KAMPYLE_DATA.isFeatureEnabled(KAMPYLE_CONSTANT.FEATURE_FLAGS.WCAG)) {
            KAMPYLE_UTILS.addWcagStyleOnFocus(closeButton);
        }
        if (KAMPYLE_UTILS.isDesktop()) {
            KAMPYLE_UTILS.addHoverEffectOnElement(closeButton, { opacity: 0.7 }, { opacity: 1 });
        }
        closeButton.innerHTML = "×";
        return closeButton;
    }
    function getErrorModalTitle(text) {
        var title = document.createElement("h2");
        KAMPYLE_UTILS.addAttributesOnElement(title, { id: "title-no-json-modal" });
        KAMPYLE_UTILS.setElementStyle(title, { fontWeight: "bold", margin: "40px 0 16px", fontSize: "24px" });
        title.appendChild(document.createTextNode(text));
        return title;
    }
    function getErrorModalBackgroundImage() {
        var backgroundImage = document.createElement("img");
        KAMPYLE_UTILS.addAttributesOnElement(backgroundImage, { src: KAMPYLE_COMMON.getUrlPrefix() + KAMPYLE_CONSTANT.SRC.OOPS });
        KAMPYLE_UTILS.setElementStyle(backgroundImage, { marginLeft: "-1px" });
        return backgroundImage;
    }
    function getErrorModalDescription(text) {
        var container = document.createElement("div");
        KAMPYLE_UTILS.addAttributesOnElement(container, { id: "description-no-json-modal" });
        KAMPYLE_UTILS.setElementStyle(container, { padding: "0 44px", color: "#2C3548", fontFamily: "helvetica", lineHeight: "23px", fontSize: "16px" });
        var description = document.createElement("p");
        description.innerHTML = text;
        container.appendChild(description);
        return container;
    }
    function createSpinnerElement() {
        var spinnerContainer = document.createElement("div");
        spinnerContainer.id = KAMPYLE_CONSTANT.SPINNER_SETTINGS.CONTAINER_ID;
        KAMPYLE_UTILS.addAttributesOnElement(spinnerContainer, { class: "neb-loading-spinner" });
        var spinner = document.createElement("div");
        spinner.id = KAMPYLE_CONSTANT.SPINNER_SETTINGS.ID;
        spinnerContainer.appendChild(spinner);
        return spinnerContainer;
    }
    return {
        createScreenCaptureInstructionWidget: createScreenCaptureInstructionWidget,
        createScreenCaptureBody: createScreenCaptureBody,
        createFormContainer: createFormContainer,
        createInviteIframeContainer: createInviteIframeContainer,
        getErrorModal: getErrorModal,
        getVerticalButton: getVerticalButton,
        getTriangularButton: getTriangularButton,
        getCustomButton: getCustomButton,
        addHoverStyleToFeedbackButton: addHoverStyleToFeedbackButton,
        createSpinnerElement: createSpinnerElement,
    };
})(window, document);
window.MDIGITAL = window.MDIGITAL || {};
window.MDIGITAL.PROPERTY_MESSAGES = (function () {
    function getPropertyMessageTranslation() {
        var onsiteConfiguration = MDIGITAL.CONFIGURATION.getOnsiteConfiguration();
        return (onsiteConfiguration && onsiteConfiguration.propertyMessages) || {};
    }
    function getDefaultLanguageFromPropertyData() {
        var propertyMessageData = getPropertyMessageTranslation();
        return KAMPYLE_UTILS.getNestedPropertyValue(propertyMessageData, "localizationSettings.defaultLanguage");
    }
    function getLanguageCodeByCustomParam() {
        var propertyMessageData = getPropertyMessageTranslation();
        var customParamObject = KAMPYLE_UTILS.getNestedPropertyValue(propertyMessageData, "localizationSettings.customParam");
        return MDIGITAL.CUSTOM_PARAMETERS.getCustomParamValue({ type: customParamObject.type, name: customParamObject.source_name, source: customParamObject.source }) || getDefaultLanguageFromPropertyData();
    }
    function getPropertyMessageLanguageCode() {
        var propertyMessageData = getPropertyMessageTranslation();
        var shouldUseCustomParam = KAMPYLE_UTILS.getNestedPropertyValue(propertyMessageData, "localizationSettings.useCustomParam");
        if (shouldUseCustomParam) {
            return MDIGITAL.PROPERTY_MESSAGES.getLanguageCodeByCustomParam();
        } else {
            return KAMPYLE_UTILS.getLangCodeFromNavAPI();
        }
    }
    function getMessageByTypeAndKey(type, key) {
        var propertyMessageData = MDIGITAL.PROPERTY_MESSAGES.getPropertyMessageTranslation().messagesData || {};
        var propertyMessageLangCode = KAMPYLE_UTILS.safeToLower(MDIGITAL.PROPERTY_MESSAGES.getPropertyMessageLanguageCode());
        var messageObjectByLanguage = propertyMessageData[type] && propertyMessageData[type][propertyMessageLangCode];
        if (messageObjectByLanguage && messageObjectByLanguage[key] != undefined) {
            return messageObjectByLanguage[key];
        } else {
            var defaultLanguageCode = KAMPYLE_UTILS.safeToLower(MDIGITAL.PROPERTY_MESSAGES.getDefaultLanguageFromPropertyData());
            var messageObjectByDefaultLanguage = propertyMessageData[type] && propertyMessageData[type][defaultLanguageCode];
            if (messageObjectByDefaultLanguage && messageObjectByDefaultLanguage[key] != undefined) {
                return messageObjectByDefaultLanguage[key];
            }
            return KAMPYLE_CONSTANT.TEXTS.DEFAULT_JSON_ERROR_MESSAGES[key];
        }
    }
    return {
        getPropertyMessageLanguageCode: getPropertyMessageLanguageCode,
        getPropertyMessageTranslation: getPropertyMessageTranslation,
        getDefaultLanguageFromPropertyData: getDefaultLanguageFromPropertyData,
        getLanguageCodeByCustomParam: getLanguageCodeByCustomParam,
        getMessageByTypeAndKey: getMessageByTypeAndKey,
    };
})();
window.MDIGITAL = window.MDIGITAL || {};
window.MDIGITAL.LOGGER = (function (window, document) {
    function Logger() {
        var LOG_TYPES = { DEBUG: "log", INFO: "info", WARN: "warn", ERROR: "warn" };
        this._logs = [];
        this.init = function () {
            this.setLoggerStatus(false);
        };
        this.getLoggerStatus = function () {
            var currentLoggerStatus = KAMPYLE_DATA.getData("mdLogger");
            return currentLoggerStatus === "true" || currentLoggerStatus === true;
        };
        this.setLoggerStatus = function (status) {
            KAMPYLE_DATA.setData("mdLogger", status);
        };
        this.debug = function (message) {
            this.writeLog("DEBUG", message);
        };
        this.warn = function (message) {
            this.writeLog("WARN", message);
        };
        this.error = function (message) {
            this.writeLog("ERROR", message);
        };
        this.writeLog = function (logLevel, message) {
            var logType = LOG_TYPES[logLevel] || LOG_TYPES.DEBUG;
            message = this.setTimeAndLevelOnMessage(logLevel, message);
            this._logs.push({ type: logType, message: message || "" });
        };
        this.setTimeAndLevelOnMessage = function (logLevel, message) {
            return new Date() + " " + "[" + logLevel + "] " + message;
        };
        this.printLogs = function () {
            var str = "";
            this._logs.forEach(function (log) {
                console[log.type](log.message);
                str += " " + log.message;
            });
            return str;
        };
    }
    return new Logger();
})(window, document);
window.COOLADATA_CODE = (function (window, document) {
    var init = function () {
        if (!window.cooladata) {
            (function (d, a) {
                if (!a.__SV) {
                    var b, c, g, e;
                    window.cooladata = a;
                    a._i = [];
                    a.init = function (b, c, f) {
                        function d(a, b) {
                            var c = b.split(".");
                            2 == c.length && ((a = a[c[0]]), (b = c[1]));
                            a[b] = function () {
                                a.push([b].concat(Array.prototype.slice.call(arguments, 0)));
                            };
                        }
                        var h = a;
                        "undefined" !== typeof f ? (h = a[f] = []) : (f = "cooladata");
                        g = ["trackEvent", "trackEventLater", "trackPageload", "flush", "setConfig"];
                        for (e = 0; e < g.length; e++) d(h, g[e]);
                        a._i.push([b, c, f]);
                    };
                    a.__SV = 1.2;
                }
            })(document, window.cooladata || []);
        }
        !(function (e) {
            var t,
                n = Array.prototype,
                o = Function.prototype,
                r = Object.prototype,
                i = n.slice,
                a = r.toString,
                s = r.hasOwnProperty,
                c = window.console,
                u = window.navigator,
                f = window.document,
                d = u.userAgent,
                l = (e && e.__SV) || 0,
                p = window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
                _ = !p && -1 == d.indexOf("MSIE") && -1 == d.indexOf("Mozilla"),
                h = {},
                g = { api_host: "api.cooladata.com", loaded: function () {}, img: !1, http_post: !1, track_pageload: !1, stored_user_key_name: "medallia_journeys_id", user_identifier_property: "user_id" },
                v = !1;
            !(function () {
                o.bind;
                var e = n.forEach,
                    t = (n.indexOf, Array.isArray),
                    r = {},
                    c = (h.each = function (t, n, o) {
                        if (null != t)
                            if (e && t.forEach === e) t.forEach(n, o);
                            else if (t.length === +t.length) {
                                for (var i = 0, a = t.length; i < a; i++) if (i in t && n.call(o, t[i], i, t) === r) return;
                            } else for (var c in t) if (s.call(t, c) && n.call(o, t[c], c, t) === r) return;
                    });
                (h.extend = function (e) {
                    return (
                        c(i.call(arguments, 1), function (t) {
                            for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
                        }),
                        e
                    );
                }),
                    (h.isArray =
                        t ||
                        function (e) {
                            return "[object Array]" === a.call(e);
                        }),
                    (h.isFunction = function (e) {
                        try {
                            return /^\s*\bfunction\b/.test(e);
                        } catch (e) {
                            return !1;
                        }
                    }),
                    (h.isArguments = function (e) {
                        return !(!e || !s.call(e, "callee"));
                    }),
                    (h.toArray = function (e) {
                        return e ? (e.toArray ? e.toArray() : h.isArray(e) ? i.call(e) : h.isArguments(e) ? i.call(e) : h.values(e)) : [];
                    }),
                    (h.values = function (e) {
                        var t = [];
                        return null == e
                            ? t
                            : (c(e, function (e) {
                                  t[t.length] = e;
                              }),
                              t);
                    });
            })(),
                (h.isObject = function (e) {
                    return e === Object(e) && !h.isArray(e);
                }),
                (h.isUndefined = function (e) {
                    return void 0 === e;
                }),
                (h.isString = function (e) {
                    return "[object String]" == a.call(e);
                }),
                (h.JSONEncode = function (e) {
                    var t = function (e) {
                            var t = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                                n = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" };
                            return (
                                (t.lastIndex = 0),
                                t.test(e)
                                    ? '"' +
                                      e.replace(t, function (e) {
                                          var t = n[e];
                                          return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
                                      }) +
                                      '"'
                                    : '"' + e + '"'
                            );
                        },
                        n = function (e, o) {
                            var r = "",
                                i = 0,
                                c = "",
                                u = "",
                                f = 0,
                                d = r,
                                l = [],
                                p = o[e];
                            switch ((p && "object" == typeof p && "function" == typeof p.toJSON && (p = p.toJSON(e)), typeof p)) {
                                case "string":
                                    return t(p);
                                case "number":
                                    return isFinite(p) ? String(p) : "null";
                                case "boolean":
                                case "null":
                                    return String(p);
                                case "object":
                                    if (!p) return "null";
                                    if (((r += "    "), (l = []), "[object Array]" === a.apply(p))) {
                                        for (f = p.length, i = 0; i < f; i += 1) l[i] = n(i, p) || "null";
                                        return (u = 0 === l.length ? "[]" : r ? "[\n" + r + l.join(",\n" + r) + "\n" + d + "]" : "[" + l.join(",") + "]"), (r = d), u;
                                    }
                                    for (c in p) s.call(p, c) && (u = n(c, p)) && l.push(t(c) + (r ? ": " : ":") + u);
                                    return (u = 0 === l.length ? "{}" : r ? "{" + l.join(",") + d + "}" : "{" + l.join(",") + "}"), (r = d), u;
                            }
                        };
                    return n("", { "": e });
                }),
                (h.strip_empty_properties = function (e) {
                    var t = {};
                    return (
                        h.each(e, function (e, n) {
                            h.isString(e) && e.length > 0 && (t[n] = e);
                        }),
                        t
                    );
                }),
                (h.base64Encode = function (e) {
                    var t = {
                        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        encode: function (e) {
                            var n,
                                o,
                                r,
                                i,
                                a,
                                s,
                                c,
                                u = "",
                                f = 0;
                            for (e = t._utf8_encode(e); f < e.length; )
                                (i = (n = e.charCodeAt(f++)) >> 2),
                                    (a = ((3 & n) << 4) | ((o = e.charCodeAt(f++)) >> 4)),
                                    (s = ((15 & o) << 2) | ((r = e.charCodeAt(f++)) >> 6)),
                                    (c = 63 & r),
                                    isNaN(o) ? (s = c = 64) : isNaN(r) && (c = 64),
                                    (u = u + this._keyStr.charAt(i) + this._keyStr.charAt(a) + this._keyStr.charAt(s) + this._keyStr.charAt(c));
                            return u;
                        },
                        _utf8_encode: function (e) {
                            e = e.replace(/\r\n/g, "\n");
                            for (var t = "", n = 0; n < e.length; n++) {
                                var o = e.charCodeAt(n);
                                o < 128
                                    ? (t += String.fromCharCode(o))
                                    : o > 127 && o < 2048
                                    ? ((t += String.fromCharCode((o >> 6) | 192)), (t += String.fromCharCode((63 & o) | 128)))
                                    : ((t += String.fromCharCode((o >> 12) | 224)), (t += String.fromCharCode(((o >> 6) & 63) | 128)), (t += String.fromCharCode((63 & o) | 128)));
                            }
                            return t;
                        },
                    };
                    return t.encode(e);
                }),
                (h.utf8Encode = function (e) {
                    e = e.replace(/\r\n/g, "\n");
                    for (var t = "", n = 0; n < e.length; n++) {
                        var o = e.charCodeAt(n);
                        o < 128
                            ? (t += String.fromCharCode(o))
                            : o > 127 && o < 2048
                            ? ((t += String.fromCharCode((o >> 6) | 192)), (t += String.fromCharCode((63 & o) | 128)))
                            : ((t += String.fromCharCode((o >> 12) | 224)), (t += String.fromCharCode(((o >> 6) & 63) | 128)), (t += String.fromCharCode((63 & o) | 128)));
                    }
                    return t;
                }),
                (h.HTTPBuildQuery = function (e, t) {
                    var n,
                        o,
                        r = [];
                    return (
                        void 0 === t && (t = "&"),
                        h.each(e, function (e, t) {
                            (n = encodeURIComponent(e.toString())), (o = encodeURIComponent(t)), (r[r.length] = o + "=" + n);
                        }),
                        r.join(t)
                    );
                }),
                (h.UUID =
                    ((t = function () {
                        for (var e = 1 * new Date(), t = 0; e == 1 * new Date(); ) t++;
                        return e.toString(16) + t.toString(16);
                    }),
                    function () {
                        var e = (screen.height * screen.width).toString(16);
                        return (
                            t() +
                            "-" +
                            Math.random().toString(16).replace(".", "") +
                            "-" +
                            (function (e) {
                                var t,
                                    n,
                                    o = d,
                                    r = [],
                                    i = 0;
                                function a(e, t) {
                                    var n,
                                        o = 0;
                                    for (n = 0; n < t.length; n++) o |= r[n] << (8 * n);
                                    return e ^ o;
                                }
                                for (t = 0; t < o.length; t++) (n = o.charCodeAt(t)), r.unshift(255 & n), r.length >= 4 && ((i = a(i, r)), (r = []));
                                return r.length > 0 && (i = a(i, r)), i.toString(16);
                            })() +
                            "-" +
                            e +
                            "-" +
                            t()
                        );
                    })),
                (h.getQueryParam = function (e, t) {
                    t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                    var n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
                    return null === n || (n && "string" != typeof n[1] && n[1].length) ? "" : decodeURIComponent(n[1]).replace(/\+/g, " ");
                }),
                (h.register_event = (function () {
                    function e(t) {
                        return t && ((t.preventDefault = e.preventDefault), (t.stopPropagation = e.stopPropagation)), t;
                    }
                    return (
                        (e.preventDefault = function () {
                            this.returnValue = !1;
                        }),
                        (e.stopPropagation = function () {
                            this.cancelBubble = !0;
                        }),
                        function (t, n, o, r) {
                            if (t)
                                if (t.addEventListener && !r) t.addEventListener(n, o, !1);
                                else {
                                    var i = "on" + n,
                                        a = t[i];
                                    t[i] = (function (t, n, o) {
                                        return function (r) {
                                            if ((r = r || e(window.event))) {
                                                var i,
                                                    a,
                                                    s = !0;
                                                return h.isFunction(o) && (i = o(r)), (a = n.call(t, r)), (!1 !== i && !1 !== a) || (s = !1), s;
                                            }
                                        };
                                    })(t, o, a);
                                }
                            else c.log("No valid element provided to register_event");
                        }
                    );
                })()),
                (h.info = {
                    campaignParams: function () {
                        var e = "utm_source utm_medium utm_campaign utm_content utm_term".split(" "),
                            t = "",
                            n = {};
                        return (
                            h.each(e, function (e) {
                                (t = h.getQueryParam(f.URL, e)).length && (n[e] = t);
                            }),
                            n
                        );
                    },
                    referringDomain: function (e) {
                        var t = e.split("/");
                        return t.length >= 3 ? t[2] : "";
                    },
                    properties: function () {
                        return h.extend(
                            h.strip_empty_properties({
                                session_screen_size: window.screen.width + "x" + window.screen.height,
                                session_dua: u.userAgent,
                                session_platform: u.platform,
                                referring_url: f.referrer,
                                referring_domain: h.info.referringDomain(f.referrer),
                                page_title: f.title,
                                page_url: f.location.href,
                            }),
                            { tracker_type: "javascript", tracker_version: "2.2.23" }
                        );
                    },
                    pageviewInfo: function (e) {
                        return h.strip_empty_properties({ event_timestamp_epoch: 1 * new Date() });
                    },
                });
            var y = function () {
                    if (!h.isUndefined(c) && c) {
                        var e = ["Cooladata error:"].concat(h.toArray(arguments));
                        try {
                            c.error.apply(c, e);
                        } catch (t) {
                            h.each(e, function (e) {
                                c.error(e);
                            });
                        }
                    }
                },
                m = function (t, n, o) {
                    var r,
                        i = "cooladata" === o ? e : e[o];
                    if (!i || h.isArray(i)) return (r = new w())._init(t, n, o), h.isUndefined(i) || r._execute_array(i), r;
                    c.log("You have already initialized " + o);
                },
                w = function () {};
            if (
                ((w.prototype.init = function (t, n, o) {
                    if (void 0 !== o) {
                        if ("cooladata" !== o) {
                            var r = m(t, n, o);
                            return (e[o] = r), r._loaded(), r;
                        }
                        c.log("You must initialize the main cooladata object right after you include the Cooladata js snippet");
                    } else c.log("You must name your new library: init(token, config, name)");
                }),
                (w.prototype._init = function (e, t, n) {
                    (this.__loaded = !0),
                        (this.__SV = !0),
                        (this.config = {}),
                        (this.eventsArray = []),
                        this.set_config(
                            h.extend({}, g, {
                                token: e.app_key,
                                img: e.img_src_get_request,
                                session_id: e.session_id,
                                http_post: e.http_post,
                                track_pageload: e.track_pageload,
                                user_identifier_property: e.user_identifier_property,
                                stored_user_key_name: e.stored_user_key_name,
                                name: n,
                            })
                        );
                    var o = e.api_host || g.api_host;
                    this.set_config({ api_host: "https://" + o });
                    var r = e.user_id || this.getStoredUid() || h.UUID();
                    this.storeUid(r), this.set_config({ user_id: r }), (this.__dom_loaded_queue = []), (this.__request_queue = []), e.custom_event_handler && (this.__customEventHandler = e.custom_event_handler);
                }),
                (w.prototype.getStoredUid = function () {
                    var e = this.get_config("stored_user_key_name");
                    if ("undefined" != typeof Storage && window.localStorage.getItem(e)) return window.localStorage.getItem(e);
                    for (var t = e + "=", n = f.cookie.split(";"), o = 0; o < n.length; o++) {
                        for (var r = n[o]; " " == r.charAt(0); ) r = r.substring(1);
                        if (0 == r.indexOf(t)) return r.substring(t.length, r.length);
                    }
                    return "";
                }),
                (w.prototype.storeUid = function (e) {
                    var t = this.get_config("stored_user_key_name");
                    if ("undefined" == typeof Storage) {
                        var n = new Date();
                        n.setTime(n.getTime() + 31536e6);
                        var o = "; expires=" + n.toGMTString(),
                            r = ["com", "org", "net", "int", "edu", "gov", "mil", "biz"],
                            i = window.location.host.split("."),
                            a = "";
                        if ("www" == i[0] || 4 == i.length) i.shift(), (a = i.join("."));
                        else
                            switch (i.length) {
                                case 2:
                                    a = i.join(".");
                                    break;
                                case 3:
                                    for (var s = r.length; s--; )
                                        if (r[s] === i[2]) {
                                            i.shift(), (a = i.join("."));
                                            break;
                                        }
                                    "" == a && (a = i.join("."));
                            }
                        f.cookie = t + "=" + e + o + ";domain=." + a + ";path=/; SameSite=Lax; Secure";
                    } else window.localStorage.setItem(t, e);
                }),
                (w.prototype._loaded = function () {
                    this.get_config("loaded")(this), this.get_config("track_pageload") && this.track_pageload();
                }),
                (w.prototype._dom_loaded = function () {
                    h.each(
                        this.__dom_loaded_queue,
                        function (e) {
                            this._track_dom.apply(this, e);
                        },
                        this
                    ),
                        h.each(
                            this.__request_queue,
                            function (e) {
                                this._send_request.apply(this, e);
                            },
                            this
                        ),
                        delete this.__dom_loaded_queue,
                        delete this.__request_queue;
                }),
                (w.prototype._track_dom = function (e, t) {
                    if (this.get_config("img")) return c.log("You can't use DOM tracking functions with img = true."), !1;
                    if (!v) return this.__dom_loaded_queue.push([e, t]), !1;
                    var n = new e().init(this);
                    return n.track.apply(n, t);
                }),
                (w.prototype.trackEventLater = function (e, t) {
                    if (void 0 !== e) {
                        t = t || {};
                        var n = new Date(),
                            o = h.extend({}, h.info.properties(), h.info.campaignParams(), {
                                event_name: e,
                                event_timestamp_epoch: n.getTime().toString(),
                                event_timezone_offset: (n.getTimezoneOffset() / 60) * -1,
                                session_id: this.get_config("session_id"),
                            });
                        (o[this.get_config("user_identifier_property")] = this.get_config("user_id")), (o = h.extend(o, t)), this.eventsArray.push(o);
                    } else c.log("No event name provided to cooladata.trackEventLater");
                }),
                (w.prototype.flush = function () {
                    this.get_config("api_host"), this.get_config("token");
                    var e = { events: this.eventsArray },
                        t = h.JSONEncode(e);
                    this._send_request(t), (this.eventsArray = []);
                }),
                (w.prototype._onError = function (e, t) {}),
                (w.prototype._send_request = function (e, t) {
                    if (_) this.__request_queue.push(arguments);
                    else {
                        var n = function () {
                                var e = window.navigator.userAgent;
                                return e.indexOf("MSIE ") > -1 && 1 !== e.split("MSIE ")[1].charAt(0);
                            },
                            o = !1;
                        if ((e.length > 1400 && (o = !0), this.__customEventHandler && this.__customEventHandler.handleRequest)) {
                            var r = null;
                            return o || (!n() && !this.get_config("img")) ? p && (r = this.get_config("http_post") || o ? "post" : "get") : (r = "image"), void this.__customEventHandler.handleRequest(this, e, r);
                        }
                        var i = this.get_config("api_host") + "/v1/" + this.get_config("token") + "/track";
                        if (o || (!n() && !this.get_config("img")))
                            if (p) {
                                var a = null;
                                this.get_config("http_post") || o ? (a = "data=" + encodeURIComponent(e)) : ((e = { data: h.base64Encode(e) }), (i += "?" + h.HTTPBuildQuery(e)));
                                var s = new XMLHttpRequest();
                                this.get_config("http_post") || o ? (s.open("POST", i, !0), s.setRequestHeader("Content-type", "application/x-www-form-urlencoded")) : s.open("GET", i, !0),
                                    (s.withCredentials = !0),
                                    (s.onreadystatechange = function (e) {
                                        if (4 === s.readyState)
                                            if (200 === s.status) t && t();
                                            else {
                                                var n = "Bad HTTP status: " + s.status + " " + s.statusText;
                                                c.log(n);
                                            }
                                    }),
                                    s.send(a);
                            } else {
                                var u = f.createElement("script");
                                (u.type = "text/javascript"), (u.async = !0), (u.defer = !0), (u.src = i);
                                var d = f.getElementsByTagName("script")[0];
                                d.parentNode.insertBefore(u, d);
                            }
                        else {
                            var l = this;
                            (i = this.get_config("api_host") + "/egw/5/" + this.get_config("token") + "/track/__cool.gif"), (i += "?data=" + (e = h.base64Encode(e)));
                            var g = f.createElement("img");
                            (g.onerror = function () {
                                l._onError(e, t);
                            }),
                                (g.width = 1),
                                (g.height = 1),
                                (g.src = i);
                        }
                    }
                }),
                (w.prototype._execute_array = function (e) {
                    var t,
                        n = [],
                        o = [],
                        r = [];
                    h.each(
                        e,
                        function (e) {
                            e &&
                                ((t = e[0]),
                                "function" == typeof e
                                    ? e.call(this)
                                    : h.isArray(e) && "alias" === t
                                    ? n.push(e)
                                    : !h.isArray(e) || (-1 == t.indexOf("track") && -1 == t.indexOf("flush")) || "function" != typeof this[t]
                                    ? o.push(e)
                                    : r.push(e));
                        },
                        this
                    );
                    var i = function (e, t) {
                        h.each(
                            e,
                            function (e) {
                                this[e[0]].apply(this, e.slice(1));
                            },
                            t
                        );
                    };
                    i(n, this), i(o, this), i(r, this);
                }),
                (w.prototype.push = function (e) {
                    this._execute_array([e]);
                }),
                (w.prototype.trackEvent = function (e, t, n) {
                    if (void 0 !== e) {
                        t = t || {};
                        var o = new Date(),
                            r = h.extend({}, h.info.properties(), h.info.campaignParams(), {
                                event_name: e,
                                event_timestamp_epoch: o.getTime().toString(),
                                event_timezone_offset: (o.getTimezoneOffset() / 60) * -1,
                                session_id: this.get_config("session_id"),
                            });
                        (r[this.get_config("user_identifier_property")] = this.get_config("user_id")), (r = { events: [(r = h.extend(r, t))] });
                        var i = h.JSONEncode(r);
                        this._send_request(i, n);
                    } else c.log("No event name provided to cooladata.trackEvent");
                }),
                (w.prototype.track_pageload = function (e) {
                    void 0 === e && (e = f.location.href), this.trackEvent("page_load", h.info.pageviewInfo(e));
                }),
                (w.prototype.set_config = function (e) {
                    h.isObject(e) && h.extend(this.config, e);
                }),
                (w.prototype.get_config = function (e) {
                    return this.config[e];
                }),
                (w.prototype.toString = function () {
                    var e = this.get_config("name");
                    return "cooladata" !== e && (e = "cooladata." + e), e;
                }),
                (h.toArray = h.toArray),
                (h.isObject = h.isObject),
                (h.JSONEncode = h.JSONEncode),
                (h.info = h.info),
                (w.prototype.init = w.prototype.init),
                (w.prototype.track_event = w.prototype.trackEvent),
                (w.prototype.track_event_later = w.prototype.trackEventLater),
                (w.prototype.flush = w.prototype.flush),
                (w.prototype.track_pageload = w.prototype.track_pageload),
                (w.prototype.set_config = w.prototype.set_config),
                (w.prototype.get_config = w.prototype.get_config),
                (w.prototype.toString = w.prototype.toString),
                h.isUndefined(e))
            )
                y("'cooladata' object not initialized. Ensure you are using the latest version of the Cooladata JS Library along with the snippet we provide.");
            else if (e.__loaded || e.config) c.log("Cooladata library has already been downloaded at least once.");
            else if (l < 1.1) c.critical("Version mismatch; please ensure you're using the latest version of the Cooladata code snippet.");
            else {
                var S = {};
                h.each(e._i, function (e) {
                    var t, n;
                    e && h.isArray(e) && ((t = e[e.length - 1]), (n = m.apply(this, e)), (S[t] = n));
                });
                if (
                    ((e.init = function (t, n, o) {
                        if (o) e[o] || ((e[o] = S[o] = m(t, n, o)), e[o]._loaded());
                        else {
                            var r = e;
                            S.cooladata ? (r = S.cooladata) : t && (r = m(t, n, "cooladata")) && r._loaded(),
                                (window.cooladata = e = r),
                                h.each(S, function (t, n) {
                                    "cooladata" !== n && (e[n] = t);
                                }),
                                (e._ = h);
                        }
                    }),
                    e.init(),
                    h.each(S, function (e) {
                        e._loaded();
                    }),
                    f.addEventListener)
                )
                    "complete" == f.readyState ? C() : f.addEventListener("DOMContentLoaded", C, !1);
                else if (f.attachEvent) {
                    f.attachEvent("onreadystatechange", C);
                    var k = !1;
                    try {
                        k = null == window.frameElement;
                    } catch (e) {}
                    if (f.documentElement.doScroll && k) {
                        !(function e() {
                            try {
                                f.documentElement.doScroll("left");
                            } catch (t) {
                                return void setTimeout(e, 1);
                            }
                            C();
                        })();
                    }
                }
                h.register_event(window, "load", C, !0);
            }
            function C() {
                C.done ||
                    ((C.done = !0),
                    (v = !0),
                    (_ = !1),
                    h.each(S, function (e) {
                        e._dom_loaded();
                    }));
            }
        })(window.cooladata);
    };
    return { init: init };
})(window, document);
window.KAMPYLE_COOLADATA = (function (window, document) {
    var COOLADATA_CONFIGURATION = { API_GATEWAY_ENDPOINT: "uwbhzazjt4.execute-api.eu-west-1.amazonaws.com/Production", COOLADATA_APP_KEY: { PROD: "qceuv8449dzg58ptt1bhda9g8ue19c7s", QA: "lf5shxz66ckwmizs7kowapgs2rkoejcl" } };
    var rateLimitCounterMap = {};
    function kmaUDCSubmit(data) {
        return KAMPYLE_UTILS.httpRequest(KAMPYLE_CONSTANT.HTTP_METHODS.GET, KAMPYLE_CONSTANT.URLS.KMA_UDC + encodeURI(data));
    }
    var COMMON_FIELDS;
    var COOLADATA_SRC_PREFIX = KAMPYLE_CONSTANT.PLACEHOLDERS.COOLADATA_SRC_PREFIX;
    var COOLADATA_SRC = COOLADATA_SRC_PREFIX + KAMPYLE_CONSTANT.SRC.COOLADATA;
    var cooladataEvents = {
        neb_pageView: { eventId: "nebula_page_view" },
        neb_inviteAccepted: { eventId: "nebula_invite_accepted" },
        neb_inviteDeclined: { eventId: "nebula_invite_declined" },
        neb_showInvitation: { eventId: "nebula_invitation_show", memoryDataKey: "invitationTriggeringData" },
        neb_feedbackSubmitted: { eventId: "nebula_form_submitted" },
        neb_formShown: { eventId: "nebula_form_show" },
        neb_buttonClicked: { eventId: "nebula_button_clicked" },
        neb_sdkShowForm: { eventId: "nebula_code_trigger_form" },
        neb_routeToForm: { eventId: "nebula_route_to_form" },
        neb_formClosed: { eventId: "nebula_form_closed" },
        neb_popupBlocked: { eventId: "nebula_popup_blocked" },
        neb_skipInvitation: { eventId: "nebula_invitation_skipped" },
        neb_formPageShown: { eventId: "nebula_form_page_displayed" },
        neb_captureInit: { eventId: "nebula_capture_init" },
        neb_captureImageClicked: { eventId: "nebula_capture_image_clicked" },
        MDigital_Capture_Cancelled: { eventId: "nebula_cancel_capture_clicked" },
        neb_load_form_preload_proximity: { eventId: "nebula_load_form_preload_proximity", provision: KAMPYLE_CONSTANT.PROVISIONS.cooladataNewEvents },
        neb_cancel_capture_clicked: { eventId: "nebula_cancel_capture_clicked" },
        neb_load_form_form_reload: { eventId: "nebula_load_form_form_reload", provision: KAMPYLE_CONSTANT.PROVISIONS.cooladataNewEvents },
        neb_button_displayed: { eventId: "nebula_button_displayed", provision: KAMPYLE_CONSTANT.PROVISIONS.cooladataNewEvents },
        neb_invitation_loaded: { eventId: "nebula_invitation_loaded", provision: KAMPYLE_CONSTANT.PROVISIONS.cooladataNewEvents },
        neb_invitation_ready: { eventId: "nebula_invitation_ready", provision: KAMPYLE_CONSTANT.PROVISIONS.cooladataNewEvents },
        neb_form_loaded: { eventId: "nebula_form_loaded", provision: KAMPYLE_CONSTANT.PROVISIONS.cooladataNewEvents },
        neb_formReady: { eventId: "nebula_form_ready", provision: KAMPYLE_CONSTANT.PROVISIONS.cooladataNewEvents },
        neb_sdkSurveyDisplayed: { eventId: "nebula_code_survey_displayed" },
        neb_afterHttpGetRequestOnError: { eventId: "nebula_after_http_get_request_on_error", eventDataKey: "httpRequestData" },
        neb_afterHttpGetRequestOnErrorStatusCode: { eventId: "nebula_after_http_get_request_on_error_status_code", eventDataKey: "httpRequestData" },
        neb_afterHttpGetRequestOnTimeout: { eventId: "nebula_after_http_get_request_on_timeout", eventDataKey: "httpRequestData" },
        neb_afterHttpGetRequest: { eventId: "nebula_after_http_get_request", eventDataKey: "httpRequestData" },
        MDigital_updatingSbtServer: { eventId: "MDigital_updating_sbt_server", eventDataKey: "dataObjForSbt", provision: KAMPYLE_CONSTANT.PROVISIONS.UBT_EXTRA_EVENTS },
        MDigital_settingIdentifierValueOnMemory: { eventId: "MDigital_setting_identifier_value_on_memory", eventDataKey: "hasIdentifierValue", provision: KAMPYLE_CONSTANT.PROVISIONS.UBT_EXTRA_EVENTS },
        MDigital_shouldNotSyncIdentifier: { eventId: "MDigital_should_not_sync_identifier", provision: KAMPYLE_CONSTANT.PROVISIONS.UBT_EXTRA_EVENTS },
        neb_beforeHttpPostRequest: { eventId: "nebula_before_http_post_request", eventDataKey: "httpRequestData", provision: KAMPYLE_CONSTANT.PROVISIONS.UBT_EXTRA_EVENTS },
        neb_afterHttpPostRequestOnError: { eventId: "nebula_after_http_post_request_on_error", eventDataKey: "httpRequestData", provision: KAMPYLE_CONSTANT.PROVISIONS.UBT_EXTRA_EVENTS },
        neb_afterHttpPostRequest: { eventId: "nebula_after_http_post_request", eventDataKey: "httpRequestData", provision: KAMPYLE_CONSTANT.PROVISIONS.UBT_EXTRA_EVENTS },
        neb_afterHttpPostRequestOnErrorStatusCode: { eventId: "nebula_after_http_post_request_on_error_status_code", eventDataKey: "httpRequestData", provision: KAMPYLE_CONSTANT.PROVISIONS.UBT_EXTRA_EVENTS },
        neb_afterHttpPostRequestOnTimeout: { eventId: "nebula_after_http_post_request_on_timeout", eventDataKey: "httpRequestData", provision: KAMPYLE_CONSTANT.PROVISIONS.UBT_EXTRA_EVENTS },
        MDigital_updateTargetingWithDeclinedDateInviteDeclined: { eventId: "MDigital_update_targeting_with_declined_date_invite_declined", eventDataKey: "declinedDate", provision: KAMPYLE_CONSTANT.PROVISIONS.UBT_EXTRA_EVENTS },
        MDigital_updateTargetingWithSubmittedDate: { eventId: "MDigital_update_targeting_with_submitted_date", eventDataKey: "submittedDate", provision: KAMPYLE_CONSTANT.PROVISIONS.UBT_EXTRA_EVENTS },
        MDigital_updateTargetingWithDeclinedDateFormClosed: { eventId: "MDigital_update_targeting_with_declined_date_form_closed", eventDataKey: "declinedDate", provision: KAMPYLE_CONSTANT.PROVISIONS.UBT_EXTRA_EVENTS },
        neb_initUserIdentifier: { eventId: "nebula_init_user_identifier", eventDataKey: "hasIdentifierValue", provision: KAMPYLE_CONSTANT.PROVISIONS.UBT_EXTRA_EVENTS },
        neb_initUserIdentifierOnExtraData: { eventId: "nebula_init_user_identifier_on_extra_data", eventDataKey: "hasIdentifierValue", provision: KAMPYLE_CONSTANT.PROVISIONS.UBT_EXTRA_EVENTS },
        neb_eventDispatcherError: { eventId: "nebula_eventDispatcherError", eventDataKeys: ["errorMessage", "errorStack", "additionalInfo"] },
        neb_feedbackUUIDisNull: { eventId: "nebula_feedbackUuidIsNull" },
        neb_submitFeedbackFailed: { eventId: "nebula_submitFeedbackFailed", eventDataKeys: ["uuid", "errorMessage", "errorStack"] },
        MDigital_Form_Next_Page: { eventId: "MDigital_Form_Next_Page", provision: KAMPYLE_CONSTANT.PROVISIONS.cooladataNewEvents },
        MDigital_Form_Back_Page: { eventId: "MDigital_Form_Back_Page", provision: KAMPYLE_CONSTANT.PROVISIONS.cooladataNewEvents },
        MDigital_Form_Close_No_Submit: { eventId: "MDigital_Form_Close_No_Submit", provision: KAMPYLE_CONSTANT.PROVISIONS.cooladataNewEvents },
        MDigital_ThankYou_Displayed: { eventId: "MDigital_ThankYou_Displayed", provision: KAMPYLE_CONSTANT.PROVISIONS.cooladataNewEvents },
        MDigital_ThankYou_Close: { eventId: "MDigital_ThankYou_Close", provision: KAMPYLE_CONSTANT.PROVISIONS.cooladataNewEvents },
        MDigital_warning: { eventId: "MDigital_warning", eventDataKey: "message" },
        MDigital_couldNotFetchData: { eventId: "MDigital_couldNotFetchData", eventDataKey: "errorData" },
        MDigital_couldNotLoadFormApplication: { eventId: "MDigital_couldNotLoadFormApplication", eventDataKey: "errorData" },
        MDigital_Invalid_Origin: { eventId: "MDigital_Invalid_Origin" },
        MDigital_DynamicOnsiteInitializedSuccessfully: { eventId: KAMPYLE_CONSTANT.EVENTS.MDIGITAL_DYNAMIC_ONSITE_INITIALIZED_SUCCESSFULLY, provision: KAMPYLE_CONSTANT.PROVISIONS.DYNAMIC_ONSITE_EVENTS },
        MDigital_noJsonModalShown: { eventId: "mdigital_noDataMessageDisplayed", eventDataKey: "additionalInfo" },
        screenCaptureRetake: { eventId: KAMPYLE_CONSTANT.EVENTS.SCREEN_CAPTURE_RETAKE },
        screenCaptureDelete: { eventId: KAMPYLE_CONSTANT.EVENTS.SCREEN_CAPTURE_DELETE },
    };
    function initRateLimiting() {
        Object.keys(cooladataEvents).forEach(function (ev) {
            var eventObj = cooladataEvents[ev];
            if (isEventDefinedAsRateLimited(eventObj)) {
                rateLimitCounterMap[eventObj.eventId] = 0;
            }
        });
    }
    function getDataToSend(dataFormatted) {
        var feedbackUUID = KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.BACKEND_GENERATED_UUID) ? dataFormatted.feedbackUUID : dataFormatted.feedbackCorrelationUUID;
        var dataToSend = {
            enviroment: dataFormatted.enviroment,
            accountId: dataFormatted.accountId,
            url: dataFormatted.pageURL,
            websiteId: dataFormatted.websiteId,
            feedback_uuid: feedbackUUID,
            formId: dataFormatted.formId || null,
            formTriggerType: KAMPYLE_DATA.getFormTriggerType(dataFormatted.formId),
            kampyle_data: dataFormatted.kampyle_data || null,
            cookie_size: dataFormatted.cookie_size || null,
            kampyle_version: dataFormatted.kampyle_version || "",
            onsite_version: window.MDIGITAL.version || "0.0.0.0",
            history_length: window.history.length,
            event_local_timestamp: KAMPYLE_UTILS.getCurrentTimestamp(),
            position: dataFormatted.position || null,
            isUserIdentified: !!KAMPYLE_DATA.getMemoryData("identifierValue"),
            feedback_correlation_uuid: KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.BACKEND_GENERATED_UUID) ? dataFormatted.feedbackCorrelationUUID : null,
        };
        if (dataFormatted.eventId === "nebula_form_page_shown") {
            dataToSend.pageNumber = dataFormatted.pageNumber;
        }
        if (dataFormatted.eventId === "nebula_route_to_form") {
            dataToSend.destinationForm = dataFormatted.formId;
        }
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.LOCALIZED_FORMS) && dataFormatted.formId) {
            dataToSend.Web_form_lang = MDIGITAL.LOCALIZATION.getFormLanguage(dataFormatted.formId) || null;
        }
        addEventDataKeys(dataFormatted, dataToSend);
        return dataToSend;
    }
    function addEventDataKeys(dataFormatted, dataToSend) {
        var cooladataEvent = cooladataEvents[dataFormatted.eventName];
        var eventDataKeys = cooladataEvent ? cooladataEvent.eventDataKeys : null;
        if (eventDataKeys) {
            for (var i = 0; i < eventDataKeys.length; i++) {
                dataToSend[eventDataKeys[i]] = dataFormatted[eventDataKeys[i]] || null;
            }
        }
    }
    function kampyleSendCoolaData(dataFormatted) {
        if (!dataFormatted || !window.cooladata) {
            return false;
        }
        var dataToSend = getDataToSend(dataFormatted);
        makeCooladataCall(dataFormatted.eventId, dataToSend);
        return true;
    }
    function formatData(eventName, oData) {
        if (!eventName || !oData) {
            return null;
        }
        var result = Object.assign({}, result, oData);
        for (var prop in COMMON_FIELDS) {
            result[prop] = COMMON_FIELDS[prop];
        }
        for (var eventProp in cooladataEvents[eventName]) {
            result[eventProp] = cooladataEvents[eventName][eventProp];
        }
        var kampyleData = appendDataByEventName(eventName, KAMPYLE_UTILS.getAllKampyleData(), result);
        result.kampyle_data = kampyleData;
        result.cookie_size = KAMPYLE_UTILS.getByteSize(document.cookie);
        result.kampyle_version = window.MDIGITAL.version || "0.0.0.0";
        result.pageURL = location.href;
        result.eventName = eventName;
        return result;
    }
    var triggerCooladataEvent = function (eventName, oData) {
        var eventObj = cooladataEvents[eventName];
        if (!(eventObj && isEventProvisioned(eventObj)) || isRateLimitExceeded(eventObj)) {
            return false;
        }
        var shouldFormatEventData = eventObj.formatDataFunc && typeof eventObj.formatDataFunc === "function";
        if (shouldFormatEventData) {
            oData = eventObj.formatDataFunc.call(this, oData);
        }
        var oDataFormatted = formatData(eventName, oData);
        KAMPYLE_COOLADATA.kampyleSendCoolaData(oDataFormatted);
    };
    function isEventProvisioned(eventObj) {
        return !eventObj.provision || !!KAMPYLE_FUNC.checkProvision(eventObj.provision);
    }
    function isEventDefinedAsRateLimited(eventObj) {
        return typeof eventObj.rateLimit === "number" && eventObj.rateLimit > 0;
    }
    function getEventCallsCounter(eventId) {
        var counter = rateLimitCounterMap[eventId];
        return typeof counter === "number" ? counter : null;
    }
    function isRateLimitExceeded(eventObj) {
        var counter = getEventCallsCounter(eventObj.eventId);
        return KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.COOLADATA_EVNETS_LIMIT) && typeof counter === "number" && counter >= eventObj.rateLimit;
    }
    function increaseEventCallsCounter(eventId) {
        if (getEventCallsCounter(eventId) === null) {
            return null;
        }
        return ++rateLimitCounterMap[eventId];
    }
    function triggerCooladataEventDispatcherError(eventData) {
        if (!eventData || !window.cooladata) {
            return false;
        }
        var dataFormatted = formatData("neb_eventDispatcherError", eventData);
        var dataToSend = getDataToSend(dataFormatted);
        makeCooladataCall(dataFormatted.eventId, dataToSend);
        return dataToSend;
    }
    function makeCooladataCall(eventId, dataToSend) {
        try {
            getCooladataInstance().trackEvent(eventId, dataToSend);
            getEventCallsCounter(eventId) !== null && increaseEventCallsCounter(eventId);
        } catch (e) {
            console.warn(e);
        }
    }
    function getCooladataApiHost() {
        var cooladataApiHost = KAMPYLE_CONSTANT.PLACEHOLDERS.COOLDATA_API_HOST;
        if (cooladataApiHost.endsWith("/")) {
            cooladataApiHost = cooladataApiHost.substr(0, cooladataApiHost.length - 1);
        }
        return cooladataApiHost;
    }
    function getCooladataInstance() {
        return window.cooladata[KAMPYLE_CONSTANT.COOLADATA_INSTANCE_NAME];
    }
    function init() {
        try {
            COMMON_FIELDS = { userid: KAMPYLE_UTILS.kampyleGetUserId() };
            var config = {
                cookie_expiration: KAMPYLE_DATA.getCookieExpiration(),
                app_key: KAMPYLE_UTILS.isDebugMode() ? COOLADATA_CONFIGURATION.COOLADATA_APP_KEY.QA : COOLADATA_CONFIGURATION.COOLADATA_APP_KEY.PROD,
                track_pageload: false,
                img_src_get_request: true,
                api_host: KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.API_GATEWAY) ? COOLADATA_CONFIGURATION.API_GATEWAY_ENDPOINT : getCooladataApiHost(),
            };
            try {
                COOLADATA_CODE.init();
                window.cooladata.init(config, null, KAMPYLE_CONSTANT.COOLADATA_INSTANCE_NAME);
                if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.COOLADATA_EVNETS_LIMIT)) {
                    initRateLimiting();
                    KAMPYLE_EVENT_DISPATCHER.subscribeOnce(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_SDK_PAGE_VIEW, initRateLimiting);
                }
            } catch (e) {
                console.warn(e);
            }
            KAMPYLE_UTILS.initEventSubscriptions(cooladataEvents, triggerCooladataEvent);
            return true;
        } catch (e) {
            console.warn(e);
        }
    }
    function getUserId() {
        var userId;
        try {
            userId = KAMPYLE_DATA.getData("cd_user_id") || getCooladataInstance().config.user_id || null;
        } catch (e) {
            console.warn(e);
        }
        return userId;
    }
    function appendDataByEventName(eventName, dataObj, eventJsonData) {
        eventJsonData = eventJsonData || {};
        var memoryDataKey = cooladataEvents[eventName].memoryDataKey;
        var memoryData = KAMPYLE_DATA.getMemoryData(memoryDataKey);
        if (memoryData) {
            dataObj[memoryDataKey] = memoryData;
        }
        var eventDataKey = cooladataEvents[eventName].eventDataKey;
        var eventData = eventJsonData[eventDataKey];
        if (eventData) {
            dataObj[eventDataKey] = eventData;
        }
        return dataObj;
    }
    return {
        getDataToSend: getDataToSend,
        kampyleSendCoolaData: kampyleSendCoolaData,
        formatData: formatData,
        appendDataByEventName: appendDataByEventName,
        addEventDataKeys: addEventDataKeys,
        rateLimitCounterMap: rateLimitCounterMap,
        isEventProvisioned: isEventProvisioned,
        isEventDefinedAsRateLimited: isEventDefinedAsRateLimited,
        getEventCallsCounter: getEventCallsCounter,
        isRateLimitExceeded: isRateLimitExceeded,
        increaseEventCallsCounter: increaseEventCallsCounter,
        initRateLimiting: initRateLimiting,
        init: init,
        triggerCooladataEvent: triggerCooladataEvent,
        getCooladataInstance: getCooladataInstance,
        getUserId: getUserId,
        triggerCooladataEventDispatcherError: triggerCooladataEventDispatcherError,
    };
})(window, document);
window.KAMPYLE_COMMON = (function (window, document) {
    function loadForm(formId) {
        return KAMPYLE_ONSITE_SDK.loadForm(formId);
    }
    function showForm(formId, options) {
        return KAMPYLE_ONSITE_SDK.showForm(formId, options);
    }
    function closeForm(formId) {
        return KAMPYLE_ONSITE_SDK.closeForm(formId);
    }
    function createFormUrl(url, formId) {
        if (KAMPYLE_DATA.isV2Form(formId) && !!KAMPYLE_DATA.getData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.LIVE_FORM_V2_DEBUG_MODE)) {
            url = url.replace("/index.html", "/debug/index.html");
        }
        url += "?formId=" + formId;
        url += "&type=live";
        url += "&isMobile=" + KAMPYLE_DATA.isMobile();
        var fullUrl = window.location.href;
        var splitted = fullUrl.split("?");
        if (splitted && splitted.length) {
            fullUrl = splitted[0];
        }
        url += "&referrer=" + encodeURIComponent(fullUrl);
        var region = KAMPYLE_DATA.getMemoryData("region");
        if (region) {
            url += "&region=" + region;
        }
        if (KAMPYLE_DATA.isFeatureEnabled("WCAG")) {
            url += "&isWCAG=true";
        }
        url += "&displayType=" + KAMPYLE_DATA.getDisplayType(KAMPYLE_DATA.getFormData(formId));
        url += "&isSeparateFormTemplateFromData=true";
        url += "&domainsListRelativePath=" + encodeURIComponent(getDomainsListRelativePath(url));
        return url;
    }
    function getRelativePathByFoldersNum(numberOfFolders) {
        var domainListPath = "";
        for (var i = 0; i < numberOfFolders; i++) {
            domainListPath += "..|";
        }
        return domainListPath;
    }
    function getDomainsListRelativePath(url) {
        var region = KAMPYLE_COMMON.getUrlPrefix().match(/((?:[\/](?!\/))[a-zA-Z0-9_-]+[\/a-zA-Z0-9_-]*)$/);
        var configurationPath = region ? region[0] + "resources/config" : "/resources/config";
        if (KAMPYLE_DATA.getMemoryData("context") === "preview") {
            return configurationPath;
        }
        var genericParsedUrl = KAMPYLE_UTILS.getParsedUrl(KAMPYLE_EMBED.getGenericLocation());
        var formParsedUrl = KAMPYLE_UTILS.getParsedUrl(url);
        if (genericParsedUrl.hostname !== formParsedUrl.hostname) {
            return configurationPath;
        } else {
            var genericFilePathname = genericParsedUrl.pathname;
            var formPathname = formParsedUrl.pathname;
            if (genericFilePathname && formPathname) {
                var genericPathnameParts = genericFilePathname.split("/").slice(1, -1);
                var formPathnameParts = formPathname.split("/").slice(1, -1);
                return getRelativePathByFoldersNum(formPathnameParts.length) + genericPathnameParts.join("/");
            }
            return "";
        }
    }
    function getFormFailureCause(formId) {
        var formState = KAMPYLE_DATA.getFormState(formId);
        var failureCause = null;
        for (var key in KAMPYLE_CONSTANT.FORM_LOADING_FAILURE_CAUSE) {
            var failureCauseOption = KAMPYLE_CONSTANT.FORM_LOADING_FAILURE_CAUSE[key];
            if (formState[failureCauseOption] === true) {
                failureCause = failureCauseOption;
                break;
            }
        }
        return failureCause;
    }
    function getUrlPrefix() {
        var isOnPrem = KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ON_PREM_HYBRID);
        return isOnPrem ? MDIGITAL.ON_PREM.getPackageRoot() + "/" : KAMPYLE_CONSTANT.PLACEHOLDERS.URL_PREFIX;
    }
    function getSpinnerTemplate() {
        var spinnerHtml = '<div id="' + KAMPYLE_CONSTANT.SPINNER_SETTINGS.CONTAINER_ID + '" class="neb-loading-spinner">';
        spinnerHtml += '<div id="' + KAMPYLE_CONSTANT.SPINNER_SETTINGS.ID + '"> </div>';
        spinnerHtml += "</div>";
        return spinnerHtml;
    }
    return {
        loadForm: loadForm,
        showForm: showForm,
        closeForm: closeForm,
        createFormUrl: createFormUrl,
        getSpinnerTemplate: getSpinnerTemplate,
        getUrlPrefix: getUrlPrefix,
        getFormFailureCause: getFormFailureCause,
        getDomainsListRelativePath: getDomainsListRelativePath,
    };
})(window, document);
window.KAMPYLE_THERMO_TEALEAF_FUNC = (function () {
    var TEALEAF_COOKIE_SESSION_ID = "TLTSID";
    function isTealeafEnabled() {
        return !!KAMPYLE_UTILS.kampyleGetCookie(TEALEAF_COOKIE_SESSION_ID);
    }
    function getTealeafData() {
        if (KAMPYLE_THERMO_TEALEAF_FUNC.isTealeafEnabled()) {
            return { sid: KAMPYLE_UTILS.kampyleGetCookie(TEALEAF_COOKIE_SESSION_ID) };
        }
        return null;
    }
    return { isTealeafEnabled: isTealeafEnabled, getTealeafData: getTealeafData };
})();
window.KAMPYLE_ADOBE_ANALYTICS = (function (window, document) {
    var eventQueue = [];
    var numAttempts = 0;
    var CONFIG = { POLLING_INTERVAL: 5000, POLLING_COUNTER: 3 };
    var COMMON_FIELDS = { CONTEXT_NAME: "NebulaCX_Activity" };
    var events = {
        neb_formShown: { action: "form_displayed" },
        neb_showInvitation: { action: "invite_triggered" },
        neb_inviteDeclined: { action: "invite_rejected" },
        neb_inviteAccepted: { action: "invite_accepted" },
        neb_buttonClicked: { action: "button_clicked" },
        neb_feedbackSubmitted: { action: "feedback_submitted" },
        neb_formClosed: { action: "form_close" },
        neb_formPageShown: { action: "form_page_displayed" },
        neb_captureInit: { action: "screen_capture_init" },
        neb_captureImageClicked: { action: "capture_image_click" },
        neb_cancelCaptureClicked: { action: "cancel_capture_click" },
        MDigital_Form_Close_No_Submit: { action: "form_close_no_submit" },
        MDigital_Form_Next_Page: { action: "form_next_page" },
        MDigital_Form_Back_Page: { action: "form_back_page" },
        MDigital_ThankYou_Displayed: { action: "thankyou_displayed" },
        MDigital_ThankYou_Close: { action: "thankyou_close" },
        MDigital_Form_Close_Submitted: { action: "form_close_submit" },
        neb_sdkShowForm: { action: "form_triggered_by_code" },
    };
    var adobeSdkName;
    var sendAAEvent = function (eventName, data) {
        var action = !!events[eventName] && !!events[eventName].action ? events[eventName].action : undefined;
        var processedData = processDataForAA(data);
        if (!!window[adobeSdkName] && !!window[adobeSdkName].tl) {
            KAMPYLE_UTILS.setNestedPropertyValue(window, getPropString(adobeSdkName, "contextData", "eventName"), action);
            var isAdobeLinkTrackVarsProvisionOn = KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ADOBE_INCLUDE_LINK_TRACK_VARS);
            var isAdobeConcatLinkTrackVarsProvisionOn = KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ADOBE_CONCAT_LINK_TRACK_VARS);
            var contextEventName = "contextData.eventName";
            if (isAdobeLinkTrackVarsProvisionOn) {
                window[adobeSdkName].linkTrackVars =
                    window[adobeSdkName].linkTrackVars && isAdobeConcatLinkTrackVarsProvisionOn
                        ? window[adobeSdkName].linkTrackVars.split(",").concat(window[adobeSdkName].linkTrackVars.indexOf(contextEventName) < 0 ? [contextEventName] : [])
                        : [contextEventName];
            }
            for (var key in processedData) {
                if (processedData.hasOwnProperty(key) && !KAMPYLE_CONSTANT.ANALYTICS_EVENT_FORBIDDEN_PROPERTIES[key]) {
                    KAMPYLE_UTILS.setNestedPropertyValue(window, getPropString(adobeSdkName, "contextData", key), processedData[key]);
                    if (isAdobeLinkTrackVarsProvisionOn && window[adobeSdkName].linkTrackVars.indexOf("contextData." + key) < 0) {
                        window[adobeSdkName].linkTrackVars.push("contextData." + key);
                    }
                }
            }
            if (isAdobeLinkTrackVarsProvisionOn) {
                window[adobeSdkName].linkTrackVars = window[adobeSdkName].linkTrackVars.join(",");
            }
            window[adobeSdkName].tl(this, "o", COMMON_FIELDS.CONTEXT_NAME);
        }
    };
    function processDataForAA(data) {
        var processedData = Object.assign({}, data);
        if (!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.BACKEND_GENERATED_UUID)) {
            processedData.feedbackUUID = processedData.feedbackCorrelationUUID;
        }
        if (Array.isArray(processedData.content)) {
            for (var i = 0; i < processedData.content.length; i++) {
                processedData[processedData.content[i].unique_name] = processedData.content[i].value;
            }
        }
        return processedData;
    }
    var dequeueEvents = function (eventName, data) {
        if (!window[adobeSdkName] || !window[adobeSdkName].tl) {
            numAttempts++;
            if (numAttempts < CONFIG.POLLING_COUNTER) {
                window.setTimeout(KAMPYLE_ADOBE_ANALYTICS.dequeueEvents, CONFIG.POLLING_INTERVAL);
            }
        } else {
            var queueLen = eventQueue.length;
            for (var i = 0; i < queueLen; i++) {
                try {
                    sendAAEvent(eventQueue[i].eventName, eventQueue[i].data);
                } catch (e) {
                    var error = { errorMessage: e.message, errorStack: e.stack, additionalInfo: "KAMPYLE_ADOBE_ANALYTICS" };
                    var event = KAMPYLE_CONSTANT.EVENTS.NEB_EVENT_DISPATCHER_ERROR;
                    KAMPYLE_COOLADATA.triggerCooladataEvent(event, error);
                }
            }
            numAttempts = 0;
            eventQueue = [];
        }
    };
    var triggerEvent = function (eventName, data) {
        eventQueue = eventQueue || [];
        if (!!eventName && !!data) {
            eventQueue.push({ eventName: eventName, data: data });
        }
        dequeueEvents();
    };
    function init() {
        adobeSdkName = KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ADOBE_ANALYTICS_OBJECT_NAME) ? getAdobeSdkName() : KAMPYLE_CONSTANT.DEFAULT_ADOBE_SDK_NAME;
        for (var prop in events) {
            KAMPYLE_EVENT_DISPATCHER.subscribe(prop, triggerEvent);
        }
        return true;
    }
    function getAdobeSdkName() {
        return KAMPYLE_UTILS.getNestedPropertyValue(MDIGITAL.CONFIGURATION.getOnsiteConfiguration(), "adobeSdkName") || KAMPYLE_CONSTANT.DEFAULT_ADOBE_SDK_NAME;
    }
    function getPropString() {
        return Array.prototype.join.call(arguments, ".");
    }
    return { init: init, triggerEvent: triggerEvent, getAdobeSdkName: getAdobeSdkName, sendAAEvent: sendAAEvent, processDataForAA: processDataForAA };
})(window, document);
window.KAMPYLE_SCREEN_CAPTURE = (function (window, document) {
    var ONPREM_WIDGET_VERSION = "ONPREM";
    var V4_WIDGET_VERSION = "V4";
    var V2_WIDGET_VERSION = "V2";
    var ON_LOAD_ONPREM_AND_V4_CALLBACK_NAME = "onUsersnapLoad";
    var ON_LOAD_V2_CALLBACK_NAME = "_usersnapconfig";
    var SCROLLABLE_OVERFLOW = "scroll";
    var formData,
        userSnapInstance = false;
    var screenCaptureTooltipStyles =
        '[data-tips]{position:relative;text-decoration:none}[data-tips]:after,[data-tips]:before{position:absolute;z-index:100;opacity:0}[data-tips]:after{content:attr(data-tips);line-height:20px;padding:0 10px;font-size:12px;text-align:center;color:#fff;background:#222;border-radius:5px;text-shadow:0 0 5px #000;-moz-box-shadow:0 0 5px rgba(0, 0, 0, .3);-webkit-box-shadow:0 0 5px rgba(0, 0, 0, .3);box-shadow:0 0 5px rgba(0, 0, 0, .3);white-space:normal;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;width:135px;word-wrap:break-word}[data-tips]:before{content:"";width:0;height:0;border-width:6px;border-style:solid}[data-tips]:hover:after,[data-tips]:hover:before{opacity:1}[data-tips].top-tip:after,[data-tips].top-tip:before{-webkit-transition:bottom .25s ease-in-out, opacity .25s ease-in-out;-moz-transition:bottom .25s ease-in-out, opacity .25s ease-in-out;transition:bottom .25s ease-in-out, opacity .25s ease-in-out;bottom:90%;left:-9999px;margin-bottom:12px}[data-tips].top-tip:before{border-color:#222 transparent transparent;margin-bottom:0}[data-tips].top-tip:hover:after,[data-tips].top-tip:hover:before{bottom:100%;left:0}[data-tips].top-tip:hover:before{left:15px}[data-tips].bottom-tip:after,[data-tips].bottom-tip:before{-webkit-transition:top .25s ease-in-out, opacity .25s ease-in-out;-moz-transition:top .25s ease-in-out, opacity .25s ease-in-out;transition:top .25s ease-in-out, opacity .25s ease-in-out;top:90%;left:-9999px;margin-top:12px}[data-tips].bottom-tip:before{border-color:transparent transparent #222;margin-top:0}[data-tips].bottom-tip:hover:after,[data-tips].bottom-tip:hover:before{top:100%;left:0}[data-tips].bottom-tip:hover:before{left:15px}[data-tips].left-tip:after,[data-tips].left-tip:before{-webkit-transition:left .25s ease-in-out, opacity .25s ease-in-out;-moz-transition:left .25s ease-in-out, opacity .25s ease-in-out;transition:left .25s ease-in-out, opacity .25s ease-in-out;top:-9999px;left:96%;margin-left:12px}[data-tips].left-tip:before{border-color:transparent #222 transparent transparent;margin-left:0}[data-tips].left-tip:hover:after,[data-tips].left-tip:hover:before{left:100%;top:0}[data-tips].left-tip:hover:before{top:7px}[data-tips].right-tip:after,[data-tips].right-tip:before{-webkit-transition:right .25s ease-in-out, opacity .25s ease-in-out;-moz-transition:right .25s ease-in-out, opacity .25s ease-in-out;transition:right .25s ease-in-out, opacity .25s ease-in-out;top:-9999px;right:96%;margin-right:12px}[data-tips].right-tip:before{border-color:transparent transparent transparent #222;margin-right:0}[data-tips].right-tip:hover:after,[data-tips].right-tip:hover:before{right:100%;top:0}[data-tips].right-tip:hover:before{top:7px}';
    var screenCaptureButtonsOutlineStyle = ".scTitle:focus, .scParagraph:focus, .sc-widget-footer-cancel:focus, .sc-widget-footer-capture:focus, p:focus { border: 2px solid #8e8e93 !important; box-shadow: 0 0 7px #8e8e93 !important;}";
    var SCREEN_CAPTURE_DEFAULT_TEXTS = {
        submitScreenCaptureLabel: "Capture Image",
        cancelScreenCaptureLabel: "Cancel",
        instructionsScreenCapture:
            '<h2 class="scTitle" style="font-size: 1.5em;">Screen Capture</h2><p class="scParagraph" style="font-size: 1em; margin-top: 10px;">Drag the cursor around the area you want to highlight.<br>Press Capture Image to take the snapshot and return to your feedback</p>',
        submitScreenCaptureTooltip: "Take snapshot",
        cancelScreenCaptureTooltip: "Back to Feedback",
    };
    var spinnerTemplate = KAMPYLE_COMMON.getSpinnerTemplate();
    var screenCaptureWidgetTemplate = [
        "<html>",
        "<head>",
        '<link rel="stylesheet" type="text/css" href="' + KAMPYLE_CONSTANT.PLACEHOLDERS.URL_PREFIX + KAMPYLE_CONSTANT.SRC.OPEN_SANS + '" />',
        '<script type="text/javascript">',
        "function resizeIframe() {",
        'parent.document.getElementById("nebScIframe").height = document.getElementById("sc-widget").scrollHeight + 15;',
        'var SCWidget = parent.document.getElementById("nebScIframe");',
        "if (SCWidget) {",
        "SCWidget.focus();",
        "}",
        "}",
        "</script>",
        "<style>{tooltipStyles} {buttonsOutlineStyle}</style>",
        "</head>",
        '<body onload="resizeIframe();" style="margin:0px;overflow:hidden;">',
        '<div id="sc-widget" class="sc-widget" style="{widget}">',
        '<div class="sc-widget-content" style="{widgetContent}">',
        "{{instructionsScreenCapture}}",
        "</div>",
        '<div class="sc-widget-footer" style="{widgetFooter}">',
        '<button onclick="parent.KAMPYLE_SCREEN_CAPTURE.onCancelScreenCaptureClick();" class="sc-widget-footer-cancel top-tip" ' + 'data-tips="{{cancelScreenCaptureTooltip}}" style="{widgetFooterBtn} {widgetFooterCancel}">',
        "{{cancelScreenCaptureLabel}}",
        "</button>",
        '<button onclick="parent.KAMPYLE_SCREEN_CAPTURE.onSubmitScreenCaptureClick();" class="sc-widget-footer-capture top-tip" ' + 'data-tips="{{submitScreenCaptureTooltip}}" style="{widgetFooterBtn} {widgetFooterCapture}">',
        spinnerTemplate,
        '<span id="widgetFooterCaptureText">{{submitScreenCaptureLabel}}</span>',
        "</button>",
        "</div>",
        "</div>",
        "</body></html>",
    ].join(" ");
    var defaultStyles = {
        overlay: { position: "fixed", top: "0", left: "0", "z-index": "2147483646 !important", right: "0", bottom: "0", display: "block", "pointer-events": "none" },
        widget: {
            "font-family": "'Open Sans'",
            border: "1px solid #999",
            width: "285px",
            "border-radius": "5px",
            position: "absolute",
            "z-index": "2147483647 !important",
            "pointer-events": "auto",
            background: "#FFFFFF",
            "text-align": "center",
            "line-height": "20px",
        },
        widgetContent: { padding: "10px 14px", outline: "none" },
        widgetFooter: {
            "font-family": "'Open Sans' !important",
            padding: "10px",
            "font-size": "14px",
            "padding-top": "0",
            "font-stretch": "normal",
            "font-style": "normal",
            "font-variant": "normal",
            "font-weight": "normal",
            "letter-spacing": "normal",
            "line-height": "20px",
        },
        widgetFooterBtn: {
            height: "34px",
            margin: "0 0 2px 5px",
            "min-width": "100px",
            padding: "6px 12px",
            display: "inline-block",
            "border-radius": "4px",
            cursor: "pointer",
            "transition-delay": "0s",
            "transition-duration": "0.3s",
            "transition-property": "all",
            "transition-timing-function": "ease",
            "vertical-align": "middle",
            "white-space": "nowrap",
            "word-spacing": "0px",
            border: "none",
            color: "#FFF",
        },
        widgetFooterCancel: { background: "#A2A2A2", color: "#FFF" },
        widgetFooterCapture: { "margin-left": "5px", background: "#020202", color: "#FFF" },
    };
    var UserSnapModel = function () {
        this._widgetVersion = V2_WIDGET_VERSION;
        this.init = function () {
            this.determineWidgetVersion();
        };
        this.determineWidgetVersion = function () {
            if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.USER_SNAP_ONPREM)) {
                this._widgetVersion = ONPREM_WIDGET_VERSION;
                this._usersnapOnpremWidgetLoaderPath = KAMPYLE_UTILS.getNestedPropertyValue(MDIGITAL.CONFIGURATION.getOnsiteConfiguration(), "usersnapOnpremWidgetLoaderPath");
            } else if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.USER_SNAP_V4)) {
                this._widgetVersion = V4_WIDGET_VERSION;
            }
        };
        this.close = function () {
            var functionToCall;
            switch (this._widgetVersion) {
                case ONPREM_WIDGET_VERSION:
                case V4_WIDGET_VERSION:
                    functionToCall = "close";
                    break;
                case V2_WIDGET_VERSION:
                    functionToCall = "closeUsersnap";
                    break;
                default:
                    functionToCall = "closeUsersnap";
            }
            window.UserSnap.api[functionToCall]();
        };
        this.getUrl = function () {
            if (this._widgetVersion === ONPREM_WIDGET_VERSION) {
                return KAMPYLE_CONSTANT.PLACEHOLDERS.USERSNAP_ONPREM_HOST_PREFIX + this._usersnapOnpremWidgetLoaderPath;
            }
            var host = KAMPYLE_CONSTANT.PLACEHOLDERS[this._widgetVersion === V4_WIDGET_VERSION ? "USERSNAP_V4_HOST_PREFIX" : "USERSNAP_HOST_PREFIX"] + (this._widgetVersion === V4_WIDGET_VERSION ? "/" : "") + "screenApi/load/";
            var userSnapId = KAMPYLE_UTILS.getNestedPropertyValue(MDIGITAL.CONFIGURATION.getOnsiteConfiguration(), "usersnapEnvId");
            var url = host + userSnapId + ".js";
            if (this._widgetVersion === V4_WIDGET_VERSION) {
                url += KAMPYLE_UTILS.buildQueryParams({ onload: ON_LOAD_ONPREM_AND_V4_CALLBACK_NAME, apiaccess: "extended", cdn: KAMPYLE_CONSTANT.PLACEHOLDERS.USERSNAP_V4_HOST_PREFIX + "/classic/frontend" });
            }
            return url;
        };
        this.initConfiguration = function () {
            var windowkeyToSet;
            switch (this._widgetVersion) {
                case ONPREM_WIDGET_VERSION:
                    window.usersnapConfig = {
                        cdnUrl: KAMPYLE_CONSTANT.PLACEHOLDERS.USERSNAP_ONPREM_HOST_PREFIX + this._usersnapOnpremWidgetLoaderPath.slice(0, this._usersnapOnpremWidgetLoaderPath.lastIndexOf("/")),
                        onLoadCallbackName: ON_LOAD_ONPREM_AND_V4_CALLBACK_NAME,
                    };
                    windowkeyToSet = ON_LOAD_ONPREM_AND_V4_CALLBACK_NAME;
                    break;
                case V4_WIDGET_VERSION:
                    windowkeyToSet = ON_LOAD_ONPREM_AND_V4_CALLBACK_NAME;
                    break;
                case V2_WIDGET_VERSION:
                    windowkeyToSet = ON_LOAD_V2_CALLBACK_NAME;
                    break;
                default:
                    windowkeyToSet = ON_LOAD_V2_CALLBACK_NAME;
            }
            window[windowkeyToSet] = this._widgetVersion === V4_WIDGET_VERSION || this._widgetVersion === ONPREM_WIDGET_VERSION ? getConfiguration() : getLegacyConfiguration();
        };
        this.getContainer = function () {
            return this._widgetVersion === V4_WIDGET_VERSION || this._widgetVersion === ONPREM_WIDGET_VERSION ? document.getElementsByName("us-entrypoint-widgetApp")[0] : document.getElementById("us_sandbox");
        };
        this.initWidget = function () {
            var keyFunctionToCall = this._widgetVersion === V4_WIDGET_VERSION || this._widgetVersion === ONPREM_WIDGET_VERSION ? "open" : "startUsersnap";
            window.UserSnap.api[keyFunctionToCall]();
        };
    };
    var hideSpinner = function () {
        var iframeDocument = document.getElementById("nebScIframe").contentDocument;
        var spinner = iframeDocument.getElementById(KAMPYLE_CONSTANT.SPINNER_SETTINGS.CONTAINER_ID);
        if (!!spinner) {
            spinner.style.display = "none";
            var text = iframeDocument.getElementById("widgetFooterCaptureText");
            if (!!text) {
                text.style.display = "inline";
            }
        }
    };
    var cancelCaptureClicked = function () {
        formData.canceledClicked = true;
        userSnapInstance.close();
    };
    function closeScreenCaptureWidget() {
        var container = document.getElementById("us_sandbox");
        if (!!container) {
            container.style.display = "none";
        }
        var scIframe = document.getElementById("nebScIframe");
        if (!!scIframe) {
            scIframe.parentNode.removeChild(scIframe);
        }
    }
    function beforeSend(obj) {
        if (formData.canceledClicked) {
            formData.canceledClicked = false;
        }
        obj.addInfo = { uuid: formData.feedbackCorrelationUUID, websiteId: formData.websiteId };
        if (shouldProcessScreenCaptureAsComponent(formData)) {
            obj.addInfo.screenCaptureUuid = formData.screenCaptureUuid;
        }
    }
    function afterSend(id) {
        this.snapId = id;
        if (formData && !formData.canceledClicked) {
            hideSpinner();
            KAMPYLE_SCREEN_CAPTURE.closeScreenCaptureWidget();
            var eventExtraData = { formId: formData.formId, feedbackCorrelationUUID: formData.feedbackCorrelationUUID };
            KAMPYLE_EVENT_DISPATCHER.trigger("neb_captureImageClicked", eventExtraData);
            KAMPYLE_UTILS.sendMessageToIframe(KAMPYLE_DATA.getFormIframeId(formData.formId), { action: "takenScreenCapture", data: eventExtraData });
        }
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.USER_SNAP_ONPREM)) {
            userSnapInstance.close();
        }
    }
    function uiReady() {
        setTimeout(function () {
            var iframeDocument = document.getElementById("nebScIframe").contentDocument;
            var contentElement = iframeDocument.getElementsByClassName("sc-widget-content")[0];
            if (contentElement) {
                contentElement.tabIndex = -1;
                contentElement.focus();
            }
        }, 1000);
    }
    function getConfiguration() {
        return function (api) {
            api.on("open", function (event) {
                var additionalInfo = { uuid: formData.feedbackCorrelationUUID, websiteId: formData.websiteId };
                if (shouldProcessScreenCaptureAsComponent(formData)) {
                    additionalInfo.screenCaptureUuid = formData.screenCaptureUuid;
                }
                if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.USER_SNAP_ONPREM)) {
                    Object.assign(additionalInfo, { screenWidth: window.innerWidth, screenHeight: window.innerHeight });
                    event.api.setValue("custom", additionalInfo);
                } else {
                    event.api.setValue("customData", JSON.stringify(additionalInfo));
                    setTimeout(function () {
                        beforeOpen();
                    });
                }
            });
            api.on("opened", function () {
                if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.USER_SNAP_ONPREM)) {
                    beforeOpen();
                }
            });
            api.on("submit", function () {
                afterSend();
            });
            api.on("close", function () {
                var scrollType = KAMPYLE_DATA.getMemoryData("overFlowType");
                handleScrollIfNeeded(formData, scrollType);
                if (formData.canceledClicked) {
                    handleCaptureCancellation();
                }
            });
            api.on("domSelector:selected", function () {
                showScreenCaptureSpinner();
                api.submit();
            });
            var initParams = {
                serviceUrl: KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.USER_SNAP_ONPREM) ? KAMPYLE_CONSTANT.PLACEHOLDERS.USERSNAP_ONPREM_HOST_PREFIX : KAMPYLE_CONSTANT.PLACEHOLDERS.USERSNAP_V4_HOST_PREFIX,
                mode: "headless",
                button: null,
                tools: { keys: ["highlight"], colors: [KAMPYLE_CONSTANT.COLORS.USERSNAP_V4_SELECTION_COLOR] },
                thankYou: { isHidden: true },
            };
            initParams.tools.keys[0] = getSelectedTool();
            initParams.tools.colors[0] = KAMPYLE_CONSTANT.COLORS.USERSNAP_ONPREM_SELECTION_COLOR;
            if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.USER_SNAP_ONPREM)) {
                initParams.apiKey = KAMPYLE_UTILS.getNestedPropertyValue(MDIGITAL.CONFIGURATION.getOnsiteConfiguration(), "usersnapEnvId");
            }
            api.init(initParams);
            window.UserSnap = { api: api };
        };
    }
    function getLegacyConfiguration() {
        return {
            api: true,
            hideUI: true,
            mode: "report",
            hideTour: true,
            cancelHandler: function () {
                handleCaptureCancellation();
            },
            loadHandler: function () {
                if (window.UserSnap) {
                    window.UserSnap.on("beforeOpen", beforeOpen);
                    window.UserSnap.on("beforeSend", beforeSend);
                    window.UserSnap.on("afterSend", afterSend);
                    window.UserSnap.on("uiReady", uiReady);
                }
            },
            hostconfig: {
                homeHost: KAMPYLE_CONSTANT.PLACEHOLDERS.USERSNAP_CDN_URL,
                UrlSessionkey: KAMPYLE_CONSTANT.PLACEHOLDERS.USERSNAP_HOST_PREFIX + "screenApi/report/sessionkey",
                UrlHtml2pngAndSend: KAMPYLE_CONSTANT.PLACEHOLDERS.USERSNAP_HOST_PREFIX + "screenApi/report/sendScreenshot",
                UrlHtml2png: KAMPYLE_CONSTANT.PLACEHOLDERS.USERSNAP_HOST_PREFIX + "screenApi/report/html2png",
                UrlSendreport: KAMPYLE_CONSTANT.PLACEHOLDERS.USERSNAP_HOST_PREFIX + "screenApi/report/sendReport",
                apiErrorUrl: KAMPYLE_CONSTANT.PLACEHOLDERS.USERSNAP_HOST_PREFIX + "screenErr/yuno",
            },
        };
    }
    function init(callback) {
        formData = {};
        userSnapInstance = new UserSnapModel();
        userSnapInstance.init();
        userSnapInstance.initConfiguration();
        appendScreenCaptureScript();
        KAMPYLE_UTILS.objectPropertyObserver(window, "UserSnap", callback);
        KAMPYLE_EVENT_DISPATCHER.subscribeMany({ neb_captureInit: [initScreenCaptureWidget], neb_cancelCaptureClicked: [cancelCaptureClicked] });
    }
    function addEscKeyDownListenerToIframe(iframe) {
        if (iframe && iframe.contentDocument) {
            iframe.contentDocument.body.addEventListener("keydown", function (e) {
                if (e.key === "Escape") {
                    cancelCaptureClicked();
                }
            });
        }
    }
    function beforeOpen() {
        var container = userSnapInstance.getContainer();
        KAMPYLE_UTILS.setElementStyle(container, { display: "block", zIndex: "2147483646" }, true);
        var iframeArr = container && container.getElementsByTagName && container.getElementsByTagName("iframe");
        var scIframe = iframeArr && iframeArr[0];
        if (scIframe) {
            KAMPYLE_UTILS.setElementStyle(scIframe, { display: "block" }, true);
            addEscKeyDownListenerToIframe(scIframe);
        } else {
            addEscKeyDownListenerToIframe(container);
        }
        var overFlowType = KAMPYLE_UTILS.getNestedPropertyValue(document, "body.style.overflow");
        KAMPYLE_DATA.setMemoryData("overFlowType", overFlowType);
        handleScrollIfNeeded(formData, SCROLLABLE_OVERFLOW);
        createScreenCaptureWidget(formData, container);
    }
    function setBodyOverflowType(scrollType) {
        var bodyElement = document.body;
        if (!bodyElement) return;
        KAMPYLE_UTILS.setElementStyle(bodyElement, { overflow: scrollType });
    }
    function handleScrollIfNeeded(formData, scrollType) {
        var fullFormData = KAMPYLE_DATA.getFormData(formData.formId);
        var displayType = KAMPYLE_DATA.getDisplayType(fullFormData);
        var selectedTool = KAMPYLE_SCREEN_CAPTURE.getSelectedTool();
        if (displayType === KAMPYLE_CONSTANT.DISPLAY_TYPES.LIGHTBOX && selectedTool === KAMPYLE_CONSTANT.SCREEN_CAPTURE.DOM_SELECTION_VALUE) {
            KAMPYLE_SCREEN_CAPTURE.setBodyOverflowType(scrollType);
        }
    }
    function initScreenCaptureWidget(eventName, data) {
        data = data || {};
        formData.feedbackCorrelationUUID = data.feedbackCorrelationUUID;
        if (shouldProcessScreenCaptureAsComponent(data)) {
            formData.screenCaptureUuid = data.screenCaptureUuid;
        }
        KAMPYLE_DATA.setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.FEEDBACK_CORRELATION_UUID, formData.feedbackCorrelationUUID);
        formData.websiteId = data.websiteId;
        formData.accountId = data.accountId;
        formData.formId = data.formId;
        formData.screenCaptureSettings = data.screenCaptureSettings;
        formData.canceledClicked = false;
        userSnapInstance.initWidget();
    }
    function handleCaptureCancellation() {
        KAMPYLE_SCREEN_CAPTURE.closeScreenCaptureWidget();
        var formId = KAMPYLE_DATA.getMemoryData("currentFormId");
        KAMPYLE_EVENT_DISPATCHER.trigger("MDigital_Capture_Cancelled", { formId: formId, feedbackCorrelationUUID: KAMPYLE_DATA.getMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.FEEDBACK_CORRELATION_UUID) });
        var formData = KAMPYLE_DATA.getFormData(formId);
        KAMPYLE_UTILS.sendMessageToIframe(KAMPYLE_DATA.getFormIframeId(formId), { action: "cancelScreenCapture", data: formData });
    }
    function appendScreenCaptureScript() {
        var id = "kampyleSceenCaptureScript";
        if (document.getElementById(id)) {
            return false;
        }
        var scriptElem = document.createElement("script");
        Object.assign(scriptElem, { id: id, type: "text/javascript", src: userSnapInstance.getUrl() });
        document.body.appendChild(scriptElem);
    }
    function shouldProcessScreenCaptureAsComponent(data) {
        var isScreenCaptureEnabled = KAMPYLE_UTILS.getNestedPropertyValue(data, "screenCaptureSettings.screenCaptureAsComponentEnabled");
        return KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.USER_SNAP_AS_COMPONENT) && isScreenCaptureEnabled;
    }
    function getSelectedTool() {
        var config = MDIGITAL.CONFIGURATION.getOnsiteConfiguration();
        return config.screenCaptureSelectionTool === KAMPYLE_CONSTANT.SCREEN_CAPTURE.DOM_SELECTION ? KAMPYLE_CONSTANT.SCREEN_CAPTURE.DOM_SELECTION_VALUE : KAMPYLE_CONSTANT.SCREEN_CAPTURE.AREA_SELECTION_VALUE;
    }
    function getUserSnapInstance() {
        return userSnapInstance;
    }
    function overrideDefaultScreenCaptureStyles(customSettings) {
        var res = defaultStyles;
        if (!!customSettings) {
            res.widget.background = !!customSettings.backgroundColor ? customSettings.backgroundColor : res.widget.background;
            res.widgetFooterCapture.background = !!customSettings.submitButtoncolor ? customSettings.submitButtoncolor : res.widgetFooterCapture.background;
            res.widgetFooterCancel.background = !!customSettings.closeButtoncolor ? customSettings.closeButtoncolor : res.widgetFooterCancel.background;
            res.widgetFooterCancel.color = !!customSettings.closeButtonTextColor ? customSettings.closeButtonTextColor : res.widgetFooterBtn.color;
            res.widgetFooterCapture.color = !!customSettings.submitButtonTextColor ? customSettings.submitButtonTextColor : res.widgetFooterBtn.color;
        }
        return res;
    }
    function overrideDefaultScreenCaptureTexts(customSettings) {
        var res = SCREEN_CAPTURE_DEFAULT_TEXTS;
        if (!!customSettings) {
            for (var prop in res) {
                if (customSettings.hasOwnProperty(prop) && res.hasOwnProperty(prop)) {
                    res[prop] = customSettings[prop];
                }
            }
            return res;
        }
    }
    function showScreenCaptureSpinner() {
        var iframeDocument = document.getElementById("nebScIframe").contentDocument;
        var spinnerContainer = iframeDocument.getElementById(KAMPYLE_CONSTANT.SPINNER_SETTINGS.CONTAINER_ID);
        if (!!spinnerContainer) {
            KAMPYLE_UTILS.setSpinnerStyle(spinnerContainer, KAMPYLE_CONSTANT.SPINNER_SETTINGS.SIZE.SMALL, iframeDocument);
            var text = iframeDocument.getElementById("widgetFooterCaptureText");
            if (!!text) {
                text.style.display = "none";
            }
        }
    }
    function isScreenCaptureEnabled(formId) {
        var browser = KAMPYLE_UTILS.getBrowser();
        var formJson = KAMPYLE_DATA.getFormData(formId);
        if (!formJson) {
            return false;
        }
        var displayType = KAMPYLE_DATA.getDisplayType(formJson);
        return !!displayType && displayType !== "popup";
    }
    function formatScreenCaptureWidget(formData) {
        formData = formData || {};
        var widgetHtml = screenCaptureWidgetTemplate;
        var formattedText = overrideDefaultScreenCaptureTexts(formData.screenCaptureSettings);
        if (!formattedText || !formattedText.submitScreenCaptureTooltip) {
            widgetHtml = widgetHtml.replace('data-tips="{{submitScreenCaptureTooltip}}"', "");
        }
        if (!formattedText || !formattedText.cancelScreenCaptureTooltip) {
            widgetHtml = widgetHtml.replace('data-tips="{{cancelScreenCaptureTooltip}}"', "");
        }
        for (var prop in formattedText) {
            if (SCREEN_CAPTURE_DEFAULT_TEXTS.hasOwnProperty(prop)) {
                widgetHtml = widgetHtml.replace("{{" + prop + "}}", SCREEN_CAPTURE_DEFAULT_TEXTS[prop]);
            }
        }
        var formattedStyles = overrideDefaultScreenCaptureStyles(formData.screenCaptureSettings);
        for (var element in formattedStyles) {
            widgetHtml = KAMPYLE_UTILS.replaceAll(widgetHtml, "{" + element + "}", KAMPYLE_UTILS.styleObjToInline(defaultStyles[element]));
        }
        widgetHtml = widgetHtml.replace("{tooltipStyles}", screenCaptureTooltipStyles).replace("{buttonsOutlineStyle}", screenCaptureButtonsOutlineStyle);
        return KAMPYLE_UTILS.htmlDecode(widgetHtml);
    }
    function createScreenCaptureWidget(formData, scContainer) {
        if (!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.CSP_RULES)) {
            var widgetHtml = formatScreenCaptureWidget(formData);
            var scIframe = document.createElement("iframe");
            scIframe.addEventListener("load", function () {
                addEscKeyDownListenerToIframe(scIframe);
            });
            scIframe.id = "nebScIframe";
            KAMPYLE_UTILS.setElementStyle(scIframe, { width: "310px", bottom: "20px", left: "20px", zIndex: 2147483647, position: "fixed" });
            KAMPYLE_UTILS.setElementStyle(scIframe, { display: "block" }, true);
            scIframe.frameBorder = "0";
            scIframe.sandbox = "allow-top-navigation allow-same-origin allow-scripts";
            if (scContainer) {
                scContainer.parentNode.insertBefore(scIframe, scContainer);
            } else {
                document.body.appendChild(scIframe);
            }
            if (scIframe.contentWindow) {
                scIframe.contentWindow.contents = widgetHtml;
            }
            scIframe.src = 'javascript:window["contents"]';
            setTimeout(function () {
                document.activeElement.blur();
            }, 100);
            return true;
        }
    }
    function onCancelScreenCaptureClick() {
        KAMPYLE_EVENT_DISPATCHER.trigger("neb_cancelCaptureClicked", {
            formId: KAMPYLE_DATA.getMemoryData("currentFormId"),
            feedbackCorrelationUUID: KAMPYLE_DATA.getMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.FEEDBACK_CORRELATION_UUID),
        });
    }
    function onSubmitScreenCaptureClick() {
        showScreenCaptureSpinner();
        var functionToCall = KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.USER_SNAP_V4) || KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.USER_SNAP_ONPREM) ? "submit" : "sendReport";
        window.UserSnap.api[functionToCall]();
    }
    return {
        initScreenCaptureWidget: initScreenCaptureWidget,
        handleCaptureCancellation: handleCaptureCancellation,
        closeScreenCaptureWidget: closeScreenCaptureWidget,
        beforeOpen: beforeOpen,
        UserSnapModel: UserSnapModel,
        shouldProcessScreenCaptureAsComponent: shouldProcessScreenCaptureAsComponent,
        overrideDefaultScreenCaptureTexts: overrideDefaultScreenCaptureTexts,
        overrideDefaultScreenCaptureStyles: overrideDefaultScreenCaptureStyles,
        formatScreenCaptureWidget: formatScreenCaptureWidget,
        getSelectedTool: getSelectedTool,
        handleScrollIfNeeded: handleScrollIfNeeded,
        setBodyOverflowType: setBodyOverflowType,
        cancelCaptureClicked: cancelCaptureClicked,
        afterSend: afterSend,
        getUserSnapInstance: getUserSnapInstance,
        init: init,
        addEscKeyDownListenerToIframe: addEscKeyDownListenerToIframe,
        createScreenCaptureWidget: createScreenCaptureWidget,
        isScreenCaptureEnabled: isScreenCaptureEnabled,
        onCancelScreenCaptureClick: onCancelScreenCaptureClick,
        onSubmitScreenCaptureClick: onSubmitScreenCaptureClick,
        showScreenCaptureSpinner: showScreenCaptureSpinner,
    };
})(window, document);
window.KAMPYLE_ONSITE_SDK = (function (window, document) {
    function triggerSdkError(method) {
        var eventData = { errorMessage: KAMPYLE_CONSTANT.LOG_MESSAGES.ERROR_ONSITE_SDK_CONFIGURATION_MISSING.replace("{{METHOD}}", method) };
        KAMPYLE_EVENT_DISPATCHER.triggerError(eventData);
        MDIGITAL.LOGGER.warn(eventData.errorMessage);
    }
    function loadForm(formId) {
        if (MDIGITAL.CONFIGURATION.isOnsiteConfigurationMissing()) {
            triggerSdkError("loadForm");
            return false;
        }
        var formState = KAMPYLE_DATA.getFormState(formId);
        if (!formState) {
            KAMPYLE_UTILS.showWarning("Error fetching data for form id " + formId);
            return false;
        }
        if (!MDIGITAL.FORM_STATE.isFormFullyLoaded(formId)) {
            KAMPYLE_EVENT_DISPATCHER.trigger("neb_loadForm", { formId: formId });
        }
        return true;
    }
    function showForm(formId, options) {
        if (MDIGITAL.CONFIGURATION.isOnsiteConfigurationMissing()) {
            triggerSdkError("showForm");
            return false;
        }
        options = options || {};
        var formState = KAMPYLE_DATA.getFormState(formId);
        if (!formState) {
            KAMPYLE_UTILS.showWarning("Error fetching data for form id " + formId);
            return false;
        }
        if (KAMPYLE_DATA.getMemoryData("inviteLoadedAndShown")) {
            KAMPYLE_UTILS.showWarning("There is already an invite displayed");
            return false;
        }
        if (KAMPYLE_FUNC.isAnyOtherFormAlreadyShown(formId, true)) {
            KAMPYLE_UTILS.showWarning("There is already a form displayed");
            return false;
        }
        if (!MDIGITAL.FORM_STATE.isFormFullyLoaded(formId)) {
            loadForm(formId);
        }
        options.triggerType = options.triggerType || "ByCode";
        KAMPYLE_DATA.saveFormExtraData(formId, options);
        var extraData = { formId: formId };
        for (var prop in options) {
            if (options.hasOwnProperty(prop)) {
                extraData[prop] = options[prop];
            }
        }
        KAMPYLE_EVENT_DISPATCHER.trigger("neb_sdkShowForm", { formId: formId, triggerType: options.triggerType });
        return true;
    }
    function closeFormById(formId) {
        var formState = KAMPYLE_DATA.getFormState(formId);
        if (!(formState && formState.shown)) {
            return false;
        }
        var isFormSubmitted = formState.isCurrentlySubmitted;
        KAMPYLE_EVENT_DISPATCHER.trigger("neb_formClosed", { formId: formId, isFormSubmitted: isFormSubmitted });
        return true;
    }
    function getCloseFormByConditionFunc(value) {
        switch (value) {
            case KAMPYLE_CONSTANT.CLOSE_FORM_PARAM_VALUES.ALL:
                return function () {
                    return true;
                };
            case KAMPYLE_CONSTANT.CLOSE_FORM_PARAM_VALUES.EMBEDDED:
                return function (form) {
                    return form && form.formType === KAMPYLE_CONSTANT.CLOSE_FORM_PARAM_VALUES.EMBEDDED;
                };
            case KAMPYLE_CONSTANT.CLOSE_FORM_PARAM_VALUES.MODAL:
                return function (form) {
                    var displayType = KAMPYLE_DATA.getDisplayType(form);
                    return displayType === KAMPYLE_CONSTANT.DISPLAY_TYPES.ANIMATION || displayType === KAMPYLE_CONSTANT.DISPLAY_TYPES.LIGHTBOX;
                };
            default:
                return function () {
                    return false;
                };
        }
    }
    function closeForm(value) {
        if (MDIGITAL.CONFIGURATION.isOnsiteConfigurationMissing()) {
            triggerSdkError("closeForm");
            return false;
        }
        if (!isNaN(value)) {
            return closeFormById(value);
        }
        var allForms = KAMPYLE_DATA.getAllForms();
        var conditionFunc = value && getCloseFormByConditionFunc(value.toLowerCase());
        var len = allForms.length,
            curr,
            result = false;
        for (var i = 0; i < len; i++) {
            curr = allForms[i];
            if (conditionFunc && conditionFunc(curr)) {
                result = closeFormById(+curr.formId) || result;
            }
        }
        return result;
    }
    function updatePageView() {
        if (MDIGITAL.CONFIGURATION.isOnsiteConfigurationMissing()) {
            triggerSdkError("updatePageView");
            return false;
        }
        KAMPYLE_EVENT_DISPATCHER.trigger("neb_sdkPageView");
    }
    function isSurveyDisplayed() {
        if (MDIGITAL.CONFIGURATION.isOnsiteConfigurationMissing()) {
            triggerSdkError("isSurveyDisplayed");
            return false;
        }
        if (KAMPYLE_FUNC.isAnyInviteShown() || KAMPYLE_FUNC.isAnyOtherFormAlreadyShown()) {
            return true;
        }
        KAMPYLE_EVENT_DISPATCHER.trigger("neb_sdkSurveyDisplayed");
        return false;
    }
    function startInviteTargeting() {
        if (MDIGITAL.CONFIGURATION.isOnsiteConfigurationMissing()) {
            triggerSdkError("startInviteTargeting");
            return false;
        }
        if (!KAMPYLE_DATA.isFeatureEnabled(KAMPYLE_CONSTANT.PROPERTY_SETTINGS.MANUALLY_INVITE_TARGETING)) {
            KAMPYLE_UTILS.showWarning("Manually invite targeting feature is disabled");
            return false;
        }
        KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_MANUALLY_INVITE_TARGETING, { skipButtonTargeting: true, skipInviteTargeting: false });
    }
    function startLogger() {
        MDIGITAL.LOGGER.setLoggerStatus(true);
    }
    function stopLogger() {
        MDIGITAL.LOGGER.setLoggerStatus(false);
    }
    function printMdigitalLogs() {
        MDIGITAL.LOGGER.printLogs();
    }
    return {
        loadForm: loadForm,
        showForm: showForm,
        closeForm: closeForm,
        updatePageView: updatePageView,
        isSurveyDisplayed: isSurveyDisplayed,
        startInviteTargeting: startInviteTargeting,
        startLogger: startLogger,
        stopLogger: stopLogger,
        printMdigitalLogs: printMdigitalLogs,
    };
})(window, document);
window.KAMPYLE_INTEGRATION = (function () {
    var INTEGRATION_CONTEXT = { sessionCam: "sessionCamRecorder", quantumMetrics: "QuantumMetricAPI" };
    function getParameterBySource(getParamsBySourceParameters) {
        switch (getParamsBySourceParameters.source) {
            case "var":
                return KAMPYLE_UTILS.getNestedPropertyValue(window, getParamsBySourceParameters.param);
            case "cookie":
                return KAMPYLE_UTILS.kampyleGetCookie(getParamsBySourceParameters.param);
            case "function":
                var func = KAMPYLE_UTILS.getNestedPropertyValue(window, getParamsBySourceParameters.param);
                if (typeof func === "function") {
                    try {
                        var predefinedArgs = getParamsBySourceParameters.predefinedArgs;
                        if (predefinedArgs) {
                            predefinedArgs = predefinedArgs.split(",");
                            return predefinedArgs instanceof Array ? func.apply(getParamsBySourceParameters.context, predefinedArgs) : null;
                        } else {
                            return func.apply(getParamsBySourceParameters.context);
                        }
                    } catch (e) {
                        return null;
                    }
                } else {
                    return null;
                }
            case "url":
                return KAMPYLE_UTILS.getUrlParam(KAMPYLE_UTILS.getNestedPropertyValue(window, getParamsBySourceParameters.param));
            case "storage":
                return localStorage.getItem(KAMPYLE_UTILS.getNestedPropertyValue(window, getParamsBySourceParameters.param));
            default:
        }
    }
    function isEnabled(integrationData) {
        var isEnabledBol = true;
        var valueBySource;
        var paramValue;
        var isEnabledArray = integrationData.isEnabled;
        var contextParam = INTEGRATION_CONTEXT[integrationData.integrationName];
        var integrationContext = KAMPYLE_UTILS.getNestedPropertyValue(window, contextParam);
        for (var i = 0; i < isEnabledArray.length; i++) {
            var isEnabledCurr = false;
            var isEnabledCurrName = isEnabledArray[i].param;
            paramValue = isEnabledArray[i].paramValue;
            if (!isEnabledCurrName) {
                KAMPYLE_UTILS.showWarning("no current name found");
            }
            valueBySource = getParameterBySource({ source: isEnabledArray[i].source, param: isEnabledCurrName, context: integrationContext, predefinedArgs: isEnabledArray[i].predefinedArguments });
            if (paramValue === null) {
                isEnabledCurr = valueBySource !== undefined && valueBySource !== null;
            } else {
                isEnabledCurr = paramValue === valueBySource;
            }
            isEnabledBol = isEnabledBol && isEnabledCurr;
        }
        return isEnabledBol;
    }
    function prepareIntegrationData(integrationData) {
        var parametersJson = {};
        var integrationDataJson = {};
        var parametersArray = integrationData.parameters || [];
        var contextParam = INTEGRATION_CONTEXT[integrationData.integrationName] || null;
        var integrationContext = KAMPYLE_UTILS.getNestedPropertyValue(window, contextParam);
        for (var i = 0; i < parametersArray.length; i++) {
            var paramValue = getParameterBySource({ source: parametersArray[i].source, param: parametersArray[i].param, context: integrationContext, predefinedArgs: parametersArray[i].predefinedArguments });
            var putIn = integrationData.parameters[i].putIn;
            KAMPYLE_UTILS.setNestedPropertyValue(parametersJson, putIn, paramValue);
        }
        integrationDataJson = { integrationName: integrationData.integrationName, parameters: parametersJson };
        return integrationDataJson;
    }
    function getIntegrationData() {
        var integrations = KAMPYLE_DATA.getInegrations() || {};
        var integrationData = {};
        var currIntegration;
        for (var integrationType in integrations) {
            if (integrations.hasOwnProperty(integrationType)) {
                var currIntegrationType = integrations[integrationType];
                for (var i = 0; i < currIntegrationType.length; i++) {
                    currIntegration = currIntegrationType[i];
                    if (isEnabled(currIntegration)) {
                        integrationData[integrationType] = integrationData[integrationType] || [];
                        integrationData[integrationType].push(prepareIntegrationData(currIntegration));
                    }
                }
            }
        }
        return integrationData;
    }
    return { isEnabled: isEnabled, prepareIntegrationData: prepareIntegrationData, getParameterBySource: getParameterBySource, getIntegrationData: getIntegrationData };
})();
window.MDIGITAL = window.MDIGITAL || {};
window.MDIGITAL.CUSTOM_EVENTS = (function () {
    var FORM_ID = "formId";
    var FORM_TRIGGER_TYPE = "formTriggerType";
    var FEEDBACK_UUID = "feedbackUUID";
    var FEEDBACK_CORRELATION_UUID = "feedbackCorrelationUUID";
    var FEEDBACK_CONTENT = "content";
    var IS_PASSED = "isPassed";
    var TARGETING_RULE = "targetingRule";
    var EXPECTED = "expected";
    var ACTUAL = "actual";
    var FORM_LANGUAGE = "formLanguage";
    var customEvents = {
        MDigital_Form_Close_Submitted: { customEventId: "MDigital_Form_Close_Submitted", payload: [FORM_ID, FORM_TRIGGER_TYPE] },
        neb_formReady: { customEventId: "MDigital_Form_Displayed", payload: [FORM_ID, FORM_TRIGGER_TYPE] },
        neb_pageView: { customEventId: "MDigital_Page_View", payload: [] },
        MDigital_Form_Next_Page: { customEventId: "MDigital_Form_Next_Page", payload: [FORM_ID, FORM_TRIGGER_TYPE] },
        MDigital_Form_Back_Page: { customEventId: "MDigital_Form_Back_Page", payload: [FORM_ID, FORM_TRIGGER_TYPE] },
        MDigital_Form_Close_No_Submit: { customEventId: "MDigital_Form_Close_No_Submit", payload: [FORM_ID, FORM_TRIGGER_TYPE] },
        MDigital_ThankYou_Displayed: { customEventId: "MDigital_ThankYou_Displayed", payload: [FORM_ID, FORM_TRIGGER_TYPE] },
        MDigital_ThankYou_Close: {
            customEventId: "MDigital_ThankYou_Close",
            payload: [FORM_ID, FORM_TRIGGER_TYPE].concat(!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.BACKEND_GENERATED_UUID) ? FEEDBACK_CORRELATION_UUID : FEEDBACK_UUID),
        },
        neb_feedbackSubmitted: {
            customEventId: "MDigital_Submit_Feedback",
            payload: [FORM_ID, FORM_TRIGGER_TYPE]
                .concat(!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.BACKEND_GENERATED_UUID) ? FEEDBACK_CORRELATION_UUID : FEEDBACK_UUID)
                .concat(isExposeFormLanguageAllowed() ? FORM_LANGUAGE : [])
                .concat(KAMPYLE_FUNC.isContentPayloadEnabled() ? FEEDBACK_CONTENT : []),
        },
        neb_inviteAccepted: { customEventId: "MDigital_Invite_Accepted", payload: [FORM_ID] },
        neb_showInvitation: { customEventId: "MDigital_Invite_Displayed", payload: [FORM_ID] },
        neb_inviteDeclined: { customEventId: "MDigital_Invite_Declined", payload: [FORM_ID] },
        neb_skipInvitation: { customEventId: "MDigital_invite_Skipped", payload: [FORM_ID] },
        neb_buttonClicked: { customEventId: "MDigital_Feedback_Button_Clicked", payload: [FORM_ID, FORM_TRIGGER_TYPE] },
        neb_captureInit: { customEventId: "MDigital_CaptureButton_Clicked", payload: [FORM_ID, FORM_TRIGGER_TYPE].concat(!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.BACKEND_GENERATED_UUID) ? FEEDBACK_CORRELATION_UUID : []) },
        neb_captureImageClicked: {
            customEventId: "MDigital_CaptureButton_Taken",
            payload: [FORM_ID, FORM_TRIGGER_TYPE].concat(!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.BACKEND_GENERATED_UUID) ? FEEDBACK_CORRELATION_UUID : []),
        },
        neb_initButton: { customEventId: "MDigital_Button_Displayed", payload: [FORM_ID] },
        MDigital_Capture_Cancelled: {
            customEventId: "MDigital_CaptureButton_Cancel",
            payload: [FORM_ID, FORM_TRIGGER_TYPE].concat(!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.BACKEND_GENERATED_UUID) ? FEEDBACK_CORRELATION_UUID : []),
        },
        screenCaptureDelete: {
            customEventId: "MDigital_ScreenCapture_Delete",
            payload: [FORM_ID, FORM_TRIGGER_TYPE].concat(!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.BACKEND_GENERATED_UUID) ? FEEDBACK_CORRELATION_UUID : []),
        },
        screenCaptureRetake: {
            customEventId: "MDigital_ScreenCapture_Retake",
            payload: [FORM_ID, FORM_TRIGGER_TYPE].concat(!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.BACKEND_GENERATED_UUID) ? FEEDBACK_CORRELATION_UUID : []),
        },
        neb_sdkShowForm: { customEventId: "MDigital_ShowForm_Called", payload: [FORM_ID, FORM_TRIGGER_TYPE] },
        MDigital_targetingRuleEvaluated: { customEventId: KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, payload: [FORM_ID, IS_PASSED, TARGETING_RULE, EXPECTED, ACTUAL, FORM_TRIGGER_TYPE] },
    };
    var dataToSendMapping = {
        formId: { exposedProperty: KAMPYLE_CONSTANT.EXPOSED_FEEDBACK_KEYS.FORM_ID_LABEL, manipulateValueMethod: null },
        formTriggerType: { exposedProperty: KAMPYLE_CONSTANT.EXPOSED_FEEDBACK_KEYS.FORM_TYPE_LABEL, manipulateValueMethod: manipulateTriggerTypeValue },
        feedbackCorrelationUUID: { exposedProperty: KAMPYLE_CONSTANT.EXPOSED_FEEDBACK_KEYS.FEEDBACK_UUID_LABEL },
        feedbackUUID: { exposedProperty: KAMPYLE_CONSTANT.EXPOSED_FEEDBACK_KEYS.FEEDBACK_UUID_LABEL, manipulateValueMethod: null },
        content: { exposedProperty: KAMPYLE_CONSTANT.EXPOSED_FEEDBACK_KEYS.FEEDBACK_CONTENT_LABEL, manipulateValueMethod: null },
        formLanguage: { exposedProperty: KAMPYLE_CONSTANT.EXPOSED_FEEDBACK_KEYS.FORM_LANGUAGE_LABEL, manipulateValueMethod: null },
    };
    function init() {
        try {
            KAMPYLE_UTILS.initEventSubscriptions(customEvents, triggerCustomEvent);
            return true;
        } catch (e) {
            console.warn(e);
        }
    }
    function formatData(eventName, eventDispatcherData) {
        if (!eventName || !eventDispatcherData) {
            return null;
        }
        for (var eventProp in customEvents[eventName]) {
            if (customEvents[eventName].hasOwnProperty(eventProp)) {
                eventDispatcherData[eventProp] = customEvents[eventName][eventProp];
            }
        }
        eventDispatcherData.eventName = eventName;
        eventDispatcherData.formTriggerType = KAMPYLE_DATA.getFormTriggerType(eventDispatcherData.formId);
        return eventDispatcherData;
    }
    function triggerCustomEvent(eventName, eventDispatcherData) {
        var eventDispatcherDataFormatted = formatData(eventName, eventDispatcherData);
        var customEventData = getCustomEventDataToSend(eventDispatcherDataFormatted);
        if (customEventData) {
            var customEventId = eventDispatcherDataFormatted.customEventId;
            KAMPYLE_UTILS.triggerCustomEvent(customEventId, customEventData);
            if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.ENABLE_EVENTS_FOR_CE_DEBUG)) {
                KAMPYLE_COOLADATA.triggerCooladataEvent(KAMPYLE_CONSTANT.EVENTS.CUSTOM_EVENTS_DEBUG_MESSAGE, { customEventId: customEventId, customEventData: customEventData });
            }
        }
    }
    function getCustomEventDataToSend(eventDispatcherDataFormatted) {
        var dataToSend = {};
        if (!eventDispatcherDataFormatted || !eventDispatcherDataFormatted.payload) {
            return null;
        }
        for (var i = 0; i < eventDispatcherDataFormatted.payload.length; i++) {
            var payloadProperty = eventDispatcherDataFormatted.payload[i];
            var payloadValue = KAMPYLE_UTILS.getNestedPropertyValue(eventDispatcherDataFormatted, payloadProperty);
            var mappingObject;
            if (payloadValue !== undefined && payloadValue !== null) {
                mappingObject = dataToSendMapping[payloadProperty];
                if (mappingObject && mappingObject.exposedProperty) {
                    dataToSend[mappingObject.exposedProperty] = mappingObject.manipulateValueMethod ? mappingObject.manipulateValueMethod.apply(this, [payloadValue]) : payloadValue;
                } else {
                    dataToSend[payloadProperty] = payloadValue;
                }
            }
        }
        return dataToSend;
    }
    function manipulateTriggerTypeValue(formTriggerType) {
        return KAMPYLE_CONSTANT.FORM_TRIGGER_TYPES_MAP[formTriggerType] || KAMPYLE_CONSTANT.CUSTOM_EVENT_OTHER;
    }
    function isExposeFormLanguageAllowed() {
        return (
            KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.LOCALIZED_FORMS) &&
            (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.EXPOSE_SELECTION_QUESTIONS) || KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.EXPOSE_VERBATIM_QUESTIONS))
        );
    }
    return { init: init, triggerCustomEvent: triggerCustomEvent, getCustomEventDataToSend: getCustomEventDataToSend, isExposeFormLanguageAllowed: isExposeFormLanguageAllowed };
})();
window.MDIGITAL = window.MDIGITAL || {};
window.MDIGITAL.CUSTOM_PARAMETERS = (function (window, document) {
    function getCustomParamValue(customParam) {
        if (!KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.CP_EXT_REFACTOR)) {
            return KAMPYLE_FUNC.getSafeCustomParamVal(customParam);
        }
        var cp = customParam || {};
        var extractedValue = MDIGITAL.CUSTOM_PARAMETERS.extractCPValue(cp);
        return MDIGITAL.CUSTOM_PARAMETERS.castCPValue(extractedValue, cp.type || "");
    }
    function formatCustomParams(formId) {
        var customParams = MDIGITAL.CUSTOM_PARAMETERS.getFormCustomParams(formId) || [];
        return customParams.map(MDIGITAL.CUSTOM_PARAMETERS.appendValueToCPObject);
    }
    function getFormCustomParams(formId) {
        var formData = KAMPYLE_DATA.getFormData(formId) || {};
        return formData.customParams || null;
    }
    function hasCustomParams(formId) {
        var formData = KAMPYLE_DATA.getFormData(formId);
        return !!formData && !!formData.customParams && !!formData.customParams.length;
    }
    function getCustomParamById(fieldId, formData) {
        if (fieldId !== undefined && formData && formData.customParams && formData.customParams.length) {
            return (
                formData.customParams.find(function (cp) {
                    return cp.id == fieldId;
                }) || null
            );
        } else {
            return null;
        }
    }
    function fetchCPValue(cp) {
        var currentCPValue = cp.value;
        var sourceCP = (cp.source || "var").toLowerCase();
        var cpName = cp.name || cp.source_name || "";
        switch (KAMPYLE_UTILS.safeToLower(sourceCP)) {
            case "var":
                currentCPValue = KAMPYLE_UTILS.getNestedPropertyValue(window, cpName);
                break;
            case "url":
                currentCPValue = KAMPYLE_UTILS.getUrlParam(cpName);
                break;
            case "cookie":
                currentCPValue = KAMPYLE_UTILS.getCookie(cpName);
                break;
            default:
                currentCPValue = null;
                break;
        }
        return currentCPValue !== "" ? currentCPValue : null;
    }
    function extractCPValue(cp) {
        var value = cp.value;
        if (value === undefined) {
            value = MDIGITAL.CUSTOM_PARAMETERS.fetchCPValue(cp);
        }
        return value !== "" ? value : null;
    }
    function castCPValue(value, type) {
        if (value === null) {
            return value;
        }
        switch (type.toLowerCase()) {
            case "datetime":
                return MDIGITAL.CUSTOM_PARAMETERS.handleDatetimeCasting(value);
            case "number":
                return KAMPYLE_UTILS.getNumericValue(value);
            case "text":
                return MDIGITAL.CUSTOM_PARAMETERS.handleTextCasting(value);
            case "boolean":
                return MDIGITAL.CUSTOM_PARAMETERS.handleBooleanCasting(value);
            default:
                console.error("Invalid custom parameter type " + type);
                return null;
        }
    }
    function handleDatetimeCasting(value) {
        if (typeof value === "string") {
            return Number(value) || null;
        } else if (!(value instanceof Date) && (!(value || {}).getTime || isNaN(value.getTime()))) {
            return null;
        } else {
            return value.getTime();
        }
    }
    function handleTextCasting(value) {
        return typeof value === "string" ? value : null;
    }
    function handleBooleanCasting(value) {
        if (value === "true") {
            return true;
        } else if (value === "false") {
            return false;
        }
        return typeof value === "boolean" ? value : null;
    }
    function appendValueToCPObject(cp) {
        cp = cp || {};
        var cpValue = MDIGITAL.CUSTOM_PARAMETERS.getCustomParamValue({ name: cp.source_name, type: cp.type, source: cp.source });
        return Object.assign(cp, { value: cpValue });
    }
    return {
        getCustomParamValue: getCustomParamValue,
        formatCustomParams: formatCustomParams,
        getFormCustomParams: getFormCustomParams,
        hasCustomParams: hasCustomParams,
        fetchCPValue: fetchCPValue,
        getCustomParamById: getCustomParamById,
        extractCPValue: extractCPValue,
        castCPValue: castCPValue,
        handleDatetimeCasting: handleDatetimeCasting,
        handleTextCasting: handleTextCasting,
        handleBooleanCasting: handleBooleanCasting,
        appendValueToCPObject: appendValueToCPObject,
    };
})(window, document);
window.MDIGITAL.INIT = (function (window, document) {
    var onsiteConfiguration;
    function init() {
        onsiteConfiguration = MDIGITAL.CONFIGURATION.getOnsiteConfiguration();
        initBaseModules();
        KAMPYLE_DATA.setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.DATA_JSON, onsiteConfiguration);
        var isDHH = KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.DHH);
        var isExtension = KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.EXTENSION_ENABLED);
        if (isDHH || isExtension) {
            if (!onsiteConfiguration.onsiteDataUrl) {
                MDIGITAL.CONFIGURATION.onsiteDataFailed("onsiteDataUrl is Empty");
            } else {
                MDIGITAL.CONFIGURATION.fetchOnsiteExternalConfiguration(onsiteConfiguration.onsiteDataUrl);
            }
        } else {
            KAMPYLE_DATA.setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.HAS_ONSITE_CONFIGURATION, true);
            var formattedData = MDIGITAL.CONFIGURATION.formatConfiguration(onsiteConfiguration);
            MDIGITAL.INIT.initOnsite(formattedData);
        }
    }
    function initBaseModules() {
        MDIGITAL.LOGGER.init();
        KAMPYLE_EVENT_DISPATCHER.init();
        KAMPYLE_DATA.init();
        MDIGITAL.CONFIGURATION.init();
        KAMPYLE_COOLADATA.init();
    }
    function initOnsite(onsiteConfiguration) {
        KAMPYLE_DATA.setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.DATA_JSON, onsiteConfiguration);
        KAMPYLE_DATA.initOnsiteDefaultState();
        KAMPYLE_FUNC.init();
        KAMPYLE_FUNC.startCheckingTargeting();
        MDIGITAL.INIT.reportInitComplete();
    }
    function reportInitComplete() {
        KAMPYLE_UTILS.triggerCustomEvent("neb_OnsiteLoaded");
    }
    return { init: init, initOnsite: initOnsite, reportInitComplete: reportInitComplete };
})(window, document);
window.MDIGITAL = window.MDIGITAL || {};
window.MDIGITAL.WCAG = (function () {
    var CURRENT_SHOWN_MODAL_INITIAL_STATE = { formId: null, targetModalId: "" };
    var rootWindow = window.top;
    var currentShownModal = {};
    function init() {
        initModalState();
        KAMPYLE_EVENT_DISPATCHER.subscribeMany({
            neb_formShown: [onFormShown],
            neb_captureImageClicked: [refocusForm],
            MDigital_Capture_Cancelled: [refocusForm],
            neb_inviteReady: [onInviteReady, focusOnModal, announceInvitation, trapFocus],
            MDigital_noJsonModalShown: [onNoJsonModalShown, focusOnModal, trapFocus],
            neb_formClosed: [onFormClosed],
            neb_inviteAccepted: [releaseFocus, initModalState],
            neb_inviteDeclined: [releaseFocus, initModalState],
            MDigital_noJsonModalClosed: [releaseFocus, initModalState],
        });
    }
    function initModalState() {
        Object.assign(currentShownModal, CURRENT_SHOWN_MODAL_INITIAL_STATE);
    }
    function onFormShown(eventName, payload) {
        if (KAMPYLE_UTILS.isModalFormType(payload.formId)) {
            setModalState({ formId: payload.formId, targetModalId: KAMPYLE_DATA.getFormIframeId(payload.formId) });
            MDIGITAL.WCAG.focusOnModal();
            MDIGITAL.WCAG.trapFocus();
        }
    }
    function refocusForm() {
        var targetModal = document.getElementById(currentShownModal.targetModalId);
        if (targetModal && targetModal.contentWindow) {
            targetModal.contentWindow.focus();
        }
    }
    function setModalState(newState) {
        Object.assign(currentShownModal, newState);
    }
    function focusOnModal() {
        var targetModal = document.getElementById(currentShownModal.targetModalId);
        if (targetModal && typeof targetModal.focus === "function") {
            targetModal.focus();
        }
    }
    function announceInvitation() {
        var targetModal = document.getElementById(currentShownModal.targetModalId);
        var browser = KAMPYLE_UTILS.getNestedPropertyValue(KAMPYLE_UTILS.getBrowser(), "name");
        if (targetModal && browser === KAMPYLE_CONSTANT.BROWSERS.FIREFOX) {
            targetModal.setAttribute("aria-hidden", "true");
            setTimeout(function () {
                targetModal.setAttribute("role", "alert");
                targetModal.setAttribute("aria-hidden", "false");
            }, 250);
        }
    }
    function trapFocus() {
        rootWindow.addEventListener(KAMPYLE_CONSTANT.BROWSER_EVENTS.FOCUS, focusOnModal);
    }
    function onInviteReady(eventName, payload) {
        setModalState({ targetModalId: KAMPYLE_CONSTANT.IFRAME_SETTINGS.INVITATION.IFRAME_ID });
    }
    function onNoJsonModalShown(eventName, payload) {
        setModalState({ targetModalId: KAMPYLE_CONSTANT.IFRAME_SETTINGS.OOPS.CONTAINER_ID_PREFIX + payload.formId });
    }
    function onFormClosed(eventName, payload) {
        var formId = payload.formId;
        if (formId === currentShownModal.formId) {
            releaseFocus();
            initModalState();
        }
    }
    function releaseFocus() {
        rootWindow.removeEventListener(KAMPYLE_CONSTANT.BROWSER_EVENTS.FOCUS, focusOnModal);
    }
    function getModalState() {
        return currentShownModal;
    }
    return {
        init: init,
        initModalState: initModalState,
        onFormShown: onFormShown,
        getModalState: getModalState,
        setModalState: setModalState,
        focusOnModal: focusOnModal,
        trapFocus: trapFocus,
        refocusForm: refocusForm,
        announceInvitation: announceInvitation,
        CURRENT_SHOWN_MODAL_INITIAL_STATE: CURRENT_SHOWN_MODAL_INITIAL_STATE,
    };
})();
window.MDIGITAL = window.MDIGITAL || {};
window.MDIGITAL.MODAL_DIALOGS = (function () {
    var CURRENT_SHOWN_MODAL_INITIAL_STATE = { formId: null, targetModalId: "" };
    var rootWindow = window.top;
    var currentShownModal = {};
    function init() {
        initModalState();
        KAMPYLE_EVENT_DISPATCHER.subscribeMany({
            neb_formShown: [onFormShown],
            neb_inviteReady: [onInviteReady],
            MDigital_noJsonModalShown: [onNoJsonModalShown],
            neb_afterFormClosed: [onFormClosed],
            neb_inviteAccepted: [onInviteAccepted],
            neb_inviteDeclined: [onInviteDeclined],
            MDigital_noJsonModalClosed: [onNoJsonModalClosed],
            neb_captureImageClicked: [refocusForm],
            MDigital_Capture_Cancelled: [refocusForm],
        });
    }
    function initModalState() {
        Object.assign(currentShownModal, CURRENT_SHOWN_MODAL_INITIAL_STATE);
    }
    function setModalState(newState) {
        Object.assign(currentShownModal, newState);
    }
    function getModalState() {
        return currentShownModal;
    }
    function onFormShown(eventName, payload) {
        var formId = payload.formId;
        setLocalizedAnnouncementOnForm(formId);
        if (KAMPYLE_UTILS.isModalFormType(formId)) {
            setModalState({
                formId: formId,
                focusedElement: isEventOccuredOnCurrentShownModal(formId) ? currentShownModal.focusedElement : document.activeElement,
                targetModalId: KAMPYLE_DATA.getFormIframeId(formId),
                isNoJsonModal: false,
                isPreview: formId != null && KAMPYLE_UTILS.isFormInPreviewContext(formId),
            });
            setDialogAriaAttributesOnForm(formId);
            if (KAMPYLE_UTILS.isSafari() || (KAMPYLE_DATA.isCustomHtmlForm(formId) && !KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.IS_CHTML_HANDLE_INIT_FOCUS_INDEPENDENTLY))) {
                initAndTrapFocusOnModal();
            } else {
                MDIGITAL.MODAL_DIALOGS.trapFocus();
            }
        }
    }
    function onInviteReady(eventName, payload) {
        var formId = payload.formId;
        setLocalizedAnnouncementOnInvite(formId);
        if (KAMPYLE_DATA.isNewMobileInvitation()) {
            return;
        }
        setModalState({ formId: formId, focusedElement: document.activeElement, targetModalId: KAMPYLE_CONSTANT.IFRAME_SETTINGS.INVITATION.IFRAME_ID, isNoJsonModal: false, isPreview: false });
        setDialogAriaAttributesOnInvite(formId);
        if (KAMPYLE_UTILS.isSafari()) {
            initAndTrapFocusOnModal();
        } else {
            MDIGITAL.MODAL_DIALOGS.trapFocus();
        }
    }
    function onNoJsonModalShown(eventName, payload) {
        setModalState({ formId: payload.formId, focusedElement: document.activeElement, targetModalId: KAMPYLE_CONSTANT.IFRAME_SETTINGS.OOPS.CONTAINER_ID_PREFIX + payload.formId, isNoJsonModal: true, isPreview: false });
        setDialogAriaAttributesOnOops();
        MDIGITAL.MODAL_DIALOGS.focusOnOopsCloseButton();
        MDIGITAL.MODAL_DIALOGS.trapFocus();
    }
    function isEventOccuredOnCurrentShownModal(formId) {
        return formId != null && formId == currentShownModal.formId;
    }
    function onFormClosed(eventName, payload) {
        if (!isEventOccuredOnCurrentShownModal(payload.formId)) {
            return;
        }
        restoreLightBoxDefaultState();
    }
    function onInviteAccepted(eventName, payload) {
        if (!isEventOccuredOnCurrentShownModal(payload.formId)) {
            return;
        }
        releaseFocus();
        removeDialogAriaAttributesInvite();
        setModalState({ targetModalId: null });
    }
    function onInviteDeclined(eventName, payload) {
        if (!isEventOccuredOnCurrentShownModal(payload.formId)) {
            return;
        }
        restoreInviteDefaultState();
    }
    function onNoJsonModalClosed(eventName, payload) {
        restoreLightBoxDefaultState();
    }
    function restoreInviteDefaultState() {
        releaseFocus();
        removeDialogAriaAttributesInvite();
        restoreFocus();
        initModalState();
    }
    function restoreLightBoxDefaultState() {
        releaseFocus();
        removeDialogAriaAttributesLightBox();
        restoreFocus();
        initModalState();
    }
    function handleTrapFocus() {
        setFocus();
    }
    function trapFocus() {
        if (currentShownModal.isPreview) return;
        rootWindow.addEventListener(KAMPYLE_CONSTANT.BROWSER_EVENTS.FOCUS, handleTrapFocus, true);
    }
    function releaseFocus() {
        if (currentShownModal.isPreview) return;
        rootWindow.removeEventListener(KAMPYLE_CONSTANT.BROWSER_EVENTS.FOCUS, handleTrapFocus, true);
    }
    function refocusForm() {
        var targetModal = document.getElementById(currentShownModal.targetModalId);
        if (targetModal && targetModal.contentWindow) {
            targetModal.contentWindow.focus();
        }
    }
    function setFocus() {
        if (currentShownModal.isNoJsonModal) {
            MDIGITAL.MODAL_DIALOGS.focusOnOopsCloseButton();
        } else {
            MDIGITAL.MODAL_DIALOGS.focusOnModal();
        }
    }
    function initAndTrapFocusOnModal() {
        if (KAMPYLE_UTILS.isSafari()) {
            setTimeout(function () {
                MDIGITAL.MODAL_DIALOGS.focusOnModal();
                MDIGITAL.MODAL_DIALOGS.trapFocus();
            }, 0);
        } else {
            MDIGITAL.MODAL_DIALOGS.focusOnModal();
            MDIGITAL.MODAL_DIALOGS.trapFocus();
        }
    }
    function focusOnModal() {
        var targetModal = document.getElementById(currentShownModal.targetModalId);
        KAMPYLE_UTILS.focusElement(targetModal);
    }
    function focusOnOopsCloseButton() {
        var closeButton = document.querySelector("#" + currentShownModal.targetModalId + " #" + KAMPYLE_CONSTANT.IFRAME_SETTINGS.OOPS.CLOSE_BUTTON_ID);
        KAMPYLE_UTILS.focusElement(closeButton);
    }
    function restoreFocus() {
        var elementToFocus = currentShownModal.focusedElement;
        if (elementToFocus != null && elementToFocus !== document.body) {
            KAMPYLE_UTILS.focusElement(elementToFocus);
        } else if (document.activeElement !== document.body && KAMPYLE_UTILS.isSafari()) {
            var targetModal = document.getElementById(currentShownModal.targetModalId);
            if (targetModal != null && document.activeElement === targetModal) {
                window.focus();
                enforceFocusOnBody();
            }
        }
    }
    function setDialogAriaAttributesOnForm(formId) {
        var ariaAttrs = { role: "dialog", "aria-modal": true, "aria-label": getFormAnnouncement(formId) };
        var langCode = getFormLanguageCode(formId);
        removeDialogAriaAttributesLightBox();
        setDialogAriaAttributesLightBox(langCode != null ? Object.assign(ariaAttrs, { lang: langCode }) : ariaAttrs);
    }
    function setDialogAriaAttributesOnInvite(formId) {
        var ariaAttrs = { role: "dialog", "aria-modal": true, "aria-label": getInviteAnnoucement(formId) };
        var langCode = getFormLanguageCode(formId);
        removeDialogAriaAttributesInvite();
        setDialogAriaAttributesInvite(langCode != null ? Object.assign(ariaAttrs, { lang: langCode }) : ariaAttrs);
    }
    function setDialogAriaAttributesOnOops() {
        var ariaAttrs = { role: "alertdialog", "aria-modal": true, "aria-labelledby": "title-no-json-modal", "aria-describedby": "description-no-json-modal" };
        var langCode = getPropertyMessageLanguageCode();
        removeDialogAriaAttributesLightBox();
        setDialogAriaAttributesLightBox(langCode != null ? Object.assign(ariaAttrs, { lang: langCode }) : ariaAttrs);
    }
    function setDialogAriaAttributesLightBox(attributes) {
        MDIGITAL.MODAL_DIALOGS.setDialogAriaAttributes(KAMPYLE_CONSTANT.IFRAME_SETTINGS.LIGHTBOX.CONTAINER_ID_PREFIX, attributes);
    }
    function setDialogAriaAttributesInvite(attributes) {
        MDIGITAL.MODAL_DIALOGS.setDialogAriaAttributes(KAMPYLE_CONSTANT.IFRAME_SETTINGS.INVITATION.CONTAINER_ID, attributes);
    }
    function enforceFocusOnBody() {
        var tempFocusHolder = document.createElement("div");
        KAMPYLE_UTILS.addAttributesOnElement(tempFocusHolder, { tabindex: "-1", "aria-hidden": true });
        document.body.appendChild(tempFocusHolder);
        tempFocusHolder.focus();
        tempFocusHolder.remove();
    }
    function getPropertyMessageLanguageCode() {
        return KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.PROPERTY_MESSAGES) ? MDIGITAL.PROPERTY_MESSAGES.getPropertyMessageLanguageCode() : null;
    }
    function getFormLanguageCode(formId) {
        return KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.LOCALIZED_FORMS) ? MDIGITAL.LOCALIZATION.getFormLanguage(formId) : null;
    }
    function setDialogAriaAttributes(targetId, attributes) {
        var target = document.getElementById(targetId);
        if (target == null) return;
        KAMPYLE_UTILS.addAttributesOnElement(target, attributes);
    }
    function removeDialogAriaAttributesLightBox() {
        removeDialogAriaAttributes(KAMPYLE_CONSTANT.IFRAME_SETTINGS.LIGHTBOX.CONTAINER_ID_PREFIX);
    }
    function removeDialogAriaAttributesInvite() {
        removeDialogAriaAttributes(KAMPYLE_CONSTANT.IFRAME_SETTINGS.INVITATION.CONTAINER_ID);
    }
    function removeDialogAriaAttributes(targetId) {
        var target = document.getElementById(targetId);
        if (target == null) return;
        var attributes = ["role", "aria-modal", "aria-label", "aria-labelledby", "aria-describedby", "lang"];
        for (var key in attributes) {
            KAMPYLE_UTILS.removeAttribute(target, attributes[key]);
        }
    }
    function getFormAnnouncement(formId) {
        var title;
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.FORM_TEMPLATE_DATA_SEPERATION)) {
            title = KAMPYLE_DATA.getMemoryJsonNestedPropertyValue(formId, "settings.formBasicSettings.formAnnouncement", false);
        }
        return title || KAMPYLE_CONSTANT.IFRAME_SETTINGS.IFRAME_TITLE;
    }
    function getInviteAnnoucement(formId) {
        var title;
        if (KAMPYLE_FUNC.checkProvision(KAMPYLE_CONSTANT.PROVISIONS.FORM_TEMPLATE_DATA_SEPERATION)) {
            title = KAMPYLE_DATA.getMemoryJsonNestedPropertyValue(formId, "invitationAnnouncement", true);
        }
        return title || KAMPYLE_CONSTANT.IFRAME_SETTINGS.INVITATION.IFRAME_TITLE;
    }
    function setLocalizedAnnouncementOnForm(formId) {
        var iFrameId = KAMPYLE_DATA.getFormIframeId(formId);
        if (iFrameId == null) return;
        var iFrame = document.getElementById(iFrameId);
        if (iFrame != null) {
            iFrame.title = getFormAnnouncement(formId);
        }
    }
    function setLocalizedAnnouncementOnInvite(formId) {
        var iFrame = document.getElementById(KAMPYLE_CONSTANT.IFRAME_SETTINGS.INVITATION.IFRAME_ID);
        if (iFrame != null) {
            iFrame.title = getInviteAnnoucement(formId);
        }
    }
    return {
        init: init,
        initModalState: initModalState,
        onFormShown: onFormShown,
        onInviteReady: onInviteReady,
        onNoJsonModalShown: onNoJsonModalShown,
        getModalState: getModalState,
        setModalState: setModalState,
        setFocus: setFocus,
        focusOnModal: focusOnModal,
        focusOnOopsCloseButton: focusOnOopsCloseButton,
        trapFocus: trapFocus,
        refocusForm: refocusForm,
        setDialogAriaAttributes: setDialogAriaAttributes,
        setLocalizedAnnouncementOnForm: setLocalizedAnnouncementOnForm,
        setLocalizedAnnouncementOnInvite: setLocalizedAnnouncementOnInvite,
        CURRENT_SHOWN_MODAL_INITIAL_STATE: CURRENT_SHOWN_MODAL_INITIAL_STATE,
    };
})();
window.MDIGITAL = window.MDIGITAL || {};
window.MDIGITAL.DECIBEL = (function () {
    var behaviouralListenerPrefix = "decibel.ks.realtime.behaviours.";
    var scoreListenerPrefix = "decibel.ks.realtime.";
    function init() {
        KAMPYLE_EVENT_DISPATCHER.subscribe("neb_showForm", triggerDecibelEvent);
        document.addEventListener("decibel.ks.realtime", setData);
    }
    function triggerDecibelEvent(eventName, data) {
        var formId = data.formId;
        var formData = KAMPYLE_DATA.getFormData(formId);
        var decibelBehavioural = KAMPYLE_UTILS.getNestedPropertyValue(formData, "onSiteData.decibelBehavioural");
        var decibelScore = KAMPYLE_UTILS.getNestedPropertyValue(formData, "onSiteData.decibelScore");
        if (decibelBehavioural || decibelScore) {
            if (typeof window.decibelInsight === "function") {
                window.decibelInsight("sendTrackedEvent", "Medallia Digital: Real-time activated survey", formId);
            }
        }
    }
    function setData(e) {
        var decibelData = KAMPYLE_UTILS.getNestedPropertyValue(e, "detail.data");
        KAMPYLE_DATA.setMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.DECIBEL_DATA, decibelData);
    }
    function listenToBehaviouralEvent(eventName, delay, callback, formId) {
        var event = behaviouralListenerPrefix + eventName;
        var onBehaviouralEventUpdate = function (e) {
            document.removeEventListener(event, onBehaviouralEventUpdate);
            KAMPYLE_DATA.deleteMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.DOM_EVENT_HANDLERS + "." + "decibelBehavioural");
            var timeoutRef = setTimeout(function () {
                KAMPYLE_DATA.setMemoryData("targetingState.decibelBehavioural", true);
                KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
                    formId: formId,
                    targetingRule: "decibelBehavioural",
                    formTriggerType: KAMPYLE_DATA.getFormTriggerType(formId),
                    targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.BEHAVIORAL_TARGETING,
                    isPassed: true,
                    expected: "decibelBehavioural rule should have been triggered: " + eventName,
                    actual: true,
                });
                callback();
            }, (delay || 0) * 1000);
            KAMPYLE_DATA.setTimeoutHandler("decibelBehavioural", timeoutRef);
        };
        document.addEventListener(event, onBehaviouralEventUpdate);
        KAMPYLE_DATA.setDOMEventHandler("decibelBehavioural", event, onBehaviouralEventUpdate);
    }
    function listenToScoreEvent(eventName, score, condition, callback, formId) {
        var event = scoreListenerPrefix + eventName;
        var onScoreEventUpdate = function (e) {
            var isRuleMet = isScoreValid(e.detail, condition, score);
            if (isRuleMet) {
                KAMPYLE_DATA.setMemoryData("targetingState.decibelScore", true);
                KAMPYLE_EVENT_DISPATCHER.trigger(KAMPYLE_CONSTANT.EVENTS.MDIGITAL_TARGETING_RULE_EVALUATED, {
                    formId: formId,
                    targetingRule: "decibelScore",
                    formTriggerType: KAMPYLE_DATA.getFormTriggerType(formId),
                    targetingPhase: KAMPYLE_CONSTANT.TARGETING_PHASES.BEHAVIORAL_TARGETING,
                    isPassed: isRuleMet,
                    expected: "Decibel score should be " + condition + " " + score,
                    actual: "Decibel current score: " + e.detail + ", Expected score: " + score + ", Event name:" + eventName,
                });
                document.removeEventListener(event, onScoreEventUpdate);
                KAMPYLE_DATA.deleteMemoryData(KAMPYLE_CONSTANT.MEMORY_DATA_FIELDS.DOM_EVENT_HANDLERS + "." + "decibelBehavioural");
                callback();
            }
        };
        document.addEventListener(event, onScoreEventUpdate);
        KAMPYLE_DATA.setDOMEventHandler("decibelBehavioural", event, onScoreEventUpdate);
    }
    function isScoreValid(currentScore, condition, expectedScore) {
        var scoreAsNumber = Number(expectedScore);
        switch (condition) {
            case "smallerThan":
                return currentScore < scoreAsNumber;
            case "equals":
                return currentScore === scoreAsNumber;
            case "greaterThan":
                return currentScore > scoreAsNumber;
            default:
                return false;
        }
    }
    return { init: init, listenToBehaviouralEvent: listenToBehaviouralEvent, listenToScoreEvent: listenToScoreEvent, isScoreValid: isScoreValid };
})();
MDIGITAL.INIT.init();
console.log(location.protocol + "//" + window.location.host);
