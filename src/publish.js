var ghpages = require('gh-pages');
ghpages.publish('out', {
  branch: 'gh-pages'
}, function (e){
  console.log('publish sucess')
});
