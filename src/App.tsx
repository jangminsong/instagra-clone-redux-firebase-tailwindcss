import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Homepage from "./Homepage";
import "../css/style.css";
import Authentication from "./authentication/Authentication";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log("user is not logged in");
      }
    });
  }, []);
  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);

  return (
    <div>
      {isLoading ? (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>{user ? <Homepage /> : <Authentication />}</>
      )}
    </div>
  );
}

export default App;
