import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "../state/fetch";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Pagination,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import "./Bodypartexercises.css";
import { useTheme } from "@emotion/react";
import Loader from "../components/Loader";

const BodyPartSpecific = () => {
  const { bodyPart } = useParams();
  const [exercisesData, setExercisesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBodyParts = async () => {
      setLoading(true);
      const data = await fetchData(`/exercises/bodyPart/${bodyPart}`);
      setExercisesData(data);
      setLoading(false);
    };
    fetchBodyParts();
  }, [bodyPart]);

  // Pagination Handlers
  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = exercisesData.slice(indexOfFirstItem, indexOfLastItem);
  if (loading) return <Loader />;

  return (
    <Box sx={{ margin: "1rem" }}>
      <Box
        sx={{
          fontSize: "3.5rem",
          textTransform: "capitalize",
          color: "white",
          fontWeight: 600,
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        {bodyPart} Exercises
      </Box>
      <Grid container spacing={3}>
        {currentItems.map((exercise) => (
          <Grid item key={exercise.id} xs={12} sm={6} md={4} xl={3}>
            <div className="shadow-drop-2-center">
              <Card
                sx={{ textTransform: "capitalize" }}
                onClick={() => navigate(`/exercises/${exercise.id}`)}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: theme.palette.primary.alternate,
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                    }}
                  >
                    {exercise.name}
                  </Typography>
                  <Typography>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ color: theme.palette.secondary.alternate }}>
                        Equipment:
                      </Box>
                      {exercise.equipment || "N/A"}
                    </Box>
                  </Typography>
                  <Typography>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ color: theme.palette.secondary.alternate }}>
                        Target:
                      </Box>{" "}
                      {exercise.target || "N/A"}
                    </Box>
                  </Typography>
                  <div style={{ position: "relative", paddingBottom: "100%" }}>
                    <img
                      src={exercise.gifUrl}
                      alt={exercise.name}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(exercisesData.length / itemsPerPage)}
        page={currentPage}
        onChange={handleChangePage}
        sx={{
          marginTop: "2rem",
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      />
    </Box>
  );
};

export default BodyPartSpecific;
