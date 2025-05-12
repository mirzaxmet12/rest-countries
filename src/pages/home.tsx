import { RootState } from '../redux'
import { useSelector } from 'react-redux'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchCountry from '../components/searchCountry'
import FilterRegion from '../components/filterRegion'


function Home() {
    const { countries, searchCountry, regionFilter } = useSelector((state: RootState) => state.countries)
    console.log(regionFilter);

    const filter = countries.filter((c) => {
        const nameMatch = c.name.common.toLowerCase().includes(searchCountry.toLowerCase());
        const regionMatch = regionFilter ? c.region === regionFilter : true;
        return nameMatch && regionMatch;

    })

    return (
        <Box sx={{
            width: '90%',
            margin: 'auto'
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                m: '30px 0 30px 0',
                alignItems:'center'
            }}>
                <SearchCountry />
                <FilterRegion />
            </Box>
            <Grid container spacing={7} sx={{
                
            }}>
                {filter.map((c) => (
                    <Card key={c.name.common} sx={{
                        width: 300,
                        bgcolor:'var(--bg-card-color)'
                    }} component={Link} to={`/country/${c.cca3}`}>
                        <CardMedia
                            component='img'
                            image={c.flags.svg}
                            height='170'
                        />
                        <CardContent sx={{
                            pt: 3,
                        }}>
                            <Typography gutterBottom sx={{
                                textAlign: 'left',
                                fontWeight: '600',
                            }}>{c.name.common}</Typography>
                            <Typography variant='body2'>Население: {c.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</Typography>
                            <Typography variant='body2'>Регион: {c.region}</Typography>
                            <Typography variant='body2'>Столица: {c.capital}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Grid>
        </Box>
    )
}

export default Home