import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API_SUGGESTION } from "../utils/constants";
import ButtonList from "./ButtonList";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [Suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        const getSearchSuggestions = async () => {
          const data = await fetch(YOUTUBE_SEARCH_API_SUGGESTION + searchQuery);
          const json = await data.json();
          setSuggestions(json[1]);
          dispatch(
            cacheResults({
              [searchQuery]: json[1],
            })
          );
        };
        getSearchSuggestions();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [searchQuery, searchCache, dispatch]);

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg sticky top-0 bg-white w-full">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleHandler()}
          className="h-8 cursor-pointer"
          alt="menu-logo"
          src="https://static.thenounproject.com/png/703786-200.png"
        />
        <img
          onClick={() => {
            navigate("/");
          }}
          className="h-8 mx-2 cursor-pointer"
          alt="youtube-logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png"
        />
      </div>
      <div className="col-span-10 px-10 ">
        <form
          className="flex"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/search/:${searchQuery}`);
            setSearchQuery(searchQuery);
          }}
        >
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => {
              setTimeout(() => {
                setShowSuggestions(false);
              }, [500]);
            }}
          />
          <button className="border border-gray-400 p-2 rounded-r-full">
            <img
              className="h-6"
              alt="search"
              src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
            />
          </button>
        </form>
        {showSuggestions && (
          <div className="absolute bg-white px-3 py-2 w-[45.5rem] rounded-lg shadow-lg">
            <ul>
              {Suggestions.map((s) => (
                <li className="hover:bg-gray-100" key={s}>
                  <button
                    className="text-lg py-1 flex w-full"
                    onClick={() => {
                      navigate(`/search/:${s}`);
                      setShowSuggestions(false);
                      setSearchQuery(s);
                    }}
                  >
                    <img
                      className="h-7"
                      alt="search-logo"
                      src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
                    />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <ButtonList />
      </div>
      <div className="col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="user"
          src="https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png"
        />
      </div>
    </div>
  );
};

export default Head;
