import Feed from '../Feed/Feed';
import HomeOptions from '../HomeOptions/HomeOptions';
import LoginOptions from '../LoginOptions/LoginOptions';
import './home.css'

function Home(){
    return(
        <div className="mainDiv">
            <div className="leftContainer"><HomeOptions/></div>
            <div className="centerContainer"><Feed/></div>
            <div className="rightContainer"><LoginOptions/></div>
            
        </div>

    )
}

export default Home;