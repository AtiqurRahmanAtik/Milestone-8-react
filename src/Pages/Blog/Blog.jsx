import { Link } from "react-router-dom";
import missingImage from '../../assets/404.jpg';

const Blog = ({blog}) => {
// console.log(blog);
    const {id,cover_image,title,description,created_at} =blog;


    return (
        <div>
    <h2 className="text-3xl font-bold"> This is Blog </h2>


             <section className=" text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
	
		<div className="grid justify-center grid-cols-1 gap-6 transition border-4 border-red-400  hover:scale-110  sm:grid-cols-2 lg:grid-cols-3">

            
			<Link to={`/blog/${id}`} rel="noopener noreferrer" href="#" className="w-[500px] mx-auto group hover:no-underline focus:no-underline bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || missingImage} />

				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs text-gray-400">{created_at}</span>
					<p>{description}</p>
				</div>
			</Link>
			
		</div>
		
	</div>
</section>            
        </div>
    );
};

export default Blog;