import { useEffect, useState } from "react";

const useCourses = () => {
  const [cousrses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./db.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  // return necessery things
  return [cousrses];
};

export default useCourses;
