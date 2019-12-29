// Reducer
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Welcome to the party!', duration: '1:47' },
        { title: 'What\'s up danger', duration: '3:00' },
        { title: 'Cruel', duration: '3:36' },
        { title: 'Bump & Grind', duration: '2:36' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    };

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});