import axios from 'axios';
import { useEffect, useState } from "react";
import './App.css';
import { iconList, nameList } from './assets/iconList';
import Button from './components/Button';
import Icons from "./components/Icons";
import InfoSection from "./components/InfoSection";
import Loading from "./components/Loading";
import Title from "./components/Title";

const App = () => {
  const [userData, setUserData] = useState([]);  //gelen datayı buraya alırız. 
  const [loading, setLoading] = useState(false);  // datayı fetch ederken loading 
  const [activeUser, setActiveUser] = useState(false);
  const [activeLink, setActiveLink] = useState(0);


  function fetchData() {   //veriyi internetten çek
    setActiveLink(0);
    setLoading(true);
    axios.get('https://randomuser.me/api/')
      .then((response) => {
        setUserData(response.data.results);
      }).catch((error) => {
        console.log(error);
        setLoading(true);
      }).finally(() => {
        setLoading(false);
        setActiveUser(true);
      })
  }

  useEffect(() => {   //uygulama ilk açıldığında datayı çeker
    fetchData()
  }, [])

  const onClickHandler = () => {
    fetchData()   //düğmeye bastığında datayı çeker
  }

  const activeLinkHandler = (index) => {  //icon un index numarasına göre icon ve yazıyı değiştirir
    setActiveLink(index);
  }

  return (
    <div className="App">
      <Title />
      <Button isActive={activeUser} clicked={onClickHandler} title="Get another user" />
      {loading ? ( //ternary    situation ? true : false
        <Loading />
      ) : (
        <div className="app_user">
          {userData.map((user) => {
            return (
              <>
                <img src={user.picture.large} alt="#" />
                <InfoSection user={user} activeLink={activeLink} />
                <div className="app_icons">
                  {iconList.map((icon, index) =>
                    <Icons
                      icon={icon}
                      index={index}
                      activeLink={activeLink}
                      activeLinkHandler={activeLinkHandler}
                    />
                  )}
                </div>
              </>
            )
          })}
        </div>
      )}
    </div>
  );
}

export default App;
