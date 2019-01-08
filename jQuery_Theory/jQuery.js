
$().ready(ev=> {

  $(`button:nth-of-type(1)`).click(ev=> {
    $(`p`).hide();
    $(`p:nth-of-type(1)`).show(1500);
  })
  $(`button:nth-of-type(2)`).click(ev=> {
    $(`p`).hide();
    $(`p:nth-of-type(2)`).show(2000);
  })
  $(`button:nth-of-type(3)`).click(ev=> {
    $(`p`).hide();
    $(`p:nth-of-type(3)`).show(2500);
  })

$(`div> ul> li`).click(ev=> {
  let keyId = ev.target.getAttribute(`key`);
  $(`img`).hide();
  $(`img[key=${keyId}]`).fadeIn(3000);
})
$(`img`).click(ev=> {
  $(`img`).fadeOut(1500);
})

$(`#DoubleAgent`).on( {
  mouseenter : ev=> {
    $(ev.currentTarget).text(`welcome! Stay here`);
  },
  mouseleave : ev=> {
    $(ev.currentTarget).text(`Don't leave me this way`);
  },
  click: ev=> {
    $(ev.currentTarget).text(`some text again`);
  }
})

$(`h2`).click(ev=> {
  // $(`span`).removeClass(`visible`);
  // $(ev.currentTarget).next().addClass(`visible`);
  $(`span`).slideUp(1500);
  $(ev.currentTarget).next().slideDown(1500);
})

$(`h6`).click(ev=> {
  $(`h6`).nextAll().hide();
  $(ev.target).nextAll().toggle();
  $(`li.aktiv`).removeClass(`aktiv`);
  $(`li.aktiv`).hide();
  $(`li`).addClass(`aktiv`);

  $(`nav`).mouseleave(ev=> {
  $(`nav> ul> li`).hide();
})
})


$(`#forest`).click(ev=> {
  $(ev.target).animate( {
    right: `-20%`,
    width: `100%`,
    height: `20vw`,
  },{duration: 2000})
    let  textArea = document.createElement(`H5`);
    textArea.innerText = `ein Wald:`;
        // methods to put Elements to the HTML:
    // $(`#forest`).after(textArea);
    $(`#forest`).append(textArea);
    // $(`#forest`).prepend(textArea);
    // $(`#forest`).before(textArea);
    $(`h5`).css({
      color: `white`,
      fontSize: `4vw`,
      textShadow: `0.1vw 0.2vw yellow`});
      $(ev.target).unbind(`click`);
})

}) //end of .ready
