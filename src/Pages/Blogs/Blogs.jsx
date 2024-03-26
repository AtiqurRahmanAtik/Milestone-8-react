import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Blog from "../Blog/Blog";
import Loader from "../Loader/Loader";


const Blogs = () => {

    const blogs = useLoaderData();
    // console.log(blogs);
    const navigation = useNavigation();
   
    if(navigation.state === 'loading' ) return <Loader></Loader>
    
    
    return (
        <div>
            {/* <h2 className="text-3xl font-bold">Blogs that is </h2> */}

            <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
			<img src={blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
				<span className="text-xs text-gray-400">{blogs[0].published_timestamp}</span>
				<p>{blogs[0].description}</p>
			</div>
		</a>
            
            
            
            <div className="grid grid-cols-2 container mx-auto">

        {
            blogs.map((blog) => <Blog key={blog.id} blog={blog}></Blog>)
        }
            </div>
        </div>
        
    );
};

export default Blogs;