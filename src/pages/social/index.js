import { getCredentials } from "../../features/Auth/authSlice";
import { useSelector } from "react-redux";

const Social = () => {
    const auth = useSelector(getCredentials);
    const { accessToken } = auth;
  

  
  return (
    <>
              <div style={{ height: "100vh", width: "100%" }}>
          <iframe src={"https://viku.space/maruti/index.php?access="+accessToken} height="100%" width="100%"></iframe>
        </div>
    </>
  );
};

export default Social;
