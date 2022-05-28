export const DASHBOARD_URL = "https://calllogger.saarthi.ai/testing";
export const AVAIL = "avail";
// export const ACCOUNT_NAME= accountName;
export const FILTER_URL = "https://calllogger.saarthi.ai/filter?username=";

// /api/accounts/user/v1/updateResetPassword
// Old - https://connectors.saarthi.ai/conversation
// New - https://conversationlogger.saarthi.ai/accounts

// Old - https://connectors.saarthi.ai/messages
// New - https://conversationlogger.saarthi.ai/conversations

export const SERVER_URL = "https://conversationlogger.saarthi.ai/accounts";
export const SERVER_URL2 =
  "https://conversationlogger.saarthi.ai/conversations";
export const PROJECT_URL = "https://chathistory.saarthi.ai";

// export const CLIENTNAME_URL = "https://conversationlogger.saarthi.ai/accounts/api"

// /api/accounts/user/v1/updateResetPassword
//'http://connectors.saarthi.ai/conversation/api/accounts/user/v1/user?name=check&email=check@saarthi.ai'
///api/conversations/feedback/v1/create
//http://connectors.saarthi.ai/conversation/api/accounts/user/v1/all?page=1&limit=10'
//http://connectors.saarthi.ai/conversation/api/accounts/user/v1/user?name=jai
///api/conversations/conversation/v1/all?accountName=Second Account&language=English
export const ONBOARDING_URL = {
  SIGN_IN: "/api/accounts/v1/login",
  UPDATE_USER_DATA: "/api/accounts/user/v1/update",
  UPDATE_RESET_PASSWORD: "/api/accounts/user/v1/updateResetPassword",
  SIGN_UP: "/api/accounts/user/v1/register",
  All_USERS: "/api/accounts/user/v1/all?",
  SEARCH_USERS: "/api/accounts/user/v1/user?",
  REPROT_BUG: "/api/accounts/reportBug/v1/create",
  REQUEST_FEATURE: "/api/accounts/featureRequest/v1/create",
};

export const EDITING_URL = {
  UPDATE_FEEDBACK: "/api/conversations/feedback/v1/create",
  FEEDBACK_HISTORY: "/api/conversations/feedback/v1/all",
};

///api/conversations/message/v1/all?conversationId=612d370c40fa867532e30c02
export const CONVERSATION_URL = {
  FETCH_SESSION_ID: "/api/conversations/conversation/v1/all?",
  MESSAGE_URL: "/api/conversations/message/v1/all?",
  SUMMARY_URL: "/api/conversations/summary/v1/all?",
};

//https://connectors.saarthi.ai/conversation/api/accounts/v1/resetPassword
// curl --location --request GET 'https://connectors.saarthi.ai/conversation/api/accounts/user/v1/fetchUserDetails?email=max@MannapuramTesting.com'
export const RESETLINK_URL = {
  GET_USER_ID: "/api/accounts/user/v1/fetchUserDetails?",
  PASSWORD_RESET_LINK: "/api/accounts/v1/resetPassword",
  // RESET_PASSWORD_UI_URL:""
};

export const CLIENTNAME_URL =
  "https://conversationlogger.saarthi.ai/accounts/api/accounts/account/v1/all";
//export const SAVE_FETCH_RECORDS_URL = 'https://connectors.saarthi.ai/api/connectors/salesforce/v1/saveFetchMapping';
//export const SAVE_PUSH_RECORDS_URL = 'https://connectors.saarthi.ai/api/connectors/salesforce/v1/saveFetchMapping';
//export const RUN_SAVE_DATA_URL ='http://connectors.saarthi.ai/api/connectors/salesforce/v1/fetchRecords'

export const TABLESALESFORCE_URL =
  "https://connectors.saarthi.ai/api/connectors/job/v1/job/all";

export const SALESFORCE_SERVER_URL = "https://connectors.saarthi.ai/api";
// salesforce Api
export const SALESFORCE_URL = {
  SFOBJECT_URL: "/connectors/salesforce/v1/fetchObjects?",
  SAARTHIOBJECT_URL: "/connectors/v1/fetchObjects?",
  SFOBJECT_FIELD_URL: "/connectors/salesforce/v1/fetchObjectFields?",
  SAARTHIOBJECT_FIELD_URL: "/connectors/v1/fetchObjectFields?",
  SAVE_FETCH_RECORDS_URL: "/connectors/salesforce/v1/saveFetchMapping",
  SAVE_PUSH_RECORDS_URL: "/connectors/salesforce/v1/savePushMapping",
  RUN_SAVE_DATA_URL: "//connectors/salesforce/v1/fetchRecords",
};

// export const SFOBJECT_URL =  'http://connectors.saarthi.ai/api/connectors/salesforce/v1/fetchObjects?jobName=test';
// export const SAARTHIOBJECT_URL = 'https://connectors.saarthi.ai/api/connectors/v1/fetchObjects?jobName=test';

