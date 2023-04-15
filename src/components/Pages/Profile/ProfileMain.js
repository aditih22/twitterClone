import './ProfileMains.css'

function ProfileMain (){
    return (
       <div className="profile-main">
        <div className="cover">
            <a href='#'><img className="profile_img" src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg" alt='newImg'/></a>

        </div>
        <div className='follow-btn-contaainer fw-bold float-end' >
            <button className='follow-btn'>Follow</button>
        </div>
       </div>
    )
   }
   
   export default ProfileMain;