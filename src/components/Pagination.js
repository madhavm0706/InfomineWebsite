import React from 'react'

export default function Pagination({totalposts,postsperpage, paginate}) {
    const pagenumber=[];

    for(let i=1;i<=Math.ceil(totalposts/postsperpage);i++){
        pagenumber.push(i);
    }
    return (
        <div>

            <nav>
            <ul className="pagination">
            {pagenumber.map(page => (
                    <li key={page} className="page-item">
                        <a onClick={()=>paginate(page)} className="page-link">{page}</a>
                    </li>

            ))}    
            
            </ul>
            </nav>
        </div>
    )
}
