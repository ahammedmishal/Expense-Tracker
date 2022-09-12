import 'react-native-get-random-values'
import  Realm from 'realm';

const { UUID } = Realm.BSON;

class Category extends Realm.Object {}

Category.schema = {
    name : "Category",
    properties: {
        categoryID: 'uuid',
        name: 'string',
        color: 'string',
        icon: 'string',

        expense: 'Expense',
    },
    primaryKey: "categoryID",
};

// Expense schema
class ExpenseSchema extends Realm.Object {}

ExpenseSchema.schema = {
    name: 'Expense',
    properties: {
            expenseID: 'uuid',
            title: 'string',
            description: 'string',
            location: 'string',
            total: 'int',
            status: 'string',
    },
    primaryKey: "expenseID",
};

let realm1 = new Realm ({schema:[Category,ExpenseSchema], schemaVersion: 4,deleteRealmIfMigrationNeeded: true,});

let getAllCategory = () =>{
    return realm1.objects("Category");
}

let getAllExpense = () =>{
    return realm1.objects("Expense");
}

let addCategory = (_name, _color, _icon, _title, _description, _location, _total, _status) => {
    realm1.write(() => {
        const _id = new UUID();
        let obj = {
            expenseID : _id,
            title: _title,
            description: _description,
            location: _location,
            total: _total,
            status: _status
        }
        const category  = realm1.create("Category", {
            categoryID: _id,
            name: _name,
            color: _color,
            icon: _icon,
            expense: obj
        });
    })
}

let addExpense = (_categoryID, _title, _description, _location, _total, _status) => {
    realm1.write(() => {
        let data = getAllCategory(0)[_categoryID];
        const _id = new UUID();
        let obj = {
            expenseID : _id,
            title: _title,
            description: _description,
            location: _location,
            total: _total,
            status: _status
        }
        data.expense = data.expense.push(obj);
    })
}

let updateCategory = (_expenseId, _title, _description, _location, _total, _status) =>{
    realm1.write(() => {
        let data = getAllExpense(0)[_expenseId];
        data.title = _title;
        data.description = _description;
        data.location = _location;
        data.total = _total;
        data.status = _status;
    })
}

let deleteCategory = (_recordID) =>{
    realm1.write(() => {
        realm1.delete(realm1.objectForPrimaryKey("Category",_recordID))
    })
}

let deleteAllCategory = () =>{
    realm1.write(() => {
        realm1.delete(getAllCategory())
    })
}

export default realm1 ;

export {
    getAllCategory, addCategory, deleteAllCategory, deleteCategory, updateCategory, addExpense
}