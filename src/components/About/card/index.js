import Loader from 'react-loaders'
import './index.scss'

const Card =() =>{
    return (
        <>
            <div className="container card">
                <div className="card-para">
                    hello world
                </div>
                <Loader type="pacman" />
            </div>
        </>
    )
}

export default Card