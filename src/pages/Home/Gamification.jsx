import useAxios from "../../hooks/useAxios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useEffect } from "react";
import { isEmpty } from "lodash";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SubTitle from "../../components/SubTitle";

const GamificationView = () => {
  const axiosPrivate = useAxiosPrivate();
  const { axiosReq, response, loading } = useAxios();

  const getData = async () => {
    try {
      await axiosReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/users",
        requestConfig: {
          params: {
            filter: "gamification",
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <SubTitle title="Leaderboard" />
      <div>
        <div style={{ width: "100%" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Points</TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!isEmpty(response?.data) ? (
                  response?.data.map((val, ind) => (
                    <TableRow
                      key={ind}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">
                        <img
                          src={val.attributes.avatarUrl}
                          height={50}
                          width={50}
                          style={{ borderRadius: "50%" }}
                        />
                      </TableCell>
                      <TableCell align="left">{val.attributes.name}</TableCell>
                      <TableCell align="left">
                        {val.attributes.pointsEarned}
                      </TableCell>
                      <TableCell align="left">
                        {ind == 2 && (
                          <WorkspacePremiumIcon style={{ color: "#CD7F32" }} />
                        )}
                        {ind == 1 && (
                          <WorkspacePremiumIcon style={{ color: "#C0C0C0" }} />
                        )}
                        {ind == 0 && (
                          <WorkspacePremiumIcon style={{ color: "#FFD700" }} />
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <></>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default GamificationView;
