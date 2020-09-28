const github = new Github;
const ui = new UI;

let searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {

    let userText = e.target.value;

    if(userText !== ""){
      
        github.getUser(userText)
        .then(data => {
            if(data.profile.message == 'Not Found'){
                // show alert
                ui.showAlert('User Not Found','alert alert-danger');

            }else{
                // show profile

                ui.showProfile(data.profile);
                ui.showRepos(data.repos);


            }
        })
    }else{
        // clear profile
        ui.clearProfile();
    }
});