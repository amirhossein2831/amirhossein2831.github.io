// Preserve bookmarked project anchors after consolidating the portfolio.
const isProjectsPage = window.location.pathname.endsWith('/projects.html');
const legacySections = {
  '#production': '#portfolio',
  '#public': '#public-projects',
  '#services': '#skills',
};
const section = legacySections[window.location.hash]
  || window.location.hash
  || (isProjectsPage ? '#portfolio' : '#career');

window.location.replace('./index.html' + section);
