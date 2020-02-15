import React from 'react';

const ImageLinkForm = ({inputChanged, onSubmitImage}) => {
    return (
        <div className='flex items-center flex-column'>
            <p className='f3 fw4 w-70'>This machine will detect faces in your pictures. Give it a try!</p>
            <div className='pa4 br3 shadow-5 w-70 flex seigaha'>
                <input 
                    className='f4 pa2 w-70' 
                    type='search' 
                    onChange={inputChanged} 
                    placeholder='Paste your image URL here'
                    ></input>
                <input 
                    className='w-30 grow f4 gradient pointer' 
                    type='submit' 
                    onClick={onSubmitImage}
                    value='Scan'
                ></input>
            </div>
        </div>
        
    );
}

export default ImageLinkForm;