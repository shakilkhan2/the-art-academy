import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../shared/loader/Loader";

const MyClasses = () => {
  const [newClasses, setNewClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/added_class").then((res) => {
      setNewClasses(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Instructors classes..{newClasses.length}</h1>
    </div>
  );
};

export default MyClasses;
