import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material'
import useNoticias from '../hooks/useNoticias'

const CATEGORIAS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Bussines' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' },
]

const Form = () => {

    const { categoria, handleChangeCategoria } = useNoticias()

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                    label='Categoria'
                    onChange={handleChangeCategoria}
                    value={categoria}
                >
                    {CATEGORIAS.map(categoria => (
                        <MenuItem
                            key={categoria.value}
                            value={categoria.value}
                        >
                            {categoria.label}
                        </MenuItem>
                    ))}

                </Select>

                {/* <Box sx={{ marginTop: 2 }}>
                    <Button
                        fullWidth
                        variant='contained'
                        color='primary'
                    >
                        Buscar Noticias
                    </Button>
                </Box> */}

            </FormControl>
        </form>
    )
}

export default Form
