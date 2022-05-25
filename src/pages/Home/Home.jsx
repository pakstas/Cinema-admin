import React from "react";
import Button from "@mui/material/Button";

function Home() {
  return (
    <>
      <div>
        Welcome to your React boilerplate. We hope that this will bring you up
        to speed with your development.
      </div>
      <section>
        <Button variant="contained" onClick={() => alert("hohoho")}>
          Check React Now
        </Button>
      </section>
    </>
  );
}

export default Home;
