import React from "react";
import { styled } from "@mui/system";
import { Card, CardContent, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Chest from "../../assets/chest.png";
import Legs from "../../assets/legs.png";
import Back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";
import ScrollButton from "../ScrollButton";
import { useTheme } from "@emotion/react";

const BodyParts = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const bodyParts = [
    { id: 1, name: "back", image: Back },
    { id: 2, name: "cardio", image: Back },
    { id: 3, name: "chest", image: Chest },
    { id: 4, name: "lower arms", image: Chest },
    { id: 5, name: "lower legs", image: Legs },
    { id: 6, name: "neck", image: Back },
    { id: 7, name: "shoulders", image: Chest },
    { id: 8, name: "upper arms", image: Chest },
    { id: 9, name: "upper legs", image: Legs },
    { id: 10, name: "waist", image: Back },
  ];

  const CarouselContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    marginBottom: "3rem",
    maxWidth: "100%", // Set maximum width
    overflow: "hidden", // Hide overflowing content
  });

  const CardContainer = styled("div")({
    maxWidth: "16rem",
    margin: "0 auto",
  });

  const Image = styled("img")({
    width: "100%",
    height: "auto",
  });

  const StyledCard = styled(Card)(({ theme }) => ({
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.secondary.alt,
      color: "white",
      transition: "background-color 1s ease-in",
    },
  }));

  const getCarouselWidth = () => {
    if (window.innerWidth >= 1100) {
      return "33.33"; // Show 2 slides on medium devices
    } else if (window.innerWidth >= 600) {
      return "50"; // Show 1 slide on small devices
    } else {
      return "100"; // Show 1 slide on extra small devices
    }
  };

  return (
    <>
      <ScrollButton />
      <CarouselContainer>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={true}
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <ChevronLeftIcon
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  left: "30%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                  borderRadius: "50%",
                }}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <ChevronRightIcon
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  right: "30%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: "50%",
                  color: "white",
                }}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            )
          }
          renderIndicator={(onClickHandler, isSelected, index, label) => (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                border: "none",
                background: "none",
                padding: 0,
                margin: "0 4px",
                cursor: "pointer",
                opacity: isSelected ? 1 : 0.5,
                transition: "opacity 0.15s ease-in-out",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  display: "inline-block",
                  background: isSelected ? "#000" : "#ccc",
                }}
              />
            </button>
          )}
          centerMode={true}
          centerSlidePercentage={100}
          style={{ width: getCarouselWidth() }}
        >
          {bodyParts.map((bodyPart) => (
            <CardContainer key={bodyPart.id}>
              <StyledCard onClick={() => navigate(`/${bodyPart.name}`)}>
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      textTransform: "capitalize",
                    }}
                  >
                    {bodyPart.name}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Image src={bodyPart.image} alt={bodyPart.name} />
                </CardContent>
              </StyledCard>
            </CardContainer>
          ))}
        </Carousel>
      </CarouselContainer>
    </>
  );
};

export default BodyParts;
