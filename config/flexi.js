/* jshint node:true */
module.exports = {

  breakpoints: [
    { name: 'mobile', prefix: 'xs', begin: 0 },
    { name: 'tablet', prefix: 'sm', begin: 768 },
    { name: 'desktop', prefix: 'md', begin: 992 },
    { name: 'huge', prefix: 'lg', begin: 1200 }
  ],

  columns: 12,
  columnPrefix: 'col',
  gutterPadding: '.5rem',

  includeMediaCSS: true,
  includeElementCSS: true,
  includeCSS: true,

  transformAllElementLayoutAttributes: false,
};
