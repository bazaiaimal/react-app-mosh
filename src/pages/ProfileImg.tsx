import Profile from '../components/Profile'

export default function ProfileImg()   {

  const blogs = [
    {
      url: "https://photosfile.com/wp-content/uploads/2022/07/Cartoon-DP-Boy-2.jpeg",

    },
    {
      url: "https://static.vecteezy.com/system/resources/previews/020/389/525/original/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-vector.jpg",

    },
    {
      url: "https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=826",

    },
  ]


  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h1>Profile Images</h1>
        </div>

        {
          blogs.map((blog, index) =>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3  my-2" key={index}>
              <Profile url={blog.url} />
            </div>)
        }

        <div className="col-lg-12 col-md-6">
          <h1 className=''>Description</h1>
          <p>Make life fun, tomorrow isn't guaranteed. Life is full of surprises. Be brave enough to live differently. It's better to be an initial noted version of yourself, rather than a second noted version of someone else.</p>
        </div>

      </div>
    </div>
  )
}
