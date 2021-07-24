import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {format} from 'timeago.js';
import axios from 'axios';

export default function Home() {
    const [notes, setNotes] = useState([]);
    const [token, setToken] = useState('');

    const getNotes = async (token) => {
        const res = await axios.get('api/notes', {
            headers: {Authorization: token}
        })
        console.log(res);
    }
    return (
        <div className="note-wrapper">
            <div className="card">
                <h4 title="Note Title">Note Title</h4>
                <div className="text-wrapper">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    </p>
                </div>
                <p className="date">Note Date</p>
                <div className="card-footer">
                    Username
                    <Link to="/">Edit</Link>
                </div>
                <button className="close">X</button>

            </div>

        </div>
    )
}
