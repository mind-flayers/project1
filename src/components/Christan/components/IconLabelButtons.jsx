import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons({ onClick }) {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<SendIcon />} onClick={onClick}>
                Send
            </Button>
        </Stack>
    );
}
