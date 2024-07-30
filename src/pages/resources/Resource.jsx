import { isEmpty } from "lodash";
import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import img from "../../assets/img/tile.jpg";

const Resource = () => {
  const { axiosReq, response, loading } = useAxios();
  const axiosPrivate = useAxiosPrivate();
  const getLearninObject = async () => {
    try {
      await axiosReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/learningObjects",
        requestConfig: {
          params: {
            "filter.loTypes": "jobAid",
            // "page[cursor]": isNil(next) ? "" : next,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLearninObject();
  }, []);

  return (
    <div className="container row">
      {!isEmpty(response) &&
        response?.data.map((val, ind) => {
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
            >
              <img
                src={img}
                className="card-img-top"
                alt="..."
                height={250}
                width={200}
              ></img>
              <h5 className="card-title">
                {val?.attributes?.localizedMetadata[0].name}
              </h5>
            </div>
          );
        })}{" "}
    </div>
  );
};

export default Resource;
