import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';

export default class TorrenList extends LightningElement {
    @wire(getListUi, {
        objectApiName : CONTACT_OBJECT,
        listViewApiName: 'Contact_test_view',
        sortBy: NAME_FIELD,
        pageSize: 20
    })
    listview;

    get contacts() {
        return this.listview.data.records.records;
    }
}