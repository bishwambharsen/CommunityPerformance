({
    getAccounts: function(cmp, evt) {
        const action = cmp.get("c.getAccounts");

        action.setCallback(this, (response) => {
            const state = response.getState();

            if (state === "SUCCESS") {
                const accounts = response.getReturnValue();
                console.log("Accounts retrieved: ", JSON.stringify(accounts));
                cmp.set("v.accounts", accounts);
            } else if (state === "ERROR") {
                console.error(JSON.stringify(response.getError()));
            }
        });
        action.setBackground();
        $A.enqueueAction(action);
    },

    getContacts: function(cmp, evt) {
        const action = cmp.get("c.getContacts");

        action.setCallback(this, (resp) => {
            const state = resp.getState();

            if (state === "SUCCESS") {
                const contacts = resp.getReturnValue();
                console.log("Contacts retrieved: ", JSON.stringify(contacts));
                cmp.set("v.contacts", contacts);
            } else if (state === "ERROR") {
                console.error(JSON.stringify(resp.getError()));
            }
        });
        action.setBackground();
        $A.enqueueAction(action);
    },

    getOpportunities: function(cmp, evt) {
        const action = cmp.get("c.getOpportunities");

        action.setCallback(this, (resp) => {
            const state = resp.getState();
            if (state === "SUCCESS") {
                const oppties = resp.getReturnValue();
                console.log(JSON.stringify(oppties));
            }
        });
        action.setBackground();
        $A.enqueueAction(action);
    }
});