// export const SFOBJECT_FIELD_URL =  'https://connectors.saarthi.ai/api/connectors/salesforce/v1/fetchObjectFields?objectName=CustomerInfo__c&jobName=test';
// export const SAARTHIOBJECT_FIELD_URL = 'https://connectors.saarthi.ai/api/connectors/v1/fetchObjectFields?objectName=object1&jobName=test';

//Payment Info API Razorpay
export const CONNECTOR_PAYMENT_INFO =
  "https://connectors.saarthi.ai/api/tools/v1/razorPay/";
export const PAYMENT_INFO_URL = {
  PAYMENT_INFO_FETCH: "fetchPayments", //POST API
  SEND_PAYMENT_INFO_EMAIL: "sendEmail", //POST API
  PAYMENT_INFO_STATUS: "fetchStatus?", //GET API
  PAYMENT_INFO_DOWNLOAD: "downloadPayments", //POST API
};

export const ACCOUNT_DETAILS_URL = {
  CREATE_ACCOUNT_URL:
    "https://conversationlogger.saarthi.ai/accounts/api/accounts/account/v1/create", //POST API
};
export const PROJECT_DETAILS_URL = {
  CREATE_PROJECT_URL:
    "https://conversationlogger.saarthi.ai/accounts/api/accounts/project/v1/create", //POST API
};
export const ASSIGN_PROJECT = {
  GET_ASSIGNED_PROJECTS:"https://conversationlogger.saarthi.ai/accounts/api/accounts/user/v1/fetchUserDetails?name=",
  GET_ASSIGNED_PROJECTS_CLIENTWISE:"https://conversationlogger.saarthi.ai/accounts/api/accounts/project/v1/getProjectsByAccountName?accountName=",
  GET_ALL_LANGUAGE: "https://conversationlogger.saarthi.ai/accounts/api/accounts/language/v1/all"
};

export const MESSAGE_LIST_URL = {
  GET_MESSAGE_LIST:"https://conversationlogger.saarthi.ai/conversations/api/conversations/message/v1/allUser?conversationId=",
  UPDATE_STATUS_TAGGER: "https://conversationlogger.saarthi.ai/conversations/api/conversations/conversation/v1/update"
};
export const SELECT_ALLDOMAIN_URL = {
  GET_ALLDOMAIN_URL:
    "https://conversationlogger.saarthi.ai/accounts/api/accounts/domain/v1/all", // GET API
};
export const GETALLACCOUNT_BYDOMAIN_URL = {
  GETALL_ACCOUNT_BYDOMAIN:
    "https://conversationlogger.saarthi.ai/accounts/api/accounts/account/v1/all/projectCount?domain=",

  GET_ALL_PROJECTS_BY_ACCOUNT:
    "https://conversationlogger.saarthi.ai/accounts/api/accounts/project/v1/getProjectsByAccountName?accountName=",
  GETALL_ACCOUNT_BYACCOUNTNAME:
    "https://conversationlogger.saarthi.ai/accounts/api/accounts/account/v1/all?accountName=",
};

export const ADD_USER_PROJECT_URL = {
  ADD_USER_PROJECT_API:
    "https://conversationlogger.saarthi.ai/accounts/api/accounts/project/v1/adduser?projectId=", //POST API
};

export const FETCH_ALL_DATATABLE_URL ={
   FETCH_ALL_USER_API : 'https://conversationlogger.saarthi.ai/accounts/api/accounts/user/v1/all?' ,//GET API
   FETCH_TABLEDATA_BY_PROJECTNAME :"https://conversationlogger.saarthi.ai/accounts/api/accounts/project/v1/getbyname?name=" //GET API
}
export const GET_ALL_CONVERSATION_URL = {
    ALL_CONVERSATION_URL : "https://conversationlogger.saarthi.ai/conversations/api/conversations/conversation/v1/getcount?accountName="  //GET API
}

export const CONVERSATIONS_URL={
  GET_ALL_CONVERSATIONS:"https://conversationlogger.saarthi.ai/conversations/api/conversations/conversation/v1/getConversationByProjectAndUser",
  UPDATE_CONVERSATION:"https://conversationlogger.saarthi.ai/conversations/api/conversations/message/v1/update"
}

export const ASSIGN_CONVERSATION_URL = {
  ASSIGN_CONVERSATION :'https://conversationlogger.saarthi.ai/conversations/api/conversations/conversation/v1/assignconversation'
}

export const USERLIST_CREATE_URL = {
  CREATE_USER: 'https://conversationlogger.saarthi.ai/accounts/api/accounts/user/v1/register' 
}
export const SEARCH_URL_ACCOUNT ={
  SEARCH_ALL_API:"https://conversationlogger.saarthi.ai/accounts/api/accounts/user/v1/user/all",
  SEARCH_API :"https://conversationlogger.saarthi.ai/accounts/api/accounts/user/v1/user?accountName="
}