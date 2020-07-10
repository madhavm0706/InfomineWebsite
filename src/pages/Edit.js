import React,{useEffect,useState,useRef} from 'react';
import firebase from '../firebase/Firebase';
import loading from '../images/loading-arrow.gif';
import Articlesidebar from '../components/Articlesidebar';
import Coloredline from '../components/Colerdline';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Redirect } from 'react-router-dom';


export default function Edit(props) {

    const [postid,setPostid] = useState("");
    const [post,setPost] = useState([]);
    const [isbusy,setIsbusy] = useState(false);

    const [isbusy1,setIsbusy1] = useState(false);
    const [route,setRoute] = useState(false);

       const [discription, setdiscription] = useState("");
       const [user, setUser] = useState("");

       const nameRef = useRef(null);
       const publishedByRef = useRef(null);
       const fileRef = useRef(null);
   



       var today = new Date();
       var dd = String(today.getDate()).padStart(2,'0');
       var mm = String(today.getMonth()+1).padStart(2,'0');
       var yy = String(today.getFullYear());

       today = mm + '/' + dd +'/' + yy;
       
       useEffect(() => {
        firebase.getUserState().then(user => {
            if(user){
                
                console.log(user.email);
                setUser(user.email);
            }
        });
    });
       

       const handleCkeditorState=(event,editor)=>{
           const data = editor.getData();
           setdiscription(data);

           
       }


    const getPost = async (postid) =>{
        setIsbusy(true);
        const post = await firebase.getPostDraft(postid).catch(err =>{
            console.log(err);
            return err;
        });
        setPost(post); 
        setIsbusy(false);
    }

    useEffect(() =>{
        setPostid(props.match.params.id);
        getPost(props.match.params.id);
    },[props.match.params.id]);


    console.log(postid);
    console.log(post);


    const updateform = async (e)=>{
        e.preventDefault();
        setIsbusy1(true);
        
        const _post = {
            name : nameRef.current.value,
            user: user,
            date: today,
            publishedBy: publishedByRef.current.value,
            discription : discription,
            
        }

        if(fileRef.current.files.length > 0){
            _post["cover"] = fileRef.current.files[0];
            _post["oldcover"] = post.fileRef;
        }
        
        await firebase.updateArticle(postid, _post).then(() =>{
            console.log("Post Updated");
            alert("your article has been updated sucessfully");
            setIsbusy1(false);
            setRoute(true);
            
            

        }).catch(err =>{
            console.log(err);
        })

        
    }

    if(route){
        return <Redirect to="/postyourarticle/drafts" />
    }

    let content1;

    if(isbusy1){
        content1 =(

            <div>
            <br /><br />

            
            <div className="loader">
            <p align="center">Request is being proceed</p>
            <img src={loading}></img>
            </div>
        </div>

        )
    }

    let content;
    if(isbusy){
        content =(
            <div>
            <br /><br />

            
            <div className="loader">
            <p align="center">Loading Article</p>
            <img src={loading}></img>
            </div>
        </div>
        )

    }else {
        content =(
            <form className="form-group"  >
            <div className="row">
                
                <div className="position col-12">
                 <h4>Fill up the form to Post Your Article</h4>
             
                </div>
            </div><br /><br />

         <div className="row">
             
             <div className="col-6">
                 <label>Email:-</label>
                 <input type="email" name="email"  value={user} readonly />
             </div>
             <div className="col-6">
                 <label>Date:-</label>
                 <input type="text" name="todaydate"  value={today} readonly />
             </div>
             <div className="col-12">
                 <label>Article Name:-</label>
                 <input type="text" name="articlename" placeholder="Enter Article Name" ref={nameRef} defaultValue = {post.name} required />
             </div>
         </div>
         <div className="row">
             <div className="col-4">
                 <label>Published By:-</label>
                 <input type="text" name="publishedBy" placeholder="Publisher Name" ref={publishedByRef} defaultValue = {post.publishedBy} required />
             </div>
             
         </div>
         <div className="row">
             
             </div>
             <div className="row">
             <div className="col-12">
                 <label>Upload Image:-</label>
                 <input type="file" name="image" placeholder="upload your Image" ref={fileRef} />
             </div>
             </div>
         

         <div className="form-group">

         <CKEditor
             editor={ ClassicEditor }
             
             onInit={ editor => {
                 
             } }

             

             onChange={handleCkeditorState}
             data ={post.discription}
             
         />  

         </div>

         <div className="row">
             <div class="col-md-3 col-sm-12">
             <input type="submit" value="Update Your Article" className="btn btn-primary"  onClick={updateform} />
             </div>&nbsp;

         </div>
     </form>

        )
    }

    return (
        <div className="container">
        <div className="form-group">
            <br></br>
        <h3 align="center">Your Posted Article</h3><Coloredline color="black" /> <br />

        <div className="row">
            <Articlesidebar />
            <div className="col-md-9 col-sm-12">
                    {content}
                    {content1}

                    </div>
            
            </div>

       </div>
        <Coloredline color="black" />
       
    </div>
    )
}
