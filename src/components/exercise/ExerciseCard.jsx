import { styled, useTheme } from "@mui/system";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Loader from "../Loader";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[5],
  },
  overflowY: "hidden",
}));

const ImageContainer = styled(Box)(({ smDevice }) => ({
  flex: "1 0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: smDevice ? "center" : "flex-start",
}));

const Image = styled("img")(({ smDevice }) => ({
  width: smDevice ? "100%" : "auto",
  height: smDevice ? "auto" : "100%",
  objectFit: "contain",
}));

const PropertyLabel = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.alternate,
  fontWeight: "bold",
}));

const ExerciseCard = ({ exercise }) => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  if (!exercise) {
    return <Loader />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <StyledCard sx={{ textTransform: "capitalize" }}>
        <CardContent>
          <ImageContainer smDevice={isSmallDevice}>
            <Image
              src={exercise.gifUrl}
              alt={exercise.name}
              smDevice={isSmallDevice}
            />
          </ImageContainer>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{
                color: theme.palette.primary.main,
                marginBottom: "0.5rem",
              }}
            >
              {exercise.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <PropertyLabel>Equipment:</PropertyLabel>
              <Typography>{exercise.equipment || "N/A"}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <PropertyLabel>Target:</PropertyLabel>{" "}
              <Typography>{exercise.target || "N/A"}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <PropertyLabel>BodyPart:</PropertyLabel>{" "}
              <Typography>{exercise.bodyPart || "N/A"}</Typography>
            </Box>
          </Box>
        </CardContent>
      </StyledCard>
    </Box>
  );
};

export default ExerciseCard;
