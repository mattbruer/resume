function App() {
  return (
    <div className="App">
      <header style={styles.header}>Matt Bruer's portfolio</header>
      <div style={styles.body}>
        <div style={styles.project}>Project1</div>
        <div style={styles.project}>Project2</div>
      </div>
    </div>
  );
}

export default App;

const styles = {
  header: {
    borderBottom: "1px solid grey",
    position: "fixed",
    top: "0px",
    height: "64px",
    width: "100%",
    backgroundColor: "#123",
    color: "white",
  },
  body: {
    marginTop: "65px",
    border: "1px solid grey",
    display: "flex",
  },
  project: {
    height: "150px",
    width: "150px",
    border: "1px solid grey",
  },
};
