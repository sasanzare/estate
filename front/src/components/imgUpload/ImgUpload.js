import React, { useState } from 'react';
import './ImgUpload.css';

const ImgUpload = () => {
	const [ selectedFiles, setSelectedFiles ] = useState([]);
	const handleImageChange = (e) => {
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file)
			);
		}
	};

	const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <div className='grid-item'><img className='w-100 shadow-es rounded' height={135} src={photo} alt="" key={photo} /></div>;
		});
	};

	return (
            <div className="ImgUpload col-lg-5 col-md-6 col-sm-9 col-12 mb-3 mx-auto shadow-es rounded">
                    <input className='d-none' type="file" id="file" multiple onChange={handleImageChange} />
                    <label htmlFor="file" className="d-flex justify-content-between align-items-center ">
                        <span className="material-icons h6 add fw-bold m-0">افزودن تصاویر</span>
                        <span className='h2 text-es fw-bold m-0'>+</span>
                    </label>
                    <div className="row">
                        <div className='col-12 grid-container p-0'>
                            {renderPhotos(selectedFiles)}
                        </div>
                    </div>
            </div>
	);
};

export default ImgUpload;