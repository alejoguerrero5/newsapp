import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'

const ListadoNoticias = () => {

    const { noticias, totalNoticias, handleChangePage, pagina } = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 20)


    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant='h3'
                component={'h2'}
            >
                Last News
            </Typography>

            <Stack
                sx={{
                    marginY: 5
                }}
                spacing={2}
                direction={'row'}
                justifyContent='center'
                alignItems='center'
            >
                <Pagination
                    count={totalPaginas}
                    variant="outlined"
                    color="primary"
                    onChange={handleChangePage}
                    page={pagina}
                />
            </Stack>

            <Grid
                container
                spacing={2}
            >
                {noticias.map(noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}

            </Grid>

            <Stack
                sx={{
                    marginY: 5
                }}
                spacing={2}
                direction={'row'}
                justifyContent='center'
                alignItems='center'
            >
                <Pagination
                    count={totalPaginas}
                    variant="outlined"
                    color="primary"
                    onChange={handleChangePage}
                    page={pagina}
                />
            </Stack>
        </>
    )
}

export default ListadoNoticias
