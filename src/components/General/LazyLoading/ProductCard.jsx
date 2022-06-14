import React, { Fragment } from 'react';
import { Box, Button } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
const ProductCard = (props) => {
    return (
        <Fragment>
            <Box
                sx={{
                    borderRadius: '8px',
                    transition: 'all 0.5s ease',
                    cursor: 'pointer',
                    mb: 5,
                    '&:hover': {
                        transform: 'scale(1.1)',
                    },
                }}
            >
                <Box sx={{ width: '100%', height: '250px', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}>
                    <img src={props.prodImg} title={props.prodImgTitle} style={{ width: '100%', height: '100%' }} />
                </Box>
                <Box sx={{ p: '0.8rem', background: 'white' }}>
                    <p>{props.prodTitle}</p>
                    <p>{props.prodDes}</p>
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Button onClick={props.onClick} className="addCartBtn">
                            <ShoppingCartCheckoutIcon />
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Fragment>
    );
};

export default ProductCard;
