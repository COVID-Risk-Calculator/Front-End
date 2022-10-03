import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Homepage() {
    const navigate = useNavigate()

    const images = [
        {
            url: '/party.jpg',
            title: 'Create a New Event',
            width: '40%',
            marginBottom: '20px'
            
        },
        {
            url: '/pastparty.jpg',
            title: 'See Saved Events',
            width: '40%',
            
        },
    ];

    const ImageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: 200,
        marginBottom:'20px',
        [theme.breakpoints.down('sm')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &.Mui-focusVisible': {
            zIndex: 1,
            '& .MuiImageBackdrop-root': {
                opacity: 0.15,
            },
            '& .MuiImageMarked-root': {
                opacity: 0,
            },
            '& .MuiTypography-root': {
                border: '4px solid currentColor',
            },
            
        },
    }));

    const ImageSrc = styled('span')({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    });

    const Image = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    }));

    const ImageBackdrop = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    }));

    const ImageMarked = styled('span')(({ theme }) => ({
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    }));

    const handleClick = (title) => {
        if (title === 'Create a New Event') {
            console.log('clicked: ' + title)
            navigate('new/')
        } else if (title === 'See Saved Events') {
            console.log('clicked: '+ title)
            navigate('saved/')
        }
    }

    return (
        <>
            <div style={{
                border: '2px solid',
                padding: '20px',
                marginTop: '50px',
                marginLeft:'15vw',
                width: '60vw',
                fontSize: '20px', 
                
            }}>About the Covid Calculator:  This calculator is not medical advice.  It's an attempt
                to organize some facts on COVID to help with family and personal decision-making.
                You can see more details in this newsletter post here:
                https://emilyoster.substack.com/p/what-can-i-do-a-calculator.
                The last page gives you some results.
            </div>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', minWidth: 300, width: '100%', mt:'60px', ml:'29vw',  }}>
                {images.map((image) => (
                    <ImageButton
                        focusRipple
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                        onClick={()=>handleClick(image.title)}
                    >
                        <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                {image.title}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </ImageButton>
                ))}
            </Box>
        </>
    )
}