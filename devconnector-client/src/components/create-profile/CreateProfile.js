import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import InputGroup from '../common/InputGroup';
import { createProfile } from '../../actions/profileActions';
import {withRouter} from 'react-router-dom';

class CreateProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displaySocialInputs: false,
            handle: "",
            company: "",
            website:'',
            location:'',
            status:'',
            skills:'',
            githubusername:'',
            bio:'',
            twitter:'',
            facebook:'',
            linkedin:'',
            youtube:'',
            instagram:'',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }

    onSubmit(e){
        e.preventDefault();
        const profileData = {
            handle: this.state.handle,
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            status: this.state.status,
            skills: this.state.skills,
            githubusername: this.state.githubusername,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            youtube: this.state.youtube,
            instagram: this.state.instagram
        };

        this.props.createProfile(profileData, this.props.history);

    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        const {errors, displaySocialInputs} = this.state;

        let socialInputs;
        if(displaySocialInputs){
            socialInputs = (
              <div>
                  <InputGroup
                      placeholder="Twitter"
                      icon="fab fa-twitter"
                      onChange={this.onChange}
                      value={this.state.twitter}
                      name="twitter"
                      error={errors.twitter}/>

                  <InputGroup
                      placeholder="facebook"
                      icon="fab fa-facebook"
                      onChange={this.onChange}
                      value={this.state.facebook}
                      name="facebook"
                      error={errors.facebook}/>
                  <InputGroup
                      placeholder="linkedin"
                      icon="fab fa-linkedin"
                      onChange={this.onChange}
                      value={this.state.linkedin}
                      name="linkedin"
                      error={errors.linkedin}/>
                  <InputGroup
                      placeholder="youtube"
                      icon="fab fa-youtube"
                      onChange={this.onChange}
                      value={this.state.youtube}
                      name="youtube"
                      error={errors.youtube}/>
                  <InputGroup
                      placeholder="instagram"
                      icon="fab fa-instagram"
                      onChange={this.onChange}
                      value={this.state.instagram}
                      name="instagram"
                      error={errors.instagram}/>
              </div>
            );
        }


        const options = [
            { label: '* Select professional status', value: 0 },
            { label: 'Developer', value: 'Developer'},
            { label: 'Student', value: 'Student'},
            { label: 'JuniorDeveloper', value: 'JuniorDeveloper'},
            { label: 'Manager', value: 'Manager'},
            { label: 'Instructor', value: 'Instructor'},
            { label: 'Teacher', value: 'Teacher'},
            { label: 'Intern', value: 'Intern'},
            { label: 'Other', value: 'Other'}
        ];

        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Create Your Profile </h1>
                            <p className="lead text-center">
                                Let's get some info
                            </p>
                            <small className="d-block pb-3">*= required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder="* profile handle"
                                    onChange={this.onChange}
                                    value={this.state.handle}
                                    name="handle"
                                    error={errors.handle}
                                    info="nekoe info"
                                />
                                <SelectListGroup
                                    placeholder="*Status"
                                    onChange={this.onChange}
                                    value={this.state.status}
                                    name="status"
                                    error={errors.status}
                                    options={options}
                                    info="nekoe info"
                                />


                                <TextFieldGroup
                                    placeholder="Company"
                                    onChange={this.onChange}
                                    value={this.state.company}
                                    name="company"
                                    error={errors.company}
                                    info="nekoe info"
                                />

                                <TextFieldGroup
                                    placeholder="website"
                                    onChange={this.onChange}
                                    value={this.state.website}
                                    name="website"
                                    error={errors.website}
                                    info="nekoe info"
                                />

                                <TextFieldGroup
                                    placeholder="location"
                                    onChange={this.onChange}
                                    value={this.state.location}
                                    name="location"
                                    error={errors.location}
                                    info="nekoe info"
                                />

                                <TextFieldGroup
                                    placeholder="* skills"
                                    onChange={this.onChange}
                                    value={this.state.skills}
                                    name="skills"
                                    error={errors.skills}
                                    info="nekoe info"
                                />

                                <TextFieldGroup
                                    placeholder="github username"
                                    onChange={this.onChange}
                                    value={this.state.githubusername}
                                    name="githubusername"
                                    error={errors.githubusername}
                                    info="nekoe info"
                                />

                                <TextAreaFieldGroup
                                    placeholder="bio"
                                    onChange={this.onChange}
                                    value={this.state.bio}
                                    name="bio"
                                    error={errors.bio}
                                    info="nekoe info"
                                />

                                <div className="mb-3">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            this.setState(prevState => ({
                                                displaySocialInputs: !prevState.displaySocialInputs
                                            }))
                                        }}
                                        className="btn btn-light">
                                        Add Social Network Links
                                    </button>
                                    <span className="text-muted">Optional</span>
                                </div>
                                {socialInputs}
                                <input type="submit" value="Submit" className="btn btn-info btn-block"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile:state.profile,
    errors: state.errors
});


export default connect(mapStateToProps, {createProfile})(withRouter(CreateProfile));