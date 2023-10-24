import React, { useState } from 'react'

const Form = () => {
    const [newItem, setNewItem] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newItem);
    };

  return (   
        <form onSubmit={handleSubmit}>
            <h4>grocery bud</h4>
            <div className="form-control">
                <input type="text" className="form-input" value={newItem} onChange={(e) => {setNewItem(e.target.value)}}/>
                <button className="btn" type="submit">add item</button>
            </div>   
        </form>    
  )
}

export default Form