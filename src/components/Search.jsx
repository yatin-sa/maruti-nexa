import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import { isEmpty, isNil } from "lodash";
import useAxios from "../hooks/useAxios";
import AuthClient from "../api";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/Auth/authSlice";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import "./search.css";
// import "./util.css";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    if (searchQuery.length > 2) {
      axiosReq({
        axiosInstance: AuthClient,
        endpoint:
          process.env.REACT_APP_ALM_URL +
          "/primeapi/v2/search?page[limit]=10&query=" +
          searchQuery +
          "&autoCompleteMode=true&filter.loTypes=course,learningProgram&sort=relevance&filter.ignoreEnhancedLP=true&matchType=phrase&persistSearchHistory=true",
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
  }, [searchQuery]);

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
        <form className="main_search_form">
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {dataFiltered && dataFiltered.length > 0 ? (
              <ul className="resultBox">
                {dataFiltered.map(function (item) {
                  return (
                    <li key={item.id}>
                      <a href={"/course-overview/" + item.id}>
                        <img src={item.attributes.imageUrl} />
                        {item.attributes.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
            <div className="icon">
              <SearchIcon style={{ fill: "#2d3494" }} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
