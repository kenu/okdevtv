function init() {
  $('#btn_github').on('click', function (e) {
    e.preventDefault()
    location.href = '/login/github'
  })
  $('#form_login').on('submit', function (e) {
    e.preventDefault()
    const email = $('#email').val()
    const password = $('#password').val()
    if (password.length < 8) {
      $('#msg').html('비밀번호는 8자리 이상으로 해주세요.')
      return
    }
    $.post('/user/login', {
      email,
      password,
    })
      .done(function (res) {
        if (res.status === 'ok') {
          $('#msg').html('로그인이 완료되었습니다.')
          setTimeout(function () {
            document.location.href = '/'
          }, 1000)
        } else {
          if (res.msg.code === 'ECONNREFUSED') {
            $('#msg').html('죄송합니다. 서버 장애 상태입니다.')
          } else {
            $('#msg').html(res.msg)
          }
        }
      })
      .fail(function (e) {
        console.log(e)
      })
    $('#msg').html('submitted')
  })
}
$(init)
