import React from 'react';
import './Cover.css'

const Cover = () => {
    return (
        <div className='cover d-flex justify-content-center align-items-center'>
            <div>
            <div>
                <h2>Best Food Waiting For Yor Belly!</h2>
            </div>
            <div>
                <form className="col-md-8 m-auto py-2">
                    <div className="input-group mb-5">
                        <input type="text" className="form-control" placeholder="Search for Grocery..."/>
                        <div className="input-group-append">
                            <button type="button" className="btn btn-success">Search</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Cover;