import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const ITEM_HEIGHT = 48;

export default function Dropdown() {
    const { t } = useTranslation();

    const options = [
        { id: 1, name: t('dropdonProfileName1') },
        { id: 2, name: t('dropdonProfileName2') },
        { id: 3, name: t('dropdonProfileName3') },
        { id: 4, name: t('dropdonProfileName4') },
        { id: 5, name: t('dropdonProfileName5') },
    ];

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedOptionId, setSelectedOptionId] = React.useState(options[0]?.id); 

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (option) => {
        setSelectedOptionId(option.id);
        setAnchorEl(null);
    };

    const selectedOption = options.find(option => option.id === selectedOptionId);

    return (
        <div className='flex items-center'>
            <Typography >
               <h1 className='font-bold text-lg font-sans pb-1'> {selectedOption ? selectedOption.name : 'Select an option'} </h1>
            </Typography>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                className="text-gray-700"
            >
                <KeyboardArrowDownIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose(null)}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                        transformOrigin: 'left bottom',
                    },
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                {options.map((option) => (
                    <MenuItem
                        key={option.id}
                        selected={option.id === selectedOptionId}
                        onClick={() => handleClose(option)}
                        style={{
                            backgroundColor: option.id === selectedOptionId ? '#f0f0f0' : 'transparent',
                            fontFamily: 'sans-serif',
                            fontWeight: 'bold'
                        }}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
