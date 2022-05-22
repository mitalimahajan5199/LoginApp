import React from 'react';
import '../Styles/LoginPage.css';
import '../Styles/SignUp.css';

function Dashboard() {
    const User = sessionStorage.getItem('user');
  return (
    <div className='WelcomeLine'><h2>Welcome {User} !!!</h2></div>
  );
}

export default Dashboard;
