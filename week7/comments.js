class CommentModel {
  //Gets List From Local Storage
    constructor(type) {
    this.type = type;
    this.comments = readFromLS(this.type) || [];
  }

  getComments(list = null) {
    if (list === null) {
      return this.comments;
    } else {
      return this.comments.filter(com => com.name === list);
    }
  }

  addComment(postName, comment) {
    const newComment = {
      name: postName,
      comment: comment,
      date: new Date()
    };
    this.comments.push(newComment);
    writeToLS(this.type, this.comments);
  }
}

function writeToLS(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data));
}

function readFromLS(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

//Create HTML For Comment Section ON Screen
const html = `<div class="addComment">
<h2 class="special">Add A Comment</h2>
<input type="text" id="commentEntry" />
<button id="commentSubmit">Comment</button>
</div>
<h2 class="comment">Comments</h2>
<ul class="comments"></ul>`;
function renderCommentList(element, comments) {
  element.innerHTML = '';
  comments.forEach(com => {
    let item = document.createElement('li');
    item.innerHTML = `
            <b>${com.name}:</b> ${com.comment}
      `;

    element.appendChild(item);
  });
}


//Gets the list of comments from the data source and outputs to the screen
class Comments {
  constructor(type, commentElementId) {
    this.type = type;
    this.commentElementId = commentElementId;
    this.model = new CommentModel(this.type);
  }

  addSubmitListener(postName) {
    document.getElementById('commentSubmit').onclick = () => {
      if (document.getElementById('commentEntry').value == ''){
          return false;
      }
        this.model.addComment(
        postName,
        document.getElementById('commentEntry').value
      );
      document.getElementById('commentEntry').value = '';
      this.showCommentList(postName);
    };
  }
  showCommentList(list = null) {
    try {
      const parent = document.getElementById(this.commentElementId);
      if (!parent) throw new Error('comment parent not found');
      if (parent.innerHTML === '') {
        parent.innerHTML = html;
      }
      if (list !== null) {
        document.querySelector('.addComment').style.display = 'block';
        this.addSubmitListener(list);
      } else {
        document.querySelector('.addComment').style.display = 'none';
      }
      let comments = this.model.getComments(list);
      if (comments === null) {
        comments = [];
      }
      renderCommentList(parent.lastChild, comments);
    } catch (error) {
      console.log(error);
    }
  }
}

export default Comments;