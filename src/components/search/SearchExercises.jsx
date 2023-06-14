// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Stack,
//   TextField,
//   Button,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Pagination,
// } from "@mui/material";
// import { fetchData } from "../../state/fetch";
// import { useNavigate } from "react-router-dom";
// import { useTheme } from "@emotion/react";

// const SearchExercises = () => {
//   const [search, setSearch] = useState("");
//   const [exercises, setExercises] = useState([]);
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [currentItems, setCurrentItems] = useState();
//   const itemsPerPage = 9;

//   const handleChangePage = (event, page) => {
//     setCurrentPage(page);
//   };

//   const handleSearch = async () => {
//     if (search) {
//       const exerciseData = await fetchData("/exercises");
//       console.log(exerciseData);
//       const searchedExercises = exerciseData.filter(
//         (exercise) =>
//           exercise.name.toLowerCase().includes(search) ||
//           exercise.target.toLowerCase().includes(search) ||
//           exercise.equipment.toLowerCase().includes(search) ||
//           exercise.bodyPart.toLowerCase().includes(search)
//       );
//       console.log(searchedExercises);
//       setSearch("");
//       setExercises(searchedExercises);
//       const indexOfLastItem = currentPage * itemsPerPage;
//       const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//       if (exercises)

//     }
//   };

//   return (
//     <>
//       <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
//         <Typography
//           fontWeight={700}
//           sx={{ fontSize: { lg: "44px", xs: "30px" } }}
//           mb="49px"
//           textAlign="center"
//         >
//           Awesome exercises <br /> you should know
//         </Typography>
//         <Box position="relative" mb="72px">
//           <TextField
//             sx={{
//               input: { fontWeight: "700", border: "none", borderRadius: "4px" },
//               width: { lg: "1170px", xs: "350px" },
//               backgroundColor: "#fff",
//               borderRadius: "40px",
//             }}
//             height="76px"
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value.toLowerCase());
//             }}
//             placeholder="Search Exercises"
//             type="text"
//           />
//           <Button
//             className="btn-class"
//             sx={{
//               bgcolor: "#FF2625",
//               color: "#fff",
//               textTransform: "none",
//               width: { lg: "173px", xs: "80px" },
//               height: "56px",
//               position: "absolute",
//               right: "0px",
//               fontSize: { lg: "20px", xs: "14px" },
//             }}
//             onClick={handleSearch}
//           >
//             Search
//           </Button>
//         </Box>
//       </Stack>
//       <Box sx={{ margin: "1rem" }}>
//         <Box
//           sx={{
//             fontSize: "3.5rem",
//             textTransform: "capitalize",
//             color: "white",
//             fontWeight: 600,
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           Exercises
//         </Box>
//         <Grid container spacing={3}>
//           {currentItems?.map((exercise) => (
//             <Grid item key={exercise.id} xs={12} sm={6} md={4}>
//               <div className="shadow-drop-2-center">
//                 <Card
//                   sx={{ textTransform: "capitalize" }}
//                   onClick={() => navigate(`/exercises/${exercise.id}`)}
//                 >
//                   <CardContent>
//                     <Typography
//                       variant="h5"
//                       component="div"
//                       sx={{
//                         display: "flex",
//                         justifyContent: "center",
//                         color: theme.palette.primary.alternate,
//                         display: "-webkit-box",
//                         overflow: "hidden",
//                         WebkitBoxOrient: "vertical",
//                         WebkitLineClamp: 3,
//                       }}
//                     >
//                       {exercise.name}
//                     </Typography>
//                     <Typography>
//                       <Box sx={{ display: "flex" }}>
//                         <Box sx={{ color: theme.palette.secondary.alternate }}>
//                           Equipment:
//                         </Box>
//                         {exercise.equipment || "N/A"}
//                       </Box>
//                     </Typography>
//                     <Typography>
//                       <Box sx={{ display: "flex" }}>
//                         <Box sx={{ color: theme.palette.secondary.alternate }}>
//                           Target:
//                         </Box>{" "}
//                         {exercise.target || "N/A"}
//                       </Box>
//                     </Typography>
//                     <img src={exercise.gifUrl} alt={exercise.name} />
//                   </CardContent>
//                 </Card>
//               </div>
//             </Grid>
//           ))}
//         </Grid>
//         <Pagination
//           count={Math.ceil(exercises.length / itemsPerPage)}
//           page={currentPage}
//           onChange={handleChangePage}
//           sx={{
//             marginTop: "2rem",
//             marginBottom: "2rem",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         />
//       </Box>
//     </>
//   );
// };

