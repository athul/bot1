module.exports = (app) => {
  // Your code here
  app.log('Yay! The app was loaded!')

  // example of probot responding 'Hello World' to a new issue being opened
  app.on('issues.opened', async context => {
    const  issue = context.payload.issue
    const creator= issue. user.login
    const params = context.issue({body:`Hey :wave: @${creator} :tada: Thanks for The Issue.
. It would be totally cool if you could add the Labels. Our maintaners will get back to you :heart:`})

    // Post a comment on the issue
    return context.github.issues.createComment(params)
  })
  
  app.on('pull_request.opened', async context =>{
    const pr=context.payload.pull_request
    const user =pr.user.login;
    
    const msg=context.issue({body:`Hey @${user} :wave: Thanks for the PR !!! You are Awesome. Our maintaners @Athul-CA or @samanyuneelson will get back to you soon... `})
    
    return context.github.issues.createComment(msg)
  })
  
 app.on('pull_request.closed',async context =>{
   
   const mrgmsg=context.issue({body:`:tada: Your Pull Request Got Merged...!!! :heart:
![Gify](https://media2.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif?cid=19f5b51a5cec1b123672535851920f12&rid=giphy.gif)`}) 
 return context.github.issues.createComment(mrgmsg)
})
} 
