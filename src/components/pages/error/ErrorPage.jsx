const ErrorPage = () => {
  return (
    <div>
      <h1>404 Error</h1>
      <p>Page not found</p>
      <Link to="/">
        <button>Retour accueil</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
