public with sharing class AccountsController {
   
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        try {
            return [select Name from Account  with security_enforced order by Id];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        try {
            return [select LastName from Contact with security_enforced order by Id];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(){
        try {
            return [select Id from Opportunity with security_enforced order by Id];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}