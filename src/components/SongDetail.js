import './SongDetail.css';
import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return (
        <div className="card">
        <div className="card-text">
            Please, select a song ;-)
        </div>
        </div>
        );
    };
    
    return (
    <div className="card">
    <div className="card-text">
        <h3>Details:</h3>
        <p>
            Title: {song.title}
            <br/>
            Duration: {song.duration}
        </p>
    </div>
    </div>
    );
};

const mapStateToProps = (state) => {
   return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);