import { useEffect, useState } from "react"
import Card from "react-bootstrap/Card";
import { CanceledError } from '../services/api-client'
import userService from "../services/user-service";
import { userProps } from "../services/user-service";
import useUsers from "../hooks/useUsers";


const AxiosApi = () => {

    const { users, erro, isLoading, setUser, setErro } = useUsers();

    //Fetching the api data using async method with try and catch
    // useEffect(() => {

    //     const fetchUsers = async () => {                          
    //         try {
    //             const response = await axios
    //                 .get<userProps[]>('https://jsonplaceholder.typicode.com/users')
    //             setUser(response.data);
    //         }
    //         catch (erro) {
    //             setErro((erro as AxiosError).message);
    //         }
    //     }

    //     fetchUsers();
    // }, [])

    const handleDelete = (user: userProps) => {
        const orginalUsers = [...users];
        setUser(users.filter(u => u.id !== user.id));
        
            userService.delete(user.id).catch(err => {
                setErro(err.message);
                setUser(orginalUsers);
            })
    }

    const handleAddUser = () => {

        const originalUsers = [...users];
        const newUser = { id: 0, name: 'Aimal Khan' };
        setUser([newUser, ...users]);

        
            userService.create(newUser).then(({ data: savedUser }) => setUser([savedUser, ...users]))
            .catch(err => {
                setErro(err.message);
                setUser(originalUsers);
            })
    }

    const handleUpdate = (user: userProps) => {

        const originalUsers = [...users];
        const updatedUser = { ...user, name: user.name + '!'};
        setUser(users.map( u => u.id === user.id ? updatedUser : u));

        userService.update(updatedUser).catch( err => {
            setErro(err.message);
            setUser(originalUsers);
        })
    }

    return (
        <>
            {erro && <p className="text-danger">{erro}</p>}
            {isLoading && <div className="spinner-border"></div>}

            <button className="btn btn-primary mt-3" onClick={handleAddUser}>Add User</button>
            {
                users.map((user, index) =>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 my-2 mx-auto" key={index}>
                        <Card>
                            <Card.Body className='card-body'>
                                <h3>ID # {user.id}</h3>
                                <Card.Title><h4>{user.name}</h4></Card.Title>
                                <Card.Text>
                                    <div className="mx-1">
                                        <button className="btn btn-outline-info" onClick={() => handleUpdate(user)}>Update</button>
                                        <button className="btn btn-outline-danger" onClick={() => handleDelete(user)}>Delete</button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>)
            }
        </>
    )
}

export default AxiosApi;