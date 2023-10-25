import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
    const [newItemName, setNewItemName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if(!newItemName) {
                toast.error('please input item')};
                addItem(newItemName);
                toast.success('item added');
                setNewItemName('');
        } catch (error) {
            toast.error(error.message)
        }
        
    };

  return (   
        <form onSubmit={handleSubmit}>
            <h4>grocery bud</h4>
            <div className="form-control">
                <input type="text" className="form-input" value={newItemName} onChange={(e) => {setNewItemName(e.target.value)}}/>
                <button className="btn" type="submit">add item</button>
            </div>   
        </form>    
  )
}

export default Form