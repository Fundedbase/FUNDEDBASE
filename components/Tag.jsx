import React from 'react'

function Tag({text}) {
    return (
        <div className="text-center">
            <h3 className="inline-block rounded-lg bg-black text-white dark:bg-white dark:text-black px-3 py-1 text-sm transition-colors duration-300 text-center mx-auto mb-2">{text}</h3>
        </div>
    )
}

export default Tag
