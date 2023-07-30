import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideBarCard from "./SideBarCard";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-1/2 p-3 sticky left-0 top-[9.25rem] h-full bg-white">
      <ul>
        <li className="hover:bg-gray-100 cursor-pointer py-2 rounded-lg">
          <Link to="/" className="flex">
            <img
              className="h-6 w-6 mr-8 ml-2"
              alt="home"
              src="https://cdn-icons-png.flaticon.com/512/60/60817.png"
            />
            Home
          </Link>
        </li>
        <SideBarCard
          alt={"shorts"}
          src={
            "https://pixlok.com/wp-content/uploads/2021/12/Youtube_shorts_icon-png-sdfj3.jpg"
          }
          searchQuery={"Shorts"}
        />
        <SideBarCard
          alt={"subscription"}
          src={
            "https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png"
          }
          searchQuery={"Subscriptions"}
        />
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <SideBarCard
          alt={"t-series"}
          src={
            "https://pixlok.com/wp-content/uploads/2021/04/T-Series-PNG-Logo-768x768.jpg"
          }
          searchQuery={"T-Series"}
        />
        <SideBarCard
          alt={"apnaclg"}
          src={
            "https://media.licdn.com/dms/image/C4E0BAQHD0TZGPKh9RA/company-logo_200_200/0/1621929425964?e=2147483647&v=beta&t=H_laTw0I1CrvQE8CJ11J_-YbNVYas0e71J5jnc4h69c"
          }
          searchQuery={"Apna College"}
        />
        <SideBarCard
          alt={"goldmines"}
          src={
            "https://revealthat.com/wp-content/uploads/2022/09/goldmines.jpg"
          }
          searchQuery={"Goldmines"}
        />
        <SideBarCard
          alt={"ted"}
          src={
            "https://w7.pngwing.com/pngs/438/331/png-transparent-ted-app-store-iphone-iphone-electronics-text-rectangle.png"
          }
          searchQuery={"Ted Talk"}
        />
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <SideBarCard
          alt={"shopping"}
          src={
            "https://png.pngtree.com/png-clipart/20190920/original/pngtree-shopping-cart-convenient-icon-png-image_4637407.jpg"
          }
          searchQuery={"Shoppings"}
        />
        <SideBarCard
          alt={"music"}
          src={
            "https://p7.hiclipart.com/preview/69/982/493/itunes-computer-icons-logo-itunes-png-thumbnail.jpg"
          }
          searchQuery={"Music"}
        />
        <SideBarCard
          alt={"movies"}
          src={
            "https://icon2.cleanpng.com/20180422/izw/kisspng-photographic-film-movie-icons-cinema-clapperboard-5adc6cafce2c30.0157511615243951838445.jpg"
          }
          searchQuery={"Movies"}
        />
        <SideBarCard
          alt={"sports"}
          src={
            "https://www.freepnglogos.com/uploads/sport-png/sport-run-for-fun-south-cambs-district-council-24.png"
          }
          searchQuery={"Sports"}
        />
        <SideBarCard
          alt={"travelling"}
          src={
            "https://www.freeiconspng.com/thumbs/travel-icon/travel-guide-icon-map-ticket-travel-icon-17.png"
          }
          searchQuery={"Travelling"}
        />
        <SideBarCard
          alt={"learning"}
          src={
            "https://www.vhv.rs/dpng/d/110-1101519_learning-clipart-icon-clipart-learning-png-transparent-png.png"
          }
          searchQuery={"Learning"}
        />
        <SideBarCard
          alt={"news"}
          src={
            "https://banner2.cleanpng.com/20190914/tca/transparent-market-icon-news-icon-newspaper-icon-5d7ce8e6009aa0.6164315815684671740025.jpg"
          }
          searchQuery={"News"}
        />
        <SideBarCard
          alt={"gaming"}
          src={
            "https://www.pngfind.com/pngs/m/27-275117_in-room-video-games-comments-game-white-icon.png"
          }
          searchQuery={"Gaming"}
        />
        <SideBarCard
          alt={"yoga"}
          src={
            "https://img.favpng.com/20/4/1/yoga-vriksasana-silhouette-png-favpng-GfZSWuxMhj5Z01LP7ecfQb3zR.jpg"
          }
          searchQuery={"Yoga"}
        />
        <SideBarCard
          alt={"webseries"}
          src={
            "https://www.pngkit.com/png/full/300-3001418_the-coming-age-of-a-smart-grid-and.png"
          }
          searchQuery={"Webseries"}
        />
        <SideBarCard
          alt={"kids"}
          src={
            "https://toppng.com/uploads/preview/kids-icon-png-11552334774jigd51l7r3.png"
          }
          searchQuery={"Kids"}
        />
      </ul>
    </div>
  );
};

export default SideBar;
