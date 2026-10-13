import React from "react";
import Card from "react-bootstrap/Card";

const player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "15px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={name}
        style={{ height: "280px", objectFit: "cover" }}
      />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title style={{ color: "#0d6efd", fontWeight: "bold" }}>
          {name}
        </Card.Title>
        <Card.Text>
          <strong>Équipe :</strong> {team} <br />
          <strong>Nationalité :</strong> {nationality} <br />
          <strong>Numéro :</strong> {jerseyNumber} <br />
          <strong>Âge :</strong> {age} ans
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

player.defaultProps = {
  name: "Joueur inconnu",
  team: "Sans équipe",
  nationality: "Inconnue",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/300x280?text=Player",
};



const players = [
  {
    name: "Lionel Messi",
    team: "Inter Miami",
    nationality: "Argentine",
    jerseyNumber: 10,
    age: 39,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgf4oRSkaQCj2KJTjB3HioE6fxagW8ZbN4l1JQbetaBA&s",
  },
  {
    name: "Kylian Mbappé",
    team: "Real Madrid",
    nationality: "Française",
    jerseyNumber: 9,
    age: 27,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfw_OQp1rezswhl7VDhmnaXv2Zj_5DL4w5caxlCMKlQ&s",
  },
  {
    name: "Erling Haaland",
    team: "Manchester City",
    nationality: "Norvégienne",
    jerseyNumber: 9,
    age: 26,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNStgd_BfxCI9IfPwTbkDCZ63qXwX0XpTHPvho40fmoA&s=10",
  },
  {
    name: "Achraf Hakimi",
    team: "Paris Saint-Germain",
    nationality: "Marocaine",
    jerseyNumber: 2,
    age: 27,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4UPPUWRl-Cxkgf-_rIRW5o5QDmOZryJQQgaALPKYvw&s",
  },
];


export default players;
