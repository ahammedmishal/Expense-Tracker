import  Realm from 'realm';

class Contact extends Realm.Object {}

Contact.schema = {
    name : "Contact",
    properties: {
        recordID: 'int',
        givenName: 'string',
        familyName: 'string',
        phoneNumber: 'int'
    },
    primaryKey: "recordID",
};

let realm = new Realm ({schema:[Contact], schemaVersion: 4,deleteRealmIfMigrationNeeded: true,});

let getAllContact = () =>{
    return realm.objects("Contact");
}

let addContact = (_recordID, _givenName, _familyName, _phoneNumber) => {
    realm.write(() => {
        const contact  = realm.create("Contact", {
            recordID: _recordID,
            givenName: _givenName,
            familyName: _familyName,
            phoneNumber: _phoneNumber
        });
    })
}


let deleteContact = (_recordID) =>{
    realm.write(() => {
        realm.delete(realm.objectForPrimaryKey("Contact",_recordID))
    })
}


let deleteAllContact = () =>{
    realm.write(() => {
        realm.delete(getAllContact())
    })
}

export default realm;

export {
    getAllContact, addContact, deleteAllContact,deleteContact
}