let mdFile = 'intellij/intellij-shortcuts.md';

function change(mdfile) {
  mdFile = mdfile;
  loadMarkdown(mdfile);
  $('body').scrollTop(0);
  history.pushState(
    {
      page: mdfile,
    },
    mdfile,
    '#' + mdfile
  );
}

window.onpopstate = function (event) {
  loadStateContent(event.state);
};

function loadStateContent(state) {
  if (state) {
    loadMarkdown(state.page);
  }
}

function loadMarkdown(mdfile) {
  $.ajax(mdfile).done(success);
}

function success(data) {
  setTitle(data);
  setBody(data);
}

function setBody(data) {
  let html = marked(data);
  const folder = mdFile.substring(0, mdFile.indexOf('/') + 1);
  html = html.replace(/img src="images/g, 'img src="' + folder + 'images');
  $('#content').html(html);
}

function setTitle(data) {
  const start = data.indexOf('# ');
  const end = data.indexOf('\n');
  if (start > -1) {
    let title = data.substring(start + 2, end);
    title = title.replaceAll();
    $('title').html(title);
  }
}

$(function () {
  const mdfile = getMdFile();
  change(mdfile);
});

function getMdFile() {
  const href = location.href;
  if (href.indexOf('#') > -1) {
    const hash = href.substring(href.indexOf('#') + 1);
    mdFile = hash;
  }
  return mdFile;
}
