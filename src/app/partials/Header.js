import React from 'react'

import { HeaderNav } from './../components/HeaderNav'

export const Header = () => {
    return (
        <nav className="light-blue lighten-1" role="navigation">
            <div className="container">
                <div className="nav-wrapper container"><a id="logo-container" href="/#" className="brand-logo">Bit Blog</a>
                    <HeaderNav />
                </div>
            </div>
        </nav>
    )
}