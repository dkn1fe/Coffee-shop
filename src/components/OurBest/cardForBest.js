
import './cardForBest.scss'

const cardForBest = ({img,title,price}) => {
    return (
        <div className='card'>
            <div className='card-container'>
                <div className='card-img'>
                    <img src={img}></img>
                </div>
                <div className='card-title'>
                    <p>{title}</p>
                </div>
                <div className='card-price'>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    )
}

export default cardForBest;