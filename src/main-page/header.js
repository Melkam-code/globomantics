import logo from './main-page-logo.png';

import React from 'react'

export default function header({ subtitle }) {
    return (
        <div>
            <header className="row">
                <div className="col-md-5">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className="col-md-7 mt-5 subtitle">
                    {subtitle}
                </div>
            </header>
        </div>
    )
}
