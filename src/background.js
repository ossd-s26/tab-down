const RULE_ID = 1;

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [RULE_ID],
  addRules: [
    {
      id: RULE_ID,
      priority: 1,
      action: {
        type: "modifyHeaders",
        responseHeaders: [
          { header: "X-Frame-Options", operation: "remove" },
          { header: "content-security-policy", operation: "remove" }
        ]
      },
      condition: {
        urlFilter: "*",
        resourceTypes: ["sub_frame"]
      }
    }
  ]
});