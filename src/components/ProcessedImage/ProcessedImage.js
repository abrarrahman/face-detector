import React from 'react';
import './ProcessedImage.css';
const ProcessedImage = ({inputURL,box}) => {
    return inputURL?(
        <div className='flex justify-center'>
            <div style={{maxWidth: "700px"}} className='absolute mv4 w-70'>
                <img width='100%' height='auto' id='inputImage' src={inputURL} alt='from entered link'></img>
                <div className='bounding-box' 
                    style={{
                        top: box.topRow,
                        bottom: box.bottomRow,
                        right: box.rightCol,
                        left: box.leftCol
                    }}
                ></div>
            </div>
        </div>   
    ): <div></div>
}

export default ProcessedImage;