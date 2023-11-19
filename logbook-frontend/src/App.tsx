import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import FormTable from "./components/FormTable";

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <FormTable />
      </GridItem>
    </Grid>
  );
}

export default App;
