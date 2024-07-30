import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ListSubheader from "@mui/material/ListSubheader";
import { styled } from "@mui/system";
import { getFilter, setFilter } from "../../../features/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";

const NavContainer = styled("nav")({
  backgroundColor: "#fcf8f8",
  flexFlow: "column nowrap",
  justifyContent: "start",
  alignItems: "start",
});
const FormLabel = styled(FormControlLabel)({
  color: "#00000099",

  fontSize: "0.875rem !important",
});

export default function BasicList() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const { axiosReq: tagReq, response: tagResp, loading } = useAxios();
  const axiosPrivate = useAxiosPrivate();
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedPriceType, setSelectedPriceType] = useState([]);
  const [filterData, setFilterData] = useState({});

  const handleTagsChange = (event) => {
    var newVal = event.target.value
    var newTags = []
    if (selectedTags.includes(newVal)) {
      var index = selectedTags.indexOf(newVal);
      if (index !== -1) {
        newTags = [...selectedTags]
        newTags.splice(index, 1);
      }
    } else {
      newTags = [...selectedTags, ...[newVal]]
      // newTags.push(newVal)
    }
    setSelectedTags(newTags)
    var taglist = ''
    newTags.map(function(item){
      taglist = taglist+','+item
    })
    taglist = taglist.replace(/^,|,$/g,'');
    
    var newFilterData =  { ...filterData }
    newFilterData.tagName = taglist
    setFilterData(newFilterData)
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      dispatch(setFilter(name));
    } else {
      dispatch(setFilter(""));
    }
  };

  const handleLOTypeChange = (event) => {
    var newVal = event.target.value
    var newTags = []
    if (selectedType.includes(newVal)) {
      var index = selectedType.indexOf(newVal);
      if (index !== -1) {
        newTags = [...selectedType]
        newTags.splice(index, 1);
      }
    } else {
      newTags = [...selectedType, ...[newVal]]
    }
    setSelectedType(newTags)
    var taglist = ''
    newTags.map(function(item){
      taglist = taglist+','+item
    })
    taglist = taglist.replace(/^,|,$/g,'');
    var newFilterData =  { ...filterData }
    newFilterData.loTypes = taglist
    setFilterData(newFilterData)
  };

  const handlePriceChange = (event) => {
    var newVal = event.target.value
    var newTags = []
    if (selectedPriceType.includes(newVal)) {
      var index = selectedPriceType.indexOf(newVal);
      if (index !== -1) {
        newTags = [...selectedPriceType]
        newTags.splice(index, 1);
      }
    } else {
      newTags = [...selectedPriceType, ...[newVal]]      
    }
    setSelectedPriceType(newTags)
    var taglist = ''
    newTags.map(function(item){
      taglist = taglist+','+item
    })
    taglist = taglist.replace(/^,|,$/g,'');
    var newFilterData =  { ...filterData }
    newFilterData.price = taglist
    setFilterData(newFilterData)
  };

  const getTags = async () => {
    try {
      await tagReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/data",
        requestConfig: {
          params: {
            "filter.tagName": true,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    if (tagResp && tagResp.data && tagResp.data.attributes && tagResp.data.attributes.names)
      setTags(tagResp.data.attributes.names)
  }, [tagResp]);

  useEffect(() => {
    getTags();
  }, []);

  useEffect(() => {
    dispatch(setFilter(filterData));
  }, [filterData]);

  

  return (
    <Box sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper" }}>
      <NavContainer>
        <List
          subheader={
            <ListSubheader
              sx={{ backgroundColor: "#fcf8f8",paddingLeft:0,fontWeight:"bold",color:"#000",fontSize:"16px !important" }}
              component="div"
              id="nested-list-subheader"
            >
              Type
            </ListSubheader>
          }
        >
          <FormGroup>
            <FormLabel control={ <Checkbox size="small" value="course" onChange={handleLOTypeChange} />} label="Courses"/>
            <FormLabel control={ <Checkbox size="small" value="learningProgram" onChange={handleLOTypeChange} />} label="Learning Paths"/>
            <FormLabel control={ <Checkbox size="small" value="certification" onChange={handleLOTypeChange} />} label="Certifications"/>
            <FormLabel control={ <Checkbox size="small" value="jobAid" onChange={handleLOTypeChange} />} label="Job Aids"/>
          </FormGroup>
        </List>
      </NavContainer>
      <Divider sx={{ color: "#2f4f4f", height: "6px" }} />
      {/* {/* <NavContainer>
        <List
          subheader={
            <ListSubheader
            sx={{ backgroundColor: "#fcf8f8",paddingLeft:0,fontWeight:"bold",color:"#000",fontSize:"16px !important" }}
              component="div"
              id="nested-list-subheader"
            >
              Language
            </ListSubheader>
          }
        >
          <FormGroup>
            <FormLabel
              control={
                <Checkbox size="small" name="Deutsch" onChange={handleChange} />
              }
              label="Deutsch"
            />
            <FormLabel
              control={
                <Checkbox size="small" name="French" onChange={handleChange} />
              }
              label="French"
            />
            <FormLabel
              control={
                <Checkbox
                  size="small"
                  name="Japanese"
                  onChange={handleChange}
                />
              }
              label="Japanese"
            />
            <FormLabel
              control={
                <Checkbox size="small" name="Italian" onChange={handleChange} />
              }
              label="Italian"
            />
          </FormGroup>
        </List>
      </NavContainer>
      <Divider sx={{ color: "#2f4f4f", height: "6px" }} />
      <NavContainer>
        <List
          subheader={
            <ListSubheader
            sx={{ backgroundColor: "#fcf8f8",paddingLeft:0,fontWeight:"bold",color:"#000",fontSize:"16px !important" }}
              component="div"
              id="nested-list-subheader"
            >
              Format
            </ListSubheader>
          }
        >
          <FormGroup>
            <FormLabel control={<Checkbox size="small" />} label="Activity" />
            <FormLabel control={<Checkbox size="small" />} label="Blended" />
            <FormLabel control={<Checkbox size="small" />} label="Classroom" />
          </FormGroup>
        </List>
      </NavContainer>
      <Divider sx={{ color: "#2f4f4f", height: "6px" }} /> */}
      <NavContainer>
        <List
          subheader={
            <ListSubheader
            sx={{ backgroundColor: "#fcf8f8",paddingLeft:0,fontWeight:"bold",color:"#000",fontSize:"16px !important" }}
              component="div"
              id="nested-list-subheader"
            >
              Price
            </ListSubheader>
          }
        >
          <FormGroup>
            <FormLabel control={<Checkbox size="small" />}  value="free" onChange={handlePriceChange}  label="Free" />
            <FormLabel control={<Checkbox size="small" />}  value="paid" onChange={handlePriceChange}  label="Paid" />
          </FormGroup>
        </List>
      </NavContainer>
      {
        (tags && tags.length > 0) ? <><Divider sx={{ color: "#2f4f4f", height: "6px" }} />
          <NavContainer>
            <List
              subheader={
                <ListSubheader
                sx={{ backgroundColor: "#fcf8f8",paddingLeft:0,fontWeight:"bold",color:"#000",fontSize:"16px !important" }}
                  component="div"
                  id="nested-list-subheader"
                >
                  Tags
                </ListSubheader>
              }
            >
              <FormGroup>
                {
                  tags.map(function (item,key) {

                    return (<FormLabel key={"tag"+key} control={<Checkbox size="small" value={item} onChange={handleTagsChange} />} label={item} />)
                  })
                }

              </FormGroup>
            </List>
          </NavContainer></> : ''
      }
    </Box>
  );
}
