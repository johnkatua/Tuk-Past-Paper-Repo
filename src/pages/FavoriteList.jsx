import { useEffect } from "react";
import { Cookies } from "react-cookie";
import TableComponent from "../components/TableComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoritePapers } from "../features/paper/paperSlice";

const FavoriteList = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const { favPapers } = useSelector((state) => state.papers);
  const { status } = useSelector((state) => state.papers);
  const userId = cookies.get('userId');
  console.log(userId);
  console.log(favPapers, status);

  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchFavoritePapers(userId));
    }
  }, [status]);

  let content;
  if (status === 'success') {
    content = favPapers.data;
    if (content.length == 0) {
      content = <div>"No Papers"</div>
    }
  };

  console.log(content)

  return (
    <>
      <TableComponent />
    </>
  );
};

export default FavoriteList;