// export default SearchExercises;

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Stack,
//   TextField,
//   Button,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Pagination,
// } from "@mui/material";
// import { fetchData } from "../../state/fetch";
// import { useNavigate } from "react-router-dom";
// import { useTheme } from "@emotion/react";

// const SearchExercises = () => {
//   const [search, setSearch] = useState("");
//   const [exercises, setExercises] = useState([]);
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [currentItems, setCurrentItems] = useState([]);
//   const itemsPerPage = 9;

//   const handleChangePage = (event, page) => {
//     setCurrentPage(page);
//   };

//   useEffect(() => {
//     const fetchExercises = async () => {
//       const exerciseData = await fetchData("/exercises");
//       setExercises(exerciseData);
//     };
//     fetchExercises();
//   }, []);

//   useEffect(() => {
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const slicedItems = exercises.slice(indexOfFirstItem, indexOfLastItem);
//     setCurrentItems(slicedItems);
//   }, [exercises, currentPage]);

//   const handleSearch = async () => {
//     if (search) {
//       const exerciseData = await fetchData("/exercises");
//       const searchedExercises = exerciseData.filter(
//         (exercise) =>
//           exercise.name.toLowerCase().includes(search) ||
//           exercise.target.toLowerCase().includes(search) ||
//           exercise.equipment.toLowerCase().includes(search) ||
//           exercise.bodyPart.toLowerCase().includes(search)
//       );
//       setExercises(searchedExercises);
//       setCurrentPage(1);
//     } else {
//       fetchData("/exercises").then((exerciseData) => {
//         setExercises(exerciseData);
//       });
//     }
//   };

//   return (
//     <>
//       <Stack alignItems="center" mt="30px" justifyContent="center" p="20px">
//         <Typography
//           fontWeight={700}
//           sx={{ fontSize: { lg: "44px", xs: "30px" } }}
//           mb="20px"
//           textAlign="center"
//           color={theme.palette.secondary.alt}
//         >
//           Exercises you should know
//         </Typography>
//         <Box position="relative">
//           <TextField
//             sx={{
//               input: { fontWeight: "700", border: "none", borderRadius: "4px" },
//               width: { lg: "1170px", xs: "350px" },
//               backgroundColor: "#fff",
//             }}
//             height="76px"
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value.toLowerCase());
//             }}
//             placeholder="Search Exercises"
//             type="text"
//           />
//           <Button
//             className="btn-class"
//             sx={{
//               bgcolor: theme.palette.primary.main,
//               color: "#fff",
//               textTransform: "none",
//               width: { lg: "150px", xs: "80px" },
//               height: "56px",
//               position: "absolute",
//               right: "0px",
//               fontSize: { lg: "20px", xs: "14px" },
//             }}
//             onClick={handleSearch}
//           >
//             Search
//           </Button>
//         </Box>
//       </Stack>
//       <Box sx={{ margin: "2rem" }}>
//         <Box
//           sx={{
//             fontSize: "3.5rem",
//             textTransform: "capitalize",
//             color: "white",
//             fontWeight: 600,
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           Exercises
//         </Box>
//         <Grid container spacing={3}>
//           {currentItems.map((exercise) => (
//             <Grid item key={exercise.id} xs={12} sm={6} md={4}>
//               <div className="shadow-drop-2-center">
//                 <Card
//                   sx={{ textTransform: "capitalize" }}
//                   onClick={() => navigate(`/exercises/${exercise.id}`)}
//                 >
//                   <CardContent>
//                     <Typography
//                       variant="h5"
//                       component="div"
//                       sx={{
//                         display: "-webkit-box",
//                         overflow: "hidden",
//                         WebkitBoxOrient: "vertical",
//                         WebkitLineClamp: 3,
//                       }}
//                     >
//                       {exercise.name}
//                     </Typography>
//                     <Typography>
//                       <Box sx={{ display: "flex" }}>
//                         <Box sx={{ color: theme.palette.secondary.main }}>
//                           Equipment:
//                         </Box>
//                         {exercise.equipment || "N/A"}
//                       </Box>
//                     </Typography>
//                     <Typography>
//                       <Box sx={{ display: "flex" }}>
//                         <Box sx={{ color: theme.palette.secondary.main }}>
//                           Target:
//                         </Box>{" "}
//                         {exercise.target || "N/A"}
//                       </Box>
//                     </Typography>
//                     <img src={exercise.gifUrl} alt={exercise.name} />
//                   </CardContent>
//                 </Card>
//               </div>
//             </Grid>
//           ))}
//         </Grid>
//         <Pagination
//           count={Math.ceil(exercises.length / itemsPerPage)}
//           page={currentPage}
//           onChange={() => {
//             handleChangePage();
//             //window.scrollBy(0, -300 * window.innerHeight);
//           }}
//           sx={{
//             marginTop: "2rem",
//             marginBottom: "2rem",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         />
//       </Box>
//     </>
//   );
// };

