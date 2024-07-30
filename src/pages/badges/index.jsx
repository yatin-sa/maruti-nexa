import { isEmpty } from "lodash";
import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import img from "../../assets/img/tile.jpg";
import { saveAs } from "file-saver";
import Typography from "@mui/material/Typography";

const Badges = () => {
  const { axiosReq, response, loading } = useAxios();
  const axiosPrivate = useAxiosPrivate();
  const getLearninObject = async () => {
    try {
      await axiosReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/users/17194614/userBadges",
        requestConfig: {
          params: {
            //"filter.loTypes": "jobAid",
            // "page[cursor]": isNil(next) ? "" : next,
            include: "badge",
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  // const handleDownloadImage = (url) => {
  //   saveAs(url, "image.jpg");
  // };
  // const download = (e) => {
  //   var element = e.target;
  //   var file = new Blob(
  //     [
  //       "https://timesofindia.indiatimes.com/thumb/msid-70238371,imgsize-89579,width-400,resizemode-4/70238371.jpg",
  //     ],
  //     { type: "image/*" }
  //   );
  //   element.href = URL.createObjectURL(file);
  //   element.download = "image.jpg";
  //   element.click();
  // };

  useEffect(() => {
    getLearninObject();
  }, []);

  return (
    <div className="container row">
      {!isEmpty(response) ? (
        response?.included.map((val, ind) => {
          return (
            <div
              className="card col-4"
              // onClick={(e) => handleNavigateUser(val.id)}
              style={{
                width: "18rem",
                margin: "10px",
                minHeight: "300px",
                // backgroundImage: `url('${val.attributes.imageUrl}')`,
              }}
              // onClick={() => handleDownloadImage(val.attributes.imageUrl)}
            >
              <img
                src={val.attributes.imageUrl}
                className="card-img-top"
                alt="..."
                height={250}
                width={200}
              ></img>
              <h5 className="card-title">{val?.attributes?.name}</h5>
              <a
                type="button"
                // href={
                //   val?.attributes?.name == "CAPTAIN"
                //     ? "Captain.pdf"
                //     : "certified.pdf"
                // }
                download
              >
                <i className="fa fa-download" />
                download
              </a>
            </div>
          );
        })
      ) : (
        <Typography variant="h5" sx={{ padding: "50px" }}>
          You have not earned any badges yet. Get started by going to My
          Learning tab.
        </Typography>
      )}{" "}
    </div>
  );
};

export default Badges;
