import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function OrderPage() {
  const params = useParams();
  const userName = params.name; // Récupérer l'ID de l'utilisateur depuis l'URL

  return (
    <div>
      Order page {userName}
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
