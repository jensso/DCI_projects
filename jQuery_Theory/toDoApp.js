$().ready(ev=> {
    // $(`form`).submit(ev=> {
    //   ev.preventDefault();
    //   let value = $(`input`).val();
    //   let textArea = document.createElement(`P`);
    //   textArea.innerHTML = `${value} <button>X</button>`;
    //   $(`section`).append(textArea);
    //   $(`input`).val(``);
    //
    //   $(`p> button`).click(ev=> {
    //     $(ev.currentTarget).parent().remove();
    //   })
    // })
    $(`form`).submit(ev=> {
      ev.preventDefault();
      let value = $(`input`).val();
      let taskBar = document.createElement(`P`);
      let close = document.createElement(`BUTTON`);
      close.innerText = `X`;
      $(`section`).append(taskBar);
      $(taskBar).append(value).append(close);
      $(`input`).val(``);

      $(close).click(ev=> {
        $(taskBar).remove();
    })
  })
})
