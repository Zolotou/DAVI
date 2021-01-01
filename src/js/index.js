//burger
const btn = document.querySelector('.header__burger');
const menu = document.querySelector('.burger-menu')
btn.addEventListener('click', function () {
  btn.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('lock')
})

//modal
let linkModal=document.querySelectorAll("*[data-modal-btn]")
for(let i=0;i<linkModal.length;i++){
    linkModal[i].addEventListener('click', function(){
        let name=linkModal[i].getAttribute('data-modal-btn');
        let modal=document.querySelector("[data-modal-window='"+name+"']")
        modal.style.display="block"
        document.body.classList.add('lock')
        let closeModal=modal.querySelector('.close_modal_window')
        closeModal.addEventListener('click', function(){
            modal.style.display="none"
            document.body.classList.remove('lock')
        })
    })
}
window.onclick=function(e){
    if(e.target.hasAttribute('data-modal-window')){
        let modals=document.querySelectorAll("*[data-modal-window]")
        for(let i=0;i<modals.length;i++)
       modals[i].style.display="none";
       document.body.classList.remove('lock')
    }
}

const tegs=[
    {
        teg: " html  " ,
        descriptio: ' Указывает программе просмотра страниц, что это HTML документ',
    },
    {
        teg: "head",
        descriptio: 'Определяет место, где помещается различная информация не отображаемая в теле документа. ',
    },
     {
        teg: "body",
        descriptio: 'Определяет видимую часть документа',
    },
     {
        teg: "title",
        descriptio: 'Помещает название документа в оглавление программы просмотра страниц',
    },
     {
        teg: 'pre',
        descriptio: 'Обрамляет предварительно отформатированный текст. (как есть!) ',
    },
     {
        teg: 'h1',
        descriptio: 'Создает САМЫЙ БОЛЬШОЙ заголовок (как отдельный абзац)',
    },
     {
        teg: 'h6',
        descriptio: 'Создает САМЫЙ МАЛЕНЬКИЙ заголовок',
    },
     {
        teg: 'b',
        descriptio: 'Создает жирный текст',
    },
     {
        teg: 'i',
        descriptio: 'Создает наклонный текст',
    },
     {
        teg: 'em',
        descriptio: 'Используется для выделения из текста слова (наклонный или жирный текст)',
    },
     {
        teg: 'a <br> href="URL"',
        descriptio: 'Создает гиперссылку на другие документы или часть текущего документа.',
    },
     {
        teg: 'a <br> href="URL" ',
        descriptio: 'Создает гиперссылку на рисунок, находящийся по адресу imgURL.',
    },
     {
        teg: 'a <br> href="mailto:EMAIL" ',
        descriptio: 'Создает гиперссылку вызова почтовой программы для написания письма по указанному адресу.',
    },
     {
        teg: 'p',
        descriptio: 'Создает новый параграф',
    },
     {
        teg: 'br',
        descriptio: 'Вставляет перевод   строки.',
    },
     {
        teg: 'blockquote',
        descriptio: 'Создает отступы с обеих сторон текста.',
    },
     {
        teg: 'ol',
        descriptio: 'Создает нумерованный список',
    },
     {
        teg: 'li',
        descriptio: 'Определяет каждый элемент списка и присваивает номер',
    },
     {
        teg: 'ul',
        descriptio: 'Создает ненумерованный список',
    },
     {
        teg: 'hr',
        descriptio: 'Добавляет в HTML документ горизонтальную линию.',
    },
     {
        teg: 'table',
        descriptio: 'Создает таблицу.',
    },
     {
        teg: 'tr',
        descriptio: 'Определяет строку в таблице.',
    },
     {
        teg: 'td',
        descriptio: 'Определяет отдельную ячейку в таблице.',
    },
     {
        teg: 'th',
        descriptio: 'Определяет заголовок таблицы (нормальная ячейка с отцентрованным жирным текстом)',
    },
     {
        teg: 'form',
        descriptio: 'Создает формы',
    },
     {
        teg: 'option',
        descriptio: 'Указывает каждый отдельный элемент меню',
    },
     {
        teg: 'textarea<br> name="NAME" <br>cols=40 <br>rows=8',
        descriptio: 'Создает окно для ввода текста. Columns указывает ширину окна; rows указывает его высоту.',
    },
     {
        teg: 'input <br> type="checkbox" <br> name="NAME"',
        descriptio: '	Создает checkbox. За тегом следует текст.',
    },
     {
        teg: 'input <br> type="radio" <br> name="NAME" <br> value="x" ',
        descriptio: 'Создает radio кнопку. За тегом следует текст.',
    },
     {
        teg: 'input <br> type=text <br> name="foo" <br> size=20 ',
        descriptio: 'Создает строку для ввода текста. Параметром Size указывается длина в символах.',
    },
     {
        teg: 'input <br> type="submit" <br> value="NAME"',
        descriptio: 'Создает кнопку "Принять"',
    },
     {
        teg: 'input <br> type="image" <br>  border=0 <br>  name="NAME" <br> src="name.gif"',
        descriptio: 'Создает кнопку "Принять" - для этого используется изображение',
    },
     {
        teg: ' input <br> type="reset"',
        descriptio: 'Создает кнопку "Отмена"',
    },


]


function getHTMLtegs(tegs){
let parent=document.querySelector('#parent')
    for (let key of tegs){
        let divMain=document.createElement('div')
        divMain.classList.add('divMain')
        let div=document.createElement('div')
div.classList.add('tegs')
        div.innerHTML=  key.teg
        let p=document.createElement('p')
        p.classList.add('descriptio')
        p.innerHTML=key.descriptio
        divMain.appendChild(div)
        divMain.appendChild(p)
            console.log(key.teg)
        parent.appendChild(divMain)
     }
}
getHTMLtegs(tegs)

// const divM=document.querySelectorAll('.divMain')
// const tegCont=document.querySelectorAll('tegs')
// const desrCont=document.querySelectorAll('descriptio')

// parent.onmouseover = function(event) {
//     let target = event.target;
//     target.style.background = 'pink';
//     desrCont.className=="visible";

//     tegCont.className=="invisible";


//   };
//   parent.onmouseout = function(event) {
//     let target = event.target;
//     target.style.background = '';
//     target .className=='visible';
//     tegCont.className==='invisible';
//   };