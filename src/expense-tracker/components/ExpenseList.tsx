import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import categories from "./Categories";

const schema = z.object({
    description: z.string().min(3 , { message: 'Description should be at least 3 character.' }).max(50),
    amount: z.number( { invalid_type_error: 'Amount field cannot be empty.' }).min(0.01).max(100_000),
    category: z.enum( categories, {
        errorMap: () => ({ message: 'Category field is not selected.'})
    }),
});

interface ExpenseListProp {
    id: number,
    description: string,
    amount: number,
    category: string
}

interface Prop {
    expenses: ExpenseListProp[];
    onDelete: (id: number) => void;
    onSelectCategory: (category: string) => void;
    onSubmit: (data: ExpenseFormData) => void;
}

type ExpenseFormData = z.infer<typeof schema>;


const ExpenseList = ({ expenses, onDelete, onSelectCategory, onSubmit }: Prop) => {

    // if (expenses.length === 0) {
    //     return null;
    // }

    const { register, handleSubmit, reset, formState: {errors} } = useForm<ExpenseFormData>({resolver: zodResolver( schema )});

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto mt-5">
                        <form className="form form-control" onSubmit={ handleSubmit( data => {
                            onSubmit(data);
                            reset();
                        }) }>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input { ...register('description') } id='description' type="text" className="form-control" />
                                { errors.description?.message && <p className="text-danger">{ errors.description.message }</p>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="amount" className="form-label">Amount</label>
                                <input { ...register('amount' , { valueAsNumber: true }) } id='amount' type="number" className="form-control" />
                                { errors.amount && <p className="text-danger"> { errors.amount.message }</p>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <select { ...register('category') } id="category" className="form-select">
                                    <option value="">All Categories</option>
                                    {
                                        categories.map((category) => <option key={category} value={category}>{category}</option>)
                                    }
                                </select>
                                { errors.category && <p className="text-danger"> { errors.category.message }</p>}
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-outline-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto mt-5">
                        <select className="form-select" onChange={(event) => onSelectCategory(event.target.value)}>
                            <option value="">All categories</option>
                            {
                                categories.map((category) => <option key={category} value={category}>{category}</option>)
                            }
                        </select>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto mt-2 ">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Category</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    expenses.map(expense => <tr key={expense.id}>
                                        <td>{expense.description}</td>
                                        <td>{expense.amount}</td>
                                        <td>{expense.category}</td>
                                        <td>
                                            <button className="btn btn-outline-danger" onClick={() => onDelete(expense.id)} >Delete</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Total</td>
                                    <td>${ expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2) }</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ExpenseList;