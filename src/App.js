import { useEffect, useState } from "react";
import "./App.css";
import * as axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Appbar from "./components/Appbar";
import Card from "./components/Card";
function App() {
  const [usersData, setUsersData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [refresh, setRefresh] = useState(false);

  function handleRefresh() {
    setRefresh(!refresh);
    setLoader(true);
  }

  useEffect(
    function () {
      localStorage.clear();
      axios
        .get("https://randomuser.me/api/?results=50")
        .then((result) => {
          const data = result.data.results.map((user, index) => {
            return {
              name: user.name.first + " " + user.name.last,
              picture: user.picture.large,
              gender: user.gender,
              address: user.location.city,
              id: index,
            };
          });
          // console.log(data);
          // eslint-disable-next-line array-callback-return
          data.map((user, index) => {
            localStorage.setItem(user.id, JSON.stringify(user));
          });
          setLoader(false);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [refresh]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function deleteUser(id) {
    console.log(id);
    localStorage.removeItem(id);
  }

  useEffect(
    function () {
      function allStorage() {
        var archive = [];
        for (var i = 0; i < localStorage.length; i++) {
          archive[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
        }
        return archive;
      }
      // console.log(allStorage());
      setUsersData(allStorage);
    },
    [loader, deleteUser]
  );

  console.log(usersData);
  return (
    <div className="App">
      <Appbar refresh={handleRefresh} />
      {loader && (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
        >
          <CircularProgress />
        </Box>
      )}

      {!loader && (
        <>
          <div className="total-users">
            <h1>Total Users: {usersData.length}</h1>
          </div>
          <div className="card-container">
            {usersData.map((user) => {
              return (
                <Card
                  name={user.name}
                  picture={user.picture}
                  id={user.id}
                  key={user.id}
                  deleteUser={deleteUser}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
