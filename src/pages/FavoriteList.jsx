import { useEffect } from "react";
import { Cookies } from "react-cookie";
import TableComponent from "../components/TableComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoritePapers } from "../features/favorite/favoriteSlice";

const FavoriteList = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const { favPapers } = useSelector((state) => state.favPapers);
  const { status } = useSelector((state) => state.favPapers);
  const userId = cookies.get('userId');

  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchFavoritePapers(userId));
    }
  }, [status]);

  let content;
  if (status === 'success') {
    content = favPapers.data;
    if (content.length == 0) {
      content = "No Papers";
    } else {
      content = favPapers?.data[0].papers;
    }
  };

  return (
    <>
      {content === "No Papers" ? (
        <div>
          No papers
        </div>
      ) : (
        <TableComponent data={content} />
      )}
    </>
  );
};

export default FavoriteList;
