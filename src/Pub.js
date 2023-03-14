import React from 'react';


// import './PubForm.css'
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);


const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class Pub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        Scopus_ID:'',
        Scopus_Url:'',
        WOS_ID:'',
        WOS_Url:'',
        Google_Scholar:'',
        ORCHID_ID:'',
        VIDWAN_ID:'',
        Research_ID:'',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 6
            ? 'Full Name must be at least 6 characters long!'
            : '';
        break;
        case 'Scopus_ID': 
        errors.Scopus_ID = 
          value.length < 3
            ? 'Scopus ID must be at least 4characters long!'
            : '';
        break;
        case 'Scopus_Url': 
        errors.Scopus_Url = 
          value.length < 3
            ? 'Scopus Url must be at least 4characters long!'
            : '';
        break;
        case 'WOS_ID': 
        errors.WOS_ID = 
          value.length < 3
            ? 'Scopus WOS_ID must be at least 4characters long!'
            : '';
        break;
        case 'WOS_Url': 
        errors.WOS_Url = 
          value.length < 3
            ? 'Scopus WOS_Url must be at least 4characters long!'
            : '';
        break;
        case 'Google_Scholar': 
        errors.Google_Scholar = 
          value.length < 3
            ? 'Google_Scholar must be at least 4characters long!'
            : '';
        break;
       
        case 'ORCHID_ID': 
        errors.ORCHID_ID = 
          value.length < 3
            ? 'ORCHID_ID must be at least 4characters long!'
            : '';
        break;
        case 'VIDWAN_ID': 
        errors.VIDWAN_ID = 
          value.length < 3
            ? 'VIDWAN_ID must be at least 4characters long!'
            : '';
        break;
        case 'Research_ID': 
        errors.Research_ID = 
          value.length < 3
            ? 'Research_ID must be at least 4characters long!'
            : '';
        break;

     
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <center><div className='form-group'>
        <div className='form-group'>
          <center><h2>Publication-Form</h2></center>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='form-group'>
              <label htmlFor="fullName">Name Of Faculty</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='form-group'>
              <label htmlFor="password">Scopus ID</label>
              <input type='text' name='Scopus ID' onChange={this.handleChange} noValidate />
              {errors.Scopus_ID.length > 0 && 
                <span className='error'>{errors.Scopus_ID}</span>}
            </div>
            <div className='form-group'>
              <label htmlFor="password">Scopus Url</label>
              <input type='text' name='Scopus_Url' onChange={this.handleChange} noValidate />
              {errors.Scopus_Url.length > 0 && 
                <span className='error'>{errors.Scopus_Url}</span>}
            </div>
            <div className='form-group'>
              <label htmlFor="password">WOS ID</label>
              <input type='text' name='WOS_ID' onChange={this.handleChange} noValidate />
              {errors.WOS_ID.length > 0 && 
                <span className='error'>{errors.WOS_ID}</span>}
            </div>

            <div className='form-group'>
              <label htmlFor="password">WOS Url</label>
              <input type='text' name='WOS_Url' onChange={this.handleChange} noValidate />
              {errors.WOS_Url.length > 0 && 
                <span className='error'>{errors.WOS_Url}</span>}
            </div>
            <div className='form-group'>
              <label htmlFor="password">Google-Scholar</label>
              <input type='text' name='Google_Scholar' onChange={this.handleChange} noValidate />
              {errors.Google_Scholar.length > 0 && 
                <span className='error'>{errors.Google_Scholar}</span>}
            </div>
            <div className='form-group'>
              <label htmlFor="password">ORCHID-ID</label>
              <input type='text' name='ORCHID_ID' onChange={this.handleChange} noValidate />
              {errors.ORCHID_ID.length > 0 && 
                <span className='error'>{errors.ORCHID_ID}</span>}
            </div>
            <div className='form-group'>
              <label htmlFor="password">VIDWAN-ID</label>
              <input type='text' name='VIDWAN_ID' onChange={this.handleChange} noValidate />
              {errors.VIDWAN_ID.length > 0 && 
                <span className='error'>{errors.VIDWAN_ID}</span>}
            </div>
            <div className='form-group'>
              <label htmlFor="password">Research ID</label>
              <input type='text' name='Research_ID' onChange={this.handleChange} noValidate />
              {errors.Research_ID.length > 0 && 
                <span className='error'>{errors.Research_ID}</span>}
            </div>
                
            <div className='submit'>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
      </center>
    );
  }
}
