import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div style={styles.notFoundContainer}>
      <h1 style={styles.notFoundTitle}>404 - Page Not Found</h1>
      <p style={styles.notFoundMessage}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" style={styles.goBacklink}>
        Go back to the Dashboard
      </Link>
    </div>
  );
};

const styles = {
  notFoundContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    textAlign: "center",
    padding: "5rem",
    color: "#ff4d4d",
  },
  notFoundTitle: {
    fontSize: "4rem",
    marginBottom: "1rem",
  },
  notFoundMessage: {
    fontSize: "1.5rem",
  },
  goBacklink: {
    marginTop: "2rem",
    fontSize: "1.2rem",
    color: "#007bff",
  },
};

export default NotFoundPage;
