({
    doInit: function(cmp, evt, helper) {
        helper.getAccounts(cmp, evt);
        helper.getContacts(cmp, evt);
        helper.getOpportunities(cmp, evt);
    }
});