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
        teg: '<html></html>',
        descriptio: ' Указывает программе просмотра страниц, что это HTML документ',
    },
    {
        teg: '<head></head> ',
        descriptio: 'Определяет место, где помещается различная информация не отображаемая в теле документа. Здесь располагается тег названия документа и теги для поисковых машин.',
    },
     {
        teg: ' <body></body>',
        descriptio: 'Определяет видимую часть документа',
    },
     {
        teg: '<title></title>',
        descriptio: 'Помещает название документа в оглавление программы просмотра страниц',
    },
     {
        teg: '<pre></pre> ',
        descriptio: 'Обрамляет предварительно отформатированный текст. (как есть!) ',
    },
     {
        teg: '<h1></h1> ',
        descriptio: 'Создает САМЫЙ БОЛЬШОЙ заголовок (как отдельный абзац)',
    },
     {
        teg: '<h6></h6> ',
        descriptio: 'Создает САМЫЙ МАЛЕНЬКИЙ заголовок',
    },
     {
        teg: '<b></b> ',
        descriptio: 'Создает жирный текст',
    },
     {
        teg: '<i></i> ',
        descriptio: 'Создает наклонный текст',
    },
     {
        teg: '<em></em> ',
        descriptio: 'Используется для выделения из текста слова (наклонный или жирный текст)',
    },
     {
        teg: ' <a href="URL">ТЕКСТ</a>',
        descriptio: 'Создает гиперссылку на другие документы или часть текущего документа. Здесь URL адрес ссылки, ТЕКСТ - текст ссылки.',
    },
     {
        teg: '<a href="URL">< img src="imgURL" > </a> ',
        descriptio: 'Создает гиперссылку на рисунок, находящийся по адресу imgURL.',
    },
     {
        teg: '<a href="mailto:EMAIL"></a> ',
        descriptio: 'Создает гиперссылку вызова почтовой программы для написания письма по указанному адресу.',
    },
     {
        teg: '<p> ',
        descriptio: 'Создает новый параграф',
    },
     {
        teg: ' <br>',
        descriptio: 'Вставляет перевод   строки.',
    },
     {
        teg: '<blockquote>   </blockquote>	   ',
        descriptio: 'Создает отступы с обеих сторон текста.',
    },
     {
        teg: '<ol></ol> ',
        descriptio: 'Создает нумерованный список',
    },
     {
        teg: ' <li>',
        descriptio: 'Определяет каждый элемент списка и присваивает номер',
    },
     {
        teg: '<ul></ul> ',
        descriptio: 'Создает ненумерованный список',
    },
     {
        teg: '<hr>	',
        descriptio: 'Добавляет в HTML документ горизонтальную линию.',
    },
     {
        teg: '<table></table> ',
        descriptio: 'Создает таблицу.',
    },
     {
        teg: '<tr></tr> ',
        descriptio: 'Определяет строку в таблице.',
    },
     {
        teg: ' <td></td>',
        descriptio: 'Определяет отдельную ячейку в таблице.',
    },
     {
        teg: '<th></th> ',
        descriptio: 'Определяет заголовок таблицы (нормальная ячейка с отцентрованным жирным текстом)',
    },
     {
        teg: '<form></form> ',
        descriptio: 'Создает формы',
    },
     {
        teg: ' <option>',
        descriptio: 'Указывает каждый отдельный элемент меню',
    },
     {
        teg: ' <textarea name="NAME" cols=40 rows=8></textarea>',
        descriptio: 'Создает окно для ввода текста. Columns указывает ширину окна; rows указывает его высоту.',
    },
     {
        teg: '<input type="checkbox" name="NAME">	',
        descriptio: '	Создает checkbox. За тегом следует текст.',
    },
     {
        teg: '<input type="radio" name="NAME" value="x" ',
        descriptio: 'Создает radio кнопку. За тегом следует текст.',
    },
     {
        teg: '<input type=text name="foo" size=20> ',
        descriptio: 'Создает строку для ввода текста. Параметром Size указывается длина в символах.',
    },
     {
        teg: '<input type="submit" value="NAME">	 ',
        descriptio: 'Создает кнопку "Принять"',
    },
     {
        teg: '<input type="image" border=0 name="NAME" src="name.gif">	       ',
        descriptio: 'Создает кнопку "Принять" - для этого используется изображение',
    },
     {
        teg: ' <input type="reset">',
        descriptio: 'Создает кнопку "Отмена"',
    },
     {
        teg: ' ',
        descriptio: '',
    },
     {
        teg: ' ',
        descriptio: '',
    },
     {
        teg: ' ',
        descriptio: '',
    },
     {
        teg: ' ',
        descriptio: '',
    },
     {
        teg: ' ',
        descriptio: '',
    },
     {
        teg: ' ',
        descriptio: '',
    },
     {
        teg: ' ',
        descriptio: '',
    },
     {
        teg: ' ',
        descriptio: '',
    },
     {
        teg: ' ',
        descriptio: '',
    },
     {
        teg: ' ',
        descriptio: '',
    },
     {
        teg: ' ',
        descriptio: '',
    },

]