import './Trending.css'

function Trending(props) {
    return (
        <div className='trendingMain'>
            <p className="headerSmall">{props.data.header}</p>
            <p className="text">{props.data.text}</p>
            <p className="heaerSmall">{props.data.tweetCount}</p>
        </div>
    )
}

export default Trending;