
import HomeOptions from '../../HomeOptions/HomeOptions';
import LoginOptions from '../../LoginOptions/LoginOptions';
import '../../../components/home/home.css'
import ProfileMain from './ProfileMain';

function Profile(){
    return(
        <div className="mainDiv">
            <div className="leftContainer"><HomeOptions/></div>
            <div className="centerContainer"> <ProfileMain/>  </div>
            <div className="rightContainer"><LoginOptions/></div>
            
        </div>

    )
}

export default Profile;