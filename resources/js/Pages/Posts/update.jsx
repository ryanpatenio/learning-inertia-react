import { Head, useForm } from '@inertiajs/react';
import RootLayout from '../../Layouts/RootLayout';

const update = ({ post }) => {

const { data, setData, put, errors, processing} = useForm({
    title: post.title,
    body : post.body
});

function handleSubmit(e){
     e.preventDefault();
     put(`/posts/${post.id}`);
 }

  return (
    <>
    <Head title="Edit" />

    <div className="min-h-screen flex justify-center items-center bg-gray-900">
        <div className="w-full max-w-xl rounded-lg overflow-hidden shadow-lg bg-white p-8 space-y-4">                       
            <div className="flex justify-center items-center">
                <h2 className="font-bold text-xl mb-2">Update Post</h2>
            </div>
    
            <form className="p-4" onSubmit={handleSubmit}>
                <div className="mt-10 mb-4">                    
                    <label htmlFor="post-title" className="w-1/3 pr-4 text-sm/6 font-medium text-gray-900" >Title</label>                                 
                        <input 
                        type="text"
                        id="first-name"
                        name="firstname"
                        value={data.title}
                        onChange={(e)=> setData('title',e.target.value)}
                            autoComplete="given-name"
                            className="w-2/3 px-3 py-1.5 rounded-md bg-white text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                           
                        />
                        
                        {errors.title && 
                            <div className="flex flex-col">
                                <span className="text-red-900 font-semi-bold text-sm/6 ml-12"> {errors.title}</span>
                            </div>                      
                        }             
                </div>
                <div className="flex flex-col mb-4">                    
                    <label htmlFor="post-body" className="w-1/3 text-sm/6 font-medium text-gray-900" >Body</label>                                 
                       <textarea name="" id=""
                       rows={3}
                       className="w-2/3 ml-10 px-3 py-1.5 rounded-md bg-white text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                       value={data.body}
                       onChange={(e) => setData('body',e.target.value)}
                      
                      ></textarea>  
                      {errors.body && 
                            <div className="flex flex-col">
                                <span className="text-red-900 font-semi-bold text-sm/6 ml-12"> {errors.body}</span>
                            </div>                      
                        }                   
                </div>

                <div className="flex justify-center mt-10 ">
                    <button
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semi-bold text-white shadow-xs
                        hover:bg-indigo-500
                        focus-visible:outline-2
                        focus-visible:outline-offset-2
                        focus-visible:outline-indigo-600
                        cursor-pointer
                        "
                   disabled={processing}
                    >
                        Update
                    </button>
                </div>
            </form>
                    
            <div className="px-6 pt-4 pb-2">
            {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag
            </span> */}
            </div>
        </div>
    </div>
    </>
  )
}

update.layout = updatePostPage => <RootLayout children={updatePostPage} />

export default update;