import React,{Component} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Coloredline from '../components/Colerdline';

export default class Post extends Component{

    state ={
        
        content:''
    }

    handelCKeditorState =(event,editor)=>{
        const data = editor.getData();
        

        this.setState({
            content: data
        })

    }

    

    render (){

  
    return (
        <div className="container">
            <br></br>
            <form className="form-group">
                <h3 align="center">Post Your Article</h3><Coloredline color="black" /> <br />

                <div className="row">
                    <div className="col-12">
                        <label>Article Name:-</label>
                        <input type="text" name="articlename" placeholder="Enter Article Name" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label>Published By:-</label>
                        <input type="text" name="publishedBy" placeholder="Publisher Name" required />
                    </div>
                    <div className="col-4">
                        <label> Date:-</label>
                        <input type="number" name="date" placeholder="Eg:-03" required />
                    </div>
                    <div className="col-4">
                        <label>Month:-</label>
                        <input type="text" name="month" placeholder="Eg:- Jun/Jul/Dec" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <label>Slug:-</label>
                        <input type="text" name="slug" placeholder="Eg:- /atriclename/By:-PublishedBy" required />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <label>Upload Image:-</label>
                        <input type="text" name="slug" placeholder="upload your Image" required />
                    </div>
                    </div>
                

                <div className="form-group">

                <CKEditor
                    editor={ ClassicEditor }
                    
                    onInit={ editor => {
                        
                    } }

                    onChange={this.handelCKeditorState}
                    
                />  

                </div>

                <div className="row">
                    <div class="col-md-3 col-sm-12">
                    <input type="submit" value="Post Your Article" className="btn btn-primary" />
                    </div>&nbsp;
                    <div class="col-md-3 col-sm-12">
                    <input type="submit" value="Save On Draft" className="btn btn-primary" />
                    </div>

                </div>
            </form>
            <p>**For preview or share with admins first save your article on Drafts by click 'Save On Draft' Button</p>

           <Coloredline color="black" width="400" />


                           
                    </div>
                    
            
       
    )
}
}