// export default SearchExercises;

import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  Pagination,
  CircularProgress,
} from "@mui/material";
import { fetchData } from "../../state/fetch";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const theme = useTheme();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 9;

  const handleChangePage = (event, page) => {
    window.scrollBy("-300vh", 0);
    setCurrentPage(page);
  };

  useEffect(() => {
    setLoading(true);
    const fetchExercises = async () => {
      const exerciseData = await fetchData("/exercises");
      setExercises(exerciseData);
      setLoading(false);
    };
    fetchExercises();
  }, []);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const slicedItems = exercises.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(slicedItems);
  }, [exercises, currentPage]);

  const handleSearch = async () => {
    if (search) {
      setLoading(true);
      const exerciseData = await fetchData("/exercises");
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setExercises(searchedExercises);
      setCurrentPage(1);
      setLoading(false);
    } else {
      setLoading(true);
      fetchData("/exercises").then((exerciseData) => {
        setExercises(exerciseData);
        setCurrentPage(1); // Reset the page number
      });
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <CircularProgress />
      </div>
    );

  return (
    <>
      <Stack alignItems="center" mt="30px" justifyContent="center" p="20px">
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          mb="20px"
          textAlign="center"
          color={theme.palette.secondary.alt}
        >
          Exercises you should know
        </Typography>
        <Box position="relative">
          <TextField
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "1170px", xs: "350px" },
              backgroundColor: "#fff",
            }}
            height="76px"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            className="btn-class"
            sx={{
              bgcolor: theme.palette.primary.main,
              color: "#fff",
              textTransform: "none",
              width: { lg: "150px", xs: "80px" },
              height: "56px",
              position: "absolute",
              right: "0px",
              fontSize: { lg: "20px", xs: "14px" },
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
      </Stack>
      <Box sx={{ margin: "2rem" }}>
        <Grid container spacing={3}>
          {currentItems.map((exercise) => (
            <Grid item key={exercise.id} xs={12} md={6} lg={4} xl={3}>
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
                        <Box sx={{ color: theme.palette.secondary.main }}>
                          Equipment:
                        </Box>
                        {exercise.equipment || "N/A"}
                      </Box>
                    </Typography>
                    <Typography>
                      <Box sx={{ display: "flex" }}>
                        <Box sx={{ color: theme.palette.secondary.main }}>
                          Target:
                        </Box>{" "}
                        {exercise.target || "N/A"}
                      </Box>
                    </Typography>
                    <div
                      style={{ position: "relative", paddingBottom: "100%" }}
                    >
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
          count={Math.ceil(exercises.length / itemsPerPage)}
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
    </>
  );
};

export default SearchExercises;
