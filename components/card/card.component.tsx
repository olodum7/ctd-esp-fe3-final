import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { IComic } from "types/IComic.type";
import NextLink from "next/link";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  backgroundColor: "black",
  color: "white",
  borderRadius: "20px",
  marginLeft: "16px",
  "&:hover": {
    backgroundColor: "#333",
  },
});

const StyledLink = styled("a")({
  color: "black",
  textDecoration: "underline",
  marginLeft: "-6px",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "none",
  },
});

interface Props {
  comic: IComic;
}

const CardComponent: FC<Props> = ({ comic }) => {
  return (
    <Card sx={{ maxHeigth: 500 }}>
      <Box>
        <CardMedia
          component="img"
          height="350"
          image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {comic.title}
          </Typography>
          <CardActions>
            <NextLink href={`/comics/${comic.id}`}>
              <StyledLink>Ver detalles</StyledLink>
            </NextLink>
            <NextLink href={`/checkout?comic=${comic.id}`}>
              <StyledButton>COMPRAR</StyledButton>
            </NextLink>
          </CardActions>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardComponent;
