"use client"
import Link from "next/link"
import { useState } from 'react';

interface Achievement {
  title: string;
  description: string;
}

interface Experience {
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  school: string;
  degree: string;
  city: string;
  startDate: string;
  graduationDate: string;
  description: string;
}

interface Project {
  title: string;
  link: string;
  description: string;
}

export default function Resume() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    designation: '',
    address: '',
    email: '',
    phoneNo: '',
    summary: '',
    image: null as File | null
  });

  const [achievements, setAchievements] = useState<Achievement[]>([{ title: '', description: '' }]);
  const [experiences, setExperiences] = useState<Experience[]>([{
    title: '',
    organization: '',
    location: '',
    startDate: '',
    endDate: '',
    description: ''
  }]);
  const [educations, setEducations] = useState<Education[]>([{
    school: '',
    degree: '',
    city: '',
    startDate: '',
    graduationDate: '',
    description: ''
  }]);
  const [projects, setProjects] = useState<Project[]>([{
    title: '',
    link: '',
    description: ''
  }]);
  const [skills, setSkills] = useState<string[]>(['']);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        image: e.target.files![0]
      }));
    }
  };

  // Achievement handlers
  const handleAchievementChange = (index: number, field: keyof Achievement, value: string) => {
    const updatedAchievements = [...achievements];
    updatedAchievements[index] = {
      ...updatedAchievements[index],
      [field]: value
    };
    setAchievements(updatedAchievements);
  };

  const addAchievement = () => {
    setAchievements([...achievements, { title: '', description: '' }]);
  };

  const removeAchievement = (index: number) => {
    const updatedAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(updatedAchievements);
  };

  // Experience handlers
  const handleExperienceChange = (index: number, field: keyof Experience, value: string) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value
    };
    setExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setExperiences([...experiences, {
      title: '',
      organization: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ''
    }]);
  };

  const removeExperience = (index: number) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  // Education handlers
  const handleEducationChange = (index: number, field: keyof Education, value: string) => {
    const updatedEducations = [...educations];
    updatedEducations[index] = {
      ...updatedEducations[index],
      [field]: value
    };
    setEducations(updatedEducations);
  };

  const addEducation = () => {
    setEducations([...educations, {
      school: '',
      degree: '',
      city: '',
      startDate: '',
      graduationDate: '',
      description: ''
    }]);
  };

  const removeEducation = (index: number) => {
    const updatedEducations = educations.filter((_, i) => i !== index);
    setEducations(updatedEducations);
  };

  // Project handlers
  const handleProjectChange = (index: number, field: keyof Project, value: string) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value
    };
    setProjects(updatedProjects);
  };

  const addProject = () => {
    setProjects([...projects, {
      title: '',
      link: '',
      description: ''
    }]);
  };

  const removeProject = (index: number) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  // Skill handlers
  const handleSkillChange = (index: number, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const removeSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <nav className="navbar bg-white">
        <div className="container">
          <div className="navbar-content">
            <div className="brand-and-toggler">
              <button type="button" className="navbar-toggler-btn">
                <div className="bars">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
                <Link href="/">Back</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="about-sc" className="">
        <div className="container">
          <div className="about-cnt">
            <form className="cv-form" id="cv-form">
              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>about section</h3>
                </div>
                <div className="cv-form-row cv-form-row-about">
                  <div className="cols-3">
                    <div className="form-elem">
                      <label htmlFor="firstname" className="form-label">First Name</label>
                      <input
                        name="firstName"
                        type="text"
                        className="form-control firstname"
                        id="firstname"
                        placeholder="e.g. John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label htmlFor="middlename" className="form-label">Middle Name <span className="opt-text">(optional)</span></label>
                      <input
                        name="middleName"
                        type="text"
                        className="form-control middlename"
                        id="middlename"
                        placeholder="e.g. Herbert"
                        value={formData.middleName}
                        onChange={handleInputChange}
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label htmlFor="lastname" className="form-label">Last Name</label>
                      <input
                        name="lastName"
                        type="text"
                        className="form-control lastname"
                        id="lastname"
                        placeholder="e.g. Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                      <span className="form-text"></span>
                    </div>
                  </div>

                  <div className="cols-3">
                    <div className="form-elem">
                      <label htmlFor="image" className="form-label">Your Image</label>
                      <input
                        name="image"
                        type="file"
                        className="form-control image"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </div>
                    <div className="form-elem">
                      <label htmlFor="designation" className="form-label">Designation</label>
                      <input
                        name="designation"
                        type="text"
                        className="form-control designation"
                        id="designation"
                        placeholder="e.g. Sr.Accountants"
                        value={formData.designation}
                        onChange={handleInputChange}
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label htmlFor="address" className="form-label">Address</label>
                      <input
                        name="address"
                        type="text"
                        className="form-control address"
                        id="address"
                        placeholder="e.g. Lake Street-23"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                      <span className="form-text"></span>
                    </div>
                  </div>

                  <div className="cols-3">
                    <div className="form-elem">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        name="email"
                        type="text"
                        className="form-control email"
                        id="email"
                        placeholder="e.g. johndoe@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label htmlFor="phoneno" className="form-label">Phone No:</label>
                      <input
                        name="phoneNo"
                        type="text"
                        className="form-control phoneno"
                        id="phoneno"
                        placeholder="e.g. 456-768-798, 567.654.002"
                        value={formData.phoneNo}
                        onChange={handleInputChange}
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label htmlFor="summary" className="form-label">Summary</label>
                      <textarea
                        name="summary"
                        className="form-control summary"
                        id="summary"
                        placeholder="Brief summary about yourself"
                        value={formData.summary}
                        onChange={handleInputChange}
                      />
                      <span className="form-text"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>achievements</h3>
                </div>

                <div className="row-separator repeater">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="cv-form-row cv-form-row-achievement">
                      <div className="cols-2">
                        <div className="form-elem">
                          <label htmlFor={`achieve_title_${index}`} className="form-label">Title</label>
                          <input
                            name={`achieve_title_${index}`}
                            type="text"
                            className="form-control achieve_title"
                            id={`achieve_title_${index}`}
                            placeholder="Achievement title"
                            value={achievement.title}
                            onChange={(e) => handleAchievementChange(index, 'title', e.target.value)}
                          />
                          <span className="form-text"></span>
                        </div>
                        <div className="form-elem">
                          <label htmlFor={`achieve_description_${index}`} className="form-label">Description</label>
                          <input
                            name={`achieve_description_${index}`}
                            type="text"
                            className="form-control achieve_description"
                            id={`achieve_description_${index}`}
                            placeholder="Achievement description"
                            value={achievement.description}
                            onChange={(e) => handleAchievementChange(index, 'description', e.target.value)}
                          />
                          <span className="form-text"></span>
                        </div>
                      </div>
                      {achievements.length > 1 && (
                        <button
                          type="button"
                          className="repeater-remove-btn"
                          onClick={() => removeAchievement(index)}
                        >
                          -
                        </button>
                      )}
                    </div>
                  ))}
                  <button type="button" className="repeater-add-btn" onClick={addAchievement}>
                    +
                  </button>
                </div>
              </div>

              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>experience</h3>
                </div>

                <div className="row-separator repeater">
                  {experiences.map((exp, index) => (
                    <div key={index} className="cv-form-row cv-form-row-experience">
                      <div className="cols-3">
                        <div className="form-elem">
                          <label htmlFor={`exp_title_${index}`} className="form-label">Title</label>
                          <input
                            name={`exp_title_${index}`}
                            type="text"
                            className="form-control exp_title"
                            id={`exp_title_${index}`}
                            placeholder="Job title"
                            value={exp.title}
                            onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                          />
                          <span className="form-text"></span>
                        </div>
                        <div className="form-elem">
                          <label htmlFor={`exp_organization_${index}`} className="form-label">Company / Organization</label>
                          <input
                            name={`exp_organization_${index}`}
                            type="text"
                            className="form-control exp_organization"
                            id={`exp_organization_${index}`}
                            placeholder="Company name"
                            value={exp.organization}
                            onChange={(e) => handleExperienceChange(index, 'organization', e.target.value)}
                          />
                          <span className="form-text"></span>
                        </div>
                        <div className="form-elem">
                          <label htmlFor={`exp_location_${index}`} className="form-label">Location</label>
                          <input
                            name={`exp_location_${index}`}
                            type="text"
                            className="form-control exp_location"
                            id={`exp_location_${index}`}
                            placeholder="Location"
                            value={exp.location}
                            onChange={(e) => handleExperienceChange(index, 'location', e.target.value)}
                          />
                          <span className="form-text"></span>
                        </div>
                      </div>

                      <div className="cols-3">
                        <div className="form-elem">
                          <label htmlFor={`exp_start_date_${index}`} className="form-label">Start Date</label>
                          <input
                            name={`exp_start_date_${index}`}
                            type="date"
                            className="form-control exp_start_date"
                            id={`exp_start_date_${index}`}
                            value={exp.startDate}
                            onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                          />
                          <span className="form-text"></span>
                        </div>
                        <div className="form-elem">
                          <label htmlFor={`exp_end_date_${index}`} className="form-label">End Date</label>
                          <input
                            name={`exp_end_date_${index}`}
                            type="date"
                            className="form-control exp_end_date"
                            id={`exp_end_date_${index}`}
                            value={exp.endDate}
                            onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                          />
                          <span className="form-text"></span>
                        </div>
                        <div className="form-elem">
                          <label htmlFor={`exp_description_${index}`} className="form-label">Description</label>
                          <textarea
                            name={`exp_description_${index}`}
                            className="form-control exp_description"
                            id={`exp_description_${index}`}
                            placeholder="Job description"
                            value={exp.description}
                            onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                          />
                          <span className="form-text"></span>
                        </div>
                      </div>

                      {experiences.length > 1 && (
                        <button
                          type="button"
                          className="repeater-remove-btn"
                          onClick={() => removeExperience(index)}
                        >
                          -
                        </button>
                      )}
                    </div>
                  ))}
                  <button type="button" className="repeater-add-btn" onClick={addExperience}>
                    +
                  </button>
                </div>
              </div>

              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>education</h3>
                </div>

                <div className="row-separator repeater">
                  {educations.map((edu, index) => (
                    <div key={index} className="cv-form-row cv-form-row-experience">
                      <div className="cols-3">
                        <div className="form-elem">
                          <label htmlFor={`edu_school_${index}`} className="form-label">School</label>
                          <input
                            name={`edu_school_${index}`}
                            type="text"
                            className="form-control edu_school"
                            id={`edu_school_${index}`}
                            placeholder="School/University name"
                            value={edu.school}
                            onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                          />
                          <span className="form-text"></span>
                        </div>
                        <div className="form-elem">
                          <label htmlFor={`edu_degree_${index}`} className="form-label">Degree</label>
                          <input
                            name={`edu_degree_${index}`}
                            type="text"
                            className="form-control edu_degree"
                            id={`edu_degree_${index}`}
                            placeholder="Degree/Certificate"
                            value={edu.degree}
                            onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                          />
                          <span className="form-text"></span>
                        </div>
                        <div className="form-elem">
                          <label htmlFor={`edu_city_${index}`} className="form-label">City</label>
                          <input
                            name={`edu_city_${index}`}
                            type="text"
                            className="form-control edu_city"
                            id={`edu_city_${index}`}
                            placeholder="City"
                            value={edu.city}
                            onChange={(e) => handleEducationChange(index, 'city', e.target.value)}
                          />
                          <span className="form-text"></span>
                        </div>
                      </div>

                      <div className="cols-3">
                        <div className="form-elem">
                          <label htmlFor={`edu_start_date_${index}`} className="form-label">Start Date</label>
                          <input
                            name={`edu_start_date_${index}`}
                            type="date"
                            className="form-control edu_start_date"
                            id={`edu_start_date_${index}`}
                            value={edu.startDate}
                            onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                          />
                          <span className="form-text"></span>
                        </div>
                        <div className="form-elem">
                          <label htmlFor={`edu_graduation_date_${index}`} className="form-label">End Date</label>
                          <input
                            name={`edu_graduation_date_${index}`}
                            type="date"
                            className="form-control edu_graduation_date"
                            id={`edu_graduation_date_${index}`}
                            value={edu.graduationDate}
                            onChange={(e) => handleEducationChange(index, 'graduationDate', e.target.value)}
                          />
                          <span className="form-text"></span>
                        </div>
                        <div className="form-elem">
                          <label htmlFor={`edu_description_${index}`} className="form-label">Description</label>
                          <textarea
                            name={`edu_description_${index}`}
                            className="form-control edu_description"
                            id={`edu_description_${index}`}
                            placeholder="Education description"
                            value={edu.description}
                            onChange={(e) => handleEducationChange(index, 'description', e.target.value)}
                          />
                          <span className="form-text"></span>
                        </div>
                      </div>

                      {educations.length > 1 && (
                        <button
                          type="button"
                          className="repeater-remove-btn"
                          onClick={() => removeEducation(index)}
                        >
                          -
                        </button>
                      )}
                    </div>
                  ))}
                  <button type="button" className="repeater-add-btn" onClick={addEducation}>
                    +
                  </button>
                </div>
              </div>

              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>projects</h3>
                </div>

                <div className="row-separator repeater">
                  {projects.map((proj, index) => (
                    <div key={index} className="cv-form-row cv-form-row-experience">
                      <div className="cols-3">
                        <div className="form-elem">
                          <label htmlFor={`proj_title_${index}`} className="form-label">Project Name</label>
                          <input
                            name={`proj_title_${index}`}
                            type="text"
                            className="form-control proj_title"
                            id={`proj_title_${index}`}
                            placeholder="Project name"
                            value={proj.title}
                            onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                          />
                          <span className="form-text"></span>
                        </div>
                        <div className="form-elem">
                          <label htmlFor={`proj_link_${index}`} className="form-label">Project link</label>
                          <input
                            name={`proj_link_${index}`}
                            type="text"
                            className="form-control proj_link"
                            id={`proj_link_${index}`}
                            placeholder="Project URL"
                            value={proj.link}
                            onChange={(e) => handleProjectChange(index, 'link', e.target.value)}
                          />
                          <span className="form-text"></span>
                        </div>
                        <div className="form-elem">
                          <label htmlFor={`proj_description_${index}`} className="form-label">Description</label>
                          <textarea
                            name={`proj_description_${index}`}
                            className="form-control proj_description"
                            id={`proj_description_${index}`}
                            placeholder="Project description"
                            value={proj.description}
                            onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                          />
                          <span className="form-text"></span>
                        </div>
                      </div>
                      {projects.length > 1 && (
                        <button
                          type="button"
                          className="repeater-remove-btn"
                          onClick={() => removeProject(index)}
                        >
                          -
                        </button>
                      )}
                    </div>
                  ))}
                  <button type="button" className="repeater-add-btn" onClick={addProject}>
                    +
                  </button>
                </div>
              </div>

              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>skills</h3>
                </div>

                <div className="row-separator repeater">
                  {skills.map((skill, index) => (
                    <div key={index} className="cv-form-row cv-form-row-skills">
                      <div className="form-elem">
                        <label htmlFor={`skill_${index}`} className="form-label">Skill</label>
                        <input
                          name={`skill_${index}`}
                          type="text"
                          className="form-control skill"
                          id={`skill_${index}`}
                          placeholder="Your skill"
                          value={skill}
                          onChange={(e) => handleSkillChange(index, e.target.value)}
                        />
                        <span className="form-text"></span>
                      </div>
                      {skills.length > 1 && (
                        <button
                          type="button"
                          className="repeater-remove-btn"
                          onClick={() => removeSkill(index)}
                        >
                          -
                        </button>
                      )}
                    </div>
                  ))}
                  <button type="button" className="repeater-add-btn" onClick={addSkill}>
                    +
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="preview-sc" className="print_area">
        <div className="container">
          <div className="preview-cnt">
            <div className="preview-cnt-l bg-green text-white">
              <div className="preview-blk">
                <div className="preview-image">
                  {formData.image && (
                    <img 
                      src={URL.createObjectURL(formData.image)} 
                      alt="Profile" 
                      id="image_dsp" 
                      className="preview-image"
                    />
                  )}
                </div>
                <div className="preview-item preview-item-name">
                  <span className="preview-item-val fw-6" id="fullname_dsp">
                    {`${formData.firstName} ${formData.middleName} ${formData.lastName}`}
                  </span>
                </div>
                <div className="preview-item">
                  <span className="preview-item-val text-uppercase fw-6 ls-1" id="designation_dsp">
                    {formData.designation}
                  </span>
                </div>
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>about</h3>
                </div>
                <div className="preview-blk-list">
                  <div className="preview-item">
                    <span className="preview-item-val" id="phoneno_dsp">{formData.phoneNo}</span>
                  </div>
                  <div className="preview-item">
                    <span className="preview-item-val" id="email_dsp">{formData.email}</span>
                  </div>
                  <div className="preview-item">
                    <span className="preview-item-val" id="address_dsp">{formData.address}</span>
                  </div>
                  <div className="preview-item">
                    <span className="preview-item-val" id="summary_dsp">{formData.summary}</span>
                  </div>
                </div>
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>skills</h3>
                </div>
                <div className="skills-items preview-blk-list" id="skills_dsp">
                  {skills.filter(skill => skill.trim() !== '').map((skill, index) => (
                    <div key={index} className="preview-item">
                      <span className="preview-item-val">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="preview-cnt-r bg-white">
              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>Achievements</h3>
                </div>
                <div className="achievements-items preview-blk-list" id="achievements_dsp">
                  {achievements.filter(ach => ach.title.trim() !== '' || ach.description.trim() !== '').map((ach, index) => (
                    <div key={index} className="preview-item">
                      <div className="preview-item-val fw-6">{ach.title}</div>
                      <div className="preview-item-val">{ach.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>educations</h3>
                </div>
                <div className="educations-items preview-blk-list" id="educations_dsp">
                  {educations.filter(edu => edu.school.trim() !== '' || edu.degree.trim() !== '').map((edu, index) => (
                    <div key={index} className="preview-item">
                      <div className="preview-item-val fw-6">{edu.school}</div>
                      <div className="preview-item-val">{edu.degree}</div>
                      <div className="preview-item-val">
                        {edu.startDate} - {edu.graduationDate}
                      </div>
                      <div className="preview-item-val">{edu.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>experiences</h3>
                </div>
                <div className="experiences-items preview-blk-list" id="experiences_dsp">
                  {experiences.filter(exp => exp.title.trim() !== '' || exp.organization.trim() !== '').map((exp, index) => (
                    <div key={index} className="preview-item">
                      <div className="preview-item-val fw-6">{exp.title}</div>
                      <div className="preview-item-val">{exp.organization}</div>
                      <div className="preview-item-val">
                        {exp.startDate} - {exp.endDate}
                      </div>
                      <div className="preview-item-val">{exp.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>projects</h3>
                </div>
                <div className="projects-items preview-blk-list" id="projects_dsp">
                  {projects.filter(proj => proj.title.trim() !== '' || proj.description.trim() !== '').map((proj, index) => (
                    <div key={index} className="preview-item">
                      <div className="preview-item-val fw-6">{proj.title}</div>
                      {proj.link && (
                        <div className="preview-item-val">
                          <a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.link}</a>
                        </div>
                      )}
                      <div className="preview-item-val">{proj.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="print-btn-sc">
        <div className="container">
          <button type="button" className="print-btn btn btn-primary" onClick={handlePrint}>
            Print CV
          </button>
        </div>
      </section>
    </>
  );
}