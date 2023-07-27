import {
  Grid,
  Button,
  Container,
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";

function App() {
  return (
    <Container>
      {/* <Grid container sx={{ flexGrow: 1 }}>
        <Grid xs={8}>
          <Button variant="contained">Hello World</Button>
        </Grid>
        <Grid xs={4}>
          <Button variant="contained">Hello World</Button>
        </Grid>
        <Grid xs={4}>
          <Button variant="contained">Hello World</Button>
        </Grid>
      </Grid> */}
      {/* <Box component="button" sx={{ border: "1px solid px-2 grey" }}>
        Save
      </Box> */}
      {/* <Box
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Box>
          <Button variant="contained">HELLO</Button>
        </Box>
        <Box>
          <Button variant="contained">HELLO</Button>
        </Box>
        <Box>
          <Button variant="contained">HELLO</Button>
        </Box>
      </Box> */}
      <Grid display="flex" justifyContent="space-around">
        <Grid>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be . nev . o . lent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be . nev . o . lent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be . nev . o . lent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

// sx es para colocar estilos en linea, es DISTINTO a xs, md, lg, xl
