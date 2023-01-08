
import { posts } from '/data.js'


//event listener that listens to click on the whole page, but gets the like buttons to work
document.addEventListener('click', function(e){
    if(e.target.dataset.like){
        increasedLike(e.target.dataset.like)
    }
})

//event listener that listens to click on the whole page, but gets the images to work on doubleclick
document.addEventListener('dblclick', function(e){
    if(e.target.dataset.doubleLike){
        increasedDoulbleClickLike(e.target.dataset.doubleLike)
    }
})


//function that increases and decreases the like button

function increasedLike(postId){
    const targetPostObj = posts.filter(function(post){
        return post.uuid === postId
    })[0]

    if(targetPostObj.isLiked){
        targetPostObj.likes--
    } else {
        targetPostObj.likes++
    }
    targetPostObj.isLiked = !targetPostObj.isLiked
    render()
}

//function that increases and decreases the likes after double clicking on the images
function increasedDoulbleClickLike(postId){
    const targetPostObj = posts.filter(function(post){
        return post.uuid === postId
    })[0]

    if(targetPostObj.isLiked){
        targetPostObj.likes--
    } else {
        targetPostObj.likes++
    }
    targetPostObj.isLiked = !targetPostObj.isLiked
    render()
}



//Get the HTML boiler plate

function getFeedHtml() {


    let feedHtml = ``

    posts.forEach(function(post){

        let likeIcon = ''

        if (post.isLiked) {
            likeIcon = 'liked'
        }


        feedHtml += `
            <div class="container">
                <div class="username">
                    <img class="round-img" src="${post.avatar}" alt="avatar for Vangogh">
                    <div class="username-text">
                        <h3 class="bold-text">${post.name}</h3>>
                        <p>${post.location}</p>
                    </div>
                </div>
                <div>
                    <img class="timeline-post" id="img-post" data-double-like="${post.uuid}" src="${post.post}" alt="portrait of Vangogh">
                </div>
                <div class="section-likes">
                    <i class="fa-solid fa-heart icon icon-like ${likeIcon}" id="likes" data-like="${post.uuid}"></i>
                    <i class="fa-regular fa-comment icon"></i>
                    <i class="fa-regular fa-paper-plane icon"></i>
                    
                    <p id="likes" class="bold-text" id="likes-el">${post.likes} likes</p>
                    <p><span class="bold-text">${post.username}</span> ${post.comment}</p>
                </div>
            </div>
            `

    })      
    return feedHtml
}



//function that renders the HTML boiler plate

function render(){
    document.getElementById("post-container").innerHTML = getFeedHtml()
}

render()











