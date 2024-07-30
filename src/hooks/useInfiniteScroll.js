import { isNil } from "lodash";
import { useRef, useCallback } from "react";

function useInfiniteScroll(loading = false, nextPageToken, callback) {
  const intObserver = useRef();
  const lastPostRef = useCallback(
    (post) => {
      if (loading) return;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting) {
          if (isNil(nextPageToken)) return;
          callback();
        }
      });
      if (post) intObserver.current.observe(post);
    },
    [loading]
  );
  return lastPostRef;
}
export default useInfiniteScroll;
