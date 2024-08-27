import React from 'react'

export default function Loader() {
    return (
        <div className='container-fluid'>
            <div className='container position-absolute top-50 d-flex justify-content-center align-items-center'>
                <div class="spinner-border text-danger" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>)
}
