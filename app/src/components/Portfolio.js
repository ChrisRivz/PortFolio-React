import React from 'react'
import { Container } from 'react-bootstrap'

import MovieProject from '../images/MoviesProject.png';
import PlatziProject from '../images/PlatziProject.png';
import Rick_and_Morty from '../images/RickMorty.png';
import Login from '../images/Login.png';
import HarryPotter from '../images/HarryPotter.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${height * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const itemData = [
    {
        img: Rick_and_Morty,
        title: 'SPA using Rick and Morty API and React Hooks',
        author: 'Christopher Rivadeneyra',
        src: 'https://chrisrivz.com/PortFolio/RickandMorty/',
        featured: true
    }, 
    {
        img: PlatziProject,
        title: 'Platform to track the attendees with React.js',
        src: 'https://chrisrivz.com/PortFolio/RickandMorty/',
        author: 'Christopher Rivadeneyra',
    },
    {
        img: MovieProject,
        title: 'Cinema app project with Vue.js',
        src: 'https://chrisrivz.com/PortFolio/RickandMorty/',
        author: 'Christopher Rivadeneyra',
    },
    {
        img: HarryPotter,
        title: 'SPA using API Harry Potter, and React JS (Hooks)',
        src: 'https://chrisrivz.com/PortFolio/HarryPotter/',
        author: 'Christopher Rivadeneyra',
    },
    {
        img: Login,
        title: 'SPA using https://reqres.in/ API and React JS (Hooks)',
        author: 'Christopher Rivadeneyra',
        src: 'https://chrisrivz.com/PortFolio/LoginReact',
    }
];

const handleClick = item => {
    window.open(item.src, "_blank")
}

function Portfolio() {

    return (

        <div className="Portfolio-section">
            <Container className="Container-portfolio">

                <h4>My Portfolio</h4>

                <ImageList
                    sx={{
                        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                        transform: 'translateZ(0)',
                    }}
                    rowHeight={200}
                    gap={1}
                >
                    {itemData.map((item) => {
                        const cols = item.featured ? 2 : 1;
                        const rows = item.featured ? 2 : 1;

                        return (
                            <ImageListItem key={item.img} cols={cols} rows={rows}>
                                <img
                                    {...srcset(item.img, 250, 200, rows, cols)}
                                    alt={item.title}
                                    loading="lazy"
                                    src={item.img}
                                    target="_blanck"
                                />
                                <ImageListItemBar
                                    sx={{
                                        background:
                                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                    }}
                                    title={item.title}
                                    position="top"
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: 'white' }}
                                            aria-label={`star ${item.title}`}
                                            onClick={() => handleClick(item)}
                                        >
                                            <StarBorderIcon />
                                        </IconButton>
                                    }
                                    actionPosition="left"
                                />
                            </ImageListItem>
                        );
                    })}
                </ImageList>

            </Container>
        </div>
    )
}

export default Portfolio;