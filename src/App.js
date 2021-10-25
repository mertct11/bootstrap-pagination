import "bootstrap/dist/css/bootstrap.css";
import DataList from "./DataList/index";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const PER_PAGE = 9;
  const [selectedPage, setSelectedPage] = useState(1);
  const [totalDataLength, setTotalDataLength] = useState();

  const fetchData = () => {
    axios
      .get(
        `http://jsonplaceholder.typicode.com/posts?_start=${
          (selectedPage - 1) * PER_PAGE
        }&_limit=${PER_PAGE}`
      )
      .then((res) => {
        setData(res.data);
      });
  };
  const getTotalDataLength = () => {
    axios.get("http://jsonplaceholder.typicode.com/posts").then((res) => {
      setTotalDataLength(res.data.length);
    });
  };

  useEffect(() => {
    getTotalDataLength();
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedPage]);

  return (
    <div className="container">
      <DataList
        data={data}
        totalDataLength={totalDataLength}
        PER_PAGE={PER_PAGE}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
