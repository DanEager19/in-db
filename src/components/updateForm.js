import React, {useState} from "react";
import {APIConnection} from "../functions/apiConnection"

function UpdateForm() {
    const title = 'Hades';
    const json = APIConnection(5000, title);
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {    
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        const url = `http://localhost:5000/games/${title}`
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        }
        fetch(url, requestOptions)
        .then(response => console.log('Submitted successfully'))
        .catch(error => console.log('Form submit error', error))
    };
    return (
        <div className="container">
{            json.map((item) => (
        <form onSubmit={handleSubmit} method="PUT" action="./" key={item.id}>
            <div className="row">
                <div className="row">
                    <div className="row">
                        <div className="row">
                            <h4>General:</h4>
                            <hr></hr>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="title">Title:</label>
                            </div>
                            <div className="col p-2">
                                <input type="text" id="title" name="title" value={inputs.title || item.title} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="summary">Summary:</label>
                            </div>
                            <div className="col p-2">
                                <textarea id="summary" rows="4" cols="40" name="summary" value={inputs.summary || item.summary} onChange={handleChange}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <h4>Info:</h4>
                            <hr></hr>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="dev">Developer:</label>
                            </div>
                            <div className="col p-2">
                                <input type="text" id="dev" name="dev" value={inputs.dev || item.developer} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="pub">Publisher:</label>
                            </div>
                            <div className="col p-2">
                                <input type="text" id="pub" name="pub" value={inputs.pub || item.publisher} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="date">Release Date:</label>
                            </div>
                            <div className="col p-2">
                                <input type="date" id="date" name="date" value={inputs.date || item.release_date} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="rating">Rating:</label>
                            </div>
                            <div className="col p-2">
                                <input type="text" id="rating" name="rating" value={inputs.rating || item.rating} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <h4>System Requirements:</h4>
                            <hr></hr>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="os">OS:</label>
                            </div>
                            <div className="col p-2">
                                <input type="text" id="os" name="os" value={inputs.os || item.os} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="cpu">Processor:</label>
                            </div>
                            <div className="col p-2">
                                <input type="text" id="cpu" name="cpu" value={inputs.cpu || item.processor} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="ram">Memory:</label>
                            </div>
                            <div className="col p-2">
                                <input type="text" id="ram" name="ram" value={inputs.ram || item.memory} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="gpu">Graphics:</label>
                            </div>
                            <div className="col p-2">
                                <input type="text" id="gpu" name="gpu" value={inputs.gpu || item.graphics} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="storage">Storage:</label>
                            </div>
                            <div className="col p-2">
                                <input type="text" id="storage" name="storage" value={inputs.storage || item.storage} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary" value="Submit">Update</button>
                    </div>
                </div>
            </div>
        </form>
))}
        </div>
    )
}

export default UpdateForm