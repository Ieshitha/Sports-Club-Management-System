import React from 'react';

function Loading() {
    return (
        <div className="loading"> <div class="spinner-grow" style={{ "width": "3rem", "height": "3rem" }} role="status">
            <span class="sr-only">Loading...</span>
        </div>
        </div>
    )
}

export default Loading
