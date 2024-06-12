import React from "react";
import "./style.css";
import TEAM_MEMBERS from "../../../data/teams";

const Teams = () => {
  return (
    <div className="teams-container">
      <div class="row justify-content-center mb-4">
        <div class="col-md-7 text-center emergency-header-container">
          <h3 class="mb-3">Experienced & Professional Team</h3>
          <h6 class="subtitle">
            You can relay on our amazing features list and also our customer
            services will be great experience for you without doubt and in
            no-time
          </h6>
        </div>
      </div>
      <div class="row team-cards">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.id} className="col-lg-12 col-md-12 col-12 mb-4 team-card">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <img
                  src={member.image.img}
                  alt={member.image.alt}
                  className="img-fluid  team-img"
                />
              </div>
              <div className="col-lg-8 col-md-8 col-12 text-left">
                <div className="team-text-content">
                  <h4 className="font-weight-medium mb-0 dr-name ">
                    {member.name}
                  </h4>
                  <h6 className="subtitle mb-3 ">
                    {member.jobTitle}
                  </h6>
                  <hr/>
                  <p>{member.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
