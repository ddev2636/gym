import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExerciseCard from "../components/exercise/ExerciseCard";
import { fetchData } from "../state/fetch";

const Exercise = () => {
  const { exerciseId } = useParams();
  const [exercise, setExercise] = useState();
  //console.log(exercise);
  useEffect(() => {
    const fetchBodyParts = async () => {
      const data = await fetchData(`/exercises/exercise/${exerciseId}`);
      setExercise(data);
    };
    fetchBodyParts();
  }, [exerciseId]);
  return <ExerciseCard exercise={exercise} />;
};

export default Exercise;
