import RootLayout from "@/Layouts/RootLayout"
import { Link, useForm, usePage } from "@inertiajs/react"
import { useEffect, useState } from "react";
import FlashMessage from "../../Components/FlashMsg";


const Post = ({posts}) => {
    const {delete : destroy } = useForm();

    const { flash } = usePage().props;
    const [flashMsg, setFlashMsg] = useState(null);
  
   useEffect(() => {
        if (flash.message) {
            setFlashMsg({
                message: flash.message,
                type: flash.type || "success"
            });

            const timer = setTimeout(() => {
                setFlashMsg(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [flash]);
   
    const handleDelete = (id) => {
        if(confirm("Are you sure you want to delete this post?")){
            destroy(`/posts/${id}`);
             
        }
        
    } 

  return (
    <div className="min-h-screen flex justify-center ">
        <div className="w-full max-xxl rounded-lg overflow-hidden shadow-lg bg-white p-8 space-y-4">                       
            <div className="flex justify-center items-center">
                <h2 className="font-bold text-xl mb-2">Posts</h2>
            </div>

            <FlashMessage message={flashMsg?.message} type={flashMsg?.type} />

            <div className="mt-5 flex items-center flex-start">
                <Link
                href="/posts/create"
                className="font-semi-bold text-white cursor-pointer hover:bg-indigo-500 bg-indigo-600 px-4 py-2 rounded-md shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2
                    focus-visible:outline-indigo-600"
                
                >Create</Link>
            </div>

            <div>
                {posts.data.map(post => (
                    <div key = {post.id} className="p-4 border-b">
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
                        <div className="flex justify-end gap-2">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                handleDelete(post.id);
                            }}>
                                <button
                                 className="bg-red-500 shadow-lg px-3 py-1 font-semibold text-white rounded-md cursor-pointer hover:bg-red-400"                                                               
                                >
                                Delete
                                </button>

                            </form>
                            <Link
                                href={`/posts/${post.id}/edit`}
                                className="bg-green-500 shadow-lg px-3 py-1 font-semibold text-white rounded-md cursor-pointer hover:bg-green-400"
                                
                                >
                                Edit
                            </Link>
                            <Link
                                href={`/posts/${post.id}`}
                                className="bg-indigo-500 shadow-lg px-3 py-1 font-semibold text-white rounded-md cursor-pointer hover:bg-indigo-400"
                                
                                >
                                View
                            </Link>
                           
                        </div>
                    </div>

                ))}
            </div>
            <div className="py-12 px-4">
                {posts.links.map(link => (
                    link.url ? (
                        <Link
                        key={ link.label }
                        href={ link.url }
                        dangerouslySetInnerHTML={{ __html: link.label}}
                        className={`p-1 mx-1 ${ link.active ? "text-blue-500 font-bold" : ""}`}
                        />
                    ) : (
                        <span
                        key={link.label}
                        dangerouslySetInnerHTML={{__html: link.label}}
                        className="p-1 mx-1 text-slate-300"
                        />
                    )
                
                ))}
            </div>
          
                    
            <div className="px-6 pt-4 pb-2">
            {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag
            </span> */}
            </div>
        </div>
    </div>
  )
}

Post.layout = PostPage => <RootLayout children = {PostPage} />

export default Post;