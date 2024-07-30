import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const NotificationMessages = () => {
  const axiosPrivate = useAxiosPrivate();
  const { axiosReq, response, loading } = useAxios();
  const getData = async () => {
    try {
      await axiosReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/users/17194614/userNotifications",
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(response);

  return (
    <div className="home_right_card">
      <h3>Latest Messages</h3>
      <div className="home_right_card_content">
        <ol>
          <li>
            <p>You have been enrolled to course Color Masterclass</p>
            <p>
              <a href="#">learn more now</a>
            </p>
          </li>
          <li>
            <p>
              You have been enrolled to course Fundamentals of photo editing
            </p>
            <p>
              <a href="#">learn more now</a>
            </p>
          </li>
          <li>
            <p>You have achieved Skill Level 1 in Lightroom Skill.</p>
            <p>
              <a href="#">learn more now</a>
            </p>
          </li>
          <li>
            <p>You have completed the Course Fundamentals of Photo Editing.</p>
            <p>
              <a href="#">learn more now</a>
            </p>
          </li>
          <li>
            <p>Instances for some learning objects have expired.</p>
            <p>
              <a href="#">learn more now</a>
            </p>
          </li>
          <li>
            <p>Instructors to Skill assignment is successfully imported.</p>
            <p>
              <a href="#">learn more now</a>
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default NotificationMessages;
