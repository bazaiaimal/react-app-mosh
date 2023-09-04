
type ButtonProps = {
    label: string, 
    onClick? :  () => void;

}

export default function CustomBtn({label, onClick}:ButtonProps) {
  return (
    <button onClick={onClick} className='btn btn-primary'>{label}</button>
  )
}
