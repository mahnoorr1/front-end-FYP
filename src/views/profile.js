import React, { ReactDOM, Text } from 'react';
import './profile.css';
const ImgUpload =({
    onChange,
    src
  })=>
    <label htmlFor="photo-upload" className="custom-file-upload fas label">
      <div className="img-wrap img-upload" >
        <img for="photo-upload" src={src} className='img'/>
      </div>
      <input id="photo-upload" type="file" onChange={onChange} className='input'/> 
    </label>
  
  
  const Name =({
    onChange,
    value
  })=>
    <div className="field">
      <label className='label' htmlFor="name">
        name:
      </label>
      <input 
      className='input'
        id="name" 
        type="text" 
        onChange={onChange} 
        maxlength="25" 
        value={value} 
        placeholder="Alexa" 
        required/>
    </div>
    
    const Pass = ({
        onChange,
        value,
        label,
        place,
    }) => 
        <div className='field'>
            <label htmlFor="name" className='label'>
                {label}
            </label>
            <input 
            className='input'
                id="name" 
                type="password" 
                onChange={onChange} 
                maxlength="15" 
                value={value} 
                placeholder={place}
                required/>
        </div>
    

        
  const Edit =({
    onSubmit,
    children,
  })=>
    <div className="card">
      <form onSubmit={onSubmit} className='form'>
        <h1>Profile</h1>
          {children}
        <button type="submit" className="save button">Save </button>
      </form>
    </div>

  const PassChange =({
      onSubmit,
      children,
    })=>
      <div className="card">
        <form onSubmit={onSubmit} className='form'>
          <h1>Change Password</h1>
          <hr></hr>
          <hr></hr>
            {children}
          <hr></hr>
          <button type="submit" className="save button">Save</button>
        </form>
      </div>
  
  class Profile extends React.Component {
    state = {
      file: '',
      imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
      name:'Mahnoor',
      email:'email@gmail.com',
      phone: '+1 450 354365',
      active: '',
      pass: '',
      cpass: '',
      passChange: '',
      btn: 0,
    }
  
    photoUpload = e =>{
      e.preventDefault();
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file);
    }
    editName = e =>{
      const name = e.target.value;
      this.setState({
        name,
      });
    }
    
    editPass = e =>{
        const _pass = e.target.value;
        this.setState({
          pass: _pass,
        });
      }
      editCPass = e =>{
        const cPass = e.target.value;
        this.setState({
          cpass: cPass,
        });
      }

    handleSubmit= e =>{
      let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
          this.setState({
            active: activeP,
      })
    }
    handlePassChange= e =>{
        let state = this.state.passChange === 'edit' ? 'passChange' : 'edit';
          this.setState({
            passChange: state,
        })
      }
      onSubmit = e => {
        if (this.state.btn === 1) {
          this.handleSubmit();
        }
        if (this.state.btn === 2) {
          this.handlePassChange();
        }
      }
    
    render() {
      const {imagePreviewUrl, 
             name, 
             email,
             phone, 
             passChange,
             pass,
             cpass,
             active,
            } = this.state;
      return (
        <div className='body'>
          {(active === 'edit')?(
            <Edit onSubmit={this.handleSubmit}>
              <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
              <Name onChange={this.editName} value={name}/>

            </Edit>
          ):(passChange === 'edit') ?
            <PassChange onSubmit={this.handlePassChange}>
                <Pass onChange={this.editPass} value={pass} label={"CURRENT PASSWORD:"} place={"Enter Current Password.."}></Pass>
                <Pass onChange={this.editCPass} value={cpass} label={"NEW PASSWORD:"} place = {"Enter New Password.."}></Pass>
                <hr></hr>
                <button className='flatbutton' onClick={this.handlePassChange}>Go Back</button>
            </PassChange>
          : ( <div className="card">
              <form className='form' onSubmit={this.onSubmit}>
                <h1>Profile</h1>
                <label className="custom-file-upload fas label">
                  <div className="img-wrap" >
                    <img className='img' for="photo-upload" src={imagePreviewUrl}/>
                  </div>
                </label>
                <div className="name">{name}</div>
                <div className="email">{email}</div>
                <div className='email'>{phone}</div>
                <button onClick={()=>this.setState({
                  btn: 1,
                })} type="submit" className="button edit">Edit Profile </button>
                <button onClick={()=>this.setState({
                  btn: 2,
                })} type = "submit" className='button edit'>Change Password</button>
                <hr></hr>
              </form>
              
            </div>
            )}
          
        </div>
      )
    }
  }
  
export default Profile;