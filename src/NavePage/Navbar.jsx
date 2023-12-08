import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Part 4 - here i create the Navbar which have 3 section create below
const Navbar = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${input}`);
    }
    return (
        <>
            <div className="nav">
                {/* <--------------------This is a left Section of Navbar----------------> */}
                <div className="left">
                    <Link to='/' className='link'><h2>Food Recipe</h2>
                    </Link>
                </div>

                {/* <--------------------This is a Search Section of Navbar----------------> */}
                <div className="search">
                    <form onSubmit={handleSubmit}>
                        <input type="text" onChange={(e) => setInput(e.target.value)} />
                    </form>
                </div>

                {/* <--------------------This is a Right Section of Navbar----------------> */}
                <div className="right">
                    <Link to={`/category/indian`} className="link">
                        <div>Indian</div>
                    </Link>
                    <Link to={`/category/american`} className="link">
                        <div>American</div>
                    </Link>
                    <Link to={`/category/british`} className="link" >
                        <div>British</div>
                    </Link>
                    <Link to={`/category/chinese`} className="link">
                        <div>Chinese</div>
                    </Link>
                    <Link to={`/category/thai`} className="link">
                        <div>Thai</div>
                    </Link>


                </div>
            </div>
        </>
    )
}

export default Navbar