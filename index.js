module.exports = (app) => {
  // Your code here
  app.log('Yay! The app was loaded!')

  // example of probot responding 'Hello World' to a new issue being opened
  app.on('issues.opened', async context => {
    const  issue = context.payload.issue
    const creator= issue. user.login;
    // `context` extracts information from the event, which can be passed to
    // GitHub API calls. This will return:
    //   {owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!}
    const params = context.issue({body:`Hey :wave: @${creator} :tada: Thanks for The Issue.
. It would be totally cool id if you could add the Labels. Our maintaners will get back to you :heart:`})

    // Post a comment on the issue
    return context.github.issues.createComment(params)
  })
  
  app.on('pull_request.opened', async context =>{
    const pr=context.payload.pull_request
    const user =pr.user.login;
    
    const msg=context.issue({body:`Hey @${user} :wave: Thanks for the PR !!! You are Awesome. Our maintaners will get back to you soon... `})
    
    return context.github.issues.createComment(msg)
  });
} 