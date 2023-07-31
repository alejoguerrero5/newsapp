import { Container, Grid, Typography } from '@mui/material'
import Form from './components/Form'
import ListadoNoticias from './components/ListadoNoticias'
import { NoticiasProvider } from './context/NoticiasProvider'

function App() {


  return (

    <NoticiasProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} component='h1' variant='h3'>
            News Search Engine
          </Typography>
        </header>

        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item xs={12} md={6} lg={4}>
            <Form />
          </Grid>
        </Grid>

        <ListadoNoticias />

      </Container>
    </NoticiasProvider>

  )
}

export default App
