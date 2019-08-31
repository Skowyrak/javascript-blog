//document.getElementById('test-button').addEventListener('click', function(){
//  const links = document.querySelectorAll('.titles a');
//  console.log('links:', links);
//})
'use strict';

const titleClickHandler = function(event) {
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  event.preventDefault();
  const clickedElement = this;
  clickedElement.classList.add('active');
  console.log('Link was clicked!');

  /* [IN PROGRESS] add class 'active' to the clicked link */

  console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post.active');
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log('Link was clicked!');
  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  targetArticle.classList.add('active');
  /* add class 'active' to the correct article */
};

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags-list',
  optArticleAuthorSelector= '.post-author';

 function generateTitleLinks(customSelector = '') {
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  /* for each article */
  let html = '';
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  for(let article of articles){
    /* get the article id */
    const articleId = article.getAttribute('id');
    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /* get the title from the title element */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    /* create HTML of the link */
    html = html + linkHTML;
  }
  /* insert link into titleList */
  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  console.log(links);
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for(let article of articles){
  /* find tags wrapper */
    const titleList = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    titleList.innerHTML = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray) {
      /* generate HTML of the link */
      articleTagsArray.insertAdjacentHTML('afterbegin', html);
      /* add generated code to html variable */
      html = html + linkHTML;
    }
  }
}
  /* END LOOP: for each tag */

/* insert HTML of all the links into the tags wrapper */

/* END LOOP: for every article: */

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
const href = this.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
 const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
for (let activeTagLink of activeTagLinks) {
  /* remove class active */
activeTagLink.classList.remove('active');
  /* END LOOP: for each active tag link */
}
  /* find all tag links with "href" attribute equal to the "href" constant */
const hrefTagLinks = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
for (let hrefTagLink of hrefTagLinks) {
  /* add class active */
hrefTagLink.classList.add('active');
  /* END LOOP: for each found tag link */
}
  /* execute function "generateTitleLinks" with article selector as argument */
generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
const links = document.querySelectorAll(opt.articleTagsSelector);
  /* START LOOP: for each link */
for (let link of links) {
  /* add tagClickHandler as event listener for that link */
link.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
  }
}
addClickListenersToTags();

function generateAuthors(){
/* for each article */
const articles = document.querySelectorAll(optArticleSelector);
for(let article of articles){
  const authorsList = article.querySelector(optArticleAuthorSelector);
  let html = '';
  const articleAuthor = article.getAttribute('data-author');
const linkHTML = '<span>by</span>' + '<a href="author-' + articleAuthor + '">' + articleAuthor + '</a>';
/* create HTML of the link */
const rightColumn = '<a href=author-' + articleAuthor + '"> + articleAuthor + '</a>';
html = html + linkHTML;
}
/* insert link into titleList */
authorsList.innerHTML = html;

const links = document.querySelectorAll('optArticleAuthorSelector');
console.log(links);
const allAuthors = {authors: []};
for(let link of links){
  allAuthorsHTML = '<li><a href="#">' + link + '(' + allAuthors[author] +')</a></li>';
link.addEventListener('click', titleClickHandler);
}
};
links.innerHTML = right.links(allAuthors);
}
generateAuthors()

function authorClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
const href = this.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
 const author = href.replace('#author-', '');
  /* find all tag links with class active */
const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');
  /* START LOOP: for each active tag link */
for (let activeAuthorLink of activeTagLinks) {
  /* remove class active */
activeAuthorLink.classList.remove('active');
  /* END LOOP: for each active tag link */
}
  /* find all tag links with "href" attribute equal to the "href" constant */
const authorLinks = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
for (let authorLink of authorLinks) {
  /* add class active */
authorLink.classList.add('active');
  /* END LOOP: for each found tag link */
}
  /* execute function "generateTitleLinks" with article selector as argument */
generateTitleLinks('[data-author="' + author + '"]');
}

function addClickListenersToAuthors(){
  const linkAuthors = document.querySelectorAll('.post-author a, .authors a');

  for(let linkAuthor of linkAuthors){
    linkAuthor.addEventListener('click', authorClickHandler);
  }
}

addClickListenersToAuthors();
