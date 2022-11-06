import React, { useState, useEffect } from 'react';
import CrudForm from './CrudForm';
import { CrudTable } from './CrudTable';

const initialDb = [
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegaso"
    },
    {
        id: 2,
        name: "Fernan",
        constellation: "Link"
    },
    {
        id: 3,
        name: "Juan",
        constellation: "porto"
    },
    {
        id: 4,
        name: "Jose",
        constellation: "jet"
    },
    {
        id: 5,
        name: "maria",
        constellation: "sun"
    },
    {
        id: 6,
        name: "Sn",
        constellation: "Polo"
    },
]

const CrudApp = () => {
    
    const [db, setDb] = useState(initialDb);

    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        setDb([...db, data]);
    }

    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);
    }

    const deleteData = (id) => {
        let isDelete = window.confirm('Estas seguro de eliminar el registro');

        if(isDelete){
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
        } else {
            return;
        }
    }

    return(
        <div>
            <h2>CRUD App</h2>
            <CrudForm 
                createData={createData} 
                updateData={updateData} 
                dataToEdit={dataToEdit} 
                setDataToEdit={setDataToEdit}
            />
            <CrudTable 
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}/>
        </div>
    )
}

export default CrudApp;