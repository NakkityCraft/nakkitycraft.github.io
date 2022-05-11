var $$ = mdui.$;
$('#beta').on('click', function () {
  mdui.snackbar({
    message: 'Sorry, This page is locked, you need a cookie.',
    position: 'bottom'
  });
});
