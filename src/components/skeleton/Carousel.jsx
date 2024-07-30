import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const CarouselSkeleton = () => {
  return (
    <Stack spacing={3} direction="row" sx={{ padding: "0px 20px" }}>
      <div>
        <Skeleton variant="rectangular" width={385} height={200} />
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
      </div>
      <div>
        <Skeleton variant="rectangular" width={385} height={200} />
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
      </div>
      <div>
        <Skeleton variant="rectangular" width={385} height={200} />
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
      </div>
    </Stack>
  );
};

export default CarouselSkeleton;
