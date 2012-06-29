Ext.define('LitApp.view.Main', {
    extend: 'Ext.TabPanel',
    requires: [
        'LitApp.view.Home',
        'LitApp.view.Test',
        'LitApp.view.Contact'
    ],
    
    config: {
        tabBar: {
            docked: 'bottom'
        },
        defaults: {
            styleHtmlContent: true,
        },

        items: [
            { xtype: 'homecard' },
            { xtype: 'testcard' },
            { xtype: 'contactcard' }
        ]
    }

});