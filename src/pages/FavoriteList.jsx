import { useEffect } from "react";
import TableComponent from "../components/TableComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoritePapers } from "../features/favorite/favoriteSlice";

const FavoriteList = () => {
  const dispatch = useDispatch();
  const { favPapers } = useSelector((state) => state.favPapers);
  const { status } = useSelector((state) => state.favPapers);

  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchFavoritePapers(userId));
    }
  }, [status]);

  let content;
  if (status === "success") {
    content = favPapers.data;
    if (content.length == 0) {
      content = "No Papers";
    } else {
      content = favPapers?.data[0].papers;
    }
  }

  console.log(content);

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
