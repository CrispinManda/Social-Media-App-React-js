import './Main.scss';
import Profile from '../pages/Profile';
import RightBar from './RightBar';
import SideBar from './SideBar';
import { Routes, Route } from 'react-router-dom';
import GroupsPage from '../pages/GroupsPage';
import Friends from '../pages/Friends';
import Timeline from '../pages/Timeline';
import Videos from '../pages/Videos';
import Photos from '../pages/Photos';
import Events from '../pages/Events';
// import Login from '../pages/Login';




const Main = () => {
  return (
    <div className="main">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="main-content">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/timeline' element={<Timeline />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/groups' element={<GroupsPage />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/events' element={<Events />} />
        </Routes>



      </div>
      <div className="rightbar">
        <RightBar />
      </div>
    </div>
  )
};

export default Main;