import { useEffect } from "react";
import TableComponent from "../components/TableComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoritePapers } from "../features/paper/paperSlice";

const FavoriteList = () => {
  const dispatch = useDispatch()
  const { favPapers } = useSelector(state => state.papers);
  const { status } = useSelector(state => state.papers);
  console.log(favPapers, status);

  useEffect(() => {
    if (status == 'idle') {
      dispatch(fetchFavoritePapers());
    }
  }, [status]);
  
  return <TableComponent />;
};

export default FavoriteList;
