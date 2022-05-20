import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FetchData = () => {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `http://localhost:5000/sendData?usn=${params.usn}`
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data == "" ? (
        <div>
            <h1>User Not Found!</h1>
        </div>
      ) : (
        <div>
           <h1>{data.name}</h1>
          <h1>{data.usn}</h1>
        </div>
      )}
    </div>
  );
};

export default FetchData;
