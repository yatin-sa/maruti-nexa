import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import certi from "../../assets/img/Certi.jpg";
import cap from "../../assets/img/captain.jpg";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import { saveAs } from "file-saver";

const Container = styled("div")({
  display: "flex",
});
const TextContainer = styled("div")({
  marginTop: "10px",
  fontSize: "12px",
  marginLeft: "10px",
});
const Name = styled("div")({
  fontSize: "12px",
});

const Badges = ({ open, handleClose }) => {
  const handleDownloadImage = (url) => {
    saveAs(url, "image.jpg");
  };
  const download = (e) => {
    var element = e.target;
    var file = new Blob(
      [
        "https://timesofindia.indiatimes.com/thumb/msid-70238371,imgsize-89579,width-400,resizemode-4/70238371.jpg",
      ],
      { type: "image/*" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "image.jpg";
    element.click();
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 350 }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell align="left">
                  <Container>
                    <img
                      src={certi}
                      height={50}
                      width={50}
                      style={{ borderRadius: "50%" }}
                    />
                    <TextContainer>
                      <Name>Certificate</Name>
                      <Name>Status: Achieved</Name>
                    </TextContainer>
                  </Container>
                </TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left">
                  <a href="certified.pdf" download>
                    PDF
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">
                  <Container>
                    <img
                      src={cap}
                      height={50}
                      width={50}
                      style={{ borderRadius: "50%" }}
                    />
                    <TextContainer>
                      <Name>Captain</Name>
                      <Name>Status: Achieved</Name>
                    </TextContainer>
                  </Container>
                </TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left">
                  <a href="Captain.pdf" download>
                    PDF
                  </a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Dialog>
  );
};

export default Badges;
