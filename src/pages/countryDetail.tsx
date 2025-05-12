import { Box, Button, Card, CardContent, CardMedia, Grid,  Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { RootState } from '../redux'


function CountryDetail() {
    const { id } = useParams()
    const countries = useSelector((state: RootState) => state.countries.countries)
    const country = countries.find((c) => c.cca3 == id)
    console.log(country);
    const currencies = Object.values(country?.currencies || {}).map((c) => c.name).join(', ')
    const languages = Object.values(country?.languages || {}).join(', ')

    const borderCountries = country?.borders?.map((borderCode) => {
        const border = countries.find((c) => c.cca3 === borderCode);
        return border ? (
            <Box component={Link}
                key={border.cca3}
                to={`/country/${border.cca3}`}
                sx={{
                    display: 'inline-block',
                    mr: 1,
                    mt: 1,
                    pl: 3,
                    pr: 3,
                    boxShadow: '0 0 3px  1.5px  rgba(0,0,0,0.12)',
                    background:'var(--bg-card-color)',
                }}
            >
                {border.name.common}
            </Box>
        ) : null;
    });

    const nativeName = country?.name.nativeName ?
        Object.values(country.name.nativeName).at(-1)?.common :
        country?.name.common

    console.log(nativeName);
    console.log(borderCountries);

    return (
        <Box sx={{
            width: '1300px',
            margin: 'auto',
        }}>
            <Button variant='outlined' component={Link} to='/' sx={{
                m: '30px 0 30px 0',
                border: 'none',
                pl: 3,
                pr: 3,
                bgcolor: 'var(--bg-card-color)',
                color:'var(--text-color)',
                boxShadow: '0 0 3px  1.5px  rgba(0,0,0,0.12)',

            }}>Back</Button>
            <Card sx={{
                display: 'flex',
                height: '400px',
                background: 'none',
                border: 'none',
                boxShadow: 'none'

            }}>
                <CardMedia component='img'
                    image={country?.flags.svg} sx={{
                        width: '50%',
                    }} />
                <CardContent sx={{
                    width: '50%',
                    ml: 5,
                    mt: 3,
                    p: 0
                }}>
                    <Typography gutterBottom variant='h4' sx={{
                        textAlign: 'left',
                        fontWeight: '600',
                        mt: 3
                    }}>{country?.name.common}</Typography>
                    <Grid container >
                        <Grid sx={{
                            width: '50%'
                        }}>
                            <Typography gutterBottom variant='body2'><strong>Название:</strong> {nativeName}</Typography>
                            <Typography gutterBottom variant='body2'><strong>Регион:</strong> {country?.region}</Typography>
                            <Typography gutterBottom variant='body2'><strong>Население:</strong> {country?.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</Typography>
                            <Typography gutterBottom variant='body2'><strong>Субрегиен:</strong> {country?.subregion}</Typography>
                            <Typography gutterBottom variant='body2'><strong>Столица:</strong> {country?.capital}</Typography>
                        </Grid>
                        <Grid>
                            <Typography gutterBottom variant='body2'><strong>Домен верхнего уровня:</strong> {country?.tld}</Typography>
                            <Typography gutterBottom variant='body2'><strong>Валюты:</strong> {currencies}</Typography>
                            <Typography gutterBottom variant='body2'><strong>Языки:</strong> {languages}</Typography>
                        </Grid>
                    </Grid>
                        <div style={{ 
                            marginTop: '24px',
                            
                            }}>
                            <Typography variant="h6" gutterBottom>Приграничные страны:</Typography>
                            {borderCountries?.length?borderCountries:'None'}
                        </div>
                </CardContent>
            </Card >
        </Box>
    )
}

export default CountryDetail
