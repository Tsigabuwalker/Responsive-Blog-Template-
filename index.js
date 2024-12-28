function toggleComments(commentId) {
    const commentsDiv = document.getElementById(commentId);
    if (commentsDiv.style.display === "none") {
        commentsDiv.style.display = "block";
    } else {
        commentsDiv.style.display = "none";
    }
}

function addComment(postId) {
    const commentInput = document.getElementById(`comment-input-${postId}`);
    const commentsList = document.getElementById(`comments-list-${postId}`);

    if (commentInput.value.trim() !== "") {
        const newComment = document.createElement("li");
        newComment.textContent = commentInput.value;
        commentsList.appendChild(newComment);
        commentInput.value = ""; // Clear the input field
    } else {
        alert("Please enter a comment.");
    }
}