import { type } from "@testing-library/user-event/dist/type";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import { z } from "zod";
import { zodResolver} from '@hookform/resolvers/zod';

const schema = z.object({
    name: z.string().min(3 , {message: 'Name field must be 3 characters.'}),
    age: z.number( { invalid_type_error: 'Age field is required.' } ).min(18)
});

type FormData = z.infer<typeof schema>;


const FormMosh = () => {

    //Using React hook form to submit form // added formStates for the form validation
    const { register, handleSubmit, formState: { errors , isValid} } = useForm<FormData>({resolver: zodResolver(schema)});
    // console.log(register);

    const onSubmit = (data: FieldValues) => console.log(data);
    

    //Using useRef hook code
    // const nameRef = useRef<HTMLInputElement>(null);
    // const ageRef = useRef<HTMLInputElement>(null);
    // const person = {name: '' , age: 0};

    //Using useState hook code
    // const [person , setPerson] = useState({
    //     name: '',
    //     age: ''
    // });

    // const handleSubmit = (event: FormEvent) =>{

        // event.preventDefault();

        //Using useRef hook code
        // if(nameRef.current !== null)
        //     person.name = nameRef.current.value;
        // if(ageRef.current !== null)
        //     person.age = parseInt(ageRef.current.value);
        // console.log(person);

        //Using useState hook code
        // console.log(person);



    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto mt-5 mb-3">
                        <form onSubmit={handleSubmit(onSubmit
                        )}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input { ...register('name') } id="name" type="text" className="form-control" />
                                { errors.name && <p style={{color:"red"}}>{ errors.name.message }</p>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label">Age:</label>
                                <input { ...register('age', {valueAsNumber: true}) } id="age" type="number" className="form-control" />
                                { errors.age && <p style={{color:"red"}}> { errors.age.message } </p>}
                            </div>
                            <button disabled={!isValid} className="btn btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormMosh;