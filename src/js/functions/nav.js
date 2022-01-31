export const navActiveLink = () => {
  const items = document.querySelectorAll('.nav__item');
  const indicator = document.querySelector('.indicator');

  function activ (){
    items.forEach((it) => {
      it.classList.remove('active');
      this.classList.add('active');
    })
  }

  items.forEach((item) => {
    item.addEventListener('click',  activ)
  })


  console.log('nan');
}
