import { Component } from "react";

    class Form extends Component {
      render(){
        return (
          <div class="form">
      <div class="form-group">
        <label class="col-md-4 control-label" for="firstname">First Name</label>  
        <div class="col-md-4">
        <input id="firstname" name="firstname" type="text" class="form-control input-md"></input>
        <span class="help-block">Your first name</span>  
        </div>
      </div>
    
      

      <div class="form-group">
        <label class="col-md-4 control-label" for="lastname">Last Name</label>  
        <div class="col-md-4">
        <input id="lastname" name="lastname" type="text" class="form-control input-md"></input>
        <span class="help-block">Your last name</span>  
        </div>
      </div>
      
      <div class="form-group">
        <label class="col-md-4 control-label" for="addinfo">Additional Information</label>
        <div class="col-md-4">                     
          <textarea class="form-control" id="addinfo" name="addinfo">Contract</textarea>
        </div>
      </div>
      
      <div class="form-group">
        <label class="col-md-4 control-label" for="filebutton">File Button</label>
        <div class="col-md-4">
          <input id="filebutton" name="filebutton" class="input-file" type="file"></input>
          <input type="file" name="file" onChange={this.onChangeHandler}/>
        </div>
      </div>
      
      <div class="form-group">
        <label class="col-md-4 control-label" for="filetype">Define filetype</label>
        <div class="col-md-4">
          <div class="input-group">
            <input id="filetype" name="filetype" class="form-control" placeholder="PDF" type="text">
            <div class="input-group-btn">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                Action
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu pull-right">
                <li><a>PDF</a></li>
                <li><a>Word</a></li>
                <li><a>Image</a></li>
              </ul>
            </div>
          </input>
        </div>
      </div>
      
      <div class="form-group">
        <label class="col-md-4 control-label" for="submit">Submit</label>
        <div class="col-md-4">
          <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Submit</button> 
        </div>;
      </div>;
      </div>;
      </div>
      )
      }
      };

     function onChangeHandler (

      onClickHandler = () => {
        onClickHandler = () => {
          const data = new FormData() 
          data.append('file', this.state.selectedFile)
          POST https://api.developer.opentext.com/capture/cp-swc/home.aspx?subscription-name=b4ce7228-d27f-440b-8800-803974cabc45-cap
  
            Authorization: Bearer {0318LN5e3m2tx0GRlfTyL6NXCs64tipG}
Accept: application/hal+json
Accept-Language: en-US
            
        ;
      };
    };
    
     );
