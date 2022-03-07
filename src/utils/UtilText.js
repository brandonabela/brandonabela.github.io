class UtilText {
  static snakeCase(projectName) {
    return projectName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  }
}

export default UtilText;
