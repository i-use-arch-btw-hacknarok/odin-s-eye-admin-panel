import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { TextField, IconButton, Menu, MenuItem, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import './SearchBar.css';

interface SearchBarProps {
    onSearch: (searchQuery: string) => void;
    onSort: (sortValue: string) => void;
    onFilter: (filterValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onSort, onFilter }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [anchorElSort, setAnchorElSort] = useState<null | HTMLElement>(null);
    const [anchorElFilter, setAnchorElFilter] = useState<null | HTMLElement>(null);

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        onSearch(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    const handleSortClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorElSort(event.currentTarget);
    };

    const handleSortClose = (sortValue: string) => {
        setAnchorElSort(null);
        onSort(sortValue);
    };

    const handleFilterClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorElFilter(event.currentTarget);
    };

    const handleFilterClose = (filterValue: string) => {
        setAnchorElFilter(null);
        onFilter(filterValue);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderColor: 'white'}}>
            <TextField
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                variant="outlined"
                size="small"
                sx={{color: 'white', borderColor: "white", border: 1, borderRadius: '10px'}}
                InputProps={{
                    color: "primary",
                    endAdornment: (
                        <IconButton onClick={handleSearch}
                                    sx={{color: 'white'}}>
                            <SearchIcon />
                        </IconButton>
                    ),
                }}
            />
            <Button
                aria-controls="sort-menu"
                aria-haspopup="true"
                onClick={handleSortClick}
                sx={{color: 'green'}}
                startIcon={<SortIcon />}
            >
                Sort
            </Button>
            <Menu
                id="sort-menu"
                anchorEl={anchorElSort}
                keepMounted
                open={Boolean(anchorElSort)}
                sx={{color: 'green'}}
                onClose={() => handleSortClose('')}
            >
                <MenuItem onClick={() => handleSortClose('name')} sx={{color: 'green'}}>Name</MenuItem>
                <MenuItem onClick={() => handleSortClose('date')} sx={{color: 'green'}}>Date</MenuItem>
            </Menu>
            <Button
                aria-controls="filter-menu"
                aria-haspopup="true"
                sx={{color: 'green'}}
                onClick={handleFilterClick}
                startIcon={<FilterListIcon />}
            >
                Filter
            </Button>
            <Menu
                id="filter-menu"
                anchorEl={anchorElFilter}
                sx={{color: 'green'}}
                keepMounted
                open={Boolean(anchorElFilter)}
                onClose={() => handleFilterClose('')}
            >
                <MenuItem onClick={() => handleFilterClose('active')} sx={{color: 'green'}}>Active</MenuItem>
                <MenuItem onClick={() => handleFilterClose('completed')} sx={{color: 'green'}}>Completed</MenuItem>
            </Menu>
        </div>
    );
};

export default SearchBar;
