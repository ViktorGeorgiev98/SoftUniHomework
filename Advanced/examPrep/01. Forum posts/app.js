window.addEventListener("load", solve);

// function solve() {
//   // Get the necessary elements
// let publishBtn = document.getElementById('publish-btn');
// let reviewList = document.getElementById('review-list');
// let publishedList = document.getElementById('published-list');
// let clearBtn = document.getElementById('clear-btn');

// // Add event listener to the Publish button
// publishBtn.addEventListener('click', function(event) {
//   event.preventDefault();
  
//   // Get the input values
//   let title = document.getElementById('post-title').value;
//   let category = document.getElementById('post-category').value;
//   let content = document.getElementById('post-content').value;
  
//   // Check if all fields are non-empty
//   if (title !== '' && category !== '' && content !== '') {
//     // Create the post elements
//     let rpost = createElement('li', '', 'rpost');
//     let article = createElement('article');
//     article.appendChild(createElement('h4', title));
//     article.appendChild(createElement('p', `Category: ${category}`));
//     article.appendChild(createElement('p', `Content: ${content}`));
//     rpost.appendChild(article);
    
//     let editBtn = createElement('button', 'Edit', 'action-btn edit');
//     let approveBtn = createElement('button', 'Approve', 'action-btn approve');
//     rpost.appendChild(editBtn);
//     rpost.appendChild(approveBtn);
    
//     // Add event listener to the Edit button
//     editBtn.addEventListener('click', function() {
//       rpost.remove();
//       document.getElementById('post-title').value = title;
//       document.getElementById('post-category').value = category;
//       document.getElementById('post-content').value = content;
//     });
    
//     // Add event listener to the Approve button
//     approveBtn.addEventListener('click', function() {
//       editBtn.remove();
//       approveBtn.remove();
//       publishedList.appendChild(rpost);
//     });
    
//     // Add the post to the review list
//     reviewList.appendChild(rpost);
    
//     // Clear the input fields
//     document.getElementById('post-title').value = '';
//     document.getElementById('post-category').value = '';
//     document.getElementById('post-content').value = '';
//   }
// });

// // Add event listener to the Clear button
// clearBtn.addEventListener('click', function() {
//   // Remove all posts from the published list
//   publishedList.innerHTML = '';
// });

// // Helper function to create HTML elements with optional text content and CSS classes
// function createElement(type, text, cssClass) {
//   let element = document.createElement(type);
//   if (text) {
//     element.textContent = text;
//   }
//   if (cssClass) {
//     element.className = cssClass;
//   }
//   return element;
// }

// }


function solve() {
  // 1. Get elements
  const postTitle = document.getElementById('post-title');
  const postCategory = document.getElementById('post-category');
  const postContent = document.getElementById('post-content');
  const reviewList = document.getElementById('review-list');
  let publishButton = document.getElementById('publish-btn');
  const clearButton = document.getElementById('clear-btn');
  // 2. implement publish logic
  publishButton.addEventListener('click', publish);
  function publish(e) {
    const postTitleValue = postTitle.value;
    const postCategoryValue = postCategory.value;
    const postContentValue = postContent.value;
    if (postTitleValue === '' || postCategoryValue === '' || postContentValue === '') {
      return;
    }

    const liElement = createElementToPublish(postTitleValue, postCategoryValue, postContentValue);
    reviewList.appendChild(liElement);
    postTitle.value = '';
    postCategory.value = '';
    postContent.value = '';
  }
  // 3. Edit information for posts
  function editContent(e) {
    let titleH4 = document.querySelector('h4');
    let titleValue = titleH4.textContent;
    let paragraphs = document.querySelectorAll('p');
    // let paragraphArr = Array.from(paragraphs);
    // console.log(paragraphArr);
    let categoryValue = paragraphs[0].textContent;
    let contentValue = paragraphs[1].textContent;
    const liElement = e.target.parentElement;
    liElement.remove();
    postTitle.value = titleValue;
    postCategory.value = categoryValue.value;
    postContent.value = contentValue.value;

  }
  // 4. Approve posts
  // 5. Clear posts
  // 6. helper functions
  function createElementToPublish(title, category, content) {
    const li = document.createElement('li');
    li.classList.add('rpost');
    const h4 = document.createElement('h4');
    h4.textContent = title;
    const categoryParagraph = document.createElement('p');
    categoryParagraph.textContent = `Category: ${category}`;
    const contentParagrpah = document.createElement('p');
    contentParagrpah.textContent = `Content: ${content}`;
    const article = document.createElement('article');
    const approveButton = document.createElement('button');
    approveButton.classList.add('action-btn', 'approve');
    approveButton.textContent = 'Approve';
    const editButton = document.createElement('button');
    editButton.classList.add('action-btn', 'edit');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', editContent);
    article.appendChild(h4);
    article.appendChild(categoryParagraph);
    article.appendChild(contentParagrpah);
    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(approveButton);
    return li;
  }

}