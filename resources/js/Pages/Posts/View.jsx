
import RootLayout from '../../Layouts/RootLayout';

const View = ({post}) => {
  return (
    <>
    <div className="flex flex-col justify-center items-center p-4">
        <div className="text-sm text-slate-600">
            <span>Posted on : </span>
            <span>{ new Date(post.created_at).toLocaleTimeString()}</span>
        </div>
        <div className="text-xl font-medium">
            <h2>{post.title}</h2>
        </div> 
        <p className="font-medium">
            {post.body}
        </p>
       
    </div>
    </>
  )
}

 View.layout = viewPostPage => <RootLayout children={viewPostPage} />

export default View;