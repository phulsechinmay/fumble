
const renderEjsPage = (pageName, filepath, vars) => (req, res) => 
  res.render(filepath, {
    ...req,
    vars,
    pageName
  });

module.exports = {
  renderEjsPage
}