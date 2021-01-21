import React, {useState} from 'react'
import PropTypes from 'prop-types';

const AddCategory = ( { setCategorieNew } ) => {

    const [cat, setCat] = useState("");

    const addNewCat = ( e ) => {
        setCat( e.target.value )
    }
    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( cat.trim().length > 2){
            setCategorieNew( past => [ cat,...past ]);
            setCat("");        
        }
        
    }

    return (
        <div className="containerAddCat">
           <form onSubmit={ handleSubmit }>     
                <h1 className="card animate__animated animate__zoomInDown animate__delay-2s">Add Category</h1>
                <input 
                        type="text"  
                        placeholder="Escribe aqui la categoria que quieres agregar"
                        value= {cat}
                        onChange={ addNewCat }
                /> 
            </form>
        </div>
    )
}
AddCategory.propTypes = {
    setCategorieNew : PropTypes.func.isRequired
}
export default AddCategory;