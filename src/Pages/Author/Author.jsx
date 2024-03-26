import { useLoaderData } from "react-router-dom";


const Author = () => {


    const Blogs = useLoaderData();
    const {cover_image,title,tags,body_html} =Blogs;

   
    return (
        <div>
        <div  rel="noopener noreferrer" className=" mx-auto group hover:no-underline focus:no-underline bg-gray-900">
         <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || missingImage} />

         <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">

{
tags.map((tag) => <div key={tag.index}>
 

<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">#{tag}</a>
  </div> )
}


</div>

         <div className="p-6 space-y-2">
             <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
             
             
             <div>
               
               {body_html}  
                 </div>					
         </div>
     </div>
     
   
 </div>
    );
};

export default Author;