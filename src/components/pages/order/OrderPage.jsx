import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function OrderPage() {
  const params = useParams();
  const username = params.username; // Récupérer l'ID de l'utilisateur depuis l'URL

  return (
    <div>
      Order page {username}
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
