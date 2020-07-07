const renderEjsPage = (pageName, filepath, vars) => (req, res) =>
  res.render(filepath, {
    ...vars,
    pageName,
  });

module.exports = {
  renderEjsPage,
};
