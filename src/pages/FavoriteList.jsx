import { useEffect } from "react";
import TableComponent from "../components/TableComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoritePapers } from "../features/favorite/favoriteSlice";

const FavoriteList = () => {
  const dispatch = useDispatch();
  const { favPapers } = useSelector((state) => state.favPapers);
  const { status } = useSelector((state) => state.favPapers);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (status === "idle" && user !== null) {
      const { userId } = user;
      dispatch(fetchFavoritePapers(userId));
    }
  }, [status, user]);

  let content;
  if (status === "success") {
    content = favPapers.data;
    if (content.length == 0) {
      content = "No Papers";
    } else {
      content = favPapers?.data[0].papers;
    }
  }

  return (
    <>
      {content === "No Papers" ? (
        <div>No papers</div>
      ) : (
        <TableComponent data={content} />
      )}
    </>
  );
};

export default FavoriteList;
