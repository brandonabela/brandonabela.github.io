import skills from '../data/skills.json';

class UtilProject {
  static addSkillGroup(project) {
    // Get skill group for each technology and remove blanks
    let technologyGroups = project.technologies.map(t =>
      skills.map(s => [...s.languages, ...s.tools].includes(t) ? s.title : '').filter(Boolean)
    ).flat();

    // Get Unique Values set of technologies
    project['skillGroup'] = [...new Set(technologyGroups)];
  }
}

export default UtilProject;
