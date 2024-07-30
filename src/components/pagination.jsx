import Pagination from "@mui/material/Pagination";
const CustomPagination = ({ count, handleChange }) => {
  return <Pagination count={count} onChange={handleChange} />;
};

export default CustomPagination;
