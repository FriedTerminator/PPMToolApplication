import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const projectObject = {
      projectName: "ProjectName PROPS",
      projectIdentifier: "PROP",
      projectDescription: "description from PROPS"
    };

    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton />

              <br />
              <hr />
              <ProjectItem project={projectObject}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.protoTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  project:state.project,

})

export default connect(mapStateToProps, {getProjects})(Dashboard);