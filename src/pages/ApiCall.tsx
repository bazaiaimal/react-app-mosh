import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomBtn from '../components/CustomBtn';

interface apiList {
    id: number,
    title: string,
    body: string
}

function ApiCall() {

    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const [api, setApi] = useState<apiList[]>([]);

    const handleSubmit = () =>
    {
        // const [newData , setNewData] = useState({
        //     ...api, id: id, title: title, body: body
        // });

        const nextVal = api.length + 1;
        // add item at the end
        const arrayCopy = [...api, nextVal];

        console.log(arrayCopy);


    // add item at the start
    // const arrayCopy = [nextVal, ...array];
    // setApi(arrayCopy);
//   };

        // setApi([...api ])

        // console.log("Title:", title);
        // console.log("Body:" , body);

    }

    const onChangeId = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setId(event.target.value);
    }

    const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.target.value);
    }

    const onChangeBody = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setBody(event.target.value);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response)
            .then(((e) => e.json())).then(e => setApi(e));
    }, [])

    return (
        <div className="row mt-3 mx-auto" style={{ padding: '40px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label">Id #</label>
                                <input type="number" value={id} onChange={onChangeId} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input type="text" value={title} onChange={onChangeTitle} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Body</label>
                                <input type="text" value={body} onChange={onChangeBody} className="form-control" id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className="col-12">
                            <CustomBtn label='Submit' onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>

            {
                api.map((api, index) =>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 my-2" key={index}>
                        <Card>
                            <Card.Body className='card-body'>
                                <h3>ID # {api.id}</h3>
                                <Card.Title><h4>{api.title}</h4></Card.Title>
                                <Card.Text>
                                    {api.body}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>)
            }
        </div>
    )
}

export default ApiCall;