import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { isEmpty } from "lodash";
import useAxios from "../hooks/useAxios";
import AuthClient from "../api";
import { useDispatch } from "react-redux";
import "./search.css";

const SearchBar = () => {
  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) => d.toLowerCase().includes(query));
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
  const { axiosReq, response, loading } = useAxios();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [dataFiltered, setDataFiltered] = useState([]);

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const code = params.get("code");

  useEffect(() => {
    const items = localStorage.getItem("token");
    if (items) {
      setToken(items);
    }
    document.addEventListener("click", function (event) {
      const searchResult = document.querySelector(".resultBox");
      if (searchResult && !searchResult.contains(event.target)) {
        setDataFiltered([]);
      }
    });
  }, []);

  // useEffect(() => {
  //   handleSearch();
  // }, [searchQuery]);

  function handleSearch() {
    if (searchQuery.length > 2) {
      axiosReq({
        axiosInstance: AuthClient,
        endpoint:
          process.env.REACT_APP_ALM_URL +
          "/primeapi/v2/search?page[limit]=10&query=" +
          searchQuery +
          "&autoCompleteMode=true&filter.loTypes=course,learningProgram&sort=relevance&filter.ignoreEnhancedLP=false&matchType=phrase&persistSearchHistory=true",
        method: "GET",
        requestConfig: {
          params: {},
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Bearer " + token,
          },
        },
      });
    }
  }

  useEffect(() => {
    if (!isEmpty(response)) {
      setDataFiltered(response.data);
    }
  }, [response]);

  // if (loading)
  //     return (
  //         <Box sx={{ width: "100%" }}>
  //             <LinearProgress />;
  //         </Box>
  //     );

  return (
    <>
      <div className="search_bar">
        <form
          className="main_search_form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="searchInput">
            <input
              type="text"
              placeholder="What do you want to learn..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {dataFiltered.length > 0 && <div className="resulticon">
              <ul className="resultBox">
                {dataFiltered.map(function (item) {
                  const lastIndex = (item.id === 5);
                  return (
                    <li key={item.id}>
                      <a href={"/course-overview/" + item.id}>
                        <div className="searchResultITemContainer">
                          <img src={item.attributes.imageUrl} />
                          {item.attributes.name}
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>}
            {/* ) : (
              ""
            )} */}
            <div className="icon" onClick={handleSearch}>
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                className="searchIconHeader"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon / feathericons / search">
                  <path
                    id="Vector"
                    d="M14.6667 25.7719C20.5577 25.7719 25.3333 20.9963 25.3333 15.1053C25.3333 9.21423 20.5577 4.4386 14.6667 4.4386C8.77563 4.4386 4 9.21423 4 15.1053C4 20.9963 8.77563 25.7719 14.6667 25.7719Z"
                    stroke="#000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M28.0002 28.4386L22.2002 22.6386"
                    stroke="#000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
