import CustomBtn from './CustomBtn';

type CardProp = {
    title: string;
    url:string;
    desc: string;
}

export default function Card( { title, desc , url} : CardProp  ) {
  return (
    <div className="card" >
    <img src={url} className="card-img-top" alt="..." />
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <CustomBtn label='See more' />
    </div>
</div>
  )
}
