import { useEffect, useState } from "react";
import userService, { userProps } from "../services/user-service";
import { CanceledError } from '../services/api-client';

const useUsers = () =>
{
    const [users, setUser] = useState<userProps[]>([]);
    const [erro, setErro] = useState();
    const [isLoading, setLoading] = useState(false);


    //using .then and .catch function ()
    useEffect(() => {

        setLoading(true);

            const { request, cancel } = userService.getAll<userProps>();
            request.then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(erro => {

                if (erro instanceof CanceledError) return;
                setErro(erro.message)
                setLoading(false);
            });

        return () => cancel();
    }, [])

    return { users, erro, isLoading, setUser, setErro };
}

export default useUsers;