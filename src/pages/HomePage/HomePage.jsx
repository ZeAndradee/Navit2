import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./HomePage.css";
import { assets } from "../../assets/assets";
import { UserContext } from "../../services/UserContext";
import { icons } from "../../assets/Icons/icons";
import Feed from "../../components/Feed/Feed";
import FriendsMatch from "../../components/Friends/FriendsMatch/FriendsMatch";
import OldGames from "../../components/User/OldGames";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const [userimage, setUserImage] = useState("");

  useEffect(() => {
    if (user?.userimage) {
      setUserImage(user?.userimage);
    } else {
      setUserImage(assets.userDefault);
    }
  }, [user]);

  return (
    <div className="home-page">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="feed-container">
        <div className="feed">
          <Feed user={user} />
        </div>
      </div>
      <div className="side-container">
        <div className="logo">
          <svg
            width="351"
            height="41"
            viewBox="0 0 351 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M323.042 38.3582L326.395 35.0048C326.668 34.7112 327.025 34.51 327.417 34.4294C327.809 34.3487 328.217 34.3926 328.583 34.5549C330.115 35.268 331.781 35.6445 333.47 35.6591C333.538 35.6686 333.607 35.6686 333.675 35.6591C336.122 35.6661 338.509 34.9083 340.504 33.4916C344.331 30.7538 347.433 27.1255 349.542 22.9201C350.848 20.2525 351.292 17.2448 350.812 14.3137C350.332 11.3827 348.952 8.67357 346.864 6.56181L345.494 5.19181C343.374 3.08135 340.646 1.68802 337.694 1.20757C334.741 0.727115 331.713 1.18369 329.033 2.51314L328.685 2.71762C327.553 1.62639 326.046 1.01153 324.473 1C323.388 1.00812 322.325 1.30387 321.391 1.85709C320.458 2.41031 319.688 3.2012 319.16 4.14909C318.632 5.09698 318.365 6.16796 318.386 7.25278C318.407 8.3376 318.715 9.39745 319.279 10.3242C318.993 10.6923 318.686 11.0194 318.421 11.3875C317.882 12.1615 317.443 12.9995 317.112 13.8821V14.0662C316.969 14.4342 316.846 14.8227 316.723 15.2317V15.5384C316.56 16.1748 316.457 16.8252 316.417 17.481V18.7487C316.417 19.1781 316.417 19.5871 316.539 20.0165V20.3641C316.712 21.3695 317.022 22.3464 317.46 23.2677C317.607 23.6348 317.646 24.037 317.569 24.4253C317.493 24.8137 317.306 25.1716 317.03 25.4556L314.045 28.441C312.745 29.7363 312.01 31.493 312 33.328C312.017 34.8673 312.641 36.3375 313.738 37.4176L314.515 38.1946C315.638 39.3225 317.154 39.97 318.745 40.0006C320.336 40.0311 321.877 39.4422 323.042 38.3582ZM322.388 7.07301C322.388 6.66859 322.507 6.27325 322.732 5.93699C322.957 5.60072 323.276 5.33864 323.65 5.18388C324.023 5.02911 324.435 4.98862 324.831 5.06752C325.228 5.14641 325.592 5.34116 325.878 5.62713C326.164 5.9131 326.359 6.27744 326.438 6.67409C326.517 7.07074 326.476 7.48188 326.321 7.85551C326.167 8.22915 325.905 8.5485 325.568 8.77318C325.232 8.99787 324.837 9.11779 324.432 9.11779C323.89 9.11779 323.37 8.90236 322.986 8.51889C322.603 8.13542 322.388 7.61532 322.388 7.07301ZM322.101 13.4118L322.51 12.8802C323.129 13.0931 323.778 13.2036 324.432 13.2074C326.059 13.2074 327.62 12.5611 328.77 11.4107C329.92 10.2602 330.567 8.69994 330.567 7.07301V6.29599L330.894 6.11196C332.807 5.16089 334.969 4.83286 337.078 5.17393C339.187 5.515 341.136 6.50805 342.651 8.01361L344.021 9.38362C345.492 10.9185 346.448 12.8739 346.756 14.9776C347.064 17.0813 346.709 19.2286 345.739 21.1207C344.021 24.5555 341.521 27.5392 338.439 29.8315L322.101 13.4118ZM317.255 35.4546L316.478 34.698C315.619 33.8392 315.783 32.5101 316.887 31.4059L319.852 28.4206C320.725 27.5414 321.312 26.4183 321.535 25.1992C321.757 23.9801 321.606 22.7221 321.099 21.591C320.783 20.9463 320.57 20.2565 320.465 19.5462C320.391 19.1554 320.357 18.758 320.363 18.3602V17.4605L334.411 31.5082C333.01 31.6513 331.596 31.411 330.321 30.813C329.19 30.3067 327.932 30.1548 326.713 30.3775C325.494 30.6002 324.371 31.1868 323.492 32.0603L320.118 35.4137C319.741 35.7939 319.23 36.0111 318.695 36.0188C318.16 36.0264 317.643 35.8239 317.255 35.4546Z"
              fill="#5FA2DD"
            />
            <path
              d="M37.455 1.06L35.75 10.74H25.41L20.24 40H8.03L13.2 10.74H2.97L4.675 1.06H37.455ZM52.3716 10.74L51.5466 15.58H63.6466L61.9966 24.765H49.8966L48.9066 30.265H62.6566L60.9516 40H34.9916L41.8666 1.06H67.8266L66.1216 10.74H52.3716ZM103.998 40H91.7881L82.3281 20.42L78.8631 40H66.6531L73.5281 1.06H85.7381L95.1431 20.97L98.6631 1.06H110.873L103.998 40ZM147.959 40H135.749L126.289 20.42L122.824 40H110.614L117.489 1.06H129.699L139.104 20.97L142.624 1.06H154.834L147.959 40ZM173.661 1.06L166.786 40H154.576L161.451 1.06H173.661ZM190.12 40.385C185.354 40.385 181.54 39.4317 178.68 37.525C175.857 35.6183 174.445 32.8317 174.445 29.165C174.445 28.7983 174.482 28.2483 174.555 27.515H187.535C187.425 28.6517 187.59 29.495 188.03 30.045C188.507 30.595 189.277 30.87 190.34 30.87C191 30.87 191.55 30.705 191.99 30.375C192.43 30.045 192.65 29.5683 192.65 28.945C192.65 28.065 192.21 27.3317 191.33 26.745C190.487 26.1583 189.112 25.4617 187.205 24.655C185.115 23.775 183.392 22.9317 182.035 22.125C180.715 21.3183 179.56 20.2183 178.57 18.825C177.58 17.4317 177.085 15.69 177.085 13.6C177.085 10.85 177.764 8.485 179.12 6.505C180.514 4.48833 182.439 2.96666 184.895 1.94C187.352 0.913332 190.157 0.399998 193.31 0.399998C196.134 0.399998 198.645 0.839998 200.845 1.72C203.082 2.6 204.824 3.88333 206.07 5.57C207.354 7.22 207.995 9.18166 207.995 11.455C207.995 11.7483 207.959 12.2617 207.885 12.995H194.74C194.814 12.555 194.85 12.2617 194.85 12.115C194.85 11.4183 194.649 10.8867 194.245 10.52C193.842 10.1167 193.292 9.915 192.595 9.915C191.972 9.915 191.459 10.0983 191.055 10.465C190.652 10.8317 190.45 11.3083 190.45 11.895C190.45 12.7017 190.872 13.4167 191.715 14.04C192.559 14.6267 193.897 15.36 195.73 16.24C197.82 17.23 199.544 18.165 200.9 19.045C202.294 19.925 203.485 21.0983 204.475 22.565C205.465 23.995 205.96 25.755 205.96 27.845C205.96 30.2283 205.319 32.3733 204.035 34.28C202.789 36.1867 200.974 37.69 198.59 38.79C196.207 39.8533 193.384 40.385 190.12 40.385ZM215.783 40.44C213.877 40.44 212.373 39.9817 211.273 39.065C210.21 38.1483 209.678 36.9567 209.678 35.49C209.678 34.2067 210.027 33.015 210.723 31.915C211.457 30.815 212.447 29.9533 213.693 29.33C214.977 28.67 216.388 28.34 217.928 28.34C219.798 28.34 221.265 28.8167 222.328 29.77C223.392 30.6867 223.923 31.8783 223.923 33.345C223.923 34.6283 223.575 35.82 222.878 36.92C222.182 37.9833 221.21 38.845 219.963 39.505C218.717 40.1283 217.323 40.44 215.783 40.44ZM242.312 30.76H254.082L252.432 40H228.452L235.327 1.06H247.537L242.312 30.76ZM301.649 1.06L282.894 28.175L280.804 40H268.594L270.684 28.175L261.499 1.06H275.469L279.264 14.865L287.899 1.06H301.649Z"
              fill="#3694E7"
            />
          </svg>
        </div>
        <div className="friends-games">
          <FriendsMatch />
        </div>
        <div className="old-games">
          <OldGames />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
